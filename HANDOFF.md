# Übergabe: Architektur-Aufräumplan

Stand: 06.07.2026 · Erstellt nach einem Architektur-Review (Branch
`claude/learning-materials-org-o9s3eq`). Dieses Dokument ist die Arbeitsliste
für die nächsten Aufgabenchats. **Ein Auftrag pro Chat**, Reihenfolge einhalten
— jeder Auftrag sichert den nächsten ab.

## Warum dieses Dokument existiert

Ein Review am 06.07.2026 hat gezeigt: Das Fundament (TOC-Datenmodell,
Lazy-Loading der MDX-Kapitel, Validator, Token-basiertes Styling) trägt. Die
Probleme sitzen an den Nähten, weil mehrere Modelle ohne gemeinsame Regeln
gearbeitet haben:

- 13 Glossar-Links zeigten auf nicht existierende Pfade, 29 weitere auf
  stub/draft-Kapitel. Der Validator hat interne Links überhaupt nicht geprüft.
  **→ Am 06.07. behoben:** Links repariert, Validator prüft jetzt alle
  `/lernen/...`-Links (Fehler bei totem Pfad, Warnung bei stub/draft-Ziel),
  Glossar rendert nicht freigegebene Kapitel als Text statt als Link.
- Tailwind-Preflight hatte alle Listenpunkte entfernt. **→ Am 06.07. behoben**
  (`lesson.css` stellt `list-style` wieder her).
- Die übrigen Befunde stehen unten als Aufträge 1-5.

## Verbindliche Regeln für jeden Auftrag

1. Vor dem Start lesen: `MASTER_ROADMAP.md` (Ziel und Stufen) und dieses
   Dokument.
2. Nach jeder Änderung läuft `npm run check` (Lint + Content-Validator +
   Build). Es darf **keinen einzigen Fehler** geben. Die Warnungszahl darf
   nicht steigen.
3. Kein neues Planungs-Markdown im Root anlegen. Erkenntnisse gehören in
   bestehende Dokumente oder in den Auftrags-Abschnitt hier.
4. Keine Planungs- oder Arbeitsnotiz-Sprache in Kapitel-MDX schreiben
   (kein „Dieses neue Kapitel...", kein „bleibt bestehen", kein Bezug auf
   Validator oder Rework).
5. Erledigte Aufträge hier abhaken (Status-Zeile ändern), nicht löschen.

## Auftrag 1 — Review-Daten haben zwei Wahrheiten (kritisch)

Status: offen

`REVIEW_LOG.md` und `src/lib/review.ts` pflegen denselben Sachverhalt doppelt
und widersprechen sich bereits: Das Log nennt für `zahlensysteme` die Prüfer
„Codex, Claude" und 7 Quellen (inkl. IEEE 754), die App-Datei nennt „Codex",
6 Quellen und einen Edge- statt Chrome-Browsertest.

Ziel: **Eine** Quelle der Wahrheit.

Vorgehen:
- `REVIEW_LOG.md` bleibt die führende Quelle (dort steht die volle Historie).
- Schreibe ein Skript `scripts/sync-review.mjs`, das die Freigabe-Abschnitte
  aus `REVIEW_LOG.md` parst (Slug, Status, Geprüft am, Prüfer, Quellen-IDs)
  und `src/lib/review.generated.ts` erzeugt. `review.ts` reduziert sich auf
  Typen + `getLessonReview`, importiert die generierten Daten.
- Validator-Erweiterung: Fehler, wenn `review.generated.ts` nicht zum
  aktuellen `REVIEW_LOG.md` passt (einfachster Weg: Hash des geparsten
  Zustands in der generierten Datei ablegen und vergleichen).

Abnahme: `npm run check` grün; Kapitelkopf von `zahlensysteme` zeigt die
Log-Daten; keine handgepflegte Duplikation mehr.

## Auftrag 2 — Kapitel-Metadaten doppelt gepflegt

Status: offen

Das TOC (`src/lib/toc/data/*.ts`) kennt `status`, `minutes`, `exam`,
`importance`. Zusätzlich schreibt jede MDX-Datei Freitext in `<MetaBar
lernfeld="LF 3 / LF 9 — ..." prüfungsrelevanz="PFLICHT · 5/5" />`. Nichts
prüft, ob beides zusammenpasst.

Ziel: MetaBar bezieht Lernfeld- und Prüfungsangaben aus zentralen Daten.

Vorgehen:
- Erweitere die TOC-Lesson-Typen um die fehlenden Felder (z. B. `lernfeldRef:
  "LF 3 / LF 9"`), oder lege eine zentrale Mapping-Datei an.
