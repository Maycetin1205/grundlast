import fs from 'node:fs'
import { examCatalogDeltas, examCatalogEvidence, scopeItems } from '../src/content/catalog/scope/index.ts'

const chapterModules = await Promise.all(
  [1, 2, 3, 4, 5, 6, 7, 8, 9].map((lf) => import(`../src/content/catalog/chapters/lf${lf}.ts`)),
)
const chapters = chapterModules.flatMap((module, index) => module[`lf${index + 1}`])
const chaptersBySlug = new Map(chapters.map((chapter) => [chapter.slug, chapter]))

const available = (chapter) => chapter && !['geplant', 'gesperrt'].includes(chapter.inhaltsstatus)
const verified = (chapter) => chapter?.inhaltsstatus === 'geprueft'
const state = (item) => {
  const mapped = item.chapterSlugs.map((slug) => chaptersBySlug.get(slug)).filter(Boolean)
  if (mapped.length && mapped.every(verified)) return 'vollständig über geprüfte Kapitel belegt'
  if (mapped.length && mapped.every(available)) return 'alle Lerntexte vorhanden, Audit offen'
  return 'Kapitelpaket unvollständig oder geplant'
}
const escape = (value) => value.replaceAll('|', '\\|').replaceAll('\n', ' ')
const chapterCell = (item) => item.chapterSlugs.map((slug) => {
  const chapter = chaptersBySlug.get(slug)
  return chapter ? `${chapter.titel} (${chapter.inhaltsstatus})` : `${slug} (FEHLT)`
}).join('<br>')
const referenceCell = (item) => item.sourceRefs
  .map((reference) => `${reference.sourceId}: ${reference.locator}`)
  .join('<br>')

const originCounts = Object.fromEntries(
  ['kmk-rlp', 'fiausbv-18m', 'fiausbv-ap1'].map((origin) => [origin, scopeItems.filter((item) => item.origin === origin).length]),
)
const availableCount = scopeItems.filter((item) => item.chapterSlugs.every((slug) => available(chaptersBySlug.get(slug)))).length
const verifiedCount = scopeItems.filter((item) => item.chapterSlugs.every((slug) => verified(chaptersBySlug.get(slug)))).length
const directlyAp1 = scopeItems.filter((item) => item.ap1Relation === 'direkt')
const verifiedAp1 = directlyAp1.filter((item) => item.chapterSlugs.every((slug) => verified(chaptersBySlug.get(slug)))).length

const lines = [
  '# Atomare Stoffmatrix LF1–LF9 und AP1',
  '',
  '> Generiert mit `npm run emit:scope` aus `src/content/catalog/scope/`.',
  '> Nicht von Hand bearbeiten. Eine Kapitelzuordnung ist noch keine fachliche Freigabe.',
  '',
  '## Gesamtstand',
  '',
  `- Pflichtatome gesamt: **${scopeItems.length}**`,
  `- KMK LF1–LF9: **${originCounts['kmk-rlp']}**`,
  `- FIAusbV erste 18 Monate: **${originCounts['fiausbv-18m']}**`,
  `- gesetzliche AP1-Handlungen: **${originCounts['fiausbv-ap1']}**`,
  `- mit vollständigem Lerntextpaket: **${availableCount}/${scopeItems.length}**`,
  `- vollständig über geprüfte Kapitel belegt: **${verifiedCount}/${scopeItems.length}**`,
  `- AP1-direkt fachlich geprüft: **${verifiedAp1}/${directlyAp1.length}**`,
  `- Prüfungskatalog: **${examCatalogEvidence.status}** — ${examCatalogEvidence.missing}`,
  '',
  '## Leseregel',
  '',
  '- **Kapitelpaket unvollständig oder geplant:** Mindestens ein benötigtes Kapitel fehlt als Lerntext.',
  '- **Alle Lerntexte vorhanden, Audit offen:** Das Paket ist lesbar; mindestens ein Kapitel ist noch nicht freigegeben.',
  '- **Vollständig über geprüfte Kapitel belegt:** Jedes dem Atom zugeordnete Kapitel ist fachlich geprüft.',
  '',
]

for (let lf = 1; lf <= 9; lf += 1) {
  const items = scopeItems.filter((item) => item.origin === 'kmk-rlp' && item.learningFields.includes(lf))
  lines.push(`## LF${lf} — KMK-Mindestkompetenzen`, '', '| ID | Handlung | Lernergebnis | Fundstelle | Stand | Kapitel |', '|---|---|---|---|---|---|')
  for (const item of items) {
    lines.push(`| ${item.id} | ${item.action} | ${escape(item.outcome)} | ${escape(referenceCell(item))} | ${state(item)} | ${escape(chapterCell(item))} |`)
  }
  lines.push('')
}

lines.push('## FIAusbV — erste 18 Monate', '', '| ID | Lernfelder | Lernergebnis | Fundstelle | Stand | Kapitel |', '|---|---|---|---|---|---|')
for (const item of scopeItems.filter((entry) => entry.origin === 'fiausbv-18m')) {
  lines.push(`| ${item.id} | ${item.learningFields.map((lf) => `LF${lf}`).join(', ')} | ${escape(item.outcome)} | ${escape(referenceCell(item))} | ${state(item)} | ${escape(chapterCell(item))} |`)
}

lines.push('', '## AP1 — gesetzliche Handlungen', '', '| ID | Lernergebnis | Fundstelle | Stand | Kapitel |', '|---|---|---|---|---|')
for (const item of scopeItems.filter((entry) => entry.origin === 'fiausbv-ap1')) {
  lines.push(`| ${item.id} | ${escape(item.outcome)} | ${escape(referenceCell(item))} | ${state(item)} | ${escape(chapterCell(item))} |`)
}

lines.push('', '## Prüfungskatalog 2025 — öffentlich belegbares Delta', '')
lines.push(`Vollständigkeitsstatus: **${examCatalogEvidence.status}**. ${examCatalogEvidence.missing}`, '')
lines.push('| ID | Gültig ab | Einordnung | Themen | Öffentliche Aussage |', '|---|---|---|---|---|')
for (const delta of examCatalogDeltas) {
  lines.push(`| ${delta.id} | ${delta.effectiveFrom} | ${delta.appliesTo} / ${delta.disposition} | ${escape(delta.topics.join(', '))} | ${escape(delta.statement)} |`)
}

fs.writeFileSync(new URL('../SCOPE_STATUS.md', import.meta.url), `${lines.join('\n')}\n`)
console.log(`Geschrieben: SCOPE_STATUS.md (${scopeItems.length} Pflichtatome, ${availableCount} mit vollständigem Lerntextpaket, ${verifiedCount} vollständig geprüft)`)
