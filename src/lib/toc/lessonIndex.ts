/**
 * Grundlast · Inhaltsverzeichnis — Lesson-Index
 *
 * Flache, aus dem TOC abgeleitete Struktur fuer Navigation und Suche.
 */

import { lernfelder } from "./data"
import { isLessonAvailable } from "./utils"
import type { Lesson } from "./types"

export interface LessonSearchItem {
  id: string
  slug: string
  title: string
  lf?: Lesson["lf"]
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
      slug: lesson.slug,
      title: lesson.title,
      lf: lesson.lf,
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
