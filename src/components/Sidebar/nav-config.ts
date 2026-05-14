/**
 * Sidebar · Navigations-Konfiguration
 *
 * Icon-Map fuer Lernfelder (Slug-basierter Lookup), Tastatur-Shortcut-Label
 * und andere statische Konfiguration.
 */

import {
  Award,
  Binary,
  BookMarked,
  Briefcase,
  Calculator,
  Code2,
  ClipboardCheck,
  Cpu,
  Database,
  GanttChart,
  Globe,
  LayoutDashboard,
  Library,
  Monitor,
  Network,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface TopLevelNavItem {
  to: string
  label: string
  icon: LucideIcon
  end?: boolean
}

export const TOP_LEVEL_NAV_ITEMS: TopLevelNavItem[] = [
  { to: "/", label: "Übersicht", icon: LayoutDashboard, end: true },
  { to: "/ap1", label: "AP1-Modus", icon: Target },
  { to: "/prüfen", label: "Prüfen (geplant)", icon: ClipboardCheck },
  { to: "/werkzeuge", label: "Werkzeuge (geplant)", icon: Wrench },
  { to: "/glossar", label: "Glossar", icon: BookMarked },
  { to: "/quellen", label: "Quellen", icon: Library },
]

export const ICONS: Record<string, LucideIcon> = {
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

export function shortcutLabel() {
  if (typeof navigator !== "undefined" && /Mac|iPhone|iPad|iPod/.test(navigator.platform)) {
    return "Cmd K"
  }

  return "Ctrl K"
}
