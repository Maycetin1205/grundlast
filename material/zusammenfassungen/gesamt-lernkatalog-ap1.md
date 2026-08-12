---
herkunft: Lernkatalog nach U-Form-Pruefungskatalog, Fachinformatiker Systemintegration, Ausbildungsjahr 2
quelldatei: Lernkatalog AP1.pdf
datum: 2026-08
art: zusammenfassung
verdichtet: nein
extraktion: pdfplumber, Rohtext ohne Nachbearbeitung
---

# Lernkatalog AP1

> Automatisch aus PDF extrahiert (69 Seiten). Layoutartefakte sind moeglich,
> der Wortlaut ist unveraendert. Seitenmarken als HTML-Kommentar erhalten.


<!-- Seite 1 -->

Fachinformatiker für Systemintegration Ausbildungsjahr 2
Dieser Lernkatalog dient zur Vorbereitung auf die AP1 der Fachinformatiker Berufe.
Bearbeitet werden hier alle Teilbereiche nach dem U-Form Prüfungskatalog. Ebenso wird hier
Bezug auf bereits bekannte Lernmaterialien genommen und auch Verknüpfungen zu
Altprüfungen gezogen.
Fragenkomplex 1: Planen, Vorbereiten und Durchführen von
Arbeitsaufgaben in Abstimmung mit den Kundenspezifischen Geschäfts-
und Leistungsprozessen (Projektmanagement)
01 Merkmale und Methoden des Projektmanagement kennen, beurteilen,
anwenden können
Merkmale eines Projektes
Projekte lassen sich durch spezifische Merkmale definieren:
Jedes Projekt hat ein Vorgegebenes Ziel, meist basierend auf eine Problemstellung.
Projekte kann man auch als Problemlösung für neuartige Aufgaben mit großem Spektrum sehen.
Solche Projekte werden auch meist nur einmal durchgeführt, oder können bspw. Bei mehreren
Standorten auch als Blueprint dienen.
Aus der DIN 69901-5 lässt sich auch folgende Definiton zu einem Projekt finden:
Ein Projekt ist ein Vorhaben, das im Wesentlichen durch Einmaligkeit der Bedinugngen in ihrer
Gesamtheit gekennzeichnet ist.
Es kennzeichnet sich aus durch:
- Eine Zielvorgabe
- Zeitliche, finanzielle, personelle oder andere Begrenzugen
- Eine projektspezifische Organisation
Strukturplan / Projektstrukturplan

<!-- Seite 2 -->

Ein Strukturplan ist im Großen und Ganzen die Gliederung eines Projektes in einzelne
Elemente.
Das Primäre Ziel ist hier, alle Elemente in planbare und kontrollierbare Teilaufgaben und
Arbeitspakete zu zerlegen. So erhält man ein ordentlichen Gesamtüberblick des gesamten
Projektes
Hier gibt es 3 konkrete Ansätze:
- Top-down Ansatz:
Das Projekt wird zuerst als ganzes betrachtet, dann werden einzelne
Teilaufgaben/Teilprojekte identifiziert und definiert, woraus sich dann die Arbeitspakete
und einzelnen Teilaufgaben festlegen.
- Bottom-Up:
Der Bottom-Up Ansatz ist entgegengesetzt dem Top-Down Ansatz. Welche
Arbeitspakete sind Nötig, in welche Teilprojekte lassen sich diese dann definieren, um
das Ziel des Gesamtprojektes zu erreichen bzw. dieses zu definieren?
- Yo-Yo Ansatz:
Beim Yo-Yo Ansatz wird von beiden Richtungen gleichzeitig geplant
Lasten und Pflichtenheft
Lastenheft:
Das Lastenheft beschreibt die Anforderungen und Erwartungen des Auftraggebers an das
Projekt. Es legt fest, was das zu entwickelndes System oder Produkt leisten soll, ohne jedoch
technische Details zu definieren.
2 von 69

<!-- Seite 3 -->

Pflichtenheft:
Das Pflichtenheft wird vom Auftragnehmer erstellt und beschreibt, wie die im Lastenheft
definierten Anforderungen umgesetzt werden. Es enthält konkrete technische Lösungen,
Verfahren und Vorgehensweisen, um die Anforderungen zu erfüllen.
Netzplan
Nach DIN 69 900 ist ein Netzplan wie folgt definiert:
Ein Netzplan ist eine grafische oder tabellarische Darstellung einer Ablaufstruktur, die aus
Vorgängen bzw. Ereignissen und Anordnungsbeziehungen besteht.
Ein solcher Netzplan hilft, eine Terminplanung zu bilden.
Es hilft, eine Gesamtdauer des Projektes festzulegen und eine zeitliche und logische Abfolge
der Vorgänge im Projekt zu definieren.
Hierraus können sich dann kritische Pfade und Vorgänge identifizieren, die essenziell wichtig
für das geplante Projektende sind und hilft, Puffer und Zeitreserven herauszufinden.
FAZ FEZ
Vorgang Beschreibung
Dauer GP FP
SAZ SEZ
Vorgang Vorgangs-ID (A, B, C ...)
Dauer Dauer in Arbeitstagen
FAZ Frühester Anfangszeitpunkt
FEZ Frühester Endzeitpunkt
SAZ Spätester Anfangszeitpunkt
SEZ Spätester Endzeitpunkt
GP Gesamtpuffer (GP = SAZ – FAZ oder GP = SEZ – FEZ)
FP Freier Puffer (FP = FAZ des Nachfolgers – FEZ des Vorgangs)
Vorwärtsrechnung: Prozess beginnt mit dem Startpunkt des Projekts, nach vorne Arbeiten
3 von 69

<!-- Seite 4 -->

Beispiel:
Aufgabe A hat eine Dauer von 3 Tagen und keine Vorgänger, also ist der FAZ der 1. Tag und
FEZ der 3. Tag.
Aufgabe B hat eine Dauer von 5 Tagen und ist von Aufgabe A abhängig. Der FAZ von B ist der
4. Tag (EF von A + 1), der FEZ von B ist der 8. Tag (ES von B + Dauer).
Rückwärtsrechnung: Spätester Start- und Endzeitpunkt
Man beginnt bei der Letzten Aufgabe.
Angenommen, das Projekt hat eine Gesamtdauer von 10 Tagen. Aufgabe C dauert 5 Tage
Aufgabe C ist der letzte Vorgang und hat keine Nachfolger, also ist der SEZ der 10. Tag und
der SAZ der 6. Tag (LF - Dauer).
SMART-Prinzip
Wird benutzt um Ziele zu definieren, und jedes Ziel sollte auch die Eigenschaften des Prinzipes
beinhalten.
Buchstabe Bedeutung Beschreibung
S Spezifisch Ziele müssen eindeutig definiert sein
M Messbar Ziele müssen messbar sein
A Attraktiv Ziel ist Ansprechend bzw. Erstrebenswert
R Realistisch Das gesteckte Ziel muss möglich und realisierbar sein
T Terminiert Das Ziel muss mit einem fixen Datum festgelegt werden können
Meilensteine
Meilensteine sind Bestandteil des klassischen Projektmanagements, an einem Meilenstein wird
ein bestimmtes Ziel erreicht oder ein definiertes Ergebnis erarbeitet.
Das Erarbeiten / Erreichen aller Meilensteine ist wichtig für das Gelingen eines Projektes
Wasserfallmodell
4 von 69

<!-- Seite 5 -->

Im Wasserfallmodell „fließt“ eine Projektphase in die Nächste – immer in eine Richtung, ohne
die Reihenfolge zu verändern, wie ein Wasserfall.
Phasen sind dadurch klar abgegrenzt.
Scrum (Agiles Modell)
Scrum ist ein Agiles Modell im Projektmanagement, was darauf basiert, flexible und iterative
Prozesse zu verwenden, um das Projekt effizient steuern und entwickeln zu können.
Ein Sprint ist eine festgelegte Entwicklungsphase, in der Regel 1-4 Wochen wo es eine
Sprintplanung und ein Sprint-Review gibt. Dieser darf nicht unterbrochen werden.
In einem Daily Scrum wird bspw. In 15 Minuten der aktuelle Stand geteilt, oft auch “Standup”
genannt. Hier werden Hindernisse versucht frühzeitig erkannt und behoben zu werden.
Folgende Rollen sind im Scrum relevant:
Scrum Master Sorgt für Einhaltung der Scrum Regeln. Beteiligt sich nicht an der
Entwicklung
Entwicklerteam 3 und höchstens 9 Personen. Entwickler, Tester und Architekten
Productowner Für Produkt-Backlog zuständig. Schnittstelle zwischen Kunde und
Projektbeteiligten.
**Stakeholder Alle Personen, die Interesse an einem Projekt haben und
beinflusst werden können. Bspw. Kunden, Investoren aber auch
Führungskräfte
Gantt-Diagramm
Zeitliche Abfolge von Aktivitäten grafisch in Form von Balken auf einer Zeitachse.
Dies hilft, eine realistische Terminierung zu erhalten, wie die Aufgaben miteinander verknpüft
sind und welche evtl. Sich überschneiden und Parallel laufen.
Hier sind auch wichtige Bestandteile der Projektphasen ersichtlich. Sinnvoll ist es zmb.
Meilensteine mit dem Gantt-Diagramm zu Verknüpfen
5 von 69

<!-- Seite 6 -->

Die Teamphasen zur Teamentwicklung
Phase 1: Forming (Kontakt)
In der ersten Teamphase ist der Hauptfokus das Formieren, kennenlernen der Mitglieder und
Klarstellung der Rollen und auflösen von anfänglicher Unsicherheit.
Phase 2: Storming (Konflikt)
Sobald das Engagement für das Projekt und dessen Aufgaben beginnt, kommt es häufig zu
Diskussionen mit Interessengegensätzen und Meinungsverschiedenheiten.
Phase 3: Norming (Kontrakt)
Dinge Pendeln sich langsam ein, das Team findet seinen Rhythmus. Individuelle
Rollenverteilungen und Arbeitsweisen sind bekannt.
Unsicher, ob folgende Phasen relevant sind:
Phase 4: Arbeits- und Leistungsphase (Kooperation)
Ab hier ist das Team vollständig eingespielt, und verfolgen gemeinsam ein Ziel und können ihr
Potenzial voll ausschöpfen.
Phase 5: Adjourning – die Auflösungsphase
Letzte Phase, das Team wird aufgelöst und Erfolge werden besprochen. Das Projekt ist hier
abgeschlossen
Reflektionsmethoden
6 von 69

<!-- Seite 7 -->

Eine Feedback-Kultur ist wichtig, um im Projektablauf reflektieren zu können. Regelmäßig
sollten hier konstruktive und offene Rückmeldungen passieren.
Ein bekannte Methode ist hier “Lessons Learned”
Hier werden nach Abschluss eines Projektes oder einer Phase die wichtigsten Erkenntnisse
und Erfahrungen zusammengetragen. Hauptsächlich, um aus Erfolgen und Misserfolgen zu
lernen, diese dann dokumentiert in zukünftige Projekte einfließen lassen und eine
kontinuierliche Verbesserung zu gewährleisten.
02 Machbarkeit und Wirtschaftlichkeit von Projekten beurteilen können
Machbarkeitsanalyse
Bei einer Machbarkeitsanalyse untersucht und überprüft man, ob die Rahmenbedingungen (z.B
Zeit, Budget und Ressourcen) realistisch sind, und somit das Projekt erfolgreich umgesetzt
werden kann.
Hier gibt es verschiedene wichtige Aspekte:
Technische Machbarkeit Sind die Technologien vorhanden? Aktuelle Infrastruktur? (Ist-
Zustand) Sind die Anforderungen realistisch?
Wirtschaftliche Passt das Projekt ins Budget? Kosteneffizienz?
Machbarkeit
Zeitliche Machbarkeit Reicht die vorgebenene Zeit zur Umsetzung des Projektes?
Rechtliche und Gibt es rechtliche Hürden oder organisatorische Schiwerigkeiten?
organisatorische
Machbarkeit
Vorkalkulation im Projekt
Eine Vorkalkulation erfolgt, wie der Name schon sagt, vor einem Projekt. Er dient zur
Kostenschätzung und Preisgestaltung.
Grundsätzlich beinhaltet eine Vorkalkulation folgendes:
- Kostenarten: Welche Kosten fallen an (Personalkosten, Materialkosten, Dienstleister)
- Ressourcenplanung: Welche Ressourcen sind erforderlich (evtl. Maschinen,
Arbeitsstunden)
- Zeitplanung: Dauer des Projektes und dessen Einfluss auf die Kosten
7 von 69

<!-- Seite 8 -->

- Risikoanalyse: Risiken, die die Kalkulation / Einhaltung eines evtl. Budgets beinflussen
können
Nachkalkulation im Projekt
Eine Nachkalkulation findet meist in der letzten Phase des Projektes, dem Abschluss statt.
Tatsächliche kosten werden mit den geplanten Kosten / dem Budget verglichen und verrechnet.
- Wurden die geplanten Kosten eingehalten?: Hat das Projekt mehr oder weniger
gekostet als ursprünglich kalkuliert?
- Wurde der Umsatz oder Erlös erreicht?: Wenn ein Projekt mit Umsatz oder Erlös
verbunden war, wird überprüft, ob die Einnahmen den geplanten Umsatz erfüllen.
- War das Projekt wirtschaftlich?: Wurde das Projekt profitabel durchgeführt und hat sich
die Investition gelohnt?
Informationen die in einer Nachkalkulation relevant sind:
- Aktuelles Budget und eventuelle Änderungen
- Ist-Kosten
- Abweichungen (Unterschiede zwischen geplant und tatsächlich)
- Mehr- oder Minderleistung (Zusätzliche oder geringere Leistungen)
- Begründungen für eventuelle Abweichungen
Einfluss von Stakeholdern bewerten
Der einfachste Weg, um den Einfluss von Stakeholdern bewerten zu können, ist eine
Allgemeine Stakeholder Bewertung
Wer ist der Stakeholder, welche Einstellung hat der Stakeholder, und welche Erwartungen oder
Befürchtungen könnte der Stakeholder an dem Projekt haben?
Hier kann man auch direkt Abgrenzen oder sehen, welche Konflikte entstehen können und
welche Maßnahmen getroffen werden können.
Die Macht lässt sich dann auch herschließen, bspw. Könnte die Gemeinde als Stakeholder
Anträge ablehnen, oder viel bürokratischen Aufwand verursachen, dementsprechend könnte
man sagen, dass dies ein sehr hoher Einfluss ist. Oder auch bei einem finanziell eng
gestrickten Projekt, dass Investoren und Sponsoren einen hohen Einfluss auf den Erfolg haben.
Risikoanalyse
Eine Risikoanalyse geht meist Hand in Hand mit einer Stakeholder Analyse. Wichtig ist, in
einem Brainstorming alle relevanten Risiken sammeln zu können, hierbei hilft wie erwähnt die
Stakeholder und Umfeldanalyse.
8 von 69

<!-- Seite 9 -->

Ähnlich wie in der Konflikt- / Machtbewertung bewertet man diese Risiken mit einer
Eintrittswahrscheinlichkeit, und plant auch Konfliktmaßnahmen.
03 Arbeitsaufgaben im Rahmen von Geschäfts- und Leistungsprozessen planen,
vorbereiten und durchführen
Kundenkommunikation IT
Im IT-Bereich ist eine klare, verständliche und effektive Kommunikation mit dem Kunden
entscheidend. Technische Informationen sollten möglichst so vermittelt werden, dass diese
selbst ohne technisches Know-How verständlich sind.
WIchtige Aspekte sind da das Aktive Zuhören, Einfachheit und Klarheit, Transparent,
Erwartungsmanagement, Vertrauensaufbau, und am Ende intensive Feedback Runden.
Fehlermanagement
Fehlermanagement ist der bewusste und systematische Umgang mit Fehlern (bspw. Kritische
und unerwünschte Ereignisse oder Schäden).
Dieses Thema geht Hand-in-Hand mit dem Risikomanagement, da ein gewisses Risiko auch
gewisse Fehler hervorrufen können.
Im Grunde hat das Fehlermanagement 4 Phasen:
- Fehlererkennung: Ein unerwünschtes Problem wird erkannt
- Fehlerdiagnose: Problem wird klar definiert und klassifiziert
- Fehlerkorrektur: Beheben des Fehlers
- Fehlerprävention: Dokumentation des Fehlers, Maßnahmen zur Prävention
Hier kann bspw. auch ein Servicekonzept helfen, bzw. Sollte dieses auch definieren, wie mit
Fehlern umzugehen ist.
Störungsmanagement
Auch “Incident Management”
IT-Störungsmanagement umfasst ähnlich zum Fehlermanagement den gesamten
organisatorischen und technischen Prozess der Reaktion auf erkannte oder vermutete
Sicherheitsvorfälle oder Betriebsstörungen.
9 von 69

<!-- Seite 10 -->

