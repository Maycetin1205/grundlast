import type { Lernfeld } from "../types"

export const software: Lernfeld = {
  slug: "software",
  title: "Softwareentwicklung",
  description: "Algorithmen, Paradigmen, UML.",
  icon: "Code2",
  color: "#60a5fa",
  moduls: [
    {
      slug: "logik",
      title: "Logik & Pseudocode",
      lessons: [
        { slug: "pseudocode-einstieg", title: "Pseudocode, Algorithmen & Kontrollstrukturen", minutes: 30, importance: 5, exam: true, status: "ready" },
        { slug: "uml-aktivitaet", title: "UML-Aktivitätsdiagramm", minutes: 10, importance: 5, exam: true, status: "draft" },
      ],
    },
    {
      slug: "uml-diagramme",
      title: "UML-Diagramme",
      lessons: [
        { slug: "use-case-diagramm", title: "UML-Use-Case-Diagramm", minutes: 18, importance: 5, exam: true, status: "ready" },
        { slug: "uml-beziehungen", title: "UML-Beziehungen (Komposition, Aggregation)", minutes: 10, importance: 3, exam: false, status: "stub" },
      ],
    },
    {
      slug: "paradigmen",
      title: "Programmierkonzepte",
      lessons: [
        { slug: "programmierparadigmen", title: "Programmierparadigmen (OOP, prozedural, funktional)", minutes: 12, importance: 4, exam: true, status: "stub" },
        { slug: "libraries-frameworks", title: "Libraries vs. Frameworks", minutes: 8, importance: 3, exam: false, status: "stub" },
        { slug: "oop-basics", title: "OOP-Grundlagen (Klassen, Objekte, Vererbung)", minutes: 18, importance: 4, exam: false, status: "stub" },
      ],
    },
    {
      slug: "moderne-entwicklung",
      title: "Moderne Entwicklung",
      lessons: [
        { slug: "git-versionsverwaltung", title: "Git & Versionsverwaltung", minutes: 14, importance: 4, exam: false, status: "stub" },
        { slug: "teststrategien", title: "Teststrategien (White-Box, Black-Box, Unit-Tests)", minutes: 14, importance: 4, exam: true, status: "stub" },
      ],
    },
  ],
}
