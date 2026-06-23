import type { GlossarEintrag } from "../../lib/glossar/types"

export const aBisD: GlossarEintrag[] = [
  {
      id: 'boolesche-algebra',
      begriff: 'Boolesche Algebra',
      kurzdefinition: 'Rechenlogik mit genau zwei Wahrheitswerten: wahr und falsch beziehungsweise 1 und 0.',
      definition: [
        'Boolesche Algebra beschreibt Aussagen und Bedingungen, die nur zwei Werte annehmen können: wahr oder falsch. In der IT werden diese Werte oft als 1 und 0 dargestellt.',
        'Sie ist die gemeinsame Grundlage von Bedingungen in Programmen und Logikgattern in digitaler Hardware.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
  {
      id: 'de-morgan-regeln',
      begriff: 'De-Morgan-Regeln',
      kurzdefinition: 'Regeln zum Umformen verneinter UND- und ODER-Ausdrücke.',
      definition: [
        'Die De-Morgan-Regeln zeigen, wie sich eine Verneinung über UND und ODER verteilt: NICHT (A UND B) wird zu NICHT A ODER NICHT B.',
        'Umgekehrt wird NICHT (A ODER B) zu NICHT A UND NICHT B. Das hilft beim Lesen von Bedingungen und beim Vereinfachen von Schaltungen.',
      ],
    },
  {
      id: 'abnahme',
      begriff: 'Abnahme',
      kurzdefinition: 'Bestätigung, dass ein Werk im Wesentlichen vertragsgemäß hergestellt wurde.',
      definition: [
        'Abnahme bedeutet, dass der Besteller ein hergestelltes Werk als im Wesentlichen vertragsgemäß akzeptiert. Sie ist besonders beim Werkvertrag wichtig.',
        'Im IT-Projekt zeigt sie oft den Übergang von Umsetzung zu Abschluss: Testkriterien prüfen, Restpunkte dokumentieren und die Vergütung beziehungsweise Projektübergabe auslösen.',
      ],
      kapitel: {
        titel: 'Vertragsarten: Kaufvertrag, Dienstvertrag und Werkvertrag',
        href: '/lernen/vertragsrecht/vertraege/vertragsarten',
      },
    },
  {
      id: 'access-point',
      begriff: 'Access Point',
      kurzdefinition: 'Funkbasisstation, die WLAN-Clients mit einem kabelgebundenen oder logischen Netz verbindet.',
      definition: [
        'Ein Access Point sendet eine oder mehrere SSIDs aus und nimmt WLAN-Clients ins Netz auf. Er ist die Brücke zwischen Funknetz und LAN.',
        'In Heimroutern sind Access Point, Router, Switch und Firewall oft in einem Gerät kombiniert. In Unternehmen sind Access Points meist separate, zentral verwaltete Geräte.',
      ],
      kapitel: {
        titel: 'WLAN-Standards und WLAN-Sicherheit',
        href: '/lernen/netzwerke/netz-sicherheit/wlan-standards',
      },
    },
  {
      id: 'action',
      begriff: 'Action',
      kurzdefinition: 'Vierte AIDA-Stufe: konkrete Handlung der Zielgruppe auslösen.',
      definition: [
        'Action ist die eindeutige Handlungsaufforderung am Ende einer Werbung, Präsentation oder Angebotsvorstellung. Beispiele: Termin buchen, Pilot starten, Angebot freigeben, QR-Code scannen oder Rückmeldung geben.',
        'Prüfungsfalle: "Vielen Dank" oder "Bei Fragen melden" ist meist zu schwach. Eine gute Action nennt Handlung, Kanal und bei Bedarf Frist.',
      ],
      kapitel: {
        titel: 'AIDA-Formel & Werbewirkung',
        href: '/lernen/wirtschaft/markt/aida-formel',
      },
    },
  {
      id: 'adjourning',
      begriff: 'Adjourning',
      kurzdefinition: 'Abschlussphase eines Teams oder Projekts mit Übergabe, Rückblick und Auflösung.',
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
      id: 'afa',
      begriff: 'AfA',
      kurzdefinition: 'Absetzung für Abnutzung — die planmässige Verteilung von Anschaffungskosten über die Nutzungsdauer.',
      definition: [
        'AfA steht für Absetzung für Abnutzung (§ 7 EStG). Sie verteilt die Anschaffungs- oder Herstellungskosten eines Wirtschaftsguts gleichmässig über die betriebsgewöhnliche Nutzungsdauer.',
        'Linear: Anschaffungskosten geteilt durch Nutzungsdauer ergibt die jährliche Abschreibung. AfA senkt den Gewinn und die Steuerlast.',
      ],
      kapitel: {
        titel: 'AfA - lineare Abschreibung',
        href: '/lernen/wirtschaft/kalkulation/afa-abschreibung',
      },
    },
  {
      id: 'agiles-manifest',
      begriff: 'Agiles Manifest',
      kurzdefinition: 'Erklärung von 2001, in der 17 Autoren vier Wertepaare und zwölf Prinzipien für agile Softwareentwicklung formulieren.',
      definition: [
        'Das Manifesto for Agile Software Development wurde 2001 von Kent Beck, Martin Fowler, Ken Schwaber, Jeff Sutherland und 13 weiteren Autoren veröffentlicht. Es betont vier Wertepaare: Individün und Interaktionen mehr als Prozesse und Werkzeuge, funktionierende Software mehr als umfassende Dokumentation, Zusammenarbeit mit dem Kunden mehr als Vertragsverhandlung, Reagieren auf Veränderung mehr als Befolgen eines Plans.',
        'Wichtig: Die rechte Seite jedes Wertepaars ist nicht unwichtig — sie wird nur niedriger bewertet als die linke. Das Manifest ist keine Methode, sondern Wertegrundlage; konkrete Frameworks wie Scrum oder Kanban setzen darauf auf.',
      ],
      kapitel: {
        titel: 'Vorgehensmodelle (Wasserfall, V-Modell, Agil)',
        href: '/lernen/projekt/projektplanung/vorgehensmodelle',
      },
    },
  {
      id: 'aida',
      begriff: 'AIDA-Modell',
      kurzdefinition: 'Vier-Stufen-Modell der Werbe- und Präsentationswirkung: Attention, Interest, Desire, Action.',
      definition: [
        'AIDA ist ein klassisches Werbewirkungsmodell und strukturiert Botschaften in vier Stufen: Attention (Aufmerksamkeit wecken), Interest (Interesse erzeugen), Desire (Wunsch auslösen), Action (zur Handlung bewegen).',
        'Prüfungsrelevant: Reihenfolge merken, Beispiele zuordnen und AIDA als Checkliste verstehen, nicht als garantierten linearen Kaufprozess. Typische Falle: Interest und Desire werden verwechselt - Interest = "klingt relevant", Desire = "will ich haben".',
      ],
      kapitel: {
        titel: 'AIDA-Formel & Werbewirkung',
        href: '/lernen/wirtschaft/markt/aida-formel',
      },
    },
  {
      id: 'aktiengesellschaft',
      begriff: 'Aktiengesellschaft',
      kurzdefinition: 'Kapitalgesellschaft mit eigener Rechtspersönlichkeit und in Aktien zerlegtem Grundkapital.',
      definition: [
        'Die Aktiengesellschaft ist eine Kapitalgesellschaft. Sie hat ein in Aktien zerlegtes Grundkapital und eine eigene Rechtspersönlichkeit.',
        'Prüfungsrelevant sind breite Kapitalbeschaffung, Gesellschaftsvermögen als Haftungsmasse und Organe wie Vorstand, Aufsichtsrat und Hauptversammlung.',
      ],
      kapitel: {
        titel: 'Organisationsformen, Leitbild, Nachhaltigkeit und ESG',
        href: '/lernen/wirtschaft/unternehmen/organisationsformen-leitbild-nachhaltigkeit-esg',
      },
    },
  {
      id: 'aktives-zuhoeren',
      begriff: 'Aktives Zuhören',
      kurzdefinition: 'Gesprächstechnik, die durch Spiegeln, Paraphrasieren und Nachfragen sicherstellt, dass eine Aussage richtig verstanden wurde.',
      definition: [
        'Aktives Zuhören wurde von Carl Rogers geprägt und ist die Grundtechnik in Interview, Beratung und Konfliktgespräch. Vier Werkzeuge: Spiegeln (das Gehörte zurückgeben), Paraphrasieren (in eigenen Worten wiederholen), Zusammenfassen (mehrere Aussagen bündeln), Nachfragen (Verstehenslücken schließen).',
        'Prüfungsrelevant: Aktives Zuhören reduziert Missverständnisse und ist Voraussetzung für eine saubere Bedarfsanalyse. Kombiniert mit dem Vier-Ohren-Modell schützt es vor reinen Sach-Interpretationen, wenn die Botschaft eigentlich eine Beziehungs- oder Appell-Schicht hat.',
      ],
      kapitel: {
        titel: 'Bedarfsanalyse, Kommunikation & Feedback',
        href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
      },
    },
  {
      id: 'algorithmus',
      begriff: 'Algorithmus',
      kurzdefinition: 'Ein Algorithmus ist eine endliche, deterministische Folge von Anweisungen zur Lösung eines Problems.',
      definition: [
        'Ein Algorithmus beschreibt eindeutig, welche Schritte bei welcher Eingabe ausgeführt werden. Endlich bedeutet, dass der Ablauf terminieren muss. Deterministisch bedeutet, dass gleiche Eingaben zum gleichen Ablauf und Ergebnis führen.',
        'In der AP1 begegnen Algorithmen meist als Pseudocode, Programmablaufplan oder Struktogramm. Entscheidend ist nicht die konkrete Programmiersprache, sondern ob Eingabe, Verarbeitung, Ausgabe und Kontrollfluss sauber nachvollziehbar sind.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
  {
      id: 'allowlist',
      begriff: 'Allowlist',
      kurzdefinition: 'Eine Allowlist enthält ausdrücklich erlaubte Kommunikation oder erlaubte Objekte.',
      definition: [
        'Bei einer Allowlist wird definiert, was erlaubt ist. Alles andere bleibt verboten oder wird nicht weitergeleitet.',
        'Im Firewall-Kontext ist das besonders wichtig: Nur fachlich benötigte Kombinationen aus Quelle, Ziel, Protokoll und Port sollten freigegeben werden.',
      ],
      kapitel: {
        titel: 'Firewall und DMZ',
        href: '/lernen/netzwerke/netz-sicherheit/firewall-dmz',
      },
    },
  {
      id: 'amortisation',
      begriff: 'Amortisation',
      kurzdefinition: 'Zeitraum, nach dem eine Investition über Einsparungen oder Rückflüsse eingespielt ist.',
      definition: [
        'Die Amortisationsdauer ergibt sich aus Anschaffungskosten geteilt durch den jährlichen Rückfluss oder die jährliche Einsparung.',
        'Je kürzer die Amortisation, desto geringer das Risiko der Investition. Die Kennzahl berücksichtigt aber keine Zinsen über die Laufzeit.',
      ],
      kapitel: {
        titel: 'Kaufmännische Rechenaufgaben',
        href: '/lernen/wirtschaft/kalkulation/kaufmaennische-rechenaufgaben',
      },
    },
  {
      id: 'angebotsvergleich',
      begriff: 'Angebotsvergleich',
      kurzdefinition: 'Systematischer Vergleich mehrerer Angebote nach Preis und passenden Qualitätskriterien.',
      definition: [
        'Ein Angebotsvergleich stellt mehrere Lieferantenangebote auf eine gemeinsame Grundlage. Quantitativ wird meist der Bezugspreis berechnet.',
        'Qualitativ werden Kriterien wie Lieferzeit, Support, Garantie, Kompatibilität oder Nachhaltigkeit bewertet. Eine gute Empfehlung nennt Zahl, Argument und Bedingung.',
      ],
      kapitel: {
        titel: 'Angebotsvergleich (quantitativ & qualitativ)',
        href: '/lernen/wirtschaft/entscheidung/angebotsvergleich',
      },
    },
  {
      id: 'annuitaet',
      begriff: 'Annuität',
      kurzdefinition: 'Gleichbleibender Jahresbetrag aus Tilgung und Zins bei Annuitätendarlehen.',
      definition: [
        'Eine Annuität ist die konstante Jahresrate, die ein Annuitätendarlehen über die Laufzeit verlangt. Anfangs überwiegt der Zinsanteil, mit fortschreitender Tilgung wird der Tilgungsanteil größer.',
        'In der Investitionsrechnung wird eine Investition oft in eine gedachte Annuität umgerechnet, um Zahlungsströme verschiedener Laufzeiten vergleichbar zu machen.',
      ],
      kapitel: {
        titel: 'Kaufmännische Rechenaufgaben',
        href: '/lernen/wirtschaft/kalkulation/kaufmaennische-rechenaufgaben',
      },
    },
  {
      id: 'apipa',
      begriff: 'APIPA',
      kurzdefinition: 'APIPA ist eine Notfall-Selbstkonfiguration aus dem Bereich 169.254.0.0/16, die ein Client vergibt, wenn kein DHCP-Server antwortet.',
      definition: [
        'APIPA steht für Automatic Private IP Addressing (RFC 3927). Erhält ein Windows- oder Linux-Client per DHCP keine Antwort, würfelt er selbst eine Adresse aus 169.254.1.0 - 169.254.254.255 und prüft per ARP, ob sie noch frei ist. Diese Adresse ist nicht routbar - das Gerät kommt nur noch mit anderen APIPA-Hosts im selben Segment in Kontakt.',
        'Diagnose-Wert: Sieht ein Host eine 169.254.x.x-Adresse, ist das fast immer ein Hinweis darauf, dass der DHCP-Server nicht erreicht wurde. Mögliche Ursachen sind defektes Kabel, falsches VLAN, ausgeschalteter DHCP-Dienst oder ein DHCP-Relay, das den Broadcast nicht weitergibt.',
      ],
      kapitel: {
        titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
        href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
      },
    },
  {
      id: 'application-layer-gateway',
      begriff: 'Application-Layer-Gateway',
      kurzdefinition: 'Ein Application-Layer-Gateway prüft Netzwerkverkehr auf Anwendungsebene.',
      definition: [
        'Ein Application-Layer-Gateway oder Sicherheits-Proxy versteht Teile eines Anwendungsprotokolls, zum Beispiel HTTP, und kann dadurch genauer filtern als ein reiner Paketfilter.',
        'Der Vorteil ist tiefere Kontrolle. Der Nachteil sind mehr Komplexität, mehr Betriebsaufwand und mögliche Performance-Kosten.',
      ],
      kapitel: {
        titel: 'Firewall und DMZ',
        href: '/lernen/netzwerke/netz-sicherheit/firewall-dmz',
      },
    },
  {
      id: 'arp',
      begriff: 'ARP',
      kurzdefinition: 'ARP löst IPv4-Adressen in MAC-Adressen auf und ist das Bindeglied zwischen Layer 3 und Layer 2.',
      definition: [
        'ARP steht für Address Resolution Protocol (RFC 826). Bevor ein Host ein IP-Paket im lokalen Subnetz versenden kann, muss er die MAC-Adresse des Empfängers kennen. Per ARP-Request fragt er per Broadcast "Wer hat 192.168.10.7?" und erhält die Antwort als ARP-Reply mit der MAC des Zielhosts.',
        'Die Antworten landen im ARP-Cache und gelten dort einige Minuten. Mit dem Befehl "arp -a" siehst du den aktuellen Cache. Wichtig: ARP funktioniert nur im lokalen Subnetz - für Pakete über das Gateway wird die MAC des Gateways aufgelöst, nicht die des Endziels.',
      ],
      kapitel: {
        titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
        href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
      },
    },
  {
      id: 'ascii',
      begriff: 'ASCII',
      kurzdefinition: 'ASCII ist eine Zeichenkodierung, die Zeichen auf Zahlenwerte abbildet.',
      definition: [
        'ASCII steht für American Standard Code for Information Interchange. Der klassische ASCII-Code nutzt 7 Bit und ordnet 128 Codepunkte festen Zahlenwerten zu, darunter Buchstaben, Ziffern, Satzzeichen und Steürzeichen.',
        'In AP1-Aufgaben ist ASCII vor allem wichtig, wenn aus einfachen Zeichen Speicherbedarf berechnet wird. Vorsicht: Moderne UTF-8-Texte können für Nicht-ASCII-Zeichen mehrere Byte pro Zeichen benötigen.',
      ],
      kapitel: {
        titel: 'Bit & Byte - die kleinsten Einheiten',
        href: '/lernen/grundlagen/zahlen/bit-byte',
      },
    },
  {
      id: 'asymmetrische-verschluesselung',
      begriff: 'Asymmetrische Verschlüsselung',
      kurzdefinition: 'Public Key und Private Key bilden ein Schlüsselpaar mit getrennten Rollen.',
      definition: [
        'Der Public Key darf verteilt werden, der Private Key bleibt geheim. Was für einen Empfänger mit dessen Public Key verschlüsselt wird, kann nur mit dem passenden Private Key entschlüsselt werden.',
        'Asymmetrische Verfahren sind rechenintensiver als symmetrische Verfahren. In der Praxis werden sie daher oft für Schlüsselaustausch, Zertifikate und Signaturen eingesetzt.',
      ],
      kapitel: {
        titel: 'Verschlüsselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'attention',
      begriff: 'Attention',
      kurzdefinition: 'Erste AIDA-Stufe: Aufmerksamkeit der Zielgruppe gewinnen.',
      definition: [
        'Attention bedeutet, dass die Zielgruppe eine Botschaft überhaupt wahrnimmt. Das gelingt durch einen relevanten Aufmacher, etwa eine Frage, eine Zahl, ein Risiko, ein Bild oder eine kurze Szene.',
        'Prüfungsrelevant: Attention ist nicht einfach laut oder bunt. Der Einstieg muss zur Zielgruppe und zum Problem passen, sonst wirkt er unseriös oder beliebig.',
      ],
      kapitel: {
        titel: 'AIDA-Formel & Werbewirkung',
        href: '/lernen/wirtschaft/markt/aida-formel',
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
      id: 'aufbewahrungsfrist',
      begriff: 'Aufbewahrungsfrist',
      kurzdefinition: 'Zeitraum, in dem Geschäftsunterlagen geordnet und lesbar aufzubewahren sind.',
      definition: [
        'Die Aufbewahrungsfrist legt fest, wie lange ein Unternehmen Unterlagen wie Rechnungen, Buchungsbelege, Handelsbriefe oder Jahresabschlüsse geordnet aufbewahren muss.',
        'Die Frist beginnt in der Regel mit dem Schluss des Kalenderjahres. Rechnungen und Buchungsbelege sind aktuell regelmässig 8 Jahre aufzubewahren, Handels- und Geschäftsbriefe 6 Jahre, Jahresabschlüsse und Bücher 10 Jahre.',
      ],
      kapitel: {
        titel: 'Rechnung, Zahlungsziel und Aufbewahrungsfristen',
        href: '/lernen/vertragsrecht/vertraege/rechnung-zahlungsziel-aufbewahrungsfristen',
      },
    },
  {
      id: 'authentizitaet',
      begriff: 'Authentizität',
      kurzdefinition: 'Schutzziel: die behauptete Identität einer Person oder Datenquelle ist nachweislich echt.',
      definition: [
        'Authentizität stellt sicher, dass ein Absender, ein System oder eine Datei tatsächlich der oder das ist, was behauptet wird. Sie ist Voraussetzung für Vertraulichkeit und Integrität, weil ohne echten Absender keine Zuordnung möglich ist.',
        'Digitale Signaturen, Zertifikate (PKI), starke Authentifizierung mit mehreren Faktoren und geprüfte Boot-Ketten sind typische Maßnahmen.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'bandbreite',
      begriff: 'Bandbreite',
      kurzdefinition: 'Die Bandbreite ist die theoretisch maximale Datenrate eines Übertragungswegs.',
      definition: [
        'Bandbreite stammt ursprünglich aus der Nachrichtentechnik und beschreibt die Breite des Frequenzbereichs einer Leitung in Hertz. In der IT wird der Begriff lose mit der theoretischen Maximaldatenrate gleichgesetzt - zum Beispiel 100 Mbit/s bei einer Fast-Ethernet-Leitung.',
        'Die tatsächlich nutzbare Datenrate (Durchsatz) liegt fast immer unter der Bandbreite, weil Header, Protokolle, Wiederholungen und Geräte-Latenzen Anteile abziehen. In Prüfungsaufgaben kommen typische Brutto-Netto-Annahmen wie 80 Prozent vor.',
      ],
      kapitel: {
        titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
        href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
      },
    },
  {
      id: 'barrierefreiheit',
      begriff: 'Barrierefreiheit',
      kurzdefinition: 'Gestaltung von Technik, Software und Informationen so, dass sie auch mit unterschiedlichen Fähigkeiten nutzbar sind.',
      definition: [
        'Barrierefreiheit bedeutet in der IT, dass Menschen mit unterschiedlichen Seh-, Hör-, Bewegungs- oder kognitiven Voraussetzungen Arbeitsmittel und Informationen nutzen können.',
        'In AP1-Aufgaben reicht das Wort allein nicht. Nenne die konkrete Barriere, eine passende Maßnahme und den Nutzen, zum Beispiel Tastaturbedienung, ausreichender Kontrast, Alternativtext oder Untertitel.',
      ],
      kapitel: {
        titel: 'Ergonomie, Barrierefreiheit und Telearbeit',
        href: '/lernen/hardware/schnittstellen/homeoffice-ergonomie',
      },
    },
  {
      id: 'barwert',
      begriff: 'Barwert',
      kurzdefinition: 'Heutiger Wert zukünftiger Zahlungen, ermittelt durch Abzinsen mit einem Kalkulationszinssatz.',
      definition: [
        'Der Barwert rechnet zukünftige Zahlungen auf den heutigen Zeitpunkt zurück. Dafür wird jeder Zahlungsbetrag durch (1 + i)^n geteilt.',
        'Barwertvergleiche sind genauer als reine Summen, weil sie den Zeitwert des Geldes berücksichtigen.',
      ],
      kapitel: {
        titel: 'Kaufmännische Rechenaufgaben',
        href: '/lernen/wirtschaft/kalkulation/kaufmaennische-rechenaufgaben',
      },
    },
  {
      id: 'basis',
      begriff: 'Basis',
      kurzdefinition: 'Die Basis gibt an, wie viele Ziffern ein Stellenwertsystem verwendet.',
      definition: [
        'Die Basis bestimmt die verfügbaren Ziffern und die Stellenwerte eines Zahlensystems. Im Dezimalsystem ist die Basis 10, im Binärsystem 2 und im Hexadezimalsystem 16.',
        'Beim Umrechnen multiplizierst du jede Ziffer mit ihrer Basis hoch der jeweiligen Stelle.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'bias',
      begriff: 'Bias',
      kurzdefinition: 'Bias ist ein fester Versatz, mit dem IEEE-754-Exponenten ohne Minuszeichen gespeichert werden.',
      definition: [
        'Bei IEEE-754-Gleitkommazahlen wird der Exponent nicht direkt gespeichert, sondern mit einem Bias addiert. Bei binary32 ist der Bias 127, bei binary64 ist er 1023.',
        'Beispiel: Der echte Exponent -3 wird bei binary32 als -3 + 127 = 124 gespeichert. Beim Auslesen wird der Bias wieder abgezogen.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'bedarfsanalyse',
      begriff: 'Bedarfsanalyse',
      kurzdefinition: 'Strukturierte Erhebung dessen, was ein Kunde oder Anwender wirklich braucht, getrennt vom geäusserten Wunsch.',
      definition: [
        'Eine Bedarfsanalyse übersetzt einen Wunsch ("wir brauchen neue Tablets") in ein Problem, eine Anforderung und schließlich eine begründete Lösung. Sie verhindert, dass eine konkrete Lösung gekauft wird, bevor das eigentliche Problem verstanden ist.',
        'Im Kern besteht sie aus sechs Schritten: Ausgangslage klären, Ziele formulieren, Anforderungen sammeln, Daten erheben, bewerten und priorisieren, Maßnahmen ableiten. Prüfungsrelevant: Methodenwahl (Interview, Fragebogen, Beobachtung) und die Trennung quantitativ/qualitativ.',
      ],
      kapitel: {
        titel: 'Bedarfsanalyse, Kommunikation & Feedback',
        href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
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
      id: 'beobachtung',
      begriff: 'Beobachtung (Erhebungsmethode)',
      kurzdefinition: 'Direkte Erfassung tatsächlicher Arbeitsabläufe und Handlungen, oft am Arbeitsplatz - zeigt unausgesprochene Probleme.',
      definition: [
        'Die Beobachtung erfasst, was Anwender tatsächlich tun, statt was sie sagen. Sie ist besonders wertvoll, wenn Routinen übersehen werden ("das mache ich seit Jahren so") oder wenn Anwender eigene Workarounds entwickelt haben, die kein Interview offenbart hätte.',
        'Stärken: Echte Abläufe, blinde Flecken sichtbar machen. Schwächen: Beobachtung kann das Verhalten verändern (Hawthorne-Effekt), zeitaufwendig, und Datenschutz/Mitbestimmung sind zu beachten - nicht jede Beobachtung am Arbeitsplatz ist ohne Zustimmung des Betriebsrats erlaubt.',
      ],
      kapitel: {
        titel: 'Bedarfsanalyse, Kommunikation & Feedback',
        href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
      },
    },
  {
      id: 'bezugskosten',
      begriff: 'Bezugskosten',
      kurzdefinition: 'Beschaffungsnebenkosten wie Fracht, Verpackung, Zoll oder Transportversicherung.',
      definition: [
        'Bezugskosten fallen an, damit die Ware vom Lieferanten bis zum Betrieb kommt. Sie werden nach Rabatt und Skonto zum Bareinkaufspreis addiert.',
        'Typische Beispiele sind Fracht, Verpackung, Zoll, Rollgeld oder Transportversicherung. Unterschiedliche Bezugskosten können die Angebotsreihenfolge verändern.',
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
        'Im quantitativen Angebotsvergleich gewinnt rechnerisch der niedrigste Bezugspreis, solange Menge, Qualität und Leistungsumfang vergleichbar sind.',
      ],
      kapitel: {
        titel: 'Angebotsvergleich (quantitativ & qualitativ)',
        href: '/lernen/wirtschaft/entscheidung/angebotsvergleich',
      },
    },
  {
      id: 'binaerzahl',
      begriff: 'Binärzahl',
      kurzdefinition: 'Eine Binärzahl ist eine Zahl, die nur aus den Ziffern 0 und 1 besteht.',
      definition: [
        'Eine Binärzahl wird im Binärsystem gelesen. Jede Stelle steht für eine Zweierpotenz: 1, 2, 4, 8, 16 und so weiter.',
        'Beispiel: 1011₂ ist nicht eintausendelf, sondern 8 + 2 + 1 = 11₁₀.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'binaerpraefix',
      begriff: 'Binärpräfix',
      kurzdefinition: 'Binärpräfixe stehen für Vielfache von 1024 und folgen der IEC-80000-13.',
      definition: [
        'Die IEC 80000-13 definiert KiB, MiB, GiB und TiB als Zweierpotenzen: 2^10, 2^20, 2^30 und 2^40 Byte. Sie wurden eingeführt, um die Verwechslung mit dezimalen SI-Präfixen zu vermeiden.',
        'In Prüfungsaufgaben gilt: Wenn KiB, MiB oder GiB steht, rechne mit 1024er-Schritten. Wer dann mit 1000 rechnet, erhält ein systematisch falsches Ergebnis.',
      ],
      kapitel: {
        titel: 'Bit & Byte - die kleinsten Einheiten',
        href: '/lernen/grundlagen/zahlen/bit-byte',
      },
    },
  {
      id: 'binaersystem',
      begriff: 'Binärsystem',
      kurzdefinition: 'Das Binärsystem ist ein Stellenwertsystem mit der Basis 2.',
      definition: [
        'Das Binärsystem nutzt nur die Ziffern 0 und 1. Jede Stelle steht für eine Potenz von 2.',
        'Computer arbeiten intern mit binären Zuständen, weil digitale Schaltungen zwei stabile Signalzustände gut unterscheiden können.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'bit',
      begriff: 'Bit',
      kurzdefinition: 'Ein Bit ist die kleinste Informationseinheit und kann den Wert 0 oder 1 annehmen.',
      definition: [
        'Bit steht für Binary Digit. Ein Bit beschreibt genau eine binäre Entscheidung: 0 oder 1, aus oder an, falsch oder wahr.',
        'Mehrere Bits werden zu größeren Einheiten zusammengefasst. Acht Bits ergeben ein Byte; daraus entstehen Speicherangaben, Dateigrössen und Datenraten.',
      ],
      kapitel: {
        titel: 'Bit & Byte - die kleinsten Einheiten',
        href: '/lernen/grundlagen/zahlen/bit-byte',
      },
    },
  {
      id: 'bitmuster',
      begriff: 'Bitmuster',
      kurzdefinition: 'Ein Bitmuster ist eine feste Folge aus Nullen und Einsen.',
      definition: [
        'Ein Bitmuster hat für sich allein noch keine eindeutige Bedeutung. Erst der Kontext entscheidet, ob es als Zahl, Zeichen, Farbe, Adresse, Dateirecht oder Maschinenbefehl gelesen wird.',
        'Beispiel: 1111 1011 kann als unsigned Byte 251 bedeuten, im Zweierkomplement aber -5.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'bitrate',
      begriff: 'Bitrate',
      kurzdefinition: 'Die Bitrate ist die Datenrate eines kontinuierlichen Medienstroms wie Audio oder Video.',
      definition: [
        'Eine Audio-Datei mit 320 kbit/s erzeugt pro Sekunde 320 000 Bit, also 40 000 Byte. Bei Video kombinieren sich Auflösung, Framerate und Farbtiefe zu einer Roh-Bitrate, die durch Kompression deutlich gesenkt wird.',
        'Bitraten gibt es in zwei Varianten: Konstant (CBR) liefert eine gleichbleibende Datenrate und ist gut planbar. Variabel (VBR) passt die Datenrate dem Inhalt an - ruhige Szenen brauchen weniger, actionreiche mehr Bits.',
      ],
      kapitel: {
        titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
        href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
      },
    },
  {
      id: 'bitweises-und',
      begriff: 'Bitweises UND',
      kurzdefinition: 'Bitweises UND verknüpft zwei Bitfolgen; nur 1 UND 1 ergibt 1.',
      definition: [
        'Beim Subnetting verknüpfst du IP-Adresse und Subnetzmaske bitweise. Das Ergebnis ist die Netzadresse.',
        'Beispiel: 50 ist binär 00110010, 192 ist 11000000. Das bitweise UND ergibt 00000000.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'break-even',
      begriff: 'Break-Even-Punkt',
      kurzdefinition: 'Der Break-Even-Punkt ist die Absatzmenge, bei der Kosten und Erlöse gleich hoch sind.',
      definition: [
        'Am Break-Even-Punkt entsteht weder Gewinn noch Verlust. Alle fixen und variablen Kosten sind durch die Erlöse gedeckt.',
        'In Aufgaben berechnest du ihn häufig über Fixkosten geteilt durch den Deckungsbeitrag pro Stück.',
      ],
      kapitel: {
        titel: 'Break-Even-Analyse',
        href: '/lernen/wirtschaft/kalkulation/break-even',
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
      id: 'bsi-grundschutz',
      begriff: 'BSI IT-Grundschutz',
      kurzdefinition: 'Vom BSI herausgegebene Methodik und Bausteinkatalog für ein angemessenes Sicherheitsniveau.',
      definition: [
        'Der IT-Grundschutz beschreibt im IT-Grundschutz-Kompendium Bausteine zu Themenbereichen wie ISMS, Organisation, Personal, Anwendungen oder Netze. Jeder Baustein enthält Basis-, Standard- und Anforderungen für erhöhten Schutzbedarf.',
        'Die zugehörige Methodik steht in den BSI-Standards 200-1 (ISMS), 200-2 (Vorgehensweise) und 200-3 (Risikoanalyse). Der BSI-Standard 200-4 ergänzt das Business Continuity Management.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'buchungsbeleg',
      begriff: 'Buchungsbeleg',
      kurzdefinition: 'Nachweis für einen Geschäftsvorfall, der Grundlage einer Buchung ist.',
      definition: [
        'Ein Buchungsbeleg dokumentiert einen Geschäftsvorfall so, dass er in der Buchhaltung nachvollziehbar gebucht werden kann.',
        'Typische Buchungsbelege sind Eingangsrechnungen, Ausgangsrechnungen, Quittungen, Zahlungsbelege oder Gutschriften. Für sie gilt aktuell regelmässig eine Aufbewahrungsfrist von 8 Jahren.',
      ],
      kapitel: {
        titel: 'Rechnung, Zahlungsziel und Aufbewahrungsfristen',
        href: '/lernen/vertragsrecht/vertraege/rechnung-zahlungsziel-aufbewahrungsfristen',
      },
    },
  {
      id: 'byte',
      begriff: 'Byte',
      kurzdefinition: 'Ein Byte besteht aus acht Bit und ist eine typische Grundeinheit für Speicherangaben.',
      definition: [
        'Ein Byte fasst acht Bit zusammen. Dadurch sind 2^8 = 256 verschiedene Bitmuster möglich, von 00000000 bis 11111111.',
        'Als unsigned Zahl gelesen reicht ein Byte von 0 bis 255. Dateigrössen, Arbeitsspeicher und viele Protokollfelder werden in Byte oder Vielfachen davon angegeben.',
      ],
      kapitel: {
        titel: 'Bit & Byte - die kleinsten Einheiten',
        href: '/lernen/grundlagen/zahlen/bit-byte',
      },
    },
  {
      id: 'carrier-grade-nat',
      begriff: 'Carrier-Grade NAT',
      kurzdefinition: 'Carrier-Grade NAT ist NAT beim Provider, bei dem mehrere Kunden öffentliche IPv4-Adressen teilen.',
      definition: [
        'Bei Carrier-Grade NAT befindet sich eine NAT-Schicht nicht nur im Kundennetz, sondern auch beim Provider. Der Kundenrouter hat dann oft keine eigene direkt erreichbare öffentliche IPv4-Adresse.',
        'Eingehendes IPv4-Portforwarding funktioniert dadurch nicht wie bei einem Anschluss mit eigener öffentlicher IPv4. Alternativen sind echte öffentliche IPv4, IPv6, VPN, Reverse Tunnel oder Cloud-Lösungen.',
      ],
      kapitel: {
        titel: 'Port Forwarding und NAT',
        href: '/lernen/netzwerke/netz-sicherheit/port-forwarding',
      },
    },
  {
      id: 'cashflow',
      begriff: 'Cashflow',
      kurzdefinition: 'Tatsächliche Zahlungsbewegung eines Zeitraums; Differenz aus Einzahlungen und Auszahlungen.',
      definition: [
        'Der Cashflow zeigt die Liquidität, also was wirklich an Geld zu- oder abgeflossen ist. Im Gegensatz zur Gewinnrechnung zählen nur kassenwirksame Vorgänge — Abschreibungen oder Rückstellungen sind nicht enthalten.',
        'In Investitionsrechnungen wird häufig der freie Cashflow betrachtet: was nach Steuern und Ersatzinvestitionen für Tilgung, Dividenden oder neue Projekte übrig bleibt.',
      ],
      kapitel: {
        titel: 'Kaufmännische Rechenaufgaben',
        href: '/lernen/wirtschaft/kalkulation/kaufmaennische-rechenaufgaben',
      },
    },
  {
      id: 'certificate-authority',
      begriff: 'Certificate Authority',
      kurzdefinition: 'Vertrauenswürdige Zertifizierungsstelle, die Zertifikate ausstellt und signiert.',
      definition: [
        'Eine CA prüft je nach Zertifikatstyp bestimmte Angaben und bestätigt anschliessend per Signatur, dass ein Public Key zu einer Identität gehört.',
        'Root-CAs sind als Vertrauensanker im Betriebssystem oder Browser hinterlegt. Intermediate-CAs stehen meist zwischen Root-CA und Endzertifikat.',
      ],
      kapitel: {
        titel: 'Verschlüsselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'crl',
      begriff: 'CRL',
      kurzdefinition: 'Eine CRL ist eine Liste widerrufener Zertifikate.',
      definition: [
        'CRL steht für Certificate Revocation List. Eine CA veröffentlicht darin Zertifikate, denen vor Ablauf nicht mehr vertraut werden soll.',
        'Clients können die Liste prüfen, um zu erkennen, ob ein Zertifikat wegen kompromittiertem Private Key, fehlerhafter Ausstellung oder anderem Grund widerrufen wurde.',
      ],
      kapitel: {
        titel: 'PKI, CA und Zertifikate',
        href: '/lernen/sicherheit/dsgvo-krypto/pki-zertifikate',
      },
    },
  {
      id: 'change-management',
      begriff: 'Change Management',
      kurzdefinition: 'Geplante Gestaltung organisatorischer Veränderungen von der Begründung bis zur Stabilisierung.',
      definition: [
        'Change Management sorgt dafür, dass Veränderungen nicht nur technisch umgesetzt, sondern von Menschen verstanden, gelernt und dauerhaft genutzt werden.',
        'Typische Bausteine sind Zielbild, Stakeholderanalyse, Kommunikation, Beteiligung, Schulung, Pilot, Quick Wins, Erfolgsmessung und Stabilisierung.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'change-widerstand',
      begriff: 'Change-Widerstand',
      kurzdefinition: 'Skepsis oder Ablehnung gegen Veränderung, oft als Hinweis auf Risiken, Angst oder fehlende Beteiligung.',
      definition: [
        'Change-Widerstand ist nicht nur Störung, sondern auch Information. Er kann auf unklare Ziele, schlechte Erfahrungen, Überlastung, Kompetenzangst oder echte fachliche Probleme hinweisen.',
        'Prüfungsrelevant ist eine sachliche Reaktion: Ursache benennen, Betroffene beteiligen, Schulung anbieten und den Nutzen konkret machen.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
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
      id: 'client-server-modell',
      begriff: 'Client-Server-Modell',
      kurzdefinition: 'Architektur, bei der Clients Dienste eines Servers anfordern und nutzen.',
      definition: [
        'Im Client-Server-Modell stellen Server zentrale Dienste bereit, zum Beispiel Dateien, Druck, Datenbanken, Webseiten oder Authentifizierung. Clients greifen über das Netzwerk darauf zu.',
        'Prüfungsrelevant: Der Server bündelt Verwaltung und Daten, muss aber gegen Ausfall, Fehlkonfiguration und unberechtigten Zugriff geschützt werden.',
      ],
      kapitel: {
        titel: 'Zentrale vs. dezentrale IT-Systeme',
        href: '/lernen/betriebssysteme/it-infrastruktur/zentral-dezentral',
      },
    },
  {
      id: 'cluster',
      begriff: 'Cluster',
      kurzdefinition: 'Kleinste Speichereinheit, in der ein Dateisystem Daten auf dem Datenträger ablegt.',
      definition: [
        'Ein Cluster (auch Allocation Unit) ist die kleinste Einheit, die ein Dateisystem für Dateien reserviert. Typische Clustergrössen liegen bei 4 KiB; bei FAT32 sind größere Cluster bis 32 KiB üblich.',
        'Eine 1-Byte-Datei belegt trotzdem einen ganzen Cluster — der Rest gilt als interner Verschnitt (Slack). Größere Cluster bedeuten weniger Verwaltungsaufwand, aber mehr Verschnitt; kleinere Cluster sind effizienter bei vielen kleinen Dateien.',
      ],
      kapitel: {
        titel: 'Dateisysteme (FAT32, NTFS, ext4, APFS)',
        href: '/lernen/betriebssysteme/os-grundlagen/dateisysteme',
      },
    },
  {
      id: 'cache',
      begriff: 'Cache',
      kurzdefinition: 'Sehr schneller Zwischenspeicher, der häufig benötigte Daten nahe an der CPU bereithält.',
      definition: [
        'Ein Cache speichert Daten oder Befehle, die wahrscheinlich bald wieder gebraucht werden. CPU-Caches sind deutlich kleiner als RAM, aber sehr viel näher an der CPU und schneller erreichbar.',
        'Typische Stufen sind L1, L2 und L3. Je näher der Cache am Kern liegt, desto schneller und kleiner ist er.',
      ],
      kapitel: {
        titel: 'CPU, RAM und Massenspeicher',
        href: '/lernen/hardware/komponenten/cpu-ram-speicher',
      },
    },
  {
      id: 'cms',
      begriff: 'CMS',
      kurzdefinition: 'Ein CMS verwaltet digitale Inhalte für Website, Intranet, Portal oder andere Publikationskanäle.',
      definition: [
        'CMS steht für Content Management System. Es unterstützt Redaktion, Medienverwaltung, Rechte, Templates und Veröffentlichung digitaler Inhalte.',
        'Prüfungsrelevant: CMS erkennst du an Website, Intranet, Produktseiten, News, Downloads, redaktioneller Pflege und Trennung von Inhalt und Layout.',
      ],
      kapitel: {
        titel: 'CRM, ERP, DMS und CMS',
        href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
      },
    },
  {
      id: 'cow-copy-on-write',
      begriff: 'Copy-on-Write',
      kurzdefinition: 'Schreibverfahren, bei dem geänderte Datenblöcke neu geschrieben werden, statt vorhandene zu überschreiben.',
      definition: [
        'Beim Copy-on-Write (CoW) schreibt das Dateisystem geänderte Daten in neue Blöcke und aktualisiert erst danach die Verweise. Der alte Zustand bleibt erhalten, bis er nicht mehr benötigt wird.',
        'CoW ermöglicht effiziente Snapshots und schützt ähnlich wie Journaling vor inkonsistenten Zuständen nach Abstürzen. APFS und ZFS arbeiten nach diesem Prinzip; NTFS und ext4 nicht.',
      ],
      kapitel: {
        titel: 'Dateisysteme (FAT32, NTFS, ext4, APFS)',
        href: '/lernen/betriebssysteme/os-grundlagen/dateisysteme',
      },
    },
  {
      id: 'cpu',
      begriff: 'CPU',
      kurzdefinition: 'Hauptprozessor eines Computers; führt Programmbefehle und Berechnungen aus.',
      definition: [
        'CPU steht für Central Processing Unit. Der Prozessor liest Befehle aus dem Arbeitsspeicher, entschlüsselt sie und führt sie aus. Die wichtigsten Kennwerte sind Taktfrequenz (GHz), Anzahl der Kerne und Threads sowie die Cache-Größen (L1, L2, L3).',
        'Mehr Kerne helfen nur bei parallelisierbaren Aufgaben. Ein einzelner Rechenstrang wird ausschliesslich durch höheren Takt oder bessere Architektur schneller, nicht durch zusätzliche Kerne.',
      ],
      kapitel: {
        titel: 'CPU, RAM und Massenspeicher',
        href: '/lernen/hardware/komponenten/cpu-ram-speicher',
      },
    },
  {
      id: 'crm',
      begriff: 'CRM',
      kurzdefinition: 'CRM bündelt Kundenbeziehungen, Kontakte, Angebote, Kampagnen und Servicehistorie.',
      definition: [
        'CRM steht für Customer Relationship Management. Es beschreibt Strategie und Software, mit denen ein Unternehmen Kundenbeziehungen über Marketing, Vertrieb und Service hinweg plant, dokumentiert und auswertet.',
        'Prüfungsrelevant: CRM erkennst du an Kundenkontakten, Leads, Angeboten, Nachfass-Terminen, Beschwerden und Servicehistorie. Es ist nicht dasselbe wie ERP.',
      ],
      kapitel: {
        titel: 'CRM, ERP, DMS und CMS',
        href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
      },
    },
  {
      id: 'daily-scrum',
      begriff: 'Daily Scrum',
      kurzdefinition: '15-minütiges Event im Sprint, in dem die Developers ihre nächsten Schritte gegen das Sprint Goal synchronisieren.',
      definition: [
        'Das Daily Scrum ist ein Event aus dem Scrum Guide 2020. Es dauert maximal 15 Minuten, findet zur gleichen Zeit am gleichen Ort statt und ist ausschliesslich für die Developers. Product Owner und Scrum Master können teilnehmen, weisen aber keine Arbeit zu.',
        'Inhalt ist keine Statusrunde für Vorgesetzte, sondern die Anpassung des Sprint-Backlog-Plans im Hinblick auf das Sprint Goal: Was bringt uns näher dran, was hält uns auf, was ist als nächstes dran?',
      ],
      kapitel: {
        titel: 'Scrum – Accountabilities, Events, Artefakte',
        href: '/lernen/projekt/agile-vorgehen/scrum',
      },
    },
  {
      id: 'darlehen',
      begriff: 'Darlehen',
      kurzdefinition: 'Geldbetrag, der vertraglich bereitgestellt und später zurückgezahlt wird.',
      definition: [
        'Bei einem Darlehen stellt der Darlehensgeber einen Geldbetrag zur Verfügung. Der Darlehensnehmer schuldet Rückzahlung und bei Vereinbarung Zinsen.',
        'In AP1-Aufgaben ist ein Darlehen ein typisches Beispiel für Fremdfinanzierung. Wichtig sind Darlehensbetrag, Zinssatz, Laufzeit und Tilgung.',
      ],
      kapitel: {
        titel: 'Eigen- & Fremdfinanzierung',
        href: '/lernen/wirtschaft/markt/eigenfremdfinanzierung',
      },
    },
  {
      id: 'datagramm',
      begriff: 'Datagramm',
      kurzdefinition: 'Ein Datagramm ist eine eigenständige Dateneinheit, bei UDP besonders auf der Transportschicht relevant.',
      definition: [
        'UDP sendet Daten als Datagramme ohne vorherigen Verbindungsaufbau. Jedes Datagramm wird unabhängig behandelt.',
        'Es gibt bei UDP keine automatische Garantie für Reihenfolge, Zustellung oder Wiederholung.',
      ],
      kapitel: {
        titel: 'TCP vs. UDP',
        href: '/lernen/netzwerke/grundlagen-netz/tcp-udp',
      },
    },
  {
      id: 'dateisystem',
      begriff: 'Dateisystem',
      kurzdefinition: 'Organisationsschema, das festlegt, wie Dateien und Verzeichnisse auf einem Datenträger gespeichert und verwaltet werden.',
      definition: [
        'Ein Dateisystem definiert, wie Daten auf einem Datenträger logisch organisiert sind. Es legt fest, wie Dateien benannt, in Verzeichnisse gruppiert, mit Metadaten (Größe, Rechte, Zeitstempel) versehen und in physischen Speicherblöcken abgelegt werden.',
        'Bekannte Beispiele sind FAT32 und exFAT (geräteuebergreifend), NTFS (Windows), ext4 (Linux) und APFS (macOS/iOS). Die Wahl bestimmt Kompatibilität, maximale Dateigrösse, Rechtemodell und Schutz vor Datenverlust.',
      ],
      kapitel: {
        titel: 'Dateisysteme (FAT32, NTFS, ext4, APFS)',
        href: '/lernen/betriebssysteme/os-grundlagen/dateisysteme',
      },
    },
  {
      id: 'datenrate',
      begriff: 'Datenrate',
      kurzdefinition: 'Die Datenrate beschreibt, wie viele Bits oder Bytes pro Zeiteinheit übertragen werden.',
      definition: [
        'Die Datenrate gibt an, wie schnell Daten übertragen werden, klassisch in bit/s oder Byte/s. Internetanschlüsse werden meist in Mbit/s angegeben (kleines b), Datei- oder Speichergeschwindigkeiten oft in MB/s (grosses B).',
        'In AP1-Aufgaben rechnest du mit drei Formeln: Zeit = Datenmenge / Datenrate, Datenrate = Datenmenge / Zeit und Datenmenge = Datenrate * Zeit. Vorher müssen die Einheiten auf Bit oder Byte vereinheitlicht werden.',
      ],
      kapitel: {
        titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
        href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
      },
    },
  {
      id: 'datentyp',
      begriff: 'Datentyp',
      kurzdefinition: 'Ein Datentyp beschreibt, welche Art von Wert vorliegt und welche Operationen sinnvoll sind.',
      definition: [
        'Typische AP1-Datentypen sind int für ganze Zahlen, float für Kommazahlen, string für Text und bool für wahr/falsch. Der Datentyp beeinflusst Vergleiche, Rechenoperationen und Ausgaben.',
        'Prüfungsfalle: Ein Durchschnitt ist meist ein float, auch wenn die Eingabewerte ganze Zahlen sind. Wird eine Kommazahl ungewollt als int behandelt, kann das Ergebnis abgeschnitten werden.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
  {
      id: 'bewegungsdaten',
      begriff: 'Bewegungsdaten',
      kurzdefinition: 'Daten, die einen konkreten Vorgang, ein Ereignis oder eine Transaktion dokumentieren.',
      definition: [
        'Bewegungsdaten entstehen, wenn in einem Prozess etwas passiert: Bestellung, Rechnung, Zahlung, Wareneingang, Supportticket oder Buchung.',
        'Sie beziehen sich oft auf Stammdaten, zum Beispiel auf einen Kunden oder Artikel, und sind wichtig für Nachvollziehbarkeit, Auswertung und Belege.',
      ],
      kapitel: {
        titel: 'Stamm- und Bewegungsdaten',
        href: '/lernen/daten/daten-qualitaet/stamm-bewegungsdaten',
      },
    },
  {
      id: 'bestandsdaten',
      begriff: 'Bestandsdaten',
      kurzdefinition: 'Daten, die einen aktuellen Zustand oder Bestand zu einem Zeitpunkt beschreiben.',
      definition: [
        'Bestandsdaten zeigen einen Stand, zum Beispiel Lagerbestand, Kontostand, offene Tickets oder freie Lizenzen.',
        'Sie werden häufig durch Bewegungsdaten verändert: Wareneingang erhöht den Lagerbestand, Verkauf senkt ihn.',
      ],
      kapitel: {
        titel: 'Stamm- und Bewegungsdaten',
        href: '/lernen/daten/daten-qualitaet/stamm-bewegungsdaten',
      },
    },
  {
      id: 'datenart',
      begriff: 'Datenart',
      kurzdefinition: 'Fachliche Einordnung von Daten nach ihrer Rolle im Prozess.',
      definition: [
        'Eine Datenart beschreibt, welche Aufgabe Daten im System haben. Typische Datenarten sind Stammdaten, Bewegungsdaten, Bestandsdaten und Referenzdaten.',
        'Die Einordnung hilft bei Datenmodellierung, Schnittstellen, Berechtigungen, Datenschutz und Datenqualität.',
      ],
      kapitel: {
        titel: 'Stamm- und Bewegungsdaten',
        href: '/lernen/daten/daten-qualitaet/stamm-bewegungsdaten',
      },
    },
  {
      id: 'datenqualitaet',
      begriff: 'Datenqualität',
      kurzdefinition: 'Grad, in dem Daten für ihren Zweck korrekt, vollständig, aktuell und konsistent sind.',
      definition: [
        'Datenqualität beschreibt, ob Daten brauchbar sind: eindeutig, vollständig, korrekt, aktuell, konsistent und nachvollziehbar.',
        'Schlechte Datenqualität führt zu falschen Rechnungen, doppelten Kundensätzen, unzuverlässigen Auswertungen und Prozessfehlern.',
      ],
      kapitel: {
        titel: 'Stamm- und Bewegungsdaten',
        href: '/lernen/daten/daten-qualitaet/stamm-bewegungsdaten',
      },
    },
  {
      id: 'deckungsbeitrag',
      begriff: 'Deckungsbeitrag',
      kurzdefinition: 'Der Deckungsbeitrag zeigt, wie viel ein Produkt zur Deckung der Fixkosten beiträgt.',
      definition: [
        'Der Deckungsbeitrag pro Stück ist der Verkaufspreis minus variable Kosten pro Stück.',
        'Ist die Summe der Deckungsbeiträge größer als die Fixkosten, entsteht Gewinn.',
      ],
      kapitel: {
        titel: 'Gewinnermittlung & Deckungsbeitrag',
        href: '/lernen/wirtschaft/kalkulation/gewinnermittlung',
      },
    },
  {
      id: 'default-deny',
      begriff: 'Default Deny',
      kurzdefinition: 'Default Deny bedeutet: Alles ist gesperrt, ausser es wurde ausdrücklich erlaubt.',
      definition: [
        'Default Deny ist ein Sicherheitsprinzip für Regelwerke. Zürst werden benötigte Verbindungen gezielt erlaubt, danach blockiert eine Standardregel den Rest.',
        'Das Gegenteil wäre ein sehr offenes Regelwerk, bei dem nur einzelne bekannte Gefahren gesperrt werden. Das ist schwerer sicher zu beherrschen.',
      ],
      kapitel: {
        titel: 'Firewall und DMZ',
        href: '/lernen/netzwerke/netz-sicherheit/firewall-dmz',
      },
    },
  {
      id: 'definition-of-done',
      begriff: 'Definition of Done',
      kurzdefinition: 'Verbindlicher Qualitätsmassstab dafür, wann ein Inkrement als fertig gilt.',
      definition: [
        'Die Definition of Done (DoD) ist im Scrum Guide 2020 das Commitment zum Inkrement: sie beschreibt formal, wann ein Stück Arbeit als fertig im Sinne des Produkts gilt — typischerweise Punkte wie Code-Review, Tests, Dokumentation, deploybar.',
        'Was die DoD nicht erfüllt, gehört nicht ins Inkrement. Die DoD steht fest, bevor mit der Arbeit begonnen wird, damit Transparenz und Inspektion am Sprint-Ende möglich sind.',
      ],
      kapitel: {
        titel: 'Scrum – Accountabilities, Events, Artefakte',
        href: '/lernen/projekt/agile-vorgehen/scrum',
      },
    },
  {
      id: 'desire',
      begriff: 'Desire',
      kurzdefinition: 'Dritte AIDA-Stufe: Wunsch nach der angebotenen Lösung auslösen.',
      definition: [
        'Desire übersetzt Merkmale in konkreten Nutzen. Statt nur Funktionen zu nennen, zeigt die Botschaft, wie die Lösung Zeit spart, Risiken senkt, Kosten reduziert oder Arbeit erleichtert.',
        'Prüfungsrelevant: Desire wird oft durch Vorher-nachher-Vergleiche, Belege, Referenzen, kurze Demos oder anschauliche Nutzenargumente erzeugt.',
      ],
      kapitel: {
        titel: 'AIDA-Formel & Werbewirkung',
        href: '/lernen/wirtschaft/markt/aida-formel',
      },
    },
  {
      id: 'developers',
      begriff: 'Developers (Scrum)',
      kurzdefinition: 'Mitglieder des Scrum Teams, die das Inkrement bauen — früher als „Entwicklungsteam" bezeichnet.',
      definition: [
        'Developers ist im Scrum Guide 2020 der Begriff für alle Personen im Scrum Team, die jeden Sprint ein nutzbares Inkrement liefern. Sie sind selbstorganisiert und cross-funktional; niemand teilt ihnen Arbeit zu.',
        'Die Teamgrösse wird im Scrum Guide 2020 als „typisch zehn oder weniger" beschrieben — früher (2017) hiess es 3 bis 9 Entwickler. Schulbücher und Prüfungsaufgaben verwenden oft noch die alte Formulierung; der aktuelle Standard ist die 2020er-Fassung.',
      ],
      kapitel: {
        titel: 'Scrum – Accountabilities, Events, Artefakte',
        href: '/lernen/projekt/agile-vorgehen/scrum',
      },
    },
  {
      id: 'dezentralisiertes-it-system',
      begriff: 'Dezentralisiertes IT-System',
      kurzdefinition: 'IT-Architektur, bei der Daten, Dienste oder Verantwortung auf mehrere Systeme verteilt sind.',
      definition: [
        'Ein dezentralisiertes IT-System verteilt Funktionen auf mehrere Rechner, Standorte oder Verantwortungsbereiche. Beispiele sind lokale Benutzerkonten, lokale Dateiablagen oder Peer-to-Peer-Freigaben.',
        'Dezentrale Lösungen können lokal schnell und einfach sein, führen aber bei Wachstum oft zu Versionsproblemen, uneinheitlichen Rechten und schwierigerem Backup.',
      ],
      kapitel: {
        titel: 'Zentrale vs. dezentrale IT-Systeme',
        href: '/lernen/betriebssysteme/it-infrastruktur/zentral-dezentral',
      },
    },
  {
      id: 'dezimalpraefix',
      begriff: 'Dezimalpräfix',
      kurzdefinition: 'Dezimalpräfixe stehen für Vielfache von 1000 und folgen dem SI-System.',
      definition: [
        'Das Internationale Einheitensystem definiert kilo = 10^3, mega = 10^6, giga = 10^9 und tera = 10^12. KB, MB, GB und TB sind damit dezimale 1000er-Schritte.',
        'In Prüfungsaufgaben gilt ohne anderen Hinweis: KB, MB, GB und TB dezimal lesen. Festplatten-, SSD-, Internet- und Mobilfunkangaben nutzen in der Regel diese dezimale Reihe.',
      ],
      kapitel: {
        titel: 'Bit & Byte - die kleinsten Einheiten',
        href: '/lernen/grundlagen/zahlen/bit-byte',
      },
    },
  {
      id: 'dezimalwert',
      begriff: 'Dezimalwert',
      kurzdefinition: 'Der Dezimalwert ist der Wert einer Zahl im gewohnten Zehnersystem.',
      definition: [
        'Der Dezimalwert sagt, welchen Wert eine Zahl im Dezimalsystem mit der Basis 10 hat.',
        'Beispiel: 11000000₂ hat den Dezimalwert 192, weil 128 + 64 = 192 ist.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'dezimalsystem',
      begriff: 'Dezimalsystem',
      kurzdefinition: 'Das Dezimalsystem ist das Stellenwertsystem mit Basis 10.',
      definition: [
        'Das Dezimalsystem nutzt die Ziffern 0 bis 9. Nach der 9 folgt ein Übertrag in die nächste Stelle, also 10.',
        'In Aufgaben ist Dezimal meist die gewohnte Zielschreibweise für Menschen, während Computerwerte oft aus Binär, Oktal oder Hexadezimal umgerechnet werden.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
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
      id: 'dienstvertrag',
      begriff: 'Dienstvertrag',
      kurzdefinition: 'Vertrag über fachgerechte Dienste gegen Vergütung, ohne automatisch garantierten Erfolg.',
      definition: [
        'Beim Dienstvertrag schuldet der Dienstverpflichtete die versprochenen Dienste. Der andere Teil zahlt die vereinbarte Vergütung.',
        'Prüfungsrelevant ist die Abgrenzung zum Werkvertrag: Beim Dienstvertrag steht das fachgerechte Tätigwerden im Vordergrund, nicht ein abnahmefähiger Erfolg.',
      ],
      kapitel: {
        titel: 'Vertragsarten: Kaufvertrag, Dienstvertrag und Werkvertrag',
        href: '/lernen/vertragsrecht/vertraege/vertragsarten',
      },
    },
  {
      id: 'digitale-signatur',
      begriff: 'Digitale Signatur',
      kurzdefinition: 'Kryptografischer Nachweis für Integrität und Herkunft von Daten.',
      definition: [
        'Bei einer digitalen Signatur wird typischerweise ein Hash der Daten mit dem Private Key des Signierenden signiert. Empfänger prüfen die Signatur mit dem Public Key.',
        'Sie macht Daten nicht geheim. Sie zeigt, ob die Daten verändert wurden und ob die Signatur zum passenden Schlüsselpaar gehört.',
      ],
      kapitel: {
        titel: 'Verschlüsselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'displayport',
      begriff: 'DisplayPort',
      kurzdefinition: 'Digitale Bildschirmschnittstelle (VESA); für hohe Auflösungen, hohe Bildraten und Daisy-Chaining.',
      definition: [
        'DisplayPort ist ein VESA-Standard für die Übertragung von Bild und Ton zwischen Computer und Monitor. DisplayPort 1.4 unterstützt 4K bei 120 Hz, DisplayPort 2.0/2.1 erreicht bis zu 8K.',
        'Eine Besonderheit ist Multi-Stream Transport: Mehrere Monitore können über einen einzigen DP-Port hintereinander geschaltet werden (Daisy Chain). Adapter zu HDMI sind möglich, aber nur in eine Richtung sinnvoll.',
      ],
      kapitel: {
        titel: 'Hardware, Schnittstellen & Peripherie auswählen',
        href: '/lernen/hardware/schnittstellen/hardware-schnittstellen',
      },
    },
  {
      id: 'dms',
      begriff: 'DMS',
      kurzdefinition: 'Ein DMS verwaltet Dokumente mit Metadaten, Suche, Versionen, Rechten und Freigaben.',
      definition: [
        'DMS steht für Dokumentenmanagementsystem. Es speichert Dokumente nicht nur als Dateien, sondern verwaltet sie strukturiert mit Metadaten, Berechtigungen, Versionierung, Suche und oft Freigabeprozessen.',
        'Prüfungsrelevant: DMS passt zu Verträgen, Rechnungen, Spezifikationen, Protokollen, Archivierung, Dokumentensuche und kontrollierter Freigabe.',
      ],
      kapitel: {
        titel: 'CRM, ERP, DMS und CMS',
        href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
      },
    },
  {
      id: 'dmz',
      begriff: 'DMZ',
      kurzdefinition: 'Eine DMZ ist ein getrenntes Netzsegment für Systeme, die von außen erreichbar sein müssen.',
      definition: [
        'DMZ steht für Demilitarized Zone. In der Netzwerktechnik ist damit ein isoliertes Segment zwischen Internet und internem LAN gemeint.',
        'Öffentlich erreichbare Dienste wie Webserver stehen in einer DMZ, damit ein kompromittierter Server nicht direkt Zugriff auf das interne LAN hat.',
      ],
      kapitel: {
        titel: 'Firewall und DMZ',
        href: '/lernen/netzwerke/netz-sicherheit/firewall-dmz',
      },
    },
  {
      id: 'dns',
      begriff: 'DNS',
      kurzdefinition: 'DNS löst Domainnamen in IP-Adressen auf.',
      definition: [
        'DNS steht für Domain Name System. Es übersetzt menschenlesbare Namen wie example.org in IP-Adressen, mit denen Rechner kommunizieren.',
        'Ohne DNS müsstest du dir für viele Dienste numerische IP-Adressen merken.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'dora',
      begriff: 'DORA-Handshake',
      kurzdefinition: 'DORA (Discover, Offer, Request, Acknowledge) ist der vierstufige Handshake, mit dem ein DHCP-Server einem Client eine IP-Konfiguration zuteilt.',
      definition: [
        'Schritt 1: Discover - der Client schickt einen Broadcast (Quelle 0.0.0.0, Ziel 255.255.255.255), weil er noch keine IP hat. Schritt 2: Offer - jeder erreichbare DHCP-Server antwortet mit einem Adressvorschlag inklusive Lease-Dauer. Schritt 3: Request - der Client wählt das erste Angebot per Broadcast und teilt allen Servern mit, welches Angebot er akzeptiert. Schritt 4: Acknowledge - der gewählte Server bestätigt und schickt die finalen DHCP-Optionen mit.',
        'Wichtig: Genau diese vier Schritte werden gern abgefragt - oft als Reihenfolge-Aufgabe oder als Einzelschritt-Erklärung. Jeder Schritt nutzt UDP, Port 67 (Server) und 68 (Client). Das Protokoll ist in RFC 2131 definiert.',
      ],
      kapitel: {
        titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
        href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
      },
    },
  {
      id: 'dpi',
      begriff: 'DPI',
      kurzdefinition: 'DPI gibt an, wie viele Punkte (Pixel) pro Zoll ein Scanner oder Drucker erfasst.',
      definition: [
        'DPI steht für Dots per Inch. Ein Scanner mit 600 dpi erzeugt 600 Bildpunkte pro Inch in jeder Richtung. Beim Rechnen wandelst du zürst Zentimeter in Inch um (1 Inch = 2,54 cm) und multiplizierst dann mit der DPI-Zahl, um die Pixelmasse zu erhalten.',
        'In Aufgabentexten steht oft 1:1 - also gleiche DPI in horizontaler und vertikaler Richtung. Streng genommen gibt es zwei Werte (z. B. 600 x 300 dpi). PPI (Pixel per Inch) wird im Bildschirmkontext genutzt und ist für Prüfungsaufgaben zu DPI fast deckungsgleich.',
      ],
      kapitel: {
        titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
        href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
      },
    },
  {
      id: 'chmod',
      begriff: 'chmod',
      kurzdefinition: 'chmod ist ein Unix/Linux-Befehl zum Ändern von Dateirechten.',
      definition: [
        'chmod steht für change mode. Der Befehl setzt Rechte für Eigentümer, Gruppe und andere, zum Beispiel Lesen, Schreiben und Ausführen.',
        'Die Kurzform 755 ist oktal: 7 bedeutet rwx, 5 bedeutet r-x. Deshalb passt chmod gut zum Thema Oktalzahlen.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'dateirechte',
      begriff: 'Dateirechte',
      kurzdefinition: 'Dateirechte legen fest, wer eine Datei lesen, schreiben oder ausführen darf.',
      definition: [
        'Unix/Linux-Dateirechte werden für drei Rollen betrachtet: Eigentümer, Gruppe und andere. Jede Rolle kann Lesen (r), Schreiben (w) und Ausführen (x) bekommen.',
        'In der oktalen Schreibweise stehen r=4, w=2 und x=1. 6 bedeutet also rw-, 5 bedeutet r-x und 7 bedeutet rwx.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'dsgvo',
      begriff: 'DSGVO',
      kurzdefinition: 'Die DSGVO regelt den Umgang mit personenbezogenen Daten in der EU.',
      definition: [
        'Die Datenschutz-Grundverordnung legt Grundsätze, Rechte und Pflichten für die Verarbeitung personenbezogener Daten fest.',
        'Für IT-Aufgaben ist besonders wichtig, Datenminimierung, Zweckbindung, Sicherheit und Betroffenenrechte unterscheiden zu können.',
      ],
      kapitel: {
        titel: 'DSGVO - die sieben Grundsätze',
        href: '/lernen/sicherheit/dsgvo-krypto/dsgvo-basics',
      },
    },
  {
      id: 'durchsatz',
      begriff: 'Durchsatz',
      kurzdefinition: 'Durchsatz ist die effektiv erreichte Datenrate auf einem Übertragungsweg.',
      definition: [
        'Der Durchsatz (Throughput) ist das, was nach Abzug von Overhead, Latenz, Wiederholungen und Endgeräte-Bremsen tatsächlich beim Empfänger ankommt. Er liegt immer unter der Bandbreite und wird oft brutto/netto unterschieden.',
        'Bei Ethernet rechnet man typisch mit ca. 95 Prozent Effizienz, bei TCP über WAN deutlich darunter, bei WLAN je nach Standard, Störumgebung und Geräteanzahl mit 30 bis 70 Prozent. Prüfungsaufgaben geben den Faktor meist explizit an.',
      ],
      kapitel: {
        titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
        href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
      },
    },
]
