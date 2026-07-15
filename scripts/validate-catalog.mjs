import fs from 'node:fs'
import { sourceBank } from '../src/content/quellen/sourceBank.ts'
import { ap1Competencies } from '../src/content/catalog/competencies.ts'
import { topics } from '../src/content/catalog/topics.ts'
import { validateCatalog } from '../src/lib/learning/validation.ts'
import { buildLearningPath } from '../src/lib/learning/learningPath.ts'

const chapterModules = await Promise.all([1,2,3,4,5,6,7,8,9].map((lf) => import('../src/content/catalog/chapters/lf' + lf + '.ts')))
const chapters = chapterModules.flatMap((module, index) => module['lf' + (index + 1)])
const mdxSlugs = new Set(fs.readdirSync(new URL('../src/content/lessons', import.meta.url)).filter((file) => file.endsWith('.mdx')).map((file) => file.slice(0, -4)))
const result = validateCatalog({ chapters, topics, competencies: ap1Competencies, sourceIds: new Set(sourceBank.map((source) => source.id)), mdxSlugs })
const firstPath = buildLearningPath(chapters).map((chapter) => chapter.slug)
const secondPath = buildLearningPath(chapters).map((chapter) => chapter.slug)
if (firstPath.join('|') !== secondPath.join('|')) result.errors.push('Lernpfad ist nicht deterministisch.')
result.ok = result.errors.length === 0
if (!result.ok) {
  console.error(result.errors.join('\n'))
  process.exit(1)
}
console.log('Katalog valide: ' + result.counts.chapters + ' Kapitel, ' + result.counts.urls + ' URLs, ' + result.counts.topics + ' Themen, ' + result.counts.competencies + ' AP1-Kompetenzen.')
