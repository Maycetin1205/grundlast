import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { sourceBank } from '../quellen/sourceBank'
import { glossarEintraege } from '../glossar'
import { validateCatalog } from '../../lib/learning/validation'
import { chapterSchema } from '../../lib/learning/schema'
import { validateScopeMatrix } from '../../lib/learning/scopeValidation'
import { trustForChapters } from '../../lib/learning/trust'
import { chapters, ap1Competencies, topics } from './index'
import { learningFieldExpectations } from './curriculumExpectations'
import { examCatalogDeltas, examCatalogEvidence, scopeItems } from './scope'

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
    scopeItems,
    examCatalogDeltas,
    examCatalogComplete: examCatalogEvidence.complete,
  })
}

function expectKnownLessonTerms(slug: string) {
  const lesson = fs.readFileSync(new URL(`../lessons/${slug}.mdx`, import.meta.url), 'utf8')
  const termIds = Array.from(lesson.matchAll(/<Term id="([^"]+)">/g), (match) => match[1])
  const glossaryIds = new Set(glossarEintraege.map((entry) => entry.id))
  expect(termIds.filter((id) => !glossaryIds.has(id))).toEqual([])
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
    expect(validation.warnings).toContain('Vollständiger Prüfungskatalog 2025 fehlt; derzeit ist nur das öffentliche IHK/ZPA-Delta modelliert.')
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

  it('bildet jedes Kapitel auf mindestens eine offizielle Kompetenz ab', () => {
    const matrix = validateScopeMatrix({
      chapters,
      scopeItems,
      examCatalogDeltas,
      sourceIds: new Set(sourceBank.map((source) => source.id)),
      examCatalogComplete: examCatalogEvidence.complete,
    })
    expect(matrix.errors).toEqual([])
    expect(matrix.chaptersWithoutMapping).toEqual([])
    expect(new Set(scopeItems.map((item) => item.id)).size).toBe(scopeItems.length)
  })

  it('behandelt LF7 bis LF9 und die belegten SQL-/RAID-Deltas nicht als AP1', () => {
    const laterFields = chapters.filter((chapter) => chapter.primaryLf >= 7)
    expect(laterFields.every((chapter) => chapter.ap1Relevanz === 'raus')).toBe(true)
    expect(chapters.find((chapter) => chapter.slug === 'sql-grundlagen')?.ap1Relevanz).toBe('raus')
    expect(chapters.find((chapter) => chapter.slug === 'raid-systeme')?.ap1Relevanz).toBe('raus')
  })

  it('blockiert AP1-Vollständigkeit bis alle 32 direkten Atome belegt sind', () => {
    const coverage = result().counts.scopeCoverage
    expect(coverage.ap1Total).toBe(32)
    expect(coverage.ap1Verified).toBeLessThan(coverage.ap1Total)
  })

  it('führt LF1-06 ohne AIDA-Dublette und ohne tote Term-IDs', () => {
    const chapter = chapters.find((item) => item.slug === 'marktformen')
    expect(chapter?.titel).toBe('Markt, Wettbewerb & Kundennutzen')
    expect(chapter?.inhaltsstatus).toBe('teilgeprueft')
    expect(chapters.some((item) => item.slug === 'aida-formel')).toBe(false)
    expect(mdxSlugs.has('aida-formel')).toBe(false)

    expectKnownLessonTerms('marktformen')
  })

  it('führt LF1-07 als belegtes Kommunikationspaket ohne tote Term-IDs', () => {
    const chapter = chapters.find((item) => item.slug === 'schulz-von-thun')
    expect(chapter?.titel).toBe('Kommunikation, aktives Zuhören & Feedback')
    expect(chapter?.inhaltsstatus).toBe('teilgeprueft')
    expect(chapter?.relatedLfs).toContain(6)
    expect(chapter?.quellen.q2_fachquelle).toEqual(expect.arrayContaining([
      'schulz-von-thun-kommunikationsquadrat',
      'shannon-1948-communication',
      'rogers-farson-active-listening',
      'ccl-sbi-feedback',
    ]))
    expectKnownLessonTerms('schulz-von-thun')
  })

  it('führt LF2-01 als belegtes Paket für Kundenbedarf und Anforderungen', () => {
    const chapter = chapters.find((item) => item.slug === 'bedarfsanalyse-feedback')
    expect(chapter?.titel).toBe('Kundenbedarf und Anforderungen')
    expect(chapter?.primaryLf).toBe(2)
    expect(chapter?.relatedLfs).toEqual(expect.arrayContaining([3, 5, 6]))
    expect(chapter?.lfReihenfolge).toBe(1)
    expect(chapter?.inhaltsstatus).toBe('teilgeprueft')
    expect(chapter?.quellen.q2_fachquelle).toEqual(expect.arrayContaining([
      'ireb-cpre-foundation-3-3',
      'iso-iec-ieee-29148-2018',
      'nasa-se-handbook-requirements',
      'govuk-user-needs-research',
      'govuk-plan-user-research',
      'w3c-involving-users',
    ]))

    const lesson = fs.readFileSync(new URL('../lessons/bedarfsanalyse-feedback.mdx', import.meta.url), 'utf8')
    expect(lesson).not.toContain('<Term id="vier-ohren">')
    expect(lesson).not.toContain('<Term id="sbi-feedback">')
    expect(lesson).not.toContain('<Term id="aida">')
    expect(lesson).toContain('<Term id="nutzungsprofil">')
    expect(lesson).toContain('<Term id="abnahmekriterium">')
    expect(lesson).toContain('<Term id="rueckverfolgbarkeit">')
    expect(lesson).toContain('role="img"')

    const needsScope = scopeItems.find((item) => item.id === 'kmk-lf2-01')
    const criteriaScope = scopeItems.find((item) => item.id === 'kmk-lf2-02')
    const ap1NeedsScope = scopeItems.find((item) => item.id === 'ap1-kundenbedarf')
    expect(needsScope?.chapterSlugs).toContain('bedarfsanalyse-feedback')
    expect(criteriaScope?.chapterSlugs).toContain('bedarfsanalyse-feedback')
    expect(ap1NeedsScope?.chapterSlugs).toContain('bedarfsanalyse-feedback')

    expect(chapters.filter((item) => item.primaryLf === 2).map((item) => item.lfReihenfolge))
      .toEqual(Array.from({ length: 36 }, (_, index) => index + 1))
    expect(chapters.filter((item) => item.primaryLf === 6).map((item) => item.lfReihenfolge))
      .toEqual(Array.from({ length: 16 }, (_, index) => index + 1))
    expectKnownLessonTerms('bedarfsanalyse-feedback')
  })

  it('führt LF1-08 als eigenes belegtes Präsentations- und Dokumentationspaket', () => {
    const chapter = chapters.find((item) => item.slug === 'praesentation-dokumentation')
    expect(chapter?.titel).toBe('Präsentation & nachvollziehbare Dokumentation')
    expect(chapter?.primaryLf).toBe(1)
    expect(chapter?.lfReihenfolge).toBe(8)
    expect(chapter?.inhaltsstatus).toBe('teilgeprueft')
    expect(chapter?.quellen.q2_fachquelle).toEqual(expect.arrayContaining([
      'w3c-accessible-presentations',
      'w3c-wcag',
      'microsoft-powerpoint-accessibility',
      'urhg-51-zitate',
      'urhg-63-quellenangabe',
      'creative-commons-attribution',
    ]))
    expectKnownLessonTerms('praesentation-dokumentation')
  })

  it('fokussiert LF1-09 auf belastbare nachhaltige IT-Entscheidungen', () => {
    const slug = 'organisationsformen-leitbild-nachhaltigkeit-esg'
    const chapter = chapters.find((item) => item.slug === slug)
    expect(chapter?.titel).toBe('Nachhaltigkeit im IT-Betrieb')
    expect(chapter?.primaryLf).toBe(1)
    expect(chapter?.relatedLfs).toContain(2)
    expect(chapter?.lfReihenfolge).toBe(9)
    expect(chapter?.inhaltsstatus).toBe('teilgeprueft')
    expect(chapter?.quellen.q2_fachquelle).toEqual(expect.arrayContaining([
      'bundesregierung-nachhaltigkeitsstrategie-2025',
      'eu-environmental-footprint-2021-2279',
      'eu-public-procurement-lifecycle-costing',
      'eu-espr-2024-1781',
      'eu-waste-hierarchy',
      'eu-weee',
      'blauer-engel-computer-de-uz-78',
      'ec-corporate-sustainability-reporting',
    ]))

    const lesson = fs.readFileSync(new URL(`../lessons/${slug}.mdx`, import.meta.url), 'utf8')
    expect(lesson).not.toContain('## Rechtsformen im Vergleich')
    expect(lesson).not.toContain('## Aufbauorganisation: Wer entscheidet?')

    const organizationScope = scopeItems.find((item) => item.id === 'kmk-lf1-04')
    const sustainableSelectionScope = scopeItems.find((item) => item.id === 'kmk-lf2-05')
    const ap1SelectionScope = scopeItems.find((item) => item.id === 'ap1-auswahl-beschaffung')
    expect(organizationScope?.chapterSlugs).not.toContain(slug)
    expect(sustainableSelectionScope?.chapterSlugs).toContain(slug)
    expect(ap1SelectionScope?.chapterSlugs).toContain(slug)

    expectKnownLessonTerms(slug)
  })
})
