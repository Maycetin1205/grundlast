import {
  Binary,
  BookMarked,
  Briefcase,
  Calculator,
  Code2,
  Cpu,
  Database,
  GanttChart,
  Globe,
  LayoutDashboard,
  Library,
  Map as MapIcon,
  Monitor,
  Network,
  Scale,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface TopLevelNavItem {
  to: string
  label: string
  icon: LucideIcon
  end?: boolean
}

export const PRIMARY_NAV_ITEMS: TopLevelNavItem[] = [
  { to: '/', label: 'Übersicht', icon: LayoutDashboard, end: true },
  { to: '/lernpfad', label: 'Lernpfad', icon: MapIcon },
]

export const SECONDARY_NAV_ITEMS: TopLevelNavItem[] = [
  { to: '/glossar', label: 'Glossar', icon: BookMarked },
  { to: '/quellen', label: 'Quellen', icon: Library },
]

export const ICONS: Record<string, LucideIcon> = {
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

export function shortcutLabel() {
  if (typeof navigator !== 'undefined' && /Mac|iPhone|iPad|iPod/.test(navigator.platform)) {
    return 'Cmd K'
  }
  return 'Strg K'
}
