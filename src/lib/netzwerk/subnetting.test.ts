import { describe, it, expect } from 'vitest'
import {
  parseIp,
  prefixToMaskOctets,
  numberToIp,
  calculateSubnet,
  getExpectedSubnetAnswer,
  evaluateSubnetAnswer,
} from './subnetting'

describe('parseIp', () => {
  it('akzeptiert gueltige IPv4', () => {
    expect(parseIp('192.168.1.1')?.octets).toEqual([192, 168, 1, 1])
  })
  it('lehnt Oktett > 255 ab', () => expect(parseIp('256.0.0.1')).toBeNull())
  it('lehnt zu wenige Oktette ab', () => expect(parseIp('1.2.3')).toBeNull())
  it('lehnt nicht-numerisch ab', () => expect(parseIp('a.b.c.d')).toBeNull())
})

describe('prefixToMaskOctets', () => {
  it('/26 => 255.255.255.192', () => {
    expect(prefixToMaskOctets(26)).toEqual([255, 255, 255, 192])
  })
  it('/24 => 255.255.255.0', () => {
    expect(prefixToMaskOctets(24)).toEqual([255, 255, 255, 0])
  })
})

describe('calculateSubnet — /26 mit Magic Number', () => {
  const r = calculateSubnet('192.168.1.200', 26)!

  it('Netzadresse .192', () => expect(numberToIp(r.network)).toBe('192.168.1.192'))
  it('Broadcast .255', () => expect(numberToIp(r.broadcast)).toBe('192.168.1.255'))
  it('erster Host .193', () => expect(numberToIp(r.firstHost)).toBe('192.168.1.193'))
  it('letzter Host .254', () => expect(numberToIp(r.lastHost)).toBe('192.168.1.254'))
  it('62 nutzbare Hosts', () => expect(r.usableHosts).toBe(62))
  it('Magic Number 64', () => expect(r.magicNumber).toBe(64))
})

describe('calculateSubnet — Sonderfaelle', () => {
  it('/24 hat keine Magic Number (Oktettgrenze)', () => {
    const r = calculateSubnet('10.0.0.5', 24)!
    expect(r.magicNumber).toBeNull()
    expect(r.usableHosts).toBe(254)
  })
  it('/31 ist Punkt-zu-Punkt mit 2 Adressen', () => {
    const r = calculateSubnet('10.0.0.0', 31)!
    expect(r.usableHosts).toBe(2)
    expect(r.firstHost).toBe(r.network)
    expect(r.lastHost).toBe(r.broadcast)
  })
  it('/32 ist eine Einzeladresse', () => {
    const r = calculateSubnet('10.0.0.1', 32)!
    expect(r.usableHosts).toBe(1)
  })
  it('ungueltiges Praefix => null', () => {
    expect(calculateSubnet('10.0.0.1', 33)).toBeNull()
  })
})

describe('Antwort-Auswertung', () => {
  const r = calculateSubnet('192.168.1.200', 26)!

  it('korrekte Netzadresse wird akzeptiert', () => {
    const expected = getExpectedSubnetAnswer(r, 'network')
    expect(evaluateSubnetAnswer(r, 'network', expected).correct).toBe(true)
  })
  it('Broadcast als Netzadresse wird gezielt korrigiert', () => {
    const fb = evaluateSubnetAnswer(r, 'network', '192.168.1.255')
    expect(fb.correct).toBe(false)
    expect(fb.message.length).toBeGreaterThan(0)
  })
})
