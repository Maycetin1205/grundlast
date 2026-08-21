# Lerndateien

Eigenständige HTML-Lernseiten zu je einem Prüfungssatz. Eine Datei, kein Backend,
kein Build zum Lesen — doppelklicken genügt.

## Bestand

| Datei | Inhalt |
|---|---|
| `ap1-2024-fruehjahr.html` | Alle Themen der AP1 Frühjahr 2024 · 16 Kapitel · 5 Rechenwerkzeuge · 7 Selbsttests |

## Wie sie entsteht

1. Prüfungssatz auswerten → `quellen/ap1-pruefungen/<jahr>-<termin>.md`
2. Je Thema ein Kapitel schreiben: Erklärung, eigenes Rechenbeispiel, typische Fehler
3. Alle Zahlen maschinell gegenrechnen
4. Im Browser prüfen (Werkzeuge, Selbsttests, keine JS-Fehler)
5. Für die Weitergabe offline-fähig machen:
   `node scripts/einzeldatei.mjs --in=lerndateien/<datei>.html --out=<ziel>.html`
   Das bettet die Schriften als data:-URI ein.

## Regel zum Inhalt

Diese Dateien geben **keine Prüfungsaufgaben und keine Musterlösungen wieder**. Sie
erklären die Themen, die in einem Satz vorkamen, und rechnen sie an **eigenen
Beispielen** vor. Die Prüfungssätze tragen ein ausdrückliches Vervielfältigungsverbot
(© ZPA Nord-West); `REVIEW_LOG.md` verlangt dasselbe.

Aus der Prüfung übernommen werden nur Tatsachen über sie: welches Thema, wie viele
Punkte, welche Rechentiefe, welches Antwortformat.
