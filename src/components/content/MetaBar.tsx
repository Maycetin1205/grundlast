import { cn } from '../../lib/cn'
import { findLesson } from '../../lib/toc'

interface MetaBarProps {
  slug?: string
  lesezeit?: string
  schwierigkeit: string
  lernfeld: string
  prüfungsrelevanz: string
  className?: string
}

export default function MetaBar({
  slug,
  lesezeit,
  schwierigkeit,
  lernfeld,
  prüfungsrelevanz,
  className,
}: MetaBarProps) {
  const lessonMinutes = slug ? findLesson(slug)?.lesson.minutes : undefined
  const resolvedLesezeit = lesezeit ?? (lessonMinutes ? `${lessonMinutes} Minuten` : undefined)
  const items = [
    resolvedLesezeit ? { label: 'Lesezeit', value: resolvedLesezeit } : null,
    { label: 'Schwierigkeit', value: schwierigkeit },
    { label: 'Lernfeld', value: lernfeld },
    { label: 'Prüfung', value: prüfungsrelevanz },
  ].filter((item): item is { label: string; value: string } => item !== null)

  return (
    <dl className={cn('my-8 grid gap-3 border border-rule-2 bg-paper-deep p-4 font-ui sm:grid-cols-2 lg:grid-cols-4', className)}>
      {items.map((item) => (
        <div key={item.label} className="border-l-4 border-accent bg-paper px-4 py-3">
          <dt className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-muted">
            {item.label}
          </dt>
          <dd className="m-0 text-[15px] font-semibold leading-snug text-ink">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