Das kann zmb. Ein technischer Ausfall in der Produktion sein, oder auch ein Angriff auf die IT-
Infrastruktur, wodurch eine Störung die Konsequenz ist.
Ziel ist ier die schnellstmögliche Wiederherstellung der Service-Leistung
Definitionen nach ITIL 4:
Incident: „Eine nicht geplante Unterbrechung eines Service oder eine Qualitätsminderung eines
Service.“
Incident Management: „Der Zweck der Incident Management Practice ist das Minimieren der
negativen Auswirkungen von Incidents, indem der normale Servicebetrieb schnellstmöglich
wiederhergestellt wird.“
Incidents werden mit Hilfe von Trouble Tickets dokumentiert. Für die Entgegennahme und
Überwachung der Tickets ist ein Servicedesk zuständig.
Ticketsystem (Bearbeitungsstatus)
Ein Ticketsystem bildet meist in der IT ein zentrales Werkzeug, welches die Verwaltung und
Nachverfolgung von Aufgaben, Fehlern und Supportanfragen optimiert.
Jedes Anliegen wird dort erfasst, und beinhalten Informationen wie Beschreibung, Priorität,
Zuweisungen und Fristen.
Art Verwendung Funktion Beispiel
Helpdesk IT-Abteilung oder Nutzer melden Zanmad, Zendesk,
Kundensupport Probleme oder Jira
Anfragen, die dann
bearbeitet werden.
Bug-Tracking-System Vor allem Bugs während Jira, Bugzilla
Softwareentwicklung Entwicklung,
Fehlerberichte als
Ticket im System
Tickets werden oft nach Priorität (hoch, mittel, niedrig) kategorisiert, um sicherzustellen, dass
dringende Aufgaben schnell bearbeitet werden.
Eskalationsprozesse werden definiert, wenn ein Ticket zu lange ungelöst bleibt oder besondere
Aufmerksamkeit erfordert.
KI-Unterstützung
Die KI-Unterstützung in Geschäfts- und Leistungsprozessen kann dafür benutzt werden, die
Effizienz erheblich zu steigern, indem sie viele Aufgaben automatisiert, und wertvolle Analysen
und Vorhersagen bietet.
Sie kann besonders in Bereichen wie der Prozessoptimierung, Datenanalyse und
Automatisierung von Routineaufgaben sehr hilfreich sein. Allerdings müssen Unternehmen bei
der Implementierung von KI auch Herausforderungen wie die Datenqualität, Akzeptanz und
Integration berücksichtigen.
10 von 69

<!-- Seite 11 -->

Ein gutes Beispiel sind hier Self-Service Portale, die einen Chatbot verwenden. Bekannt ist das
z. B. Bei DHL, zur Statusabfrage oder Problembehandlung von Zustellungen, diese leiten dann
auch einen an die Richtige Fachabteilung, oder können Probleme Kategorisieren und
Priorisieren.
DIes spart oft massiven Aufwand, der sonst von einem Menschen erledigt werden müsste.
Support- und Serviceanfragen
Supportanfragen: Meist technische Probleme oder Fehler mit einem Produkt, einer Software
oder einem System. Also Fehlerbehebungen wie “Das Programm stürzt ab”,
“Fehlermeldungen”, oder Benutzerfragen wie “Wie kann ich eine Datei exportieren?”
Serviceanfragen: Allgemeine Anfragen oder Anfragen zu Dienstleistungen eines
Unternehmens. Bereitstellung von Informationen oder Inanspruchnahme von Serviceleistungen.
Beide Arten von Anfragen erfordern unterschiedliche Ansätze und können oft über ein
Ticketsystem verwaltet werden, jedoch mit unterschiedlichen Prozessen und Prioritäten.
Beispielweise wird das durch drei Supportlevels gemacht:
1st Level Support Anfragen und Beschwerden von Kunden
hinsichtlich der IT, schnelle Beseitigung von
Störungen.
Erste Anlaufstelle für alle eingehenden
Anfragen
2nd Level Support Bei Komplexeren Problemen, sehr
lösungsorienitierte Vorgehensweise, ab hier
z.B. auch externe Dienstleister
3rd Level Support Anspruchsvolle Probleme, hohe fachliche
Kompetenzen bei schwerwiegenden
Problemen
Fragenkomplex 2: Informieren und Beraten von Kunden und Kundinnen
01 Marktsituationen bewerten können
Marktformen
Viele Anbieter Weniger Anbieter Ein Anbieter
Viele Polypol Oligopol Monopol
Nachfrager
11 von 69

<!-- Seite 12 -->

Wenige Nachfrageoligopol Zweiseitiges Oligopol Beschränktes
Nachfrager Monopol
Ein Nachfrager Nachfragemonopol Beschrönktes Zweiseitiges Monopol
Nachfragemonopol
Verkäufermarkt: Verkäufer:innen haben das Sagen
Nachfrage ist größer als das Angebot
Bspw. Engpass in der Produktion, dadurch inflationierte Preise
Käufermarkt: Konsumierende haben die größere Marktmacht
Angebot ist größer als die Nachfrage
Bspw. Engpass im Absatz, dadurch Preissenkungen
Zielgruppendefinition- und Abgrenzung
Eine Zielgruppe definiert eine Gruppe von Menschen / Unternehmen, die mit einem Produkt /
einer Dienstleistung angesprochen werden sollen, bzw. Sich Bedürfnisse oder Interessen in
dieser Hinsicht teilen.
Um eine Zielgruppe zu definieren, helfen folgende Merkmale:
Demografische Merkmale: Alter, Geschlecht, Familienstand, Einkommen, Beruf, Bildungstand
Geografische Merkmale: Region, Stadtgröße, Land
Psychografische Merkmale: Werte, Lebensstil, Interessen, Hobbys
Verhaltensmerkmale: Kaufverhalten, Mediennutzung, Marken-Awareness
Dies kann bspw. durch gezielte Marktforschung geschehen, oder der Unterteilung des Marktes
auf Basis gemeinsamer Merkmale
Beispielzielgruppen:
- B2C (Business-to-Consumer)
- B2B (Business-to-Business)
Quantitative und Qualitative Angebotsbewertung
Damit z.B ein passendes Angebot gefunden werden kann, legt man eine Angebotsbewertung
an, bei der man verschiedene Verkäufer / Dienstleister anhand quantitativer und oder
qualitativer Faktoren bewertet.
Hier definiert der Angebotssuchende seine eigenen Schwerpunkte, und wie er dieser am besten
Gewichten möchte.
Quantitative Faktoren: Direkt ohne Umwege in Geldeinheiten
- Preis
- Transportkosten und ähnliches (Verpackungskosten, Fracht..)
- Rabatt (Mengenrabatt, Großkundenrabatt, Barzahlungsrabatt, Saisonrabatt u.ä.)
- Sonderangebote
- Skonto (Rabatt, wenn innerhalb einer bestimmten Zeitspanne bezahlt wird)
- Zahlungsspielraum
- Verhandlungsspielraum
12 von 69

<!-- Seite 13 -->

Qualitative Faktoren: Qualitative Einschätzung eines Angebotes
- Termintreue
- Allg. Qualität der Güter
- Standortnäje
- Umweltfreundlichkeit der Materialien und evtl. Entsorgungspläne
- Beratung
- Service
Auch Merkmale wie “Freundlichkeit” können dazu genommen werden.
02 Zielgruppengerechte Bedarfsanalyse durchführen können
Erklärung Bedarfsanalyse
Eine Bedarfsanalyse ist der Prozess, den Bedarf an Produkten, Dienstleistungen oder
Ressourcen zu ermitteln im Zusammenhang mit den Zielgruppen.
Sie dient dazu, Lücken zwischen dem IST-Zustand und dem SOLL-Zustand zu schließen.
Also: Ermittlung des tatsächlichen Bedarfes, Gruppenanalysen und so weiter.
Hier gibt es verschiedene Arten:
- Marktbedarfsanalyse: Bedarf im Markt oder Branche verstehen
- Unternehmensbedarfsanalyse: Innerhalb eines Unternehmens bspw.
Ressourcenplanung, Personalbedarf
- Kundenbedarfsanalyse: Fokus auf Kunden, Zufriedenheit maximieren und richtige
Produkte anbieten
Methoden der Datenerhebung
Eigene Datenerhebung bedeutet, ein Unternehmen oder eine Person sammelt daten, die für die
Analyse oder Entscheidungsfindung benötigt werden.
Ein beliebtes Beispiel ist hier z.B. die Kundenbefragung, bspw. Über Online-Befragungen,
Telefonische Befragungen aber auch Face-to-Face-Befragungen bei Service-Dienstleistungen,
bspw. Um dann den IST-Zustand ermitteln und analysieren zu können, und so passende
Lösungen anhand der erhobenen Daten anbieten zu können.
Es gibt qualitative und quantitative Methoden:
Qualitativ Interviews (Online, Face-to-face) Befragung von Fokus / Zielgruppen,
Beobachtung von Personen, des Marktes etc.
Quantitativ Umfragen (Online, Telefonumfragen), Web Analytics (sowas wie Google
Analytics)
Diese Daten müssen dann auch Anhand von Statisitk oder einer Datenanalyse ausgewertet
werden, z.B. Was sind gemeinsame Anforderungen eines Mitarbeiters an einen Arbeitsplatz?
Welche aktuellen Trends gibt es in der Hinsicht?
Hier kann zmb. Eine SWOT (Stärken, Schwächen, Chancen und Risken)-Analyse helfen:
13 von 69

<!-- Seite 14 -->

03 Zielgerichtete Methoden zur Kundenberatung kennen und beurteilen können
Situationsgerechte Kundenkommunikation
Kundenkommunikation ist der Austausch von Informationen, Gedanken Fragen und Feedback
zwischen einem Unternehmen und seinen Kunden. Unternehmen interagieren mit ihren
Kunden, um Bedürfnisse zu verstehen, gezielte Lösungen anbieten zu können und eine gute
Dynamik aufzubauen.
Die Kommunikation sollte je nach Situation und Kunde angepasst sein (z.B technische
Erklärung für Laien vs. Experten)
Hoch technische Begriffe sollten entweder vermieden oder erklärt werden, wenn der gegenüber
wenig technisches Vorwissen hat.
Ebenso ist ein freundlicher und respektvoller Ton wichtig sein, und der Sprachstil anhand der
Situation variieren.
Kommunikationsmodelle
Sender Empfänger Modell:
Ein einfaches Modell, welches zwischen einem Sender und einem Empfänger beschrieben
wird.
Hier können Störungen auftreten bspw. Durch Missverständnisse oder Sprachbarrieren
14 von 69

<!-- Seite 15 -->

4-Ohren-Modell:
Das 4-Ohren-Modell hat vier Aspekte:
1. Sachinhalt Was wird gesagt? (Fakten, Informationen)
2. Selbstkundgabe Was sagt der Sender über sich selbst? (Gefühle, Einstellungen)
3. Beziehung Was ist das Verhältnis zwischen Sender und Empfänger? (z.B.
Vertrauen, Respekt)
4. Appell Was soll der Empfänger tun? (Handlungsaufforderung)
Bei der Kommunikation mit Kunden hilft dieses Modell, die verschiedenen Ebenen einer
Nachricht zu erkennen und Missverständnisse zu vermeiden, z.B. wenn der Kunde eine
Nachricht nur auf der Beziehungsebene wahrnimmt und nicht auf der Sachebene.
Kundenbefarf ermitteln und Angebote unterbreiten
Kundenbedarf beschreibt die Bedürfnisse, Wünsche und Erwartungen, die die Kunden speziell
an ein Produkt oder eine Dienstleistung haben.
Bedürfnisse lassen sich in 3 Aspekte einsortieren:
Grundbedürfnisse (essenziell und müssen unbedingt erfüllt werden)
Erwartungsbedürfnisse (Bedürfnisse, die der Kunde erwartet, ohne sie evtl. Ausdrücklich
geäußert zu haben)
Wunschbedürfnisse (zusätzliche Merkmale oder Dienstleistungen, die den Kunden erfreuen /
nutzen würden)
Hier kann man sich auch nochmal auf Thema 2.02.1 Erklärung Bedarfsanalyse zurückerinnern,
Um dann ein Angebot passend unterbreiten zu können, sollte man sich zuerst eine Zielsetzung
des Angebots suchen, bspw. Ob dieser Wettbewerbsfähig ist oder dem Kunden bei der
Entscheidungsfindung unterstützt.
15 von 69

<!-- Seite 16 -->

Danach sollte man ein Angebot vorbereiten, unteranderem durch die Kundenbedürfnisse, aber
auch durch Definieren des Leistungsumfanges sowie Budget und Zeitrahmen.
- Mündlich vs. schriftlich: Angebote können entweder mündlich oder schriftlich
unterbreitet werden. Schriftliche Angebote sind verbindlicher und bieten eine klare
Dokumentation, während mündliche Angebote meist flexibler sind und schnellere
Rückmeldungen ermöglichen.
- Digitale Angebote: Besonders im IT-Bereich sind digitale Angebote und Verträge weit
verbreitet. Hier ist es wichtig, alle relevanten Informationen klar und übersichtlich
darzustellen, etwa in Form von PDFs oder über Online-Tools.
- Präsentation des Angebots: Falls das Angebot in einer Besprechung präsentiert wird,
sollte es visuell ansprechend sein. Eine gute Präsentation kann helfen, das Vertrauen
des Kunden zu gewinnen.
04 Informationen aufbereiten und präsentieren sowie Quellen auswerten können
Zusammenfassung
Informationen aufbereiten und präsentieren bedeutet, relevante Daten systematisch zu
sammeln, zu strukturieren und verständlich aufzubereiten. Dabei müssen sowohl technische als
auch kaufmännische Texte in deutscher und englischer Sprache analysiert und so verarbeitet
werden, dass sie für unterschiedliche Zuhörergruppen verständlich sind.
Präsentationen sollten klar und zielgerichtet sein, mit visuellen Hilfsmitteln wie Folien und
Diagrammen, um die wichtigsten Informationen hervorzuheben. Medienkompetenz ist dabei
wichtig, um Präsentationstechniken wie PowerPoint effektiv zu nutzen.
Quellen auswerten bedeutet, Informationen aus technischen und kaufmännischen Texten
kritisch zu prüfen und zwischen vertrauenswürdigen und weniger zuverlässigen Quellen zu
unterscheiden. Das schnelle Identifizieren und korrekte Zitieren relevanter Informationen sichert
die Qualität deiner Präsentationen und Berichte.
05 Marketingaktivitäten unterstützen können
Nutzwertanalyse
Die Nutzwertanalyse ist eine Methode zur systematischen Entscheidungsfindung, wenn
mehrere Alternativen anhand verschiedener Kriterien bewertet werden müssen. Sie wird oft
verwendet, wenn neben quantitativen auch qualitativen Faktoren eine Rolle spielen.
Beispiel: Entscheidung für ein neues Firmenfahrzeug
Gewich Auto A Auto B Auto C Auto A Auto B Auto C
Kriterium tung (Bewertu (Bewertun (Bewertun (Punkte (Punkte (Punkte
(%) ng) g) g) ) ) )
Anschaffu
30 % 8 6 7 2,4 1,8 2,1
ngskosten
16 von 69

<!-- Seite 17 -->

Verbrauc
25 % 7 9 6 1,75 2,25 1,5
h
Sicherheit 20 % 9 8 7 1,8 1,6 1,4
Komfort 15 % 6 7 9 0,9 1,05 1,35
Umweltfre
10 % 7 8 9 0,7 0,8 0,9
undlich
Gesamt-
100 % 7,55 7,5 7,25
Nutzwert
Vertriebsformen
Direktvertrieb: Persönlicher Draht zum Kunden
- Produkte oder Dienstleistungen direkt selbst an den Endkunden
- Hohe Gwinnmargen, Volle Kontrolle und direktes Kundenfeedback
- Hoher Aufwand, Begrenzte Reichweite (expandieren schwerer)
Indirekter Vertrieb: Nutzen von Partnernetzwerken
- Unternehmen mit Zwischenhändlern, bspw. Bei Konsumgütern (bspw. Amazon ,
Einzelhändler oder Großhändler)
- Größere Reichweite, Weniger Aufwand und schneller Markteintritt
- Geringere Kontrolle, Geringere Gewinnmargen und Abhängigkeit von Partnern
Weitere Vertriebsformen, die aber nicht im Detail relevant sind:
Filialvertrieb, Online-Vertrieb, Multichannel-Vertrieb, Strukturvertrieb und Franchising
Fragenkomplex 3: Beurteilen marktgängiger IT-Systeme und
kundenspezifischer Lösungen
01 Marktgängige IT-Systeme kennen, unterscheiden und beurteilen können
Funktionale, ökomische und ökologische Aspekte
Um Marktgängige IT-Systeme zu unterscheiden und beurteilen zu können, gibt es drei
wesentliche Aspekte
Funktionale Aspekte (Leistungsmerkmale und Nutzungseigenschaften):
Vor allem bestimmt durch Leistung und Performance, aber auch Kompatibilität, Skalierbarkeit,
Flexibilität und generelle Zuverlässigkeit und Verfügbarkeit.
Ökonomische Aspekte (Kosten & Wirtschaftlichkeit):
Beispielweise Anschaffungskosten, zusammenhängend generelle Betriebskosten, ROI (Kosten-
Nutzen-Verhältnis), Cloud vs. On-Premise Modelle, und auch wirtschaftliche Effizienz
Ökologische Aspekte (Nachhaltigkeit & Umweltverträglichkeit)
Energieeffizienz (bspw. Ausgezeichnet durch Energy Star, Green IT)
Ressourcenschonung (durch Recyclingfähigkeit), Lebensdauer und generelle Reparierbarkeit
(als Beispiel I-Fixit-Score), Nachhaltige Produktion, aber auch Nutzung von Ökostrom oder
Wasserverbrauch in Cooling-Systemen
17 von 69

