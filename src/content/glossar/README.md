# Glossar-Daten

Quelle der Wahrheit für alle Glossareinträge. Die Public API liegt in
`src/lib/glossar/`; dieser Ordner enthält nur Daten.

## Struktur

Einträge sind alphabetisch nach `id` auf sechs Buckets verteilt:

| Datei     | Anfangsbuchstabe der `id` |
| --------- | ------------------------- |
| `a-d.ts`  | a, b, c, d                |
| `e-h.ts`  | e, f, g, h                |
| `i-l.ts`  | i, j, k, l                |
| `m-p.ts`  | m, n, o, p                |
| `q-s.ts`  | q, r, s                   |
| `t-z.ts`  | t, u, v, w, x, y, z       |

`index.ts` aggregiert die sechs Listen zu `glossarEintraege`.

## Warum alphabetisch, nicht nach Lernfeld?

Jeder Eintrag trägt sein thematisches Lernfeld bereits im Feld `kapitel`
(Titel + Href). Ein zweiter Topic-Split auf Dateiebene wäre redundant und
führt bei Wachstum zu unausgewogenen Dateien (so wurde es früher gehandhabt;
`netzwerke.ts` hatte 71, `grundlagen.ts` 8 Einträge).

Alphabetisch nach `id`:

- deterministisch — keine Diskussion, wo ein neuer Eintrag hingehört
- gleichmäßig wachsend, da die ID-Verteilung sich angleicht
- schneller Lookup beim manuellen Editieren

## Neuen Eintrag hinzufügen

1. Sicherstellen, dass die `id` (kebab-case, ASCII) noch nicht vergeben ist.
2. Bucket nach Anfangsbuchstabe wählen.
3. Eintrag im Bucket alphabetisch nach `id` einsortieren.
4. `npm run check` ausführen.

Die `id` darf nicht mehr geändert werden, sobald sie irgendwo in MDX-Inhalten
referenziert wurde — sonst brechen Begriff-Verweise.
