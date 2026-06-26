# Kapitelstandard

## Grundregel

Es ist immer genau ein Inhaltskapitel aktiv. Bestehender Text, Status, Quellen
und frühere Notizen sind Rohmaterial, bis das Kapitel diesen Standard erfüllt.
Vor der vollständigen Dokumentation und technischen Prüfung beginnt kein
nächstes Kapitel.

## 1. Einordnung vor Textarbeit

Vor jeder Änderung klären und in der Auditmatrix notieren:

- Gehört das Thema in den gemeinsamen Ausbildungsrahmen für Jahr 1 oder 2?
- Ist die richtige Form ein Kapitel, Abschnitt, Box, Glossarbegriff oder keine
  Aufnahme?
- Welche Vorkenntnisse braucht es und welche Inhalte baut es später auf?
- Welche vorhandenen Kapitel überschneiden sich damit?

## 2. Quellen- und Vergleichsbasis

Vor dem Schreiben liegt eine kurze Matrix vor:

| Rolle | Zweck |
|---|---|
| Ausbildungsquelle | Umfang und Einordnung anhand FIAusbV, KMK oder BIBB klären. |
| Fachliche Primärquelle | Harte Fakten, Zahlen, Regeln und Definitionen belegen. |
| Didaktischer Vergleich | Gute Erklärreihenfolge und typische Missverständnisse erkennen. |
| Lokales Material, falls vorhanden | Nur Themenumfang, Aufgabentypen und Lücken erkennen. |
| Eigene Schlussfolgerung | Begründen, was dieses Kapitel leisten muss. |

Mindestens eine Ausbildungsquelle und eine fachliche Primärquelle sind Pflicht.
Bei Recht, Sicherheit, Normen, Protokollen und Zahlenwerten haben Gesetze,
Normgeber, RFCs, BSI und offizielle Spezifikationen Vorrang. Lernseiten und
Blogs sind keine Faktenanker.

## 3. Vollständiger Faktencheck

Jede Definition, Regel, Tabelle, Formel, Zahl und technische Behauptung wird
gegen die Quellenbasis geprüft. Rechenwege werden selbst nachgerechnet,
einschließlich Einheiten und Ergebnisinterpretation. Unklare, veraltete oder
irreführend vereinfachte Aussagen werden korrigiert oder entfernt.

## 4. Didaktischer Aufbau

Ein Kapitel soll ohne Vorwissen funktionieren und folgt, soweit passend, dieser
Lernbewegung:

1. Nutzen und Ziel in wenigen Sätzen.
2. Mentales Modell oder anschaulicher Einstieg, wenn es wirklich trägt.
3. Begriffe in der Reihenfolge, in der sie gebraucht werden.
4. Regeln, Bausteine oder Zusammenhänge klar verdichtet.
5. Reproduzierbares Verfahren oder Rechenweg mit vollständigem Beispiel.
6. Typische Fehler genau dort, wo sie entstehen.
7. Realistische Anwendung und Anschluss an das nächste Thema.

Beispiele erklären den Stoff. Kleine, direkt erklärte Selbstchecks sind
erlaubt; der Kerntext wird nicht zu einer Aufgabensammlung. Begriffe werden beim
ersten sinnvollen Auftreten mit dem Glossar verbunden.

## 5. Integration in die Lerndatei

Für jedes abgeschlossene Kapitel prüfen und pflegen:

- Glossarbegriffe und gültige `<Term>`-IDs;
- Quellenbank und Quellenzuordnung;
- interne Links, Voraussetzungen und Folgekapitel;
- Einordnung in die Navigation;
- Darstellung auf schmalen und breiten Ansichten, wenn die Oberfläche berührt
  wurde.

Deutscher sichtbarer Text verwendet echte Umlaute und `ß`. Ausnahmen gelten nur
für technische Bezeichner, IDs, Pfade, URLs und exakte ASCII-Werte.

## 6. Abschluss-Gate

Ein Kapitel ist erst `geprüft`, wenn alle Punkte erfüllt und in
`CONTENT_AUDIT_MATRIX.md` nachvollziehbar dokumentiert sind:

- Einordnung, Umfang und Lernpfad-Anschluss geklärt;
- Quellen- und Vergleichsmatrix vorhanden;
- Fakten, Zahlen und Rechenwege geprüft;
- verständlicher Aufbau, Beispiele und Fehlerfallen vorhanden;
- Glossar, Quellen, Links und Darstellung integriert;
- Sprachprüfung durchgeführt;
- `npm run lint`, `npm run test` und `npm run build` erfolgreich oder ein
  reiner Umgebungsfehler exakt dokumentiert.

## Kurzformat für den Abschluss

```text
Kapitel: [slug]
Entscheidung: [Kapitel/Abschnitt/Box/Glossar/nicht aufnehmen]
Status: [ungeprüft/teilgeprüft/geprüft]
Geändert: [Dateien]
Belegt: [zentrale Quellen]
Lernpfad: [Voraussetzungen → Kapitel → Anschluss]
Checks: [Lint, Tests, Build]
Offen: [nichts oder konkrete Punkte]
Nächstes Kapitel: [erst nach Abschluss]
```
