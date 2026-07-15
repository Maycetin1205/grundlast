# PROJEKT.md — Das Regelwerk (eine Quelle der Wahrheit)

Stand: 10.07.2026

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
| `AP1_AUDIT_MATRIX.md` | Beleg-Archiv der Audits (Begründungen, Fakten, Quellen je Kapitel) |
| `INHALTSVERZEICHNIS_JAHR_1_2.md` | Themenlandkarte Jahr 1/2 (Bezug/Form je Thema) |
| `AP1_INHALTSVERZEICHNIS_LERNFELDER_DICHTE.md` | AP1-Scope mit Inhaltstiefe D1–D5 |
| `CURRICULUM_MAPPING.md` | Mapping-Matrix vorhandener Kapitel (wird von `scripts/add_lf.py` genutzt) |
| `REVIEW_LOG.md` | Freigabeakte (wird von der App referenziert) |
| `material/` | externe Zusammenfassungen (Lernzettel, Lernplan) — Rohstoff, siehe Abschnitt 9 |
| `../Lerndateien/Informationen/` | lokales Quellenarchiv außerhalb der App — klassifizieren, nicht direkt veröffentlichen, siehe Abschnitt 9 |
| `docs/` | offene Pläne (z. B. `PLAN_RECHENWEG.md`) und `docs/archiv/` |

## 1. Oberste Regel: KI-Inhalte erst nach Audit vertrauen

Der gesamte fachliche Bestand kann KI-generiert sein. Deshalb gilt:

- **Kein alter Status** (`ready`, `final`, `reviewed`, Quellenliste vorhanden)
  ist ein Beweis für fachliche Richtigkeit.
- Maßgeblich ist der **Inhaltsaudit-Status** je Kapitel:
  `ungeprüft → teilgeprüft → geprüft` (sowie `gesperrt`), gepflegt in
  `src/lib/audit/status.ts`, sichtbar in `AP1_STATUS.md`.
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

- **AP1** „Einrichten eines IT-gestützten Arbeitsplatzes" (§§ 7–9 FIAusbV) ist
  eine Prüfungs- und Prioritätssicht auf den Gesamtlernweg:
  geprüft im 4. Ausbildungshalbjahr, Inhalt der **ersten 18 Monate** plus
  Berufsschulstoff (im Kern LF1–LF6). 90 Minuten, schriftlich, **ungebundene
  Aufgaben** (ca. 4 Blöcke, 100 Punkte), 20 % der Gesamtnote, keine Wiederholung.
- Aufgabenbasis ist der **IHK-AkA/ZPA-Prüfungskatalog** (2. Auflage, gültig ab
  Frühjahr 2025). Katalog-Deltas (neu: Barrierefreiheit, KI, Englisch-Anteile,
  mehr Projektmanagement und Datenschutz; raus/geparkt: RAID-Konfiguration,
  SAN, komplexes SQL, Struktogramm/PAP, ISO 2700x, NoSQL, OOP-Vererbung,
  LTE/5G-Tiefe) stehen mit Quellen im Lücken-Audit in `QUEUE.md`.
- Kanonischer lokaler Scope-Beleg ist
  `../Lerndateien/Informationen/Prüfungen_AP2/Fachinformatiker für Systemintegration.pdf`.
  Für AP1 gelten 90 Minuten, vier ungebundene Aufgaben und 100 Punkte; SQL und
  RAID sind dort ausdrücklich AP2 zugeordnet.
- Lernfelder LF1–LF9 (KMK) sind der Rahmen für Jahr 1/2; interne App-Bereiche
  wie „Grundlagen & Rechnen" sind Werkzeugbereiche, keine offiziellen Lernfelder.
- AP2-Inhalte sind derzeit kein aktiver Scope. Material mit AP2-FISI-Spezialtiefe
  wird geparkt und darf den Lernweg für Jahr 1/2 nicht aufblasen. Gemeinsame
  Grundlagen dürfen als Vergleichshinweis dienen, wenn sie bereits im Scope
  liegen; daraus werden jetzt keine AP2-Kapitel gebaut.

## 4. Quellenhierarchie

Quellen werden nach Rolle getrennt; keine Rolle ersetzt eine andere:

