/**
 * Sidebar · Navigations-Konfiguration
 *
 * Icon-Map fuer Lernfelder (Slug-basierter Lookup), Tastatur-Shortcut-Label
 * und andere statische Konfiguration.
 */

import {
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
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

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
