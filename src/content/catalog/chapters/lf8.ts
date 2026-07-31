import type { Chapter } from '../types'
import { plannedChapter } from './planned.ts'

export const lf8 = [
  plannedChapter({
    slug: 'datenquellen-systemgrenzen',
    titel: 'Datenquellen und Systemgrenzen analysieren',
    primaryLf: 8,
    relatedLfs: [5],
    lfReihenfolge: 1,
    themen: ['daten'],
    ap1Kompetenzen: [],
    ap1Relevanz: 'raus',
    voraussetzungen: ['stamm-bewegungsdaten'],
    aufgabenfamilien: ['zuordnen', 'begruenden'],
    route: { bereich: 'daten', modul: 'systemuebergreifend' },
  }),
  plannedChapter({
    slug: 'schnittstellen-apis',
    titel: 'Schnittstellen und APIs sicher nutzen',
    primaryLf: 8,
    relatedLfs: [5, 9],
    lfReihenfolge: 2,
    themen: ['daten', 'software'],
    ap1Kompetenzen: [],
    ap1Relevanz: 'raus',
    voraussetzungen: ['datenquellen-systemgrenzen', 'tcp-udp'],
    aufgabenfamilien: ['zuordnen', 'anwenden'],
    route: { bereich: 'daten', modul: 'schnittstellen' },
  }),
  plannedChapter({
    slug: 'authentifizierung-rollen-berechtigungen',
    titel: 'Authentifizierung, Rollen und Berechtigungen',
    primaryLf: 8,
    relatedLfs: [4, 9],
    lfReihenfolge: 3,
    themen: ['sicherheit', 'daten'],
    ap1Kompetenzen: [],
    ap1Relevanz: 'raus',
    voraussetzungen: ['schnittstellen-apis', 'schutzziele'],
    aufgabenfamilien: ['zuordnen', 'begruenden'],
    route: { bereich: 'daten', modul: 'schnittstellen' },
  }),
  plannedChapter({
    slug: 'datenqualitaet-transformation',
    titel: 'Datenqualität, Mapping und Transformation',
    primaryLf: 8,
    relatedLfs: [5],
    lfReihenfolge: 4,
    themen: ['daten'],
    ap1Kompetenzen: [],
    ap1Relevanz: 'raus',
    voraussetzungen: ['datenquellen-systemgrenzen', 'schnittstellen-apis'],
    aufgabenfamilien: ['anwenden', 'diagnostizieren'],
    route: { bereich: 'daten', modul: 'systemuebergreifend' },
  }),
  plannedChapter({
    slug: 'datenschutz-datenbereitstellung',
    titel: 'Datenschutz bei der Datenbereitstellung',
    primaryLf: 8,
    relatedLfs: [4, 5],
    lfReihenfolge: 5,
    themen: ['sicherheit', 'daten'],
    ap1Kompetenzen: [],
    ap1Relevanz: 'raus',
    voraussetzungen: ['authentifizierung-rollen-berechtigungen', 'dsgvo-basics'],
    aufgabenfamilien: ['begruenden', 'anwenden'],
    route: { bereich: 'daten', modul: 'systemuebergreifend' },
  }),
  {
    "slug": "crm-erp-dms",
    "titel": "CRM, ERP, DMS & CMS – Unternehmenssoftware",
    "primaryLf": 8,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 7,
    "themen": [
      "betriebssysteme"
    ],
    "ap1Kompetenzen": [],
    "ap1Relevanz": "raus",
    "voraussetzungen": [
      "datenquellen-systemgrenzen"
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
      "q2_fachquelle": [],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "betriebssysteme",
      "modul": "it-infrastruktur"
    }
  },
  {
    "slug": "cloud-konzepte",
    "titel": "Cloud-Konzepte (IaaS, PaaS, SaaS)",
    "primaryLf": 8,
    "relatedLfs": [],
    "lfReihenfolge": 6,
    "themen": [
      "aktuell"
    ],
    "ap1Kompetenzen": [],
    "ap1Relevanz": "raus",
    "voraussetzungen": [
      "datenschutz-datenbereitstellung"
    ],
    "lernzeit": 12,
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
      "bereich": "aktuell",
      "modul": "neue-themen"
    }
  }
] satisfies Chapter[]
