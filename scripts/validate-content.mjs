import { existsSync, readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const strict = process.argv.includes('--strict')
const verbose = process.argv.includes('--verbose')
const lessonArg = process.argv.find((arg) => arg.startsWith('--lesson='))
const lessonFilter = lessonArg?.split('=')[1]

const paths = {
  tocDataDir: path.join(root, 'src/lib/toc/data'),
  sourceBank: path.join(root, 'src/content/quellen/sourceBank.ts'),
  sourceTagMappings: path.join(root, 'src/content/quellen/tagMappings.ts'),
  glossarDir: path.join(root, 'src/content/glossar'),
  reviewLog: path.join(root, 'REVIEW_LOG.md'),
  lessonsDir: path.join(root, 'src/content/lessons'),
}

function readTocCombined(dir) {
  if (!existsSync(dir)) {
    errors.push(`Pflichtordner fehlt: ${path.relative(root, dir)}`)
    return ''
  }

  return readdirSync(dir)
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
    .map((file) => readFileSync(path.join(dir, file), 'utf8'))
    .join('\n')
}

function readGlossarCombined(dir) {
  if (!existsSync(dir)) {
    errors.push(`Pflichtordner fehlt: ${path.relative(root, dir)}`)
    return ''
  }

  return readdirSync(dir)
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
    .map((file) => readFileSync(path.join(dir, file), 'utf8'))
    .join('\n')
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

function extractLessonPaths(dir) {
  const validPaths = new Set()
  if (!existsSync(dir)) return validPaths

  const modulPattern = /\{\s*slug:\s*"([^"]+)"\s*,\s*title:\s*"[^"]*"\s*,\s*lessons:\s*\[([\s\S]*?)\]/g
  const lessonSlugPattern = /\{\s*slug:\s*"([^"]+)"/g

  for (const file of readdirSync(dir).filter((f) => f.endsWith('.ts') && f !== 'index.ts')) {
    const text = readFileSync(path.join(dir, file), 'utf8')
    const lernfeldSlug = text.match(/slug:\s*"([^"]+)"/)?.[1]
    if (!lernfeldSlug) continue

    let modulMatch
    while ((modulMatch = modulPattern.exec(text))) {
      const modulSlug = modulMatch[1]
      let lessonMatch
      while ((lessonMatch = lessonSlugPattern.exec(modulMatch[2]))) {
        validPaths.add(`/lernen/${lernfeldSlug}/${modulSlug}/${lessonMatch[1]}`)
      }
    }
  }

  return validPaths
}

function checkInternalLinks(label, text, validPaths, statusBySlug) {
  const hrefPattern = /['"(]#?(\/lernen\/[^'")#?]+)['")]/g
  let match

  while ((match = hrefPattern.exec(text))) {
    const href = match[1]

    if (!validPaths.has(href)) {
      errors.push(`${label}: interner Link zeigt auf nicht existierenden Pfad: ${href}`)
      continue
    }

    const slug = href.split('/').pop()
    const status = statusBySlug.get(slug)
    if (status === 'stub' || status === 'draft') {
      warnings.push(`${label}: interner Link zeigt auf ${status}-Kapitel (noch nicht freigegeben): ${href}`)
    }
  }
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

function pushQualityIssue(lesson, message) {
  const issue = `${lesson.slug}: ${message}`

  if (lesson.status === 'final') {
    errors.push(issue)
    return
  }

  warnings.push(issue)
}

