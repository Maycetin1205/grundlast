import { Link } from 'react-router-dom'
import { chapterUrl, isChapterAvailable, learningFieldGroups, progressForChapters, useProgress } from '../../lib/learning'

export default function LearningFieldNavigation() {
  const progress = useProgress((state) => state.bySlug)
  return <div className="v2-lf-grid">{learningFieldGroups().map((field) => {
    const first = field.chapters.find(isChapterAvailable)
    const summary = progressForChapters(field.chapters, progress)
    return <Link key={field.id} className="v2-lf-card" to={first ? chapterUrl(first) : '/themen'}>
      <span className="v2-mono">LF {field.id}</span>
      <span><span className="v2-row-title">{field.kurz}</span><span className="v2-row-sub">{field.titel}</span></span>
      <span className="v2-count">{summary.mastered}/{summary.total}</span>
    </Link>
  })}</div>
}
