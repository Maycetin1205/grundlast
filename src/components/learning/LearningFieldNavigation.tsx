import { Link } from 'react-router-dom'
import { chapterUrl, isChapterAvailable, learningFieldGroups, trustForChapters } from '../../lib/learning'

export default function LearningFieldNavigation() {
  return <div className="v2-lf-grid">{learningFieldGroups().map((field) => {
    const first = field.chapters.find(isChapterAvailable)
    const summary = trustForChapters(field.chapters)
    return <Link key={field.id} className="v2-lf-card" to={first ? chapterUrl(first) : '/themen'}>
      <span className="v2-mono">LF {field.id}</span>
      <span><span className="v2-row-title">{field.kurz}</span><span className="v2-row-sub">{field.titel}</span></span>
      <span className="v2-count" title="Fachlich geprüfte Kapitel">{summary.verified}/{summary.total}</span>
    </Link>
  })}</div>
}
