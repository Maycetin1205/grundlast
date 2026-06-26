// Quellen-/Beleg-Pruefung: der erste Nicht-KI-Anker im Prozess.
//
// Liest src/content/quellen/belege.json (Aussage -> woertliches Zitat + Quellen-ID
// + Fundstelle + Abrufdatum), ruft die zugehoerige Quelle real ab und prueft, ob
// das hinterlegte woertliche Zitat tatsaechlich im Quelltext vorkommt. Eine
// halluzinierte Aussage mit thematisch passender, aber nicht stuetzender Quelle
// faellt damit durch.
//
// Laeuft NICHT im Offline-Gate (prebuild/test), weil es externe Server kontaktiert.
// Eigener, entkoppelter Lauf: `npm run check:sources` bzw. woechentlicher CI-Job.

import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const belegeFile = join(root, 'src/content/quellen/belege.json')
const sourceBankFile = join(root, 'src/content/quellen/sourceBank.ts')
const auditFile = join(root, 'src/lib/audit/status.ts')

const MIN_BELEGE_FUER_GEPRUEFT = 5
const PFLICHTFELDER = ['aussage', 'zitat', 'quelleId', 'fundstelle', 'abgerufenAm']

function read(path) {
  return readFileSync(path, 'utf8').replace(/^﻿/, '')
}

// id -> href aus sourceBank.ts (read-only Extraktion; id steht je Eintrag vor href).
function sourceHrefs() {
  const map = new Map()
  const pattern = /id:\s*['"]([^'"]+)['"][\s\S]*?href:\s*['"]([^'"]+)['"]/g
  for (const match of read(sourceBankFile).matchAll(pattern)) {
    if (!map.has(match[1])) map.set(match[1], match[2])
  }
  return map
}

// Slugs, die in status.ts auf 'geprueft' stehen (aktuell leer -> Gate ruht).
function gepruefteSlugs() {
  const slugs = new Set()
  const pattern = /(['"]?)([\w-]+)\1\s*:\s*\{[^}]*?status:\s*['"]geprueft['"][^}]*?\}/g
  for (const match of read(auditFile).matchAll(pattern)) slugs.add(match[2])
  return slugs
}

// HTML/Entities entfernen, Typografie und Whitespace vereinheitlichen, kleinschreiben.
function normalize(text) {
  return text
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/[“”„«»]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[–—]/g, '-')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .trim()
}

async function main() {
  const belege = JSON.parse(read(belegeFile))
  const hrefs = sourceHrefs()
  const slugs = Object.keys(belege)
  const errors = []
  const warnings = []
  let checked = 0

  // Gate: ein 'geprueft'-Kapitel braucht mindestens MIN_BELEGE_FUER_GEPRUEFT Belege.
  for (const slug of gepruefteSlugs()) {
    const anzahl = Array.isArray(belege[slug]) ? belege[slug].length : 0
    if (anzahl < MIN_BELEGE_FUER_GEPRUEFT) {
      errors.push(
        `Kapitel '${slug}' steht auf 'geprueft', hat aber nur ${anzahl} Belege (min. ${MIN_BELEGE_FUER_GEPRUEFT}).`,
      )
    }
  }

  for (const slug of slugs) {
    const entries = belege[slug]
    if (!Array.isArray(entries)) {
      errors.push(`belege['${slug}'] ist kein Array.`)
      continue
    }
    for (let index = 0; index < entries.length; index += 1) {
      const entry = entries[index]
      const wo = `${slug}[${index}]`
      for (const feld of PFLICHTFELDER) {
        if (!entry || typeof entry[feld] !== 'string' || entry[feld].trim() === '') {
          errors.push(`${wo}: Pflichtfeld '${feld}' fehlt oder ist leer.`)
        }
      }
      if (!entry || typeof entry.quelleId !== 'string' || typeof entry.zitat !== 'string') continue
      const href = hrefs.get(entry.quelleId)
      if (!href) {
        errors.push(`${wo}: Quellen-ID '${entry.quelleId}' existiert nicht in sourceBank.ts.`)
        continue
      }
      checked += 1
      try {
        const response = await fetch(href, { redirect: 'follow' })
        if (!response.ok) {
          errors.push(`${wo}: ${href} nicht erreichbar (HTTP ${response.status}).`)
          continue
        }
        const contentType = response.headers.get('content-type') ?? ''
        if (!/text\/html|text\/plain|application\/(json|xml)|text\/xml/i.test(contentType)) {
          warnings.push(
            `${wo}: Inhaltstyp '${contentType || 'unbekannt'}' (z. B. PDF) – Erreichbarkeit ok, Zitat bitte manuell pruefen: ${href}`,
          )
          continue
        }
        const body = await response.text()
        if (!normalize(body).includes(normalize(entry.zitat))) {
          errors.push(
            `${wo}: Zitat NICHT im Quelltext gefunden (${href}). Zitat: "${entry.zitat.slice(0, 80)}${entry.zitat.length > 80 ? '…' : ''}"`,
          )
        }
      } catch (err) {
        errors.push(`${wo}: Abruf fehlgeschlagen (${href}): ${err.message}`)
      }
    }
  }

  console.log('Grundlast - Quellen-/Beleg-Pruefung')
  console.log('='.repeat(60))
  console.log(`Kapitel mit Belegen: ${slugs.length} | online geprueft: ${checked}`)
  if (slugs.length === 0) {
    console.log('Hinweis: Noch keine Belege hinterlegt (belege.json ist leer).')
  }
  console.log('')

  if (warnings.length > 0) {
    console.log(`WARNUNG (${warnings.length})`)
    for (const warning of warnings) console.log(`  - ${warning}`)
    console.log('')
  }

  if (errors.length > 0) {
    console.error(`FEHLER (${errors.length})`)
    for (const error of errors) console.error(`  [X] ${error}`)
    process.exitCode = 1
    return
  }

  console.log('Ergebnis: Alle hinterlegten Belege sind erreichbar und das Zitat wurde im Quelltext gefunden.')
}

main()
