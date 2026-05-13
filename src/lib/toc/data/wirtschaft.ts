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
        { slug: "kaufmaennische-rechenaufgaben", title: "Kaufmännische Rechenaufgaben (Kosten, Leasing, Skonto)", minutes: 25, importance: 5, exam: true, status: "ready" },
        { slug: "break-even", title: "Break-Even-Analyse", minutes: 12, importance: 5, exam: true, status: "draft" },
        { slug: "handelskalkulation", title: "Handelskalkulation (Vorwärts/Rückwärts)", minutes: 16, importance: 5, exam: true, status: "draft" },
        { slug: "afa-abschreibung", title: "AfA – lineare Abschreibung", minutes: 14, importance: 5, exam: true, status: "draft" },
        { slug: "variable-fixe-kosten", title: "Variable & fixe Kosten", minutes: 10, importance: 5, exam: true, status: "draft" },
        { slug: "gewinnermittlung", title: "Gewinnermittlung & Deckungsbeitrag", minutes: 12, importance: 4, exam: true, status: "draft" },
        { slug: "energiekosten", title: "Energiekosten, Wirkungsgrad & Amortisation", minutes: 16, importance: 4, exam: true, status: "draft" },
      ],
    },
    {
      slug: "entscheidung",
      title: "Wirtschaftliche Entscheidungen",
      lessons: [
        { slug: "nutzwertanalyse", title: "Nutzwertanalyse", minutes: 12, importance: 5, exam: true, status: "draft" },
        { slug: "make-or-buy", title: "Make-or-Buy-Entscheidung", minutes: 18, importance: 4, exam: true, status: "ready" },
        { slug: "angebotsvergleich", title: "Angebotsvergleich (quantitativ & qualitativ)", minutes: 18, importance: 4, exam: true, status: "ready" },
        { slug: "kauf-leasing-miete", title: "Kauf, Leasing & Miete im Vergleich", minutes: 18, importance: 4, exam: true, status: "ready" },
      ],
    },
    {
      slug: "markt",
      title: "Märkte & Finanzierung",
      lessons: [
        { slug: "marktformen", title: "Marktformen (Monopol, Polypol, Oligopol)", minutes: 10, importance: 5, exam: true, status: "draft" },
        { slug: "eigenfremdfinanzierung", title: "Eigen- & Fremdfinanzierung", minutes: 16, importance: 4, exam: true, status: "ready" },
        { slug: "aida-formel", title: "AIDA-Formel & Werbewirkung", minutes: 8, importance: 3, exam: true, status: "ready" },
      ],
    },
    {
      slug: "unternehmen",
      title: "Unternehmen & Organisation",
      lessons: [
        { slug: "organisationsformen-leitbild-nachhaltigkeit-esg", title: "Organisationsformen, Leitbild, Nachhaltigkeit & ESG", minutes: 22, importance: 4, exam: true, status: "ready" },
        { slug: "aufbauorganisation", title: "Aufbauorganisation, Vollmachten & Prokura", minutes: 14, importance: 4, exam: true, status: "ready" },
      ],
    },
  ],
}