<!-- Seite 18 -->

Hardwareprodukte
Kategorie Komponente Funktion
CPU Führt Berechnungen aus, steuert das gesamte
Recheneinheit
(Prozessor) System.
Verbindet alle Komponenten, enthält Chipsätze zur
Hauptplatine Motherboard
Kommunikation.
RAM Kurzzeitspeicher für laufende Prozesse, sorgt für
Arbeitsspeicher
(Speicher) schnelle Datenverarbeitung.
HDD Magnetischer Speicher für große Datenmengen,
Datenspeicher
(Festplatte) günstiger aber langsamer.
SSD (Solid Schneller Flash-Speicher für Betriebssystem und
State Drive) Programme.
Grafikverarbeitun GPU Berechnet und rendert Grafiken, entlastet die CPU bei
g (Grafikkarte) visuellen Aufgaben.
Wandelt Wechselstrom in Gleichstrom um und
Stromversorgung Netzteil (PSU)
versorgt das System mit Energie.
Tastatur &
Peripherie Eingabegeräte zur Steuerung des Computers.
Maus
Monitor/Displa Gibt visuelle Informationen aus, z. B. für
y Benutzeroberflächen.
Drucker &
Gibt Dokumente aus oder digitalisiert sie.
Scanner
Netzwerk & Netzwerkkarte Verbindet den PC mit Netzwerken über LAN oder
Kommunikation (NIC) WLAN.
Modem & Erlaubt Zugang zum Internet und verbindet Geräte im
Router Netzwerk.
Temperaturse Überwachen Wärmeentwicklung in CPU/GPU für
Sensoren
nsoren Kühlung.
Bewegungsse Erkennen Bewegungen, z. B. in Smartphones oder für
nsoren Sicherheitszwecke.
Lichtsensoren Passen Bildschirmhelligkeit automatisch an.
Fingerabdruck
Biometrische Sicherheit für Authentifizierung.
scanner
Netzwerkkomponente
Komponente Funktion
Router Verbindet Netzwerke, “routet” Internetpakete
weiter
Switch Verbindet mehrere Geräte in einem Netzwerk
und leitet Daten gezielt weiter.
Gateway Verbindet Netzwerke mit unterschiedlichen
Protokollen, eine Rolle als “Umwandler” oder
“Vermittler”
Access-Point Erweitert das WLAN-Netzwerk, ermöglicht
drahtlose Verbindung ins kabelgebundene
Netz
Firewall (Hardware / Software) Schützt vor unautorisierten Zugriffen und
blockiert unerwünschte Verbindungen
NAS (Network Attached Storage) Netzgebundener Speicher
18 von 69

<!-- Seite 19 -->

Modem Verbindung zwischen Heimnetzwerk und ISP
Softwarearten
Standartsoftware: Standartsoftware ist allgemeine Software, die die grundlegenden
Bedürfnisse für viele Anwender abdeckt. Bekannt zum Beispiel Microsoft Office, Photoshop
Branchensoftware: “Standartsoftware” speziell für bestimmte Branchen oder Unternehmen
(DATEV, CAD-Software, ERP-Systeme (Enterprise Resource Planing), Lexware) darunter
Supply-Chain-Manegement (für Lieferketten), Customer Relationship (Kundenbeziehungen)
Individualsoftware: Maßgeschneiderte Software, die speziell für ein Unternehmen oder eine
Organisation entwickelt wurde.
Systemsoftware: Steuert die Hardware, verbindet es z.B. mit Standartsoftware, auch bekannt
als Betriebssystem. Stellt die Basis für Anwendungssoftware bereit. (Winduws, Linux, macOS,
aber auch das BIOS sowie Treiber)
Entwicklungssysteme: Werkzeuge zur Erstellung von Software und Anwendungen (Visual
Studio, Eclipse, Git, Docker, IntelliJ IDEA)
Cloudlösungen
Infrastructure as a Service (IaaS):
Infrastructure as a Service (IaaS) bedeutet, dass ein Dienstanbieter die Backend-Infrastruktur
hostet und verwaltet, darunter Computing, Speicher, Netzwerke und Virtualisierung aber auch
Betriebssystem, Middleware, Daten und Anwendungen können mit einbezogen werden.
Bekannt ist da z.B Amazon Web Services und Micros0oft Azure.
Vorteil hierbei ist, dass Firmen keine eigene Hardware benötigen und dementsprechend auch
hoch skalierbar ist.
Nachteil ist, dass man hier sehr vom Cloud-Anbieter abhängig ist, sowie diverse Sicherheits-
und Datenschutzbedenken, wenn die Cloud Server bspw. Nicht in der EU liegen.
Software as a Service (SaaS):
Der Dienstleister bietet das gesamte Anwendungspaket, darunter die vollständige Anwendung
und die Infrastruktur, die dafür erforderlich ist.
Bekannt ist hier z.B. Microsoft 365, Dropbox oder sowas wie Salesforce.
Vorteil hier ist vor allem, dass die Software plattformunabhängig aufgerufen werden kann und
keine Installation oder Wartung braucht.
19 von 69

<!-- Seite 20 -->

Nachteil ist, dass man auch hier sehr abhängig vom Anbieter ist, man keinen Zugriff bei
Ausfällen hat auf die Daten und man nur eingeschränkt die Software dann auf seinen Bedarf.
Desktop as a Service (DaaS):
Desktop as a Service bietet eine komplette virtuelle Desktop-Umgebung mit Betriebssystemen,
Anwendungen, Dateien und Benutzereinstellungen.
Bekannt ist hier bspw. Citrix Virtual Desktop Environment
Vorteil hier ist, dass es einen ortsunabhängigen Zugriff auf denselben, vollen Desktop
ermöglicht und die Hardware-Anforderungen für Geräte sinken, da die meiste Rechenleistung
vom Server übernommen wird.
Nachteil hier ist, dass eine stabile Netzwerkverbindung nötig ist, und bei intensiver Nutzung
(bspw. Intensiver Grafikbearbeitung) schnell Performance Probleme auftauchen können.
Platform as a Service (PaaS):
Platform as a Service bietet die Infrastruktur, Entwicklungs-Frameworks und Tools für
Anwendungsentwicklung
Bekannt ist hier Google App Engine, Heroku oder Microsoft Azure App Services, aber auch
Github Codespaces kann man hierzu zählen.
Vorteilhaft ist hier, dass Entwickler sich rein auf den Code konzentrieren können, ohne die
Infrastruktur verwalten zu müssen und somit die Entwicklung effizient unterstützt.
Nachteil hier ist, dass man nur eingeschränkte Kontrolle über die zugrunde liegende
Infrastruktur hat und abhängig vom Anbieter und dessen unterstützte
Programmiersprachen/Frameworks ist.
KI-Systeme
KI-Systeme sind Software- und Hardwaresysteme, die künstliche Intelligenz nutzen, um in der
physischen oder digitalen Welt “rational” zu handeln. Sie basiert auf Algorithmen, maschinellem
Lernen (ML) oder Deep Learning
Einsatzbereiche von KI-Software sind z.B. Automatisierung ( Chatbots, Sprachassistenten),
Datenanalyse, Bild- und Spracherkennung, Robotik und autonome Systeme, sowie auch der
Bereich Cybersecurity.
Wichtige KI-Technologien:
Maschinelles Lernen (ML) KI lernt aus Daten (Entscheidungsbäume,
neural networks)
Deep Learning Mehrschichtige neural networks für
kompledxe Analysen
Natural Language Processing Verarbeitung natürlicher Sprache (z.B.
Google Translate)
Computer Vision Analyse von Bildern / Videos
KI bildet jedoch viele ethische Herausforderungen hinsichtlich der ethischen Nutzung, Bias und
so weiter.
20 von 69

<!-- Seite 21 -->

Bias und Diskriminierung:
KI-Systeme lernen aus vorhandenen Daten, diese können Vorurteile enthalten
Datenschutz und Privatsphäre
KI verarbeitet große Datenmengen, die auch oft personenbezogene Inhalte beinhalten, aber
auch urheberrechtliches Material verwenden.
Beispielweise generative KI, die durch den Künstlerstil anderer lernt, und diesen imitieren kann.
02 Typische IT-Systeme und deren Einsatz Bereiche identifizieren und zuordnen
können
Kommunikationssysteme
Definition: Kommunikationssysteme sind technishce EInrichtungen oder Netzwerke, die den
Austausch von Informationen zwischen Sendern und Empfängern ermöglichen. Sie bilden die
Grundlage für die moderne Informationsgesellschaft und sind essenziell für Wirtschaft, Bildung
und soziale Interaktion
Arten von Kommunikationssystemen:
Videokonferenzsysteme:
- Beschreibung: Ermöglchen Echtzeitkommunikation über Video und Audio, bspw über
Teams, Skype oder Webex.
- Bspw. All-in-One Systeme mit Integrierter Hardware, also Kamera, Mikrofone,
Lautsprecher speziell für Konferenzräume und Systeme konzipiert.
- Haben auch oft Intelligente Funktionen wie Bildanpassung und automatische
Sprechverfolgung
Social Media Systeme:
- Digitale Plattformen, die den sozialen Austausch, Netowrking und Content-Sharing
ermöglichen.
- Bspw. Asynchrone Kommunikation (Postings, Kommentare) und synchron (Livestreams)
- Multimediale Inhalte (Texte, Bilder, Videos, Stories, Reels)
Client-Server Systeme
Ein Client-Server-System besteht aus mehreren Clients, die mit einem oder mehreren Servern
verbunden sind. Clients sind hier Endgeräte wie Smartphones, Laptops, PCsaber auch
Thinclients oder andere Komponente.
Client im Client-Server-Modell:
Neben oben genannten Endgeräten, kann man die Client-Typen noch etwas spezifischer
beschreiben:
- Thin Client: Minimaler Client, der hauptsächlich serverabhängig ist. Bspw. Zeigen diese
nur eine minimale Benutzeroberfläche, oder haben mittels Virtueller Maschine eine
“Übertragung” eines vollwertigen Betriebssystems. Die eigentliche Verarbeitung passiert
auf dem Server
- Thick Client: Laptops oder Desktop-PCs von Mitarbeitern kann man als Thick-Client
beschreiben, die Geräte speichern und verarbeiten Daten Direkt, können aber auf
Dateiserver oder Datenbankserver zugreifen für zusätzliche Information.
21 von 69

<!-- Seite 22 -->

Server im Client-Server-Modell:
Die Server in einem Client-Server-Modell haben dedizierte Aufgaben und Dienste, die sie zur
Verfügung stellen.
Beispiele hierfür sind:
- Druckserver: Verwalten und steuern Drucker und Druckaufträge, zentralle Schnittstelle
für alle Drucker
- Dateiserver: Bspw. Ordnerstrukturen für NAS, die auch Zugriffsrechte etc. Regeln
- Ansonsten benutzen auch viele Systeme wie z.B. IT-Blech oder Lexware ein
Datenbankserver, wo die Anfragen von Clients bearbeitet werden, um Daten abzurufen
oder generell Manipulieren zu können. Bspw. SQL (Structured Query Language)
Einbindung in eine Domäne
Eine Domäne, oder auch Domänenverbund ist ein Prozess, wo ein Endgerät in eine Domäne
(bspw. Unternehmensnetzwerk) eingebunden werden kann, die sich miteinander
Netzwerkressourcen teilen sowie Policies, die von einem zentralen Server verwaltet werden.
Vorteil hier ist, dass es eine zentralisierte Benutzerauthentifizierung bietet. Innerhalb einer
Domäne kann man sich mit demselben Benutzernamen und Kennwort auf jedem Endgerät
anmelden. Man kann hier Ressourcen Zentral Verwalten wie den Zugriff auf Dateien, Drucker,
und welche Anwendungen dem Endbenutzer zur Verfügung stehen.
Bekannt ist hier Microsoft Active Directory, was ein Verzeichnisdienst von Windows ist. Es ist
eine hierarchische Struktur von Ressourcen und Benutzern. Auf einem PC können dann zmb.
Gruppen-Policies angewendet werden, um Sicherheitsfunktionen implementieren zu können
oder auch eine Verschlüsselung und Multi-Faktor-Authentifizierung
Netzwerkprotokolle
Protokoll Funktion Einsatzbereich
Zuverlässige,
TCP (Transmission Control Internet, Web-
verbindungsorientierte
Protocol) Kommunikation
Datenübertragung
Schnelle, verbindungslose Streaming, VoIP,
UDP (User Datagram Protocol)
Datenübertragung Online-Gaming
Adressierung & Routing von
IP (Internet Protocol) Internet, Netzwerke
Datenpaketen
ICMP (Internet Control Message Netzwerkdiagnose
Fehler- & Statusmeldungen
Protocol) (z. B. Ping)
HTTP (Hypertext Transfer Datenübertragung für Webbrowser,
Protocol) Webseiten Webseiten
Verschlüsselte Web- Sichere Webseiten,
HTTPS (HTTP Secure)
Kommunikation Online-Banking
22 von 69

<!-- Seite 23 -->

Dateiübertragung zwischen Webhosting, Datei-
FTP (File Transfer Protocol)
Client & Server Downloads
SMTP (Simple Mail Transfer
Versand von E-Mails E-Mail-Server
Protocol)
IMAP (Internet Message Access E-Mail-Abruf mit Server- E-Mail-Clients
Protocol) Synchronisation (Outlook, Gmail)
Einfacher E-Mail-Abruf ohne Ältere E-Mail-
POP3 (Post Office Protocol 3)
Server-Synchronisation Dienste
Übersetzung von
DNS (Domain Name System) Internet, Webseiten
Domainnamen in IP-Adressen
DHCP (Dynamic Host Automatische IP- Heimnetzwerke,
Configuration Protocol) Adressvergabe Unternehmen
SNMP (Simple Network Überwachung & Verwaltung
IT-Administration
Management Protocol) von Netzwerken
SSL/TLS (Secure Sockets Layer / Verschlüsselung von Sicheres Surfen,
Transport Layer Security) Datenübertragungen Online-Banking
Server-
Sichere Fernsteuerung von
SSH (Secure Shell Protocol) Administration, IT-
Servern
Sicherheit
Drahtlose
Wi-Fi (IEEE 802.11) WLAN-Netzwerke
Netzwerkkommunikation
Kurzstrecken- Gerätekommunikati
Bluetooth (IEEE 802.15.1)
Datenübertragung on, Kopfhörer
Kontaktloses
Drahtlose
NFC (Near Field Communication) Bezahlen,
Nahfeldkommunikation
Smartcards
Skype, Zoom,
VoIP (Voice over IP) Internet-Telefonie
Microsoft Teams
03 Leistungsfähigkeit und Energieeffizienz von IT-System bestimmen, analysieren
und beurteilen können
Kenngrößen, Leistungsdaten, Funktionsumfang
Hardware-Komponenten und ihre Kenngrößen
BIOS und UEFI (Systemfirmware)
- BIOS (Basic Input/Output System):
Frühere Firmware, die vor Start des Betriebssystemes Hardware initialisiert. Dort kann
man bspw. Die Boot-Reihenfolge, den Festplattenzugriff aber auch Sachen wie
Overclocking einstellen.
- UEFI (Unified Extensible Firmware Interface):
Neuer Standart, ersetzt BIOS. Bietet einerseits support für größere Festplatten durch
GPT, generell schnellere Bootzeiten und auch Einstellungen wie Secure Boot, TPM (vor
allem für Windows 11 relevant), Virtualisierungstechniken vie Intel VT und AMD-V, aber
auch Overclocking.
CPU (Zentrale Prozessoreinheit)
- Taktfrequenz (GHz): Geschwindigkeit der CPU
- Kerne und Threads:
Kerne: Jeder Kern kann einen eigenen Befehl ausführen (multithreading)
Threads: Virtuelle Kerne durch Hyper-Threading (z.B. 4 Kerne, 8 Threads)
23 von 69

<!-- Seite 24 -->

