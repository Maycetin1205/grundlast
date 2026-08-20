/**
 * Rechenpruefung — verifiziert die Zahlenwerte in den Rechenkapiteln.
 *
 * Zweck: Rechenfehler in Lernkapiteln sind fuer Lernende teurer als jeder
 * andere Fehler, weil ein falscher Zwischenwert sich durch alle Folgeschritte
 * zieht. Beim Korrekturlesen findet man sie praktisch nie.
 *
 * Das Skript prueft zweierlei:
 *   1. Rechnet die Aufgabe eigenstaendig nach (`ist`) und vergleicht mit dem
 *      Wert, den das Kapitel behauptet (`soll`).
 *   2. Prueft, dass der Wert im Kapiteltext auch wirklich so dasteht (`text`).
 *      Damit faellt auf, wenn jemand eine Zahl im Text aendert, ohne die
 *      Rechnung anzupassen — und umgekehrt.
 *
 * Aufruf:  node scripts/rechenpruefung.mjs [--lesson=<slug>] [--verbose]
 */

import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const lessonsDir = path.join(root, 'src/content/lessons')
const verbose = process.argv.includes('--verbose')
const lessonArg = process.argv.find((a) => a.startsWith('--lesson='))
const nurLesson = lessonArg?.split('=')[1]

/** kaufmaennisch runden: 2 Nachkommastellen, halbe Cent aufwaerts */
const r2 = (x) => Math.round((x + Number.EPSILON) * 100) / 100

