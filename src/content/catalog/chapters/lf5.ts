import type { Chapter } from '../types'

export const lf5 = [
  {
    "slug": "stamm-bewegungsdaten",
    "titel": "Stamm- und Bewegungsdaten",
    "primaryLf": 5,
    "relatedLfs": [
      8
    ],
    "lfReihenfolge": 1,
    "themen": [
      "daten"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [],
    "lernzeit": 16,
    "aufgabenfamilien": [
      "zuordnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [
        "kmk-rahmenlehrplan",
        "fiausbv",
        "bibb-fachinformatiker"
      ],
      "q2_fachquelle": [
        "sap-mdm-definition",
        "microsoft-enterprise-data-types",
        "ibm-master-data-management",
        "dsgvo"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "daten",
      "modul": "daten-qualitaet"
    }
  },
  {
    "slug": "er-grundlagen",
    "titel": "Was ist eine Datenbank? & ER-Modell",
    "primaryLf": 5,
    "relatedLfs": [
      8
    ],
    "lfReihenfolge": 2,
    "themen": [
      "daten"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "stamm-bewegungsdaten"
    ],
    "lernzeit": 15,
    "aufgabenfamilien": [
      "zeichnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "daten",
      "modul": "er-sql"
    }
  },
  {
    "slug": "sql-grundlagen",
    "titel": "SQL-Grundlagen (SELECT, JOIN, DML)",
    "primaryLf": 5,
    "relatedLfs": [
      8
    ],
    "lfReihenfolge": 3,
    "themen": [
      "daten"
    ],
    "ap1Kompetenzen": [],
    "ap1Relevanz": "raus",
    "voraussetzungen": [
      "er-grundlagen"
    ],
    "lernzeit": 18,
    "aufgabenfamilien": [
      "anwenden"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "daten",
      "modul": "er-sql"
    }
  },
  {
    "slug": "normalisierung",
    "titel": "Normalisierung (1NF, 2NF, 3NF)",
    "primaryLf": 5,
    "relatedLfs": [
      8
    ],
    "lfReihenfolge": 4,
    "themen": [
      "daten"
    ],
    "ap1Kompetenzen": [],
    "ap1Relevanz": "raus",
    "voraussetzungen": [
      "sql-grundlagen"
    ],
    "lernzeit": 16,
    "aufgabenfamilien": [
      "zeichnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "daten",
      "modul": "daten-qualitaet"
    }
  },
  {
    "slug": "pseudocode-einstieg",
    "titel": "Pseudocode, Algorithmen & Kontrollstrukturen",
    "primaryLf": 5,
    "relatedLfs": [],
    "lfReihenfolge": 5,
    "themen": [
      "software"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "normalisierung"
    ],
    "lernzeit": 30,
    "aufgabenfamilien": [
      "anwenden"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [
        "kmk-rahmenlehrplan",
        "fiausbv",
        "bibb-fachinformatiker"
      ],
      "q2_fachquelle": [
        "openstax-boolean-operations"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "software",
      "modul": "logik"
    }
  },
  {
    "slug": "uml-aktivitaet",
    "titel": "UML-Aktivitätsdiagramm",
    "primaryLf": 5,
    "relatedLfs": [],
    "lfReihenfolge": 6,
    "themen": [
      "software"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "pseudocode-einstieg"
    ],
    "lernzeit": 10,
    "aufgabenfamilien": [
      "zeichnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "software",
      "modul": "logik"
    }
  },
  {
    "slug": "use-case-diagramm",
    "titel": "UML-Use-Case-Diagramm",
    "primaryLf": 5,
    "relatedLfs": [],
    "lfReihenfolge": 7,
    "themen": [
      "software"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "uml-aktivitaet"
    ],
    "lernzeit": 18,
    "aufgabenfamilien": [
      "zeichnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "software",
      "modul": "uml-diagramme"
    }
  },
  {
    "slug": "uml-beziehungen",
    "titel": "UML-Klassendiagramm (Klassen, Sichtbarkeit, Beziehungen)",
    "primaryLf": 5,
    "relatedLfs": [],
    "lfReihenfolge": 8,
    "themen": [
      "software"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "use-case-diagramm"
    ],
    "lernzeit": 18,
    "aufgabenfamilien": [
      "zeichnen"
    ],
    "inhaltsstatus": "geplant",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "software",
      "modul": "uml-diagramme"
    }
  },
  {
    "slug": "oop-basics",
    "titel": "OOP-Grundlagen (Klassen, Objekte, Methoden)",
    "primaryLf": 5,
    "relatedLfs": [],
    "lfReihenfolge": 9,
    "themen": [
      "software"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "uml-beziehungen"
    ],
    "lernzeit": 18,
    "aufgabenfamilien": [
      "zuordnen"
    ],
    "inhaltsstatus": "geplant",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "software",
      "modul": "paradigmen"
    }
  },
  {
    "slug": "programmierparadigmen",
    "titel": "Programmierparadigmen (OOP, prozedural, funktional)",
    "primaryLf": 5,
    "relatedLfs": [],
    "lfReihenfolge": 10,
    "themen": [
      "software"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "oop-basics"
    ],
    "lernzeit": 12,
    "aufgabenfamilien": [
      "zuordnen"
    ],
    "inhaltsstatus": "geplant",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "software",
      "modul": "paradigmen"
    }
  },
  {
    "slug": "libraries-frameworks",
    "titel": "Libraries vs. Frameworks",
    "primaryLf": 5,
    "relatedLfs": [],
    "lfReihenfolge": 11,
    "themen": [
      "software"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "mittel",
    "voraussetzungen": [
      "programmierparadigmen"
    ],
    "lernzeit": 8,
    "aufgabenfamilien": [
      "zuordnen"
    ],
    "inhaltsstatus": "geplant",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "software",
      "modul": "paradigmen"
    }
  },
  {
    "slug": "teststrategien",
    "titel": "Testprotokoll und einfache Testfälle",
    "primaryLf": 5,
    "relatedLfs": [],
    "lfReihenfolge": 12,
    "themen": [
      "software"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "libraries-frameworks"
    ],
    "lernzeit": 14,
    "aufgabenfamilien": [
      "zuordnen"
    ],
    "inhaltsstatus": "geplant",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "software",
      "modul": "moderne-entwicklung"
    }
  },
  {
    "slug": "git-versionsverwaltung",
    "titel": "Git & Versionsverwaltung",
    "primaryLf": 5,
    "relatedLfs": [],
    "lfReihenfolge": 13,
    "themen": [
      "software"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "mittel",
    "voraussetzungen": [
      "teststrategien"
    ],
    "lernzeit": 14,
    "aufgabenfamilien": [
      "zuordnen"
    ],
    "inhaltsstatus": "geplant",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "software",
      "modul": "moderne-entwicklung"
    }
  },
  {
    "slug": "website-statisch-dynamisch",
    "titel": "Statische vs. dynamische Webseiten",
    "primaryLf": 5,
    "relatedLfs": [
      8
    ],
    "lfReihenfolge": 14,
    "themen": [
      "webmedia"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "git-versionsverwaltung"
    ],
    "lernzeit": 12,
    "aufgabenfamilien": [
      "anwenden"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "webmedia",
      "modul": "webdesign"
    }
  },
  {
    "slug": "mockup-wireframe",
    "titel": "Mockup & Wireframe",
    "primaryLf": 5,
    "relatedLfs": [
      8
    ],
    "lfReihenfolge": 15,
    "themen": [
      "webmedia"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "website-statisch-dynamisch"
    ],
    "lernzeit": 8,
    "aufgabenfamilien": [
      "zuordnen"
    ],
    "inhaltsstatus": "geplant",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "webmedia",
      "modul": "webdesign"
    }
  },
  {
    "slug": "responsive-webdesign",
    "titel": "Responsive Webdesign",
    "primaryLf": 5,
    "relatedLfs": [
      8
    ],
    "lfReihenfolge": 16,
    "themen": [
      "webmedia"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "mockup-wireframe"
    ],
    "lernzeit": 10,
    "aufgabenfamilien": [
      "zuordnen"
    ],
    "inhaltsstatus": "geplant",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "webmedia",
      "modul": "webdesign"
    }
  },
  {
    "slug": "audio-kompression",
    "titel": "Audio, MP3 & Datenkompression",
    "primaryLf": 5,
    "relatedLfs": [
      8
    ],
    "lfReihenfolge": 17,
    "themen": [
      "webmedia"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "responsive-webdesign"
    ],
    "lernzeit": 12,
    "aufgabenfamilien": [
      "zuordnen"
    ],
    "inhaltsstatus": "geplant",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "webmedia",
      "modul": "medien"
    }
  },
  {
    "slug": "ki-grundlagen",
    "titel": "KI-Grundlagen (ML, neuronale Netze)",
    "primaryLf": 5,
    "relatedLfs": [
      8
    ],
    "lfReihenfolge": 18,
    "themen": [
      "aktuell"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "audio-kompression"
    ],
    "lernzeit": 20,
    "aufgabenfamilien": [
      "zuordnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "aktuell",
      "modul": "neue-themen"
    }
  }
] satisfies Chapter[]
