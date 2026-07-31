import { chapters } from '../content/catalog'
import { isChapterAvailable, trustForChapters } from '../lib/learning'
import { AP1_EXAM_SPEC } from '../lib/exam'

export default function Exams() {
  const relevant = chapters.filter((chapter) => chapter.ap1Kompetenzen.length > 0)
  const available = relevant.filter(isChapterAvailable)
  const trust = trustForChapters(relevant)
  return <article className="v2-page"><header className="v2-page-head"><div><h1>Prüfungsmodul in Planung</h1><p>Eine Prüfungssimulation wird erst freigeschaltet, wenn Aufgabenbank und zugeordnete Inhalte fachlich geprüft sind.</p></div></header><div className="v2-facts"><div className="v2-fact"><strong>{AP1_EXAM_SPEC.durationMinutes} min</strong><span>Prüfungszeit</span></div><div className="v2-fact"><strong>{trust.verifiedPercent} %</strong><span>fachlich geprüfte AP1-Kapitel</span></div><div className="v2-fact"><strong>{trust.verified}/{relevant.length}</strong><span>geprüft</span></div><div className="v2-fact"><strong>{available.length}/{relevant.length}</strong><span>als Lerntext verfügbar</span></div></div></article>
}
