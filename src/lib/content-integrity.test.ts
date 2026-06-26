import { readFileSync } from 'node:fs'
import { describe, it, expect } from 'vitest'
import { sourceBank } from './quellen'
import { lessonSourceIds } from '../content/quellen/tagMappings'
import { glossarEintraege } from '../content/glossar'
import { normalisiereGlossarId, findeGlossarEintrag } from './glossar/store'

type Beleg = { aussage: string; zitat: string; quelleId: string; fundstelle: string; abgerufenAm: string }
const belege = JSON.parse(
  readFileSync('src/content/quellen/belege.json', 'utf8'),
) as Record<string, Beleg[]>
const belegEintraege = Object.entries(belege).flatMap(([slug, liste]) =>
  (liste ?? []).map((eintrag, index) => ({ slug, index, eintrag })),
)

// Datengetriebene Invarianten über den real importierten Content. Ersetzt das
// bisher leere Test-Gate durch echte Assertions – läuft offline, deterministisch.

describe('Quellenbank-Integrität', () => {
  it('hat keine doppelten Quellen-IDs', () => {
    const ids = sourceBank.map((q) => q.id)
    const duplikate = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))]
    expect(duplikate).toEqual([])
  })

  it('jede Quelle hat eine gültige https-URL', () => {
    const ungueltig = sourceBank
      .filter((q) => {
        try {
          return new URL(q.href).protocol !== 'https:'
        } catch {
          return true
        }
      })
      .map((q) => q.id)
    expect(ungueltig).toEqual([])
  })

  it('jede in lessonSourceIds referenzierte Quellen-ID existiert in der Quellenbank', () => {
    const bekannt = new Set(sourceBank.map((q) => q.id))
    const fehlend = new Set<string>()
    for (const ids of Object.values(lessonSourceIds)) {
      for (const id of ids) if (!bekannt.has(id)) fehlend.add(id)
    }
    expect([...fehlend]).toEqual([])
  })
})

describe('Glossar-Integrität', () => {
  it('hat keine ID-Kollision nach Normalisierung', () => {
    const gesehen = new Map<string, string>()
    const kollisionen: string[] = []
    for (const eintrag of glossarEintraege) {
      const norm = normalisiereGlossarId(eintrag.id)
      const vorher = gesehen.get(norm)
      if (vorher && vorher !== eintrag.id) kollisionen.push(`${vorher} <-> ${eintrag.id}`)
      else gesehen.set(norm, eintrag.id)
    }
    expect(kollisionen).toEqual([])
  })

  it('findet Einträge unabhängig von der Umlaut-Schreibweise (Regression zu Fix 2)', () => {
    // Glossar speichert ASCII ('integritaet'); Lektionen nutzen oft Umlaute.
    const asciiTreffer = findeGlossarEintrag('integritaet')
    const umlautTreffer = findeGlossarEintrag('integrität')
    expect(asciiTreffer).toBeDefined()
    expect(umlautTreffer).toBeDefined()
    expect(umlautTreffer?.id).toBe(asciiTreffer?.id)
  })
})

describe('Belege-Integrität (Quellen-/Faktenbindung)', () => {
  const bekannteQuellen = new Set(sourceBank.map((q) => q.id))

  it('jeder Beleg referenziert eine existierende Quellen-ID', () => {
    const fehlend = belegEintraege
      .filter(({ eintrag }) => !bekannteQuellen.has(eintrag.quelleId))
      .map(({ slug, index, eintrag }) => `${slug}[${index}]: ${eintrag.quelleId}`)
    expect(fehlend).toEqual([])
  })

  it('jeder Beleg hat nicht-leere Pflichtfelder und ein ISO-Abrufdatum', () => {
    const fehler: string[] = []
    for (const { slug, index, eintrag } of belegEintraege) {
      for (const feld of ['aussage', 'zitat', 'quelleId', 'fundstelle', 'abgerufenAm'] as const) {
        if (typeof eintrag[feld] !== 'string' || eintrag[feld].trim() === '') {
          fehler.push(`${slug}[${index}].${feld} fehlt/leer`)
        }
      }
      if (eintrag.abgerufenAm && !/^\d{4}-\d{2}-\d{2}$/.test(eintrag.abgerufenAm)) {
        fehler.push(`${slug}[${index}].abgerufenAm kein ISO-Datum`)
      }
    }
    expect(fehler).toEqual([])
  })
})

describe('normalisiereGlossarId', () => {
  it('bildet Umlaute und ß auf ASCII ab, trimmt und kleinschreibt', () => {
    expect(normalisiereGlossarId('Integrität')).toBe('integritaet')
    expect(normalisiereGlossarId('  GRÖSSE ')).toBe('groesse')
    expect(normalisiereGlossarId('Maß')).toBe('mass')
    expect(normalisiereGlossarId('Verfügbarkeit')).toBe('verfuegbarkeit')
  })
})
