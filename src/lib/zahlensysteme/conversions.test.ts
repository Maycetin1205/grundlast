import { describe, expect, it } from 'vitest'
import {
  bitsToHexDigit,
  buildMode,
  checkExercise,
  divideToBase,
  hexDigitToBits,
  makeExamSet,
  makeExercise,
  parseOctalMode,
} from './conversions'

describe('Stellenwert- und Teilungsmethode', () => {
  it.each([
    [26, 2, '11010'],
    [255, 16, 'FF'],
    [0, 2, '0'],
  ])('%i zur Basis %i ergibt %s', (value, base, expected) => {
    expect(divideToBase(value, base).result).toBe(expected)
  })

  it('rekonstruiert den Ausgangswert aus den Stellenwerten', () => {
    const result = divideToBase(200, 16)
    expect(result.proof.reduce((sum, item) => sum + item.contribution, 0)).toBe(200)
  })
})

describe('Hexadezimal und Linux-Rechte', () => {
  it('übersetzt Hex-Ziffern bitgenau', () => {
    expect(hexDigitToBits('A')).toBe('1010')
    expect(bitsToHexDigit(hexDigitToBits('f'))).toBe('F')
  })

  it.each([
    ['755', 'rwxr-xr-x'],
    ['644', 'rw-r--r--'],
  ])('wandelt chmod %s in %s um', (octal, symbolic) => {
    expect(buildMode(parseOctalMode(octal)).symbolic).toBe(symbolic)
  })
})

describe('Aufgabengenerator', () => {
  it('ist bei gleichem Seed deterministisch', () => {
    expect(makeExamSet(4711)).toEqual(makeExamSet(4711))
  })

  it('erzeugt 30 fortlaufend nummerierte Aufgaben', () => {
    const set = makeExamSet(99)
    expect(set).toHaveLength(30)
    expect(set[0].index).toBe(1)
    expect(set[29].index).toBe(30)
  })

  it('akzeptiert die eigene Musterlösung und verwirft eine falsche Antwort', () => {
    const exercise = makeExercise('bin2dec', 12345)
    expect(checkExercise(exercise, exercise.answer).correct).toBe(true)
    expect(checkExercise(exercise, 'definitiv-falsch').correct).toBe(false)
  })
})

