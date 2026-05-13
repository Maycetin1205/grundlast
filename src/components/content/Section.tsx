import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface SectionProps {
  nr: string
  titel: string
  children?: ReactNode
  className?: string
}

export default function Section({ nr, titel, children, className }: SectionProps) {
  return (
    <section className={cn('mt-14', className)}>
      <div className="mb-5 flex items-baseline gap-4">
        <span className="shrink-0 font-display text-sm font-semibold tracking-[0.15em] text-accent">
          {nr}
        </span>
        <span className="h-px w-10 shrink-0 bg-rule" aria-hidden="true" />
        <h2 className="m-0 flex-1 font-display text-[30px] font-bold leading-[1.2] tracking-normal text-ink">
          {titel}
        </h2>
      </div>
      {children}
    </section>
  )
}
