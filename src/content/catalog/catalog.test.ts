import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { sourceBank } from '../quellen/sourceBank'
import { validateCatalog } from '../../lib/learning/validation'
import { chapterSchema } from '../../lib/learning/schema'
import { trustForChapters } from '../../lib/learning/trust'
import { chapters, ap1Competencies, topics } from './index'
import { learningFieldExpectations } from './curriculumExpectations'

const lessonDirectory = fileURLToPath(new URL('../lessons', import.meta.url))
const mdxSlugs = new Set(
  fs.readdirSync(lessonDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.slice(0, -4)),
)

function result() {
  return validateCatalog({
    chapters,
    topics,
    competencies: ap1Competencies,
    sourceIds: new Set(sourceBank.map((source) => source.id)),
    mdxSlugs,
    expectations: learningFieldExpectations,
  })
}

describe('zentraler Kapitelkatalog', () => {
  it('entspricht vollständig dem Laufzeitschema', () => {
    for (const chapter of chapters) expect(chapterSchema.safeParse(chapter).success).toBe(true)
  })

  it('ist strukturell fehlerfrei', () => {
    expect(result().errors).toEqual([])
  })

  it('macht bekannte Abdeckungslücken sichtbar und verhindert eine Vollständigkeitsfreigabe', () => {
    const validation = result()
    expect(validation.releaseReady).toBe(false)
    expect(validation.warnings).toContain('LF7 unvollständig: 0/5 erwartete Kapitelpakete')
  })

  it('erlaubt geprüft oder teilgeprüft nur mit Scope- und Fachquelle', () => {
    const audited = chapters.filter((chapter) => chapter.inhaltsstatus === 'geprueft' || chapter.inhaltsstatus === 'teilgeprueft')
    expect(audited.length).toBeGreaterThan(0)
    for (const chapter of audited) {
      expect(chapter.quellen.q1_scope.length, chapter.slug).toBeGreaterThan(0)
      expect(chapter.quellen.q2_fachquelle.length, chapter.slug).toBeGreaterThan(0)
    }
  })

  it('trennt verfügbare Texte von fachlich geprüften Texten', () => {
    const trust = trustForChapters(chapters)
    expect(trust.available).toBeGreaterThan(trust.verified)
    expect(trust.verifiedPercent).toBeLessThan(trust.availablePercent)
  })
})