- Cache: Schneller Zwischenspeicher
L1, L2, L3 Cache: Unterschiedliche Ebenen mit unterschiedlicher Geschwindigkeit und
Größe
- Architektur: (z.B. x86, ARM) beinflusst Stromverbrauch, Leistung und Kompatibilität
RAM (Random Access Memory)
- Kapazität: Typischerweise zwischen 4GB und bis zu 128 GB in PCs je nach
Anwendungsfall
- Taktfrequenz: Bspw. DDR4 auf 3000 MHz
- Typen:
DDR3, DDR4, DDR5 (Double Data Rate)
- Latenzen: CL (Column Address Strobe Latency)
Kömmem sich generell auf die Leistung auswirken, bspw. Aber bei DDR5 eher weniger,
da die Frequenz um ein Vielfaches höher ist. Oft merkt man tatsächlich aber den
Unterschied beim CL-Takt nicht.
Datenspeicher (HDD vs. SSD)
- HDD (Hard Disk Drive):
Magnetische Platten, sehen auswie CDs, jedoch langsame Übertragungsraten.
Günstiger bei Kapazität/Preis, lange Lebensdauer aber mechanische Teile sehr anfällig
- SSD (Solid State Driver)
Schnell und robust, da keine beweglichen Teile
Arten: SATA-SSD, NVMe, M.2
Aber auch SSHD (Solid State Hybrid Drive) bekannt aus z.B. Älteren Mac-PCs
Dateisysteme:
Maxi
Maxim
Verwe male Betrie
Dateisy ale
ndun Datei bssyst Vorteile Nachteile
stem Partitio
g größ eme
ngröße
e
Windo
USB- - Maximale
ws, - Weit verbreitet und
Sticks, Dateigröße 4 GB-
FAT32 4 GB 8 TB Linux, kompatibel- Einfach
SD- Kein Journaling,
macO und schnell
Karten keine Sicherheit
S
Windo
ws-
Syste - Unterstützt große
- Weniger kompatibel
me, Windo Dateien und
NTFS 16 TB 256 TB mit anderen
intern ws Volumes- Journaling,
Betriebssystemen
e Sicherheit
Festpl
atten
macO 8 8 - Schneller Zugriff- - Nur auf Apple-
macO
APFS S und Exab Exabyt Verschlüsselung, Geräten voll
S, iOS
iOS yte e Snapshots unterstützt
Linux- 1 - Sehr stabil und weit - Keine native
ext4 Syste 16 TB Exabyt Linux verbreitet- Unterstützt Unterstützung auf
me e große Dateien Windows/macOS
24 von 69

<!-- Seite 25 -->

Erweiterungskomponenten und Netzwerktechnik
Grafikkarten (GPU)
- VRAM (Video RAM) Speicher für Texturen und Grafiken
- CUDA-Kerne (NVIDIA): Parallele Berechnung und beschleunigt rechenintensive
Aufgaben
- Taktfrequenz: Beeinflusst die Geschwindigkeit der GPU
Maximale
Speiche
Geschwindi Vorteile Einsatzbereich
r
gkeit
Bis zu 1.6 - Günstig- Gut für einfache - Ältere Grafikkarten (z.B. GTX
GDDR3
Gbps Anwendungen 400-Serie)
Bis zu 2.4 - Schnellere Datenübertragung - Ältere Grafikkarten (z.B. Radeon
GDDR4
Gbps als GDDR3 X1000-Serie)
- Moderne Grafikkarten (z.B.
Bis zu 8 - Hohe Bandbreite- Weit
GDDR5 NVIDIA GTX 900-Serie, AMD RX
Gbps verbreitet in Gaming-GPUs
500-Serie)
GDDR5 Bis zu 10 - Höhere Datenraten als - High-End-Grafikkarten (z.B.
X Gbps GDDR5 NVIDIA GTX 10-Serie)
- Extrem hohe Bandbreite-
Bis zu 16 - High-End-Grafikkarten (z.B.
GDDR6 Geringerer Energieverbrauch
Gbps NVIDIA RTX 20 und 30-Serie)
als GDDR5
- Noch schnellere Datenraten
GDDR6 Bis zu 19
als GDDR6- Verbesserte - NVIDIA RTX 3080 und 3090
X Gbps
Signalübertragung
Netzwerkkarten (NIC)
- Wired (Ethernet):
10/100/1000Mbps (Gigabit Ethernet)
10G Ethernet für sehr hohe Bandbreiten
- Wireless (WLAN)
WLAN 802.11a/b/g/n/ac/ax: WLAN-Standard
Router, Switches und Gateways
- Router: Verbindet Netzwerke und leiten den Datenverkehr zwischen ihnen
- Switches: Verbindet mehrere Geräte innerhalb eines lokalen Netzwerks (LAN), verwaltet
den Datenverkehr effizient
- Gateway: Ein Vermittler zwischen verschiedenen Netzwerekn oder Protokollen
Lichtwellenleiter (LWL)
- Single-Mode: Schnelle, lange Distanzen (z.B. für Glasfaser Datenzentren)
- Multi-Mode: Kürzere Distanzen und kostengünstiger
Ethernet-Standards
Maximale
Maximale Verwendungsber
Standard Geschwindigk Verkabelung
Kabellänge eich
eit
25 von 69

<!-- Seite 26 -->

Kupfer (Cat5 Frühe Netzwerke,
Ethernet (10Base-T) 10 Mbps 100 Meter
oder höher) alte Systeme
Fast Ethernet Kupfer (Cat5 Ältere Netzwerke,
100 Mbps 100 Meter
(100Base-T) oder höher) Home Office
Gigabit Ethernet Kupfer (Cat5e Standard in
1 Gbps 100 Meter
(1000Base-T) oder höher) modernen LANs
High-End-
10-Gigabit Ethernet Kupfer (Cat6a 55-100
10 Gbps Gaming,
(10GBase-T) oder Cat7) Meter
Datacenter
40-Gigabit Ethernet Rechenzentren,
40 Gbps Kupfer (Cat8) 30 Meter
(40GBase-T) Enterprise
100-Gigabit Ethernet Hochleistungs-
100 Gbps Kupfer (Cat8) 30 Meter
(100GBase-T) Datenzentren
WLAN-Standards (Wi-Fi)
Maximale
Frequenzber
Standard Geschwindigkei Verwendungsbereich
eich
t
Wi-Fi 4 2.4 GHz, 5
Bis zu 600 Mbps Ältere Router, Basis-WLAN-Netzwerke
(802.11n) GHz
Wi-Fi 5 Moderne Heimnetzwerke, Gaming,
Bis zu 3,5 Gbps 5 GHz
(802.11ac) Streaming
Wi-Fi 6 2.4 GHz, 5
Bis zu 9,6 Gbps High-Speed-Internet, Smart Homes
(802.11ax) GHz, 6 GHz
2.4 GHz, 5 Erweiterte Nutzung des 6 GHz-Bereichs für
Wi-Fi 6E Bis zu 9,6 Gbps
GHz, 6 GHz weniger Interferenzen
Wi-Fi 7 2.4 GHz, 5 Zukünftige Netzwerke, ultra-schnelle
Bis zu 30 Gbps
(802.11be) GHz, 6 GHz Anwendungen
Erklärung zu den Ethernet- und WLAN-Standards:
Ethernet: Die kabelgebundenen Netzwerkstandards (Ethernet) sind weit verbreitet in LANs
und bieten verschiedene Geschwindigkeiten von 10 Mbps (für ältere Systeme) bis zu 100 Gbps
(für moderne Rechenzentren). Die maximale Kabellänge variiert je nach Standard und
Kabeltyp.
WLAN (Wi-Fi): Die drahtlosen Netzwerkstandards ermöglichen kabellose Verbindungen. Wi-
Fi 6 (802.11ax) ist der neueste Standard, der höhere Geschwindigkeiten und bessere Effizienz
in überlasteten Netzwerken bietet. Wi-Fi 6E nutzt den neuen 6 GHz-Bereich, was für weniger
Interferenzen sorgt.
Barrierefreier Zugang
Der barrierefreie Zugriff auf IT-Systeme am Arbeitsplatz ist essenziell, um Menschen mit
Einschränkungen die uneingeschränkte Nutzung von Hard- und Software zu ermöglichen.
Durch verschiedene Einstellungsmöglichkeiten können Webseiten und Betriebssysteme
individuell angepasst werden.
Dazu gehören Zoom-Funktionen zur Vergrößerung von Texten, hohe Kontrastmodi, Farbfilter
26 von 69

<!-- Seite 27 -->

sowie die Anpassung von Schriftarten und -größen für eine bessere Lesbarkeit. Zudem ist die
Unterstützung von Screenreadern wie NVDA oder JAWS wichtig, ebenso wie die Möglichkeit,
Webseiten vollständig über die Tastatur zu bedienen. Betriebssysteme wie Windows, macOS
und Linux bieten zahlreiche barrierefreie Funktionen, darunter Sprachausgabe,
Bildschirmtastaturen und Diktierfunktionen.
Ergänzend dazu erleichtern spezielle Hardwarelösungen, wie ergonomische Eingabegeräte
oder Braillezeilen, den Zugang zu digitalen Arbeitsplätzen. Standards wie die WCAG (Web
Content Accessibility Guidelines) und die BITV 2.0 stellen sicher, dass IT-Systeme möglichst
barrierefrei gestaltet werden. So wird sichergestellt, dass alle Mitarbeitenden unabhängig von
ihren individuellen Einschränkungen effizient und gleichberechtigt arbeiten können.
Gütesiegel Energieeffizienz / Wirkungsgrad
Übertragungsraten
Bei der digitalen Datenübertragung spielen Übertragungsraten und -zeiten eine wichtige
Rolle. Die Übertragungsrate wird meist in Megabit pro Sekunde (Mbit/s) oder Gigabit pro
Sekunde (Gbit/s) angegeben und beschreibt die Menge an Daten, die pro Sekunde übertragen
werden, kann. Die tatsächliche Übertragungszeit hängt von der verfügbaren Bandbreite sowie
der Größe der zu übertragende Datei ab.
27 von 69

<!-- Seite 28 -->

Es gibt zwei unterschiedliche Systeme zur Angabe von Speichergrößen:
Die Berechnung der Übertragungszeit erfolgt mit:
Beispiel: 1 GiB große Datei mit 50Mbit/s:
(1,074×8×109) ÷ (50×106) = 171,8 Sekunden≈2,86 Minuten
Leistungsdaten Elektrotechnik
Größe Beschreibung Einheit Formel
Stromstär Gibt an, wie viele elektrische Ladungsträger pro Amper
I = U / R
ke (I) Sekunde durch einen Leiter fließen. e (A)
Spannun Beschreibt die treibende Kraft, die den Strom durch
Volt (V) U = P / I
g (U) einen Leiter bewegt.
Leistung Watt
Gibt an, wie viel Energie pro Sekunde umgesetzt wird. P = U × I
(P) (W)
η = (Pab /
Wirkungs Prozen
Verhältnis von abgegebener zu zugeführter Leistung. Pzu) ×
grad (η) t (%)
100%
28 von 69

<!-- Seite 29 -->

04 Wirtschaftlichkeit von IT-Systemen bestimmen und beurteilen können
Kosten in tabellarischer Übersicht
Kostenart Beschreibung
Anschaffu Einmalige Kosten für den Erwerb von Vermögenswerten (z. B. Maschinen,
ngskosten Fahrzeuge, Immobilien) oder für die Einrichtung eines Projekts.
Betriebsko Laufende Kosten für die Aufrechterhaltung des Betriebs, z. B. Miete, Gehälter,
sten Energie, Wartung, Materialverbrauch und Verwaltungskosten.
Variable Kosten, die in direkter Relation zur Produktion oder Nutzung stehen, z. B.
Kosten Rohstoffe, Löhne für Produktionsarbeiter, Transportkosten.
Fixe Kosten, die unabhängig von der Produktionsmenge sind, z. B. Miete,
Kosten Versicherung, Gehälter für Festangestellte.
Lizenzkost Kosten für den Erwerb von Lizenzen, Patenten oder Rechten zur Nutzung von
en Software, Technologien oder Marken.
Finanzieru Kosten, die durch die Finanzierung des Projekts oder Unternehmens
ngskosten entstehen, z. B. Zinsen, Gebühren für Kredite oder Darlehen.
Kostenvergleich
Preis-Leistungs-Verhältnis
Das Preis-Leistungs-Verhältnis (PLV) ist ein Begriff, der beschreibt, wie gut die Qualität eines
Produkts oder einer Dienstleistung im Verhältnis zu ihrem Preis ist. Es hilft dabei, die Effektivität
und den Wert eines Angebots zu bewerten. Ein gutes Preis-Leistungs-Verhältnis bedeutet, dass
der Preis für das, was man bekommt, fair und gerechtfertigt ist.
Wenn du einen Laptop für 500 € kaufst und er sehr leistungsfähig ist (hohe Qualität), hat er ein
gutes Preis-Leistungs-Verhältnis. Wenn ein anderer Laptop für 1000 € mit ähnlicher Leistung
verkauft wird, bietet der günstigere Laptop ein besseres Preis-Leistungs-Verhältnis, da du mehr
für dein Geld bekommst.
Ein gutes Preis-Leistungs-Verhältnis bedeutet also, dass du für den Preis, den du zahlst,
eine hohe Qualität oder viel Nutzen erhältst, während ein schlechtes Preis-Leistungs-
Verhältnis darauf hindeutet, dass der Preis nicht gerechtfertigt ist, wenn man die erhaltene
Leistung betrachtet.
29 von 69

<!-- Seite 30 -->

RE: Quantitative und Qualitative Angebotsbewertung
**Thema kam auch in Fragenkomplex 2.1.3 vor**
Damit z.B ein passendes Angebot gefunden werden kann, legt man eine Angebotsbewertung
an, bei der man verschiedene Verkäufer / Dienstleister anhand quantitativer und oder
qualitativer Faktoren bewertet.
Hier definiert der Angebotssuchende seine eigenen Schwerpunkte, und wie er dieser am besten
Gewichten möchte.
Quantitative Faktoren: Direkt ohne Umwege in Geldeinheiten
- Preis
- Transportkosten und ähnliches (Verpackungskosten, Fracht..)
- Rabatt (Mengenrabatt, Großkundenrabatt, Barzahlungsrabatt, Saisonrabatt u.ä.)
- Sonderangebote
- Skonto (Rabatt, wenn innerhalb einer bestimmten Zeitspanne bezahlt wird)
- Zahlungsspielraum
- Verhandlungsspielraum
Qualitative Faktoren: Qualitative Einschätzung eines Angebotes
- Termintreue
- Allg. Qualität der Güter
- Standortnähe
- Umweltfreundlichkeit der Materialien und evtl. Entsorgungspläne
- Beratung
- Service
Auch Merkmale wie “Freundlichkeit” können dazu genommen werden.
RE: Nutzwertanalyse
**Thema kam auch in Fragenkomplex 2.5.2 vor**
Die Nutzwertanalyse ist eine Methode zur systematischen Entscheidungsfindung, wenn
mehrere Alternativen anhand verschiedener Kriterien bewertet werden müssen. Sie wird oft
verwendet, wenn neben quantitativen auch qualitativen Faktoren eine Rolle spielen.
Beispiel: Entscheidung für ein neues Firmenfahrzeug
Gewich Auto A Auto B Auto C Auto A
Auto B Auto C
Kriterium tung (Bewertun (Bewertu (Bewertun (Punkte
(Punkte) (Punkte)
(%) g) ng) g) )
Anschaffu
30 % 8 6 7 2,4 1,8 2,1
ngskosten
Verbrauc
25 % 7 9 6 1,75 2,25 1,5
h
Sicherheit 20 % 9 8 7 1,8 1,6 1,4
Komfort 15 % 6 7 9 0,9 1,05 1,35
30 von 69

<!-- Seite 31 -->

Umweltfre
10 % 7 8 9 0,7 0,8 0,9
undlich
Gesamt-
100 % 7,55 7,5 7,25
Nutzwert
Wertschöpfung
IT-Systeme tragen zur Wertschöpfung bei, indem sie sowohl direkte Effizienzsteigerungen als
auch indirekte Vorteile wie Qualitätsverbesserungen ermöglichen. Sie automatisieren Prozesse,
beschleunigen die Informationsverarbeitung und verbessern die Ressourcennutzung.
Indirekt führen sie zu einer höheren Produkt- und Servicequalität, reduzieren Fehler und
steigern die Kundenzufriedenheit. Darüber hinaus eröffnen IT-Systeme strategische Vorteile,
indem sie neue Geschäftsmodelle, Märkte und Innovationen ermöglichen.
Durch den Einsatz von IT können Unternehmen global agieren und ihre Wettbewerbsfähigkeit
erhöhen. Eine reine Kostenbetrachtung reicht hier nicht aus, da der wahre Wert von IT in
langfristiger Effizienz, Innovation und strategischen Geschäftsmöglichkeiten liegt.
Hier ist eine Tabelle, die die direkten und indirekten Vorteile von IT-Systemen
gegenüberstellt:
Vorteil Direkte Vorteile Indirekte Vorteile
Automatisierung von Prozessen,
Effizienzsteig Verbesserung der Gesamtproduktivität
Zeitersparnis bei
erung durch optimierte Abläufe
Routineaufgaben
Minimierung von menschlichen Geringere Nacharbeit und
Fehlerredukti
Fehlern durch präzise Reklamationen, was zu höherer
on
Systemverarbeitung Kundenzufriedenheit führt
Schnellere Bessere strategische Ausrichtung und
Schnellere Verarbeitung von
Entscheidun flexiblere Reaktionen auf
Daten, Echtzeit-Informationen
gsfindung Marktänderungen
Senkung von Betriebskosten
Kostenredukt Langfristige Einsparungen durch
durch Prozessoptimierung und
ion Skaleneffekte und Ressourcennutzung
Automatisierung
Verbesserte Effizientere interne
Verbesserung der Zusammenarbeit und
Kommunikati Kommunikation durch digitale
schnellere Umsetzung von Projekten
on Tools (E-Mail, Chat)
Bessere Kundenbindung und
Qualitätsverb Höhere Produktqualität durch
Markentreue aufgrund konsistenter
esserung präzisere Produktionssteuerung
Qualität
Schaffung neuer
Schnellere Markteinführung neuer
Wettbewerbs Geschäftsmöglichkeiten und
Produkte durch optimierte
fähigkeit Innovationen durch digitale
Prozesse
Transformation
31 von 69

