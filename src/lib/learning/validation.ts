import type { Ap1Competency, Chapter } from '../../content/catalog'
import type { LearningFieldExpectation } from '../../content/catalog/curriculumExpectations.ts'
import type { ExamCatalogDelta, ScopeItem } from '../../content/catalog/scope/types.ts'
import type { Topic } from '../../content/catalog/topics'
import { chapterSchema } from './schema.ts'
import { validateScopeMatrix } from './scopeValidation.ts'

export interface CatalogValidationInput {
  chapters: readonly Chapter[]
  topics: readonly Topic[]
  competencies: readonly Ap1Competency[]
  sourceIds: ReadonlySet<string>
  mdxSlugs: ReadonlySet<string>
  expectations: readonly LearningFieldExpectation[]
  scopeItems: readonly ScopeItem[]
  examCatalogDeltas: readonly ExamCatalogDelta[]
  examCatalogComplete: boolean
}

export function validateCatalog(input: CatalogValidationInput) {
  const errors: string[] = []
  const warnings: string[] = []
  const slugs = new Set<string>(), urls = new Set<string>()
  const topicIds = new Set(input.topics.map((item) => item.id))
  const competencyIds = new Set(input.competencies.map((item) => item.id))
  const orderKeys = new Set<string>()
  for (const chapter of input.chapters) {
    const parsed = chapterSchema.safeParse(chapter)
    if (!parsed.success) {
      for (const issue of parsed.error.issues) errors.push(`Schema ${chapter.slug}: ${issue.path.join('.')} ${issue.message}`)
    }
    if (slugs.has(chapter.slug)) errors.push(`Doppelter Slug: ${chapter.slug}`)
    slugs.add(chapter.slug)
    const url = `/lernen/${chapter.route.bereich}/${chapter.route.modul}/${chapter.slug}`
    if (urls.has(url)) errors.push(`Doppelte URL: ${url}`)
    urls.add(url)
    if (chapter.primaryLf < 1 || chapter.primaryLf > 9) errors.push(`Ungültiges primaryLf: ${chapter.slug}`)
    if (chapter.relatedLfs.some((lf) => lf < 1 || lf > 9 || lf === chapter.primaryLf)) errors.push(`Ungültige relatedLfs: ${chapter.slug}`)
    if (new Set(chapter.relatedLfs).size !== chapter.relatedLfs.length) errors.push(`Doppelte relatedLfs: ${chapter.slug}`)
    const orderKey = `${chapter.primaryLf}:${chapter.lfReihenfolge}`
    if (orderKeys.has(orderKey)) errors.push(`Doppelte LF-Reihenfolge: ${orderKey}`)
    orderKeys.add(orderKey)
    for (const id of chapter.themen) if (!topicIds.has(id)) errors.push(`Unbekanntes Thema ${id}: ${chapter.slug}`)
    for (const id of chapter.ap1Kompetenzen) if (!competencyIds.has(id)) errors.push(`Unbekannte AP1-Kompetenz ${id}: ${chapter.slug}`)
    for (const id of [...chapter.quellen.q1_scope, ...chapter.quellen.q2_fachquelle, ...chapter.quellen.q3_pruefungsrealitaet]) {
      if (!input.sourceIds.has(id)) errors.push(`Unbekannte Quelle ${id}: ${chapter.slug}`)
    }
    for (const dependency of chapter.voraussetzungen) {
      if (dependency === chapter.slug) errors.push(`Selbstreferenz: ${chapter.slug}`)
      if (!input.chapters.some((item) => item.slug === dependency)) errors.push(`Unbekannte Voraussetzung ${dependency}: ${chapter.slug}`)
    }
    if (chapter.inhaltsstatus !== 'geplant' && !input.mdxSlugs.has(chapter.slug)) errors.push(`MDX fehlt: ${chapter.slug}`)
    if (['pflicht', 'hoch', 'mittel', 'niedrig'].includes(chapter.ap1Relevanz) && chapter.ap1Kompetenzen.length === 0) errors.push(`AP1-Zuordnung fehlt: ${chapter.slug}`)
    if (chapter.ap1Relevanz === 'raus' && chapter.ap1Kompetenzen.length > 0) errors.push(`AP1-Zuordnung trotz Relevanz raus: ${chapter.slug}`)
    if (chapter.ap1Relevanz === 'unklar') warnings.push(`AP1-Relevanz ungeklärt: ${chapter.slug}`)

    const audited = chapter.inhaltsstatus === 'teilgeprueft' || chapter.inhaltsstatus === 'geprueft'
    if (audited && chapter.quellen.q1_scope.length === 0) errors.push(`Geprüftes Kapitel ohne Scope-Quelle: ${chapter.slug}`)
    if (audited && chapter.quellen.q2_fachquelle.length === 0) errors.push(`Geprüftes Kapitel ohne Fachquelle: ${chapter.slug}`)
    if (chapter.inhaltsstatus === 'geprueft' && chapter.quellen.q3_pruefungsrealitaet.length === 0) warnings.push(`Geprüftes Kapitel ohne dokumentierten Prüfungsabgleich: ${chapter.slug}`)
  }
  for (const slug of input.mdxSlugs) if (!slugs.has(slug)) errors.push(`Verwaistes MDX: ${slug}`)
  for (const competency of input.competencies) {
    if (!competency.quellen.length) errors.push(`Kompetenz ohne Quelle: ${competency.id}`)
    for (const id of competency.quellen) if (!input.sourceIds.has(id)) errors.push(`Unbekannte Kompetenzquelle ${id}: ${competency.id}`)
  }
  const ap1ScopeIds = new Set(input.scopeItems.filter((item) => item.origin === 'fiausbv-ap1').map((item) => item.id))
  for (const competency of input.competencies) if (!ap1ScopeIds.has(competency.id)) errors.push(`AP1-Kompetenz ohne gesetzliches Scope-Atom: ${competency.id}`)
  for (const id of ap1ScopeIds) if (!competencyIds.has(id)) errors.push(`Gesetzliches AP1-Scope-Atom ohne Kompetenzansicht: ${id}`)

  for (const expectation of input.expectations) {
    const actual = input.chapters.filter((chapter) => chapter.primaryLf === expectation.lf).length
    if (actual < expectation.minimumChapterPackages) {
      warnings.push(`LF${expectation.lf} unvollständig: ${actual}/${expectation.minimumChapterPackages} erwartete Kapitelpakete`)
    }
  }
  const visiting = new Set<string>(), visited = new Set<string>()
  const bySlug = new Map(input.chapters.map((item) => [item.slug, item]))
  function visit(slug: string) {
    if (visiting.has(slug)) { errors.push(`Zyklus bei ${slug}`); return }
    if (visited.has(slug)) return
    visiting.add(slug)
    for (const dependency of bySlug.get(slug)?.voraussetzungen ?? []) visit(dependency)
    visiting.delete(slug)
    visited.add(slug)
  }
  for (const slug of slugs) visit(slug)
  const sourceCoverage = {
    q1: input.chapters.filter((chapter) => chapter.quellen.q1_scope.length > 0).length,
    q2: input.chapters.filter((chapter) => chapter.quellen.q2_fachquelle.length > 0).length,
    q3: input.chapters.filter((chapter) => chapter.quellen.q3_pruefungsrealitaet.length > 0).length,
  }
  const scope = validateScopeMatrix({
    chapters: input.chapters,
    scopeItems: input.scopeItems,
    examCatalogDeltas: input.examCatalogDeltas,
    sourceIds: input.sourceIds,
    examCatalogComplete: input.examCatalogComplete,
  })
  errors.push(...scope.errors)
  warnings.push(...scope.warnings)
  return {
    ok: errors.length === 0,
    releaseReady: errors.length === 0 && warnings.length === 0,
    errors,
    warnings,
    counts: {
      chapters: slugs.size,
      urls: urls.size,
      topics: topicIds.size,
      competencies: competencyIds.size,
      sourceCoverage,
      scopeCoverage: scope.counts,
    },
  }
}
