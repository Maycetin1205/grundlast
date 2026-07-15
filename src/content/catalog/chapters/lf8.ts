import type { Chapter } from '../types'

export const lf8 = [
  {
    "slug": "crm-erp-dms",
    "titel": "CRM, ERP, DMS & CMS – Unternehmenssoftware",
    "primaryLf": 8,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 1,
    "themen": [
      "betriebssysteme"
    ],
    "ap1Kompetenzen": [],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [],
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
      "modul": "it-infrastruktur"
    }
  },
  {
    "slug": "cloud-konzepte",
    "titel": "Cloud-Konzepte (IaaS, PaaS, SaaS)",
    "primaryLf": 8,
    "relatedLfs": [],
    "lfReihenfolge": 2,
    "themen": [
      "aktuell"
    ],
    "ap1Kompetenzen": [],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "crm-erp-dms"
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
      "bereich": "aktuell",
      "modul": "neue-themen"
    }
  }
] satisfies Chapter[]
