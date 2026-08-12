/**
 * Grundlast · Quellen-Linkcheck
 *
 * Prueft jede URL aus der Quellenbank und aus den <Quellen>-Bloecken der Kapitel
 * gegen das echte Netz. Hintergrund: Inhalte und Quellenangaben sind zu grossen
 * Teilen KI-generiert. Eine plausibel aussehende URL ist kein Beleg dafuer, dass
 * das Dokument existiert. Dieser Check trennt "sieht richtig aus" von "ist da".
 *
 * Aufruf:
 *   node scripts/check-links.mjs             alle Quellen
 *   node scripts/check-links.mjs --lesson=x  nur ein Kapitel
 *   node scripts/check-links.mjs --json      maschinenlesbare Ausgabe
 *
 * Exit-Code 1, sobald eine URL hart fehlschlaegt (404, 410, DNS, Timeout).
 * 403 und 405 gelten als "nicht pruefbar": Viele Normungsorganisationen
 * (JEDEC, IEEE, ISO) sperren automatisierte Zugriffe grundsaetzlich aus.
 */

import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const args = process.argv.slice(2)
const asJson = args.includes('--json')
const lessonFilter = args.find((a) => a.startsWith('--lesson='))?.split('=')[1]
const TIMEOUT_MS = 25000
// Parallel laufen nur *verschiedene* Domains. Innerhalb einer Domain wird
// serialisiert und gewartet, sonst antworten gesetze-im-internet.de und andere
// mit 503 und der Check meldet massenhaft Links als tot, die einwandfrei sind.
const DOMAIN_PARALLEL = 6
const DOMAIN_PAUSE_MS = 1200
const RETRIES = 3

/** Sammelt {url, label, herkunft} aus Quellenbank und Kapitel-MDX. */
function collectSources() {
  const found = new Map()

  function add(url, label, herkunft) {
    if (!/^https?:\/\//i.test(url)) return
    const eintrag = found.get(url) ?? { url, label, herkunft: [] }
    if (!eintrag.herkunft.includes(herkunft)) eintrag.herkunft.push(herkunft)
    found.set(url, eintrag)
  }

  if (!lessonFilter) {
    const bankPath = path.join(root, 'src/content/quellen/sourceBank.ts')
    const bank = readFileSync(bankPath, 'utf8')
    const eintragPattern =
      /id:\s*'([^']+)',\s*\n\s*label:\s*'([^']*(?:\\'[^']*)*)',\s*\n\s*href:\s*'([^']+)'/g
    let m
    while ((m = eintragPattern.exec(bank))) {
      add(m[3], m[2], `sourceBank:${m[1]}`)
    }
  }

  const lessonsDir = path.join(root, 'src/content/lessons')
  const dateien = readdirSync(lessonsDir)
    .filter((f) => f.endsWith('.mdx'))
    .filter((f) => !lessonFilter || f === `${lessonFilter}.mdx`)

  for (const datei of dateien) {
    const slug = datei.replace(/\.mdx$/, '')
    const text = readFileSync(path.join(lessonsDir, datei), 'utf8')
    const paarPattern = /label:\s*'((?:[^'\\]|\\.)*)',\s*\n\s*href:\s*'([^']+)'/g
    let m
    while ((m = paarPattern.exec(text))) {
      add(m[2], m[1].replace(/\\'/g, "'"), slug)
    }
  }

  return [...found.values()]
}

const schlafe = (ms) => new Promise((r) => setTimeout(r, ms))

/** Ein Versuch: erst HEAD, bei Ablehnung GET. */
async function einVersuch(eintrag) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

  // Erst HEAD (billig), bei Ablehnung GET nachschieben: manche Server
  // beantworten HEAD grundsaetzlich mit 405 oder 403.
  for (const method of ['HEAD', 'GET']) {
    try {
      const res = await fetch(eintrag.url, {
        method,
        redirect: 'follow',
        signal: controller.signal,
        // Ein normaler Browser-User-Agent ist Pflicht, kein Kosmetikdetail:
        // Behoerdenseiten (bund.de) beantworten eigene Bot-Kennungen mit 400
        // und erzeugen so falsche "defekt"-Meldungen.
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'de-DE,de;q=0.9,en;q=0.8',
        },
      })
      if ((res.status === 405 || res.status === 403) && method === 'HEAD') continue
      clearTimeout(timer)
      return { ...eintrag, status: res.status, endUrl: res.url }
    } catch (err) {
      if (method === 'GET') {
        clearTimeout(timer)
        const grund = err.name === 'AbortError' ? 'TIMEOUT' : (err.cause?.code ?? 'NETZFEHLER')
        return { ...eintrag, status: 0, fehler: grund }
      }
    }
  }

  clearTimeout(timer)
  return { ...eintrag, status: 0, fehler: 'UNBEKANNT' }
}

