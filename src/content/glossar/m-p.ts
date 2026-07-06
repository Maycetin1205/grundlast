import type { GlossarEintrag } from "../../lib/glossar/types"

export const mBisP: GlossarEintrag[] = [
  {
      id: 'mac',
      begriff: 'MAC-Adresse',
      kurzdefinition: 'Eine MAC-Adresse ist die Hardwareadresse einer Netzwerkschnittstelle.',
      definition: [
        'Eine MAC-Adresse arbeitet auf der Sicherungsschicht und identifiziert eine Netzwerkschnittstelle innerhalb eines lokalen Netzes.',
        'Sie wird typischerweise hexadezimal geschrieben, zum Beispiel AA:BB:CC:DD:EE:FF.',
      ],
      kapitel: {
        titel: 'OSI-Modell - sieben Schichten',
        href: '/lernen/netzwerke/grundlagen-netz/osi-modell',
      },
    },
  {
      id: 'magic-number',
      begriff: 'Magic Number',
      kurzdefinition: 'Die Magic Number ist die Schrittweite, mit der Subnetze im relevanten Oktett beginnen.',
      definition: [
        'Die Magic Number berechnest du mit 256 minus dem Maskenwert im interessanten Oktett. Bei 255.255.255.192 ist sie 64.',
        'Die Subnetze beginnen dann bei 0, 64, 128 und 192. Diese Methode ist eine schnelle Kopf-Rechenhilfe für viele IPv4-Aufgaben.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'mainboard',
      begriff: 'Mainboard',
      kurzdefinition: 'Hauptplatine eines Rechners; verbindet CPU, RAM, Erweiterungskarten und Peripherie.',
      definition: [
        'Das Mainboard (oder Motherboard) ist die zentrale Leiterplatte eines Rechners. Es traegt CPU-Sockel, RAM-Slots, Chipsatz, PCIe-Slots, M.2-Steckplaetze, SATA-Ports, USB-Header und das BIOS/UEFI.',
        'Die Auswahl wird vom CPU-Sockel und Chipsatz vorgegeben: Eine moderne CPU passt nur in einen kompatiblen Sockel (z. B. AM5 oder LGA 1700). Der Chipsatz bestimmt, wie viele PCIe-Lanes, USB-Ports und Speichersteckplaetze zur Verfuegung stehen.',
      ],
      kapitel: {
        titel: 'Hardware, Schnittstellen & Peripherie auswaehlen',
        href: '/lernen/hardware/schnittstellen/hardware-schnittstellen',
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
      id: 'maximumprinzip',
      begriff: 'Maximumprinzip',
      kurzdefinition: 'BSI-Grundregel: ein System übernimmt den hoechsten Schutzbedarf der Prozesse oder Daten, die es verarbeitet.',
      definition: [
        'Das Maximumprinzip vermeidet, dass eine Schutzbedarfsbewertung kuenstlich heruntergebrochen wird. Verarbeitet ein Server mehrere Anwendungen, gilt für ihn der hoechste Schutzbedarf der beteiligten Prozesse.',
        'Davon abweichen darf man nur mit Begruendung, etwa wenn der Kumulationseffekt oder der Verteilungseffekt das Bild aendert.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'medienbruch',
      begriff: 'Medienbruch',
      kurzdefinition: 'Ein Medienbruch unterbricht einen digitalen Prozess, oft durch manuelle Übertragung zwischen Systemen oder Medien.',
      definition: [
        'Ein Medienbruch entsteht, wenn Informationen nicht durchgaengig digital weiterverarbeitet werden, sondern zum Beispiel aus E-Mail, Papier oder Excel manuell in ein anderes System übertragen werden.',
        'Typische Folgen sind Fehler, Zeitverlust, Doppelarbeit und widerspruechliche Datenstaende. In Aufgaben ist eine Schnittstelle oft eine passende Gegenmassnahme.',
      ],
      kapitel: {
        titel: 'CRM, ERP, DMS und CMS',
        href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
      },
    },
  {
      id: 'mft',
      begriff: 'MFT (Master File Table)',
      kurzdefinition: 'Zentrale Tabelle in NTFS, die alle Dateien und Verzeichnisse des Datentraegers verwaltet.',
      definition: [
        'Die Master File Table ist das Herzstueck von NTFS. Sie enthaelt fuer jede Datei und jedes Verzeichnis einen Eintrag mit Metadaten, Rechten, Zeitstempeln und Verweisen auf die Datenbloecke. Bei sehr kleinen Dateien speichert NTFS die Inhalte sogar direkt im MFT-Eintrag.',
        'Wenn die MFT beschaedigt wird, ist der gesamte Datentraeger nicht mehr lesbar. Deshalb haelt NTFS eine Kopie der ersten MFT-Eintraege als Sicherheit vor.',
      ],
      kapitel: {
        titel: 'Dateisysteme (FAT32, NTFS, ext4, APFS)',
        href: '/lernen/betriebssysteme/os-grundlagen/dateisysteme',
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
      id: 'mitarbeitermotivation',
      begriff: 'Mitarbeitermotivation',
      kurzdefinition: 'Gruende, aus denen Mitarbeitende Aufgaben annehmen, ausdauernd bearbeiten und Verantwortung übernehmen.',
      definition: [
        'Mitarbeitermotivation beschreibt innere und aeussere Antriebe im Arbeitskontext. Sie entsteht nicht durch Befehl, sondern wird durch Arbeitsbedingungen, Sinn, Anerkennung, Beteiligung und Entwicklung beeinflusst.',
        'Pruefungsrelevant: In IT-Projekten entscheidet Motivation mit darüber, ob neue Systeme, Prozesse oder Rollen wirklich genutzt werden.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'motivatoren',
      begriff: 'Motivatoren',
      kurzdefinition: 'Faktoren, die Zufriedenheit und Engagement foerdern, etwa Anerkennung, Erfolg, Verantwortung und Entwicklung.',
      definition: [
        'Motivatoren erzeugen positive Arbeitszufriedenheit, weil sie den Inhalt der Arbeit aufwerten: Leistung wird sichtbar, Verantwortung wird übertragen, Entwicklung ist möglich.',
        'Bei IT-Changes sind Motivatoren zum Beispiel Key-User-Verantwortung, sichtbare Quick Wins, Anerkennung für gute Rueckmeldungen und echte Mitsprache.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'mtbf',
      begriff: 'MTBF',
      kurzdefinition: 'MTBF beschreibt die mittlere Zeit zwischen zwei Ausfaellen reparierbarer Systeme.',
      definition: [
        'MTBF steht für Mean Time Between Failures. Der Wert wird für reparierbare Systeme verwendet und beschreibt den durchschnittlichen Zeitraum zwischen Ausfaellen.',
        'Er ist ein Zuverlaessigkeitswert, aber keine Garantie für die Laufzeit eines einzelnen konkreten Geräts.',
      ],
      kapitel: {
        titel: 'MTBF & MTTF - Ausfallwahrscheinlichkeit',
        href: '/lernen/sicherheit/betrieb-sicherheit/mtbf-mttf',
      },
    },
  {
      id: 'mttf',
      begriff: 'MTTF',
      kurzdefinition: 'MTTF beschreibt die mittlere Zeit bis zum Ausfall nicht reparierbarer Systeme.',
      definition: [
        'MTTF steht für Mean Time To Failure. Der Wert wird für Komponenten genutzt, die nach einem Ausfall nicht repariert, sondern ersetzt werden.',
        'In Aufgaben musst du MTBF und MTTF anhand der Reparierbarkeit sauber unterscheiden.',
      ],
      kapitel: {
        titel: 'MTBF & MTTF - Ausfallwahrscheinlichkeit',
        href: '/lernen/sicherheit/betrieb-sicherheit/mtbf-mttf',
      },
    },
  {
      id: 'multiplikator',
      begriff: 'Multiplikator',
      kurzdefinition: 'Person, die vorbereitetes Wissen im eigenen Bereich weitergibt und erste Fragen auffaengt.',
      definition: [
        'Multiplikatoren tragen Wissen in Teams, Schichten, Standorte oder Fachbereiche. Sie sind nah an der Praxis und wirken deshalb oft glaubwuerdiger als eine anonyme Rundmail.',
        'Sie brauchen klare Materialien, Zeit und Rueckkanal zum Projektteam. Ohne diese Basis verbreiten sie leicht unterschiedliche oder unvollständige Informationen.',
      ],
      kapitel: {
        titel: 'Schulung, Einweisung, Key User und Multiplikatoren',
        href: '/lernen/projekt/service-management/schulung-einweisung-key-user',
      },
    },
  {
      id: 'multitasking',
      begriff: 'Multitasking',
      kurzdefinition: 'Faehigkeit eines Betriebssystems, mehrere Aufgaben scheinbar gleichzeitig auszufuehren.',
      definition: [
        'Beim Multitasking teilt das Betriebssystem CPU-Zeit auf mehrere lauffaehige Threads oder Tasks auf. Auf einem Kern geschieht das durch schnelles Umschalten, auf mehreren Kernen kann echte Parallelitaet entstehen.',
        'Pruefungsrelevant: Multitasking ist nicht automatisch echte parallele Berechnung. Dafuer braucht es mehrere Kerne oder Prozessoren und parallelisierbare Arbeit.',
      ],
      kapitel: {
        titel: 'Prozesse, Threads und Tasks',
        href: '/lernen/betriebssysteme/os-grundlagen/prozess-thread',
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
      id: 'nameserver',
      begriff: 'Nameserver',
      kurzdefinition: 'Ein Nameserver ist ein DNS-Server, der Anfragen zu Domainnamen beantwortet - rekursiv aufloesend oder autoritativ für eine Zone.',
      definition: [
        'Ein rekursiver Nameserver (Resolver) nimmt die Anfrage eines Clients an und durchläuft die DNS-Hierarchie - Root-Server, dann TLD-Server (.de, .com), dann den autoritativen Server der Zone - bis er eine Antwort hat. Ein autoritativer Nameserver ist für eine bestimmte Zone (z. B. example.org) verantwortlich und liefert die offiziellen Datensaetze.',
        'In den Netzwerkeinstellungen siehst du meist zwei oder drei Nameserver - der Client fragt sie der Reihe nach. Pruefungsfalle: Ohne erreichbaren Nameserver funktionieren Domain-Aufrufe nicht, aber ein Ping auf eine IP-Adresse geht weiterhin. Genau diese Trennung ist die Standard-Diagnose-Frage.',
      ],
      kapitel: {
        titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
        href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
      },
    },
  {
      id: 'napt',
      begriff: 'NAPT/PAT',
      kurzdefinition: 'NAPT oder PAT uebersetzt neben IP-Adressen auch Portnummern.',
      definition: [
        'NAPT steht fuer Network Address Port Translation, PAT fuer Port Address Translation. Beide Begriffe beschreiben, dass mehrere interne Hosts ueber unterschiedliche Portzuordnungen eine oeffentliche IPv4-Adresse teilen koennen.',
        'Typisch ist der Heimrouter: Viele Clients bauen Verbindungen nach aussen auf, der Router merkt sich die Zuordnung von interner Adresse, internem Port und externem Port.',
      ],
      kapitel: {
        titel: 'Port Forwarding und NAT',
        href: '/lernen/netzwerke/netz-sicherheit/port-forwarding',
      },
    },
  {
      id: 'nat',
      begriff: 'NAT',
      kurzdefinition: 'NAT uebersetzt IP-Adressen zwischen unterschiedlichen Adressraeumen.',
      definition: [
        'NAT steht fuer Network Address Translation. Ein NAT-Geraet veraendert IP-Adressen in Paketen, zum Beispiel zwischen privatem LAN und oeffentlichem Internet.',
        'NAT wird haeufig eingesetzt, damit private IPv4-Netze ueber eine oeffentliche Adresse kommunizieren koennen. Es ersetzt aber keine durchdachte Firewall- und Sicherheitsarchitektur.',
      ],
      kapitel: {
        titel: 'Port Forwarding und NAT',
        href: '/lernen/netzwerke/netz-sicherheit/port-forwarding',
      },
    },
  {
      id: 'netzadresse',
      begriff: 'Netzadresse',
      kurzdefinition: 'Die Netzadresse ist die erste Adresse eines Subnetzes und beschreibt das Subnetz selbst.',
      definition: [
        'Bei der Netzadresse sind alle Host-Bits 0. Sie wird nicht an einen normalen Host vergeben.',
        'Aus IP-Adresse und Subnetzmaske berechnest du die Netzadresse mit einer bitweisen UND-Verknuepfung oder mit der Magic-Number-Methode.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'netzanteil',
      begriff: 'Netzanteil',
      kurzdefinition: 'Der Netzanteil zeigt, zu welchem IP-Netz eine Adresse gehört.',
      definition: [
        'Der Netzanteil besteht aus den Bits, die durch die Subnetzmaske oder Präfixlänge auf 1 gesetzt sind.',
        'Hosts mit gleichem Netzanteil liegen im selben IPv4-Subnetz und können direkt miteinander kommunizieren, sofern Layer 2 und Firewall-Regeln passen.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'netzsegmentierung',
      begriff: 'Netzsegmentierung',
      kurzdefinition: 'Netzsegmentierung teilt ein Netzwerk in getrennte Bereiche mit kontrollierten Uebergaengen.',
      definition: [
        'Bei der Netzsegmentierung werden Bereiche wie Clients, Server, DMZ, Management, Produktion oder Gastnetz voneinander getrennt.',
        'Ziel ist, Kommunikation zu begrenzen und die Ausbreitung von Angriffen oder Fehlkonfigurationen einzudaemmen. Uebergaenge werden typischerweise durch Firewalls oder Layer-3-Regeln kontrolliert.',
      ],
      kapitel: {
        titel: 'Firewall und DMZ',
        href: '/lernen/netzwerke/netz-sicherheit/firewall-dmz',
      },
    },
  {
      id: 'nibble',
      begriff: 'Nibble',
      kurzdefinition: 'Ein Nibble besteht aus vier Bit und entspricht genau einer Hexadezimalstelle.',
      definition: [
        'Ein Nibble ist die Haelfte eines Bytes. Vier Bits können 16 verschiedene Werte darstellen.',
        'Deshalb passt ein Nibble exakt zu einer Hexadezimalziffer von 0 bis F.',
      ],
      kapitel: {
        titel: 'Bit & Byte - die kleinsten Einheiten',
        href: '/lernen/grundlagen/zahlen/bit-byte',
      },
    },
  {
      id: 'nichtabstreitbarkeit',
      begriff: 'Nicht-Abstreitbarkeit',
      kurzdefinition: 'Schutzziel: eine durchgefuehrte Handlung kann gegenüber Dritten zweifelsfrei nachgewiesen werden.',
      definition: [
        'Nicht-Abstreitbarkeit (auch Verbindlichkeit) verhindert, dass jemand eine Aktion glaubhaft leugnen kann. Dazu braucht es eine starke Authentifizierung des Akteurs, einen vollständigen Zeitstempel und einen revisionssicheren Nachweis.',
        'Klassische Mittel sind digitale Signaturen mit qualifiziertem Zertifikat, lueckenlose Logs auf Append-Only-Speichern und Vier-Augen-Freigaben.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'norming',
      begriff: 'Norming',
      kurzdefinition: 'Regelbildungsphase, in der ein Team Arbeitsweisen, Rollen und Umgangsformen stabilisiert.',
      definition: [
        'Im Norming werden Regeln akzeptiert, Absprachen belastbarer und Zusammenarbeit planbarer.',
        'Pruefungsstarke Massnahmen sind Standards dokumentieren, Verantwortung verteilen, Retrospektiven nutzen und gemeinsame Qualitaetskriterien festlegen.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
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
      id: 'nvme',
      begriff: 'NVMe',
      kurzdefinition: 'Protokoll für Flash-Speicher direkt über PCIe; deutlich schneller als SATA.',
      definition: [
        'NVMe steht für Non-Volatile Memory Express. Es ist ein speziell für Flash-Speicher entworfenes Protokoll, das die Limitierungen von SATA umgeht und Daten direkt über den PCIe-Bus transportiert.',
        'NVMe-SSDs werden meist im M.2-Steckplatz eingebaut und erreichen typischerweise 3.000 bis 7.000 MB/s. Voraussetzung ist ein Mainboard-Slot mit angebundenen PCIe-Lanes.',
      ],
      kapitel: {
        titel: 'Hardware, Schnittstellen & Peripherie auswaehlen',
        href: '/lernen/hardware/schnittstellen/hardware-schnittstellen',
      },
    },
  {
      id: 'oeffentliche-ipv4-adresse',
      begriff: 'Oeffentliche IPv4-Adresse',
      kurzdefinition: 'Eine oeffentliche IPv4-Adresse ist global eindeutig und im Internet routbar.',
      definition: [
        'Oeffentliche IPv4-Adressen werden im Internet eindeutig vergeben und koennen ueber globale Routingtabellen erreicht werden, sofern Firewall und Routing dies erlauben.',
        'Bei typischen Heim- und kleinen Unternehmensanschluessen besitzt der Router am WAN-Anschluss eine oeffentliche IPv4-Adresse, waehrend interne Geraete private Adressen verwenden.',
      ],
      kapitel: {
        titel: 'Firewall und DMZ',
        href: '/lernen/netzwerke/netz-sicherheit/firewall-dmz',
      },
    },
  {
      id: 'off-by-one',
      begriff: 'Off-by-One',
      kurzdefinition: 'Off-by-One ist ein Grenzfehler um genau einen Index oder Schleifendurchlauf.',
      definition: [
        'Der Fehler entsteht, wenn Anfang, Ende oder Vergleichsoperator einer Schleife um eins danebenliegen. Bei Listen ist der letzte Index bei Laenge n meist n - 1, nicht n.',
        'Pruefungsrelevant sind vor allem FOR-Schleifen und WHILE-Bedingungen mit <, <=, > oder >=. Ein Mini-Trace mit den ersten und letzten zwei Durchlaeufen findet den Fehler schnell.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
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
      id: 'oktett',
      begriff: 'Oktett',
      kurzdefinition: 'Ein Oktett ist ein Block aus acht Bit innerhalb einer IPv4-Adresse.',
      definition: [
        'Eine IPv4-Adresse besteht aus vier Oktetten. Jedes Oktett kann Werte von 0 bis 255 darstellen, weil acht Bit 256 Kombinationen ergeben.',
        'In der Schreibweise 192.168.10.50 sind 192, 168, 10 und 50 die vier Oktette.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
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
      id: 'osi',
      begriff: 'OSI-Modell',
      kurzdefinition: 'Das OSI-Modell gliedert Netzwerkkommunikation in sieben Schichten.',
      definition: [
        'Das OSI-Modell ist ein Referenzmodell für Netzwerkkommunikation. Es trennt Aufgaben wie Bitübertragung, Adressierung, Transport und Anwendung in sieben Schichten.',
        'In der Pruefung hilft dir das Modell, Protokolle und Fehlerquellen sauber einer Ebene zuzuordnen.',
      ],
      kapitel: {
        titel: 'OSI-Modell - sieben Schichten',
        href: '/lernen/netzwerke/grundlagen-netz/osi-modell',
      },
    },
  {
      id: 'paketfilter',
      begriff: 'Paketfilter',
      kurzdefinition: 'Ein Paketfilter bewertet Netzwerkpakete nach technischen Merkmalen wie IP-Adresse, Port und Protokoll.',
      definition: [
        'Paketfilter arbeiten mit Informationen aus Netzwerk- und Transportschicht, zum Beispiel Quell-IP, Ziel-IP, TCP/UDP und Portnummer.',
        'Sie sind schnell und fuer viele Netzgrenzen geeignet, verstehen aber nicht automatisch den fachlichen Inhalt einer Anwendung.',
      ],
      kapitel: {
        titel: 'Firewall und DMZ',
        href: '/lernen/netzwerke/netz-sicherheit/firewall-dmz',
      },
    },
  {
      id: 'passwort-hash',
      begriff: 'Passwort-Hash',
      kurzdefinition: 'Speicherform für Passwoerter mit Salt und langsamem, spezialisierten Hashverfahren.',
      definition: [
        'Bei der Registrierung wird nicht das Passwort gespeichert, sondern ein Ergebnis aus Passwort, Salt und einem Passwort-Hashverfahren wie Argon2id, bcrypt oder scrypt.',
        'Beim Login wird der Hash aus der Eingabe neu berechnet und verglichen. Dadurch muss das System das Klartextpasswort nach der Eingabe nicht dauerhaft kennen.',
      ],
      kapitel: {
        titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'pcie',
      begriff: 'PCIe',
      kurzdefinition: 'Schneller serieller Erweiterungsbus auf dem Mainboard für Grafikkarten, NVMe-SSDs und Karten.',
      definition: [
        'PCIe steht für Peripheral Component Interconnect Express. Es ist der zentrale Erweiterungsbus moderner Mainboards und überträgt Daten über sogenannte Lanes (x1, x4, x8, x16). Jede Lane ist eine bidirektionale serielle Punkt-zu-Punkt-Verbindung.',
        'Pro Generation verdoppelt sich die Bandbreite je Lane (PCIe 3.0 ~1 GB/s, PCIe 4.0 ~2 GB/s, PCIe 5.0 ~4 GB/s). Eine NVMe-SSD belegt meist x4 Lanes, eine Grafikkarte x16.',
      ],
      kapitel: {
        titel: 'Hardware, Schnittstellen & Peripherie auswaehlen',
        href: '/lernen/hardware/schnittstellen/hardware-schnittstellen',
      },
    },
  {
      id: 'pdca-zyklus',
      begriff: 'PDCA-Zyklus',
      kurzdefinition: 'Plan-Do-Check-Act; kontinuierlicher Verbesserungszyklus, der in ISMS und Qualitaetsmanagement steckt.',
      definition: [
        'Plan: Ziele, Risiken und Massnahmen festlegen. Do: Massnahmen umsetzen und betreiben. Check: Ergebnisse messen, Audits durchfuehren, Vorfaelle auswerten. Act: Korrekturen einleiten und das System anpassen.',
        'In der Pruefung wird der PDCA-Zyklus oft als Begruendung gefordert, warum ein ISMS nie fertig ist und regelmaessig überprueft werden muss.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'pdu',
      begriff: 'PDU',
      kurzdefinition: 'Eine PDU ist die Dateneinheit, mit der eine OSI-Schicht arbeitet.',
      definition: [
        'PDU steht für Protocol Data Unit. Je nach Schicht heißt die Dateneinheit anders, zum Beispiel Bit, Frame, Paket, Segment oder Daten.',
        'Der Begriff ist wichtig, weil er zeigt, auf welcher Ebene ein Protokoll gerade arbeitet.',
      ],
      kapitel: {
        titel: 'OSI-Modell - sieben Schichten',
        href: '/lernen/netzwerke/grundlagen-netz/osi-modell',
      },
    },
  {
      id: 'peer-to-peer',
      begriff: 'Peer-to-Peer',
      kurzdefinition: 'Architektur, bei der gleichrangige Systeme direkt miteinander Ressourcen austauschen.',
      definition: [
        'Bei Peer-to-Peer gibt es keinen dauerhaft uebergeordneten zentralen Server fuer die betrachtete Funktion. Geraete stellen sich gegenseitig Ressourcen bereit, etwa lokale Ordnerfreigaben.',
        'Das kann fuer kleine oder kurzfristige Szenarien reichen, wird aber bei vielen Nutzern schnell unuebersichtlich.',
      ],
      kapitel: {
        titel: 'Zentrale vs. dezentrale IT-Systeme',
        href: '/lernen/betriebssysteme/it-infrastruktur/zentral-dezentral',
      },
    },
  {
      id: 'pepper',
      begriff: 'Pepper',
      kurzdefinition: 'Zusaetzliches Geheimnis außerhalb der Passwortdatenbank.',
      definition: [
        'Ein Pepper fliesst in die Passwort-Hash-Berechnung ein, wird aber nicht in derselben Datenbank gespeichert wie Hash und Salt.',
        'Er hilft zusaetzlich bei einem reinen Datenbank-Leak, ersetzt aber weder individuelle Salts noch ein langsames Passwort-Hashverfahren.',
      ],
      kapitel: {
        titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'performing',
      begriff: 'Performing',
      kurzdefinition: 'Leistungsphase, in der ein Team eigenstaendig und wirksam arbeitet.',
      definition: [
        'In der Performing-Phase sind Rollen und Regeln so stabil, dass das Team eigenstaendig Probleme loest und Ergebnisse liefert.',
        'Fuehrung bedeutet hier eher Hindernisse entfernen, Autonomie geben, Ergebnisse messen und Weiterentwicklung ermöglichen.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'pki',
      begriff: 'Public Key Infrastructure',
      kurzdefinition: 'Gesamtsystem aus CAs, Zertifikaten, Schlüsseln, Widerruf und Regeln zur Vertrauenspruefung.',
      definition: [
        'Eine PKI sorgt dafür, dass Public Keys nicht nur mathematisch existieren, sondern vertrauenswuerdig Identitaeten zugeordnet werden können.',
        'Dazu gehören Root- und Intermediate-CAs, Zertifikatsketten, CRL oder OCSP für Widerruf sowie Regeln für Ausstellung und Schluesselverwendung.',
      ],
      kapitel: {
        titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'port-forwarding',
      begriff: 'Port Forwarding',
      kurzdefinition: 'Port Forwarding leitet eingehende Verbindungen von einem externen Port an ein internes Ziel weiter.',
      definition: [
        'Beim Port Forwarding wird eine Verbindung auf einer oeffentlichen Adresse und einem Port an eine private interne IP-Adresse und einen Zielport weitergeleitet.',
        'Dadurch werden interne Dienste von aussen erreichbar. Das ist nuetzlich fuer Webserver oder bestimmte Dienste, erhoeht aber die Angriffsoberflaeche und muss mit Firewall, Updates und Authentifizierung abgesichert werden.',
      ],
      kapitel: {
        titel: 'Port Forwarding und NAT',
        href: '/lernen/netzwerke/netz-sicherheit/port-forwarding',
      },
    },
  {
      id: 'portnummer',
      begriff: 'Portnummer',
      kurzdefinition: 'Eine Portnummer adressiert einen Dienst oder Prozess auf einem Host.',
      definition: [
        'Portnummern werden auf der Transportschicht genutzt. Zusammen mit IP-Adresse und Protokoll zeigen sie, welche Anwendung die Daten erhalten soll.',
        'Wichtig fuer Firewall-Regeln: TCP-Port 443 und UDP-Port 443 sind unterschiedliche Ziele. Deshalb muss das Transportprotokoll immer genannt werden.',
      ],
      kapitel: {
        titel: 'TCP vs. UDP',
        href: '/lernen/netzwerke/grundlagen-netz/tcp-udp',
      },
    },
  {
      id: 'private-ipv4-adresse',
      begriff: 'Private IPv4-Adresse',
      kurzdefinition: 'Private IPv4-Adressen sind für interne Netze reserviert und im Internet nicht global geroutet.',
      definition: [
        'RFC 1918 definiert drei private Bereiche: 10.0.0.0/8, 172.16.0.0/12 und 192.168.0.0/16.',
        'Private Adressen sind in vielen Unternehmen und Heimnetzen normal. Für den Zugriff ins Internet wird meist NAT oder ein anderer vermittelnder Gateway-Mechanismus genutzt.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'product-backlog',
      begriff: 'Product Backlog',
      kurzdefinition: 'Geordnete, sich entwickelnde Liste aller Arbeit, die fuer das Produkt noetig ist — verantwortet vom Product Owner.',
      definition: [
        'Das Product Backlog ist im Scrum Guide 2020 eines der drei Artefakte. Es ist nie „fertig", sondern wird laufend verfeinert (Backlog Refinement) und nach Produktwert priorisiert.',
        'Sein Commitment ist das Product Goal. Items, die fuer den naechsten Sprint geeignet sind, sind „ready" — also klein und klar genug, um in einem Sprint umgesetzt zu werden.',
      ],
      kapitel: {
        titel: 'Scrum – Accountabilities, Events, Artefakte',
        href: '/lernen/projekt/agile-vorgehen/scrum',
      },
    },
  {
      id: 'product-goal',
      begriff: 'Product Goal',
      kurzdefinition: 'Langfristiges Ziel, auf das das Scrum Team mit dem Produkt hinarbeitet — Commitment des Product Backlog.',
      definition: [
        'Das Product Goal wurde im Scrum Guide 2020 neu eingefuehrt. Es beschreibt einen zukuenftigen Zustand des Produkts und gibt dem Scrum Team einen gemeinsamen Bezugspunkt ueber einzelne Sprints hinweg.',
        'Jeder Sprint bringt das Produkt naeher an dieses Ziel. Ein neues Product Goal wird erst formuliert, wenn das aktuelle erreicht oder als nicht mehr sinnvoll verworfen wurde.',
      ],
      kapitel: {
        titel: 'Scrum – Accountabilities, Events, Artefakte',
        href: '/lernen/projekt/agile-vorgehen/scrum',
      },
    },
  {
      id: 'product-owner',
      begriff: 'Product Owner',
      kurzdefinition: 'Accountability im Scrum Team, die den Produktwert maximiert und das Product Backlog verantwortet.',
      definition: [
        'Der Product Owner ist eine Person, kein Komitee. Er oder sie ordnet das Product Backlog, kommuniziert das Product Goal und sorgt dafuer, dass die Items transparent und verstaendlich sind.',
        'Der Product Owner ist kein Projektleiter und weist auch nicht den Developers Arbeit zu. Er entscheidet, was als Naechstes wichtig ist, und ist gegenueber den Stakeholdern fuer den Produktwert rechenschaftspflichtig.',
      ],
      kapitel: {
        titel: 'Scrum – Accountabilities, Events, Artefakte',
        href: '/lernen/projekt/agile-vorgehen/scrum',
      },
    },
  {
      id: 'prozess',
      begriff: 'Prozess',
      kurzdefinition: 'Laufende Instanz eines Programms mit eigenem Speicherbereich und Betriebssystemressourcen.',
      definition: [
        'Ein Prozess entsteht, wenn ein Programm gestartet wird. Er besitzt typischerweise eine Prozess-ID, eigenen virtuellen Speicher, geoeffnete Dateien, Rechte, Umgebung und mindestens einen Thread.',
        'Pruefungsrelevant: Der Prozess ist die Ressourcengrenze. Ausgefuehrt wird aber ein Thread innerhalb des Prozesses.',
      ],
      kapitel: {
        titel: 'Prozesse, Threads und Tasks',
        href: '/lernen/betriebssysteme/os-grundlagen/prozess-thread',
      },
    },
  {
      id: 'pseudocode',
      begriff: 'Pseudocode',
      kurzdefinition: 'Pseudocode ist eine sprachneutrale, menschenlesbare Schreibweise für Algorithmen.',
      definition: [
        'Pseudocode liegt zwischen Alltagssprache und Programmiersprache. Er ist frei von konkreter Syntax einer Sprache, muss aber so genau sein, dass ein Ablauf geprueft und spaeter implementiert werden kann.',
        'Pruefungsrelevant ist vor allem das Lesen und Nachverfolgen: Variablenwerte aendern, Bedingungen entscheiden Zweige, Schleifen wiederholen Blöcke, und am Ende muss die Ausgabe stimmen.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
  {
      id: 'malware',
      begriff: 'Malware',
      kurzdefinition: 'Oberbegriff für Schadsoftware jeder Art – Viren, Würmer, Trojaner, Ransomware und mehr.',
      definition: [
        'Malware (malicious software) ist jede Software, die gegen den Willen des Nutzers Schaden anrichtet. Die Typen unterscheiden sich in Verbreitungsweg, Tarnung und Schadensziel.',
        'Wichtig ist die Trennung von Verbreitungsart (Virus braucht Wirt, Wurm verbreitet sich selbst, Trojaner tarnt sich) und Schadenstyp (z. B. Ransomware = Erpressung, Spyware = Datenabfluss).',
      ],
      kapitel: {
        titel: 'Malware – Viren, Würmer, Trojaner und Co.',
        href: '/lernen/sicherheit/betrieb-sicherheit/malware-grundlagen',
      },
    },
  {
      id: 'mdm',
      begriff: 'Mobile Device Management (MDM)',
      kurzdefinition: 'Zentrale Verwaltung mobiler Endgeräte inklusive Richtlinien und Remote-Wipe.',
      definition: [
        'Mit MDM verteilt die IT Konfigurationen und Sicherheitsrichtlinien zentral auf Smartphones und Tablets und kann Apps steuern.',
        'Bei Verlust oder Diebstahl lässt sich ein Gerät aus der Ferne sperren oder löschen (Remote-Wipe). MDM ist damit ein zentraler Baustein der Endpoint-Security für mobile Geräte.',
      ],
      kapitel: {
        titel: 'Endpoint-Security – Härtung, Updates, Schutzmaßnahmen',
        href: '/lernen/sicherheit/betrieb-sicherheit/endpoint-security',
      },
    },
  {
      id: 'patch-management',
      begriff: 'Patch-Management',
      kurzdefinition: 'Geregelter Prozess, um Sicherheitsupdates zu erfassen, zu testen und zeitnah auszurollen.',
      definition: [
        'Patches korrigieren Sicherheitslücken in Betriebssystem und Anwendungen. Ein Patch-Management-Prozess umfasst Inventarisierung, Monitoring neuer Patches, Risikobewertung, Test in einer Pilotgruppe, Rollout und Verifikation.',
        'Als Faustregel gilt: kritische, aktiv ausgenutzte Lücken innerhalb von 24–72 Stunden, hohe innerhalb einer Woche. Die meisten großen Vorfälle nutzten bekannte, längst gepatchte Lücken.',
      ],
      kapitel: {
        titel: 'Endpoint-Security – Härtung, Updates, Schutzmaßnahmen',
        href: '/lernen/sicherheit/betrieb-sicherheit/endpoint-security',
      },
    },
  {
      id: 'phishing',
      begriff: 'Phishing',
      kurzdefinition: 'Täuschungsangriff, der über gefälschte Mails oder Seiten Zugangsdaten abgreift oder Malware verteilt.',
      definition: [
        'Phishing zielt auf den Menschen: Eine gefälschte, oft dringlich formulierte Nachricht bringt das Opfer dazu, auf einen Link zu klicken, Zugangsdaten einzugeben oder einen Anhang zu öffnen.',
        'Phishing ist einer der häufigsten Erstinfektionswege für Malware. Wirksamste Gegenmaßnahmen sind Awareness-Schulungen, Phishing-Simulationen, Mail-Filter und Multi-Faktor-Authentifizierung.',
      ],
      kapitel: {
        titel: 'Malware – Viren, Würmer, Trojaner und Co.',
        href: '/lernen/sicherheit/betrieb-sicherheit/malware-grundlagen',
      },
    },
]
