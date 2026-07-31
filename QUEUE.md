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

Bekannte, nun automatisch sichtbare Befunde:

- LF3: 7/10 Mindestpakete
- LF4: 10/11 Mindestpakete
- LF7: 0/5 Mindestpakete
- LF8: 2/6 Mindestpakete
- LF9: 4/8 Mindestpakete
- drei als geprüft markierte Kapitel ohne dokumentierten Q3-Prüfungsabgleich
- sechs Kapitel in LF8/LF9 mit noch ungeklärter AP1-Relevanz

Offener Sicherheitsblocker: Das Repository muss privat gestellt werden,
solange fremdes Community-Material enthalten ist. Dies ist eine
GitHub-Kontoeinstellung und keine Codeänderung.

## Aktueller Schritt: 1 — Atomare Scope-Matrix

- [ ] KMK-Kompetenzen LF1–LF9 in eindeutige Scope-IDs zerlegen.
- [ ] FIAusbV/BIBB-Kompetenzen der ersten 18 Monate ergänzen.
- [ ] aktuellen, legal erworbenen AP1-Prüfungskatalog versionsgebunden mappen.
- [ ] jedes Kapitel mit den abgedeckten Scope-IDs verbinden.
- [ ] Validator so erweitern, dass nicht nur Kapitelzahlen, sondern jede
      einzelne Pflichtkompetenz auf Abdeckung geprüft wird.
- [ ] fehlende Pakete für LF3, LF4 und LF7–LF9 als ehrliche `geplant`-Einträge
      in den Katalog aufnehmen.

## Schritt 2 — Kapitelproduktion und unabhängige Prüfung

Reihenfolge: erster offene Eintrag in `KAPITELPLAN_LF1_LF9.md`, aktuell
`LF1-06 Markt, Wettbewerb und Kundennutzen`.

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
