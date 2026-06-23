# Material-Abgleich: Prüfungen, Lernzettel und Lernapp

Stand: 18.06.2026

Diese Datei beschreibt, wie externe Lernzettel und Probeprüfungen in das
Projekt einfließen, ohne geschützte Aufgaben in die App zu kopieren.

## Ziel

Wir wollen prüfen:

1. Welche Themen und Aufgabentypen kommen im Material vor?
2. Welche Kapitel der Lernapp decken das ab?
3. Kann eine Aufgabe nur mit der Lernapp-Lösungskette gelöst werden?
4. Welche Lücken gibt es in Kapitel, Glossar, Quellen oder Training?

## Eingangsordner

| Ordner | Zweck |
|---|---|
| `probepruefungen/` | Probeprüfungen, Aufgabensammlungen, Lösungshinweise |
| `lernzettel/` | Lernzettel, Zusammenfassungen, Schulmaterial |
| `_ocr_out/` | technische OCR-/Extraktionsausgaben, nicht als Lerninhalt behandeln |

## Rechtliche Arbeitsregel

- Geschützte Prüfungsaufgaben werden nicht in die App übernommen.
- Aus Probeprüfungen werden nur Metadaten, Aufgabentyp, Thema, benötigtes
  Wissen, Lösungswegstruktur, Zeitbedarf und Lücken dokumentiert.
- Lernzettel sind Vergleichsmaterial. Sie dürfen nie alleinige Fachquelle sein.
- Harte Fachaussagen werden weiter gegen Primärquellen geprüft: FIAusbV, KMK,
  BIBB, BSI, RFCs, Gesetze, Normen oder Herstellerdokumentation.

## Ablauf

### 1. Inventar

Skript:

```powershell
& 'C:\Users\mu.aycetin\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' scripts\material_inventory.py
```

Ergebnis:

- `_material_index/material_inventory.jsonl`
- `_material_index/AP1_MATERIAL_INVENTAR.md`

Das Inventar speichert Dateipfad, Größe, Hash, Typ, Seiten-/Blattzahl und
Text-Extraktionsstatus. Es speichert standardmäßig keine Rohtexte.

### 2. Themen- und Aufgabentyp-Mapping

Pro Probeprüfung entsteht eine Mapping-Tabelle:

| Datei | Aufgabe | Typ | Thema | Benötigte Kapitel | Mit App lösbar? | Lücke | Aktion |
|---|---|---|---|---|---|---|---|

Erlaubt ist eine Beschreibung wie:

```text
Aufgabe 2.1: NAT/Portweiterleitung erkennen, private IP erklären,
Sicherheitsmaßnahme nennen.
```

Nicht erlaubt ist das Kopieren des Original-Aufgabentexts.

### 3. Lösbarkeitsprüfung

Für jeden Aufgabentyp wird geprüft:

- Ist das Thema im Inhaltsverzeichnis?
- Gibt es ein Kapitel?
- Ist das Kapitel mindestens `teilgeprüft`?
- Enthält das Kapitel den Lösungsweg?
- Enthält es typische Fehlerfallen?
- Reicht die Antworttiefe für kurze Prüfungsantworten?
- Ist die Aufgabe unter Zeitdruck lösbar?

### 4. Umsetzung

Wenn eine Aufgabe nicht lösbar ist:

- Kapitel gezielt nachziehen
- Glossar ergänzen
- Quellenbank ergänzen
- eigene ähnliche Trainingsaufgabe bauen
- Fehler in einer Fehlerliste dokumentieren

Erst danach kann ein Kapitel von `teilgeprüft` auf `geprüft` gehen.

## Wichtig

`geprüft` bedeutet nicht nur fachlich richtig. Es bedeutet:

```text
Fachlich belegt + didaktisch brauchbar + gegen reale/legale Aufgabenform
oder legal dokumentierten Aufgabentyp erfolgreich getestet.
```
