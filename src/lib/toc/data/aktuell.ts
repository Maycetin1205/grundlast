import type { Lernfeld } from "../types"

export const aktuell: Lernfeld = {
  slug: "aktuell",
  title: "Aktuelle Themen",
  description: "KI-Grundlagen, Cloud-Konzepte und Lizenzmodelle.",
  icon: "Sparkles",
  color: "#ec4899",
  moduls: [
    {
      slug: "neue-themen",
      title: "Neue & aktuelle Themen",
      lessons: [
        { slug: "ki-grundlagen", title: "KI-Grundlagen (ML, neuronale Netze)", minutes: 20, importance: 5, exam: true, status: "ready" },
        { slug: "cloud-konzepte", title: "Cloud-Konzepte (IaaS, PaaS, SaaS)", minutes: 12, importance: 4, exam: true, status: "stub" },
        { slug: "lizenzmodelle", title: "Lizenzmodelle (Open Source, proprietär, SaaS)", minutes: 14, importance: 5, exam: true, status: "ready" },
      ],
    },
  ],
}
