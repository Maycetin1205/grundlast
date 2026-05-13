import {
  Children,
  isValidElement,
  useId,
  useMemo,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react'
import { RotateCcw } from 'lucide-react'
import { cn } from '../../lib/cn'
import Schritt, { type SchrittProps } from './Schritt'

interface StepByStepProps {
  titel: string
  children: ReactNode
  className?: string
}

export interface ErgebnisProps {
  children: ReactNode
  titel?: string
  className?: string
}

type SchrittElement = ReactElement<SchrittProps>
type ErgebnisElement = ReactElement<ErgebnisProps>

function isSchrittElement(child: ReactNode): child is SchrittElement {
  return isValidElement(child) && child.type === Schritt
}

function isErgebnisElement(child: ReactNode): child is ErgebnisElement {
  return isValidElement(child) && child.type === Ergebnis
}

export function Ergebnis({ children, titel = 'Ergebnis', className }: ErgebnisProps) {
  return (
    <aside
      className={cn(
        'mt-5 border border-accent border-l-[6px] bg-tipp-bg px-5 py-4 text-ink',
        className,
      )}
    >
      <p className="mb-2 font-ui text-sm font-bold tracking-wide text-ink">
        {titel}
      </p>
      <div className="font-ui text-[1.03rem] leading-relaxed [&>p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  )
}

export default function StepByStep({ titel, children, className }: StepByStepProps) {
  const titleId = useId()
  const [aktiverIndex, setAktiverIndex] = useState(0)
  const [alleSichtbar, setAlleSichtbar] = useState(false)

  const { schritte, ergebnis } = useMemo(() => {
    const schrittElemente: SchrittElement[] = []
    let ergebnisElement: ErgebnisElement | null = null

    Children.toArray(children).forEach(child => {
      if (isSchrittElement(child)) {
        schrittElemente.push(child)
      }

      if (isErgebnisElement(child)) {
        ergebnisElement = child
      }
    })

    return { schritte: schrittElemente, ergebnis: ergebnisElement }
  }, [children])

  if (schritte.length === 0) {
    return null
  }

  const letzterIndex = schritte.length - 1
  const sichererIndex = Math.min(aktiverIndex, letzterIndex)
  const istLetzterSchritt = sichererIndex === letzterIndex
  const sichtbareSchritte = alleSichtbar ? schritte : [schritte[sichererIndex]]
  const primaryLabel = istLetzterSchritt ? 'Alle Schritte einblenden' : 'Nächster Schritt →'
  const resetDisabled = !alleSichtbar && sichererIndex === 0

  function zeigeNächstenSchritt() {
    if (istLetzterSchritt) {
      setAlleSichtbar(true)
      return
    }

    setAktiverIndex(index => Math.min(index + 1, letzterIndex))
  }

  function zurücksetzen() {
    setAktiverIndex(0)
    setAlleSichtbar(false)
  }

  return (
    <section
      className={cn('my-10 border border-rule-2 bg-paper-deep p-6 text-ink', className)}
      aria-labelledby={titleId}
    >
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-2 font-ui text-xs font-semibold uppercase tracking-widest text-accent">
            Rechenweg
          </p>
          <h3
            id={titleId}
            className="m-0 font-display text-3xl font-bold leading-snug text-ink"
          >
            {titel}
          </h3>
        </div>
        <p className="m-0 font-ui text-xs font-semibold uppercase tracking-widest text-muted">
          {alleSichtbar ? `Alle ${schritte.length} Schritte` : `Schritt ${sichererIndex + 1} von ${schritte.length}`}
        </p>
      </div>

      <div className="space-y-4" aria-live="polite">
        {sichtbareSchritte.map(schritt => (
          <div key={schritt.key ?? schritt.props.nr}>
            {schritt}
          </div>
        ))}
        {alleSichtbar && ergebnis}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-rule-2 pt-5 font-ui text-sm">
        {!alleSichtbar && (
          <button
            type="button"
            onClick={zeigeNächstenSchritt}
            className="inline-flex min-h-11 items-center justify-center border border-accent bg-accent px-4 py-2 font-semibold text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {primaryLabel}
          </button>
        )}
        <button
          type="button"
          onClick={zurücksetzen}
          disabled={resetDisabled}
          className={cn(
            'inline-flex min-h-11 items-center justify-center gap-2 border border-rule bg-transparent px-4 py-2 font-semibold text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
            resetDisabled ? 'cursor-not-allowed opacity-60' : 'hover:bg-paper-deep hover:text-ink',
          )}
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Zurücksetzen
        </button>
      </div>
    </section>
  )
}
