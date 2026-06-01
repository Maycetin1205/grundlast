import { useMemo, useState } from 'react'
import { cn } from '../../lib/cn'
import {
  PERM_VALUE,
  ROLE_LABEL,
  buildMode,
  isValidOctalMode,
  parseOctalMode,
  type PermBit,
  type RoleKey,
} from '../../lib/zahlensysteme/conversions'

type Matrix = Record<RoleKey, { r: boolean; w: boolean; x: boolean }>

const PERM_BITS: PermBit[] = ['r', 'w', 'x']
const PERM_LABEL: Record<PermBit, string> = { r: 'lesen', w: 'schreiben', x: 'ausführen' }

interface ChmodWerkbankProps {
  initialOctal?: string
}

export default function ChmodWerkbank({ initialOctal = '755' }: ChmodWerkbankProps) {
  const [matrix, setMatrix] = useState<Matrix>(() => parseOctalMode(initialOctal))
  const [octalInput, setOctalInput] = useState(initialOctal)

  const mode = useMemo(() => buildMode(matrix), [matrix])

  function toggle(role: RoleKey, bit: PermBit) {
    setMatrix((prev) => {
      const next = { ...prev, [role]: { ...prev[role], [bit]: !prev[role][bit] } }
      setOctalInput(buildMode(next).octal)
      return next
    })
  }

  function applyOctal(value: string) {
    setOctalInput(value)
    if (isValidOctalMode(value)) {
      setMatrix(parseOctalMode(value))
    }
  }

  return (
    <section className="my-8 border-y border-rule bg-paper-deep/35 py-5 text-ink">
      <div className="mb-5">
        <p className="mb-1 font-ui text-xs font-bold uppercase tracking-widest text-accent">
          Interaktiv · Linux-Dateirechte
        </p>
        <h3 className="m-0 font-display text-xl font-bold leading-snug text-ink">
          chmod-Werkbank: Rechte ↔ Oktalzahl
        </h3>
        <p className="mt-1 font-body text-sm leading-relaxed text-muted">
          Schalte die Rechte um und sieh die Oktalzahl entstehen — oder tippe eine Oktalzahl ein und
          sieh die Rechte. Werte: r=4, w=2, x=1.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="overflow-x-auto border border-rule bg-paper p-4">
          <table className="w-full min-w-[28rem] border-collapse font-ui text-sm">
            <thead>
              <tr>
                <th className="border-b border-rule px-2 py-2 text-left font-bold text-ink">Rolle</th>
                {PERM_BITS.map((bit) => (
                  <th key={bit} className="border-b border-rule px-2 py-2 text-center font-bold text-ink">
                    {bit} <span className="font-normal text-muted">({PERM_VALUE[bit]})</span>
                  </th>
                ))}
                <th className="border-b border-rule px-2 py-2 text-right font-bold text-ink">Ziffer</th>
              </tr>
            </thead>
            <tbody>
              {mode.rows.map((row) => (
                <tr key={row.role}>
                  <td className="border-b border-rule px-2 py-2 text-ink">{ROLE_LABEL[row.role]}</td>
                  {PERM_BITS.map((bit) => {
                    const active = row[bit]
                    return (
                      <td key={bit} className="border-b border-rule px-2 py-2 text-center">
                        <button
                          type="button"
                          onClick={() => toggle(row.role, bit)}
                          aria-pressed={active}
                          aria-label={`${PERM_LABEL[bit]} für ${ROLE_LABEL[row.role]} ${
                            active ? 'aus' : 'ein'
                          }schalten`}
                          className={cn(
                            'inline-flex h-10 w-10 items-center justify-center border font-mono text-base font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                            active
                              ? 'border-accent bg-accent text-paper'
                              : 'border-rule bg-paper-deep text-muted hover:text-accent',
                          )}
                        >
                          {active ? bit : '–'}
                        </button>
                      </td>
                    )
                  })}
                  <td className="border-b border-rule px-2 py-2 text-right font-mono text-lg font-bold text-accent">
                    {row.octalDigit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-4 border border-rule bg-paper p-4">
          <label className="block font-ui text-sm font-semibold text-ink">
            Oktalzahl eingeben
            <input
              className={cn(
                'mt-1.5 min-h-10 w-full border border-rule bg-paper px-3 py-2 font-mono text-lg text-ink',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                !isValidOctalMode(octalInput) && octalInput.trim() !== '' && 'border-accent-2',
              )}
              value={octalInput}
              onChange={(event) => applyOctal(event.target.value)}
              inputMode="numeric"
              spellCheck={false}
              maxLength={3}
              placeholder="755"
              aria-label="Oktalzahl für Dateirechte"
            />
          </label>
          {!isValidOctalMode(octalInput) && octalInput.trim() !== '' && (
            <p className="-mt-2 font-body text-xs text-accent-2">
              Nur Ziffern 0–7, maximal drei Stellen.
            </p>
          )}

          <div className="border border-rule bg-paper-deep px-3 py-2" aria-live="polite">
            <div className="font-ui text-xs font-bold uppercase text-muted">Oktal</div>
            <div className="mt-1 font-mono text-2xl font-bold text-ink">{mode.octal}</div>
          </div>
          <div className="border border-rule bg-paper-deep px-3 py-2" aria-live="polite">
            <div className="font-ui text-xs font-bold uppercase text-muted">Symbolschreibweise</div>
            <div className="mt-1 font-mono text-2xl font-bold tracking-wide text-ink">
              {mode.symbolic}
            </div>
          </div>

          <p className="m-0 font-body text-sm leading-relaxed text-muted">
            <code className="font-mono">{mode.symbolic}</code> — so zeigt es <code className="font-mono">ls -l</code> an
            (ohne das erste Typ-Zeichen).
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {['755', '644', '777', '700', '600'].map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => applyOctal(preset)}
            className="inline-flex min-h-9 items-center border border-rule bg-paper px-3 py-1.5 font-mono text-sm font-semibold text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {preset}
          </button>
        ))}
      </div>
    </section>
  )
}
