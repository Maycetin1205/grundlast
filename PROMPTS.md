# Prompts

Kopierfertige Prompts je Arbeitsphase. **Genau einen pro Chat** verwenden. Jeder
Chat liest zuerst `LOS_MACH_WEITER.md` und `KAPITELSTANDARD.md`. Am Ende jeder
Phase: STOP, kein nächstes Kapitel anfangen.

Die Phasen für ein Kapitel laufen in dieser Reihenfolge:
Entwurf → Belege → **unabhängiges Review** → Fix. Alle paar Kapitel zusätzlich
ein Zwischen-Audit. Das Review läuft bewusst in einem **eigenen, frischen Chat**,
der das Kapitel nicht geschrieben hat (Erzeuger ≠ Prüfer).

## 1 · Entwurf / Einordnung

```text
Aktives Kapitel laut LOS_MACH_WEITER.md. Arbeite Abschnitt 1–5 des
KAPITELSTANDARD.md ab: Einordnung (inkl. der abgedeckten Zeile in
ABDECKUNGSMATRIX.md), Quellen- und Vergleichsmatrix, vollständiger Faktencheck,
didaktischer Aufbau, Integration. Bearbeite nur dieses eine Kapitel und seine
direkten Abhängigkeiten. Trage neu eingeführte Kernkonzepte ins
Voraussetzungs-Register der ABDECKUNGSMATRIX.md ein und prüfe, dass das Kapitel
nur bereits eingeführte Konzepte voraussetzt. Halte das Kurzformat aus dem
Standard fest. Ändere keinen anderen Kapitelinhalt. STOP danach.
```

## 2 · Belege

```text
Für das aktive Kapitel: mindestens 5 Kernaussagen mit wörtlichem Zitat,
Quellen-ID, Fundstelle und Abrufdatum in src/content/quellen/belege.json
eintragen. Nur offizielle oder primäre Quellen als Faktenanker (Gesetz, Norm,
RFC, BSI, Hersteller-Spezifikation). Danach `npm run check:sources`, bis grün.
Keine Aussage gilt als belegt, solange der Check rot ist. Erfinde keine Quelle
und kein Zitat. STOP danach.
```

## 3 · Unabhängiges Review (Erzeuger ≠ Prüfer)

```text
Du hast dieses Kapitel NICHT geschrieben und gehst von NICHT GEPRÜFT aus. Lies
das Kapitel, seine Belege und die abgedeckte Zeile der ABDECKUNGSMATRIX.md.
Versuche aktiv, es zu zerlegen (Abschnitt 7 des KAPITELSTANDARD.md):

1. Stimmt jede Definition, Zahl, Regel? Rechne Rechenwege selbst nach.
2. Stützt jedes wörtliche Zitat wirklich die Aussage drumherum – nicht nur einen
   Halbsatz?
3. Fehlt ein Pflichtinhalt, den eine reale Aufgabe zu diesem Thema braucht?
4. Wird ein Begriff benutzt, bevor er laut Voraussetzungs-Register eingeführt ist?
5. Ist eine reale, abstrahierte Aufgabe (Probeprüfung / _material_index) allein
   mit der Lerndatei lösbar? Spiele sie durch.

Gib eine nummerierte Fundliste aus: Fund → Stelle → warum falsch/fehlend →
Fix-Vorschlag. Findest du nichts, begründe je Punkt einzeln, warum er hält.
Ändere nichts am Inhalt. STOP danach.
```

## 4 · Fix und Abschluss

```text
Behebe die Funde aus dem Review-Pass am aktiven Kapitel, Punkt für Punkt. Mache
danach den Boden grün: `npm run check:consistency`, `npm run check:sources`,
`npm run lint`, `npm run test`, `npm run build`. Erst wenn keine Funde mehr offen
sind: Auditeintrag in CONTENT_AUDIT_MATRIX.md vollständig ausfüllen (inkl.
Lösbarkeitsnachweis und Prüfer-Pass mit Datum), Status der Zeile in
ABDECKUNGSMATRIX.md auf geprüft, LOS_MACH_WEITER.md auf das nächste Kapitel aus
der Lückenliste setzen. STOP danach.
```

## 5 · Zwischen-Audit (alle paar Kapitel, frischer Chat)

```text
Prüfe die zuletzt geprüften Kapitel KAPITELÜBERGREIFEND: Widersprüche zwischen
Kapiteln, Doppelungen, verletzte Reihenfolge (Begriff vor seiner Einführung
benutzt) und Lücken gegenüber ABDECKUNGSMATRIX.md und den Probeprüfungstypen.
Gib eine Fundliste mit betroffenen Kapiteln und konkreten fehlt-/Korrektur-Zeilen
aus. Ändere nichts. STOP danach.
```
