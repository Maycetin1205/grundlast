import { chapters, learningFields, topics } from '../../content/catalog'
import type { Chapter } from '../../content/catalog'
import type { LernfeldNr } from './types'

export const chapterBySlug = new Map(chapters.map((chapter) => [chapter.slug, chapter]))

export function getChapter(slug: string | undefined) {
  return slug ? chapterBySlug.get(slug) ?? null : null
}

export function chapterUrl(chapter: Chapter) {
  return `/lernen/${chapter.route.bereich}/${chapter.route.modul}/${chapter.slug}`
}

export function chaptersForLf(lf: LernfeldNr) {
  return chapters.filter((chapter) => chapter.primaryLf === lf).sort((a, b) => a.lfReihenfolge - b.lfReihenfolge)
}

export function chaptersForTopic(topicId: string) {
  return chapters.filter((chapter) => chapter.themen.includes(topicId))
}

export function learningFieldGroups() {
  return learningFields.map((field) => ({ ...field, chapters: chaptersForLf(field.id) }))
}

export function topicGroups() {
  return topics.map((topic) => ({ ...topic, chapters: chaptersForTopic(topic.id) }))
}

export function searchChapters(query: string) {
  const needle = query.trim().toLocaleLowerCase('de')
  if (!needle) return chapters
  return chapters.filter((chapter) => {
    const topicTitles = chapter.themen.map((id) => topics.find((topic) => topic.id === id)?.titel ?? '')
    return [chapter.titel, `LF ${chapter.primaryLf}`, ...topicTitles].some((value) => value.toLocaleLowerCase('de').includes(needle))
  })
}
