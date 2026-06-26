/** Statischer Glossarindex. Die Einträge werden ausschließlich im Content gepflegt. */

import { glossarEintraege } from '../../content/glossar'
import type { GlossarEintrag, GlossarRegister } from './types'

export function normalisiereGlossarId(id: string) {
  // Umlaute/ß auf ASCII abbilden, damit <Term id="integrität"> und der
  // Glossar-Eintrag "integritaet" zuverlässig zusammenfinden – egal, in welcher
  // Schreibweise eine (KI-generierte) Lektion die ID notiert.
  return id
    .trim()
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
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
