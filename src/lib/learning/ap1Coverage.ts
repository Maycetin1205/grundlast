import { ap1Competencies, chapters } from '../../content/catalog'
import type { PersonalProgress } from './types'

export function ap1Coverage(progress: Record<string, PersonalProgress>) {
  return ap1Competencies.map((competency) => {
    const assigned = chapters.filter((chapter) => chapter.ap1Kompetenzen.includes(competency.id))
    const mastered = assigned.filter((chapter) => progress[chapter.slug] === 'mastered').length
    return { ...competency, chapters: assigned, mastered, total: assigned.length, complete: assigned.length > 0 && mastered === assigned.length }
  })
}
