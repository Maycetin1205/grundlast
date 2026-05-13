# Ausbildungs-Kompass fuer Grundlast

Stand: 13.05.2026

## Zielbild

Grundlast soll ein vollstaendiges, fachlich belastbares und didaktisch starkes
Kompendium fuer die Fachinformatiker-Ausbildung werden. Der erste Ausbau
konzentriert sich auf das 1. und 2. Lehrjahr, ohne die Ausbildung kuenstlich auf
AP1 zu begrenzen.

AP1 ist eine wichtige Pruefungsschicht, aber nicht das Gesamtziel. Ein Kapitel
muss zuerst Ausbildungswissen sauber erklaeren. Danach wird sichtbar gemacht,
wie dieses Wissen in AP1, Berufsschule, Betrieb oder spaeter AP2 relevant wird.

## Verbindliche Ebenen

Jedes Thema wird in drei Ebenen gedacht:

1. **Ausbildungswissen**
   - Was muss ein angehender Fachinformatiker fachlich verstehen?
   - Welche Begriffe, Modelle, Rechenwege, Prozesse und Grenzen gehoeren dazu?
   - Welche Rolle spielt das Thema im Betrieb?

2. **Handlungskompetenz**
   - Welche Entscheidungen muss man damit treffen koennen?
   - Welche typischen Situationen gibt es bei Kunden, im Team, im Projekt oder im IT-Betrieb?
   - Welche Fehler fuehren in der Praxis zu falschen Ergebnissen?

3. **Pruefungsschicht**
   - Wie kann das Thema in AP1, Berufsschul-Klausuren oder spaeter AP2 auftauchen?
   - Welche Aufgabenmuster, Rechenwege, Begruendungen und Stolperfallen sind typisch?
   - Welche Teile sind Muss-Wissen und welche sind Vertiefung?

## Offizielle Leitplanken

Die inhaltliche Landkarte orientiert sich an:

- FIAusbV, insbesondere Ausbildungsrahmenplan und gestreckte Abschlusspruefung
- KMK-Rahmenlehrplan fuer Fachinformatiker/Fachinformatikerinnen
- BIBB-Umsetzungshilfe Fachinformatiker/Fachinformatikerin
- serioesen Primaerquellen fuer Technik, Recht, Sicherheit und Normen

Wichtige Einordnung:

- Die Fachinformatiker-Ausbildung dauert drei Jahre.
- AP1 prueft die ersten 18 Monate und den dazu passenden Berufsschulstoff.
- Das 1. und 2. Lehrjahr reichen fachlich ueber AP1 hinaus.
- Dieses Projekt priorisiert zuerst Jahr 1 und 2, haelt aber AP2-Anschlussfaehigkeit im Blick.

## Konsequenzen fuer bestehende Dateien

- `ROADMAP.md` beschreibt das Gesamtprojekt.
- `MASTER_ROADMAP.md` beschreibt Releases, Qualitaetsgates und Arbeitsreihenfolge.
- `CURRICULUM_MAPPING.md` verfolgt die Zuordnung zu Lernfeldern, Ausbildungsjahren und Pruefungsrelevanz.
- `AP1_LERNPFAD.md` beschreibt nur die Pruefungs- und Priorisierungsschicht, nicht das Gesamtziel.
- `KAPITEL_QUALITAET.md` gilt fuer alle Kapitel, unabhaengig davon, ob sie AP1-relevant sind.
- `src/lib/toc.ts` bleibt die technische Quelle fuer Navigation und Status.
- `REVIEW_LOG.md` bleibt die Freigabeakte fuer `final`.

## Statuslogik

- `stub`: geplant, fachlich noch nicht ausgearbeitet
- `draft`: Inhalt vorhanden, aber nicht voll lernbar
- `ready`: lernbar und quellenorientiert, aber noch nicht formal freigegeben
- `final`: formal geprueft, Quellen kontrolliert, Build/Lint bestanden, Review dokumentiert

Kein Kapitel wird nur deshalb `ready`, weil es lang ist. `ready` verlangt:
klare Definitionen, nachvollziehbare Beispiele, Quellen, Glossar-Pflege und eine
saubere Trennung zwischen Grundwissen und Pruefungsblick.

## Arbeitsregel ab jetzt

Erst die offenen Stubs und Drafts zu tragfaehigen Ausbildungskapiteln machen.
Danach die `ready`-Kapitel kritisch pruefen und erst bei echter Freigabe auf
`final` setzen.

Die naechste sinnvolle Arbeitsrichtung ist:

1. Mapping-Matrix vervollstaendigen.
2. Offene zentrale Stubs aus Jahr 1/2 ausarbeiten.
3. Bestehende `ready`-Kapitel gegen den neuen Standard pruefen.
4. AP1-Modus und Uebungsmodus als eigene Schichten pflegen.
