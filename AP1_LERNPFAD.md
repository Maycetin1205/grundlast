# Ausbildungs- und AP1-Lernpfad

Stand: 13.05.2026

Diese Datei ist nicht das Gesamtziel des Projekts. Das Gesamtziel steht in
`AUSBILDUNGS_KOMPASS.md`: ein starkes Fachinformatiker-Kompendium fuer die
Ausbildung, zuerst mit Fokus auf Jahr 1 und 2.

AP1 bleibt hier als Pruefungs- und Priorisierungsschicht erhalten. Das bedeutet:
Wir bauen Kapitel nicht nur fuer AP1, aber AP1-Relevanz hilft bei Reihenfolge,
Aufgabenmustern und Fehlerfallen.

## Jetzt gilt

Die Ordnerfrage ist erledigt. Ab jetzt wird nicht mehr nur sortiert, sondern
Inhalt auf Referenz-Niveau gebracht: erst Ausbildungswissen, dann Pruefungsblick.

Aktueller Zustand:

- 58 Kapitel sind ausgearbeitet.
- 37 Kapitel sind als Platzhalter geplant.
- Einige pruefungsstarke und ausbildungszentrale Themen fehlen noch als eigene Kapitel oder sind nur indirekt enthalten.

## Chat-Arbeitsmodus

Jeder neue Chat bearbeitet genau einen Schritt: entweder ein neues Kapitel als A+ Final erstellen oder ein vorhandenes Kapitel auf A+ Final heben. Der Nutzer soll nicht jedes Mal alle Regeln neu formulieren muessen; die Regeln stehen in diesen Projektdateien.

Startprompt fuer jeden neuen Chat:

```text
Du arbeitest im Projekt:
C:\Users\mu.aycetin\Desktop\Neuer Ordner\Porjekte\AP1\grundlast

Nutze diese Dateien als verbindliche Arbeitsregeln:
- ROADMAP.md
- AUSBILDUNGS_KOMPASS.md
- MASTER_ROADMAP.md
- CURRICULUM_MAPPING.md
- AP1_LERNPFAD.md
- KAPITEL_QUALITAET.md
- REVIEW_LOG.md
- src/lib/toc/data/*.ts
- src/content/quellen/sourceBank.ts
- src/content/glossar/*.ts

Bitte bearbeite genau diesen Schritt:
[HIER DEN SCHRITT AUS DEM VORHERIGEN CHAT EINFUEGEN]
```

Pflicht am Ende jedes Chats:

1. Geaenderte Dateien nennen.
2. Quellen-/Faktencheck kurz nennen.
3. Build-Ergebnis nennen.
4. Den naechsten sinnvollen Schritt bestimmen.
5. Einen direkt kopierbaren Startprompt fuer den naechsten Chat ausgeben.

## Perfekt-Reihenfolge

### Sprint 1: LF6 Service, Kommunikation, Kundenarbeit

Warum zuerst: In der Heatmap kommen Serviceanfragen, Tickets, Bedarfsanalyse, Praesentation, Schulung, Feedback, Team und Change sehr haeufig vor. Das ist aktuell die groesste Luecke.

Zu bauen oder auszubauen:

1. Serviceanfragen, Ticketsystem und Support-Level - angelegt als `serviceanfragen-support-level`
2. Fehlermanagement und Stoerungsannahme - angelegt als `fehlermanagement-stoerungsannahme`
3. Bedarfsanalyse, Datenerhebung und Feedback - angelegt als `bedarfsanalyse-feedback`
4. Praesentation, Kundenkommunikation und AIDA
5. Mitarbeitermotivation, Teamphasen und Change
6. CRM, ERP, DMS und CMS
7. Schulung, Einweisung, Key User und Multiplikatoren

### Sprint 2: LF1 Wirtschaft, Unternehmen, Vertrag

Warum danach: Wirtschaftliche Entscheidungen, Leasing, Finanzierung, Marktformen, Angebote und Vertragsarten sind in AP1 regelmaessig Punktebringer.

Zu bauen oder auszubauen:

1. Kauf, Leasing und Miete
2. Eigen- und Fremdfinanzierung
3. Angebotsvergleich quantitativ und qualitativ
4. Make-or-Buy
5. Vertragsarten: Kaufvertrag, Dienstvertrag, Werkvertrag
6. Rechnung, Zahlungsziel, Aufbewahrungsfristen
7. Organisationsformen, Leitbild, Nachhaltigkeit und ESG - angelegt als `organisationsformen-leitbild-nachhaltigkeit-esg`

### Sprint 3: LF2 Arbeitsplaetze und Systeme

Warum: Viele Rechen- und Zuordnungsaufgaben sitzen bei Hardware, Betriebssystem, Dateisystem, Energie und Endgeraeten.

Zu bauen oder auszubauen:

1. Dateisysteme: FAT32, NTFS, ext4, APFS
2. Prozesse, Threads und Tasks
3. Zentrale vs. dezentrale IT-Systeme
4. Schnittstellen, UEFI/BIOS und Peripherie
5. Thin Client, VDI, Notebook, Tablet und Dockingstation

