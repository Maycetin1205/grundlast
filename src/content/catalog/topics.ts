export interface Topic { id:string; titel:string; beschreibung:string; icon:string; farbe:string; reihenfolge:number }
export const topics=[
  {
    "id": "aktuell",
    "titel": "Aktuelle Themen",
    "beschreibung": "KI-Grundlagen, Cloud-Konzepte und Lizenzmodelle.",
    "icon": "Sparkles",
    "farbe": "#ec4899",
    "reihenfolge": 1
  },
  {
    "id": "arbeitsrecht",
    "titel": "Arbeitsrecht & Ausbildung",
    "beschreibung": "Ausbildung, Rechte und Pflichten, Arbeitsschutz.",
    "icon": "Briefcase",
    "farbe": "#84cc16",
    "reihenfolge": 2
  },
  {
    "id": "betriebssysteme",
    "titel": "Betriebssysteme & IT-Systeme",
    "beschreibung": "Linux, Dateisysteme, Prozesse, Virtualisierung und Unternehmenssoftware.",
    "icon": "Monitor",
    "farbe": "#64748b",
    "reihenfolge": 3
  },
  {
    "id": "daten",
    "titel": "Daten & Datenbanken",
    "beschreibung": "Tabellen, Beziehungen, Abfragen.",
    "icon": "Database",
    "farbe": "#a78bfa",
    "reihenfolge": 4
  },
  {
    "id": "grundlagen",
    "titel": "Grundlagen & Rechnen",
    "beschreibung": "Wie ein Computer Informationen als Bits, Bytes, Zahlen und Einheiten darstellt.",
    "icon": "Binary",
    "farbe": "#818cf8",
    "reihenfolge": 5
  },
  {
    "id": "hardware",
    "titel": "Hardware & Systeme",
    "beschreibung": "Die Maschine hinter der Software.",
    "icon": "Cpu",
    "farbe": "#94a3b8",
    "reihenfolge": 6
  },
  {
    "id": "netzwerke",
    "titel": "Netzwerke",
    "beschreibung": "Vom OSI-Modell bis zum Subnetting.",
    "icon": "Network",
    "farbe": "#38bdf8",
    "reihenfolge": 7
  },
  {
    "id": "projekt",
    "titel": "Projekt & Prozesse",
    "beschreibung": "Planen, steuern, dokumentieren.",
    "icon": "GanttChart",
    "farbe": "#fbbf24",
    "reihenfolge": 8
  },
  {
    "id": "qualitaet",
    "titel": "Qualitätsmanagement",
    "beschreibung": "PDCA, Qualitätsziele, Zertifizierung und Testprotokolle.",
    "icon": "Award",
    "farbe": "#8b5cf6",
    "reihenfolge": 9
  },
  {
    "id": "sicherheit",
    "titel": "IT-Sicherheit & Datenschutz",
    "beschreibung": "DSGVO, Verschlüsselung, Passwörter, Angriffsvektoren.",
    "icon": "ShieldCheck",
    "farbe": "#fb7185",
    "reihenfolge": 10
  },
  {
    "id": "software",
    "titel": "Softwareentwicklung",
    "beschreibung": "Algorithmen, Paradigmen, UML.",
    "icon": "Code2",
    "farbe": "#60a5fa",
    "reihenfolge": 11
  },
  {
    "id": "vertragsrecht",
    "titel": "Vertragsrecht",
    "beschreibung": "Gewährleistung, Mängelrüge, Vertragsstörungen im Handelskauf.",
    "icon": "Scale",
    "farbe": "#f97316",
    "reihenfolge": 12
  },
  {
    "id": "webmedia",
    "titel": "Web & Multimedia",
    "beschreibung": "Responsive Design, Wireframes, Softwareergonomie, Medienkompression.",
    "icon": "Globe",
    "farbe": "#06b6d4",
    "reihenfolge": 13
  },
  {
    "id": "wirtschaft",
    "titel": "Wirtschaft & Recht",
    "beschreibung": "Kalkulation, Kosten, Märkte, Finanzierung.",
    "icon": "Calculator",
    "farbe": "#34d399",
    "reihenfolge": 14
  }
] satisfies Topic[]
