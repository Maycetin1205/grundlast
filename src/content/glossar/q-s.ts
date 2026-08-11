import type { GlossarEintrag } from "../../lib/glossar/types"

export const qBisS: GlossarEintrag[] = [
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
      id: 'register',
      begriff: 'Register',
      kurzdefinition: 'Kleinster und schnellster Speicher direkt in der CPU, in dem die aktuell bearbeiteten Werte liegen.',
      definition: [
        'Register sind wenige Byte grosse Speicherplaetze unmittelbar im Rechenwerk. Die CPU kann nur auf Werte rechnen, die in Registern stehen; alles andere muss vorher aus Cache oder Arbeitsspeicher geladen werden.',
        'In der Speicherhierarchie stehen Register ganz oben: schnellster Zugriff, kleinste Kapazitaet. Sie sind der Grund, warum Daten staendig zwischen Massenspeicher, RAM, Cache und CPU hin und her wandern.',
      ],
      kapitel: {
        titel: 'CPU, RAM und Speicher',
        href: '/lernen/hardware/komponenten/cpu-ram-speicher',
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
      id: 'roaming',
      begriff: 'Roaming',
      kurzdefinition: 'Wechsel eines WLAN-Clients zwischen Access Points derselben WLAN-Umgebung.',
      definition: [
        'Beim Roaming wechselt ein Client von einem Access Point zu einem anderen, ohne dass der Nutzer das WLAN manuell neu auswaehlt.',
        'Der Client entscheidet wesentlich mit, wann er wechselt. Schlechte AP-Positionierung oder zu hohe Sendeleistung kann dazu fuehren, dass Clients zu lange an einem entfernten AP kleben.',
      ],
      kapitel: {
        titel: 'WLAN-Standards und WLAN-Sicherheit',
        href: '/lernen/netzwerke/netz-sicherheit/wlan-standards',
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
      id: 'scheduler',
      begriff: 'Scheduler',
      kurzdefinition: 'Betriebssystem-Komponente, die entscheidet, welcher Thread oder Task CPU-Zeit bekommt.',
      definition: [
        'Der Scheduler verteilt Prozessorzeit auf lauffaehige Threads oder Tasks. Dabei spielen Zustand, Prioritaet, Fairness und verfuegbare CPU-Kerne eine Rolle.',
        'Ohne Scheduler koennte ein Betriebssystem mehrere Programme nicht geordnet scheinbar gleichzeitig ausfuehren.',
      ],
      kapitel: {
        titel: 'Prozesse, Threads und Tasks',
        href: '/lernen/betriebssysteme/os-grundlagen/prozess-thread',
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
      id: 'scrum',
      begriff: 'Scrum',
      kurzdefinition: 'Leichtgewichtiges Framework fuer komplexe Produktarbeit, beschrieben im Scrum Guide.',
      definition: [
        'Scrum ist im Scrum Guide 2020 definiert als „leichtgewichtiges Framework, das Menschen, Teams und Organisationen hilft, Wert durch adaptive Loesungen fuer komplexe Probleme zu erzeugen". Es beruht auf den drei Saeulen Transparency, Inspection, Adaptation.',
        'Scrum besteht aus einem Scrum Team mit drei Accountabilities (Product Owner, Scrum Master, Developers), fuenf Events (Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective) und drei Artefakten mit Commitments (Product Backlog/Product Goal, Sprint Backlog/Sprint Goal, Increment/Definition of Done).',
      ],
      kapitel: {
        titel: 'Scrum – Accountabilities, Events, Artefakte',
        href: '/lernen/projekt/agile-vorgehen/scrum',
      },
    },
  {
      id: 'scrum-master',
      begriff: 'Scrum Master',
      kurzdefinition: 'Accountability im Scrum Team, die Scrum etabliert und die Wirksamkeit des Teams foerdert.',
      definition: [
        'Der Scrum Master ist nach Scrum Guide 2020 verantwortlich dafuer, dass Scrum verstanden und angewendet wird. Er coacht zu Selbstmanagement und Cross-Funktionalitaet, raeumt Hindernisse weg und sorgt dafuer, dass die Events ihre Timebox einhalten.',
        'Er ist kein Projektleiter und gibt den Developers keine Arbeit. Er dient Product Owner, Developers und Organisation als „true leader" (so der Wortlaut 2020), indem er Wirksamkeit ermoeglicht statt Anweisungen zu geben.',
      ],
      kapitel: {
        titel: 'Scrum – Accountabilities, Events, Artefakte',
        href: '/lernen/projekt/agile-vorgehen/scrum',
      },
    },
  {
      id: 'segment',
      begriff: 'Segment',
      kurzdefinition: 'Ein Segment ist die typische Dateneinheit von TCP auf der Transportschicht.',
      definition: [
        'In der OSI-PDU-Sprache wird die TCP-Dateneinheit auf Schicht 4 meist Segment genannt.',
        'Ein TCP-Segment enthaelt unter anderem Quellport, Zielport, Sequenznummern, Flags und Nutzdaten.',
      ],
      kapitel: {
        titel: 'TCP vs. UDP',
        href: '/lernen/netzwerke/grundlagen-netz/tcp-udp',
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
      id: 'single-point-of-failure',
      begriff: 'Single Point of Failure',
      kurzdefinition: 'Einzelne Komponente, deren Ausfall einen ganzen Dienst oder Prozess lahmlegt.',
      definition: [
        'Ein Single Point of Failure entsteht, wenn ein Dienst von einer einzelnen Komponente abhaengt und es keine Redundanz oder Ersatzroute gibt.',
        'Zentrale Systeme muessen deshalb mit Backup, Monitoring, Redundanz und Wiederanlaufplan betrieben werden.',
      ],
      kapitel: {
        titel: 'Zentrale vs. dezentrale IT-Systeme',
        href: '/lernen/betriebssysteme/it-infrastruktur/zentral-dezentral',
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
      id: 'socket',
      begriff: 'Socket',
      kurzdefinition: 'Ein Socket beschreibt einen Kommunikationsendpunkt aus IP-Adresse, Transportprotokoll und Port.',
      definition: [
        'Ein Socket verbindet eine IP-Adresse mit einem Transportprotokoll und einer Portnummer, zum Beispiel 192.168.10.20:443/TCP.',
        'Verbindungen werden oft durch Quell-IP, Quellport, Ziel-IP, Zielport und Protokoll eindeutig unterschieden.',
      ],
      kapitel: {
        titel: 'TCP vs. UDP',
        href: '/lernen/netzwerke/grundlagen-netz/tcp-udp',
      },
    },
  {
      id: 'sprint',
      begriff: 'Sprint',
      kurzdefinition: 'Festes Zeitfenster im Scrum (max. ein Monat), in dem ein nutzbares Inkrement entsteht — Container fuer alle anderen Events.',
      definition: [
        'Ein Sprint dauert nach Scrum Guide 2020 maximal einen Monat und beginnt direkt nach Abschluss des vorherigen. Er ist der „Herzschlag" von Scrum und enthaelt Sprint Planning, Daily Scrum, das eigentliche Arbeiten, Sprint Review und Sprint Retrospective.',
        'Im laufenden Sprint duerfen keine Aenderungen vorgenommen werden, die das Sprint Goal gefaehrden. Wird das Sprint Goal hinfaellig, kann der Product Owner den Sprint abbrechen.',
      ],
      kapitel: {
        titel: 'Scrum – Accountabilities, Events, Artefakte',
        href: '/lernen/projekt/agile-vorgehen/scrum',
      },
    },
  {
      id: 'sprint-backlog',
      begriff: 'Sprint Backlog',
      kurzdefinition: 'Plan der Developers fuer den aktuellen Sprint: ausgewaehlte Backlog-Items, geplante Arbeit und das Sprint Goal.',
      definition: [
        'Der Sprint Backlog ist nach Scrum Guide 2020 eines der drei Artefakte. Er besteht aus dem Sprint Goal (Warum), den fuer den Sprint ausgewaehlten Items (Was) und einem umsetzbaren Plan, wie das Inkrement entsteht (Wie).',
        'Die Developers besitzen den Sprint Backlog und aktualisieren ihn waehrend des Sprints. Sein Commitment ist das Sprint Goal.',
      ],
      kapitel: {
        titel: 'Scrum – Accountabilities, Events, Artefakte',
        href: '/lernen/projekt/agile-vorgehen/scrum',
      },
    },
  {
      id: 'sprint-goal',
      begriff: 'Sprint Goal',
      kurzdefinition: 'Einziges, fokussierendes Ziel des aktuellen Sprints — Commitment des Sprint Backlog.',
      definition: [
        'Das Sprint Goal wird im Sprint Planning gemeinsam definiert und beantwortet die Warum-Frage des Sprints. Es macht das Inkrement fuer alle Beteiligten sichtbar wertvoll und gibt den Developers Flexibilitaet bei der Umsetzung.',
        'Faellt das Sprint Goal weg oder ist nicht mehr sinnvoll, darf der Product Owner den Sprint abbrechen. Anpassungen am Was im laufenden Sprint sind moeglich, solange das Sprint Goal nicht gefaehrdet wird.',
      ],
      kapitel: {
        titel: 'Scrum – Accountabilities, Events, Artefakte',
        href: '/lernen/projekt/agile-vorgehen/scrum',
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
      id: 'ssid',
      begriff: 'SSID',
      kurzdefinition: 'Name eines WLANs, den Clients zur Auswahl des Funknetzes sehen.',
      definition: [
        'SSID steht fuer Service Set Identifier. Sie ist der sichtbare oder konfigurierbare Name eines WLANs, zum Beispiel Firma-Mitarbeiter oder Firma-Gast.',
        'Das Verstecken der SSID ist keine echte Sicherheitsmassnahme. Entscheidend sind sichere Authentifizierung, Verschluesselung und Netztrennung.',
      ],
      kapitel: {
        titel: 'WLAN-Standards und WLAN-Sicherheit',
        href: '/lernen/netzwerke/netz-sicherheit/wlan-standards',
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
      id: 'stateful-firewall',
      begriff: 'Stateful Firewall',
      kurzdefinition: 'Eine Stateful Firewall merkt sich den Zustand von Verbindungen.',
      definition: [
        'Stateful Firewalls fuehren eine Zustandstabelle. Dadurch koennen sie Antworten auf erlaubte ausgehende oder eingehende Verbindungen erkennen.',
        'Das ist sicherer und praktischer als ein rein zustandsloser Paketfilter, ersetzt aber keine Anwendungssicherheit oder saubere Segmentierung.',
      ],
      kapitel: {
        titel: 'Firewall und DMZ',
        href: '/lernen/netzwerke/netz-sicherheit/firewall-dmz',
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
      id: 'swapping',
      begriff: 'Swapping (Auslagerung)',
      kurzdefinition: 'Auslagern von Speicherinhalten aus dem RAM auf den Massenspeicher, wenn der Arbeitsspeicher nicht ausreicht.',
      definition: [
        'Reicht der Arbeitsspeicher nicht, verschiebt das Betriebssystem gerade nicht benoetigte Speicherseiten in eine Auslagerungsdatei beziehungsweise Swap-Partition auf SSD oder HDD. Der Platz im RAM wird dadurch frei.',
        'Weil Massenspeicher um Groessenordnungen langsamer ist als RAM, wird das System dabei spuerbar traege. Staendiges Swapping ist deshalb das klassische Symptom fuer zu wenig Arbeitsspeicher und ein haeufiger Anlass fuer eine Aufruestempfehlung.',
      ],
      kapitel: {
        titel: 'CPU, RAM und Speicher',
        href: '/lernen/hardware/komponenten/cpu-ram-speicher',
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
]
