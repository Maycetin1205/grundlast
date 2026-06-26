import { Children, isValidElement, type ReactElement, type ReactNode } from 'react'
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
        'mt-4 border border-accent border-l-[6px] bg-tipp-bg px-5 py-4 text-ink',
        className,
      )}
    >
      <p className="mb-2 font-ui text-sm font-bold tracking-wide text-ink">{titel}</p>
      <div className="font-ui text-[1.03rem] leading-relaxed [&>p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  )
}

export default function StepByStep({ titel, children, className }: StepByStepProps) {
  const schritte: SchrittElement[] = []
  let ergebnis: ErgebnisElement | null = null

  Children.toArray(children).forEach(child => {
    if (isSchrittElement(child)) schritte.push(child)
    if (isErgebnisElement(child)) ergebnis = child
  })

  if (schritte.length === 0) return null

  return (
    <section className={cn('my-10 text-ink', className)}>
      <h3 className="mb-4 mt-0 font-display text-2xl font-bold leading-snug text-ink sm:text-[1.65rem]">
        {titel}
      </h3>
      <div className="space-y-3">
        {schritte.map(schritt => (
          <div key={schritt.key ?? schritt.props.nr}>{schritt}</div>
        ))}
        {ergebnis}
      </div>
    </section>
  )
}
