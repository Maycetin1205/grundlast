# Kapitel-Qualitaetsstandard

Ziel: Jedes Kapitel funktioniert wie eine sehr gute Lerndatei:
fachlich korrekt, didaktisch klar, quellenbasiert und lesbar fuer jemanden ohne
Vorwissen. Der sichtbare Lerntext erklaert direkt das Thema. Ausbildungs-,
Lernfeld- und Pruefungsbezug werden intern getaggt und fuer Umfang/Reihenfolge
genutzt, aber nicht als langer offizieller Vorspann in jedes Kapitel geschrieben.

Vor jeder Kapitelarbeit gilt `KAPITEL_ARBEITSABLAUF.md`. Diese Datei ist das
Gate gegen eigensinnige KI-Aenderungen: ohne Scope-Klaerung,
Quellen-/Benchmark-Matrix und Abschnitts-Audit wird kein Kapiteltext geaendert.

## Verbindlicher Ausbildungsrahmen

Fuer Jahr 1/2 ist die offizielle Struktur der Fachinformatiker-Ausbildung:

- LF1 Das Unternehmen und die eigene Rolle im Betrieb beschreiben
- LF2 Arbeitsplaetze nach Kundenwunsch ausstatten
- LF3 Clients in Netzwerke einbinden
- LF4 Schutzbedarfsanalyse im eigenen Arbeitsbereich durchfuehren
- LF5 Software zur Verwaltung von Daten anpassen
- LF6 Serviceanfragen bearbeiten
- LF7 Cyber-physische Systeme ergaenzen
- LF8 Daten systemuebergreifend bereitstellen
- LF9 Netzwerke und Dienste bereitstellen

Interne App-Bereiche wie "Grundlagen & Rechnen" sind keine offiziellen
Lernfelder. Sie duerfen nur als Werkzeugbereiche existieren, wenn jedes Kapitel
einen nachvollziehbaren Bezug zu KMK LF1-LF9, FIAusbV oder BIBB hat.

Vor jeder neuen Kapitelarbeit gilt:

1. Offiziellen LF-/FIAusbV-/BIBB-Bezug pruefen.
2. Themen ohne sauberen Ausbildungsbezug parken, umbenennen oder entfernen.
3. Keine internen Projektannahmen als offiziellen Ausbildungsinhalt behandeln.
4. Bei Unsicherheit zuerst Mapping/Audit dokumentieren, dann erst schreiben.
5. Erst Quellen und vergleichbare Lernangebote sammeln, dann Kapiteltext
   schreiben oder aendern.

## Verbindlicher Quellen- und Benchmark-Vorlauf

Vor jeder Kapitelueberarbeitung entsteht zuerst eine kurze Arbeitsmatrix:

| Bereich | Zweck |
|---|---|
| Offizielle Ausbildungsquellen | klaeren, warum das Thema fuer Fachinformatiker Jahr 1/2 relevant ist |
| Fachliche Primaerquellen | sichern Definitionen, Normen, Protokolle, Gesetze, Rechenregeln und Zahlenwerte |
| Serioese Vergleichsangebote | zeigen, wie andere Lernkurse das Thema erklaeren und wo Luecken bleiben |
| Pruefungs-/Kataloghinweise | steuern Umfang und typische Stolperstellen, ohne den Lerntext zum Pruefungstrainer zu machen |
| Eigene Schlussfolgerung | legt fest, was unser Kapitel besser, klarer oder vollstaendiger machen muss |

KI darf daraus nur dann schreiben, wenn die Quellenarten getrennt bleiben.
Offizielle Quellen bestimmen den Rahmen, Primaerquellen bestimmen harte Fakten,
Vergleichsangebote liefern didaktische Ideen, und eigene Schlussfolgerungen
werden als Schlussfolgerungen behandelt.

## Goldstandard pro Kapitel

Ein Kapitel ist erst final, wenn diese Punkte erfuellt sind.

Aktueller Neustart-Stand: Nach der neuen Linie ist `zahlensysteme` seit
2026-06-03 das erste `review-final`-Referenzkapitel. Alte `final`-, `ready`-
und `draft`-Markierungen anderer Kapitel gelten nur als historische
Projektinformationen.

1. **Zielklarheit**
   - Das Kapitel beginnt mit: Was ist das und was kannst du danach?
   - Der sichtbare Einstieg ist kurz und lernorientiert, nicht verwaltungslastig.
   - Lernfeld/AP1/AP2/Umfang werden in Mapping/Metadaten gepflegt.

