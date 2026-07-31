import fs from 'node:fs'
import { sourceBank } from '../src/content/quellen/sourceBank.ts'
import { ap1Competencies } from '../src/content/catalog/competencies.ts'
import { topics } from '../src/content/catalog/topics.ts'
import { learningFieldExpectations } from '../src/content/catalog/curriculumExpectations.ts'
import { validateCatalog } from '../src/lib/learning/validation.ts'

const chapterModules = await Promise.all(
  [1, 2, 3, 4, 5, 6, 7, 8, 9].map((lf) => import(`../src/content/catalog/chapters/lf${lf}.ts`)),
)
const chapters = chapterModules.flatMap((module, index) => module[`lf${index + 1}`])
const lessonDirectory = new URL('../src/content/lessons', import.meta.url)
const mdxSlugs = new Set(
  fs.readdirSync(lessonDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.slice(0, -4)),
)
const validation = validateCatalog({
  chapters,
  topics,
  competencies: ap1Competencies,
  sourceIds: new Set(sourceBank.map((source) => source.id)),
  mdxSlugs,
  expectations: learningFieldExpectations,
})

const statusLabels = {
  geplant: 'geplant',
  ausgearbeitet: 'ungeprüft',
  teilgeprueft: 'teilgeprüft',
  geprueft: 'geprüft',
  gesperrt: 'gesperrt',
}
const count = (status) => chapters.filter((chapter) => chapter.inhaltsstatus === status).length
const escapeCell = (value) => String(value).replaceAll('|', '\\|').replaceAll('\n', ' ')

const lines = [
  '# Inhaltsstatus (generiert)',
  '',
  '> Erzeugt mit `npm run emit:status` aus `src/content/catalog/`.',
  '> Nicht von Hand bearbeiten. Inhaltsstatus und persönliche Lernbeherrschung sind getrennte Größen.',
  '',
  '## Gesamtstand',
  '',
  `- Kapitel im Katalog: **${chapters.length}**`,
  `- MDX-Lerntexte: **${mdxSlugs.size}**`,
  `- Geprüft: **${count('geprueft')}**`,
  `- Teilgeprüft: **${count('teilgeprueft')}**`,
  `- Ungeprüft ausgearbeitet: **${count('ausgearbeitet')}**`,
  `- Geplant: **${count('geplant')}**`,
  `- Gesperrt: **${count('gesperrt')}**`,
  `- Quellenabdeckung: Q1 **${validation.counts.sourceCoverage.q1}**, Q2 **${validation.counts.sourceCoverage.q2}**, Q3 **${validation.counts.sourceCoverage.q3}**`,
  `- Release-Gate: **${validation.releaseReady ? 'bestanden' : 'nicht bestanden'}**`,
  '',
  '## Offene Qualitätsbefunde',
  '',
  ...(validation.warnings.length ? validation.warnings.map((warning) => `- ${warning}`) : ['- Keine.']),
]

for (const expectation of learningFieldExpectations) {
  const items = chapters
    .filter((chapter) => chapter.primaryLf === expectation.lf)
    .sort((a, b) => a.lfReihenfolge - b.lfReihenfolge)
  lines.push(
    '',
    `## LF${expectation.lf}`,
    '',
    `Katalog: **${items.length}** Kapitel · Mindestpakete: **${expectation.minimumChapterPackages}** · Zeitrichtwert: **${expectation.hours} Stunden**`,
    '',
    '| Nr. | Kapitel | Status | AP1 | Q1 | Q2 | Q3 | MDX |',
    '|---:|---|---|---|:---:|:---:|:---:|:---:|',
  )
  for (const chapter of items) {
    lines.push(`| ${chapter.lfReihenfolge} | ${escapeCell(chapter.titel)} | ${statusLabels[chapter.inhaltsstatus]} | ${chapter.ap1Relevanz} | ${chapter.quellen.q1_scope.length ? '✓' : '–'} | ${chapter.quellen.q2_fachquelle.length ? '✓' : '–'} | ${chapter.quellen.q3_pruefungsrealitaet.length ? '✓' : '–'} | ${mdxSlugs.has(chapter.slug) ? '✓' : '–'} |`)
  }
}

if (!validation.ok) {
  lines.push('', '## Strukturfehler', '', ...validation.errors.map((error) => `- ${error}`))
}

const output = new URL('../AP1_STATUS.md', import.meta.url)
fs.writeFileSync(output, `${lines.join('\n')}\n`, 'utf8')
console.log(`Geschrieben: AP1_STATUS.md (${chapters.length} Kapitel, ${validation.warnings.length} offene Qualitätsbefunde)`)
