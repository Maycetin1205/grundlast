import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export interface SchritteEintrag {
  titel: string
  text: ReactNode
}

interface SchritteProps {
  items: SchritteEintrag[]
  className?: string
}

export default function Schritte({ items, className }: SchritteProps) {
  return (
    <ol className={cn('my-6 list-none border-y border-rule p-0', className)}>
      {items.map((item, index) => (
        <li
          key={`${item.titel}-${index}`}
          className="grid grid-cols-[3rem_minmax(0,1fr)] gap-5 border-b border-rule py-5 last:border-b-0"
        >
          <span className="font-display text-3xl font-bold leading-none text-accent tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="min-w-0">
            <p className="mb-1 font-ui text-sm font-semibold tracking-wide text-ink">
              {item.titel}
            </p>
            <div className="font-body text-base leading-relaxed text-muted [&>p:last-child]:mb-0">
              {item.text}
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
