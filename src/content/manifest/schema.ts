/**
 * Grundlast - Lektions-Manifest: Schema, Gates und berechneter Status.
 *
 * Single Source of Truth fuer technische Lektions-Metadaten.
 * MDX bleibt Inhalt. src/lib/toc bleibt abgeleitete Navigation/UI.
 *
 * A2-Regel:
 * - ready/final werden nicht manuell im Manifest behauptet.
 * - Q1-Scope ist immer Pflicht.
 * - Q2-Fachquelle ist Pflicht, sobald technische, juristische oder normative
 *   Fakten erklaert werden.
 * - Q3-Pruefungsrealitaet beschreibt spaeter Aufgabenform/Tiefe, ist aber
 *   keine Kopierquelle.
 */

import { z } from 'zod'

export const LERNFELDER = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const
export type Lernfeld = (typeof LERNFELDER)[number]

export const AUFGABENFAMILIEN = [
  'rechnen',
  'zeichnen',
  'zuordnen',
  'begruenden',
  'diagnostizieren',
  'anwenden',
] as const
export type Aufgabenfamilie = (typeof AUFGABENFAMILIEN)[number]

export const AP1_RELEVANZ = ['pflicht', 'hoch', 'mittel', 'niedrig', 'raus', 'unklar'] as const
export type Ap1Relevanz = (typeof AP1_RELEVANZ)[number]

export const VERTRAUENSSTATUS = ['ungeprueft', 'teilgeprueft', 'geprueft', 'gesperrt'] as const
export type Vertrauensstatus = (typeof VERTRAUENSSTATUS)[number]

export const LESSON_STATUS = ['stub', 'draft', 'review', 'ready', 'final', 'locked'] as const
export type LessonStatus = (typeof LESSON_STATUS)[number]

export const QUELLEN_ROLLEN = [
  'Q1_SCOPE',
  'Q2_FACHQUELLE',
  'Q3_PRUEFUNGSREALITAET',
] as const
export type QuellenRolle = (typeof QUELLEN_ROLLEN)[number]

const lernfeldSchema = z.union([
  z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5),
  z.literal(6), z.literal(7), z.literal(8), z.literal(9),
])

const jahrSchema = z.union([z.literal(1), z.literal(2)])

export const quellenSchema = z.strictObject({
  /** Amtlicher Scope: FIAusbV, KMK-RLP, BIBB/IHK/ZPA-Scope. Immer Pflicht. */
  q1_scope: z.array(z.string().min(1)).default([]),
  /** Fachquelle: Gesetz, BSI, RFC, Norm, Hersteller-Doku etc. Pflicht bei Fakten. */
  q2_fachquelle: z.array(z.string().min(1)).default([]),
  /** Legale Pruefungsrealitaet: nur fuer Aufgabenform/Tiefe, nie als Kopierquelle. */
  q3_pruefungsrealitaet: z.array(z.string().min(1)).default([]),
})

export type Quellen = z.infer<typeof quellenSchema>

export const lessonMetaSchema = z.strictObject({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'slug muss ASCII-kebab-case sein'),
  titel: z.string().min(3),
  lf: lernfeldSchema,
  aufgabenfamilie: z.array(z.enum(AUFGABENFAMILIEN)).min(1),
  ap1_relevanz: z.enum(AP1_RELEVANZ),
  jahr: z.array(jahrSchema).min(1),
  /** True, sobald technische/juristische/normative Fakten erklaert werden. */
  erklaert_fakten: z.boolean().default(true),
  fachlich: z.enum(VERTRAUENSSTATUS).default('ungeprueft'),
  quellen: quellenSchema.default({}),
  modul: z.string().optional(),
})

export type LessonMeta = z.infer<typeof lessonMetaSchema>

export const lessonManifestSchema = z
  .array(lessonMetaSchema)
  .superRefine((rows, ctx) => {
    const seen = new Set<string>()
    for (const row of rows) {
      if (seen.has(row.slug)) {
        ctx.addIssue({ code: 'custom', message: `Doppelter slug im Manifest: ${row.slug}` })
      }
      seen.add(row.slug)
    }
  })

export interface AufgabenGates {
  aufgaben_vorhanden: boolean
  transfer_vorhanden: boolean
  loesungen_vorhanden: boolean
  fallen_vorhanden: boolean
  pruefungsantwort_vorhanden: boolean
}

export interface EncodingFinding {
  kind: 'mojibake' | 'false_repair' | 'ascii_umlaut'
  pattern: string
}

