# Master-Roadmap zur Referenz-Lerndatei

Stand: 18.05.2026

Diese Roadmap ist die fuehrende Arbeitsplanung fuer das Ziel, Grundlast zu einem
deutschlandweit referenzfaehigen Fachinformatiker-Kompendium auszubauen.

## Aktueller Stand

**Zuerst `HANDOFF.md` lesen**: Dort stehen priorisierte Architektur-Auftraege
aus dem Review vom 06.07.2026. Solange dort Auftraege offen sind, gehen sie
vor neuen Inhalts-Aufgaben.

Bewusst ohne Zeit- oder Lese-Schaetzungen. Nur Reifegrad gegen Plan-Pflichten:

- **0.1 (Kompass sauber)** erreicht. AUSBILDUNGS_KOMPASS, MASTER_ROADMAP,
  CURRICULUM_MAPPING liegen vor. AP1 als Pruefungsschicht eingeordnet.
  Content-Validator laeuft mit 0 Fehlern.
- **Darstellungs- und Struktur-Rework** laeuft separat in `CONTENT_REWORK_PLAN.md`.
  Fokus: grosse Ready-Kapitel lesbarer machen, Tabellen/Diagramme stabilisieren,
  Uebungsbloecke vereinheitlichen und Strukturwarnungen systematisch abbauen.
- **0.2 (Jahr-1/2-Abdeckung sichtbar)** offen. 102 Kapitel im TOC erfasst, in
  CURRICULUM_MAPPING.md aber erst 22 abgebildet. Datei verweist zudem noch auf
  den alten Pfad `src/lib/toc.ts` statt `src/lib/toc/data/*.ts`.
- **0.3 (Zentrale Stubs geschlossen)** offen. Mehrere Lernfelder mit Muss-Stubs:
  qualitaet 4/4, arbeitsrecht 2/2, software 6/9, webmedia 4/5.
- **0.4 (Ready ist wirklich ready)** offen. 88 Validator-Warnungen auf
  Ready-Kapiteln. `bit-byte`, `prefixe` und `zahlensysteme` erfuellen den vollen
  Ready-Standard ohne eigene Warnung (Referenzimplementierungen,
  Lernfeld `grundlagen` / Zahlen & Einheiten).
- **0.5 (Reviewzyklus laeuft)** offen. REVIEW_LOG seit 29.04. unangefasst,
  0 von 102 Kapiteln formal final.
- **1.0 (Weitergabefaehige Referenz)** offen.

## Ziel

Grundlast soll nicht nur beim Bestehen der AP1 helfen, sondern Ausbildung,
Berufsschule, Betriebspraxis und Pruefung zusammenbringen.

Der Massstab:

- fachlich korrekt
- offiziell begruendet
- didaktisch stark
- fuer Anfaenger lesbar
- fuer Wiederholung und Pruefung nutzbar
- quellenbasiert und reviewfaehig

## Zielgruppen

- Auszubildende Fachinformatiker im 1. und 2. Lehrjahr
- Lernende vor AP1
- Berufsschueler, die ein klares Nachschlagewerk brauchen
- Ausbilder, die Inhalte strukturiert wiederfinden wollen
- spaeter: Vorbereitung auf AP2 und Fachrichtungen

## Verbindliche Quellenbasis

Jede groessere Inhaltsentscheidung muss gegen diese Ordnungsmittel plausibel
sein:

- FIAusbV: Ausbildungsordnung, Ausbildungsrahmenplan, AP1/AP2-Struktur
- KMK-Rahmenlehrplan: Lernfelder und schulische Handlungssituationen
- BIBB-Umsetzungshilfe: praktische Einordnung der Berufsbildpositionen
- Primaerquellen je Fachthema: BSI, RFCs, Gesetze, Normen, Herstellerdoku,
  offizielle Spezifikationen

## Architektur des Lernsystems

