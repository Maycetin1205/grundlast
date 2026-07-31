import type { Chapter } from '../types'
import { plannedChapter } from './planned.ts'

export const lf9 = [
  plannedChapter({
    slug: 'netzwerkdienste-zusammenspiel',
    titel: 'Netzwerkdienste im Zusammenspiel',
    primaryLf: 9,
    relatedLfs: [3],
    lfReihenfolge: 1,
    themen: ['netzwerke'],
    ap1Kompetenzen: [],
    ap1Relevanz: 'raus',
    voraussetzungen: ['netzwerkkonfiguration', 'tcp-udp'],
    lernzeit: 40,
    aufgabenfamilien: ['zuordnen', 'begruenden'],
    route: { bereich: 'netzwerke', modul: 'dienste' },
  }),
  plannedChapter({
    slug: 'serverdienste-bereitstellen',
    titel: 'Serverdienste bereitstellen und prüfen',
    primaryLf: 9,
    relatedLfs: [3, 6],
    lfReihenfolge: 2,
    themen: ['netzwerke', 'betriebssysteme'],
    ap1Kompetenzen: [],
    ap1Relevanz: 'raus',
    voraussetzungen: ['netzwerkdienste-zusammenspiel'],
    lernzeit: 45,
    aufgabenfamilien: ['anwenden', 'diagnostizieren'],
    route: { bereich: 'netzwerke', modul: 'dienste' },
  }),
  plannedChapter({
    slug: 'routing-nat-firewallregeln',
    titel: 'Routing, NAT und Firewallregeln',
    primaryLf: 9,
    relatedLfs: [3, 4],
    lfReihenfolge: 3,
    themen: ['netzwerke', 'sicherheit'],
    ap1Kompetenzen: [],
    ap1Relevanz: 'raus',
    voraussetzungen: ['ipv4-subnetting', 'port-forwarding', 'firewall-dmz'],
    lernzeit: 45,
    aufgabenfamilien: ['anwenden', 'diagnostizieren'],
    route: { bereich: 'netzwerke', modul: 'routing-segmentierung' },
  }),
  plannedChapter({
    slug: 'vlan-segmentierung',
    titel: 'VLAN und Netzwerksegmentierung',
    primaryLf: 9,
    relatedLfs: [3, 4],
    lfReihenfolge: 4,
    themen: ['netzwerke', 'sicherheit'],
    ap1Kompetenzen: [],
    ap1Relevanz: 'raus',
    voraussetzungen: ['routing-nat-firewallregeln'],
    lernzeit: 40,
    aufgabenfamilien: ['zuordnen', 'begruenden'],
    route: { bereich: 'netzwerke', modul: 'routing-segmentierung' },
  }),
  {
    "slug": "imap-pop3-smtp",
    "titel": "E-Mail-Protokolle (IMAP, POP3, SMTP)",
    "primaryLf": 9,
    "relatedLfs": [],
    "lfReihenfolge": 8,
    "themen": [
      "netzwerke"
    ],
    "ap1Kompetenzen": [],
    "ap1Relevanz": "raus",
    "voraussetzungen": [
      "netzwerkdienste-zusammenspiel",
      "pki-zertifikate"
    ],
    "lernzeit": 12,
    "aufgabenfamilien": [
      "zuordnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [
        "kmk-rahmenlehrplan"
      ],
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
    "lfReihenfolge": 5,
    "themen": [
      "betriebssysteme"
    ],
    "ap1Kompetenzen": [],
    "ap1Relevanz": "raus",
    "voraussetzungen": [
      "dateisysteme"
    ],
    "lernzeit": 18,
    "aufgabenfamilien": [
      "zuordnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [
        "kmk-rahmenlehrplan"
      ],
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
    "lfReihenfolge": 6,
    "themen": [
      "sicherheit"
    ],
    "ap1Kompetenzen": [],
    "ap1Relevanz": "raus",
    "voraussetzungen": [
      "linux-chmod"
    ],
    "lernzeit": 8,
    "aufgabenfamilien": [
      "zuordnen"
    ],
    "inhaltsstatus": "geplant",
    "quellen": {
      "q1_scope": [
        "kmk-rahmenlehrplan"
      ],
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
    "lfReihenfolge": 7,
    "themen": [
      "sicherheit"
    ],
    "ap1Kompetenzen": [],
    "ap1Relevanz": "raus",
    "voraussetzungen": [
      "serverdienste-bereitstellen"
    ],
    "lernzeit": 12,
    "aufgabenfamilien": [
      "rechnen"
    ],
    "inhaltsstatus": "ausgearbeitet",
    "quellen": {
      "q1_scope": [
        "kmk-rahmenlehrplan"
      ],
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "sicherheit",
      "modul": "betrieb-sicherheit"
    }
  }
] satisfies Chapter[]