<!-- Seite 32 -->

Fragenkomplex 4: Entwickeln, Erstellen und Betreuen von IT-Lösungen
01 IT-Systeme unter Berücksichtigung des IT-Umfeldes konzeptionieren,
konfigurieren, testen und dokumentieren lassen
RE: Bedarfsanalyse
**Bereits Thema in Fragenkomplex 2.2.1**
Eine Bedarfsanalyse ist der Prozess, den Bedarf an Produkten, Dienstleistungen oder Ressourcen zu ermitteln im
Zusammenhang mit den Zielgruppen.
Sie dient dazu, Lücken zwischen dem IST-Zustand und dem SOLL-Zustand zu schließen.
Also: Ermittlung des tatsächlichen Bedarfes, Gruppenanalysen und so weiter.
Hier gibt es verschiedene Arten:
- Marktbedarfsanalyse: Bedarf im Markt oder Branche verstehen
- Unternehmensbedarfsanalyse: Innerhalb eines Unternehmens bspw.
Ressourcenplanung, Personalbedarf
- Kundenbedarfsanalyse: Fokus auf Kunden, Zufriedenheit maximieren und richtige
Produkte anbieten
Lasten- und Pflichtenheft
**Bereits Thema in Fragenkomplex 1.1.3**
Das Lastenheft beschreibt die Anforderungen und Erwartungen des Auftraggebers an ein
Projekt. Es legt fest, was das zu entwickelndes System oder Produkt leisten soll, und
konzentriert sich auf die Ziele und Funktionen des Projekts. Es umfasst die allgemeinen
Wünsche, Anforderungen und Zielsetzungen, ohne jedoch auf technische Details einzugehen.
Das Lastenheft dient somit als Grundlage für die Kommunikation zwischen Auftraggeber und
Auftragnehmer.
Das Pflichtenheft wird vom Auftragnehmer erstellt und beschreibt, wie die Anforderungen des
Lastenhefts konkret umgesetzt werden. Es geht detailliert auf die technischen Lösungen,
Methoden und Vorgehensweisen ein, die erforderlich sind, um die im Lastenheft formulierten
Ziele zu erreichen. Das Pflichtenheft enthält oft spezifizierte Design- und Architekturvorgaben,
technische Standards, die zur Umsetzung erforderlich sind, und eine detaillierte Projektplanung.
Es bildet die Grundlage für die Entwicklung und Umsetzung des Projekts durch den
Auftragnehmer.
32 von 69

<!-- Seite 33 -->

Installation und Einrichtung von Systemen
z.B. Betriebssysteme, BIOS, UEFI, Partitionierung/Formatierungen, Netzwerkanbindungen (IPv4 und IPv6)
Konfiguration, Remote-Desktop, KI-Software
Betriebssyteme:
Betriebssysteme bieten in dem Sinne eine Schnittstelle zwischen dem Computer selbst und
dem Endbenutzer. Es ist in dem Zuge also eher die “Grundsoftware” eines Computers und
verwaltet Programme und Hardware.
Die drei bekanntesten Betriebssysteme mit dem größten Market-Share sind Windows, MacOS
(primär für Apple-Geräte) und Linux.
Die Vermittlung zwischen Hardware und Endbenutzer kann man sich so vorstellen:
BIOS und UEFI
Das BIOS (Basic Input/Output System) und UEFI (Unified Extensible Firmware Interface) sind
beides Firmware-Systeme, die sich unterschiedlich um den Start-Prozess eines Computers
kümmern. Sie erfüllen die gleichen Grundfunktionen, haben sich jedoch mittlerweile klar
voneinander differenziert,
Kriterium BIOS UEFI
Älter (seit den 1980er
Alter Moderner, entwickelt in den 2000er Jahren
Jahren)
Benutzeroberflä
Textbasiert Grafische Benutzeroberfläche (GUI) möglich
che
Startgeschwind Langsam (Ladezeiten
Schneller (effizientere Initialisierung)
igkeit höher)
33 von 69

<!-- Seite 34 -->

Unterstützte Nur MBR (Master Boot
GPT (GUID Partition Table) und MBR
Festplatten Record)
Eingeschränkt (ältere Kompatibel mit modernen Systemen und
Kompatibilität
Systeme) größeren Festplatten
Geringe Höhere Sicherheitsfunktionen wie Secure
Sicherheit
Sicherheitsfunktionen Boot
Begrenzte
Erweiterbarkeit Erweiterungsmöglichkeite Höhere Erweiterbarkeit und Anpassbarkeit
n
Partitionierung
Partitionierung ist der Vorgang, ein Speichermedium wie eine Festplatte in mehrere logischen
Teile zu unterteilen, die unabhängig voneinander als Laufwerk fungieren können.
Hier unterscheidet man zwischen drei Arten von Partitionen:
Die Primäre Partition: die zeitgleich auch als Hauptpartition eines Laufwerkes gesehen werden
kann
Erweiterte Partition: Eine erweiterte Partition ist eine spezielle Partition, die in logische
Laufwerke unterteilt werden kann. Dies ermöglicht die Nutzung von mehr als vier Partitionen auf
einer Festplatte.
Logische Partitionen: Diese befinden sich innerhalb einer erweiterten Partition und können
flexibel erstellt und gelöscht werden.
34 von 69

<!-- Seite 35 -->

Es gibt auch in dem Zusammenhang ”Partitionstabellen”.
MBR (Master Boot Record): Eine ältere Partitionstabelle mit einer Begrenzung von vier
primären Partitionen und maximal 2 TB Festplattengröße.
GPT (GUID Partition Table): Eine modernere Partitionstabelle, die bis zu 128 Partitionen pro
Festplatte und größere Festplattenkapazitäten (mehr als 2 TB) unterstützt.
Formatierung
Die Formatierung ist der Prozess, bei dem eine Partition mit einem Dateisystem versehen wird,
um Daten darauf speichern zu können. Dabei wird der gesamte Inhalt der Partition gelöscht und
das Dateisystem wird auf der Partition eingerichtet.
Arten von Dateisystemen:
FAT32: Ein älteres Dateisystem, das gut mit verschiedenen Betriebssystemen funktioniert, aber
nur bis zu 32 GB Partitionen unterstützt und eine maximale Dateigröße von 4 GB hat.
NTFS: Ein modernes Dateisystem, das von Windows bevorzugt wird und viele Vorteile wie
größere Dateigrößen, Sicherheit und Fehlerkorrektur bietet.
exFAT: Ein Dateisystem, das häufig für Flash-Laufwerke und SD-Karten verwendet wird und
größere Dateien als FAT32 unterstützt.
ext4: Ein Dateisystem, das in Linux-basierten Betriebssystemen verwendet wird und hohe
Leistung sowie Sicherheit bietet.
Formatierungsarten:
Schnellformatierung: Löscht nur die Partitionstabelle und die Indexdaten, sodass die Daten
theoretisch wiederhergestellt werden können. Die Festplatte wird schnell formatiert.
Vollformatierung: Löscht die Daten und prüft die Festplatte auf fehlerhafte Sektoren. Dies
dauert länger, ist aber gründlicher.
IPv4 und IPv6
Eine IP-Adresse ist eine Adresse in Computernetzen, die auf dem Internetprotokoll (IP)
basieren.
Ein Gerät bekommt sie zugewiesen, diese sind dann im Netz angebunden und erreichbar.
Jedoch kann eine IP auch eine Gruppe von Empfängern bezeichnen, oder ein Computer kann
mehrere IP-Adressen zugeordnet haben
Multicast:
Eine Multtcast-Adresse ist dazu da, um von einem Punkt an eine Gruppe von Adressen zu
schicken.
Es können also zeitgleich mehrere Teilnehmer oder eine geschlossene Gruppe angesteuert
werden.
Jedoch muss sich ein Teilnehmer beim Sender “anmelden”.
35 von 69

<!-- Seite 36 -->

Broadcast:
Bei einer Broadcast-Adresse wird ein Datenpaket von einem Punkt aus an alle Teilnehmer des
Nachrichtennetzes übertragen.
Es erreicht alle Teilnehmer im lokalen Netz direkt, und wird nicht von Routern weitergeleitet.
Der Empfänger entscheidet dann selbst, wie er mit dieser Nachricht weiter verfährt.
Unicast:
Adressierung einer Nachricht an einen bestimmten Empfänger, unidirektional oder bidirektional
IPv4 Subnetting:
Früher wurde ein Adressbereich eines IPv4-Bereiches über die Netzklasse definiert. Es ist eine
Aufteilung einer IP-Adresse in Netz- und Geräteadresse
Jedoch wurde dieses Verfahren mit der Einführung von CIDR = Classless Inter-Domain Routing
irrelevant für die Praxis.
Die Subnetzmaske in Kombination mit dem CIDR gibt also die Anzah der Bits an, die den
Netzteil einer IP-Adresse stellen (wird angegeben in /28 und so weiter)
36 von 69

<!-- Seite 37 -->

37 von 69

<!-- Seite 38 -->

Remote-Desktop
Remote Desktop ermöglicht es, einen Computer über das Netzwerk von einem anderen Gerät
aus zu steuern. Um Remote Desktop auf einem Windows-PC einzurichten, muss es zuerst in
38 von 69

<!-- Seite 39 -->

den Einstellungen unter „System“ > „Remote Desktop“ aktiviert werden.
Auf dem Ziel-PC (dem Rechner, auf den zugegriffen werden soll) muss auch sichergestellt
werden, dass Remote Desktop zugelassen wird und keine Firewalleinstellungen diese
blockieren.
Auf dem zugreifenden PC öffnet man die Remote Desktop-Verbindung (über das Startmenü)
und gibt die IP-Adresse oder den Hostnamen des Ziel-PCs ein. Nach der Eingabe der
Anmeldedaten wird die Verbindung hergestellt. Für den Zugriff über das Internet ist zusätzlich
die Konfiguration der Portweiterleitung und ggf. ein VPN erforderlich.
KI-Software
KI-Software umfasst Programme, die maschinelles Lernen und Algorithmen nutzen, um
Aufgaben wie Datenanalyse, Mustererkennung und Entscheidungsfindung zu automatisieren.
Sie wird in Bereichen wie Sprachassistenz, Bilderkennung und Automatisierung eingesetzt.
Es gibt zwei Hauptarten von KI:
Schwache KI (Weak AI):
Diese Art von KI ist auf spezifische Aufgaben ausgelegt und kann diese sehr gut ausführen,
jedoch ohne echtes Verständnis oder Bewusstsein. Ein Beispiel ist der Sprachassistent Siri, der
Sprachbefehle ausführt, aber keine eigene Intelligenz oder Bewusstsein besitzt.
Starke KI (Strong AI):
Auch als „allgemeine KI“ bekannt, strebt diese Art von KI an, menschenähnliche kognitive
Fähigkeiten zu entwickeln, die es ihr ermöglichen, jede intellektuelle Aufgabe zu verstehen und
zu lernen, wie ein Mensch. Diese Art von KI existiert noch nicht, ist aber ein langfristiges Ziel in
der Forschung.
02 Bedarfsgerechte Auswahl von Hardware
Geräteklassen
Geräteklass
Beispielgeräte Eigenschaften
e
Desktop-PCs, Starke Leistung, umfangreiche Erweiterungsmöglichkeiten,
Desktops
Workstations für intensivere Anwendungen
Notebooks,
Ultrabooks, Mobil, kompakter, meist mit guter Akkulaufzeit, geeignet für
Laptops
Gaming- den mobilen Einsatz
Laptops
iMac, Dell
All-in-One Kompakte Bauweise, Bildschirm und Computer in einem
Inspiron All-in-
PCs Gerät, platzsparend
One
Thin Citrix, VMware Geringe Rechenleistung, auf Server angewiesen,
Clients Thin Clients kostengünstig, für den Einsatz in virtualisierten Umgebungen
Rack-Server, Hohe Rechenleistung, für Netzwerk- und
Server
Tower-Server Datenbankverwaltung, meist in Rechenzentren
39 von 69

<!-- Seite 40 -->

Mobile und stationäre Arbeitsplätze
Mobile Arbeitsplätze:
Mobile Arbeitsplätze bieten Flexibilität, da sie es den Nutzern ermöglichen, von verschiedenen
Orten aus zu arbeiten. Geräte wie Laptops, Tablets oder Smartphones sind dafür optimiert,
leicht transportiert und überall genutzt zu werden. Sie bieten eine gute Akkulaufzeit und
kompakte Bauweise, wodurch sie ideal für den Einsatz unterwegs sind. Mobile Arbeitsplätze
sind besonders in modernen Arbeitsumgebungen gefragt, da sie ortsunabhängiges Arbeiten
fördern.
Stationäre Arbeitsplätze:
Stationäre Arbeitsplätze sind fest installierte Arbeitsumgebungen, die meist in Büros oder
spezifischen Arbeitsbereichen zu finden sind. Sie bestehen in der Regel aus Desktop-PCs, All-
in-One PCs oder Workstations, die eine hohe Rechenleistung und erweiterbare Hardware
bieten. Diese Geräte sind auf Dauerbetrieb ausgelegt und eignen sich für Anwendungen, die
viel Leistung erfordern, wie z. B. Datenanalyse oder Grafikdesign. Stationäre Arbeitsplätze
bieten eine stabile und leistungsfähige Arbeitsumgebung.
Barrierefreiheit
Barrierefreiheit bezeichnet Maßnahmen zur Ermöglichung der Nutzung von IT-Systemen für
Menschen mit Einschränkungen. Zusätzliche Hardware kann dabei helfen, die Bedienung zu
erleichtern.
Beispiele für unterstützende Hardware:
Größerer Monitor – Erleichtert das Lesen für Menschen mit Sehschwäche durch größere Darstellung
von Inhalten.
Breitere Tastatur – Hilft Menschen mit motorischen Einschränkungen durch größere Tastenabstände
und spezielle Layouts.
Lautsprecher/Mikrofon – Unterstützt Sprachsteuerung und Sprachausgabe für Personen mit Seh- oder
Mobilitätseinschränkungen.
03 Bedarfsgerechte Auswahl von Software
40 von 69

<!-- Seite 41 -->

Anwendungssoftware sind Programme für bestimmt Anwendungsbereiche, die spezifische Aufgaben für den
Endbenutzer erfüllen.
Bspw. Office-Software, Bildbearbeitung und so weiter.
RE: Betriebssysteme
Betriebssysteme bieten in dem Sinne eine Schnittstelle zwischen dem Computer selbst und
dem Endbenutzer. Es ist in dem Zuge also eher die “Grundsoftware” eines Computers und
verwaltet Programme und Hardware.
Die drei bekanntesten Betriebssysteme mit dem größten Market-Share sind Windows, MacOS
(primär für Apple-Geräte) und Linux.
Die Vermittlung zwischen Hardware und Endbenutzer kann man sich so vorstellen:
Integrierte Entwicklungsumgebungen (IDE)
Eine IDE (Integrated Development Environment) ist eine Software, die Entwicklern hilft,
Programme zu schreiben, zu testen und zu debuggen. Sie kombiniert alle wichtigen
Werkzeuge, die für die Softwareentwicklung erforderlich sind, wie einen Code-Editor, Compiler,
Debugger und Build-Tools, in einer einzigen Anwendung. IDEs bieten Funktionen wie
Syntaxhervorhebung, Autovervollständigung und Fehlererkennung, die den
Entwicklungsprozess effizienter und benutzerfreundlicher machen. Beliebte IDEs sind Visual
Studio, Eclipse und IntelliJ IDEA.
41 von 69

<!-- Seite 42 -->

Standart- und Individualsoftware
Open-Source
Open Source bezeichnet Software, deren Quellcode öffentlich zugänglich ist und von jedem
eingesehen, genutzt und verändert werden kann. Sie wird oft kostenlos angeboten und von
einer Community weiterentwickelt. Vorteile sind Transparenz, Sicherheit und
Anpassungsfähigkeit. Bekannte Beispiele sind Linux, Firefox und LibreOffice. Open-Source-
Projekte stehen unter speziellen Lizenzen wie der GPL oder der MIT-Lizenz, die die Nutzung
und Weitergabe regeln.
Proprietäre Software
Proprietäre Software ist Software, deren Quellcode nicht öffentlich zugänglich ist und nur vom
Entwickler oder Hersteller verändert werden kann. Sie ist meist kostenpflichtig und darf nur
unter bestimmten Bedingungen genutzt werden. Vorteile sind oft einheitlicher Support und
gezielte Weiterentwicklung, während Nachteile die eingeschränkte Anpassbarkeit und
Abhängigkeit vom Anbieter sind. Bekannte Beispiele sind Windows, Microsoft Office und Adobe
Photoshop.
42 von 69

