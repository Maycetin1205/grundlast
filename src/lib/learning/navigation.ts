import { chapters } from '../../content/catalog'
import { buildLearningPath } from './learningPath'
import { chapterUrl } from './selectors'
import { isChapterAvailable } from './contentAvailability'

export function chapterNeighbors(slug: string) {
  const path = buildLearningPath(chapters).filter(isChapterAvailable)
  const index = path.findIndex((chapter) => chapter.slug === slug)
  const link = (chapter: (typeof path)[number] | undefined) => chapter ? {
    label: chapter.titel,
    to: chapterUrl(chapter),
    eyebrow: 'LF ' + chapter.primaryLf,
  } : null
  return { previous: link(path[index - 1]), next: link(path[index + 1]) }
}