### Sprint 4: LF3/LF9 Netzwerke

Warum: Netzwerke liefern AP1- und Unterrichtspunkte, besonders Diagnose, WLAN, IPv4/IPv6, Routerfunktionen und VPN.

Zu bauen oder auszubauen:

1. IPv6 Grundlagen
2. WLAN-Standards und WLAN-Sicherheit
3. Port Forwarding und NAT
4. VPN, Zertifikate und Routerfunktionen
5. Netzwerkbefehle und Diagnose
6. Datenvolumen-Berechnung

### Sprint 5: LF4 Sicherheit

Warum: Schutzbedarf, DSGVO, ISMS, ISO 27001, Phishing, Firewall, Hashing und PKI sind starke AP1-Themen.

Zu bauen oder auszubauen:

1. PKI, CA und Zertifikate
2. SSH vs. Telnet
3. Endpoint-Security
4. ISMS und ISO 27001
5. Schutzbedarfsfeststellung nach BSI-Logik
6. Security Awareness, Phishing und Social Engineering
7. Security by Design und Security by Default

### Sprint 6: LF5 Software, Daten, Projekt

Warum: AP1 fragt gern Pseudocode, UML, OOP, Projektabschluss, Softwarequalitaet und Lizenzmodelle.

Zu bauen oder auszubauen:

1. UML-Use-Case-Diagramm
2. UML-Beziehungen, Klassendiagramm, Kardinalitaeten
3. OOP-Grundlagen
4. Programmierparadigmen
5. Libraries vs. Frameworks
6. Git und Versionsverwaltung
7. Teststrategien
8. Projektuebergabe, Abnahme, Lessons Learned
9. Machbarkeitsanalyse
10. Lizenzmodelle

### Sprint 7: LF7 bis LF9 und Zusatzthemen

Warum: Diese Themen runden das 2. Lehrjahr ab und machen das Kompendium vollstaendig.

Zu bauen oder auszubauen:

1. Cloud-Konzepte
2. KI-Grundlagen
3. Audio, MP3 und Datenkompression
4. Stamm- und Bewegungsdaten
5. Responsive Webdesign
6. Mockup und Wireframe
7. Softwareergonomie und Barrierefreiheit
8. PDCA-Zyklus
9. ISO 9000 bis 9004
10. ISO 25010
11. BBiG und Ausbildungsvertrag
12. Arbeitnehmerrechte und Kuendigungsschutz

## Kapitel-Schablone

Jedes neue Kapitel bekommt diese Struktur:

1. Was du danach kannst
2. Einfache Analogie
3. Pruefungsnahe Definition
4. Kernwissen in Tabelle oder Liste
5. Vorgehen oder Rechenweg
6. Berufliche Anwendung oder typische AP1-/Klausuraufgabe
7. Fehlerfallen
8. Mini-Quiz
9. Quellen

## Naechster konkreter Arbeitsschritt

Sprint 2 ist inhaltlich abgeschlossen. `Kauf, Leasing und Miete`,
`Eigen- & Fremdfinanzierung`, `Angebotsvergleich`, `AIDA-Formel & Werbewirkung`,
`Make-or-Buy`, `Vertragsarten`, `Rechnung, Zahlungsziel und Aufbewahrungsfristen`
und `Organisationsformen, Leitbild, Nachhaltigkeit & ESG` sind angelegt und als
ready markiert. `Dateisysteme`, `Prozesse, Threads und Tasks` und
`Zentrale vs. dezentrale IT-Systeme` stehen
inzwischen ebenfalls auf `ready`, aber noch nicht auf `final`. Nach der
Sprint-Reihenfolge ist Sprint 3 fachlich weitgehend aufgebraucht. Im Netzwerkbereich
sind `WLAN-Standards und WLAN-Sicherheit`, `Port Forwarding und NAT`,
`Firewall und DMZ`, `TCP vs. UDP` sowie `Datenrate und Downloadzeit berechnen`
jetzt ready. Der naechste sinnvolle Schritt ist, die Zahlen- und Einheitenbasis
aus Sprint 1 nachzuziehen, damit die Rechenkapitel nicht auf Draft-Fundament stehen.

Naechstes Kapitel:

```text
Bit & Byte - die kleinsten Einheiten
```

Ziel:

- vorhandenen Draft `bit-byte` fachlich und didaktisch auf Ready-Standard bringen
- Bit, Byte, Nibble, Wortbreite, Zeichenkodierung und Speicherlogik sauber erklaeren
- Zusammenhang zu Datenrate, Dateigroesse, RAM, Massenspeicher und Netzwerk herstellen
- typische AP1-Fallen mit kleinem `b`, grossem `B`, 8er-Faktor und Umrechnungen einbauen
- passende Quellen aus KMK/BIBB/FIAusbV und offiziellen Einheitenquellen nutzen
- Glossar/Quellen pruefen und danach Content-Validator sowie Build-Test ausfuehren
