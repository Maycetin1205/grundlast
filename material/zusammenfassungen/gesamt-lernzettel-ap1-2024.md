---
herkunft: Lernzettel zur AP1-Vorbereitung, Stand 2024
quelldatei: Lernzettel AP1 2024.pdf
datum: 2026-08
art: zusammenfassung
verdichtet: nein
extraktion: pdfplumber, Rohtext ohne Nachbearbeitung
---

# Lernzettel AP1 2024

> Automatisch aus PDF extrahiert (56 Seiten). Layoutartefakte sind moeglich,
> der Wortlaut ist unveraendert. Seitenmarken als HTML-Kommentar erhalten.


<!-- Seite 1 -->

Inhalt
Vorwort … 3
Projektmanagement … 3
Agile Modelle … 3
Wasserfallmodell … 3
Netzplan ( Vorwärtsrechnung und rückwärtsrechnung fehlt noch ) … 5
Projektmanagement Generell … 6
Qualitätsmanagement … 8
Total Quality Management … 8
Grundlagen Qualität … 8
Qualitätsaspekte ( fehlt noch ) … 9
Softwarequalität … 9
Barrierefreiheit … 10
Definitionen Qualität … 10
Datenschutz … 11
DSGVO … 11
Grundlagen … 11
Standard-Datenschutzmodell … 12
Gefährdung der IT-Sicherheit … 12
Maßnahme gegen Gefährdung … 13
IT-Grundschutz ( Bild ersetzen ) … 14
IT-Sicherheitsgesetz ( Bild ersetzen ) … 14
Verschlüsselungsverfahren … 15
IT-Systeme … 16
UEFI/BIOS … 16
Datensicherungskonzept … 16
Konzeption einer IT-Ausstattung … 17
Installation von Hardware … 18
IT-Grundkenntnisse ( Rechnen ) … 18
Einsatz von Cloud Computing … 19
Server-Virtualisierung … 20
Betriebssysteme … 21
Technische organisatorische maßnahmen ( Datenschutz ) … 21
Schnittstellen ( HDMI, USB-C, VGA, DP ) … 21

<!-- Seite 2 -->

Industrie 4.0 ( fehlen noch Infos ) … 22
Anwendungssysteme … 22
Prozessoren und Speicher … 22
Datenspeicherung und Ausfallsicherheit … 23
DAS NAS SAN … 25
MQTT ( Broker, Publisher, Client ) … 26
Wichtige Begriffserklärung … 27
Software … 28
Programmierung … 28
Primitäre Dateitypen … 28
Normalisierung … 29
Datenbankaspekte (NoSQL, SQL) … 30
Netzwerk … 32
VPN … 32
OSI-Schichtenmodell und TCP/IP-Modell … 32
Wireless Local Area Network ( WLAN ) … 35
Gebäudeverkabelung … 36
Konfiguration von IP-Adressen … 37
IPv6 … 38
Kupferkabel … 40
Fernwartung … 40
Arbeits- und Geschäftsprozesse … 41
Marktformen … 41
Leitungssysteme … 42
Unternehmensziele und Wirtschaftlichkeitsüberlegungen … 45
Der Beschaffungsprozess … 46
4Ohrenmodell … 47
Fragen aus den AO2020 Prüfungen /Misc Stuff … 48
KPI Key-Performance-indikator … 49
Random Stuff ( Prüfungen/Screenshots ) … 49
USV … 50
DSL Arten … 51
Netzwerk Komponenten/Vererbung … 52
Einführung Software/Hardware … 52
SWOT-Analyse … 53
Projektabschluss … 54

<!-- Seite 3 -->

