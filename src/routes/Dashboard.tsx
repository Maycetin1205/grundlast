import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { chapters } from '../content/catalog'
import LearningFieldNavigation from '../components/learning/LearningFieldNavigation'
import { ap1Coverage, buildLearningPath, chapterUrl, isChapterAvailable, nextChapter, useProgress } from '../lib/learning'

export default function Dashboard() {
  const progress = useProgress((state) => state.bySlug)
  const path = buildLearningPath(chapters)
  const next = nextChapter(path.filter(isChapterAvailable), progress)
  const gaps = ap1Coverage(progress).filter((item) => !item.complete)
  return <article className="v2-page">
    {next && <section className="v2-hero"><div className="v2-eyebrow">Als Nächstes · LF {next.primaryLf}</div><h1>{next.titel}</h1><p>Der nächste offene Schritt folgt demselben Voraussetzungspfad wie die Lernpfadansicht.</p><div className="v2-hero-actions"><Link className="v2-primary" to={chapterUrl(next)}>Weiterlernen <ArrowRight size={14}/></Link><Link className="v2-secondary" to="/lernpfad">Zum Lernpfad</Link><span className="v2-hero-meta">{next.lernzeit} min · LF {next.primaryLf}</span></div></section>}
    <section className="v2-section"><div className="v2-section-head"><h2>Weiter im Lernfeld</h2><span className="v2-muted">LF1–LF9 · {chapters.length} Kapitel</span></div><LearningFieldNavigation /></section>
    <section className="v2-section"><div className="v2-section-head"><h2>AP1-Lückencheck</h2><span className="v2-muted">{gaps.length} offene Kompetenzen</span></div>{gaps.slice(0, 3).map((gap) => <div className="v2-topic-row" key={gap.id}><span><span className="v2-row-title">{gap.titel}</span><span className="v2-row-sub">{gap.mastered} von {gap.total} gemeistert</span></span></div>)}</section>
  </article>
}
