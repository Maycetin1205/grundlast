import type { Lernfeld } from "../types"

export const vertragsrecht: Lernfeld = {
  slug: "vertragsrecht",
  title: "Vertragsrecht",
  description: "Gewährleistung, Mängelrüge, Vertragsstörungen im Handelskauf.",
  icon: "Scale",
  color: "#f97316",
  moduls: [
    {
      slug: "vertraege",
      title: "Verträge & Störungen",
      lessons: [
        { lf: 1, slug: "vertragsarten", title: "Vertragsarten: Kaufvertrag, Dienstvertrag & Werkvertrag", minutes: 20, importance: 4, exam: true, status: "ready" },
        { lf: 1, slug: "rechnung-zahlungsziel-aufbewahrungsfristen", title: "Rechnung, Zahlungsziel & Aufbewahrungsfristen", minutes: 22, importance: 5, exam: true, status: "ready" },
        { lf: 1, slug: "gewaehrleistung", title: "Gewährleistung & Garantie", minutes: 18, importance: 5, exam: true, status: "ready" },
        { lf: 1, slug: "maengelruege", title: "Mängelrüge im Handelskauf", minutes: 10, importance: 5, exam: true, status: "ready" },
        { lf: 1, slug: "vertragsstoerungen", title: "Vertragsstörungen (Verzug, Mängel, Unmöglichkeit)", minutes: 14, importance: 5, exam: true, status: "ready" },
        { lf: 1, slug: "zweiseitiger-handelskauf", title: "Zweiseitiger Handelskauf", minutes: 10, importance: 4, exam: true, status: "stub" },
      ],
    },
  ],
}
