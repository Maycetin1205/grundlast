/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState, type ComponentType } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { chapterNeighbors, getChapter, isChapterAvailable, loadChapter, useProgress } from '../lib/learning'
import { getSourcesForLesson } from '../lib/quellen'
import GrundlastMDXProvider from '../components/mdx/MDXProvider'
import LessonSources from '../components/content/LessonSources'
import ChapterFooter from '../components/content/ChapterFooter'
type MDXModule = { default: ComponentType<Record<string, never>> }
export default function Lesson() {
  const { lektion } = useParams<{ lektion: string }>()
  const [Content, setContent] = useState<ComponentType<Record<string, never>> | null>(null), [failed, setFailed] = useState(false)
  const chapter = getChapter(lektion), progress = useProgress((state) => state.bySlug), setProgress = useProgress((state) => state.setProgress)
  const sources = chapter ? getSourcesForLesson(chapter.slug, chapter.route.bereich) : []
  const nav = chapter ? chapterNeighbors(chapter.slug) : { previous: null, next: null }
  const loader = chapter ? loadChapter(chapter.slug) as (() => Promise<MDXModule>) | undefined : undefined
  useEffect(() => { setContent(null); setFailed(false); if (!loader) return; let stop = false; loader().then((module) => { if (!stop) setContent(() => module.default) }).catch(() => { if (!stop) setFailed(true) }); return () => { stop = true } }, [loader, lektion])
  if (!chapter || !isChapterAvailable(chapter) || failed || !loader) return <article className="v2-page"><h1>Kapitel nicht verfügbar</h1><p>Dieses Kapitel ist noch nicht freigegeben.</p></article>
  if (!Content) return <div className="v2-page">Lektion wird geladen ?</div>
  return <article className="lesson-shell"><div className="lesson-topbar"><span>LF {chapter.primaryLf} / {chapter.titel}</span><span>{nav.previous && <Link className="v2-secondary !h-[30px] !px-2" to={nav.previous.to} aria-label="Vorheriges Kapitel"><ChevronLeft size={14}/></Link>} {nav.next && <Link className="v2-secondary !h-[30px] !px-2" to={nav.next.to} aria-label="Nächstes Kapitel"><ChevronRight size={14}/></Link>}</span></div><div className="lesson-grid"><main className="lesson-article"><header><div className="v2-nav-label !m-0 !p-0 !text-[var(--acc-text)]">LF {chapter.primaryLf}</div><h1>{chapter.titel}</h1><div className="v2-path-meta"><span>{chapter.lernzeit} Minuten</span><Link to="#quellen">{sources.length} Quellen</Link><select aria-label="Persönlicher Lernstatus" value={progress[chapter.slug] ?? 'not_started'} onChange={(event) => setProgress(chapter.slug, event.target.value as 'not_started'|'learning'|'review'|'mastered')}><option value="not_started">Nicht begonnen</option><option value="learning">In Arbeit</option><option value="review">Wiederholen</option><option value="mastered">Gemeistert</option></select></div></header><GrundlastMDXProvider><div className="lesson-content"><Content/><section id="quellen"><h2>Quellen</h2>{sources.length ? <LessonSources sources={sources}/> : <p>Für dieses Kapitel sind noch keine separaten Quellen hinterlegt.</p>}</section><ChapterFooter previous={nav.previous} next={nav.next}/></div></GrundlastMDXProvider></main><aside className="lesson-toc"><Link className="v2-secondary" to="/">Zur Startseite</Link></aside></div></article>
}
