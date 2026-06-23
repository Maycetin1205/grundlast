// Reine Umrechnungs- und Übungslogik für das Kapitel "Zahlensysteme".
// Keine UI, keine Seiteneffekte – damit gut testbar und im Build stabil.

export type Base = 2 | 8 | 16

export const HEX_DIGITS = '0123456789ABCDEF'

export interface DivisionStep {
  /** 1-basierte Schrittnummer (Reihenfolge der Rechnung, oben → unten). */
  step: number
  dividend: number
  quotient: number
  remainder: number
  /** Rest als Ziffer im Zielsystem (bei Hex z. B. "C" statt 12). */
  digit: string
}

export interface DivisionResult {
  decimal: number
  base: Base
  steps: DivisionStep[]
  /** Ergebnis im Zielsystem (Reste von unten nach oben gelesen). */
  result: string
  /** Probe: Stellenwert-Beiträge der gesetzten Ziffern. */
  proof: { digit: string; value: number; weight: number; contribution: number }[]
}

const BASE_LABEL: Record<Base, string> = {
  2: 'Binär',
  8: 'Oktal',
  16: 'Hexadezimal',
}

export function baseLabel(base: Base): string {
  return BASE_LABEL[base]
}

/** Wandelt eine einzelne Restzahl (0–15) in ihre Ziffer im Zielsystem. */
export function remainderToDigit(remainder: number): string {
  return HEX_DIGITS[remainder] ?? String(remainder)
}

/**
 * Teilungsmethode: Dezimal → Basis 2/8/16.
 * Liefert alle Schritte plus das fertige Ergebnis (Reste von unten nach oben).
 */
export function divideToBase(decimal: number, base: Base): DivisionResult {
  const safe = Math.max(0, Math.floor(decimal))
  const steps: DivisionStep[] = []

  if (safe === 0) {
    steps.push({ step: 1, dividend: 0, quotient: 0, remainder: 0, digit: '0' })
  } else {
    let current = safe
    let step = 1
    while (current > 0) {
      const quotient = Math.floor(current / base)
      const remainder = current % base
      steps.push({
        step,
        dividend: current,
        quotient,
        remainder,
        digit: remainderToDigit(remainder),
      })
      current = quotient
      step += 1
    }
  }

  // Reste von unten nach oben → Ergebnisziffern.
  const result = steps.map((s) => s.digit).reverse().join('') || '0'

  // Probe über Stellenwerte.
  const digits = result.split('')
  const proof = digits.map((digit, index) => {
    const position = digits.length - 1 - index
    const weight = base ** position
    const value = HEX_DIGITS.indexOf(digit.toUpperCase())
    return { digit, value, weight, contribution: value * weight }
  })

  return { decimal: safe, base, steps, result, proof }
}

// ── Nibble / Hex ↔ Binär ──────────────────────────────────────────────────

export interface NibbleEntry {
  hex: string
  bits: string // 4 Zeichen, z. B. "1100"
  decimal: number
}

export const NIBBLE_TABLE: NibbleEntry[] = Array.from({ length: 16 }, (_, value) => ({
  hex: HEX_DIGITS[value],
  bits: value.toString(2).padStart(4, '0'),
  decimal: value,
}))

/** Eine Hex-Ziffer (0–F, groß/klein) → 4-Bit-Gruppe. */
export function hexDigitToBits(digit: string): string {
  const value = HEX_DIGITS.indexOf(digit.toUpperCase())
  if (value < 0) return '0000'
  return value.toString(2).padStart(4, '0')
}

/** 4-Bit-Gruppe → Hex-Ziffer. Akzeptiert auch kürzere Gruppen. */
export function bitsToHexDigit(bits: string): string {
  const clean = bits.replace(/[^01]/g, '').padStart(4, '0').slice(-4)
  const value = parseInt(clean, 2)
  return HEX_DIGITS[value] ?? '0'
}

