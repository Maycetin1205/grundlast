import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface TippProps {
  children: ReactNode
  titel?: string
  className?: string
}

export default function Tipp({ children, titel, className }: TippProps) {
  return (
    <aside
      className={cn(
        'my-6 border-l-4 border-tipp-border bg-tipp-bg px-6 py-5 font-body text-base leading-relaxed text-ink',
        className,
      )}
    >
      {titel && (
        <p className="mb-2 font-ui text-sm font-semibold tracking-wide text-ink">
          {titel}
        </p>
      )}
      <div className="min-w-0 [&>p:last-child]:mb-0">{children}</div>
    </aside>
  )
}
