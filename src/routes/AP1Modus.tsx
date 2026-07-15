import Ap1Checklist from '../components/learning/Ap1Checklist'
import { AP1_EXAM_SPEC } from '../lib/exam'

export default function AP1Modus() {
  return <article className="v2-page v2-page-wide"><header className="v2-page-head"><div><h1>AP1 — Kompetenzcheck</h1><p>Die Checkliste folgt den fünf nach § 9 FIAusbV nachzuweisenden Handlungsfähigkeiten, nicht einer pauschalen LF-Liste.</p></div></header><div className="v2-facts"><div className="v2-fact"><strong>{AP1_EXAM_SPEC.durationMinutes} min</strong><span>Bearbeitungszeit</span></div><div className="v2-fact"><strong>20 %</strong><span>der Abschlussnote</span></div><div className="v2-fact"><strong>5</strong><span>amtliche Kompetenzen</span></div></div><Ap1Checklist /></article>
}
