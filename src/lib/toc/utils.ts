/**
 * Grundlast · Inhaltsverzeichnis — Utility-Funktionen
 *
 * Pure Funktionen zum Lookup, Navigation und Statusabfragen.
 * Operieren auf der `lernfelder`-Liste aus ./data.
 */

import type {
  Lernfeld,
  Lesson,
  LessonNavLink,
  LessonStatus,
  Modul,
} from "./types"
import { lernfelder } from "./data"

interface LessonNavEntry extends LessonNavLink {
  slug: string
}

export function findLesson(
  slug: string,
): { lesson: Lesson; modul: Modul; lernfeld: Lernfeld } | null {
  for (const lf of lernfelder) {
    for (const m of lf.moduls) {
      const l = m.lessons.find((x) => x.slug === slug)
      if (l) return { lesson: l, modul: m, lernfeld: lf }
    }
  }
  return null
}

export function isLessonAvailable(lesson: Pick<Lesson, "status">) {
  return lesson.status === "ready" || lesson.status === "final"
}

export function isLessonFinal(lesson: Pick<Lesson, "status">) {
  return lesson.status === "final"
}

export function lessonStatusLabel(status: LessonStatus | undefined) {
  switch (status) {
    case "final":
      return "Formal geprueft"
    case "ready":
      return "Ausgearbeitet"
    case "draft":
      return "Entwurf"
    case "stub":
      return "Geplant"
    default:
      return "Unbekannt"
  }
}

function lessonRoute(lernfeld: Lernfeld, modul: Modul, lesson: Lesson) {
  return `/lernen/${lernfeld.slug}/${modul.slug}/${lesson.slug}`
}

export function getLessonNeighbors(slug: string): {
  previous: LessonNavLink | null
  next: LessonNavLink | null
} {
  const entries: LessonNavEntry[] = lernfelder.flatMap((lf) =>
    lf.moduls.flatMap((modul) =>
      modul.lessons.filter(isLessonAvailable).map((lesson) => ({
        slug: lesson.slug,
        label: lesson.title,
        to: lessonRoute(lf, modul, lesson),
        eyebrow: `${lf.title} · ${modul.title}`,
      })),
    ),
  )

  const index = entries.findIndex((entry) => entry.slug === slug)
  if (index === -1) {
    return { previous: null, next: null }
  }

  return {
    previous: entries[index - 1] ?? null,
    next: entries[index + 1] ?? null,
  }
}
