import type { Chapter } from '../types'
import { plannedChapter } from './planned.ts'

export const lf3 = [
  plannedChapter({
    slug: 'netzwerkgrundlagen-komponenten',
    titel: 'Netzwerkgrundbegriffe, Komponenten & Topologien',
    primaryLf: 3,
    relatedLfs: [9],
    lfReihenfolge: 1,
    themen: ['netzwerke'],
    ap1Kompetenzen: ['ap1-auswahl-beschaffung', 'ap1-konfiguration-test'],
    ap1Relevanz: 'hoch',
    voraussetzungen: ['hardware-schnittstellen'],
    lernzeit: 35,
    aufgabenfamilien: ['zuordnen', 'begruenden'],
    q1Scope: ['kmk-rahmenlehrplan', 'fiausbv'],
    route: { bereich: 'netzwerke', modul: 'grundlagen-netz' },
  }),
  plannedChapter({
    slug: 'ipv4-grundlagen',
    titel: 'IPv4-Grundlagen: Adresse, Maske, CIDR & Gateway',
    primaryLf: 3,
    relatedLfs: [9],
    lfReihenfolge: 3,
    themen: ['netzwerke'],
    ap1Kompetenzen: ['ap1-konfiguration-test'],
    ap1Relevanz: 'hoch',
    voraussetzungen: ['netzwerkgrundlagen-komponenten', 'zahlensysteme'],
    lernzeit: 35,
    aufgabenfamilien: ['zuordnen', 'rechnen'],
    q1Scope: ['kmk-rahmenlehrplan', 'fiausbv'],
    route: { bereich: 'netzwerke', modul: 'ip-adressierung' },
  }),
  plannedChapter({
    slug: 'netzwerkdiagnose',
    titel: 'Netzwerkdiagnose systematisch durchführen',
    primaryLf: 3,
    relatedLfs: [6, 9],
    lfReihenfolge: 8,
    themen: ['netzwerke'],
    ap1Kompetenzen: ['ap1-konfiguration-test', 'ap1-kontrolle-protokoll'],
    ap1Relevanz: 'hoch',
    voraussetzungen: ['netzwerkkonfiguration', 'tcp-udp'],
    lernzeit: 40,
    aufgabenfamilien: ['diagnostizieren', 'begruenden'],
    q1Scope: ['kmk-rahmenlehrplan', 'fiausbv'],
    route: { bereich: 'netzwerke', modul: 'diagnose' },
  }),
  {
    "slug": "osi-modell",
    "titel": "OSI-Modell – sieben Schichten",
    "primaryLf": 3,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 2,
    "themen": [
      "netzwerke"
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
    "inhaltsstatus": "teilgeprueft",
    "quellen": {
      "q1_scope": [
        "kmk-rahmenlehrplan",
        "fiausbv",
        "bibb-fachinformatiker"
      ],
      "q2_fachquelle": [
        "itu-x200-osi-basic-model",
        "iso-7498-1",
        "rfc-1122",
        "rfc-791",
        "rfc-826",
        "rfc-9293",
        "rfc-768",
        "rfc-9110",
        "rfc-8446"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "netzwerke",
      "modul": "grundlagen-netz"
    }
  },
  {
    "slug": "tcp-udp",
    "titel": "TCP vs. UDP",
    "primaryLf": 3,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 6,
    "themen": [
      "netzwerke"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "osi-modell"
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
        "rfc-9293",
        "rfc-768",
        "rfc-6335",
        "iana-service-port-registry",
        "rfc-1035",
        "rfc-7766",
        "rfc-2131",
        "rfc-9110",
        "rfc-8446"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "netzwerke",
      "modul": "grundlagen-netz"
    }
  },
  {
    "slug": "netzwerkkonfiguration",
    "titel": "Netzwerkkonfiguration, DHCP, DNS & Diagnose",
    "primaryLf": 3,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 5,
    "themen": [
      "netzwerke"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "tcp-udp"
    ],
    "lernzeit": 32,
    "aufgabenfamilien": [
      "diagnostizieren"
    ],
    "inhaltsstatus": "teilgeprueft",
    "quellen": {
      "q1_scope": [
        "kmk-rahmenlehrplan",
        "fiausbv",
        "bibb-fachinformatiker"
      ],
      "q2_fachquelle": [
        "rfc-2131",
        "rfc-2132",
        "rfc-1034",
        "rfc-1035",
        "rfc-7766",
        "rfc-826",
        "rfc-3927",
        "rfc-9293",
        "microsoft-ipconfig",
        "microsoft-ping",
        "microsoft-tracert",
        "microsoft-dns-troubleshooting"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "netzwerke",
      "modul": "adressierung"
    }
  },
  {
    "slug": "ipv4-subnetting",
    "titel": "IPv4 & Subnetting",
    "primaryLf": 3,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 4,
    "themen": [
      "netzwerke"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "netzwerkkonfiguration"
    ],
    "lernzeit": 20,
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
        "rfc-791",
        "rfc-4632",
        "rfc-1918",
        "rfc-3021",
        "iana-ipv4-special-registry"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "netzwerke",
      "modul": "adressierung"
    }
  },
  {
    "slug": "wlan-standards",
    "titel": "WLAN-Standards und WLAN-Sicherheit",
    "primaryLf": 3,
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
      "ipv4-subnetting"
    ],
    "lernzeit": 22,
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
        "ieee-80211-working-group",
        "ieee-sa-p802-11",
        "ieee-80211ax-2021",
        "ieee-80211be-2024",
        "wifi-alliance-security",
        "bsi-wlan-lan-grundlagen",
        "bsi-wlan-sicherheitstipps",
        "microsoft-windows-wifi"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "netzwerke",
      "modul": "netz-sicherheit"
    }
  },
  {
    "slug": "ipv6-grundlagen",
    "titel": "IPv6 – Aufbau & Adressierung",
    "primaryLf": 3,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 9,
    "themen": [
      "netzwerke"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "wlan-standards"
    ],
    "lernzeit": 20,
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
        "rfc-8200",
        "rfc-4291",
        "rfc-5952",
        "rfc-4862",
        "rfc-8981",
        "rfc-7217",
        "rfc-4193",
        "rfc-3849"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "netzwerke",
      "modul": "ipv6"
    }
  },
  {
    "slug": "port-forwarding",
    "titel": "Port Forwarding und NAT",
    "primaryLf": 3,
    "relatedLfs": [
      9
    ],
    "lfReihenfolge": 10,
    "themen": [
      "netzwerke"
    ],
    "ap1Kompetenzen": [
      "ap1-konfiguration-test"
    ],
    "ap1Relevanz": "hoch",
    "voraussetzungen": [
      "ipv6-grundlagen"
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
        "rfc-1918",
        "rfc-2663",
        "rfc-3022",
        "rfc-5737",
        "rfc-6333",
        "rfc-6888",
        "bsi-router-wlan-vpn",
        "bsi-firewall",
        "bsi-net-1-1-netzarchitektur",
        "bsi-vpn"
      ],
      "q3_pruefungsrealitaet": []
    },
    "route": {
      "bereich": "netzwerke",
      "modul": "netz-sicherheit"
    }
  }
] satisfies Chapter[]
