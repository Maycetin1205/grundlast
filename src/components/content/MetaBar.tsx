import { cn } from '../../lib/cn'

interface MetaBarProps {
  lesezeit: string
  schwierigkeit: string
  lernfeld: string
  pruefungsrelevanz: string
  className?: string
}

export default function MetaBar({
  lesezeit,
  schwierigkeit,
  lernfeld,
  pruefungsrelevanz,
  className,
}: MetaBarProps) {
  const items = [
    { label: 'Lesezeit', value: lesezeit },
    { label: 'Schwierigkeit', value: schwierigkeit },
    { label: 'Lernfeld', value: lernfeld },
    { label: 'Prüfung', value: pruefungsrelevanz },
  ]

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
