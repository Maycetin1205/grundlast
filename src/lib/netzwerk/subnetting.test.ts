import { describe, expect, it } from 'vitest'
import {
  calculateSubnet,
  evaluateSubnetAnswer,
  getExpectedSubnetAnswer,
  numberToIp,
  parseIp,
  prefixToMaskOctets,
} from './subnetting'

describe('IPv4-Eingaben', () => {
  it('akzeptiert eine gültige IPv4-Adresse', () => {
    expect(parseIp('192.168.1.1')?.octets).toEqual([192, 168, 1, 1])
  })

  it.each(['256.0.0.1', '1.2.3', 'a.b.c.d'])('lehnt %s ab', (input) => {
    expect(parseIp(input)).toBeNull()
  })

  it('wandelt /26 in 255.255.255.192 um', () => {
    expect(prefixToMaskOctets(26)).toEqual([255, 255, 255, 192])
  })
})

describe('Subnetzberechnung', () => {
  const result = calculateSubnet('192.168.1.200', 26)!

  it('berechnet Netz, Broadcast und Hostbereich reproduzierbar', () => {
    expect(numberToIp(result.network)).toBe('192.168.1.192')
    expect(numberToIp(result.broadcast)).toBe('192.168.1.255')
    expect(numberToIp(result.firstHost)).toBe('192.168.1.193')
    expect(numberToIp(result.lastHost)).toBe('192.168.1.254')
    expect(result.usableHosts).toBe(62)
    expect(result.magicNumber).toBe(64)
  })

  it('behandelt /31 und /32 korrekt', () => {
    expect(calculateSubnet('10.0.0.0', 31)?.usableHosts).toBe(2)
    expect(calculateSubnet('10.0.0.1', 32)?.usableHosts).toBe(1)
  })

  it('lehnt ein ungültiges Präfix ab', () => {
    expect(calculateSubnet('10.0.0.1', 33)).toBeNull()
  })

  it('akzeptiert die Musterlösung und weist eine falsche Netzadresse zurück', () => {
    const expected = getExpectedSubnetAnswer(result, 'network')
    expect(evaluateSubnetAnswer(result, 'network', expected).correct).toBe(true)
    expect(evaluateSubnetAnswer(result, 'network', '192.168.1.255').correct).toBe(false)
  })
})

