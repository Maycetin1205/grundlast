/**
 * Grundlast · Glossar — Zustand-Store
 *
 * Hält alle Glossareinträge in einer Map (id → Eintrag).
 * Initial werden die Einträge aus src/content/glossar/ geladen.
 * Lessons können zur Laufzeit weitere Einträge registrieren.
 */

import { create } from "zustand"
import type {
  GlossarEintrag,
  GlossarRegister,
  GlossarStore,
} from "./types"
import { glossarEintraege } from "../../content/glossar"

export function normalisiereGlossarId(id: string) {
  return id.trim().toLowerCase()
}

function mitNormalisierterId(eintrag: GlossarEintrag): GlossarEintrag {
  return {
    ...eintrag,
    id: normalisiereGlossarId(eintrag.id),
  }
}

const initialGlossarRegister: GlossarRegister = Object.fromEntries(
  glossarEintraege.map((eintrag) => {
    const normalisierterEintrag = mitNormalisierterId(eintrag)
    return [normalisierterEintrag.id, normalisierterEintrag]
  }),
)

export const useGlossarStore = create<GlossarStore>((set, get) => ({
  einträge: initialGlossarRegister,
  findeEintrag: (id) => get().einträge[normalisiereGlossarId(id)],
  registriereEintrag: (eintrag) => {
    const normalisierterEintrag = mitNormalisierterId(eintrag)
    set((state) => ({
      einträge: {
        ...state.einträge,
        [normalisierterEintrag.id]: normalisierterEintrag,
      },
    }))
  },
  registriereEinträge: (einträge) => {
    set((state) => {
      const nächsteEinträge = { ...state.einträge }
      for (const eintrag of einträge) {
        const normalisierterEintrag = mitNormalisierterId(eintrag)
        nächsteEinträge[normalisierterEintrag.id] = normalisierterEintrag
      }
      return { einträge: nächsteEinträge }
    })
  },
}))
