# Grundlast Roadmap zum Fachinformatiker-Kompendium

Ziel: eine fachlich dichte, didaktisch klare und belegbare Lerndatei fuer die
Fachinformatiker-Ausbildung. Der erste Ausbau konzentriert sich auf das 1. und
2. Lehrjahr. AP1 bleibt eine wichtige Pruefungsschicht, ist aber nicht das
Gesamtziel.

Verbindliches Zielbild steht in `AUSBILDUNGS_KOMPASS.md`.
Die konkrete Release- und Qualitaetsplanung steht in `MASTER_ROADMAP.md`.

## Grundsatz

Grundlast ist kein reines AP1-Skript. Jedes Kapitel erklaert zuerst das
Ausbildungswissen und die berufliche Handlungssituation. Danach kommt der
Pruefungsblick: AP1, Berufsschule, typische Aufgabenmuster, Fehlerfallen und
bei Bedarf AP2-Anschluss.

## Fertig-Definition fuer Version 1.0

Eine Lektion gilt erst als fertig, wenn sie diese Punkte erfuellt:

- Einstieg: Worum geht es und warum ist es pruefungsrelevant?
- Analogie: ein einfaches Bild, das den Kern merktauglich macht.
- Faktenkern: klare Definitionen, Tabellen oder Regeln ohne Fülltext.
- Handlungssituation: typische betriebliche, schulische oder projektbezogene Anwendung.
- Pruefungsblick: typische AP1-/Berufsschul-Aufgabenstellung, wenn das Thema pruefungsnah ist.
- Rechenweg oder Vorgehen: Schritt fuer Schritt, falls anwendbar.
- Fehlerfallen: typische Verwechslungen und Punktabzuege.
- Lerncheck: kurze Selbstkontrolle oder Verweis auf den separaten Uebungsmodus.
- Quellen: passende serioese Quellen aus BIBB, FIAusbV, KMK, BSI, RFCs, Gesetzen oder offiziellen Spezifikationen.

## Inhaltlicher Scope

Prioritaet A: Lernfelder 1 bis 6, weil sie die gemeinsame Basis der Ausbildung
bilden und fuer AP1 besonders wichtig sind.

- LF1: Das Unternehmen und die eigene Rolle im Betrieb beschreiben
- LF2: Arbeitsplaetze nach Kundenwunsch ausstatten
- LF3: Clients in Netzwerke einbinden
- LF4: Schutzbedarfsanalyse im eigenen Arbeitsbereich durchfuehren
- LF5: Software zur Verwaltung von Daten anpassen
- LF6: Serviceanfragen bearbeiten

Prioritaet B: Lernfelder 7 bis 9, weil sie zum 2. Lehrjahr gehoeren und in der
Praxis sowie AP2-Vorbereitung anschliessen.

- LF7: Cyber-physische Systeme ergaenzen
- LF8: Daten systemuebergreifend bereitstellen
- LF9: Netzwerke und Dienste bereitstellen

## Noch offene Kapitel

Diese Kapitel sind aktuell im Inhaltsverzeichnis geplant, aber noch nicht inhaltlich ausgearbeitet:

- Boolesche Algebra und Logikgatter
- Dateisysteme
- Prozesse, Threads und Tasks
- Zentrale vs. dezentrale IT-Systeme
- CRM, ERP und DMS
- IPv6
- Port Forwarding und NAT
- WLAN-Standards
- Datenvolumen-Berechnung
- Stamm- und Bewegungsdaten
- UML-Use-Case-Diagramm
- UML-Beziehungen
- Programmierparadigmen
- Libraries vs. Frameworks
- OOP-Grundlagen
- Git und Versionsverwaltung
- Teststrategien
- Machbarkeitsanalyse
- Projektuebergabe und Abnahme
- PKI, CA und Zertifikate
- SSH vs. Telnet
- Endpoint-Security
- Angebotsvergleich
- Kauf, Leasing und Miete
- Eigen- und Fremdfinanzierung
- AIDA-Formel
- Gewaehrleistung und Garantie
- Maengelruege
- Vertragsstoerungen
- Zweiseitiger Handelskauf
- PDCA-Zyklus
- EFQM-Modell
- ISO 9000 bis 9004
- ISO 25010
- Responsive Webdesign
- Mockup und Wireframe
- Softwareergonomie und Barrierefreiheit
- Audio, MP3 und Datenkompression
- KI-Grundlagen
- Cloud-Konzepte
- Lizenzmodelle
- BBiG und Ausbildungsvertrag
- Arbeitnehmerrechte und Kuendigungsschutz