<!-- Seite 43 -->

Beurteilungskritierien von Software
Hier eine Tabelle mit Beurteilungskriterien für Software:
Kriterium Beschreibung
Wie leicht kann die Software an individuelle Bedürfnisse angepasst
Anpassbarkeit
werden?
Wartbarkeit Wie einfach lassen sich Fehler beheben und Updates durchführen?
Wie gut lässt sich die Software mit anderen Systemen oder
Schnittstellen
Programmen verbinden?
Benutzerfreundlich
Ist die Software intuitiv und leicht verständlich?
keit
Sicherheit Schützt die Software zuverlässig vor Angriffen und Datenverlust?
Kosten Welche Anschaffungs- und Folgekosten entstehen?
Leistungsfähigkeit Wie gut funktioniert die Software unter hoher Belastung?
Plattformunabhäng Kann die Software auf verschiedenen Betriebssystemen genutzt
igkeit werden?
Ist die Software Open Source oder proprietär, und welche
Lizenzmodell
Nutzungsrechte gibt es?
RE: KI-Software
KI-Software
KI-Software umfasst Programme, die maschinelles Lernen und Algorithmen nutzen, um
Aufgaben wie Datenanalyse, Mustererkennung und Entscheidungsfindung zu automatisieren.
Sie wird in Bereichen wie Sprachassistenz, Bilderkennung und Automatisierung eingesetzt.
Es gibt zwei Hauptarten von KI:
Schwache KI (Weak AI):
Diese Art von KI ist auf spezifische Aufgaben ausgelegt und kann diese sehr gut ausführen,
jedoch ohne echtes Verständnis oder Bewusstsein. Ein Beispiel ist der Sprachassistent Siri, der
Sprachbefehle ausführt, aber keine eigene Intelligenz oder Bewusstsein besitzt.
Starke KI (Strong AI):
Auch als „allgemeine KI“ bekannt, strebt diese Art von KI an, menschenähnliche kognitive
Fähigkeiten zu entwickeln, die es ihr ermöglichen, jede intellektuelle Aufgabe zu verstehen und
zu lernen, wie ein Mensch. Diese Art von KI existiert noch nicht, ist aber ein langfristiges Ziel in
der Forschung.
43 von 69

<!-- Seite 44 -->

04 Urheber und Lizenzmodelle
Grundlagen Urheberschutz
Das Urheberrecht ist in Deutschland im Urheberrechtsgesetz (UrhG) geregelt und schützt
verschiedene Werke wie Texte, Musik, Bilder, Software, Filme und wissenschaftliche Arbeiten.
Der Schutz entsteht automatisch mit der Schöpfung des Werks, eine Registrierung ist nicht
erforderlich. Die Schutzdauer beträgt in der Regel 70 Jahre nach dem Tod des Urhebers.
Der Urheber hat verschiedene Rechte an seinem Werk. Zu den
Urheberpersönlichkeitsrechten gehört unter anderem der Schutz vor Entstellung und das
Recht auf Namensnennung. Die Verwertungsrechte umfassen die Vervielfältigung,
Verbreitung und öffentliche Wiedergabe eines Werks. Zudem kann der Urheber
Nutzungsrechte durch Lizenzen an Dritte übertragen.
Es gibt jedoch einige Einschränkungen des Urheberrechts. Privatkopien sind erlaubt, solange
dabei keine Kopierschutzmaßnahmen umgangen werden. Zitate sind unter der Voraussetzung
zulässig, dass die Quelle angegeben wird. Zudem gibt es Schrankenregelungen, die eine
Nutzung in Bereichen wie Bildung, Wissenschaft und Berichterstattung ermöglichen.
Lizenzarten
Lizenzart Beschreibung Beispiel
EULA (End User
Standard-Nutzerlizenz für Software, regelt die Microsoft
License
Nutzung, oft ohne Bearbeitungsrechte. Windows
Agreement)
Vorinstallierte
OEM (Original
Lizenz, die an Hardware gebunden ist und meist Windows-
Equipment
nicht auf andere Geräte übertragbar ist. Versionen auf
Manufacturer)
Laptops
GNU (General
Open-Source-Lizenz, erlaubt freie Nutzung,
Public License, Linux, WordPress
Veränderung und Verbreitung der Software.
GPL)
Sehr offene Open-Source-Lizenz, erlaubt fast
MIT-Lizenz React, Angular
uneingeschränkte Nutzung, auch kommerziell.
Ähnlich zur MIT-Lizenz, erlaubt kommerzielle Apache
Apache-Lizenz Nutzung, enthält aber Schutz vor Webserver,
Patentansprüchen. Android
Lizenz für kreative Werke mit verschiedenen Wikipedia-Inhalte,
Creative
Nutzungsbedingungen (z. B. Namensnennung, Bilder auf
Commons (CC)
keine kommerzielle Nutzung). Unsplash
Proprietäre Schränkt Nutzung und Veränderung ein, Quellcode Adobe Photoshop,
Lizenz bleibt geheim. Microsoft Office
44 von 69

<!-- Seite 45 -->

05 Aktivitäten bei Konfigurierung und Installation
Installation und Konfiguration der Hardware
Die physische Installation eines Computers beginnt mit der Hardware-Konfiguration. Dazu
gehört der Einbau von Komponenten wie der CPU, dem Arbeitsspeicher (RAM), Festplatten
oder SSDs sowie Grafikkarten. Anschließend werden Peripheriegeräte wie Monitor, Tastatur,
Maus und Drucker angeschlossen. Zudem muss die Verkabelung und Stromversorgung
überprüft werden, um eine fehlerfreie Inbetriebnahme sicherzustellen.
Nach dem Zusammenbau folgt die Konfiguration des BIOS/UEFI. Hier können wichtige
Einstellungen wie die Boot-Reihenfolge oder Sicherheitsoptionen angepasst werden. Falls
Hardware-Komponenten nicht erkannt werden, hilft eine Hardware-Diagnose, um mögliche
Fehlerquellen zu identifizieren. Zudem sollten Firmware-Updates durchgeführt werden, um die
Kompatibilität und Stabilität des Systems zu verbessern.
Im nächsten Schritt erfolgt die Installation des Betriebssystems. Dabei wird das gewünschte
OS von einem Installationsmedium auf die Festplatte übertragen. Nach der Installation ist eine
Betriebssystem-Konfiguration erforderlich, die unter anderem die Einrichtung von
Benutzerkonten, Netzwerkeinstellungen und Treibern umfasst. Erst nach diesen Schritten ist
das System vollständig einsatzbereit.
45 von 69

<!-- Seite 46 -->

Installation und Konfiguration des Betrieubssystemes
Die Installation und Konfiguration des Betriebssystems ist ein essenzieller Schritt bei der
Einrichtung eines Computers. Zunächst wird das gewünschte Betriebssystem, wie Windows,
Linux oder macOS, von einem Installationsmedium (z. B. USB-Stick oder DVD) auf die
Festplatte oder SSD übertragen. Während des Installationsprozesses müssen grundlegende
Einstellungen wie Sprache, Zeitzone und Partitionsschema gewählt werden.
Nach der Installation folgt die Konfiguration des Betriebssystems. Dazu gehört die Erstellung
von Benutzerkonten, die Einrichtung von Netzwerkeinstellungen und die Installation
notwendiger Treiber für die Hardware. Zudem sollten Sicherheitseinstellungen angepasst,
Updates installiert und gegebenenfalls zusätzliche Softwareprogramme eingerichtet werden.
Erst nach diesen Schritten ist das Betriebssystem vollständig betriebsbereit und optimal auf die
individuellen Anforderungen abgestimmt.
Arbeiten mit der Kommandozeile, Befehlssyntax, Parameter
Die Kommandozeile (auch Terminal, Eingabeaufforderung oder Shell genannt) ermöglicht die
direkte Eingabe von Befehlen zur Steuerung des Betriebssystems. Dabei folgt jeder Befehl
einer bestimmten Syntax:
Syntax-Grundaufbau:
befehl [optionen] [parameter]
Befehl Beschreibung Beispiel
ls / dir Listet Dateien und Verzeichnisse auf ls -l (detaillierte Ansicht)
cd Wechselt das Verzeichnis cd /home/user
mkdir Erstellt ein neues Verzeichnis mkdir Testordner
rm / del Löscht eine Datei rm datei.txt
rmdir Löscht ein leeres Verzeichnis rmdir Ordnername
cp /
Kopiert eine Datei oder ein Verzeichnis cp quelle ziel
copy
mv /
Verschiebt oder benennt Dateien um mv alt.txt neu.txt
move
echo Gibt eine Zeichenkette aus echo "Hallo Welt"
cat /
Zeigt den Inhalt einer Datei an cat datei.txt
type
Durchsucht Dateien nach bestimmten
grep grep "Text" datei.txt
Inhalten
find Sucht nach Dateien und Verzeichnissen find / -name datei.txt
Überprüft die Netzwerkverbindung zu einer
ping ping google.com
IP oder Domain
shutdo shutdown -h now (Linux) / shutdown
Fährt das System herunter
wn /s (Windows)
46 von 69

<!-- Seite 47 -->

Anpassung von Software
Die Anpassung von Software ist ein wichtiger Bestandteil der Systemverwaltung und -
optimierung. Sie ermöglicht es, Programme und Anwendungen an die individuellen Bedürfnisse
und Anforderungen eines Unternehmens oder eines Benutzers anzupassen. Dies kann auf
verschiedene Weisen erfolgen:
Ein häufiger Ansatz ist die Änderung von Konfigurationsdateien, wie etwa .conf, .ini oder .xml.
Diese Dateien enthalten Einstellungen, die das Verhalten der Software steuern, wie etwa
Benutzerpräferenzen, Sicherheitsoptionen oder Performance-Parameter. Durch manuelles
Bearbeiten dieser Dateien können spezifische Anpassungen vorgenommen werden, um die
Software an die jeweiligen Anforderungen zu optimieren.
Zusätzlich zur direkten Bearbeitung von Konfigurationsdateien gibt es auch grafische
Benutzeroberflächen (GUIs) und Kommandozeilen-Interfaces (CLI), die eine
benutzerfreundliche Möglichkeit bieten, Einstellungen zu ändern. Grafische Oberflächen bieten
eine intuitive Möglichkeit, Optionen zu konfigurieren, während die CLI eine schnellere und oft
detailliertere Steuerung ermöglicht.
Die Installation von Software-Paketen und deren Updates ist ebenfalls ein zentraler Aspekt der
Softwareanpassung. Mithilfe von Paketmanagern wie apt, yum oder Chocolatey können
Programme und Updates effizient installiert und verwaltet werden. Diese Tools ermöglichen es,
neue Softwarekomponenten zu integrieren und bestehende Installationen auf den neuesten
Stand zu bringen.
Ein typischer Anwendungsfall für Softwareanpassungen ist die Anpassung an spezifische
Anforderungen, etwa in den Bereichen Sicherheit oder Performance. Ein Unternehmen könnte
beispielsweise Sicherheitsrichtlinien implementieren, um Daten vor unbefugtem Zugriff zu
schützen, oder die Software so konfigurieren, dass sie unter hoher Last besser performt.
Schließlich ist die Integration von Software in bestehende Systeme ein weiterer wichtiger
Aspekt der Anpassung. Die Software muss oft nahtlos in die Infrastruktur eines Unternehmens
eingebunden werden, um eine reibungslose Zusammenarbeit mit anderen Anwendungen oder
Systemen zu gewährleisten. Dies erfordert eine sorgfältige Planung und Anpassung, um
Kompatibilitätsprobleme zu vermeiden und die Systemleistung zu optimieren.
Netzwerkverbindungen und dessen Konfiguration, Dokumentation, Testing und
Troubleshooting
Die Netzwerkkonfiguration ist ein grundlegender Bestandteil der IT-Infrastruktur, da sie dafür
sorgt, dass alle Geräte innerhalb eines Netzwerks miteinander kommunizieren können. Dabei
spielen sowohl die manuelle Konfiguration als auch automatisierte Prozesse wie DHCP
(Dynamic Host Configuration Protocol) eine wichtige Rolle. Troubleshooting-Tools sind dabei
unerlässlich, um Netzwerkprobleme zu identifizieren und zu beheben.
IP-Adressen und Subnetze:
Die Zuweisung von IP-Adressen ist eine der grundlegenden Aufgaben in der
Netzwerkkonfiguration. Es gibt zwei Hauptarten der IP-Zuweisung: statische IP und
dynamische IP über DHCP.
47 von 69

<!-- Seite 48 -->

Statische IP-Zuweisung: Hierbei wird jeder Gerät eine feste IP-Adresse zugewiesen, die sich
nicht ändert. Dies ist vor allem in Serverumgebungen oder bei Netzwerkgeräten wie Druckern
und Kameras wichtig, da die Geräte immer dieselbe Adresse benötigen, um erreichbar zu sein.
Dynamische IP-Zuweisung (DHCP): In den meisten Netzwerken wird DHCP verwendet, um
IP-Adressen automatisch zu vergeben. Der DHCP-Server weist Geräten bei der Verbindung
eine freie IP-Adresse zu, was die Verwaltung des Netzwerks vereinfacht.
Die manuelle Konfiguration von IP-Adressen erfolgt häufig über die Betriebssystem-
Einstellungen oder durch CLI-Befehle wie ipconfig (Windows), ifconfig oder ip (Unix/Linux). Mit
diesen Befehlen kann man sowohl die aktuelle IP-Adresse eines Geräts anzeigen als auch
Netzwerkeinstellungen anpassen.
WLAN-Zugang:
Die Konfiguration von WLAN-Zugängen umfasst mehrere Schritte. Zunächst müssen WLAN-
Profile erstellt werden, die die SSID (Netzwerkname), Verschlüsselungsmethoden und Pre-
Shared Key (PSK) oder Enterprise-Authentifizierung enthalten.
SSID: Der Name des drahtlosen Netzwerks, der in der WLAN-Liste angezeigt wird.
Verschlüsselung: Um die Sicherheit des Netzwerks zu gewährleisten, sollte eine
Verschlüsselung wie WPA2 oder WPA3 verwendet werden.
Pre-Shared Key (PSK): Ein gemeinsames Passwort für die Verbindung zum WLAN. In
Unternehmen kann auch eine Enterprise-Authentifizierung zum Einsatz kommen, bei der
Benutzer mit individuellen Anmeldedaten authentifiziert werden.
Ein wichtiger Schritt ist auch der Verbindungstest und das Messen der Signalstärke, um
sicherzustellen, dass das Gerät zuverlässig mit dem WLAN verbunden ist und keine
Verbindungsprobleme bestehen.
VPN-Konfiguration:
VPNs (Virtual Private Networks) ermöglichen es, sichere Verbindungen über unsichere
Netzwerke, wie das Internet, zu erstellen. Die Einrichtung und Konfiguration von VPN-
Verbindungen erfordert das Setzen von Authentifizierungsverfahren und
Verschlüsselungsstandards, um die Sicherheit der Verbindung zu gewährleisten.
Authentifizierungsverfahren: Stellen sicher, dass nur berechtigte Benutzer auf das Netzwerk
zugreifen können. Häufig verwendete Methoden sind Benutzername und Passwort, Zertifikate
oder Zwei-Faktor-Authentifizierung.
Verschlüsselungsstandards: Sicherstellen, dass die über das VPN gesendeten Daten
verschlüsselt sind, z. B. durch den Einsatz von Protokollen wie OpenVPN oder IPsec.
Diagnosewerkzeuge:
Beim Troubleshooting ist der Einsatz von Diagnosewerkzeugen entscheidend, um
Netzwerkprobleme schnell zu identifizieren und zu beheben. Wichtige Werkzeuge sind:
ping: Mit diesem Befehl wird die Erreichbarkeit eines Hosts im Netzwerk geprüft. Ein
erfolgreicher Ping bedeutet, dass das Ziel erreichbar ist, während ein fehlgeschlagener Ping auf
Netzwerkprobleme hinweist.
48 von 69

<!-- Seite 49 -->

