/**
 * Sidebar · NavItem
 *
 * Top-Level-Nav-Link (Uebersicht, AP1-Modus, Glossar, ...).
 */

import { NavLink } from "react-router-dom"
import type { LucideIcon } from "lucide-react"
import { cn } from "../../lib/cn"

interface NavItemProps {
  to: string
  icon: LucideIcon
  children: React.ReactNode
  end?: boolean
  onNavigate?: () => void
}

export default function NavItem({ to, icon: Icon, children, end, onNavigate }: NavItemProps) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onNavigate}
      className={({ isActive }) =>
        cn(
          "group flex h-10 items-center gap-3 rounded-md px-3 font-ui text-[14px] font-medium no-underline transition-colors",
          isActive
            ? "bg-ink text-paper shadow-sm hover:no-underline"
            : "text-muted hover:bg-paper hover:text-ink hover:no-underline",
        )
      }
    >
      <Icon size={17} className="shrink-0" aria-hidden="true" />
      <span className="min-w-0 flex-1 truncate">{children}</span>
    </NavLink>
  )
}
