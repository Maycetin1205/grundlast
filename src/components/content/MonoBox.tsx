import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface MonoBoxProps {
  children: ReactNode
  label?: string
  className?: string
}

export default function MonoBox({ children, label, className }: MonoBoxProps) {
  return (
    <div className={cn('my-6 border border-rule bg-paper-deep', className)}>
      {label && (
        <div className="border-b border-rule px-5 py-3 font-ui text-xs font-semibold uppercase tracking-widest text-muted">
          {label}
        </div>
      )}
      <pre className="overflow-x-auto px-5 py-4 font-mono text-sm leading-loose text-ink">
        <code className="bg-transparent p-0 text-inherit">{children}</code>
      </pre>
    </div>
  )
}
