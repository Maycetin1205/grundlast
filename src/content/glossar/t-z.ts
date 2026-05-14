import type { GlossarEintrag } from "../../lib/glossar/types"

export const tBisZ: GlossarEintrag[] = [
  {
      id: 'task',
      begriff: 'Task',
      kurzdefinition: 'Allgemeiner Begriff fuer eine auszufuehrende Aufgabe; Bedeutung haengt vom Systemkontext ab.',
      definition: [
        'Task kann in Oberflaechen eine Anwendung oder einen Prozess meinen, in Scheduler-Kontexten aber allgemeiner eine planbare Arbeitseinheit.',
        'Deshalb muss bei Aufgaben immer der Kontext beachtet werden: Task-Manager, Betriebssystem-Scheduler oder geplante Hintergrundaufgabe meinen nicht zwingend exakt dasselbe.',
      ],
      kapitel: {
        titel: 'Prozesse, Threads und Tasks',
        href: '/lernen/betriebssysteme/os-grundlagen/prozess-thread',
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
      id: 'thread',
      begriff: 'Thread',
      kurzdefinition: 'Ausfuehrungsstrang innerhalb eines Prozesses, dem das Betriebssystem CPU-Zeit zuteilt.',
      definition: [
        'Ein Thread laeuft im Kontext eines Prozesses und teilt dessen Speicherbereich und Ressourcen mit anderen Threads desselben Prozesses.',
        'Threads sind leichter als Prozesse, koennen aber durch gemeinsamen Speicher auch Fehler verursachen, wenn mehrere Threads gleichzeitig dieselben Daten veraendern.',
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
        'Beim Three-Way-Handshake sendet der Client SYN, der Server antwortet mit SYN-ACK, und der Client bestaetigt mit ACK.',
        'Erst danach ist die TCP-Verbindung aufgebaut und Nutzdaten koennen als geordneter Byte-Strom uebertragen werden.',
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
        'Damit lassen sich Docks, externe GPUs, mehrere 4K-Monitore und schnelle externe SSDs über ein einziges Kabel anschliessen. Voraussetzung ist ein Thunderbolt-faehiger Host und ein zertifiziertes Kabel.',
      ],
      kapitel: {
        titel: 'Hardware, Schnittstellen & Peripherie auswaehlen',
        href: '/lernen/hardware/schnittstellen/hardware-schnittstellen',
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
      id: 'transportschicht',
      begriff: 'Transportschicht',
      kurzdefinition: 'Die Transportschicht ist OSI-Schicht 4 und verbindet Anwendungen Ende-zu-Ende.',
      definition: [
        'Die Transportschicht stellt Kommunikation zwischen Anwendungen auf zwei Hosts her. Sie nutzt Ports, um die richtige Anwendung zu adressieren.',
        'TCP und UDP sind die wichtigsten Transportprotokolle. TCP bietet Zuverlaessigkeit und Reihenfolge, UDP ist verbindungslos und schlank.',
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
        'TTL steht für Time to Live und ist ein Wert in Sekunden. Ein A-Record mit TTL 3600 darf eine Stunde im Cache liegen. Erst danach holt der Resolver den Datensatz erneut beim autoritativen Server. Hohe TTLs entlasten die Server, niedrige TTLs erlauben schnellere Umzuege - bei einem Server-Wechsel wird die TTL einige Stunden vorher gesenkt, damit Aenderungen schnell sichtbar werden.',
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
      id: 'verfügbarkeit',
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
      id: 'verzeichnisdienst',
      begriff: 'Verzeichnisdienst',
      kurzdefinition: 'Zentraler Dienst zur Verwaltung von Benutzern, Computern, Gruppen, Ressourcen und Rechten.',
      definition: [
        'Ein Verzeichnisdienst speichert Objekte wie Benutzerkonten, Gruppen, Computer, Drucker oder Freigaben strukturiert und macht sie fuer Verwaltung und Zugriffskontrolle nutzbar.',
        'Active Directory Domain Services ist ein typisches Beispiel. Es erlaubt zentrale Anmeldung, Gruppenrichtlinien und Rechteverwaltung in Windows-Netzen.',
      ],
      kapitel: {
        titel: 'Zentrale vs. dezentrale IT-Systeme',
        href: '/lernen/betriebssysteme/it-infrastruktur/zentral-dezentral',
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
      id: 'wlan',
      begriff: 'WLAN',
      kurzdefinition: 'Drahtloses lokales Netzwerk, meist auf Basis der IEEE-802.11-Standardfamilie.',
      definition: [
        'WLAN steht fuer Wireless Local Area Network. Es verbindet Geraete per Funk mit einem lokalen Netzwerk, typischerweise ueber Access Points.',
        'WLAN ist ein geteiltes Medium: Geraete teilen sich Funkzeit, Kanal und Stoerumgebung. Deshalb sind Planung, Verschluesselung und Kanalwahl wichtig.',
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
        'Ein WLAN-Kanal ist ein Ausschnitt im Frequenzband. Benachbarte oder ueberlappende Kanaele koennen sich stoeren, besonders im 2,4-GHz-Band.',
        'In der Praxis werden bei 2,4 GHz haeufig die nicht ueberlappenden Kanaele 1, 6 und 11 verwendet.',
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
        'Ein Workflow beschreibt, welche Arbeitsschritte in welcher Reihenfolge ablaufen und welche Rolle jeweils verantwortlich ist. Typische Status sind neu, in Pruefung, freigegeben, abgelehnt oder archiviert.',
        'In DMS- und ERP-Aufgaben sind Workflows wichtig, wenn Dokumente, Rechnungen, Bestellungen oder Aenderungen kontrolliert geprueft und freigegeben werden müssen.',
      ],
      kapitel: {
        titel: 'CRM, ERP, DMS und CMS',
        href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
      },
    },
  {
      id: 'wpa-enterprise',
      begriff: 'WPA-Enterprise',
      kurzdefinition: 'WLAN-Sicherheitsmodus mit individueller Authentifizierung ueber 802.1X und meist RADIUS.',
      definition: [
        'WPA-Enterprise nutzt individuelle Benutzeranmeldung oder Zertifikate statt eines gemeinsamen WLAN-Passworts. Haefig wird dafuer 802.1X mit einem RADIUS-Server eingesetzt.',
        'Das passt besser zu Unternehmen, weil einzelne Konten gesperrt, Rollen getrennt und Zugriffe zentral verwaltet werden koennen.',
      ],
      kapitel: {
        titel: 'WLAN-Standards und WLAN-Sicherheit',
        href: '/lernen/netzwerke/netz-sicherheit/wlan-standards',
      },
    },
  {
      id: 'wpa-personal',
      begriff: 'WPA-Personal',
      kurzdefinition: 'WLAN-Sicherheitsmodus mit gemeinsamem Passwort fuer alle berechtigten Nutzer.',
      definition: [
        'WPA-Personal nutzt ein gemeinsames Passwort, auch Pre-Shared Key genannt. Das ist einfach und fuer kleine Umgebungen praktisch.',
        'In Unternehmen ist es problematisch, weil ein bekannt gewordenes Passwort fuer alle geaendert werden muss und einzelne Nutzer nicht sauber getrennt gesperrt werden koennen.',
      ],
      kapitel: {
        titel: 'WLAN-Standards und WLAN-Sicherheit',
        href: '/lernen/netzwerke/netz-sicherheit/wlan-standards',
      },
    },
  {
      id: 'wpa3',
      begriff: 'WPA3',
      kurzdefinition: 'Aktuelle Wi-Fi-Sicherheitsgeneration mit verbessertem Schutz gegen Angriffe auf WLAN-Passwoerter.',
      definition: [
        'WPA3 ist der Nachfolger von WPA2 und verbessert unter anderem den Schutz bei der Authentifizierung, besonders gegen Offline-Woerterbuchangriffe auf schwache Passwoerter.',
        'Wo moeglich sollte WPA3 genutzt werden. In gemischten Umgebungen kann WPA2 weiterhin noetig sein, WEP und altes WPA sollten nicht mehr verwendet werden.',
      ],
      kapitel: {
        titel: 'WLAN-Standards und WLAN-Sicherheit',
        href: '/lernen/netzwerke/netz-sicherheit/wlan-standards',
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
      kurzdefinition: 'IT-Architektur, bei der Daten, Dienste oder Verwaltung an einer zentralen Stelle gebuendelt werden.',
      definition: [
        'Ein zentralisiertes IT-System konzentriert wichtige Funktionen wie Dateiablage, Benutzerverwaltung, Datenbanken, Softwareverteilung oder Backup auf zentrale Server oder Dienste.',
        'Vorteile sind einheitliche Verwaltung, besser kontrollierbare Rechte und zentrale Sicherung. Risiken sind Abhaengigkeit vom zentralen Dienst und hoehere Anforderungen an Verfuegbarkeit, Backup und Notfallplanung.',
      ],
      kapitel: {
        titel: 'Zentrale vs. dezentrale IT-Systeme',
        href: '/lernen/betriebssysteme/it-infrastruktur/zentral-dezentral',
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
]
