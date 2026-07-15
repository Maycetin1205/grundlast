import { Link } from 'react-router-dom'
import type { Chapter } from '../../content/catalog'
import { chapterUrl, isChapterAvailable } from '../../lib/learning'

export default function LearningPath({ chapters }: { chapters: Chapter[] }) {
  return <div className="v2-phase-card">{chapters.map((chapter, index) => isChapterAvailable(chapter)
    ? <Link key={chapter.slug} className="v2-path-row" to={chapterUrl(chapter)}>
        <span className="v2-index">{index + 1}</span><span className="v2-row-title">{chapter.titel}</span><span>LF {chapter.primaryLf}</span><span className="v2-row-time">{chapter.lernzeit} min</span>
      </Link>
    : <div key={chapter.slug} className="v2-path-row muted"><span className="v2-index">{index + 1}</span><span>{chapter.titel}</span><span>LF {chapter.primaryLf}</span><span className="v2-row-time">geplant</span></div>)}</div>
}
