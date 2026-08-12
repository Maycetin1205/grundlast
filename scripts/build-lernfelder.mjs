/**
 * Grundlast · Lernfeld-Dateien erzeugen und aktualisieren
 *
 * Erzeugt je Lernfeld eine Arbeitsdatei in `lernfelder/`. Diese Datei ist die
 * einzige Datei, die ein Chat oeffnen muss, um an einem Kapitel zu arbeiten.
 *
 * Jede Datei hat zwei Zonen:
 *
 *   HANDGESCHRIEBEN  Regeln, Quellenpolitik, Aufgabentypen, Materialbezug.
 *                    Wird nie ueberschrieben.
 *   GENERIERT        Kapitelliste, Status, offene Validator-Pflichten.
 *                    Wird bei jedem Lauf neu aus dem Code erzeugt.
 *
 * Der Grund fuer die Trennung: `CURRICULUM_MAPPING.md` ist gestorben, weil es
 * Status von Hand doppelt gepflegt hat. Handgepflegter Zustand laeuft immer aus
 * dem Ruder. Deshalb kommt hier jeder Zustand aus der einen Wahrheit
 * (`src/lib/toc/data/*.ts` plus die MDX-Dateien) und wird stumpf ueberschrieben.
 *
 * Aufruf:
 *   node scripts/build-lernfelder.mjs           alle Lernfelder aktualisieren
 *   node scripts/build-lernfelder.mjs --check   nur pruefen, nichts schreiben
 */

import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const nurPruefen = process.argv.includes('--check')

const tocDir = path.join(root, 'src/lib/toc/data')
const lessonsDir = path.join(root, 'src/content/lessons')
const zielDir = path.join(root, 'lernfelder')
const materialDir = path.join(root, 'material')

const START = (name) => `<!-- GENERIERT:${name} — nicht von Hand aendern, wird ueberschrieben -->`
const ENDE = (name) => `<!-- /GENERIERT:${name} -->`

/** Die acht Pflichtpruefungen aus scripts/validate-content.mjs, gespiegelt. */
const READY_CHECKS = [
  ['Ziele', (t) => /##\s+Was du danach kannst/i.test(t)],
  ['Analogie', (t) => /##\s+(Die\s+)?Analogie/i.test(t) || /<Analogie\b/i.test(t)],
  ['Tabelle', (t) => /Faktenkern/i.test(t) || /^\|.+\|$/m.test(t)],
  ['Terme', (t) => /<Term\s+id=["'][^"']+["']/i.test(t)],
  ['Schritte', (t) => /<StepByStep\b|<Ergebnis\b|Schritt f(?:ue|ü)r Schritt/i.test(t)],
  ['Fehler', (t) => /##\s+Typische Fehler|##\s+Fehler/i.test(t)],
  ['Quellen', (t) => /<Quellen\b/i.test(t)],
]

function leseLernfelder() {
  const reihenfolge = readFileSync(path.join(tocDir, 'index.ts'), 'utf8')
    .split('export const lernfelder')[1]
    .match(/^\s{2}(\w+),/gm)
    .map((s) => s.trim().replace(',', ''))

  const lernfelder = []
  for (const name of reihenfolge) {
    const datei = path.join(tocDir, `${name}.ts`)
    if (!existsSync(datei)) continue
    const src = readFileSync(datei, 'utf8')

    const titel = src.match(/title:\s*"([^"]+)"/)?.[1] ?? name
    const beschreibung = src.match(/description:\s*"([^"]+)"/)?.[1] ?? ''

    const moduls = []
    const modulPattern =
      /\{\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*lessons:\s*\[([\s\S]*?)\n\s*\],/g
    let m
    while ((m = modulPattern.exec(src))) {
      const lessons = [...m[3].matchAll(/\{\s*slug:\s*"([^"]+)"[^}]*?\}/g)].map((l) => {
        const body = l[0]
        return {
          slug: l[1],
          titel: body.match(/title:\s*"([^"]+)"/)?.[1] ?? l[1],
          minuten: Number(body.match(/minutes:\s*(\d+)/)?.[1] ?? 0),
          wichtigkeit: Number(body.match(/importance:\s*(\d)/)?.[1] ?? 0),
          pruefung: /exam:\s*true/.test(body),
          status: body.match(/status:\s*"(\w+)"/)?.[1] ?? 'ohne',
        }
      })
      moduls.push({ slug: m[1], titel: m[2], lessons })
    }

    lernfelder.push({ name, titel, beschreibung, moduls })
  }
  return lernfelder
}

