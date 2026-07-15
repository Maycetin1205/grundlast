import { getChapter } from './learning'
export type ReviewStatus = 'unchecked' | 'reviewed'

export interface LessonReview {
  lessonSlug: string
  status: ReviewStatus
  checkedAt?: string
  reviewer?: string
  sourceIds?: string[]
  notes?: string[]
}

const reviewLog: Record<string, Omit<LessonReview, 'status'>> = {
  'pki-zertifikate': {
    lessonSlug: 'pki-zertifikate',
    checkedAt: '2026-07-13',
    reviewer: 'Codex',
    sourceIds: [
      'rfc-5280',
      'rfc-6960',
      'rfc-8446',
      'bsi-kryptografie',
      'bsi-tr-02102-1',
      'bibb-fachinformatiker',
    ],
    notes: [
      'Neuer Goldstandard-Review abgeschlossen: PKI-Zweck, Public/Private Key, Zertifikat, CA-Kette, Validierung und Widerruf quellenbasiert geprüft.',
      'Keine Aufgaben- oder Prüfungslogik im Lernkapitel; nur dezenter Mini-Selbstcheck und kompakte Fehlerfallen.',
    ],
  },
  'bit-byte': {
    lessonSlug: 'bit-byte',
    checkedAt: '2026-07-03',
    reviewer: 'Codex (2026-06-03/2026-06-10), Claude (2026-07-03)',
    sourceIds: [
      'kmk-rahmenlehrplan',
      'fiausbv',
      'bibb-fachinformatiker',
      'nist-ir-8354-digital-investigation',
      'iec-80000-13',
      'nist-binary-prefixes',
      'bipm-si-prefixes',
      'rfc-20-ascii',
      'ansi-x3-4-ascii',
      'unicode-utf-8',
      'rfc-3629-utf8',
    ],
    notes: [
      'Neuer Goldstandard-Review abgeschlossen: Bit, Byte, 8-Bit-Wertebereich, b/B-Falle, Speicher/Datenrate und Zeichenkontext quellenbasiert geprüft.',
      'Alte Übungsblöcke entfernt und auf erklärende Mini-Selbstchecks reduziert; kein Prüfungsmodus im Lernkapitel.',
      'Restaudit 2026-07-03: offene ASCII-Quelle geschlossen (RFC 20 + RFC 3629 als frei pruefbare Primaerquellen ergaenzt, ANSI-Verweis bleibt als Normhinweis). Didaktischer Vergleich frisch gegen Stanford CS101 (Bit -> Byte -> 2^n -> 0-255 -> ASCII, deckt sich mit der Lernleiter) verifiziert, ergaenzt den bestehenden Khan-Academy-Vergleich. Aufgabenabgleich gegen PRUEFUNGSINVENTAR_2021_2024.md: Kapitel traegt die realen Aufgabentypen "Uebertragungszeit-Berechnung" und die Bit/Byte-Grundlage von "Speicherbedarf-Berechnung" (b/B-Faktor 8, KB/KiB); Loesbarkeit an einem selbst gebildeten Beispiel (45 MB bei 6 Mbit/s = 60 s) durchgerechnet. Alle Zahlen/Formeln unabhaengig nachgerechnet, keine Abweichung gefunden.',
    ],
  },
  zahlensysteme: {
    lessonSlug: 'zahlensysteme',
    checkedAt: '2026-06-03',
    reviewer: 'Codex',
    sourceIds: [
      'kmk-rahmenlehrplan',
      'fiausbv',
      'bibb-fachinformatiker',
      'nist-ir-8354-digital-investigation',
      'iec-80000-13',
      'posix-chmod',
      'rfc-9542',
      'w3c-css-color-4',
      'rfc-4632',
      'ieee-754-2019',
    ],
    notes: [
      'Neuer Goldstandard-Review abgeschlossen: Glossar-IDs und Quellen-IDs vollständig vorhanden.',
      'Aufgaben-/Trainer-Elemente auf dezente Selbstchecks und erklärende Werkzeuge reduziert; kein Prüfungsmodus im Lernkapitel.',
      'P0-Korrektur 2026-07-13: fünf Umlaut-Term-ID-Vorkommen auf die vorhandenen ASCII-Glossar-IDs umgestellt, unbelegte Mehrheitsbehauptung zu chmod 755 entfernt, LF2-Manifest mit dem Auditstatus synchronisiert und kapitelbezogenen Glossar-ID-Test ergänzt.',
    ],
  },
  prefixe: {
    lessonSlug: 'prefixe',
    checkedAt: '2026-07-03',
    reviewer: 'Codex (2026-06-05/2026-06-10), Claude (2026-07-03)',
    sourceIds: [
      'kmk-rahmenlehrplan',
      'fiausbv',
      'bibb-fachinformatiker',
      'iec-80000-13',
      'nist-binary-prefixes',
      'bipm-si-prefixes',
      'jedec-100b-01',
      'ibm-storage-units',
      'gnu-coreutils-df',
    ],
    notes: [
      'SI-/IEC-Faktoren, Symbol-Regeln (k klein, i markiert die 1024er-Reihe) und Rechenwege quellenbasiert geprüft; keine Aufgaben-/Prüfungslogik, nur erklärende Selbstchecks.',
      'Restaudit 2026-07-03: Kernfakten frisch gegen Primärquellen verifiziert (BIPM: k/M/G/T = 10^3..10^12, Symbol k klein; NIST: Ki/Mi/Gi/Ti = 2^10..2^40, 1 KiB=1.024 B .. 1 TiB=1.099.511.627.776 B, nicht Teil des SI, IEC-Einführung Dezember 1998; IEC 80000-13 bestätigt). Alle Rechnungen unabhängig nachgerechnet (500 GB=465,66 GiB; 2.048.000 bit=250 KiB; 1 GiB bei 16 Mbit/s=536,87 s; 4 MiB=4.194.304 B; 1 TB=931 GiB; Drift +2,4/+4,9/+7,4/+10,0 %) — keine Abweichung. Aufgabenabgleich gegen abstrahierte AP1-Aufgabentypen (Speichermenge in TiB/Jahr über die Byte→KiB→…→TiB-1024-Kette, Datenmengen-/Scan-Rechnungen): Kapitel trägt die Präfix-Umrechnung als Werkzeugwissen. Glossar-Bug behoben: Umlaut-Term-IDs (dezimalpräfix/binärpräfix) auf die vorhandenen ASCII-IDs (dezimalpraefix/binaerpraefix) korrigiert; kompakten Selbstcheck mit Lösungen ergänzt.',
    ],
  },
}

export function getLessonReview(lessonSlug: string): LessonReview {
  const entry = reviewLog[lessonSlug]
  const status: ReviewStatus = getChapter(lessonSlug)?.inhaltsstatus === 'geprueft' ? 'reviewed' : 'unchecked'
  return entry ? { ...entry, status } : { lessonSlug, status, notes: ['Inhalt ausgearbeitet, aber noch nicht formal fuer Lehrer-/IHK-Weitergabe freigegeben.'] }
}

export function reviewStatusLabel(status: ReviewStatus) {
  return status === 'reviewed' ? 'Faktencheck dokumentiert' : 'Faktencheck ausstehend'
}
