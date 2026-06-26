import { readdirSync, readFileSync } from 'node:fs'
import { dirname, extname, join, parse } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const lessonsDir = join(root, 'src/content/lessons')
const tocDataDir = join(root, 'src/lib/toc/data')
const auditFile = join(root, 'src/lib/audit/status.ts')
const reviewFile = join(root, 'src/lib/review.ts')
const sourcesFile = join(root, 'src/content/quellen/tagMappings.ts')
const glossaryDir = join(root, 'src/content/glossar')
const visibleStatuses = new Set(['ready', 'final', 'draft'])

function read(path) {
  return readFileSync(path, 'utf8').replace(/^\uFEFF/, '')
}

function matchBracket(text, openIndex, openCharacter, closeCharacter) {
  let depth = 0
  for (let index = openIndex; index < text.length; index += 1) {
    if (text[index] === openCharacter) depth += 1
    if (text[index] === closeCharacter) depth -= 1
    if (depth === 0) return index
  }
  throw new Error(`Kein passendes ${closeCharacter} ab Index ${openIndex} gefunden.`)
}

function objectBody(text, declarationPattern) {
  const match = declarationPattern.exec(text)
  if (!match) return null
  const openIndex = text.indexOf('{', match.index)
  const closeIndex = matchBracket(text, openIndex, '{', '}')
  return text.slice(openIndex + 1, closeIndex)
}

function arrayBodies(text, key) {
  const bodies = []
  const pattern = new RegExp(`${key}\\s*:\\s*\\[`, 'g')
  for (const match of text.matchAll(pattern)) {
    const openIndex = text.indexOf('[', match.index)
    const closeIndex = matchBracket(text, openIndex, '[', ']')
    bodies.push(text.slice(openIndex + 1, closeIndex))
  }
  return bodies
}

function objectKeys(text, declarationPattern, valueOpen) {
  const body = objectBody(text, declarationPattern)
  if (!body) return new Set()
  const escapedOpen = valueOpen === '[' ? '\\[' : '\\{'
  const pattern = new RegExp(`^  '?([A-Za-z0-9][\\w.-]*)'?:\\s*${escapedOpen}`, 'gm')
  return new Set(Array.from(body.matchAll(pattern), (match) => match[1]))
}

function lessonFiles() {
  return new Set(
    readdirSync(lessonsDir)
      .filter((file) => extname(file) === '.mdx')
      .map((file) => parse(file).name),
  )
}

function tocFiles() {
  return readdirSync(tocDataDir)
    .filter((file) => extname(file) === '.ts' && file !== 'index.ts')
    .sort()
}

function tocEntries() {
  const entries = []
  for (const file of tocFiles()) {
    for (const body of arrayBodies(read(join(tocDataDir, file)), 'lessons')) {
      for (const match of body.matchAll(/\{[^{}]*\}/g)) {
        const slug = /slug:\s*["']([^"']+)["']/.exec(match[0])?.[1]
        if (!slug) continue
        const status = /status:\s*["']([^"']+)["']/.exec(match[0])?.[1]
        entries.push({ slug, status, source: file })
      }
    }
  }
  return entries
}

function tocLearningFields() {
  const fields = new Map()
  for (const file of tocFiles()) {
    for (const body of arrayBodies(read(join(tocDataDir, file)), 'lessons')) {
      for (const match of body.matchAll(/\{[^{}]*\}/g)) {
        const slug = /slug:\s*["']([^"']+)["']/.exec(match[0])?.[1]
        const learningField = /\blf:\s*(\d)/.exec(match[0])?.[1]
        if (slug && learningField) fields.set(slug, Number(learningField))
      }
    }
  }
  return fields
}

function glossaryLessonLinks() {
  const links = []
  const pattern = /href:\s*["']\/lernen\/[^"']*\/([^"'\/]+)["']/g
  for (const file of readdirSync(glossaryDir).filter((name) => extname(name) === '.ts').sort()) {
    for (const match of read(join(glossaryDir, file)).matchAll(pattern)) {
      links.push({ slug: match[1], source: file })
    }
  }
  return links
}

// Muss identisch zu normalisiereGlossarId in src/lib/glossar/store.ts bleiben.
function normalizeGlossarId(id) {
  return id
    .trim()
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
}

function glossaryIdsByNormalized() {
  const byNormalized = new Map()
  const pattern = /^\s*id:\s*['"]([^'"]+)['"]/gm
  for (const file of readdirSync(glossaryDir).filter((name) => extname(name) === '.ts').sort()) {
    for (const match of read(join(glossaryDir, file)).matchAll(pattern)) {
      const normalized = normalizeGlossarId(match[1])
      if (!byNormalized.has(normalized)) byNormalized.set(normalized, new Set())
      byNormalized.get(normalized).add(match[1])
    }
  }
  return byNormalized
}

function termUsages() {
  const usages = []
  const pattern = /<Term\s+id="([^"]+)"/g
  for (const file of readdirSync(lessonsDir).filter((name) => extname(name) === '.mdx')) {
    for (const match of read(join(lessonsDir, file)).matchAll(pattern)) {
      usages.push({ id: match[1], source: file })
    }
  }
  return usages
}

function difference(left, right) {
  return Array.from(left).filter((item) => !right.has(item)).sort()
}

