import type { LernfeldNr } from '../../lib/learning/types.ts'

export interface LearningFieldExpectation {
  lf: LernfeldNr
  minimumChapterPackages: number
  schoolYear: 1 | 2
  hours: number
}

/**
 * Mindestpakete aus KAPITELPLAN_LF1_LF9.md.
 *
 * Der Katalog darf ein Paket feiner in mehrere Kapitel teilen. Weniger Kapitel
 * als hier angegeben sind jedoch ein belastbares Warnsignal für eine
 * unvollständige Lernfeldabdeckung. Die spätere atomare Kompetenzmatrix wird
 * diese Mindestprüfung ergänzen, nicht ersetzen.
 */
export const learningFieldExpectations: readonly LearningFieldExpectation[] = [
  { lf: 1, minimumChapterPackages: 9, schoolYear: 1, hours: 40 },
  { lf: 2, minimumChapterPackages: 20, schoolYear: 1, hours: 80 },
  { lf: 3, minimumChapterPackages: 10, schoolYear: 1, hours: 80 },
  { lf: 4, minimumChapterPackages: 11, schoolYear: 1, hours: 40 },
  { lf: 5, minimumChapterPackages: 16, schoolYear: 1, hours: 80 },
  { lf: 6, minimumChapterPackages: 14, schoolYear: 2, hours: 40 },
  { lf: 7, minimumChapterPackages: 5, schoolYear: 2, hours: 80 },
  { lf: 8, minimumChapterPackages: 6, schoolYear: 2, hours: 80 },
  { lf: 9, minimumChapterPackages: 8, schoolYear: 2, hours: 80 },
] as const
