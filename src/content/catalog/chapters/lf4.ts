import type { Chapter } from '../types'
import { plannedChapter } from './planned.ts'

export const lf4 = [
  plannedChapter({
    slug: 'schutzbedarf-risikoanalyse',
    titel: 'Schutzbedarf und Risikoanalyse durchführen',
    primaryLf: 4,
    relatedLfs: [9],
    lfReihenfolge: 2,
    themen: ['sicherheit'],
    ap1Kompetenzen: ['ap1-konfiguration-test'],
    ap1Relevanz: 'hoch',
    voraussetzungen: ['schutzziele'],
    lernzeit: 40,
    aufgabenfamilien: ['anwenden', 'begruenden'],
    q1Scope: ['kmk-rahmenlehrplan', 'fiausbv'],
    route: { bereich: 'sicherheit', modul: 'schutzbedarf' },
  }),
  {
    "slug": "schutzziele",
    "titel": "Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz",
    "primaryLf": 4,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 1,
    "themen": [
      "sicherheit"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [],
    "lernzeit": 32,
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
      "bereich": "sicherheit",
      "modul": "betrieb-sicherheit"
    }
  },
  {
    "slug": "dsgvo-basics",
    "titel": "DSGVO – die sieben Grundsätze",
    "primaryLf": 4,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 3,
    "themen": [
      "sicherheit"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "schutzziele"
    ],
    "lernzeit": 12,
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
      "bereich": "sicherheit",
      "modul": "dsgvo-krypto"
    }
  },
  {
    "slug": "backup-strategien",
    "titel": "Backup-Strategien (Voll, Inkrementell, Differenziell)",
    "primaryLf": 4,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 4,
    "themen": [
      "sicherheit"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "dsgvo-basics"
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
      "bereich": "sicherheit",
      "modul": "betrieb-sicherheit"
    }
  },
  {
    "slug": "malware-grundlagen",
    "titel": "Malware — Viren, Würmer, Trojaner, Ransomware",
    "primaryLf": 4,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 5,
    "themen": [
      "sicherheit"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "backup-strategien"
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
      "bereich": "sicherheit",
      "modul": "betrieb-sicherheit"
    }
  },
  {
    "slug": "endpoint-security",
    "titel": "Endpoint-Security & Schutzmaßnahmen",
    "primaryLf": 4,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 6,
    "themen": [
      "sicherheit"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "malware-grundlagen"
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
      "bereich": "sicherheit",
      "modul": "betrieb-sicherheit"
    }
  },
  {
    "slug": "firewall-dmz",
    "titel": "Firewall und DMZ",
    "primaryLf": 4,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 7,
    "themen": [
      "netzwerke"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "endpoint-security"
    ],
    "lernzeit": 24,
    "aufgabenfamilien": [
      "zuordnen"
    ],
    "inhaltsstatus": "teilgeprueft",
    "quellen": {
      "q1_scope": [
        "kmk-rahmenlehrplan",
        "fiausbv",
        "bibb-fachinformatiker"
      ],
      "q2_fachquelle": [
        "bsi-net-3-2-firewall",
        "bsi-net-1-1-netzarchitektur",
        "bsi-firewall",
        "bsi-router-wlan-vpn",
        "rfc-1918"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "netzwerke",
      "modul": "netz-sicherheit"
    }
  },
  {
    "slug": "passwoerter-hashing",
    "titel": "Passwörter & Hashing (Salt, Pepper)",
    "primaryLf": 4,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 8,
    "themen": [
      "sicherheit"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "firewall-dmz"
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
      "bereich": "sicherheit",
      "modul": "dsgvo-krypto"
    }
  },
  {
    "slug": "verschluesselung-sicherheit",
    "titel": "Verschlüsselung & IT-Sicherheit",
    "primaryLf": 4,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 9,
    "themen": [
      "sicherheit"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "passwoerter-hashing"
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
      "bereich": "sicherheit",
      "modul": "dsgvo-krypto"
    }
  },
  {
    "slug": "verschluesselung-hash-vpn",
    "titel": "Verschlüsselung, Hashing, Zertifikate, Signatur & VPN",
    "primaryLf": 4,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 10,
    "themen": [
      "sicherheit"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "verschluesselung-sicherheit"
    ],
    "lernzeit": 30,
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
      "bereich": "sicherheit",
      "modul": "dsgvo-krypto"
    }
  },
  {
    "slug": "pki-zertifikate",
    "titel": "PKI, CA & Zertifikate",
    "primaryLf": 4,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 11,
    "themen": [
      "sicherheit"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "verschluesselung-hash-vpn"
    ],
    "lernzeit": 18,
    "aufgabenfamilien": [
      "begruenden"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [
        "bibb-fachinformatiker"
      ],
      "q2_fachquelle": [
        "rfc-5280",
        "rfc-6960",
        "rfc-8446",
        "bsi-kryptografie",
        "bsi-tr-02102-1"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "sicherheit",
      "modul": "dsgvo-krypto"
    }
  }
] satisfies Chapter[]