/** Findet Materialdateien, die per Namenspraefix zu diesem Lernfeld gehoeren. */
function findeMaterial(lernfeldName) {
  const treffer = []
  if (!existsSync(materialDir)) return treffer
  for (const unterordner of ['mitschriften', 'zusammenfassungen', 'aufgaben', 'pruefungen']) {
    const dir = path.join(materialDir, unterordner)
    if (!existsSync(dir)) continue
    for (const datei of readdirSync(dir)) {
      if (datei.startsWith('.')) continue
      // Pruefungen gelten fuer alle Lernfelder, der Rest nur bei Namensprefix.
      if (unterordner === 'pruefungen' || datei.startsWith(`${lernfeldName}-`)) {
        treffer.push(`material/${unterordner}/${datei}`)
      }
    }
  }
  return treffer
}

function kapitelZone(lernfeld) {
  const zeilen = []
  let gesamt = 0
  let fertig = 0

  for (const modul of lernfeld.moduls) {
    zeilen.push(`\n### Modul: ${modul.titel}  \`${modul.slug}\`\n`)
    zeilen.push('| Kapitel | Slug | AP1 | Wicht. | Status | Offen fuer ready |')
    zeilen.push('|---|---|:--:|:--:|---|---|')

    for (const l of modul.lessons) {
      gesamt++
      const mdxPfad = path.join(lessonsDir, `${l.slug}.mdx`)
      const hatDatei = existsSync(mdxPfad)
      let offen = ''

      if (!hatDatei) {
        offen = '**keine MDX-Datei**'
      } else {
        const text = readFileSync(mdxPfad, 'utf8')
        const fehlend = READY_CHECKS.filter(([, fn]) => !fn(text)).map(([n]) => n)
        offen = fehlend.length === 0 ? '—' : fehlend.join(', ')
      }

      if (l.status === 'ready' || l.status === 'final') fertig++

      zeilen.push(
        `| ${l.titel} | \`${l.slug}\` | ${l.pruefung ? 'ja' : '–'} | ${l.wichtigkeit} | \`${l.status}\` | ${offen} |`,
      )
    }
  }

  const kopf = [
    `**${fertig} von ${gesamt} Kapiteln** stehen auf \`ready\` oder \`final\`.`,
    '',
    'Spalte "Offen fuer ready" listet die Pflichtbausteine, die der Content-Validator',
    'noch vermisst. Leer beziehungsweise "—" heisst: Kapitel erfuellt den Ready-Standard',
    'mechanisch. Das ersetzt keine fachliche Pruefung.',
  ].join('\n')

  return `${kopf}\n${zeilen.join('\n')}`
}

function materialZone(lernfeld) {
  const treffer = findeMaterial(lernfeld.name)
  if (treffer.length === 0) {
    return [
      'Noch kein Material zugeordnet.',
      '',
      `Sobald Dateien mit dem Praefix \`${lernfeld.name}-\` unter \`material/\` liegen,`,
      'erscheinen sie hier automatisch. Namensschema siehe `material/README.md`.',
    ].join('\n')
  }
  return ['Diese Dateien darf ein Chat fuer dieses Lernfeld heranziehen:', '', ...treffer.map((t) => `- \`${t}\``)].join('\n')
}

/** Ersetzt eine generierte Zone, laesst alles andere unangetastet. */
function ersetzeZone(inhalt, name, neu) {
  const start = START(name)
  const ende = ENDE(name)
  const pattern = new RegExp(
    `${start.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${ende.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`,
  )
  const block = `${start}\n\n${neu}\n\n${ende}`
  if (!pattern.test(inhalt)) return null
  return inhalt.replace(pattern, block)
}

