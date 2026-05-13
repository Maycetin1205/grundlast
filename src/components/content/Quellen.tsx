import { ExternalLink } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export interface Quelle {
  label: string
  href: string
  detail?: ReactNode
}

interface QuellenProps {
  quellen: Quelle[]
  titel?: string
  className?: string
}

export default function Quellen({
  quellen,
  titel = 'Quellen und weiterführende Literatur',
  className,
}: QuellenProps) {
  return (
    <section className={cn('my-10 border-l-4 border-muted bg-paper-deep px-8 py-7', className)}>
      <h2 className="m-0 mb-4 font-ui text-xs font-semibold uppercase tracking-widest text-muted">
        {titel}
      </h2>
      <ol className="list-decimal space-y-3 pl-6 font-body text-sm leading-relaxed text-ink">
        {quellen.map((quelle) => (
          <li key={quelle.href}>
            <a
              href={quelle.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 border-b border-dotted border-accent text-accent no-underline hover:text-ink"
            >
              <span>{quelle.label}</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            {quelle.detail && (
              <span className="text-muted"> - {quelle.detail}</span>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
