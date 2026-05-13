import { Moon, Sun } from 'lucide-react'
import { cn } from '../lib/cn'
import { useTheme } from '../lib/theme'

interface ThemeToggleProps {
  className?: string
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const mode = useTheme((s) => s.mode)
  const toggle = useTheme((s) => s.toggle)
  const isDark = mode === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Auf Light-Mode wechseln' : 'Auf Dark-Mode wechseln'}
      title={isDark ? 'Light-Mode' : 'Dark-Mode'}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-md border border-rule bg-paper text-ink-2 transition-colors',
        'hover:border-accent/60 hover:text-accent',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        className,
      )}
    >
      {isDark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
    </button>
  )
}
