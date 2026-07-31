import type { LernfeldNr } from '../../../lib/learning/types.ts'

export type ScopeOrigin = 'kmk-rlp' | 'fiausbv-18m' | 'fiausbv-ap1'
export type ScopeAction =
  | 'ermitteln'
  | 'analysieren'
  | 'planen'
  | 'auswaehlen'
  | 'umsetzen'
  | 'pruefen'
  | 'dokumentieren'
  | 'kommunizieren'
  | 'bewerten'
  | 'reflektieren'

export type Ap1Relation = 'direkt' | 'unterstuetzend' | 'nicht-ap1'

export interface ScopeReference {
  sourceId: string
  locator: string
}

/**
 * Kleinste prüfbare Kompetenz im verbindlichen Ausbildungsrahmen.
 *
 * `outcome` ist eine Paraphrase, kein Ersatz für die verlinkte Primärquelle.
 * `chapterSlugs` bilden gemeinsam das konservative Abdeckungspaket. Fachlich
 * belegt ist ein Atom erst, wenn jedes zugeordnete Kapitel geprüft ist.
 */
export interface ScopeItem {
  id: string
  origin: ScopeOrigin
  learningFields: readonly LernfeldNr[]
  schoolYears: readonly (1 | 2)[]
  ap1Relation: Ap1Relation
  action: ScopeAction
  outcome: string
  sourceRefs: readonly ScopeReference[]
  chapterSlugs: readonly string[]
}

export interface ExamCatalogDelta {
  id: string
  effectiveFrom: string
  appliesTo: 'ap1' | 'ap2' | 'gesamt'
  disposition: 'aufgenommen' | 'gestrichen' | 'verschoben' | 'hinweis'
  topics: readonly string[]
  statement: string
  sourceRefs: readonly ScopeReference[]
  chapterSlugs: readonly string[]
}
