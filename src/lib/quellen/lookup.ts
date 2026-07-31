/**
 * Die Quellen-IDs im Kapitelkatalog sind die einzige Laufzeitquelle.
 * Automatische Tag-Treffer und pauschale Fallbacks wirkten vertrauenswürdig,
 * obwohl sie eine konkrete Aussage nicht zwingend belegten.
 */

import { chapters } from '../../content/catalog'
import { sourceBank } from '../../content/quellen'

const chaptersBySlug = new Map(chapters.map((chapter) => [chapter.slug, chapter]))
const sourcesById = new Map(sourceBank.map((source) => [source.id, source]))

export function getSourcesForLesson(lessonSlug: string) {
  const chapter = chaptersBySlug.get(lessonSlug)
  if (!chapter) return []

  const ids = [
    ...chapter.quellen.q1_scope,
    ...chapter.quellen.q2_fachquelle,
    ...chapter.quellen.q3_pruefungsrealitaet,
  ]

  return Array.from(new Set(ids))
    .map((id) => sourcesById.get(id))
    .filter((source) => source !== undefined)
}
