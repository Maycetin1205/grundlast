import type { Lernfeld } from "../types"

export const webmedia: Lernfeld = {
  slug: "webmedia",
  title: "Web & Multimedia",
  description: "Responsive Design, Wireframes, Softwareergonomie, Medienkompression.",
  icon: "Globe",
  color: "#06b6d4",
  moduls: [
    {
      slug: "webdesign",
      title: "Webdesign & Ergonomie",
      lessons: [
        { lf: 5, slug: "website-statisch-dynamisch", title: "Statische vs. dynamische Webseiten", minutes: 12, importance: 5, exam: true, status: "ready" },
        { lf: 5, slug: "responsive-webdesign", title: "Responsive Webdesign", minutes: 10, importance: 4, exam: true, status: "stub" },
        { lf: 5, slug: "mockup-wireframe", title: "Mockup & Wireframe", minutes: 8, importance: 4, exam: true, status: "stub" },
      ],
    },
    {
      slug: "medien",
      title: "Mediendaten & Kompression",
      lessons: [
        { lf: 5, slug: "audio-kompression", title: "Audio, MP3 & Datenkompression", minutes: 12, importance: 4, exam: true, status: "stub" },
      ],
    },
  ],
}
