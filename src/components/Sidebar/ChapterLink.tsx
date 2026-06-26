import { NavLink } from 'react-router-dom'
import { cn } from '../../lib/cn'
import type { LessonSearchItem } from '../../lib/toc'

interface ChapterLinkProps {
  item: LessonSearchItem
  onNavigate?: () => void
}

export default function ChapterLink({ item, onNavigate }: ChapterLinkProps) {
  return (
    <NavLink
      to={item.to}
      onClick={onNavigate}
      className={({ isActive }) =>
        cn('chapter-link', isActive && 'chapter-link--active')
      }
    >
      <span className="chapter-link__dot" aria-hidden="true" />
      <span className="chapter-link__title">{item.title}</span>
      {item.lf && <span className="chapter-link__lf">LF {item.lf}</span>}
    </NavLink>
  )
}
