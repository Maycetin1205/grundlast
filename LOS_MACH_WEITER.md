# Mach weiter: verbindlicher Einstieg

Stand: 24.06.2026

Diese Datei ist die **einzige operative Startanweisung** für neue Chats.
Wenn der Nutzer `mach weiter`, `LOS` oder sinngemäß dasselbe schreibt, wird
ohne neue Grundsatzdiskussion genau hier fortgesetzt.

## Grundsatz

Der gesamte fachliche Bestand kann KI-generiert sein.

- Kein alter Status wie `ready`, `final`, `reviewed` oder `geprüft` gilt als
  Qualitätsnachweis.
- Inhaltsverzeichnis und bestehende Kapitel sind Arbeitsmaterial, keine
  fachliche Wahrheit.
- Es wird immer nur **ein Kapitel** bearbeitet.
- Das nächste Kapitel beginnt erst, wenn das aktuelle vollständig geprüft,
  dokumentiert und technisch getestet wurde.
- Die 20 TOC-Einträge ohne MDX-Datei werden vorerst ignoriert.
- Kein großer Manifest-, TOC- oder Statusumbau nebenbei.

## Aktueller Arbeitsstand

| Feld | Wert |
|---|---|
| Aktuelles Kapitel | `prefixe` |
| Kapiteldatei | `src/content/lessons/prefixe.mdx` |
| Verbindlicher Status | `ungeprüft` |
| Aktuelle Phase | Neustartprüfung noch offen |
| Nächstes Kapitel | erst nach Abschluss festlegen |

Jeder Chat aktualisiert diese Tabelle, sobald sich Phase, Status oder aktuelles
Kapitel ändern. So findet der nächste Chat ohne Interpretation den Einstieg.

## Was ein neuer Chat zuerst tut

1. Diese Datei vollständig lesen.
2. `git status --short` prüfen und fremde Änderungen nicht überschreiben.
3. Nur die Dateien zum aktuellen Kapitel und die dafür nötigen Regeln lesen.
4. Den letzten dokumentierten Arbeitsschritt fortsetzen.
5. Nicht auf ein anderes Kapitel wechseln.

Weitere Markdown-Dateien sind nur Referenzen. Für die Kapitelarbeit dürfen
insbesondere diese Regeln herangezogen werden:

- `KAPITEL_ARBEITSABLAUF.md`
- `KAPITEL_QUALITAET.md`
- `CONTENT_GUIDELINES.md`
- `INHALTSVERZEICHNIS_JAHR_1_2.md`
- `CURRICULUM_MAPPING.md`

Historische Statusaussagen in diesen oder anderen Dateien werden ignoriert.

## Verbindlicher Ablauf pro Kapitel

### 1. Existenzberechtigung

Vor Textänderungen klären:

- Gehört das Thema nach offiziellen Ausbildungsquellen in Jahr 1 oder 2?
- Ist ein eigenes Kapitel die richtige Form?
- Überschneidet es sich mit einem anderen Kapitel?
- Ergebnis: `behalten`, `zusammenlegen`, `als Abschnitt/Box führen` oder
  `entfernen`.

### 2. Quellenbasis

Vor dem Schreiben mindestens:

- eine offizielle Quelle für Ausbildungsumfang oder Lernfeldbezug;
- eine fachliche Primärquelle;
- weitere belastbare Quellen für zentrale Aussagen.

Bei Recht, Normen, Sicherheit, Protokollen und Zahlenwerten haben Gesetze,
Normgeber, RFCs, BSI sowie offizielle Spezifikationen Vorrang. Lernseiten und
Blogs sind keine Belege für harte Fakten.

Keine geschützten Prüfungsaufgaben kopieren. Vorhandenes lokales
Prüfungsmaterial darf nur für Themenumfang und Aufgabenart abgeglichen werden.

### 3. Vollständiger Faktencheck

Nicht nur Stichproben prüfen. Jede Definition, Regel, Tabelle, Formel,
Zahlenangabe und technische Behauptung des Kapitels muss:

