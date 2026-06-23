import type { Lernfeld } from "../types"

export const qualitaet: Lernfeld = {
  slug: "qualitaet",
  title: "Qualitätsmanagement",
  description: "PDCA, EFQM, ISO-Normen und Softwarequalität.",
  icon: "Award",
  color: "#8b5cf6",
  moduls: [
    {
      slug: "qm-methoden",
      title: "QM-Methoden & Normen",
      lessons: [
        { lf: 6, slug: "pdca-zyklus", title: "PDCA-Zyklus", minutes: 10, importance: 4, exam: true, status: "stub" },
        { lf: 6, slug: "efqm-modell", title: "EFQM-Modell", minutes: 10, importance: 3, exam: false, status: "stub" },
        { lf: 6, slug: "iso-9000", title: "ISO 9000–9004", minutes: 10, importance: 4, exam: true, status: "stub" },
        { lf: 6, slug: "iso-25010", title: "ISO 25010 – Softwarequalität", minutes: 12, importance: 4, exam: true, status: "stub" },
      ],
    },
  ],
}
