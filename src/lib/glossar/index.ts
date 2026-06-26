/**
 * Grundlast · Glossar — Public API
 */

export type {
  GlossarEintrag,
  GlossarKapitel,
  GlossarRegister,
} from "./types"

export {
  findeGlossarEintrag,
  glossarRegister,
  normalisiereGlossarId,
} from "./store"
