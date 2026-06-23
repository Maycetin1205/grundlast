import type { LessonMeta } from './schema'
import { lf1 } from './lf1'
import { lf2 } from './lf2'
import { lf3 } from './lf3'
import { lf4 } from './lf4'
import { lf5 } from './lf5'
import { lf6 } from './lf6'
import { lf7 } from './lf7'
import { lf8 } from './lf8'
import { lf9 } from './lf9'

export const manifest: LessonMeta[] = [
  ...lf1, ...lf2, ...lf3, ...lf4, ...lf5, ...lf6, ...lf7, ...lf8, ...lf9,
]

export const manifestByLf: Record<number, LessonMeta[]> = {
  1: lf1, 2: lf2, 3: lf3, 4: lf4, 5: lf5, 6: lf6, 7: lf7, 8: lf8, 9: lf9,
}