| Rolle | Erlaubte Quellen | Zählt für |
|---|---|---|
| Ausbildungsrahmen | FIAusbV, KMK-Rahmenlehrplan, BIBB-Umsetzungshilfe, IHK/AkA/ZPA-Hinweise | Thema, Umfang, Prüfungsnähe |
| Fachliche Primärquelle | BSI, RFCs, Gesetze, Normen, offizielle Spezifikationen, Herstellerdoku für Herstellerspezifika | harte Fakten, Definitionen, Zahlen, Recht |
| Didaktischer Vergleich | seriöse Lernangebote, Fachbücher, Berufsschulmaterial | Erklärideen, Reihenfolge, typische Missverständnisse |
| Prüfungsrealität | legal erworbene Aufgaben, U-Form/IHK-nahe Trainer, Material in `material/` | Aufgabenform, Tiefe, Timing — **nie** Faktenanker |

Ohne passende Ausbildungsquelle **und** fachliche Quelle darf ein Kapitel nicht
auf `ready`/`final` stehen. Bei Recht, Sicherheit, Normen, Protokollen und
Zahlenwerten hat die Primärquelle Vorrang vor jeder Lernseite.

## 5. Arbeitsablauf pro Kapitel

Grundregel: **Erst Quellen, dann Vergleich, dann Audit, dann Text.**
Es wird immer genau **ein Kapitel** vollständig abgeschlossen, bevor das
nächste beginnt („mach weiter" setzt am dokumentierten offenen Punkt an).

### Schritt 0 — Scope klären

- Steht das Thema in der Themenlandkarte (`INHALTSVERZEICHNIS_JAHR_1_2.md`)?
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
- Quellen: `src/content/quellen/sourceBank.ts` und `tagMappings.ts` pflegen.
- Mapping: Lernfeld/Jahr/AP1/Bezug/Form in `CURRICULUM_MAPPING.md` pflegen.

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
| `REVIEW_LOG.md` aktualisiert | bei `final` |
| Arbeitsstand + Haken in `QUEUE.md` aktualisiert | ja |

### Audit-Gates (für den Inhaltsaudit-Status)

Ein Kapitel wird erst `geprüft`, wenn dokumentiert sind: **Scope-Gate**
(warum relevant), **Quellen-Gate**, **Fakten-Gate** (5–10 harte Aussagen gegen
Quellen), **Didaktik-Gate** (ohne Vorwissen verständlich), **Aufgaben-Gate**
(welcher AP1-nahe Aufgabentyp ist danach lösbar), **Umfangs-Gate**
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
npm run build           # tsc + vite (führt vorher check:consistency aus)
npm run emit:status     # AP1_STATUS.md neu generieren (nach Statusänderungen)
```

- Der Konsistenz-Wächter (`scripts/check_consistency.py`) prüft, dass MDX,
  TOC, Audit-Status, Review und Quellen-Tags pro Slug zusammenpassen.
- Windows: `npm.cmd run …`, Python über `py`. Linux/CI: `python3
  scripts/check_consistency.py`; falls `npm run build` nur am fehlenden
  `py`-Launcher scheitert, `npx tsc -b && npx vite build` ausführen und den
  Umgebungsfehler dokumentieren — nie als bestandenen Gesamtbuild ausgeben.

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

- App: React 19 + Vite + MDX; Inhalte `src/content/lessons/*.mdx`; Navigation
  und technischer Status `src/lib/toc/data/*.ts`; Inhaltsaudit
  `src/lib/audit/status.ts`; Faktencheck-Historie `src/lib/review.ts`;
  Quellen `src/content/quellen/`; Glossar `src/content/glossar/`;
  LF-Manifest `src/content/manifest/` (bisher nur von Tests genutzt).
- Bekannter Strukturfehler: vier Statuswelten (TOC, Audit, Review, REVIEW_LOG).
  Bis zur Konsolidierung gilt: Nur Auditstatus `geprueft` darf in der UI als
  **voll geprüft** zählen; `teilgeprueft` wird separat ausgewiesen.
  Inhaltsaudit ist niemals Lernenden-Beherrschung. `AP1_STATUS.md` zeigt die
  Statuswelten nebeneinander. Kein großer Status-/TOC-/Manifest-Umbau nebenbei.
- Keine breite Übungs-/Prüfungsplattform vor dem Inhaltsaudit. Ein kleiner
  Diagnose-, Fehlerbuch- oder Aufgaben-MVP ist zulässig, sobald er echte
  Lernleistung misst und die Inhaltsarbeit nicht verdrängt.