Nachhaltigkeit ( Green IT ) … 54
Service-Level-Agreement / SLA … 55
Vorwort
Dieser Lernzettel habe ich zur Vorbereitung meiner AP1 gemacht aus alten Prüfungen und aus dem
Prüfungsvorbereitungsbuch. Später wurde es nochmal mit der Community im Fachinformatiker
Discord erweitert. Ich hoffe dieses Dokument kann euch genau so helfen wie mir . Es ist nicht perfekt
aber bietet eine grobe Anordnung an allen relevanten Themen. Viel Erfolg :).
Projektmanagement
Agile Modelle
Agile Methoden richten sich nach den oben genannten Prinzipien -->
eine Methode ist ein eingeübter oder formalisierter Ablauf der sich als sinnvoll und erfolgreich
erwiesen hat
Agile Prozesse helfen die Entwurfsphase kurz und so schnell wie möglich das Ergebnis mit dem
Kunden abzustimmen --> ein Prozess ist ein Verlauf oder eine Entwicklung über eine bestimmte Zeit,
bei der etwas entsteht
Scrum ( ist ein agilles Modell )
• Beginnt mit Sprintplanung und endet mit einem Sprint-Review.
• Ein Sprint darf nicht unterbrochen werden
• Ein Sprint dauert in der Regel ein bis vier Wochen
• Der Scrum Master führt die Scrum-Regeln ein --> sie sorgen für einen ungestörten Ablauf
in der Entwicklung.
• Der Scrum Master entwickelt nicht, ist also kein Teil des Entwicklerteams
• Ein Entiwcklerteam besteht Minimum aus 3 und Maximum aus 9 Personen
• Ein Entwicklerteam soll aus mehreren Experten ( Entwickler, Tester, Architekten)
bestehen
• Der Product Owner ( ist für das Product Backlog verantwortlich / Product Backlog -->
übersichtliche Anordnung der Anforderungen an das Produkt ) ist die Schnitstelle
zwischen Kunden und Projektbeteiligten
• Das Daily Scrum ist ein tägliches 15 Minuten Meeting des Entwicklerteams ( Scrum
Master sollte und Product Owner kann daran teilnehmen. Alle Teammitglieder teilen
ihren aktuellen Stand.
• Stakeholder können sich jederzeit zu den Prozessen informieren und diese begleiten
Wasserfallmodell
Dokumentgetrieben
Für alle Phasen des Wasserfallmodells müssen Dokumentationen verfasst werden. Am Ende der
Phase ist die abgeschlossene Dokumentation dann auch gleichzeitig ein Meilenstein im Projekt.
Deshalb nennt man das Wasserfallmodell auch dokumentgetrieben. Solche Dokumente sind
beispielsweise das Lastenheft und Pflichtenheft

<!-- Seite 4 -->

Das Lastenheft beschreibt die Funktionalitäten, die die Software erfüllen soll. Es wird von
Auftraggeber erstellt.
Das Pflichtenheft beschreibt, wie die Anforderungen des Lastenhefts umgesetzt werden können. Es
wird von Auftraggeber erstellt.
Top-Down-Methode
Diese Methode beschreibt eine Vorgehensweise, die von Allgemeinen zum Speziellen führt. Für die
Softwarentwicklung entsteht beispielsweise zuerst der Entwurf oder das Design und anschließend
werden erst die einzelnen Module implementiert. Das Wasserfallmodell arbeitet genau nach dieser
Vorgehensweise.
Vorteile
• Einfache verständliche Struktur
• Wenig Managmentaufwand
• Kalkulierbare Kosten
• Konsequenten Dokumentation
Nachteile
• Geringe (keine) Flexibilität
• Keine Rückspannungsmöglichkeiten in früheren Phasen --> keine
Korrekturmöglichkeiten
• Systemerfahrung meist sehr spät nach Projektbeginn
• Kunde ist nur zu Beginn und am Ende beteiligt ( Fehlentwicklungen
Qualität einer Präsentation steigern
• Struktur des Vortrags
• Adressaufgebaute Aufbereitung
• Fachliche Korrektheit
• Verständlicher, flüssiger und souveräner Vertragsstil
• Einhaltung der zeitlichen Vorgabe

<!-- Seite 5 -->

Netzplan ( Vorwärtsrechnung und rückwärtsrechnung fehlt noch )

<!-- Seite 6 -->

wozu dient die vorwärtsrechnung beim netzplan? --> Dient dazu den frühst möglichsten
endzeitpunkt zu ermitteln IHK FRAGE
wozu dient die rückwärtsrechnung beim neztplan? --> zu ermitteln wann mit einem vorgang
spätestens begonnen werden muss damit das projekt ende gehalten werden kann
Gesamtpuffer gibt an um wie viele Zeiteinheiten sich das projekt verschieben
freier puffer gibt an um wie viele zeiteinheiten verzögern darf bevor sich der unmittelbare nachfolger
verschiebt
Im gantdiagramm parallel vorgänge direkt ersichtlich ( visuell )
Abhängigkeiten im Netzplan besser ersichtlich ( Wer ist der Nachfolger bzw Vorgänger von wem )
Frühster Anfangszeitpunkt Plus rechnen frühester Endzeitpunkt
Vorgang Beschreibung
Dauer Gesamtpuffer GP Freie Puffe FP
spätester Anfangszeitpunkt Minus rechnen spätester Endzeitpunkt
Projektmanagement Generell
Ein Projekt ist ein einmaliges Vorhaben mit klarem Ziel sowie einen Anfangstermin und Endtermin.

<!-- Seite 7 -->

Projektmanagmentmethode PRINCE2
Eine temporäre Organisation, die mit dem Ziel gegründet wurde, ein oder mehrere Produkte gemäß
einer vereinbarten Business Case ( Geschäft Szenario ) zu liefern.
Stakeholder in einem Projekt
• Projektleiter
• Projektmitarbeiter
• Lieferanten
• Kunden
• Benutzer
• Auftraggeber
• Sponsoren
Projektphasen
1. Projektauftrag/Projektdefinition: Machbarkeitstudie
2. Projektplanung: Meilensteine, Gantt-Diagramm
3. Projektdurchführung: Gantt-Diagramm
4. Projektabschluss: Abschlussbericht
Stakeholder-Analyse
Die Stakeholder Analyse ermittelt die wesentlichen Ziele, die Motivation und die Einstellungen der
Stakeholder im Zusammenhang mit den geplanten Projekt. Damit werden frühzeitig Probleme
erkannt (Projektgegner, gegenläufige Ziele etc. )
Risikoanalyse
Die Risikoanalyse hilft bei der Identifizierung potenzieller Probleme, die während eines Projekts oder
Prozesses aufheften könnte
Machbarkeitsanalyse
Die Machbarkeitsanalyse ist eine umfassende Studie, in der die Machbarkeit des Projekts aus
verschiedenen Perspektiven überprüft wird.
Das sind sowohl technische als auch wirtschaftliche Überprüfungen. Die Stakeholder Analyse ist ein
Teil dieser umfassenden Studie, ebenso wie die Risikoanalyse
Effective Risk Managment Process ( IAPTM )
Identify the risk
Analyse the risk
Prioritze the risk
Treat the risk
Monitor the risk

<!-- Seite 8 -->

Qualitätsmanagement
Total Quality Management
Das Total Quality Management (TQM) besteht aus organisationsweiten Bemühungen zur Installation
und Herstellung eines dauerhaften Klimas, in dem die Mitarbeiter ihre Fähigkeiten kontinuierlich
verbessen, um gewünschte Produkte und Dienstleistungen anzubieten, die von Kunden besonders
wertgeschätzt werden.
"Total" betont, dass Abteilungen neben der Produktion verpflichtet sind, ihre Abläufe zu verbessern
"Management" betont, dass Führungskräfte verpflichtet sind, die Qualität durch Finanzierung,
Schulung, Personaleinsatz und Zielsetzung aktiv zu verwalten. Zwar gibt es keine allgemeine
Anerkannten Ansatz, da stützen sich TQM-Bemühungen in der Regel stark auf die zuvor entwickelten
Tools und Techniken der Qualitätskontrolle.
Grundlagen Qualität

<!-- Seite 9 -->

Qualitätsaspekte ( fehlt noch )
• Qualitätsbegriffe
o Prozessqualität
▪ Qualität der Prozesse die zum Produkt führen
o Produktqualität
▪ Qualität des Endproduktes
o
Ablauf Qualitätsmanagement
Ist-Analyse –> Sollkonzept → Schulung der Mitarbeiter → QM-Handbuch verfassen → Interne Audits
→ Zertifizierung
Softwarequalität
Zuverlässigkeit: Reife, Fehlertoleranz, Wiederherstellbarkeit
Funktionalität: Angemessenheit, Interoperabilität(?), Sicherheit
Benutzbarkeit: Verständlichkeit, Erlernbarkeit, Bedienbarkeit
Effizienz: Zeitveralten, Verbrauchsverhalten
Wartbarkeit: Analysierbarkeit, Änderbarkeit/Updatebarkeit
Portabilität: Anpassbarkeit, Austauschbarkeit, Installierbarkeit
Modultest
Modultest dienen dazu einzelene Module der Komponenten zu testen. Das geschieht in der Regel in
Form eines White-Box-Test. Durch den Entwickler Frameworks wie Junit helfen dabei solche Tests zu
automatisieren.
Integrationstest:
Der Integrationstest prüft die einzelnen Komponenten im Zusammenspiel in der Regel werden
Komponenten nach dem Modultest direkt mit einem Integrationstest auf Fehler in der Interaktion
mit bestehenden Komponenten geprüft. Auch hier ist eine Automatisierung möglich
Systemtest:
Der Systemtest prüft die komplette Software gegen die definierten Anforderungen. In der Regel
findet dieser Test auch in einem Testsystem statt, das die Produktivumgebung nachbildet.
Abnahmetest:
Der Abnahmetest wird durch den Auftraggeber durchgeführt. Er prüft das Produkt auf die
geforderten Funktionalitäten. Der Test findet in der Regel als Black-Box-Test statt.
Compiler: Quellcode → Maschinensprache
Interpreter → verarbeitet den Quellcode eines Programmes

<!-- Seite 10 -->

Barrierefreiheit
BITV 2.0
Die Barrierefreiheit-Informationstechnik-Verordnung kurz BITV 2.0 hat das Ziel eine grundsätzlich
uneingeschränkte barrierefrei Gestaltung moderne Informations- und Kommunikationstechnik zu
ermöglichen. Sie verweist dabei in der Regel auf die Richtlinie der EU 2016/2102.
Barrierefreiheit im IT-Bereich
Im IT-Bereich soll die Barrierefreiheit dafür sorgen, dass Webseiten, Programme und
Betriebssysteme so gestaltet sind, dass sie auch von Menschen mit körperlichen Einschränkungen
bedient werden können.
Beispiel Webseite
• Die Seite sollte eine aussagekräftige Struktur haben - mit den entsprechenden HTML-
Tags wie <h1> oder <h2> ( Header ) gegliedert.
• Bilder sollten mit Alternativtext hinterlegt werden siehe Twitter/x
• Die Navigierbarkeit muss auch ohne Maus gesichert sein.
• Die Texte müssen skalierbar sein - empfehlenswert ist eine Skalierung bis 200%
Definitionen Qualität
Qualität = Grad, in dem ein Satz inhärenter Merkmalle eines Objekts Anforderungen erfüllt
DIN = Deutsches Institut für Normung
EN = Europäisches Normungsinstitut
ISO = International Organisation for Standardization
IEC = Internationel Electrotechnical Commission ( Elektrotechnik und Elektronik )
PDCA Zyklus DIN EN 9001
Planen (Plan):
In dieser Phase werden die Ziele des Verbesserungsprozesses definiert und die notwendigen
Maßnahmen geplant.Dazu gehört die Analyse der Ist-Situation, die Festlegung von Soll-Werten und
die Entwicklung von Aktionsplänen.
Tun (Do):
In dieser Phase werden die geplanten Maßnahmen umgesetzt.
Dazu gehört die Durchführung von Tests, die Schulung von Mitarbeitern und die Implementierung
neuer Prozesse.
Überprüfen (Check):
In dieser Phase wird der Erfolg der umgesetzten Maßnahmen überprüft. Dazu gehört die Messung
der Ergebnisse, die Analyse von Abweichungen und die Identifizierung von
Verbesserungspotenzialen.
Handeln (Act):
In dieser Phase werden die Ergebnisse der Überprüfung genutzt, um den Prozess zu verbessern.
Dazu gehört die Anpassung der Aktionspläne, die Standardisierung von Verbesserungen und die
erneute Durchführung des PDCA-Zyklus.

<!-- Seite 11 -->

Datenschutz
DSGVO
DSGVO seit Mai 2018
BDSG ( Bundesdatenschutzgesetz ) regelt die Bereiche, in denen die DSGVO den Mitgliedstaaten
Gestaltungsmöglichkeiten einräumt.
Recht auf Auskunft: betroffene Person hat das Recht, ob personenbezogene Daten von ihr
verarbeitet werden. Falls ja hat sie das Recht auf Auskunft über den Verarbeitungszweck, über die
Kategorie der Datenerhebung, über die Empfänger der Daten, über die Dauer der Speicherung und
über die Herkunft der Daten.
Recht auf Berichtigung/Richtigkeit: Sofortige Berechtigung oder Ergänzung nicht korrekter
personenbezogener Daten
Recht auf Löschen wenn:
Daten nicht mehr notwendig sind
Betroffene Person widerruft
Daten unrechtmäßig erhoben worden sind
Recht auf Widerspruch:
Grundlagen
Vertraulichkeit
Unter Vertraulichkeit versteht man, dass Daten nur von Personen eingesehen oder offengelegt
werden dürfen die dazu berechtigt sind
Integrität
Bedeutet, dass es nicht möglich sein darf Daten unbemerkt/unerkannt zu ändern. die Korrektheit der
Systeme und Informationen muss gegeben sein.
Verfügbarkeit
Eines Systems beschreibt die Zeit, in der das System funktioniert. autorisierte Benutzter oder
Administratoren müssen Zugang zu den Informationen/Systemen haben
Diese Faktoren können jeweils in normal hoch oder sehr hoch eingestuft werden
DSVGO und BDSG
Der Datenschutz in Unternehmen und Organisationen wird seit Mai 2018 grundsätzlich durch die EU-
Datenschutz-Grundverordnung ( DSVGO ) geregelt. Das neue Bundesdatenschutzgesetz ( BDSG )
regelt die Bereiche, in denen die DSGVO den Mitgliedstatten Gestaltungsmöglichkeiten einräumt.
Neben der DSGVO und dem BDSG Regel Datenschutzgesetzte der Bundesländer und
bereichspezifische Gesetze den Umgang mit personenbezogenen Daten, die in IT- und
Kommunikationssystemen oder manuell verarbeitet werden. Man hat das Recht auf:
Auskunft, Berichtigung und Löschung seiner Daten!
Ein Datenschutzbeauftragter muss benannt werden, wenn
• Mehr als 10 Personen an der automatisierten Verarbeitung personenbezogener Daten
arbeiten

<!-- Seite 12 -->

• Die Verarbeitung personenbezogener Daten ein hohes Risiko für Rechte und Freiheiten
der betroffenen Personen birgt
• Personenbezogene Daten geschäftsmäßig verarbeiten und übermittelt oder für
Meinungsforschung genutzt werden
• Die Kernfähigkeit eine umfangreiche und systematische Überwachung der betroffenen
Personen fordert
• Die Kernfähigkeit bei der Erfassung von Daten zur Herkunft, Religion, politscher
Anschauung oder Gesundheit liegt
Standard-Datenschutzmodell
Zweckbindung Art 5 - Nichtverhaftung(?)
Datenminimierung Art 5 - Datenminimierung WICHTIG
Richtigkeit Art 5 - Integrität
Speicherbegrenzung Art 5 - Datenminimierung
Vertraulichkeit Art 5 - Vertraulichkeit
Identifizierung und Authentifizierung Art 12 - Integrierbarkeit
Belastbarkeit Art 32 - Verfügbarkeit/Integrität/Vertraulichkeit
Berichtigungsmöglichlichkeiten von Daten Art 5 - Intervenierbarkeit
Datenschutzfreundliche Voreinstellungen Art 25 - Datenminimierung/Intervenierbarkeit
Verfügbarkeit Art 32: Verfügbarkeit
Löschbarkeit von Daten Art 17 - Intervenierbarkeit
Wiederherstellbarkeit Art 32 - Verfügbarkeit
Einwilligung…. Art4 - Transparenz, Intervenierbarkeit
Unterstützung bei der Wahrnehmung von Betroffenen rechten Art 12 - Intervenierbarkeit
Gefährdung der IT-Sicherheit
Angriffsmethoden und Angriff Szenarien auf die IT-Sicherheit
Identitätsdiebstahl:
• Phising: mithilfe gefälschter Websiten oder Emails sollen vertrauliche Daten eines
Nutzers ermittelt werden. Mit diesen Daten werden dann bspw. Onlinekonten des
Nutzers manipuliert und Geldbeträge überweisen.
• Vishing: steht für Voicephising uns ist eine Variante des Phishings. Dabei werden Nutzer
durch Telefonanrufe manipuliert und zur Herausgabe von persönlichen Daten animiert.
• Pharming: basiert auf der Manipulation der DNS-Abfragen von Webbrowsern. Damit
werden die Benutzer auf gefälschte Websites umgeleitet, obwohl sie die korrekte
Adresse eingegeben haben
• Spoofing: beschreibt die allg. Methode, mit der ein Angreifer eine Identität verschleiern
will. Das Phising ist eine Variante des Spoofings
• Nickmapping: setzt sich aus Nickname und Kidnapping zusammen. Bei dieser Methode
wird versucht die Internet-Identität einer Person zu „stehlen“, um damit in
verschiedenen Bereichen illegal zu arbeiten
Schadprogramme ( Malware )
• Spam: das unaufgeforderte senden von Nachrichten/Informationen(meist per Mail)
• Spyware: setzt sich aus Spy und Software zusammen. Spyware soll den Benutzer
ausspähen, als Daten über den Benutzer sammeln und auch versenden. Diese Software
wird sowohl zu Werbewecken als auch zur Überwachung genutzt.

<!-- Seite 13 -->

• Adware: setzt sich aus Adversitment und Software zusammen. Oftmals ohne Rückfrage
installiert sich diese Software zusätzlich auf dem PC des Benutzers und dient vor allem zu
Werbezwecken
• Virus: ist ein Programm, das sich selbst weiterverbreitet. Dazu schleust es sich in andere
Computerprogramme oder bspw. Den Bootsektoren ein und sorgt dann für seine
Reproduktion. Viren können große Schaden anrichten z.b. Datenverlust oder auch das
System verlangsamen.
• Trojaner: ist ein Programm, welches sich in oder hinter einem anderen nützlichen
Programm versteckt und im Hintergrund schädliche Aktivitäten durchführt
• Wurm: ist ein Programm, welches sich selbst reproduziert. Die Intention ist wie bei
einem Virus Schaden anzurichten.
• Ransomware: setzt sich aus Ransom ( Lösegeld ) und Software zusammen. Diese
Software verschlüsselt die Daten auf fremden Systemen oder blockiert den Zugang zu
den Daten. Damit soll eine Lösegeldzahlung erzwungen werden.
DDOS
Mit Hilfe einer „distributed-denioal-of-service attack“ soll ein Internetdienst so ausgelastet werden,
dass er nicht mehr ansprechbar ist. Das wird mit einer hohen Anzahl von Anfragen aus verschiedenen
Quellen erreicht. Die verschiedenen Quellen sorgen dafür, dass der Dienst nicht durch Blockieren
einer Quelle den Angriff stoppen kann. DDOS-Angriffe werden oft durch Botnetze durchgeführt
Botnetze:
Ein Botnetz entsteht durch die Installation eines Schadprogrammsauf viele Rechner und Vernetzung
dieser Rechner im Hintergrund. Dadurch kann zentral der Befehl eines Angriffs gegeben werden und
von unzähligen Rechnern parallel ausgeführt werden.
APT-Angriffe(advanced Persistent threads)
Diese Art des Angriffs unterscheidet sich von den herkömmlichen Schadprogrammen, da es eine
geplante und intensiv vorbereitete Aktion mit verschiedenen Methoden ist und die IT-Infrastruktur
einer Firma oder Behörde zur komprimieren. Bei dieser Aktion können alle oben genannten Formen
und Methode eingesetzt werden um das Ziel zu erreichen.
Maßnahme gegen Gefährdung
Vermeidung von Phishing
• aktuellen Virenscanner mit Phishing Warnung installieren und aktuell halten ( updaten )
• Niemals TANs oder Kennwörter aufgrund einer E-Mail/link eingeben
• Mangelnde Rechtschreibung und allg. Ansprachen ( wie sehr geehrte Damen u. Herren )
können auf einem Phishing versuche hinauslaufen
Verhalten bei einer Ransomware-Gefährdung
• Sofort alle Netzwerkverbindungen lösen
• Keine Anmeldung mehr an System mit Administrator oder erweiterten Rechten
• Backups auf Infizierung prüfen und falls nicht infiziert das System komplett neuaufsetzen
und Backups einspielen
Vermeidung von DDOs
• Alle Netzwerkkomponenten und Geräte ( IOT ) sollten mit sicheren Passwörtern versetzt
werden, unbenutzte Ports sollten geschlossen werden

<!-- Seite 14 -->

• Deaktivieren einer alternativen statischen Website, auf die während des Angriffs
umgeleitet wird. Damit können Kunden trotz des Angriffs über Kontaktmöglichkeiten
informiert werden.
IT-Grundschutz ( Bild ersetzen )
BSI
Das BSI ( Bundesamt für Sicherheit in der Informationstechnik ) ist eine Bundesbehörde die die IT-
Sicherheit in Staat, Wirtschaft und Gesellschaft fördern und gewährleisten will.
IT-Grundschutz
Eine Methodik, die die Informationssicherheit in Behörden und Unternehmen erhöhen soll. Der IT-
Grundschutz gilt als Maßstab für Absicherungen von Informationen und den Aufbau eines
Managmentsystems für Informationssicherheit ( TSMS ) Kompatibel zu ISO 22001
Sicherheitslinie und Sicherheitskonzept
Die Sicherheitslinie ist ein wichtiges Grundschutzdokument der Leitung zu den Stell den
verbindlichen Prinzipen und das anzuhebende Niveau der Informationssicherheit in einer Institution.
Das Sicherheitskonzept hingegen beschreibt die konkreten Maßnahmen mit denen die Leitlinie
umgesetzt werden kann
Ein Informationssicherheitsbeauftragter muss:
• Die Entwicklung eines Sicherheitskonzeptes koordinieren
• Der Geschäftsleitung aber den aktuellen Stand der Informationssicherheit berichten
IT-Sicherheitsgesetz ( Bild ersetzen )
Das IT-Sicherheitsgesetzt soll einen Beitrag dazu leisten, die IT-Systeme u digitalen Infrastrukturen
Deutschlands zu den sichersten weltweit zu machen. Dabei hat es vor allem die IT-Systeme der
höchsten Infrastrukturen im Blick. Zu den kritischen Infrastrukturen gehören die Sektoren deren
Dienstleistung zur Versorgung der Allgemeinheit dient und deren Ausfall oder Beeinträchtigung zu
erheblichen Versorgungsengpässen oder zu Gefährdung der öffentlichen Sicherheit führen könnte
Sektoren der kritischen Infrastruktur
Transport und Verkehr, Finanz und Versicherungswesen, Gesundheit, Informationstechnik und
Telekommunikation, Ernährung, Wasser, Energie
Meldung einer IT-Störung

<!-- Seite 15 -->

Verschlüsselungsverfahren
Symmetrische Verschlüsselung
Für die symmetrische Ver und Entschlüsselung ist es wichtig, dass sowohl Sender als auch Empfänger
denselben Schlüssel benutzen. Die Daten werden mit den Schlüssel verschlüsselt und ebenfalls
entschlüsselt. Das Verfahren ist sehr sicher solange die Schlüssel wirklich nur von beiden Parteien
bekannt sind → WPA2 – SSH – WLAN – OPEN VPN – WPA3 Verfahren: AES, Triple DES, Blowfish,
SHA2 ( MD5 )
Asymmetrische Verschlüsselung
Die asymmetrische Ver- und Entschlüsselung benutzten nicht nur einen Schlüssel sondern
öffentlichen und einen privaten Schlüssel. Der öffentliche Schlüssel ist frei verfügbar, der private
Schlüssel muss hingegen geheim bleiben. Die Verschlüsslung erfolgt dann mit dem öffentlichen

<!-- Seite 16 -->

Schlüssel, kann aber nur mit den privaten Entschlüsselt werden. → RSA, Multifaktor
TAN/einmalpasswörter,
Kryptographische Hashfunktionen: Beispiele, Integretätprüfungen, Prüfsummenn, Einmalpasswörter,
Sitzungsschlüssel, Speichern von Passwörtern, Digitale Signaturen
IT-Systeme
UEFI/BIOS
UEFI: neu, grafisch mit maus und tastatur, schneller, direkt updatebar
BIOS: alt, tastatur bedienbar, 2,2tb
Datensicherungskonzept
12 Großvater ( jeden monat ) – 4 Väter ( jede woche ) – 4 Söhne ( jeden tag außer dem vater )
12 Vollbackups – 4 Vollbackups --
Vollsicherung: Komplettes Abbild der Daten z.B. die Sicherung einer kompletten Festplatte oder
eines kompletten Ordners
Differenzielle Sicherung
Hier wird der aktuelle Datenbestand mit der letzten Vollsicherung verglichen und es werden alle
Daten gesichert, die sich nach der letzten Vollsicherung geändert haben. Für die Rekonstruktion
braucht man die letzte voll Sicherung und die letzter differenzielle Sicherung.
Inkrementelle Sicherung:
Hier wird immer nur das gesichert, was sich nach der letzten Voll Sicherung u den anschließenden
Sicherungen verändert hat. Für eine Rekonstruktion braucht man die letzte Vollsicherung und alle
weiteren inkrementellen Sicherungen danach

<!-- Seite 17 -->

Konzeption einer IT-Ausstattung
Desktop wäre hier der Sieger
Opensoruce:
Bietet öffentlichen Zugang zum Quelltext der Software. Je nach Lizenz kann der Quelltext genutzt,
verändert oder weiterverarbeitet werden.
Public Domain
Der Begriff Public Domain bedeutet frei von Urheberrechten. Allerdings ist dieser Rechtsbegriff nur in
einigen englischsprachigen Ländern gültig. In Deutschland kommt der Rechtsbegriff Gemeinfreiheit
dem Public Domain recht nahe
GNU/GPL
Ist eine Software-lizenz, die den Benutzern die Möglichkeit gibt, die Software zu nutzen, zu ändern
und zu verarbeiten. Wenn die Software verändert und vertrieben wird, dann muss es auf der
gleichen Lizenz-Bedingungen geschehen
OEM
Steht für Original Equipment Manufakturier. OEM-Software Versionen werden oft nicht direkt
verkauft, sondern nur in Kombination mit Hardware. Die Versionen sind dann preiswerter als im
direkten Verkauf, können in manchen Fällen nicht einfach von der Hardware entkoppelt werden um
auf ein anderes System installiert zu werden
EULA
Steht für End User License Agreement und soll die Benutzung von Software regeln.
Standardsoftware: Handelsübliche Software ( Word, Excel, Windows, Salesforce, SAP )
Individuellasoftware: für einen bestimmten Zweck
Angepasstesoftware: Standardsoftware genommen, mit Addons/Plugins angepasst
Propäritäresoftware: Gegenteil von Opensource
Pay-per-use: Zahlst nur bei Nutzung, Datenvolumen, Notfallhotline ( außerhalb der Geschäftszeiten )

<!-- Seite 18 -->

Installation von Hardware
Parallele Datenübertragung
Hier werden gebaute Leitungen einzelne Bits gleichzeitig übertragen Oftmals sind es 8 Leitungen,
damit ein ganzes Byte übertragen werden kann. Ein Problem bei der parallel Übertragung ist die
Fehleranfälligkeit je länger die Leitung ist. → Mehre Sachen gleichzeitig
Serielle Datenübertragung:
Hier wird ein Bit nach den anderen auf einer Leitung gesendet. Die Fehleranfälligkeit ist geringer als
bei der parallelen Übertragung, deshalb können auch die Leitungen länger sein. Bei heutigen
Schnittstellen wie USB 3.0 ist die … der Übertragung trotzdem enorm schnell → Ein bit nach dem
anderen bit
Aufgabe 12 GiB in 2 Stunden übertragen. Wie schnell muss die Verbindung sein
12 Gib = 12 * 1024 * 1024 * 1024 * 8 bit = 103079215104 bit
103079215104 Bit / 7200s = 14316557 Bit/s = 14317 kbit/s
Auf der einfachsten Ebene ist ein GB definiert als 1000³ (1.000.000.000) Bytes und ein GiB als 1024³
(1.073.741.824) Bytes
IT-Grundkenntnisse ( Rechnen )

<!-- Seite 19 -->

Einsatz von Cloud Computing
Infrastructure as a Service: ( IaaS )
Mit diesen Service werden den Nutzern virtuelle Rechner oder andere virtualisierte Hardware
angeboten. Der Nutzer kann diese Ressourcen frei konfigurieren Ein Beispiel für einen solchen
Service sind virtuelle Server, mit denen der Nutzer seine Website verwaltet oder einen Onlineshop
anbietet → Hardware virtualisiert angeboten
Platforms as a Service ( PaaS )
Dieser Service bietet die Möglichkeit eine Plattform zu mieten auf die eigenen Programme entwickelt
oder auch ausgeführt werden Bspw. Muss eine Softwareentwicklungsfirma nicht alle Plattformen
selbst installieren um die Software zu testen, sondern mietet sich je nach Bedarf eine entsprechende
Plattform → Development tools sind vorhanden, AWS ( Amazon web service )
Software as a Service ( SaaS )
Dieser Service bietet verschiedene Software ( z.b. Office an die der Anwender ohne eigene
Installation über die Cloud benutzen kann. Es kann bspw. über den Browser auf dies Software
zugegriffen werden → Office 365
Vorteile
• Kosteneinsparung durch weniger oder geringe Lizenzgebühren für Software oder auch
virtualisierte Hardware
• Zugriff auf Daten von überall
• Zeitnahes Backup aller Daten
Nachteile
• Abhängig von Internetzugang
• Datenschutz wird schwieriger, der Server oft im Ausland
• Abhängigkeit von einem Unternehmen

<!-- Seite 20 -->

Public Cloud: Cloud gemietet von nem Unternehmen ( Dropbox, Onedrive )
private Cloud: Cloud im eigenem Unternehmen ( Intranet )
Hybrid Cloud: Kombi aus beidem
Community Cloud: Teilen sich mehreren Unternehmen
Server-Virtualisierung
Zur Virtualisierung von Servern wird durch Einsatz einer Software eine virtuelle Schicht zwischen der
eigentlichen Hardware und das Betriebssystem erzeugt. Durch diese virtuelle Schicht können
mehrere virtuelle Server mit unterschiedlichen Betriebssystemen auf einer gemeinsamen Hardware-
Plattform gleichzeitig betrieben werden. Die Virtualisierungsschicht regelt den vereinheitlichten
Zugriff auf die zur Verfügung stehenden Ressourcen, wie Speicher oder Netzwerkanbindung. Die
virtuellen Maschinen sind voneinander unabhängig und beeinflussen sich nicht gegenseitig.
1 Großer Server → Mehrere kleinere Server werden drauf gehostet, Virtuell Skalierbar ( Rootserver )
Vorteile
• Bessere Auslastung von Systemressourcen
• Wenig physische Server notwendig.
• Geringe Bereitstellungszeit für neue Server
• Einfache Wartung
Nachteile
• Fällt der physische Server aus sind alle VMs down.
• Geteilte Ressourcen wie Ram können überlasten
Ein Hypervisor
auch Virtual Machine Monitor genannt, ist ein Prozess, mit dem virtuelle Maschinen (VMs) erstellt
und ausgeführt werden. Mit einem Hypervisor kann ein Host-Computer mehrere Gast-VMs
unterstützen, indem er deren Ressourcen (z.B. Arbeitsspeicher und Rechenleistung) virtuell verteilt.
Bare Metal
• Setzt direkt auf der Hardware auf
• Verwaltet die Ressource n besonders effizient
• Unterstützt gleichzeitig mehrere virtuelle Maschinen
Hosted
• Läuft als Anwendung in einer Host Betriebssystem
• Ist im privaten Einsatz gebräuchlich
• Unterstützt gleichzeitig mehrere virtuelle Maschinen
Snapshot
Ist ein Abbild einer virtuellen Maschine Bei der Erstellung eines Snapshots werden der Status, die
Konfiguration und die Datenträgerinhalte eines virtuellen Computers gesichert. Ein Snapshot kann
auch in laufenden Betrieb erstellt werden. Eine Rückkehr auf einen in einem Snapshot gescherten
Zustand ist problemlos möglich. Vor Veränderung einer Konfiguration ist daher die Erstellung eines
Snapshots zu empfehlen

<!-- Seite 21 -->

Betriebssysteme
Technische organisatorische maßnahmen ( Datenschutz )
Härtung des Betriebssystems: Keine Lokalen adminrechte, nur das was nötig ist installierst.
Nutzerrechte: Nur die Berechtigung die der Nutzer braucht ( GPO / AD Berechtigungen,
Lizenzverwaltung, Assetverwaltung )
Asset-tag: Eindeutige Nummerierung der Hardware für die interne Hardwareverwaltung
Schnittstellen ( HDMI, USB-C, VGA, DP )

<!-- Seite 22 -->

Industrie 4.0 ( fehlen noch Infos )
Darunter fällt
• Technische Assistenz
• Kognitive Systeme
• Internet of Things
• Sensoren
• Maschinen
• Big Data
• Smart Home
• Smartphones
•
Anwendungssysteme
Anwendungssysteme für betriebliche Aufgaben
• Warenwirtschaftsysteme WWS
• Customer Relationship Managment CRM
• Enterprise Resource Planning ERP
• Supply Chain Managment SCM
Shell Befehle
Windows
• Tree: Darstellung des Verzeichnisbares
• Chkdsk: Prüfung des Datenträgers
• Diskpart: Partitionierung von Datenträgern
• Del: löschen von Dateien Ordnen
• Ping:
nslookup:
• Tracert/racerroute
release/renew
• ipconfig
Linux
• Pwd: Zeigt das aktuelle Verzeichnis an
• Df: Zeigt den freien Speicherplatz
• Der gemounteten Systeme an
• IS: listet den Verzeichnisinhalt auf
• Rm: Löschten
Prozessoren und Speicher
Mehrprozessorsysteme --> mehrere Prozessore implementiert
Mehkernprozessoren --> haben mehrere Kerne in einem Prozessor
Hyperthreading: 1 physischer kern → 2 logische threads → für unterschiedliche arbeiten.
Mehrkernprozesse bieten höhere Leistung bei weniger Hardware ( nur ein Prozessor )
Multichannel: Ram kreuzt
Taktfrequenz: Wie viele Impulse der Prozessor in einer Sekunde produziert. Innerhalb eines solchen
Impulses/Takts können eine oder mehrere Anweisungen durchgeführt werden. --> nicht

<!-- Seite 23 -->

aussagekräftig bzgl. Der Verarbeitungsgeschwindigkeit eines Systems
Megahertz = 1.000.000 Hertz 1.0 Mhz
Gigahertz = 1.000.000.000 Hertz = 1.0 Ghz
SDR-SDRAM einfache Datenübertragungsrate
DDR-SDRAM --> Double Data Rate = doppelte Datenübertragungsrate = DDR Ram
SO-DIM → Ram Riegel in Notebooks ( Formfaktor )
Speichermodul DDR4-3200 ( Speichertakt 400Mhz, Prefetching Faktor 8 = 8 25,6 Gbyte Datenrate?
Rechnung
Übertragungsrate = Speichertakt ( in Mhz ) * Prefetching-Faktor * Busbreite ( in Bit ) : 8
Übertragungsrate 400Mhz * 8 (Faktor) * 64 ( 64 Bit Grundwissen) : 8 = 8 25.600 MB/s = 25.6 GB/s
Datenspeicherung und Ausfallsicherheit
Raid-System
Raid bedeutet, redundant Array of indepent disks, also eine Sammlung von unabhängigen
Plattenlaufwerken, die dazu dienen die Datenspeicherung einerseits ausfallsicherer zu machen und
anderer Seite eine flexible Vergrößerung / Austausch von Platten im laufenden Betrieb zu
ermöglichen
Backup: Dient der Datenwiederherstellung
Archivieren: Speicherung von Geschäftsdaten aufgrund von Gesetzen ( Finanzen )
In einem klassischen RAID-System sind mehrere Plattenlaufwerke und ein Raid Controller beteiligt,
der die Datenspeicherung organisiert. Eine Situation dieses Systems kann auch über eine Software
Lösung erfolgen

<!-- Seite 25 -->

Eine Entscheidung für Raid 1 ist gleichzeitig auch eine Backup-Lösung ?
Nein, es ist eine unabhängige Datensicherung auf externe Medien. Viren etc. werden bei Raid 1
mitgespiegelt und können dort Schäden verursachen und sind nicht als direktes Backup zu sehen.
DAS NAS SAN
DAS:: Direct attached storage ( Direkt auf/an den Server/PC )
SAN: Storage Area Network ( Für Große Unternehmen, Glasfaser anschluss )
NAS: Network attached storage ( Heimbereich, kleinunternehmen → direkt über Ethernet

<!-- Seite 26 -->

MQTT ( Broker, Publisher, Client )
Im Rahmen von IoT kommen immer wieder verschiedene Protokolle zum Tragen. Diese Protokolle
ermöglichen es viele Geräte in kurzer Zeit automatisiert zu steuern. Eins dieser IoT spezifischen
Protokolle ist MQTT.
1. Erkläre kurz, was MQTT ist.
Message Queuing Telemetry Transport, lightweigth und offenes Nachrichtenprotokoll für kleine
Sensoren und mobile Geräte die schlechte Netzwerkbedingungen haben. 1990er Jahre von IBM
entwickelt, später zu einem offenen Standard
2. Was ist der Hauptzweck von MQTT im Internet der Dinge (IoT)?
Beliebte Wahl für Vernetzung von Geräten in der Automatisierung, industriellen Automatisierung
und anderen IoT Szenarien. Zuverlässig, effizient ( geringe Ressourcen verbrauch ), schnell,
energieeffizient, skalierbar
3. Definiere die Begriffe:
- Publisher:
Veröffentlicher senden Nachrichten zu bestimmten Themen an den Broker
- Subscriber:
Abonnenten bekunden Interesse an den Themen und erhalten Nachrichten, die sich auf diese
Themen beziehen
- Broker:
Der Broker empfängt alle Nachrichten, filtert diese und entscheidend dann wer an ihnen interessiert
ist, also welche Subscriber die Themen abonnieret haben und sendet ihnen diese zu
- Topic:
Nachrichten werden zu einem Thema veröffentlicht, Themen werden verwendet, um Nachrichten in
Kategorien zu kategorisieren. Subscriber können diese Themen abonnieren und kriegen dann die
Nachrichten dazu

<!-- Seite 27 -->

4. Beschreibe das Publish/Subscribe-Modell in MQTT. Wie funktioniert es?
Es gibt Veröffentlicher und Abonnent, wenn ein Abonnent Interesse an einem Thema hat bekundet
er das Interesse an den Broker und der Broker sendet ihm Nachrichten zu diesem Thema. Themen,
wofür es kein Interesse gibt werden nicht an den Subscriber gesendet.
1. Erkläre kurz, was Quality of Service (QoS) im Kontext von MQTT bedeutet.
Mechanismen, die die Zuverlässigkeit bei der Nachrichtenübertragung zwischen einem Broker und
seinen Clients regelt
2. Nenne und erkläre die drei Stufen des QoS-Stufenmodells in MQTT.
a. QoS 0: At most once: Nachricht wird ohne Bestätigung zugestellt, keine Garantie, keine erneute
Übertragung
b. QoS 1: at least once: Sendet und empfängt die Bestätigung, wenn keine Bestätigung erfolgt,
erneute Nachricht, mehrfache Übertragung möglich
c. QoS 2: exactly once: Nachricht wird vom Absender als auch Empfänger bestätigt. Sie wird nur
exakt einmal zugestellt via Handshake-prozedur was zu einer hohen Verlässlichkeit sorgt aber zu
höheren Netzwerkbelastung
3. Warum ist QoS in MQTT wichtig? Welche Vorteile bietet es?
Nachrichtenzuverlässigkeit bei kritischen Information, dafür höhere Belastung fürs Netzwerk,
Wichtige Begriffserklärung
Authentisierung - Daten eingeben wie Kunden Login & Passwort
Authentifizierung - Daten werden überprüft
Accounting – Abrechnung der Benutzung
Datenschutz - Schutz personenbezogener Daten, Recht der informationellen Selbstbestimmung
(TOM , 8 Goldene regel https://www.wirtschaftswissen.de/arbeitssicherheit-
datenschutz/datenschutz/die-acht-grundregeln-des-datenschutzes/)

<!-- Seite 28 -->

Datensicherheit - genereller Schutz von Daten, unabhängig davon, ob ein Personenbezug besteht
oder nicht, sämtliche Daten eines Unternehmens
Datensicherung: Backup
Software
Programmierung
Primitäre Dateitypen
Int: Ganz Zahl
String: Zeichenfolge aus Zahlen Buchstaben und Sonderzeichen
Double: dezimal Zahl/fließkomma
char: 1 Zeichen
bool: true/False 1/0
Byte = 8 Bit
short, long

<!-- Seite 29 -->

Normalisierung

<!-- Seite 30 -->

Datenbankaspekte (NoSQL, SQL)
Normalisierung:
Ist ein Verfahrahren zur Verringerung von Datenredundanz in relationalen Datenbankmodellen
verbunden mit dem Ziel, die Datenkonsistenz zu erhöhen ( S271 Westermannverlag )
Anforderung an Datenbanksystem:
• Hard und Software an einen Dateiserver
• Redundant Netzteil/Netzzugriff/Plattensystem(Raid)
• Granulares Datenberechtigungsystem
• Zusammenarbeit auf Dateiebene
• Latenz gering
• Backups
• Möglicherfernzugriff
• Dynamische Speicherplatz Anpassung
• Normalisierung der Datenbank ( Normalisierung )
Allgemeine Anforderung
• Datenunabhängigkeit
• Parallel Datenzugriff ( Mehre Accounts )
• Gemeinsame Datenbasis
• Integrität/Sicherheit
• Wiederherstellungsverfahren ( Raid )

<!-- Seite 31 -->

Relationales Datenbanksystem
• Weite Verbreitung
• Gute Unterstützung
• Geprüfte Qualität
Nachteil
• Bruch zwischen objektiorienterter Programmierung und Dateihaltung
• Zwischen Lösung durch DRM
Objektorientiertes Datenbanksystem
• Sinnvolle Ergänzung zur objektiorienterter Programmierung
Nachteile
• Kaum vorbereitet
• Wenig know how in Firmen

<!-- Seite 32 -->

Netzwerk
VPN
End-to-End: ( PC zu PC )
Einzelene Geräte eine sichere Verbindung direkt miteinander über ein öffentliches Netzwerk
End-to-Site: ( PC zu Netzwerk, Homeoffice )
Verbindet einzelenes Gerät mit einem Netzwerk
Site-to-Site: ( Netzwerk zu Netzwerk)
Verbindet Netzwerk mit einem Netzwerk
Tunnel: Der Tunnel Mode kommt stets dann zum Einsatz, wenn zumindest einer der beteiligten
Rechner nicht direkt angesprochen, sondern als Security Gateway genutzt wird. → verschlüsselt
Transport: Im Transport Mode kommunizieren zwei Hosts direkt via Internet miteinander. → nicht
verschlüsselt, veraltet
OSI-Schichtenmodell und TCP/IP-Modell
127.0.0.1 local host
OSI
Das OSI-Referenzmodell ist ein Modell in der Netzwerktechnik, dass auf 7 Schichten basiert. Die
einzelnen Schichten haben klare Schnittstellen und bauen aufeinander auf. Das bedeutet, dass die
oberen Schichten die Funktionalitäten und Dienste der anderen Schichten nutzen. Damit erhöht sich
die Transparenz und die Austauschbarkeit einzelner Schichtmodule.
TCP/IP
Das TCP/IP-Modell ist ebenfalls ein Referenzmodell, das sämtliche Aspekte der Kommunikation im
Netzwerk abbilden soll. Das Modell besteht aus vier Schichten:
Anwendungschicht, Transportschicht Internetschicht Netzzugangschicht
Das TCP/IP-Modell ähnelt in seiner Struktur DoD-Schichtenmodell ( Department of Defense ) das in
den 1960er Jahren- deutlich früher als das OSI-Modell entwickelt wurde
Alle Deutsche Studtenden trinken verschiedene Sorten Bier - Merksatz

<!-- Seite 33 -->

OSI-Schicht TCP-Schicht Protokoll Verwendete Möglicher Fehler
Adressen
Anwedung/Application Anwendung/Application DNS, DHCP Serverkonfiguration
fehlerhaft
Darstellung/Presentation Anwendung/Application IMAP/HTTPS
Sitzung/Session Anwendung/Application IMAP/HTTPS
Transport Transport TCP/UDP Ports Verlust eines
Segments

<!-- Seite 34 -->

Vermittlung/Network Internet IPv4/IPv6, IP-Adressen Falsche IP-adresse
ICMP vergeben
Sicherung/Datalink Netzzugang/Network Ethernet MAC- Netzwerkkarte
Access Adressen defekt
Bitübertragung/Physical Netzzugang/Network Medium getrennt
Access
DNS(Domain Name System)
DNS ist ein wichtiger Dienst in IP-Netzwerken. Durch DNS wird die Namensauflösung realisiert. So
kann bspw. Der Name "google.de" in eine IP (z.B. 91.250.85.179) aufgelöst werden. Port
53(TCP/UDP)
SMTP ( Simple Mail Transfer Protocol )
SMTP wird schwerpunktmäßig zum Einliefern und Weiterleiten von Emails verwendet.
Häufig wird der TCP-Port 25 verwendet
465 ( TCP mit TLS/SSL )
IMAPS (Internet Message Access Protocol over TLS/SSL )
IMAPS ist die abgesicherte Variante von IMAP und wird zum Abruf von Emails verwendet.
Port: 993 TCP
TCP(Transmission Control Protocol) 20bit
TCP wird verwendet, um eine bidirektionale Verbindung zwischen zwei Netzwerkgeräten
aufzubauen. Durch TCP wird eine zuverlässige Übertragung gewährleistet, du alle Segmente mit
entsprechenden Nummern versehen werden. Verlorene Pakete können somit erneut angefordert
werden. Kein Port
UDP(User Datagram Protocol ) 8bit
BEI UDP wird keine Verbindung zwischen Sender und Empfänger aufgebaut. Stattdessen werden die
Datagramme ungesichert versendet. Dies ist bei Anwendungen empfehlenswert, die eine geringe
Latenz benötigen ( z.B. VOIP oder Onlinespiele ) kein Port.
Telnet ( Teletype Network )
Mit Hilfe von Telnet kam ein Fernzugriff auf diverse Systeme realisiert werden. Allerdings wird bei
Telnet keine Verschlüsselung genutzt und somit das Passwort im Klartext übertragen. Meist wird
deshalb SSH genutzt Port 23 / TCP
SSH ( Secure Shell )
SSH wird häufig verwendet, um einen abgesichtern Zugriff auf die Kommandozeile eines entfernten
Systems herzustellen. Port 22 ( TCP/UDP )
HTTPS ( Hypertext transfer Protocoll Secure )
HTTPS ist die abgesicherte Version von HTTP und wird genutzt, um Daten zwischen Webserver und
Webbrowser zu übertragen. Port 443 ( TCP )
DHCP ( Dynamic Host Configuration Protocoll )
Dieses Protokoll ermöglicht die Zuweisung der Netzwerkkonfiguration an einen Client ( HOST ) durch
einen Server
Port 67,68 UDP

<!-- Seite 35 -->

NFS ( Network File System )
Mit Hilfe von NFS kann über eine Netzwerkverbindung auf Dateien zugriffen werden. Das Protokoll
kann ursprünglich nur im UNIX-Bereich zum Einsatz. Port 2049 ( TCP )
SMB ( Server Message Block )
Das SMB-Protokoll ermöglicht es Netzwerkfreigaben bereitzustellen Port 445 TCP
ICMP ( Internet Control Message Protocol )
ICMP dient dem Austausch von Kontrol- und Fehlermeldungen in IP-Netzwerken. Der häufig genutzte
"ping"-Befehl setzt auf die ICMP-Paket-typen "Echo-Request" und "Echo Reply".
Wireless Local Area Network ( WLAN )
Access Point ( AP )
Für WLANs im sogenannten "Infrastructe Mode" agiert der Access Point als zentrale Sendestation,
die mit den einzelnen Teilnehmern kommuniziert.
IEEE 802.11n ( Institute of Electrical and Electronics Engineers )
Der 802.11n Standard des IEEE ist eine Erweisung des 802.11 Standards. Die n-Erweiterung
ermöglicht bspw. Größere kanalbandbreiten ( 40 MHZ ) und MIMO ( Multiple Input/Multiple
Output).
SSID
steht für "Service Set Identifier". Die SSID entspricht dem Namen des ausgestrahlten Netzwerks.
WLAN-Struktur mit WLAN Controller
WPA2 nutzt das Verschlüsselungsverfahren AES ( Advanced Encryption Standort )
Multi-SSID: Wlan und Gast Wlan, mehrere Wlans in einem Netzwerk
WPA2 Personal: Pre Sharey Key/vorkonfiguriertes Passwort, das auf dem Client eingetragen muss (
WPA2-PSK )
WPA2 Enterprise: Unternehmenseinsatz, hierbei wird vom Client eine Verbindung zu einem AAA-
Server ( meist Radius-Server ) hergestellt. Der generiert Verschlüsselungscodes, die von dem
jeweiligen Nutzer verwendet werden.

<!-- Seite 36 -->

Gebäudeverkabelung
Bereich Beschreibung Typische
Übergangsmedium
Primärverkabelung(Campusverkablung) In diesem Bereich wird die Lichtwellenleisten
Verkabelung zwischen Gebäuden
realisiert. Es sind häufig
Distanzen von mehreen hundert
Meter zu überbrücken
Sekundärverkabelung(Stockwerkverkabelung) In diesen Bereich wird die Lichtenwellenleiter
Verkabelung zwischen dem
Hauptverteiler des Gebäudes und
den Etagenverteiler realisiert.
Häufig treten auch hier
Kabellängen von über 100 Meter
auf
Tertiärverkabelung ( Etagenverkabelung ) In diesem Bereich wird die Kupferkabel
Verkabelung vom
Stockwerkverteiler zu den
Anschlussdosen realisiert. Häufig
wird hier eine sternenförmige
Struktur ausgehend vom Verteiler
umgesetzt. Die Streckenlängen
liegen typischerweise unter 100
Meter
LWL
- Singelemode-Fasern bieten die höchste Übertragungsrate. Kleines Glas, braucht stärkeren Laser, 5
fache Reichweite
- Multimode.Fasern günstiger herzustellen-kleinere Übertragungsrate – Glas nicht so rein – großes
Glas
- Kunststofffasern sind für kurze Strecke gut geeignet
-Aufgrund hoher Kosten für Verlegung über lange Strecken werden meist sehr hochwertige Fasern
vergraben
Lichtwellenleiter haben immer einen Kern aus Glas
Multimode-Fasern erlauben höhere Übertragungsraten, da mehrere Modi gleichzeitig
ausbreitungsfähig sind.

<!-- Seite 37 -->

Konfiguration von IP-Adressen
Der eingetragene Standardgateway befindet sich in einen anderen Netz, da der Client im
"192.168.99.12/24" Netz ist.
Der Standartgateway muss ins selbe Netz wie der Client. z.B. 192.168.99.1
Vorteile von DHCP
• Die Verwaltung und Vergabe von IP-Adresse wird automatisiert

<!-- Seite 38 -->

• IP-Adresskonflikte werden vermieden.
• Verringerter Konfigurationsaufwand bei dem Endgeräten
DHCP Discover
Der DHCP-Client Schicht eine Anfrage an alle erreichbaren Geräte. Als Quell-Adresse wird 0.0.0.0 und
als Ziel 255.255.255.255 verwendet. Jedes Gerät nimmt die Anfrage an und alle erreichbaren DHCP-
Server verarbeiten die Nachricht weiter.
DHCP Offer:
Jeder angesprochene DHCP-Server mit freien Adressen sendet ein Angebot ( Offer ) als Antwort auf
ein DHCP Discover. Dieses Angebot ist an die MAC-Adresse des angefragten Geräts adressiert.
Enthalten ist ein Vorschlag für eine IP-Adresse inkl. Subnetzmaske und Gültigkeitsdauer ( Leasetime )
DHCP Request:
Der DHCP-Client akzeptiert eines der erhaltenen Angebote und informiert den zugehörigen DHCP-
Server.
Nach Hälfte der Lease-Time sendet der Client erneut einen Request, um die Zeit zu verlängern.
DHCP Acknowledge:
Der DHCP-Server bestätigt dem Client die Zuweisung der IP-Adresse an den Client GGF. können noch
weitere Informationen wie IP-Adresse des DNS-Servers übermittelt werden.
Man kann eine MAC-Adressen-Liste auf dem DHCP-Server hinterlegen und nur Geräte auf der Liste
erhalten eine IP.
IPv6
• IPv4 u IPv6 können mithilfe geeigneter Mechanismen ( z.b. Tunnelmechanismen ) parallel
betrieben werden.
• IPv6 hat 2128 Möglichkeiten zur Bildung von Adressen.
• Ein Hauptgrund für die Entwicklung von IPv6 ist der erweiterte Adressraum. ( 128bit statt
32 Bit )

<!-- Seite 39 -->

• Win10 unterstützt IPv6
AF00:0000:0000:E255:000:0001:332D:81EA
Folgende Regeln sind zu beachten, um die verkürzte Darstellung von IPv6-Adressen zu ermitteln:
Führende Nullen in einem Block von 4 Hexadezimal-Ziffern können weggelassen werden.
Beispiel: 002B --> 2B
• Benachbarte Blöcke von Nullen können durch "::" ersetzt werden. Allerdings kann dies
nur an einer Stelle der IPv6-Adress angewandt werden, die ansonsten die IP-Adresse
nicht eindeutig wäre. Bei mehreen Blockfolgen bestehend aus Nullen wird die erste
Blockfolge ersetzt.
• Beispiel A21B:C756:0000:0000:1234:0000:0000:01AB --> A21B:C756::1234:0:0:1AB
Bei Subnetzen wird standardmäßig ein /64 Netz gegeben
Bedeutung hinter/64
Die ersten 64 Bits ( 128 bit lang ) IPv6 Adresse den Netzanteil der Adresse definieren. Dieser
Netzanteil wird meist als Network Prefix bezeichnet und kann auch Bits für die Subnetzbildung
beinhalten. Die verbleibenden 64 Bit sind die Interface ID, die mit dem Hostanteil bei IPv4
vergleichbar ist
Wie viele IP-Adressen bei /64 ?
2^64
Warum ist /64 die Regel bei Ipv6?
Ist für Autoconfiguration angedacht, Hierbei entspricht die Interface ID einem zufälligen Wert oder
der EUI64( Extended Unique Identifier 64BIT) der Netzwerkkarte fasst, ist die Vergabe eines /64
Subnetzes normal
Was machen Privacy Extension?
Sind Erweiterungen zu IPv6 die zum Schutz der Privatsphäre keinen direkten Rückschluss auf die
Hardwareadresse des Nutzers aus der IPv6 Adresse zulässt. Für öffentlich zugängliche Dienste
werden die Privacy Extension teilweise deaktiviert.
Was ist DS-Lite
Dual Stack Lite --> keine öffentliche IPv4 Adresse, sondern eine private IPv4-Adresse und ein globales
IPv6 Präfix zugewiesen. Soll Ipv4 Datenverkehr transportiert werden, werden am Endkunden-Router
Pakete mit einer privaten IPv4-Adresse in IPv6 Pakete verpackt. Man spricht hier von einer 4-in-6-
Tunnel Technologie. Am Endpunkt des 4-in-6-Tunnels wird der IPv5-header entfernt. Um das Paket
mit der privaten IPv4-Adresse in das öffentliche IPv4-Netz einzuschleusen zu können, nimmt der
Internet Service Provider eine Adressumsetzung von der privaten IPv4-Adresse auf öffentliche IPv4-
Adressen vor. Man spricht hier von Carrier Grade NAT ( CG-NAT )
RFC4291 Ipv6 Erklärung - Hexa ( 16^x )
2019:abcd:0123:1200:0000:0000:0000:0000\64
2019:abcd:123:1200::\64
2019:abcd:0123:1200 --> Network Prefix --> 64bit gesamt --> 16bit pro "::" teil
0000:0000:0000:0000 --> Interface identifier --> 64bit

<!-- Seite 40 -->

Gesamt 128bit - 1 Zahl = 4 bit ( hexadezimal )
Network Prefix | Subnetze | Interface identifier
2019:abcd:0123:12 | 00: | 0000:0000:0000:0000\56
1200 --> 0001 0010 0000 0000 ( binär )
Kupferkabel
POE: Power over Ethernet, 20W ungefähr
Cat 5€ 100 MHz bis zu 1Gbit/s möglich (veralte)
Cat 6 (a) 250-500 MHZ bis zu 10 Gbit/s für normale Anwendungen ausreichend.
Cat 7 600-1000 Mhz bis zu 10 Gbit/s, wird für die meisten Installationen genutzt
Cat 8 1600-2000Mhz bis zu 25 Gbits oder auch 40Gbits/s auf 30m. Meister Einsatz in Rechenzentren
Kupferkabel --> einfache Handhabung, wird für Etagenverkabelung benutzt da Endnutzer kein
Glaserfaseranschluss haben
Fernwartung
VNC
VNC steht für Virtual Netzwork compaling.. UNC basierte Software nutzt das plattformunabhängige
Remote Frame Buffer Protocol. VNC zeigt den Bildschirminhalt eines entfernten Geräts(Server) auf
dem lokalen Rechner ( Client ) an. Tastatur und Mauseingaben können an den Client gesendet
werden. Implementierung sind bspw. Real VNC oder Tight VNC
RDP:

<!-- Seite 41 -->

Steht für Remote Desktop Protokoll. RDP ist ein von Microsoft entwickeltes Netzwerkprotkoll zur
Übertragung von Bildschirminhalten und Peripheriefunktionen wie Maus, Tastatur oder Audio. Bei
RDP-Sitzungen kommt eine TLS-Verschlüsselung zum Einsatz. Inzwischen sind RDP-Clients für die
meisten Betriebssysteme verfügbar.
Clientless:
Eine aktuelle Entwicklung ist der Einsatz von Clientless Remote Access. Ein Vorteil ist, dass hierbei auf
dem entfernten Gerät keine zusätzliche Software installiert werden muss. Je nach Implementierung
können bspw. Die genannten Protokolle VNC, RDP oder SSH genutzt werden.
Arbeits- und Geschäftsprozesse
Marktformen
Monopol
Von einem Monopol spricht man, wenn der gesamte Markt für ein ökonomisches Gut nur von einem
einzigen Anbieter von dem Monopolist bedient wird. Dieser kann den Monopolpreis für das Gut
bestimmen.
Oligopol
Beherschen dagegen einige wenige Marktteilnehmer auf Angebots oder Nachfragerseite den markt
handelt es sich um ein Oligopol. Es wird unterschieden zwischen Angebotsoligopol (wenig Anbieter,
viele Nachfragen) und Nachfrage oligopol ( geringe Anzahl nachfragen, viele Anbieter )
Polypol
Viele Anbieter und viele Nachfrager

<!-- Seite 42 -->

Käufermarkt: Mehr Angebot als Nachfrage
Marktgleichgewicht: 50/50 Gleichgewichtspreis
Verkäufermarkt: Mehr Nachfrage als Angebot
Leitungssysteme
Einliniensystem
Jede Stelle bezieht Weisungen von nur einer übergeordneten Stelle ( Instanz )
Vorteile
Eindeutige Anordnungsbefugnisse
Keine Kompetenzschwierigkeiten
Leichte Kontrollen
Nachteile
Lange Befehls Wege
Überlastung der Geschäftsleistung
Schwer fällig
Lange Dienstwege
Stabliniensystem
Zuordnung von Stabstellen: beraten und informieren: kein Anordnungsbefugnis
Vorteile
Siehe Vorteile Einlinenensystem
Entlastung der Geschäftsleitung
Entscheidungsverbesserung

<!-- Seite 43 -->

Nachteile
Reibereien zwischen Stab und Linie
Hohe Kosten
Trennung von Verantwortung(Linie) u Entscheidungsvorbereitung(Stab)
Mehrliniensystem
Eine Stelle erhält Anweisungen von mehreren übergeordneten Stellen.
Vorteile
Weisung nur durch Spezialisten
Kurze Weisungswege
Entlastung der Geschäftsleitung
Nachteile
Gefahr der Kompetenzüberschreitung --> Konflikte
Konfliktgefahr, weil mehrere Vorgesetzte
Hohe Koordinationsbedarf
Matrixsystem
Mehrdimensionale Organisationshalter, Aufteilung der Leitungsfunktionen

<!-- Seite 44 -->

Vorteile
Bereichsaufteilung
Kurze Kommunikationswege
Abdeckung von Aufgaben
Flexible Berücksichtigung von wettbewerbsrelevanten Aspekten
Nachteile
Hierarchie unklar
Dezentral - Jeder arbeitet seinem Bereich für sich
Ggf. Aufgabenüberschneidung
Autoritären Führungsstil
Führungskraft schifft alle Entscheidungen. Die Mitarbeiter werden nicht in den Entscheidungsprozess
mit einbezogen und sie werden nicht nach ihrer Meinung oder ihren Ideen gefragt
Kooperativer Führungsstil
Der kooperative Führungsstil bzw. der demokratische Führungsstil ist einer der klassischen
Führungsstile. Er zeichnet sich dadurch aus, dass die Führungskräfte und ihre Mitarbeiter als Team
zusammenarbeiten. Die Entscheidungen trifft das Team also gemeinsam und jeder hat ein
Mitspracherecht. Jeder soll seine Ideen, Kritik und seine Meinung äußern. Die Führungskräfte
delegieren Aufgaben und Verantwortungsbreiche an ihre Angestellten, damit diese sie
eigenverantwortlich erledigen.
Prokura
Die Prokura zu allen Arten von gerichtlichen und außergerichtlichen Geschäften und
außergerichtlichen Geschäften, die der Betrieb eines Handelsgewerbes mit sich bringt.
Die Prokura kann nur vom Inhaber oder gesetzliche Vertreter durch ausdrückliche Erklärung erteilt
werden. Die Prokura kann als Einzelprokura oder als Gesamtprokura erhielt, worden.
Einfache Vollmacht: Prokura gibt mehr Macht, muss ins Handelregister eingetragen sein

<!-- Seite 45 -->

Unternehmensziele und
Wirtschaftlichkeitsüberlegungen
Unternehmensleitbild
Das Unternehemensleitbild beschreibt die Grundstücke, das Selbstverständnis eines Unternehmers.
Es gibt eine Antwort auf die Frage: Was ( wer wollen wir sein? Was ist unsere Aufgabe? Was ist uns
wichtig? Das könnte bei der ConSystem Gmbh ( z.b: der Anspruch sein, das beste IT-Haus zu sein.
Dieser Anspruch sollte sich dann im täglichen Handeln widerspiegeln. Kunden sollen innovative,
flexible und offizielle Lösungen geboten werden, die einen Mehrwert für sie schaffen und
zukunftsfähig sind.
ökonomische Ziele
Erhöhung des Marktanteils
Kostenreduktion
Gewinnmaximierung
Expansion
Marktführerschaft
Fixe Kosten
Sind ein Teil des Gesamtkosten eines Unternehmens. Sie bleiben innerhalb einer bestimmten Zeit
konstant und fallen unabhängig von der Beschäftigung an Z.b: Wartungs oder Garantiekosten
Variable Kosten
Bilden den zweiten Teil der Gesamtkosten und verändern sich je nach Bezugsgröße z.B. der
Beschaffung.
Vorteil Leasing
• Geringerer Kapitalbedarf zum Zeitpunkt der Anschaffung
• Kreditrahmen des Unternehmens wird nicht beansprucht.
• Gleichbleibende Leasingraten ermöglichen klare Kalkulationsgrundlagen je nach
Vertragsgestaltung
• Möglichkeit von Service und Betreuung
• Möglichkeit des Geräteaustausches bei technischen Neuerungen
• Möglichkeit der Kaufoption nach Ablauf der Nutzungszeit
Vorteile Kreditfinanzierung
Als Eigentümer komplette Verfügungsgewalt über das Gerät
Gesamtkosten meist geringer als bei Leasing
Keine Bindung an Grundmietzeiten o.#
Keine Nutzungsfristen des Gerätes
Eigentum = Eigentümer ist der Leasinggeber
Besitzer = Besitzer ist der Leasingnehmer
Eigenkapitalrentabilität: Gewinn * 100 / eingesetztes Kapital
Wirtschaftlichkeit: Ertrag / Aufwand
Produktivität: Ausbringungsmenge / Einsatzmenge

<!-- Seite 46 -->

Vertragsbestandteile: 2 übereinstimmte Willenserklärung ( Unterschrift/kopie, volljährig/berechtig
sein), Die Übergabe, Annahme,
Annahme verweigern wenn: Paket falsch adressiert, Paket äußerlich beschädigt, Anzahl der
Paketstücke stimmt nicht überein
Rechtsformen:
• Eingetragene Kaufmann
o Einfachste aller Rechtsformen, haftest mit allem
• Gbr Gesellschaft bürgerlichen Recht
o Fahrgemeinschaft ( Personen die sich zusammenfinden, Wohngemeinschaft WG,
Gesellschaftsvertrag, haftest mit allem )
• OHG Offene Handels Gesellschaft
o Gruppe von Leuten die sich zusammengeschlossen haben ( Personengesellschaft ( für
eine Firma ), Alle dürfen vetreten aber alle haften auch, Gewinn wird aufgeteilt )
• KG Kommandit Gesellschaft
o Komplementär: Darf alleine über alles entscheiden außer verkauf der Firma, haftet
privat
o Kommandist: Nur Geldgeber, haftet auch nur damit
• GmbH Gesellschaft mit beschränkter Haftung, juristische Person ( Form Recht eine Person,
darf Verträge machen )
o Haftest nur mit dem Kaptial, Startkapital 25.000€,
• AG Aktien Gesellschaft, juristische Person ( Form Recht eine Person, darf Verträge machen )
o Börse, gibt’s Aktien raus, Haftest nur mit dem Geld, was du reinsteckst, Startkapital
50.000€
• GmbH & Co. KG ( Combi aus beidem )
Wirtschaftssektoren: primär, sekundär, tertiär
Primär: Bergbau/Landwirtschaft/Fischerrei ( Rohproduktion )
sekundär: Industrie/handwerk
tertiär: Dienstleistung
ABC Analyse
A Kunden Großteil des Geldes darüber – wichtig für die Firma
B Kunden Potential - können
C Kunden kein Potential
Der Beschaffungsprozess
Wertschöpfung
Ist eine in den Wirtschaftsbereichen erbrachte wirtschaftliche Leistung. Die Wertschöpfung ist die
Differenz der erbrachten Leistung in einem Unternehmen abzüglich der Vorleistung
Kernprozesse dienen der Wertschöpfung im Unternehmen, sie sind zentral und erbringen die
Hauptleistung im Unternehmen. Hier fließen die meisten Ressourcen ein, wie z.b. der
Beschaffungsprozesse, die Herstellung eines Produktes/einer Dienstleistung, die Auftragsabwicklung
etc.

<!-- Seite 47 -->

Unterstützende Prozesse sind nicht wertschöpfend, aber notwendig, um Kernprozesse ausführen zu
können z.B. Personalwesen, Buchhaltung, Lagerhaltung
Güter
A Güter: hoher Wert, geringe menge
B Güter mittlerer Wert, mittlere menge
C Güter: geringer Wert, große Menge
Crossselling: 2tes Produkt dazu verkaufen ( convertible Laptop mit extra Stift verkaufen )
Upselling: teures Produkt verkaufen ( bessere Laptop als benötigt )
Pre-sale: Probefahren/Demo/kostenlose testphase
Kundenkommunikation:
Geschlossene Frage: Ja/nein
Offene Frage: Welches Betriebssystem benutzt du?
Maßnahmen Kundenzufriedenheit:
Rabatte, Sonderaktionen, Feedback, Qualitätversprecheneinhalten, pünktlich liefern
Kundenbedürfnisse identifizieren:
Umfrage, Feedback auswerten, Marktanalyse, Befragungen ( Email/persönlich),
Was kann man machen um ein Betriebsergebnis verändern:
Wareneinkauf optimieren, Herstellungskosten, Feuern von Leuten,
4Ohrenmodell
Sachaspekt: Wertfrei
Selbstaussage: Was möchtest du ausdrücken
Beziehung: Ich gebe was über die Beziehung preis
Appel: Ich rufe zu einer Handlung auf
Sachebene: Ampel ist grün
Selbstaussage: Ich habe es eilig
Beziehung: du brauchst meine Hilfsstellung
Appell: Gib Gas

<!-- Seite 48 -->

Fragen aus den AO2020 Prüfungen /Misc Stuff
Bennen Sie 5 Aspekte, die in solch einem Lastenheft üblicherweise enthalten sind
• Kurzvorstellung des Auftraggebers
• Definition des Projektziels
• Beschreibung der bestehenden IT-Infrastruktur
• Zeitrahmen der Umsetzung des Projekts
• Funktionale Anforderungen
• Rahmenparameter IT-Security und Datenschutz
Vertraulichkeit:
vertrauliche Informationen dürfen nicht unberechtigt zur Kenntnis genommen oder weitergegeben
werden.
Integrität:
die Korrektheit der Systeme und Informationen muss gegeben sein.
Verfügbarkeit:
autorisierte Benutzter oder Administratoren müssen Zugang zu den Informationen/Systemen haben

<!-- Seite 49 -->

KPI Key-Performance-indikator
Random Stuff ( ungeordnet )
OSI-Schicht TCP-Schicht Protokoll Verwendete Möglicher Fehler
Adressen
Anwendung/Application Anwendung/Application DNS, DHCP Serverkonfiguration
fehlerhaft
Darstellung/Presentation Anwendung/Application IMAP/HTTPS
Sitzung/Session Anwendung/Application IMAP/HTTPS
Transport Transport TCP/UDP Ports Verlust eines
Segments
Vermittlung/Network Internet IPv4/IPv6, IP-Adressen Falsche IP-adresse
ICMP vergeben
Sicherung/Datalink Netzzugang/Network Ethernet MAC- Netzwerkkarte
Access Adressen defekt
Bitübertragung/Physical Netzzugang/Network Medium getrennt
Access

<!-- Seite 50 -->

USV
3 Arten
Klasse 1 VFI Online doppelwandler: Voltage Frequency Indipendent ( unabhängig )
Schützt vor Stromausfall, Unterspannung, Überspannung, Frequenzschwankung, Oberschwinkung →
läuft durchgehend über Batterie und gibt gleichmäßig Strom aus

<!-- Seite 51 -->

Klasse 2 VI: Line Interaktive/Netz Interaktive: Voltage indipendent ( unabhängig )
Stromausfall, Unterspannung, Überspannung → Schaltet sich bei Stromausfall und Spannung
Schwankung ein
Klasse 3 VFD: Offline Voltage & Frequenc Dependent ( abhängig )
Stromausfall mit Verzögerung 10ms → Schaltet sich nur bei Stromausfall ein
DSL Arten
DSL: Digital Subscriber Line
VDSL: Very High DSL
SDSL: Synchron DSL → Upload/Download gleich

<!-- Seite 52 -->

ADSL: Asynchronell DSL → Download höher/Upload niedriger
MODEM: Übersetzer von Analog/Digital
Netzwerk Komponenten/Vererbung
DMZ: Demataralized Zone → Extra Zone die nochmal extra durch die Firewall müssen, z.B.
Emailverkehr, da dort Viren etc. kommen könnte
VLAN: Virtual Local Area Network → unterschiedliche Netzwerke einrichten in einem lokalen
Netzwerk, Kollisionvermeiden, Priorisierung, Mehrere Switche mögliche, ohne Sicherheitsbedenken
untereinander kommunizierbar,
Trunk: Kommunikation zwischen VLANS über mehrere Router siehe Bild ( 4 und 8 Port in dem Bild ),
wird beim durchgehen getagged – wenns raus geht wird’s entfernt.
Unterschied Subnet/Vlan:
Subnet Hardware
Vlan: virtuell/Software
Firewall: besteht aus Hardware/Software, Alles kann raus, nichts kann Rein ohne Kontrolle,
Paketfilter
Proxy: geht über einen Stellvertreter übers Netz ( VPN Anbieter als Beispiel ), Proxyregeln, Ports
verbieten, Websiten verbieten,
Einführung Software/Hardware
Rollout Software:
• Komptabilität
• Neuinstallation oder Update
• Wie soll sie verteilt werden?
• Zeitpunkt ( Downtime / Maintence )
Hardware Rollout:
• Datenmigration
• Dokumentation von Asset-Tags
• Komptabilität
• Backups

<!-- Seite 53 -->

• Terminabstimmung
• Einsatz eines Rolloutmanagers ( Überwachung )
6 Phasen Softwareenwicklung:
• Anforderungsphase
• Konzeptionsphase
• Entwicklungsphase
• Qualitätssicherungsphase
• Releasephase
• Wartung & Optimierungsphase
Marketingkonzept, das die Schritte beschreibt, die ein Kunde durchläuft, bevor er eine
Kaufentscheidung trifft.
Aida-Formel, Marketing konzept,
Attention: Aufmerksamkeit des Kunden generieren
Interest: Kunden am Produkt interessieren
Desire: Kunden davon Überzeugung das er es haben will
Action: Kunde kauft sich das Produkt
Eisbergmodell, Sichtbaren und unsichtbaren Aspekte:
SWOT-Analyse
Strength, Weakness, Oppertunity, Threats → Stärken Schwächen Möglichkeiten Gefahren bei
einem Projekt
Kickoffmeeting:
Initialmeeting, Alle Mitglieder des Projekts nehmen Teil
Forming: Alle lernen sich kennen
Storming: Konfliktphase
Norming: Strukturierungsphase
Performing: Hochleistungsphase

<!-- Seite 54 -->

Projektabschluss
Gegenstand der Abnahme: Genaue Bezeichnung des abgenommenen Objekts (z.B. Bauwerk,
Maschine, Software)Beteiligte Personen: Name und Funktion des Auftraggebers und
Auftragnehmers sowie ggf. weiterer anwesender PersonenOrt, Datum und Uhrzeit: Ort, Datum
und Uhrzeit der AbnahmeFeststellungen: Ergebnis der Abnahme (z.B. mängelfrei, mit Mängeln),
Beschreibung der festgestellten MängelVereinbarungen: Vereinbarte Fristen zur Behebung der
Mängel, ggf. weitere VereinbarungenUnterschriften: Unterschriften des Auftraggebers und
Auftragnehmers sowie ggf. weiterer anwesender Personen
Itsupport 1st level 2nd level 3rd level etc.
Nachhaltigkeit ( Green IT )
IMAC/R/D Zyklus: Alle Maßnahmen, die im Lebenszyklus von Hardware-Komponenten anstehen,
lassen sich unter dem Begriff IMAC/R/D (Install, Move, Add, Change, Remove and Dispose)
zusammenfassen. Von den IT-Teams erfordern sie meist kurze Reaktions- und Durchführungszeiten –
mit hohem Ressourceneinsatz.

<!-- Seite 55 -->

Korrektes Recyclen von IT-produkten/Remarketing, Speicherausbauen/löschen/schreddern,
Energiesparmodus, PC Runterfahren, Smartsteckdosen/Mehrfachstecker, Stromabschaltung in
den Büros, Energiesparlampen, Virtualisierung, Performante Netzteile/Hohen Effienzgrad,
Service-Level-Agreement / SLA
Angabe vom Wartungsgegenstand → Anzahl der Systeme/Standorte
Information der Dienstleistung & Einsatzzeiten → Mo-Fr 8 – 16 Uhr
Ansprechpartner
Angabe Mängel und Gewährleistung
Datenschutz/Sicherheit
Regelung und Haftung bei Datenverlust
Höhe der Vergütung
Laufzeit des Vertrages
Informationen zu Nebenabreden
Zusatzleistungen → Notrufhotline, kostet extra, außerhalb der Geschäftszeiten

<!-- Seite 56 -->

Eventuelle Themen
