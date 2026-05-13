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
        'grid grid-cols-[3rem_minmax(0,1fr)] gap-5 border border-rule bg-paper px-5 py-5 text-ink sm:grid-cols-[4rem_minmax(0,1fr)] sm:px-6',
        className,
      )}
    >
      <span
        className="font-display text-3xl font-bold leading-none text-accent tabular-nums sm:text-4xl"
        aria-hidden="true"
      >
        {String(nr).padStart(2, '0')}
      </span>
      <div className="min-w-0">
        <h4 className="mb-3 mt-0 font-ui text-sm font-semibold tracking-wide text-ink">
          {titel}
        </h4>
        <div className="font-body text-base leading-relaxed text-muted [&>p:last-child]:mb-0">
          {children}
        </div>
      </div>
    </section>
  )
}
