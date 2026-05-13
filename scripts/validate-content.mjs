import { existsSync, readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const strict = process.argv.includes('--strict')
const verbose = process.argv.includes('--verbose')

const paths = {
  toc: path.join(root, 'src/lib/toc.ts'),
  sources: path.join(root, 'src/lib/sources.ts'),
  glossar: path.join(root, 'src/stores/glossarStore.ts'),
  reviewLog: path.join(root, 'REVIEW_LOG.md'),
  lessonsDir: path.join(root, 'src/content/lessons'),
}

const errors = []
const warnings = []

function readRequired(filePath) {
  if (!existsSync(filePath)) {
    errors.push(`Pflichtdatei fehlt: ${path.relative(root, filePath)}`)
    return ''
  }

  return readFileSync(filePath, 'utf8')
}

function normalizeId(value) {
  return value.trim().toLowerCase()
}

function pushUnique(map, key, value, duplicateMessage) {
  if (map.has(key)) {
    warnings.push(duplicateMessage(key))
    return
  }

  map.set(key, value)
}

function extractLessons(tocText) {
  const lessonPattern =
    /\{\s*slug:\s*"([^"]+)"\s*,\s*title:\s*"([^"]+)"\s*,\s*minutes:\s*(\d+)\s*,\s*importance:\s*(\d+)\s*,\s*exam:\s*(true|false)\s*,\s*status:\s*"([^"]+)"\s*\}/g
  const lessons = []
  let match

  while ((match = lessonPattern.exec(tocText))) {
    lessons.push({
      slug: match[1],
      title: match[2],
      minutes: Number(match[3]),
      importance: Number(match[4]),
      exam: match[5] === 'true',
      status: match[6],
    })
  }

  return lessons
}

function extractIds(text) {
  const ids = []
  const pattern = /\bid:\s*['"]([^'"]+)['"]/g
  let match

  while ((match = pattern.exec(text))) {
    ids.push(normalizeId(match[1]))
  }

  return ids
}

function extractTermIds(mdxText) {
  const ids = []
  const pattern = /<Term\s+id=["']([^"']+)["']/g
  let match

  while ((match = pattern.exec(mdxText))) {
    ids.push(normalizeId(match[1]))
  }

  return ids
}

function hasReviewFinalEntry(reviewLogText, slug) {
  const sectionPattern = new RegExp(`(^|\\n)##\\s+${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*(\\n[\\s\\S]*?)(?=\\n##\\s+|$)`, 'i')
  const section = reviewLogText.match(sectionPattern)?.[2] ?? ''

  return /-\s*Status:\s*final/i.test(section)
}

function hasSourceSlugEntry(sourcesText, slug) {
  const quoted = new RegExp(`['"]${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]\\s*:`, 'i')
  const bare = new RegExp(`(^|\\n)\\s*${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*:`, 'i')

  return quoted.test(sourcesText) || bare.test(sourcesText)
}

function checkReadyStructure(slug, mdxText) {
  const checks = [
    {
      ok: /##\s+Was du danach kannst/i.test(mdxText),
      label: 'Abschnitt "Was du danach kannst"',
    },
    {
      ok: /##\s+(Die\s+)?Analogie/i.test(mdxText) || /<Analogie\b/i.test(mdxText),
      label: 'Analogie oder mentales Modell',
    },
    {
      ok: /Faktenkern/i.test(mdxText) || /^\|.+\|$/m.test(mdxText),
      label: 'Faktenkern/Tabelle',
    },
    {
      ok: /<Term\s+id=["'][^"']+["']/i.test(mdxText),
      label: 'Glossar-Terms im Text',
    },
    {
      ok: /<StepByStep\b|<Ergebnis\b|Schritt f(?:ue|ü)r Schritt/i.test(mdxText),
      label: 'Schritt-fuer-Schritt-Erklaerung',
    },
    {
      ok: /##\s+Typische Fehler|##\s+Fehler/i.test(mdxText),
      label: 'Abschnitt "Typische Fehler"',
    },
    {
      ok: !/<Quiz\b|##\s+(Mini-Quiz|Selbsttest)/i.test(mdxText),
      label: 'keine Quiz- oder Selbsttest-Bloecke im Kapitel',
    },
    {
      ok: /<Quellen\b/i.test(mdxText),
      label: 'Quellen-Komponente',
    },
  ]

  for (const check of checks) {
    if (!check.ok) {
      warnings.push(`${slug}: Ready-Qualitaetscheck fehlt: ${check.label}`)
    }
  }
}

