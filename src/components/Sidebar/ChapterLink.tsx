import { NavLink } from 'react-router-dom'
import type { Chapter } from '../../content/catalog'
import { chapterTrust, chapterUrl } from '../../lib/learning'
import { cn } from '../../lib/cn'
export default function ChapterLink({ chapter, onNavigate }: { chapter: Chapter; onNavigate?: () => void }) {
  const trust = chapterTrust(chapter)
  return <NavLink to={chapterUrl(chapter)} onClick={onNavigate} aria-label={`${chapter.titel}, ${trust.label}`} className={({ isActive }) => cn('v2-chapter', isActive && 'active')}><span className={`status-dot ${chapter.inhaltsstatus}`} aria-hidden="true" />{chapter.titel}</NavLink>
}
