/**
 * Einzeldatei — macht aus dem Single-File-Build eine wirklich eigenstaendige Datei.
 *
 * `vite build --mode single` inlined bereits JS und CSS, laesst aber zwei
 * externe Abhaengigkeiten stehen: das Favicon als Nachbardatei und die
 * Schriften von fonts.googleapis.com. Beides bricht den Offline-Betrieb —
 * und genau der ist der Sinn einer Einzeldatei: auf den Stick, aufs Handy,
 * in die Bahn.
 *
 * Dieses Skript laeuft nach dem Build und bettet beides als data:-URI ein.
 *
 * Aufruf:  node scripts/einzeldatei.mjs [--in=dist/index.html] [--out=<pfad>]
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const arg = (name, fallback) =>
  process.argv.find((a) => a.startsWith(`--${name}=`))?.split('=').slice(1).join('=') ?? fallback

const inPfad = path.resolve(root, arg('in', 'dist/index.html'))
const outPfad = path.resolve(root, arg('out', 'dist/lerndatei.html'))

if (!existsSync(inPfad)) {
  console.error(`Eingabedatei fehlt: ${inPfad}\nZuerst "npm run build:single" ausfuehren.`)
  process.exit(1)
}

let html = readFileSync(inPfad, 'utf8')
const startGroesse = Buffer.byteLength(html)

/* ---------- 1. Favicon einbetten ---------- */
const faviconPfad = path.join(path.dirname(inPfad), 'favicon.svg')
if (existsSync(faviconPfad)) {
  const svg = readFileSync(faviconPfad)
  const uri = `data:image/svg+xml;base64,${svg.toString('base64')}`
  const vorher = html
  html = html.replace(/href="\.\/favicon\.svg"/g, `href="${uri}"`)
  console.log(vorher === html ? '  Favicon: kein Verweis gefunden' : `  Favicon eingebettet (${svg.length} Byte)`)
} else {
  console.log('  Favicon: Datei nicht vorhanden, uebersprungen')
}

/* ---------- 2. Google Fonts einbetten ---------- */
// Schriften kommen an zwei Stellen herein: als <link> im HTML-Kopf und als
// @import am Anfang des CSS-Bundles. Beide muessen erfasst werden, sonst
// laedt die Datei zur Laufzeit doch wieder nach.
const fontLinks = [
  ...[...html.matchAll(/<link[^>]+href="(https:\/\/fonts\.googleapis\.com\/css2\?[^"]+)"[^>]*>/g)].map((m) => m[1]),
  ...[...html.matchAll(/@import\s*(?:url\()?\s*["']?(https:\/\/fonts\.googleapis\.com\/css2\?[^"')]+)/g)].map((m) => m[1]),
].map((u) => u.replace(/&amp;/g, '&'))

if (!fontLinks.length) {
  console.log('  Schriften: kein Google-Fonts-Verweis gefunden')
} else {
  console.log(`  Schriften: ${fontLinks.length} Stylesheet-Verweis(e) gefunden`)
  const ua =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36'
  const teile = []
  for (const link of fontLinks) {
    const antwort = await fetch(link.replace(/&amp;/g, '&'), { headers: { 'User-Agent': ua } })
    if (!antwort.ok) throw new Error(`Font-CSS nicht ladbar (HTTP ${antwort.status}):\n    ${link}`)
    teile.push(await antwort.text())
  }
  let css = teile.join('\n')

  // Nur die fuer Deutsch benoetigten Subsets behalten. Google liefert per
  // Vorgabe auch Kyrillisch, Griechisch und Vietnamesisch mit — das verdoppelt
  // die Dateigroesse ohne Nutzen. Die Subsets stehen als Kommentar vor jedem
  // @font-face-Block.
  const behalten = new Set(['latin', 'latin-ext'])
  const bloecke = css.split(/(?=\/\* [a-z-]+ \*\/)/)
  const vorherZahl = (css.match(/@font-face/g) || []).length
  css = bloecke
    .filter((b) => {
      const m = b.match(/^\/\* ([a-z-]+) \*\//)
      return !m || behalten.has(m[1])
    })
    .join('')
  const nachherZahl = (css.match(/@font-face/g) || []).length
  console.log(`  Subsets gefiltert: ${vorherZahl} → ${nachherZahl} Schnitte (nur ${[...behalten].join(', ')})`)

  const urls = [...new Set([...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g)].map((m) => m[1]))]
  console.log(`  Schriften: ${urls.length} Dateien werden eingebettet ...`)

  let bytes = 0
  await Promise.all(
    urls.map(async (u) => {
      const r = await fetch(u, { headers: { 'User-Agent': ua } })
      if (!r.ok) throw new Error(`Schriftdatei nicht ladbar (HTTP ${r.status}):\n    ${u}`)
      const buf = Buffer.from(await r.arrayBuffer())
      bytes += buf.length
      const typ = u.endsWith('.woff2') ? 'font/woff2' : u.endsWith('.woff') ? 'font/woff' : 'font/ttf'
      css = css.split(u).join(`data:${typ};base64,${buf.toString('base64')}`)
    }),
  )

  html = html
    .replace(/<link[^>]+href="https:\/\/fonts\.googleapis\.com\/css2\?[^"]+"[^>]*>/, `<style>\n${css}\n</style>`)
    .replace(/<link[^>]+(?:fonts\.googleapis\.com|fonts\.gstatic\.com)[^>]*>/g, '')
    .replace(/@import\s*(?:url\()?\s*["'][^"']*fonts\.googleapis\.com[^"']*["']\)?\s*;?/g, '')

  console.log(`  Schriften eingebettet (${(bytes / 1024 / 1024).toFixed(2)} MB Schriftdaten)`)
}

/* ---------- 3. Ergebnis pruefen ---------- */
const rest = [
  ...[...html.matchAll(/(?:src|href)="(https?:\/\/[^"]+)"/g)].map((m) => m[1]),
  ...[...html.matchAll(/@import\s*(?:url\()?\s*["']?(https?:\/\/[^"')]+)/g)].map((m) => m[1]),
].filter((u) => !u.startsWith('data:'))

writeFileSync(outPfad, html)
const mb = (n) => (n / 1024 / 1024).toFixed(2)

console.log(`\n  ${path.relative(root, inPfad)}  ${mb(startGroesse)} MB`)
console.log(`  ${path.relative(root, outPfad)}  ${mb(Buffer.byteLength(html))} MB`)

if (rest.length) {
  console.log(`\n  Achtung: ${rest.length} externe Verweis(e) verbleiben:`)
  for (const u of [...new Set(rest)].slice(0, 5)) console.log(`    ${u}`)
  process.exitCode = 1
} else {
  console.log('\n  Keine externen Verweise mehr — die Datei laeuft offline.\n')
}
