import type { GlossarEintrag } from "../../lib/glossar/types"

export const eBisH: GlossarEintrag[] = [
  {
      id: 'garantie',
      begriff: 'Garantie',
      kurzdefinition: 'Zusätzliche Zusage eines Garantiegebers neben den gesetzlichen Mängelrechten.',
      definition: [
        'Eine Garantie ist eine freiwillige oder vertragliche Zusage, zum Beispiel für Haltbarkeit, Austausch, Reparatur oder Vor-Ort-Service. Sie kann vom Hersteller, Händler oder einem Dritten gegeben werden.',
        'Wichtig: Garantie ersetzt die gesetzliche Gewährleistung nicht. Ansprüche aus der Garantie richten sich nach der Garantieerklärung gegen den Garantiegeber.',
      ],
      kapitel: {
        titel: 'Gewährleistung und Garantie',
        href: '/lernen/vertragsrecht/vertraege/gewaehrleistung',
      },
    },
  {
      id: 'gewaehrleistung',
      begriff: 'Gewährleistung',
      kurzdefinition: 'Gesetzliche Mängelhaftung des Verkäufers, wenn eine Kaufsache mangelhaft ist.',
      definition: [
        'Gewährleistung meint im Kaufrecht die gesetzlichen Rechte des Käufers, wenn die Kaufsache bei Gefahrübergang mangelhaft ist. Der zentrale Vertragspartner ist der Verkäufer.',
        'Typische Rechte sind Nacherfuellung, Rücktritt, Minderung und Schadensersatz. Sie bestehen unabhängig davon, ob zusätzlich eine Garantie beworben wird.',
      ],
      kapitel: {
        titel: 'Gewährleistung und Garantie',
        href: '/lernen/vertragsrecht/vertraege/gewaehrleistung',
      },
    },
  {
      id: 'e-rechnung',
      begriff: 'E-Rechnung',
      kurzdefinition: 'Strukturierte elektronische Rechnung, die elektronisch verarbeitet werden kann.',
      definition: [
        'Eine E-Rechnung ist seit 2025 im deutschen B2B-Kontext grundsätzlich eine Rechnung in einem strukturierten elektronischen Format, das ausgestellt, übermittelt, empfangen und elektronisch verarbeitet werden kann.',
        'Ein einfaches PDF per E-Mail ist keine E-Rechnung im neuen Sinn, sondern eine sonstige Rechnung. Typische Formate sind XRechnung oder passende ZUGFeRD-Profile.',
      ],
      kapitel: {
        titel: 'Rechnung, Zahlungsziel und Aufbewahrungsfristen',
        href: '/lernen/vertragsrecht/vertraege/rechnung-zahlungsziel-aufbewahrungsfristen',
      },
    },
  {
      id: 'endzertifikat',
      begriff: 'Endzertifikat',
      kurzdefinition: 'Ein Endzertifikat gehört zur konkreten Website, Person, Anwendung oder zum Gerät.',
      definition: [
        'Ein Endzertifikat steht am unteren Ende einer Zertifikatskette. Es wird im Betrieb vorgelegt, zum Beispiel von einem Webserver bei HTTPS.',
        'Es enthält die konkrete Identität und den Public Key. Vertraut wird ihm nur, wenn die Kette zu einer vertrauenswürdigen Root-CA führt und alle Prüfungen bestehen.',
      ],
      kapitel: {
        titel: 'PKI, CA und Zertifikate',
        href: '/lernen/sicherheit/dsgvo-krypto/pki-zertifikate',
      },
    },
  {
      id: 'exponent',
      begriff: 'Exponent',
      kurzdefinition: 'Der Exponent gibt an, wie oft die Basis als Faktor verwendet wird.',
      definition: [
        'In einem Stellenwertsystem beschreibt der Exponent die Position einer Stelle: ganz rechts ist Position 0, danach steigen die Potenzen der Basis.',
        'Bei Gleitkommazahlen verschiebt der Exponent den Zahlenwert ähnlich wie in wissenschaftlicher Schreibweise. Dadurch lassen sich sehr kleine und sehr große Werte kompakt speichern.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'ecc-ram',
      begriff: 'ECC-RAM',
      kurzdefinition: 'Arbeitsspeicher mit Fehlerkorrektur; erkennt und korrigiert einzelne Bitfehler im Betrieb.',
      definition: [
        'ECC steht für Error-Correcting Code. ECC-RAM enthält zusätzliche Prüfbits (typisch 9 Speicherchips statt 8 pro Riegel), mit denen Einzelbitfehler erkannt und korrigiert sowie Mehrfachfehler erkannt werden können.',
        'ECC-RAM wird in Servern, Workstations und kritischen Systemen eingesetzt, in denen ein unbemerkter Speicherfehler Datenkorruption verursachen würde. Voraussetzung sind ECC-fähige CPU, Mainboard und passende Module.',
      ],
      kapitel: {
        titel: 'CPU, RAM und Massenspeicher',
        href: '/lernen/hardware/komponenten/cpu-ram-speicher',
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
      id: 'eigenfinanzierung',
      begriff: 'Eigenfinanzierung',
      kurzdefinition: 'Finanzierung mit Eigenkapital, etwa durch Einlagen, Beteiligungen oder einbehaltene Gewinne.',
      definition: [
        'Eigenfinanzierung beschafft Eigenkapital. Kapitalgeber sind Eigentümer oder Gesellschafter, die unternehmerisches Risiko tragen und keinen festen Tilgungsanspruch wie eine Bank haben.',
        'Typische Formen sind einbehaltene Gewinne, Gesellschaftereinlagen oder neue Beteiligungen. Vorteile sind Stabilität und weniger feste Zinszahlungen; Nachteile sind Kapitalbindung und mögliche Mitsprache.',
      ],
      kapitel: {
        titel: 'Eigen- & Fremdfinanzierung',
        href: '/lernen/wirtschaft/markt/eigenfremdfinanzierung',
      },
    },
  {
      id: 'eigenkapital',
      begriff: 'Eigenkapital',
      kurzdefinition: 'Kapital der Eigentümer, das Verluste mitträgt und nicht wie ein Darlehen fest zu tilgen ist.',
      definition: [
        'Eigenkapital steht dem Unternehmen grundsätzlich ohne festen Rückzahlungsplan zur Verfügung. Es kann durch Einlagen, Beteiligungen oder einbehaltene Gewinne entstehen.',
        'Mehr Eigenkapital kann die finanzielle Stabilität verbessern, bindet aber Mittel und kann Gewinn- oder Mitspracherechte auslösen.',
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
        'Eine höhere Eigenkapitalquote kann die Krisenfestigkeit und Bonität verbessern. Sie ersetzt aber keine Liquiditätsprüfung, weil Eigenkapital nicht automatisch Bargeld bedeutet.',
      ],
      kapitel: {
        titel: 'Eigen- & Fremdfinanzierung',
        href: '/lernen/wirtschaft/markt/eigenfremdfinanzierung',
      },
    },
  {
      id: 'einweisung',
      begriff: 'Einweisung',
      kurzdefinition: 'Konkrete Anleitung zur Nutzung eines Arbeitsplatzes, Geräts, Systems oder Ablaufs.',
      definition: [
        'Eine Einweisung ist enger als eine Schulung. Sie zeigt direkt, wie eine konkrete Bedienhandlung oder ein konkreter Ablauf funktioniert.',
        'Typisch sind kurze Termine am Arbeitsplatz, zum Beispiel MFA-App koppeln, neues Multifunktionsgerät bedienen oder ein Standardformular im Ticketsystem ausfuellen.',
      ],
      kapitel: {
        titel: 'Schulung, Einweisung, Key User und Multiplikatoren',
        href: '/lernen/projekt/service-management/schulung-einweisung-key-user',
      },
    },
  {
      id: 'einzelunternehmen',
      begriff: 'Einzelunternehmen',
      kurzdefinition: 'Unternehmen einer einzelnen Inhaberin oder eines einzelnen Inhabers.',
      definition: [
        'Beim Einzelunternehmen trägt eine einzelne Person das Unternehmen. Entscheidungen sind meist schnell und die Organisation ist einfach.',
        'Der zentrale Prüfungspunkt ist die Haftung: Der Inhaber trägt grundsätzlich das persönliche wirtschaftliche Risiko. Das unterscheidet das Einzelunternehmen von haftungsbeschränkten Kapitalgesellschaften.',
      ],
      kapitel: {
        titel: 'Organisationsformen, Leitbild, Nachhaltigkeit und ESG',
        href: '/lernen/wirtschaft/unternehmen/organisationsformen-leitbild-nachhaltigkeit-esg',
      },
    },
  {
      id: 'erfolgspflicht',
      begriff: 'Erfolgspflicht',
      kurzdefinition: 'Pflicht, ein vereinbartes Ergebnis herbeizuführen.',
      definition: [
        'Erfolgspflicht bedeutet, dass nicht nur ein Bemühen geschuldet ist, sondern ein konkret vereinbartes Ergebnis erreicht werden muss.',
        'Sie ist das wichtigste Signal für den Werkvertrag, etwa bei Reparatur, Installation, Individualentwicklung oder einem abnahmefähigen Projektstand.',
      ],
      kapitel: {
        titel: 'Vertragsarten: Kaufvertrag, Dienstvertrag und Werkvertrag',
        href: '/lernen/vertragsrecht/vertraege/vertragsarten',
      },
    },
  {
      id: 'erp-system',
      begriff: 'ERP-System',
      kurzdefinition: 'Ein ERP-System verbindet betriebliche Kernprozesse wie Einkauf, Lager, Auftrag, Rechnung und Controlling.',
      definition: [
        'ERP steht für Enterprise Resource Planning. ERP-Systeme unterstützen bereichsübergreifende Geschäftsprozesse und arbeiten typischerweise mit Modulen für Einkauf, Lager, Produktion, Vertrieb, Personal, Rechnungswesen und Controlling.',
        'Prüfungsrelevant: ERP erkennst du an Ressourcen, Aufträgen, Bestellungen, Beständen, Rechnungen, Kostenstellen und unternehmensweiten Prozessen.',
      ],
      kapitel: {
        titel: 'CRM, ERP, DMS und CMS',
        href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
      },
    },
  {
      id: 'esg',
      begriff: 'ESG',
      kurzdefinition: 'Raster für Umwelt, Soziales und verantwortliche Unternehmensführung.',
      definition: [
        'ESG steht für Environmental, Social und Governance. Es sortiert Verantwortung in Umweltaspekte, soziale Aspekte und Regeln der Unternehmensführung.',
        'In AP1-Aufgaben ordnest du Kriterien zu: Stromverbrauch und E-Waste zu Environmental, Schulung und Barrierefreiheit zu Social, Compliance und Kontrollen zu Governance.',
      ],
      kapitel: {
        titel: 'Organisationsformen, Leitbild, Nachhaltigkeit und ESG',
        href: '/lernen/wirtschaft/unternehmen/organisationsformen-leitbild-nachhaltigkeit-esg',
      },
    },
  {
      id: 'eva-prinzip',
      begriff: 'EVA-Prinzip',
      kurzdefinition: 'Das EVA-Prinzip strukturiert Algorithmen in Eingabe, Verarbeitung und Ausgabe.',
      definition: [
        'EVA hilft beim Entwurf von Pseudocode: Zürst klärst du, welche Daten hineinkommen, dann welche Verarbeitungsschritte nötig sind, und am Ende, welche Ausgabe erwartet wird.',
        'In Prüfungsaufgaben ist EVA auch ein Kontrollwerkzeug. Fehlt die Eingabe, ist der Algorithmus nicht startbar. Fehlt die Ausgabe, bleibt unklar, was die Lösung liefern soll.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
  {
      id: 'extrinsische-motivation',
      begriff: 'Extrinsische Motivation',
      kurzdefinition: 'Motivation durch äussere Folgen wie Geld, Lob, Bewertung, Status oder Sanktionen.',
      definition: [
        'Extrinsische Motivation kommt von außen: Belohnung, Anerkennung, Bonus, Note, Zertifikat, Status oder auch Druck und Sanktion.',
        'Prüfungsrelevant: Extrinsische Anreize können Verhalten anstossen, ersetzen aber nicht automatisch Sinn, Beteiligung, Kompetenz und gute Arbeitsbedingungen.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'farbtiefe',
      begriff: 'Farbtiefe',
      kurzdefinition: 'Die Farbtiefe gibt an, wie viele Bits pro Pixel für Farb- oder Helligkeitswerte gespeichert werden.',
      definition: [
        'Typische Farbtiefen in der AP1 sind 1 Bit (Schwarz/Weiß), 8 Bit (256 Graustufen oder Farben aus einer Palette), 24 Bit (RGB mit je 8 Bit pro Kanal, ca. 16,7 Mio. Farben) und 32 Bit (RGB plus Alpha-Kanal für Transparenz).',
        'Wichtig für die Rechnung: Farbtiefe wird in Bit pro Pixel angegeben. Wer 24 Bit fälschlich als 24 Byte verarbeitet, multipliziert mit dem Faktor 8 zu viel. Erst Pixelanzahl mal Farbtiefe ergibt Bits, dann durch 8 für Bytes.',
      ],
      kapitel: {
        titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
        href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
      },
    },
  {
      id: 'finance-leasing',
      begriff: 'Finance-Leasing',
      kurzdefinition: 'Langfristiges Leasing mit fester Grundmietzeit, finanzierungsähnlich gestaltet.',
      definition: [
        'Finance-Leasing hat eine feste Grundmietzeit (oft 40-90 % der betriebsgewöhnlichen Nutzungsdauer) und ist nicht ordentlich kündbar. Der Leasingnehmer trägt die Sach- und Preisrisiken; je nach Vertragstyp bilanziert er das Objekt sogar selbst (BMF-Leasingerlass).',
        'Der Vertrag ist wirtschaftlich näher am Kreditkauf als an einer Miete und wird oft mit Kauf- oder Andienungsrechten am Laufzeitende kombiniert.',
      ],
      kapitel: {
        titel: 'Kaufmännische Rechenaufgaben',
        href: '/lernen/wirtschaft/kalkulation/kaufmaennische-rechenaufgaben',
      },
    },
  {
      id: 'finanzierung',
      begriff: 'Finanzierung',
      kurzdefinition: 'Beschaffung und Ordnung von Kapital für Investitionen und laufende Zahlungen.',
      definition: [
        'Finanzierung beschreibt, wie ein Unternehmen Kapital bereitstellt, strukturiert und zurückführt, damit Investitionen, Betrieb und Wachstum bezahlt werden können.',
        'In AP1-Aufgaben geht es meist darum, Finanzierungsquellen zu unterscheiden, Anteile oder Zinsen zu berechnen und eine Entscheidung wirtschaftlich zu begründen.',
      ],
      kapitel: {
        titel: 'Eigen- & Fremdfinanzierung',
        href: '/lernen/wirtschaft/markt/eigenfremdfinanzierung',
      },
    },
  {
      id: 'firewall',
      begriff: 'Firewall',
      kurzdefinition: 'Eine Firewall kontrolliert Netzwerkverkehr zwischen Netzen oder auf einem Endgerät anhand von Regeln.',
      definition: [
        'Eine Firewall entscheidet anhand eines Regelwerks, ob Verkehr erlaubt oder blockiert wird. Typische Kriterien sind Quelle, Ziel, Port, Protokoll, Richtung und Verbindungszustand.',
        'Professionell wird eine Firewall nicht als Einzelschutz verstanden, sondern als Baustein einer Sicherheitsarchitektur mit Netzsegmentierung, Updates, Logging, Monitoring und klarer Administration.',
      ],
      kapitel: {
        titel: 'Firewall und DMZ',
        href: '/lernen/netzwerke/netz-sicherheit/firewall-dmz',
      },
    },
  {
      id: 'firewall-regel',
      begriff: 'Firewall-Regel',
      kurzdefinition: 'Eine Firewall-Regel erlaubt oder blockiert Netzwerkverkehr nach Kriterien wie Quelle, Ziel, Port und Protokoll.',
      definition: [
        'Firewall-Regeln beschreiben, welcher Verkehr erlaubt oder verboten ist. Typische Kriterien sind Quelladresse, Zieladresse, Protokoll, Port, Richtung und Verbindungszustand.',
        'Bei Port Forwarding müssen NAT-Regel und Firewall-Regel zusammenpassen: Die NAT-Regel übersetzt, die Firewall entscheidet, ob der Verkehr durch darf.',
      ],
      kapitel: {
        titel: 'Port Forwarding und NAT',
        href: '/lernen/netzwerke/netz-sicherheit/port-forwarding',
      },
    },
  {
      id: 'fixkosten',
      begriff: 'Fixkosten',
      kurzdefinition: 'Kosten, die unabhängig von der Ausbringungsmenge anfallen.',
      definition: [
        'Fixkosten fallen auch ohne Produktion an: Miete, Gehälter, Abschreibungen, Versicherungen, Leasingraten. Sie sind nur innerhalb einer Kapazitätsstufe konstant — überschreitet die Auslastung diese Stufe, springen die Fixkosten auf ein neues Niveau (sprungfixe Kosten).',
        'Im Vergleich zwischen zwei Investitionen sind Fixkosten der Block, der das Risiko bei niedriger Auslastung bestimmt.',
      ],
      kapitel: {
        titel: 'Variable & fixe Kosten',
        href: '/lernen/wirtschaft/kalkulation/variable-fixe-kosten',
      },
    },
  {
      id: 'forming',
      begriff: 'Forming',
      kurzdefinition: 'Orientierungsphase eines Teams mit Unsicherheit, Höflichkeit und vielen Fragen.',
      definition: [
        'In der Forming-Phase lernen sich Teammitglieder, Ziele, Rollen und Arbeitsweise kennen. Die Gruppe orientiert sich stark an der Leitung.',
        'Gute Maßnahmen sind Zielklärung, Rollenklärung, Kommunikationsregeln und ein gemeinsames Verständnis des Auftrags.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'fragebogen',
      begriff: 'Fragebogen (Erhebungsmethode)',
      kurzdefinition: 'Standardisierte schriftliche Befragung vieler Personen mit festem Fragenkatalog - liefert quantitativ vergleichbare Ergebnisse.',
      definition: [
        'Der Fragebogen erlaubt es, viele Personen mit identischen Fragen zu befragen und ihre Antworten zu zählen, zu vergleichen und statistisch auszuwerten. Frageformen: geschlossen (vorgegebene Antworten), offen (Freitext), Likert-Skala (Zustimmungsgrad in 5 oder 7 Stufen).',
        'Stärken: Skaliert, vergleichbar, anonym. Schwächen: keine Tiefe, abhängig von Fragequalität, suggestive Formulierungen verzerren das Ergebnis. Prüfungsfallen: Mehrfachfragen ("Finden Sie das System schnell und benutzerfreundlich?") und suggestive Fragen ("Stimmen Sie auch zu, dass...").',
      ],
      kapitel: {
        titel: 'Bedarfsanalyse, Kommunikation & Feedback',
        href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
      },
    },
  {
      id: 'fremdbezug',
      begriff: 'Fremdbezug',
      kurzdefinition: 'Beschaffung einer Leistung von einem externen Anbieter.',
      definition: [
        'Fremdbezug bedeutet, dass ein Unternehmen eine Leistung am Markt einkauft. Beispiele sind Standardsoftware, SaaS, externe Wartung, Outsourcing oder ein Dienstleisterprojekt.',
        'Er kann Startzeit und Spezialwissen sparen, erzeugt aber laufende Kosten, Koordinationsaufwand und Abhängigkeiten vom Anbieter.',
      ],
      kapitel: {
        titel: 'Make-or-Buy-Entscheidung',
        href: '/lernen/wirtschaft/entscheidung/make-or-buy',
      },
    },
  {
      id: 'fremdfinanzierung',
      begriff: 'Fremdfinanzierung',
      kurzdefinition: 'Finanzierung mit Fremdkapital, etwa durch Darlehen, Lieferantenkredit oder Anleihe.',
      definition: [
        'Fremdfinanzierung beschafft Kapital von Gläubigern. Das Kapital wird meist nur für eine begrenzte Zeit bereitgestellt und muss nach Vertrag zurückgezahlt werden.',
        'Typische Merkmale sind Laufzeit, Zins, Tilgung, Sicherheiten und Bonitätsprüfung. Der Gläubiger wird dadurch nicht automatisch Mit-Eigentümer.',
      ],
      kapitel: {
        titel: 'Eigen- & Fremdfinanzierung',
        href: '/lernen/wirtschaft/markt/eigenfremdfinanzierung',
      },
    },
  {
      id: 'fremdkapital',
      begriff: 'Fremdkapital',
      kurzdefinition: 'Kapital von Gläubigern, das vertraglich zurückzuzahlen ist und häufig Zinsen kostet.',
      definition: [
        'Fremdkapital umfasst Schulden und Verpflichtungen gegenüber Gläubigern, zum Beispiel Bankdarlehen, Lieferantenkredite, Anleihen oder sonstige Verbindlichkeiten.',
        'Es kann Investitionen ermöglichen, erhöht aber feste Zahlungsverpflichtungen und verschlechtert bei zu hohem Anteil die finanzielle Beweglichkeit.',
      ],
      kapitel: {
        titel: 'Eigen- & Fremdfinanzierung',
        href: '/lernen/wirtschaft/markt/eigenfremdfinanzierung',
      },
    },
  {
      id: 'frequenzband',
      begriff: 'Frequenzband',
      kurzdefinition: 'Funkbereich, in dem ein WLAN arbeitet, zum Beispiel 2,4 GHz, 5 GHz oder 6 GHz.',
      definition: [
        'Das Frequenzband beeinflusst Reichweite, Störanfälligkeit, Kanalanzahl und mögliche Datenrate. 2,4 GHz reicht weiter, ist aber oft voller; 5 GHz und 6 GHz bieten mehr Kapazität bei kürzerer Reichweite.',
        'Bei der Planung müssen Client-Fähigkeiten, Gebäude, Nachbar-WLANs und Störquellen berücksichtigt werden.',
      ],
      kapitel: {
        titel: 'WLAN-Standards und WLAN-Sicherheit',
        href: '/lernen/netzwerke/netz-sicherheit/wlan-standards',
      },
    },
  {
      id: 'fuehrende-null',
      begriff: 'Führende Null',
      kurzdefinition: 'Eine führende Null steht links vor einer Zahl und ändert ihren Wert nicht.',
      definition: [
        'Führende Nullen machen eine Zahl auf eine feste Länge, ohne den Wert zu verändern. Das ist bei Bitmustern nützlich, weil ein Byte immer acht Stellen hat.',
        'Beispiel: 101101₂ und 00101101₂ haben denselben Wert. Die zweite Schreibweise zeigt nur ausdrücklich alle 8 Bit.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'gateway',
      begriff: 'Standardgateway',
      kurzdefinition: 'Das Standardgateway ist die Router-Adresse, an die ein Host alle Pakete schickt, deren Ziel außerhalb des eigenen Subnetzes liegt.',
      definition: [
        'Das Standardgateway (englisch Default Gateway) ist die IP-Adresse des Routers im eigenen Subnetz. Liegt das Ziel im selben Subnetz, schickt der Host das Paket direkt an die Ziel-MAC. Liegt das Ziel außerhalb, schickt er es an die MAC des Gateways - dieses entscheidet dann, wohin es weitergeht.',
        'Prüfungsfalle: Das Gateway muss zwingend im gleichen Subnetz liegen wie der Host. Eine /24-IP 192.168.10.50 mit Gateway 192.168.20.1 funktioniert nicht. Ist das Gateway falsch oder leer, klappt der lokale Verkehr trotzdem - aber Internet und alle anderen Subnetze sind nicht erreichbar.',
      ],
      kapitel: {
        titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
        href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
      },
    },
  {
      id: 'gmbh',
      begriff: 'GmbH',
      kurzdefinition: 'Kapitalgesellschaft, bei der grundsätzlich das Gesellschaftsvermögen haftet.',
      definition: [
        'GmbH steht für Gesellschaft mit beschränkter Haftung. Sie hat eine eigene Rechtspersönlichkeit und kann selbst Rechte und Pflichten haben.',
        'Für Verbindlichkeiten haftet gegenüber Gläubigern grundsätzlich nur das Gesellschaftsvermögen. In AP1-Aufgaben ist das der wichtigste Unterschied zu persönlich haftenden Rechtsformen.',
      ],
      kapitel: {
        titel: 'Organisationsformen, Leitbild, Nachhaltigkeit und ESG',
        href: '/lernen/wirtschaft/unternehmen/organisationsformen-leitbild-nachhaltigkeit-esg',
      },
    },
  {
      id: 'handelskalkulation',
      begriff: 'Handelskalkulation',
      kurzdefinition: 'Schema zur schrittweisen Preisermittlung vom Listenpreis bis zum Bruttoverkaufspreis.',
      definition: [
        'Die Handelskalkulation führt vom Listeneinkaufspreis über Rabatt, Skonto, Bezugskosten, Handlungskosten und Gewinn zum Verkaufspreis.',
        'Skonto wird immer auf den Preis nach Rabatt berechnet. Rückwärtskalkulation dreht das Schema um, um z. B. Selbstkosten aus einem Endpreis zu ermitteln.',
      ],
      kapitel: {
        titel: 'Kaufmännische Rechenaufgaben',
        href: '/lernen/wirtschaft/kalkulation/kaufmaennische-rechenaufgaben',
      },
    },
  {
      id: 'hashfunktion',
      begriff: 'Hashfunktion',
      kurzdefinition: 'Einwegfunktion, die aus Daten einen Fingerabdruck fester Länge bildet.',
      definition: [
        'Eine kryptografische Hashfunktion soll aus gleicher Eingabe denselben Hash erzeugen, kleine Änderungen sichtbar machen und keine praktikable Rückrechnung auf die Eingabe erlauben.',
        'Hashwerte schützen Integrität, nicht Vertraulichkeit. Eine gehashte Datei ist nicht geheim; sie kann nur auf Veränderung geprüft werden.',
      ],
      kapitel: {
        titel: 'Verschlüsselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'hdd',
      begriff: 'HDD',
      kurzdefinition: 'Magnetische Festplatte mit rotierenden Scheiben; groß, günstig, mechanisch und langsam.',
      definition: [
        'HDD steht für Hard Disk Drive. Daten werden auf magnetisierten Scheiben gespeichert, die mit 5400 oder 7200 Umdrehungen pro Minute rotieren, ein Lesearm fahrt zur richtigen Spur.',
        'Vorteile: hohe Kapazität, niedriger Preis pro Gigabyte. Nachteile: mechanisch empfindlich, hörbar, langsame Zugriffszeiten. Typischer Einsatz: Archive, große Backup- und Mediendatenmengen.',
      ],
      kapitel: {
        titel: 'CPU, RAM und Massenspeicher',
        href: '/lernen/hardware/komponenten/cpu-ram-speicher',
      },
    },
  {
      id: 'hdmi',
      begriff: 'HDMI',
      kurzdefinition: 'Digitale Audio-/Videoschnittstelle; Standard im Consumer-Bereich, Fernseher, Beamer und Monitore.',
      definition: [
        'HDMI steht für High-Definition Multimedia Interface. Verschiedene Versionen unterscheiden sich in maximaler Auflösung und Bildrate: HDMI 1.4 4K@30Hz, HDMI 2.0 4K@60Hz, HDMI 2.1 bis zu 8K@60Hz oder 4K@120Hz.',
        'HDMI überträgt Bild und Ton sowie Steuerinformationen (CEC) und ist im Consumer-Markt dominant. Im professionellen IT-Umfeld wird oft DisplayPort bevorzugt, weil es Daisy-Chaining und höhere Bildraten in frühen Versionen bot.',
      ],
      kapitel: {
        titel: 'Hardware, Schnittstellen & Peripherie auswählen',
        href: '/lernen/hardware/schnittstellen/hardware-schnittstellen',
      },
    },
  {
      id: 'hexadezimal',
      begriff: 'Hexadezimal',
      kurzdefinition: 'Hexadezimal ist ein Stellenwertsystem mit der Basis 16.',
      definition: [
        'Das Hexadezimalsystem verwendet die Ziffern 0 bis 9 und die Buchstaben A bis F. Eine Hexadezimalstelle entspricht vier Bits.',
        'Es wird häufig genutzt, um binäre Werte kompakter darzustellen, zum Beispiel bei Farben, Speicheradressen oder MAC-Adressen.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'hex-ziffer',
      begriff: 'Hex-Ziffer',
      kurzdefinition: 'Eine Hex-Ziffer ist eine einzelne Stelle im Hexadezimalsystem: 0-9 oder A-F.',
      definition: [
        'Die Hex-Ziffern A bis F stehen für die Dezimalwerte 10 bis 15. Eine einzelne Hex-Ziffer passt genau zu vier Bits, also einem Nibble.',
        'Beispiel: C ist 12 und wird binär als 1100 geschrieben; F ist 15 und wird als 1111 geschrieben.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'host',
      begriff: 'Host',
      kurzdefinition: 'Ein Host ist ein adressierbares Gerät oder System in einem Netzwerk.',
      definition: [
        'Host ist ein Sammelbegriff für ein System, das in einem Netzwerk mit eigener Adresse erreichbar ist, zum Beispiel Client, Server, Drucker, VM oder Router-Interface.',
        'Wichtig: In IPv4-Aufgaben meint Host oft nicht den ganzen Computer als Gehäuse, sondern eine nutzbare Adresse innerhalb eines Subnetzes.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'hostadresse',
      begriff: 'Hostadresse',
      kurzdefinition: 'Eine Hostadresse ist eine nutzbare IP-Adresse für ein Gerät innerhalb eines Subnetzes.',
      definition: [
        'Hostadressen liegen zwischen Netzadresse und Broadcast-Adresse. In 192.168.10.0/24 sind 192.168.10.1 bis 192.168.10.254 typische nutzbare Hostadressen.',
        'Die Netzadresse und die Broadcast-Adresse sind in normalen IPv4-Subnetzen nicht als Hostadresse nutzbar.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'hostanteil',
      begriff: 'Hostanteil',
      kurzdefinition: 'Der Hostanteil adressiert ein einzelnes Gerät innerhalb eines IP-Netzes.',
      definition: [
        'Der Hostanteil besteht aus den Bits, die nicht zum Netzanteil gehören. Mit ihnen werden die einzelnen Adressen innerhalb eines Subnetzes gebildet.',
        'Je mehr Host-Bits vorhanden sind, desto mehr Adressen gibt es im Subnetz.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'hybrides-it-system',
      begriff: 'Hybrides IT-System',
      kurzdefinition: 'IT-Architektur, die zentrale und dezentrale Anteile bewusst kombiniert.',
      definition: [
        'Ein hybrides IT-System nutzt zentrale Dienste für gemeinsame Daten, Identitäten oder Backups und erlaubt gleichzeitig lokale Komponenten, etwa Offline-Synchronisation, lokale Caches oder Standortserver.',
        'Hybride Architekturen sind realistisch, brauchen aber klare Datenflüsse, Verantwortlichkeiten und Synchronisationsregeln.',
      ],
      kapitel: {
        titel: 'Zentrale vs. dezentrale IT-Systeme',
        href: '/lernen/betriebssysteme/it-infrastruktur/zentral-dezentral',
      },
    },
  {
      id: 'gleitkomma',
      begriff: 'Gleitkomma',
      kurzdefinition: 'Gleitkomma ist eine Zahlendarstellung für Kommazahlen mit begrenzter Genauigkeit.',
      definition: [
        'Gleitkommazahlen speichern eine Zahl grob wie wissenschaftliche Schreibweise: Vorzeichen, Mantisse und Exponent. Dadurch passen sehr kleine und sehr große Werte in eine feste Bitbreite.',
        'Der Preis ist Rundung. Viele Dezimalzahlen, zum Beispiel 0,1, sind binär nicht exakt darstellbar.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'hybrides-verfahren',
      begriff: 'Hybrides Verfahren',
      kurzdefinition: 'Kombiniert asymmetrische Kryptographie für den Start mit symmetrischer Kryptographie für Nutzdaten.',
      definition: [
        'Hybride Verfahren lösen den Zielkonflikt: Asymmetrisch hilft beim sicheren Start und bei der Authentizität, symmetrisch ist schnell für die laufende Datenübertragung.',
        'TLS ist das typische AP1-Beispiel: Zertifikat prüfen, Schlüssel aushandeln, danach Nutzdaten mit Sitzungsschlüsseln schützen.',
      ],
      kapitel: {
        titel: 'Verschlüsselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'hygienefaktoren',
      begriff: 'Hygienefaktoren',
      kurzdefinition: 'Arbeitsbedingungen, deren Fehlen Unzufriedenheit erzeugt, zum Beispiel Bezahlung, Ausstattung und klare Regeln.',
      definition: [
        'Hygienefaktoren sind Grundbedingungen der Arbeit. Wenn sie schlecht sind, entsteht Unzufriedenheit; wenn sie gut sind, verhindern sie vor allem Frust.',
        'Im IT-Projekt gehören dazu vernünftige Tools, Zeit für Schulung, klare Rollen, erreichbarer Support und faire Information.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
]
