import { ap1ScopeItems } from './scope/ap1.ts'

export interface Ap1Competency {
  id: string
  titel: string
  beschreibung: string
  quellen: string[]
}

const titles: Record<string, string> = {
  'ap1-kundenbedarf': 'Kundenbedarfe ermitteln',
  'ap1-auswahl-beschaffung': 'Hard- und Software auswählen',
  'ap1-konfiguration-test': 'Arbeitsplatz konfigurieren und testen',
  'ap1-einweisung': 'Nutzung einweisen',
  'ap1-kontrolle-protokoll': 'Leistung kontrollieren und protokollieren',
}

export const ap1Competencies: Ap1Competency[] = ap1ScopeItems.map((item) => ({
  id: item.id,
  titel: titles[item.id],
  beschreibung: item.outcome,
  quellen: Array.from(new Set(item.sourceRefs.map((source) => source.sourceId))),
}))
