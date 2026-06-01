import type { Lernfeld } from "../types"

export const grundlagen: Lernfeld = {
  slug: "grundlagen",
  title: "Grundlagen & Rechnen",
  description: "Wie ein Computer denkt: Bits, Bytes, Zahlensysteme, Logik.",
  icon: "Binary",
  color: "#818cf8",
  moduls: [
    {
      slug: "rechnerarchitektur",
      title: "Rechnerarchitektur",
      lessons: [
        { slug: "von-neumann", title: "Von-Neumann-Architektur", minutes: 18, importance: 5, exam: true, status: "ready" },
      ],
    },
    {
      slug: "zahlen",
      title: "Zahlen & Einheiten",
      lessons: [
        { slug: "bit-byte", title: "Bit & Byte – die kleinsten Einheiten", minutes: 8, importance: 5, exam: true, status: "ready" },
        { slug: "zahlensysteme", title: "Zahlensysteme (Dual, Hex, Dezimal)", minutes: 24, importance: 5, exam: true, status: "final" },
        { slug: "prefixe", title: "SI- und Binärpräfixe (KB vs. KiB)", minutes: 8, importance: 5, exam: true, status: "ready" },
      ],
    },
    {
      slug: "logikgatter",
      title: "Logik & Gatter",
      lessons: [
        { slug: "logikgatter", title: "Boolesche Algebra & Logikgatter", minutes: 14, importance: 4, exam: true, status: "stub" },
      ],
    },
  ],
}
