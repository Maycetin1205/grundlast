import { useMemo } from 'react'
import { BookMarked, Home, Library, Map, Search, Tags, Target, Wrench } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { cn } from '../../lib/cn'
import { chapters } from '../../content/catalog'
import { learningFieldGroups } from '../../lib/learning'
import ThemeToggle from '../ThemeToggle'
import LernfeldGroup from './LernfeldGroup'
import { shortcutLabel } from './nav-config'
interface SidebarProps { className?: string; onNavigate?: () => void; onSearchOpen?: () => void }
const primary = [{ to: '/', label: 'Start', icon: Home, end: true }, { to: '/lernpfad', label: 'Lernpfad', icon: Map }, { to: '/ap1', label: 'AP1-Prüfung', icon: Target }]
const lookup = [{ to: '/themen', label: 'Themen', icon: Tags }, { to: '/glossar', label: 'Glossar', icon: BookMarked }, { to: '/quellen', label: 'Quellen', icon: Library }, { to: '/werkzeuge', label: 'Werkzeuge', icon: Wrench }]
export default function Sidebar({ className, onNavigate, onSearchOpen }: SidebarProps) {
  const keys = useMemo(() => shortcutLabel(), [])
  const renderLinks = (items: typeof primary) => items.map(({ to, label, icon: Icon, end }) => <NavLink key={to} to={to} end={end} onClick={onNavigate} className={({ isActive }) => cn('v2-nav-item', isActive && 'active')}><Icon size={15} strokeWidth={1.7} aria-hidden="true" />{label}</NavLink>)
  return <aside className={cn('v2-sidebar', className)}><div className="v2-side-head"><span className="v2-logo">G</span><span className="v2-wordmark">Grundlast</span><ThemeToggle className="v2-theme" /></div><div className="v2-search-wrap"><button type="button" className="v2-search" onClick={onSearchOpen}><Search size={13} aria-hidden="true"/><span>Suchen</span><kbd>{keys}</kbd></button></div><nav className="v2-nav"><div className="v2-nav-list">{renderLinks(primary)}</div><div className="v2-nav-label">Nachschlagen</div><div className="v2-nav-list">{renderLinks(lookup)}</div><div className="v2-nav-label chapters"><span>Lernfelder</span><b>{chapters.length}</b></div>{learningFieldGroups().map((field) => <LernfeldGroup key={field.id} field={field} chapters={field.chapters} onNavigate={onNavigate} />)}</nav></aside>
}
