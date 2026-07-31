# PROJEKT.md — Das Regelwerk (eine Quelle der Wahrheit)

Stand: 31.07.2026

Diese Datei ist die **einzige verbindliche Regel-Datei** des Projekts. Sie
konsolidiert die früheren Steuerdokumente (AP1_NEUSTART, AP1_KONTROLLZENTRUM_2026,
LOS_MACH_WEITER, KAPITEL_ARBEITSABLAUF, KAPITEL_QUALITAET, CONTENT_GUIDELINES,
MATERIAL_ABGLEICH_WORKFLOW, SCOPE-LANDKARTE_LF1-9), die unter `docs/archiv/`
liegen. **Bei Widerspruch gilt diese Datei.** Der operative Einstieg (was ist
gerade dran?) steht in `QUEUE.md`.

## 0. Dateikarte

| Datei | Rolle |
|---|---|
| `PROJEKT.md` | Regeln, Qualitätsstandard, Arbeitsablauf (diese Datei) |
| `QUEUE.md` | Arbeitsstand, Warteschlange, Lücken-Audit, Start-Prompt |
| `AP1_STATUS.md` | **generiert** (`npm run emit:status`) — nicht von Hand editieren |
| `SCOPE_STATUS.md` | **generiert** (`npm run emit:scope`) — atomare KMK-/FIAusbV-/AP1-Abdeckung |
| `KAPITELPLAN_LF1_LF9.md` | verbindliche Kapitelpakete und Reihenfolge für LF1–LF9 |
| `AP1_AUDIT_MATRIX.md` | Beleg-Archiv der Audits (Begründungen, Fakten, Quellen je Kapitel) |
| `INHALTSVERZEICHNIS_JAHR_1_2.md` | historische Themenplanung; nicht kanonisch |
| `AP1_INHALTSVERZEICHNIS_LERNFELDER_DICHTE.md` | historische AP1-Tiefenhypothese; nicht kanonisch |
| `CURRICULUM_MAPPING.md` | historische Mapping-Matrix; nicht kanonisch |
| `REVIEW_LOG.md` | historische Freigabeakte; kein Laufzeitstatus |
| `material/` | externe Zusammenfassungen (Lernzettel, Lernplan) — Rohstoff, siehe Abschnitt 9 |
| `../Lerndateien/Informationen/` | lokales Quellenarchiv außerhalb der App — klassifizieren, nicht direkt veröffentlichen, siehe Abschnitt 9 |
| `docs/` | offene Pläne (z. B. `PLAN_RECHENWEG.md`) und `docs/archiv/` |

## 1. Oberste Regel: KI-Inhalte erst nach Audit vertrauen

Der gesamte fachliche Bestand kann KI-generiert sein. Deshalb gilt:

- **Kein alter Status** (`ready`, `final`, `reviewed`, Quellenliste vorhanden)
  ist ein Beweis für fachliche Richtigkeit.
- Maßgeblich ist ausschließlich `inhaltsstatus` im zentralen Kapitelkatalog
  unter `src/content/catalog/chapters/`. Die Reihenfolge lautet
  `ausgearbeitet/ungeprüft → teilgeprüft → geprüft` (sowie `geplant` und
  `gesperrt`). `AP1_STATUS.md` wird daraus erzeugt; die App liest denselben
  Wert. Persönlicher Lernstatus ist davon strikt getrennt.
- Nichts als wahr behandeln, nur weil es im Projekt steht. Bei Unsicherheit
  `unklar` notieren statt raten. Widersprüche zwischen Quellen dokumentieren,
  nicht glätten.
- Keine neuen Kapitel, Kategorien, Statuswerte oder Roadmaps erfinden.

## 2. Ziel und Zielgruppe

Grundlast soll eine durchgehende, quellengeprüfte Lernreise für die
Fachinformatiker-Ausbildung im 1. und 2. Lehrjahr werden — von null Vorwissen
bis zu Berufspraxis und Prüfung. Es ist keine AP1-App mit nachträglich
angehängten Themen und keine bloße KI-Textmasse.

