import { Link } from 'react-router-dom'
import { ap1Coverage, chapterUrl, isChapterAvailable, useProgress } from '../../lib/learning'

export default function Ap1Checklist() {
  const progress = useProgress((state) => state.bySlug)
  return <div>{ap1Coverage(progress).map((competency) => {
    const first = competency.chapters.find(isChapterAvailable)
    return <section className="v2-section" key={competency.id}>
      <div className="v2-section-head"><h2>{competency.titel}</h2><span className="v2-muted">{competency.verified}/{competency.total} Kapitel fachlich geprüft</span></div>
      <p>{competency.beschreibung}</p>
      {first && <Link className="v2-topic-row" to={chapterUrl(first)}><span><span className="v2-row-title">{first.titel}</span><span className="v2-row-sub">{competency.available} verfügbar · {competency.mastered} von dir als sicher markiert</span></span></Link>}
    </section>
  })}</div>
}
