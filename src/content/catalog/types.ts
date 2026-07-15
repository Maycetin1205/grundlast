import type { Aufgabenfamilie } from '../../lib/learning/types'

export interface ChapterSources { q1_scope: string[]; q2_fachquelle: string[]; q3_pruefungsrealitaet: string[] }
export interface Chapter { slug: string; titel: string; primaryLf: 1|2|3|4|5|6|7|8|9; relatedLfs: Array<1|2|3|4|5|6|7|8|9>; lfReihenfolge: number; themen: string[]; ap1Kompetenzen: string[]; ap1Relevanz: 'pflicht'|'hoch'|'mittel'|'niedrig'|'raus'|'unklar'; voraussetzungen: string[]; lernzeit: number; aufgabenfamilien: Aufgabenfamilie[]; inhaltsstatus: 'geplant'|'ausgearbeitet'|'teilgeprueft'|'geprueft'|'gesperrt'; quellen: ChapterSources; route: { bereich: string; modul: string } }
