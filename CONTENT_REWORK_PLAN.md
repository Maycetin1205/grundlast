# Content-Rework-Plan

Stand: 06.07.2026

Ziel dieses Plans: Kapitel nicht nur fachlich korrekt, sondern gut lesbar,
übersichtlich und einheitlich nutzbar machen. Der Plan ergänzt
`MASTER_ROADMAP.md` und fokussiert auf Darstellung, Struktur und Erklärung.

## Warum dieser Plan existiert

Mehrere `ready`-Kapitel sind inhaltlich stark, wirken aber beim Lesen zu dicht:
lange Sammelkapitel, Tabellen ohne klare Führung, Diagramme ohne Kontext,
Übungsblöcke am Ende und uneinheitliche Überschriften. Dadurch entsteht der
Eindruck, dass Inhalte zwar vorhanden sind, aber nicht ruhig genug gelernt werden
können.

## Rework-Standard pro Kapitel

Ein überarbeitetes Kapitel soll diese Struktur möglichst erfüllen:

1. Kurzer Einstieg: worum es geht und warum es prüfungs-/praxisrelevant ist.
2. Orientierung direkt oben: `So benutzt du dieses Kapitel` oder kompakte
   Entscheidungstabelle.
3. Grundprinzip vor Details.
4. Mechanik oder Vorgehen als klare Schrittfolge.
5. Konkrete Anwendungsfälle mit sichtbarer Einordnung.
6. Vertiefung erst nach den Beispielen.
7. Typische Fehler als eigener, gut scannbarer Abschnitt.
8. Übungsblock statt losem Prüfungstext.
9. Merkbilder/Diagramme mit eigenem Kontext, nicht lose am Kapitelende.
10. Quellen und Glossar bleiben am Ende.

## Globale Regeln

- Tabellen müssen auf kleinen Bildschirmen horizontal sauber scrollbar sein.
- Diagramme brauchen einen stabilen Rahmen und Mindestbreite.
- Rechenwege und Schrittfolgen sollen beim ersten Lesen vollständig sichtbar sein.
- Überschriften sollen konsistent sein: `Grundprinzip`, `Mechanik`, `Anwendungsfälle`,
  `Vertiefung`, `Typische Fehler`, `Übungsblock`, optional `Merkbilder`.
- Keine Dopplungen wie `Typische Fehler und typische Fehler`.
- Keine sichtbaren Alt-Schreibweisen wie `fuer`, `grösser`, `ausserhalb`, wenn der
  Rest des Kapitels Umlaute nutzt.
- Codeblöcke müssen Einrückungen behalten.

## Bereits erledigt

### Globale Darstellung

- MDX-Tabellen werden zentral gewrappt und horizontal scrollbar gemacht.
- Inline-SVGs werden zentral gewrappt und bekommen stabile Darstellung.
- `StepByStep`, `Schritt` und `Schritte` wurden ruhiger skaliert.
- `StepByStep` zeigt Schritte initial vollständig an.

### Kapitel

- `datenvolumen-berechnung`
  - Orientierung am Anfang ergänzt.
  - Aufgabentyp-Tabelle ergänzt.
  - Anwendungsfälle eingeordnet.
  - Übungsblock strukturiert.
  - Merkbilder-Abschnitt ergänzt.

- `netzwerkkonfiguration`
  - Orientierung am Anfang ergänzt.
  - Diagnose-Tabelle ergänzt.
  - Anwendungsfälle eingeordnet.
  - `Was du danach kannst` ergänzt.
  - `Typische Fehler` validator-konform benannt.
  - Übungsblock strukturiert.
  - Merkbilder-Abschnitt ergänzt.
  - sichtbare Schreibglättungen umgesetzt.
  - spezifische Quellenzuordnung ergänzt.
  - gezielter Strict-Check: 0 Fehler, 0 Warnungen.

- `pseudocode-einstieg`
  - Orientierung am Anfang ergänzt.
  - Aufgabentyp-Tabelle ergänzt.
  - Überschriften vereinheitlicht.
  - Anwendungsfälle eingeordnet.
  - Übungsblock strukturiert.
  - Code-Einrückung nach Review kontrolliert.

- `hardware-schnittstellen`
  - Orientierung am Anfang ergänzt.
  - Auswahl-/Aufgabentyp-Tabelle ergänzt.
  - Anwendungsfälle eingeordnet.
  - `Was du danach kannst` ergänzt.
  - `Typische Fehler` validator-konform benannt.
  - Übungsblock strukturiert.
  - Merkbilder-Abschnitt ergänzt.
  - spezifische Quellenzuordnung ergänzt.
  - gezielter Strict-Check: 0 Fehler, 0 Warnungen.

