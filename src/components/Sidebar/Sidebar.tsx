/**
 * Sidebar · Hauptkomponente
 *
 * Linke Seitenleiste mit Branding, Suche, Fortschritts-Bar,
 * Top-Level-Nav und aufklappbaren Lernfeldern.
 */

import { useMemo } from "react"
import {
  CheckCircle2,
  Search,
} from "lucide-react"
import { cn } from "../../lib/cn"
import { isLessonAvailable, lernfelder, readyLessons, totalLessons } from "../../lib/toc"
import ThemeToggle from "../ThemeToggle"
import NavItem from "./NavItem"
import LernfeldGroup from "./LernfeldGroup"
import { shortcutLabel, TOP_LEVEL_NAV_ITEMS } from "./nav-config"

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
        "flex h-full w-[344px] shrink-0 flex-col overflow-hidden border-r border-rule bg-paper-deep text-ink",
        className,
      )}
    >
      <div className="border-b border-rule bg-paper px-5 py-5">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-paper"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "17px",
              fontVariationSettings: '"opsz" 9, "SOFT" 30',
              letterSpacing: "-0.02em",
            }}
          >
            L
          </div>
          <div className="min-w-0 flex-1">
            <p
              className="m-0 truncate text-[18px] font-medium leading-tight text-ink"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "SOFT" 50',
                letterSpacing: "-0.01em",
              }}
            >
              lern<em style={{ color: "var(--color-accent)", fontWeight: 500 }}>haus</em>
            </p>
            <p
              className="m-0 truncate font-mono text-[10.5px] uppercase leading-tight text-muted"
              style={{ letterSpacing: "0.12em" }}
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
          {TOP_LEVEL_NAV_ITEMS.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              icon={item.icon}
              end={item.end}
              onNavigate={onNavigate}
            >
              {item.label}
            </NavItem>
          ))}
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
