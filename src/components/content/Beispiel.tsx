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
        'my-8 border border-rule-2 border-l-[6px] border-l-accent bg-paper px-7 py-6 text-ink shadow-sm',
        className,
      )}
    >
      <p className="mb-3 font-ui text-[11px] font-bold uppercase tracking-widest text-accent">
        {label}
      </p>
      <h3 className="mb-4 mt-0 font-display text-2xl font-bold leading-snug text-ink">
        {titel}
      </h3>
      <div className="font-ui text-[1.03rem] leading-relaxed [&>p:last-child]:mb-0">
        {children}
      </div>
    </section>
  )
}
