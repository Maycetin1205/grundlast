import type { LucideIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { cn } from '../../lib/cn'

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
      className={({ isActive }) => cn('rail-nav-item', isActive && 'rail-nav-item--active')}
    >
      <Icon size={16} aria-hidden="true" />
      <span>{children}</span>
    </NavLink>
  )
}
