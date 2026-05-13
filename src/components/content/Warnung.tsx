import { TriangleAlert } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface WarnungProps {
  children: ReactNode
  titel?: string
  className?: string
}

export default function Warnung({ children, titel, className }: WarnungProps) {
  return (
    <aside
      className={cn(
        'my-6 flex gap-4 border-l-4 border-accent bg-warn-bg px-6 py-5 font-body text-base leading-relaxed text-ink',
        className,
      )}
    >
      <TriangleAlert className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" strokeWidth={2} />
      <div className="min-w-0">
        {titel && (
          <p className="mb-2 font-ui text-sm font-semibold tracking-wide text-ink">
            {titel}
          </p>
        )}
        <div className="[&>p:last-child]:mb-0">{children}</div>
      </div>
    </aside>
  )
}
