import { useEffect, useMemo, useRef, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import * as Dialog from '@radix-ui/react-dialog'
import * as Popover from '@radix-ui/react-popover'
import Fuse from 'fuse.js'
import {
  Award,
  Binary,
  BookMarked,
  BookOpen,
  Briefcase,
  Calculator,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Code2,
  Cpu,
  Database,
  GanttChart,
  Globe,
  LayoutDashboard,
  Library,
  Monitor,
  Network,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
  X,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { isLessonAvailable, lessonStatusLabel, lernfelder } from '../lib/toc'
import type { Lernfeld, Lesson } from '../lib/toc'
import { cn } from '../lib/cn'
import ThemeToggle from './ThemeToggle'

const ICONS: Record<string, LucideIcon> = {
  Award,
  Binary,
  Briefcase,
  Calculator,
  Code2,
  Cpu,
  Database,
  GanttChart,
  Globe,
  Monitor,
  Network,
  Scale,
  ShieldCheck,
  Sparkles,
}

const totalLessons = lernfelder.reduce(
  (acc, lf) => acc + lf.moduls.reduce((a, m) => a + m.lessons.length, 0),
  0,
)

const readyLessons = lernfelder.reduce(
  (acc, lf) =>
    acc + lf.moduls.reduce((a, m) => a + m.lessons.filter(isLessonAvailable).length, 0),
  0,
)

interface LessonSearchItem {
  id: string
  title: string
  lernfeld: string
  modul: string
  to: string
  preview: string
  minutes?: number
  status?: Lesson['status']
}

const lessonIndex: LessonSearchItem[] = lernfelder.flatMap((lf) =>
  lf.moduls.flatMap((modul) =>
    modul.lessons.map((lesson) => {
      return {
        id: `${lf.slug}/${modul.slug}/${lesson.slug}`,
        title: lesson.title,
        lernfeld: lf.title,
        modul: modul.title,
        to: `/lernen/${lf.slug}/${modul.slug}/${lesson.slug}`,
        preview: `${lesson.title} gehoert zu ${modul.title} im Bereich ${lf.title}.`,
        minutes: lesson.minutes,
        status: lesson.status,
      }
    }),
  ),
)


function shortcutLabel() {
  if (typeof navigator !== 'undefined' && /Mac|iPhone|iPad|iPod/.test(navigator.platform)) {
    return 'Cmd K'
  }

  return 'Ctrl K'
}

interface NavItemProps {
  to: string
  icon: LucideIcon
  children: React.ReactNode
  end?: boolean
  onNavigate?: () => void
}

function NavItem({ to, icon: Icon, children, end, onNavigate }: NavItemProps) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onNavigate}
      className={({ isActive }) =>
        cn(
          'group flex h-10 items-center gap-3 rounded-md px-3 font-ui text-[14px] font-medium no-underline transition-colors',
          isActive
            ? 'bg-ink text-paper shadow-sm hover:no-underline'
            : 'text-muted hover:bg-paper hover:text-ink hover:no-underline',
        )
      }
    >
      <Icon size={17} className="shrink-0" aria-hidden="true" />
      <span className="min-w-0 flex-1 truncate">{children}</span>
    </NavLink>
  )
}

interface ChapterLinkProps {
  item: LessonSearchItem
  onNavigate?: () => void
}

