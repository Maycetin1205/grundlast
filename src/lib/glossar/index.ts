/**
 * Grundlast · Glossar — Public API
 */

export type {
  GlossarEintrag,
  GlossarKapitel,
  GlossarRegister,
  GlossarStore,
} from "./types"

export {
  useGlossarStore,
  normalisiereGlossarId,
} from "./store"