Grundlast besteht langfristig aus sechs Schichten. Aktiv weiterentwickelt werden
1, 2, 5 und 6. Schichten 3 und 4 (Pruefungs- und Uebungsmodus) sind Vision; sie
werden bewusst nicht angefasst, bis das Kompendium tragfaehig steht. Werbeflaechen
fuer noch nicht existente Modi sind zu vermeiden.

1. **Kompendium** (aktiv)
   - normale Kapitel
   - erklaert Begriffe, Zusammenhaenge, Vorgehen und Praxis

2. **Curriculum-Mapping** (aktiv)
   - Zuordnung zu KMK-Lernfeld, Ausbildungsrahmenplan, Jahr, AP1/AP2 und Fachrichtung
   - verhindert blinde Flecken

3. **Pruefungsmodus** (Vision, nicht im aktuellen Plan-Horizont)
   - AP1-Aufgabenmuster
   - typische Operatoren
   - Rechenwege
   - Punktverluste und Fehlerfallen

4. **Uebungsmodus** (Vision, nicht im aktuellen Plan-Horizont)
   - Karteikarten
   - Mini-Checks
   - Rechenaufgaben
   - Fallaufgaben mit Musterloesung

5. **Quellen- und Reviewschicht** (aktiv)
   - Quellenbank
   - REVIEW_LOG
   - Faktencheck je Kapitel

6. **Release-Build** (aktiv)
   - normale Web-App
   - Single-HTML-Build
   - mobiler Lesetest
   - Export-/Weitergabeversion

## Qualitaetsstufen

Die App kennt technisch `stub`, `draft`, `ready`, `final`. Inhaltlich gelten
diese Gates:

| Stufe | Bedeutung | Darf in Navigation? | Gate |
|---|---|---:|---|
| `stub` | Thema geplant, noch kein Lerninhalt | nein | Slug, Titel, Prioritaet stehen |
| `draft` | Inhalt vorhanden, aber noch unvollstaendig | nein | Grundstruktur und erste Quellen |
| `ready` | lernbar und quellenorientiert | ja | Kapitelstandard erfuellt, Glossar gepflegt, Quellen vorhanden |
| Review-Gate | Fakten, Quellen und Didaktik manuell geprueft | ja | Eintrag in `REVIEW_LOG.md`, Validator ohne harte Fehler |
| `final` | fuer Weitergabe freigegeben | ja | Review-Gate plus Lint, Build, Browser-Stichprobe |

Wichtig: Das Review-Gate ist bewusst kein eigener `toc.ts`-Status. Es wird ueber
`REVIEW_LOG.md` dokumentiert, damit die App nicht durch Zwischenzustaende
verkompliziert wird.

**Trigger fuer das Review-Gate**: ein fester woechentlicher Slot, ein Kapitel pro
Slot. Reviews ohne Anlass passieren nicht. Versionssprungpflichten (siehe unten)
koppeln den Trigger an konkrete Stufenziele, damit der Slot nicht ins Leere laeuft.

Falls sich nach mehreren Wochen mit eingehaltenem Slot keine Kapitel auf `final`
heben lassen, ist die Huerde zu hoch und nicht die Disziplin das Problem. Erst
dann wird ein Zwischenstatus erwogen.

## Curriculum-Mapping

Jedes Kapitel soll mittelfristig diese Metadaten haben:

- Kapitel-Slug
- KMK-Lernfeld
- Ausbildungsjahr
- FIAusbV-Bezug
- AP1-Relevanz
- AP2-Anschluss
- Fachrichtung: uebergreifend, AE, SI, DPA, DV
- Prioritaet: Muss, Soll, Vertiefung
- Quellenstatus: allgemein, spezifisch, geprueft
- Reviewstatus: offen, geprueft, final

Zunaechst reicht die Pflege in `CURRICULUM_MAPPING.md`. Erst wenn die Matrix
stabil ist, wird entschieden, ob Metadaten in `toc.ts` oder eine eigene
Datenstruktur wandern.

## Release-Ziele

### Version 0.1 - Kompass sauber

Ziel: Projektsteuerung widerspruchsfrei.

Pflicht:

