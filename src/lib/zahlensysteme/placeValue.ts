export interface PlaceValueColumn {
  position: number
  weight: number
}

export interface BinaryPlaceValueAnalysis {
  input: string
  normalized: string
  padded: string
  bits: number[]
  activeWeights: number[]
  inactiveWeights: number[]
  decimalValue: number
  hexValue: string
  equation: string
}

export type BinaryInputIssue = 'empty' | 'invalid-character' | 'too-long'

export interface BinaryInputValidation {
  ok: boolean
  issue?: BinaryInputIssue
  message?: string
  why?: string
  correction?: string
  invalidCharacter?: string
  bitCount?: number
  analysis?: BinaryPlaceValueAnalysis
}

export const BINARY_8_BIT_COLUMNS: PlaceValueColumn[] = [
  128,
  64,
  32,
  16,
  8,
  4,
  2,
  1,
].map((weight, index) => ({
  weight,
  position: 7 - index,
}))

export function normalizeBinaryInput(input: string) {
  return input.trim().replace(/\s+/g, '')
}

export function analyzeBinaryPlaceValue(
  input: string,
  columns = BINARY_8_BIT_COLUMNS,
): BinaryPlaceValueAnalysis {
  const normalized = normalizeBinaryInput(input)
  const width = columns.length
  const padded = normalized.padStart(width, '0')
  const bits = padded.split('').map((bit) => Number(bit))
  const activeWeights = columns
    .filter((_, index) => bits[index] === 1)
    .map((column) => column.weight)
  const inactiveWeights = columns
    .filter((_, index) => bits[index] === 0)
    .map((column) => column.weight)
  const decimalValue = activeWeights.reduce((sum, weight) => sum + weight, 0)
  const hexWidth = Math.ceil(width / 4)

  return {
    input,
    normalized,
    padded,
    bits,
    activeWeights,
    inactiveWeights,
    decimalValue,
    hexValue: decimalValue.toString(16).toUpperCase().padStart(hexWidth, '0'),
    equation: activeWeights.length > 0 ? activeWeights.join(' + ') : '0',
  }
}

export function validateBinaryInput(
  input: string,
  columns = BINARY_8_BIT_COLUMNS,
): BinaryInputValidation {
  const normalized = normalizeBinaryInput(input)

  if (normalized.length === 0) {
    return {
      ok: false,
      issue: 'empty',
      message: 'Gib eine Binärzahl ein, zum Beispiel 101101.',
      why: 'Ohne Eingabe kann kein Stellenwert berechnet werden.',
      correction: 'Schreibe nur 0 und 1 in das Feld.',
    }
  }

  const invalidCharacter = normalized.match(/[^01]/)?.[0]
  if (invalidCharacter) {
    return {
      ok: false,
      issue: 'invalid-character',
      invalidCharacter,
      message: `Die Ziffer ${invalidCharacter} ist ungültig.`,
      why: 'Eine Binärzahl darf nur 0 und 1 enthalten.',
      correction: 'Entferne alle anderen Ziffern oder ersetze sie durch 0 oder 1.',
    }
  }

  if (normalized.length > columns.length) {
    return {
      ok: false,
      issue: 'too-long',
      bitCount: normalized.length,
      message: `Diese Zahl hat ${normalized.length} Bits.`,
      why: `Im ${columns.length}-Bit-Modus sind nur ${columns.length} Stellen erlaubt.`,
      correction: `Ein ${columns.length}-Bit-Wert reicht von ${'0'.repeat(columns.length)} bis ${'1'.repeat(columns.length)}.`,
    }
  }

  return {
    ok: true,
    analysis: analyzeBinaryPlaceValue(normalized, columns),
  }
}

export function describeBitToggle(weight: number, enabled: boolean) {
  return enabled
    ? `Du hast die ${weight}er-Stelle aktiviert. Der Wert steigt um ${weight}.`
    : `Du hast die ${weight}er-Stelle deaktiviert. Der Wert sinkt um ${weight}.`
}
