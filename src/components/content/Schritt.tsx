import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export interface SchrittProps {
  nr: number
  titel: string
  children: ReactNode
  className?: string
}

export default function Schritt({ nr, titel, children, className }: SchrittProps) {
  return (
    <section
      className={cn(
        'grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border border-rule-2 bg-paper px-4 py-5 text-ink sm:grid-cols-[3.25rem_minmax(0,1fr)] sm:gap-5 sm:px-6',
        className,
      )}
    >
      <span
        className="font-display text-2xl font-bold leading-none text-accent tabular-nums sm:text-3xl"
        aria-hidden="true"
      >
        {String(nr).padStart(2, '0')}
      </span>
      <div className="min-w-0">
        <h4 className="mb-3 mt-0 font-ui text-base font-bold tracking-wide text-ink">
          {titel}
        </h4>
        <div className="font-ui text-[1.03rem] leading-relaxed text-ink-2 [&>p:last-child]:mb-0">
          {children}
        </div>
      </div>
    </section>
  )
}
