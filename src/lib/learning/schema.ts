import { z } from 'zod'
import { AUFGABENFAMILIEN } from './types.ts'

const lernfeld = z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9)])
const sources = z.strictObject({ q1_scope: z.array(z.string()), q2_fachquelle: z.array(z.string()), q3_pruefungsrealitaet: z.array(z.string()) })
const scopeReferenceSchema = z.strictObject({ sourceId: z.string().min(1), locator: z.string().min(1) })

export const chapterSchema = z.strictObject({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  titel: z.string().min(3),
  primaryLf: lernfeld,
  relatedLfs: z.array(lernfeld),
  lfReihenfolge: z.number().int().positive(),
  themen: z.array(z.string()).min(1),
  ap1Kompetenzen: z.array(z.string()),
  ap1Relevanz: z.enum(['pflicht', 'hoch', 'mittel', 'niedrig', 'raus', 'unklar']),
  voraussetzungen: z.array(z.string()),
  lernzeit: z.number().int().positive(),
  aufgabenfamilien: z.array(z.enum(AUFGABENFAMILIEN)).min(1),
  inhaltsstatus: z.enum(['geplant', 'ausgearbeitet', 'teilgeprueft', 'geprueft', 'gesperrt']),
  quellen: sources,
  route: z.strictObject({ bereich: z.string().min(1), modul: z.string().min(1) }),
})

export const scopeItemSchema = z.strictObject({
  id: z.string().min(1),
  origin: z.enum(['kmk-rlp', 'fiausbv-18m', 'fiausbv-ap1']),
  learningFields: z.array(lernfeld).min(1),
  schoolYears: z.array(z.union([z.literal(1), z.literal(2)])).min(1),
  ap1Relation: z.enum(['direkt', 'unterstuetzend', 'nicht-ap1']),
  action: z.enum(['ermitteln', 'analysieren', 'planen', 'auswaehlen', 'umsetzen', 'pruefen', 'dokumentieren', 'kommunizieren', 'bewerten', 'reflektieren']),
  outcome: z.string().min(1),
  sourceRefs: z.array(scopeReferenceSchema).min(1),
  chapterSlugs: z.array(z.string().min(1)).min(1),
})

export const examCatalogDeltaSchema = z.strictObject({
  id: z.string().min(1),
  effectiveFrom: z.string().min(1),
  appliesTo: z.enum(['ap1', 'ap2', 'gesamt']),
  disposition: z.enum(['aufgenommen', 'gestrichen', 'verschoben', 'hinweis']),
  topics: z.array(z.string().min(1)).min(1),
  statement: z.string().min(1),
  sourceRefs: z.array(scopeReferenceSchema).min(1),
  chapterSlugs: z.array(z.string().min(1)).min(1),
})
