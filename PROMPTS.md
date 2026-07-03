# Prompts

Kopierfertige Arbeitsblöcke je Phase. Jeder Chat liest zuerst
`LOS_MACH_WEITER.md` und `KAPITELSTANDARD.md`. Am Ende jedes Arbeitsblocks:
STOP, kein nächstes Kapitel anfangen.

## 0 · Universalstart (der einzige Prompt, den man auswendig braucht)

Für jede KI mit Dateizugriff (Codex, Claude Code, …), in jeder neuen Session:

```text
Lies AGENTS.md und LOS_MACH_WEITER.md. Arbeite genau die dort aktive Phase
für das aktive Kapitel ab (Checkliste: PROMPTS.md). Danach STOP.
```

Codex liest `AGENTS.md` beim Start automatisch — der Prompt schadet trotzdem
nicht. Wichtig bleibt: **Für die Review-Phase immer eine frische Session**
starten (Erzeuger ≠ Prüfer). Browser-Chats ohne Dateizugriff sind für die
Kapitelarbeit ungeeignet, weil sie weder das Repo lesen noch die Checks
ausführen können.

Die Phasen für ein Kapitel laufen in dieser Reihenfolge:
Entwurf → Belege → **unabhängiges Review** → Fix. Alle paar Kapitel zusätzlich
ein Zwischen-Audit. Das Review läuft bewusst in einem **eigenen, frischen Chat**,
der das Kapitel nicht geschrieben hat (Erzeuger ≠ Prüfer).

## Minimaler Ablauf ohne Prompt-Sprawl

Ein Kapitel braucht nicht vier neue Chats. Standard ist:

1. **Builder-Chat:** Entwurf/Einordnung und Belege nacheinander abarbeiten,
   solange nur das aktive Kapitel bearbeitet wird.
2. **Review-Chat:** unabhängiges Review, keine Inhaltsänderung.
3. **Builder-Chat:** Review-Funde fixen und Abschluss-Gate dokumentieren.

Die Blöcke unten sind Checklisten für diese Rollen, keine Einladung, den
Arbeitsstand zu verzetteln.

## 1 · Entwurf / Einordnung

```text
Aktives Kapitel laut LOS_MACH_WEITER.md. Arbeite Abschnitt 1–5 des
KAPITELSTANDARD.md ab: Einordnung (inkl. der abgedeckten Zeile in
ABDECKUNGSMATRIX.md), Quellen- und Vergleichsmatrix, vollständiger Faktencheck,
didaktischer Aufbau, Integration.

Vor jeder Textarbeit: Recherchiere aktiv die Aufgabentypen und Quellenbasis zum
Themenfeld. Nutze lokale Materialien (`_material_index/`, `probepruefungen/`,
`lernzettel/`, `_ocr_out/`) nur für Themenumfang, Denkoperationen und Lücken.
Nutze für Fakten nur seriöse Primär- oder Ausbildungsquellen: Gesetze/FIAusbV,
KMK/BIBB, RFC/IANA, BSI, Normgeber, offizielle Hersteller- oder
Projektdokumentation. Keine Lernseiten oder Blogs als Faktenanker.

Prüfe danach die ABDECKUNGSMATRIX.md: Jeder gefundene prüfbare Aufgabentyp muss
als eigene Zeile oder eindeutig als Teil einer Zeile sichtbar sein. Bloße
Erwähnung im Kapitel zählt nicht als Abdeckung. Wenn ein Aufgabentyp fehlt,
ergänze oder dokumentiere zuerst eine `fehlt`-/`ungeprüft`-Zeile in
ABDECKUNGSMATRIX.md, bevor du Kapiteltext erweiterst.

Bearbeite nur dieses eine Kapitel und seine direkten Abhängigkeiten. Trage neu
eingeführte Kernkonzepte ins Voraussetzungs-Register der ABDECKUNGSMATRIX.md ein
und prüfe, dass das Kapitel nur bereits eingeführte Konzepte voraussetzt. Halte
das Kurzformat aus dem Standard fest. Ändere keinen anderen Kapitelinhalt. STOP
danach.
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
5. Gibt es einen Gedankensprung, den nur Raten, Fachjargon oder unausgesprochenes
   Vorwissen schließt? Ergänze im Zweifel, auch wenn der Schritt trivial wirkt.
6. Ist eine reale, abstrahierte Aufgabe (Probeprüfung / _material_index) allein
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
ABDECKUNGSMATRIX.md auf geprüft, src/lib/audit/status.ts und src/lib/review.ts
auf denselben Stand bringen, LOS_MACH_WEITER.md auf das nächste Kapitel aus der
Lückenliste setzen. STOP danach.
```

## 5 · Zwischen-Audit (alle paar Kapitel, frischer Chat)

```text
Prüfe die zuletzt geprüften Kapitel KAPITELÜBERGREIFEND: Widersprüche zwischen
Kapiteln, Doppelungen, verletzte Reihenfolge (Begriff vor seiner Einführung
benutzt) und Lücken gegenüber ABDECKUNGSMATRIX.md und den Probeprüfungstypen.
Gib eine Fundliste mit betroffenen Kapiteln und konkreten fehlt-/Korrektur-Zeilen
aus. Ändere nichts. STOP danach.
```
