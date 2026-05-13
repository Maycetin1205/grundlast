import type { GlossarEintrag } from "../../lib/glossar/types"

export const wirtschaft: GlossarEintrag[] = [
  {
      id: 'break-even',
      begriff: 'Break-Even-Punkt',
      kurzdefinition: 'Der Break-Even-Punkt ist die Absatzmenge, bei der Kosten und Erloese gleich hoch sind.',
      definition: [
        'Am Break-Even-Punkt entsteht weder Gewinn noch Verlust. Alle fixen und variablen Kosten sind durch die Erloese gedeckt.',
        'In Aufgaben berechnest du ihn haeufig über Fixkosten geteilt durch den Deckungsbeitrag pro Stueck.',
      ],
      kapitel: {
        titel: 'Break-Even-Analyse',
        href: '/lernen/wirtschaft/kalkulation/break-even',
      },
    },
  {
      id: 'deckungsbeitrag',
      begriff: 'Deckungsbeitrag',
      kurzdefinition: 'Der Deckungsbeitrag zeigt, wie viel ein Produkt zur Deckung der Fixkosten beitraegt.',
      definition: [
        'Der Deckungsbeitrag pro Stueck ist der Verkaufspreis minus variable Kosten pro Stueck.',
        'Ist die Summe der Deckungsbeitraege größer als die Fixkosten, entsteht Gewinn.',
      ],
      kapitel: {
        titel: 'Gewinnermittlung & Deckungsbeitrag',
        href: '/lernen/wirtschaft/kalkulation/gewinnermittlung',
      },
    },
  {
      id: 'wirkungsgrad',
      begriff: 'Wirkungsgrad',
      kurzdefinition: 'Der Wirkungsgrad beschreibt das Verhaeltnis von nutzbarer Leistung zu aufgenommener Leistung.',
      definition: [
        'Der Wirkungsgrad zeigt, welcher Anteil der aufgenommenen Energie als Nutzleistung ankommt. Der Rest geht zum Beispiel als Waerme verloren.',
        'Bei Netzteilen gilt: Je hoeher der Wirkungsgrad, desto weniger Leistung muss aus der Steckdose aufgenommen werden, um dieselbe IT-Last zu versorgen.',
      ],
      kapitel: {
        titel: 'Energiekosten, Wirkungsgrad & Amortisation',
        href: '/lernen/wirtschaft/kalkulation/energiekosten',
      },
    },
  {
      id: 'leasing',
      begriff: 'Leasing',
      kurzdefinition: 'Leasing ist die Nutzungsüberlassung einer Sache gegen wiederkehrende Raten.',
      definition: [
        'Leasing ist zivilrechtlich ein atypischer Mietvertrag. Der Leasinggeber bleibt Eigentuemer, der Leasingnehmer nutzt das Objekt gegen Raten.',
        'Bilanziell landet das Objekt meist beim Leasinggeber; nur bei bestimmten Konstellationen (z. B. voller Barwert der Raten) wird es dem Leasingnehmer zugerechnet.',
      ],
      kapitel: {
        titel: 'Kaufmaennische Rechenaufgaben',
        href: '/lernen/wirtschaft/kalkulation/kaufmaennische-rechenaufgaben',
      },
    },
  {
      id: 'mietvertrag',
      begriff: 'Mietvertrag',
      kurzdefinition: 'Vertrag über zeitweise Gebrauchsüberlassung gegen Miete ohne Eigentumsübergang.',
      definition: [
        'Beim Mietvertrag überlaesst der Vermieter dem Mieter die Sache waehrend der Mietzeit zum Gebrauch. Der Mieter zahlt die vereinbarte Miete.',
        'In Beschaffungsaufgaben passt Miete besonders zu kurzfristiger, unsicherer oder projektbezogener Nutzung, bei der Flexibilitaet wichtiger ist als Eigentum.',
      ],
      kapitel: {
        titel: 'Kauf, Leasing & Miete im Vergleich',
        href: '/lernen/wirtschaft/entscheidung/kauf-leasing-miete',
      },
    },
  {
      id: 'liquiditaet',
      begriff: 'Liquiditaet',
      kurzdefinition: 'Faehigkeit, faellige Zahlungen rechtzeitig leisten zu können.',
      definition: [
        'Liquiditaet beschreibt, ob ein Unternehmen genug verfuegbare Zahlungsmittel hat, um Rechnungen, Loehne, Raten und sonstige Verpflichtungen fristgerecht zu bezahlen.',
        'Kauf bindet oft sofort viel Liquiditaet. Leasing und Miete verteilen Zahlungen über die Laufzeit und können dadurch kurzfristig entlasten.',
      ],
      kapitel: {
        titel: 'Kauf, Leasing & Miete im Vergleich',
        href: '/lernen/wirtschaft/entscheidung/kauf-leasing-miete',
      },
    },
  {
      id: 'finanzierung',
      begriff: 'Finanzierung',
      kurzdefinition: 'Beschaffung und Ordnung von Kapital für Investitionen und laufende Zahlungen.',
      definition: [
        'Finanzierung beschreibt, wie ein Unternehmen Kapital bereitstellt, strukturiert und zurueckfuehrt, damit Investitionen, Betrieb und Wachstum bezahlt werden können.',
        'In AP1-Aufgaben geht es meist darum, Finanzierungsquellen zu unterscheiden, Anteile oder Zinsen zu berechnen und eine Entscheidung wirtschaftlich zu begruenden.',
      ],
      kapitel: {
        titel: 'Eigen- & Fremdfinanzierung',
        href: '/lernen/wirtschaft/markt/eigenfremdfinanzierung',
      },
    },
  {
      id: 'eigenfinanzierung',
      begriff: 'Eigenfinanzierung',
      kurzdefinition: 'Finanzierung mit Eigenkapital, etwa durch Einlagen, Beteiligungen oder einbehaltene Gewinne.',
      definition: [
        'Eigenfinanzierung beschafft Eigenkapital. Kapitalgeber sind Eigentuemer oder Gesellschafter, die unternehmerisches Risiko tragen und keinen festen Tilgungsanspruch wie eine Bank haben.',
        'Typische Formen sind einbehaltene Gewinne, Gesellschaftereinlagen oder neue Beteiligungen. Vorteile sind Stabilitaet und weniger feste Zinszahlungen; Nachteile sind Kapitalbindung und mögliche Mitsprache.',
      ],
      kapitel: {
        titel: 'Eigen- & Fremdfinanzierung',
        href: '/lernen/wirtschaft/markt/eigenfremdfinanzierung',
      },
    },
  {
      id: 'fremdfinanzierung',
      begriff: 'Fremdfinanzierung',
      kurzdefinition: 'Finanzierung mit Fremdkapital, etwa durch Darlehen, Lieferantenkredit oder Anleihe.',
      definition: [
        'Fremdfinanzierung beschafft Kapital von Glaeubigern. Das Kapital wird meist nur für eine begrenzte Zeit bereitgestellt und muss nach Vertrag zurueckgezahlt werden.',
        'Typische Merkmale sind Laufzeit, Zins, Tilgung, Sicherheiten und Bonitaetspruefung. Der Glaeubiger wird dadurch nicht automatisch Mit-Eigentuemer.',
      ],
      kapitel: {
        titel: 'Eigen- & Fremdfinanzierung',
        href: '/lernen/wirtschaft/markt/eigenfremdfinanzierung',
      },
    },
  {
      id: 'eigenkapital',
      begriff: 'Eigenkapital',
      kurzdefinition: 'Kapital der Eigentuemer, das Verluste mittraegt und nicht wie ein Darlehen fest zu tilgen ist.',
      definition: [
        'Eigenkapital steht dem Unternehmen grundsaetzlich ohne festen Rueckzahlungsplan zur Verfuegung. Es kann durch Einlagen, Beteiligungen oder einbehaltene Gewinne entstehen.',
        'Mehr Eigenkapital kann die finanzielle Stabilitaet verbessern, bindet aber Mittel und kann Gewinn- oder Mitspracherechte ausloesen.',
      ],
      kapitel: {
        titel: 'Eigen- & Fremdfinanzierung',
        href: '/lernen/wirtschaft/markt/eigenfremdfinanzierung',
      },
    },
  {
      id: 'fremdkapital',
      begriff: 'Fremdkapital',
      kurzdefinition: 'Kapital von Glaeubigern, das vertraglich zurueckzuzahlen ist und häufig Zinsen kostet.',
      definition: [
        'Fremdkapital umfasst Schulden und Verpflichtungen gegenüber Glaeubigern, zum Beispiel Bankdarlehen, Lieferantenkredite, Anleihen oder sonstige Verbindlichkeiten.',
        'Es kann Investitionen ermöglichen, erhoeht aber feste Zahlungsverpflichtungen und verschlechtert bei zu hohem Anteil die finanzielle Beweglichkeit.',
      ],
      kapitel: {
        titel: 'Eigen- & Fremdfinanzierung',
        href: '/lernen/wirtschaft/markt/eigenfremdfinanzierung',
      },
    },
  {
      id: 'darlehen',
      begriff: 'Darlehen',
      kurzdefinition: 'Geldbetrag, der vertraglich bereitgestellt und später zurueckgezahlt wird.',
      definition: [
        'Bei einem Darlehen stellt der Darlehensgeber einen Geldbetrag zur Verfuegung. Der Darlehensnehmer schuldet Rueckzahlung und bei Vereinbarung Zinsen.',
        'In AP1-Aufgaben ist ein Darlehen ein typisches Beispiel für Fremdfinanzierung. Wichtig sind Darlehensbetrag, Zinssatz, Laufzeit und Tilgung.',
      ],
      kapitel: {
        titel: 'Eigen- & Fremdfinanzierung',
        href: '/lernen/wirtschaft/markt/eigenfremdfinanzierung',
      },
    },
  {
      id: 'zins',
      begriff: 'Zins',
      kurzdefinition: 'Preis für die zeitweise Überlassung von Kapital.',
      definition: [
        'Zins ist das Entgelt dafür, dass Kapital für eine bestimmte Zeit genutzt werden darf. Bei Darlehen wird er meist als Prozentsatz pro Jahr angegeben.',
        'In einfachen AP1-Rechnungen gilt oft: Jahreszins = Darlehensbetrag x Zinssatz. Bei Monats- oder Laufzeitangaben müssen die Einheiten angepasst werden.',
      ],
      kapitel: {
        titel: 'Eigen- & Fremdfinanzierung',
        href: '/lernen/wirtschaft/markt/eigenfremdfinanzierung',
      },
    },
  {
      id: 'tilgung',
      begriff: 'Tilgung',
      kurzdefinition: 'Rueckzahlung des aufgenommenen Darlehensbetrags.',
      definition: [
        'Tilgung reduziert die Restschuld eines Darlehens. Sie ist nicht dasselbe wie Zins: Zins ist der Preis für das geliehene Kapital, Tilgung ist die Rueckzahlung des Kapitals selbst.',
        'Bei Ratenkrediten steckt in der Zahlung haeufig beides: ein Zinsanteil und ein Tilgungsanteil.',
      ],
      kapitel: {
        titel: 'Eigen- & Fremdfinanzierung',
        href: '/lernen/wirtschaft/markt/eigenfremdfinanzierung',
      },
    },
  {
      id: 'eigenkapitalquote',
      begriff: 'Eigenkapitalquote',
      kurzdefinition: 'Anteil des Eigenkapitals am Gesamtkapital eines Unternehmens.',
      definition: [
        'Die Eigenkapitalquote wird berechnet als Eigenkapital geteilt durch Gesamtkapital mal 100. Sie zeigt, wie stark ein Unternehmen durch eigenes Kapital finanziert ist.',
        'Eine hoehere Eigenkapitalquote kann die Krisenfestigkeit und Bonitaet verbessern. Sie ersetzt aber keine Liquiditaetspruefung, weil Eigenkapital nicht automatisch Bargeld bedeutet.',
      ],
      kapitel: {
        titel: 'Eigen- & Fremdfinanzierung',
        href: '/lernen/wirtschaft/markt/eigenfremdfinanzierung',
      },
    },
  {
      id: 'restwert',
      begriff: 'Restwert',
      kurzdefinition: 'Wert eines Gegenstands am Ende der betrachteten Nutzungsdauer.',
      definition: [
        'Der Restwert ist der voraussichtliche Wert eines Wirtschaftsguts am Ende der Vergleichsperiode. Er kann durch Verkaufserloes oder Weiterverwendung wirtschaftlich relevant sein.',
        'Beim Kostenvergleich wird der Restwert der Kaufvariante abgezogen. Bei Miete und typischem Leasing gehört der Restwert nicht automatisch dem Nutzer.',
      ],
      kapitel: {
        titel: 'Kauf, Leasing & Miete im Vergleich',
        href: '/lernen/wirtschaft/entscheidung/kauf-leasing-miete',
      },
    },
  {
      id: 'total-cost-of-ownership',
      begriff: 'Total Cost of Ownership',
      kurzdefinition: 'Gesamtkostenbetrachtung über Anschaffung, Betrieb, Nutzung und Ausmusterung.',
      definition: [
        'Total Cost of Ownership, kurz TCO, betrachtet nicht nur den Kaufpreis, sondern alle Kosten eines Systems über seinen Lebenszyklus: Beschaffung, Einrichtung, Betrieb, Wartung, Support, Ausfall, Rueckgabe oder Entsorgung.',
        'In AP1-Aufgaben hilft TCO, scheinbar guenstige Angebote zu hinterfragen, wenn Wartung, Verbrauchsmaterial, Ausfallzeiten oder Restwert unterschiedlich sind.',
      ],
      kapitel: {
        titel: 'Kauf, Leasing & Miete im Vergleich',
        href: '/lernen/wirtschaft/entscheidung/kauf-leasing-miete',
      },
    },
  {
      id: 'kostenvergleich',
      begriff: 'Kostenvergleichsrechnung',
      kurzdefinition: 'Statisches Verfahren zum Vergleich der Gesamtkosten zweier Alternativen über eine Periode.',
      definition: [
        'Die Kostenvergleichsrechnung addiert alle fixen und variablen Kosten zweier Alternativen über einen einheitlichen Zeitraum und bildet die Differenz.',
        'Die kritische Menge ist der Punkt, bei dem beide Alternativen gleich teuer sind. Darüber lohnt die eine, darunter die andere Variante.',
      ],
      kapitel: {
        titel: 'Kaufmaennische Rechenaufgaben',
        href: '/lernen/wirtschaft/kalkulation/kaufmaennische-rechenaufgaben',
      },
    },
  {
      id: 'handelskalkulation',
      begriff: 'Handelskalkulation',
      kurzdefinition: 'Schema zur schrittweisen Preisermittlung vom Listenpreis bis zum Bruttoverkaufspreis.',
      definition: [
        'Die Handelskalkulation fuehrt vom Listeneinkaufspreis über Rabatt, Skonto, Bezugskosten, Handlungskosten und Gewinn zum Verkaufspreis.',
        'Skonto wird immer auf den Preis nach Rabatt berechnet. Rueckwaertskalkulation dreht das Schema um, um z. B. Selbstkosten aus einem Endpreis zu ermitteln.',
      ],
      kapitel: {
        titel: 'Kaufmaennische Rechenaufgaben',
        href: '/lernen/wirtschaft/kalkulation/kaufmaennische-rechenaufgaben',
      },
    },
  {
      id: 'amortisation',
      begriff: 'Amortisation',
      kurzdefinition: 'Zeitraum, nach dem eine Investition über Einsparungen oder Rueckfluesse eingespielt ist.',
      definition: [
        'Die Amortisationsdauer ergibt sich aus Anschaffungskosten geteilt durch den jaehrlichen Rueckfluss oder die jaehrliche Einsparung.',
        'Je kuerzer die Amortisation, desto geringer das Risiko der Investition. Die Kennzahl beruecksichtigt aber keine Zinsen über die Laufzeit.',
      ],
      kapitel: {
        titel: 'Kaufmaennische Rechenaufgaben',
        href: '/lernen/wirtschaft/kalkulation/kaufmaennische-rechenaufgaben',
      },
    },
  {
      id: 'barwert',
      begriff: 'Barwert',
      kurzdefinition: 'Heutiger Wert zukuenftiger Zahlungen, ermittelt durch Abzinsen mit einem Kalkulationszinssatz.',
      definition: [
        'Der Barwert rechnet zukuenftige Zahlungen auf den heutigen Zeitpunkt zurueck. Dafür wird jeder Zahlungsbetrag durch (1 + i)^n geteilt.',
        'Barwertvergleiche sind genauer als reine Summen, weil sie den Zeitwert des Geldes beruecksichtigen.',
      ],
      kapitel: {
        titel: 'Kaufmaennische Rechenaufgaben',
        href: '/lernen/wirtschaft/kalkulation/kaufmaennische-rechenaufgaben',
      },
    },
  {
      id: 'afa',
      begriff: 'AfA',
      kurzdefinition: 'Absetzung für Abnutzung — die planmaessige Verteilung von Anschaffungskosten über die Nutzungsdauer.',
      definition: [
        'AfA steht für Absetzung für Abnutzung (§ 7 EStG). Sie verteilt die Anschaffungs- oder Herstellungskosten eines Wirtschaftsguts gleichmaessig über die betriebsgewoehnliche Nutzungsdauer.',
        'Linear: Anschaffungskosten geteilt durch Nutzungsdauer ergibt die jaehrliche Abschreibung. AfA senkt den Gewinn und die Steuerlast.',
      ],
      kapitel: {
        titel: 'AfA - lineare Abschreibung',
        href: '/lernen/wirtschaft/kalkulation/afa-abschreibung',
      },
    },
  {
      id: 'skonto',
      begriff: 'Skonto',
      kurzdefinition: 'Prozentualer Preisnachlass für schnelle Zahlung innerhalb einer vereinbarten Skontofrist.',
      definition: [
        'Skonto ist ein Preisnachlass, den der Lieferant gewaehrt, wenn der Kunde innerhalb einer kurzen Frist (z. B. 10 Tagen) zahlt. Wirtschaftlich entspricht es einem hohen Effektivzins, weshalb das Ziehen meist guenstiger ist als ein Kontokorrentkredit.',
        'Skonto wird in der Handelskalkulation immer auf den Preis nach Liefererrabatt berechnet, nicht auf den Listenpreis.',
      ],
      kapitel: {
        titel: 'Kaufmaennische Rechenaufgaben',
        href: '/lernen/wirtschaft/kalkulation/kaufmaennische-rechenaufgaben',
      },
    },
  {
      id: 'rabatt',
      begriff: 'Rabatt',
      kurzdefinition: 'Prozentualer Preisnachlass auf den Listenpreis, oft für Mengen, Treue oder Aktionen.',
      definition: [
        'Rabatt ist ein Nachlass auf den Listenpreis. Anlaesse sind Mengenrabatt (Grossbestellung), Treuerabatt (Stammkunde), Naturalrabatt (mehr Stueck zum gleichen Preis) oder Sonderrabatte (Aktion).',
        'In der Vorwaertskalkulation reduziert der Liefererrabatt den Listeneinkaufspreis zum Zieleinkaufspreis. Er wird vor dem Skonto verrechnet.',
      ],
      kapitel: {
        titel: 'Kaufmaennische Rechenaufgaben',
        href: '/lernen/wirtschaft/kalkulation/kaufmaennische-rechenaufgaben',
      },
    },
  {
      id: 'rechtsform',
      begriff: 'Rechtsform',
      kurzdefinition: 'Rechtlicher Rahmen eines Unternehmens mit Folgen für Haftung, Leitung und Kapital.',
      definition: [
        'Die Rechtsform legt fest, wie ein Unternehmen rechtlich organisiert ist. Sie beeinflusst Haftung, Kapitalbeschaffung, Vertretung, Gewinnverteilung und Pflichten nach aussen.',
        'In AP1-Aufgaben erkennst du Rechtsformen oft an Signalwoertern wie persoenliche Haftung, Gesellschaftsvermoegen, Gesellschafter, Aktien, Kommanditist oder Einzelunternehmer.',
      ],
      kapitel: {
        titel: 'Organisationsformen, Leitbild, Nachhaltigkeit und ESG',
        href: '/lernen/wirtschaft/unternehmen/organisationsformen-leitbild-nachhaltigkeit-esg',
      },
    },
  {
      id: 'einzelunternehmen',
      begriff: 'Einzelunternehmen',
      kurzdefinition: 'Unternehmen einer einzelnen Inhaberin oder eines einzelnen Inhabers.',
      definition: [
        'Beim Einzelunternehmen traegt eine einzelne Person das Unternehmen. Entscheidungen sind meist schnell und die Organisation ist einfach.',
        'Der zentrale Pruefungspunkt ist die Haftung: Der Inhaber traegt grundsaetzlich das persoenliche wirtschaftliche Risiko. Das unterscheidet das Einzelunternehmen von haftungsbeschraenkten Kapitalgesellschaften.',
      ],
      kapitel: {
        titel: 'Organisationsformen, Leitbild, Nachhaltigkeit und ESG',
        href: '/lernen/wirtschaft/unternehmen/organisationsformen-leitbild-nachhaltigkeit-esg',
      },
    },
  {
      id: 'gmbh',
      begriff: 'GmbH',
      kurzdefinition: 'Kapitalgesellschaft, bei der grundsaetzlich das Gesellschaftsvermoegen haftet.',
      definition: [
        'GmbH steht für Gesellschaft mit beschraenkter Haftung. Sie hat eine eigene Rechtspersoenlichkeit und kann selbst Rechte und Pflichten haben.',
        'Für Verbindlichkeiten haftet gegenüber Glaeubigern grundsaetzlich nur das Gesellschaftsvermoegen. In AP1-Aufgaben ist das der wichtigste Unterschied zu persoenlich haftenden Rechtsformen.',
      ],
      kapitel: {
        titel: 'Organisationsformen, Leitbild, Nachhaltigkeit und ESG',
        href: '/lernen/wirtschaft/unternehmen/organisationsformen-leitbild-nachhaltigkeit-esg',
      },
    },
  {
      id: 'aktiengesellschaft',
      begriff: 'Aktiengesellschaft',
      kurzdefinition: 'Kapitalgesellschaft mit eigener Rechtspersoenlichkeit und in Aktien zerlegtem Grundkapital.',
      definition: [
        'Die Aktiengesellschaft ist eine Kapitalgesellschaft. Sie hat ein in Aktien zerlegtes Grundkapital und eine eigene Rechtspersoenlichkeit.',
        'Pruefungsrelevant sind breite Kapitalbeschaffung, Gesellschaftsvermoegen als Haftungsmasse und Organe wie Vorstand, Aufsichtsrat und Hauptversammlung.',
      ],
      kapitel: {
        titel: 'Organisationsformen, Leitbild, Nachhaltigkeit und ESG',
        href: '/lernen/wirtschaft/unternehmen/organisationsformen-leitbild-nachhaltigkeit-esg',
      },
    },
  {
      id: 'ohg',
      begriff: 'OHG',
      kurzdefinition: 'Offene Handelsgesellschaft ohne Haftungsbeschraenkung der Gesellschafter gegenüber Glaeubigern.',
      definition: [
        'OHG steht für offene Handelsgesellschaft. Sie ist eine Personengesellschaft, deren Zweck auf den Betrieb eines Handelsgewerbes unter gemeinschaftlicher Firma gerichtet ist.',
        'Der AP1-Kern: Bei keinem Gesellschafter ist die Haftung gegenüber Gesellschaftsglaeubigern beschraenkt. Das unterscheidet sie besonders von GmbH und KG.',
      ],
      kapitel: {
        titel: 'Organisationsformen, Leitbild, Nachhaltigkeit und ESG',
        href: '/lernen/wirtschaft/unternehmen/organisationsformen-leitbild-nachhaltigkeit-esg',
      },
    },
  {
      id: 'kg',
      begriff: 'KG',
      kurzdefinition: 'Kommanditgesellschaft mit Komplementaer und beschraenkt haftendem Kommanditisten.',
      definition: [
        'KG steht für Kommanditgesellschaft. Sie verbindet mindestens einen persoenlich haftenden Gesellschafter mit mindestens einem beschraenkt haftenden Kommanditisten.',
        'In Aufgaben ist die Rollenunterscheidung wichtig: Komplementaere tragen die persoenliche Haftung und fuehren typischerweise, Kommanditisten beteiligen sich mit einer Haftsumme.',
      ],
      kapitel: {
        titel: 'Organisationsformen, Leitbild, Nachhaltigkeit und ESG',
        href: '/lernen/wirtschaft/unternehmen/organisationsformen-leitbild-nachhaltigkeit-esg',
      },
    },
  {
      id: 'aufbauorganisation',
      begriff: 'Aufbauorganisation',
      kurzdefinition: 'Ordnet Stellen, Abteilungen, Aufgaben, Verantwortlichkeiten und Weisungswege.',
      definition: [
        'Die Aufbauorganisation beschreibt, wie ein Unternehmen strukturell aufgebaut ist: Stellen, Abteilungen, Leitungsebenen, Verantwortlichkeiten und Weisungsbeziehungen.',
        'Für AP1 musst du vor allem erkennen, ob eine klare Linie, eine Stabsstelle oder eine Matrixstruktur vorliegt und welche Vor- und Nachteile daraus entstehen.',
      ],
      kapitel: {
        titel: 'Organisationsformen, Leitbild, Nachhaltigkeit und ESG',
        href: '/lernen/wirtschaft/unternehmen/organisationsformen-leitbild-nachhaltigkeit-esg',
      },
    },
  {
      id: 'linienorganisation',
      begriff: 'Linienorganisation',
      kurzdefinition: 'Organisationsform mit klaren Weisungswegen, im Einliniensystem mit genau einem direkten Vorgesetzten.',
      definition: [
        'In der Linienorganisation laufen Weisungen entlang fester Leitungslinien. Im Einliniensystem hat jede Stelle genau eine direkte vorgesetzte Stelle.',
        'Vorteil sind klare Verantwortung und einfache Orientierung. Nachteil können lange Entscheidungswege und starke Belastung der Leitung sein.',
      ],
      kapitel: {
        titel: 'Organisationsformen, Leitbild, Nachhaltigkeit und ESG',
        href: '/lernen/wirtschaft/unternehmen/organisationsformen-leitbild-nachhaltigkeit-esg',
      },
    },
  {
      id: 'matrixorganisation',
      begriff: 'Matrixorganisation',
      kurzdefinition: 'Organisationsform mit doppelter Zuordnung, etwa zu Fachabteilung und Projekt.',
      definition: [
        'In der Matrixorganisation arbeiten zwei Strukturachsen gleichzeitig, zum Beispiel Fachbereich und Projekt oder Produkt. Mitarbeitende können dadurch zwei relevante Bezugspunkte haben.',
        'Sie verbindet Fachwissen und Projektfokus, erzeugt aber Konfliktpotenzial bei Prioritaeten, Ressourcen und Entscheidungsbefugnissen.',
      ],
      kapitel: {
        titel: 'Organisationsformen, Leitbild, Nachhaltigkeit und ESG',
        href: '/lernen/wirtschaft/unternehmen/organisationsformen-leitbild-nachhaltigkeit-esg',
      },
    },
  {
      id: 'leitbild',
      begriff: 'Leitbild',
      kurzdefinition: 'Orientierung eines Unternehmens mit Selbstverstaendnis, Werten und Handlungsprinzipien.',
      definition: [
        'Ein Leitbild beschreibt, wofür ein Unternehmen steht, welchen Nutzen es stiften will und nach welchen Werten gehandelt werden soll.',
        'Pruefungsstark wird es, wenn du daraus konkrete Folgen ableitest, etwa für Service, Beschaffung, Datenschutz, Qualitaet, Schulung oder Nachhaltigkeit.',
      ],
      kapitel: {
        titel: 'Organisationsformen, Leitbild, Nachhaltigkeit und ESG',
        href: '/lernen/wirtschaft/unternehmen/organisationsformen-leitbild-nachhaltigkeit-esg',
      },
    },
  {
      id: 'nachhaltigkeit',
      begriff: 'Nachhaltigkeit',
      kurzdefinition: 'Langfristig tragfaehiges Handeln mit wirtschaftlicher, oekologischer und sozialer Perspektive.',
      definition: [
        'Nachhaltigkeit bedeutet im Unternehmen, Entscheidungen nicht nur nach kurzfristigem Preis zu treffen, sondern langfristige wirtschaftliche, oekologische und soziale Folgen zu beruecksichtigen.',
        'In IT-Aufgaben betrifft das zum Beispiel Energieverbrauch, Lebensdauer, Reparierbarkeit, E-Waste, Lieferantenwahl, Ergonomie, Barrierefreiheit und Datenschutz.',
      ],
      kapitel: {
        titel: 'Organisationsformen, Leitbild, Nachhaltigkeit und ESG',
        href: '/lernen/wirtschaft/unternehmen/organisationsformen-leitbild-nachhaltigkeit-esg',
      },
    },
  {
      id: 'esg',
      begriff: 'ESG',
      kurzdefinition: 'Raster für Umwelt, Soziales und verantwortliche Unternehmensfuehrung.',
      definition: [
        'ESG steht für Environmental, Social und Governance. Es sortiert Verantwortung in Umweltaspekte, soziale Aspekte und Regeln der Unternehmensfuehrung.',
        'In AP1-Aufgaben ordnest du Kriterien zu: Stromverbrauch und E-Waste zu Environmental, Schulung und Barrierefreiheit zu Social, Compliance und Kontrollen zu Governance.',
      ],
      kapitel: {
        titel: 'Organisationsformen, Leitbild, Nachhaltigkeit und ESG',
        href: '/lernen/wirtschaft/unternehmen/organisationsformen-leitbild-nachhaltigkeit-esg',
      },
    },
  {
      id: 'angebotsvergleich',
      begriff: 'Angebotsvergleich',
      kurzdefinition: 'Systematischer Vergleich mehrerer Angebote nach Preis und passenden Qualitaetskriterien.',
      definition: [
        'Ein Angebotsvergleich stellt mehrere Lieferantenangebote auf eine gemeinsame Grundlage. Quantitativ wird meist der Bezugspreis berechnet.',
        'Qualitativ werden Kriterien wie Lieferzeit, Support, Garantie, Kompatibilitaet oder Nachhaltigkeit bewertet. Eine gute Empfehlung nennt Zahl, Argument und Bedingung.',
      ],
      kapitel: {
        titel: 'Angebotsvergleich (quantitativ & qualitativ)',
        href: '/lernen/wirtschaft/entscheidung/angebotsvergleich',
      },
    },
  {
      id: 'listeneinkaufspreis',
      begriff: 'Listeneinkaufspreis',
      kurzdefinition: 'Angebots- oder Katalogpreis vor Rabatt, Skonto und Bezugskosten.',
      definition: [
        'Der Listeneinkaufspreis ist der Ausgangswert der Bezugspreisrechnung. Von ihm wird zuerst ein Liefererrabatt abgezogen.',
        'In AP1-Aufgaben darf der Listeneinkaufspreis nicht direkt mit anderen Angeboten verglichen werden, wenn Rabatt, Skonto oder Bezugskosten unterschiedlich sind.',
      ],
      kapitel: {
        titel: 'Angebotsvergleich (quantitativ & qualitativ)',
        href: '/lernen/wirtschaft/entscheidung/angebotsvergleich',
      },
    },
  {
      id: 'bezugskosten',
      begriff: 'Bezugskosten',
      kurzdefinition: 'Beschaffungsnebenkosten wie Fracht, Verpackung, Zoll oder Transportversicherung.',
      definition: [
        'Bezugskosten fallen an, damit die Ware vom Lieferanten bis zum Betrieb kommt. Sie werden nach Rabatt und Skonto zum Bareinkaufspreis addiert.',
        'Typische Beispiele sind Fracht, Verpackung, Zoll, Rollgeld oder Transportversicherung. Unterschiedliche Bezugskosten können die Angebotsreihenfolge veraendern.',
      ],
      kapitel: {
        titel: 'Angebotsvergleich (quantitativ & qualitativ)',
        href: '/lernen/wirtschaft/entscheidung/angebotsvergleich',
      },
    },
  {
      id: 'bezugspreis',
      begriff: 'Bezugspreis',
      kurzdefinition: 'Einstandspreis eines Angebots: Bareinkaufspreis plus Bezugskosten.',
      definition: [
        'Der Bezugspreis zeigt, was ein Angebot den Betrieb nach Abzug von Rabatt und Skonto sowie nach Addition der Bezugskosten wirklich kostet.',
        'Im quantitativen Angebotsvergleich gewinnt rechnerisch der niedrigste Bezugspreis, solange Menge, Qualitaet und Leistungsumfang vergleichbar sind.',
      ],
      kapitel: {
        titel: 'Angebotsvergleich (quantitativ & qualitativ)',
        href: '/lernen/wirtschaft/entscheidung/angebotsvergleich',
      },
    },
  {
      id: 'qualitativer-angebotsvergleich',
      begriff: 'Qualitativer Angebotsvergleich',
      kurzdefinition: 'Bewertung nicht direkt in Euro messbarer Kriterien eines Angebots.',
      definition: [
        'Der qualitative Angebotsvergleich betrachtet Kriterien wie Lieferzeit, Support, Garantie, technische Passung, Lieferantenzuverlaessigkeit oder Nachhaltigkeit.',
        'Er ist wichtig, wenn ein guenstiges Angebot Risiken hat oder ein etwas teureres Angebot den betrieblichen Bedarf deutlich besser erfuellt.',
      ],
      kapitel: {
        titel: 'Angebotsvergleich (quantitativ & qualitativ)',
        href: '/lernen/wirtschaft/entscheidung/angebotsvergleich',
      },
    },
  {
      id: 'nutzwertanalyse',
      begriff: 'Nutzwertanalyse',
      kurzdefinition: 'Verfahren zur Bewertung von Alternativen mit gewichteten Kriterien und Punktwerten.',
      definition: [
        'Bei der Nutzwertanalyse werden Kriterien festgelegt, gewichtet und je Alternative bewertet. Die Summe aus Gewichtung mal Bewertung ergibt den Nutzwert.',
        'Sie eignet sich für Angebotsentscheidungen, wenn neben dem Preis auch qualitative Kriterien wie Support, Lieferzeit oder Kompatibilitaet nachvollziehbar beruecksichtigt werden sollen.',
      ],
      kapitel: {
        titel: 'Angebotsvergleich (quantitativ & qualitativ)',
        href: '/lernen/wirtschaft/entscheidung/angebotsvergleich',
      },
    },
  {
      id: 'make-or-buy',
      begriff: 'Make-or-Buy',
      kurzdefinition: 'Entscheidung, ob eine Leistung intern erbracht oder extern beschafft wird.',
      definition: [
        'Make-or-Buy vergleicht Eigenleistung und Fremdbezug. In IT-Aufgaben geht es zum Beispiel um Eigenentwicklung statt Standardsoftware, eigenen Betrieb statt Cloud-Dienst oder internen Support statt Dienstleister.',
        'Pruefungsrelevant ist die Kombination aus Kostenvergleich und qualitativer Begruendung: Know-how, Zeit, Kontrolle, Sicherheit, Abhaengigkeit und Wartbarkeit.',
      ],
      kapitel: {
        titel: 'Make-or-Buy-Entscheidung',
        href: '/lernen/wirtschaft/entscheidung/make-or-buy',
      },
    },
  {
      id: 'eigenfertigung',
      begriff: 'Eigenfertigung',
      kurzdefinition: 'Interne Erstellung einer Leistung durch eigene Ressourcen.',
      definition: [
        'Eigenfertigung bedeutet, dass ein Unternehmen eine Leistung selbst erstellt oder betreibt. In der IT kann das eine Eigenentwicklung, ein eigenes Skript, eigener Serverbetrieb oder interner Support sein.',
        'Sie bietet Kontrolle und Know-how-Aufbau, verursacht aber fixe Anfangskosten, Personalkosten, Wartungsaufwand und Vertretungsrisiken.',
      ],
      kapitel: {
        titel: 'Make-or-Buy-Entscheidung',
        href: '/lernen/wirtschaft/entscheidung/make-or-buy',
      },
    },
  {
      id: 'fremdbezug',
      begriff: 'Fremdbezug',
      kurzdefinition: 'Beschaffung einer Leistung von einem externen Anbieter.',
      definition: [
        'Fremdbezug bedeutet, dass ein Unternehmen eine Leistung am Markt einkauft. Beispiele sind Standardsoftware, SaaS, externe Wartung, Outsourcing oder ein Dienstleisterprojekt.',
        'Er kann Startzeit und Spezialwissen sparen, erzeugt aber laufende Kosten, Koordinationsaufwand und Abhaengigkeiten vom Anbieter.',
      ],
      kapitel: {
        titel: 'Make-or-Buy-Entscheidung',
        href: '/lernen/wirtschaft/entscheidung/make-or-buy',
      },
    },
  {
      id: 'kritische-menge',
      begriff: 'Kritische Menge',
      kurzdefinition: 'Menge, bei der zwei Alternativen gleich hohe Gesamtkosten haben.',
      definition: [
        'Die kritische Menge entsteht, indem die Kostenfunktionen zweier Alternativen gleichgesetzt werden. An diesem Punkt sind beide rechnerisch gleich teuer.',
        'Unterhalb und oberhalb der kritischen Menge kann jeweils eine andere Alternative guenstiger sein. Deshalb muss nach der Berechnung immer die Richtung geprueft werden.',
      ],
      kapitel: {
        titel: 'Make-or-Buy-Entscheidung',
        href: '/lernen/wirtschaft/entscheidung/make-or-buy',
      },
    },
  {
      id: 'transaktionskosten',
      begriff: 'Transaktionskosten',
      kurzdefinition: 'Kosten für Suche, Abstimmung, Vertrag, Integration, Kontrolle und Koordination.',
      definition: [
        'Transaktionskosten entstehen rund um eine Leistung, ohne selbst die eigentliche Leistung zu sein. Dazu gehören Informationssuche, Angebotsvergleich, Vertragsverhandlung, Abstimmung, Integration, Kontrolle und Wechselaufwand.',
        'Bei Make-or-Buy verhindern sie Scheingenauigkeit: Ein externer Anbieter hat nicht nur einen Listenpreis, sondern braucht Beschaffung, Einfuehrung und Steuerung.',
      ],
      kapitel: {
        titel: 'Make-or-Buy-Entscheidung',
        href: '/lernen/wirtschaft/entscheidung/make-or-buy',
      },
    },
  {
      id: 'opportunitaetskosten',
      begriff: 'Opportunitaetskosten',
      kurzdefinition: 'Entgangener Nutzen der besten nicht gewaehlten Alternative.',
      definition: [
        'Opportunitaetskosten sind keine Rechnung, die zwingend auf einer Rechnung steht. Sie zeigen, was aufgegeben wird, wenn eine knappe Ressource anders eingesetzt wird.',
        'Beispiel: Wenn ein Admin ein internes Tool baut, kann er in dieser Zeit keine Kundenprojekte abrechnen oder keine wichtigen Tickets bearbeiten. Dieser entgangene Nutzen gehört in die Entscheidung.',
      ],
      kapitel: {
        titel: 'Make-or-Buy-Entscheidung',
        href: '/lernen/wirtschaft/entscheidung/make-or-buy',
      },
    },
  {
      id: 'kernkompetenz',
      begriff: 'Kernkompetenz',
      kurzdefinition: 'Strategisch wichtige Faehigkeit, die den Erfolg eines Unternehmens stark beeinflusst.',
      definition: [
        'Eine Kernkompetenz ist eine Faehigkeit, die für den langfristigen Erfolg besonders wichtig ist und schwer ersetzbar sein kann.',
        'In Make-or-Buy-Aufgaben spricht eine Kernkompetenz eher für Make: Wissen, Kontrolle und Weiterentwicklung bleiben im Unternehmen.',
      ],
      kapitel: {
        titel: 'Make-or-Buy-Entscheidung',
        href: '/lernen/wirtschaft/entscheidung/make-or-buy',
      },
    },
  {
      id: 'vendor-lock-in',
      begriff: 'Vendor-Lock-in',
      kurzdefinition: 'Abhaengigkeit von einem Anbieter, die einen Wechsel erschwert oder verteuert.',
      definition: [
        'Vendor-Lock-in entsteht, wenn ein Unternehmen technisch, vertraglich oder organisatorisch stark an einen Anbieter gebunden ist. Ein Wechsel wird dann teuer, langsam oder riskant.',
        'In Make-or-Buy-Aufgaben ist Lock-in ein wichtiges Buy-Risiko: proprietaere Schnittstellen, Datenformate, lange Vertragslaufzeiten oder fehlende Exportmöglichkeiten können spaeter Handlungsspielraum kosten.',
      ],
      kapitel: {
        titel: 'Make-or-Buy-Entscheidung',
        href: '/lernen/wirtschaft/entscheidung/make-or-buy',
      },
    },
  {
      id: 'fixkosten',
      begriff: 'Fixkosten',
      kurzdefinition: 'Kosten, die unabhaengig von der Ausbringungsmenge anfallen.',
      definition: [
        'Fixkosten fallen auch ohne Produktion an: Miete, Gehaelter, Abschreibungen, Versicherungen, Leasingraten. Sie sind nur innerhalb einer Kapazitaetsstufe konstant — überschreitet die Auslastung diese Stufe, springen die Fixkosten auf ein neues Niveau (sprungfixe Kosten).',
        'Im Vergleich zwischen zwei Investitionen sind Fixkosten der Block, der das Risiko bei niedriger Auslastung bestimmt.',
      ],
      kapitel: {
        titel: 'Variable & fixe Kosten',
        href: '/lernen/wirtschaft/kalkulation/variable-fixe-kosten',
      },
    },
  {
      id: 'variable-kosten',
      begriff: 'Variable Kosten',
      kurzdefinition: 'Kosten, die proportional mit der Ausbringungsmenge steigen oder fallen.',
      definition: [
        'Variable Kosten entstehen pro produzierter oder verkaufter Einheit: Material, Verpackung, Stueckprovision, Strom je Gerät. Bei null Stueck sind sie null.',
        'Pro Stueck bleiben sie meist konstant; in Summe steigen sie linear mit der Menge. Zusammen mit den Fixkosten ergeben sie die Gesamtkosten.',
      ],
      kapitel: {
        titel: 'Variable & fixe Kosten',
        href: '/lernen/wirtschaft/kalkulation/variable-fixe-kosten',
      },
    },
  {
      id: 'mietkauf',
      begriff: 'Mietkauf',
      kurzdefinition: 'Beschaffung gegen feste Raten mit Eigentumsübergang am Ende der Laufzeit.',
      definition: [
        'Beim Mietkauf zahlt der Nutzer wie beim Leasing feste Raten, am Ende der Laufzeit geht das Objekt aber automatisch in sein Eigentum über. Bilanziell ist der Mietkaeufer von Beginn an wirtschaftlicher Eigentuemer und bilanziert das Objekt selbst.',
        'In der Praxis ist Mietkauf vor allem für Investitionen interessant, bei denen das Objekt am Ende noch genutzt werden soll, der Liquiditaetsabfluss aber gleichmaessig verteilt sein muss.',
      ],
      kapitel: {
        titel: 'Kaufmaennische Rechenaufgaben',
        href: '/lernen/wirtschaft/kalkulation/kaufmaennische-rechenaufgaben',
      },
    },
  {
      id: 'operate-leasing',
      begriff: 'Operate-Leasing',
      kurzdefinition: 'Kurzfristiges Leasing wie eine Miete; das Objekt bleibt beim Leasinggeber bilanziert.',
      definition: [
        'Operate-Leasing ist mietaehnlich, kurzfristig kuendbar und ohne festgeschriebene Mindestlaufzeit. Wartung, Versicherung und Reparatur übernimmt meist der Leasinggeber. Bilanziell und steuerlich gilt das Objekt als beim Leasinggeber.',
        'Typischer Einsatz: Pool-Geräte, kurzfristige Ueberbrueckung, Geräte mit hohem Wertverlust. Die Raten sind in voller Hoehe Betriebsausgabe.',
      ],
      kapitel: {
        titel: 'Kaufmaennische Rechenaufgaben',
        href: '/lernen/wirtschaft/kalkulation/kaufmaennische-rechenaufgaben',
      },
    },
  {
      id: 'finance-leasing',
      begriff: 'Finance-Leasing',
      kurzdefinition: 'Langfristiges Leasing mit fester Grundmietzeit, finanzierungsaehnlich gestaltet.',
      definition: [
        'Finance-Leasing hat eine feste Grundmietzeit (oft 40-90 % der betriebsgewoehnlichen Nutzungsdauer) und ist nicht ordentlich kuendbar. Der Leasingnehmer traegt die Sach- und Preisrisiken; je nach Vertragstyp bilanziert er das Objekt sogar selbst (BMF-Leasingerlass).',
        'Der Vertrag ist wirtschaftlich naeher am Kreditkauf als an einer Miete und wird oft mit Kauf- oder Andienungsrechten am Laufzeitende kombiniert.',
      ],
      kapitel: {
        titel: 'Kaufmaennische Rechenaufgaben',
        href: '/lernen/wirtschaft/kalkulation/kaufmaennische-rechenaufgaben',
      },
    },
  {
      id: 'cashflow',
      begriff: 'Cashflow',
      kurzdefinition: 'Tatsaechliche Zahlungsbewegung eines Zeitraums; Differenz aus Einzahlungen und Auszahlungen.',
      definition: [
        'Der Cashflow zeigt die Liquiditaet, also was wirklich an Geld zu- oder abgeflossen ist. Im Gegensatz zur Gewinnrechnung zaehlen nur kassenwirksame Vorgaenge — Abschreibungen oder Rueckstellungen sind nicht enthalten.',
        'In Investitionsrechnungen wird haeufig der freie Cashflow betrachtet: was nach Steuern und Ersatzinvestitionen für Tilgung, Dividenden oder neue Projekte übrig bleibt.',
      ],
      kapitel: {
        titel: 'Kaufmaennische Rechenaufgaben',
        href: '/lernen/wirtschaft/kalkulation/kaufmaennische-rechenaufgaben',
      },
    },
  {
      id: 'annuitaet',
      begriff: 'Annuitaet',
      kurzdefinition: 'Gleichbleibender Jahresbetrag aus Tilgung und Zins bei Annuitaetendarlehen.',
      definition: [
        'Eine Annuitaet ist die konstante Jahresrate, die ein Annuitaetendarlehen über die Laufzeit verlangt. Anfangs überwiegt der Zinsanteil, mit fortschreitender Tilgung wird der Tilgungsanteil größer.',
        'In der Investitionsrechnung wird eine Investition oft in eine gedachte Annuitaet umgerechnet, um Zahlungsstroeme verschiedener Laufzeiten vergleichbar zu machen.',
      ],
      kapitel: {
        titel: 'Kaufmaennische Rechenaufgaben',
        href: '/lernen/wirtschaft/kalkulation/kaufmaennische-rechenaufgaben',
      },
    },
  {
      id: 'kapitalwert',
      begriff: 'Kapitalwert',
      kurzdefinition: 'Summe aller auf den heutigen Zeitpunkt abgezinsten Zahlungen einer Investition.',
      definition: [
        'Der Kapitalwert (auch Net Present Value) summiert alle kuenftigen Ein- und Auszahlungen einer Investition, jeweils mit dem Kalkulationszinssatz auf den Startzeitpunkt abgezinst, abzueglich der Anschaffungsauszahlung.',
        'Ein positiver Kapitalwert bedeutet, dass die Investition den geforderten Zins schlaegt. Bei mehreren Alternativen waehlt man die mit dem hoechsten Kapitalwert.',
      ],
      kapitel: {
        titel: 'Kaufmaennische Rechenaufgaben',
        href: '/lernen/wirtschaft/kalkulation/kaufmaennische-rechenaufgaben',
      },
    },
  {
      id: 'aida',
      begriff: 'AIDA-Modell',
      kurzdefinition: 'Vier-Stufen-Modell der Werbe- und Praesentationswirkung: Attention, Interest, Desire, Action.',
      definition: [
        'AIDA ist ein klassisches Werbewirkungsmodell und strukturiert Botschaften in vier Stufen: Attention (Aufmerksamkeit wecken), Interest (Interesse erzeugen), Desire (Wunsch ausloesen), Action (zur Handlung bewegen).',
        'Pruefungsrelevant: Reihenfolge merken, Beispiele zuordnen und AIDA als Checkliste verstehen, nicht als garantierten linearen Kaufprozess. Typische Falle: Interest und Desire werden verwechselt - Interest = "klingt relevant", Desire = "will ich haben".',
      ],
      kapitel: {
        titel: 'AIDA-Formel & Werbewirkung',
        href: '/lernen/wirtschaft/markt/aida-formel',
      },
    },
  {
      id: 'attention',
      begriff: 'Attention',
      kurzdefinition: 'Erste AIDA-Stufe: Aufmerksamkeit der Zielgruppe gewinnen.',
      definition: [
        'Attention bedeutet, dass die Zielgruppe eine Botschaft überhaupt wahrnimmt. Das gelingt durch einen relevanten Aufmacher, etwa eine Frage, eine Zahl, ein Risiko, ein Bild oder eine kurze Szene.',
        'Pruefungsrelevant: Attention ist nicht einfach laut oder bunt. Der Einstieg muss zur Zielgruppe und zum Problem passen, sonst wirkt er unserioes oder beliebig.',
      ],
      kapitel: {
        titel: 'AIDA-Formel & Werbewirkung',
        href: '/lernen/wirtschaft/markt/aida-formel',
      },
    },
  {
      id: 'interest',
      begriff: 'Interest',
      kurzdefinition: 'Zweite AIDA-Stufe: Interesse durch Relevanz für die Zielgruppe aufbauen.',
      definition: [
        'Interest entsteht, wenn die Zielgruppe erkennt, dass das Thema sie betrifft. In IT-Aufgaben gelingt das zum Beispiel über Ausfallzeiten, Kosten, Bedienaufwand, Sicherheitsrisiken oder Servicequalitaet.',
        'Pruefungsfalle: Interest ist noch kein Kaufwunsch. Es beantwortet die Frage "Warum ist das für mich wichtig?", nicht "Warum will ich genau diese Loesung?".',
      ],
      kapitel: {
        titel: 'AIDA-Formel & Werbewirkung',
        href: '/lernen/wirtschaft/markt/aida-formel',
      },
    },
  {
      id: 'desire',
      begriff: 'Desire',
      kurzdefinition: 'Dritte AIDA-Stufe: Wunsch nach der angebotenen Loesung ausloesen.',
      definition: [
        'Desire übersetzt Merkmale in konkreten Nutzen. Statt nur Funktionen zu nennen, zeigt die Botschaft, wie die Loesung Zeit spart, Risiken senkt, Kosten reduziert oder Arbeit erleichtert.',
        'Pruefungsrelevant: Desire wird oft durch Vorher-nachher-Vergleiche, Belege, Referenzen, kurze Demos oder anschauliche Nutzenargumente erzeugt.',
      ],
      kapitel: {
        titel: 'AIDA-Formel & Werbewirkung',
        href: '/lernen/wirtschaft/markt/aida-formel',
      },
    },
  {
      id: 'action',
      begriff: 'Action',
      kurzdefinition: 'Vierte AIDA-Stufe: konkrete Handlung der Zielgruppe ausloesen.',
      definition: [
        'Action ist die eindeutige Handlungsaufforderung am Ende einer Werbung, Praesentation oder Angebotsvorstellung. Beispiele: Termin buchen, Pilot starten, Angebot freigeben, QR-Code scannen oder Rueckmeldung geben.',
        'Pruefungsfalle: "Vielen Dank" oder "Bei Fragen melden" ist meist zu schwach. Eine gute Action nennt Handlung, Kanal und bei Bedarf Frist.',
      ],
      kapitel: {
        titel: 'AIDA-Formel & Werbewirkung',
        href: '/lernen/wirtschaft/markt/aida-formel',
      },
    },
  {
      id: 'werbewirkung',
      begriff: 'Werbewirkung',
      kurzdefinition: 'Auswirkung einer Werbemassnahme auf Wahrnehmung, Einstellung oder Verhalten der Zielgruppe.',
      definition: [
        'Werbewirkung beschreibt, was eine Werbe- oder Kommunikationsmassnahme bei der Zielgruppe ausloest. Psychische Wirkung betrifft Wahrnehmung, Erinnerung, Einstellung oder Kaufabsicht; oekonomische Wirkung betrifft messbares Verhalten wie Anfragen, Bestellungen oder Umsatz.',
        'Pruefungsrelevant: Eine Wirkung muss zur Zielsetzung passen. Bekanntheit misst man anders als Umsatz; Klicks, Leads oder Freigaben sind nur sinnvoll, wenn sie zur Aufgabe passen.',
      ],
      kapitel: {
        titel: 'AIDA-Formel & Werbewirkung',
        href: '/lernen/wirtschaft/markt/aida-formel',
      },
    },
]
