import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface FormelProps {
  children: ReactNode
  ariaLabel?: string
  className?: string
}

export default function Formel({ children, ariaLabel, className }: FormelProps) {
  return (
    <div
      role="math"
      aria-label={ariaLabel}
      className={cn(
        'my-6 border-l-4 border-accent bg-paper-deep px-6 py-5 text-center font-mono text-base leading-relaxed text-ink',
        className,
      )}
    >
      {children}
    </div>
  )
}