- `AUSBILDUNGS_KOMPASS.md` vorhanden
- `MASTER_ROADMAP.md` vorhanden
- `CURRICULUM_MAPPING.md` angelegt
- AP1 als Pruefungsschicht eingeordnet
- Content-Validator laeuft ohne Fehler

### Version 0.2 - Jahr-1/2-Abdeckung sichtbar

Ziel: Man sieht, was wirklich abgedeckt ist und was fehlt.

Pflicht:

- alle 102 TOC-Kapitel in der Mapping-Matrix erfasst oder bewusst verschoben
- Stubs priorisiert nach Ausbildungsnutzen und AP1-Relevanz
- offensichtliche Dubletten und falsche `ready`-Markierungen identifiziert

### Version 0.3 - Zentrale Stubs geschlossen

Ziel: Die groessten Luecken in Jahr 1/2 sind lernbar.

Pflicht:

- alle Prioritaet-Muss-Stubs aus LF1 bis LF9 mindestens `draft`
- zentrale AP1-Themen mindestens `ready`
- Quellenbank fuer neue Kapitel ergaenzt

### Version 0.4 - Ready ist wirklich ready

Ziel: `ready` bedeutet zuverlaessig lernbar.

Pflicht:

- Validator-Warnungen fuer `ready`-Kapitel stark reduziert
- jedes `ready`-Kapitel hat Quellen, Glossar, Fehlerfallen und Handlungssituation
- keine reinen Pruefungstrick-Kapitel

### Version 0.5 - Reviewzyklus laeuft

Ziel: Reife wird systematisch produziert, nicht zufaellig. AP1 bleibt ein
Anwendungsfall unter mehreren, kein Sondermodus.

Pflicht:

- woechentlicher Review-Slot etabliert, REVIEW_LOG wird laufend gepflegt
- mindestens 10 Kapitel haben das Review-Gate durchlaufen
- AP1-Filter ist als kleines Begleit-Feature aktiv: Kapitel mit `exam: true`
  lassen sich im normalen Lese-Modus filtern, ein eigener AP1-Modus als Top-Level-
  Bereich wird zurueckgebaut
- keine neuen Uebungs- oder Pruefungs-Features

### Version 1.0 - Weitergabefaehige Referenz

Ziel: belastbare Version fuer andere Lernende.

Pflicht:

- alle Muss-Kapitel Jahr 1/2 mindestens `ready`
- wichtigste Kapitel formal `final`
- `npm.cmd run lint` erfolgreich
- `npm.cmd run build` erfolgreich
- `npm.cmd run build:single` erfolgreich
- Browser-Stichprobe Desktop und mobil
- REVIEW_LOG mit Freigaben

## Arbeitsreihenfolge ab jetzt

1. Mapping-Matrix anlegen und mit den aktuellen TOC-Kapiteln starten.
2. Zentrale Stubs aus Jahr 1/2 ausarbeiten.
3. Ready-Kapitel mit Validator-Warnungen reparieren.
4. Quellenbank und Glossar systematisch nachziehen.
5. Review-Gate fuer die ersten final-Kandidaten durchlaufen.
6. AP1-Filter im Lese-Modus aktivieren, sobald genug Kapitel ready sind.

## Naechster konkreter Schritt

`Zahlensysteme (Dual, Hex, Dezimal)` als erstes echtes `final`-Kapitel
durch das Review-Gate fuehren. Das Kapitel erfuellt den automatischen
Ready-Standard bereits ohne eigene Validator-Warnung und eignet sich als
Referenz fuer Rechenwege, Quellen, Glossar-Terme, typische Fehler und
Anschluss an `bit-byte`, `prefixe`, `linux-chmod` und `ipv4-subnetting`.

Pflicht fuer diesen Schritt:

- fachliche Kernaussagen gegen Quellen pruefen
- Rechenwege und Beispiele manuell nachrechnen
- Browser-Stichprobe Desktop und mobil
- `npm.cmd run lint`, `npm.cmd run validate:content`, `npm.cmd run build`
- Freigabe in `REVIEW_LOG.md`
- erst danach Status im TOC auf `final` setzen
