import type { GlossarEintrag } from "../../lib/glossar/types"

export const vertragsrecht: GlossarEintrag[] = [
  {
      id: 'kaufvertrag',
      begriff: 'Kaufvertrag',
      kurzdefinition: 'Vertrag über Übergabe, Eigentumsverschaffung und Zahlung des Kaufpreises.',
      definition: [
        'Beim Kaufvertrag verpflichtet sich der Verkaeufer, die Sache zu übergeben und dem Kaeufer Eigentum zu verschaffen. Der Kaeufer zahlt den vereinbarten Kaufpreis und nimmt die Sache ab.',
        'In AP1-Aufgaben erkennst du ihn an Lieferung, Kaufpreis, Eigentumsübergang und einer konkreten Sache. Das unterscheidet ihn von Dienstvertrag und Werkvertrag.',
      ],
      kapitel: {
        titel: 'Vertragsarten: Kaufvertrag, Dienstvertrag und Werkvertrag',
        href: '/lernen/vertragsrecht/vertraege/vertragsarten',
      },
    },
  {
      id: 'dienstvertrag',
      begriff: 'Dienstvertrag',
      kurzdefinition: 'Vertrag über fachgerechte Dienste gegen Verguetung, ohne automatisch garantierten Erfolg.',
      definition: [
        'Beim Dienstvertrag schuldet der Dienstverpflichtete die versprochenen Dienste. Der andere Teil zahlt die vereinbarte Verguetung.',
        'Pruefungsrelevant ist die Abgrenzung zum Werkvertrag: Beim Dienstvertrag steht das fachgerechte Taetigwerden im Vordergrund, nicht ein abnahmefaehiger Erfolg.',
      ],
      kapitel: {
        titel: 'Vertragsarten: Kaufvertrag, Dienstvertrag und Werkvertrag',
        href: '/lernen/vertragsrecht/vertraege/vertragsarten',
      },
    },
  {
      id: 'werkvertrag',
      begriff: 'Werkvertrag',
      kurzdefinition: 'Vertrag über die Herstellung eines Werks oder Erfolgs gegen Verguetung.',
      definition: [
        'Beim Werkvertrag schuldet der Unternehmer nicht nur Taetigkeit, sondern einen vereinbarten Erfolg. Das kann eine reparierte Sache, eine Installation oder ein nach Anforderungen erstelltes Ergebnis sein.',
        'Typisch sind pruefbare Anforderungen, Maengelrechte und die Abnahme durch den Besteller.',
      ],
      kapitel: {
        titel: 'Vertragsarten: Kaufvertrag, Dienstvertrag und Werkvertrag',
        href: '/lernen/vertragsrecht/vertraege/vertragsarten',
      },
    },
  {
      id: 'leistungspflicht',
      begriff: 'Leistungspflicht',
      kurzdefinition: 'Vertraglich geschuldete Handlung oder Leistung einer Vertragspartei.',
      definition: [
        'Eine Leistungspflicht beschreibt, was eine Vertragspartei aufgrund des Vertrags tun, liefern, herstellen oder zahlen muss.',
        'Bei Vertragsarten hilft die Frage nach der Leistungspflicht: Sache und Eigentum beim Kaufvertrag, Dienste beim Dienstvertrag, Erfolg beim Werkvertrag.',
      ],
      kapitel: {
        titel: 'Vertragsarten: Kaufvertrag, Dienstvertrag und Werkvertrag',
        href: '/lernen/vertragsrecht/vertraege/vertragsarten',
      },
    },
  {
      id: 'erfolgspflicht',
      begriff: 'Erfolgspflicht',
      kurzdefinition: 'Pflicht, ein vereinbartes Ergebnis herbeizufuehren.',
      definition: [
        'Erfolgspflicht bedeutet, dass nicht nur ein Bemuehen geschuldet ist, sondern ein konkret vereinbartes Ergebnis erreicht werden muss.',
        'Sie ist das wichtigste Signal für den Werkvertrag, etwa bei Reparatur, Installation, Individualentwicklung oder einem abnahmefaehigen Projektstand.',
      ],
      kapitel: {
        titel: 'Vertragsarten: Kaufvertrag, Dienstvertrag und Werkvertrag',
        href: '/lernen/vertragsrecht/vertraege/vertragsarten',
      },
    },
  {
      id: 'abnahme',
      begriff: 'Abnahme',
      kurzdefinition: 'Bestaetigung, dass ein Werk im Wesentlichen vertragsgemäß hergestellt wurde.',
      definition: [
        'Abnahme bedeutet, dass der Besteller ein hergestelltes Werk als im Wesentlichen vertragsgemäß akzeptiert. Sie ist besonders beim Werkvertrag wichtig.',
        'Im IT-Projekt zeigt sie oft den Uebergang von Umsetzung zu Abschluss: Testkriterien pruefen, Restpunkte dokumentieren und die Verguetung beziehungsweise Projektübergabe ausloesen.',
      ],
      kapitel: {
        titel: 'Vertragsarten: Kaufvertrag, Dienstvertrag und Werkvertrag',
        href: '/lernen/vertragsrecht/vertraege/vertragsarten',
      },
    },
  {
      id: 'rechnung',
      begriff: 'Rechnung',
      kurzdefinition: 'Dokument, mit dem über eine Lieferung oder sonstige Leistung abgerechnet wird.',
      definition: [
        'Eine Rechnung ist jedes Dokument, mit dem ein Unternehmen über eine Lieferung oder sonstige Leistung abrechnet. Die Bezeichnung ist zweitrangig; entscheidend ist die Abrechnungsfunktion.',
        'Für ordnungsgemäße Rechnungen sind Pflichtangaben wichtig, zum Beispiel Parteien, Steuernummer oder USt-IdNr., Rechnungsdatum, Rechnungsnummer, Leistung, Leistungszeitpunkt, Entgelt und Umsatzsteuer.',
      ],
      kapitel: {
        titel: 'Rechnung, Zahlungsziel und Aufbewahrungsfristen',
        href: '/lernen/vertragsrecht/vertraege/rechnung-zahlungsziel-aufbewahrungsfristen',
      },
    },
  {
      id: 'e-rechnung',
      begriff: 'E-Rechnung',
      kurzdefinition: 'Strukturierte elektronische Rechnung, die elektronisch verarbeitet werden kann.',
      definition: [
        'Eine E-Rechnung ist seit 2025 im deutschen B2B-Kontext grundsaetzlich eine Rechnung in einem strukturierten elektronischen Format, das ausgestellt, übermittelt, empfangen und elektronisch verarbeitet werden kann.',
        'Ein einfaches PDF per E-Mail ist keine E-Rechnung im neuen Sinn, sondern eine sonstige Rechnung. Typische Formate sind XRechnung oder passende ZUGFeRD-Profile.',
      ],
      kapitel: {
        titel: 'Rechnung, Zahlungsziel und Aufbewahrungsfristen',
        href: '/lernen/vertragsrecht/vertraege/rechnung-zahlungsziel-aufbewahrungsfristen',
      },
    },
  {
      id: 'zahlungsziel',
      begriff: 'Zahlungsziel',
      kurzdefinition: 'Vereinbarter Termin oder Zeitraum, bis zu dem eine Rechnung bezahlt werden soll.',
      definition: [
        'Das Zahlungsziel beschreibt, wann eine Forderung bezahlt werden soll, zum Beispiel sofort, bis zu einem Datum oder innerhalb von 30 Tagen.',
        'Bei Formulierungen wie "2 % Skonto innerhalb 10 Tagen, 30 Tage netto" darf der Skontoabzug nur genutzt werden, wenn die Zahlung innerhalb der Skontofrist erfolgt.',
      ],
      kapitel: {
        titel: 'Rechnung, Zahlungsziel und Aufbewahrungsfristen',
        href: '/lernen/vertragsrecht/vertraege/rechnung-zahlungsziel-aufbewahrungsfristen',
      },
    },
  {
      id: 'zahlungsverzug',
      begriff: 'Zahlungsverzug',
      kurzdefinition: 'Verspaetete Zahlung einer faelligen Forderung mit möglichen Verzugsfolgen.',
      definition: [
        'Zahlungsverzug tritt ein, wenn eine faellige Entgeltforderung nicht rechtzeitig bezahlt wird und die gesetzlichen Voraussetzungen erfuellt sind, zum Beispiel Mahnung nach Faelligkeit oder ein kalendermässig bestimmter Zahlungstermin.',
        'Bei Entgeltforderungen gibt es ausserdem die 30-Tage-Regel nach Faelligkeit und Zugang der Rechnung. Gegenüber Verbrauchern greift sie nur bei besonderem Hinweis in der Rechnung.',
      ],
      kapitel: {
        titel: 'Rechnung, Zahlungsziel und Aufbewahrungsfristen',
        href: '/lernen/vertragsrecht/vertraege/rechnung-zahlungsziel-aufbewahrungsfristen',
      },
    },
  {
      id: 'aufbewahrungsfrist',
      begriff: 'Aufbewahrungsfrist',
      kurzdefinition: 'Zeitraum, in dem Geschäftsunterlagen geordnet und lesbar aufzubewahren sind.',
      definition: [
        'Die Aufbewahrungsfrist legt fest, wie lange ein Unternehmen Unterlagen wie Rechnungen, Buchungsbelege, Handelsbriefe oder Jahresabschluesse geordnet aufbewahren muss.',
        'Die Frist beginnt in der Regel mit dem Schluss des Kalenderjahres. Rechnungen und Buchungsbelege sind aktuell regelmaessig 8 Jahre aufzubewahren, Handels- und Geschaeftsbriefe 6 Jahre, Jahresabschluesse und Buecher 10 Jahre.',
      ],
      kapitel: {
        titel: 'Rechnung, Zahlungsziel und Aufbewahrungsfristen',
        href: '/lernen/vertragsrecht/vertraege/rechnung-zahlungsziel-aufbewahrungsfristen',
      },
    },
  {
      id: 'buchungsbeleg',
      begriff: 'Buchungsbeleg',
      kurzdefinition: 'Nachweis für einen Geschäftsvorfall, der Grundlage einer Buchung ist.',
      definition: [
        'Ein Buchungsbeleg dokumentiert einen Geschaeftsvorfall so, dass er in der Buchhaltung nachvollziehbar gebucht werden kann.',
        'Typische Buchungsbelege sind Eingangsrechnungen, Ausgangsrechnungen, Quittungen, Zahlungsbelege oder Gutschriften. Für sie gilt aktuell regelmaessig eine Aufbewahrungsfrist von 8 Jahren.',
      ],
      kapitel: {
        titel: 'Rechnung, Zahlungsziel und Aufbewahrungsfristen',
        href: '/lernen/vertragsrecht/vertraege/rechnung-zahlungsziel-aufbewahrungsfristen',
      },
    },
]
