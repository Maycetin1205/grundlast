import { useMemo, useState, type ReactNode } from 'react'
import { Calculator, CheckCircle2, Info, RotateCcw, TriangleAlert } from 'lucide-react'
import { cn } from '../../lib/cn'
import {
  BINARY_8_BIT_COLUMNS,
  analyzeBinaryPlaceValue,
  describeBitToggle,
  validateBinaryInput,
  type BinaryPlaceValueAnalysis,
  type PlaceValueColumn,
} from '../../lib/zahlensysteme/placeValue'

interface BinaerDezimalPrototypProps {
  initialBinary?: string
  exerciseBinary?: string
}

const defaultInitialBinary = '10101100'
const defaultExerciseBinary = '11001010'

export default function BinaerDezimalPrototyp({
  initialBinary = defaultInitialBinary,
  exerciseBinary = defaultExerciseBinary,
}: BinaerDezimalPrototypProps) {
  const columns = BINARY_8_BIT_COLUMNS
  const [clickBinary, setClickBinary] = useState(initialBinary)
  const [lastChange, setLastChange] = useState(
    'Klicke auf ein Bit, um zu sehen, wie sich der Dezimalwert verändert.',
  )
  const [binaryInput, setBinaryInput] = useState('101101')
  const [exerciseAnswer, setExerciseAnswer] = useState('')
  const [exerciseChecked, setExerciseChecked] = useState(false)

  const clickAnalysis = useMemo(
    () => analyzeBinaryPlaceValue(clickBinary, columns),
    [clickBinary, columns],
  )
  const inputValidation = useMemo(
    () => validateBinaryInput(binaryInput, columns),
    [binaryInput, columns],
  )
  const exerciseAnalysis = useMemo(
    () => analyzeBinaryPlaceValue(exerciseBinary, columns),
    [exerciseBinary, columns],
  )
  const exerciseFeedback = getExerciseFeedback(
    exerciseAnswer,
    exerciseChecked,
    exerciseAnalysis,
  )

  function toggleBit(index: number) {
    const nextBits = [...clickAnalysis.padded]
    nextBits[index] = nextBits[index] === '1' ? '0' : '1'
    const enabled = nextBits[index] === '1'
    setClickBinary(nextBits.join(''))
    setLastChange(describeBitToggle(columns[index].weight, enabled))
  }

  function resetClickCalculator() {
    setClickBinary(initialBinary)
    setLastChange('Zurückgesetzt auf das Beispiel 10101100.')
  }

  return (
    <section className="my-8 border-y border-rule bg-paper-deep/35 py-5 text-ink">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-1 font-ui text-xs font-bold uppercase tracking-widest text-accent">
            Interaktiv · Stellenwert
          </p>
          <h3 className="m-0 font-display text-xl font-bold leading-snug text-ink">
            Binärwert lesen: aktive Stellen addieren
          </h3>
        </div>
        <div className="inline-flex items-center gap-2 border border-rule bg-paper px-3 py-2 font-ui text-sm text-muted">
          <Calculator className="h-4 w-4 text-accent" aria-hidden="true" />
          8-Bit-Modus
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.85fr)]">
        <div className="min-w-0 border border-rule bg-paper p-4">
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="m-0 font-ui text-base font-bold text-ink">
                Interaktive Stellenwert-Tabelle
              </h4>
              <p className="m-0 mt-1 font-body text-sm leading-relaxed text-muted">
                Klicke auf ein Bit. Jede 1 wird zum Dezimalwert addiert, jede 0
                zählt nicht mit.
              </p>
            </div>
            <button
              type="button"
              onClick={resetClickCalculator}
              className="inline-flex min-h-10 items-center justify-center gap-2 border border-rule bg-paper px-3 py-2 font-ui text-sm font-semibold text-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Reset
            </button>
          </div>

          <PlaceValueTable
            analysis={clickAnalysis}
            columns={columns}
            onToggle={toggleBit}
          />

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <Readout label="Binär" value={`${clickAnalysis.padded}₂`} />
            <Readout label="Dezimal" value={`${clickAnalysis.decimalValue}₁₀`} />
            <Readout label="Hex, nur Anzeige" value={`${clickAnalysis.hexValue}₁₆`} />
          </div>

          <FeedbackBox tone="info" title="Was gerade passiert">
            <p>{lastChange}</p>
            <p>
              Aktive Stellen: <StrongCode>{formatActiveWeights(clickAnalysis)}</StrongCode>
            </p>
            <p>
              Rechnung:{' '}
              <StrongCode>
                {clickAnalysis.equation} = {clickAnalysis.decimalValue}
              </StrongCode>
            </p>
          </FeedbackBox>
        </div>

        <div className="min-w-0 border border-rule bg-paper p-4">
          <h4 className="m-0 font-ui text-base font-bold text-ink">
            Eingabe mit Fehlerdiagnose
          </h4>
          <p className="m-0 mt-1 font-body text-sm leading-relaxed text-muted">
            Der Rechner prüft zürst die Schreibweise und erklärt dann die
            Stellenwert-Rechnung.
          </p>

          <label className="mt-4 block font-ui text-sm font-semibold text-ink">
            Binärzahl
            <input
              className={cn(
                'mt-1.5 min-h-10 w-full border border-rule bg-paper px-3 py-2 font-mono text-[0.95rem] text-ink',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
              )}
              value={binaryInput}
              onChange={(event) => setBinaryInput(event.target.value)}
              inputMode="numeric"
              spellCheck={false}
              placeholder="101101"
              aria-label="Binärzahl eingeben"
            />
          </label>

          {inputValidation.ok && inputValidation.analysis ? (
            <FeedbackBox tone="success" title="Gültige Binärzahl">
              <p>
                Für 8 Bit gelesen:{' '}
                <StrongCode>{inputValidation.analysis.padded}₂</StrongCode>
              </p>
              <p>
                Aktive Stellen:{' '}
                <StrongCode>{formatActiveWeights(inputValidation.analysis)}</StrongCode>
              </p>
              <p>
                Rechnung:{' '}
                <StrongCode>
                  {inputValidation.analysis.equation} ={' '}
                  {inputValidation.analysis.decimalValue}
                </StrongCode>
              </p>
            </FeedbackBox>
          ) : (
            <FeedbackBox tone="error" title="Noch nicht gültig">
              <p>{inputValidation.message}</p>
              {inputValidation.why && (
                <p>
                  <strong>Warum?</strong> {inputValidation.why}
                </p>
              )}
              {inputValidation.correction && (
                <p>
                  <strong>Korrektur:</strong> {inputValidation.correction}
                </p>
              )}
            </FeedbackBox>
          )}
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="border border-rule bg-paper p-4">
          <h4 className="m-0 font-ui text-base font-bold text-ink">Mini-Aufgabe</h4>
          <p className="mt-2 font-body text-base leading-relaxed text-ink">
            Wandle <StrongCode>{exerciseAnalysis.padded}₂</StrongCode> in Dezimal
            um.
          </p>

          <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="block font-ui text-sm font-semibold text-ink">
              Dein Dezimalwert
              <input
                className={cn(
                  'mt-1.5 min-h-10 w-full border border-rule bg-paper px-3 py-2 font-mono text-[0.95rem] text-ink',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                )}
                value={exerciseAnswer}
                onChange={(event) => {
                  setExerciseAnswer(event.target.value)
                  setExerciseChecked(false)
                }}
                inputMode="numeric"
                spellCheck={false}
                placeholder="202"
                aria-label="Dezimalwert für Mini-Aufgabe"
              />
            </label>

            <button
              type="button"
              onClick={() => setExerciseChecked(true)}
              className="mt-auto inline-flex min-h-10 items-center justify-center gap-2 border border-accent bg-accent px-4 py-2 font-ui text-sm font-bold text-paper transition-colors hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              Prüfen
            </button>
          </div>

          {exerciseFeedback && (
            <FeedbackBox tone={exerciseFeedback.correct ? 'success' : 'error'} title={exerciseFeedback.title}>
              {exerciseFeedback.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </FeedbackBox>
          )}
        </div>

        <div className="border border-rule bg-paper p-4">
          <h4 className="m-0 font-ui text-base font-bold text-ink">
            Praxisbezug: IPv4-Oktett
          </h4>
          <p className="mt-2 font-body text-base leading-relaxed text-ink">
            Ein IPv4-Oktett hat 8 Bit. Der kleinste 8-Bit-Wert ist{' '}
            <StrongCode>00000000₂ = 0₁₀</StrongCode>, der größte ist{' '}
            <StrongCode>11111111₂ = 255₁₀</StrongCode>.
          </p>
          <p className="font-body text-base leading-relaxed text-ink">
            Deshalb darf ein Teil einer IPv4-Adresse nie größer als 255 sein.
            Beispiel: <StrongCode>192 = 11000000₂</StrongCode>.
          </p>
        </div>
      </div>
    </section>
  )
}

