import { chapters } from '../content/catalog'
import { isChapterAvailable } from '../lib/learning'
import { AP1_EXAM_SPEC } from '../lib/exam'

export default function Exams() {
  const relevant = chapters.filter((chapter) => chapter.ap1Kompetenzen.length > 0)
  const available = relevant.filter(isChapterAvailable)
  const readiness = relevant.length ? Math.round(available.length / relevant.length * 100) : 0
  return <article className="v2-page"><header className="v2-page-head"><div><h1>Prüfungsmodul in Planung</h1><p>Die spätere Aufgabensimulation verwendet denselben kompetenzgebundenen AP1-Bestand wie der Kompetenzcheck.</p></div></header><div className="v2-facts"><div className="v2-fact"><strong>{AP1_EXAM_SPEC.durationMinutes} min</strong><span>Prüfungszeit</span></div><div className="v2-fact"><strong>{readiness} %</strong><span>Inhalte verfügbar</span></div><div className="v2-fact"><strong>{available.length}/{relevant.length}</strong><span>Kapitel</span></div></div></article>
}
