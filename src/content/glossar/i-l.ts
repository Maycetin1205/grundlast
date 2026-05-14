import type { GlossarEintrag } from "../../lib/glossar/types"

export const iBisL: GlossarEintrag[] = [
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
      id: 'kontextwechsel',
      begriff: 'Kontextwechsel',
      kurzdefinition: 'Wechsel der CPU von einem Thread oder Task zu einem anderen.',
      definition: [
        'Bei einem Kontextwechsel speichert das Betriebssystem den aktuellen Ausfuehrungszustand und stellt den Zustand eines anderen Threads oder Tasks wieder her.',
        'Kontextwechsel ermoeglichen Multitasking, kosten aber Zeit. Sehr viele Wechsel koennen ein System ausbremsen.',
      ],
      kapitel: {
        titel: 'Prozesse, Threads und Tasks',
        href: '/lernen/betriebssysteme/os-grundlagen/prozess-thread',
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
]
