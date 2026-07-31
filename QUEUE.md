# Arbeitsstand und Reihenfolge

Stand: 31.07.2026 · Verbindliche Regeln: `PROJEKT.md`

Diese Datei enthält nur den aktuellen Arbeitsschritt und die nächsten
freigegebenen Schritte. Fachliche Belege stehen im Audit, nicht in dieser
Warteschlange.

## Abgeschlossener Schritt 0 — Vertrauensbasis

Ziel: Bevor weitere KI-Inhalte entstehen, müssen App, Katalog und
Qualitätssicherung dieselbe Wahrheit verwenden.

- [x] `src/content/catalog/` als einzige Laufzeitquelle für Kapitel, Status,
      Lernfeld, AP1-Mapping und Quellenzuordnung festlegen.
- [x] Ungeprüfte, teilgeprüfte und geprüfte Texte in der UI sichtbar trennen.
- [x] AP1-Inhaltsabdeckung von persönlicher Selbsteinschätzung trennen.
- [x] Katalogvalidator um Schema-, Quellen- und LF-Mindestabdeckung erweitern.
- [x] verlorene Tests für Zahlensysteme und Subnetting wiederherstellen.
- [x] Katalogtests und GitHub-Actions-Pipeline ergänzen.
- [x] Statusgenerator auf den neuen Katalog umstellen.
- [x] vollständigen Diff prüfen, alle Checks erneut ausführen und Draft-PR
      gegen `design-redesign` veröffentlichen.

Aktuelle, automatisch sichtbare Qualitätsbefunde:

- 60 von 107 Pflichtatomen haben noch kein vollständiges Lerntextpaket,
- 105 von 107 Pflichtatomen sind noch nicht vollständig durch geprüfte
  Kapitel belegt; bei den 32 direkt AP1-relevanten Atomen sind es 0,
- drei als geprüft markierte Kapitel haben noch keinen dokumentierten
  Q3-Prüfungsabgleich,
- der vollständige Prüfungskatalog 2025 fehlt.

Offener Sicherheitsblocker: Das Repository muss privat gestellt werden,
solange fremdes Community-Material enthalten ist. Dies ist eine
GitHub-Kontoeinstellung und keine Codeänderung.

## Blockierter Rest aus Schritt 1 — Atomare Scope-Matrix

- [x] KMK-Kompetenzen LF1–LF9 in eindeutige Scope-IDs zerlegen.
- [x] FIAusbV-Kompetenzen der ersten 18 Monate und die fünf AP1-Handlungen
      ergänzen.
- [ ] vollständige, legal erworbene Prüfungskataloge 6392 (FIAE) und 6393
      (FISI) bereitstellen und versionsgebunden mappen. Das öffentliche
      IHK/ZPA-Delta ist bereits erfasst; die Vollkataloge fehlen im Workspace.
- [x] jedes Kapitel mit den abgedeckten Scope-IDs verbinden.
- [x] Validator so erweitern, dass nicht nur Kapitelzahlen, sondern jede
      einzelne Pflichtkompetenz auf Abdeckung geprüft wird.
- [x] fehlende Pakete für LF3, LF4 und LF7–LF9 als ehrliche `geplant`-Einträge
      in den Katalog aufnehmen.

## Aktueller Schritt 2 — Kapitelproduktion und unabhängige Prüfung

Reihenfolge: erster offene Eintrag in `KAPITELPLAN_LF1_LF9.md`, aktuell
`LF1-06 Markt, Wettbewerb und Kundennutzen`.

LF1-06 hat den vollständigen ersten Inhalts-, Quellen- und Technikpass
bestanden und bleibt bis zum unabhängigen Prüfpass sowie Q3-/Vollkatalogabgleich
korrekt als `teilgeprueft` offen. Danach folgt LF1-07.

Pro Kapitel:

1. Scope und Quellenmatrix,
2. gezielter PDF-Abgleich,
3. Schreiben nach Pflichtaufbau,
4. vollständiger Fakten- und Rechencheck,
5. technischer Check,
6. unabhängiger Prüfer,
7. Status erst danach auf `geprueft`.

## Schritt 3 — Aufgabenbank und Lernbeherrschung

- [ ] rechtssichere Aufgabenfamilien je Scope-ID entwickeln,
- [ ] diagnostische Einstiegsaufgaben und gestufte Übungen,
- [ ] Musterlösungen, Teilpunkte und Fehlerdiagnosen,
- [ ] echte Beherrschung aus Aufgabenleistung statt manueller Auswahl,
- [ ] AP1-Simulation erst nach fachlicher Freigabe der zugrunde liegenden
      Kapitel und Aufgaben.

## Schritt 4 — UX-, Barrierefreiheits- und Visual-Gate

- [ ] Desktop, Mobil, Light und Dark visuell prüfen,
- [ ] Tastaturbedienung, Fokus, Kontrast und Screenreader prüfen,
- [ ] automatisierte Accessibility- und Screenshot-Regressionstests,
- [ ] Lernpfad, Nachschlagen, Üben und AP1-Modus mit Lernenden testen.

## Schritt 5 — Gesamtfreigabe

- [ ] alle Kapitelpakete abgeschlossen,
- [ ] alle Scope-IDs abgedeckt,
- [ ] Quellen- und Audit-Gates vollständig,
- [ ] Aufgabenbank vollständig,
- [ ] `npm run validate:release` erfolgreich,
- [ ] Offline-Ausgabe und Freigabedokumentation erzeugt.
