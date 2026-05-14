/**
 * Grundlast · Quellen — Lookup-Logik
 *
 * Tag-basierter Filter: jede Lesson und jedes Lernfeld haben Tag-Listen.
 * getSourcesForLesson kombiniert sie und filtert sourceBank.
 */

import { lernfeldTags, slugTags, sourceBank } from "../../content/quellen"

export function getSourcesForLesson(lessonSlug: string, lernfeldSlug?: string) {
  const tags = new Set<string>([
    'ordnung',
    ...(lernfeldSlug ? lernfeldTags[lernfeldSlug] ?? [] : []),
    ...(slugTags[lessonSlug] ?? []),
  ])

  const exact = sourceBank.filter((source) => source.tags.some((tag) => tags.has(tag)))
  const fallback = sourceBank.filter((source) =>
    ['bibb-fachinformatiker', 'fiausbv', 'kmk-rahmenlehrplan'].includes(source.id),
  )

  return Array.from(new Map([...exact, ...fallback].map((source) => [source.id, source])).values()).slice(0, 6)
}
