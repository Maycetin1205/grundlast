import type { Chapter } from '../../content/catalog/types.ts'
import type { ExamCatalogDelta, ScopeItem } from '../../content/catalog/scope/types.ts'
import { examCatalogDeltaSchema, scopeItemSchema } from './schema.ts'

export interface ScopeValidationInput {
  chapters: readonly Chapter[]
  scopeItems: readonly ScopeItem[]
  examCatalogDeltas: readonly ExamCatalogDelta[]
  sourceIds: ReadonlySet<string>
  examCatalogComplete: boolean
}

export function validateScopeMatrix(input: ScopeValidationInput) {
  const errors: string[] = []
  const warnings: string[] = []
  const ids = new Set<string>()
  const chaptersBySlug = new Map(input.chapters.map((chapter) => [chapter.slug, chapter]))
  const mappedChapterSlugs = new Set<string>()

  for (const item of input.scopeItems) {
    const parsed = scopeItemSchema.safeParse(item)
    if (!parsed.success) {
      for (const issue of parsed.error.issues) errors.push(`Scope-Schema ${item.id}: ${issue.path.join('.')} ${issue.message}`)
    }
    if (ids.has(item.id)) errors.push(`Doppelte Scope-ID: ${item.id}`)
    ids.add(item.id)
    if (!item.outcome.trim()) errors.push(`Scope ohne Lernergebnis: ${item.id}`)
    if (item.sourceRefs.length === 0) errors.push(`Scope ohne Primärbeleg: ${item.id}`)
    if (item.chapterSlugs.length === 0) errors.push(`Scope ohne Kapitelzuordnung: ${item.id}`)
    if (new Set(item.chapterSlugs).size !== item.chapterSlugs.length) errors.push(`Doppelte Kapitelzuordnung: ${item.id}`)
    if (item.origin === 'fiausbv-ap1' && item.ap1Relation !== 'direkt') errors.push(`AP1-Atom nicht direkt markiert: ${item.id}`)
    if (item.origin === 'fiausbv-18m' && item.ap1Relation !== 'direkt') errors.push(`18-Monats-Atom nicht direkt für AP1 markiert: ${item.id}`)
    if (item.origin === 'kmk-rlp') {
      const expected = item.learningFields.every((lf) => lf <= 6) ? 'unterstuetzend' : 'nicht-ap1'
      if (item.ap1Relation !== expected) errors.push(`Unplausible KMK-AP1-Einordnung: ${item.id}`)
    }
    for (const reference of item.sourceRefs) {
      if (!input.sourceIds.has(reference.sourceId)) errors.push(`Unbekannte Scope-Quelle ${reference.sourceId}: ${item.id}`)
      if (!reference.locator.trim()) errors.push(`Scope-Quelle ohne Fundstelle: ${item.id}`)
    }
    for (const slug of item.chapterSlugs) {
      if (!chaptersBySlug.has(slug)) errors.push(`Unbekanntes Scope-Kapitel ${slug}: ${item.id}`)
      else mappedChapterSlugs.add(slug)
    }
  }

  for (const delta of input.examCatalogDeltas) {
    const parsed = examCatalogDeltaSchema.safeParse(delta)
    if (!parsed.success) {
      for (const issue of parsed.error.issues) errors.push(`Delta-Schema ${delta.id}: ${issue.path.join('.')} ${issue.message}`)
    }
    if (ids.has(delta.id)) errors.push(`Doppelte Scope-/Delta-ID: ${delta.id}`)
    ids.add(delta.id)
    if (!delta.sourceRefs.length) errors.push(`Prüfungskatalog-Delta ohne Beleg: ${delta.id}`)
    for (const reference of delta.sourceRefs) {
      if (!input.sourceIds.has(reference.sourceId)) errors.push(`Unbekannte Delta-Quelle ${reference.sourceId}: ${delta.id}`)
    }
    for (const slug of delta.chapterSlugs) {
      const chapter = chaptersBySlug.get(slug)
      if (!chapter) errors.push(`Unbekanntes Delta-Kapitel ${slug}: ${delta.id}`)
      if (delta.appliesTo === 'ap2' && delta.disposition === 'verschoben' && chapter?.ap1Relevanz !== 'raus') {
        errors.push(`Als AP2-only belegtes Kapitel nicht aus AP1 entfernt: ${slug}`)
      }
    }
  }

  for (const chapter of input.chapters) {
    if (chapter.primaryLf >= 7 && chapter.ap1Relevanz !== 'raus') {
      errors.push(`LF${chapter.primaryLf}-Kapitel fälschlich als AP1-relevant markiert: ${chapter.slug}`)
    }
  }

  const withoutMapping = input.chapters.filter((chapter) => !mappedChapterSlugs.has(chapter.slug))
  if (withoutMapping.length) {
    warnings.push(`Kapitel ohne Scope-Zuordnung (${withoutMapping.length}): ${withoutMapping.map((chapter) => chapter.slug).join(', ')}`)
  }

  const available = input.scopeItems.filter((item) => item.chapterSlugs.every((slug) => {
    const chapter = chaptersBySlug.get(slug)
    return chapter && chapter.inhaltsstatus !== 'geplant' && chapter.inhaltsstatus !== 'gesperrt'
  }))
  const verified = input.scopeItems.filter((item) => item.chapterSlugs.every((slug) => chaptersBySlug.get(slug)?.inhaltsstatus === 'geprueft'))
  const unavailable = input.scopeItems.filter((item) => !available.includes(item))

  if (unavailable.length) warnings.push(`Pflichtatome ohne verfügbaren Lerntext: ${unavailable.length}/${input.scopeItems.length}`)
  if (verified.length < input.scopeItems.length) warnings.push(`Pflichtatome ohne fachlich geprüftes Kapitel: ${input.scopeItems.length - verified.length}/${input.scopeItems.length}`)
  if (!input.examCatalogComplete) warnings.push('Vollständiger Prüfungskatalog 2025 fehlt; derzeit ist nur das öffentliche IHK/ZPA-Delta modelliert.')

  const ap1Items = input.scopeItems.filter((item) => item.ap1Relation === 'direkt')
  const verifiedAp1 = ap1Items.filter((item) => verified.includes(item))

  return {
    errors,
    warnings,
    uncoveredScopeIds: unavailable.map((item) => item.id),
    unverifiedScopeIds: input.scopeItems.filter((item) => !verified.includes(item)).map((item) => item.id),
    chaptersWithoutMapping: withoutMapping.map((chapter) => chapter.slug),
    counts: {
      total: input.scopeItems.length,
      mapped: input.scopeItems.filter((item) => item.chapterSlugs.length > 0).length,
      available: available.length,
      verified: verified.length,
      ap1Total: ap1Items.length,
      ap1Verified: verifiedAp1.length,
    },
  }
}