// ── chmod / Oktal-Dateirechte ───────────────────────────────────────────────

export type PermBit = 'r' | 'w' | 'x'
export const ROLE_KEYS = ['user', 'group', 'other'] as const
export type RoleKey = (typeof ROLE_KEYS)[number]

export const ROLE_LABEL: Record<RoleKey, string> = {
  user: 'User (Eigentümer)',
  group: 'Group (Gruppe)',
  other: 'Other (alle anderen)',
}

export const PERM_VALUE: Record<PermBit, number> = { r: 4, w: 2, x: 1 }

export interface ModeRow {
  role: RoleKey
  r: boolean
  w: boolean
  x: boolean
  octalDigit: number
  symbolic: string // z. B. "rwx" oder "r-x"
}

export interface ChmodMode {
  rows: ModeRow[]
  octal: string // z. B. "755"
  symbolic: string // z. B. "rwxr-xr-x"
}

function rowSymbolic(r: boolean, w: boolean, x: boolean): string {
  return `${r ? 'r' : '-'}${w ? 'w' : '-'}${x ? 'x' : '-'}`
}

/** Baut die Mode-Struktur aus einer Bit-Matrix (User/Group/Other × r/w/x). */
export function buildMode(matrix: Record<RoleKey, { r: boolean; w: boolean; x: boolean }>): ChmodMode {
  const rows: ModeRow[] = ROLE_KEYS.map((role) => {
    const { r, w, x } = matrix[role]
    const octalDigit = (r ? 4 : 0) + (w ? 2 : 0) + (x ? 1 : 0)
    return { role, r, w, x, octalDigit, symbolic: rowSymbolic(r, w, x) }
  })
  return {
    rows,
    octal: rows.map((row) => row.octalDigit).join(''),
    symbolic: rows.map((row) => row.symbolic).join(''),
  }
}

/** Parst eine 3-stellige Oktalzahl (z. B. "755") in eine Bit-Matrix. */
export function parseOctalMode(octal: string): Record<RoleKey, { r: boolean; w: boolean; x: boolean }> {
  const clean = octal.replace(/[^0-7]/g, '').padStart(3, '0').slice(-3)
  const matrix = {} as Record<RoleKey, { r: boolean; w: boolean; x: boolean }>
  ROLE_KEYS.forEach((role, index) => {
    const digit = Number(clean[index] ?? '0')
    matrix[role] = {
      r: Boolean(digit & 4),
      w: Boolean(digit & 2),
      x: Boolean(digit & 1),
    }
  })
  return matrix
}

export function isValidOctalMode(octal: string): boolean {
  return /^[0-7]{1,3}$/.test(octal.trim())
}

// ── Deterministischer Übungsgenerator ───────────────────────────────────────
// Kein Math.random (Build-/Test-Stabilität): kleiner LCG, Seed kommt von außen.

export type SkillId = 'dec2bin' | 'bin2dec' | 'hex2dec' | 'chmod'
export type ExamSkillId = SkillId | 'hex2bin' | 'bin2hex' | 'ipv4octet'

export const SKILLS: { id: SkillId; label: string }[] = [
  { id: 'dec2bin', label: 'Dezimal → Binär' },
  { id: 'bin2dec', label: 'Binär → Dezimal' },
  { id: 'hex2dec', label: 'Hex → Dezimal' },
  { id: 'chmod', label: 'chmod lesen' },
]

function nextRandom(seed: number): { value: number; seed: number } {
  // Numerical Recipes LCG, liefert 0..1.
  const next = (seed * 1664525 + 1013904223) >>> 0
  return { value: next / 0xffffffff, seed: next }
}

function pickInRange(seed: number, min: number, max: number): { value: number; seed: number } {
  const r = nextRandom(seed)
  const span = max - min + 1
  return { value: min + Math.floor(r.value * span), seed: r.seed }
}

