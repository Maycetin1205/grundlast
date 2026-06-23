import type { Lernfeld } from "../types"

export const wirtschaft: Lernfeld = {
  slug: "wirtschaft",
  title: "Wirtschaft & Recht",
  description: "Kalkulation, Kosten, Märkte, Finanzierung.",
  icon: "Calculator",
  color: "#34d399",
  moduls: [
    {
      slug: "kalkulation",
      title: "Kalkulation & Kosten",
      lessons: [
        { lf: 1, slug: "kaufmaennische-rechenaufgaben", title: "Kaufmännische Rechenaufgaben (Kosten, Leasing, Skonto)", minutes: 25, importance: 5, exam: true, status: "ready" },
        { lf: 1, slug: "break-even", title: "Break-Even-Analyse", minutes: 12, importance: 5, exam: true, status: "draft" },
        { lf: 1, slug: "handelskalkulation", title: "Handelskalkulation (Vorwärts/Rückwärts)", minutes: 16, importance: 5, exam: true, status: "draft" },
        { lf: 1, slug: "afa-abschreibung", title: "AfA – lineare Abschreibung", minutes: 14, importance: 5, exam: true, status: "draft" },
        { lf: 1, slug: "variable-fixe-kosten", title: "Variable & fixe Kosten", minutes: 10, importance: 5, exam: true, status: "draft" },
        { lf: 1, slug: "gewinnermittlung", title: "Gewinnermittlung & Deckungsbeitrag", minutes: 12, importance: 4, exam: true, status: "draft" },
        { lf: 1, slug: "energiekosten", title: "Energiekosten, Wirkungsgrad & Amortisation", minutes: 16, importance: 4, exam: true, status: "draft" },
      ],
    },
    {
      slug: "entscheidung",
      title: "Wirtschaftliche Entscheidungen",
      lessons: [
        { lf: 1, slug: "nutzwertanalyse", title: "Nutzwertanalyse", minutes: 12, importance: 5, exam: true, status: "draft" },
        { lf: 1, slug: "make-or-buy", title: "Make-or-Buy-Entscheidung", minutes: 18, importance: 4, exam: true, status: "ready" },
        { lf: 1, slug: "angebotsvergleich", title: "Angebotsvergleich (quantitativ & qualitativ)", minutes: 18, importance: 4, exam: true, status: "ready" },
        { lf: 1, slug: "kauf-leasing-miete", title: "Kauf, Leasing & Miete im Vergleich", minutes: 18, importance: 4, exam: true, status: "ready" },
      ],
    },
    {
      slug: "markt",
      title: "Märkte & Finanzierung",
      lessons: [
        { lf: 1, slug: "marktformen", title: "Marktformen (Monopol, Polypol, Oligopol)", minutes: 10, importance: 5, exam: true, status: "draft" },
        { lf: 1, slug: "eigenfremdfinanzierung", title: "Eigen- & Fremdfinanzierung", minutes: 16, importance: 4, exam: true, status: "ready" },
        { lf: 1, slug: "aida-formel", title: "AIDA-Formel & Werbewirkung", minutes: 8, importance: 3, exam: true, status: "ready" },
      ],
    },
    {
      slug: "unternehmen",
      title: "Unternehmen & Organisation",
      lessons: [
        { lf: 1, slug: "organisationsformen-leitbild-nachhaltigkeit-esg", title: "Organisationsformen, Leitbild, Nachhaltigkeit & ESG", minutes: 22, importance: 4, exam: true, status: "ready" },
        { lf: 1, slug: "aufbauorganisation", title: "Aufbauorganisation, Vollmachten & Prokura", minutes: 14, importance: 4, exam: true, status: "ready" },
      ],
    },
  ],
}
