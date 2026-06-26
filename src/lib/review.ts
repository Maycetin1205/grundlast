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
const reviewLog: Record<string, LessonReview> = {}

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
