import { cn } from '../../lib/cn'

type BreadcrumbItem = string | {
  label: string
  current?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

function labelOf(item: BreadcrumbItem) {
  return typeof item === 'string' ? item : item.label
}

function isCurrent(item: BreadcrumbItem, index: number, items: BreadcrumbItem[]) {
  return typeof item === 'string' ? index === items.length - 1 : item.current ?? index === items.length - 1
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        'mb-6 flex flex-wrap items-center gap-2.5 font-ui text-[11px] uppercase tracking-[0.18em] text-muted',
        className,
      )}
    >
      {items.map((item, index) => (
        <span key={`${labelOf(item)}-${index}`} className="contents">
          <span className={cn(isCurrent(item, index, items) && 'text-accent')}>
            {labelOf(item)}
          </span>
          {index < items.length - 1 && (
            <span className="text-rule" aria-hidden="true">
              &rsaquo;
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