- belegt,
- fachlich korrekt,
- aktuell,
- passend vereinfacht und
- frei von irreführenden Halbwahrheiten sein.

Unklare Aussagen werden korrigiert oder entfernt.

### 4. Didaktischer Goldstandard

Das fertige Kapitel:

- funktioniert ohne Vorwissen;
- nennt am Anfang knapp Ziel und Nutzen;
- baut Begriffe in sinnvoller Reihenfolge auf;
- nutzt Analogien nur, wenn sie wirklich tragen;
- erklärt Verfahren reproduzierbar Schritt für Schritt;
- rechnet alle Beispiele mit Einheiten und Interpretation vor;
- zeigt typische Fehler direkt am passenden Inhalt;
- enthält einen sinnvollen Transfer zu Folgekapiteln;
- vermeidet Fülltext, künstliche Prüfungssprache und unnötige Wiederholungen;
- nutzt höchstens kleine, direkt erklärte Selbstchecks.

### 5. App-Integration

Prüfen und bei Bedarf pflegen:

- Glossarbegriffe und `<Term>`-IDs;
- Quellenbank und Quellenzuordnung;
- interne Links und Folgekapitel;
- TOC-Einordnung des aktuellen Kapitels;
- Darstellung auf schmalen und breiten Ansichten, falls UI betroffen ist.

### 6. Sprachprüfung

Deutscher Fließtext verwendet echte Umlaute und `ß`. Ersatzschreibungen wie
`fuer`, `pruefen`, `ueber`, `gross` oder `weiss` sind im sichtbaren Lerntext
nicht erlaubt. Ausnahmen gelten nur für technische Bezeichner, Slugs,
Dateinamen, IDs, URLs und exakte ASCII-Werte.

### 7. Technische Prüfung

Nach Änderungen mindestens:

```powershell
& 'C:\Program Files\nodejs\npm.cmd' run lint
& 'C:\Program Files\nodejs\npm.cmd' run test
& 'C:\Program Files\nodejs\npm.cmd' run build
```

Falls der Build nur wegen des lokal fehlenden Python-Interpreters im
Konsistenzskript scheitert, werden TypeScript und Vite zusätzlich direkt
ausgeführt. Der Umgebungsfehler wird klar dokumentiert und nicht als
erfolgreicher Gesamtbuild ausgegeben.

## Wann ein Kapitel fertig ist

Nur wenn alle Punkte erfüllt sind:

- Existenzberechtigung und Umfang geklärt;
- vollständiger Quellen- und Faktencheck abgeschlossen;
- verständlicher Aufbau ohne vorausgesetztes Wissen;
- Beispiele, Rechnungen und Einheiten selbst kontrolliert;
- typische Fehler und Transfer sinnvoll abgedeckt;
- Glossar, Quellen und Verknüpfungen geprüft;
- Sprache und Umlaute geprüft;
- Lint und Tests erfolgreich;
- Build erfolgreich oder ein reiner Umgebungsfehler exakt dokumentiert;
- Ergebnis und Quellen nachvollziehbar dokumentiert.

Bis dahin bleibt der Status `ungeprüft` oder höchstens `teilgeprüft`.

## Abschluss eines Kapitels

Am Ende:

1. Ergebnis in `AP1_AUDIT_MATRIX.md` nachvollziehbar dokumentieren.
2. Alle widersprüchlichen Statusstellen für dieses Kapitel angleichen.
3. Die Tabelle **Aktueller Arbeitsstand** oben auf das nächste Kapitel setzen.
4. Erst dann das nächste Kapitel öffnen.

## Kurzes Abschlussformat

```text
Kapitel: [slug]
Entscheidung: [behalten/zusammenlegen/Abschnitt/entfernen]
Status: [ungeprüft/teilgeprüft/geprüft]
Geändert: [Dateien]
Belegt: [zentrale Quellen]
Checks: [Lint, Tests, Build]
Offen: [nichts oder konkrete Punkte]
Nächstes Kapitel: [slug, nur wenn aktuelles abgeschlossen]
```