const pruefungen = [
  {
    lesson: 'handelskalkulation',
    titel: 'Vorwaertskalkulation Laptop, LEP 800 EUR',
    faelle: [
      ['Rabatt 10 % auf LEP', () => r2(800 * 0.1), 80.0, '80,00'],
      ['Zieleinkaufspreis', () => r2(800 - 80), 720.0, '720,00'],
      ['Skonto 2 % auf ZEP', () => r2(720 * 0.02), 14.4, '14,40'],
      ['Bareinkaufspreis', () => r2(720 - 14.4), 705.6, '705,60'],
      ['Bezugspreis (+30 EUR)', () => r2(705.6 + 30), 735.6, '735,60'],
      ['Handlungskosten 15 %', () => r2(735.6 * 0.15), 110.34, '110,34'],
      ['Selbstkosten', () => r2(735.6 + 110.34), 845.94, '845,94'],
      ['Gewinn 20 %', () => r2(845.94 * 0.2), 169.19, '169,19'],
      ['Barverkaufspreis', () => r2(845.94 + 169.19), 1015.13, '1.015,13'],
      ['/ (1-0,02) Kundenskonto', () => r2(1015.13 / 0.98), 1035.85, '1.035,85'],
      ['/ (1-0,05) Kundenrabatt', () => r2(1035.85 / 0.95), 1090.37, '1.090,37'],
      ['Skonto-Aufschlag', () => r2(1035.85 - 1015.13), 20.72, '20,72'],
      ['Rabatt-Aufschlag', () => r2(1090.37 - 1035.85), 54.52, '54,52'],
      ['USt 19 %', () => r2(1090.37 * 0.19), 207.17, '207,17'],
      ['Bruttoverkaufspreis', () => r2(1090.37 + 207.17), 1297.54, '1.297,54'],
    ],
  },
  {
    lesson: 'handelskalkulation',
    titel: 'Rueckwaertskalkulation, Brutto-VK 595 EUR',
    faelle: [
      ['Netto-VK = 595 / 1,19', () => r2(595 / 1.19), 500.0, '500,00'],
      ['Barverkaufspreis = x 0,95', () => r2(500 * 0.95), 475.0, '475,00'],
      ['Selbstkosten = / 1,10', () => r2(475 / 1.1), 431.82, '431,82'],
      ['Bezugspreis = / 1,20', () => r2(431.82 / 1.2), 359.85, '359,85'],
    ],
  },
  {
    lesson: 'afa-abschreibung',
    titel: 'Lineare AfA',
    faelle: [
      ['5 Server a 4.000 EUR', () => 5 * 4000, 20000, '20.000'],
      ['AfA = 20.000 / 4 Jahre', () => 20000 / 4, 5000, '5.000'],
      ['Buchwert nach 2 Jahren', () => 20000 - 5000 * 2, 10000, '10.000'],
      ['Buchwert nach 4 Jahren', () => 20000 - 5000 * 4, 0, null],
      ['Basis PC = 1.800 - 200', () => 1800 - 200, 1600, '1.600'],
      ['AfA = 1.600 / 3 Jahre', () => r2(1600 / 3), 533.33, '533,33'],
    ],
  },
  {
    lesson: 'raid-systeme',
    titel: 'Nutzbare Kapazitaet',
    faelle: [
      ['RAID 1, 2 x 2 TB', () => 2, 2, null],
      ['RAID 5, (4-1) x 2 TB', () => (4 - 1) * 2, 6, '6 TB'],
      ['RAID 5, Rohkapazitaet 4 x 2 TB', () => 4 * 2, 8, '8 TB'],
      ['RAID 5, Overhead in %', () => Math.round(((8 - 6) / 8) * 100), 25, '25 %'],
      ['RAID 6, (6-2) x 4 TB', () => (6 - 2) * 4, 16, '16 TB'],
      ['RAID 5, 4 x 1 TB', () => (4 - 1) * 1, 3, '3 TB'],
    ],
  },
  {
    lesson: 'break-even',
    titel: 'Break-even-Menge',
    faelle: [
      ['db = 40 - 10', () => 40 - 10, 30, '30 '],
      ['x_BE = 12.000 / 30', () => 12000 / 30, 400, '400'],
      ['U_BE = 400 x 40', () => 400 * 40, 16000, '16.000'],
      ['Probe: Gewinn bei x_BE ist 0', () => 400 * 40 - (12000 + 400 * 10), 0, null],
    ],
  },
  {
    lesson: 'variable-fixe-kosten',
    titel: 'Gesamtkostenfunktion',
    faelle: [
      ['K_ges bei 0 Stueck', () => 10000 + 0 * 5, 10000, '10.000'],
      ['K_ges bei 1.000 Stueck', () => 10000 + 1000 * 5, 15000, '15.000'],
      ['K_ges bei 2.000 Stueck', () => 10000 + 2000 * 5, 20000, '20.000'],
      ['K_fix = 2.000 + 5.000', () => 2000 + 5000, 7000, '7.000'],
      ['k_var = 8 + 0,50', () => 8 + 0.5, 8.5, '8,50'],
      ['K_ges bei 500 Stueck', () => 7000 + 500 * 8.5, 11250, '11.250'],
    ],
  },
  {
    lesson: 'nutzwertanalyse',
    titel: 'Gewichtete Nutzwerte',
    faelle: [
      ['Summe Gewichtungen', () => 40 + 30 + 20 + 10, 100, '100 %'],
      ['Laptop A', () => r2(0.4 * 8 + 0.3 * 9 + 0.2 * 7 + 0.1 * 6), 7.9, '7,90'],
      ['Laptop B', () => r2(0.4 * 9 + 0.3 * 7 + 0.2 * 8 + 0.1 * 7), 8.0, '8,00'],
      ['Laptop C', () => r2(0.4 * 7 + 0.3 * 10 + 0.2 * 6 + 0.1 * 9), 7.9, '7,90'],
      ['A und C exakt gleichauf', () => r2(0.4 * 1 + 0.3 * -1 + 0.2 * 1 + 0.1 * -3), 0, null],
      ['Anbieter X', () => r2(0.5 * 9 + 0.3 * 6 + 0.2 * 7), 7.7, '7,70'],
      ['Anbieter Y', () => r2(0.5 * 6 + 0.3 * 9 + 0.2 * 8), 7.3, '7,30'],
    ],
  },
  {
    lesson: 'energiekosten',
    titel: 'Serververgleich und Netzteiltausch',
    faelle: [
      ['Stunden pro Jahr 24 x 365', () => 24 * 365, 8760, '8760'],
      ['E_alt = 0,5 kW x 8760 h', () => 0.5 * 8760, 4380, '4380'],
      ['E_neu = 0,3 kW x 8760 h', () => 0.3 * 8760, 2628, '2628'],
      ['Ersparnis kWh', () => 4380 - 2628, 1752, '1752'],
      ['Kostenersparnis x 0,30 EUR', () => r2(1752 * 0.3), 525.6, '525,60'],
      ['t = 8 h x 22 Tage', () => 8 * 22, 176, '176'],
      ['P_in,alt = 450 / 0,85', () => r2(450 / 0.85), 529.41, '529,41'],
      ['P_in,neu = 450 / 0,94', () => r2(450 / 0.94), 478.72, '478,72'],
      ['Delta P', () => r2(529.41 - 478.72), 50.69, '50,69'],
      ['Delta E je PC x 176 h', () => r2((50.69 / 1000) * 176), 8.92, '8,92'],
      ['Delta E fuer 450 PCs', () => r2(8.92 * 450), 4014, '4014'],
      ['Delta K x 0,45 EUR/kWh', () => r2(4014 * 0.45), 1806.3, '1806,30'],
      ['Amortisation in Monaten', () => Math.round((52000 / 1806.3) * 10) / 10, 28.8, '28,8'],
      ['Amortisation in Jahren', () => Math.round((28.8 / 12) * 10) / 10, 2.4, '2,4'],
    ],
  },
  {
    lesson: 'datenrate-berechnung',
    titel: 'Uebertragungszeiten',
    faelle: [
      ['100 Mbit/s / 8', () => 100 / 8, 12.5, '12,5'],
      ['2 GB dezimal in MB', () => 2 * 1000, 2000, '2000'],
      ['Zeit = 2000 / 12,5', () => 2000 / 12.5, 160, '160'],
      ['Gegenprobe 16.000 Mbit / 100', () => (2 * 8 * 1000) / 100, 160, '160'],
      ['100 Mbit/s x 0,80', () => 100 * 0.8, 80, '80'],
      ['200 Mbit/s x 0,80', () => 200 * 0.8, 160, '160'],
      ['160 Mbit/s / 8', () => 160 / 8, 20, '20'],
      ['600 GB in MB', () => 600 * 1000, 600000, '600.000'],
      ['600.000 / 20', () => 600000 / 20, 30000, '30.000'],
      ['30.000 s / 3600', () => Math.round((30000 / 3600) * 100) / 100, 8.33, '8,33'],
    ],
  },
  {
    lesson: 'datenvolumen-berechnung',
    titel: 'Binaerpraefixe nach IEC 80000-13',
    faelle: [
      ['1 KiB in Byte', () => 2 ** 10, 1024, '1.024'],
      ['1 MiB in Byte', () => 2 ** 20, 1048576, '1.048.576'],
      ['1 GiB in Byte', () => 2 ** 30, 1073741824, '1.073.741.824'],
      ['KiB groesser als KB in %', () => Math.round((2 ** 10 / 1e3 - 1) * 1000) / 10, 2.4, '2,4'],
      ['MiB groesser als MB in %', () => Math.round((2 ** 20 / 1e6 - 1) * 1000) / 10, 4.9, '4,9'],
      ['GiB groesser als GB in %', () => Math.round((2 ** 30 / 1e9 - 1) * 1000) / 10, 7.4, '7,4'],
      ['TiB groesser als TB in %', () => Math.round((2 ** 40 / 1e12 - 1) * 1000) / 10, 10.0, '10,0'],
      ['1 TB angezeigt als GiB', () => Math.round(1e12 / 2 ** 30), 931, '931'],
    ],
  },
  {
    lesson: 'mtbf-mttf',
    titel: 'MTBF in Jahre umrechnen',
    faelle: [
      ['Stunden pro Jahr', () => 24 * 365, 8760, '8.760'],
      ['87.600 h / 8.760 h', () => 87600 / 8760, 10, '10 Jahre'],
    ],
  },
  {
    lesson: 'gewinnermittlung',
    titel: 'Gewinn und Deckungsbeitrag',
    faelle: [
      ['Umsatz 2.000 x 150', () => 2000 * 150, 300000, '300.000'],
      ['Variable Gesamtkosten', () => 2000 * 90, 180000, '180.000'],
      ['Gesamtkosten', () => 80000 + 180000, 260000, '260.000'],
      ['Gewinn', () => 300000 - 260000, 40000, '40.000'],
      ['db = 80 - 50', () => 80 - 50, 30, '30 '],
      ['DB = 30 x 600', () => 30 * 600, 18000, '18.000'],
      ['Gewinn = 18.000 - 12.000', () => 18000 - 12000, 6000, '6.000'],
    ],
  },
  {
    lesson: 'eigenfremdfinanzierung',
    titel: 'Eigenkapitalquote und Zinslast',
    faelle: [
      ['Gesamtkapital vorher', () => 70000 + 130000, 200000, '200.000'],
      ['A: Fremdkapital', () => 130000 + 50000, 180000, '180.000'],
      ['A: Gesamtkapital', () => 200000 + 50000, 250000, '250.000'],
      ['A: EK-Quote in %', () => Math.round((70000 / 250000) * 100), 28, '28 %'],
      ['A: Jahreszins 6 %', () => 50000 * 0.06, 3000, '3.000'],
      ['B: Eigenkapital', () => 70000 + 20000, 90000, '90.000'],
      ['B: Fremdkapital', () => 130000 + 30000, 160000, '160.000'],
      ['B: EK-Quote in %', () => Math.round((90000 / 250000) * 100), 36, '36 %'],
      ['B: Jahreszins 6 %', () => 30000 * 0.06, 1800, '1.800'],
      ['Zinsdifferenz A - B', () => 3000 - 1800, 1200, '1.200'],
      ['EK-Quote 9.000/24.000', () => (9000 / 24000) * 100, 37.5, '37,5'],
      ['Fremdkapital 24.000-9.000', () => 24000 - 9000, 15000, '15.000'],
      ['FK-Quote 15.000/24.000', () => (15000 / 24000) * 100, 62.5, '62,5'],
      ['Zins 15.000 x 0,05', () => 15000 * 0.05, 750, '750'],
    ],
  },
  {
    lesson: 'kaufmaennische-rechenaufgaben',
    titel: 'Kauf vs. Miete vs. Mietkauf ueber 4 Jahre',
    faelle: [
      ['Seiten gesamt 4 x 12.000', () => 4 * 12000, 48000, '48.000'],
      ['A: Fixkosten', () => 1800 + 4 * 80, 2120, '2.120'],
      ['A: variable Kosten', () => r2(48000 * 0.03), 1440, '1.440'],
      ['A: Gesamt', () => 2120 + 1440, 3560, '3.560'],
      ['B: Fixkosten', () => 48 * 45, 2160, '2.160'],
      ['B: variable Kosten', () => r2(48000 * 0.02), 960, '960'],
      ['B: Gesamt', () => 2160 + 960, 3120, '3.120'],
      ['C: Fixkosten', () => 48 * 40, 1920, '1.920'],
      ['C: Gesamt', () => 1920 + 1440, 3360, '3.360'],
      ['Miete unter Kauf', () => 3560 - 3120, 440, '440'],
      ['Miete unter Mietkauf', () => 3360 - 3120, 240, '240'],
      // Achtung Einheit: Fixkosten gelten fuer 4 Jahre, also ist x eine Gesamtmenge.
      ['Kritische Menge gesamt', () => Math.round((2160 - 2120) / (0.03 - 0.02)), 4000, '4.000 Seiten'],
      ['Kritische Menge pro Jahr', () => Math.round((2160 - 2120) / (0.03 - 0.02) / 4), 1000, '1.000 Seiten pro Jahr'],
    ],
  },
  {
    lesson: 'bit-byte',
    titel: 'Umrechnung GB in Bit',
    faelle: [
      ['4 GB dezimal in Byte', () => 4 * 1e9, 4e9, '4.000.000.000'],
      ['in Bit', () => 4 * 1e9 * 8, 3.2e10, '32.000.000.000'],
    ],
  },
]

