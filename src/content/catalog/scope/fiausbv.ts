import type { ScopeItem } from './types.ts'

const fia = (
  position: string,
  learningFields: ScopeItem['learningFields'],
  action: ScopeItem['action'],
  outcome: string,
  chapterSlugs: readonly string[],
): ScopeItem => ({
  id: `fia-4-2-${position.replace('.', '-')}`,
  origin: 'fiausbv-18m',
  learningFields,
  schoolYears: [1, 2],
  ap1Relation: 'direkt',
  action,
  outcome,
  sourceRefs: [{ sourceId: 'fiausbv', locator: `§ 8 Nr. 1 i. V. m. Anlage, Abschnitt A, § 4 Abs. 2 Nr. ${position}` }],
  chapterSlugs,
})

/** Nur die in § 8 für AP1 genannten Positionen 1–7 und dort nur Monat 1–18. */
export const fiausbvFirst18MonthScopeItems: readonly ScopeItem[] = [
  fia('1.a', [6], 'umsetzen', 'Grundsätze und Methoden des Projektmanagements auf Arbeitsaufgaben anwenden.', [
    'vorgehensmodelle', 'scrum', 'gantt-diagramm', 'netzplan',
  ]),
  fia('1.b', [2, 6], 'pruefen', 'Auftragsunterlagen und Durchführbarkeit rechtlich, wirtschaftlich und terminlich prüfen und mit betrieblichen Möglichkeiten abgleichen.', [
    'machbarkeitsanalyse', 'lastenheft-pflichtenheft', 'vertragsarten', 'kauf-leasing-miete',
  ]),
  fia('1.c', [6], 'planen', 'Arbeitsschritte im eigenen Bereich in eine begründete Reihenfolge und einen Zeitplan bringen.', [
    'gantt-diagramm', 'netzplan',
  ]),
  fia('1.d', [6], 'planen', 'Termine abstimmen und ihre Einhaltung überwachen.', [
    'gantt-diagramm', 'netzplan', 'serviceanfragen-support-level',
  ]),
  fia('1.e', [2, 6], 'analysieren', 'Probleme als Aufgaben formulieren sowie Lösungsalternativen entwickeln und beurteilen.', [
    'bedarfsanalyse-feedback', 'nutzwertanalyse', 'machbarkeitsanalyse', 'fehlermanagement-stoerungsannahme',
  ]),
  fia('1.f', [1, 2, 6], 'auswaehlen', 'Arbeits- und Organisationsmittel ressourcen-, budget-, wirtschaftlich und ökologisch angemessen einsetzen.', [
    'organisationsformen-leitbild-nachhaltigkeit-esg', 'energiekosten', 'angebotsvergleich', 'make-or-buy',
  ]),
  fia('1.g', [1, 2, 6], 'kommunizieren', 'Aufgaben im Team und mit internen oder externen Kunden planen und abstimmen.', [
    'bedarfsanalyse-feedback', 'schulz-von-thun', 'mitarbeitermotivation-teamphasen-change',
  ]),
  fia('1.h', [1, 2], 'bewerten', 'Betriebswirtschaftliche Daten im Zusammenhang mit Geschäfts- und Leistungsprozessen erheben und bewerten.', [
    'variable-fixe-kosten', 'gewinnermittlung', 'break-even', 'handelskalkulation', 'bpmn',
  ]),
  fia('1.i', [1, 6], 'reflektieren', 'Eigenes und gemeinsames Vorgehen reflektieren und Arbeitsprozesse verbessern.', [
    'pdca-zyklus', 'efqm-modell', 'projektubergabe',
  ]),

  fia('2.a', [1, 2], 'analysieren', 'Im Marktvergleich Preise, Leistungen und Konditionen von Wettbewerbern untersuchen.', [
    'marktformen', 'angebotsvergleich',
  ]),
  fia('2.b', [1, 2, 6], 'ermitteln', 'Bedarfe feststellen und Zielgruppen unterscheiden.', [
    'bedarfsanalyse-feedback', 'hardware-schnittstellen', 'aida-formel',
  ]),
  fia('2.c', [1, 6], 'kommunizieren', 'Sachverhalte regelgerecht präsentieren und deutsche wie englische Fachbegriffe adressatengerecht verwenden.', [
    'unternehmen-ziele-wertschoepfung', 'schulz-von-thun', 'bedarfsanalyse-feedback',
  ]),
  fia('2.d', [1], 'umsetzen', 'Marketing- und Vertriebsmaßnahmen im eigenen Aufgabenbereich unterstützen.', [
    'aida-formel', 'marktformen',
  ]),
  fia('2.e', [1, 2, 3], 'analysieren', 'Aufgabenbezogene Informationsquellen auch in englischer Sprache auswerten und für Kundeninformationen nutzen.', [
    'hardware-schnittstellen', 'cpu-ram-speicher', 'osi-modell',
  ]),

  fia('3.a', [2], 'bewerten', 'Marktgängige IT-Systeme nach Leistungsfähigkeit, Wirtschaftlichkeit und Barrierefreiheit beurteilen.', [
    'cpu-ram-speicher', 'hardware-schnittstellen', 'homeoffice-ergonomie', 'zentral-dezentral', 'virtualisierung',
  ]),
  fia('3.b', [2], 'bewerten', 'Angebote für IT-Komponenten, Produkte und Dienstleistungen einholen und Spezifikationen sowie Konditionen vergleichen.', [
    'angebotsvergleich', 'nutzwertanalyse', 'kaufmaennische-rechenaufgaben',
  ]),

  fia('4.a', [2, 5], 'umsetzen', 'IT-Systeme für betriebliche Aufgaben unter Beachtung von Lizenz, Urheberrecht und Barrierefreiheit analysieren, konzipieren, konfigurieren, testen und dokumentieren.', [
    'lizenzmodelle', 'hardware-schnittstellen', 'homeoffice-ergonomie', 'teststrategien', 'website-statisch-dynamisch',
  ]),
  fia('4.b', [5], 'analysieren', 'Prozedurale und objektorientierte Programmiersprachen voneinander unterscheiden.', [
    'programmierparadigmen', 'oop-basics', 'pseudocode-einstieg',
  ]),

  fia('5.a', [5, 6], 'dokumentieren', 'Betriebliche Qualitätssicherung anwenden und projektbegleitende Maßnahmen durchführen und dokumentieren.', [
    'teststrategien', 'pdca-zyklus', 'iso-9000', 'iso-25010',
  ]),

  fia('6.a', [4], 'umsetzen', 'Betriebliche Vorgaben und rechtliche Regeln zu IT-Sicherheit und Datenschutz einhalten.', [
    'dsgvo-basics', 'schutzziele', 'endpoint-security',
  ]),
  fia('6.b', [4], 'analysieren', 'Sicherheitsanforderungen analysieren und geeignete Maßnahmen ableiten, abstimmen, umsetzen und evaluieren.', [
    'schutzbedarf-risikoanalyse', 'endpoint-security', 'firewall-dmz', 'passwoerter-hashing',
  ]),

  fia('7.a', [2, 6], 'dokumentieren', 'Leistungen nach betrieblichen und vertraglichen Vorgaben dokumentieren.', [
    'serviceanfragen-support-level', 'projektubergabe', 'rechnung-zahlungsziel-aufbewahrungsfristen',
  ]),
  fia('7.b', [2, 6], 'pruefen', 'Leistungserbringung organisatorisch und terminlich mit Kunden abstimmen und kontrollieren.', [
    'serviceanfragen-support-level', 'gantt-diagramm', 'projektubergabe',
  ]),
  fia('7.c', [1, 6], 'umsetzen', 'Veränderungsprozesse begleiten und unterstützen.', [
    'mitarbeitermotivation-teamphasen-change', 'pdca-zyklus',
  ]),
  fia('7.d', [6], 'kommunizieren', 'Kundinnen und Kunden in Produkte und Dienstleistungen einweisen.', [
    'schulung-einweisung-key-user', 'projektubergabe',
  ]),
  fia('7.e', [2, 6], 'dokumentieren', 'Leistungen und Dokumentationen übergeben und eine Abnahme protokollieren.', [
    'projektubergabe', 'teststrategien',
  ]),
  fia('7.f', [2], 'bewerten', 'Kosten erbrachter Leistungen erfassen und im Zeit- sowie Soll-Ist-Vergleich bewerten.', [
    'kaufmaennische-rechenaufgaben', 'variable-fixe-kosten', 'gewinnermittlung', 'break-even',
  ]),
] as const
