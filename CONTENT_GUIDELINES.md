# Content-Guidelines

Stand: 04.06.2026

Diese Regeln gelten fuer jedes Lern-Kapitel in `src/content/lessons/` und fuer
jeden Chat, der ein Kapitel schreibt oder ueberarbeitet. Sie ergaenzen
`KAPITEL_ARBEITSABLAUF.md`, `KAPITEL_QUALITAET.md` und
`INHALTSVERZEICHNIS_JAHR_1_2.md`.

`KAPITEL_ARBEITSABLAUF.md` ist verbindlich. Wenn der dort beschriebene
Quellen-/Benchmark-Vorlauf fehlt, darf kein Kapiteltext geaendert werden.

## Zielgruppe

- Auszubildende Fachinformatiker im 1. und 2. Lehrjahr
- Berufsschueler, die ein klares Nachschlagewerk brauchen
- Lernende vor Klausuren oder Pruefungen
- Ausbilder, die Inhalte strukturiert wiederfinden wollen

Der Texthorizont liegt bei Lernenden ohne Vorwissen. Praezision verlieren wir
trotzdem nicht. Wir erklaeren auch das, was Fortgeschrittene "eh schon wissen".

## Anspruch

1. **Fachliche Korrektheit**: keine vereinfachte Halbwahrheit, keine unbelegte Behauptung.
2. **Didaktische Klarheit**: Komplexes wird einfach erklaert, nicht weggelassen.
3. **Quellenbasis**: zentrale Fakten werden mit serioesen Quellen abgesichert.

## Pflicht-Workflow pro Kapitel

Der detaillierte Ablauf steht in `KAPITEL_ARBEITSABLAUF.md`. Diese Kurzfassung
ist nur die Erinnerung, nicht der Ersatz fuer die Ablaufdatei.

### 1. Recherche

- Vor jeder inhaltlichen Aenderung wird zuerst eine Quellen- und
  Benchmark-Matrix erstellt oder aktualisiert.
- Mindestens 3 serioese Quellen lesen, davon mindestens 1 Primaerquelle.
- Primaerquellen sind zum Beispiel FIAusbV, KMK-Rahmenlehrplan, BIBB,
  BSI-Grundschutz, RFCs, Gesetze, Normen oder offizielle Spezifikationen.
- Bei Recht, Sicherheit, Normen, Protokollen und Zahlenwerten keine ungeprueften
  Blog-Aussagen uebernehmen.
- Fakten, URLs und Abgrenzungen notieren und spaeter in Quellenbank oder
  Tag-Mapping pflegen.
- Vergleichbare Lernangebote pruefen: Was erklaeren sie gut, was lassen sie
  aus, wo sind sie zu knapp, zu pruefungslastig oder fachlich unsauber?
- Die Matrix trennt strikt:
  - offizielle Ausbildungsquellen
  - fachliche Primaerquellen
  - serioese didaktische Vergleichsquellen
  - Pruefungs-/Kataloghinweise
  - eigene Schlussfolgerungen

### 2. Skizze

Vor dem Schreiben klaeren:

- Was kann der Leser nach dem Kapitel?
- Welche Begriffe braucht jemand ohne Vorwissen?
- Welche Missverstaendnisse passieren typisch?
- Welche Beispiele machen das Thema greifbar?
- Welche Teile gehoeren als Kapitel, Abschnitt, Box oder Glossarbegriff in die App?
- Was muss unser Kapitel besser machen als die gefundenen Lernangebote?

### 3. Schreiben

Das Kapitel folgt dem Kapitelstandard:

- kurzer Einstieg: Was ist das und was kann ich danach?
- einfache Analogie oder mentales Modell, wenn sie wirklich hilft
- Fachbegriffe knapp und korrekt definieren
- Kernwissen in Tabellen, Regeln, Formeln oder klaren Listen verdichten
- Verfahren und Rechenwege Schritt fuer Schritt zeigen
- Beispiele erklaeren den Stoff; sie pruefen den Leser nicht ab
- Fehlerfallen knapp und direkt beim passenden Inhalt nennen
- keine kuenstlichen Berufssituationen, wenn sie den Lernfluss stoeren

Weitere Regeln:

- Wichtige Glossar-Begriffe beim ersten sinnvollen Auftreten mit `<Term id="...">...</Term>` markieren.
- Jeder verwendete Term hat einen Eintrag in `src/content/glossar/*.ts`.
- Quellen-Tags fuer das Kapitel in `src/content/quellen/tagMappings.ts` pflegen.
- Lernfeld, Jahr, AP1/AP2, `Bezug` und `Form` werden in `CURRICULUM_MAPPING.md` oder Metadaten gepflegt.
- Der sichtbare Lerntext bleibt ein erklaerendes Kompendium.

### 4. Selbsttest

Vor `ready` oder `final`:

- Quellen-/Benchmark-Matrix liegt vor und wurde beim Schreiben genutzt.
- Persona-Test: versteht jemand ohne Vorwissen den roten Faden?
- Fachcheck: zentrale Aussagen gegen Quellen kontrollieren.
- Zahlencheck: jede Rechnung, Formel und Einheit selbst nachrechnen.
- Glossarcheck: Term-IDs existieren und sind nicht inflationaer gesetzt.
- Technikcheck: `npm.cmd run lint` und `npm.cmd run build`.

## Was wir nicht schreiben

- keine Fuellsaetze
- keine Marketing-Sprache
- keine langen offiziellen Vorspanne im Kapiteltext
- keine kopierten Pruefungsaufgaben
- keine eigenen Pruefungsaufgaben, Quizbloecke, Karteikarten oder Pruefungssimulationen im normalen Kompendium
- keine vagen Versprechen ohne Belege
- keine internen Bearbeitungsnotizen im Lerntext

## Sprache und Umlaute

Alle deutschen Fließtexte werden in UTF-8 mit echten Umlauten geschrieben:
`ä`, `ö`, `ü`, `Ä`, `Ö`, `Ü` und `ß`.

Nicht verwenden: `ae`, `oe`, `ue` oder `ss` als Ersatz für deutsche Umlaute
und `ß`.

Ausnahmen sind nur technische Bezeichner: Slugs, Dateinamen, IDs, URLs,
Importpfade, Paketnamen, Code-Identifier, ASCII-only Protokollwerte und
historische Strings, die technisch exakt so heißen.
