import type { LernfeldNr } from '../../lib/learning/types'

export interface LearningField { id: LernfeldNr; titel: string; kurz: string }

export const learningFields: LearningField[] = [
  { id: 1, titel: 'Das Unternehmen und die eigene Rolle im Betrieb beschreiben', kurz: 'Unternehmen und Rolle' },
  { id: 2, titel: 'Arbeitsplätze nach Kundenwunsch ausstatten', kurz: 'Arbeitsplätze ausstatten' },
  { id: 3, titel: 'Clients in Netzwerke einbinden', kurz: 'Clients und Netzwerke' },
  { id: 4, titel: 'Schutzbedarfsanalyse im eigenen Arbeitsbereich durchführen', kurz: 'Schutzbedarf' },
  { id: 5, titel: 'Software zur Verwaltung von Daten anpassen', kurz: 'Daten verwalten' },
  { id: 6, titel: 'Serviceanfragen bearbeiten', kurz: 'Serviceanfragen' },
  { id: 7, titel: 'Cyber-physische Systeme ergänzen', kurz: 'Cyber-physische Systeme' },
  { id: 8, titel: 'Daten systemübergreifend bereitstellen', kurz: 'Daten bereitstellen' },
  { id: 9, titel: 'Netzwerke und Dienste bereitstellen', kurz: 'Netzwerke und Dienste' },
]
