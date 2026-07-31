import type { ScopeItem } from './types.ts'

const ap1 = (
  id: string,
  number: number,
  action: ScopeItem['action'],
  outcome: string,
  chapterSlugs: readonly string[],
): ScopeItem => ({
  id,
  origin: 'fiausbv-ap1',
  learningFields: [1, 2, 3, 4, 5, 6],
  schoolYears: [1, 2],
  ap1Relation: 'direkt',
  action,
  outcome,
  sourceRefs: [{ sourceId: 'fiausbv', locator: `§ 9 Abs. 2 Nr. ${number}` }],
  chapterSlugs,
})

export const ap1ScopeItems: readonly ScopeItem[] = [
  ap1('ap1-kundenbedarf', 1, 'ermitteln', 'Kundenbedarfe zielgruppen- und situationsgerecht ermitteln.', [
    'bedarfsanalyse-feedback', 'schulz-von-thun', 'hardware-schnittstellen', 'unternehmen-ziele-wertschoepfung',
  ]),
  ap1('ap1-auswahl-beschaffung', 2, 'auswaehlen', 'Geeignete Hard- und Software auswählen und die Beschaffung einleiten.', [
    'cpu-ram-speicher', 'hardware-schnittstellen', 'lizenzmodelle', 'angebotsvergleich',
    'nutzwertanalyse', 'kaufmaennische-rechenaufgaben', 'vertragsarten', 'maengelruege',
    'organisationsformen-leitbild-nachhaltigkeit-esg',
  ]),
  ap1('ap1-konfiguration-test', 3, 'umsetzen', 'Einen IT-Arbeitsplatz konfigurieren und testen und dabei Datenschutz, IT-Sicherheit und Qualitätssicherung einhalten.', [
    'dateisysteme', 'virtualisierung', 'zentral-dezentral', 'netzwerkkonfiguration',
    'netzwerkdiagnose', 'dsgvo-basics', 'schutzziele', 'endpoint-security',
    'firewall-dmz', 'teststrategien',
  ]),
  ap1('ap1-einweisung', 4, 'kommunizieren', 'Kundinnen und Kunden verständlich in die Nutzung des Arbeitsplatzes einweisen.', [
    'schulung-einweisung-key-user', 'projektubergabe', 'schulz-von-thun', 'praesentation-dokumentation',
  ]),
  ap1('ap1-kontrolle-protokoll', 5, 'dokumentieren', 'Die Leistungserbringung kontrollieren und nachvollziehbar protokollieren.', [
    'teststrategien', 'netzwerkdiagnose', 'serviceanfragen-support-level', 'projektubergabe',
    'praesentation-dokumentation',
  ]),
] as const
