import { describe, it, expect } from 'vitest'
import { manifest, manifestByLf } from './index'
import { lessonManifestSchema } from './schema'

describe('Manifest (generiert, Schritt 3)', () => {
  it('validiert vollstaendig gegen das Zod-Schema', () => {
    const result = lessonManifestSchema.safeParse(manifest)
    if (!result.success) {
      // Bei Fehler die ersten Probleme sichtbar machen.
      throw new Error(JSON.stringify(result.error.issues.slice(0, 5), null, 2))
    }
    expect(result.success).toBe(true)
  })

  it('enthaelt alle 100 migrierten Lektionen', () => {
    expect(manifest.length).toBe(100)
  })

  it('jede Lektion hat genau ein gueltiges Lernfeld (1-9)', () => {
    for (const m of manifest) {
      expect(m.lf).toBeGreaterThanOrEqual(1)
      expect(m.lf).toBeLessThanOrEqual(9)
    }
  })

  it('Slugs sind eindeutig', () => {
    const slugs = manifest.map((m) => m.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('manifestByLf deckt exakt alle Eintraege ab', () => {
    const sum = Object.values(manifestByLf).reduce((n, arr) => n + arr.length, 0)
    expect(sum).toBe(manifest.length)
  })
})
