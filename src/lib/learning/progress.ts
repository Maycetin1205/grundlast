import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Chapter } from '../../content/catalog'
import type { PersonalProgress } from './types'

export type ProgressBySlug = Record<string, PersonalProgress>
interface ProgressStore { bySlug: ProgressBySlug; setProgress: (slug: string, status: PersonalProgress) => void }

export const useProgress = create<ProgressStore>()(persist((set) => ({
  bySlug: {},
  setProgress: (slug, status) => set((state) => ({ bySlug: { ...state.bySlug, [slug]: status } })),
}), { name: 'grundlast.chapter-progress' }))

export function progressForChapters(chapters: readonly Chapter[], progress: ProgressBySlug) {
  const mastered = chapters.filter((chapter) => progress[chapter.slug] === 'mastered').length
  return { mastered, total: chapters.length, percent: chapters.length ? Math.round(mastered / chapters.length * 100) : 0 }
}