## Perfekt-Arbeitsreihenfolge

1. Encoding pruefen: echte Dateien sind UTF-8; PowerShell zeigt einzelne Zeichen nur falsch an.
2. Ausbildungsscope absichern: LF1 bis LF9 gegen BIBB/KMK/FIAusbV mappen.
3. AP1-Schicht bauen: Reihenfolge, Lernzeit, Muss/Kann-Markierung fuer die ersten 18 Monate.
4. Stubs mit Prioritaet A ausarbeiten.
5. Stubs mit Prioritaet B ausarbeiten.
6. Jede Lektion nach der Fertig-Definition vereinheitlichen.
7. Quellen pro Lektion pruefen und bei Bedarf spezifischer machen.
8. Formale Freigabe in `REVIEW_LOG.md` dokumentieren und erst dann `status: "final"` setzen.
9. Karteikarten und Mini-Pruefungen an die fertigen Kapitel koppeln.
10. Single-HTML-Build erzeugen: `npm.cmd run build:single`.
11. Finalcheck: `npm.cmd run build`, Stichprobe im Browser, Quellenlinks pruefen.

## Arbeitsweise mit neuen Chats

Jeder Chat bearbeitet genau einen klaren Schritt. Die Regeln werden nicht jedes Mal neu erfunden, sondern aus diesen Dateien gelesen:

- `ROADMAP.md`
- `AUSBILDUNGS_KOMPASS.md`
- `MASTER_ROADMAP.md`
- `CURRICULUM_MAPPING.md`
- `AP1_LERNPFAD.md`
- `KAPITEL_QUALITAET.md`
- `REVIEW_LOG.md`
- `src/lib/toc.ts`
- `src/lib/sources.ts`
- `src/stores/glossarStore.ts`

Am Ende jedes Schritts muss der Chat den naechsten sinnvollen Schritt bestimmen und einen kopierbaren Prompt fuer den naechsten Chat ausgeben. Dadurch kann die Arbeit in kleinen, sauberen Schritten fortgesetzt werden.

Minimaler Startprompt fuer einen neuen Chat:

```text
Du arbeitest im Projekt:
C:\Users\mu.aycetin\Desktop\Neuer Ordner\Porjekte\AP1\grundlast

Nutze AUSBILDUNGS_KOMPASS.md, MASTER_ROADMAP.md, CURRICULUM_MAPPING.md, ROADMAP.md, AP1_LERNPFAD.md und KAPITEL_QUALITAET.md als verbindliche Regeln.

Bitte bearbeite genau diesen Schritt:
[SCHRITT HIER EINFUEGEN]
```

## Loesch-Entscheidung

Sofort loeschbar, weil generiert oder Log:

- `dist/` - Build-Ausgabe, jederzeit neu erzeugbar.

Optional loeschbar, wenn Speicher frei werden soll:

- `node_modules/` - Abhaengigkeiten, mit `npm.cmd install` wiederherstellbar. Nicht loeschen, wenn direkt weiterentwickelt werden soll.

Wahrscheinlich loeschbar nach kurzer Build-Probe:

- `src/styles/tokens.ts` - wirkt aktuell unbenutzt.

Noch behalten:

- `src/pages/Musterseite.tsx` - dient als Komponenten-Referenz und ist noch verlinkt.
- `public/` - enthaelt App-Icons.
- `src/content/lessons/` - alle fertigen Lektionen.
- `src/components/content/` - MDX-Bausteine fuer die didaktische Struktur.
- `package.json`, `package-lock.json`, `vite.config.ts`, `tsconfig*.json`, `eslint.config.js`, `index.html` - Projektbasis.
