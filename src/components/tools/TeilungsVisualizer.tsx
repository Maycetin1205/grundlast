import { useMemo, useState } from 'react'
import { ArrowUp, Check, RotateCcw } from 'lucide-react'
import { cn } from '../../lib/cn'
import {
  baseLabel,
  divideToBase,
  type Base,
} from '../../lib/zahlensysteme/conversions'

interface TeilungsVisualizerProps {
  initialDecimal?: number
  initialBase?: Base
}

const BASES: Base[] = [2, 8, 16]
const MAX_INPUT = 4095

export default function TeilungsVisualizer({
  initialDecimal = 46,
  initialBase = 2,
}: TeilungsVisualizerProps) {
  const [decimalInput, setDecimalInput] = useState(String(initialDecimal))
  const [base, setBase] = useState<Base>(initialBase)
  // Wie viele Schritte sind aufgedeckt? -1 = alle.
  const [revealed, setRevealed] = useState(-1)

  const parsed = useMemo(() => {
    const trimmed = decimalInput.trim()
    if (!/^\d+$/.test(trimmed)) return null
    const value = Number(trimmed)
    if (value > MAX_INPUT) return null
    return value
  }, [decimalInput])

  const analysis = useMemo(
    () => (parsed === null ? null : divideToBase(parsed, base)),
    [parsed, base],
  )

  const stepCount = analysis?.steps.length ?? 0
  const showAll = revealed < 0 || revealed >= stepCount
  const visibleSteps = analysis
    ? showAll
      ? analysis.steps
      : analysis.steps.slice(0, Math.max(1, revealed))
    : []
  const allRevealed = showAll || visibleSteps.length >= stepCount

  function reset() {
    setRevealed(stepCount > 1 ? 1 : -1)
  }

  return (
    <section className="my-8 border-y border-rule bg-paper-deep/35 py-5 text-ink">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 font-ui text-xs font-bold uppercase tracking-widest text-accent">
            Interaktiv · Teilungsmethode
          </p>
          <h3 className="m-0 font-display text-xl font-bold leading-snug text-ink">
            Teilen, Reste sammeln, von unten nach oben lesen
          </h3>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
        <label className="block font-ui text-sm font-semibold text-ink">
          Dezimalzahl (0–{MAX_INPUT})
          <input
            className={cn(
              'mt-1.5 min-h-10 w-full border border-rule bg-paper px-3 py-2 font-mono text-[0.95rem] text-ink',
              'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
            )}
            value={decimalInput}
            onChange={(event) => {
              setDecimalInput(event.target.value)
              setRevealed(-1)
            }}
            inputMode="numeric"
            spellCheck={false}
            placeholder="46"
            aria-label="Dezimalzahl eingeben"
          />
        </label>

        <div
          role="group"
          aria-label="Zielsystem wählen"
          className="inline-flex border border-rule bg-paper"
        >
          {BASES.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => {
                setBase(b)
                setRevealed(-1)
              }}
              aria-pressed={base === b}
              className={cn(
                'min-h-10 px-3 py-2 font-ui text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                base === b ? 'bg-accent text-paper' : 'text-muted hover:text-accent',
              )}
            >
              ÷{b}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-2 font-body text-sm leading-relaxed text-muted">
        Ziel: {parsed ?? '—'}₁₀ nach {baseLabel(base)} (Basis {base}). Immer durch {base} teilen,
        den Rest notieren — der <strong>zuletzt</strong> berechnete Rest ist die{' '}
        <strong>höchste</strong> Stelle.
      </p>

      {analysis === null ? (
        <div className="mt-4 border border-accent-2 bg-warn-bg px-4 py-3 font-body text-sm text-ink">
          Bitte eine ganze Zahl von 0 bis {MAX_INPUT} eingeben.
        </div>
      ) : (
        <>
          <div className="mt-4 overflow-x-auto border border-rule">
            <table className="w-full min-w-[34rem] border-collapse bg-paper font-ui text-sm">
              <thead>
                <tr>
                  <th className="border-b border-rule bg-paper-deep px-3 py-2 text-left font-bold text-ink">
                    Schritt
                  </th>
                  <th className="border-b border-rule bg-paper-deep px-3 py-2 text-left font-bold text-ink">
                    Rechnung
                  </th>
                  <th className="border-b border-rule bg-paper-deep px-3 py-2 text-right font-bold text-ink">
                    Ergebnis
                  </th>
                  <th className="border-b border-rule bg-paper-deep px-3 py-2 text-right font-bold text-ink">
                    Rest
                  </th>
                  <th className="border-b border-rule bg-paper-deep px-3 py-2 text-center font-bold text-ink">
                    Ziffer
                  </th>
                </tr>
              </thead>
              <tbody>
                {visibleSteps.map((step, index) => {
                  const isLast = index === visibleSteps.length - 1 && allRevealed
                  return (
                    <tr key={step.step} className={cn(isLast && 'bg-accent-soft')}>
                      <td className="border-b border-rule px-3 py-2 font-mono text-ink">{step.step}</td>
                      <td className="border-b border-rule px-3 py-2 font-mono text-ink">
                        {step.dividend} ÷ {base}
                      </td>
                      <td className="border-b border-rule px-3 py-2 text-right font-mono text-ink">
                        {step.quotient}
                      </td>
                      <td className="border-b border-rule px-3 py-2 text-right font-mono font-bold text-accent">
                        {step.remainder}
                      </td>
                      <td className="border-b border-rule px-3 py-2 text-center font-mono font-bold text-ink">
                        {step.digit}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {allRevealed && (
            <ReadDirection analysis={analysis} />
          )}

          <div className="mt-4 flex flex-wrap items-center gap-3 font-ui text-sm">
            {!allRevealed && (
              <button
                type="button"
                onClick={() => setRevealed((r) => (r < 0 ? 2 : r + 1))}
                className="inline-flex min-h-10 items-center justify-center border border-accent bg-accent px-4 py-2 font-semibold text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Nächster Schritt →
              </button>
            )}
            <button
              type="button"
              onClick={reset}
              className="inline-flex min-h-10 items-center justify-center gap-2 border border-rule bg-transparent px-4 py-2 font-semibold text-muted transition-colors hover:bg-paper-deep hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Schritt für Schritt
            </button>
          </div>
        </>
      )}
    </section>
  )
}

function ReadDirection({
  analysis,
}: {
  analysis: ReturnType<typeof divideToBase>
}) {
  // Reste in Rechen-Reihenfolge (oben→unten) – die Leserichtung ist umgekehrt.
  const remainders = analysis.steps.map((s) => s.digit)
  const proofTerms = analysis.proof
    .filter((p) => p.value > 0)
    .map((p) => `${p.value === 1 ? '' : `${p.value}×`}${p.weight}`)
  const proofSum = analysis.proof.reduce((sum, p) => sum + p.contribution, 0)

  return (
    <div className="mt-4 border border-accent bg-accent-soft px-4 py-3 font-body text-sm leading-relaxed text-ink">
      <p className="mb-2 flex items-center gap-2 font-ui font-bold text-ink">
        <ArrowUp className="h-4 w-4 text-accent" aria-hidden="true" />
        Von unten nach oben lesen
      </p>
      <p className="mb-2">
        Reste in Rechen-Reihenfolge:{' '}
        <code className="font-mono">{remainders.join(' ')}</code> — rückwärts gelesen ergibt das{' '}
        <code className="font-mono font-bold">{analysis.result}</code>
        <sub>{analysis.base}</sub>.
      </p>
      <p className="m-0">
        Probe:{' '}
        <code className="font-mono">
          {proofTerms.length > 0 ? proofTerms.join(' + ') : '0'} = {proofSum}
        </code>
        <Check className="ml-1 inline h-4 w-4 text-accent" aria-hidden="true" />
      </p>
    </div>
  )
}
