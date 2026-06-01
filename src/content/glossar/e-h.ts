import type { GlossarEintrag } from "../../lib/glossar/types"

export const eBisH: GlossarEintrag[] = [
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
      id: 'ecc-ram',
      begriff: 'ECC-RAM',
      kurzdefinition: 'Arbeitsspeicher mit Fehlerkorrektur; erkennt und korrigiert einzelne Bitfehler im Betrieb.',
      definition: [
        'ECC steht für Error-Correcting Code. ECC-RAM enthaelt zusaetzliche Pruefbits (typisch 9 Speicherchips statt 8 pro Riegel), mit denen Einzelbitfehler erkannt und korrigiert sowie Mehrfachfehler erkannt werden können.',
        'ECC-RAM wird in Servern, Workstations und kritischen Systemen eingesetzt, in denen ein unbemerkter Speicherfehler Datenkorruption verursachen wuerde. Voraussetzung sind ECC-faehige CPU, Mainboard und passende Module.',
      ],
      kapitel: {
        titel: 'Hardware, Schnittstellen & Peripherie auswaehlen',
        href: '/lernen/hardware/schnittstellen/hardware-schnittstellen',
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
        'Eigenfinanzierung beschafft Eigenkapital. Kapitalgeber sind Eigentuemer oder Gesellschafter, die unternehmerisches Risiko tragen und keinen festen Tilgungsanspruch wie eine Bank haben.',
        'Typische Formen sind einbehaltene Gewinne, Gesellschaftereinlagen oder neue Beteiligungen. Vorteile sind Stabilitaet und weniger feste Zinszahlungen; Nachteile sind Kapitalbindung und mögliche Mitsprache.',
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
      id: 'einweisung',
      begriff: 'Einweisung',
      kurzdefinition: 'Konkrete Anleitung zur Nutzung eines Arbeitsplatzes, Geräts, Systems oder Ablaufs.',
      definition: [
        'Eine Einweisung ist enger als eine Schulung. Sie zeigt direkt, wie eine konkrete Bedienhandlung oder ein konkreter Ablauf funktioniert.',
        'Typisch sind kurze Termine am Arbeitsplatz, zum Beispiel MFA-App koppeln, neues Multifunktionsgeraet bedienen oder ein Standardformular im Ticketsystem ausfuellen.',
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
        'Beim Einzelunternehmen traegt eine einzelne Person das Unternehmen. Entscheidungen sind meist schnell und die Organisation ist einfach.',
        'Der zentrale Pruefungspunkt ist die Haftung: Der Inhaber traegt grundsaetzlich das persoenliche wirtschaftliche Risiko. Das unterscheidet das Einzelunternehmen von haftungsbeschraenkten Kapitalgesellschaften.',
      ],
      kapitel: {
        titel: 'Organisationsformen, Leitbild, Nachhaltigkeit und ESG',
        href: '/lernen/wirtschaft/unternehmen/organisationsformen-leitbild-nachhaltigkeit-esg',
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
      id: 'erp-system',
      begriff: 'ERP-System',
      kurzdefinition: 'Ein ERP-System verbindet betriebliche Kernprozesse wie Einkauf, Lager, Auftrag, Rechnung und Controlling.',
      definition: [
        'ERP steht für Enterprise Resource Planning. ERP-Systeme unterstuetzen bereichsübergreifende Geschaeftsprozesse und arbeiten typischerweise mit Modulen für Einkauf, Lager, Produktion, Vertrieb, Personal, Rechnungswesen und Controlling.',
        'Pruefungsrelevant: ERP erkennst du an Ressourcen, Auftraegen, Bestellungen, Bestaenden, Rechnungen, Kostenstellen und unternehmensweiten Prozessen.',
      ],
      kapitel: {
        titel: 'CRM, ERP, DMS und CMS',
        href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
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
      id: 'eva-prinzip',
      begriff: 'EVA-Prinzip',
      kurzdefinition: 'Das EVA-Prinzip strukturiert Algorithmen in Eingabe, Verarbeitung und Ausgabe.',
      definition: [
        'EVA hilft beim Entwurf von Pseudocode: Zuerst klaerst du, welche Daten hineinkommen, dann welche Verarbeitungsschritte nötig sind, und am Ende, welche Ausgabe erwartet wird.',
        'In Pruefungsaufgaben ist EVA auch ein Kontrollwerkzeug. Fehlt die Eingabe, ist der Algorithmus nicht startbar. Fehlt die Ausgabe, bleibt unklar, was die Loesung liefern soll.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
  {
      id: 'extrinsische-motivation',
      begriff: 'Extrinsische Motivation',
      kurzdefinition: 'Motivation durch aeussere Folgen wie Geld, Lob, Bewertung, Status oder Sanktionen.',
      definition: [
        'Extrinsische Motivation kommt von aussen: Belohnung, Anerkennung, Bonus, Note, Zertifikat, Status oder auch Druck und Sanktion.',
        'Pruefungsrelevant: Extrinsische Anreize können Verhalten anstossen, ersetzen aber nicht automatisch Sinn, Beteiligung, Kompetenz und gute Arbeitsbedingungen.',
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
        'Typische Farbtiefen in der AP1 sind 1 Bit (Schwarz/Weiss), 8 Bit (256 Graustufen oder Farben aus einer Palette), 24 Bit (RGB mit je 8 Bit pro Kanal, ca. 16,7 Mio. Farben) und 32 Bit (RGB plus Alpha-Kanal für Transparenz).',
        'Wichtig für die Rechnung: Farbtiefe wird in Bit pro Pixel angegeben. Wer 24 Bit faelschlich als 24 Byte verarbeitet, multipliziert mit dem Faktor 8 zu viel. Erst Pixelanzahl mal Farbtiefe ergibt Bits, dann durch 8 für Bytes.',
      ],
      kapitel: {
        titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
        href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
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
      id: 'firewall',
      begriff: 'Firewall',
      kurzdefinition: 'Eine Firewall kontrolliert Netzwerkverkehr zwischen Netzen oder auf einem Endgeraet anhand von Regeln.',
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
        'Bei Port Forwarding muessen NAT-Regel und Firewall-Regel zusammenpassen: Die NAT-Regel uebersetzt, die Firewall entscheidet, ob der Verkehr durch darf.',
      ],
      kapitel: {
        titel: 'Port Forwarding und NAT',
        href: '/lernen/netzwerke/netz-sicherheit/port-forwarding',
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
      id: 'forming',
      begriff: 'Forming',
      kurzdefinition: 'Orientierungsphase eines Teams mit Unsicherheit, Hoeflichkeit und vielen Fragen.',
      definition: [
        'In der Forming-Phase lernen sich Teammitglieder, Ziele, Rollen und Arbeitsweise kennen. Die Gruppe orientiert sich stark an der Leitung.',
        'Gute Massnahmen sind Zielklaerung, Rollenklaerung, Kommunikationsregeln und ein gemeinsames Verstaendnis des Auftrags.',
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
        'Der Fragebogen erlaubt es, viele Personen mit identischen Fragen zu befragen und ihre Antworten zu zaehlen, zu vergleichen und statistisch auszuwerten. Frageformen: geschlossen (vorgegebene Antworten), offen (Freitext), Likert-Skala (Zustimmungsgrad in 5 oder 7 Stufen).',
        'Staerken: Skaliert, vergleichbar, anonym. Schwaechen: keine Tiefe, abhaengig von Fragequalitaet, suggestive Formulierungen verzerren das Ergebnis. Pruefungsfallen: Mehrfachfragen ("Finden Sie das System schnell und benutzerfreundlich?") und suggestive Fragen ("Stimmen Sie auch zu, dass...").',
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
        'Er kann Startzeit und Spezialwissen sparen, erzeugt aber laufende Kosten, Koordinationsaufwand und Abhaengigkeiten vom Anbieter.',
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
        'Fremdfinanzierung beschafft Kapital von Glaeubigern. Das Kapital wird meist nur für eine begrenzte Zeit bereitgestellt und muss nach Vertrag zurueckgezahlt werden.',
        'Typische Merkmale sind Laufzeit, Zins, Tilgung, Sicherheiten und Bonitaetspruefung. Der Glaeubiger wird dadurch nicht automatisch Mit-Eigentuemer.',
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
      id: 'frequenzband',
      begriff: 'Frequenzband',
      kurzdefinition: 'Funkbereich, in dem ein WLAN arbeitet, zum Beispiel 2,4 GHz, 5 GHz oder 6 GHz.',
      definition: [
        'Das Frequenzband beeinflusst Reichweite, Stoeranfaelligkeit, Kanalanzahl und moegliche Datenrate. 2,4 GHz reicht weiter, ist aber oft voller; 5 GHz und 6 GHz bieten mehr Kapazitaet bei kuerzerer Reichweite.',
        'Bei der Planung muessen Client-Faehigkeiten, Gebaeude, Nachbar-WLANs und Stoerquellen beruecksichtigt werden.',
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
        'Pruefungsfalle: Das Gateway muss zwingend im gleichen Subnetz liegen wie der Host. Eine /24-IP 192.168.10.50 mit Gateway 192.168.20.1 funktioniert nicht. Ist das Gateway falsch oder leer, klappt der lokale Verkehr trotzdem - aber Internet und alle anderen Subnetze sind nicht erreichbar.',
      ],
      kapitel: {
        titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
        href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
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
      id: 'hashfunktion',
      begriff: 'Hashfunktion',
      kurzdefinition: 'Einwegfunktion, die aus Daten einen Fingerabdruck fester Laenge bildet.',
      definition: [
        'Eine kryptografische Hashfunktion soll aus gleicher Eingabe denselben Hash erzeugen, kleine Aenderungen sichtbar machen und keine praktikable Rueckrechnung auf die Eingabe erlauben.',
        'Hashwerte schuetzen Integritaet, nicht Vertraulichkeit. Eine gehashte Datei ist nicht geheim; sie kann nur auf Veraenderung geprueft werden.',
      ],
      kapitel: {
        titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'hdd',
      begriff: 'HDD',
      kurzdefinition: 'Magnetische Festplatte mit rotierenden Scheiben; groß, guenstig, mechanisch und langsam.',
      definition: [
        'HDD steht für Hard Disk Drive. Daten werden auf magnetisierten Scheiben gespeichert, die mit 5400 oder 7200 Umdrehungen pro Minute rotieren, ein Lesearm fahrt zur richtigen Spur.',
        'Vorteile: hohe Kapazitaet, niedriger Preis pro Gigabyte. Nachteile: mechanisch empfindlich, hoerbar, langsame Zugriffszeiten. Typischer Einsatz: Archive, große Backup- und Mediendatenmengen.',
      ],
      kapitel: {
        titel: 'Hardware, Schnittstellen & Peripherie auswaehlen',
        href: '/lernen/hardware/schnittstellen/hardware-schnittstellen',
      },
    },
  {
      id: 'hdmi',
      begriff: 'HDMI',
      kurzdefinition: 'Digitale Audio-/Videoschnittstelle; Standard im Consumer-Bereich, Fernseher, Beamer und Monitore.',
      definition: [
        'HDMI steht für High-Definition Multimedia Interface. Verschiedene Versionen unterscheiden sich in maximaler Aufloesung und Bildrate: HDMI 1.4 4K@30Hz, HDMI 2.0 4K@60Hz, HDMI 2.1 bis zu 8K@60Hz oder 4K@120Hz.',
        'HDMI überträgt Bild und Ton sowie Steuerinformationen (CEC) und ist im Consumer-Markt dominant. Im professionellen IT-Umfeld wird oft DisplayPort bevorzugt, weil es Daisy-Chaining und hoehere Bildraten in fruehen Versionen bot.',
      ],
      kapitel: {
        titel: 'Hardware, Schnittstellen & Peripherie auswaehlen',
        href: '/lernen/hardware/schnittstellen/hardware-schnittstellen',
      },
    },
  {
      id: 'hexadezimal',
      begriff: 'Hexadezimal',
      kurzdefinition: 'Hexadezimal ist ein Stellenwertsystem mit der Basis 16.',
      definition: [
        'Das Hexadezimalsystem verwendet die Ziffern 0 bis 9 und die Buchstaben A bis F. Eine Hexadezimalstelle entspricht vier Bits.',
        'Es wird haeufig genutzt, um binaere Werte kompakter darzustellen, zum Beispiel bei Farben, Speicheradressen oder MAC-Adressen.',
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
        'Wichtig: In IPv4-Aufgaben meint Host oft nicht den ganzen Computer als Gehaeuse, sondern eine nutzbare Adresse innerhalb eines Subnetzes.',
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
        'Ein hybrides IT-System nutzt zentrale Dienste fuer gemeinsame Daten, Identitaeten oder Backups und erlaubt gleichzeitig lokale Komponenten, etwa Offline-Synchronisation, lokale Caches oder Standortserver.',
        'Hybride Architekturen sind realistisch, brauchen aber klare Datenfluesse, Verantwortlichkeiten und Synchronisationsregeln.',
      ],
      kapitel: {
        titel: 'Zentrale vs. dezentrale IT-Systeme',
        href: '/lernen/betriebssysteme/it-infrastruktur/zentral-dezentral',
      },
    },
  {
      id: 'hybrides-verfahren',
      begriff: 'Hybrides Verfahren',
      kurzdefinition: 'Kombiniert asymmetrische Kryptographie für den Start mit symmetrischer Kryptographie für Nutzdaten.',
      definition: [
        'Hybride Verfahren loesen den Zielkonflikt: Asymmetrisch hilft beim sicheren Start und bei der Authentizitaet, symmetrisch ist schnell für die laufende Datenübertragung.',
        'TLS ist das typische AP1-Beispiel: Zertifikat pruefen, Schluessel aushandeln, danach Nutzdaten mit Sitzungsschluesseln schuetzen.',
      ],
      kapitel: {
        titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'hygienefaktoren',
      begriff: 'Hygienefaktoren',
      kurzdefinition: 'Arbeitsbedingungen, deren Fehlen Unzufriedenheit erzeugt, zum Beispiel Bezahlung, Ausstattung und klare Regeln.',
      definition: [
        'Hygienefaktoren sind Grundbedingungen der Arbeit. Wenn sie schlecht sind, entsteht Unzufriedenheit; wenn sie gut sind, verhindern sie vor allem Frust.',
        'Im IT-Projekt gehören dazu vernuenftige Tools, Zeit für Schulung, klare Rollen, erreichbarer Support und faire Information.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
]
