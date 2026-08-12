# Plan

Stand: 2026-08-12

Ziel: eine Lerndatei, mit der ein Auszubildender das erste und zweite Lehrjahr
Fachinformatiker vollstaendig lernen kann — fachlich korrekt, belegt, didaktisch
stark und angenehm zu benutzen. Die AP1 ist ein Anwendungsfall davon, nicht der
Rahmen.

Dieser Plan ersetzt die Steuerung aus `MASTER_ROADMAP.md` und `AP1_LERNPFAD.md`,
soweit sie sich widersprechen. Er beruht auf einer Bestandsaufnahme vom
12.08.2026, deren Befunde in `CURRICULUM_MAPPING.md` und `THEMENLUECKEN.md`
belegt sind.

---

## Der ehrliche Ausgangspunkt

Vier Feststellungen, die den Plan bestimmen. Sie sind unangenehm, aber belegt.

**1. Kein einziges Kapitel ist geprueft.**
`REVIEW_LOG.md` fuehrt genau einen Eintrag — `zahlensysteme` — und als Pruefer
steht dort „Codex". Auch das war eine KI. Die Statuswerte `ready` und `final` im
Code sind ebenfalls KI-vergeben. Sie sagen nichts ueber fachliche Richtigkeit.

**2. 40 Prozent des Lehrplans haben kein Kapitel.**
Jahr 1 und 2 sind LF1 bis LF9 mit 600 Unterrichtsstunden. Fuer LF7
(Cyber-physische Systeme, 80 h), LF8 (Daten systemuebergreifend bereitstellen,
80 h) und LF9 (Netzwerke und Dienste bereitstellen, 80 h) existiert kein
einziges Kapitel. Gleichzeitig hat LF1 mit 40 Stunden ganze 24 Kapitel.

**3. Die Quellenangaben sind ungeprueft.**
Sie wurden mitgeneriert. Eine plausibel aussehende URL belegt nichts. Mindestens
eine ist nachweislich tot, eine weitere erkennbar erfunden
(`vahlen.de/.../product/12345`). `scripts/check-links.mjs` prueft das jetzt
maschinell, ist aber noch nicht vollstaendig ausgewertet.

**4. Der Engpass ist nicht das Schreiben, sondern das Pruefen.**
Text erzeugen ist billig geworden. Belegen, nachrechnen und didaktisch
verantworten ist es nicht. Jeder Plan, der auf Textmenge optimiert, verschaerft
das Problem. Deshalb ist die Reihenfolge unten so und nicht anders.

---

## Was bereits steht

Das Fundament fuer verteiltes Arbeiten ist gebaut und funktioniert:

| Baustein | Zweck |
|---|---|
| `lernfelder/<slug>.md` | Arbeitsdatei je Lernfeld. Ein Chat oeffnet genau diese eine Datei |
| `scripts/build-lernfelder.mjs` | haelt sie aus dem Code aktuell, haengt in `npm run check` |
| `scripts/validate-content.mjs` | 8 mechanische Pflichtchecks je Kapitel |
| `scripts/check-links.mjs` | prueft jede Quellen-URL gegen das Netz |
| `material/` | Quellmaterial mit Namenskonvention und Nutzungsregeln |
| `CURRICULUM_MAPPING.md` | Abgleich gegen den KMK-Rahmenlehrplan |
| `THEMENLUECKEN.md` | 197 Materialthemen gegen 102 Kapitel |

Die Lernfeld-Dateien trennen bewusst zwei Zonen: handgeschriebene Regeln bleiben
stehen, generierter Zustand wird ueberschrieben. Damit kann nichts doppelt
gepflegt werden und nichts verrotten — der Fehler, an dem die alte
`CURRICULUM_MAPPING.md` gestorben ist.

---

## Phase 0 — Selbsttaeuschung beseitigen

Billig, schnell, und ohne sie ist jede spaetere Zahl wertlos.

1. **Statussemantik ehrlich machen.** `ready` bedeutet kuenftig ausschliesslich
   *strukturell vollstaendig* — das kann die Maschine pruefen. `final` bedeutet
   *ein Mensch hat Fakten, Rechenwege und Quellen geprueft*. Nach dieser
   Definition steht `final` derzeit bei null, auch `zahlensysteme`.
2. **Linkcheck vollstaendig auswerten.** Tote Quellen ersetzen oder streichen.
   Erfundene Quellen sind schlimmer als keine.
3. **`REVIEW_LOG.md` bereinigen.** KI-Reviews sind keine Reviews. Der Eintrag
   wird als solcher markiert.

Ergebnis: Der Projektstand luegt nicht mehr. Alles Weitere baut darauf auf.

## Phase 1 — Den Bestand neu schneiden

Die inhaltlich wichtigste Phase. Hier wird entschieden, **welche Kapitel es
ueberhaupt geben soll** — belegt statt geraten.

1. **Kapitel den Lernfeldern LF1-LF9 zuordnen**, einzeln und begruendet. Die
   Zuordnung in `CURRICULUM_MAPPING.md` ist eine erste Schaetzung auf
   Gruppenebene und ersetzt das nicht.
