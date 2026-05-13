import { useMemo, useState } from 'react'
import { Calculator, RotateCcw } from 'lucide-react'
import { cn } from '../../lib/cn'

interface ParsedIp {
  octets: number[]
  numeric: number
}

interface SubnetResult {
  ip: ParsedIp
  prefix: number
  maskOctets: number[]
  network: number
  broadcast: number
  firstHost: number
  lastHost: number
  hostBits: number
  totalAddresses: number
  usableHostsText: string
  blockSize: number
  partialOctetIndex: number | null
  magicNumber: number | null
}

function parseIp(value: string): ParsedIp | null {
  const parts = value.trim().split('.')

  if (parts.length !== 4) {
    return null
  }

  const octets = parts.map((part) => {
    if (!/^\d+$/.test(part)) {
      return Number.NaN
    }

    return Number(part)
  })

  if (octets.some((octet) => !Number.isInteger(octet) || octet < 0 || octet > 255)) {
    return null
  }

  return {
    octets,
    numeric: octets.reduce((value, octet) => value * 256 + octet, 0),
  }
}

function prefixToMaskOctets(prefix: number) {
  return [0, 1, 2, 3].map((index) => {
    const remainingBits = prefix - index * 8

    if (remainingBits >= 8) {
      return 255
    }

    if (remainingBits <= 0) {
      return 0
    }

    return 256 - 2 ** (8 - remainingBits)
  })
}

function numberToIp(value: number) {
  return [
    Math.floor(value / 256 ** 3) % 256,
    Math.floor(value / 256 ** 2) % 256,
    Math.floor(value / 256) % 256,
    value % 256,
  ].join('.')
}

function formatNumber(value: number) {
  return new Intl.NumberFormat('de-DE').format(value)
}

function calculateSubnet(ipValue: string, prefixValue: number): SubnetResult | null {
  const ip = parseIp(ipValue)

  if (!ip || !Number.isInteger(prefixValue) || prefixValue < 0 || prefixValue > 32) {
    return null
  }

  const hostBits = 32 - prefixValue
  const totalAddresses = 2 ** hostBits
  const blockSize = totalAddresses
  const network = Math.floor(ip.numeric / blockSize) * blockSize
  const broadcast = network + blockSize - 1
  const maskOctets = prefixToMaskOctets(prefixValue)
  const partialOctetIndex = prefixValue % 8 === 0 ? null : Math.floor(prefixValue / 8)
  const magicNumber = partialOctetIndex === null ? null : 256 - maskOctets[partialOctetIndex]

  let firstHost = network + 1
  let lastHost = broadcast - 1
  let usableHostsText = formatNumber(Math.max(totalAddresses - 2, 0))

  if (prefixValue === 31) {
    firstHost = network
    lastHost = broadcast
    usableHostsText = '2 als Punkt-zu-Punkt-Sonderfall'
  }

  if (prefixValue === 32) {
    firstHost = network
    lastHost = network
    usableHostsText = '1 einzelne Adresse'
  }

  return {
    ip,
    prefix: prefixValue,
    maskOctets,
    network,
    broadcast,
    firstHost,
    lastHost,
    hostBits,
    totalAddresses,
    usableHostsText,
    blockSize,
    partialOctetIndex,
    magicNumber,
  }
}

