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
    checkedAt: '2026-06-25',
    reviewer: 'Codex',
    sourceIds: [
      'kmk-rahmenlehrplan',
      'fiausbv',
      'bibb-fachinformatiker',
      'nist-ir-8354-digital-investigation',
      'iec-80000-13',
      'nist-binary-prefixes',
      'bipm-si-prefixes',
      'rfc-20',
      'rfc-3629',
      'unicode-utf-8',
    ],
    notes: [
      'Neustart-Review abgeschlossen: Bit, Byte, 8-Bit-Wertebereich, b/B-Falle, Speicher/Datenrate, Präfixe und Zeichenkontext vollständig gegen Primärquellen geprüft.',
      'Lokale legale Aufgabenarten bestätigen die benötigten Grundlagen für 8 Bit = 256 Zustände sowie mehrstufige Umrechnungen von Bit über Byte bis TiB.',
      'Kein Prüfungsmodus im Lernkapitel; komplexe Scan- und Datenvolumenrechnungen bleiben in den passenden Folgekapiteln.',
    ],
  },
  zahlensysteme: {
    lessonSlug: 'zahlensysteme',
    status: 'reviewed',
    checkedAt: '2026-06-25',
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
      'Neustart-Review abgeschlossen: Stellenwertsysteme, Binär/Dezimal, Hex/Nibble, Oktal/chmod und IPv4-Brücke vollständig gegen Primärquellen geprüft.',
      'Externe Benchmarks bestätigen die Lernfolge von Stellenwerten über Binärumrechnung zur Hex-Vierergruppierung.',
      'Lokale legale Aufgabenarten bestätigen Zahlensysteme als Werkzeug für 8-Bit-Farbzustände, IPv6-Hexschreibweise, Präfixlängen/VLSM und chmod.',
      'Drei fehlerhafte Glossar-IDs korrigiert; Aufgaben- und Übungsmodus aus dem Lernkapitel entfernt.',
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