function PlaceValueTable({
  analysis,
  columns,
  onToggle,
}: {
  analysis: BinaryPlaceValueAnalysis
  columns: PlaceValueColumn[]
  onToggle: (index: number) => void
}) {
  return (
    <div className="overflow-x-auto border border-rule">
      <table className="w-full min-w-[38rem] border-collapse bg-paper font-ui text-sm">
        <tbody>
          <tr>
            <th className="border-b border-rule bg-paper-deep px-3 py-2 text-left font-bold text-ink">
              Stellenwert
            </th>
            {columns.map((column) => (
              <td
                key={column.weight}
                className="border-b border-rule px-2 py-2 text-center font-mono font-semibold text-ink"
              >
                {column.weight}
              </td>
            ))}
          </tr>
          <tr>
            <th className="border-b border-rule bg-paper-deep px-3 py-2 text-left font-bold text-ink">
              Bit
            </th>
            {analysis.bits.map((bit, index) => {
              const active = bit === 1
              return (
                <td key={columns[index].weight} className="border-b border-rule px-2 py-2 text-center">
                  <button
                    type="button"
                    onClick={() => onToggle(index)}
                    className={cn(
                      'inline-flex h-10 w-10 items-center justify-center border font-mono text-base font-bold transition-colors',
                      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                      active
                        ? 'border-accent bg-accent text-paper'
                        : 'border-rule bg-paper-deep text-muted hover:text-accent',
                    )}
                    aria-label={`${columns[index].weight}er-Stelle ${
                      active ? 'deaktivieren' : 'aktivieren'
                    }`}
                  >
                    {bit}
                  </button>
                </td>
              )
            })}
          </tr>
          <tr>
            <th className="bg-paper-deep px-3 py-2 text-left font-bold text-ink">zählt?</th>
            {analysis.bits.map((bit, index) => (
              <td
                key={columns[index].weight}
                className={cn(
                  'px-2 py-2 text-center font-ui text-xs font-bold uppercase',
                  bit === 1 ? 'text-accent' : 'text-muted',
                )}
              >
                {bit === 1 ? 'ja' : 'nein'}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function Readout({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-rule bg-paper-deep px-3 py-2">
      <div className="font-ui text-xs font-bold uppercase text-muted">{label}</div>
      <div className="mt-1 font-mono text-lg font-bold text-ink">{value}</div>
    </div>
  )
}

function FeedbackBox({
  tone,
  title,
  children,
}: {
  tone: 'info' | 'success' | 'error'
  title: string
  children: ReactNode
}) {
  const Icon = tone === 'error' ? TriangleAlert : tone === 'success' ? CheckCircle2 : Info
  return (
    <div
      className={cn(
        'mt-4 flex gap-3 border px-4 py-3 font-body text-sm leading-relaxed',
        tone === 'error' && 'border-accent-2 bg-warn-bg',
        tone === 'success' && 'border-accent bg-accent-soft',
        tone === 'info' && 'border-rule bg-paper-deep',
      )}
    >
      <Icon
        className={cn(
          'mt-1 h-4 w-4 shrink-0',
          tone === 'error' ? 'text-accent-2' : 'text-accent',
        )}
        aria-hidden="true"
      />
      <div className="min-w-0">
        <p className="mb-1 font-ui text-sm font-bold text-ink">{title}</p>
        <div className="[&>p]:mb-1 [&>p:last-child]:mb-0">{children}</div>
      </div>
    </div>
  )
}

function StrongCode({ children }: { children: ReactNode }) {
  return <code className="font-mono font-bold">{children}</code>
}

function formatActiveWeights(analysis: BinaryPlaceValueAnalysis) {
  return analysis.activeWeights.length > 0 ? analysis.activeWeights.join(', ') : 'keine'
}

function getExerciseFeedback(
  answer: string,
  checked: boolean,
  analysis: BinaryPlaceValueAnalysis,
) {
  if (!checked) return null

  const trimmed = answer.trim()
  if (trimmed.length === 0) {
    return {
      correct: false,
      title: 'Noch keine Antwort',
      lines: ['Gib den Dezimalwert ein und prüfe dann erneut.'],
    }
  }

  if (!/^\d+$/.test(trimmed)) {
    return {
      correct: false,
      title: 'Noch nicht',
      lines: ['Gib hier nur eine Dezimalzahl ein, zum Beispiel 202.'],
    }
  }

  const numericAnswer = Number(trimmed)
  if (numericAnswer === analysis.decimalValue) {
    return {
      correct: true,
      title: 'Richtig',
      lines: [`${analysis.padded}₂ = ${analysis.decimalValue}₁₀.`],
    }
  }

  if (numericAnswer === 200) {
    return {
      correct: false,
      title: 'Noch nicht',
      lines: [
        'Du hast wahrscheinlich die 2er-Stelle nicht mitgezählt.',
        `${analysis.padded}₂ bedeutet: ${analysis.equation} = ${analysis.decimalValue}.`,
      ],
    }
  }

  return {
    correct: false,
    title: 'Noch nicht',
    lines: [
      `Aktive Stellen sind ${formatActiveWeights(analysis)}.`,
      `Die Rechnung lautet: ${analysis.equation} = ${analysis.decimalValue}.`,
    ],
  }
}
