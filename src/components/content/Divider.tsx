import { cn } from '../../lib/cn'

interface DividerProps {
  className?: string
}

export default function Divider({ className }: DividerProps) {
  return (
    <div className={cn('my-14 flex justify-center', className)} aria-hidden="true">
      <div className="relative h-px w-16 bg-rule">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-paper px-2.5 font-body text-[10px] tracking-[0.3em] text-accent-soft">
          ❦
        </span>
      </div>
    </div>
  )
}