function checkReadyStructure(lesson, mdxText) {
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
      pushQualityIssue(lesson, `Ready-Qualitaetscheck fehlt: ${check.label}`)
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

const tocText = readTocCombined(paths.tocDataDir)
const sourcesText = readRequired(paths.sourceBank) + '\n' + readRequired(paths.sourceTagMappings)
const glossarText = readGlossarCombined(paths.glossarDir)
const reviewLogText = readRequired(paths.reviewLog)

const lessons = extractLessons(tocText)
const lessonBySlug = new Map()

for (const lesson of lessons) {
  pushUnique(
    lessonBySlug,
    lesson.slug,
    lesson,
    (slug) => `Doppelter Lesson-Slug in src/lib/toc/data/*.ts: ${slug}`,
  )

  if (!['stub', 'draft', 'ready', 'final'].includes(lesson.status)) {
    errors.push(`${lesson.slug}: ungueltiger Status "${lesson.status}"`)
  }
}

const sourceIds = new Set()
for (const id of extractIds(sourcesText)) {
  if (sourceIds.has(id)) warnings.push(`Doppelte Source-ID in src/content/quellen/sourceBank.ts: ${id}`)
  sourceIds.add(id)
}

const glossarIds = new Set()
for (const id of extractIds(glossarText)) {
  if (glossarIds.has(id)) warnings.push(`Doppelte Glossar-ID in src/content/glossar/*.ts: ${id}`)
  glossarIds.add(id)
}

const mdxFiles = existsSync(paths.lessonsDir)
  ? readdirSync(paths.lessonsDir).filter((file) => file.endsWith('.mdx')).sort()
  : []
const mdxSlugs = new Set(mdxFiles.map((file) => file.replace(/\.mdx$/, '')))

for (const lesson of lessons) {
  const isTargetLesson = !lessonFilter || lesson.slug === lessonFilter
  const needsContent = lesson.status === 'draft' || lesson.status === 'ready' || lesson.status === 'final'
  const mdxPath = path.join(paths.lessonsDir, `${lesson.slug}.mdx`)

  if (needsContent && !existsSync(mdxPath)) {
    errors.push(`${lesson.slug}: Status ${lesson.status}, aber MDX-Datei fehlt`)
    continue
  }

  if (!needsContent || !isTargetLesson) continue

  const mdxText = readFileSync(mdxPath, 'utf8')

  for (const termId of extractTermIds(mdxText)) {
    if (!glossarIds.has(termId)) {
      errors.push(`${lesson.slug}: Glossar-Term fehlt in src/content/glossar/*.ts: ${termId}`)
    }
  }

  if ((lesson.status === 'ready' || lesson.status === 'final') && !hasSourceSlugEntry(sourcesText, lesson.slug)) {
    pushQualityIssue(
      lesson,
      'keine spezifische slugTags-Zuordnung in src/content/quellen/tagMappings.ts gefunden',
    )
  }

  if (lesson.status === 'ready' || lesson.status === 'final') {
    checkReadyStructure(lesson, mdxText)
  }

  if (lesson.status === 'final' && !hasReviewFinalEntry(reviewLogText, lesson.slug)) {
    errors.push(`${lesson.slug}: Status final, aber keine Freigabe in REVIEW_LOG.md`)
  }
}

for (const slug of mdxSlugs) {
  if (!lessonBySlug.has(slug)) {
    errors.push(`${slug}: MDX-Datei existiert, aber kein Eintrag in src/lib/toc/data/*.ts`)
  }
}

// Interne Kapitel-Links (Glossar + MDX) gegen die realen TOC-Pfade pruefen.
const validLessonPaths = extractLessonPaths(paths.tocDataDir)
const statusBySlug = new Map(lessons.map((lesson) => [lesson.slug, lesson.status]))
checkInternalLinks('glossar', glossarText, validLessonPaths, statusBySlug)
for (const file of mdxFiles) {
  const slug = file.replace(/\.mdx$/, '')
  if (lessonFilter && slug !== lessonFilter) continue
  checkInternalLinks(slug, readFileSync(path.join(paths.lessonsDir, file), 'utf8'), validLessonPaths, statusBySlug)
}

const readyCount = lessons.filter((lesson) => lesson.status === 'ready' || lesson.status === 'final').length
const stubCount = lessons.filter((lesson) => lesson.status === 'stub').length
const draftCount = lessons.filter((lesson) => lesson.status === 'draft').length

if (lessonFilter && !lessonBySlug.has(lessonFilter)) {
  errors.push(`--lesson=${lessonFilter}: kein Kapitel mit diesem Slug im TOC gefunden`)
}

console.log('Content-Validator v1')
if (lessonFilter) console.log(`Kapitel-Filter: ${lessonFilter}`)
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
