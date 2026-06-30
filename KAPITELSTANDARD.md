# Kapitelstandard

## Zweck und Grundregel

Ziel der Lerndatei: Mit ihr muss sich **jede** reale Aufgabe aus Ausbildung und
AP1 lösen lassen. Ein Kapitel ist erst fertig, wenn es nachweislich **richtig**,
**vollständig** und **allein aus der Lerndatei lösbar** ist.

Es ist immer genau ein Inhaltskapitel aktiv. Welches, steht in
`LOS_MACH_WEITER.md` und folgt der Lückenliste in `ABDECKUNGSMATRIX.md` – nicht
dem Bauchgefühl. Bestehender Text, Status, Quellen und frühere Notizen sind
Rohmaterial, bis das Kapitel diesen Standard erfüllt. Vor der vollständigen
Dokumentation und Prüfung beginnt kein nächstes Kapitel.

**Tests sind der Boden, nicht der Beweis.** `lint`, `test`, `build`,
`check:consistency` und `check:sources` müssen grün sein, damit ein Kapitel
überhaupt in die Prüfung darf. Grün heißt „nicht kaputt", nie „gut". Über die
inhaltliche Qualität entscheidet der unabhängige Prüfer-Pass (Abschnitt 7), kein
grüner Haken. Die Checks dürfen nicht zum eigentlichen Ziel werden.

**Erzeuger ist nicht Prüfer.** Wer ein Kapitel schreibt, gibt es nicht selbst
frei. Ein getrennter, frischer Durchgang prüft es gegnerisch (Abschnitt 7). Die
Prompts je Phase stehen in `PROMPTS.md`.

## 1. Einordnung vor Textarbeit

Vor jeder Änderung klären und in der Auditmatrix notieren:

- Welche Zeile(n) der `ABDECKUNGSMATRIX.md` deckt das Kapitel ab?
- Gehört das Thema in den gemeinsamen Ausbildungsrahmen für Jahr 1 oder 2?
- Ist die richtige Form ein Kapitel, Abschnitt, Box, Glossarbegriff oder keine
  Aufnahme?
- Welche Vorkenntnisse braucht es? Alle müssen laut Voraussetzungs-Register
  (Abschnitt 5) bereits in einem früheren Kapitel eingeführt sein.
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

Beispiele erklären den Stoff. Kleine, direkt erklärte Selbstchecks sind erlaubt;
der Kerntext wird nicht zu einer Aufgabensammlung. Begriffe werden beim ersten
sinnvollen Auftreten mit dem Glossar verbunden.

## 5. Integration und Voraussetzungs-Register

Für jedes abgeschlossene Kapitel prüfen und pflegen:

- Glossarbegriffe und gültige `<Term>`-IDs;
- Quellenbank und Quellenzuordnung;
- interne Links, Voraussetzungen und Folgekapitel;
- Einordnung in die Navigation;
- Darstellung auf schmalen und breiten Ansichten, wenn die Oberfläche berührt
  wurde.

Zusätzlich: Jedes neu eingeführte Kernkonzept wird im Voraussetzungs-Register am
Ende der `ABDECKUNGSMATRIX.md` mit dem Kapitel eingetragen, in dem es zuerst
erklärt wird. Ein Kapitel darf nur Konzepte voraussetzen, die im Register vor ihm
stehen. So bleibt „baut aufeinander auf" maschinen- und prüferseitig
nachvollziehbar.

Deutscher sichtbarer Text verwendet echte Umlaute und `ß`. Ausnahmen gelten nur
für technische Bezeichner, IDs, Pfade, URLs und exakte ASCII-Werte. Keine
generischen „KI-Optik"-Layouts; Darstellung folgt dem bestehenden Designsystem.

## 6. Lösbarkeitsnachweis

