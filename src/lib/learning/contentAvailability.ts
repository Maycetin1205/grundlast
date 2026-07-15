import type { Chapter } from '../../content/catalog'

const lessonModules = import.meta.glob('../../content/lessons/*.mdx')

export const mdxSlugs = new Set(
  Object.keys(lessonModules).map((file) => file.split('/').pop()?.replace(/\.mdx$/, '') ?? ''),
)

export function chapterTechnicalStatus(chapter: Chapter) {
  if (!mdxSlugs.has(chapter.slug)) return 'stub' as const
  if (chapter.inhaltsstatus === 'gesperrt') return 'locked' as const
  if (chapter.inhaltsstatus === 'geplant') return 'draft' as const
  if (chapter.inhaltsstatus === 'geprueft') return 'final' as const
  return 'ready' as const
}

export function isChapterAvailable(chapter: Chapter) {
  const status = chapterTechnicalStatus(chapter)
  return status === 'ready' || status === 'final'
}

export function loadChapter(slug: string) {
  return lessonModules[`../../content/lessons/${slug}.mdx`]
}
