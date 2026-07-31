import type { Chapter } from '../types'

export const lf2 = [
  {
    "slug": "bedarfsanalyse-feedback",
    "titel": "Kundenbedarf und Anforderungen",
    "primaryLf": 2,
    "relatedLfs": [
      3,
      5,
      6
    ],
    "lfReihenfolge": 1,
    "themen": [
      "projekt"
    ],
    "ap1Kompetenzen": [
      "ap1-kundenbedarf"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "schulz-von-thun"
    ],
    "lernzeit": 90,
    "aufgabenfamilien": [
      "zuordnen",
      "diagnostizieren",
      "anwenden",
      "begruenden"
    ],
    "inhaltsstatus": "teilgeprueft",
    "quellen": {
      "q1_scope": [
        "kmk-rahmenlehrplan",
        "fiausbv",
        "bibb-fachinformatiker"
      ],
      "q2_fachquelle": [
        "ireb-cpre-foundation-3-3",
        "iso-iec-ieee-29148-2018",
        "nasa-se-handbook-requirements",
        "govuk-user-needs-research",
        "govuk-plan-user-research",
        "w3c-involving-users"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "projekt",
      "modul": "service-management"
    }
  },
  {
    "slug": "bit-byte",
    "titel": "Bit & Byte - die kleinsten Einheiten",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 2,
    "themen": [
      "grundlagen"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [],
    "lernzeit": 8,
    "aufgabenfamilien": [
      "rechnen"
    ],
    "inhaltsstatus": "geprueft",
    "quellen": {
      "q1_scope": [
        "kmk-rahmenlehrplan",
        "fiausbv",
        "bibb-fachinformatiker"
      ],
      "q2_fachquelle": [
        "nist-ir-8354-digital-investigation",
        "iec-80000-13",
        "nist-binary-prefixes",
        "bipm-si-prefixes",
        "ansi-x3-4-ascii",
        "unicode-utf-8"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "grundlagen",
      "modul": "zahlen"
    }
  },
  {
    "slug": "zahlensysteme",
    "titel": "Zahlensysteme (Dual, Hex, Dezimal)",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 3,
    "themen": [
      "grundlagen"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "bit-byte"
    ],
    "lernzeit": 24,
    "aufgabenfamilien": [
      "rechnen"
    ],
    "inhaltsstatus": "teilgeprueft",
    "quellen": {
      "q1_scope": [
        "kmk-rahmenlehrplan",
        "fiausbv",
        "bibb-fachinformatiker"
      ],
      "q2_fachquelle": [
        "nist-ir-8354-digital-investigation",
        "iec-80000-13",
        "posix-chmod",
        "rfc-9542",
        "w3c-css-color-4",
        "rfc-4632",
        "ieee-754-2019"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "grundlagen",
      "modul": "zahlen"
    }
  },
  {
    "slug": "prefixe",
    "titel": "SI- und Binärpräfixe (KB vs. KiB)",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 4,
    "themen": [
      "grundlagen"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "zahlensysteme"
    ],
    "lernzeit": 8,
    "aufgabenfamilien": [
      "rechnen"
    ],
    "inhaltsstatus": "teilgeprueft",
    "quellen": {
      "q1_scope": [
        "kmk-rahmenlehrplan",
        "fiausbv",
        "bibb-fachinformatiker"
      ],
      "q2_fachquelle": [
        "iec-80000-13",
        "nist-binary-prefixes",
        "bipm-si-prefixes",
        "jedec-100b-01",
        "ibm-storage-units",
        "gnu-coreutils-df"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "grundlagen",
      "modul": "zahlen"
    }
  },
  {
    "slug": "von-neumann",
    "titel": "Von-Neumann-Architektur",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 5,
    "themen": [
      "grundlagen"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "prefixe"
    ],
    "lernzeit": 18,
    "aufgabenfamilien": [
      "zuordnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [
        "smithsonian-edvac-first-draft",
        "computer-history-museum-edvac",
        "ibm-cpu-instruction-cycle",
        "cornell-cpu-stages"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "grundlagen",
      "modul": "rechnerarchitektur"
    }
  },
  {
    "slug": "cpu-ram-speicher",
    "titel": "CPU, RAM und Massenspeicher",
    "primaryLf": 2,
    "relatedLfs": [
      7,
      9
    ],
    "lfReihenfolge": 6,
    "themen": [
      "hardware"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "von-neumann"
    ],
    "lernzeit": 18,
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
        "ibm-cpu-instruction-cycle",
        "intel-cpu-clock-speed",
        "microsoft-ssd-hdd-storage",
        "nvmexpress-faq",
        "crucial-ddr-generations"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "hardware",
      "modul": "komponenten"
    }
  },
  {
    "slug": "hardware-schnittstellen",
    "titel": "Hardware, Schnittstellen & Peripherie auswählen",
    "primaryLf": 2,
    "relatedLfs": [
      7,
      9
    ],
    "lfReihenfolge": 7,
    "themen": [
      "hardware"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "cpu-ram-speicher"
    ],
    "lernzeit": 28,
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
      "bereich": "hardware",
      "modul": "schnittstellen"
    }
  },
  {
    "slug": "dateisysteme",
    "titel": "Dateisysteme (FAT32, NTFS, ext4, APFS)",
    "primaryLf": 2,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 8,
    "themen": [
      "betriebssysteme"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "hardware-schnittstellen"
    ],
    "lernzeit": 22,
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
      "bereich": "betriebssysteme",
      "modul": "os-grundlagen"
    }
  },
  {
    "slug": "prozess-thread",
    "titel": "Prozesse, Threads & Tasks",
    "primaryLf": 2,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 9,
    "themen": [
      "betriebssysteme"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "dateisysteme"
    ],
    "lernzeit": 18,
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
      "bereich": "betriebssysteme",
      "modul": "os-grundlagen"
    }
  },
  {
    "slug": "virtualisierung",
    "titel": "Virtualisierung & Hypervisor",
    "primaryLf": 2,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 10,
    "themen": [
      "betriebssysteme"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "prozess-thread"
    ],
    "lernzeit": 14,
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
      "bereich": "betriebssysteme",
      "modul": "it-infrastruktur"
    }
  },
  {
    "slug": "zentral-dezentral",
    "titel": "Zentrale vs. dezentrale IT-Systeme",
    "primaryLf": 2,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 11,
    "themen": [
      "betriebssysteme"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "virtualisierung"
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
      "bereich": "betriebssysteme",
      "modul": "it-infrastruktur"
    }
  },
  {
    "slug": "homeoffice-ergonomie",
    "titel": "Ergonomie, Barrierefreiheit & Telearbeit",
    "primaryLf": 2,
    "relatedLfs": [
      7,
      9
    ],
    "lfReihenfolge": 12,
    "themen": [
      "hardware"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "zentral-dezentral"
    ],
    "lernzeit": 18,
    "aufgabenfamilien": [
      "anwenden"
    ],
    "inhaltsstatus": "teilgeprueft",
    "quellen": {
      "q1_scope": [
        "kmk-rahmenlehrplan",
        "fiausbv",
        "bibb-fachinformatiker"
      ],
      "q2_fachquelle": [
        "arbstaettv",
        "arbschg",
        "dguv-215-410",
        "baua-mobile-arbeit-homeoffice",
        "w3c-wcag",
        "bitv-2-0"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "hardware",
      "modul": "schnittstellen"
    }
  },
  {
    "slug": "energiekosten",
    "titel": "Energiekosten, Wirkungsgrad & Amortisation",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 13,
    "themen": [
      "wirtschaft"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "homeoffice-ergonomie"
    ],
    "lernzeit": 16,
    "aufgabenfamilien": [
      "rechnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "wirtschaft",
      "modul": "kalkulation"
    }
  },
  {
    "slug": "datenrate-berechnung",
    "titel": "Datenrate & Downloadzeit berechnen",
    "primaryLf": 2,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 14,
    "themen": [
      "netzwerke"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "energiekosten"
    ],
    "lernzeit": 24,
    "aufgabenfamilien": [
      "rechnen"
    ],
    "inhaltsstatus": "geprueft",
    "quellen": {
      "q1_scope": [
        "kmk-rahmenlehrplan",
        "fiausbv",
        "bibb-fachinformatiker"
      ],
      "q2_fachquelle": [
        "bipm-si-prefixes",
        "nist-binary-prefixes",
        "iec-80000-13",
        "rfc-9293",
        "rfc-9110",
        "ieee-80211-working-group",
        "bsi-wlan-lan-grundlagen"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "netzwerke",
      "modul": "rechnen-netz"
    }
  },
  {
    "slug": "datenvolumen-berechnung",
    "titel": "Datenmengen, Scan & Übertragung — komplett rechnen",
    "primaryLf": 2,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 15,
    "themen": [
      "netzwerke"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "datenrate-berechnung"
    ],
    "lernzeit": 30,
    "aufgabenfamilien": [
      "rechnen"
    ],
    "inhaltsstatus": "teilgeprueft",
    "quellen": {
      "q1_scope": [
        "kmk-rahmenlehrplan",
        "fiausbv",
        "bibb-fachinformatiker"
      ],
      "q2_fachquelle": [
        "bipm-si-prefixes",
        "nist-binary-prefixes",
        "iec-80000-13",
        "nist-ir-8354-digital-investigation",
        "rfc-791",
        "rfc-9293",
        "rfc-9110",
        "iso-iec-10918-1-jpeg",
        "w3c-png-3",
        "itu-t-h264",
        "itu-t-g1010"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "netzwerke",
      "modul": "rechnen-netz"
    }
  },
  {
    "slug": "scan-bilddaten",
    "titel": "Scan- & Bilddaten rechnen (DPI, Farbtiefe)",
    "primaryLf": 2,
    "relatedLfs": [
      7,
      9
    ],
    "lfReihenfolge": 16,
    "themen": [
      "hardware"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "datenvolumen-berechnung"
    ],
    "lernzeit": 14,
    "aufgabenfamilien": [
      "rechnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "hardware",
      "modul": "bilddaten"
    }
  },
  {
    "slug": "raid-systeme",
    "titel": "RAID-Systeme (0, 1, 5, 6, 10)",
    "primaryLf": 2,
    "relatedLfs": [
      7,
      9
    ],
    "lfReihenfolge": 17,
    "themen": [
      "hardware"
    ],
    "ap1Kompetenzen": [],
    "ap1Relevanz": "raus",
    "voraussetzungen": [
      "scan-bilddaten"
    ],
    "lernzeit": 16,
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
      "bereich": "hardware",
      "modul": "speichersysteme"
    }
  },
  {
    "slug": "usv-systeme",
    "titel": "USV-Systeme",
    "primaryLf": 2,
    "relatedLfs": [
      7,
      9
    ],
    "lfReihenfolge": 18,
    "themen": [
      "hardware"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "raid-systeme"
    ],
    "lernzeit": 14,
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
      "bereich": "hardware",
      "modul": "speichersysteme"
    }
  },
  {
    "slug": "lizenzmodelle",
    "titel": "Lizenzmodelle (Open Source, proprietär, SaaS)",
    "primaryLf": 2,
    "relatedLfs": [
      8
    ],
    "lfReihenfolge": 19,
    "themen": [
      "aktuell"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "usv-systeme"
    ],
    "lernzeit": 14,
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
  },
  {
    "slug": "angebotsvergleich",
    "titel": "Angebotsvergleich (quantitativ & qualitativ)",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 20,
    "themen": [
      "wirtschaft"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "lizenzmodelle"
    ],
    "lernzeit": 18,
    "aufgabenfamilien": [
      "rechnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "wirtschaft",
      "modul": "entscheidung"
    }
  },
  {
    "slug": "nutzwertanalyse",
    "titel": "Nutzwertanalyse",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 21,
    "themen": [
      "wirtschaft"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "angebotsvergleich"
    ],
    "lernzeit": 12,
    "aufgabenfamilien": [
      "rechnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "wirtschaft",
      "modul": "entscheidung"
    }
  },
  {
    "slug": "kaufmaennische-rechenaufgaben",
    "titel": "Kaufmännische Rechenaufgaben (Kosten, Leasing, Skonto)",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 22,
    "themen": [
      "wirtschaft"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "nutzwertanalyse"
    ],
    "lernzeit": 25,
    "aufgabenfamilien": [
      "rechnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "wirtschaft",
      "modul": "kalkulation"
    }
  },
  {
    "slug": "variable-fixe-kosten",
    "titel": "Variable & fixe Kosten",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 23,
    "themen": [
      "wirtschaft"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "kaufmaennische-rechenaufgaben"
    ],
    "lernzeit": 10,
    "aufgabenfamilien": [
      "rechnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "wirtschaft",
      "modul": "kalkulation"
    }
  },
  {
    "slug": "gewinnermittlung",
    "titel": "Gewinnermittlung & Deckungsbeitrag",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 24,
    "themen": [
      "wirtschaft"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "variable-fixe-kosten"
    ],
    "lernzeit": 12,
    "aufgabenfamilien": [
      "rechnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "wirtschaft",
      "modul": "kalkulation"
    }
  },
  {
    "slug": "break-even",
    "titel": "Break-Even-Analyse",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 25,
    "themen": [
      "wirtschaft"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "gewinnermittlung"
    ],
    "lernzeit": 12,
    "aufgabenfamilien": [
      "rechnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "wirtschaft",
      "modul": "kalkulation"
    }
  },
  {
    "slug": "kauf-leasing-miete",
    "titel": "Kauf, Leasing & Miete im Vergleich",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 26,
    "themen": [
      "wirtschaft"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "break-even"
    ],
    "lernzeit": 18,
    "aufgabenfamilien": [
      "begruenden"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "wirtschaft",
      "modul": "entscheidung"
    }
  },
  {
    "slug": "make-or-buy",
    "titel": "Make-or-Buy-Entscheidung",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 27,
    "themen": [
      "wirtschaft"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "kauf-leasing-miete"
    ],
    "lernzeit": 18,
    "aufgabenfamilien": [
      "begruenden"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "wirtschaft",
      "modul": "entscheidung"
    }
  },
  {
    "slug": "eigenfremdfinanzierung",
    "titel": "Eigen- & Fremdfinanzierung",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 28,
    "themen": [
      "wirtschaft"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "make-or-buy"
    ],
    "lernzeit": 16,
    "aufgabenfamilien": [
      "rechnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "wirtschaft",
      "modul": "markt"
    }
  },
  {
    "slug": "afa-abschreibung",
    "titel": "AfA – lineare Abschreibung",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 29,
    "themen": [
      "wirtschaft"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "eigenfremdfinanzierung"
    ],
    "lernzeit": 14,
    "aufgabenfamilien": [
      "rechnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "wirtschaft",
      "modul": "kalkulation"
    }
  },
  {
    "slug": "handelskalkulation",
    "titel": "Handelskalkulation (Vorwärts/Rückwärts)",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 30,
    "themen": [
      "wirtschaft"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "afa-abschreibung"
    ],
    "lernzeit": 16,
    "aufgabenfamilien": [
      "rechnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "wirtschaft",
      "modul": "kalkulation"
    }
  },
  {
    "slug": "vertragsarten",
    "titel": "Vertragsarten: Kaufvertrag, Dienstvertrag & Werkvertrag",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 31,
    "themen": [
      "vertragsrecht"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "handelskalkulation"
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
      "bereich": "vertragsrecht",
      "modul": "vertraege"
    }
  },
  {
    "slug": "zweiseitiger-handelskauf",
    "titel": "Zweiseitiger Handelskauf",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 32,
    "themen": [
      "vertragsrecht"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "vertragsarten"
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
      "bereich": "vertragsrecht",
      "modul": "vertraege"
    }
  },
  {
    "slug": "gewaehrleistung",
    "titel": "Gewährleistung & Garantie",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 33,
    "themen": [
      "vertragsrecht"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "zweiseitiger-handelskauf"
    ],
    "lernzeit": 18,
    "aufgabenfamilien": [
      "begruenden"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [
        "bgb-433-kaufvertrag",
        "bgb-434-sachmangel",
        "bgb-437-maengelrechte",
        "bgb-438-verjaehrung-maengel",
        "bgb-443-garantie",
        "hgb-377-maengelruege"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "vertragsrecht",
      "modul": "vertraege"
    }
  },
  {
    "slug": "maengelruege",
    "titel": "Mängelrüge im Handelskauf",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 34,
    "themen": [
      "vertragsrecht"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "gewaehrleistung"
    ],
    "lernzeit": 10,
    "aufgabenfamilien": [
      "begruenden"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "vertragsrecht",
      "modul": "vertraege"
    }
  },
  {
    "slug": "vertragsstoerungen",
    "titel": "Vertragsstörungen (Verzug, Mängel, Unmöglichkeit)",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 35,
    "themen": [
      "vertragsrecht"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "maengelruege"
    ],
    "lernzeit": 14,
    "aufgabenfamilien": [
      "begruenden"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "vertragsrecht",
      "modul": "vertraege"
    }
  },
  {
    "slug": "rechnung-zahlungsziel-aufbewahrungsfristen",
    "titel": "Rechnung, Zahlungsziel & Aufbewahrungsfristen",
    "primaryLf": 2,
    "relatedLfs": [],
    "lfReihenfolge": 36,
    "themen": [
      "vertragsrecht"
    ],
    "ap1Kompetenzen": [
      "ap1-auswahl-beschaffung",
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "vertragsstoerungen"
    ],
    "lernzeit": 22,
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
      "bereich": "vertragsrecht",
      "modul": "vertraege"
    }
  }
] satisfies Chapter[]
