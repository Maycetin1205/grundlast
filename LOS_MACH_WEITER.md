# Mach weiter

Diese Datei ist der einzige operative Einstieg für die Kapitelarbeit.

## Aktueller Arbeitsstand

| Feld | Wert |
|---|---|
| Aktuelles Kapitel | `linux-chmod` |
| Kapiteldatei | `src/content/lessons/linux-chmod.mdx` |
| Status | ungeprüft – historische Freigaben zählen nicht als Nachweis |
| Phase | Review – unabhängiger Prüfer-Pass (Prompt 3 aus `PROMPTS.md`); Phase A gebaut, Status ungeprüft |
| Nächstes Kapitel | Aus der `fehlt`-/`ungeprüft`-Liste in `ABDECKUNGSMATRIX.md`, erst nach dokumentiertem Abschluss von `linux-chmod` |

## Für jeden neuen Arbeitsabschnitt

1. Diese Datei lesen und `git status --short` prüfen.
2. `ABDECKUNGSMATRIX.md`, `AUSBILDUNGSLANDKARTE.md`, `KAPITELSTANDARD.md` und den
   Eintrag in `CONTENT_AUDIT_MATRIX.md` für das aktuelle Kapitel lesen.
3. Den passenden Prompt aus `PROMPTS.md` für die aktuelle Phase verwenden
   (Entwurf → Belege → unabhängiges Review → Fix).
4. Nur das aktuelle Kapitel und seine direkten Abhängigkeiten bearbeiten.
5. `geprüft` erst nach unabhängigem Prüfer-Pass (Erzeuger ≠ Prüfer) und
   dokumentiertem Lösbarkeitsnachweis (siehe `KAPITELSTANDARD.md`).
6. Erst nach dem vollständigen Abschluss den Arbeitsstand oben sowie die Zeile in
   `ABDECKUNGSMATRIX.md` aktualisieren, dann das nächste Kapitel aus der
   Lückenliste wählen.

## Auswahl des nächsten Kapitels

Das nächste Kapitel ist nicht frei wählbar. Es ist die oberste sinnvolle
`fehlt`- oder `ungeprüft`-Zeile der `ABDECKUNGSMATRIX.md`, die der
Abhängigkeitskette in `AUSBILDUNGSLANDKARTE.md` folgt – keine Voraussetzung wird
übersprungen.

Historische Dateien in `docs/archiv/` sind keine Arbeitsanweisung.