export interface Exercise {
  skill: ExamSkillId
  prompt: string
  /** Hinweis, wie die Antwort aussehen soll. */
  inputHint: string
  /** Normalisierte korrekte Antwort (Großbuchstaben/ohne Leerzeichen). */
  answer: string
  /** Begründete Musterlösung. */
  explanation: string
  /** Kurzer Hinweis, der bei Fehlern hilft, ohne neue Fakten zu erfinden. */
  tip?: string
  /** Quellen-/Kapitelanker, damit Feedback fachlich rückgebunden bleibt. */
  sourceRefs?: string[]
}

function chmodExplanation(octal: string, mode: ChmodMode): string {
  const parts = mode.rows.map((row) => `${row.octalDigit}=${row.symbolic}`)
  return `chmod ${octal} → ${parts.join('  ')} = ${mode.symbolic}`
}

/** Erzeugt eine Aufgabe für einen Skill aus einem Seed. */
export function makeExercise(skill: SkillId, seed: number): Exercise {
  switch (skill) {
    case 'dec2bin': {
      const { value } = pickInRange(seed, 1, 255)
      return {
        skill,
        prompt: `Wandle ${value}₁₀ in Binär um (8 Bit).`,
        inputHint: 'z. B. 10110100',
        answer: value.toString(2).padStart(8, '0'),
        explanation: `${value} ÷ 2 wiederholt, Reste von unten nach oben: ${value
          .toString(2)
          .padStart(8, '0')}₂.`,
        tip: 'Teile wiederholt durch 2. Der erste Rest ist später die rechte Stelle.',
        sourceRefs: ['Kapitel: Dezimal → Binär', 'NIST IR 8354: Place Value Notation'],
      }
    }
    case 'bin2dec': {
      const { value } = pickInRange(seed, 1, 255)
      const bits = value.toString(2).padStart(8, '0')
      const weights = bits
        .split('')
        .map((b, i) => (b === '1' ? 128 >> i : 0))
        .filter(Boolean)
      return {
        skill,
        prompt: `Wandle ${bits}₂ in Dezimal um.`,
        inputHint: 'z. B. 180',
        answer: String(value),
        explanation: `Aktive Stellen ${weights.join(' + ')} = ${value}.`,
        tip: 'Nutze die 8-Bit-Reihe 128, 64, 32, 16, 8, 4, 2, 1 und addiere nur Einsen.',
        sourceRefs: ['Kapitel: Binär → Dezimal', 'NIST IR 8354: Byte und Binärdaten'],
      }
    }
    case 'hex2dec': {
      const { value } = pickInRange(seed, 16, 255)
      const hex = value.toString(16).toUpperCase().padStart(2, '0')
      const high = Math.floor(value / 16)
      const low = value % 16
      return {
        skill,
        prompt: `Wandle ${hex}₁₆ in Dezimal um.`,
        inputHint: 'z. B. 192',
        answer: String(value),
        explanation: `${HEX_DIGITS[high]}×16 + ${HEX_DIGITS[low]}×1 = ${high * 16} + ${low} = ${value}.`,
        tip: 'Eine zweistellige Hexzahl hat links den Stellenwert 16 und rechts den Stellenwert 1.',
        sourceRefs: ['Kapitel: Hex → Dezimal', 'NIST IR 8354: Basis 16'],
      }
    }
    case 'chmod': {
      const { value } = pickInRange(seed, 0, 7 * 64 + 7 * 8 + 7)
      const octal = [Math.floor(value / 64) % 8, Math.floor(value / 8) % 8, value % 8].join('')
      const mode = buildMode(parseOctalMode(octal))
      return {
        skill,
        prompt: `Was bedeutet chmod ${octal}? Gib die Symbolschreibweise an.`,
        inputHint: 'z. B. rwxr-xr-x',
        answer: mode.symbolic,
        explanation: chmodExplanation(octal, mode),
        tip: 'Lies jede Oktalziffer einzeln: 4=r, 2=w, 1=x.',
        sourceRefs: ['Kapitel: chmod lesen', 'POSIX chmod'],
      }
    }
  }
}

