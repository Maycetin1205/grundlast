export type ReviewStatus = 'unchecked' | 'reviewed'

export interface LessonReview {
  lessonSlug: string
  status: ReviewStatus
  checkedAt?: string
  reviewer?: string
  sourceIds?: string[]
  notes?: string[]
}

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
