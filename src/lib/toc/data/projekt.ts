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
        { slug: "serviceanfragen-support-level", title: "Serviceanfragen, Ticketsystem & Support-Level", minutes: 18, importance: 5, exam: true, status: "ready" },
        { slug: "fehlermanagement-stoerungsannahme", title: "Fehlermanagement & Störungsannahme", minutes: 18, importance: 5, exam: true, status: "ready" },
        { slug: "bedarfsanalyse-feedback", title: "Bedarfsanalyse, Kommunikation & Feedback", minutes: 30, importance: 5, exam: true, status: "ready" },
        { slug: "mitarbeitermotivation-teamphasen-change", title: "Mitarbeitermotivation, Teamphasen und Change", minutes: 28, importance: 5, exam: true, status: "ready" },
        { slug: "schulung-einweisung-key-user", title: "Schulung, Einweisung, Key User & Multiplikatoren", minutes: 24, importance: 5, exam: true, status: "ready" },
        { slug: "schulz-von-thun", title: "4-Seiten-Modell nach Schulz von Thun", minutes: 14, importance: 5, exam: true, status: "ready" },
      ],
    },
    {
      slug: "projektplanung",
      title: "Projektplanung",
      lessons: [
        { slug: "netzplan", title: "Netzplantechnik (FAZ/FEZ/SAZ/SEZ)", minutes: 18, importance: 5, exam: true, status: "draft" },
        { slug: "gantt-diagramm", title: "Gantt-Diagramm — Balkenplan", minutes: 12, importance: 5, exam: true, status: "ready" },
        { slug: "vorgehensmodelle", title: "Vorgehensmodelle (Wasserfall, V-Modell, Agil)", minutes: 18, importance: 5, exam: true, status: "ready" },
        { slug: "bpmn", title: "BPMN – Prozesse modellieren", minutes: 14, importance: 5, exam: true, status: "draft" },
        { slug: "scrum", title: "Scrum – Accountabilities, Events, Artefakte", minutes: 14, importance: 4, exam: true, status: "ready" },
      ],
    },
    {
      slug: "dokumente",
      title: "Projektdokumente & Abschluss",
      lessons: [
        { slug: "lastenheft-pflichtenheft", title: "Lastenheft & Pflichtenheft", minutes: 8, importance: 4, exam: true, status: "draft" },
        { slug: "machbarkeitsanalyse", title: "Machbarkeitsanalyse", minutes: 10, importance: 4, exam: true, status: "stub" },
        { slug: "projektubergabe", title: "Projektübergabe & Abnahme", minutes: 8, importance: 3, exam: false, status: "stub" },
      ],
    },
  ],
}
