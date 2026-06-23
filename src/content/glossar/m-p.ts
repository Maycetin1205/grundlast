import type { GlossarEintrag } from "../../lib/glossar/types"

export const mBisP: GlossarEintrag[] = [
  {
      id: 'nicht-gatter',
      begriff: 'NICHT-Gatter',
      kurzdefinition: 'Logikgatter mit einem Eingang, das den Wahrheitswert umkehrt.',
      definition: [
        'Ein NICHT-Gatter, auch Inverter genannt, macht aus 0 eine 1 und aus 1 eine 0.',
        'In Software entspricht das einer Verneinung wie NOT, ! oder nicht.',
      ],
    },
  {
      id: 'oder-gatter',
      begriff: 'ODER-Gatter',
      kurzdefinition: 'Logikgatter, dessen Ausgang 1 wird, wenn mindestens ein Eingang 1 ist.',
      definition: [
        'Ein ODER-Gatter bildet die logische Disjunktion. Bei zwei Eingängen ist der Ausgang nur dann 0, wenn beide Eingaben 0 sind.',
        'Das normale logische ODER ist einschliessend: Wenn beide Eingaben 1 sind, ist der Ausgang ebenfalls 1.',
      ],
    },
  {
      id: 'maengelrechte',
      begriff: 'Mängelrechte',
      kurzdefinition: 'Rechte des Käufers bei einer mangelhaften Kaufsache.',
      definition: [
        'Mängelrechte sind die gesetzlichen Ansprüche des Käufers, wenn die gekaufte Sache mangelhaft ist. Im Kaufrecht nennt Paragraf 437 BGB vor allem Nacherfuellung, Rücktritt, Minderung und Schadensersatz.',
        'In vielen Fällen steht zürst die Nacherfuellung im Vordergrund. Rücktritt, Minderung oder Schadensersatz setzen weitere Voraussetzungen voraus.',
      ],
      kapitel: {
        titel: 'Gewährleistung und Garantie',
        href: '/lernen/vertragsrecht/vertraege/gewaehrleistung',
      },
    },
  {
      id: 'maengelruege',
      begriff: 'Mängelrüge',
      kurzdefinition: 'Mitteilung an den Verkäufer, dass eine Lieferung konkret mangelhaft ist.',
      definition: [
        'Eine Mängelrüge benennt einen konkreten Mangel, zum Beispiel falsche Menge, sichtbaren Schaden oder defekte Ware. Im beidseitigen Handelskauf ist sie nach Paragraf 377 HGB besonders streng.',
        'Kaufleute müssen Ware unverzüglich untersuchen und erkennbare Mängel unverzüglich rügen. Sonst kann die Ware als genehmigt gelten.',
      ],
      kapitel: {
        titel: 'Mängelrüge im Handelskauf',
        href: '/lernen/vertragsrecht/vertraege/maengelruege',
      },
    },
  {
      id: 'minderung',
      begriff: 'Minderung',
      kurzdefinition: 'Herabsetzung des Kaufpreises wegen eines Mangels.',
      definition: [
        'Minderung bedeutet, dass der Käufer die mangelhafte Sache behält, aber den Kaufpreis angemessen herabsetzt.',
        'Sie ist eine Alternative zum Rücktritt. Statt den Vertrag rückabzuwickeln, wird der Preis an den geringeren Wert der mangelhaften Sache angepasst.',
      ],
      kapitel: {
        titel: 'Gewährleistung und Garantie',
        href: '/lernen/vertragsrecht/vertraege/gewaehrleistung',
      },
    },
  {
      id: 'nacherfuellung',
      begriff: 'Nacherfuellung',
      kurzdefinition: 'Erste Stufe vieler Mängelrechte: Reparatur oder Ersatzlieferung.',
      definition: [
        'Nacherfuellung bedeutet, dass der Verkäufer den Mangel beseitigt oder eine mangelfreie Sache liefert. Im Kaufrecht ist sie häufig der erste Schritt, bevor Rücktritt oder Minderung relevant werden.',
        'Welche Variante möglich und zumutbar ist, hängt vom Einzelfall ab. Bei Hardware kann Ersatzlieferung naheliegen, bei reparierbaren Defekten Nachbesserung.',
      ],
      kapitel: {
        titel: 'Gewährleistung und Garantie',
        href: '/lernen/vertragsrecht/vertraege/gewaehrleistung',
      },
    },
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
      id: 'mantisse',
      begriff: 'Mantisse',
      kurzdefinition: 'Die Mantisse speichert die signifikanten Ziffern einer Gleitkommazahl.',
      definition: [
        'Bei Gleitkommazahlen wird der Wert grob in Vorzeichen, Exponent und Mantisse zerlegt. Die Mantisse enthält die eigentlichen Ziffern, der Exponent verschiebt deren Wert.',
        'In IEEE-754-Formaten wird die Mantisse auch Signifikand genannt. Sie bestimmt massgeblich die Genauigkeit der gespeicherten Zahl.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
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
      id: 'massenspeicher',
      begriff: 'Massenspeicher',
      kurzdefinition: 'Nichtflüchtiger Speicher für Betriebssystem, Programme und Dateien, zum Beispiel SSD oder HDD.',
      definition: [
        'Massenspeicher hält Daten dauerhaft, auch wenn der Strom aus ist. Typische Formen sind SSDs, HDDs, USB-Sticks und Speicherkarten.',
        'Er ist meist deutlich größer als RAM, aber langsamer. Für die Systemreaktion ist besonders die Zugriffszeit wichtig, weshalb SSDs beim Starten von Programmen viel schneller wirken als HDDs.',
      ],
      kapitel: {
        titel: 'CPU, RAM und Massenspeicher',
        href: '/lernen/hardware/komponenten/cpu-ram-speicher',
      },
    },
  {
      id: 'mainboard',
      begriff: 'Mainboard',
      kurzdefinition: 'Hauptplatine eines Rechners; verbindet CPU, RAM, Erweiterungskarten und Peripherie.',
      definition: [
        'Das Mainboard (oder Motherboard) ist die zentrale Leiterplatte eines Rechners. Es trägt CPU-Sockel, RAM-Slots, Chipsatz, PCIe-Slots, M.2-Steckplätze, SATA-Ports, USB-Header und das BIOS/UEFI.',
        'Die Auswahl wird vom CPU-Sockel und Chipsatz vorgegeben: Eine moderne CPU passt nur in einen kompatiblen Sockel (z. B. AM5 oder LGA 1700). Der Chipsatz bestimmt, wie viele PCIe-Lanes, USB-Ports und Speichersteckplätze zur Verfügung stehen.',
      ],
      kapitel: {
        titel: 'CPU, RAM und Massenspeicher',
        href: '/lernen/hardware/komponenten/cpu-ram-speicher',
      },
    },
  {
      id: 'make-or-buy',
      begriff: 'Make-or-Buy',
      kurzdefinition: 'Entscheidung, ob eine Leistung intern erbracht oder extern beschafft wird.',
      definition: [
        'Make-or-Buy vergleicht Eigenleistung und Fremdbezug. In IT-Aufgaben geht es zum Beispiel um Eigenentwicklung statt Standardsoftware, eigenen Betrieb statt Cloud-Dienst oder internen Support statt Dienstleister.',
        'Prüfungsrelevant ist die Kombination aus Kostenvergleich und qualitativer Begründung: Know-how, Zeit, Kontrolle, Sicherheit, Abhängigkeit und Wartbarkeit.',
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
        'Sie verbindet Fachwissen und Projektfokus, erzeugt aber Konfliktpotenzial bei Prioritäten, Ressourcen und Entscheidungsbefugnissen.',
      ],
      kapitel: {
        titel: 'Organisationsformen, Leitbild, Nachhaltigkeit und ESG',
        href: '/lernen/wirtschaft/unternehmen/organisationsformen-leitbild-nachhaltigkeit-esg',
      },
    },
  {
      id: 'maximumprinzip',
      begriff: 'Maximumprinzip',
      kurzdefinition: 'BSI-Grundregel: ein System übernimmt den höchsten Schutzbedarf der Prozesse oder Daten, die es verarbeitet.',
      definition: [
        'Das Maximumprinzip vermeidet, dass eine Schutzbedarfsbewertung künstlich heruntergebrochen wird. Verarbeitet ein Server mehrere Anwendungen, gilt für ihn der höchste Schutzbedarf der beteiligten Prozesse.',
        'Davon abweichen darf man nur mit Begründung, etwa wenn der Kumulationseffekt oder der Verteilungseffekt das Bild ändert.',
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
        'Ein Medienbruch entsteht, wenn Informationen nicht durchgängig digital weiterverarbeitet werden, sondern zum Beispiel aus E-Mail, Papier oder Excel manuell in ein anderes System übertragen werden.',
        'Typische Folgen sind Fehler, Zeitverlust, Doppelarbeit und widersprüchliche Datenstände. In Aufgaben ist eine Schnittstelle oft eine passende Gegenmassnahme.',
      ],
      kapitel: {
        titel: 'CRM, ERP, DMS und CMS',
        href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
      },
    },
  {
      id: 'mft',
      begriff: 'MFT (Master File Table)',
      kurzdefinition: 'Zentrale Tabelle in NTFS, die alle Dateien und Verzeichnisse des Datenträgers verwaltet.',
      definition: [
        'Die Master File Table ist das Herzstück von NTFS. Sie enthält für jede Datei und jedes Verzeichnis einen Eintrag mit Metadaten, Rechten, Zeitstempeln und Verweisen auf die Datenblöcke. Bei sehr kleinen Dateien speichert NTFS die Inhalte sogar direkt im MFT-Eintrag.',
        'Wenn die MFT beschädigt wird, ist der gesamte Datenträger nicht mehr lesbar. Deshalb hält NTFS eine Kopie der ersten MFT-Einträge als Sicherheit vor.',
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
        'Beim Mietkauf zahlt der Nutzer wie beim Leasing feste Raten, am Ende der Laufzeit geht das Objekt aber automatisch in sein Eigentum über. Bilanziell ist der Mietkäufer von Beginn an wirtschaftlicher Eigentümer und bilanziert das Objekt selbst.',
        'In der Praxis ist Mietkauf vor allem für Investitionen interessant, bei denen das Objekt am Ende noch genutzt werden soll, der Liquiditätsabfluss aber gleichmässig verteilt sein muss.',
      ],
      kapitel: {
        titel: 'Kaufmännische Rechenaufgaben',
        href: '/lernen/wirtschaft/kalkulation/kaufmaennische-rechenaufgaben',
      },
    },
  {
      id: 'mietvertrag',
      begriff: 'Mietvertrag',
      kurzdefinition: 'Vertrag über zeitweise Gebrauchsüberlassung gegen Miete ohne Eigentumsübergang.',
      definition: [
        'Beim Mietvertrag überlässt der Vermieter dem Mieter die Sache während der Mietzeit zum Gebrauch. Der Mieter zahlt die vereinbarte Miete.',
        'In Beschaffungsaufgaben passt Miete besonders zu kurzfristiger, unsicherer oder projektbezogener Nutzung, bei der Flexibilität wichtiger ist als Eigentum.',
      ],
      kapitel: {
        titel: 'Kauf, Leasing & Miete im Vergleich',
        href: '/lernen/wirtschaft/entscheidung/kauf-leasing-miete',
      },
    },
  {
      id: 'mitarbeitermotivation',
      begriff: 'Mitarbeitermotivation',
      kurzdefinition: 'Gründe, aus denen Mitarbeitende Aufgaben annehmen, ausdauernd bearbeiten und Verantwortung übernehmen.',
      definition: [
        'Mitarbeitermotivation beschreibt innere und äussere Antriebe im Arbeitskontext. Sie entsteht nicht durch Befehl, sondern wird durch Arbeitsbedingungen, Sinn, Anerkennung, Beteiligung und Entwicklung beeinflusst.',
        'Prüfungsrelevant: In IT-Projekten entscheidet Motivation mit darüber, ob neue Systeme, Prozesse oder Rollen wirklich genutzt werden.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'motivatoren',
      begriff: 'Motivatoren',
      kurzdefinition: 'Faktoren, die Zufriedenheit und Engagement fördern, etwa Anerkennung, Erfolg, Verantwortung und Entwicklung.',
      definition: [
        'Motivatoren erzeugen positive Arbeitszufriedenheit, weil sie den Inhalt der Arbeit aufwerten: Leistung wird sichtbar, Verantwortung wird übertragen, Entwicklung ist möglich.',
        'Bei IT-Changes sind Motivatoren zum Beispiel Key-User-Verantwortung, sichtbare Quick Wins, Anerkennung für gute Rückmeldungen und echte Mitsprache.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'mtbf',
      begriff: 'MTBF',
      kurzdefinition: 'MTBF beschreibt die mittlere Zeit zwischen zwei Ausfällen reparierbarer Systeme.',
      definition: [
        'MTBF steht für Mean Time Between Failures. Der Wert wird für reparierbare Systeme verwendet und beschreibt den durchschnittlichen Zeitraum zwischen Ausfällen.',
        'Er ist ein Zuverlässigkeitswert, aber keine Garantie für die Laufzeit eines einzelnen konkreten Geräts.',
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
      kurzdefinition: 'Person, die vorbereitetes Wissen im eigenen Bereich weitergibt und erste Fragen auffängt.',
      definition: [
        'Multiplikatoren tragen Wissen in Teams, Schichten, Standorte oder Fachbereiche. Sie sind nah an der Praxis und wirken deshalb oft glaubwürdiger als eine anonyme Rundmail.',
        'Sie brauchen klare Materialien, Zeit und Rückkanal zum Projektteam. Ohne diese Basis verbreiten sie leicht unterschiedliche oder unvollständige Informationen.',
      ],
      kapitel: {
        titel: 'Schulung, Einweisung, Key User und Multiplikatoren',
        href: '/lernen/projekt/service-management/schulung-einweisung-key-user',
      },
    },
  {
      id: 'multitasking',
      begriff: 'Multitasking',
      kurzdefinition: 'Fähigkeit eines Betriebssystems, mehrere Aufgaben scheinbar gleichzeitig auszuführen.',
      definition: [
        'Beim Multitasking teilt das Betriebssystem CPU-Zeit auf mehrere lauffähige Threads oder Tasks auf. Auf einem Kern geschieht das durch schnelles Umschalten, auf mehreren Kernen kann echte Parallelität entstehen.',
        'Prüfungsrelevant: Multitasking ist nicht automatisch echte parallele Berechnung. Dafür braucht es mehrere Kerne oder Prozessoren und parallelisierbare Arbeit.',
      ],
      kapitel: {
        titel: 'Prozesse, Threads und Tasks',
        href: '/lernen/betriebssysteme/os-grundlagen/prozess-thread',
      },
    },
  {
      id: 'nachhaltigkeit',
      begriff: 'Nachhaltigkeit',
      kurzdefinition: 'Langfristig tragfähiges Handeln mit wirtschaftlicher, ökologischer und sozialer Perspektive.',
      definition: [
        'Nachhaltigkeit bedeutet im Unternehmen, Entscheidungen nicht nur nach kurzfristigem Preis zu treffen, sondern langfristige wirtschaftliche, ökologische und soziale Folgen zu berücksichtigen.',
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
      kurzdefinition: 'Ein Nameserver ist ein DNS-Server, der Anfragen zu Domainnamen beantwortet - rekursiv auflösend oder autoritativ für eine Zone.',
      definition: [
        'Ein rekursiver Nameserver (Resolver) nimmt die Anfrage eines Clients an und durchläuft die DNS-Hierarchie - Root-Server, dann TLD-Server (.de, .com), dann den autoritativen Server der Zone - bis er eine Antwort hat. Ein autoritativer Nameserver ist für eine bestimmte Zone (z. B. example.org) verantwortlich und liefert die offiziellen Datensätze.',
        'In den Netzwerkeinstellungen siehst du meist zwei oder drei Nameserver - der Client fragt sie der Reihe nach. Prüfungsfalle: Ohne erreichbaren Nameserver funktionieren Domain-Aufrufe nicht, aber ein Ping auf eine IP-Adresse geht weiterhin. Genau diese Trennung ist die Standard-Diagnose-Frage.',
      ],
      kapitel: {
        titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
        href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
      },
    },
  {
      id: 'napt',
      begriff: 'NAPT/PAT',
      kurzdefinition: 'NAPT oder PAT übersetzt neben IP-Adressen auch Portnummern.',
      definition: [
        'NAPT steht für Network Address Port Translation, PAT für Port Address Translation. Beide Begriffe beschreiben, dass mehrere interne Hosts über unterschiedliche Portzuordnungen eine öffentliche IPv4-Adresse teilen können.',
        'Typisch ist der Heimrouter: Viele Clients bauen Verbindungen nach außen auf, der Router merkt sich die Zuordnung von interner Adresse, internem Port und externem Port.',
      ],
      kapitel: {
        titel: 'Port Forwarding und NAT',
        href: '/lernen/netzwerke/netz-sicherheit/port-forwarding',
      },
    },
  {
      id: 'nat',
      begriff: 'NAT',
      kurzdefinition: 'NAT übersetzt IP-Adressen zwischen unterschiedlichen Adressräumen.',
      definition: [
        'NAT steht für Network Address Translation. Ein NAT-Gerät verändert IP-Adressen in Paketen, zum Beispiel zwischen privatem LAN und öffentlichem Internet.',
        'NAT wird häufig eingesetzt, damit private IPv4-Netze über eine öffentliche Adresse kommunizieren können. Es ersetzt aber keine durchdachte Firewall- und Sicherheitsarchitektur.',
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
        'Aus IP-Adresse und Subnetzmaske berechnest du die Netzadresse mit einer bitweisen UND-Verknüpfung oder mit der Magic-Number-Methode.',
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
      kurzdefinition: 'Netzsegmentierung teilt ein Netzwerk in getrennte Bereiche mit kontrollierten Übergängen.',
      definition: [
        'Bei der Netzsegmentierung werden Bereiche wie Clients, Server, DMZ, Management, Produktion oder Gastnetz voneinander getrennt.',
        'Ziel ist, Kommunikation zu begrenzen und die Ausbreitung von Angriffen oder Fehlkonfigurationen einzudämmen. Übergänge werden typischerweise durch Firewalls oder Layer-3-Regeln kontrolliert.',
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
        'Ein Nibble ist die Hälfte eines Bytes. Vier Bits können 16 verschiedene Werte darstellen.',
        'Deshalb passt ein Nibble exakt zu einer Hexadezimalziffer von 0 bis F.',
      ],
      kapitel: {
        titel: 'Bit & Byte - die kleinsten Einheiten',
        href: '/lernen/grundlagen/zahlen/bit-byte',
      },
    },
  {
      id: 'msb',
      begriff: 'MSB',
      kurzdefinition: 'MSB bedeutet Most Significant Bit, also das höchstwertige Bit eines Bitmusters.',
      definition: [
        'Das MSB steht ganz links und hat den größten Stellenwert innerhalb der betrachteten Bitbreite.',
        'Im Zweierkomplement zeigt ein gesetztes MSB bei signed Zahlen an, dass der Wert negativ ist. Bei unsigned Zahlen ist es einfach nur das höchstwertige Bit.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'nichtabstreitbarkeit',
      begriff: 'Nicht-Abstreitbarkeit',
      kurzdefinition: 'Schutzziel: eine durchgeführte Handlung kann gegenüber Dritten zweifelsfrei nachgewiesen werden.',
      definition: [
        'Nicht-Abstreitbarkeit (auch Verbindlichkeit) verhindert, dass jemand eine Aktion glaubhaft leugnen kann. Dazu braucht es eine starke Authentifizierung des Akteurs, einen vollständigen Zeitstempel und einen revisionssicheren Nachweis.',
        'Klassische Mittel sind digitale Signaturen mit qualifiziertem Zertifikat, lückenlose Logs auf Append-Only-Speichern und Vier-Augen-Freigaben.',
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
        'Prüfungsstarke Maßnahmen sind Standards dokumentieren, Verantwortung verteilen, Retrospektiven nutzen und gemeinsame Qualitätskriterien festlegen.',
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
        'Sie eignet sich für Angebotsentscheidungen, wenn neben dem Preis auch qualitative Kriterien wie Support, Lieferzeit oder Kompatibilität nachvollziehbar berücksichtigt werden sollen.',
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
        titel: 'CPU, RAM und Massenspeicher',
        href: '/lernen/hardware/komponenten/cpu-ram-speicher',
      },
    },
  {
      id: 'oeffentliche-ipv4-adresse',
      begriff: 'Öffentliche IPv4-Adresse',
      kurzdefinition: 'Eine öffentliche IPv4-Adresse ist global eindeutig und im Internet routbar.',
      definition: [
        'Öffentliche IPv4-Adressen werden im Internet eindeutig vergeben und können über globale Routingtabellen erreicht werden, sofern Firewall und Routing dies erlauben.',
        'Bei typischen Heim- und kleinen Unternehmensanschlüssen besitzt der Router am WAN-Anschluss eine öffentliche IPv4-Adresse, während interne Geräte private Adressen verwenden.',
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
        'Der Fehler entsteht, wenn Anfang, Ende oder Vergleichsoperator einer Schleife um eins danebenliegen. Bei Listen ist der letzte Index bei Länge n meist n - 1, nicht n.',
        'Prüfungsrelevant sind vor allem FOR-Schleifen und WHILE-Bedingungen mit <, <=, > oder >=. Ein Mini-Trace mit den ersten und letzten zwei Durchläufen findet den Fehler schnell.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
  {
      id: 'ocsp',
      begriff: 'OCSP',
      kurzdefinition: 'OCSP fragt online ab, ob ein einzelnes Zertifikat widerrufen wurde.',
      definition: [
        'OCSP steht für Online Certificate Status Protocol. Ein Client fragt damit den Status eines konkreten Zertifikats ab, statt eine ganze Widerrufsliste herunterzuladen.',
        'In der PKI-Prüfung reicht die Grundidee: OCSP und CRL helfen zu erkennen, ob ein Zertifikat vor seinem Ablaufdatum widerrufen wurde.',
      ],
      kapitel: {
        titel: 'PKI, CA und Zertifikate',
        href: '/lernen/sicherheit/dsgvo-krypto/pki-zertifikate',
      },
    },
  {
      id: 'ohg',
      begriff: 'OHG',
      kurzdefinition: 'Offene Handelsgesellschaft ohne Haftungsbeschränkung der Gesellschafter gegenüber Gläubigern.',
      definition: [
        'OHG steht für offene Handelsgesellschaft. Sie ist eine Personengesellschaft, deren Zweck auf den Betrieb eines Handelsgewerbes unter gemeinschaftlicher Firma gerichtet ist.',
        'Der AP1-Kern: Bei keinem Gesellschafter ist die Haftung gegenüber Gesellschaftsgläubigern beschränkt. Das unterscheidet sie besonders von GmbH und KG.',
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
      id: 'oktalsystem',
      begriff: 'Oktalsystem',
      kurzdefinition: 'Das Oktalsystem ist ein Stellenwertsystem mit der Basis 8.',
      definition: [
        'Das Oktalsystem nutzt die Ziffern 0 bis 7. Jede Stelle steht für eine Potenz von 8, also 1, 8, 64, 512 und so weiter.',
        'In der IT begegnet dir Oktal vor allem bei Unix-/Linux-Dateirechten, weil eine Oktalziffer genau drei Bits zusammenfasst.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'oktalzahl',
      begriff: 'Oktalzahl',
      kurzdefinition: 'Eine Oktalzahl ist eine Zahl im Stellenwertsystem mit Basis 8.',
      definition: [
        'Oktalzahlen verwenden nur die Ziffern 0 bis 7. Jede Stelle hat einen Stellenwert als Potenz von 8: 1, 8, 64, 512 und so weiter.',
        'Bei chmod stehen drei Oktalziffern für drei Rechtegruppen: Eigentümer, Gruppe und andere.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'oktalziffer',
      begriff: 'Oktalziffer',
      kurzdefinition: 'Eine Oktalziffer ist eine einzelne Stelle von 0 bis 7 im Oktalsystem.',
      definition: [
        'Eine Oktalziffer kann genau acht Werte darstellen. Weil 8 = 2^3 ist, passt eine Oktalziffer genau zu drei Bits.',
        'Bei chmod bedeutet die Oktalziffer 7 zum Beispiel 4+2+1, also Lesen, Schreiben und Ausführen.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'operate-leasing',
      begriff: 'Operate-Leasing',
      kurzdefinition: 'Kurzfristiges Leasing wie eine Miete; das Objekt bleibt beim Leasinggeber bilanziert.',
      definition: [
        'Operate-Leasing ist mietähnlich, kurzfristig kündbar und ohne festgeschriebene Mindestlaufzeit. Wartung, Versicherung und Reparatur übernimmt meist der Leasinggeber. Bilanziell und steuerlich gilt das Objekt als beim Leasinggeber.',
        'Typischer Einsatz: Pool-Geräte, kurzfristige Überbrückung, Geräte mit hohem Wertverlust. Die Raten sind in voller Höhe Betriebsausgabe.',
      ],
      kapitel: {
        titel: 'Kaufmännische Rechenaufgaben',
        href: '/lernen/wirtschaft/kalkulation/kaufmaennische-rechenaufgaben',
      },
    },
  {
      id: 'opportunitaetskosten',
      begriff: 'Opportunitätskosten',
      kurzdefinition: 'Entgangener Nutzen der besten nicht gewählten Alternative.',
      definition: [
        'Opportunitätskosten sind keine Rechnung, die zwingend auf einer Rechnung steht. Sie zeigen, was aufgegeben wird, wenn eine knappe Ressource anders eingesetzt wird.',
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
        'In der Prüfung hilft dir das Modell, Protokolle und Fehlerquellen sauber einer Ebene zuzuordnen.',
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
        'Sie sind schnell und für viele Netzgrenzen geeignet, verstehen aber nicht automatisch den fachlichen Inhalt einer Anwendung.',
      ],
      kapitel: {
        titel: 'Firewall und DMZ',
        href: '/lernen/netzwerke/netz-sicherheit/firewall-dmz',
      },
    },
  {
      id: 'passwort-hash',
      begriff: 'Passwort-Hash',
      kurzdefinition: 'Speicherform für Passwörter mit Salt und langsamem, spezialisierten Hashverfahren.',
      definition: [
        'Bei der Registrierung wird nicht das Passwort gespeichert, sondern ein Ergebnis aus Passwort, Salt und einem Passwort-Hashverfahren wie Argon2id, bcrypt oder scrypt.',
        'Beim Login wird der Hash aus der Eingabe neu berechnet und verglichen. Dadurch muss das System das Klartextpasswort nach der Eingabe nicht dauerhaft kennen.',
      ],
      kapitel: {
        titel: 'Verschlüsselung, Hashing, Zertifikate, Signatur & VPN',
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
        titel: 'Hardware, Schnittstellen & Peripherie auswählen',
        href: '/lernen/hardware/schnittstellen/hardware-schnittstellen',
      },
    },
  {
      id: 'pdca-zyklus',
      begriff: 'PDCA-Zyklus',
      kurzdefinition: 'Plan-Do-Check-Act; kontinuierlicher Verbesserungszyklus, der in ISMS und Qualitätsmanagement steckt.',
      definition: [
        'Plan: Ziele, Risiken und Maßnahmen festlegen. Do: Maßnahmen umsetzen und betreiben. Check: Ergebnisse messen, Audits durchführen, Vorfälle auswerten. Act: Korrekturen einleiten und das System anpassen.',
        'In der Prüfung wird der PDCA-Zyklus oft als Begründung gefordert, warum ein ISMS nie fertig ist und regelmässig überprüft werden muss.',
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
        'Bei Peer-to-Peer gibt es keinen dauerhaft übergeordneten zentralen Server für die betrachtete Funktion. Geräte stellen sich gegenseitig Ressourcen bereit, etwa lokale Ordnerfreigaben.',
        'Das kann für kleine oder kurzfristige Szenarien reichen, wird aber bei vielen Nutzern schnell unübersichtlich.',
      ],
      kapitel: {
        titel: 'Zentrale vs. dezentrale IT-Systeme',
        href: '/lernen/betriebssysteme/it-infrastruktur/zentral-dezentral',
      },
    },
  {
      id: 'pepper',
      begriff: 'Pepper',
      kurzdefinition: 'Zusätzliches Geheimnis außerhalb der Passwortdatenbank.',
      definition: [
        'Ein Pepper fliesst in die Passwort-Hash-Berechnung ein, wird aber nicht in derselben Datenbank gespeichert wie Hash und Salt.',
        'Er hilft zusätzlich bei einem reinen Datenbank-Leak, ersetzt aber weder individuelle Salts noch ein langsames Passwort-Hashverfahren.',
      ],
      kapitel: {
        titel: 'Verschlüsselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'performing',
      begriff: 'Performing',
      kurzdefinition: 'Leistungsphase, in der ein Team eigenständig und wirksam arbeitet.',
      definition: [
        'In der Performing-Phase sind Rollen und Regeln so stabil, dass das Team eigenständig Probleme löst und Ergebnisse liefert.',
        'Führung bedeutet hier eher Hindernisse entfernen, Autonomie geben, Ergebnisse messen und Weiterentwicklung ermöglichen.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'pki',
      begriff: 'Public Key Infrastructure',
      kurzdefinition: 'Gesamtsystem aus CAs, Zertifikaten, Schlüsseln, Widerruf und Regeln zur Vertrauensprüfung.',
      definition: [
        'Eine PKI sorgt dafür, dass Public Keys nicht nur mathematisch existieren, sondern vertrauenswürdig Identitäten zugeordnet werden können.',
        'Dazu gehören Root- und Intermediate-CAs, Zertifikatsketten, CRL oder OCSP für Widerruf sowie Regeln für Ausstellung und Schlüsselverwendung.',
      ],
      kapitel: {
        titel: 'Verschlüsselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'port-forwarding',
      begriff: 'Port Forwarding',
      kurzdefinition: 'Port Forwarding leitet eingehende Verbindungen von einem externen Port an ein internes Ziel weiter.',
      definition: [
        'Beim Port Forwarding wird eine Verbindung auf einer öffentlichen Adresse und einem Port an eine private interne IP-Adresse und einen Zielport weitergeleitet.',
        'Dadurch werden interne Dienste von außen erreichbar. Das ist nützlich für Webserver oder bestimmte Dienste, erhöht aber die Angriffsoberfläche und muss mit Firewall, Updates und Authentifizierung abgesichert werden.',
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
        'Wichtig für Firewall-Regeln: TCP-Port 443 und UDP-Port 443 sind unterschiedliche Ziele. Deshalb muss das Transportprotokoll immer genannt werden.',
      ],
      kapitel: {
        titel: 'TCP vs. UDP',
        href: '/lernen/netzwerke/grundlagen-netz/tcp-udp',
      },
    },
  {
      id: 'private-key',
      begriff: 'Private Key',
      kurzdefinition: 'Der Private Key ist der geheime Teil eines kryptografischen Schlüsselpaars.',
      definition: [
        'Der Private Key bleibt beim Besitzer und darf nicht verteilt werden. Mit ihm wird entschlüsselt oder digital signiert, je nach Verfahren und Zweck.',
        'Wird ein Private Key kompromittiert, kann ein Angreifer sich möglicherweise als Besitzer ausgeben. Das passende Zertifikat muss dann widerrufen und ersetzt werden.',
      ],
      kapitel: {
        titel: 'PKI, CA und Zertifikate',
        href: '/lernen/sicherheit/dsgvo-krypto/pki-zertifikate',
      },
    },
  {
      id: 'public-key',
      begriff: 'Public Key',
      kurzdefinition: 'Der Public Key ist der öffentliche Teil eines kryptografischen Schlüsselpaars.',
      definition: [
        'Der Public Key darf verteilt werden. Andere können damit Daten für den Besitzer verschlüsseln oder Signaturen prüfen.',
        'Damit ein Public Key vertrauenswürdig einer Identität zugeordnet werden kann, wird er in Zertifikaten durch eine CA bestätigt.',
      ],
      kapitel: {
        titel: 'PKI, CA und Zertifikate',
        href: '/lernen/sicherheit/dsgvo-krypto/pki-zertifikate',
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
      kurzdefinition: 'Geordnete, sich entwickelnde Liste aller Arbeit, die für das Produkt nötig ist — verantwortet vom Product Owner.',
      definition: [
        'Das Product Backlog ist im Scrum Guide 2020 eines der drei Artefakte. Es ist nie „fertig", sondern wird laufend verfeinert (Backlog Refinement) und nach Produktwert priorisiert.',
        'Sein Commitment ist das Product Goal. Items, die für den nächsten Sprint geeignet sind, sind „ready" — also klein und klar genug, um in einem Sprint umgesetzt zu werden.',
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
        'Das Product Goal wurde im Scrum Guide 2020 neu eingeführt. Es beschreibt einen zukünftigen Zustand des Produkts und gibt dem Scrum Team einen gemeinsamen Bezugspunkt über einzelne Sprints hinweg.',
        'Jeder Sprint bringt das Produkt näher an dieses Ziel. Ein neues Product Goal wird erst formuliert, wenn das aktuelle erreicht oder als nicht mehr sinnvoll verworfen wurde.',
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
        'Der Product Owner ist eine Person, kein Komitee. Er oder sie ordnet das Product Backlog, kommuniziert das Product Goal und sorgt dafür, dass die Items transparent und verständlich sind.',
        'Der Product Owner ist kein Projektleiter und weist auch nicht den Developers Arbeit zu. Er entscheidet, was als Nächstes wichtig ist, und ist gegenüber den Stakeholdern für den Produktwert rechenschaftspflichtig.',
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
        'Ein Prozess entsteht, wenn ein Programm gestartet wird. Er besitzt typischerweise eine Prozess-ID, eigenen virtuellen Speicher, geöffnete Dateien, Rechte, Umgebung und mindestens einen Thread.',
        'Prüfungsrelevant: Der Prozess ist die Ressourcengrenze. Ausgeführt wird aber ein Thread innerhalb des Prozesses.',
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
        'Pseudocode liegt zwischen Alltagssprache und Programmiersprache. Er ist frei von konkreter Syntax einer Sprache, muss aber so genau sein, dass ein Ablauf geprüft und später implementiert werden kann.',
        'Prüfungsrelevant ist vor allem das Lesen und Nachverfolgen: Variablenwerte ändern, Bedingungen entscheiden Zweige, Schleifen wiederholen Blöcke, und am Ende muss die Ausgabe stimmen.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
]
