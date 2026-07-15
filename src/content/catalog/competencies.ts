export interface Ap1Competency {
  id: string
  titel: string
  beschreibung: string
  quellen: string[]
}

const officialSources = ['fiausbv', 'kmk-rahmenlehrplan', 'bibb-fachinformatiker', 'ihk-aka-pruefungs-news-2024']

export const ap1Competencies: Ap1Competency[] = [
  { id: 'ap1-kundenbedarf', titel: 'Kundenbedarfe ermitteln', beschreibung: 'Kundenbedarfe zielgruppengerecht ermitteln.', quellen: officialSources },
  { id: 'ap1-auswahl-beschaffung', titel: 'Hard- und Software auswählen', beschreibung: 'Hard- und Software auswählen und ihre Beschaffung einleiten.', quellen: officialSources },
  { id: 'ap1-konfiguration-test', titel: 'Arbeitsplatz konfigurieren und testen', beschreibung: 'Einen IT-Arbeitsplatz konfigurieren und testen und dabei Datenschutz, IT-Sicherheit und Qualitätssicherung einhalten.', quellen: officialSources },
  { id: 'ap1-einweisung', titel: 'Nutzung einweisen', beschreibung: 'Kundinnen und Kunden in die Nutzung des Arbeitsplatzes einweisen.', quellen: officialSources },
  { id: 'ap1-kontrolle-protokoll', titel: 'Leistung kontrollieren und protokollieren', beschreibung: 'Die Leistungserbringung kontrollieren und protokollieren.', quellen: officialSources },
]