function vorlage(lernfeld) {
  return `# ${lernfeld.titel}

> Arbeitsdatei fuer das Lernfeld \`${lernfeld.name}\`.
> ${lernfeld.beschreibung}

Ein Chat, der an einem Kapitel dieses Lernfelds arbeitet, liest **diese Datei**
und zusaetzlich \`UNIVERSAL_PROMPT.md\` sowie \`CONTENT_GUIDELINES.md\`. Mehr nicht.

---

## Quellenpolitik fuer dieses Lernfeld

<!-- Von Hand ausfuellen. Was zaehlt hier als Primaerquelle, was nicht? -->

**Primaer (belegt Fakten):**

- _noch auszufuellen_

**Sekundaer (Einordnung, nie alleiniger Beleg):**

- _noch auszufuellen_

**Nicht zulaessig als Beleg:**

- _noch auszufuellen_

---

## Aufgabentypen, die die Pruefung hier stellt

<!-- Aus dem Material herleiten, nicht raten. Erst ausfuellen, wenn Pruefungen
     unter material/pruefungen/ liegen. -->

| Aufgabentyp | Wie erkennbar | Worauf es bei der Antwort ankommt |
|---|---|---|
| _noch auszufuellen_ | | |

---

## Typische Fehler in diesem Fach

<!-- Fachspezifisch, nicht allgemein. Was geht in genau diesem Lernfeld schief? -->

- _noch auszufuellen_

---

## Material

${START('material')}

${materialZone(lernfeld)}

${ENDE('material')}

---

## Kapitelbestand

${START('kapitel')}

${kapitelZone(lernfeld)}

${ENDE('kapitel')}

---

## Reihenfolge und Voraussetzungen

<!-- In welcher Reihenfolge sollte gelernt werden, und was setzt was voraus?
     Das ist die Frage, die eine flache Kapitelliste nicht beantwortet. -->

_noch auszufuellen_

---

## Offene Punkte

<!-- Widersprueche zwischen Material und Primaerquelle, ungeklaerte Zuordnungen,
     Kapitel die vielleicht ins falsche Lernfeld gehoeren. Hier sammeln statt
     stillschweigend aufloesen. -->

- _noch keine_
`
}

function main() {
  const lernfelder = leseLernfelder()
  if (!existsSync(zielDir)) {
    if (nurPruefen) {
      console.error(`Ordner fehlt: ${path.relative(root, zielDir)}`)
      process.exit(1)
    }
    mkdirSync(zielDir, { recursive: true })
  }

  let neu = 0
  let aktualisiert = 0
  let unveraendert = 0
  const abweichend = []

  for (const lernfeld of lernfelder) {
    const ziel = path.join(zielDir, `${lernfeld.name}.md`)

    if (!existsSync(ziel)) {
      if (nurPruefen) {
        abweichend.push(`fehlt: lernfelder/${lernfeld.name}.md`)
        continue
      }
      writeFileSync(ziel, vorlage(lernfeld), 'utf8')
      neu++
      continue
    }

    const alt = readFileSync(ziel, 'utf8')
    let inhalt = alt
    for (const [name, erzeuger] of [
      ['material', materialZone],
      ['kapitel', kapitelZone],
    ]) {
      const ersetzt = ersetzeZone(inhalt, name, erzeuger(lernfeld))
      if (ersetzt === null) {
        abweichend.push(`lernfelder/${lernfeld.name}.md: Zone "${name}" fehlt oder ist beschaedigt`)
        continue
      }
      inhalt = ersetzt
    }

    if (inhalt === alt) {
      unveraendert++
    } else if (nurPruefen) {
      abweichend.push(`veraltet: lernfelder/${lernfeld.name}.md`)
    } else {
      writeFileSync(ziel, inhalt, 'utf8')
      aktualisiert++
    }
  }

  if (nurPruefen) {
    if (abweichend.length) {
      console.error('Lernfeld-Dateien nicht aktuell:')
      for (const a of abweichend) console.error(`  - ${a}`)
      console.error('\nAbhilfe: node scripts/build-lernfelder.mjs')
      process.exit(1)
    }
    console.log(`Lernfeld-Dateien aktuell (${lernfelder.length} geprueft).`)
    return
  }

  console.log(`Lernfeld-Dateien: ${neu} neu, ${aktualisiert} aktualisiert, ${unveraendert} unveraendert.`)
  if (abweichend.length) {
    console.log('\nHinweise:')
    for (const a of abweichend) console.log(`  - ${a}`)
  }
}

main()
