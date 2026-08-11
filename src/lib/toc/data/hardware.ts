import type { Lernfeld } from "../types"

export const hardware: Lernfeld = {
  slug: "hardware",
  title: "Hardware & Systeme",
  description: "Die Maschine hinter der Software.",
  icon: "Cpu",
  color: "#94a3b8",
  moduls: [
    {
      slug: "komponenten",
      title: "PC-Komponenten",
      lessons: [
        { slug: "cpu-ram-speicher", title: "CPU, RAM und Speicher", minutes: 18, importance: 5, exam: true, status: "ready" },
      ],
    },
    {
      slug: "schnittstellen",
      title: "Schnittstellen & Peripherie",
      lessons: [
        { slug: "hardware-schnittstellen", title: "Hardware, Schnittstellen & Peripherie auswählen", minutes: 28, importance: 5, exam: true, status: "ready" },
        { slug: "homeoffice-ergonomie", title: "Homeoffice, Telearbeit & Ergonomie", minutes: 14, importance: 5, exam: true, status: "ready" },
      ],
    },
    {
      slug: "speichersysteme",
      title: "Speicher & Verfügbarkeit",
      lessons: [
        { slug: "raid-systeme", title: "RAID-Systeme (0, 1, 5, 6, 10)", minutes: 16, importance: 5, exam: true, status: "draft" },
        { slug: "usv-systeme", title: "USV-Systeme", minutes: 14, importance: 4, exam: true, status: "draft" },
      ],
    },
    {
      slug: "bilddaten",
      title: "Bild- & Scandaten rechnen",
      lessons: [
        { slug: "scan-bilddaten", title: "Scan- & Bilddaten rechnen (DPI, Farbtiefe)", minutes: 14, importance: 4, exam: true, status: "draft" },
      ],
    },
  ],
}
