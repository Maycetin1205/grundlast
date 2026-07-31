import type { LernfeldNr } from '../../../lib/learning/types.ts'
import type { ScopeItem } from './types.ts'

const printedPageByLf: Record<LernfeldNr, number> = {
  1: 12, 2: 13, 3: 14, 4: 15, 5: 16, 6: 17, 7: 18, 8: 19, 9: 20,
}

const kmk = (
  lf: LernfeldNr,
  number: number,
  action: ScopeItem['action'],
  outcome: string,
  chapterSlugs: readonly string[],
): ScopeItem => ({
  id: `kmk-lf${lf}-${String(number).padStart(2, '0')}`,
  origin: 'kmk-rlp',
  learningFields: [lf],
  schoolYears: lf <= 5 ? [1] : [2],
  ap1Relation: lf <= 6 ? 'unterstuetzend' : 'nicht-ap1',
  action,
  outcome,
  sourceRefs: [{ sourceId: 'kmk-rahmenlehrplan', locator: `Lernfeld ${lf}, Druckseite ${printedPageByLf[lf]}` }],
  chapterSlugs,
})

/**
 * Handlungsorientierte Mindestkompetenzen aus LF1–LF9, in einzeln prüfbare
 * Ergebnisse zerlegt. Fachsystematische Unterthemen entstehen erst in den
 * zugeordneten Kapiteln; sie werden hier nicht als Lehrplanwortlaut ausgegeben.
 */