2. **Mentales Modell**
   - Eine Analogie erklaert den Kern ohne Fachsprache.
   - Die Analogie ist nicht Deko, sondern hilft beim Merken.

3. **Fachliche Definitionen**
   - Alle Fachbegriffe werden knapp, korrekt und anfaengerfreundlich definiert.
   - Keine schwammigen Alltagsdefinitionen bei normierten Begriffen.

4. **Faktenkern**
   - Tabellen, Regeln, Formeln oder klare Listen verdichten das Thema.
   - Wichtiges steht nicht nur in Fliesstext versteckt.

5. **Vorgehen**
   - Bei Rechen-/Analyse-/Modellierungsaufgaben gibt es ein Schritt-fuer-Schritt-Verfahren.
   - Das Verfahren ist wiederholbar, nicht nur an einem Beispiel erklaert.

6. **Anwendungsbeispiele**
   - Beispiele dienen zuerst dem Verstehen, nicht der Simulation kuenstlicher Berufssituationen.
   - Praxisbezug ist erlaubt, wenn er das Thema greifbarer macht; er ist keine Pflichtkulisse.

7. **Verstaendnisbeispiele**
   - Beispiele dienen der Erklaerung, nicht der Pruefungssimulation.
   - Rechenwege nennen Einheiten, Zwischenschritte und Ergebnisinterpretation.
   - Dezente Selbstchecks sind erlaubt, wenn sie den Lernfluss stuetzen.
   - Es gibt keine Aufgabensammlung, keinen Pruefungsmodus und keine kuenstlichen Klausurteile im normalen Lerntext.

8. **Fehlerfallen**
   - Typische Verwechslungen werden knapp genannt.
   - Fehlerhinweise stehen bevorzugt direkt am passenden Verfahren; am Ende hoechstens kompakt.

9. **Transfer**
   - Das Kapitel zeigt, worauf das Wissen aufbaut und wofuer es spaeter gebraucht wird.
   - Keine erzwungenen Kunden-, Projekt- oder Betriebsszenarien, wenn sie den Lernfluss stoeren.

10. **Pruefungs- und Klausurbezug nur intern**
    - AP1, Berufsschule und Klausuren steuern Umfang, Reihenfolge und Vollstaendigkeit.
    - Der sichtbare Lerntext bleibt ein erklaerendes Kompendium.
    - Keine Pruefungsaufgaben, keine Quizbloecke, keine Karteikarten, keine Pruefungssimulationen.
    - Kleine Kontrollfragen duerfen vorkommen, wenn sie unmittelbar erklaert werden und nicht wie ein eigener Aufgabenmodus wirken.
    - Typische Missverstaendnisse duerfen erklaert werden, aber nicht als Aufgabenmodus.

11. **Quellenqualitaet**
    - Offizielle oder serioese Quellen: BIBB, FIAusbV, KMK, BSI, RFCs, Gesetze, offizielle Spezifikationen, Herstellerdoku nur fuer herstellerspezifische Fakten.
    - Keine unbelegte Behauptung bei Recht, Sicherheit, Normen oder Pruefungsstruktur.
    - Vor dem Schreiben wurden vergleichbare Lernangebote geprueft; das Kapitel
      muss bewusst besser oder klarer sein, nicht nur anders formuliert.

12. **Lesbarkeit**
    - Kurze Abschnitte.
    - Keine langen Wandtexte.
    - Begriffe werden konsistent verwendet.
    - Keine 1:1-Uebernahme geschuetzter Pruefungsaufgaben.
    - Keine internen Bearbeitungsnotizen im Lerntext, z. B. "Ich baue dieses Kapitel..." oder Hinweise auf Slugs/Umstrukturierung.

13. **Glossar-Pflege**
    - Alle wichtigen Fachbegriffe werden beim ersten sinnvollen Auftreten mit `<Term id="...">...</Term>` markiert.
    - Jeder verwendete Term hat einen Eintrag in `src/content/glossar/*.ts`.
    - Kurzdefinitionen sind knapp genug fuer Hover-Tooltips; Langdefinitionen erklaeren den Begriff anfaengerfreundlich.
    - Begriffe werden nicht inflationaer markiert: pro Abschnitt nur die fachlich wichtigen Erstvorkommen.

## Bewertungsraster

Jedes Kapitel bekommt intern eine Einstufung:

