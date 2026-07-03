export type ReviewStatus = 'unchecked' | 'reviewed'

export interface LessonReview {
  lessonSlug: string
  status: ReviewStatus
  checkedAt?: string
  reviewer?: string
  sourceIds?: string[]
  notes?: string[]
}

// Neustart: Review-Log geleert (konsistent zu status.ts). Jede Lektion gilt als
// `unchecked`, bis ein dokumentierter Kapitel-Audit vorliegt. Fruehere Eintraege
// liegen als historische Referenz in docs/archiv/REVIEW_LOG.md.
const reviewLog: Record<string, LessonReview> = {
  'usv-systeme': {
    lessonSlug: 'usv-systeme',
    status: 'reviewed',
    checkedAt: '2026-06-30',
    reviewer: 'unabhängiger Prüfer-Pass',
    sourceIds: [
      'fiausbv',
      'kmk-rahmenlehrplan',
      'bibb-fachinformatiker',
      'vertiv-ups-types',
      'techtarget-ups-definition',
      'google-sre-availability-table',
    ],
    notes: [
      'Definitionen, USV-Bauarten, Laufzeit- und Verfügbarkeitsrechnungen, Belegtragfähigkeit, Voraussetzungen und Lösbarkeit geprüft; keine offenen Funde.',
    ],
  },
  'scan-bilddaten': {
    lessonSlug: 'scan-bilddaten',
    status: 'reviewed',
    checkedAt: '2026-06-30',
    reviewer: 'unabhängiger Prüfer-Pass',
    sourceIds: [
      'fiausbv',
      'kmk-rahmenlehrplan',
      'bibb-fachinformatiker',
      'bipm-si-prefixes',
      'nist-binary-prefixes',
      'w3c-png-3',
      'iso-iec-10918-1-jpeg',
    ],
    notes: [
      'DPI-Umrechnung, Pixel-/Bit-/Byte-Rechenweg, SI-/Binärpräfix-Abgrenzung, Kompressionsannahmen, Belegtragfähigkeit, Voraussetzungen und Lösbarkeit geprüft; AP1-naher Zahlenfall ersetzt; keine offenen Funde.',
    ],
  },
  'raid-systeme': {
    lessonSlug: 'raid-systeme',
    status: 'reviewed',
    checkedAt: '2026-06-30',
    reviewer: 'unabhängiger Prüfer-Pass',
    sourceIds: [
      'fiausbv',
      'kmk-rahmenlehrplan',
      'bibb-fachinformatiker',
      'redhat-rhel8-managing-raid',
    ],
    notes: [
      'RAID-Level, Kapazitäts- und Speichereffektivitätsrechnung sowie die RAID-5-zu-RAID-6-Umstellung nachgerechnet; zwei Funde (zu breit gefasster RAID-5-Beleg, Verfügbarkeit vor lokaler Definition benutzt) behoben; keine offenen Funde.',
    ],
  },
  'homeoffice-ergonomie': {
    lessonSlug: 'homeoffice-ergonomie',
    status: 'reviewed',
    checkedAt: '2026-06-30',
    reviewer: 'unabhängiger Prüfer-Pass',
    sourceIds: [
      'fiausbv',
      'kmk-rahmenlehrplan',
      'bibb-fachinformatiker',
      'arbstaettv',
      'arbstaettv-2-telearbeit',
      'arbstaettv-anhang-6-bildschirmarbeit',
      'arbschg',
      'arbschg-5-gefaehrdungsbeurteilung',
      'dguv-215-410',
      'baua-mobile-arbeit-homeoffice',
      'w3c-wcag',
      'bitv-2-0',
      'bitv-2-0-3-standards',
    ],
    notes: [
      'Telearbeit, Bildschirmarbeit, WCAG/BITV-Prinzipien und der Lösbarkeitsnachweis zu barrierefreier Arbeitsplatz-Hardware geprüft; vier Funde (fehlende Belege, unscharfe Telearbeit-Abgrenzung, fehlende Hardwaremaßnahmen, MFA/VPN vor Definition benutzt) behoben; keine offenen Funde.',
    ],
  },
  'bit-byte': {
    lessonSlug: 'bit-byte',
    status: 'reviewed',
    checkedAt: '2026-06-30',
    reviewer: 'unabhängiger Prüfer-Pass',
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
      '8-Bit-Wertebereich, b/B-Falle, ASCII/UTF-8 und alle Rechenbeispiele (u. a. 2^8, Mbit/s-zu-MB/s-Umrechnungen) nachgerechnet; drei Funde (Term-ID-Schreibweise, fehlender Nibble-Registereintrag, zu weit gefasster Beleg) behoben; keine offenen Funde.',
    ],
  },
  'linux-chmod': {
    lessonSlug: 'linux-chmod',
    status: 'reviewed',
    checkedAt: '2026-06-29',
    reviewer: 'unabhängiger Prüfer-Pass',
    sourceIds: [
      'kmk-rahmenlehrplan',
      'fiausbv',
      'bibb-fachinformatiker',
      'posix-chmod',
      'gnu-coreutils-chmod',
      'linux-man-pages-chmod2',
    ],
    notes: [
      'Oktal- und symbolische Modi, r=4/w=2/x=1, Sonderbits (setuid/setgid/sticky) und alle Umrechnungsbeispiele nachgerechnet; drei zu eng bzw. zu breit gefasste Beleg-Zitate in belege.json korrigiert; keine offenen Funde.',
    ],
  },
  'prozess-thread': {
    lessonSlug: 'prozess-thread',
    status: 'reviewed',
    checkedAt: '2026-07-03',
    reviewer: 'unabhängiger Prüfer-Pass',
    sourceIds: [
      'fiausbv',
      'kmk-rahmenlehrplan',
      'bibb-fachinformatiker',
      'microsoft-processes-threads',
      'microsoft-processes-threads-overview',
      'microsoft-scheduling-priorities',
      'linux-kernel-cfs',
    ],
    notes: [
      'Prozess-/Thread-Definitionen, Prozessressourcen, Scheduling, Multitasking, Kontextwechsel, Voraussetzungen und Lösbarkeit geprüft; CPU-Datenblatt-Threads von Software-Threads abgegrenzt; keine offenen Funde.',
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
