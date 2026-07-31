# Grundlast

Grundlast ist eine lokale React-Lernanwendung für die gemeinsamen Lernfelder
LF1 bis LF9 der Fachinformatiker-Ausbildung und für die AP1-Vorbereitung. Die
Zielgruppe startet ohne Vorwissen. Lerntexte, Nachschlagewerk, Lernpfad und
Prüfungssichten verwenden denselben Kapitelbestand.

## Vertrauensmodell

Vorhandener Text ist nicht automatisch fachlich freigegeben. Der zentrale
Kapitelkatalog unterscheidet:

- `geplant`: noch kein freigegebener Lerntext,
- `ausgearbeitet`: Text vorhanden, Audit offen,
- `teilgeprueft`: mindestens ein Audit-Gate offen,
- `geprueft`: alle dokumentierten Freigabe-Gates bestanden,
- `gesperrt`: bekannter kritischer Befund.

Die Anwendung zeigt diesen Status sichtbar an. Persönliche Selbsteinschätzung
und fachlicher Inhaltsstatus sind getrennte Werte.

Der aktuelle, aus dem Katalog erzeugte Stand steht in `AP1_STATUS.md`.
Die atomare Zuordnung zu KMK, FIAusbV und AP1 steht in `SCOPE_STATUS.md`.

## Aktive Architektur

| Bereich | Kanonische Quelle |
|---|---|
| Kapitel, Reihenfolge, Lernfelder, AP1-Zuordnung, Quellen und Status | `src/content/catalog/` |
| atomare Pflichtkompetenzen und Prüfungskatalog-Deltas | `src/content/catalog/scope/` |
| Lerntexte | `src/content/lessons/*.mdx` |
| zentrale Quellenbank | `src/content/quellen/sourceBank.ts` |
| Glossar | `src/content/glossar/` |
| Katalogvalidierung und Lernlogik | `src/lib/learning/` |
| React-Oberfläche | `src/routes/`, `src/components/`, `src/styles/` |
| verbindlicher Inhaltsplan | `KAPITELPLAN_LF1_LF9.md` |
| Qualitätsregeln | `PROJEKT.md` |
| aktueller Arbeitsschritt | `QUEUE.md` |

Navigation, Lernpfad, Themenansicht und AP1-Sicht werden aus dem zentralen
Katalog abgeleitet. Alte TOC- und Manifestverzeichnisse sind keine
Laufzeitquellen mehr.

## Entwicklung

```bash
npm ci
npm run dev
```

Vollständiger technischer Check:

```bash
npm run check
npm run build:single
npm run emit:status
npm run emit:scope
```

`npm run validate:catalog` prüft die strukturelle Integrität und meldet
bekannte Qualitätslücken. `npm run validate:release` ist das strenge
Vollständigkeits-Gate und muss erst vor einer echten Gesamtfreigabe grün sein.

## Inhaltsarbeit

Für jedes Kapitel gelten `AGENTS.md`, `UNIVERSALPROMPT.md`, `PROJEKT.md` und
der erste offene Eintrag in `KAPITELPLAN_LF1_LF9.md`. Pro Arbeitsschritt wird
genau ein Kapitel vollständig bearbeitet. Erzeuger und unabhängiger Prüfer sind
getrennt; geschützte Prüfungsaufgaben werden nicht kopiert.

## Geschütztes Material

Community-Lernzettel und legal erworbene Prüfungsunterlagen dienen nur als
Themen- und Aufgabenform-Abgleich. Sachbehauptungen werden gegen aktuelle
Primärquellen geprüft. Solange fremdes Material im Repository liegt, muss das
Repository privat bleiben.