export interface CheckResult {
  correct: boolean
  normalized: string
  message: string
}

/** Prüft eine Antwort gegen die Aufgabe und liefert diagnostisches Feedback. */
export function checkExercise(exercise: Exercise, raw: string): CheckResult {
  const trimmed = raw.trim()
  if (trimmed.length === 0) {
    return { correct: false, normalized: '', message: 'Noch keine Antwort eingegeben.' }
  }

  // Normalisierung je nach Skill.
  let normalized = trimmed
  if (exercise.skill === 'chmod') {
    normalized = trimmed.toLowerCase().replace(/\s+/g, '')
    if (normalized.length === 10 && normalized[0] === '-') normalized = normalized.slice(1)
  } else if (exercise.skill === 'dec2bin' || exercise.skill === 'hex2bin' || exercise.skill === 'ipv4octet') {
    normalized = trimmed
      .replace(/\s+/g, '')
      .replace(/^0b/i, '')
      .replace(/[₂₈₁₀₁₆]/g, '')
      .toUpperCase()
  } else if (exercise.skill === 'bin2hex') {
    normalized = trimmed
      .replace(/\s+/g, '')
      .replace(/^0x/i, '')
      .replace(/[₂₈₁₀₁₆]/g, '')
      .toUpperCase()
  } else {
    normalized = trimmed
      .replace(/\s+/g, '')
      .replace(/[₂₈₁₀₁₆]/g, '')
      .toUpperCase()
  }

  const expected = exercise.skill === 'chmod' ? exercise.answer.toLowerCase() : exercise.answer.toUpperCase()

  // Bei 8-Bit-Aufgaben zählen führende Nullen zur geforderten Darstellung.
  if (exercise.skill === 'dec2bin') {
    if (/^[01]{8}$/.test(normalized) && normalized === expected) {
      return { correct: true, normalized, message: exercise.explanation }
    }
  }

  if (exercise.skill === 'hex2bin') {
    if (/^[01]{8}$/.test(normalized) && normalized === expected) {
      return { correct: true, normalized, message: exercise.explanation }
    }
  }

  if (normalized === expected) {
    return { correct: true, normalized, message: exercise.explanation }
  }

  return {
    correct: false,
    normalized,
    message: `Noch nicht. ${exercise.tip ? `${exercise.tip} ` : ''}${exercise.explanation}`,
  }
}

/** Liefert für einen Aufgaben-Index einen reproduzierbaren Seed. */
export function seedFor(skillIndex: number, round: number): number {
  return ((skillIndex + 1) * 2654435761 + round * 40503) >>> 0
}

// ── Prüfungstrainer: 30 gemischte Aufgaben mit deterministischen Lösungen ──

export interface ExamExercise extends Exercise {
  id: string
  index: number
}

export const EXAM_SKILL_LABEL: Record<ExamSkillId, string> = {
  dec2bin: 'Dezimal → Binär',
  bin2dec: 'Binär → Dezimal',
  hex2dec: 'Hex → Dezimal',
  chmod: 'chmod lesen',
  hex2bin: 'Hex → Binär',
  bin2hex: 'Binär → Hex',
  ipv4octet: 'IPv4-Oktett',
}

function shuffle<T>(items: T[], seed: number): T[] {
  const result = [...items]
  let currentSeed = seed
  for (let i = result.length - 1; i > 0; i -= 1) {
    const picked = pickInRange(currentSeed, 0, i)
    currentSeed = picked.seed
    const tmp = result[i]
    result[i] = result[picked.value]
    result[picked.value] = tmp
  }
  return result
}

