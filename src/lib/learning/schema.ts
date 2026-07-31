import { z } from 'zod'
import { AUFGABENFAMILIEN } from './types.ts'

const lernfeld = z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9)])
const sources = z.strictObject({ q1_scope: z.array(z.string()), q2_fachquelle: z.array(z.string()), q3_pruefungsrealitaet: z.array(z.string()) })

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