- **A+ Final**: erfuellt alle 13 Punkte, quellengeprueft, build-getestet.
- **A Nutzbar**: fachlich stark, kleine didaktische oder Quellen-Luecken.
- **B Roh gut**: erklaert das Thema, aber ohne volle Glossar-/Quellenpflege.
- **C Stub/Fragment**: geplant oder nur teilweise brauchbar.

## Status-Gate in `src/lib/toc/data/*.ts`

Der Navigationsstatus ist bewusst strenger als frueher:

- `stub`: Thema ist geplant und wird in der Lernnavigation nicht als fertiger Inhalt angeboten.
- `draft`: Inhalt existiert, ist aber noch nicht fuer Schueler freigegeben.
- `ready`: Kapitel ist ausgearbeitet, quellenorientiert und intern lernbar.
- `final`: Kapitel ist formal geprueft, im `REVIEW_LOG.md` dokumentiert und fuer Weitergabe geeignet.

Neue oder ueberarbeitete Kapitel duerfen erst auf `final` gesetzt werden, wenn die
Freigabe-Checkliste aus `REVIEW_LOG.md` erfuellt ist. `ready` ist kein IHK-/Lehrer-
Guetesiegel, sondern der Status "inhaltlich ausgearbeitet".

## Bearbeitungsstrategie

Nicht alphabetisch arbeiten. Nicht nach Lust arbeiten. Reihenfolge:

1. Grundlagen, die viele Folgekapitel tragen.
2. Stubs, die fuer Jahr 1 und 2 zentrale Begriffe oder Rechenwege abdecken.
3. Bestehende Ready-Kapitel von B/A auf A+ heben.
4. LF7-LF9 abrunden.
5. Danach Feinschliff, Glossar, Quellen und interne Pruefungs-/Umfangslogik.

## Startpunkt fuer Kapitelarbeit

Der Startpunkt wird nicht mehr aus alten Sprint-Notizen abgeleitet. Fuer neue
Kapitelarbeit gelten zuerst diese Dateien:

1. `KAPITEL_ARBEITSABLAUF.md`
2. `INHALTSVERZEICHNIS_JAHR_1_2.md`
3. `CURRICULUM_MAPPING.md`
4. `REVIEW_LOG.md`
5. `KAPITEL_QUALITAET.md`
6. `src/lib/toc/data/*.ts`

Aktueller naechster Grundlagenbaustein:

```text
bit-byte
```

Warum:

- direktes Grundlagenkapitel vor `zahlensysteme`
- Voraussetzung fuer Datenmengen, Datenraten, Speicher, Zeichenkodierung,
  Netzwerke und Zahlensysteme
- inhaltlich nahe an `review-final`, aber noch mit alter Aufgabenlogik

## Arbeitsregel ab jetzt

Bei jedem Kapitel gilt:

```text
Erst A+ fuer ein Kapitel herstellen, dann zum naechsten.
```

Keine halbfertigen Kapitel mehr als `ready` markieren. AP1-Relevanz allein macht
ein Kapitel nicht fertig; Quellen, Glossar, klare Reihenfolge, Verstaendlichkeit
ohne Vorwissen und Lesbarkeit zaehlen mit.

## Abschlussregel fuer jeden Chat

Jeder Chat nennt am Ende:

1. geaenderte Dateien
2. Quellen-/Faktencheck
3. ausgefuehrte technische Checks
4. naechsten sinnvollen Arbeitsschritt
5. einen kurzen Startprompt fuer den naechsten Chat

Der kuerzeste Standardprompt ist:

```text
mach projekt weiter
```

Der neue Chat liest dann die oben genannten Projektdateien.

Optional kann ein konkreter Schritt ergaenzt werden. Der Prompt bleibt kurz,
weil die Regeln hier im Projekt liegen.

Format:

```text
Naechster Chat - Prompt:

Du arbeitest im Projekt:
C:\Users\mu.aycetin\Desktop\Projekte\Porjekte\AP1\grundlast

Nutze KAPITEL_ARBEITSABLAUF.md, INHALTSVERZEICHNIS_JAHR_1_2.md,
CURRICULUM_MAPPING.md, REVIEW_LOG.md und KAPITEL_QUALITAET.md als
verbindliche Regeln.

Bitte bearbeite genau diesen Schritt:
[naechster konkreter Schritt]
```

Der naechste Schritt wird nicht geraten, sondern aus `KAPITEL_ARBEITSABLAUF.md`,
`INHALTSVERZEICHNIS_JAHR_1_2.md`, `CURRICULUM_MAPPING.md`,
`src/lib/toc/data/*.ts` und dem gerade erreichten Stand abgeleitet.
