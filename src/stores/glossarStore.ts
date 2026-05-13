import { create } from 'zustand'

export interface GlossarKapitel {
  titel: string
  href: string
}

export interface GlossarEintrag {
  id: string
  begriff: string
  kurzdefinition: string
  definition: string[]
  kapitel: GlossarKapitel
}

type GlossarRegister = Record<string, GlossarEintrag>

export interface GlossarStore {
  einträge: GlossarRegister
  findeEintrag: (id: string) => GlossarEintrag | undefined
  registriereEintrag: (eintrag: GlossarEintrag) => void
  registriereEinträge: (einträge: GlossarEintrag[]) => void
}

export function normalisiereGlossarId(id: string) {
  return id.trim().toLowerCase()
}

function mitNormalisierterId(eintrag: GlossarEintrag): GlossarEintrag {
  return {
    ...eintrag,
    id: normalisiereGlossarId(eintrag.id),
  }
}

const initialGlossarEintraege: GlossarEintrag[] = [
  {
    id: 'bit',
    begriff: 'Bit',
    kurzdefinition: 'Ein Bit ist die kleinste Informationseinheit und kann den Wert 0 oder 1 annehmen.',
    definition: [
      'Bit steht für Binary Digit. Es beschreibt genau eine binare Entscheidung: 0 oder 1, aus oder an, falsch oder wahr.',
      'Mehrere Bits werden zu größeren Einheiten zusammengefasst. Acht Bits ergeben ein Byte und bilden die Grundlage für Speicher, Dateien und Datenübertragung.',
    ],
    kapitel: {
      titel: 'Bit & Byte - die kleinsten Einheiten',
      href: '/lernen/grundlagen/zahlen/bit-byte',
    },
  },
  {
    id: 'byte',
    begriff: 'Byte',
    kurzdefinition: 'Ein Byte besteht aus acht Bit und ist eine typische Grundeinheit für Speicherangaben.',
    definition: [
      'Ein Byte fasst acht Bits zusammen. Dadurch sind 256 verschiedene Bitmuster möglich, von 00000000 bis 11111111.',
      'Dateigroessen, Arbeitsspeicher und viele Protokollfelder werden in Byte oder Vielfachen davon angegeben.',
    ],
    kapitel: {
      titel: 'Bit & Byte - die kleinsten Einheiten',
      href: '/lernen/grundlagen/zahlen/bit-byte',
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
    id: 'ascii',
    begriff: 'ASCII',
    kurzdefinition: 'ASCII ist eine Zeichenkodierung, die Zeichen auf Zahlenwerte abbildet.',
    definition: [
      'ASCII steht für American Standard Code for Information Interchange. Der klassische ASCII-Code nutzt 7 Bit und ordnet Buchstaben, Ziffern und Steuerzeichen festen Zahlenwerten zu.',
      'In AP1-Aufgaben ist ASCII vor allem wichtig, wenn aus Bits, Bytes und Zeichen Speicherbedarf berechnet wird.',
    ],
    kapitel: {
      titel: 'Bit & Byte - die kleinsten Einheiten',
      href: '/lernen/grundlagen/zahlen/bit-byte',
    },
  },
  {
    id: 'basis',
    begriff: 'Basis',
    kurzdefinition: 'Die Basis gibt an, wie viele Ziffern ein Stellenwertsystem verwendet.',
    definition: [
      'Die Basis bestimmt die verfuegbaren Ziffern und die Stellenwerte eines Zahlensystems. Im Dezimalsystem ist die Basis 10, im Binrsystem 2 und im Hexadezimalsystem 16.',
      'Beim Umrechnen multiplizierst du jede Ziffer mit ihrer Basis hoch der jeweiligen Stelle.',
    ],
    kapitel: {
      titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
      href: '/lernen/grundlagen/zahlen/zahlensysteme',
    },
  },
  {
    id: 'stellenwert',
    begriff: 'Stellenwert',
    kurzdefinition: 'Der Stellenwert beschreibt, welchen Wert eine Position innerhalb einer Zahl hat.',
    definition: [
      'Der Stellenwert ergibt sich aus Basis und Position. Rechts beginnt die Position 0, nach links steigt der Exponent jeweils um eins.',
      'Bei der Binaerzahl 1011 haben die Stellen von rechts nach links die Werte 1, 2, 4 und 8.',
    ],
    kapitel: {
      titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
      href: '/lernen/grundlagen/zahlen/zahlensysteme',
    },
  },
  {
    id: 'binaersystem',
    begriff: 'Binrsystem',
    kurzdefinition: 'Das Binrsystem ist ein Stellenwertsystem mit der Basis 2.',
    definition: [
      'Das Binrsystem nutzt nur die Ziffern 0 und 1. Jede Stelle steht für eine Potenz von 2.',
      'Computer arbeiten intern mit binaeren Zustaenden, weil digitale Schaltungen zwei stabile Signalzustaende gut unterscheiden können.',
    ],
    kapitel: {
      titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
      href: '/lernen/grundlagen/zahlen/zahlensysteme',
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
    id: 'ip',
    begriff: 'IP',
    kurzdefinition: 'IP adressiert und vermittelt Pakete zwischen Netzwerken.',
    definition: [
      'IP steht für Internet Protocol. Es arbeitet auf OSI-Schicht 3 und sorgt dafür, dass Pakete über Netzwerkgrenzen hinweg weitergeleitet werden.',
      'IP garantiert keine Zustellung und keine Reihenfolge. Diese Aufgaben übernehmen bei Bedarf Protokolle hoeherer Schichten, zum Beispiel TCP.',
    ],
    kapitel: {
      titel: 'OSI-Modell - sieben Schichten',
      href: '/lernen/netzwerke/grundlagen-netz/osi-modell',
    },
  },
  {
    id: 'ipv4',
    begriff: 'IPv4-Adresse',
    kurzdefinition: 'Eine IPv4-Adresse ist eine 32-Bit-Adresse für ein Gerät in einem IPv4-Netz.',
    definition: [
      'Eine IPv4-Adresse besteht aus 32 Bit und wird meist als vier Dezimalzahlen mit Punkten geschrieben, zum Beispiel 192.168.1.10.',
      'Zusammen mit der Subnetzmaske erkennst du, welcher Teil die Netzadresse und welcher Teil den Host beschreibt.',
    ],
    kapitel: {
      titel: 'IPv4 & Subnetting',
      href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
    },
  },
  {
    id: 'subnetzmaske',
    begriff: 'Subnetzmaske',
    kurzdefinition: 'Die Subnetzmaske trennt den Netzanteil vom Hostanteil einer IPv4-Adresse.',
    definition: [
      'Die Subnetzmaske legt fest, welche Bits einer IPv4-Adresse zum Netzwerk gehören und welche Bits Hosts innerhalb dieses Netzwerks adressieren.',
      'In CIDR-Schreibweise wird sie als Präfixlänge notiert, zum Beispiel /24 für 255.255.255.0.',
    ],
    kapitel: {
      titel: 'IPv4 & Subnetting',
      href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
    },
  },
  {
    id: 'subnetting',
    begriff: 'Subnetting',
    kurzdefinition: 'Subnetting teilt ein größeres IP-Netz in kleinere Teilnetze auf.',
    definition: [
      'Beim Subnetting werden Host-Bits zu Netz-Bits gemacht. Dadurch entstehen mehrere kleinere Netze mit jeweils eigenem Adressbereich.',
      'Das ist in der Praxis wichtig für Struktur, Sicherheit und Adressplanung; in der AP1 wird es oft rechnerisch abgefragt.',
    ],
    kapitel: {
      titel: 'IPv4 & Subnetting',
      href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
    },
  },
  {
    id: 'cidr',
    begriff: 'CIDR',
    kurzdefinition: 'CIDR beschreibt IPv4-Netze mit einer Präfixlänge wie /24 statt nur mit klassischen Adressklassen.',
    definition: [
      'CIDR steht für Classless Inter-Domain Routing. Die Schreibweise 192.168.10.0/24 bedeutet: Die ersten 24 Bit gehören zum Netzanteil.',
      'CIDR macht Netze flexibel groß. Ein /25-Netz hat weniger Host-Bits als /24, ein /23-Netz hat mehr Host-Bits als /24.',
    ],
    kapitel: {
      titel: 'IPv4 & Subnetting',
      href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
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
    id: 'broadcast',
    begriff: 'Broadcast-Adresse',
    kurzdefinition: 'Die Broadcast-Adresse ist die letzte Adresse eines IPv4-Subnetzes.',
    definition: [
      'Bei der Broadcast-Adresse sind alle Host-Bits 1. Sie steht für alle Hosts im Subnetz und wird nicht an einen einzelnen Host vergeben.',
      'In einem /24-Netz wie 192.168.10.0/24 ist 192.168.10.255 die Broadcast-Adresse.',
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
    id: 'interface',
    begriff: 'Interface',
    kurzdefinition: 'Ein Interface ist eine Netzwerkschnittstelle, über die ein Gerät am Netz teilnimmt.',
    definition: [
      'Ein Interface kann eine physische Netzwerkkarte, ein WLAN-Adapter, ein virtuelles Interface oder ein Router-Port sein.',
      'IP-Adressen werden fachlich Interfaces zugeordnet. Ein Gerät kann deshalb mehrere IP-Adressen haben, wenn es mehrere Interfaces oder mehrere konfigurierte Adressen besitzt.',
    ],
    kapitel: {
      titel: 'IPv4 & Subnetting',
      href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
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
    id: 'bitweises-und',
    begriff: 'Bitweises UND',
    kurzdefinition: 'Bitweises UND verknuepft zwei Bitfolgen; nur 1 UND 1 ergibt 1.',
    definition: [
      'Beim Subnetting verknuepfst du IP-Adresse und Subnetzmaske bitweise. Das Ergebnis ist die Netzadresse.',
      'Beispiel: 50 ist binaer 00110010, 192 ist 11000000. Das bitweise UND ergibt 00000000.',
    ],
    kapitel: {
      titel: 'IPv4 & Subnetting',
      href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
    },
  },
  {
    id: 'tcp',
    begriff: 'TCP',
    kurzdefinition: 'TCP ist ein verbindungsorientiertes Transportprotokoll mit Zustellkontrolle.',
    definition: [
      'TCP steht für Transmission Control Protocol. Es baut eine Verbindung auf, nummeriert Daten, bestaetigt Empfang und sendet verlorene Segmente erneut.',
      'Es eignet sich für Anwendungen, bei denen Vollstaendigkeit wichtiger ist als minimale Verzoegerung, zum Beispiel Web, E-Mail oder Dateiübertragung.',
    ],
    kapitel: {
      titel: 'TCP vs. UDP',
      href: '/lernen/netzwerke/grundlagen-netz/tcp-udp',
    },
  },
  {
    id: 'udp',
    begriff: 'UDP',
    kurzdefinition: 'UDP ist ein verbindungsloses Transportprotokoll ohne Zustellgarantie.',
    definition: [
      'UDP steht für User Datagram Protocol. Es sendet Datagramme ohne Verbindungsaufbau und ohne automatische Wiederholung verlorener Pakete.',
      'Dadurch ist UDP schlank und schnell, aber die Anwendung muss bei Bedarf selbst mit Verlusten umgehen.',
    ],
    kapitel: {
      titel: 'TCP vs. UDP',
      href: '/lernen/netzwerke/grundlagen-netz/tcp-udp',
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
    id: 'dhcp',
    begriff: 'DHCP',
    kurzdefinition: 'DHCP weist Netzwerkkonfigurationen automatisch zu.',
    definition: [
      'DHCP steht für Dynamic Host Configuration Protocol. Es kann Geräten automatisch IP-Adresse, Subnetzmaske, Standardgateway und DNS-Server zuweisen.',
      'Dadurch müssen Clients in vielen Netzen nicht manuell konfiguriert werden.',
    ],
    kapitel: {
      titel: 'IPv4 & Subnetting',
      href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
    },
  },
  {
    id: 'dns',
    begriff: 'DNS',
    kurzdefinition: 'DNS loest Domainnamen in IP-Adressen auf.',
    definition: [
      'DNS steht für Domain Name System. Es übersetzt menschenlesbare Namen wie example.org in IP-Adressen, mit denen Rechner kommunizieren.',
      'Ohne DNS muesstest du dir für viele Dienste numerische IP-Adressen merken.',
    ],
    kapitel: {
      titel: 'IPv4 & Subnetting',
      href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
    },
  },
  {
    id: 'dsgvo',
    begriff: 'DSGVO',
    kurzdefinition: 'Die DSGVO regelt den Umgang mit personenbezogenen Daten in der EU.',
    definition: [
      'Die Datenschutz-Grundverordnung legt Grundsaetze, Rechte und Pflichten für die Verarbeitung personenbezogener Daten fest.',
      'Für IT-Aufgaben ist besonders wichtig, Datenminimierung, Zweckbindung, Sicherheit und Betroffenenrechte unterscheiden zu können.',
    ],
    kapitel: {
      titel: 'DSGVO - die sieben Grundsaetze',
      href: '/lernen/sicherheit/dsgvo-krypto/dsgvo-basics',
    },
  },
  {
    id: 'raid',
    begriff: 'RAID',
    kurzdefinition: 'RAID kombiniert mehrere Laufwerke für Ausfallsicherheit, Geschwindigkeit oder beides.',
    definition: [
      'RAID steht für Redundant Array of Independent Disks. Je nach Level werden Daten gespiegelt, verteilt oder mit Paritaet abgesichert.',
      'RAID ersetzt kein Backup, weil es nicht vor versehentlichem Loeschen, Schadsoftware oder Standortausfall schuetzt.',
    ],
    kapitel: {
      titel: 'RAID-Systeme (0, 1, 5, 6, 10)',
      href: '/lernen/hardware/speichersysteme/raid-systeme',
    },
  },
  {
    id: 'vlan',
    begriff: 'VLAN',
    kurzdefinition: 'Ein VLAN trennt ein physisches Netz logisch in mehrere Teilnetze.',
    definition: [
      'VLAN steht für Virtual Local Area Network. Damit lassen sich Geräte logisch trennen, obwohl sie an derselben physischen Switch-Infrastruktur haengen.',
      'VLANs helfen bei Segmentierung, Sicherheit und sauberer Netzwerkorganisation.',
    ],
    kapitel: {
      titel: 'IPv4 & Subnetting',
      href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
    },
  },
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
    id: 'usv',
    begriff: 'USV',
    kurzdefinition: 'Eine USV versorgt Systeme bei Stromausfall kurzzeitig weiter.',
    definition: [
      'USV steht für Unterbrechungsfreie Stromversorgung. Sie überbrueckt Stromausfaelle und Spannungsschwankungen, damit Systeme geordnet weiterlaufen oder herunterfahren können.',
      'Die passende USV wird nach Leistung, Laufzeit, Umschaltverhalten und Schutzbedarf ausgewaehlt.',
    ],
    kapitel: {
      titel: 'USV-Systeme',
      href: '/lernen/hardware/speichersysteme/usv-systeme',
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
    id: 'sla',
    begriff: 'SLA',
    kurzdefinition: 'Service Level Agreement — Vertrag über messbare Leistungsmerkmale einer IT-Dienstleistung.',
    definition: [
      'Ein SLA legt fest, welche Qualitaets- und Verfuegbarkeitszusagen ein IT-Dienstleister macht (z. B. 99,9 % Verfuegbarkeit, maximale Reaktionszeit).',
      'Es regelt auch Konsequenzen bei Nichteinhaltung (Pauschalen, Gutschriften) und dient als Grundlage für Preisbildung und Ticket-Eskalation.',
    ],
    kapitel: {
      titel: 'Serviceprozess & Support-Level',
      href: '/lernen/projekt/dokumente/serviceprozess-support',
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
    id: 'cpu',
    begriff: 'CPU',
    kurzdefinition: 'Hauptprozessor eines Computers; führt Programmbefehle und Berechnungen aus.',
    definition: [
      'CPU steht für Central Processing Unit. Der Prozessor liest Befehle aus dem Arbeitsspeicher, entschluesselt sie und fuehrt sie aus. Die wichtigsten Kennwerte sind Taktfrequenz (GHz), Anzahl der Kerne und Threads sowie die Cache-Groessen (L1, L2, L3).',
      'Mehr Kerne helfen nur bei parallelisierbaren Aufgaben. Ein einzelner Rechenstrang wird ausschliesslich durch hoeheren Takt oder bessere Architektur schneller, nicht durch zusaetzliche Kerne.',
    ],
    kapitel: {
      titel: 'Hardware, Schnittstellen & Peripherie auswaehlen',
      href: '/lernen/hardware/schnittstellen/hardware-schnittstellen',
    },
  },
  {
    id: 'ram',
    begriff: 'RAM',
    kurzdefinition: 'Fluechtiger Arbeitsspeicher; haelt aktive Programme und Daten waehrend des Betriebs vor.',
    definition: [
      'RAM steht für Random Access Memory. Der Arbeitsspeicher ist fluechtig, das heißt alle Daten gehen beim Ausschalten verloren. RAM ist deutlich schneller als SSD oder HDD und wird von der CPU im Nanosekundenbereich angesprochen.',
      'Reicht der RAM nicht aus, lagert das Betriebssystem Speicherseiten auf den Massenspeicher aus (Swapping). Das System wird dadurch spuerbar langsamer, weil SSD-Zugriffe um Groessenordnungen langsamer sind als RAM-Zugriffe.',
    ],
    kapitel: {
      titel: 'Hardware, Schnittstellen & Peripherie auswaehlen',
      href: '/lernen/hardware/schnittstellen/hardware-schnittstellen',
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
    id: 'ssd',
    begriff: 'SSD',
    kurzdefinition: 'Massenspeicher auf Flash-Basis; ohne mechanische Teile, deutlich schneller als HDD.',
    definition: [
      'SSD steht für Solid State Drive. Daten werden in Flash-Speicherzellen gehalten. Es gibt keine beweglichen Teile, dadurch sind SSDs lautlos, stossfest und reagieren in Bruchteilen einer Millisekunde.',
      'Die Geschwindigkeit haengt stark vom Anschluss ab: SATA-SSDs erreichen rund 500 MB/s, NVMe-SSDs über PCIe deutlich mehr. Schreibzyklen sind begrenzt, im Alltag aber selten der limitierende Faktor.',
    ],
    kapitel: {
      titel: 'Hardware, Schnittstellen & Peripherie auswaehlen',
      href: '/lernen/hardware/schnittstellen/hardware-schnittstellen',
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
    id: 'usb',
    begriff: 'USB',
    kurzdefinition: 'Universeller serieller Bus für Peripheriegeraete; hot-plug-faehig und mit Stromversorgung.',
    definition: [
      'USB steht für Universal Serial Bus. Verschiedene Generationen unterscheiden sich deutlich in der Geschwindigkeit: USB 2.0 480 Mbit/s, USB 3.2 Gen 1 5 Gbit/s, Gen 2 10 Gbit/s, Gen 2x2 20 Gbit/s, USB4 bis 40 Gbit/s.',
      'Der Steckertyp (A, B, Mini, Micro, C) sagt nichts über die Geschwindigkeit aus. USB-C ist ein Stecker, der sowohl USB 2.0 als auch USB4 oder Thunderbolt 3/4 fuehren kann.',
    ],
    kapitel: {
      titel: 'Hardware, Schnittstellen & Peripherie auswaehlen',
      href: '/lernen/hardware/schnittstellen/hardware-schnittstellen',
    },
  },
  {
    id: 'thunderbolt',
    begriff: 'Thunderbolt',
    kurzdefinition: 'Hochleistungsschnittstelle (Intel/Apple); kombiniert Daten, DisplayPort und Stromversorgung über USB-C.',
    definition: [
      'Thunderbolt ist eine universelle Hochleistungsschnittstelle. Thunderbolt 3 und 4 nutzen den USB-C-Stecker und liefern bis zu 40 Gbit/s, kombiniert mit DisplayPort-Signalen und Power Delivery bis 100 Watt.',
      'Damit lassen sich Docks, externe GPUs, mehrere 4K-Monitore und schnelle externe SSDs über ein einziges Kabel anschliessen. Voraussetzung ist ein Thunderbolt-faehiger Host und ein zertifiziertes Kabel.',
    ],
    kapitel: {
      titel: 'Hardware, Schnittstellen & Peripherie auswaehlen',
      href: '/lernen/hardware/schnittstellen/hardware-schnittstellen',
    },
  },
  {
    id: 'displayport',
    begriff: 'DisplayPort',
    kurzdefinition: 'Digitale Bildschirmschnittstelle (VESA); für hohe Aufloesungen, hohe Bildraten und Daisy-Chaining.',
    definition: [
      'DisplayPort ist ein VESA-Standard für die Uebertragung von Bild und Ton zwischen Computer und Monitor. DisplayPort 1.4 unterstuetzt 4K bei 120 Hz, DisplayPort 2.0/2.1 erreicht bis zu 8K.',
      'Eine Besonderheit ist Multi-Stream Transport: Mehrere Monitore können über einen einzigen DP-Port hintereinander geschaltet werden (Daisy Chain). Adapter zu HDMI sind möglich, aber nur in eine Richtung sinnvoll.',
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
    id: 'kvm-switch',
    begriff: 'KVM-Switch',
    kurzdefinition: 'Gerät zum Umschalten von Tastatur, Maus und Bildschirm zwischen mehreren Rechnern.',
    definition: [
      'KVM steht für Keyboard, Video, Mouse. Ein KVM-Switch verbindet einen Arbeitsplatz (Tastatur, Maus, Monitor) mit mehreren Rechnern und schaltet die Eingabe- und Ausgabegeraete per Tastendruck oder Hotkey um.',
      'Verbreitete Varianten sind klassische Hardware-Switches im Serverraum, KVM-over-IP-Loesungen für entfernte Administration und USB-C-Docks mit eingebautem KVM-Schalter für den Doppelarbeitsplatz aus Firmen- und Privatlaptop.',
    ],
    kapitel: {
      titel: 'Hardware, Schnittstellen & Peripherie auswaehlen',
      href: '/lernen/hardware/schnittstellen/hardware-schnittstellen',
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
    id: 'sata',
    begriff: 'SATA',
    kurzdefinition: 'Schnittstelle für interne HDDs und SSDs; auf 600 MB/s je Port begrenzt.',
    definition: [
      'SATA steht für Serial ATA und ist die über Jahre etablierte Schnittstelle für interne Festplatten und 2,5-Zoll-SSDs. SATA-III liefert brutto 6 Gbit/s, netto rund 550 bis 600 MB/s.',
      'Für klassische HDDs ist SATA mehr als ausreichend. SSDs werden durch SATA gebremst, weshalb für hohe Geschwindigkeit NVMe über PCIe genutzt wird.',
    ],
    kapitel: {
      titel: 'Hardware, Schnittstellen & Peripherie auswaehlen',
      href: '/lernen/hardware/schnittstellen/hardware-schnittstellen',
    },
  },
  {
    id: 'usb-pd',
    begriff: 'USB Power Delivery',
    kurzdefinition: 'USB-C-Stromversorgungsstandard; bis zu 240 Watt, dynamisch ausgehandelt.',
    definition: [
      'USB Power Delivery (USB-PD) ist eine Erweiterung des USB-C-Steckers, mit der Geräte und Netzteil dynamisch Spannung und Stromstaerke aushandeln. Aktuelle Versionen erlauben bis zu 240 Watt (Extended Power Range).',
      'Damit ein Notebook über USB-C zuverlaessig laedt, muss das Netzteil oder Dock genug Watt liefern und die richtige Spannung beherrschen. Reicht die Leistung nicht, laedt das Gerät langsamer oder gar nicht.',
    ],
    kapitel: {
      titel: 'Hardware, Schnittstellen & Peripherie auswaehlen',
      href: '/lernen/hardware/schnittstellen/hardware-schnittstellen',
    },
  },
  {
    id: 'schutzziel',
    begriff: 'Schutzziel',
    kurzdefinition: 'Eigenschaft, die ein System oder Daten in der IT-Sicherheit erfuellen sollen.',
    definition: [
      'Ein Schutzziel beschreibt, was geschuetzt werden soll, nicht wie. Klassisch sind Vertraulichkeit, Integritaet und Verfuegbarkeit (CIA). Authentizitaet, Nicht-Abstreitbarkeit und Verbindlichkeit erweitern den Katalog.',
      'In der Pruefung musst du Massnahmen oft einem Schutzziel zuordnen, zum Beispiel Verschluesselung der Vertraulichkeit oder Hashwert der Integritaet.',
    ],
    kapitel: {
      titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
      href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
    },
  },
  {
    id: 'vertraulichkeit',
    begriff: 'Vertraulichkeit',
    kurzdefinition: 'Schutzziel: nur Berechtigte können Daten lesen oder einsehen.',
    definition: [
      'Vertraulichkeit bedeutet, dass Informationen nur für befugte Personen, Prozesse oder Systeme zugaenglich sind. Verletzungen sind zum Beispiel Mitlesen im Netz, Datendiebstahl oder ungeschuetzte Bildschirmsperre.',
      'Typische Schutzmassnahmen sind Zugriffsrechte, Verschluesselung in Ruhe und auf der Leitung, Multi-Faktor-Authentifizierung sowie Schulung gegen Phishing.',
    ],
    kapitel: {
      titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
      href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
    },
  },
  {
    id: 'integritaet',
    begriff: 'Integritaet',
    kurzdefinition: 'Schutzziel: Daten sind unversehrt; jede Veraenderung wird erkannt.',
    definition: [
      'Integritaet bedeutet, dass Daten und Systeme korrekt, vollständig und unveraendert bleiben. Eine unbemerkte Aenderung verletzt das Schutzziel, auch wenn die Daten danach noch lesbar sind.',
      'Hashwerte, digitale Signaturen, Pruefsummen und Schreibrechte schuetzen die Integritaet. RAID schuetzt Daten vor Plattendefekten, ist aber kein Ersatz für Backup oder Versionierung.',
    ],
    kapitel: {
      titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
      href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
    },
  },
  {
    id: 'verfuegbarkeit',
    begriff: 'Verfügbarkeit',
    kurzdefinition: 'Schutzziel: Systeme und Daten sind erreichbar, wenn sie gebraucht werden.',
    definition: [
      'Verfuegbarkeit beschreibt, dass autorisierte Nutzer einen Dienst zu einem festgelegten Zeitpunkt mit einer festgelegten Qualitaet nutzen können. Stromausfall, Hardwaredefekt, DDoS oder Ransomware können die Verfuegbarkeit kappen.',
      'Massnahmen sind Redundanz (RAID, Cluster), USV, Backup mit getestetem Restore, Lastverteilung und ein Notfall- und Wiederanlaufplan.',
    ],
    kapitel: {
      titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
      href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
    },
  },
  {
    id: 'authentizitaet',
    begriff: 'Authentizitaet',
    kurzdefinition: 'Schutzziel: die behauptete Identitaet einer Person oder Datenquelle ist nachweislich echt.',
    definition: [
      'Authentizitaet stellt sicher, dass ein Absender, ein System oder eine Datei tatsaechlich der oder das ist, was behauptet wird. Sie ist Voraussetzung für Vertraulichkeit und Integritaet, weil ohne echten Absender keine Zuordnung möglich ist.',
      'Digitale Signaturen, Zertifikate (PKI), starke Authentifizierung mit mehreren Faktoren und gepruefte Boot-Ketten sind typische Massnahmen.',
    ],
    kapitel: {
      titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
      href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
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
    id: 'schutzbedarf',
    begriff: 'Schutzbedarf',
    kurzdefinition: 'Mass für die Folgen, die eine Verletzung eines Schutzziels für einen Prozess oder ein System hat.',
    definition: [
      'Der Schutzbedarf wird je Schutzziel bewertet und drueckt aus, wie schlimm es ist, wenn das Ziel verletzt wird. Das BSI nutzt drei Stufen: normal, hoch, sehr hoch.',
      'Aus dem Schutzbedarf ergibt sich, welche Massnahmen verhaeltnismaessig sind. Ein hoher Schutzbedarf fordert mehr und staerkere Massnahmen, ein normaler Schutzbedarf kommt in der Regel mit den Standard-Anforderungen aus dem IT-Grundschutz aus.',
    ],
    kapitel: {
      titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
      href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
    },
  },
  {
    id: 'schutzbedarfsfeststellung',
    begriff: 'Schutzbedarfsfeststellung',
    kurzdefinition: 'Vorgang, bei dem für jeden Geschäftsprozess oder jedes System der Schutzbedarf je Schutzziel ermittelt wird.',
    definition: [
      'Die Schutzbedarfsfeststellung beschreibt zunaechst Geschaeftsprozesse und die zugehoerigen Informationen, ordnet ihnen Anwendungen und IT-Systeme zu und bewertet anschliessend Schadensszenarien je Schutzziel auf normal, hoch oder sehr hoch.',
      'Die Bewertung folgt im IT-Grundschutz dem Maximumprinzip: ein abhaengiges System übernimmt den hoechsten Schutzbedarf der Prozesse oder Daten, die es verarbeitet.',
    ],
    kapitel: {
      titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
      href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
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
    id: 'risikomatrix',
    begriff: 'Risikomatrix',
    kurzdefinition: 'Tabelle, die Eintrittswahrscheinlichkeit und Schadenshoehe gegeneinander stellt, um Risiken einzustufen.',
    definition: [
      'Eine Risikomatrix kombiniert die geschaetzte Eintrittswahrscheinlichkeit (selten, möglich, wahrscheinlich, sehr wahrscheinlich) mit der Schadenshoehe (gering, mittel, hoch, sehr hoch). Das Ergebnis ist eine Risikoklasse, oft farblich von gruen bis rot dargestellt.',
      'Sie hilft, über den Umgang mit Risiken zu entscheiden: vermeiden, vermindern, übertragen (zum Beispiel über eine Versicherung) oder bewusst akzeptieren.',
    ],
    kapitel: {
      titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
      href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
    },
  },
  {
    id: 'restrisiko',
    begriff: 'Restrisiko',
    kurzdefinition: 'Risiko, das nach Umsetzung der Sicherheitsmassnahmen verbleibt und vom Management formell akzeptiert wird.',
    definition: [
      'Vollstaendige Sicherheit gibt es nicht. Nach Umsetzung der angemessenen Massnahmen verbleibt ein Restrisiko, das die Geschaeftsleitung dokumentiert akzeptieren muss.',
      'Wenn das Restrisiko zu hoch ist, sind weitere Massnahmen, eine Risikoübertragung oder im Extremfall ein Verzicht auf den Geschaeftsprozess nötig.',
    ],
    kapitel: {
      titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
      href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
    },
  },
  {
    id: 'isms',
    begriff: 'ISMS',
    kurzdefinition: 'Information Security Management System; Regelwerk für Planung, Umsetzung, Prüfung und Verbesserung der Informationssicherheit.',
    definition: [
      'Ein ISMS ist kein Produkt, sondern ein dokumentiertes System aus Leitlinien, Rollen, Prozessen und Massnahmen. Es legt fest, wer für Informationssicherheit verantwortlich ist, wie Risiken bewertet werden und wie auf Vorfaelle reagiert wird.',
      'Internationaler Massstab für Anforderungen ist ISO/IEC 27001, in Deutschland zusaetzlich der BSI-Standard 200-1 mit der IT-Grundschutz-Methodik 200-2 und der Risikoanalyse 200-3.',
    ],
    kapitel: {
      titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
      href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
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
    id: 'bsi-grundschutz',
    begriff: 'BSI IT-Grundschutz',
    kurzdefinition: 'Vom BSI herausgegebene Methodik und Bausteinkatalog für ein angemessenes Sicherheitsniveau.',
    definition: [
      'Der IT-Grundschutz beschreibt im IT-Grundschutz-Kompendium Bausteine zu Themenbereichen wie ISMS, Organisation, Personal, Anwendungen oder Netze. Jeder Baustein enthaelt Basis-, Standard- und Anforderungen für erhoehten Schutzbedarf.',
      'Die zugehoerige Methodik steht in den BSI-Standards 200-1 (ISMS), 200-2 (Vorgehensweise) und 200-3 (Risikoanalyse). Der BSI-Standard 200-4 ergaenzt das Business Continuity Management.',
    ],
    kapitel: {
      titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
      href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
    },
  },
  {
    id: 'iso-27001',
    begriff: 'ISO/IEC 27001',
    kurzdefinition: 'Internationale Norm mit Anforderungen an ein ISMS, herausgegeben von ISO und IEC.',
    definition: [
      'ISO/IEC 27001 legt die Anforderungen an Aufbau, Betrieb, Ueberwachung und Verbesserung eines ISMS fest. Die aktuelle Fassung stammt aus 2022 und enthaelt im Anhang A einen Massnahmenkatalog mit organisatorischen, personellen, physischen und technischen Controls.',
      'Eine Zertifizierung nach ISO/IEC 27001 weist gegenüber Kunden und Aufsichtsbehoerden nach, dass die Organisation Informationssicherheit systematisch managt. Der BSI IT-Grundschutz ist dazu kompatibel und kann als Pfad zur Zertifizierung genutzt werden.',
    ],
    kapitel: {
      titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
      href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
    },
  },
  {
    id: 'datenrate',
    begriff: 'Datenrate',
    kurzdefinition: 'Die Datenrate beschreibt, wie viele Bits oder Bytes pro Zeiteinheit übertragen werden.',
    definition: [
      'Die Datenrate gibt an, wie schnell Daten übertragen werden, klassisch in bit/s oder Byte/s. Internet-Anschluesse werden üblicherweise in Mbit/s angegeben (kleines b), Datei- oder Speichergeschwindigkeiten in MB/s (großes B). Der Faktor 8 entscheidet jedes Mal über den richtigen Wert.',
      'In AP1-Aufgaben rechnest du mit drei verwandten Formeln: Zeit = Datenmenge / Datenrate, Datenrate = Datenmenge / Zeit und Datenmenge = Datenrate * Zeit. Wer die Einheiten vorher in eine gemeinsame Basis bringt (beides in Bit oder beides in Byte), liegt sicher.',
    ],
    kapitel: {
      titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
      href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
    },
  },
  {
    id: 'bandbreite',
    begriff: 'Bandbreite',
    kurzdefinition: 'Die Bandbreite ist die theoretisch maximale Datenrate eines Übertragungswegs.',
    definition: [
      'Bandbreite stammt urspruenglich aus der Nachrichtentechnik und beschreibt die Breite des Frequenzbereichs einer Leitung in Hertz. In der IT wird der Begriff lose mit der theoretischen Maximaldatenrate gleichgesetzt - zum Beispiel 100 Mbit/s bei einer Fast-Ethernet-Leitung.',
      'Die tatsaechlich nutzbare Datenrate (Durchsatz) liegt fast immer unter der Bandbreite, weil Header, Protokolle, Wiederholungen und Geräte-Latenzen Anteile abziehen. In Pruefungsaufgaben kommen typische Brutto-Netto-Annahmen wie 80 Prozent vor.',
    ],
    kapitel: {
      titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
      href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
    },
  },
  {
    id: 'latenz',
    begriff: 'Latenz',
    kurzdefinition: 'Die Latenz ist die Zeit, die ein einzelnes Datenpaket bis zum Empfaenger braucht.',
    definition: [
      'Latenz misst die Verzoegerung pro Paket - typisch in Millisekunden. Ein hoher Ping zwischen Berlin und Tokio entsteht nicht durch geringe Bandbreite, sondern durch die Laufzeit auf langen Glasfasern und durch Paketverarbeitung in Routern.',
      'Bandbreite und Latenz sind unabhaengig voneinander. Eine Satellitenleitung kann Hunderte Mbit/s liefern und trotzdem 600 ms Verzoegerung haben - was für Videokonferenzen oder Online-Spiele schmerzhaft ist, für einen Datei-Download aber kaum stoert.',
    ],
    kapitel: {
      titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
      href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
    },
  },
  {
    id: 'durchsatz',
    begriff: 'Durchsatz',
    kurzdefinition: 'Durchsatz ist die effektiv erreichte Datenrate auf einem Übertragungsweg.',
    definition: [
      'Der Durchsatz (Throughput) ist das, was nach Abzug von Overhead, Latenz, Wiederholungen und Endgeraete-Bremsen tatsaechlich beim Empfaenger ankommt. Er liegt immer unter der Bandbreite und wird oft brutto/netto unterschieden.',
      'Bei Ethernet rechnet man typisch mit ca. 95 Prozent Effizienz, bei TCP über WAN deutlich darunter, bei WLAN je nach Standard, Stoerumgebung und Geräteanzahl mit 30 bis 70 Prozent. Pruefungsaufgaben geben den Faktor meist explizit an.',
    ],
    kapitel: {
      titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
      href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
    },
  },
  {
    id: 'dpi',
    begriff: 'DPI',
    kurzdefinition: 'DPI gibt an, wie viele Punkte (Pixel) pro Zoll ein Scanner oder Drucker erfasst.',
    definition: [
      'DPI steht für Dots per Inch. Ein Scanner mit 600 dpi erzeugt 600 Bildpunkte pro Inch in jeder Richtung. Beim Rechnen wandelst du zuerst Zentimeter in Inch um (1 Inch = 2,54 cm) und multiplizierst dann mit der DPI-Zahl, um die Pixelmasse zu erhalten.',
      'In Aufgabentexten steht oft 1:1 - also gleiche DPI in horizontaler und vertikaler Richtung. Streng genommen gibt es zwei Werte (z. B. 600 x 300 dpi). PPI (Pixel per Inch) wird im Bildschirmkontext genutzt und ist für Pruefungsaufgaben zu DPI fast deckungsgleich.',
    ],
    kapitel: {
      titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
      href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
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
    id: 'kompression',
    begriff: 'Kompression',
    kurzdefinition: 'Kompression reduziert die Dateigroesse, indem Redundanzen entfernt oder Daten ungenauer gespeichert werden.',
    definition: [
      'Verlustfreie Verfahren wie ZIP, PNG oder FLAC erlauben eine Wiederherstellung der Originaldaten. Verlustbehaftete Verfahren wie JPEG, MP3 oder H.264 werfen Daten weg, die das menschliche Auge oder Ohr ohnehin schlecht wahrnimmt - das Original ist danach nicht mehr exakt rekonstruierbar.',
      'In AP1-Aufgaben heißt Komprimierung auf 50 Prozent meist: Originalgroesse mal 0,5. Das ist kein absoluter Abzug von 50 Bytes, sondern ein Faktor. Welche Verfahren in der Praxis welche Faktoren erreichen, regeln Normen wie ISO/IEC 10918 (JPEG) oder ITU-T H.264.',
    ],
    kapitel: {
      titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
      href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
    },
  },
  {
    id: 'bitrate',
    begriff: 'Bitrate',
    kurzdefinition: 'Die Bitrate ist die Datenrate eines kontinuierlichen Medienstroms wie Audio oder Video.',
    definition: [
      'Eine Audio-Datei mit 320 kbit/s erzeugt pro Sekunde 320 000 Bit, also 40 000 Byte. Bei Video kombinieren sich Aufloesung, Framerate und Farbtiefe zu einer Roh-Bitrate, die durch Kompression deutlich gesenkt wird.',
      'Bitraten gibt es in zwei Varianten: Konstant (CBR) liefert eine gleichbleibende Datenrate und ist gut planbar. Variabel (VBR) passt die Datenrate dem Inhalt an - ruhige Szenen brauchen weniger, actionreiche mehr Bits.',
    ],
    kapitel: {
      titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
      href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
    },
  },
  {
    id: 'binaerpraefix',
    begriff: 'Binaerpraefix',
    kurzdefinition: 'Binaerpraefixe stehen für Vielfache von 1024 und folgen der IEC-80000-13.',
    definition: [
      'Die IEC 80000-13 (frueher IEC 60027-2) definiert KiB, MiB, GiB, TiB als 2^10, 2^20, 2^30, 2^40 Byte. Sie wurde eingefuehrt, um die Verwechslung mit den SI-Präfixen zu beenden, die offiziell stets dezimal gemeint sind.',
      'In Pruefungsaufgaben werden Binaerpraefixe oft explizit genannt - etwa wenn ein Bild in MiB statt MB ausgedrueckt werden soll. Wer dann mit 1000 statt 1024 teilt, erhaelt ein systematisch zu großes Ergebnis.',
    ],
    kapitel: {
      titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
      href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
    },
  },
  {
    id: 'dezimalpraefix',
    begriff: 'Dezimalpraefix',
    kurzdefinition: 'Dezimalpraefixe stehen für Vielfache von 1000 und folgen dem SI-System.',
    definition: [
      'Das Internationale Einheitensystem definiert kilo = 10^3, mega = 10^6, giga = 10^9, tera = 10^12. KB, MB, GB, TB sind also dezimal. Festplatten- und Internet-Hersteller geben ihre Werte in der Regel dezimal an - daher zeigt eine 1 TB-Platte unter Windows nur ca. 931 GiB.',
      'In Pruefungsaufgaben gilt: Wenn nichts anderes angegeben ist, KB/MB/GB als dezimal lesen. Bei IHK-Aufgaben mit Festplattenkapazitaet, Datenraten oder Mobilfunk-Tarifen sind Dezimalpraefixe der Standard.',
    ],
    kapitel: {
      titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
      href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
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
    id: 'arp',
    begriff: 'ARP',
    kurzdefinition: 'ARP loest IPv4-Adressen in MAC-Adressen auf und ist das Bindeglied zwischen Layer 3 und Layer 2.',
    definition: [
      'ARP steht für Address Resolution Protocol (RFC 826). Bevor ein Host ein IP-Paket im lokalen Subnetz versenden kann, muss er die MAC-Adresse des Empfaengers kennen. Per ARP-Request fragt er per Broadcast "Wer hat 192.168.10.7?" und erhaelt die Antwort als ARP-Reply mit der MAC des Zielhosts.',
      'Die Antworten landen im ARP-Cache und gelten dort einige Minuten. Mit dem Befehl "arp -a" siehst du den aktuellen Cache. Wichtig: ARP funktioniert nur im lokalen Subnetz - für Pakete über das Gateway wird die MAC des Gateways aufgeloest, nicht die des Endziels.',
    ],
    kapitel: {
      titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
      href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
    },
  },
  {
    id: 'apipa',
    begriff: 'APIPA',
    kurzdefinition: 'APIPA ist eine Notfall-Selbstkonfiguration aus dem Bereich 169.254.0.0/16, die ein Client vergibt, wenn kein DHCP-Server antwortet.',
    definition: [
      'APIPA steht für Automatic Private IP Addressing (RFC 3927). Erhaelt ein Windows- oder Linux-Client per DHCP keine Antwort, wuerfelt er selbst eine Adresse aus 169.254.1.0 - 169.254.254.255 und prueft per ARP, ob sie noch frei ist. Diese Adresse ist nicht routbar - das Gerät kommt nur noch mit anderen APIPA-Hosts im selben Segment in Kontakt.',
      'Diagnose-Wert: Sieht ein Host eine 169.254.x.x-Adresse, ist das fast immer ein Hinweis darauf, dass der DHCP-Server nicht erreicht wurde. Moegliche Ursachen sind defektes Kabel, falsches VLAN, ausgeschalteter DHCP-Dienst oder ein DHCP-Relay, das den Broadcast nicht weitergibt.',
    ],
    kapitel: {
      titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
      href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
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
    id: 'lease',
    begriff: 'DHCP-Lease',
    kurzdefinition: 'Ein Lease ist die zeitlich begrenzte Reservierung einer IP-Adresse, die ein DHCP-Server an einen Client vergibt.',
    definition: [
      'Beim DORA-Handshake (Discover, Offer, Request, Acknowledge) erhaelt der Client eine IP-Konfiguration auf Zeit - die Lease-Dauer steht in der Acknowledge-Nachricht (DHCP-Option 51). Ist die Haelfte der Zeit abgelaufen, fragt der Client per DHCP-Request beim selben Server eine Verlaengerung an (Renew). Antwortet er nicht, wird ab 87,5 Prozent der Lease-Zeit ein Broadcast versucht (Rebind).',
      'Wird ein Gerät ausgeschaltet oder das Netzwerk gewechselt, kann es per DHCP-Release seine Adresse zurueckgeben. Wichtig: Eine zu kurze Lease (z. B. 2 Stunden in einem Hotel-WLAN) entlastet den Pool, eine zu lange Lease (z. B. 8 Tage im Heimnetz) reduziert die DHCP-Last.',
    ],
    kapitel: {
      titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
      href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
    },
  },
  {
    id: 'ttl-dns',
    begriff: 'TTL (DNS)',
    kurzdefinition: 'Die TTL eines DNS-Eintrags gibt an, wie lange ein Resolver oder Client den Datensatz zwischenspeichern darf.',
    definition: [
      'TTL steht für Time to Live und ist ein Wert in Sekunden. Ein A-Record mit TTL 3600 darf eine Stunde im Cache liegen. Erst danach holt der Resolver den Datensatz erneut beim autoritativen Server. Hohe TTLs entlasten die Server, niedrige TTLs erlauben schnellere Umzuege - bei einem Server-Wechsel wird die TTL einige Stunden vorher gesenkt, damit Aenderungen schnell sichtbar werden.',
      'Wichtig: Die TTL im DNS hat nichts mit der TTL im IP-Header zu tun (dort begrenzt sie die Hop-Anzahl, sichtbar in tracert/traceroute). In DNS bezieht sich TTL ausschliesslich auf die Cache-Zeit eines Resource Records.',
    ],
    kapitel: {
      titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
      href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
    },
  },
  {
    id: 'ipconfig',
    begriff: 'ipconfig / ip a',
    kurzdefinition: 'ipconfig (Windows) und ip a beziehungsweise ip addr (Linux) zeigen die aktuelle IPv4-Konfiguration eines Hosts.',
    definition: [
      'Unter Windows liefert "ipconfig /all" die volle Konfiguration je Adapter: IPv4-Adresse, Subnetzmaske, Standardgateway, DNS-Server, MAC-Adresse, DHCP-Lease und ob die Adresse statisch oder per DHCP vergeben wurde. "ipconfig /release" gibt die Lease zurueck, "ipconfig /renew" fordert eine neue an, "ipconfig /flushdns" leert den DNS-Cache.',
      'Unter Linux entspricht das den Befehlen "ip a" (Adressen) und "ip r" (Routing-Tabelle inkl. Default-Gateway). Diese Befehle sind die erste Station der Layer-3-Diagnose: ohne saubere IP-Konfiguration nuetzt jeder weitere Test nichts.',
    ],
    kapitel: {
      titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
      href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
    },
  },
  {
    id: 'dora',
    begriff: 'DORA-Handshake',
    kurzdefinition: 'DORA (Discover, Offer, Request, Acknowledge) ist der vierstufige Handshake, mit dem ein DHCP-Server einem Client eine IP-Konfiguration zuteilt.',
    definition: [
      'Schritt 1: Discover - der Client schickt einen Broadcast (Quelle 0.0.0.0, Ziel 255.255.255.255), weil er noch keine IP hat. Schritt 2: Offer - jeder erreichbare DHCP-Server antwortet mit einem Adressvorschlag inklusive Lease-Dauer. Schritt 3: Request - der Client waehlt das erste Angebot per Broadcast und teilt allen Servern mit, welches Angebot er akzeptiert. Schritt 4: Acknowledge - der gewaehlte Server bestaetigt und schickt die finalen DHCP-Optionen mit.',
      'Wichtig: Genau diese vier Schritte werden gern abgefragt - oft als Reihenfolge-Aufgabe oder als Einzelschritt-Erklaerung. Jeder Schritt nutzt UDP, Port 67 (Server) und 68 (Client). Das Protokoll ist in RFC 2131 definiert.',
    ],
    kapitel: {
      titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
      href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
    },
  },
  {
    id: 'algorithmus',
    begriff: 'Algorithmus',
    kurzdefinition: 'Ein Algorithmus ist eine endliche, deterministische Folge von Anweisungen zur Loesung eines Problems.',
    definition: [
      'Ein Algorithmus beschreibt eindeutig, welche Schritte bei welcher Eingabe ausgefuehrt werden. Endlich bedeutet, dass der Ablauf terminieren muss. Deterministisch bedeutet, dass gleiche Eingaben zum gleichen Ablauf und Ergebnis fuehren.',
      'In der AP1 begegnen Algorithmen meist als Pseudocode, Programmablaufplan oder Struktogramm. Entscheidend ist nicht die konkrete Programmiersprache, sondern ob Eingabe, Verarbeitung, Ausgabe und Kontrollfluss sauber nachvollziehbar sind.',
    ],
    kapitel: {
      titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
      href: '/lernen/software/logik/pseudocode-einstieg',
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
    id: 'sequenz',
    begriff: 'Sequenz',
    kurzdefinition: 'Sequenz bedeutet, dass Anweisungen nacheinander in der geschriebenen Reihenfolge ausgefuehrt werden.',
    definition: [
      'Die Sequenz ist die einfachste Kontrollstruktur: erst Schritt 1, dann Schritt 2, dann Schritt 3. Jede Zuweisung kann den bisherigen Wert einer Variable überschreiben.',
      'Beim Schreibtischtest ist Sequenz die Grundregel. Du gehst Zeile für Zeile weiter und notierst nach jeder wirksamen Anweisung den neuen Zustand.',
    ],
    kapitel: {
      titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
      href: '/lernen/software/logik/pseudocode-einstieg',
    },
  },
  {
    id: 'selektion',
    begriff: 'Selektion',
    kurzdefinition: 'Selektion ist eine Auswahlstruktur: Eine Bedingung entscheidet, welcher Zweig ausgefuehrt wird.',
    definition: [
      'Typische Formen sind WENN/DANN, WENN/DANN/SONST und SONST-WENN-Ketten. Die Bedingung wird zu wahr oder falsch ausgewertet; danach läuft nur der passende Zweig.',
      'Pruefungsfalle: Bei einer SONST-WENN-Kette wird von oben nach unten geprueft. Sobald eine Bedingung wahr ist, werden die spaeteren Alternativen nicht mehr ausgefuehrt.',
    ],
    kapitel: {
      titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
      href: '/lernen/software/logik/pseudocode-einstieg',
    },
  },
  {
    id: 'iteration',
    begriff: 'Iteration',
    kurzdefinition: 'Iteration wiederholt einen Anweisungsblock, solange eine Zaehllogik oder Bedingung es verlangt.',
    definition: [
      'Iteration ist die allgemeine Bezeichnung für Wiederholung im Kontrollfluss. Dazu gehören FOR-Schleifen mit bekannter Anzahl, WHILE-Schleifen mit Vorbedingung und REPEAT-UNTIL-Schleifen mit Nachbedingung.',
      'In AP1-Aufgaben zeigt eine Iteration meist eine Summe, ein Maximum, einen Zaehler, eine Suche oder eine Eingabewiederholung. Die Grenze der Wiederholung ist dabei fast immer der kritische Punkt.',
    ],
    kapitel: {
      titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
      href: '/lernen/software/logik/pseudocode-einstieg',
    },
  },
  {
    id: 'schleife',
    begriff: 'Schleife',
    kurzdefinition: 'Eine Schleife ist eine Kontrollstruktur, die denselben Block mehrfach ausführt.',
    definition: [
      'Schleifen arbeiten mit einer Bedingung oder einem Zaehler. FOR eignet sich für bekannte Durchlaufzahlen, WHILE für Wiederholung solange eine Bedingung gilt, REPEAT-UNTIL für mindestens einen Durchlauf.',
      'Typische Fehler sind Off-by-One-Grenzen, fehlende Aktualisierung des Zaehlerwerts und Schleifenbedingungen, die nie falsch werden.',
    ],
    kapitel: {
      titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
      href: '/lernen/software/logik/pseudocode-einstieg',
    },
  },
  {
    id: 'bedingung',
    begriff: 'Bedingung',
    kurzdefinition: 'Eine Bedingung ist ein Ausdruck, der zu wahr oder falsch ausgewertet wird.',
    definition: [
      'Bedingungen entstehen aus Vergleichen und logischen Operatoren, zum Beispiel alter >= 18 oder rolle = "Admin" UND aktiv = wahr. Sie steuern Selektion und Iteration.',
      'Beim Schreibtischtest musst du Bedingungen explizit auswerten. Erst wenn wahr oder falsch feststeht, ist klar, welcher Zweig oder ob ein weiterer Schleifendurchlauf erfolgt.',
    ],
    kapitel: {
      titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
      href: '/lernen/software/logik/pseudocode-einstieg',
    },
  },
  {
    id: 'variable',
    begriff: 'Variable',
    kurzdefinition: 'Eine Variable ist ein benannter Speicherplatz für einen Wert, der sich im Ablauf aendern kann.',
    definition: [
      'Variablen machen Zwischenergebnisse greifbar: summe, max, i, gefunden oder anzahlFehler. Eine Zuweisung schreibt einen neuen Wert in die Variable und ersetzt den alten Wert.',
      'Gute Variablennamen zeigen die Absicht. In der Pruefung helfen sie dir, Summen, Zaehler, Flags und aktuelle Listenelemente sauber auseinanderzuhalten.',
    ],
    kapitel: {
      titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
      href: '/lernen/software/logik/pseudocode-einstieg',
    },
  },
  {
    id: 'datentyp',
    begriff: 'Datentyp',
    kurzdefinition: 'Ein Datentyp beschreibt, welche Art von Wert vorliegt und welche Operationen sinnvoll sind.',
    definition: [
      'Typische AP1-Datentypen sind int für ganze Zahlen, float für Kommazahlen, string für Text und bool für wahr/falsch. Der Datentyp beeinflusst Vergleiche, Rechenoperationen und Ausgaben.',
      'Pruefungsfalle: Ein Durchschnitt ist meist ein float, auch wenn die Eingabewerte ganze Zahlen sind. Wird eine Kommazahl ungewollt als int behandelt, kann das Ergebnis abgeschnitten werden.',
    ],
    kapitel: {
      titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
      href: '/lernen/software/logik/pseudocode-einstieg',
    },
  },
  {
    id: 'schreibtischtest',
    begriff: 'Schreibtischtest',
    kurzdefinition: 'Ein Schreibtischtest führt Pseudocode von Hand Zeile für Zeile aus.',
    definition: [
      'Beim Schreibtischtest spielst du Computer: Du liest jede Anweisung, pruefst Bedingungen, fuehrst den passenden Zweig aus und schreibst neue Variablenwerte in eine Trace-Tabelle.',
      'Diese Methode findet Grenzfehler, falsche Initialisierung und verwechselt Zuweisung mit Vergleich. In der AP1 ist sie eine Standardform für Pseudocode-Aufgaben.',
    ],
    kapitel: {
      titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
      href: '/lernen/software/logik/pseudocode-einstieg',
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
    id: 'bedarfsanalyse',
    begriff: 'Bedarfsanalyse',
    kurzdefinition: 'Strukturierte Erhebung dessen, was ein Kunde oder Anwender wirklich braucht, getrennt vom geaeusserten Wunsch.',
    definition: [
      'Eine Bedarfsanalyse übersetzt einen Wunsch ("wir brauchen neue Tablets") in ein Problem, eine Anforderung und schliesslich eine begruendete Loesung. Sie verhindert, dass eine konkrete Loesung gekauft wird, bevor das eigentliche Problem verstanden ist.',
      'Im Kern besteht sie aus sechs Schritten: Ausgangslage klaeren, Ziele formulieren, Anforderungen sammeln, Daten erheben, bewerten und priorisieren, Massnahmen ableiten. Pruefungsrelevant: Methodenwahl (Interview, Fragebogen, Beobachtung) und die Trennung quantitativ/qualitativ.',
    ],
    kapitel: {
      titel: 'Bedarfsanalyse, Kommunikation & Feedback',
      href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
    },
  },
  {
    id: 'ist-soll-vergleich',
    begriff: 'Ist-Soll-Vergleich',
    kurzdefinition: 'Gegenüberstellung des aktuellen Zustands (Ist) und des angestrebten Zielzustands (Soll), aus der sich der Bedarf ableitet.',
    definition: [
      'Der Ist-Soll-Vergleich ist die mathematische Form der Bedarfsdefinition: Bedarf = Soll minus Ist. Beispiel: Soll-Bearbeitungszeit pro Ticket 8 Minuten, Ist 14 Minuten - Bedarf ist die Schliessung der Luecke von 6 Minuten.',
      'In Pruefungen wird der Vergleich oft mit Kennzahlen oder Tabellen abgefragt. Wichtig: Soll-Werte müssen vorher messbar definiert sein, sonst ist der Vergleich nicht belastbar. Auch im PDCA- und im Projekt-Controlling-Kontext findet sich dieselbe Logik wieder.',
    ],
    kapitel: {
      titel: 'Bedarfsanalyse, Kommunikation & Feedback',
      href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
    },
  },
  {
    id: 'sender-empfaenger',
    begriff: 'Sender-Empfaenger-Modell',
    kurzdefinition: 'Grundmodell der Kommunikation: ein Sender kodiert eine Nachricht, der Empfaenger dekodiert sie - mit möglichen Stoerungen unterwegs.',
    definition: [
      'Das Modell geht auf Shannon und Weaver (1948) zurueck und beschreibt Kommunikation als Kette: Sender, Kodierung, Kanal, Dekodierung, Empfaenger. Stoerungen können auf jeder Stufe auftreten - etwa Mehrdeutigkeit beim Kodieren, Hintergrundlaerm im Kanal oder unterschiedliche Deutung beim Empfaenger.',
      'Pruefungsrelevant: Das Modell ist die Grundlage für alle weiteren Kommunikationsmodelle (Vier-Ohren, Watzlawick). Verstehe: Eine Nachricht ist nicht das, was der Sender meint, sondern das, was beim Empfaenger ankommt.',
    ],
    kapitel: {
      titel: 'Bedarfsanalyse, Kommunikation & Feedback',
      href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
    },
  },
  {
    id: 'vier-ohren',
    begriff: 'Vier-Ohren-Modell',
    kurzdefinition: 'Modell von Friedemann Schulz von Thun: Jede Aussage hat vier Botschaften - Sachebene, Selbstoffenbarung, Beziehung, Appell.',
    definition: [
      'Schulz von Thun (1981) zeigt, dass jede Aussage gleichzeitig auf vier Ebenen wirkt: 1) Sachinhalt - die nuechterne Information, 2) Selbstoffenbarung - was der Sender über sich preisgibt, 3) Beziehung - wie er den Empfaenger sieht, 4) Appell - was er erreichen will. Jede Ebene hat einen "Schnabel" beim Sender und ein "Ohr" beim Empfaenger.',
      'Pruefungsrelevant: Die typische Aufgabe gibt eine Beispiel-Aussage und fragt nach den vier möglichen Lesarten. Beispiel: "Das System ist wieder mal langsam." Sachinhalt: Performance-Beobachtung. Selbstoffenbarung: Frust. Beziehung: "Du als IT bist verantwortlich". Appell: "Mach was dagegen".',
    ],
    kapitel: {
      titel: 'Bedarfsanalyse, Kommunikation & Feedback',
      href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
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
  {
    id: 'sbi-feedback',
    begriff: 'SBI-Feedback',
    kurzdefinition: 'Methode der gewaltfreien Rueckmeldung: Situation - Behavior - Impact, also Situation, beobachtbares Verhalten, Auswirkung.',
    definition: [
      'Das SBI-Modell (Center for Creative Leadership) strukturiert ein Feedback-Gespraech in drei Schritten: Situation - wann/wo war es konkret, Behavior - was hat die Person beobachtbar getan (kein Urteil), Impact - welche Auswirkung hatte das Verhalten auf dich, das Team oder das Ergebnis.',
      'Pruefungsrelevant: SBI ist die saubere Form, "Du-Botschaften" und Pauschalurteile zu vermeiden. Ich-Botschaft statt Schuldzuweisung. Verwandt: STAR-Methode (Situation, Task, Action, Result) wird eher für Bewerbungsgespraeche und Leistungsbewertung verwendet.',
    ],
    kapitel: {
      titel: 'Bedarfsanalyse, Kommunikation & Feedback',
      href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
    },
  },
  {
    id: 'interview',
    begriff: 'Interview (Erhebungsmethode)',
    kurzdefinition: 'Strukturiertes oder halbstrukturiertes Gespraech mit Einzelpersonen, das tiefe qualitative Einblicke in Bedarf und Ursachen liefert.',
    definition: [
      'Das Interview ist die Methode der Wahl, wenn Ursachen, Sonderfaelle oder Hintergruende erfragt werden sollen, die ein Fragebogen nicht abdeckt. Drei Formen: strukturiert (fester Fragenkatalog), halbstrukturiert (Leitfaden mit offenen Fragen), unstrukturiert (freies Gespraech).',
      'Staerken: Tiefe, Anpassbarkeit an die Antwort, Sichtbarkeit nonverbaler Hinweise. Schwaechen: Zeitaufwendig, subjektiv, nur mit wenigen Personen möglich. Pruefungsrelevant: Methodenwahl begruenden - Interview eignet sich für Key User und Fuehrungskraefte, Fragebogen eher für breite Mitarbeiterkreise.',
    ],
    kapitel: {
      titel: 'Bedarfsanalyse, Kommunikation & Feedback',
      href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
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
    id: 'beobachtung',
    begriff: 'Beobachtung (Erhebungsmethode)',
    kurzdefinition: 'Direkte Erfassung tatsaechlicher Arbeitsablaeufe und Handlungen, oft am Arbeitsplatz - zeigt unausgesprochene Probleme.',
    definition: [
      'Die Beobachtung erfasst, was Anwender tatsaechlich tun, statt was sie sagen. Sie ist besonders wertvoll, wenn Routinen übersehen werden ("das mache ich seit Jahren so") oder wenn Anwender eigene Workarounds entwickelt haben, die kein Interview offenbart haette.',
      'Staerken: Echte Ablaeufe, blinde Flecken sichtbar machen. Schwaechen: Beobachtung kann das Verhalten veraendern (Hawthorne-Effekt), zeitaufwendig, und Datenschutz/Mitbestimmung sind zu beachten - nicht jede Beobachtung am Arbeitsplatz ist ohne Zustimmung des Betriebsrats erlaubt.',
    ],
    kapitel: {
      titel: 'Bedarfsanalyse, Kommunikation & Feedback',
      href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
    },
  },
  {
    id: 'likert-skala',
    begriff: 'Likert-Skala',
    kurzdefinition: 'Antwortformat in Fragebogen, das Zustimmungsgrade in meist fuenf oder sieben Stufen abbildet (von "stimme gar nicht zu" bis "stimme voll zu").',
    definition: [
      'Die Skala wurde 1932 von Rensis Likert eingefuehrt und ist heute Standard in Mitarbeiter-, Kunden- und Usability-Befragungen. Typisch sind Skalen mit fuenf Stufen (sehr unzufrieden - unzufrieden - neutral - zufrieden - sehr zufrieden) oder mit sieben für feinere Differenzierung.',
      'Pruefungsrelevant: Die mittlere Stufe ("neutral") ist umstritten - manche Skalen lassen sie weg, um Antwort-Tendenzen zur Mitte zu vermeiden. Auswertung erfolgt entweder als Durchschnitt (mit Vorsicht, da Ordinaldaten) oder als Verteilung pro Stufe.',
    ],
    kapitel: {
      titel: 'Bedarfsanalyse, Kommunikation & Feedback',
      href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
    },
  },
  {
    id: 'aktives-zuhoeren',
    begriff: 'Aktives Zuhoeren',
    kurzdefinition: 'Gespraechstechnik, die durch Spiegeln, Paraphrasieren und Nachfragen sicherstellt, dass eine Aussage richtig verstanden wurde.',
    definition: [
      'Aktives Zuhoeren wurde von Carl Rogers gepraegt und ist die Grundtechnik in Interview, Beratung und Konfliktgespraech. Vier Werkzeuge: Spiegeln (das Gehoerte zurueckgeben), Paraphrasieren (in eigenen Worten wiederholen), Zusammenfassen (mehrere Aussagen buendeln), Nachfragen (Verstehensluecken schliessen).',
      'Pruefungsrelevant: Aktives Zuhoeren reduziert Missverstaendnisse und ist Voraussetzung für eine saubere Bedarfsanalyse. Kombiniert mit dem Vier-Ohren-Modell schuetzt es vor reinen Sach-Interpretationen, wenn die Botschaft eigentlich eine Beziehungs- oder Appell-Schicht hat.',
    ],
    kapitel: {
      titel: 'Bedarfsanalyse, Kommunikation & Feedback',
      href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
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
    id: 'intrinsische-motivation',
    begriff: 'Intrinsische Motivation',
    kurzdefinition: 'Motivation aus der Aufgabe selbst, etwa Interesse, Sinn, Lernchance oder Verantwortung.',
    definition: [
      'Intrinsische Motivation entsteht, wenn eine Person die Aufgabe selbst als sinnvoll, interessant oder entwicklungsfoerderlich erlebt.',
      'Im IT-Kontext wirken zum Beispiel echte Verantwortung, Lernmöglichkeiten, gute Problembearbeitung und sichtbarer Nutzen für Anwender intrinsisch motivierend.',
    ],
    kapitel: {
      titel: 'Mitarbeitermotivation, Teamphasen und Change',
      href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
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
    id: 'zweifaktorentheorie',
    begriff: 'Zwei-Faktoren-Theorie',
    kurzdefinition: 'Motivationstheorie nach Herzberg: Hygienefaktoren verhindern Unzufriedenheit, Motivatoren foerdern Zufriedenheit.',
    definition: [
      'Die Zwei-Faktoren-Theorie trennt zwischen Hygienefaktoren wie Bezahlung, Arbeitsplatzsicherheit, Fuehrung und Arbeitsbedingungen sowie Motivatoren wie Anerkennung, Erfolg, Verantwortung und Weiterentwicklung.',
      'Typische AP1-Falle: Ein Hygienefaktor kann Frust senken, ist aber nicht automatisch ein Motivator. Für Akzeptanz im Change braucht man oft beides.',
    ],
    kapitel: {
      titel: 'Mitarbeitermotivation, Teamphasen und Change',
      href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
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
    id: 'teamphasen',
    begriff: 'Teamphasen',
    kurzdefinition: 'Entwicklungsstufen eines Teams: Forming, Storming, Norming, Performing und Adjourning.',
    definition: [
      'Teamphasen beschreiben, wie Gruppen sich typischerweise entwickeln: Orientierung, Konflikt, Regelbildung, Leistung und Abschluss.',
      'In Pruefungsaufgaben erkennst du die Phase an Symptomen: Unsicherheit, Konflikte, stabile Regeln, eigenstaendige Leistung oder Projektabschluss.',
    ],
    kapitel: {
      titel: 'Mitarbeitermotivation, Teamphasen und Change',
      href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
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
    id: 'storming',
    begriff: 'Storming',
    kurzdefinition: 'Konfliktphase eines Teams, in der Rollen, Einfluss und Vorgehen ausgehandelt werden.',
    definition: [
      'Storming zeigt sich durch Reibung, Widerstand, Machtfragen und Diskussionen über Vorgehen oder Verantwortung.',
      'Die Phase ist nicht automatisch ein Scheitern. Wichtig sind Moderation, transparente Entscheidungen und belastbare Regeln.',
    ],
    kapitel: {
      titel: 'Mitarbeitermotivation, Teamphasen und Change',
      href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
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
    id: 'adjourning',
    begriff: 'Adjourning',
    kurzdefinition: 'Abschlussphase eines Teams oder Projekts mit Übergabe, Rueckblick und Aufloesung.',
    definition: [
      'Adjourning beschreibt den Abschluss: Ergebnisse übergeben, Wissen sichern, Lessons Learned dokumentieren und Leistung anerkennen.',
      'In IT-Projekten ist diese Phase wichtig, damit Betrieb, Support und Dokumentation nicht nach Projektende abbrechen.',
    ],
    kapitel: {
      titel: 'Mitarbeitermotivation, Teamphasen und Change',
      href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
    },
  },
  {
    id: 'change-management',
    begriff: 'Change Management',
    kurzdefinition: 'Geplante Gestaltung organisatorischer Veraenderungen von der Begruendung bis zur Stabilisierung.',
    definition: [
      'Change Management sorgt dafür, dass Veraenderungen nicht nur technisch umgesetzt, sondern von Menschen verstanden, gelernt und dauerhaft genutzt werden.',
      'Typische Bausteine sind Zielbild, Stakeholderanalyse, Kommunikation, Beteiligung, Schulung, Pilot, Quick Wins, Erfolgsmessung und Stabilisierung.',
    ],
    kapitel: {
      titel: 'Mitarbeitermotivation, Teamphasen und Change',
      href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
    },
  },
  {
    id: 'stakeholderanalyse',
    begriff: 'Stakeholderanalyse',
    kurzdefinition: 'Analyse, welche Personen oder Gruppen von einer Aenderung betroffen sind oder Einfluss darauf haben.',
    definition: [
      'Die Stakeholderanalyse klaert Betroffenheit, Einfluss, Interessen und mögliche Risiken. Daraus werden Kommunikations- und Beteiligungsmassnahmen abgeleitet.',
      'Im IT-Change gehören neben Anwendern oft IT, Fachbereich, Leitung, Datenschutz, Informationssicherheit und Betriebsrat zu den Stakeholdern.',
    ],
    kapitel: {
      titel: 'Mitarbeitermotivation, Teamphasen und Change',
      href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
    },
  },
  {
    id: 'change-widerstand',
    begriff: 'Change-Widerstand',
    kurzdefinition: 'Skepsis oder Ablehnung gegen Veraenderung, oft als Hinweis auf Risiken, Angst oder fehlende Beteiligung.',
    definition: [
      'Change-Widerstand ist nicht nur Stoerung, sondern auch Information. Er kann auf unklare Ziele, schlechte Erfahrungen, Ueberlastung, Kompetenzangst oder echte fachliche Probleme hinweisen.',
      'Pruefungsrelevant ist eine sachliche Reaktion: Ursache benennen, Betroffene beteiligen, Schulung anbieten und den Nutzen konkret machen.',
    ],
    kapitel: {
      titel: 'Mitarbeitermotivation, Teamphasen und Change',
      href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
    },
  },
  {
    id: 'key-user',
    begriff: 'Key User',
    kurzdefinition: 'Praxisnahe Schlüsselanwender, die frueh testen, Feedback geben und andere bei der Einfuehrung unterstützen.',
    definition: [
      'Key User verbinden Fachbereich und Projektteam. Sie kennen den Arbeitsalltag, testen neue Loesungen frueh und können typische Fragen aus der Praxis beantworten.',
      'Bei IT-Einfuehrungen sind Key User wichtige Multiplikatoren, ersetzen aber keine strukturierte Schulung und keinen Supportprozess.',
    ],
    kapitel: {
      titel: 'Schulung, Einweisung, Key User und Multiplikatoren',
      href: '/lernen/projekt/service-management/schulung-einweisung-key-user',
    },
  },
  {
    id: 'schulung',
    begriff: 'Schulung',
    kurzdefinition: 'Geplante Lernmassnahme zum Aufbau von Wissen, Faehigkeiten oder Sicherheit für eine Aufgabe.',
    definition: [
      'Eine Schulung vermittelt Wissen und Uebung für eine Rolle, ein System oder einen Prozess. Sie hat Zielgruppe, Lernziele, Inhalte, Methode und idealerweise eine Erfolgskontrolle.',
      'In IT-Einfuehrungen reicht eine reine Information meist nicht aus. Anwender müssen typische Faelle ueben, Fragen stellen können und nach dem Start Unterstuetzung bekommen.',
    ],
    kapitel: {
      titel: 'Schulung, Einweisung, Key User und Multiplikatoren',
      href: '/lernen/projekt/service-management/schulung-einweisung-key-user',
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
    id: 'schulungsbedarf',
    begriff: 'Schulungsbedarf',
    kurzdefinition: 'Luecke zwischen benötigten und vorhandenen Kompetenzen einer Zielgruppe.',
    definition: [
      'Schulungsbedarf entsteht, wenn Personen für einen Soll-Prozess, ein neues System oder eine neue Rolle noch nicht ausreichend vorbereitet sind.',
      'Pruefungsrelevant ist die Ableitung: Zielgruppe trennen, Soll-Kompetenz bestimmen, Vorwissen pruefen und passende Lernform mit Erfolgskontrolle planen.',
    ],
    kapitel: {
      titel: 'Schulung, Einweisung, Key User und Multiplikatoren',
      href: '/lernen/projekt/service-management/schulung-einweisung-key-user',
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
    id: 'train-the-trainer',
    begriff: 'Train-the-Trainer',
    kurzdefinition: 'Vorgehen, bei dem Trainer oder Key User vorbereitet werden, um andere einheitlich zu schulen.',
    definition: [
      'Train-the-Trainer eignet sich, wenn viele Personen, Standorte oder Schichten geschult werden müssen. Zuerst werden Trainer oder Key User intensiv vorbereitet.',
      'Wichtig sind einheitliche Unterlagen, Uebungsfaelle, klare Grenzen der Rolle und ein Rueckkanal für Fragen, die nicht lokal geloest werden können.',
    ],
    kapitel: {
      titel: 'Schulung, Einweisung, Key User und Multiplikatoren',
      href: '/lernen/projekt/service-management/schulung-einweisung-key-user',
    },
  },
  {
    id: 'schulungsnachweis',
    begriff: 'Schulungsnachweis',
    kurzdefinition: 'Dokumentation einer Schulung mit Datum, Teilnehmenden, Inhalten und offenen Punkten.',
    definition: [
      'Ein Schulungsnachweis macht nachvollziehbar, wer zu welchen Inhalten geschult wurde. Typisch sind Datum, Trainer, Teilnehmende, Thema, Material und offene Fragen.',
      'Im IT-Betrieb hilft der Nachweis bei Qualitaetssicherung, Audit, Datenschutz- oder Sicherheitsunterweisungen und gezielter Nachschulung.',
    ],
    kapitel: {
      titel: 'Schulung, Einweisung, Key User und Multiplikatoren',
      href: '/lernen/projekt/service-management/schulung-einweisung-key-user',
    },
  },
  {
    id: 'crm',
    begriff: 'CRM',
    kurzdefinition: 'CRM buendelt Kundenbeziehungen, Kontakte, Angebote, Kampagnen und Servicehistorie.',
    definition: [
      'CRM steht für Customer Relationship Management. Es beschreibt Strategie und Software, mit denen ein Unternehmen Kundenbeziehungen über Marketing, Vertrieb und Service hinweg plant, dokumentiert und auswertet.',
      'Pruefungsrelevant: CRM erkennst du an Kundenkontakten, Leads, Angeboten, Nachfass-Terminen, Beschwerden und Servicehistorie. Es ist nicht dasselbe wie ERP.',
    ],
    kapitel: {
      titel: 'CRM, ERP, DMS und CMS',
      href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
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
    id: 'dms',
    begriff: 'DMS',
    kurzdefinition: 'Ein DMS verwaltet Dokumente mit Metadaten, Suche, Versionen, Rechten und Freigaben.',
    definition: [
      'DMS steht für Dokumentenmanagementsystem. Es speichert Dokumente nicht nur als Dateien, sondern verwaltet sie strukturiert mit Metadaten, Berechtigungen, Versionierung, Suche und oft Freigabeprozessen.',
      'Pruefungsrelevant: DMS passt zu Vertraegen, Rechnungen, Spezifikationen, Protokollen, Archivierung, Dokumentensuche und kontrollierter Freigabe.',
    ],
    kapitel: {
      titel: 'CRM, ERP, DMS und CMS',
      href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
    },
  },
  {
    id: 'cms',
    begriff: 'CMS',
    kurzdefinition: 'Ein CMS verwaltet digitale Inhalte für Website, Intranet, Portal oder andere Publikationskanaele.',
    definition: [
      'CMS steht für Content Management System. Es unterstuetzt Redaktion, Medienverwaltung, Rechte, Templates und Veroeffentlichung digitaler Inhalte.',
      'Pruefungsrelevant: CMS erkennst du an Website, Intranet, Produktseiten, News, Downloads, redaktioneller Pflege und Trennung von Inhalt und Layout.',
    ],
    kapitel: {
      titel: 'CRM, ERP, DMS und CMS',
      href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
    },
  },
  {
    id: 'unternehmenssoftware',
    begriff: 'Unternehmenssoftware',
    kurzdefinition: 'Unternehmenssoftware unterstützt betriebliche Aufgaben und Geschäftsprozesse.',
    definition: [
      'Unternehmenssoftware umfasst Anwendungen, die betriebliche Prozesse unterstuetzen, etwa Kundenbetreuung, Warenwirtschaft, Dokumentenablage, Rechnungswesen, Personal oder Content-Pflege.',
      'In AP1-Aufgaben geht es meist darum, Systemklassen anhand von Zweck, Daten und Prozess zu unterscheiden, nicht darum, einen bestimmten Hersteller auswendig zu kennen.',
    ],
    kapitel: {
      titel: 'CRM, ERP, DMS und CMS',
      href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
    },
  },
  {
    id: 'schnittstelle',
    begriff: 'Schnittstelle',
    kurzdefinition: 'Eine Schnittstelle ist ein definierter Übergang für den Datenaustausch zwischen Systemen.',
    definition: [
      'Eine Schnittstelle legt fest, welche Daten Systeme austauschen, in welchem Format sie übertragen werden und wie Fehler behandelt werden. Beispiele sind Kundennummern, Auftraege, Rechnungen, Dokument-IDs oder Statusinformationen.',
      'Pruefungsrelevant: Schnittstellen reduzieren doppelte Datenerfassung, brauchen aber saubere Datenfelder, Verantwortlichkeiten, Berechtigungen und Testfaelle.',
    ],
    kapitel: {
      titel: 'CRM, ERP, DMS und CMS',
      href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
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
    id: 'workflow',
    begriff: 'Workflow',
    kurzdefinition: 'Ein Workflow ist ein festgelegter Arbeitsablauf mit Schritten, Rollen und Status.',
    definition: [
      'Ein Workflow beschreibt, welche Arbeitsschritte in welcher Reihenfolge ablaufen und welche Rolle jeweils verantwortlich ist. Typische Status sind neu, in Pruefung, freigegeben, abgelehnt oder archiviert.',
      'In DMS- und ERP-Aufgaben sind Workflows wichtig, wenn Dokumente, Rechnungen, Bestellungen oder Aenderungen kontrolliert geprueft und freigegeben werden müssen.',
    ],
    kapitel: {
      titel: 'CRM, ERP, DMS und CMS',
      href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
    },
  },
  {
    id: 'verschluesselung',
    begriff: 'Verschluesselung',
    kurzdefinition: 'Verschluesselung macht Klartext mit einem Schlüssel zu Chiffretext und ist mit passendem Schlüssel umkehrbar.',
    definition: [
      'Verschluesselung schuetzt Vertraulichkeit: Unbefugte sollen den Inhalt nicht lesen können, auch wenn sie die Daten abfangen oder einen Datentraeger entwenden.',
      'Sie ist etwas anderes als Hashing und Signieren. Verschluesselung ist umkehrbar, Hashing ist eine Einwegfunktion, und Signaturen beweisen Echtheit und Unveraendertheit.',
    ],
    kapitel: {
      titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
      href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
    },
  },
  {
    id: 'symmetrische-verschluesselung',
    begriff: 'Symmetrische Verschluesselung',
    kurzdefinition: 'Ein gemeinsamer geheimer Schlüssel wird für Verschluesselung und Entschluesselung genutzt.',
    definition: [
      'Symmetrische Verfahren wie AES sind schnell und deshalb für große Datenmengen geeignet, etwa Festplatten, Backups oder die Nutzdaten einer TLS-Verbindung.',
      'Das zentrale Problem ist die sichere Schluesselverteilung: Beide Parteien brauchen dasselbe Geheimnis, ohne dass es unterwegs abgefangen wird.',
    ],
    kapitel: {
      titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
      href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
    },
  },
  {
    id: 'asymmetrische-verschluesselung',
    begriff: 'Asymmetrische Verschluesselung',
    kurzdefinition: 'Public Key und Private Key bilden ein Schlüsselpaar mit getrennten Rollen.',
    definition: [
      'Der Public Key darf verteilt werden, der Private Key bleibt geheim. Was für einen Empfaenger mit dessen Public Key verschluesselt wird, kann nur mit dem passenden Private Key entschluesselt werden.',
      'Asymmetrische Verfahren sind rechenintensiver als symmetrische Verfahren. In der Praxis werden sie daher oft für Schluesselaustausch, Zertifikate und Signaturen eingesetzt.',
    ],
    kapitel: {
      titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
      href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
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
    id: 'salt',
    begriff: 'Salt',
    kurzdefinition: 'Zufaelliger Zusatz pro Nutzer oder Datensatz, der Hashwerte eindeutig macht.',
    definition: [
      'Ein Salt wird zusammen mit dem Passwort gehasht und meist offen neben dem Hash gespeichert. Er muss nicht geheim sein.',
      'Der Nutzen liegt darin, dass gleiche Passwoerter unterschiedliche Hashes erhalten und vorgefertigte Rainbow Tables unbrauchbar werden.',
    ],
    kapitel: {
      titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
      href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
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
    id: 'digitale-signatur',
    begriff: 'Digitale Signatur',
    kurzdefinition: 'Kryptografischer Nachweis für Integritaet und Herkunft von Daten.',
    definition: [
      'Bei einer digitalen Signatur wird typischerweise ein Hash der Daten mit dem Private Key des Signierenden signiert. Empfaenger pruefen die Signatur mit dem Public Key.',
      'Sie macht Daten nicht geheim. Sie zeigt, ob die Daten veraendert wurden und ob die Signatur zum passenden Schluesselpaar gehört.',
    ],
    kapitel: {
      titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
      href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
    },
  },
  {
    id: 'zertifikat',
    begriff: 'Zertifikat',
    kurzdefinition: 'Digitaler Ausweis, der eine Identitaet mit einem Public Key verbindet.',
    definition: [
      'Ein X.509-Zertifikat enthaelt unter anderem Subjekt, Public Key, Aussteller, Gueltigkeitszeitraum und erlaubte Verwendungen. Es wird von einer CA signiert.',
      'In TLS bestaetigt das Serverzertifikat, dass der Public Key zur aufgerufenen Domain gehört. Der Browser prueft Name, Gueltigkeit, Kette und Widerruf.',
    ],
    kapitel: {
      titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
      href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
    },
  },
  {
    id: 'certificate-authority',
    begriff: 'Certificate Authority',
    kurzdefinition: 'Vertrauenswuerdige Zertifizierungsstelle, die Zertifikate ausstellt und signiert.',
    definition: [
      'Eine CA prueft je nach Zertifikatstyp bestimmte Angaben und bestaetigt anschliessend per Signatur, dass ein Public Key zu einer Identitaet gehört.',
      'Root-CAs sind als Vertrauensanker im Betriebssystem oder Browser hinterlegt. Intermediate-CAs stehen meist zwischen Root-CA und Endzertifikat.',
    ],
    kapitel: {
      titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
      href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
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
    id: 'vpn',
    begriff: 'VPN',
    kurzdefinition: 'Virtuelles privates Netzwerk, das einen geschuetzten Tunnel über ein unsicheres Netz aufbaut.',
    definition: [
      'Ein VPN schuetzt die Uebertragung zwischen definierten Endpunkten, etwa Notebook und Firmennetz oder zwei Standorten. Es bietet je nach Verfahren Vertraulichkeit, Integritaet und Authentifizierung.',
      'VPN ersetzt keine Rechtevergabe. Wer durch den Tunnel kommt, darf im Zielnetz nur das tun, was Rollen, Firewall-Regeln und Anwendungen erlauben.',
    ],
    kapitel: {
      titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
      href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
    },
  },
  {
    id: 'tls',
    begriff: 'TLS',
    kurzdefinition: 'Transport Layer Security schuetzt Transportverbindungen wie HTTPS.',
    definition: [
      'TLS bietet einen sicheren Kanal mit Authentifizierung, Vertraulichkeit und Integritaetsschutz. Serverauthentifizierung erfolgt typischerweise über Zertifikate.',
      'TLS arbeitet praktisch hybrid: Der Handshake prueft Identitaet und handelt Schluessel aus, die laufenden Nutzdaten werden mit symmetrischen Sitzungsschluesseln geschuetzt.',
    ],
    kapitel: {
      titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
      href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
    },
  },
  {
    id: 'ipsec',
    begriff: 'IPsec',
    kurzdefinition: 'Protokollfamilie zur Absicherung von IP-Verkehr auf Netzwerkschicht.',
    definition: [
      'IPsec schuetzt IP-Pakete mit Security Associations und Protokollen wie ESP und AH. Für die automatische Schluesselaushandlung wird haeufig IKEv2 eingesetzt.',
      'In AP1-Aufgaben taucht IPsec oft bei Site-to-Site-VPNs, Routerkopplung und sicheren Standortverbindungen auf.',
    ],
    kapitel: {
      titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
      href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
    },
  },
  {
    id: 'dateisystem',
    begriff: 'Dateisystem',
    kurzdefinition: 'Organisationsschema, das festlegt, wie Dateien und Verzeichnisse auf einem Datentraeger gespeichert und verwaltet werden.',
    definition: [
      'Ein Dateisystem definiert, wie Daten auf einem Datentraeger logisch organisiert sind. Es legt fest, wie Dateien benannt, in Verzeichnisse gruppiert, mit Metadaten (Groesse, Rechte, Zeitstempel) versehen und in physischen Speicherbloecken abgelegt werden.',
      'Bekannte Beispiele sind FAT32 und exFAT (geraeteuebergreifend), NTFS (Windows), ext4 (Linux) und APFS (macOS/iOS). Die Wahl bestimmt Kompatibilitaet, maximale Dateigroesse, Rechtemodell und Schutz vor Datenverlust.',
    ],
    kapitel: {
      titel: 'Dateisysteme (FAT32, NTFS, ext4, APFS)',
      href: '/lernen/betriebssysteme/os-grundlagen/dateisysteme',
    },
  },
  {
    id: 'cluster',
    begriff: 'Cluster',
    kurzdefinition: 'Kleinste Speichereinheit, in der ein Dateisystem Daten auf dem Datentraeger ablegt.',
    definition: [
      'Ein Cluster (auch Allocation Unit) ist die kleinste Einheit, die ein Dateisystem fuer Dateien reserviert. Typische Clustergroessen liegen bei 4 KiB; bei FAT32 sind groessere Cluster bis 32 KiB ueblich.',
      'Eine 1-Byte-Datei belegt trotzdem einen ganzen Cluster — der Rest gilt als interner Verschnitt (Slack). Groessere Cluster bedeuten weniger Verwaltungsaufwand, aber mehr Verschnitt; kleinere Cluster sind effizienter bei vielen kleinen Dateien.',
    ],
    kapitel: {
      titel: 'Dateisysteme (FAT32, NTFS, ext4, APFS)',
      href: '/lernen/betriebssysteme/os-grundlagen/dateisysteme',
    },
  },
  {
    id: 'journaling',
    begriff: 'Journaling',
    kurzdefinition: 'Verfahren, bei dem ein Dateisystem geplante Aenderungen vor der Ausführung in einem Logbuch festhaelt.',
    definition: [
      'Beim Journaling protokolliert das Dateisystem vor jeder Schreibaktion, was es vorhat. Stuerzt das System mitten in der Operation ab, kann das Dateisystem aus dem Journal entweder die Aenderung sauber abschliessen oder den vorherigen Zustand wiederherstellen.',
      'Journaling schuetzt vor Inkonsistenzen nach Stromausfall oder Crash. NTFS und ext4 sind klassische Journaling-Dateisysteme; APFS nutzt stattdessen Copy-on-Write, das einen aehnlichen Schutz erreicht. FAT32 kennt kein Journaling.',
    ],
    kapitel: {
      titel: 'Dateisysteme (FAT32, NTFS, ext4, APFS)',
      href: '/lernen/betriebssysteme/os-grundlagen/dateisysteme',
    },
  },
  {
    id: 'inode',
    begriff: 'Inode',
    kurzdefinition: 'Metadaten-Eintrag in Unix-aehnlichen Dateisystemen, der eine einzelne Datei beschreibt.',
    definition: [
      'Ein Inode (Index Node) speichert in ext-Dateisystemen alle Metadaten einer Datei: Eigentuemer, Gruppe, Rechte, Groesse, Zeitstempel und Verweise auf die tatsaechlichen Datenbloecke. Der Dateiname steht nicht im Inode, sondern im Verzeichniseintrag.',
      'Die Anzahl der Inodes wird beim Formatieren festgelegt. Sind alle Inodes belegt, koennen keine neuen Dateien angelegt werden — auch wenn freier Speicherplatz vorhanden ist.',
    ],
    kapitel: {
      titel: 'Dateisysteme (FAT32, NTFS, ext4, APFS)',
      href: '/lernen/betriebssysteme/os-grundlagen/dateisysteme',
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
    id: 'cow-copy-on-write',
    begriff: 'Copy-on-Write',
    kurzdefinition: 'Schreibverfahren, bei dem geaenderte Datenbloecke neu geschrieben werden, statt vorhandene zu überschreiben.',
    definition: [
      'Beim Copy-on-Write (CoW) schreibt das Dateisystem geaenderte Daten in neue Bloecke und aktualisiert erst danach die Verweise. Der alte Zustand bleibt erhalten, bis er nicht mehr benoetigt wird.',
      'CoW ermoeglicht effiziente Snapshots und schuetzt aehnlich wie Journaling vor inkonsistenten Zustaenden nach Abstuerzen. APFS und ZFS arbeiten nach diesem Prinzip; NTFS und ext4 nicht.',
    ],
    kapitel: {
      titel: 'Dateisysteme (FAT32, NTFS, ext4, APFS)',
      href: '/lernen/betriebssysteme/os-grundlagen/dateisysteme',
    },
  },
]

const initialGlossarRegister: GlossarRegister = Object.fromEntries(
  initialGlossarEintraege.map((eintrag) => {
    const normalisierterEintrag = mitNormalisierterId(eintrag)

    return [normalisierterEintrag.id, normalisierterEintrag]
  }),
)

export const useGlossarStore = create<GlossarStore>((set, get) => ({
  einträge: initialGlossarRegister,
  findeEintrag: (id) => get().einträge[normalisiereGlossarId(id)],
  registriereEintrag: (eintrag) => {
    const normalisierterEintrag = mitNormalisierterId(eintrag)

    set((state) => ({
      einträge: {
        ...state.einträge,
        [normalisierterEintrag.id]: normalisierterEintrag,
      },
    }))
  },
  registriereEinträge: (einträge) => {
    set((state) => {
      const naechsteEintraege = { ...state.einträge }

      for (const eintrag of einträge) {
        const normalisierterEintrag = mitNormalisierterId(eintrag)
        naechsteEintraege[normalisierterEintrag.id] = normalisierterEintrag
      }

      return { einträge: naechsteEintraege }
    })
  },
}))
