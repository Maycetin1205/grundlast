import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, extname, join, parse } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const lessonsDir = join(root, 'src/content/lessons')
const tocDataDir = join(root, 'src/lib/toc/data')
const auditFile = join(root, 'src/lib/audit/status.ts')
const reviewFile = join(root, 'src/lib/review.ts')
const sourcesFile = join(root, 'src/content/quellen/tagMappings.ts')
const outputFile = join(root, 'AP1_STATUS.md')
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

function statusMap(path, declarationPattern) {
  const body = objectBody(read(path), declarationPattern)
  const result = new Map()
  if (!body) return result

  const entryPattern = /^  '?([\w-]+)'?:\s*\{/gm
  const matches = Array.from(body.matchAll(entryPattern))
  for (let index = 0; index < matches.length; index += 1) {
    const match = matches[index]
    const end = matches[index + 1]?.index ?? body.length
    const entry = body.slice(match.index, end)
    const status = /status:\s*'([^']+)'/.exec(entry)?.[1] ?? '?'
    result.set(match[1], status)
  }
  return result
}

function lessonFiles() {
  return new Set(
    readdirSync(lessonsDir)
      .filter((file) => extname(file) === '.mdx')
      .map((file) => parse(file).name),
  )
}

function tocEntries() {
  const entries = []
  const files = readdirSync(tocDataDir)
    .filter((file) => extname(file) === '.ts' && file !== 'index.ts')
    .sort()

  for (const file of files) {
    for (const body of arrayBodies(read(join(tocDataDir, file)), 'lessons')) {
      for (const match of body.matchAll(/\{[^{}]*\}/g)) {
        const slug = /slug:\s*["']([^"']+)["']/.exec(match[0])?.[1]
        if (!slug) continue
        const status = /status:\s*["']([^"']+)["']/.exec(match[0])?.[1] ?? 'stub'
        entries.push({ slug, status, source: file })
      }
    }
  }
  return entries
}

const toc = tocEntries()
const mdx = lessonFiles()
const audit = statusMap(auditFile, /lessonAudits\b[^=]*=/g)
const review = statusMap(reviewFile, /reviewLog\b[^=]*=/g)
const sourceTags = objectKeys(read(sourcesFile), /slugTags\b[^=]*=/g, '[')
const visible = toc.filter((entry) => visibleStatuses.has(entry.status))
const stubs = toc.filter((entry) => entry.status === 'stub')

const trust = (slug) => audit.get(slug) ?? 'ungeprueft'
const checked = toc.filter((entry) => trust(entry.slug) === 'geprueft').length
const partial = toc.filter((entry) => trust(entry.slug) === 'teilgeprueft').length
const unchecked = toc.length - checked - partial

const lines = [
  '# AP1 - Status (GENERIERT)',
  '',
  '> Diese Datei wird aus dem Code erzeugt: `npm run emit:status`.',
  '> **Nicht von Hand editieren.** Quelle der Wahrheit: `src/lib/toc/data/`, `src/lib/audit/status.ts`, `src/lib/review.ts`.',
  '> Massgeblich ist `Vertrauen` (ungeprueft -> teilgeprueft -> geprueft), nicht der technische `TOC`-Status.',
  '',
  '## Zusammenfassung',
  '',
  `- Lektionen im TOC: **${toc.length}** (sichtbar ${visible.length}, stub ${stubs.length})`,
  `- MDX vorhanden: **${mdx.size}**`,
  `- Vertrauen: geprueft **${checked}** | teilgeprueft **${partial}** | ungeprueft **${unchecked}**`,
  `- Review dokumentiert: **${toc.filter((entry) => review.has(entry.slug)).length}**`,
  `- Mit Quellen-Tags: **${toc.filter((entry) => sourceTags.has(entry.slug)).length}**`,
  '',
  '## Lektionen nach Lernfeld',
  '',
]

let currentSource = null
for (const entry of toc) {
  if (entry.source !== currentSource) {
    currentSource = entry.source
    lines.push(
      '',
      `### ${parse(entry.source).name}`,
      '',
      '| Slug | TOC | Vertrauen | Review | MDX | Quellen |',
      '|---|---|---|---|---|---|',
    )
  }

  lines.push(
    `| \`${entry.slug}\` | ${entry.status} | ${trust(entry.slug)} | ${review.get(entry.slug) ?? '-'} | ${mdx.has(entry.slug) ? 'ja' : '-'} | ${sourceTags.has(entry.slug) ? 'ja' : '-'} |`,
  )
}

lines.push('')
writeFileSync(outputFile, `${lines.join('\n')}\n`, 'utf8')
console.log(`Geschrieben: AP1_STATUS.md (${toc.length} Lektionen)`)