traceroute / tracert: Mit diesem Befehl lässt sich der Pfad ermitteln, den Datenpakete zu einem
Zielserver nehmen. Dies ist nützlich, um Netzwerkengpässe oder Ausfälle zu lokalisieren.
nslookup: Mit diesem Befehl werden DNS-Abfragen durchgeführt. Er ermöglicht es, zu prüfen,
ob ein Domain-Name korrekt in eine IP-Adresse aufgelöst wird.
arp: Das ARP-Protokoll (Address Resolution Protocol) ermöglicht es, die ARP-Tabelle eines
Geräts anzuzeigen oder zu ändern. Diese Tabelle enthält die Zuordnung von IP-Adressen zu
MAC-Adressen innerhalb eines lokalen Netzwerks.
Dokumentation:
Eine umfassende Dokumentation der Netzwerkkonfiguration und Änderungen ist entscheidend
für die Verwaltung und Fehlerbehebung. Alle vorgenommenen Änderungen sollten protokolliert
werden, damit bei zukünftigen Problemen eine schnelle Analyse und Rückverfolgung möglich
ist.
Protokolle (Logs): Die Erstellung von Logs hilft, die Geschichte der Netzwerkaktivitäten
festzuhalten. Diese können bei der Fehleranalyse oder der Nachverfolgung von Vorfällen
nützlich sein.
Fehlerberichte: Im Falle von Netzwerkproblemen sollten detaillierte Fehlerberichte erstellt
werden, die alle relevanten Informationen und durchgeführten Diagnose- und
Reparaturmaßnahmen enthalten.
Tools zur Netzwerküberwachung: Tools wie Wireshark ermöglichen eine tiefgehende
Analyse des Netzwerkverkehrs. Mit Wireshark lassen sich Pakete aufzeichnen und
untersuchen, um Probleme wie Netzwerküberlastung, fehlerhafte Kommunikation oder
Sicherheitslücken zu identifizieren.
Konsolenbefehle für Dateioperationen und Netzwerktroubleshooting
Betrieb
Befehl ssyste Beschreibung
m
Window
dir Listet Dateien und Verzeichnisse im aktuellen Verzeichnis auf.
s
Unix/Lin
ls Listet Dateien und Verzeichnisse im aktuellen Verzeichnis auf.
ux
Unix/Lin
mkdir ux/Wind Erstellt ein neues Verzeichnis.
ows
Window Zeigt Netzwerkinformationen und IP-Adressen für alle
ipconfig
s Netzwerkschnittstellen an.
Unix/Lin Zeigt Netzwerkinformationen und IP-Adressen für alle
ifconfig
ux Netzwerkschnittstellen an (veraltet, durch ip ersetzt).
Unix/Lin Zeigt oder konfiguriert Netzwerkschnittstellen, Routing-Tabellen und
ip
ux andere Netzwerkparameter an.
Unix/Lin Erstellt ein Alias für einen Befehl, um ihn kürzer oder
alias
ux benutzerdefinierter zu gestalten.
Unix/Lin Eine Sammlung von Werkzeugen für die Netzwerkverwaltung und
iproute2
ux Routing in modernen Linux-Systemen.
49 von 69

<!-- Seite 50 -->

Unix/Lin
Zeigt die ARP-Tabelle an oder ändert sie (Mapping von IP-Adressen zu
arp ux/Wind
MAC-Adressen).
ows
Window
del Löscht eine Datei.
s
Unix/Lin
cp Kopiert eine Datei oder ein Verzeichnis an einen neuen Ort.
ux
Window
copy Kopiert eine Datei oder ein Verzeichnis an einen neuen Ort.
s
Unix/Lin
chmod Ändert die Berechtigungen einer Datei oder eines Verzeichnisses.
ux
Sendet Echo-Anfragen an eine IP-Adresse, um die Erreichbarkeit und
ping Alle
Antwortzeiten zu testen.
tracerou Unix/Lin Zeigt den Pfad an, den Datenpakete zu einem Zielserver nehmen, und
te ux misst die Zeit, die jedes Segment benötigt.
nslooku Fragt DNS-Server nach IP-Adressen und Domainnamen auf, um
Alle
p Netzwerkanfragen zu diagnostizieren.
06 Merkmale von Programmiersprachen
Compiler, Linker, Interpreter
Compiler: Compiler übersetzt den Programmcode in Maschinencode. Der Compiler überprüft
den Quellcode auf Fehler, übersetzt es in die jeweilige Programmiersprache des Computers
(bspw. Assembly)
Nicht alle Programmiersprachen haben einen Compiler, z.B sind Python und C# eher
Hybridsrpachen.
Bekannte Compilersprachen sind C, C++ und Pascal.
Linker: Ein Linker führt mehrere Objektdateien zu einer ausführbaren Datei zusammen. Er
sorgt dafür, dass alle Teile des Programms korrekt miteinander verbunden werden.
Interpreter: Ein Interpreter führt direkt den Quellcode aus, ohne vorher zu übersetzen. Ein
Programm kann sofort getestet werden.
Prozedurale und objektorientierte Herangehensweise
Programmiersprachen können prozedural oder objektorientiert sein. In der prozeduralen
Programmierung steht die Abfolge von Befehlen im Vordergrund, während in der
objektorientierten Programmierung (OOP) Daten und Funktionen in Objekten gekapselt werden.
Bekannte objektorientierte Sprachen sind Java, C++ und Python.
Variabeln, Datentypen und –strukturen
Variablen dienen der Speicherung von Werten während der Programmausführung. Datentypen
(z. B. Integer, Float, String) bestimmen, welche Art von Werten gespeichert werden kann.
Datenstrukturen wie Arrays, Listen und Hashmaps helfen bei der effizienten Organisation und
Verarbeitung von Daten.
50 von 69

<!-- Seite 51 -->

Kategorie Beispiel Beschreibung
Eine Variable speichert Werte, die im
Variablen int x = 10;
Programm genutzt werden.
Datentypen
Speichern ganze Zahlen, z. B. int
Ganzzahlen int, long, short
zahl = 5;.
Speichern Dezimalzahlen, z. B.
Fließkommazahlen float, double
double pi = 3.14;.
Speichert ein einzelnes Zeichen, z.
Zeichen char
B. char c = 'A';.
Eine Folge von Zeichen, z. B. string
Zeichenketten string
name = "Hallo";.
Speichert true oder false, z. B. bool
Boolesche Werte bool
aktiv = true;.
Datenstrukturen
Eine feste Sammlung von Elementen
Array int arr[5] = {1,2,3,4,5};
desselben Typs.
List<int> zahlen = new Eine dynamische Sammlung von
Liste
List<int>() {1, 2, 3}; Elementen.
Warteschlange Queue<int> q = new FIFO-Datenstruktur (First-In-First-
(Queue) Queue<int>(); Out).
Stack<int> s = new LIFO-Datenstruktur (Last-In-First-
Stack (Stapel)
Stack<int>(); Out).
HashMap / Dictionary<string, int> dict = Schlüssel-Wert-Speicherung für
Dictionary new Dictionary<string, int>(); schnelle Suche.
LinkedList<int> list = new Eine Liste, bei der jedes Element mit
Verkettete Liste
LinkedList<int>(); dem nächsten verbunden ist.
Kontrollstrukturen
Kontrollstrukturen steuern den Programmfluss. Dazu gehören bedingte Anweisungen (if, else),
Schleifen (for, while) und Sprunganweisungen (break, continue). Sie ermöglichen eine flexible
Ablaufsteuerung innerhalb eines Programms.
Kategorie Beispiel Beschreibung
Bedingte if (x > 0) { ... } else Führe bestimmte Anweisungen aus, wenn eine
Anweisungen { ... } Bedingung erfüllt ist.
for (int i = 0; i < 10; Wiederhole Anweisungen, solange eine Bedingung
Schleifen
i++) { ... } wahr ist (z. B. for, while).
Beendet eine Schleife oder einen Switch-Block
Unterbrechung break;
vorzeitig.
Springt zur nächsten Iteration einer Schleife,
Fortsetzung continue;
überspringt den Rest der aktuellen Iteration.
switch (x) { case 1: Prüft mehrere mögliche Bedingungen und führt den
Switch/Case
... break; } entsprechenden Codeblock aus.
51 von 69

<!-- Seite 52 -->

Prozeduren, Funktionen
Prozeduren und Funktionen sind wiederverwendbare Codeblöcke, die eine bestimmte Aufgabe
erfüllen. Funktionen geben dabei meist einen Wert zurück, während Prozeduren einfach einen
Prozess ausführen. Sie verbessern die Struktur und Lesbarkeit von Programmen.
Klassen, Attribute, Objekte, Methoden, Sichtbarkeit
Begriff Beispiel Beschreibung
class Auto Ein Bauplan für Objekte, der deren Attribute und Methoden
Klassen
{ ... } definiert.
Attribute int Farbe; Eigenschaften, die den Zustand eines Objekts beschreiben.
Auto
meinAuto Eine Instanz einer Klasse, die konkrete Werte für die Attribute
Objekte
= new enthält.
Auto();
void
Funktionen oder Prozeduren, die das Verhalten eines Objekts
Methoden fahren() {
definieren.
... }
public,
Sichtbark Bestimmt den Zugriff auf Klassenmitglieder. public ist von überall
private,
eit zugänglich, private nur innerhalb der Klasse.
protected
Bibliotheken und Frameworks
Bibliotheken sind Sammlungen von Funktionen, die wiederverwendet werden können, um die
Entwicklung zu erleichtern. Frameworks bieten darüber hinaus eine vorgegebene Struktur für
Anwendungen und definieren bestimmte Entwicklungsparadigmen. Beispiele sind Django für
Python oder Spring für Java.
Skriptsprachen, z.B. Shell-Skript
Skriptsprachen wie Bash oder PowerShell werden häufig zur Automatisierung von Aufgaben und
Systemadministration verwendet. Sie sind interpretiert, was bedeutet, dass der Quellcode direkt zur
Laufzeit ausgeführt wird, ohne vorher kompiliert zu werden. Skripte sind besonders nützlich für das
Automatisieren von Aufgaben wie Dateioperationen, Systemwartung und Netzwerkanfragen.
Bash wird oft in Unix/Linux-Systemen eingesetzt, während PowerShell eine Skriptsprache für Windows-
Systeme ist. Auch Python und Perl werden oft als Skriptsprachen genutzt. Sie sind einfach in der
Handhabung und ermöglichen schnelle Entwicklungszyklen.
Debugging, formale und inhaltliche Fehler
Beim Debugging werden Fehler im Code gefunden und behoben. Formale Fehler sind
Syntaxfehler, die der Compiler oder Interpreter erkennt. Inhaltliche Fehler treten auf, wenn ein
Programm zwar lauffähig ist, aber nicht das gewünschte Ergebnis liefert.
52 von 69

<!-- Seite 53 -->

07 Programmierwerkzeuge
Kontrollstrukturen mittels Pseudocode
Kontrollstruktur Pseudocode
Bedingte Anweisung (If, Else) Wenn Bedingung ist wahr // Code Sonst // Code
Schleife (For) Für i von Startwert bis Endwert // Code Ende Für
Schleife (While) Solange Bedingung wahr ist // Code Ende Solange
Schleife (Do-While) Mache // Code Solange Bedingung wahr ist
Switch (Case) Switch Variable Fall Wert1: // Code Sonst // Code
UML = Unified Modeling Language
UML (Unified Modeling Language) ist eine grafische Sprache, die verwendet wird, um das
Design und die Struktur von Software-Systemen darzustellen. Sie besteht aus verschiedenen
Diagrammtypen, die unterschiedliche Aspekte eines Systems modellieren, wie z. B. die
Klassendiagramme (für die Struktur), Sequenzdiagramme (für den Ablauf) oder Use-Case-
Diagramme (für die Anforderungen).
UML hilft Entwicklern, Architekten und anderen Beteiligten, die Software visuell zu verstehen
und zu kommunizieren, bevor der eigentliche Code geschrieben wird.
Use-Case (Anwendungsfalldiagramm):
In der Unified Modeling Language (UML) werden Use Case Diagramme verwendet, um die Interaktionen von
Benutzern (Akteuren) mit einem System darzustellen. Sie nutzen spezielle Symbole und Konnektoren, um die
Anforderungen und Abläufe innerhalb des Systems zu visualisieren.
53 von 69

<!-- Seite 54 -->

54 von 69

<!-- Seite 55 -->

Aktivitätsdiagramme:
In der Unified Modeling Language (UML) werden Aktivitätsdiagramme verwendet, um den Ablauf von
Prozessen oder Workflows innerhalb eines Systems darzustellen. Sie veranschaulichen, wie Aktionen,
Entscheidungen und parallele Aktivitäten miteinander verbunden sind. Aktivitätsdiagramme nutzen
spezielle Symbole, um den Fluss von Aktivitäten und deren Bedingungen darzustellen und bieten eine
klare Sicht auf die Dynamik eines Systems.
55 von 69

<!-- Seite 56 -->

56 von 69

<!-- Seite 57 -->

Klassendiagramm:
Ein Klassendiagramm in UML veranschaulicht die Struktur eines Systems, indem es Klassen,
deren Attribute und die Beziehungen zwischen den Klassen darstellt. Es wird genutzt, um die
statische Struktur eines Systems zu modellieren und die relevanten Klassen sowie Objekte zu
identifizieren.
57 von 69

<!-- Seite 58 -->

Entwurf der Bildschirmausgabemasken
Softwareergonomie befasst sich mit der benutzerfreundlichen Gestaltung von Software, sodass
diese effizient, intuitiv und angenehm zu bedienen ist. Ziel ist es, die Interaktion zwischen
Nutzer und Software so einfach und fehlerfrei wie möglich zu gestalten.
58 von 69

<!-- Seite 59 -->

Corporate Identity (CI) umfasst das einheitliche Erscheinungsbild und die Werte eines
Unternehmens, die durch Design, Kommunikation und Verhalten nach außen hin vermittelt
werden. Es sorgt dafür, dass ein Unternehmen in der Öffentlichkeit ein konsistentes und
wiedererkennbares Bild hinterlässt.
Barrierefreiheit in der Softwareentwicklung bedeutet, dass Anwendungen so gestaltet sind, dass
sie auch von Menschen mit Einschränkungen, wie etwa Seh- oder Hörbehinderungen,
problemlos genutzt werden können. Dies umfasst beispielsweise die Nutzung von
Bildschirmlesern oder die Bereitstellung alternativer Texte für Bilder.
Fehleranalyse Quellcode
Macht eigentlich keinen Sinn, groß auszuführen, ist eine rein praktische Sache.
Schreibtischtest
Ein Schreibtischtest ist eine Methode, bei der ein Programm oder Algorithmus auf Papier oder
am Schreibtisch „durchgespielt“ wird, ohne den Computer zu verwenden. Dabei simuliert der
Entwickler Schritt für Schritt die Ausführung des Codes, um Fehler zu finden, die Logik zu
überprüfen oder mögliche Verbesserungen zu erkennen.
08 Grundlagen relationale Datenbanken
Einfache ER-Modelle
Das ERM dient dazu die Daten und deren Beziehungen auf konzeptioneller Ebene, unabhängig
von einem DBS darzustellen. Es ist die abstrahierte Darstellung von Vorgängen respektive
Beziehungen zwischen Daten aus der realen Welt, die anschließend in einem Datenmodell
umgesetzt werden sollen. Es dient dazu, die semantische Richtigkeit eines Modells vor dessen
Implementierung zu klären.
Die Darstellung wird auch als Entity-Relationship-Diagramm (ERD) bezeichnet.
Das Modell beinhaltet zwei Grundelemente, nämlich Entitäten und Beziehungen.
Darstellung (Chen Notation):
Entitätsmengen oder Entitytypen werden im ER-Modell durch ein Rechteck mit der darin
befindlichen Bezeichnung dargestellt.
Beziehungen oder Relationships zwischen zwei Entitätsmengen werden durch Verben
beschrieben. Dargestellt werden sie durch eine Raute mit dem Namen der Beziehung.
Wir unterscheiden:
1:1 Beziehung:
59 von 69

<!-- Seite 60 -->

1:n Beziehung:
Ein Kunde kann mehrere Aufträge erteilen, umgekehrt ist ein bestimmter Auftrag genau einem
Kunden zugeordnet.
m:n Beziehung:
Ein Mitarbeiter kann unterschiedliche Firmenwagen fahren, umgekehrt kann ein Firmenwagen
von unterschiedlichen Mitarbeitern gefahren werden.
60 von 69

<!-- Seite 61 -->

Fragenkomplex 5: Durchführen und Dokumentieren von
qualitätssichernden Maßnahmen
01 Grundverständnis
Betriebliche QM-Systeme
Ein Qualitätsmanagementsystem (QMS) ist ein strukturiertes Konzept, das Unternehmen
dabei unterstützt, die Qualität ihrer Produkte und Dienstleistungen sicherzustellen. Es umfasst
festgelegte Prozesse, Richtlinien und Verantwortlichkeiten, die eine kontinuierliche
Verbesserung ermöglichen. Zum Beispiel könnte ein Unternehmen ein QMS einführen, um
sicherzustellen, dass alle Produkte vor dem Versand strengen Qualitätsprüfungen unterzogen
werden, wodurch Fehler minimiert und Kundenzufriedenheit maximiert werden.
QS-Normen
Qualitätssicherungsnormen (QS-Normen) legen klare Standards fest, die Unternehmen
dabei helfen, konsistente Qualität zu gewährleisten. Diese Normen geben vor, welche
Anforderungen erfüllt sein müssen, um Produkte oder Dienstleistungen als "qualitativ
hochwertig" zu betrachten. Ein Beispiel ist die ISO 9001, die weltweit als Standard für
Qualitätsmanagementsysteme anerkannt ist. Unternehmen, die dieser Norm folgen, sorgen
dafür, dass sie ihre Prozesse regelmäßig überprüfen und optimieren.
61 von 69

<!-- Seite 62 -->