function binaryContributions(bits: string): string {
  const weights = bits
    .split('')
    .map((bit, index) => (bit === '1' ? 2 ** (bits.length - 1 - index) : 0))
    .filter(Boolean)
  return weights.length > 0 ? weights.join(' + ') : '0'
}

function makeHexToBin(seed: number): Exercise {
  const { value } = pickInRange(seed, 0, 255)
  const hex = value.toString(16).toUpperCase().padStart(2, '0')
  const bits = hex
    .split('')
    .map((digit) => hexDigitToBits(digit))
    .join('')
  return {
    skill: 'hex2bin',
    prompt: `Wandle ${hex}₁₆ in Binär um (8 Bit).`,
    inputHint: 'z. B. 11000000',
    answer: bits,
    explanation: `${hex
      .split('')
      .map((digit) => `${digit}=${hexDigitToBits(digit)}`)
      .join(', ')} → ${bits.slice(0, 4)} ${bits.slice(4)}.`,
    tip: 'Übersetze jede Hex-Ziffer einzeln in genau vier Bit.',
    sourceRefs: ['Kapitel: Hex ↔ Binär', 'NIST IR 8354: vier Bit pro Hex-Ziffer'],
  }
}

function makeBinToHex(seed: number): Exercise {
  const { value } = pickInRange(seed, 0, 255)
  const bits = value.toString(2).padStart(8, '0')
  const hex = value.toString(16).toUpperCase().padStart(2, '0')
  return {
    skill: 'bin2hex',
    prompt: `Wandle ${bits}₂ in Hex um.`,
    inputHint: 'z. B. C0',
    answer: hex,
    explanation: `${bits.slice(0, 4)}=${bitsToHexDigit(bits.slice(0, 4))}, ${bits.slice(4)}=${bitsToHexDigit(bits.slice(4))} → ${hex}₁₆.`,
    tip: 'Schneide von rechts in Vierergruppen. Jede Vierergruppe ist eine Hex-Ziffer.',
    sourceRefs: ['Kapitel: Hex ↔ Binär', 'NIST IR 8354: Basis 16'],
  }
}

function makeIpv4Octet(seed: number): Exercise {
  const { value } = pickInRange(seed, 0, 255)
  const bits = value.toString(2).padStart(8, '0')
  return {
    skill: 'ipv4octet',
    prompt: `Schreibe das IPv4-Oktett ${value} als 8-Bit-Binärzahl.`,
    inputHint: 'z. B. 11000000',
    answer: bits,
    explanation: `${value} = ${binaryContributions(bits)} → ${bits}₂. Ein IPv4-Oktett hat immer 8 Bit und Werte von 0 bis 255.`,
    tip: 'Auch kleine Oktette brauchen führende Nullen, bis genau acht Stellen erreicht sind.',
    sourceRefs: ['Kapitel: IPv4 und Binär', 'RFC 4632: CIDR-Präfixnotation'],
  }
}

export function makeExamExercise(skill: ExamSkillId, seed: number): Exercise {
  if (skill === 'hex2bin') return makeHexToBin(seed)
  if (skill === 'bin2hex') return makeBinToHex(seed)
  if (skill === 'ipv4octet') return makeIpv4Octet(seed)
  return makeExercise(skill, seed)
}

export function makeExamSet(seed: number, count = 30): ExamExercise[] {
  const balancedSkills: ExamSkillId[] = [
    'dec2bin',
    'bin2dec',
    'hex2dec',
    'hex2bin',
    'bin2hex',
    'chmod',
    'ipv4octet',
  ]
  const skillPool = Array.from({ length: count }, (_, index) => balancedSkills[index % balancedSkills.length])
  const shuffled = shuffle(skillPool, seed)

  return shuffled.map((skill, index) => {
    const exercise = makeExamExercise(skill, seedFor(balancedSkills.indexOf(skill), seed + index + 1))
    return {
      ...exercise,
      id: `${seed}-${index}-${skill}`,
      index: index + 1,
    }
  })
}