export default function SubnettingRechner() {
  const [ipValue, setIpValue] = useState('192.168.10.130')
  const [prefixValue, setPrefixValue] = useState(26)

  const result = useMemo(
    () => calculateSubnet(ipValue, prefixValue),
    [ipValue, prefixValue],
  )

  function reset() {
    setIpValue('192.168.10.130')
    setPrefixValue(26)
  }

  const inputClassName = cn(
    'min-h-11 w-full border border-rule bg-paper px-3 py-2 font-mono text-base text-ink',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
  )

  return (
    <section className="my-10 border-y border-rule bg-paper-deep/45 py-6 text-ink">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-2 flex items-center gap-2 font-ui text-xs font-semibold uppercase tracking-widest text-accent">
            <Calculator className="h-4 w-4" aria-hidden="true" />
            Werkzeug
          </p>
          <h3 className="m-0 font-display text-2xl font-bold leading-snug text-ink">
            Subnetting-Rechner mit Rechenweg
          </h3>
        </div>
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-10 items-center justify-center gap-2 border border-rule bg-paper px-3 py-2 font-ui text-sm font-semibold text-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Zurücksetzen
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_10rem]">
        <label className="block font-ui text-sm font-semibold text-ink">
          IPv4-Adresse
          <input
            className={cn(inputClassName, 'mt-2')}
            value={ipValue}
            onChange={(event) => setIpValue(event.target.value)}
            inputMode="decimal"
            spellCheck={false}
            placeholder="192.168.10.130"
            aria-label="IPv4-Adresse"
          />
        </label>

        <label className="block font-ui text-sm font-semibold text-ink">
          Präfix
          <input
            className={cn(inputClassName, 'mt-2')}
            value={prefixValue}
            onChange={(event) => setPrefixValue(Number(event.target.value))}
            type="number"
            min={0}
            max={32}
            aria-label="CIDR-Präfix"
          />
        </label>
      </div>

      {!result ? (
        <p className="mt-5 border-l-4 border-warn bg-warn-bg px-4 py-3 font-body text-base leading-relaxed text-ink">
          Gib eine IPv4-Adresse mit vier Oktetten von 0 bis 255 und ein Präfix von 0
          bis 32 ein.
        </p>
      ) : (
        <>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <ResultItem label="Subnetzmaske" value={result.maskOctets.join('.')} />
            <ResultItem label="Netzadresse" value={`${numberToIp(result.network)}/${result.prefix}`} />
            <ResultItem label="Broadcast" value={numberToIp(result.broadcast)} />
            <ResultItem label="Nutzbare Hosts" value={result.usableHostsText} />
            <ResultItem label="Erster Host" value={numberToIp(result.firstHost)} />
            <ResultItem label="Letzter Host" value={numberToIp(result.lastHost)} />
            <ResultItem label="Host-Bits" value={String(result.hostBits)} />
            <ResultItem
              label="Magic Number"
              value={result.magicNumber === null ? 'nicht nötig' : String(result.magicNumber)}
            />
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="border border-rule bg-paper p-4">
              <h4 className="m-0 mb-3 font-ui text-sm font-semibold uppercase tracking-widest text-accent">
                Rechenweg
              </h4>
              <ol className="m-0 space-y-3 pl-5 font-body text-base leading-relaxed">
                <li>
                  <strong>Host-Bits:</strong> 32 - {result.prefix} = {result.hostBits}.
                </li>
                <li>
                  <strong>Adressen gesamt:</strong> 2^{result.hostBits} ={' '}
                  {formatNumber(result.totalAddresses)}.
                </li>
                <li>
                  <strong>Nutzbare Hosts:</strong>{' '}
                  {result.prefix < 31
                    ? `${formatNumber(result.totalAddresses)} - 2 = ${result.usableHostsText}`
                    : result.usableHostsText}
                  .
                </li>
                <li>
                  <strong>Netzadresse:</strong> Die Adresse liegt im Block, der bei{' '}
                  {numberToIp(result.network)} beginnt.
                </li>
                <li>
                  <strong>Broadcast:</strong> Der Block hat {formatNumber(result.blockSize)}{' '}
                  Adressen und endet bei {numberToIp(result.broadcast)}.
                </li>
              </ol>
            </div>

            <div className="border border-rule bg-paper p-4">
              <h4 className="m-0 mb-3 font-ui text-sm font-semibold uppercase tracking-widest text-accent">
                Warum genau?
              </h4>
              <p className="m-0 font-body text-base leading-relaxed">
                Die Subnetzmaske {result.maskOctets.join('.')} trennt die ersten{' '}
                {result.prefix} Bit als Netzanteil ab. Alles dahinter ist Hostanteil.
                Deshalb bestimmt der Hostanteil die Blockgröße und damit auch Netzadresse,
                Broadcast und Hostbereich.
              </p>
              {result.magicNumber !== null && (
                <p className="mb-0 mt-3 font-body text-base leading-relaxed">
                  Im interessanten Oktett {result.partialOctetIndex! + 1} steht der
                  Maskenwert {result.maskOctets[result.partialOctetIndex!]}. Die
                  Schrittweite ist 256 - {result.maskOctets[result.partialOctetIndex!]} ={' '}
                  {result.magicNumber}. Damit beginnen die Bereiche in diesem Oktett in
                  {result.magicNumber}er-Schritten.
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  )
}

interface ResultItemProps {
  label: string
  value: string
}

function ResultItem({ label, value }: ResultItemProps) {
  return (
    <div className="border border-rule bg-paper px-4 py-3">
      <p className="m-0 font-ui text-xs font-semibold uppercase tracking-widest text-muted">
        {label}
      </p>
      <p className="m-0 mt-2 break-words font-mono text-base font-semibold text-ink">
        {value}
      </p>
    </div>
  )
}
