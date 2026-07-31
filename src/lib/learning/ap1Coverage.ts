import { ap1Competencies, chapters } from '../../content/catalog'
import type { PersonalProgress } from './types'
import { isChapterAvailable } from './contentAvailability'
import { isFullyAudited } from './trust'

export function ap1Coverage(progress: Record<string, PersonalProgress>) {
  return ap1Competencies.map((competency) => {
    const assigned = chapters.filter((chapter) => chapter.ap1Kompetenzen.includes(competency.id))
    const mastered = assigned.filter((chapter) => progress[chapter.slug] === 'mastered').length
    const available = assigned.filter(isChapterAvailable).length
    const verified = assigned.filter(isFullyAudited).length
    return {
      ...competency,
      chapters: assigned,
      mastered,
      available,
      verified,
      total: assigned.length,
      learnerComplete: assigned.length > 0 && mastered === assigned.length,
      contentVerified: assigned.length > 0 && verified === assigned.length,
    }
  })
}
