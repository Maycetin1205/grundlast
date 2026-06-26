import type { LernfeldNr } from './types'

export const OFFICIAL_LEARNING_FIELDS: Record<LernfeldNr, string> = {
  1: 'Das Unternehmen und die eigene Rolle im Betrieb beschreiben',
  2: 'Arbeitsplätze nach Kundenwunsch ausstatten',
  3: 'Clients in Netzwerke einbinden',
  4: 'Schutzbedarfsanalyse im eigenen Arbeitsbereich durchführen',
  5: 'Software zur Verwaltung von Daten anpassen',
  6: 'Serviceanfragen bearbeiten',
  7: 'Cyber-physische Systeme ergänzen',
  8: 'Daten systemübergreifend bereitstellen',
  9: 'Netzwerke und Dienste bereitstellen',
}

export function learningFieldTitle(number: LernfeldNr | undefined) {
  return number ? OFFICIAL_LEARNING_FIELDS[number] : undefined
}
