import { Search } from 'lucide-react'
import { useMemo } from 'react'
import { cn } from '../../lib/cn'
import { isLessonAvailable, lernfelder } from '../../lib/toc'
import ThemeToggle from '../ThemeToggle'
import LernfeldGroup from './LernfeldGroup'
import NavItem from './NavItem'
import {
  PRIMARY_NAV_ITEMS,
  SECONDARY_NAV_ITEMS,
  shortcutLabel,
} from './nav-config'

interface SidebarProps {
  className?: string
  onNavigate?: () => void
  onSearchOpen?: () => void
}

export default function Sidebar({ className, onNavigate, onSearchOpen }: SidebarProps) {
  const keys = useMemo(() => shortcutLabel(), [])
  const visibleAreas = lernfelder.filter((area) =>
    area.moduls.some((modul) => modul.lessons.some(isLessonAvailable)),
  )

  return (
    <aside className={cn('app-rail', className)}>
      <div className="rail-brand">
        <div className="rail-brand__mark" aria-hidden="true">L</div>
        <div className="rail-brand__text">
          <div className="rail-brand__name">
            lern<span>haus</span>
          </div>
          <div className="rail-brand__sub">Kompendium · FIAE/FISI</div>
        </div>
        <ThemeToggle className="rail-theme-toggle" />
      </div>

      <div className="rail-search-wrap">
        <button type="button" onClick={onSearchOpen} className="rail-search">
          <Search size={15} aria-hidden="true" />
          <span>Kapitel suchen …</span>
          <kbd>{keys}</kbd>
        </button>
      </div>

      <nav className="rail-primary" aria-label="Hauptnavigation">
        {PRIMARY_NAV_ITEMS.map((item) => (
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
      </nav>

      <div className="rail-section-label">
        <span>Themenbereiche</span>
        <span>{visibleAreas.length}</span>
      </div>

      <div className="rail-areas">
        {visibleAreas.map((area) => (
          <LernfeldGroup key={area.slug} area={area} onNavigate={onNavigate} />
        ))}
      </div>

      <nav className="rail-secondary" aria-label="Nachschlagewerke">
        {SECONDARY_NAV_ITEMS.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            icon={item.icon}
            onNavigate={onNavigate}
          >
            {item.label}
          </NavItem>
        ))}
      </nav>

      <div className="rail-footer">1. + 2. Lehrjahr · LF 1–9</div>
    </aside>
  )
}
