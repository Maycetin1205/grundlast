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
  skill: SkillId
  prompt: string
  /** Hinweis, wie die Antwort aussehen soll. */
  inputHint: string
  /** Normalisierte korrekte Antwort (Großbuchstaben/ohne Leerzeichen). */
  answer: string
  /** Begründete Musterlösung. */
  explanation: string
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
  } else {
    normalized = trimmed.replace(/\s+/g, '').toUpperCase()
  }

  const expected = exercise.skill === 'chmod' ? exercise.answer.toLowerCase() : exercise.answer.toUpperCase()

  // Binär-Antworten dürfen mit/ohne führende Nullen stimmen.
  if (exercise.skill === 'dec2bin') {
    const stripped = normalized.replace(/^0+/, '') || '0'
    const expStripped = expected.replace(/^0+/, '') || '0'
    if (/^[01]+$/.test(normalized) && stripped === expStripped) {
      return { correct: true, normalized, message: exercise.explanation }
    }
  }

  if (normalized === expected) {
    return { correct: true, normalized, message: exercise.explanation }
  }

  return {
    correct: false,
    normalized,
    message: `Noch nicht. ${exercise.explanation}`,
  }
}

/** Liefert für einen Aufgaben-Index einen reproduzierbaren Seed. */
export function seedFor(skillIndex: number, round: number): number {
  return ((skillIndex + 1) * 2654435761 + round * 40503) >>> 0
}
