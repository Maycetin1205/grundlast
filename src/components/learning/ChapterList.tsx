import { Link } from 'react-router-dom'
import type { Chapter } from '../../content/catalog'
import { chapterTrust, chapterUrl, isChapterAvailable } from '../../lib/learning'

export default function ChapterList({ chapters }: { chapters: Chapter[] }) {
  return <div>{chapters.map((chapter) => isChapterAvailable(chapter)
    ? <Link key={chapter.slug} className="v2-list-row" to={chapterUrl(chapter)}>
        <span className="v2-index">{String(chapter.lfReihenfolge).padStart(2, '0')}</span>
        <span><span className="v2-row-title">{chapter.titel}</span><span className="v2-row-sub">LF {chapter.primaryLf} · {chapter.lernzeit} min</span></span>
        <span className="v2-row-status"><span className={`status-dot ${chapter.inhaltsstatus}`} />{chapterTrust(chapter).shortLabel}</span>
      </Link>
    : <div key={chapter.slug} className="v2-list-row muted"><span className="v2-index">{String(chapter.lfReihenfolge).padStart(2, '0')}</span><span>{chapter.titel}</span><span className="v2-row-time">geplant</span></div>)}</div>
}
