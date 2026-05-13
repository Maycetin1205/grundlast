import type { Lernfeld } from "../types"

export const daten: Lernfeld = {
  slug: "daten",
  title: "Daten & Datenbanken",
  description: "Tabellen, Beziehungen, Abfragen.",
  icon: "Database",
  color: "#a78bfa",
  moduls: [
    {
      slug: "er-sql",
      title: "ER-Modell & SQL",
      lessons: [
        { slug: "er-grundlagen", title: "Was ist eine Datenbank? & ER-Modell", minutes: 15, importance: 5, exam: true, status: "draft" },
        { slug: "sql-grundlagen", title: "SQL-Grundlagen (SELECT, JOIN, DML)", minutes: 18, importance: 5, exam: false, status: "draft" },
      ],
    },
    {
      slug: "daten-qualitaet",
      title: "Datenqualität & -typen",
      lessons: [
        { slug: "normalisierung", title: "Normalisierung (1NF, 2NF, 3NF)", minutes: 16, importance: 5, exam: true, status: "draft" },
        { slug: "stamm-bewegungsdaten", title: "Stamm- und Bewegungsdaten", minutes: 8, importance: 4, exam: true, status: "stub" },
      ],
    },
  ],
}
