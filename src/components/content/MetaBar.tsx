import { cn } from '../../lib/cn'
import { sourceBank } from '../../content/quellen/sourceBank'

interface MetaBarProps {
  lernfeld: string
  lernfeldHref?: string
  prüfungsrelevanz?: string
  prüfungHref?: string
  quelle?: string
  quelleHref?: string
  className?: string
}

const DEFAULT_LERNFELD_HREF = sourceBank.find((entry) => entry.id === 'kmk-rahmenlehrplan')?.href
const DEFAULT_PRÜFUNG_HREF = sourceBank.find((entry) => entry.id === 'fiausbv')?.href

function MetaLink({ href, children }: { href?: string; children: React.ReactNode }) {
  if (!href) return <>{children}</>
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-rule-2 underline-offset-2 hover:text-ink"
    >
      {children}
    </a>
  )
}

export default function MetaBar({
  lernfeld,
  lernfeldHref,
  prüfungsrelevanz,
  prüfungHref,
  quelle,
  quelleHref,
  className,
}: MetaBarProps) {
  const items: Array<{ label: string; value: string; href?: string }> = [
    { label: 'Lernfeld', value: lernfeld, href: lernfeldHref ?? DEFAULT_LERNFELD_HREF },
  ]

  if (prüfungsrelevanz) {
    items.push({
      label: 'Prüfung',
      value: prüfungsrelevanz,
      href: prüfungHref ?? DEFAULT_PRÜFUNG_HREF,
    })
  }

  if (quelle) {
    items.push({ label: 'Quelle', value: quelle, href: quelleHref })
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
            <span className="font-semibold text-ink">{item.label}:</span>{' '}
            <MetaLink href={item.href}>{item.value}</MetaLink>
          </span>
        </span>
      ))}
    </div>
  )
}
