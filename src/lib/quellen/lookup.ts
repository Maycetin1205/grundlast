/**
 * Grundlast · Quellen — Lookup-Logik
 *
 * Tag-basierter Filter: jede Lesson und jedes Lernfeld haben Tag-Listen.
 * getSourcesForLesson kombiniert sie und filtert sourceBank.
 */

import { lernfeldTags, lessonSourceIds, slugTags, sourceBank } from "../../content/quellen"

const fallbackSourceIds = ['bibb-fachinformatiker', 'fiausbv', 'kmk-rahmenlehrplan']

export function getSourcesForLesson(lessonSlug: string, lernfeldSlug?: string) {
  const lessonTagSet = new Set(slugTags[lessonSlug] ?? [])
  const lernfeldTagSet = new Set(lernfeldSlug ? lernfeldTags[lernfeldSlug] ?? [] : [])
  const preferred = (lessonSourceIds[lessonSlug] ?? [])
    .map((sourceId) => sourceBank.find((source) => source.id === sourceId))
    .filter((source) => source !== undefined)

  const exact = sourceBank
    .map((source, index) => {
      const score = source.tags.reduce((sum, tag) => {
        if (lessonTagSet.has(tag)) return sum + 4
        if (lernfeldTagSet.has(tag)) return sum + 2
        if (tag === 'ordnung') return sum
        return sum
      }, 0)

      return { source, score, index }
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map((entry) => entry.source)

  const fallback = sourceBank.filter((source) =>
    fallbackSourceIds.includes(source.id),
  )

  return Array.from(
    new Map([...preferred, ...exact, ...fallback].map((source) => [source.id, source])).values(),
  ).slice(0, 6)
}
