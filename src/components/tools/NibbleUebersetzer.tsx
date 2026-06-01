import { useMemo, useState } from 'react'
import { RotateCcw } from 'lucide-react'
import { cn } from '../../lib/cn'
import {
  HEX_DIGITS,
  NIBBLE_TABLE,
  bitsToHexDigit,
  hexDigitToBits,
} from '../../lib/zahlensysteme/conversions'

interface NibbleUebersetzerProps {
  /** Startwert als Hex-String, z. B. "C0". */
  initialHex?: string
}

const NIBBLE_WEIGHTS = [8, 4, 2, 1]

export default function NibbleUebersetzer({ initialHex = 'C0' }: NibbleUebersetzerProps) {
  // Wir halten die Hex-Ziffern als Quelle der Wahrheit (jede Ziffer = 1 Nibble).
  const [digits, setDigits] = useState<string[]>(() => normalizeHex(initialHex))

  const nibbles = useMemo(() => digits.map((d) => hexDigitToBits(d).split('')), [digits])
  const binary = nibbles.map((n) => n.join('')).join(' ')
  const decimal = parseInt(digits.join(''), 16) || 0

  function toggleBit(nibbleIndex: number, bitIndex: number) {
    setDigits((prev) => {
      const next = [...prev]
      const bits = hexDigitToBits(next[nibbleIndex]).split('')
      bits[bitIndex] = bits[bitIndex] === '1' ? '0' : '1'
      next[nibbleIndex] = bitsToHexDigit(bits.join(''))
      return next
    })
  }

  function cycleHexDigit(nibbleIndex: number, delta: number) {
    setDigits((prev) => {
      const next = [...prev]
      const value = (HEX_DIGITS.indexOf(next[nibbleIndex]) + delta + 16) % 16
      next[nibbleIndex] = HEX_DIGITS[value]
      return next
    })
  }

  function addNibble() {
    setDigits((prev) => (prev.length >= 4 ? prev : [...prev, '0']))
  }

  function removeNibble() {
    setDigits((prev) => (prev.length <= 1 ? prev : prev.slice(0, -1)))
  }

  function reset() {
    setDigits(normalizeHex(initialHex))
  }

  return (
    <section className="my-8 border-y border-rule bg-paper-deep/35 py-5 text-ink">
      <div className="mb-5">
        <p className="mb-1 font-ui text-xs font-bold uppercase tracking-widest text-accent">
          Interaktiv · Nibble-Trick
        </p>
        <h3 className="m-0 font-display text-xl font-bold leading-snug text-ink">
          1 Hex-Ziffer = genau 4 Bit
        </h3>
        <p className="mt-1 font-body text-sm leading-relaxed text-muted">
          Klicke ein Bit, um es zu kippen, oder tippe auf ▲ ▼ über einer Hex-Ziffer. Beide Seiten
          bleiben immer synchron.
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="flex min-w-fit items-stretch gap-3">
          {digits.map((digit, nibbleIndex) => (
            <div key={nibbleIndex} className="flex flex-col items-center gap-2 border border-rule bg-paper p-3">
              {/* Hex-Ziffer mit Stepper */}
              <div className="flex items-center gap-1">
                <span className="font-mono text-2xl font-bold text-accent" aria-hidden="true">
                  {digit}
                </span>
              </div>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => cycleHexDigit(nibbleIndex, +1)}
                  aria-label={`Hex-Ziffer ${nibbleIndex + 1} erhöhen`}
                  className="min-h-8 border border-rule bg-paper-deep px-2 font-ui text-xs font-bold text-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  ▲
                </button>
                <button
                  type="button"
                  onClick={() => cycleHexDigit(nibbleIndex, -1)}
                  aria-label={`Hex-Ziffer ${nibbleIndex + 1} verringern`}
                  className="min-h-8 border border-rule bg-paper-deep px-2 font-ui text-xs font-bold text-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  ▼
                </button>
              </div>

              {/* 4 Bit */}
              <div className="mt-1 flex gap-1">
                {nibbles[nibbleIndex].map((bit, bitIndex) => {
                  const active = bit === '1'
                  return (
                    <button
                      key={bitIndex}
                      type="button"
                      onClick={() => toggleBit(nibbleIndex, bitIndex)}
                      aria-label={`${NIBBLE_WEIGHTS[bitIndex]}er-Bit von Hex-Ziffer ${digit} ${
                        active ? 'auf 0 setzen' : 'auf 1 setzen'
                      }`}
                      className={cn(
                        'flex h-9 w-8 items-center justify-center border font-mono text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                        active
                          ? 'border-accent bg-accent text-paper'
                          : 'border-rule bg-paper-deep text-muted hover:text-accent',
                      )}
                    >
                      {bit}
                    </button>
                  )
                })}
              </div>
              <div className="flex gap-1 font-mono text-[0.6rem] text-muted" aria-hidden="true">
                {NIBBLE_WEIGHTS.map((w) => (
                  <span key={w} className="w-8 text-center">
                    {w}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-col justify-center gap-1">
            <button
              type="button"
              onClick={addNibble}
              disabled={digits.length >= 4}
              aria-label="Hex-Ziffer hinzufügen"
              className="min-h-9 border border-rule bg-paper px-3 font-ui text-sm font-bold text-muted hover:text-accent disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              +
            </button>
            <button
              type="button"
              onClick={removeNibble}
              disabled={digits.length <= 1}
              aria-label="Hex-Ziffer entfernen"
              className="min-h-9 border border-rule bg-paper px-3 font-ui text-sm font-bold text-muted hover:text-accent disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              −
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3" aria-live="polite">
        <Readout label="Hexadezimal" value={`${digits.join('')}₁₆`} />
        <Readout label="Binär (Vierergruppen)" value={`${binary}₂`} />
        <Readout label="Dezimal" value={`${decimal}₁₀`} />
      </div>

      <p className="mt-3 font-body text-sm leading-relaxed text-muted">
        {digits.length === 2
          ? 'Zwei Hex-Ziffern = ein Byte = 8 Bit. Genau so sind MAC-Adressen und CSS-Farben aufgebaut.'
          : `${digits.length} Hex-Ziffern = ${digits.length * 4} Bit.`}
      </p>

      <details className="mt-4 border border-rule-2 bg-paper px-4 py-3">
        <summary className="cursor-pointer font-ui text-sm font-semibold text-ink">
          Nibble-Tabelle einblenden (zum Auswendiglernen)
        </summary>
        <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 font-mono text-sm text-ink sm:grid-cols-4">
          {NIBBLE_TABLE.map((entry) => (
            <div key={entry.hex} className="flex justify-between border-b border-rule py-1">
              <span className="font-bold text-accent">{entry.hex}</span>
              <span>{entry.bits}</span>
            </div>
          ))}
        </div>
      </details>

      <div className="mt-4">
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-10 items-center justify-center gap-2 border border-rule bg-transparent px-4 py-2 font-ui text-sm font-semibold text-muted transition-colors hover:bg-paper-deep hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Reset
        </button>
      </div>
    </section>
  )
}

function Readout({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-rule bg-paper-deep px-3 py-2">
      <div className="font-ui text-xs font-bold uppercase text-muted">{label}</div>
      <div className="mt-1 break-all font-mono text-lg font-bold text-ink">{value}</div>
    </div>
  )
}

function normalizeHex(input: string): string[] {
  const clean = input.replace(/[^0-9a-fA-F]/g, '').toUpperCase().slice(0, 4)
  return (clean || '0').split('')
}
