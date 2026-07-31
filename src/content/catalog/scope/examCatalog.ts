import type { ExamCatalogDelta } from './types.ts'

const sourceRefs = [{ sourceId: 'ihk-aka-pruefungs-news-2024', locator: 'Prüfungs-News 09/24, S. 1–2' }] as const

/**
 * Öffentlich belegbare Änderungen der zweiten Katalogauflage.
 *
 * Der vollständige, kostenpflichtige Katalog liegt im Workspace nicht vor.
 * Deshalb werden hier ausschließlich die von IHK/ZPA selbst veröffentlichten
 * Delta-Aussagen modelliert und keine fehlenden Themenlisten erfunden.
 */
export const examCatalogDeltas: readonly ExamCatalogDelta[] = [
  {
    id: 'pk-2025-sql-ap2',
    effectiveFrom: 'AP1 Frühjahr 2025 / AP2 Sommer 2025',
    appliesTo: 'ap2',
    disposition: 'verschoben',
    topics: ['SQL'],
    statement: 'SQL wird nach öffentlicher IHK/ZPA-Mitteilung ausschließlich in Teil 2 thematisiert.',
    sourceRefs,
    chapterSlugs: ['sql-grundlagen'],
  },
  {
    id: 'pk-2025-raid-ap2',
    effectiveFrom: 'AP1 Frühjahr 2025 / AP2 Sommer 2025',
    appliesTo: 'ap2',
    disposition: 'verschoben',
    topics: ['RAID'],
    statement: 'RAID wird nach öffentlicher IHK/ZPA-Mitteilung ausschließlich in Teil 2 thematisiert.',
    sourceRefs,
    chapterSlugs: ['raid-systeme'],
  },
  {
    id: 'pk-2025-pap-struktogramm-entfernt',
    effectiveFrom: 'AP1 Frühjahr 2025 / AP2 Sommer 2025',
    appliesTo: 'gesamt',
    disposition: 'gestrichen',
    topics: ['Programmablaufplan', 'Struktogramm'],
    statement: 'Programmablaufplan und Struktogramm wurden laut IHK/ZPA gestrichen.',
    sourceRefs,
    chapterSlugs: ['pseudocode-einstieg'],
  },
  {
    id: 'pk-2025-neuere-methoden-ki',
    effectiveFrom: 'AP1 Frühjahr 2025 / AP2 Sommer 2025',
    appliesTo: 'gesamt',
    disposition: 'hinweis',
    topics: ['UML', 'BPMN', 'Künstliche Intelligenz'],
    statement: 'Die öffentliche Mitteilung nennt den Übergang zu UML/BPMN und KI als neuen Themenbereich, ordnet diese aber nicht vollständig einem Prüfungsteil zu.',
    sourceRefs,
    chapterSlugs: ['uml-aktivitaet', 'use-case-diagramm', 'uml-beziehungen', 'bpmn', 'ki-grundlagen'],
  },
] as const

export const examCatalogEvidence = {
  edition: 'zweite überarbeitete Auflage (2024/2025)',
  complete: false,
  status: 'nur-oeffentliches-delta',
  missing: 'Vollständige Kataloge 6392 (FIAE) und 6393 (FISI) sind nicht im Workspace vorhanden.',
} as const