export interface EncodingCheck {
  ok: boolean
  findings: EncodingFinding[]
}

export interface DerivedFacts {
  hat_mdx: boolean
  zeichen: number
  aufgaben: AufgabenGates
  encoding: EncodingCheck
}

export const MIN_ZEICHEN = 600

const MOJIBAKE_PATTERNS = ['Ã', 'Â', 'â€', 'â€“', 'â€”', 'ðŸ']
const FALSE_REPAIR_PATTERNS = ['zürst']
const ASCII_UMLAUT_PATTERNS = [
  '\\bPruefung\\b',
  '\\bpruefen\\b',
  '\\bLoesung\\b',
  '\\bloesen\\b',
  '\\bmuss\\b',
]

export function detectEncodingFindings(text: string): EncodingCheck {
  const findings: EncodingFinding[] = []

  for (const pattern of MOJIBAKE_PATTERNS) {
    if (text.includes(pattern)) findings.push({ kind: 'mojibake', pattern })
  }

  for (const pattern of FALSE_REPAIR_PATTERNS) {
    if (text.includes(pattern)) findings.push({ kind: 'false_repair', pattern })
  }

  for (const pattern of ASCII_UMLAUT_PATTERNS) {
    if (new RegExp(pattern, 'i').test(text)) {
      findings.push({ kind: 'ascii_umlaut', pattern })
    }
  }

  return { ok: findings.length === 0, findings }
}

export function quellenGateOk(meta: Pick<LessonMeta, 'quellen' | 'erklaert_fakten'>): boolean {
  const hatQ1 = meta.quellen.q1_scope.length > 0
  const hatQ2 = meta.quellen.q2_fachquelle.length > 0

  if (!hatQ1) return false
  if (meta.erklaert_fakten && !hatQ2) return false
  return true
}

export function aufgabenGatesOk(gates: AufgabenGates): boolean {
  return (
    gates.aufgaben_vorhanden &&
    gates.transfer_vorhanden &&
    gates.loesungen_vorhanden &&
    gates.fallen_vorhanden &&
    gates.pruefungsantwort_vorhanden
  )
}

export function contentGatesOk(meta: Pick<LessonMeta, 'quellen' | 'erklaert_fakten'>, facts: DerivedFacts): boolean {
  return quellenGateOk(meta) && aufgabenGatesOk(facts.aufgaben) && facts.encoding.ok
}

export function computeStatus(
  meta: Pick<LessonMeta, 'fachlich' | 'quellen' | 'erklaert_fakten'>,
  facts: DerivedFacts,
): LessonStatus {
  if (meta.fachlich === 'gesperrt') return 'locked'
  if (!facts.hat_mdx || facts.zeichen < MIN_ZEICHEN) return 'stub'
  if (!contentGatesOk(meta, facts)) return 'draft'
  if (meta.fachlich === 'ungeprueft') return 'review'
  if (meta.fachlich === 'teilgeprueft') return 'ready'
  return 'final'
}

export function assertNoManualStatus(input: unknown): void {
  if (typeof input === 'object' && input !== null && 'status' in input) {
    throw new Error('Manifest darf keinen manuellen status enthalten; Status wird aus Gates berechnet.')
  }
}

export const AUFGABENFAMILIE_LABEL: Record<Aufgabenfamilie, string> = {
  rechnen: 'Rechnen',
  zeichnen: 'Zeichnen',
  zuordnen: 'Zuordnen',
  begruenden: 'Begruenden',
  diagnostizieren: 'Diagnostizieren',
  anwenden: 'Anwenden',
}

export const VERTRAUENS_LABEL: Record<Vertrauensstatus, string> = {
  ungeprueft: 'KI-ungeprueft',
  teilgeprueft: 'Teilweise geprueft',
  geprueft: 'Geprueft',
  gesperrt: 'Gesperrt',
}

export const STATUS_LABEL: Record<LessonStatus, string> = {
  stub: 'Geplant',
  draft: 'Entwurf',
  review: 'Inhalt komplett, fachlich offen',
  ready: 'Ausgearbeitet',
  final: 'Geprueft und freigegeben',
  locked: 'Gesperrt',
}

export const QUELLEN_ROLLE_LABEL: Record<QuellenRolle, string> = {
  Q1_SCOPE: 'Q1 Scope',
  Q2_FACHQUELLE: 'Q2 Fachquelle',
  Q3_PRUEFUNGSREALITAET: 'Q3 Pruefungsrealitaet',
}
