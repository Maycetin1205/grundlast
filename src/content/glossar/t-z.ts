import type { GlossarEintrag } from "../../lib/glossar/types"

export const tBisZ: GlossarEintrag[] = [
  {
      id: 'und-gatter',
      begriff: 'UND-Gatter',
      kurzdefinition: 'Logikgatter, dessen Ausgang nur dann 1 wird, wenn alle Eingänge 1 sind.',
      definition: [
        'Ein UND-Gatter bildet die logische Konjunktion. Bei zwei Eingängen ist der Ausgang nur dann 1, wenn A und B beide 1 sind.',
        'In Software entspricht das einer Bedingung wie A AND B, A && B oder A und B.',
      ],
    },
  {
      id: 'wahrheitswert',
      begriff: 'Wahrheitswert',
      kurzdefinition: 'Wert einer Aussage oder Bedingung: wahr oder falsch.',
      definition: [
        'Ein Wahrheitswert beschreibt, ob eine Aussage gilt. In der IT wird wahr oft als 1 und falsch als 0 dargestellt.',
        'Bedingungen in Programmen werden auf solche Wahrheitswerte reduziert, damit WENN/DANN/SONST, Schleifen und logische Operatoren entscheidbar sind.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
  {
      id: 'wahrheitstabelle',
      begriff: 'Wahrheitstabelle',
      kurzdefinition: 'Tabelle, die für alle Eingangskombinationen das logische Ergebnis zeigt.',
      definition: [
        'Eine Wahrheitstabelle listet jede mögliche Kombination der Eingaben und den dazugehörigen Ausgang auf.',
        'Bei zwei Eingaben entstehen vier Zeilen, bei drei Eingaben acht. Dadurch wird eine logische Regel eindeutig prüfbar.',
      ],
    },
  {
      id: 'verbrauchsgueterkauf',
      begriff: 'Verbrauchsgüterkauf',
      kurzdefinition: 'Kauf einer Ware durch einen Verbraucher von einem Unternehmer.',
      definition: [
        'Ein Verbrauchsgüterkauf liegt vor, wenn ein Verbraucher von einem Unternehmer eine Ware kauft. Dafür gelten besondere Schutzregeln im BGB.',
        'Wichtig für Gewährleistung: Zeigt sich innerhalb eines Jahres seit Gefahrübergang ein mangelhafter Zustand, wird grundsätzlich vermutet, dass die Sache schon bei Gefahrübergang mangelhaft war.',
      ],
      kapitel: {
        titel: 'Gewährleistung und Garantie',
        href: '/lernen/vertragsrecht/vertraege/gewaehrleistung',
      },
    },
  {
      id: 'task',
      begriff: 'Task',
      kurzdefinition: 'Allgemeiner Begriff für eine auszuführende Aufgabe; Bedeutung hängt vom Systemkontext ab.',
      definition: [
        'Task kann in Oberflächen eine Anwendung oder einen Prozess meinen, in Scheduler-Kontexten aber allgemeiner eine planbare Arbeitseinheit.',
        'Deshalb muss bei Aufgaben immer der Kontext beachtet werden: Task-Manager, Betriebssystem-Scheduler oder geplante Hintergrundaufgabe meinen nicht zwingend exakt dasselbe.',
      ],
      kapitel: {
        titel: 'Prozesse, Threads und Tasks',
        href: '/lernen/betriebssysteme/os-grundlagen/prozess-thread',
      },
    },
  {
      id: 'transaktionsdaten',
      begriff: 'Transaktionsdaten',
      kurzdefinition: 'Daten zu konkreten Geschäftsvorgängen; im Ausbildungskontext meist deckungsgleich mit Bewegungsdaten.',
      definition: [
        'Transaktionsdaten beschreiben konkrete Ereignisse oder Vorgänge, zum Beispiel Aufträge, Zahlungen, Buchungen, Wareneingänge oder Tickets.',
        'Der Begriff wird besonders in ERP-, Datenarchitektur- und MDM-Kontexten verwendet. Im Grundlagenkapitel werden sie praktisch als Bewegungsdaten eingeordnet.',
      ],
      kapitel: {
        titel: 'Stamm- und Bewegungsdaten',
        href: '/lernen/daten/daten-qualitaet/stamm-bewegungsdaten',
      },
    },
  {
      id: 'taktfrequenz',
      begriff: 'Taktfrequenz',
      kurzdefinition: 'Anzahl der Taktzyklen pro Sekunde; bei CPUs meist in GHz angegeben.',
      definition: [
        'Die Taktfrequenz beschreibt, wie viele Taktzyklen eine CPU pro Sekunde durchläuft. 1 GHz bedeutet eine Milliarde Zyklen pro Sekunde.',
        'Sie ist ein wichtiger Kennwert, aber kein vollständiger Leistungsvergleich. Architektur, Kerne, Cache, Speicheranbindung, Kühlung und Aufgabe beeinflussen die reale Geschwindigkeit ebenfalls.',
      ],
      kapitel: {
        titel: 'CPU, RAM und Massenspeicher',
        href: '/lernen/hardware/komponenten/cpu-ram-speicher',
      },
    },
  {
      id: 'tcp',
      begriff: 'TCP',
      kurzdefinition: 'TCP ist ein verbindungsorientiertes Transportprotokoll mit Zustellkontrolle.',
      definition: [
        'TCP steht für Transmission Control Protocol. Es baut eine Verbindung auf, nummeriert Daten, bestätigt Empfang und sendet verlorene Segmente erneut.',
        'Es eignet sich für Anwendungen, bei denen Vollständigkeit wichtiger ist als minimale Verzögerung, zum Beispiel Web, E-Mail oder Dateiübertragung.',
      ],
      kapitel: {
        titel: 'TCP vs. UDP',
        href: '/lernen/netzwerke/grundlagen-netz/tcp-udp',
      },
    },
  {
      id: 'teamphasen',
      begriff: 'Teamphasen',
      kurzdefinition: 'Entwicklungsstufen eines Teams: Forming, Storming, Norming, Performing und Adjourning.',
      definition: [
        'Teamphasen beschreiben, wie Gruppen sich typischerweise entwickeln: Orientierung, Konflikt, Regelbildung, Leistung und Abschluss.',
        'In Prüfungsaufgaben erkennst du die Phase an Symptomen: Unsicherheit, Konflikte, stabile Regeln, eigenständige Leistung oder Projektabschluss.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'thread',
      begriff: 'Thread',
      kurzdefinition: 'Ausführungsstrang innerhalb eines Prozesses, dem das Betriebssystem CPU-Zeit zuteilt.',
      definition: [
        'Ein Thread läuft im Kontext eines Prozesses und teilt dessen Speicherbereich und Ressourcen mit anderen Threads desselben Prozesses.',
        'Threads sind leichter als Prozesse, können aber durch gemeinsamen Speicher auch Fehler verursachen, wenn mehrere Threads gleichzeitig dieselben Daten verändern.',
      ],
      kapitel: {
        titel: 'Prozesse, Threads und Tasks',
        href: '/lernen/betriebssysteme/os-grundlagen/prozess-thread',
      },
    },
  {
      id: 'three-way-handshake',
      begriff: 'Three-Way-Handshake',
      kurzdefinition: 'Der Three-Way-Handshake ist der TCP-Verbindungsaufbau mit SYN, SYN-ACK und ACK.',
      definition: [
        'Beim Three-Way-Handshake sendet der Client SYN, der Server antwortet mit SYN-ACK, und der Client bestätigt mit ACK.',
        'Erst danach ist die TCP-Verbindung aufgebaut und Nutzdaten können als geordneter Byte-Strom übertragen werden.',
      ],
      kapitel: {
        titel: 'TCP vs. UDP',
        href: '/lernen/netzwerke/grundlagen-netz/tcp-udp',
      },
    },
  {
      id: 'thunderbolt',
      begriff: 'Thunderbolt',
      kurzdefinition: 'Hochleistungsschnittstelle (Intel/Apple); kombiniert Daten, DisplayPort und Stromversorgung über USB-C.',
      definition: [
        'Thunderbolt ist eine universelle Hochleistungsschnittstelle. Thunderbolt 3 und 4 nutzen den USB-C-Stecker und liefern bis zu 40 Gbit/s, kombiniert mit DisplayPort-Signalen und Power Delivery bis 100 Watt.',
        'Damit lassen sich Docks, externe GPUs, mehrere 4K-Monitore und schnelle externe SSDs über ein einziges Kabel anschliessen. Voraussetzung ist ein Thunderbolt-fähiger Host und ein zertifiziertes Kabel.',
      ],
      kapitel: {
        titel: 'Hardware, Schnittstellen & Peripherie auswählen',
        href: '/lernen/hardware/schnittstellen/hardware-schnittstellen',
      },
    },
  {
      id: 'tilgung',
      begriff: 'Tilgung',
      kurzdefinition: 'Rückzahlung des aufgenommenen Darlehensbetrags.',
      definition: [
        'Tilgung reduziert die Restschuld eines Darlehens. Sie ist nicht dasselbe wie Zins: Zins ist der Preis für das geliehene Kapital, Tilgung ist die Rückzahlung des Kapitals selbst.',
        'Bei Ratenkrediten steckt in der Zahlung häufig beides: ein Zinsanteil und ein Tilgungsanteil.',
      ],
      kapitel: {
        titel: 'Eigen- & Fremdfinanzierung',
        href: '/lernen/wirtschaft/markt/eigenfremdfinanzierung',
      },
    },
  {
      id: 'tls',
      begriff: 'TLS',
      kurzdefinition: 'Transport Layer Security schützt Transportverbindungen wie HTTPS.',
      definition: [
        'TLS bietet einen sicheren Kanal mit Authentifizierung, Vertraulichkeit und Integritätsschutz. Serverauthentifizierung erfolgt typischerweise über Zertifikate.',
        'TLS arbeitet praktisch hybrid: Der Handshake prüft Identität und handelt Schlüssel aus, die laufenden Nutzdaten werden mit symmetrischen Sitzungsschlüsseln geschützt.',
      ],
      kapitel: {
        titel: 'Verschlüsselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'total-cost-of-ownership',
      begriff: 'Total Cost of Ownership',
      kurzdefinition: 'Gesamtkostenbetrachtung über Anschaffung, Betrieb, Nutzung und Ausmusterung.',
      definition: [
        'Total Cost of Ownership, kurz TCO, betrachtet nicht nur den Kaufpreis, sondern alle Kosten eines Systems über seinen Lebenszyklus: Beschaffung, Einrichtung, Betrieb, Wartung, Support, Ausfall, Rückgabe oder Entsorgung.',
        'In AP1-Aufgaben hilft TCO, scheinbar günstige Angebote zu hinterfragen, wenn Wartung, Verbrauchsmaterial, Ausfallzeiten oder Restwert unterschiedlich sind.',
      ],
      kapitel: {
        titel: 'Kauf, Leasing & Miete im Vergleich',
        href: '/lernen/wirtschaft/entscheidung/kauf-leasing-miete',
      },
    },
  {
      id: 'train-the-trainer',
      begriff: 'Train-the-Trainer',
      kurzdefinition: 'Vorgehen, bei dem Trainer oder Key User vorbereitet werden, um andere einheitlich zu schulen.',
      definition: [
        'Train-the-Trainer eignet sich, wenn viele Personen, Standorte oder Schichten geschult werden müssen. Zürst werden Trainer oder Key User intensiv vorbereitet.',
        'Wichtig sind einheitliche Unterlagen, Übungsfälle, klare Grenzen der Rolle und ein Rückkanal für Fragen, die nicht lokal gelöst werden können.',
      ],
      kapitel: {
        titel: 'Schulung, Einweisung, Key User und Multiplikatoren',
        href: '/lernen/projekt/service-management/schulung-einweisung-key-user',
      },
    },
  {
      id: 'transaktionskosten',
      begriff: 'Transaktionskosten',
      kurzdefinition: 'Kosten für Suche, Abstimmung, Vertrag, Integration, Kontrolle und Koordination.',
      definition: [
        'Transaktionskosten entstehen rund um eine Leistung, ohne selbst die eigentliche Leistung zu sein. Dazu gehören Informationssuche, Angebotsvergleich, Vertragsverhandlung, Abstimmung, Integration, Kontrolle und Wechselaufwand.',
        'Bei Make-or-Buy verhindern sie Scheingenauigkeit: Ein externer Anbieter hat nicht nur einen Listenpreis, sondern braucht Beschaffung, Einführung und Steuerung.',
      ],
      kapitel: {
        titel: 'Make-or-Buy-Entscheidung',
        href: '/lernen/wirtschaft/entscheidung/make-or-buy',
      },
    },
  {
      id: 'transportschicht',
      begriff: 'Transportschicht',
      kurzdefinition: 'Die Transportschicht ist OSI-Schicht 4 und verbindet Anwendungen Ende-zu-Ende.',
      definition: [
        'Die Transportschicht stellt Kommunikation zwischen Anwendungen auf zwei Hosts her. Sie nutzt Ports, um die richtige Anwendung zu adressieren.',
        'TCP und UDP sind die wichtigsten Transportprotokolle. TCP bietet Zuverlässigkeit und Reihenfolge, UDP ist verbindungslos und schlank.',
      ],
      kapitel: {
        titel: 'TCP vs. UDP',
        href: '/lernen/netzwerke/grundlagen-netz/tcp-udp',
      },
    },
  {
      id: 'ttl-dns',
      begriff: 'TTL (DNS)',
      kurzdefinition: 'Die TTL eines DNS-Eintrags gibt an, wie lange ein Resolver oder Client den Datensatz zwischenspeichern darf.',
      definition: [
        'TTL steht für Time to Live und ist ein Wert in Sekunden. Ein A-Record mit TTL 3600 darf eine Stunde im Cache liegen. Erst danach holt der Resolver den Datensatz erneut beim autoritativen Server. Hohe TTLs entlasten die Server, niedrige TTLs erlauben schnellere Umzüge - bei einem Server-Wechsel wird die TTL einige Stunden vorher gesenkt, damit Änderungen schnell sichtbar werden.',
        'Wichtig: Die TTL im DNS hat nichts mit der TTL im IP-Header zu tun (dort begrenzt sie die Hop-Anzahl, sichtbar in tracert/traceroute). In DNS bezieht sich TTL ausschliesslich auf die Cache-Zeit eines Resource Records.',
      ],
      kapitel: {
        titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
        href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
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
      id: 'uebertrag',
      begriff: 'Übertrag',
      kurzdefinition: 'Ein Übertrag ist der Wert, der bei einer Addition in die nächste höhere Stelle weitergegeben wird.',
      definition: [
        'Im Dezimalsystem entsteht ein Übertrag zum Beispiel bei 8 + 7 = 15: Die 5 bleibt in der aktuellen Stelle, die 1 wandert in die nächste Stelle.',
        'Im Binärsystem ist die wichtigste Regel 1 + 1 = 10. Das Ergebnisbit ist 0, der Übertrag ist 1.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'unternehmenssoftware',
      begriff: 'Unternehmenssoftware',
      kurzdefinition: 'Unternehmenssoftware unterstützt betriebliche Aufgaben und Geschäftsprozesse.',
      definition: [
        'Unternehmenssoftware umfasst Anwendungen, die betriebliche Prozesse unterstützen, etwa Kundenbetreuung, Warenwirtschaft, Dokumentenablage, Rechnungswesen, Personal oder Content-Pflege.',
        'In AP1-Aufgaben geht es meist darum, Systemklassen anhand von Zweck, Daten und Prozess zu unterscheiden, nicht darum, einen bestimmten Hersteller auswendig zu kennen.',
      ],
      kapitel: {
        titel: 'CRM, ERP, DMS und CMS',
        href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
      },
    },
  {
      id: 'usb',
      begriff: 'USB',
      kurzdefinition: 'Universeller serieller Bus für Peripheriegeräte; hot-plug-fähig und mit Stromversorgung.',
      definition: [
        'USB steht für Universal Serial Bus. Verschiedene Generationen unterscheiden sich deutlich in der Geschwindigkeit: USB 2.0 480 Mbit/s, USB 3.2 Gen 1 5 Gbit/s, Gen 2 10 Gbit/s, Gen 2x2 20 Gbit/s, USB4 bis 40 Gbit/s.',
        'Der Steckertyp (A, B, Mini, Micro, C) sagt nichts über die Geschwindigkeit aus. USB-C ist ein Stecker, der sowohl USB 2.0 als auch USB4 oder Thunderbolt 3/4 führen kann.',
      ],
      kapitel: {
        titel: 'Hardware, Schnittstellen & Peripherie auswählen',
        href: '/lernen/hardware/schnittstellen/hardware-schnittstellen',
      },
    },
  {
      id: 'usb-pd',
      begriff: 'USB Power Delivery',
      kurzdefinition: 'USB-C-Stromversorgungsstandard; bis zu 240 Watt, dynamisch ausgehandelt.',
      definition: [
        'USB Power Delivery (USB-PD) ist eine Erweiterung des USB-C-Steckers, mit der Geräte und Netzteil dynamisch Spannung und Stromstärke aushandeln. Aktuelle Versionen erlauben bis zu 240 Watt (Extended Power Range).',
        'Damit ein Notebook über USB-C zuverlässig lädt, muss das Netzteil oder Dock genug Watt liefern und die richtige Spannung beherrschen. Reicht die Leistung nicht, lädt das Gerät langsamer oder gar nicht.',
      ],
      kapitel: {
        titel: 'Hardware, Schnittstellen & Peripherie auswählen',
        href: '/lernen/hardware/schnittstellen/hardware-schnittstellen',
      },
    },
  {
      id: 'usv',
      begriff: 'USV',
      kurzdefinition: 'Eine USV versorgt Systeme bei Stromausfall kurzzeitig weiter.',
      definition: [
        'USV steht für Unterbrechungsfreie Stromversorgung. Sie überbrückt Stromausfälle und Spannungsschwankungen, damit Systeme geordnet weiterlaufen oder herunterfahren können.',
        'Die passende USV wird nach Leistung, Laufzeit, Umschaltverhalten und Schutzbedarf ausgewählt.',
      ],
      kapitel: {
        titel: 'USV-Systeme',
        href: '/lernen/hardware/speichersysteme/usv-systeme',
      },
    },
  {
      id: 'variable',
      begriff: 'Variable',
      kurzdefinition: 'Eine Variable ist ein benannter Speicherplatz für einen Wert, der sich im Ablauf ändern kann.',
      definition: [
        'Variablen machen Zwischenergebnisse greifbar: summe, max, i, gefunden oder anzahlFehler. Eine Zuweisung schreibt einen neuen Wert in die Variable und ersetzt den alten Wert.',
        'Gute Variablennamen zeigen die Absicht. In der Prüfung helfen sie dir, Summen, Zähler, Flags und aktuelle Listenelemente sauber auseinanderzuhalten.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
  {
      id: 'variable-kosten',
      begriff: 'Variable Kosten',
      kurzdefinition: 'Kosten, die proportional mit der Ausbringungsmenge steigen oder fallen.',
      definition: [
        'Variable Kosten entstehen pro produzierter oder verkaufter Einheit: Material, Verpackung, Stückprovision, Strom je Gerät. Bei null Stück sind sie null.',
        'Pro Stück bleiben sie meist konstant; in Summe steigen sie linear mit der Menge. Zusammen mit den Fixkosten ergeben sie die Gesamtkosten.',
      ],
      kapitel: {
        titel: 'Variable & fixe Kosten',
        href: '/lernen/wirtschaft/kalkulation/variable-fixe-kosten',
      },
    },
  {
      id: 'vendor-lock-in',
      begriff: 'Vendor-Lock-in',
      kurzdefinition: 'Abhängigkeit von einem Anbieter, die einen Wechsel erschwert oder verteuert.',
      definition: [
        'Vendor-Lock-in entsteht, wenn ein Unternehmen technisch, vertraglich oder organisatorisch stark an einen Anbieter gebunden ist. Ein Wechsel wird dann teuer, langsam oder riskant.',
        'In Make-or-Buy-Aufgaben ist Lock-in ein wichtiges Buy-Risiko: proprietäre Schnittstellen, Datenformate, lange Vertragslaufzeiten oder fehlende Exportmöglichkeiten können später Handlungsspielraum kosten.',
      ],
      kapitel: {
        titel: 'Make-or-Buy-Entscheidung',
        href: '/lernen/wirtschaft/entscheidung/make-or-buy',
      },
    },
  {
      id: 'verfügbarkeit',
      begriff: 'Verfügbarkeit',
      kurzdefinition: 'Schutzziel: Systeme und Daten sind erreichbar, wenn sie gebraucht werden.',
      definition: [
        'Verfügbarkeit beschreibt, dass autorisierte Nutzer einen Dienst zu einem festgelegten Zeitpunkt mit einer festgelegten Qualität nutzen können. Stromausfall, Hardwaredefekt, DDoS oder Ransomware können die Verfügbarkeit kappen.',
        'Maßnahmen sind Redundanz (RAID, Cluster), USV, Backup mit getestetem Restore, Lastverteilung und ein Notfall- und Wiederanlaufplan.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'verschluesselung',
      begriff: 'Verschlüsselung',
      kurzdefinition: 'Verschlüsselung macht Klartext mit einem Schlüssel zu Chiffretext und ist mit passendem Schlüssel umkehrbar.',
      definition: [
        'Verschlüsselung schützt Vertraulichkeit: Unbefugte sollen den Inhalt nicht lesen können, auch wenn sie die Daten abfangen oder einen Datenträger entwenden.',
        'Sie ist etwas anderes als Hashing und Signieren. Verschlüsselung ist umkehrbar, Hashing ist eine Einwegfunktion, und Signaturen beweisen Echtheit und Unverändertheit.',
      ],
      kapitel: {
        titel: 'Verschlüsselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'vertraulichkeit',
      begriff: 'Vertraulichkeit',
      kurzdefinition: 'Schutzziel: nur Berechtigte können Daten lesen oder einsehen.',
      definition: [
        'Vertraulichkeit bedeutet, dass Informationen nur für befugte Personen, Prozesse oder Systeme zugänglich sind. Verletzungen sind zum Beispiel Mitlesen im Netz, Datendiebstahl oder ungeschützte Bildschirmsperre.',
        'Typische Schutzmassnahmen sind Zugriffsrechte, Verschlüsselung in Ruhe und auf der Leitung, Multi-Faktor-Authentifizierung sowie Schulung gegen Phishing.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'verzeichnisdienst',
      begriff: 'Verzeichnisdienst',
      kurzdefinition: 'Zentraler Dienst zur Verwaltung von Benutzern, Computern, Gruppen, Ressourcen und Rechten.',
      definition: [
        'Ein Verzeichnisdienst speichert Objekte wie Benutzerkonten, Gruppen, Computer, Drucker oder Freigaben strukturiert und macht sie für Verwaltung und Zugriffskontrolle nutzbar.',
        'Active Directory Domain Services ist ein typisches Beispiel. Es erlaubt zentrale Anmeldung, Gruppenrichtlinien und Rechteverwaltung in Windows-Netzen.',
      ],
      kapitel: {
        titel: 'Zentrale vs. dezentrale IT-Systeme',
        href: '/lernen/betriebssysteme/it-infrastruktur/zentral-dezentral',
      },
    },
  {
      id: 'vorzeichen',
      begriff: 'Vorzeichen',
      kurzdefinition: 'Das Vorzeichen gibt an, ob eine Zahl positiv oder negativ ist.',
      definition: [
        'Bei gewohnten Zahlen steht ein Minuszeichen für negative Werte. In festen Bitmustern gibt es kein sichtbares Minuszeichen; die Bedeutung kommt aus der Interpretation.',
        'Bei IEEE-754-Gleitkommazahlen gibt es ein eigenes Vorzeichenbit. Bei Zweierkomplement-Zahlen ist das höchstwertige Bit Teil der Wertigkeit.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'vier-ohren',
      begriff: 'Vier-Ohren-Modell',
      kurzdefinition: 'Modell von Friedemann Schulz von Thun: Jede Aussage hat vier Botschaften - Sachebene, Selbstoffenbarung, Beziehung, Appell.',
      definition: [
        'Schulz von Thun (1981) zeigt, dass jede Aussage gleichzeitig auf vier Ebenen wirkt: 1) Sachinhalt - die nüchterne Information, 2) Selbstoffenbarung - was der Sender über sich preisgibt, 3) Beziehung - wie er den Empfänger sieht, 4) Appell - was er erreichen will. Jede Ebene hat einen "Schnabel" beim Sender und ein "Ohr" beim Empfänger.',
        'Prüfungsrelevant: Die typische Aufgabe gibt eine Beispiel-Aussage und fragt nach den vier möglichen Lesarten. Beispiel: "Das System ist wieder mal langsam." Sachinhalt: Performance-Beobachtung. Selbstoffenbarung: Frust. Beziehung: "Du als IT bist verantwortlich". Appell: "Mach was dagegen".',
      ],
      kapitel: {
        titel: 'Bedarfsanalyse, Kommunikation & Feedback',
        href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
      },
    },
  {
      id: 'vlan',
      begriff: 'VLAN',
      kurzdefinition: 'Ein VLAN trennt ein physisches Netz logisch in mehrere Teilnetze.',
      definition: [
        'VLAN steht für Virtual Local Area Network. Damit lassen sich Geräte logisch trennen, obwohl sie an derselben physischen Switch-Infrastruktur hängen.',
        'VLANs helfen bei Segmentierung, Sicherheit und sauberer Netzwerkorganisation.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'v-modell',
      begriff: 'V-Modell',
      kurzdefinition: 'Deutsches Vorgehensmodell mit V-förmiger Verzahnung von Konstruktions- und Testphasen.',
      definition: [
        'Das V-Modell ordnet jeder Konstruktionsphase (Anforderungen, Grobentwurf, Feinentwurf, Implementierung) eine korrespondierende Testphase (Abnahmetest, Systemtest, Integrationstest, Modultest) zu. Dargestellt wird das als „V": links abwärts die Konstruktion, rechts aufwärts die Tests, in der Mitte die Implementierung.',
        'Das V-Modell XT in Version 2.4 ist offizielles Vorgehensmodell des Bundes (V-Modell XT Bund) und wird vor allem in regulierten oder sicherheitskritischen Projekten der öffentlichen Verwaltung eingesetzt. Es ist sequenziell wie der Wasserfall, koppelt aber jede Konstruktionsentscheidung an einen passenden Testschritt.',
      ],
      kapitel: {
        titel: 'Vorgehensmodelle (Wasserfall, V-Modell, Agil)',
        href: '/lernen/projekt/projektplanung/vorgehensmodelle',
      },
    },
  {
      id: 'vpn',
      begriff: 'VPN',
      kurzdefinition: 'Virtuelles privates Netzwerk, das einen geschützten Tunnel über ein unsicheres Netz aufbaut.',
      definition: [
        'Ein VPN schützt die Übertragung zwischen definierten Endpunkten, etwa Notebook und Firmennetz oder zwei Standorten. Es bietet je nach Verfahren Vertraulichkeit, Integrität und Authentifizierung.',
        'VPN ersetzt keine Rechtevergabe. Wer durch den Tunnel kommt, darf im Zielnetz nur das tun, was Rollen, Firewall-Regeln und Anwendungen erlauben.',
      ],
      kapitel: {
        titel: 'Verschlüsselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'wcag',
      begriff: 'WCAG',
      kurzdefinition: 'Web Content Accessibility Guidelines: W3C-Standard für barrierefreie Webinhalte und Webanwendungen.',
      definition: [
        'WCAG beschreibt testbare Anforderungen an barrierefreie Webinhalte. Die Leitlinien sind nach vier Prinzipien geordnet: wahrnehmbar, bedienbar, verständlich und robust.',
        'Für AP1-Aufgaben ist WCAG vor allem ein Prüfraster: Kontrast, Tastaturbedienung, Alternativtexte, Labels, Fehlermeldungen und Unterstützung assistiver Technologien konkret benennen.',
      ],
      kapitel: {
        titel: 'Ergonomie, Barrierefreiheit und Telearbeit',
        href: '/lernen/hardware/schnittstellen/homeoffice-ergonomie',
      },
    },
  {
      id: 'wasserfallmodell',
      begriff: 'Wasserfallmodell',
      kurzdefinition: 'Sequenzielles Vorgehensmodell, bei dem jede Phase abgeschlossen sein muss, bevor die nächste beginnt.',
      definition: [
        'Im Wasserfallmodell läuft ein Projekt streng sequenziell: Anforderungsanalyse, Entwurf, Implementierung, Test, Wartung. Erst wenn eine Phase abgeschlossen ist, beginnt die nächste; Rücksprünge sind nicht vorgesehen.',
        'Geschichtlich geht die Darstellung auf Winston Royce (1970) zurück — der das Modell allerdings als „risky and invites failure" bezeichnete und stattdessen iteratives Vorgehen vorschlug. Heute eignet sich Wasserfall vor allem dort, wo Anforderungen stabil und Änderungen teuer sind: Bau, Embedded-Systeme, Hardware.',
      ],
      kapitel: {
        titel: 'Vorgehensmodelle (Wasserfall, V-Modell, Agil)',
        href: '/lernen/projekt/projektplanung/vorgehensmodelle',
      },
    },
  {
      id: 'werbewirkung',
      begriff: 'Werbewirkung',
      kurzdefinition: 'Auswirkung einer Werbemassnahme auf Wahrnehmung, Einstellung oder Verhalten der Zielgruppe.',
      definition: [
        'Werbewirkung beschreibt, was eine Werbe- oder Kommunikationsmassnahme bei der Zielgruppe auslöst. Psychische Wirkung betrifft Wahrnehmung, Erinnerung, Einstellung oder Kaufabsicht; ökonomische Wirkung betrifft messbares Verhalten wie Anfragen, Bestellungen oder Umsatz.',
        'Prüfungsrelevant: Eine Wirkung muss zur Zielsetzung passen. Bekanntheit misst man anders als Umsatz; Klicks, Leads oder Freigaben sind nur sinnvoll, wenn sie zur Aufgabe passen.',
      ],
      kapitel: {
        titel: 'AIDA-Formel & Werbewirkung',
        href: '/lernen/wirtschaft/markt/aida-formel',
      },
    },
  {
      id: 'werkvertrag',
      begriff: 'Werkvertrag',
      kurzdefinition: 'Vertrag über die Herstellung eines Werks oder Erfolgs gegen Vergütung.',
      definition: [
        'Beim Werkvertrag schuldet der Unternehmer nicht nur Tätigkeit, sondern einen vereinbarten Erfolg. Das kann eine reparierte Sache, eine Installation oder ein nach Anforderungen erstelltes Ergebnis sein.',
        'Typisch sind prüfbare Anforderungen, Mängelrechte und die Abnahme durch den Besteller.',
      ],
      kapitel: {
        titel: 'Vertragsarten: Kaufvertrag, Dienstvertrag und Werkvertrag',
        href: '/lernen/vertragsrecht/vertraege/vertragsarten',
      },
    },
  {
      id: 'wirkungsgrad',
      begriff: 'Wirkungsgrad',
      kurzdefinition: 'Der Wirkungsgrad beschreibt das Verhältnis von nutzbarer Leistung zu aufgenommener Leistung.',
      definition: [
        'Der Wirkungsgrad zeigt, welcher Anteil der aufgenommenen Energie als Nutzleistung ankommt. Der Rest geht zum Beispiel als Wärme verloren.',
        'Bei Netzteilen gilt: Je höher der Wirkungsgrad, desto weniger Leistung muss aus der Steckdose aufgenommen werden, um dieselbe IT-Last zu versorgen.',
      ],
      kapitel: {
        titel: 'Energiekosten, Wirkungsgrad & Amortisation',
        href: '/lernen/wirtschaft/kalkulation/energiekosten',
      },
    },
  {
      id: 'wlan',
      begriff: 'WLAN',
      kurzdefinition: 'Drahtloses lokales Netzwerk, meist auf Basis der IEEE-802.11-Standardfamilie.',
      definition: [
        'WLAN steht für Wireless Local Area Network. Es verbindet Geräte per Funk mit einem lokalen Netzwerk, typischerweise über Access Points.',
        'WLAN ist ein geteiltes Medium: Geräte teilen sich Funkzeit, Kanal und Störumgebung. Deshalb sind Planung, Verschlüsselung und Kanalwahl wichtig.',
      ],
      kapitel: {
        titel: 'WLAN-Standards und WLAN-Sicherheit',
        href: '/lernen/netzwerke/netz-sicherheit/wlan-standards',
      },
    },
  {
      id: 'wlan-kanal',
      begriff: 'WLAN-Kanal',
      kurzdefinition: 'Teilbereich eines Frequenzbands, auf dem ein Access Point funkt.',
      definition: [
        'Ein WLAN-Kanal ist ein Ausschnitt im Frequenzband. Benachbarte oder überlappende Kanäle können sich stören, besonders im 2,4-GHz-Band.',
        'In der Praxis werden bei 2,4 GHz häufig die nicht überlappenden Kanäle 1, 6 und 11 verwendet.',
      ],
      kapitel: {
        titel: 'WLAN-Standards und WLAN-Sicherheit',
        href: '/lernen/netzwerke/netz-sicherheit/wlan-standards',
      },
    },
  {
      id: 'workflow',
      begriff: 'Workflow',
      kurzdefinition: 'Ein Workflow ist ein festgelegter Arbeitsablauf mit Schritten, Rollen und Status.',
      definition: [
        'Ein Workflow beschreibt, welche Arbeitsschritte in welcher Reihenfolge ablaufen und welche Rolle jeweils verantwortlich ist. Typische Status sind neu, in Prüfung, freigegeben, abgelehnt oder archiviert.',
        'In DMS- und ERP-Aufgaben sind Workflows wichtig, wenn Dokumente, Rechnungen, Bestellungen oder Änderungen kontrolliert geprüft und freigegeben werden müssen.',
      ],
      kapitel: {
        titel: 'CRM, ERP, DMS und CMS',
        href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
      },
    },
  {
      id: 'wpa-enterprise',
      begriff: 'WPA-Enterprise',
      kurzdefinition: 'WLAN-Sicherheitsmodus mit individueller Authentifizierung über 802.1X und meist RADIUS.',
      definition: [
        'WPA-Enterprise nutzt individuelle Benutzeranmeldung oder Zertifikate statt eines gemeinsamen WLAN-Passworts. Häfig wird dafür 802.1X mit einem RADIUS-Server eingesetzt.',
        'Das passt besser zu Unternehmen, weil einzelne Konten gesperrt, Rollen getrennt und Zugriffe zentral verwaltet werden können.',
      ],
      kapitel: {
        titel: 'WLAN-Standards und WLAN-Sicherheit',
        href: '/lernen/netzwerke/netz-sicherheit/wlan-standards',
      },
    },
  {
      id: 'wpa-personal',
      begriff: 'WPA-Personal',
      kurzdefinition: 'WLAN-Sicherheitsmodus mit gemeinsamem Passwort für alle berechtigten Nutzer.',
      definition: [
        'WPA-Personal nutzt ein gemeinsames Passwort, auch Pre-Shared Key genannt. Das ist einfach und für kleine Umgebungen praktisch.',
        'In Unternehmen ist es problematisch, weil ein bekannt gewordenes Passwort für alle geändert werden muss und einzelne Nutzer nicht sauber getrennt gesperrt werden können.',
      ],
      kapitel: {
        titel: 'WLAN-Standards und WLAN-Sicherheit',
        href: '/lernen/netzwerke/netz-sicherheit/wlan-standards',
      },
    },
  {
      id: 'wpa3',
      begriff: 'WPA3',
      kurzdefinition: 'Aktuelle Wi-Fi-Sicherheitsgeneration mit verbessertem Schutz gegen Angriffe auf WLAN-Passwörter.',
      definition: [
        'WPA3 ist der Nachfolger von WPA2 und verbessert unter anderem den Schutz bei der Authentifizierung, besonders gegen Offline-Wörterbuchangriffe auf schwache Passwörter.',
        'Wo möglich sollte WPA3 genutzt werden. In gemischten Umgebungen kann WPA2 weiterhin nötig sein, WEP und altes WPA sollten nicht mehr verwendet werden.',
      ],
      kapitel: {
        titel: 'WLAN-Standards und WLAN-Sicherheit',
        href: '/lernen/netzwerke/netz-sicherheit/wlan-standards',
      },
    },
  {
      id: 'trust-chain',
      begriff: 'Trust Chain',
      kurzdefinition: 'Eine Trust Chain ist der Vertrauenspfad vom Endzertifikat zu einer vertrauten Root-CA.',
      definition: [
        'Eine Trust Chain besteht typischerweise aus Endzertifikat, einer oder mehreren Intermediate-CAs und einer Root-CA.',
        'Ein Client vertraut dem Endzertifikat nur, wenn jede Signatur in der Kette gültig ist und die Root-CA als Vertrauensanker bekannt ist.',
      ],
      kapitel: {
        titel: 'PKI, CA und Zertifikate',
        href: '/lernen/sicherheit/dsgvo-krypto/pki-zertifikate',
      },
    },
  {
      id: 'zahlungsverzug',
      begriff: 'Zahlungsverzug',
      kurzdefinition: 'Verspätete Zahlung einer fälligen Forderung mit möglichen Verzugsfolgen.',
      definition: [
        'Zahlungsverzug tritt ein, wenn eine fällige Entgeltforderung nicht rechtzeitig bezahlt wird und die gesetzlichen Voraussetzungen erfüllt sind, zum Beispiel Mahnung nach Fälligkeit oder ein kalendermässig bestimmter Zahlungstermin.',
        'Bei Entgeltforderungen gibt es ausserdem die 30-Tage-Regel nach Fälligkeit und Zugang der Rechnung. Gegenüber Verbrauchern greift sie nur bei besonderem Hinweis in der Rechnung.',
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
      id: 'zentralisiertes-it-system',
      begriff: 'Zentralisiertes IT-System',
      kurzdefinition: 'IT-Architektur, bei der Daten, Dienste oder Verwaltung an einer zentralen Stelle gebündelt werden.',
      definition: [
        'Ein zentralisiertes IT-System konzentriert wichtige Funktionen wie Dateiablage, Benutzerverwaltung, Datenbanken, Softwareverteilung oder Backup auf zentrale Server oder Dienste.',
        'Vorteile sind einheitliche Verwaltung, besser kontrollierbare Rechte und zentrale Sicherung. Risiken sind Abhängigkeit vom zentralen Dienst und höhere Anforderungen an Verfügbarkeit, Backup und Notfallplanung.',
      ],
      kapitel: {
        titel: 'Zentrale vs. dezentrale IT-Systeme',
        href: '/lernen/betriebssysteme/it-infrastruktur/zentral-dezentral',
      },
    },
  {
      id: 'zertifikat',
      begriff: 'Zertifikat',
      kurzdefinition: 'Digitaler Ausweis, der eine Identität mit einem Public Key verbindet.',
      definition: [
        'Ein X.509-Zertifikat enthält unter anderem Subjekt, Public Key, Aussteller, Gültigkeitszeitraum und erlaubte Verwendungen. Es wird von einer CA signiert.',
        'In TLS bestätigt das Serverzertifikat, dass der Public Key zur aufgerufenen Domain gehört. Der Browser prüft Name, Gültigkeit, Kette und Widerruf.',
      ],
      kapitel: {
        titel: 'Verschlüsselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'zertifikatskette',
      begriff: 'Zertifikatskette',
      kurzdefinition: 'Eine Zertifikatskette verbindet ein Endzertifikat über CAs mit einem Vertrauensanker.',
      definition: [
        'Die Zertifikatskette zeigt, welche CA welche darunterliegende Stufe signiert hat: Root-CA, Intermediate-CA und Endzertifikat.',
        'Bei der Validierung prüft der Client diese Kette, die Gültigkeit, die erlaubten Zwecke und den Widerrufsstatus.',
      ],
      kapitel: {
        titel: 'PKI, CA und Zertifikate',
        href: '/lernen/sicherheit/dsgvo-krypto/pki-zertifikate',
      },
    },
  {
      id: 'zweierkomplement',
      begriff: 'Zweierkomplement',
      kurzdefinition: 'Das Zweierkomplement ist die übliche Darstellung negativer Ganzzahlen im Binärsystem.',
      definition: [
        'Im Zweierkomplement hat das höchstwertige Bit einen negativen Stellenwert. Bei 8 Bit ist die Reihe -128, 64, 32, 16, 8, 4, 2, 1.',
        'Dadurch funktionieren Addition und Subtraktion mit derselben Hardware. Das Bitmuster 1111 1011 bedeutet bei 8 Bit signed den Wert -5.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
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
      id: 'zweifaktorentheorie',
      begriff: 'Zwei-Faktoren-Theorie',
      kurzdefinition: 'Motivationstheorie nach Herzberg: Hygienefaktoren verhindern Unzufriedenheit, Motivatoren fördern Zufriedenheit.',
      definition: [
        'Die Zwei-Faktoren-Theorie trennt zwischen Hygienefaktoren wie Bezahlung, Arbeitsplatzsicherheit, Führung und Arbeitsbedingungen sowie Motivatoren wie Anerkennung, Erfolg, Verantwortung und Weiterentwicklung.',
        'Typische AP1-Falle: Ein Hygienefaktor kann Frust senken, ist aber nicht automatisch ein Motivator. Für Akzeptanz im Change braucht man oft beides.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
]