Die drei verbundenen Schichten sind:

1. **Lernweg/Kompendium**: Begriffe und mentale Modelle in einer festen,
   aufbauenden Reihenfolge verstehen.
2. **Üben**: Wissen abrufen, anwenden, Fehler verstehen und wiederholen.
3. **Prüfungssichten**: AP1 (später ggf. weitere Prüfungsbezüge) filtert und
   trainiert denselben Lernbestand; es ist kein separater Grundlagenweg.

Zielperson: Auszubildende/r im 1./2. Lehrjahr **ohne vorausgesetztes
Vorwissen**. Grundlagen werden im passenden Kapitel eingeführt, nicht in einen
separaten Vorkurs ausgelagert. Jedes Kapitel muss ohne unnötige Wiederholung
früherer Kapitel verständlich sein: neue Begriffe werden beim ersten Auftreten
erklärt, später kurz erinnert und verlinkt.

## 3. Offizieller Rahmen

- **AP1** „Einrichten eines IT-gestützten Arbeitsplatzes" (§§ 8–9 FIAusbV) ist
  eine Prüfungs- und Prioritätssicht auf den Gesamtlernweg:
  geprüft im 4. Ausbildungshalbjahr, Inhalt der **ersten 18 Monate** aus den
  Berufsbildpositionen § 4 Abs. 2 Nr. 1–7 plus dazu passender
  Berufsschulstoff. Die Prüfung ist praxisbezogen, schriftlich, dauert 90
  Minuten und zählt 20 % der Gesamtnote.
- Aufgabenbasis ist der **IHK-AkA/ZPA-Prüfungskatalog** (2. Auflage, gültig ab
  Frühjahr 2025). Öffentlich belegt sind derzeit nur die in
  `src/content/catalog/scope/examCatalog.ts` dokumentierten Deltas: SQL und
  RAID ausschließlich AP2, PAP und Struktogramm gestrichen sowie der Übergang
  zu UML/BPMN und KI als neuer Themenbereich. Weitergehende Detailbehauptungen
  sind ohne die vollständigen Kataloge 6392 und 6393 unzulässig.
- Die vollständigen, legal erworbenen Kataloge 6392 (FIAE) und 6393 (FISI)
  liegen im Workspace derzeit **nicht** vor. Bis sie bereitgestellt und
  versionsgebunden erfasst sind, bleibt das Release-Gate rot.
- Lernfelder LF1–LF9 (KMK) sind der Rahmen für Jahr 1/2; interne App-Bereiche
  wie „Grundlagen & Rechnen" sind Werkzeugbereiche, keine offiziellen Lernfelder.
- Ein AP2-Hinweis entscheidet nicht allein über den Lernfeld-Scope. Für die
  Aufnahme in LF1–LF9 zählt die KMK-Kompetenz; die Prüfungszuordnung wird davon
  getrennt geführt, damit AP2-Spezialtiefe den Lernweg nicht aufbläht.

## 4. Quellenhierarchie

Quellen werden nach Rolle getrennt; keine Rolle ersetzt eine andere:

| Rolle | Erlaubte Quellen | Zählt für |
|---|---|---|
| Ausbildungsrahmen | FIAusbV, KMK-Rahmenlehrplan, BIBB-Umsetzungshilfe, IHK/AkA/ZPA-Hinweise | Thema, Umfang, Prüfungsnähe |
| Fachliche Primärquelle | BSI, RFCs, Gesetze, Normen, offizielle Spezifikationen, Herstellerdoku für Herstellerspezifika | harte Fakten, Definitionen, Zahlen, Recht |
| Didaktischer Vergleich | seriöse Lernangebote, Fachbücher, Berufsschulmaterial | Erklärideen, Reihenfolge, typische Missverständnisse |
| Prüfungsrealität | legal erworbene Aufgaben, U-Form/IHK-nahe Trainer, Material in `material/` | Aufgabenform, Tiefe, Timing — **nie** Faktenanker |

