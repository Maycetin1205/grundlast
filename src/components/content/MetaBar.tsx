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
    <dl className={cn('my-8 flex flex-wrap gap-x-10 gap-y-4 border-y border-rule py-5 font-ui', className)}>
      {items.map((item) => (
        <div key={item.label}>
          <dt className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted">
            {item.label}
          </dt>
          <dd className="text-sm font-medium text-ink">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
