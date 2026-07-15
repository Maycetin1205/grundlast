import { NavLink } from 'react-router-dom'
import type { Chapter } from '../../content/catalog'
import { chapterUrl } from '../../lib/learning'
import { cn } from '../../lib/cn'
export default function ChapterLink({ chapter, onNavigate }: { chapter: Chapter; onNavigate?: () => void }) {
  return <NavLink to={chapterUrl(chapter)} onClick={onNavigate} className={({ isActive }) => cn('v2-chapter', isActive && 'active')}>{chapter.titel}</NavLink>
}