function ChapterLink({ item, onNavigate }: ChapterLinkProps) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<number | null>(null)

  function clearCloseTimer() {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  function showPreview() {
    clearCloseTimer()
    setOpen(true)
  }

  function hidePreview() {
    clearCloseTimer()
    closeTimer.current = window.setTimeout(() => setOpen(false), 100)
  }

  useEffect(() => clearCloseTimer, [])

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <NavLink
          to={item.to}
          onClick={onNavigate}
          onPointerEnter={showPreview}
          onPointerLeave={hidePreview}
          onFocus={showPreview}
          onBlur={hidePreview}
          className={({ isActive }) =>
            cn(
              'group grid min-h-9 grid-cols-[16px_minmax(0,1fr)_auto] items-center gap-2 rounded-md px-2.5 py-1.5 font-ui text-[13px] leading-snug no-underline transition-colors',
              isActive
                ? 'bg-paper text-ink shadow-[inset_3px_0_0_var(--color-accent)] hover:no-underline'
                : 'text-muted hover:bg-paper hover:text-ink hover:no-underline',
            )
          }
        >
          <span
            className={cn(
              'h-2.5 w-2.5 justify-self-center rounded-full border',
              item.status === 'ready' || item.status === 'final'
                ? 'border-accent bg-accent'
                : item.status === 'draft'
                  ? 'border-rule-2'
                  : 'border-rule bg-transparent',
            )}
            style={
              item.status === 'draft'
                ? { background: 'color-mix(in oklch, var(--color-c-amber) 70%, transparent)' }
                : undefined
            }
            aria-hidden="true"
          />
          <span className="min-w-0 truncate">{item.title}</span>
        </NavLink>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="right"
          align="start"
          sideOffset={14}
          collisionPadding={16}
          onPointerEnter={showPreview}
          onPointerLeave={hidePreview}
          onOpenAutoFocus={(event) => event.preventDefault()}
          className="z-50 w-80 rounded-md border border-rule bg-paper px-4 py-3 shadow-xl outline-none"
        >
          <p className="mb-1 font-ui text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
            Kapitelvorschau
          </p>
          <p className="mb-2 font-ui text-[15px] font-semibold leading-snug text-ink">
            {item.title}
          </p>
          <p className="mb-3 font-body text-sm leading-relaxed text-muted">
            {item.preview}
          </p>
          <div className="flex flex-wrap items-center gap-2 font-ui text-[11px] text-muted">
            {item.minutes && <span>{item.minutes} min</span>}
            <span>{lessonStatusLabel(item.status)}</span>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

function LernfeldGroup({ lf, onNavigate }: { lf: Lernfeld; onNavigate?: () => void }) {
  const location = useLocation()
  const activeInGroup = lf.moduls.some((modul) =>
    modul.lessons.some((lesson) =>
      location.pathname === `/lernen/${lf.slug}/${modul.slug}/${lesson.slug}`,
    ),
  )
  const [manualOpen, setManualOpen] = useState(false)
  const open = activeInGroup || manualOpen
  const Icon = ICONS[lf.icon] ?? BookOpen
  const [listRef] = useAutoAnimate({ duration: 140 })
  const total = lf.moduls.reduce((sum, modul) => sum + modul.lessons.length, 0)
  const ready = lf.moduls.reduce(
    (sum, modul) => sum + modul.lessons.filter(isLessonAvailable).length,
    0,
  )
  const planned = total - ready
  const availableModules = lf.moduls
    .map((modul) => ({
      ...modul,
      lessons: modul.lessons.filter(isLessonAvailable),
    }))
    .filter((modul) => modul.lessons.length > 0)

  return (
    <section className="rounded-lg border border-transparent">
      <button
        type="button"
        onClick={() => setManualOpen((current) => !current)}
        aria-expanded={open}
        className={cn(
          'flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left font-ui transition-colors',
          open ? 'bg-paper text-ink' : 'text-ink hover:bg-paper',
        )}
      >
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-rule bg-paper-deep text-muted"
          aria-hidden="true"
        >
          <Icon size={16} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[14px] font-semibold leading-tight">{lf.title}</span>
          <span className="mt-0.5 block text-[11px] leading-tight text-muted">
            {ready} verfuegbar{planned > 0 ? ` - ${planned} geplant` : ''}
          </span>
        </span>
        <ChevronRight
          size={16}
          className={cn('shrink-0 text-muted transition-transform', open && 'rotate-90')}
          aria-hidden="true"
        />
      </button>

      <div ref={listRef}>
        {open && (
          <div className="mt-1 space-y-3 border-l border-rule/80 pl-4">
            {availableModules.map((modul) => (
              <div key={modul.slug}>
                <p className="mb-1.5 px-2 font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {modul.title}
                </p>
                <div className="space-y-1">
                  {modul.lessons.map((lesson) => {
                    const item = lessonIndex.find(
                      (entry) => entry.id === `${lf.slug}/${modul.slug}/${lesson.slug}`,
                    )

                    if (!item) return null

                    return <ChapterLink key={lesson.slug} item={item} onNavigate={onNavigate} />
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

interface SidebarProps {
  className?: string
  onNavigate?: () => void
  onSearchOpen?: () => void
}

export default function Sidebar({ className, onNavigate, onSearchOpen }: SidebarProps) {
  const keys = useMemo(() => shortcutLabel(), [])
  const progress = Math.round((readyLessons / totalLessons) * 100)

  return (
    <aside
      className={cn(
        'flex h-full w-[344px] shrink-0 flex-col overflow-hidden border-r border-rule bg-paper-deep text-ink',
        className,
      )}
    >
      <div className="border-b border-rule bg-paper px-5 py-5">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-paper"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '17px',
              fontVariationSettings: '"opsz" 9, "SOFT" 30',
              letterSpacing: '-0.02em',
            }}
          >
            L
          </div>
          <div className="min-w-0 flex-1">
            <p
              className="m-0 truncate text-[18px] font-medium leading-tight text-ink"
              style={{
                fontFamily: 'var(--font-display)',
                fontVariationSettings: '"opsz" 144, "SOFT" 50',
                letterSpacing: '-0.01em',
              }}
            >
              lern<em style={{ color: 'var(--color-accent)', fontWeight: 500 }}>haus</em>
            </p>
            <p
              className="m-0 truncate font-mono text-[10.5px] uppercase leading-tight text-muted"
              style={{ letterSpacing: '0.12em' }}
            >
              FIAE · FISI · 1.+2. Lehrjahr
            </p>
          </div>
          <ThemeToggle />
        </div>
      </div>

      <div className="space-y-4 border-b border-rule px-4 py-4">
        <button
          type="button"
          onClick={onSearchOpen}
          className="flex h-11 w-full items-center gap-3 rounded-lg border border-rule bg-paper px-3 text-left font-ui text-sm text-muted shadow-sm transition-colors hover:border-accent/50 hover:text-ink"
        >
          <Search size={17} className="shrink-0" aria-hidden="true" />
          <span className="min-w-0 flex-1 truncate">Kapitel suchen</span>
          <kbd className="shrink-0 rounded-sm border border-rule bg-paper-deep px-1.5 py-0.5 font-ui text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
            {keys}
          </kbd>
        </button>

        <div>
          <div className="mb-2 flex items-center justify-between font-ui text-[12px]">
            <span className="font-medium text-muted">Ausbau</span>
            <span className="font-semibold text-ink">
              {readyLessons}/{totalLessons}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-rule">
            <div
              className="h-full rounded-full bg-accent transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-1">
          <NavItem to="/" icon={LayoutDashboard} end onNavigate={onNavigate}>
            Übersicht
          </NavItem>
          <NavItem to="/ap1" icon={Target} onNavigate={onNavigate}>
            AP1-Modus
          </NavItem>
          <NavItem to="/prüfen" icon={ClipboardCheck} onNavigate={onNavigate}>
            Prüfen (geplant)
          </NavItem>
          <NavItem to="/werkzeuge" icon={Wrench} onNavigate={onNavigate}>
            Werkzeuge (geplant)
          </NavItem>
          <NavItem to="/glossar" icon={BookMarked} onNavigate={onNavigate}>
            Glossar
          </NavItem>
          <NavItem to="/quellen" icon={Library} onNavigate={onNavigate}>
            Quellen
          </NavItem>
        </div>

        <div className="mb-2 mt-6 flex items-center justify-between px-1 font-ui">
          <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            Lernfelder
          </p>
          <span className="text-[11px] text-muted">{lernfelder.length}</span>
        </div>

        <div className="space-y-1.5">
          {lernfelder
            .filter((lf) => lf.moduls.some((modul) => modul.lessons.some(isLessonAvailable)))
            .map((lf) => (
              <LernfeldGroup key={lf.slug} lf={lf} onNavigate={onNavigate} />
            ))}
        </div>
      </nav>

      <div className="border-t border-rule bg-paper px-4 py-3 font-ui text-[12px] text-muted">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={15} className="text-accent" aria-hidden="true" />
          <span>{progress}% als Lerninhalt verfuegbar</span>
        </div>
      </div>
    </aside>
  )
}

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const keys = useMemo(() => shortcutLabel(), [])
  const fuse = useMemo(
    () =>
      new Fuse(lessonIndex, {
        keys: ['title', 'lernfeld', 'modul', 'preview'],
        threshold: 0.34,
        ignoreLocation: true,
      }),
    [],
  )
  const results = query.trim()
    ? fuse
        .search(query.trim())
        .map((result) => result.item)
        .filter(isLessonAvailable)
        .slice(0, 9)
    : lessonIndex.filter(isLessonAvailable).slice(0, 9)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        onOpenChange(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onOpenChange])

  useEffect(() => {
    if (!open) return
    const focusTimer = window.setTimeout(() => {
      setQuery('')
      inputRef.current?.focus()
    }, 0)

    return () => window.clearTimeout(focusTimer)
  }, [open])

  function choose(item: LessonSearchItem) {
    onOpenChange(false)
    navigate(item.to)
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-ink/30" />
        <Dialog.Content className="fixed left-1/2 top-20 z-[80] w-[min(720px,calc(100vw-32px))] -translate-x-1/2 rounded-lg border border-rule bg-paper shadow-2xl outline-none">
          <Dialog.Title className="sr-only">Command-Palette</Dialog.Title>
          <div className="flex items-center gap-3 border-b border-rule px-5 py-4">
            <Search size={19} className="shrink-0 text-muted" aria-hidden="true" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Kapitel suchen"
              className="min-w-0 flex-1 bg-transparent font-ui text-base text-ink outline-none placeholder:text-muted"
            />
            <kbd className="hidden shrink-0 rounded-sm border border-rule bg-paper-deep px-2 py-1 font-ui text-[10px] font-semibold uppercase tracking-[0.1em] text-muted sm:block">
              {keys}
            </kbd>
            <Dialog.Close
              className="shrink-0 rounded-md p-1 text-muted transition-colors hover:bg-paper-deep hover:text-ink"
              aria-label="Suche schließen"
            >
              <X size={18} aria-hidden="true" />
            </Dialog.Close>
          </div>

          <div className="max-h-[60vh] overflow-y-auto p-2">
            {results.length > 0 ? (
              results.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => choose(item)}
                  className="grid w-full grid-cols-[1fr_auto] gap-4 rounded-md px-4 py-3 text-left transition-colors hover:bg-paper-deep"
                >
                  <span className="min-w-0">
                    <span className="block truncate font-ui text-sm font-semibold text-ink">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block truncate font-ui text-xs text-muted">
                      {item.lernfeld} / {item.modul}
                    </span>
                  </span>
                  <span className="self-center rounded-sm border border-rule px-2 py-0.5 font-ui text-[10px] uppercase tracking-[0.1em] text-accent">
                    {item.minutes ? `${item.minutes} min` : 'Kapitel'}
                  </span>
                </button>
              ))
            ) : (
              <p className="px-4 py-8 text-center font-ui text-sm text-muted">
                Keine Treffer.
              </p>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