export const kmkScopeItems: readonly ScopeItem[] = [
  // LF1
  kmk(1, 1, 'analysieren', 'Ökonomische, ökologische und soziale Unternehmensziele anhand des Leitbildes einordnen.', [
    'unternehmen-ziele-wertschoepfung', 'organisationsformen-leitbild-nachhaltigkeit-esg',
  ]),
  kmk(1, 2, 'analysieren', 'Marktstruktur, Marktbeziehungen und Kundenbeziehungen der eigenen Branche untersuchen.', [
    'marktformen', 'unternehmen-ziele-wertschoepfung',
  ]),
  kmk(1, 3, 'dokumentieren', 'Wertschöpfungskette, Leistungsschwerpunkte und eigene Rolle im Betrieb nachvollziehbar beschreiben.', [
    'unternehmen-ziele-wertschoepfung', 'bbig-ausbildungsvertrag',
  ]),
  kmk(1, 4, 'analysieren', 'Aufbauorganisation und Rechtsform eines Unternehmens unterscheiden und auf den Betrieb beziehen.', [
    'aufbauorganisation', 'rechtsformen',
  ]),
  kmk(1, 5, 'bewerten', 'Eigenen Handlungs- und Entscheidungsspielraum sowie Vollmachten im Betrieb einordnen.', [
    'vollmachten-im-betrieb', 'bbig-ausbildungsvertrag',
  ]),
  kmk(1, 6, 'planen', 'Fort- und Weiterbildungsmöglichkeiten für die eigene berufliche Entwicklung einordnen.', [
    'bbig-ausbildungsvertrag', 'arbeitnehmerrechte',
  ]),
  kmk(1, 7, 'kommunizieren', 'Eine adressatengerechte multimediale Unternehmensdarstellung im Team planen, erstellen und präsentieren.', [
    'unternehmen-ziele-wertschoepfung', 'schulz-von-thun', 'marktformen', 'praesentation-dokumentation',
  ]),
  kmk(1, 8, 'reflektieren', 'Qualität eines Arbeitsergebnisses kriteriengeleitet prüfen, Verbesserungen ableiten und das eigene Handeln reflektieren.', [
    'schulz-von-thun', 'aufbauorganisation', 'praesentation-dokumentation',
  ]),

  // LF2
  kmk(2, 1, 'ermitteln', 'Kundenwunsch aufnehmen und Anforderungen an Hard- und Software dokumentieren.', [
    'bedarfsanalyse-feedback', 'hardware-schnittstellen', 'cpu-ram-speicher', 'homeoffice-ergonomie',
  ]),
  kmk(2, 2, 'planen', 'Aus dokumentierten Anforderungen überprüfbare Auswahlkriterien für die Beschaffung ableiten.', [
    'bedarfsanalyse-feedback', 'hardware-schnittstellen', 'nutzwertanalyse', 'angebotsvergleich',
  ]),
  kmk(2, 3, 'pruefen', 'Normen, Kennzeichnungen und Sicherheitsvorgaben für elektrische Geräte und Komponenten bei der Auswahl berücksichtigen.', [
    'hardware-schnittstellen', 'usv-systeme', 'homeoffice-ergonomie',
  ]),
  kmk(2, 4, 'analysieren', 'Technische Produktmerkmale und informationstechnische Kenngrößen aus Datenblättern sicher vergleichen.', [
    'bit-byte', 'zahlensysteme', 'prefixe', 'von-neumann', 'cpu-ram-speicher',
    'hardware-schnittstellen', 'dateisysteme', 'prozess-thread', 'virtualisierung',
    'zentral-dezentral', 'datenrate-berechnung', 'datenvolumen-berechnung', 'scan-bilddaten',
  ]),
  kmk(2, 5, 'bewerten', 'Produkte anhand technischer, wirtschaftlicher, ergonomischer und nachhaltiger Kriterien begründet auswählen.', [
    'nutzwertanalyse', 'homeoffice-ergonomie', 'energiekosten', 'kauf-leasing-miete',
    'make-or-buy', 'raid-systeme', 'usv-systeme', 'organisationsformen-leitbild-nachhaltigkeit-esg',
  ]),
  kmk(2, 6, 'analysieren', 'Aufgabenbezogen recherchieren und auch fremdsprachliche Produktinformationen auswerten.', [
    'cpu-ram-speicher', 'hardware-schnittstellen', 'lizenzmodelle',
  ]),
  kmk(2, 7, 'bewerten', 'Energieeffizienz von Arbeitsplatzvarianten ermitteln, vergleichen und dokumentieren.', [
    'energiekosten', 'cpu-ram-speicher', 'hardware-schnittstellen',
  ]),
  kmk(2, 8, 'auswaehlen', 'Bezugsquellen quantitativ und qualitativ vergleichen und eine Lieferantenauswahl begründen.', [
    'angebotsvergleich', 'nutzwertanalyse', 'kaufmaennische-rechenaufgaben',
  ]),
  kmk(2, 9, 'dokumentieren', 'Ein Kundenangebot mit vorgegebenen Zuschlagssätzen nachvollziehbar kalkulieren und erstellen.', [
    'handelskalkulation', 'kaufmaennische-rechenaufgaben', 'rechnung-zahlungsziel-aufbewahrungsfristen',
  ]),
  kmk(2, 10, 'umsetzen', 'Kaufvertrag und Beschaffungsprozess unter Beachtung von Lieferzeiten organisieren.', [
    'vertragsarten', 'zweiseitiger-handelskauf', 'vertragsstoerungen', 'kauf-leasing-miete',
    'eigenfremdfinanzierung', 'afa-abschreibung',
  ]),
  kmk(2, 11, 'pruefen', 'Lieferungen annehmen, Mängel dokumentieren und passende Rechte oder Maßnahmen einordnen.', [
    'maengelruege', 'gewaehrleistung', 'vertragsstoerungen', 'rechnung-zahlungsziel-aufbewahrungsfristen',
  ]),
  kmk(2, 12, 'umsetzen', 'IT-Komponenten arbeitssicher integrieren, konfigurieren, in Betrieb nehmen und mit Protokoll übergeben.', [
    'hardware-schnittstellen', 'dateisysteme', 'virtualisierung', 'zentral-dezentral', 'lizenzmodelle',
  ]),
  kmk(2, 13, 'reflektieren', 'Auftragsdurchführung, Kundenzufriedenheit und Wirtschaftlichkeit bewerten und Verbesserungen formulieren.', [
    'variable-fixe-kosten', 'gewinnermittlung', 'break-even', 'kauf-leasing-miete',
    'make-or-buy', 'eigenfremdfinanzierung', 'afa-abschreibung',
  ]),

  // LF3
  kmk(3, 1, 'ermitteln', 'Anforderungen an die Client-Integration im Kundengespräch erfassen und Leistungskriterien ableiten.', [
    'netzwerkgrundlagen-komponenten', 'netzwerkkonfiguration',
  ]),
  kmk(3, 2, 'analysieren', 'Strukturen, Komponenten, Eigenschaften und Standards eines Netzwerks untersuchen.', [
    'netzwerkgrundlagen-komponenten', 'osi-modell', 'tcp-udp', 'wlan-standards',
  ]),
  kmk(3, 3, 'analysieren', 'Technische Unterlagen sowie physische und logische Netzwerkpläne auswerten und Sicherheitsvorgaben berücksichtigen.', [
    'osi-modell', 'ipv4-grundlagen', 'ipv4-subnetting', 'ipv6-grundlagen',
  ]),
  kmk(3, 4, 'planen', 'Ein anforderungsgerechtes Integrationskonzept unter wirtschaftlichen und ökologischen Gesichtspunkten erstellen.', [
    'netzwerkkonfiguration', 'wlan-standards', 'port-forwarding',
  ]),
  kmk(3, 5, 'auswaehlen', 'Netzwerk- und Client-Komponenten anhand der Leistungskriterien auswählen.', [
    'netzwerkgrundlagen-komponenten', 'wlan-standards',
  ]),
  kmk(3, 6, 'umsetzen', 'Clients konfigurieren und in eine bestehende Netzwerkinfrastruktur einbinden.', [
    'ipv4-grundlagen', 'netzwerkkonfiguration', 'ipv6-grundlagen', 'port-forwarding',
  ]),
  kmk(3, 7, 'pruefen', 'Funktion eines integrierten Clients systematisch prüfen und Ergebnisse protokollieren.', [
    'netzwerkdiagnose', 'netzwerkkonfiguration', 'tcp-udp',
  ]),
  kmk(3, 8, 'reflektieren', 'Integrationsprozess und Ergebnis auf Optimierung, Wirtschaftlichkeit und Ökologie untersuchen.', [
    'netzwerkdiagnose', 'wlan-standards',
  ]),

  // LF4
  kmk(4, 1, 'analysieren', 'Schutzziele, rechtliche Regeln, Sicherheitsleitlinie und betriebliches Schutzniveau einordnen.', [
    'schutzziele', 'dsgvo-basics', 'schutzbedarf-risikoanalyse',
  ]),
  kmk(4, 2, 'planen', 'Eine Schutzbedarfsanalyse nach Sicherheitsleitlinie für den eigenen Arbeitsbereich planen.', [
    'schutzbedarf-risikoanalyse', 'schutzziele',
  ]),
  kmk(4, 3, 'bewerten', 'Vertraulichkeit, Integrität und Verfügbarkeit bestimmen und Schadensszenarien klassifizieren.', [
    'schutzziele', 'schutzbedarf-risikoanalyse',
  ]),
  kmk(4, 4, 'bewerten', 'Bedrohungen und Schadenspotenziale nachvollziehbar gewichten.', [
    'schutzbedarf-risikoanalyse', 'malware-grundlagen',
  ]),
  kmk(4, 5, 'umsetzen', 'Schutzbedarf und Bedrohungsfaktoren aufnehmen, analysieren und dokumentieren.', [
    'schutzbedarf-risikoanalyse', 'malware-grundlagen', 'endpoint-security',
  ]),
  kmk(4, 6, 'auswaehlen', 'Analyseergebnisse mit der Sicherheitsleitlinie abgleichen und angemessene Maßnahmen empfehlen.', [
    'backup-strategien', 'endpoint-security', 'firewall-dmz', 'passwoerter-hashing',
    'verschluesselung-sicherheit', 'verschluesselung-hash-vpn', 'pki-zertifikate',
  ]),
  kmk(4, 7, 'reflektieren', 'Maßnahmen im eigenen Verantwortungsbereich umsetzen und Verantwortung im Sicherheitsprozess reflektieren.', [
    'endpoint-security', 'firewall-dmz', 'backup-strategien',
  ]),

  // LF5
  kmk(5, 1, 'analysieren', 'Die Abbildung von Informationen durch Daten erklären und auf einen Projektauftrag beziehen.', [
    'stamm-bewegungsdaten', 'er-grundlagen',
  ]),
  kmk(5, 2, 'analysieren', 'Daten nach Herkunft, Art, Verfügbarkeit, Datenschutz, Datensicherheit und Speicherbedarf untersuchen.', [
    'stamm-bewegungsdaten', 'er-grundlagen', 'normalisierung', 'audio-kompression',
  ]),
  kmk(5, 3, 'auswaehlen', 'Geeignete Datenformate und Speicherlösungen für Anforderungen auswählen.', [
    'er-grundlagen', 'sql-grundlagen', 'normalisierung',
  ]),
  kmk(5, 4, 'planen', 'Die Anpassung einer Anwendung zur Verwaltung von Daten strukturiert planen und ein Vorgehen auswählen.', [
    'pseudocode-einstieg', 'programmierparadigmen', 'libraries-frameworks', 'git-versionsverwaltung',
  ]),
  kmk(5, 5, 'planen', 'Prüfbare Testfälle aus Anforderungen und Grenzfällen entwickeln.', [
    'teststrategien', 'pseudocode-einstieg',
  ]),
  kmk(5, 6, 'umsetzen', 'Eine Anwendungsanpassung auch im Team implementieren und fachgerecht dokumentieren.', [
    'pseudocode-einstieg', 'oop-basics', 'programmierparadigmen', 'git-versionsverwaltung',
    'website-statisch-dynamisch', 'mockup-wireframe', 'responsive-webdesign',
  ]),
  kmk(5, 7, 'dokumentieren', 'Daten- und Softwarestrukturen mit geeigneten Modellen nachvollziehbar darstellen.', [
    'uml-aktivitaet', 'use-case-diagramm', 'uml-beziehungen', 'er-grundlagen',
  ]),
  kmk(5, 8, 'pruefen', 'Anwendungsfunktion testen und ihre Eignung für die gestellten Anforderungen beurteilen.', [
    'teststrategien', 'ki-grundlagen',
  ]),
  kmk(5, 9, 'reflektieren', 'Vorgehen und Ergebnis des Softwareentwicklungsprozesses evaluieren.', [
    'git-versionsverwaltung', 'teststrategien', 'ki-grundlagen',
  ]),

  // LF6
  kmk(6, 1, 'ermitteln', 'Serviceanfragen im direkten oder indirekten Kundenkontakt vollständig aufnehmen.', [
    'serviceanfragen-support-level', 'fehlermanagement-stoerungsannahme',
  ]),
  kmk(6, 2, 'analysieren', 'Anfrage, vertragliche Grundlage, SLA und Reaktionszeit untersuchen.', [
    'serviceanfragen-support-level', 'fehlermanagement-stoerungsannahme',
  ]),
  kmk(6, 3, 'dokumentieren', 'Status einer Anfrage nachvollziehbar im Service-Management-System pflegen.', [
    'serviceanfragen-support-level',
  ]),
  kmk(6, 4, 'analysieren', 'Serviceanfragen durch systematisches Fragen nach Support-Level und fachlichen Standards einordnen.', [
    'serviceanfragen-support-level', 'fehlermanagement-stoerungsannahme',
  ]),
  kmk(6, 5, 'umsetzen', 'Lösungsmöglichkeiten innerhalb des Support-Levels ermitteln, Fehler beheben und den Bearbeitungsstand dokumentieren.', [
    'fehlermanagement-stoerungsannahme', 'serviceanfragen-support-level',
  ]),
  kmk(6, 6, 'kommunizieren', 'Mit Prozessbeteiligten situationsgerecht, bei Bedarf fremdsprachlich und deeskalierend kommunizieren.', [
    'schulz-von-thun', 'schulung-einweisung-key-user',
  ]),
  kmk(6, 7, 'reflektieren', 'Bearbeitung und Gesprächsverhalten reflektieren und konkrete Qualitätsverbesserungen vorschlagen.', [
    'schulz-von-thun', 'pdca-zyklus',
  ]),

  // LF7
  kmk(7, 1, 'analysieren', 'Ein bestehendes cyber-physisches System für einen Erweiterungs- und Inbetriebnahmeauftrag analysieren.', [
    'cps-grundlagen', 'cps-integration-funktionskontrolle',
  ]),
  kmk(7, 2, 'analysieren', 'Datenfluss zwischen physischer Welt und IT-System sowie Netzwerkkommunikation nachvollziehen.', [
    'cps-grundlagen', 'sensoren-aktoren-messwerte', 'cps-schnittstellen-protokolle',
  ]),
  kmk(7, 3, 'analysieren', 'Energie-, Stoff- und Informationsflüsse beteiligter Geräte und Betriebsmittel erfassen.', [
    'sensoren-aktoren-messwerte', 'cps-energie-betriebssicherheit',
  ]),
  kmk(7, 4, 'planen', 'Auswahlkriterien für Energieversorgung, Hardware, Software, Bibliotheken und Protokolle festlegen.', [
    'cps-schnittstellen-protokolle', 'cps-energie-betriebssicherheit',
  ]),
  kmk(7, 5, 'dokumentieren', 'Unterlagen der technischen Kommunikation auswerten und für die Erweiterung anpassen.', [
    'cps-schnittstellen-protokolle', 'cps-integration-funktionskontrolle',
  ]),
  kmk(7, 6, 'umsetzen', 'Neue Komponenten funktional mit dem cyber-physischen System zusammenführen.', [
    'cps-integration-funktionskontrolle', 'sensoren-aktoren-messwerte',
  ]),
  kmk(7, 7, 'pruefen', 'Systemfunktion systematisch prüfen, physikalische Betriebswerte messen und Energiebedarf validieren.', [
    'cps-integration-funktionskontrolle', 'cps-energie-betriebssicherheit',
  ]),
  kmk(7, 8, 'reflektieren', 'Ergebnisse protokollieren und Optimierungen hinsichtlich Betriebs- und Datensicherheit bewerten.', [
    'cps-integration-funktionskontrolle', 'cps-energie-betriebssicherheit',
  ]),

  // LF8
  kmk(8, 1, 'ermitteln', 'Dezentrale und heterogene Datenquellen für einen Kundenauftrag identifizieren.', [
    'datenquellen-systemgrenzen', 'crm-erp-dms',
  ]),
  kmk(8, 2, 'analysieren', 'Datenquellen nach Struktur, rechtlichen Rahmenbedingungen sowie Zugriffswegen und -mechanismen untersuchen.', [
    'datenquellen-systemgrenzen', 'schnittstellen-apis', 'authentifizierung-rollen-berechtigungen',
  ]),
  kmk(8, 3, 'auswaehlen', 'Geeignete Datenquellen begründet auswählen.', [
    'datenquellen-systemgrenzen', 'datenqualitaet-transformation',
  ]),
  kmk(8, 4, 'planen', 'Ein Konzept zur sicheren Bereitstellung und Weiterverarbeitung von Daten entwickeln.', [
    'schnittstellen-apis', 'authentifizierung-rollen-berechtigungen', 'datenqualitaet-transformation',
    'datenschutz-datenbereitstellung', 'cloud-konzepte',
  ]),
  kmk(8, 5, 'umsetzen', 'Das Bereitstellungskonzept arbeitsteilig mit geeigneten Werkzeugen und Produkten implementieren.', [
    'schnittstellen-apis', 'datenqualitaet-transformation', 'cloud-konzepte',
  ]),
  kmk(8, 6, 'dokumentieren', 'Das Ergebnis mit verständlicher, bei Bedarf fremdsprachlicher Handhabungsdokumentation übergeben.', [
    'datenschutz-datenbereitstellung', 'schnittstellen-apis',
  ]),
  kmk(8, 7, 'reflektieren', 'Entwicklungswerkzeuge, Zusammenarbeit und Dokumentationsqualität bewerten.', [
    'cloud-konzepte', 'datenqualitaet-transformation',
  ]),

  // LF9
  kmk(9, 1, 'ermitteln', 'Netzwerk- und Dienstanforderungen im Kundengespräch vollständig ermitteln.', [
    'netzwerkdienste-zusammenspiel', 'serverdienste-bereitstellen',
  ]),
  kmk(9, 2, 'analysieren', 'Eigenschaften, Funktionen, Leistung und Sicherheitsmerkmale von Netzwerkkomponenten und Diensten auswerten.', [
    'netzwerkdienste-zusammenspiel', 'routing-nat-firewallregeln', 'vlan-segmentierung',
    'imap-pop3-smtp', 'ssh-telnet',
  ]),
  kmk(9, 3, 'planen', 'Dienste, Netzwerke und Infrastruktur unter Einbezug interner und externer Ressourcen planen.', [
    'serverdienste-bereitstellen', 'routing-nat-firewallregeln', 'vlan-segmentierung', 'cloud-konzepte',
  ]),
  kmk(9, 4, 'bewerten', 'Lösungskonzepte nach Nachhaltigkeit sowie technischer und wirtschaftlicher Eignung vergleichen.', [
    'serverdienste-bereitstellen', 'mtbf-mttf',
  ]),
  kmk(9, 5, 'umsetzen', 'Netzwerk, Infrastruktur und Dienste standardkonform installieren, konfigurieren und erweitern.', [
    'serverdienste-bereitstellen', 'routing-nat-firewallregeln', 'vlan-segmentierung',
    'linux-chmod', 'ssh-telnet', 'imap-pop3-smtp',
  ]),
  kmk(9, 6, 'pruefen', 'Funktionsprüfungen und Messungen durchführen und Ergebnisse dokumentieren.', [
    'serverdienste-bereitstellen', 'mtbf-mttf',
  ]),
  kmk(9, 7, 'bewerten', 'Netzwerke, Infrastruktur und Dienste nach Anforderungen, Datensicherheit und Datenschutz beurteilen.', [
    'routing-nat-firewallregeln', 'vlan-segmentierung', 'linux-chmod', 'ssh-telnet',
  ]),
  kmk(9, 8, 'reflektieren', 'Lösung, Kundenzufriedenheit, Zukunftsfähigkeit und Vorgehensweise reflektieren.', [
    'netzwerkdienste-zusammenspiel', 'mtbf-mttf',
  ]),
] as const
