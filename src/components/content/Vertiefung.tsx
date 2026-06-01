import { ChevronDown } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface VertiefungProps {
  titel: string
  children: ReactNode
  einordnung?: string
  className?: string
}

export default function Vertiefung({ titel, children, einordnung, className }: VertiefungProps) {
  return (
    <details
      className={cn(
        'group my-8 border border-rule-2 bg-paper-deep px-5 py-4 text-ink',
        className,
      )}
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-ui">
        <span className="min-w-0">
          <span className="mb-1 block text-[11px] font-bold uppercase tracking-widest text-muted">
            Optionale Vertiefung
          </span>
          <span className="block text-lg font-bold leading-snug text-ink">
            {titel}
          </span>
          {einordnung && (
            <span className="mt-1 block text-sm leading-relaxed text-muted">
              {einordnung}
            </span>
          )}
        </span>
        <ChevronDown
          className="mt-1 h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div className="mt-5 border-t border-rule-2 pt-5 font-ui text-[1.03rem] leading-relaxed text-ink-2 [&>p:last-child]:mb-0">
        {children}
      </div>
    </details>
  )
}
