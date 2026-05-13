import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface Step {
  title: string
  formula: string
  explanation: string
}

interface RechenwegProps {
  title: string
  steps: Step[]
}

export default function Rechenweg({ title, steps }: RechenwegProps) {
  const [openSteps, setOpenSteps] = useState<number[]>([0])

  function toggleStep(i: number) {
    setOpenSteps(prev =>
      prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i],
    )
  }

  function expandAll() {
    setOpenSteps(steps.map((_, i) => i))
  }

  return (
    <div
      className="not-prose my-7 overflow-hidden rounded-[var(--r-lg)] border border-rule bg-paper"
      style={{ boxShadow: 'var(--shadow-1)' }}
    >
      <div className="flex items-center justify-between border-b border-rule bg-paper-deep px-5 py-3.5">
        <p
          className="m-0 text-[1rem] leading-tight text-ink"
          style={{
            fontFamily: 'var(--font-display)',
            fontVariationSettings: '"opsz" 36, "SOFT" 30',
            fontWeight: 500,
            letterSpacing: '-0.005em',
          }}
        >
          {title}
        </p>
        <button
          onClick={expandAll}
          className="text-[10.5px] uppercase text-ink-3 transition-colors hover:text-ink"
          style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}
        >
          Alle aufklappen
        </button>
      </div>

      <div className="divide-y divide-rule">
        {steps.map((step, i) => {
          const open = openSteps.includes(i)
          return (
            <div key={i}>
              <button
                onClick={() => toggleStep(i)}
                className="flex w-full items-center gap-3.5 px-5 py-3.5 text-left transition-colors hover:bg-bg-2"
              >
                <span
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent text-[12px] font-bold text-paper"
                  style={{ fontFamily: 'var(--font-mono)', fontVariantNumeric: 'tabular-nums' }}
                >
                  {i + 1}
                </span>
                <span className="flex-1 text-[14px] font-medium leading-snug text-ink">
                  {step.title}
                </span>
                {open
                  ? <ChevronDown size={15} className="shrink-0 text-ink-3" />
                  : <ChevronRight size={15} className="shrink-0 text-ink-3" />
                }
              </button>

              {open && (
                <div className="space-y-2.5 pb-4 pl-[62px] pr-5">
                  <div
                    className="rounded-[var(--r-md)] border border-rule bg-bg-2 px-4 py-3 text-[13px] leading-relaxed text-ink"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {step.formula}
                  </div>
                  <p className="text-[13.5px] leading-relaxed text-ink-2">
                    {step.explanation}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
