/**
 * Grundlast · Glossar — Typdefinitionen
 *
 * Datentypen für Glossareinträge.
 * Werden von den Daten in src/content/glossar/ und vom Store verwendet.
 */

export interface GlossarKapitel {
  titel: string
  href: string
}

export interface GlossarEintrag {
  id: string
  begriff: string
  kurzdefinition: string
  definition: string[]
  /** Optionaler Deeplink zu einer Lektion. Fehlt, wenn (noch) keine Lektion existiert. */
  kapitel?: GlossarKapitel
}

export type GlossarRegister = Record<string, GlossarEintrag>

export interface GlossarStore {
  einträge: GlossarRegister
  findeEintrag: (id: string) => GlossarEintrag | undefined
  registriereEintrag: (eintrag: GlossarEintrag) => void
  registriereEinträge: (einträge: GlossarEintrag[]) => void
}
