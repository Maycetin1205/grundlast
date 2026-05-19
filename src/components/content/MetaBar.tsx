import { cn } from '../../lib/cn'

interface MetaBarProps {
  lernfeld: string
  prüfungsrelevanz?: string
  quelle?: string
  quelleHref?: string
  className?: string
}

export default function MetaBar({
  lernfeld,
  prüfungsrelevanz,
  quelle,
  quelleHref,
  className,
}: MetaBarProps) {
  const items: Array<{ label: string; value: React.ReactNode }> = [
    { label: 'Lernfeld', value: lernfeld },
  ]

  if (prüfungsrelevanz) {
    items.push({ label: 'Prüfung', value: prüfungsrelevanz })
  }

  if (quelle) {
    items.push({
      label: 'Quelle',
      value: quelleHref ? (
        <a
          href={quelleHref}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-rule-2 underline-offset-2 hover:text-ink"
        >
          {quelle}
        </a>
      ) : (
        quelle
      ),
    })
  }

  return (
    <div
      className={cn(
        'mb-6 mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-ui text-[12px] leading-snug text-muted',
        className,
      )}
    >
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-x-3">
          {index > 0 && <span aria-hidden className="text-rule-2">·</span>}
          <span>
            <span className="font-semibold text-ink">{item.label}:</span> {item.value}
          </span>
        </span>
      ))}
    </div>
  )
}
