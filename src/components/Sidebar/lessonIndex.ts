/**
 * Sidebar · Lesson-Such-Index
 *
 * Baut aus dem TOC einen flachen Such-Index mit allen Lektionen.
 * Wird von Sidebar (Nav-Anzeige) und CommandPalette (Volltextsuche) geteilt.
 */

import { isLessonAvailable, lernfelder } from "../../lib/toc"
import type { Lesson } from "../../lib/toc"

export interface LessonSearchItem {
  id: string
  title: string
  lernfeld: string
  modul: string
  to: string
  preview: string
  minutes?: number
  status?: Lesson["status"]
}

export const lessonIndex: LessonSearchItem[] = lernfelder.flatMap((lf) =>
  lf.moduls.flatMap((modul) =>
    modul.lessons.map((lesson) => ({
      id: `${lf.slug}/${modul.slug}/${lesson.slug}`,
      title: lesson.title,
      lernfeld: lf.title,
      modul: modul.title,
      to: `/lernen/${lf.slug}/${modul.slug}/${lesson.slug}`,
      preview: `${lesson.title} gehoert zu ${modul.title} im Bereich ${lf.title}.`,
      minutes: lesson.minutes,
      status: lesson.status,
    })),
  ),
)

export const totalLessons = lernfelder.reduce(
  (acc, lf) => acc + lf.moduls.reduce((a, m) => a + m.lessons.length, 0),
  0,
)

export const readyLessons = lernfelder.reduce(
  (acc, lf) =>
    acc + lf.moduls.reduce((a, m) => a + m.lessons.filter(isLessonAvailable).length, 0),
  0,
)
