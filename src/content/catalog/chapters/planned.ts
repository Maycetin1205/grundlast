import type { Chapter } from '../types.ts'

type PlannedChapterInput = Pick<
  Chapter,
  'slug' | 'titel' | 'primaryLf' | 'lfReihenfolge' | 'themen' | 'ap1Kompetenzen' | 'ap1Relevanz' | 'voraussetzungen' | 'aufgabenfamilien' | 'route'
> & {
  relatedLfs?: Chapter['relatedLfs']
  lernzeit?: number
  q1Scope?: string[]
}

/** Vollständiger, aber bewusst nicht freigegebener Katalogeintrag. */
export function plannedChapter(input: PlannedChapterInput): Chapter {
  const { relatedLfs, lernzeit, q1Scope, ...chapter } = input
  return {
    ...chapter,
    relatedLfs: relatedLfs ?? [],
    lernzeit: lernzeit ?? 30,
    inhaltsstatus: 'geplant',
    quellen: {
      q1_scope: q1Scope ?? ['kmk-rahmenlehrplan'],
      q2_fachquelle: [],
      q3_pruefungsrealitaet: [],
    },
  }
}
