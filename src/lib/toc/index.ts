/**
 * Grundlast · Inhaltsverzeichnis — Public API
 *
 * Re-exportiert Typen, Daten und Utilities.
 */

export type {
  Lesson,
  Modul,
  Lernfeld,
  LernfeldNr,
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

export {
  learningFieldTitle,
  OFFICIAL_LEARNING_FIELDS,
} from "./learningFields"
