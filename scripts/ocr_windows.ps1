param(
  [Parameter(Mandatory=$true)][string]$InputRoot,
  [Parameter(Mandatory=$true)][string]$OutputRoot
)

$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Runtime.WindowsRuntime
[Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType = WindowsRuntime] | Out-Null
[Windows.Media.Ocr.OcrResult, Windows.Foundation, ContentType = WindowsRuntime] | Out-Null
[Windows.Globalization.Language, Windows.Foundation, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.Streams.IRandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics, ContentType = WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.SoftwareBitmap, Windows.Graphics, ContentType = WindowsRuntime] | Out-Null

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

$language = [Windows.Globalization.Language]::new("de-DE")
$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage($language)
if ($null -eq $engine) {
  throw "Windows OCR engine for de-DE is not available."
}

New-Item -ItemType Directory -Force -Path $OutputRoot | Out-Null

$images = Get-ChildItem -LiteralPath $InputRoot -Recurse -Filter "*.png" | Sort-Object FullName
$inputRootFull = [System.IO.Path]::GetFullPath($InputRoot).TrimEnd([System.IO.Path]::DirectorySeparatorChar, [System.IO.Path]::AltDirectorySeparatorChar)
foreach ($image in $images) {
  $imageFull = [System.IO.Path]::GetFullPath($image.FullName)
  $relative = $imageFull.Substring($inputRootFull.Length).TrimStart([System.IO.Path]::DirectorySeparatorChar, [System.IO.Path]::AltDirectorySeparatorChar)
  $outFile = Join-Path $OutputRoot ([System.IO.Path]::ChangeExtension($relative, ".txt"))
  $outDir = Split-Path -Parent $outFile
  New-Item -ItemType Directory -Force -Path $outDir | Out-Null

  if ((Test-Path -LiteralPath $outFile) -and ((Get-Item -LiteralPath $outFile).Length -gt 0)) {
    continue
  }

  $file = Await-Operation -operation ([Windows.Storage.StorageFile]::GetFileFromPathAsync($image.FullName)) -resultType ([Windows.Storage.StorageFile])
  $stream = Await-Operation -operation ($file.OpenAsync([Windows.Storage.FileAccessMode]::Read)) -resultType ([Windows.Storage.Streams.IRandomAccessStream])
  try {
    $decoder = Await-Operation -operation ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)) -resultType ([Windows.Graphics.Imaging.BitmapDecoder])
    $bitmap = Await-Operation -operation ($decoder.GetSoftwareBitmapAsync()) -resultType ([Windows.Graphics.Imaging.SoftwareBitmap])
    $result = Await-Operation -operation ($engine.RecognizeAsync($bitmap)) -resultType ([Windows.Media.Ocr.OcrResult])
  } finally {
    $stream.Dispose()
  }

  $lines = New-Object System.Collections.Generic.List[string]
  foreach ($line in $result.Lines) {
    $words = @()
    foreach ($word in $line.Words) {
      $words += $word.Text
    }
    $lines.Add(($words -join " "))
  }
  [System.IO.File]::WriteAllText($outFile, ($lines -join [Environment]::NewLine), [System.Text.Encoding]::UTF8)
  Write-Host "OCR $relative"
}
