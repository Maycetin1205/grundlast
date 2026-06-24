# Grundlast: Projektstatus und Aufräumkarte

Stand: 24.06.2026

## Wichtig

Der gesamte fachliche Bestand kann KI-generiert sein. Vorhandensein, Umfang,
TOC-Status, Review-Eintrag oder Quellenliste sind deshalb **kein Beleg für
fachliche Richtigkeit**.

Bis zum Abschluss des Aufräumens gilt:

- Keine Lektion wird als vollständig geprüft oder freigegeben bezeichnet.
- Nichts wird allein wegen eines alten Statuswerts weiterverwendet.
- Dateien werden erst gelöscht, nachdem Abhängigkeiten und möglicher Nutzen
  geprüft wurden.
- Bestehende, nicht eingecheckte Änderungen bleiben unangetastet.

## Was die laufende App tatsächlich verwendet

| Bereich | Aktive Quelle | Einordnung |
|---|---|---|
| Navigation und sichtbare Lektionen | `src/lib/toc/` | aktiv, aber fachlich unbestätigt |
| Lektionsinhalt | `src/content/lessons/` | aktiv, vollständig unbestätigter Bestand |
| Vertrauensanzeige und AP1-Freigabe | `src/lib/audit/status.ts` | aktiv, handgepflegt |
| zusätzlicher Faktencheck-Status | `src/lib/review.ts` | aktiv, überschneidet sich mit Audit |
| Quellenanzeige | `src/content/quellen/` | aktiv, Quellen und Zuordnungen unbestätigt |
| Glossar | `src/content/glossar/` | aktiv, Begriffe unbestätigt |
| LF1-LF9-Manifest | `src/content/manifest/` | derzeit nur durch Tests verwendet |
| lesbarer Gesamtstatus | `AP1_STATUS.md` | generiert aus TOC, Audit, Review und Quellen |

## Bekannter Strukturfehler

Es existieren vier konkurrierende Statuswelten:

1. technischer Lektionsstatus in `src/lib/toc/`
2. Vertrauensstatus in `src/lib/audit/status.ts`
3. Reviewstatus in `src/lib/review.ts`
4. Freigabeaussagen in `REVIEW_LOG.md`

Das neue Manifest bezeichnet sich zwar als „Single Source of Truth“, ist aber
noch nicht an die App angebunden. Daher konnten gleichzeitig vier, drei oder
null Kapitel als fertig erscheinen.

## Vorläufige Einordnung des Bestands

### Behalten: technische Basis

- `src/App.tsx`, `src/main.tsx`
- `src/routes/`, `src/components/`, `src/styles/`
- `src/lib/` als Laufzeitcode, jedoch noch zu konsolidieren
- `package.json`, Lockdatei, TypeScript-, Vite-, Vitest- und ESLint-Konfiguration
- `public/`

„Behalten“ bedeutet hier nur: technisch Teil der App. Es ist keine Aussage
über Codequalität oder fachliche Richtigkeit.

### Quarantäne: fachlicher Bestand

- alle 80 Dateien in `src/content/lessons/`
- `src/content/glossar/`
- `src/content/quellen/`
- fachliche Metadaten in TOC, Audit, Review und Manifest

Diese Dateien bleiben verfügbar, gelten aber bis zu einer echten Prüfung als
Rohmaterial.

### Prüfen und zusammenführen: Projektsteuerung

- `AP1_NEUSTART.md`
- `AP1_KONTROLLZENTRUM_2026.md`
- `AP1_AUDIT_MATRIX.md`
- `AP1_INHALTSVERZEICHNIS_LERNFELDER_DICHTE.md`
- `INHALTSVERZEICHNIS_JAHR_1_2.md`
- `CURRICULUM_MAPPING.md`
- `SCOPE-LANDKARTE_LF1-9.md`
- `CONTENT_GUIDELINES.md`
- `KAPITEL_ARBEITSABLAUF.md`
- `KAPITEL_QUALITAET.md`
- `MATERIAL_ABGLEICH_WORKFLOW.md`
- `LOS_MACH_WEITER.md`
- `REVIEW_LOG.md`
- `PLAN_RECHENWEG.md`

Diese Dokumente überschneiden sich stark und sind ebenfalls unbestätigt. Ziel
ist eine kleine, nachvollziehbare Dokumentation statt vieler konkurrierender
Anweisungen.

### Generiert oder lokal

- `AP1_STATUS.md`: generierte Übersicht, nicht von Hand pflegen
- `dist/`: Build-Ausgabe, jederzeit neu erzeugbar
- `node_modules/`: installierte Abhängigkeiten
- `*.log`: lokale Laufzeitprotokolle
- `_ocr_out/`: lokale OCR-Ausgabe
- `_material_index/`: lokaler Materialindex
- `lernzettel/`, `probepruefungen/`: lokale, nicht versionierte Materialien

## Beschlossene Arbeitsweise

Es gibt vorerst keinen großen Manifest-, TOC- oder Statusumbau. Die vorhandenen
80 Kapitel werden einzeln nach einem festen, sehr hohen Qualitätsstandard
bearbeitet. Die 20 TOC-Platzhalter ohne Kapiteldatei bleiben zunächst außen
vor.

Der verbindliche Einstieg für jeden neuen Chat steht in
`LOS_MACH_WEITER.md`. Dort werden das aktuelle Kapitel, die aktuelle Phase und
das nächste zulässige Vorgehen gepflegt.

Pro Kapitel wird entschieden:

1. Gehört das Thema überhaupt in die App?
2. Ist ein eigenes Kapitel die richtige Form?
3. Sind Inhalt und jede zentrale Aussage fachlich belastbar?
4. Ist das Kapitel ohne Vorwissen verständlich und didaktisch stark?
5. Sind Quellen, Glossar, Verknüpfungen und technische Checks vollständig?

Erst nach einem vollständig dokumentierten Abschluss beginnt das nächste
Kapitel. Strukturelle Dubletten werden nur dann bereinigt, wenn sie beim
jeweiligen Kapitel konkret stören.
