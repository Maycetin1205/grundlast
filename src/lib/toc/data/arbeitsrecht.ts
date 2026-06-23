import type { Lernfeld } from "../types"

export const arbeitsrecht: Lernfeld = {
  slug: "arbeitsrecht",
  title: "Arbeitsrecht & Ausbildung",
  description: "BBiG, Ausbildungsvertrag, Arbeitnehmerrechte.",
  icon: "Briefcase",
  color: "#84cc16",
  moduls: [
    {
      slug: "ausbildung",
      title: "Ausbildung & Recht",
      lessons: [
        { lf: 1, slug: "bbig-ausbildungsvertrag", title: "BBiG & Ausbildungsvertrag", minutes: 12, importance: 4, exam: false, status: "stub" },
        { lf: 1, slug: "arbeitnehmerrechte", title: "Arbeitnehmerrechte & Kündigungsschutz", minutes: 12, importance: 3, exam: false, status: "stub" },
      ],
    },
  ],
}
