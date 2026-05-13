import { Lightbulb } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface AnalogieProps {
  children: ReactNode
  icon?: ReactNode
  className?: string
}

export default function Analogie({ children, icon, className }: AnalogieProps) {
  return (
    <aside
      className={cn(
        'my-8 flex gap-4 border border-rule-2 border-l-[6px] border-l-accent bg-analogy-bg px-6 py-5 font-ui text-[1.03rem] italic leading-relaxed text-ink',
        className,
      )}
    >
      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center text-accent" aria-hidden="true">
        {icon ?? <Lightbulb size={18} strokeWidth={2} />}
      </span>
      <div className="min-w-0 [&>p:last-child]:mb-0">{children}</div>
    </aside>
  )
}
