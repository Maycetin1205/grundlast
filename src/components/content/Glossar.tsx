import { useId, type ReactNode } from 'react'
import { cn } from '../../lib/cn'

export interface GlossarEintrag {
  term: string
  definition: ReactNode
}

interface GlossarProps {
  einträge: GlossarEintrag[]
  titel?: string
  className?: string
}

export default function Glossar({
  einträge,
  titel = 'Glossar - Begriffe aus diesem Kapitel',
  className,
}: GlossarProps) {
  const headingId = useId()
  const sortedEntries = [...einträge].sort((a, b) =>
    a.term.localeCompare(b.term, 'de', { sensitivity: 'base' }),
  )

  return (
    <section className={cn('my-10 border border-rule-2 bg-paper', className)} aria-labelledby={headingId}>
      <h2
        id={headingId}
        className="m-0 border-b border-rule-2 bg-paper-deep px-6 py-4 font-ui text-xs font-bold uppercase tracking-widest text-accent"
      >
        {titel}
      </h2>
      <dl>
        {sortedEntries.map((entry) => (
          <div
            key={entry.term}
            className="grid gap-3 border-b border-rule px-6 py-5 last:border-b-0 sm:grid-cols-[13rem_minmax(0,1fr)]"
          >
            <dt className="font-display text-lg font-bold leading-snug text-ink">
              {entry.term}
            </dt>
            <dd className="font-ui text-[1rem] leading-relaxed text-ink-2">
              {entry.definition}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
