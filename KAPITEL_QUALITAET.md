# Kapitel-Qualitaetsstandard

Ziel: Jedes Kapitel soll wie ein sehr gutes Ausbildungsskript funktionieren:
fachlich korrekt, didaktisch klar, quellenbasiert und lesbar fuer jemanden ohne
Vorwissen. Das Kapitel erklaert zuerst das Ausbildungswissen. Pruefungslogik
kommt als klar erkennbare Zusatzschicht dazu, nicht als Ersatz fuer den normalen
Lerntext.

## Goldstandard pro Kapitel

Ein Kapitel ist erst final, wenn alle 12 Punkte erfuellt sind.

1. **Zielklarheit**
   - Das Kapitel beginnt mit: Was kannst du danach?
   - Es ist klar, zu welchem Thema und Lernfeld es gehoert.

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
   - Das Kapitel zeigt, wie das Thema in Berufsschule, Betrieb oder Projektpraxis verwendet wird.
   - Es gibt mindestens eine echte Handlungssituation oder Entscheidungsfrage.

7. **Musterloesung**
   - Jede Aufgabe hat eine nachvollziehbare Loesung.
   - Rechenwege nennen Einheiten, Zwischenschritte und Ergebnisinterpretation.

8. **Fehlerfallen**
   - Typische Verwechslungen werden explizit genannt.
   - Es steht dabei, woran man die Falle erkennt.

9. **Transfer**
   - Das Kapitel zeigt mindestens einen Praxisbezug aus IT-Betrieb, Kundenauftrag oder Projekt.
   - Nicht nur Schulbuchwissen.

10. **Pruefungsblick klar trennen**
    - Normale Kapitel duerfen eine kurze Pruefungsbox oder Musteraufgabe enthalten.
    - Umfangreiche Quiz-, Karteikarten- und Pruefungssimulationen gehoeren in den separaten Uebungs- oder Pruefungsmodus.
    - Der normale Lerntext darf nicht nur aus Pruefungstricks bestehen.

11. **Quellenqualitaet**
    - Offizielle oder serioese Quellen: BIBB, FIAusbV, KMK, BSI, RFCs, Gesetze, offizielle Spezifikationen, Herstellerdoku nur fuer herstellerspezifische Fakten.
    - Keine unbelegte Behauptung bei Recht, Sicherheit, Normen oder Pruefungsstruktur.

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
- **B Roh gut**: erklaert das Thema, aber ohne volle Pruefungsdidaktik.
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
5. Danach Feinschliff, Glossar, Quellen und Pruefungsmodus.

## Startpunkt

Wir starten mit dem groessten aktuellen Qualitaetsloch:

```text
LF6: Serviceanfragen, Ticketsystem und Support-Level
```

Warum:

- In der Heatmap stark vertreten.
- Aktuell noch kein eigenes Kapitel in `src/content/lessons/`.
- Didaktisch wichtig, weil es Kommunikation, Prozessdenken und IT-Betrieb verbindet.

Direkt danach:

1. Fehlermanagement und Stoerungsannahme
2. Bedarfsanalyse, Datenerhebung und Feedback
3. Praesentation, Kundenkommunikation und AIDA
4. Mitarbeitermotivation, Teamphasen und Change
5. CRM, ERP, DMS und CMS

## Arbeitsregel ab jetzt

Bei jedem Kapitel gilt:

```text
Erst A+ fuer ein Kapitel herstellen, dann zum naechsten.
```

Keine halbfertigen Kapitel mehr als `ready` markieren. AP1-Relevanz allein macht
ein Kapitel nicht fertig; berufliche Einordnung, Quellen, Glossar und Lesbarkeit
zaehlen mit.

## Abschlussregel fuer jeden Chat

Jeder Chat muss am Ende einen direkt kopierbaren Prompt fuer den naechsten Chat liefern. Der Prompt soll kurz sein, weil die Regeln hier im Projekt liegen.

Format:

```text
Naechster Chat - Prompt:

Du arbeitest im Projekt:
C:\Users\mu.aycetin\Desktop\Neuer Ordner\Porjekte\AP1\grundlast

Nutze AUSBILDUNGS_KOMPASS.md, MASTER_ROADMAP.md, CURRICULUM_MAPPING.md, ROADMAP.md, AP1_LERNPFAD.md und KAPITEL_QUALITAET.md als verbindliche Regeln.

Bitte bearbeite genau diesen Schritt:
[naechster konkreter Schritt]
```

Der naechste Schritt wird nicht geraten, sondern aus `AP1_LERNPFAD.md`, `src/lib/toc/data/*.ts` und dem gerade erreichten Stand abgeleitet.
