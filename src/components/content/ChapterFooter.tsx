import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

interface KapitelLink {
  label: string
  to: string
  eyebrow?: string
}

interface ChapterFooterProps {
  previous?: KapitelLink | null
  next?: KapitelLink | null
  className?: string
}

export default function ChapterFooter({ previous, next, className }: ChapterFooterProps) {
  return (
    <nav
      className={cn(
        'mt-20 flex flex-col gap-4 border-t border-rule pt-6 font-ui text-sm sm:flex-row sm:items-center sm:justify-between',
        className,
      )}
      aria-label="Kapitel-Navigation"
    >
      {previous ? (
        <Link
          to={previous.to}
          className="inline-flex items-center gap-2 text-muted no-underline hover:text-accent"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          <span>
            <span className="block text-xs uppercase tracking-widest text-muted">
              {previous.eyebrow ?? 'Vorheriges Kapitel'}
            </span>
            <span className="font-medium">{previous.label}</span>
          </span>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}

      {next ? (
        <Link
          to={next.to}
          className="inline-flex items-center justify-end gap-2 text-right text-accent no-underline hover:text-ink"
        >
          <span>
            <span className="block text-xs uppercase tracking-widest text-muted">
              {next.eyebrow ?? 'Nächstes Kapitel'}
            </span>
            <span className="font-medium">{next.label}</span>
          </span>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}
    </nav>
  )
}