const fehler = []
let geprueft = 0
let textTreffer = 0
const gesehen = new Map()

for (const block of pruefungen) {
  if (nurLesson && block.lesson !== nurLesson) continue

  const datei = path.join(lessonsDir, `${block.lesson}.mdx`)
  if (!existsSync(datei)) {
    fehler.push(`${block.lesson}: Kapiteldatei fehlt`)
    continue
  }
  if (!gesehen.has(block.lesson)) gesehen.set(block.lesson, readFileSync(datei, 'utf8'))
  const inhalt = gesehen.get(block.lesson)

  if (verbose) console.log(`\n  ${block.lesson} — ${block.titel}`)

  for (const [was, fn, soll, text] of block.faelle) {
    geprueft += 1
    const ist = fn()
    const stimmt = Math.abs(ist - soll) < 0.005

    if (!stimmt) {
      fehler.push(`${block.lesson} · ${was}: nachgerechnet ${ist}, Kapitel behauptet ${soll}`)
    } else if (text && !inhalt.includes(text)) {
      fehler.push(`${block.lesson} · ${was}: Wert "${text}" steht nicht mehr im Kapiteltext`)
    } else {
      if (text) textTreffer += 1
      if (verbose) console.log(`     ok   ${was} = ${ist}`)
    }
  }
}

console.log(`\nRechenpruefung: ${geprueft} Aussagen aus ${gesehen.size} Kapiteln nachgerechnet,`)
console.log(`davon ${textTreffer} zusaetzlich gegen den Kapiteltext abgeglichen.`)

if (fehler.length) {
  console.error(`\n${fehler.length} Abweichung(en):`)
  for (const f of fehler) console.error(`  - ${f}`)
  process.exit(1)
}

console.log('Alle Werte stimmen.\n')
