import { describe, it, expect } from 'vitest'
import {
  MIN_ZEICHEN,
  aufgabenGatesOk,
  computeStatus,
  contentGatesOk,
  detectEncodingFindings,
  lessonManifestSchema,
  lessonMetaSchema,
  quellenGateOk,
} from './schema'
import type { AufgabenGates, DerivedFacts, LessonMeta } from './schema'

const completeQuellen = {
  q1_scope: ['fiausbv'],
  q2_fachquelle: ['rfc-791'],
  q3_pruefungsrealitaet: [],
}

const validMeta = {
  slug: 'ipv4-subnetting',
  titel: 'IPv4 & Subnetting',
  lf: 3,
  aufgabenfamilie: ['rechnen'],
  ap1_relevanz: 'pflicht',
  jahr: [1],
  erklaert_fakten: true,
  quellen: completeQuellen,
} satisfies Partial<LessonMeta>

function aufgaben(over: Partial<AufgabenGates> = {}): AufgabenGates {
  return {
    aufgaben_vorhanden: true,
    transfer_vorhanden: true,
    loesungen_vorhanden: true,
    fallen_vorhanden: true,
    pruefungsantwort_vorhanden: true,
    ...over,
  }
}

function facts(over: Partial<DerivedFacts> = {}): DerivedFacts {
  return {
    hat_mdx: true,
    zeichen: 2000,
    aufgaben: aufgaben(),
    encoding: { ok: true, findings: [] },
    ...over,
  }
}

describe('quellenGateOk - getrennte Rollen Q1/Q2/Q3', () => {
  it('Q1-Scope ist immer Pflicht', () => {
    expect(quellenGateOk({ quellen: { ...completeQuellen, q1_scope: [] }, erklaert_fakten: false })).toBe(false)
  })

  it('Q2 ist Pflicht, wenn Fakten erklaert werden', () => {
    expect(quellenGateOk({ quellen: { ...completeQuellen, q2_fachquelle: [] }, erklaert_fakten: true })).toBe(false)
  })

  it('Q2 ist nicht Pflicht, wenn keine Fakten erklaert werden', () => {
    expect(quellenGateOk({ quellen: { ...completeQuellen, q2_fachquelle: [] }, erklaert_fakten: false })).toBe(true)
  })

  it('Q3 allein ersetzt weder Q1 noch Q2', () => {
    expect(quellenGateOk({
      quellen: {
        q1_scope: [],
        q2_fachquelle: [],
        q3_pruefungsrealitaet: ['legaler-abgleich'],
      },
      erklaert_fakten: true,
    })).toBe(false)
  })
})

describe('aufgabenGatesOk - A2-Aufgaben-Gates', () => {
  it('alle Aufgaben-Gates muessen fuer ready/final erfuellt sein', () => {
    expect(aufgabenGatesOk(aufgaben())).toBe(true)
    expect(aufgabenGatesOk(aufgaben({ transfer_vorhanden: false }))).toBe(false)
    expect(aufgabenGatesOk(aufgaben({ pruefungsantwort_vorhanden: false }))).toBe(false)
  })
})

describe('computeStatus - Status ist berechnet, nicht behauptet', () => {
  it('gesperrt => locked', () => {
    expect(computeStatus({ ...validMeta, fachlich: 'gesperrt' } as LessonMeta, facts())).toBe('locked')
  })

  it('ohne MDX oder mit Kurzinhalt => stub', () => {
    expect(computeStatus({ ...validMeta, fachlich: 'geprueft' } as LessonMeta, facts({ hat_mdx: false }))).toBe('stub')
    expect(computeStatus({ ...validMeta, fachlich: 'geprueft' } as LessonMeta, facts({ zeichen: MIN_ZEICHEN - 1 }))).toBe('stub')
  })

  it('fehlende Quellen, Aufgaben oder Encoding-Gates => draft', () => {
    expect(computeStatus(
      { ...validMeta, fachlich: 'geprueft', quellen: { ...completeQuellen, q1_scope: [] } } as LessonMeta,
      facts(),
    )).toBe('draft')

    expect(computeStatus(
      { ...validMeta, fachlich: 'geprueft' } as LessonMeta,
      facts({ aufgaben: aufgaben({ fallen_vorhanden: false }) }),
    )).toBe('draft')

    expect(computeStatus(
      { ...validMeta, fachlich: 'geprueft' } as LessonMeta,
      facts({ encoding: { ok: false, findings: [{ kind: 'mojibake', pattern: 'Ã' }] } }),
    )).toBe('draft')
  })

  it('alle Gates ok, aber ungeprueft => review', () => {
    expect(computeStatus({ ...validMeta, fachlich: 'ungeprueft' } as LessonMeta, facts())).toBe('review')
  })

  it('alle Gates + teilgeprueft => ready', () => {
    expect(computeStatus({ ...validMeta, fachlich: 'teilgeprueft' } as LessonMeta, facts())).toBe('ready')
  })

  it('alle Gates + geprueft => final', () => {
    expect(computeStatus({ ...validMeta, fachlich: 'geprueft' } as LessonMeta, facts())).toBe('final')
  })

  it('contentGatesOk spiegelt Quellen, Aufgaben und Encoding', () => {
    expect(contentGatesOk(validMeta as LessonMeta, facts())).toBe(true)
    expect(contentGatesOk(validMeta as LessonMeta, facts({ aufgaben: aufgaben({ loesungen_vorhanden: false }) }))).toBe(false)
  })
})

describe('lessonMetaSchema - strenge Validierung', () => {
  it('gueltiger Minimal-Eintrag parst Defaults', () => {
    const parsed = lessonMetaSchema.parse(validMeta)
    expect(parsed.fachlich).toBe('ungeprueft')
    expect(parsed.quellen.q3_pruefungsrealitaet).toEqual([])
  })

  it('Umlaut im slug wird abgelehnt', () => {
    expect(lessonMetaSchema.safeParse({ ...validMeta, slug: 'pruefen-ä' }).success).toBe(false)
  })

  it('ungueltiges Lernfeld wird abgelehnt', () => {
    expect(lessonMetaSchema.safeParse({ ...validMeta, lf: 10 }).success).toBe(false)
  })

  it('leere Aufgabenfamilien werden abgelehnt', () => {
    expect(lessonMetaSchema.safeParse({ ...validMeta, aufgabenfamilie: [] }).success).toBe(false)
  })

  it('manueller status wird abgelehnt', () => {
    expect(lessonMetaSchema.safeParse({ ...validMeta, status: 'ready' }).success).toBe(false)
  })

  it('Manifest mit doppeltem slug wird abgelehnt', () => {
    const result = lessonManifestSchema.safeParse([validMeta, { ...validMeta, titel: 'Andere' }])
    expect(result.success).toBe(false)
  })
})

describe('detectEncodingFindings - Mojibake/Repair-Vorbereitung', () => {
  it('findet typische Mojibake- und Reparaturspuren', () => {
    const result = detectEncodingFindings('PrÃ¼fung zürst Loesung')
    expect(result.ok).toBe(false)
    expect(result.findings.map((f) => f.kind)).toContain('mojibake')
    expect(result.findings.map((f) => f.kind)).toContain('false_repair')
    expect(result.findings.map((f) => f.kind)).toContain('ascii_umlaut')
  })

  it('akzeptiert sauberen sichtbaren Text', () => {
    expect(detectEncodingFindings('Prüfung zuerst Lösung').ok).toBe(true)
  })
})
