import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface BeispielProps {
  titel: string
  children: ReactNode
  label?: string
  className?: string
}

export default function Beispiel({ titel, children, label = 'BEISPIEL', className }: BeispielProps) {
  return (
    <section
      className={cn(
        'my-6 border border-rule bg-paper px-7 py-6 text-ink',
        className,
      )}
    >
      <p className="mb-3 font-ui text-xs font-semibold uppercase tracking-widest text-accent">
        {label}
      </p>
      <h3 className="mb-4 mt-0 font-display text-xl font-bold leading-snug text-ink">
        {titel}
      </h3>
      <div className="font-body text-base leading-relaxed [&>p:last-child]:mb-0">
        {children}
      </div>
    </section>
  )
}
