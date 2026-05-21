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
  zahlensysteme: {
    lessonSlug: 'zahlensysteme',
    status: 'reviewed',
    checkedAt: '2026-05-21',
    reviewer: 'Codex',
    sourceIds: [
      'posix-chmod',
      'rfc-9542',
      'w3c-css-color-4',
      'rfc-4632',
      'python-lexical-integer-literals',
      'ecma-262-numeric-literals',
    ],
    notes: [
      'Rechenbeispiele und Schreibkonventionen fachlich geprueft.',
      'Desktop- und Mobile-Stichprobe per Headless-Edge/CDP bestanden.',
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
