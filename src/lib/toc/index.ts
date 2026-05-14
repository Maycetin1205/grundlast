/**
 * Grundlast · Inhaltsverzeichnis — Public API
 *
 * Re-exportiert Typen, Daten und Utilities.
 * Bestehende Imports `from '../lib/toc'` funktionieren ohne Anpassung weiter.
 */

export type {
  Lesson,
  Modul,
  Lernfeld,
  LessonStatus,
  LessonNavLink,
} from "./types"

export { lernfelder } from "./data"

export {
  findLesson,
  isLessonAvailable,
  isLessonFinal,
  lessonStatusLabel,
  getLessonNeighbors,
} from "./utils"

export type { LessonSearchItem } from "./lessonIndex"

export {
  lessonIndex,
  readyLessons,
  totalLessons,
} from "./lessonIndex"
