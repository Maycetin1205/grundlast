import Quellen from './Quellen'
import type { SourceEntry } from '../../lib/quellen'

interface LessonSourcesProps {
  sources: SourceEntry[]
}

export default function LessonSources({ sources }: LessonSourcesProps) {
  if (sources.length === 0) return null

  return (
    <Quellen
      titel="Quellen für diese Lektion"
      quellen={sources.map((source) => ({
        label: source.label,
        href: source.href,
        detail: source.detail,
      }))}
    />
  )
}
