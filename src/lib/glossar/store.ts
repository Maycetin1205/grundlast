/** Statischer Glossarindex. Die Einträge werden ausschließlich im Content gepflegt. */

import { glossarEintraege } from '../../content/glossar'
import type { GlossarEintrag, GlossarRegister } from './types'

export function normalisiereGlossarId(id: string) {
  return id.trim().toLowerCase()
}

function mitNormalisierterId(eintrag: GlossarEintrag): GlossarEintrag {
  return {
    ...eintrag,
    id: normalisiereGlossarId(eintrag.id),
  }
}

export const glossarRegister: GlossarRegister = Object.fromEntries(
  glossarEintraege.map((eintrag) => {
    const normalisierterEintrag = mitNormalisierterId(eintrag)
    return [normalisierterEintrag.id, normalisierterEintrag]
  }),
)

export function findeGlossarEintrag(id: string) {
  return glossarRegister[normalisiereGlossarId(id)]
}
