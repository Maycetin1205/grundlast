# Grundlast – Lerndatei für Fachinformatiker

Diese Anwendung wird eine verlässliche Lerndatei für Auszubildende
Fachinformatiker im ersten und zweiten Lehrjahr. Sie erklärt fachliche
Grundlagen ohne Vorwissen, verbindet sie mit realistischen Anwendungen und
bleibt als Nachschlagewerk im Schul- und Betriebsalltag nützlich.

Der sichtbare Kern ist ein Kompendium, kein Prüfungstrainer. Ein optionaler
Prüfungsmodus wird erst gebaut, wenn der gesamte Lernkern vollständig geprüft
und verbunden ist.

## Arbeitsprinzip

Vorhandene Lektionen, Quellenlisten und Statuswerte sind Arbeitsmaterial, aber
kein Qualitätsnachweis. Wir bearbeiten immer genau ein Kapitel vollständig:
erst Einordnung und Quellen, dann Fakten und Didaktik, danach Integration und
technische Checks. Erst dann beginnt das nächste Kapitel.

## Aktive Dokumentation

| Datei | Zweck |
|---|---|
| `LOS_MACH_WEITER.md` | Aktives Kapitel und nächster konkreter Schritt. |
| `AUSBILDUNGSLANDKARTE.md` | Ausbildungsrahmen, Lernpfade und Abhängigkeiten. |
| `KAPITELSTANDARD.md` | Verbindlicher Qualitäts- und Arbeitsablauf pro Kapitel. |
| `CONTENT_AUDIT_MATRIX.md` | Nachweis, was tatsächlich geprüft ist. |
| `MATERIALABGLEICH.md` | Zulässiger Umgang mit lokalem Lern- und Übungsmaterial. |

Frühere, teils widersprüchliche Planungs- und Auditdateien liegen nur noch in
`docs/archiv/`. Sie sind historische Referenz und keine Arbeitsanweisung.

## Projektstruktur

- `src/content/lessons/`: sichtbare Lektionen; bis zu ihrem Audit Rohmaterial
- `src/content/glossar/`: Begriffserklärungen
- `src/content/quellen/`: Quellenbank und Lektionszuordnung
- `src/lib/toc/`: Navigation und technische Metadaten
- `src/lib/audit/`, `src/lib/review.ts`: noch zu konsolidierende Altmetadaten
- `AP1_STATUS.md`: vorerst technisch generierte Altübersicht; nicht manuell
  bearbeiten und nicht als Qualitätsnachweis verwenden

## Entwicklung

```powershell
& 'C:\Program Files\nodejs\npm.cmd' run lint
& 'C:\Program Files\nodejs\npm.cmd' run test
& 'C:\Program Files\nodejs\npm.cmd' run build
```