/**
 * Prueft eine URL mit Wiederholung. 503, 429 und Netzfehler sind fast immer
 * Drosselung, nicht Bruch — dabei wird mit wachsender Pause erneut versucht.
 */
async function pruefe(eintrag) {
  let letztes
  for (let versuch = 1; versuch <= RETRIES; versuch++) {
    letztes = await einVersuch(eintrag)
    const drosselung = letztes.status === 503 || letztes.status === 429 || letztes.status === 0
    if (!drosselung) return letztes
    if (versuch < RETRIES) await schlafe(2000 * versuch)
  }
  return letztes
}

/** Serialisiert alle URLs einer Domain und pausiert zwischen den Abfragen. */
async function pruefeDomain(eintraege, fortschritt) {
  const ergebnisse = []
  for (const [i, eintrag] of eintraege.entries()) {
    if (i > 0) await schlafe(DOMAIN_PAUSE_MS)
    ergebnisse.push(await pruefe(eintrag))
    fortschritt()
  }
  return ergebnisse
}

function bewerte(r) {
  if (r.status >= 200 && r.status < 300) return 'ok'
  if (r.status === 403 || r.status === 405) return 'gesperrt'
  if (r.status === 429) return 'gedrosselt'
  return 'defekt'
}

async function main() {
  const quellen = collectSources()

  // Nach Host buendeln: verschiedene Hosts parallel, gleicher Host seriell.
  const nachHost = new Map()
  for (const q of quellen) {
    const host = new URL(q.url).hostname
    if (!nachHost.has(host)) nachHost.set(host, [])
    nachHost.get(host).push(q)
  }

  let fertig = 0
  const fortschritt = () => {
    fertig++
    if (!asJson) process.stderr.write(`\rGeprueft: ${fertig}/${quellen.length}`)
  }

  const hosts = [...nachHost.values()]
  const ergebnisse = []
  for (let i = 0; i < hosts.length; i += DOMAIN_PARALLEL) {
    const block = hosts.slice(i, i + DOMAIN_PARALLEL)
    const teile = await Promise.all(block.map((e) => pruefeDomain(e, fortschritt)))
    for (const teil of teile) ergebnisse.push(...teil)
  }
  if (!asJson) process.stderr.write('\r\x1b[K')

  for (const r of ergebnisse) r.bewertung = bewerte(r)

  const defekt = ergebnisse.filter((r) => r.bewertung === 'defekt')
  const gesperrt = ergebnisse.filter((r) => r.bewertung === 'gesperrt')
  const gedrosselt = ergebnisse.filter((r) => r.bewertung === 'gedrosselt')
  const ok = ergebnisse.filter((r) => r.bewertung === 'ok')

  if (asJson) {
    console.log(JSON.stringify({ geprueft: ergebnisse.length, ergebnisse }, null, 2))
    process.exit(defekt.length > 0 ? 1 : 0)
  }

  console.log('\nQuellen-Linkcheck')
  console.log(`Geprueft: ${ergebnisse.length} URLs`)
  console.log(`  erreichbar:    ${ok.length}`)
  console.log(`  defekt:        ${defekt.length}`)
  console.log(`  bot-gesperrt:  ${gesperrt.length}  (403/405 - manuell pruefen)`)
  if (gedrosselt.length) console.log(`  gedrosselt:    ${gedrosselt.length}  (429 - spaeter erneut)`)

  if (defekt.length) {
    console.log('\nDefekt - diese Quellen belegen nichts:')
    for (const r of defekt) {
      console.log(`  [${r.fehler ?? r.status}] ${r.url}`)
      console.log(`        ${r.label}`)
      console.log(`        verwendet in: ${r.herkunft.join(', ')}`)
    }
  }

  if (gesperrt.length) {
    console.log('\nBot-gesperrt - im Browser gegenpruefen:')
    for (const r of gesperrt) {
      console.log(`  [${r.status}] ${r.url}  (${r.herkunft.join(', ')})`)
    }
  }

  console.log(
    defekt.length === 0
      ? '\nLinkcheck bestanden: keine defekten Quellen.'
      : `\nLinkcheck fehlgeschlagen: ${defekt.length} defekte Quellen.`,
  )
  process.exit(defekt.length > 0 ? 1 : 0)
}

main()