Für die Kompetenz des Kapitels wird mindestens eine **reale, abstrahierte**
Aufgabe herangezogen (Aufgabentyp aus Probeprüfung oder `_material_index`, ohne
geschützten Wortlaut – siehe `MATERIALABGLEICH.md`) und gezeigt: Sie ist
**allein mit der Lerndatei** lösbar. Jeder nötige Begriff, jede Regel und jeder
Rechenschritt steht im Kapitel oder einem bereits geprüften Vorkapitel. Fehlt
etwas, ist das eine Lücke: ergänzen, nicht wegdefinieren. Der Nachweis wird in
der Auditmatrix knapp festgehalten (Aufgabentyp + welche Kapitelteile ihn
tragen). Das ist eine Prüfmethode für die Datei, kein Übungsteil im Produkt.

## 7. Unabhängiger Prüfer-Pass

Nachdem der Boden grün ist, prüft ein **frischer Durchgang ohne Bindung an den
Text** gegnerisch (eigener Chat, Prompt 3 aus `PROMPTS.md`). Er geht von „nicht
geprüft" aus und versucht aktiv, das Kapitel zu zerlegen:

- Fachlich: Stimmt jede Definition, Zahl, Regel? Stützt das wörtliche Zitat
  wirklich die Aussage drumherum oder nur einen Halbsatz?
- Vollständig: Fehlt ein Pflichtinhalt, den eine reale Aufgabe braucht?
- Didaktisch: Trägt die Reihenfolge? Wird ein Begriff benutzt, bevor er erklärt
  ist?
- Voraussetzungen: Baut das Kapitel nur auf bereits Eingeführtem auf?
- Lösbarkeit: Hält der Nachweis aus Abschnitt 6 einer ehrlichen Gegenrechnung
  stand?

Jeder Fund wird im Fix-Pass behoben. Erst wenn der Prüfer-Pass keinen offenen
Fund mehr hat, ist `geprüft` zulässig.

## 8. Abschluss-Gate

Ein Kapitel ist erst `geprüft`, wenn alle Punkte erfüllt und in
`CONTENT_AUDIT_MATRIX.md` nachvollziehbar dokumentiert sind:

- Einordnung inkl. abgedeckter `ABDECKUNGSMATRIX`-Zeile(n) geklärt;
- Quellen- und Vergleichsmatrix vorhanden;
- Fakten, Zahlen und Rechenwege geprüft;
- Faktenbelege hinterlegt: mind. 5 Kernaussagen in `src/content/quellen/belege.json`
  (je wörtliches Zitat + Quellen-ID + Fundstelle + Abrufdatum), und
  `npm run check:sources` ist grün (Quelle erreichbar, Zitat im Quelltext
  gefunden);
- Lösbarkeitsnachweis nach Abschnitt 6 dokumentiert;
- Voraussetzungs-Register gepflegt; keine ungedeckte Voraussetzung;
- unabhängiger Prüfer-Pass nach Abschnitt 7 ohne offenen Fund, mit Datum;
- Glossar, Quellen, Links und Darstellung integriert;
- Sprachprüfung durchgeführt;
- Boden grün: `check:consistency`, `check:sources`, `lint`, `test`, `build` –
  oder ein reiner Umgebungsfehler exakt dokumentiert;
- Zeile in `ABDECKUNGSMATRIX.md` auf `geprüft` aktualisiert.

## Kurzformat für den Abschluss

```text
Kapitel: [slug]
Deckt ab: [Zeile(n) aus ABDECKUNGSMATRIX.md]
Entscheidung: [Kapitel/Abschnitt/Box/Glossar/nicht aufnehmen]
Status: [ungeprüft/teilgeprüft/geprüft]
Geändert: [Dateien]
Belegt: [zentrale Quellen]
Lernpfad: [Voraussetzungen → Kapitel → Anschluss]
Lösbarkeit: [realer Aufgabentyp + tragende Kapitelteile]
Prüfer-Pass: [Datum, keine offenen Funde]
Checks: [consistency, sources, lint, test, build]
Offen: [nichts oder konkrete Punkte]
Nächstes Kapitel: [aus ABDECKUNGSMATRIX-Lückenliste, erst nach Abschluss]
```
