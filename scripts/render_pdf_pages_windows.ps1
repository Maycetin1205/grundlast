param(
  [Parameter(Mandatory=$true)][string]$InputRoot,
  [Parameter(Mandatory=$true)][string]$OutputRoot
)

$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Runtime.WindowsRuntime
[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.Streams.DataReader, Windows.Storage.Streams, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.Streams.InMemoryRandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime] | Out-Null
[Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime] | Out-Null

function Await-Operation($operation, [Type]$resultType) {
  $method = [System.WindowsRuntimeSystemExtensions].GetMethods() |
    Where-Object {
      $_.Name -eq "AsTask" -and
      $_.IsGenericMethodDefinition -and
      $_.GetParameters().Count -eq 1 -and
      $_.ToString() -like "*IAsyncOperation*"
    } |
    Select-Object -First 1

  if ($null -eq $method) {
    throw "Cannot find generic AsTask(IAsyncOperation<TResult>) overload."
  }

  $task = $method.MakeGenericMethod($resultType).Invoke($null, @($operation))
  $task.Wait()
  return $task.Result
}

function Await-Action($operation) {
  $method = [System.WindowsRuntimeSystemExtensions].GetMethods() |
    Where-Object {
      $_.Name -eq "AsTask" -and
      -not $_.IsGenericMethodDefinition -and
      $_.GetParameters().Count -eq 1 -and
      $_.ToString() -like "*IAsyncAction*"
    } |
    Select-Object -First 1

  if ($null -eq $method) {
    throw "Cannot find AsTask(IAsyncAction) overload."
  }

  $task = $method.Invoke($null, @($operation))
  $task.Wait()
}

New-Item -ItemType Directory -Force -Path $OutputRoot | Out-Null

$pdfs = Get-ChildItem -LiteralPath $InputRoot -Filter "*.pdf" -File | Sort-Object Name
foreach ($pdf in $pdfs) {
  $pdfOutput = Join-Path $OutputRoot $pdf.BaseName
  New-Item -ItemType Directory -Force -Path $pdfOutput | Out-Null

  $file = Await-Operation -operation ([Windows.Storage.StorageFile]::GetFileFromPathAsync($pdf.FullName)) -resultType ([Windows.Storage.StorageFile])
  $document = Await-Operation -operation ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($file)) -resultType ([Windows.Data.Pdf.PdfDocument])

  for ($pageIndex = 0; $pageIndex -lt $document.PageCount; $pageIndex++) {
    $target = Join-Path $pdfOutput ("page-{0:D3}.png" -f ($pageIndex + 1))
    if ((Test-Path -LiteralPath $target) -and ((Get-Item -LiteralPath $target).Length -gt 0)) {
      continue
    }

    $page = $document.GetPage([uint32]$pageIndex)
    $stream = [Windows.Storage.Streams.InMemoryRandomAccessStream]::new()
    try {
      Await-Action -operation ($page.RenderToStreamAsync($stream))
      $reader = [Windows.Storage.Streams.DataReader]::new($stream.GetInputStreamAt(0))
      try {
        [void](Await-Operation -operation ($reader.LoadAsync([uint32]$stream.Size)) -resultType ([uint32]))
        $bytes = New-Object byte[] ([int]$stream.Size)
        $reader.ReadBytes($bytes)
        [System.IO.File]::WriteAllBytes($target, $bytes)
      } finally {
        $reader.Dispose()
      }
    } finally {
      $stream.Dispose()
      $page.Dispose()
    }
  }

  Write-Host "Rendered $($pdf.Name): $($document.PageCount) pages"
}
