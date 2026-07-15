import type { Chapter } from '../../content/catalog'
import type { PersonalProgress } from './types'

function compareChapter(a: Chapter, b: Chapter) {
  return a.primaryLf - b.primaryLf || a.lfReihenfolge - b.lfReihenfolge || a.slug.localeCompare(b.slug)
}

export function buildLearningPath(input: readonly Chapter[]) {
  const bySlug = new Map(input.map((chapter) => [chapter.slug, chapter]))
  const remaining = new Map(input.map((chapter) => [chapter.slug, new Set(chapter.voraussetzungen)]))
  const result: Chapter[] = []
  while (remaining.size) {
    const ready = [...remaining.entries()]
      .filter(([, deps]) => deps.size === 0)
      .map(([slug]) => bySlug.get(slug)!)
      .sort(compareChapter)
    if (!ready.length) throw new Error('Voraussetzungsgraf enthält einen Zyklus oder unbekannte Abhängigkeiten.')
    for (const chapter of ready) {
      result.push(chapter)
      remaining.delete(chapter.slug)
      for (const deps of remaining.values()) deps.delete(chapter.slug)
    }
  }
  return result
}

export function nextChapter(path: readonly Chapter[], progress: Record<string, PersonalProgress>) {
  return path.find((chapter) => chapter.inhaltsstatus !== 'geplant' && progress[chapter.slug] !== 'mastered') ?? null
}
