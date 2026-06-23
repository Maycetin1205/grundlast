import type { Lernfeld } from "../types"

export const grundlagen: Lernfeld = {
  slug: "grundlagen",
  title: "Grundlagen & Rechnen",
  description: "Wie ein Computer Informationen als Bits, Bytes, Zahlen und Einheiten darstellt.",
  icon: "Binary",
  color: "#818cf8",
  moduls: [
    {
      slug: "rechnerarchitektur",
      title: "Rechnerarchitektur",
      lessons: [
        { lf: 2, slug: "von-neumann", title: "Von-Neumann-Architektur", minutes: 18, importance: 5, exam: true, status: "ready" },
      ],
    },
    {
      slug: "zahlen",
      title: "Zahlen & Einheiten",
      lessons: [
        { lf: 2, slug: "bit-byte", title: "Bit & Byte - die kleinsten Einheiten", minutes: 8, importance: 5, exam: true, status: "final" },
        { lf: 2, slug: "zahlensysteme", title: "Zahlensysteme (Dual, Hex, Dezimal)", minutes: 24, importance: 5, exam: true, status: "final" },
        { lf: 2, slug: "prefixe", title: "SI- und Binärpräfixe (KB vs. KiB)", minutes: 8, importance: 5, exam: true, status: "final" },
      ],
    },
  ],
}
