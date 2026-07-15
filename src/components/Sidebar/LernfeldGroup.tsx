import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { LearningField, Chapter } from '../../content/catalog'
import { chapterUrl, isChapterAvailable } from '../../lib/learning'
import ChapterLink from './ChapterLink'
export default function LernfeldGroup({ field, chapters, onNavigate }: { field: LearningField; chapters: Chapter[]; onNavigate?: () => void }) {
  const location = useLocation(), chaptersRef = useRef<HTMLDivElement>(null)
  const available = chapters.filter(isChapterAvailable), first = available[0]
  const active = available.some((chapter) => location.pathname === chapterUrl(chapter))
  useEffect(() => {
    chaptersRef.current?.querySelector<HTMLElement>('.v2-chapter.active')?.scrollIntoView({ block: 'nearest' })
  }, [location.pathname])
  if (!first) return null
  return <section className="v2-lf-row" style={{ display: 'block' }}><Link className="v2-lf-button no-underline" to={chapterUrl(first)} onClick={onNavigate}><span>LF {field.id} · {field.kurz}</span><span className="v2-lf-count">{available.length}</span></Link>{active && <div ref={chaptersRef} className="v2-chapters">{available.map((chapter) => <ChapterLink key={chapter.slug} chapter={chapter} onNavigate={onNavigate} />)}</div>}</section>
}