- MetaBar erhält den Lesson-Slug aus dem Routen-Kontext (Lesson.tsx kennt
  ihn) und liest die Werte selbst; MDX ruft nur noch `<MetaBar />` auf.
- Migriere alle MDX-Dateien, entferne die Freitext-Props.
- Validator: Warnung, wenn eine MDX-Datei MetaBar noch mit Props aufruft.

Abnahme: `grep -rn 'MetaBar lernfeld=' src/content/lessons/` liefert 0 Treffer;
`npm run check` grün.

## Auftrag 3 — Zwei parallele Schritt-Komponenten

Status: offen

`Schritte` (Array-Prop) und `Schritt`+`StepByStep` (Children) sind zwei
Implementierungen derselben Optik. Zählen: `grep -rln '<Schritte' bzw.
'<StepByStep' src/content/lessons/`.

Ziel: Ein System. Empfehlung: `Schritt`+`StepByStep` behalten (flexibler,
bereits vom Validator als Ready-Kriterium erkannt), `Schritte`-Verwendungen
migrieren, Komponente löschen, Registrierung in
`src/components/mdx/MDXProvider.tsx` entfernen.

Nebenbefund in demselben Auftrag: Komponenten liegen ohne Regel teils in
`components/content/`, teils in `components/mdx/` (`Rechenweg`). Verschiebe
`Rechenweg` nach `components/content/` und lasse in `components/mdx/` nur den
Provider.

Abnahme: `npm run check` grün; betroffene Kapitel im Browser stichprobenartig
geprüft (Schrittblöcke rendern unverändert).

## Auftrag 4 — Plandokument-Wildwuchs (12 Dateien im Root)

Status: offen

`ROADMAP.md` dupliziert `MASTER_ROADMAP.md`; `KAPITEL_QUALITAET.md`,
`CONTENT_GUIDELINES.md`, `QUALITY_ASSURANCE.md` und `CONTENT_REWORK_PLAN.md`
definieren vier Varianten desselben Qualitätsstandards.
`CURRICULUM_MAPPING.md` verweist auf den toten Pfad `src/lib/toc.ts`.

Ziel: Drei führende Dokumente:
1. `MASTER_ROADMAP.md` — Ziel, Stufen, aktueller Stand.
2. `KAPITEL_STANDARD.md` — neu, fasst die vier Qualitäts-/Guideline-Dokumente
   zusammen (Kapitelstruktur, Rework-Standard, Gates, Validator-Erwartungen).
3. `REVIEW_LOG.md` — Freigabe-Protokoll.

Vorgehen: Inhalte zusammenführen (nicht einfach löschen — der Rework-Standard
aus `CONTENT_REWORK_PLAN.md` und die 12 Goldstandard-Punkte aus
`KAPITEL_QUALITAET.md` müssen vollständig erhalten bleiben). Alte Dateien nach
`docs/archiv/` verschieben. Leselisten in `UNIVERSAL_PROMPT.md` und
`AUFGABENCHAT_PROMPT.md` aktualisieren. Pfadverweis in
`CURRICULUM_MAPPING.md` auf `src/lib/toc/data/*.ts` korrigieren.

Abnahme: Root enthält nur noch MASTER_ROADMAP, KAPITEL_STANDARD, REVIEW_LOG,
HANDOFF, CURRICULUM_MAPPING, AP1_LERNPFAD, AUSBILDUNGS_KOMPASS und die beiden
Prompt-Dateien; kein Dokument widerspricht einem anderen.

## Auftrag 5 — Branch-Strategie klären

Status: offen

`stufe-1-mechanik` und `claude/learning-materials-org-o9s3eq` sind bis auf
die Fixes vom 06.07. identisch; `UNIVERSAL_PROMPT.md` schickt neue Chats auf
`stufe-1-mechanik`. Entscheidung des Betreibers nötig: einen Branch zum
führenden machen, den anderen zusammenführen und stilllegen, Prompt-Datei
entsprechend anpassen.

## Danach: zurück zur Inhalts-Roadmap

Wenn Aufträge 1-5 erledigt sind, gilt wieder `MASTER_ROADMAP.md`,
Arbeitsreihenfolge „ab jetzt": Stubs schließen (0.3), Ready-Warnungen abbauen
(0.4), Reviewzyklus (0.5). Die 29 Warnungen „interner Link zeigt auf
stub/draft-Kapitel" verschwinden von selbst, sobald die Zielkapitel `ready`
werden — sie sind eine Fortschrittsanzeige, kein Fehler.

Hinweis zu den ~1300 Kollegen-PDFs (Lehrjahr 1-3, AP2, FISI): jetzt **nicht**
einbauen. Sie werden relevant als Quellen-/Prüfmaterial, sobald AP2- und
FISI-Inhalte auf die Roadmap kommen (nach 1.0).