Ohne passende Ausbildungsquelle **und** fachliche Quelle darf ein Kapitel nicht
auf `geprueft` stehen. Bei Recht, Sicherheit, Normen, Protokollen und
Zahlenwerten hat die Primärquelle Vorrang vor jeder Lernseite.

## 5. Arbeitsablauf pro Kapitel

Grundregel: **Erst Quellen, dann Vergleich, dann Audit, dann Text.**
Es wird immer genau **ein Kapitel** vollständig abgeschlossen, bevor das
nächste beginnt („mach weiter" setzt am dokumentierten offenen Punkt an).

### Schritt 0 — Scope klären

- Welchen IDs in `src/content/catalog/scope/` dient das Kapitel? Der lesbare
  Stand steht in `SCOPE_STATUS.md`.
- `Bezug`: `Lehrplan` / `Pruefung` / `Grundlage` / `Extra` / `Raus`
- `Form`: `Kapitel` / `Abschnitt` / `Box` / `Glossar` / `Raus`
- Überschneidet es sich mit einem anderen Kapitel?
- Ergebnis: `behalten`, `zusammenlegen`, `als Abschnitt/Box führen` oder `entfernen`.
- Keine neuen Kategorien erfinden.

### Schritt 1 — Quellen-/Benchmark-Matrix (Pflicht vor jeder Textänderung)

| Bereich | Quellen/Links | Was fachlich folgt | Was unser Kapitel daraus machen muss |
|---|---|---|---|
| Offizielle Ausbildungsquellen | | | |
| Fachliche Primärquellen | | | |
| Seriöse Vergleichsangebote | | | |
| Prüfungs-/Kataloghinweise | | | |
| Eigene Schlussfolgerung | | | |

Mindestens 3 seriöse Quellen, davon 1 Primärquelle. Wenn ein Feld leer ist:
nicht schreiben, sondern recherchieren.

### Schritt 2 — Abschnitts-Audit

Jeden bestehenden/geplanten Abschnitt prüfen (Einstieg, Grundbegriffe,
Verfahren/Rechenweg, Beispiele, Fehlerfallen, Transfer, Quellen/Glossar):
Faktisch belegt? Ohne Vorwissen verständlich? Richtige Reihenfolge? Umfang
passend? Erst wenn klar ist, was wirklich geändert werden muss, wird editiert.

### Schritt 3 — Schreiben und Faktencheck

**Vollständiger Faktencheck**, nicht Stichprobe: jede Definition, Regel,
Tabelle, Formel und Zahl muss belegt, korrekt, aktuell und frei von
Halbwahrheiten sein. Jede Rechnung mit Einheiten selbst nachrechnen.

Schreibregeln:

- Echte Umlaute (`ä ö ü Ä Ö Ü ß`) im deutschen Fließtext; `ae/oe/ue/ss`-Ersatz
  nur in Slugs, IDs, Dateinamen, URLs, Code.
- Kurzer lernorientierter Einstieg („Was ist das, was kannst du danach?"),
  kein Verwaltungs-Vorspann; Projektlabels (`Bezug`, `Form`, `Pflicht`…) nie
  im sichtbaren Lerntext.
- Analogie nur, wenn sie wirklich trägt; Begriffe in sinnvoller Reihenfolge;
  Verfahren reproduzierbar Schritt für Schritt; Fehlerfallen direkt am
  passenden Inhalt; Transfer zu Folgekapiteln.
- **Keine Aufgabenblöcke, Quizblöcke, Karteikarten oder Prüfungssimulationen**
  im Kompendium; kleine, direkt erklärte Selbstchecks sind erlaubt.
- Keine kopierten geschützten Prüfungsaufgaben. Keine Füllsätze, keine
  Marketing-Sprache, keine internen Bearbeitungsnotizen im Lerntext.
- Glossar: wichtige Begriffe beim ersten sinnvollen Auftreten mit
  `<Term id="...">` markieren; Einträge in `src/content/glossar/*.ts` pflegen;
  nicht inflationär markieren.
- Quellen: neue Quellen in `src/content/quellen/sourceBank.ts` anlegen und ihre
  IDs im Feld `quellen` des Kapitelkatalogs eintragen. Automatische Tag-Treffer
  oder pauschale Fallbackquellen zählen nicht als Beleg.
- Mapping: Kapitelzuordnung in `src/content/catalog/scope/` pflegen und
  `SCOPE_STATUS.md` neu erzeugen. Historische Mapping-Dokumente sind kein
  Laufzeitstatus.

### Schritt 4 — Freigabecheck

| Check | Pflicht |
|---|---|
| Scope gegen Themenlandkarte geprüft | ja |
| Quellen-/Benchmark-Matrix vorhanden | ja |
| Abschnitts-Audit erledigt | ja |
| zentrale Fakten belegt, Zahlen selbst nachgerechnet | ja |
| Glossar-Terme + Quellen-Tags gepflegt | ja |
| keine verbotenen Labels/Aufgabenmodi im Lerntext | ja |
| echte Umlaute im Fließtext | ja |
| Technische Checks (Abschnitt 8) | exit 0 |
| Audit in `AP1_AUDIT_MATRIX.md` dokumentiert | ja |
| `REVIEW_LOG.md` aktualisiert | bei `geprueft` |
| Arbeitsstand + Haken in `QUEUE.md` aktualisiert | ja |

### Audit-Gates (für den Inhaltsaudit-Status)

Ein Kapitel wird erst `geprüft`, wenn dokumentiert sind: **Scope-Gate**
(warum relevant), **Quellen-Gate**, **Fakten-Gate** (5–10 harte Aussagen gegen
Quellen), **Didaktik-Gate** (ohne Vorwissen verständlich), **Aufgaben-Gate**
(welcher prüfungs- oder klausurnahe Aufgabentyp ist danach lösbar), **Umfangs-Gate**
(Pflicht/Kann/Extra/Raus), **Technik-Gate**. Kein Gate darf durch „klingt
plausibel" ersetzt werden. Beleg-Format: siehe `AP1_AUDIT_MATRIX.md`.

## 6. Qualitätsstandard (Kurzfassung)

Ein Kapitel ist erst fertig mit: Zielklarheit · tragfähigem mentalem Modell ·
korrekten anfängerfreundlichen Definitionen · verdichtetem Faktenkern
(Tabellen/Regeln/Formeln) · wiederholbarem Vorgehen · Verständnisbeispielen
mit Einheiten und Interpretation · Fehlerfallen am passenden Ort · Transfer ·
Quellenqualität · Lesbarkeit (kurze Abschnitte, konsistente Begriffe) ·
Glossar-Pflege. Prüfungs-/Klausurbezug steuert Umfang und Reihenfolge
**intern** — der sichtbare Lerntext bleibt ein erklärendes Kompendium.

## 7. Session-Regeln und Stop-Regeln

1. Ein Kapitel bzw. ein Queue-Eintrag pro Chat. Kein Refactor nebenbei;
   Auffälligkeiten in `QUEUE.md` Abschnitt „Notizen" eintragen.
2. `git status --short` zu Beginn prüfen; fremde Änderungen nicht überschreiben.
3. Vor riskanten Operationen (löschen, force-push, groß umbauen) stoppen und fragen.
4. **Sofort stoppen und nicht schreiben**, wenn: das Thema nicht in der
   Themenlandkarte steht · `Bezug`/`Form` unklar ist · Quellen fehlen · eine
   Aussage nur aus Lernzettel/Blog stammt · die KI eine neue Kategorie/Roadmap
   oder ein neues Kapitel erfinden will · ein Kapitel wächst, obwohl `Form`
   nur `Abschnitt`/`Box`/`Glossar` ist.
5. Abschlussformat am Chat-Ende:

```text
Kapitel: [slug]
Entscheidung: [behalten/zusammenlegen/Abschnitt/entfernen]
Inhaltsaudit: [ungeprüft/teilgeprüft/geprüft]
Geändert: [Dateien]
Belegt: [zentrale Quellen]
Checks: [Lint, Tests, Build]
Offen: [nichts oder konkrete Punkte]
Nächster Queue-Eintrag: [aus QUEUE.md]
```

## 8. Technische Checks

```text
npm run lint            # ESLint
npm run test            # Vitest
npm run validate:catalog # Strukturprüfung + sichtbare Qualitätsbefunde
npm run build           # tsc + vite
npm run check           # Katalog + Tests + Lint + Produktions-Build
npm run build:single    # lokale Offline-Ausgabe
npm run emit:status     # AP1_STATUS.md neu generieren (nach Statusänderungen)
npm run emit:scope      # SCOPE_STATUS.md neu generieren (nach Scope-Änderungen)
npm run validate:release # strenges Gesamtfreigabe-Gate
```

- `scripts/validate-catalog.mjs` prüft Schema, Slugs, URLs, Voraussetzungen,
  MDX-Zuordnung, Quellen-IDs, Audit-Mindestquellen, LF-Mindestabdeckung und die
  atomare Scope-Matrix einschließlich öffentlich belegter Katalog-Deltas.
- Normale Entwicklungschecks dürfen bekannte, ausdrücklich ausgegebene
  Qualitätslücken enthalten. Eine Gesamtfreigabe ist nur mit erfolgreichem
  `npm run validate:release` zulässig.
- Die GitHub-Actions-Pipeline führt Katalogprüfung, Tests, Lint, beide Builds
  und einen Driftcheck für `AP1_STATUS.md` und `SCOPE_STATUS.md` aus.

## 9. Material-Regeln (Lernzettel, Probeprüfungen)

- `material/` im Repo: Community-Zusammenfassungen (z. B. AP1-Lernplan,
  AP1-Lernzettel von fachinformatiker.de). Nutzung: **Themen-Checkliste,
  Prüfungshäufigkeit, Stolperstellen** — niemals Faktenanker, niemals wörtlich
  übernehmen. Jeder Fakt daraus wird gegen Primärquellen verifiziert.
- Lokal (bewusst nicht versioniert, siehe `.gitignore`): `lernzettel/`,
  `probepruefungen/`, `_ocr_out/`, `_material_index/` — teils urheberrechtlich
  geschützt. Aus Probeprüfungen werden nur Aufgabentyp, Thema, benötigtes
  Wissen, Lösungswegstruktur und Lücken dokumentiert, nie Aufgabentexte.
- Das Repo sollte **privat** bleiben, solange fremdes Material in `material/` liegt.

## 10. Architektur-Kurzkarte

- App: React 19 + Vite + MDX; Inhalte `src/content/lessons/*.mdx`; Kapitel,
  Navigation, AP1-Mapping, Quellenzuordnung und Inhaltsstatus ausschließlich
  in `src/content/catalog/`; Quellenbank `src/content/quellen/sourceBank.ts`;
  Glossar `src/content/glossar/`; Lernlogik `src/lib/learning/`.
- `src/lib/audit/` ist nur noch eine Kompatibilitätsschicht, die den Katalog
  liest. `src/lib/review.ts`, `REVIEW_LOG.md` und alte Auditmatrizen dürfen
  Belege enthalten, aber keinen abweichenden Laufzeitstatus festlegen.
- Nur `geprueft` darf in der UI als fachlich geprüft erscheinen.
  `ausgearbeitet` bleibt sichtbar, trägt aber einen deutlichen Warnhinweis.
  Inhaltsaudit ist niemals Lernenden-Beherrschung.
- Keine breite Übungs-/Prüfungsplattform vor dem Inhaltsaudit. Ein kleiner
  Diagnose-, Fehlerbuch- oder Aufgaben-MVP ist zulässig, sobald er echte
  Lernleistung misst und die Inhaltsarbeit nicht verdrängt.