- `kaufmaennische-rechenaufgaben`
  - Orientierung am Anfang ergänzt.
  - Entscheidungstabelle für Aufgabentypen ergänzt.
  - `Was du danach kannst` ergänzt.
  - `Typische Fehler` validator-konform benannt.
  - Übungsblock strukturiert benannt.
  - gezielter Strict-Check: 0 Fehler, 0 Warnungen.

- `bedarfsanalyse-feedback`
  - Orientierung am Anfang ergänzt.
  - Entscheidungstabelle für Modellwahl ergänzt.
  - `Was du danach kannst` ergänzt.
  - `Typische Fehler` validator-konform benannt.
  - Übungsblock strukturiert benannt.
  - Merkbilder-Abschnitt vor den Diagrammen ergänzt.
  - sichtbare Schreibglättungen umgesetzt.
  - gezielter Strict-Check: 0 Fehler, 0 Warnungen.

- `schutzziele`
  - Orientierung am Anfang ergänzt (`So benutzt du dieses Kapitel` plus Zuordnungstabelle
    Aufgabensignal → Schutzziel/Ebene → nächster Schritt).
  - `Was du danach kannst` ergänzt.
  - `Typische Fehler` validator-konform benannt (Nummerierung entfernt).
  - `So fragt die IHK das` in strukturierten `Übungsblock` mit `### Aufgabe N ·`
    umgebaut, Punktzahlen ans Aufgabenende gezogen.
  - Merkbilder-Abschnitt (`08 · Merkbilder`) vor den beiden Diagrammen ergänzt.
  - gezielter Validator-Check: 0 Fehler, 0 Warnungen für das Kapitel.

- `verschluesselung-hash-vpn`
  - Orientierung am Anfang ergänzt (`So benutzt du dieses Kapitel` plus Router-Tabelle
    Aufgabensignal → Werkzeug → Schutzziel).
  - `Was du danach kannst` ergänzt.
  - `Typische Fehler` validator-konform benannt (Nummerierung entfernt).
  - `So fragt die IHK das` in `Übungsblock` umbenannt, Punktzahlen ergänzt, Lösungsansätze
    je Aufgabe in eigene `Tipp`-Boxen gekapselt.
  - Diagramme lagen bereits inline mit Kontext (Krypto-Werkzeugkarte, VPN-/CA-Kette),
    kein separater Merkbilder-Abschnitt nötig.
  - gezielter Validator-Check: 0 Fehler, 0 Warnungen für das Kapitel.

- Konsistenz-Nachzug an früher überarbeiteten Kapiteln (auf neuen Rework-Standard gehoben):
  - `datenvolumen-berechnung`: `Was du danach kannst` ergänzt, `Typische Fehler`
    validator-konform benannt, spezifische slugTags-Zuordnung in `tagMappings.ts` ergänzt.
  - `pseudocode-einstieg`: `Was du danach kannst` ergänzt, `Typische Fehler`
    validator-konform benannt.

## Nächste Kapitel

Priorität nach Leserisiko, Größe und AP1-Relevanz:

1. `malware-grundlagen` und `endpoint-security`
   - starke Sicherheitsthemen (LF 4) mit je 4 Validator-Warnungen
   - viele Begriffe, Abgrenzungen und Fehlerfallen
2. `ipv6-grundlagen` und `imap-pop3-smtp`
   - AP1-nahe Netzthemen mit je 4 Warnungen
3. Weitere Kapitel mit je 4 Warnungen abarbeiten: `website-statisch-dynamisch`,
   `gantt-diagramm`, `ki-grundlagen`, `lizenzmodelle`, `homeoffice-ergonomie`,
   `schulz-von-thun`, `maengelruege`, `vertragsstoerungen`.

## Prüfungen nach jedem Rework

Nach jedem Kapitel laufen:

```text
npm.cmd run lint
npm.cmd run validate:content
npm.cmd run build
```

Erwartung aktuell: `validate:content` darf weiterhin globale Warnungen melden,
aber keine Fehler. Warnungen sollen nicht blind ignoriert, sondern in späteren
Rework-Schritten gezielt reduziert werden.

## Offene Meta-Aufgaben

- Entscheiden, ob Diagramme langfristig als eigene React-Komponenten statt Inline-SVG
  gepflegt werden.
- Validator erweitern um einfache Strukturwarnungen:
  - doppelte Überschriften
  - fehlender Übungsblock
  - lose SVGs ohne `Merkbilder`-Abschnitt
  - sehr große `ready`-Kapitel ohne Orientierungstabelle
- Prüfen, ob `ready`-Kapitel mit vielen Warnungen temporär auf `draft`
  zurückgestuft werden sollten.
