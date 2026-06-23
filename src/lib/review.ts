export type ReviewStatus = 'unchecked' | 'reviewed'

export interface LessonReview {
  lessonSlug: string
  status: ReviewStatus
  checkedAt?: string
  reviewer?: string
  sourceIds?: string[]
  notes?: string[]
}

const reviewLog: Record<string, LessonReview> = {
  'pki-zertifikate': {
    lessonSlug: 'pki-zertifikate',
    status: 'reviewed',
    checkedAt: '2026-06-03',
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
    status: 'reviewed',
    checkedAt: '2026-06-03',
    reviewer: 'Codex',
    sourceIds: [
      'kmk-rahmenlehrplan',
      'fiausbv',
      'bibb-fachinformatiker',
      'nist-ir-8354-digital-investigation',
      'iec-80000-13',
      'nist-binary-prefixes',
      'bipm-si-prefixes',
      'ansi-x3-4-ascii',
      'unicode-utf-8',
    ],
    notes: [
      'Neuer Goldstandard-Review abgeschlossen: Bit, Byte, 8-Bit-Wertebereich, b/B-Falle, Speicher/Datenrate und Zeichenkontext quellenbasiert geprüft.',
      'Alte Übungsblöcke entfernt und auf erklärende Mini-Selbstchecks reduziert; kein Prüfungsmodus im Lernkapitel.',
    ],
  },
  zahlensysteme: {
    lessonSlug: 'zahlensysteme',
    status: 'reviewed',
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
    ],
  },
}

export function getLessonReview(lessonSlug: string): LessonReview {
  return (
    reviewLog[lessonSlug] ?? {
      lessonSlug,
      status: 'unchecked',
      notes: [
        'Inhalt ausgearbeitet, aber noch nicht formal für Lehrer-/IHK-Weitergabe freigegeben.',
      ],
    }
  )
}

export function reviewStatusLabel(status: ReviewStatus) {
  return status === 'reviewed' ? 'Faktencheck dokumentiert' : 'Faktencheck ausstehend'
}
