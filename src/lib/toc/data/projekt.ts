import type { Lernfeld } from "../types"

export const projekt: Lernfeld = {
  slug: "projekt",
  title: "Projekt & Prozesse",
  description: "Planen, steuern, dokumentieren.",
  icon: "GanttChart",
  color: "#fbbf24",
  moduls: [
    {
      slug: "service-management",
      title: "Service & Support",
      lessons: [
        { lf: 6, slug: "serviceanfragen-support-level", title: "Serviceanfragen, Ticketsystem & Support-Level", minutes: 18, importance: 5, exam: true, status: "ready" },
        { lf: 6, slug: "fehlermanagement-stoerungsannahme", title: "Fehlermanagement & Störungsannahme", minutes: 18, importance: 5, exam: true, status: "ready" },
        { lf: 6, slug: "bedarfsanalyse-feedback", title: "Bedarfsanalyse, Kommunikation & Feedback", minutes: 30, importance: 5, exam: true, status: "ready" },
        { lf: 6, slug: "mitarbeitermotivation-teamphasen-change", title: "Mitarbeitermotivation, Teamphasen und Change", minutes: 28, importance: 5, exam: true, status: "ready" },
        { lf: 6, slug: "schulung-einweisung-key-user", title: "Schulung, Einweisung, Key User & Multiplikatoren", minutes: 24, importance: 5, exam: true, status: "ready" },
        { lf: 6, slug: "schulz-von-thun", title: "4-Seiten-Modell nach Schulz von Thun", minutes: 14, importance: 5, exam: true, status: "ready" },
      ],
    },
    {
      slug: "projektplanung",
      title: "Projektplanung",
      lessons: [
        { lf: 6, slug: "netzplan", title: "Netzplantechnik (FAZ/FEZ/SAZ/SEZ)", minutes: 18, importance: 5, exam: true, status: "draft" },
        { lf: 6, slug: "gantt-diagramm", title: "Gantt-Diagramm — Balkenplan", minutes: 12, importance: 5, exam: true, status: "ready" },
        { lf: 6, slug: "vorgehensmodelle", title: "Vorgehensmodelle (Wasserfall, V-Modell, Agil)", minutes: 18, importance: 5, exam: true, status: "ready" },
        { lf: 6, slug: "bpmn", title: "BPMN – Prozesse modellieren", minutes: 14, importance: 5, exam: true, status: "draft" },
        { lf: 6, slug: "scrum", title: "Scrum – Accountabilities, Events, Artefakte", minutes: 14, importance: 4, exam: true, status: "ready" },
      ],
    },
    {
      slug: "dokumente",
      title: "Projektdokumente & Abschluss",
      lessons: [
        { lf: 6, slug: "lastenheft-pflichtenheft", title: "Lastenheft & Pflichtenheft", minutes: 8, importance: 4, exam: true, status: "draft" },
        { lf: 6, slug: "machbarkeitsanalyse", title: "Machbarkeitsanalyse", minutes: 10, importance: 4, exam: true, status: "stub" },
        { lf: 6, slug: "projektubergabe", title: "Projektübergabe & Abnahme", minutes: 8, importance: 3, exam: false, status: "stub" },
      ],
    },
  ],
}
