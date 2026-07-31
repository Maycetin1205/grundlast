import type { Chapter } from '../types'
import { plannedChapter } from './planned.ts'

const common = {
  primaryLf: 7 as const,
  relatedLfs: [2, 3, 4] as Chapter['relatedLfs'],
  ap1Kompetenzen: [],
  ap1Relevanz: 'raus' as const,
  q1Scope: ['kmk-rahmenlehrplan'],
  route: { bereich: 'cyber-physische-systeme', modul: 'cps-grundlagen' },
}

export const lf7 = [
  plannedChapter({
    ...common,
    slug: 'cps-grundlagen',
    titel: 'Cyber-physische Systeme verstehen',
    lfReihenfolge: 1,
    themen: ['aktuell', 'netzwerke'],
    voraussetzungen: ['netzwerkgrundlagen-komponenten'],
    aufgabenfamilien: ['zuordnen', 'begruenden'],
  }),
  plannedChapter({
    ...common,
    slug: 'sensoren-aktoren-messwerte',
    titel: 'Sensoren, Aktoren und Messwerte',
    lfReihenfolge: 2,
    themen: ['aktuell', 'hardware'],
    voraussetzungen: ['cps-grundlagen'],
    aufgabenfamilien: ['zuordnen', 'rechnen'],
  }),
  plannedChapter({
    ...common,
    slug: 'cps-schnittstellen-protokolle',
    titel: 'CPS-Schnittstellen, Protokolle und Datenfluss',
    lfReihenfolge: 3,
    themen: ['aktuell', 'netzwerke'],
    voraussetzungen: ['sensoren-aktoren-messwerte', 'tcp-udp'],
    aufgabenfamilien: ['zuordnen', 'anwenden'],
  }),
  plannedChapter({
    ...common,
    slug: 'cps-energie-betriebssicherheit',
    titel: 'CPS-Energieversorgung und Betriebssicherheit',
    lfReihenfolge: 4,
    themen: ['aktuell', 'sicherheit'],
    voraussetzungen: ['sensoren-aktoren-messwerte', 'energiekosten'],
    aufgabenfamilien: ['rechnen', 'begruenden'],
  }),
  plannedChapter({
    ...common,
    slug: 'cps-integration-funktionskontrolle',
    titel: 'CPS integrieren und Funktion kontrollieren',
    lfReihenfolge: 5,
    themen: ['aktuell', 'sicherheit'],
    voraussetzungen: ['cps-schnittstellen-protokolle', 'cps-energie-betriebssicherheit'],
    aufgabenfamilien: ['diagnostizieren', 'anwenden'],
  }),
] satisfies Chapter[]
