import { describe, it, expect } from 'vitest'
import {
  divideToBase,
  hexDigitToBits,
  bitsToHexDigit,
  buildMode,
  parseOctalMode,
  makeExercise,
  checkExercise,
  makeExamSet,
} from './conversions'

describe('divideToBase — Teilungsmethode', () => {
  it('26 dezimal => 11010 binaer', () => {
    expect(divideToBase(26, 2).result).toBe('11010')
  })

  it('255 dezimal => FF hex', () => {
    expect(divideToBase(255, 16).result).toBe('FF')
  })

  it('0 => "0" (Sonderfall)', () => {
    expect(divideToBase(0, 2).result).toBe('0')
  })

  it('Probe: Summe der Stellenwert-Beitraege == Ausgangszahl', () => {
    const r = divideToBase(200, 16)
    const sum = r.proof.reduce((acc, p) => acc + p.contribution, 0)
    expect(sum).toBe(200)
  })
})

describe('Hex <-> Binaer', () => {
  it('A => 1010', () => expect(hexDigitToBits('A')).toBe('1010'))
  it('kleinbuchstabe f => 1111', () => expect(hexDigitToBits('f')).toBe('1111'))
  it('round-trip A -> bits -> A', () => expect(bitsToHexDigit(hexDigitToBits('A'))).toBe('A'))
})

describe('chmod / Oktal-Dateirechte', () => {
  it('755 => rwxr-xr-x', () => {
    const mode = buildMode(parseOctalMode('755'))
    expect(mode.symbolic).toBe('rwxr-xr-x')
    expect(mode.octal).toBe('755')
  })

  it('644 => rw-r--r--', () => {
    expect(buildMode(parseOctalMode('644')).symbolic).toBe('rw-r--r--')
  })
})

describe('Uebungsgenerator — deterministisch + selbstkonsistent', () => {
  it('gleicher Seed => identischer Aufgabensatz', () => {
    expect(makeExamSet(4711)).toEqual(makeExamSet(4711))
  })

  it('Exam-Set hat 30 Aufgaben mit fortlaufendem Index', () => {
    const set = makeExamSet(99)
    expect(set).toHaveLength(30)
    expect(set[0].index).toBe(1)
    expect(set[29].index).toBe(30)
  })

  it('die generierte Musterloesung gilt als korrekt', () => {
    const ex = makeExercise('bin2dec', 12345)
    expect(checkExercise(ex, ex.answer).correct).toBe(true)
  })

  it('eine falsche Antwort wird abgelehnt', () => {
    const ex = makeExercise('hex2dec', 222)
    expect(checkExercise(ex, 'definitiv-falsch').correct).toBe(false)
  })
})
