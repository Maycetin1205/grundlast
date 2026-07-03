# Grundlast – Lerndatei für Fachinformatiker

Diese Anwendung wird eine verlässliche Lerndatei für Auszubildende
Fachinformatiker im ersten und zweiten Lehrjahr. Sie erklärt fachliche
Grundlagen ohne Vorwissen, verbindet sie mit realistischen Anwendungen und
bleibt als Nachschlagewerk im Schul- und Betriebsalltag nützlich.

Der sichtbare Kern ist ein Kompendium, kein Prüfungstrainer. Ein optionaler
Prüfungsmodus wird erst gebaut, wenn der gesamte Lernkern vollständig geprüft
und verbunden ist.

## Ziel und Maßstab

Mit der fertigen Lerndatei muss sich **jede** reale Aufgabe aus Ausbildung und
AP1 lösen lassen. Daran wird der Erfolg gemessen:

> Nimm irgendeine echte Aufgabe → sie ist (a) von einem geprüften Kapitel
> abgedeckt und (b) allein mit der Lerndatei lösbar.

## Drei Garantien

So bleibt der Plan idiotensicher – jede Garantie hat ihren festen Ort:

1. **Vollständigkeit.** `ABDECKUNGSMATRIX.md` listet jedes prüfbare Thema (Anker:
   FIAusbV/KMK/IHK-Prüfungskatalog + reale Probeprüfungen) und seinen Status. Die
   `fehlt`-Zeilen sind die Bauliste; daraus kommt das nächste Kapitel.
2. **Korrektheit.** Erzeuger ≠ Prüfer: Jedes Kapitel wird von einem getrennten,
   frischen Durchgang gegnerisch geprüft. Tests sind nur der Boden, nie der
   Beweis.
3. **Lösbarkeit.** Für jedes Kapitel wird an einer realen, abstrahierten Aufgabe
   gezeigt, dass sie allein aus der Lerndatei lösbar ist.

Gates und Ablauf: `KAPITELSTANDARD.md`. Prompts je Phase: `PROMPTS.md`. Beweis
je Kapitel: `CONTENT_AUDIT_MATRIX.md`.

## Arbeitsprinzip

Vorhandene Lektionen, Quellenlisten und Statuswerte sind Arbeitsmaterial, aber
kein Qualitätsnachweis. Wir bearbeiten immer genau ein Kapitel vollständig: erst
Einordnung und Quellen, dann Fakten und Didaktik, dann der Lösbarkeitsnachweis,
dann ein unabhängiger Prüfer-Pass, danach Integration und technische Checks.
Erst dann beginnt das nächste Kapitel – gewählt aus der Lückenliste der
Abdeckungsmatrix.

## Aktive Dokumentation

| Datei | Zweck |
|---|---|
| `AGENTS.md` | Verfassung und verbindlicher Einstieg für jede KI (Codex, Claude, …). |
| `LOS_MACH_WEITER.md` | Aktives Kapitel und nächster konkreter Schritt. |
| `ABDECKUNGSMATRIX.md` | Sollwert aller prüfbaren Themen, Abdeckung und Lückenliste. |
| `AUSBILDUNGSLANDKARTE.md` | Ausbildungsrahmen, Lernpfade und Abhängigkeiten. |
| `KAPITELSTANDARD.md` | Verbindlicher Qualitäts- und Arbeitsablauf pro Kapitel. |
| `PROMPTS.md` | Kopierfertige Prompts je Phase (Entwurf, Beleg, Review, Fix, Zwischen-Audit). |
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
