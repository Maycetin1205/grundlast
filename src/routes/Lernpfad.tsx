import { chapters } from '../content/catalog'
import LearningPath from '../components/learning/LearningPath'
import { buildLearningPath } from '../lib/learning'

export default function Lernpfad() {
  const path = buildLearningPath(chapters)
  return <article className="v2-page v2-page-wide"><header className="v2-page-head"><div><h1>Dein Lernpfad</h1><p>Die Reihenfolge wird deterministisch aus Voraussetzungen und der didaktischen LF-Reihenfolge berechnet.</p></div></header><LearningPath chapters={path} /></article>
}
