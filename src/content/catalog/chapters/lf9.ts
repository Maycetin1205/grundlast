import type { Chapter } from '../types'

export const lf9 = [
  {
    "slug": "imap-pop3-smtp",
    "titel": "E-Mail-Protokolle (IMAP, POP3, SMTP)",
    "primaryLf": 9,
    "relatedLfs": [],
    "lfReihenfolge": 1,
    "themen": [
      "netzwerke"
    ],
    "ap1Kompetenzen": [],
    "ap1Relevanz": "unklar",
    "voraussetzungen": [],
    "lernzeit": 12,
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
      "bereich": "netzwerke",
      "modul": "grundlagen-netz"
    }
  },
  {
    "slug": "linux-chmod",
    "titel": "Linux-Dateiberechtigungen (chmod, rwx)",
    "primaryLf": 9,
    "relatedLfs": [],
    "lfReihenfolge": 2,
    "themen": [
      "betriebssysteme"
    ],
    "ap1Kompetenzen": [],
    "ap1Relevanz": "unklar",
    "voraussetzungen": [
      "imap-pop3-smtp"
    ],
    "lernzeit": 18,
    "aufgabenfamilien": [
      "zuordnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [],
      "q2_fachquelle": [
        "posix-chmod",
        "gnu-coreutils-chmod",
        "linux-man-pages-chmod2"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "betriebssysteme",
      "modul": "os-grundlagen"
    }
  },
  {
    "slug": "ssh-telnet",
    "titel": "SSH vs. Telnet",
    "primaryLf": 9,
    "relatedLfs": [],
    "lfReihenfolge": 3,
    "themen": [
      "sicherheit"
    ],
    "ap1Kompetenzen": [],
    "ap1Relevanz": "unklar",
    "voraussetzungen": [
      "linux-chmod"
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
      "bereich": "sicherheit",
      "modul": "betrieb-sicherheit"
    }
  },
  {
    "slug": "mtbf-mttf",
    "titel": "MTBF & MTTF – Ausfallwahrscheinlichkeit",
    "primaryLf": 9,
    "relatedLfs": [],
    "lfReihenfolge": 4,
    "themen": [
      "sicherheit"
    ],
    "ap1Kompetenzen": [],
    "ap1Relevanz": "unklar",
    "voraussetzungen": [
      "ssh-telnet"
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
      "bereich": "sicherheit",
      "modul": "betrieb-sicherheit"
    }
  }
] satisfies Chapter[]