function main() {
  const errors = []
  const infos = []
  const mdx = lessonFiles()
  const toc = tocEntries()
  const tocSlugs = new Set(toc.map((entry) => entry.slug))
  const seen = new Map()

  for (const entry of toc) {
    if (seen.has(entry.slug)) {
      errors.push(`Slug doppelt im TOC: '${entry.slug}' (${seen.get(entry.slug)} und ${entry.source}).`)
    } else {
      seen.set(entry.slug, entry.source)
    }
  }

  const visibleSlugs = new Set(
    toc.filter((entry) => visibleStatuses.has(entry.status ?? 'stub')).map((entry) => entry.slug),
  )
  const stubSlugs = new Set(
    toc.filter((entry) => (entry.status ?? 'stub') === 'stub').map((entry) => entry.slug),
  )
  const auditKeys = objectKeys(read(auditFile), /lessonAudits\b[^=]*=/g, '{')
  const reviewKeys = objectKeys(read(reviewFile), /reviewLog\b[^=]*=/g, '{')
  const slugTagKeys = objectKeys(read(sourcesFile), /slugTags\b[^=]*=/g, '[')
  const sourceIdKeys = objectKeys(read(sourcesFile), /lessonSourceIds\b[^=]*=/g, '[')

  for (const slug of difference(mdx, tocSlugs)) {
    errors.push(`MDX ohne TOC-Eintrag (unerreichbar): ${slug}.mdx`)
  }
  for (const slug of difference(visibleSlugs, mdx)) {
    errors.push(`TOC-Lektion sichtbar (ready/final/draft), aber MDX fehlt: ${slug}`)
  }
  for (const slug of difference(stubSlugs, mdx)) {
    infos.push(`Stub ohne MDX (geplant, ok): ${slug}`)
  }

  const known = new Set([...tocSlugs, ...mdx])
  for (const [name, keys] of [
    ['audit/status.ts (lessonAudits)', auditKeys],
    ['review.ts (reviewLog)', reviewKeys],
    ['quellen/tagMappings.ts (slugTags)', slugTagKeys],
    ['quellen/tagMappings.ts (lessonSourceIds)', sourceIdKeys],
  ]) {
    for (const slug of difference(keys, known)) {
      errors.push(`${name}: Eintrag '${slug}' passt zu keiner Lektion.`)
    }
  }

  const reachable = new Set(Array.from(visibleSlugs).filter((slug) => mdx.has(slug)))
  const deadLinks = new Map()
  for (const link of glossaryLessonLinks()) {
    if (reachable.has(link.slug)) continue
    if (!deadLinks.has(link.slug)) deadLinks.set(link.slug, new Set())
    deadLinks.get(link.slug).add(link.source)
  }
  for (const [slug, sources] of Array.from(deadLinks.entries()).sort()) {
    errors.push(`Glossar-Deeplink ins Leere: '${slug}' (in ${Array.from(sources).sort().join(', ')}).`)
  }

  const glossaryById = glossaryIdsByNormalized()
  for (const [normalized, raws] of Array.from(glossaryById.entries()).sort()) {
    if (raws.size > 1) {
      errors.push(
        `Glossar-ID-Kollision nach Normalisierung ('${normalized}'): ${Array.from(raws).sort().map((raw) => `'${raw}'`).join(', ')}.`,
      )
    }
  }
  const glossaryNormalized = new Set(glossaryById.keys())
  const usages = termUsages()
  const deadTerms = new Map()
  for (const usage of usages) {
    if (glossaryNormalized.has(normalizeGlossarId(usage.id))) continue
    if (!deadTerms.has(usage.id)) deadTerms.set(usage.id, new Set())
    deadTerms.get(usage.id).add(usage.source)
  }
  for (const [id, sources] of Array.from(deadTerms.entries()).sort()) {
    errors.push(
      `<Term id="${id}"> ohne Glossar-Eintrag (in ${Array.from(sources).sort().join(', ')}).`,
    )
  }
  infos.push(
    `Glossar-IDs: ${glossaryNormalized.size} | <Term>-Verweise: ${usages.length} (eindeutige: ${new Set(usages.map((u) => u.id)).size})`,
  )

  const learningFields = tocLearningFields()
  for (const entry of toc) {
    const learningField = learningFields.get(entry.slug)
    if (!learningField) {
      errors.push(`Lektion ohne LF (1-9): ${entry.slug} (${entry.source})`)
    } else if (learningField < 1 || learningField > 9) {
      errors.push(`Lektion mit ungueltigem LF ${learningField}: ${entry.slug} (${entry.source})`)
    }
  }

  const real = Array.from(tocSlugs).filter((slug) => mdx.has(slug))
  infos.push(
    `Lektionen real (TOC + MDX): ${real.length} | ` +
      `mit Audit: ${real.filter((slug) => auditKeys.has(slug)).length} | ` +
      `mit Review: ${real.filter((slug) => reviewKeys.has(slug)).length} | ` +
      `mit Quellen-Tags: ${real.filter((slug) => slugTagKeys.has(slug)).length}`,
  )

  console.log('Grundlast - Konsistenz-Waechter')
  console.log('='.repeat(60))
  console.log(`MDX-Dateien:   ${mdx.size}`)
  console.log(`TOC-Lektionen: ${tocSlugs.size} (sichtbar: ${visibleSlugs.size}, stub: ${stubSlugs.size})`)
  console.log('')

  if (infos.length > 0) {
    console.log('INFO')
    for (const info of infos) console.log(`  - ${info}`)
    console.log('')
  }

  if (errors.length > 0) {
    console.error(`FEHLER (${errors.length})`)
    for (const error of errors) console.error(`  [X] ${error}`)
    process.exitCode = 1
    return
  }

  console.log('Ergebnis: konsistent. Alle Slugs passen zusammen.')
}

main()
