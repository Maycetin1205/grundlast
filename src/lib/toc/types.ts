/**
 * Grundlast · Inhaltsverzeichnis — Typdefinitionen
 *
 * Die Datentypen für Lernfelder, Module und Lektionen.
 * Werden von den Daten in data/ und den Utilities in utils.ts verwendet.
 */

export type LessonStatus = "final" | "ready" | "draft" | "stub"

/** Offizielles KMK-Lernfeld (1-9, gemeinsam fuer alle FI-Fachrichtungen). */
export type LernfeldNr = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export interface Lesson {
  slug: string
  title: string
  /** Primaeres offizielles KMK-Lernfeld der Lektion (Orientierung im Navi). */
  lf?: LernfeldNr
  minutes?: number
  importance?: 1 | 2 | 3 | 4 | 5
  exam?: boolean // AP1-prüfungsrelevant
  status?: LessonStatus
}

export interface Modul {
  slug: string
  title: string
  lessons: Lesson[]
}

export interface Lernfeld {
  slug: string
  title: string
  description: string
  icon: string
  color: string
  moduls: Modul[]
}

export interface LessonNavLink {
  label: string
  to: string
  eyebrow: string
}