Zertifizierung
Eine Zertifizierung bestätigt, dass ein Unternehmen oder Produkt bestimmte, international
anerkannte Standards erfüllt. Diese Zertifizierung erfolgt durch unabhängige Prüfstellen wie
TÜV oder DEKRA. Ein Beispiel ist das ISO 9001-Zertifikat, das Unternehmen erhalten, wenn
sie nachweisen, dass sie ein effektives Qualitätsmanagementsystem implementiert haben. Der
Zertifizierungsprozess umfasst eine gründliche Prüfung und wird regelmäßig durch
Überwachungsaudits überprüft, um sicherzustellen, dass die Standards weiterhin eingehalten
werden.
02 Maßnahmen des Qualitätsmanagent für eigenen Arbeitsbereich kennen,
planen und anwenden
Qualitätsplanung und Qualitätsziele
Die Qualitätsplanung beginnt mit der Ermittlung des Ist-Zustands, also einer
Bestandsaufnahme der aktuellen Qualitätssituation im Unternehmen. Hierbei werden
bestehende Prozesse, Produkte und Dienstleistungen analysiert, um Schwachstellen oder
Verbesserungspotenziale zu identifizieren. Ein Beispiel wäre die Analyse der
Produktionsqualität, um herauszufinden, an welchen Stellen fehlerhafte Produkte auftreten.
Im nächsten Schritt wird der Ziel-Zustand festgelegt. Dabei werden konkrete Qualitätsziele
definiert, die erreicht werden sollen, wie beispielsweise eine Reduzierung der Fehlerquote um
10 % oder eine Erhöhung der Kundenzufriedenheit auf 95 %. Diese Ziele dienen als
Orientierung und Grundlage für die Maßnahmen, die zur Verbesserung der Qualität ergriffen
werden müssen.
Durch regelmäßige Überprüfung und Anpassung der Prozesse wird sichergestellt, dass die
Qualitätsziele erreicht werden.
Qualitätslenkung (Umsetzung der Planphase)
Qualitätslenkung ist der Prozess, der sicherstellt, dass Produkte und Dienstleistungen die
festgelegten Qualitätsstandards erfüllen. Dieser Prozess umfasst die Festlegung klarer
Qualitätsziele, die Implementierung von Kontrollverfahren und die kontinuierliche Verbesserung
der Qualität. Wichtige Methoden sind die Qualitätskontrolle während der Produktion sowie die
Nutzung von Kundenfeedback zur Identifizierung von Verbesserungsmöglichkeiten.
Ein zentraler Bestandteil der Qualitätslenkung ist die Anwendung statistischer Werkzeuge, wie
z. B. Six Sigma, um Fehler zu minimieren. Zudem müssen alle Mitarbeiter in den
Qualitätsprozess eingebunden sein, um eine kontinuierliche Verbesserung zu gewährleisten.
Durch eine effektive Qualitätslenkung können Unternehmen ihre Kundenzufriedenheit steigern,
Effizienz und Kosteneinsparungen erzielen und ihre Wettbewerbsfähigkeit erhöhen.
Werkzeug Beschreibung
Balkendiagramm, das die häufigsten Fehlerquellen nach
Pareto-Diagramm
Häufigkeit darstellt (80/20-Regel).
FMEA (Fehler-
Methode zur Identifikation und Bewertung potenzieller
Möglichkeits- und Einfluss-
Fehlerquellen und deren Risiken.
Analyse)
62 von 69

<!-- Seite 63 -->

Diagramm zur Darstellung der Häufigkeit von Messwerten,
Histogramm
um Verteilungen und Muster zu erkennen.
Streudiagramm (Scatter Diagramm zur Analyse der Beziehung zwischen zwei
Plot) Variablen und Erkennung von Korrelationen.
Werkzeug zur Überwachung von Prozessen, um
Kontrollkarten (Control
festzustellen, ob sie stabil sind oder angepasst werden
Charts)
müssen.
Strukturierte Methode zur Prozessverbesserung in den
Six Sigma (DMAIC)
Phasen Define, Measure, Analyze, Improve, Control.
PDCA – Plan, Do, Check, Act
PDCA (Plan-Do-Check-Act) ist ein kontinuierlicher Verbesserungszyklus, der hilft, Prozesse zu
optimieren.
Phase Beschreibung
Ziele setzen, Probleme analysieren und einen Plan zur Lösung
Plan
entwickeln.
Do Den Plan umsetzen, Maßnahmen durchführen und Daten sammeln.
Check Ergebnisse überprüfen, analysieren und mit den Zielen vergleichen.
Act Anpassungen vornehmen, Prozess verbessern und den Zyklus fortsetzen.
Testprotokoll Einrichten eines Arbeitsplatzes
Testprotokolle sind strukturierte Dokumente, die die Durchführung, Bedingungen und
Ergebnisse von Tests detailliert beschreiben und sicherstellen, dass Software oder Systeme
gründlich geprüft werden. Sie erleichtern die Nachvollziehbarkeit und ermöglichen es
Entwicklern und Testern, auftretende Fehler oder Abweichungen systematisch zu analysieren.
Effektive Testprotokolle sind entscheidend, um die Qualität und Zuverlässigkeit eines Produkts
zu gewährleisten.
Typischer Aufbau:
Allgemeine Daten (Datum, Prüfer, Arbeitsplatz-ID)
Prüfpunkte (Hardware, Software, Netzwerkverbindung, Sicherheitsrichtlinien)
Ergebnisse (Bestanden/Nicht bestanden, Abweichungen)
Maßnahmen (Fehlerbehebung, Nachkontrolle)
Fragenkomplex 6: Umsetzen, Integrieren und Prüfen von Maßnahmen zur
IT-Sicherheit und zum Datenschutz
01 Regelungen IT-Sicherheit Grundschutz
Gewährleistung Verfügbarkeit, Vertraulichkeit, Integrität der Daten
DSGVO:
Regelt auf europäischer Ebene, wie personenbezogene Daten erhoben, verarbeitet oder
gespeichert und geschützt werden müssen.
63 von 69

<!-- Seite 64 -->

Ebenso definiert es ein Recht auf Auskunft über die gespeicherten Daten, ein Recht auf
Löschung bzw. Recht auf Vergessenwerden, und eine grobe Definition von geeigneten
technischen und organisatorischen Maßnahmen bzw. Richtlinien.
Bundesdatenschutzgesetz (BDSG):
Gesetz auf nationaler Ebene, die die DSGVO ergänzt und noch spezifischere Regelungen für
Deutschland festlegt. Es regelt unter anderem den Umgang mit besonders sensiblen Daten, die
Videoüberwachung und die Rechte von Mitarbeitern im Zusammenhang mit der Datenerhebung
und –Verarbeitung.
Die grundlegenden IT-Schutzziele sind:
Vertraulichkeit: Schutz vor unbefugtem Zugriff.
Integrität: Sicherstellung der Korrektheit und Vollständigkeit von Informationen.
Verfügbarkeit: Sicherstellung, dass Informationen jederzeit für berechtigte Benutzer verfügbar
sind.
Recht Beschreibung
Betroffene Personen haben das Recht, Auskunft über die zu ihrer
Recht auf Auskunft
Person gespeicherten Daten und deren Verarbeitung zu erhalten.
Recht auf Betroffene können die Berichtigung unrichtiger oder unvollständiger
Berichtigung personenbezogener Daten verlangen.
Recht auf Löschung Personen haben das Recht, die Löschung ihrer
(Recht auf personenbezogenen Daten zu verlangen, wenn keine rechtlichen
Vergessenwerden) Gründe für deren Speicherung bestehen.
Recht auf
Betroffene können die Einschränkung der Verarbeitung ihrer Daten
Einschränkung der
verlangen, z. B. wenn die Richtigkeit der Daten bestritten wird.
Verarbeitung
Personen haben das Recht, ihre Daten in einem strukturierten,
Recht auf
gängigen und maschinenlesbaren Format zu erhalten und an einen
Datenübertragbarkeit
anderen Dienstleister zu übertragen.
Betroffene können der Verarbeitung ihrer personenbezogenen
Widerspruchsrecht Daten widersprechen, wenn diese aufgrund eines berechtigten
Interesses oder für Direktmarketing verwendet werden.
Recht auf Widerruf Wenn die Verarbeitung auf einer Einwilligung basiert, können
der Einwilligung Betroffene diese Einwilligung jederzeit widerrufen.
Recht auf Erhebung
Das BDSG regelt spezifisch den Umgang mit Beschäftigtendaten,
und Verarbeitung von
z. B. im Zusammenhang mit dem Arbeitsverhältnis.
Beschäftigtendaten
Maßnahmen zur Informationssicherheit
TOM (Technische und Organisatorische Maßnahmen)
Gebot Erläuterung Umsetzungsbeispiel
Verwehrung des Zutritts zu Schlüssel, Code,
Zutrittskontrolle
Räumlichkeiten Biometrische Sensoren
64 von 69

<!-- Seite 65 -->

Verwehrung des Zugangs zu Sichere Passwörter, Zwei-
Zugangskontrolle
Verarbeitungsanlagen Faktor-Authentifizierung
Verhinderung des unbefugten
Datenträgerkontrolle Lesens, Kopierens, Veränderns Verschlüsselung
oder Löschens von Datenträgern
Verhinderung der unbefugten
Eingabe, des Lesens, Kopierens,
Speicherkontrolle Veränderns oder Löschens von Verschlüsselung
gespeicherten
personenbezogenen Daten
Verhinderung der unbefugten
Nutzung automatisierter
Benutzerkontrolle Verschlüsselung
Verarbeitungssysteme und
Datenübertragung
Gewährleistung, dass nur
Berechtigte auf Berechtigungen,
Zugriffskontrolle
personenbezogene Daten elektronische Signaturen
zugreifen können
Feststellbarkeit, an welche Stellen
Übertragungskontrolle personenbezogene Daten Protokolle
übermittelt wurden
Kontrollierbarkeit, wer wann
welche personenbezogenen Daten
Eingabekontrolle Logfile
eingegeben, verändert oder
gelöscht hat
Gewährleistung der Datenintegrität
Verschlüsselung,
Transportkontrolle und Vertraulichkeit bei
Benutzerrechte
Datenübermittlung/Transport
Wiederherstellbarkeit von
Wiederherstellbarkeit Backup, USV
Systemen im Störungsfall
Sicherstellung, dass alle
Systemüberwachungsman
Zuverlässigkeit Systemfunktionen verfügbar sind
agement
und Störungen gemeldet werden
Kein Beschädigen von Daten
Datenintegrität Backup
durch Fehlfunktionen des Systems
Verarbeitung personenbezogener
Auftragskontrolle Daten nur im Rahmen des Protokollierung
entsprechenden Auftrags
Schutz personenbezogener Daten
Verfügbarkeitskontrolle Backup, RAID
vor Verlust und Zerstörung
Trennung von Trennung physikalischer
personenbezogenen Daten, die zu Netze, getrennte
Trennbarkeit
unterschiedlichen Zwecken personelle
erhoben wurden Zuständigkeiten
IT-Sicherheitsbeauftragter und Datenschutzbeauftragter im Vergleich
IT-Sicherheitsbeauftragter:
- Überwacht die Umsetzung von Maßnahmen zur Vermeidung von Cyberbedrohungen
und zur Gewährleistung der Integrität, Verfügbarkeit und Vertraulichkeit von Daten. Auch
65 von 69

<!-- Seite 66 -->

ist dieser für die Einhaltung geltender Gesetze und Vorschriften im Bereich der IT-
Sicherheit zuständig.
Datenschutzbeauftragte:
- Datenschutzbeauftragte kümmern sich um die EInhaltung von Gesetzen und
Vorschriften im Bereich des Datenschutzes verantwortlich. Dies beinhaltet die
Einhaltung von Datenschutzvorschriften bei der Verarbeitung von personenbezogenen
Daten und die Beratung von Mitarbeitern und Führungskräften zu Fragen des
Datenschutzes
IT-Sicherheitsrichtlinien:
Richtlinie Beschreibung
Passwörter sollten 8–12 Zeichen lang sein und eine Mischung aus
Passwort-Richtlinie
Groß-/Kleinbuchstaben, Zahlen und Sonderzeichen enthalten.
Benutzer erhalten nur Zugriff auf Systeme und Daten, die sie für ihre
Zugriffskontrolle
Arbeit benötigen (Prinzip der geringsten Privilegien).
Multi-Faktor-
Setzen Sie MFA ein, um den Zugriff auf Systeme zusätzlich
Authentifizierung
abzusichern.
(MFA)
Datenverschlüssel Verschlüsseln Sie sensible Daten sowohl bei der Übertragung als
ung auch bei der Speicherung.
Installieren Sie regelmäßig Updates und Patches, um
Software-Updates
Sicherheitslücken zu schließen.
Antivirus- und Verwenden Sie aktuelle Antivirus- und Antimalware-Programme, um
Malware-Software Schutz vor schadhafter Software zu gewährleisten.
Führen Sie regelmäßige Backups wichtiger Daten durch und
Backup-Richtlinie
speichern Sie diese an sicheren Orten.
Schulung der Schulen Sie Mitarbeiter regelmäßig in Bezug auf Sicherheitspraktiken
Mitarbeiter und Phishing-Versuche.
Arten von Verschlüsselung
Verschlüsselungsmethode Funktionsweise
Symmetrische Ein einziger Schlüssel wird sowohl zum Verschlüsseln als
Verschlüsselung auch zum Entschlüsseln verwendet.
Asymmetrische Zwei Schlüssel: ein öffentlicher (zum Verschlüsseln) und ein
Verschlüsselung privater (zum Entschlüsseln).
Kombination aus symmetrischer und asymmetrischer
Hybride Verschlüsselung Verschlüsselung: Der symmetrische Schlüssel wird mit einem
asymmetrischen Verfahren gesichert.
Personelle Maßnahmen
Personelle Maßnahmen sind eine Reihe von Strategien, in derman gezielt versucht Mitarbeiter
in Sicherheitspraktiken zu schulen und zu sensibilisieren.
Auch sind Zugangskontrollen und Berechtigungen eine Maßnahme an einer Person, um sicher
zu gehen, dass jeder Mitarbeiter nur Zugriff auf die Informationen hat, die er für seine Arbeit
benötigt.
66 von 69

<!-- Seite 67 -->

Ein Notfallplan hilft dann, damit Mitarbeiter geübt sind, im Falle eines Sicherheitsvorfalls schnell
und richtig zu agieren.
Einhaltung der Grundzüge der Datenschutzzgesetze überprüfen (DSGVO, BDSG)
Personenbezogene Daten
Personenbezogene Daten sind grundsätzliche alle Daten, die sich auf eine identifizierbare
natürliche Person beziehen. Beispielweise Namen, Telefonnummer, Adressen und auch
Merkmale der Person.
Anonymisierung:
Bei der Anonymisierung werden personenbezogene Daten so verändert, dass diese nicht mehr
einer Person sowohl direkt als auch indirekt zugeordnet werden können.
Bspw. Durch das Löschen von Adressen und Identifikatoren.
Pseudonymisierung:
Pseudonymisierung ist die ”harmlosere” Variante, hier werden personenbezogene Daten nur so
verändert, dass sie ohne zusätzliche Informationen nicht mehr einer bestimmten Person
zugeordnet werden können
02 Schutzbedarfsanalyse nach BSI
Eine Schutzbedarfsanalyse hat im Grunde 4 wichtige Schritte:
Identifikation der Schutzobjekte
- Hier wird geschaut, welche Daten, Anwendungen, IT-Systeme, Räume oder
Kommunikationsverbindungen geschützt werden müssen
Bewertung des Schutzbedarfs
- Dies wird in niedrig, mittel und hoch eingeteilt. Zur Bewertung wird primär eingeschätzt,
welche Auswirkungen ein Fall beim jeweiligen Schutzobjekt haben könnte, bspw. Bei
Datenverlust, Ausfall oder einer Manipulation
Ableitung von Schutzmaßnahmen
- In diesem Schritt werden z.B. anhand der oben genannten technischen und
organisatorischen Maßnahmen passende Maßnahmen für diesen Schutzbedarf
ausgewählt
Dokumentation und Umsetzung
- Abschließend werden Ergebnisse und Auswertungen niedergeschrieben und
dokumentiert. Diese werden auch regelmäßig überprüft durch interne Audits oder
externe Firmen.
03 Modellierung arbeitsplatzbezogenes Sicherheitskonzept nach BSI
67 von 69

<!-- Seite 68 -->

Bausteine aus Grundschutzkatalog
Schutzbedarfskategorien
Risiko-Klassifikation, z.B. mit Matrix
ISMS kennen und unterstützen
04 Umsetzung des arbeitsplatzbezogenes Sicherheitskonzept nach BSI
unterstützen
Schaffung Sicherheitsbewusstsein
Z.B Security by Design, Security by Default
IT-Sicherheitsmanagement
Technische, Organisatorische und personelle Schutzmaßnahmen
Härtung Betriebssystem
Datensicherung / Backupverfahren
Sicherung der Verfügbarkeit
Bspw. NAS
Zugangs- und Zugriffskontrolle
Verschlüsselungstechniken
Hashwerte, Zertifikate und digitale Signaturen
Authentifizierung
Bspw. MFA, Two-Factor,
Personal Firewall und dessen Anspassung
68 von 69

<!-- Seite 69 -->

69 von 69