2. **LF7, LF8, LF9 mit Kapiteln fuellen.** Das sind schaetzungsweise 20 bis 25
   neue Kapitel: Sensorik und Aktorik, IoT-Architektur, MQTT, Bussysteme
   (LF7); Schnittstellen und APIs, Datenformate, Datenintegration,
   Datenqualitaet (LF8); Netzwerkkomponenten, Verkabelung, Ethernet, Routing,
   Serverdienste (LF9).
3. **LF1 entlasten.** 24 Kapitel fuer 40 Stunden ist unverhaeltnismaessig.
   Entscheiden, was eigenes Kapitel bleibt und was Abschnitt wird.
4. **Luecken aus `THEMENLUECKEN.md` einarbeiten** — je Thema entscheiden:
   eigenes Kapitel oder Abschnitt.
5. **Lernreihenfolge und Voraussetzungen festhalten**, je Lernfeld. Vorlage:
   der Abschnitt in `lernfelder/netzwerke.md`.

Ergebnis: ein belegter Kapitelbestand mit Reihenfolge. Erst danach lohnt sich
Schreibarbeit, weil vorher unklar ist, ob ein Kapitel ueberhaupt bleiben soll.

## Phase 2 — Lernfeld-Regeln fuellen

Neun mal einmalig, danach wird jeder Kapitel-Chat billig.

Je Lernfeld auszufuellen: Quellenpolitik (was zaehlt hier als Primaerquelle),
Aufgabentypen der Pruefung, fachspezifische Fehlerbilder.

`lernfelder/netzwerke.md` ist als Vorlage fertig — mit einer Ausnahme: Die
Aufgabentypen-Tabelle bleibt leer, bis echte Pruefungsboegen vorliegen. Diese
Luecke ist bewusst und wird nicht durch Raten geschlossen.

## Phase 3 — Kapitel abarbeiten

Der Fleissteil. Ein Chat, ein Kapitel, eine geoeffnete Datei:
`lernfelder/<lernfeld>.md`.

Reihenfolge nach Voraussetzungen, nicht nach Bequemlichkeit. Ein Kapitel gilt
als fertig, wenn `npm run check` ohne neue Warnung durchlaeuft **und** Fakten,
Rechenwege und Quellen von einem Menschen geprueft sind.

Realistische Erwartung: Das sind bei rund 120 Kapiteln viele Sitzungen. Die
Base existiert genau deshalb.

## Phase 4 — Lernmechanik

Erst wenn der Inhalt traegt. Vorher waere es Politur auf ungeprueftem Material.

1. **Aufgaben als strukturierte Daten** statt als Prosa im MDX. Das ist der
   Schluessel: Danach sind Quiz im Kapitel, Drill-Modus, Karteikarten und
   Pruefungssimulation nur noch verschiedene Ansichten auf dieselben Daten.
2. **Fortschritt speichern.** `dexie` und `zustand` liegen ungenutzt im Projekt;
   das einzige `localStorage` ist bislang das Theme. Ohne Gedaechtnis kein
   Streak, keine Wiederholung, kein Erfolgserlebnis.
3. **Pruefungsmodus.** Braucht echte Aufgabenboegen mit Punktzahlen. Ohne die
   traeniert er auf erfundenen Aufgaben.

Hinweis: Der Validator verbietet derzeit Quizbloecke im Kapitel
(`keine Quiz- oder Selbsttest-Bloecke`). Diese Regel muss in Phase 4 bewusst
geaendert werden, nicht umgangen.

## Phase 5 — Die Datei

`npm run build:single` erzeugt bereits eine einzelne HTML-Datei zum
Doppelklicken; `HashRouter` ist dafuer korrekt gesetzt, `localStorage`
funktioniert darin.

Offen: das Erscheinungsbild. Die Design-Referenz des Nutzers arbeitet mit
Newsreader, Karla und JetBrains Mono in `oklch`-Farben, grosszuegigem
Weissraum und nummerierten Abschnitten. Newsreader muss als
`@fontsource`-Paket gebuendelt werden — Google-Fonts per CDN funktioniert in
einer Offline-Einzeldatei nicht.

---

## Was den Plan blockiert

| Blocker | Betrifft | Aufloesbar durch |
|---|---|---|
| Keine echten Pruefungsboegen mit Aufgabentexten und Punktzahlen | Aufgabentypen-Tabellen, Phase 4 | Nutzer laedt sie nach `material/pruefungen/` |
| Entscheidungen zum Kapitelschnitt | Phase 1 | Nutzer entscheidet je Cluster |
| Fachliche Pruefung | Phase 3, jedes Kapitel | nur ein Mensch |

Der dritte Punkt ist der ernsteste und laesst sich nicht wegautomatisieren. Eine
KI kann Quellen finden, Rechenwege nachrechnen und Widersprueche melden. Sie
kann nicht buergen. „Beste Lerndatei Deutschlands" heisst am Ende: jemand hat
hingesehen.

---

## Reihenfolge in einem Satz

Erst nicht mehr luegen (Phase 0), dann wissen was gebaut wird (Phase 1), dann
die Regeln je Fach (Phase 2), dann schreiben (Phase 3), dann interaktiv machen
(Phase 4), dann ausliefern (Phase 5).