function report(title, items, { limit = Infinity } = {}) {
  if (items.length === 0) return

  console.log(`\n${title}`)
  for (const item of items.slice(0, limit)) {
    console.log(`- ${item}`)
  }

  if (items.length > limit) {
    console.log(`- ... ${items.length - limit} weitere. Vollstaendig mit --verbose anzeigen.`)
  }
}

const tocText = readRequired(paths.toc)
const sourcesText = readRequired(paths.sources)
const glossarText = readRequired(paths.glossar)
const reviewLogText = readRequired(paths.reviewLog)

const lessons = extractLessons(tocText)
const lessonBySlug = new Map()

for (const lesson of lessons) {
  pushUnique(
    lessonBySlug,
    lesson.slug,
    lesson,
    (slug) => `Doppelter Lesson-Slug in toc.ts: ${slug}`,
  )

  if (!['stub', 'draft', 'ready', 'final'].includes(lesson.status)) {
    errors.push(`${lesson.slug}: ungueltiger Status "${lesson.status}"`)
  }
}

const sourceIds = new Set()
for (const id of extractIds(sourcesText)) {
  if (sourceIds.has(id)) warnings.push(`Doppelte Source-ID in sources.ts: ${id}`)
  sourceIds.add(id)
}

const glossarIds = new Set()
for (const id of extractIds(glossarText)) {
  if (glossarIds.has(id)) warnings.push(`Doppelte Glossar-ID in glossarStore.ts: ${id}`)
  glossarIds.add(id)
}

const mdxFiles = existsSync(paths.lessonsDir)
  ? readdirSync(paths.lessonsDir).filter((file) => file.endsWith('.mdx')).sort()
  : []
const mdxSlugs = new Set(mdxFiles.map((file) => file.replace(/\.mdx$/, '')))

for (const lesson of lessons) {
  const needsContent = lesson.status === 'draft' || lesson.status === 'ready' || lesson.status === 'final'
  const mdxPath = path.join(paths.lessonsDir, `${lesson.slug}.mdx`)

  if (needsContent && !existsSync(mdxPath)) {
    errors.push(`${lesson.slug}: Status ${lesson.status}, aber MDX-Datei fehlt`)
    continue
  }

  if (!needsContent) continue

  const mdxText = readFileSync(mdxPath, 'utf8')

  for (const termId of extractTermIds(mdxText)) {
    if (!glossarIds.has(termId)) {
      errors.push(`${lesson.slug}: Glossar-Term fehlt in glossarStore.ts: ${termId}`)
    }
  }

  if ((lesson.status === 'ready' || lesson.status === 'final') && !hasSourceSlugEntry(sourcesText, lesson.slug)) {
    warnings.push(`${lesson.slug}: keine spezifische slugTags-Zuordnung in sources.ts gefunden`)
  }

  if (lesson.status === 'ready' || lesson.status === 'final') {
    checkReadyStructure(lesson.slug, mdxText)
  }

  if (lesson.status === 'final' && !hasReviewFinalEntry(reviewLogText, lesson.slug)) {
    errors.push(`${lesson.slug}: Status final, aber keine Freigabe in REVIEW_LOG.md`)
  }
}

for (const slug of mdxSlugs) {
  if (!lessonBySlug.has(slug)) {
    errors.push(`${slug}: MDX-Datei existiert, aber kein Eintrag in toc.ts`)
  }
}

const readyCount = lessons.filter((lesson) => lesson.status === 'ready' || lesson.status === 'final').length
const stubCount = lessons.filter((lesson) => lesson.status === 'stub').length
const draftCount = lessons.filter((lesson) => lesson.status === 'draft').length

console.log('Content-Validator v1')
console.log(`Kapitel im TOC: ${lessons.length}`)
console.log(`Ready/final: ${readyCount}`)
console.log(`Draft: ${draftCount}`)
console.log(`Stub: ${stubCount}`)
console.log(`MDX-Dateien: ${mdxFiles.length}`)
console.log(`Glossar-IDs: ${glossarIds.size}`)
console.log(`Source-IDs: ${sourceIds.size}`)

if (strict && warnings.length > 0) {
  errors.push(`Strict-Modus: ${warnings.length} Warnung(en) als Fehler behandelt`)
}

report('Warnungen', warnings, { limit: verbose ? Infinity : 25 })
report('Fehler', errors)

if (errors.length > 0) {
  console.error(`\nContent-Check fehlgeschlagen: ${errors.length} Fehler, ${warnings.length} Warnungen.`)
  process.exit(1)
}

console.log(`\nContent-Check bestanden: 0 Fehler, ${warnings.length} Warnungen.`)
