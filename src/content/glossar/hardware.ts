import type { GlossarEintrag } from "../../lib/glossar/types"

export const hardware: GlossarEintrag[] = [
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
]
