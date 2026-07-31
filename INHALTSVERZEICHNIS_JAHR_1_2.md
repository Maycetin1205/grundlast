# Inhaltsverzeichnis Jahr 1/2

> **Historische Planungsdatei.** Der aktuelle verbindliche Scope liegt in
> `src/content/catalog/scope/`; die lesbare Ausgabe ist `SCOPE_STATUS.md`.
> Aussagen und Tiefenstufen weiter unten können veraltet sein.

Stand: 2026-06-04

Diese Datei war die zentrale Themenlandkarte fuer Grundlast. Sie beantwortete:

- Welche Themen behandeln wir?
- In welchem Umfang behandeln wir sie?
- Woher kommt der Bezug?
- Wie wird das Thema in der Lerndatei eingebaut?

Sie ist keine Lernlektion und kein Pruefungsmodus. Sie dient nur zur Planung.

## Quellenbasis

Die Themenlandkarte richtet sich nach:

- KMK-Rahmenlehrplan Fachinformatiker/Fachinformatikerin
- FIAusbV mit Ausbildungsrahmenplan und Abschlusspruefung Teil 1
- BIBB-Umsetzungshilfe Fachinformatiker/Fachinformatikerin
- IHK/Aka/U-Form-Pruefungsinformationen nur als Abgleich, nicht als alleinige Quelle
- Primaerquellen je Fachthema, z. B. BSI, RFCs, Gesetze, IEEE, W3C, POSIX/Open Group

## Markierungen

### Bezug

| Bezug | Bedeutung |
|---|---|
| `Lehrplan` | steht direkt oder klar ableitbar in KMK/FIAusbV/BIBB |
| `Pruefung` | ist fuer AP1/Berufsschul-Klausuren typisch oder naheliegend |
| `Grundlage` | steht nicht zwingend woertlich im Lehrplan, wird aber gebraucht, um ein Lehrplan-Thema zu verstehen |
| `Extra` | interessant, aber fuer den Kern aktuell nicht noetig |
| `Raus` | aktuell kein sauberer Bezug oder zu speziell fuer diese Lerndatei |

### Form

| Form | Bedeutung |
|---|---|
| `Kapitel` | eigenes Lernkapitel mit Erklaerung, Beispielen, Uebungen, Glossar und Quellen |
| `Abschnitt` | Teil eines groesseren Kapitels |
| `Box` | kurze Einordnung, kein eigenes Kapitel |
| `Glossar` | nur Begriffserklaerung |
| `Raus` | nicht in die Lerndatei aufnehmen |

## Offizielle Lernfelder Jahr 1/2

| LF | Jahr | Lernfeld | Was inhaltlich abgedeckt werden muss |
|---:|---:|---|---|
| LF1 | 1 | Das Unternehmen und die eigene Rolle im Betrieb beschreiben | Unternehmen, Rolle, Aufbau-/Ablauforganisation, Rechtsformen, Vollmachten, Markt, Kommunikation, Praesentation, Nachhaltigkeit |
| LF2 | 1 | Arbeitsplaetze nach Kundenwunsch ausstatten | Bedarf klaeren, Hardware/Software auswaehlen, Datenblaetter lesen, Angebote vergleichen, Arbeitsplatz konfigurieren, Ergonomie, Energie, Beschaffung, Kaufvertrag, Maengel |
| LF3 | 1 | Clients in Netzwerke einbinden | Netzwerkgrundlagen, physische/logische Netze, Client-Konfiguration, IPv4/IPv6-Grundlagen, DHCP, DNS, Gateway, WLAN, Diagnose, Funktionstest |
| LF4 | 1 | Schutzbedarfsanalyse im eigenen Arbeitsbereich durchfuehren | Schutzziele, Schutzbedarf, Bedrohungen, Risiken, Datenschutz, DSGVO, technische/organisatorische Massnahmen, Sicherheitskonzept |
| LF5 | 1 | Software zur Verwaltung von Daten anpassen | Daten/Information, Datenarten, Datenformate, Datenbanken, ER-Modell, SQL-Grundlagen, Normalisierung, Pseudocode, Testfaelle, Dokumentation |
| LF6 | 2 | Serviceanfragen bearbeiten | Tickets, Serviceanfrage, Incident, Support-Level, SLA, Priorisierung, Fehleranalyse, Eskalation, Kommunikation, Dokumentation |
| LF7 | 2 | Cyber-physische Systeme ergaenzen | Sensor/Aktor, Schnittstellen, Datenfluss, bestehendes Netzwerk, Energieversorgung, Protokolle, Messwerte, Funktionspruefung |
| LF8 | 2 | Daten systemuebergreifend bereitstellen | Datenquellen, Schnittstellen/APIs, Datenformate, Zugriff, Berechtigungen, Datenschutz, Datenqualitaet, Bereitstellungskonzepte |
| LF9 | 2 | Netzwerke und Dienste bereitstellen | Netzwerkdienste, Serverdienste, Routing, NAT, Firewall, Segmentierung, Monitoring, Logs, Verfuegbarkeit, Datenschutz/Datensicherheit |

## Themenkanon

### LF1: Unternehmen, Rolle, Kommunikation

| Thema | Inhaltlicher Umfang | Bezug | Form |
|---|---|---|---|
| Unternehmen und Wertschöpfung | Unternehmensziele, Wertschöpfungskette, Stakeholder, eigene Rolle | Lehrplan | Kapitel |
| Aufbau- und Ablauforganisation | Organigramm, Stellen, Abteilungen, Prozesse, einfache Prozesssicht | Lehrplan/Pruefung | Kapitel |
| Rechtsformen | Einzelunternehmen, GmbH, AG, OHG, KG nur unterscheidbar und anwendbar | Lehrplan/Pruefung | Kapitel |
| Vollmachten | Handlungsvollmacht, Prokura, Innen-/Außenwirkung, typische Grenzen | Lehrplan/Pruefung | Kapitel |
| Markt und Wettbewerb | Marktformen, Angebot/Nachfrage, Kundennutzen, einfache Einordnung | Lehrplan/Pruefung | Kapitel |
| Kommunikation | Sender/Empfaenger, Feedback, 4-Seiten-Modell, kundenverstaendliche Sprache | Lehrplan/Pruefung | Kapitel |
| Praesentation | Zielgruppe, Aufbau, Visualisierung, Quellen, sicheres Auftreten | Lehrplan/Pruefung | Abschnitt |
| Nachhaltigkeit/ESG | oekologisch, oekonomisch, sozial; IT-Beispiele wie Energie und Beschaffung | Lehrplan | Abschnitt |

### LF2: IT-Arbeitsplatz, Hardware, Beschaffung

| Thema | Inhaltlicher Umfang | Bezug | Form |
|---|---|---|---|
| Bedarf klaeren | Anforderungen, Randbedingungen, Budget, Nutzungsprofil | Lehrplan/Pruefung | Kapitel |
| Bit und Byte | Bit, Byte, 8 Bit = 256 Werte, b/B-Falle, Speicher- und Datenmengenbezug | Grundlage/Pruefung | Kapitel |
| Zahlensysteme | Stellenwert, Binaer, Dezimal, Hex, Oktal/chmod, IPv4-Bruecke | Grundlage/Pruefung | Kapitel |
| Praefixe | k/M/G/T vs Ki/Mi/Gi/Ti, Umrechnung, Herstellerangaben, typische Fallen | Grundlage/Pruefung | Kapitel |
| CPU, RAM, Speicher | CPU-Grundidee, Kerne/Takt grob, RAM, SSD/HDD, Massenspeicher, passende Auswahl | Lehrplan/Pruefung | Kapitel |
| Schnittstellen und Peripherie | USB, HDMI, DisplayPort, Netzwerk, Drucker, Monitor, Docking, Kompatibilitaet | Lehrplan/Pruefung | Kapitel |
| Betriebssystem und Software | OS-Auswahl, Lizenz, Treiber, Grundkonfiguration, Updates | Lehrplan | Kapitel |
| Dateisysteme | FAT32, NTFS, ext4, APFS grob; Eigenschaften und Grenzen | Lehrplan/Pruefung | Kapitel |
| Ergonomie und Homeoffice | Arbeitsplatz, Bildschirm, Eingabegeraete, Arbeitsschutz, Barrierefreiheit | Lehrplan/Pruefung | Kapitel |
| Energie und Kosten | Leistungsaufnahme, kWh, Betriebskosten, Amortisation, Energieeffizienz | Lehrplan/Pruefung | Kapitel |
| Angebotsvergleich | Bezugspreis, Rabatt, Skonto, Nutzwertanalyse, qualitative Kriterien | Lehrplan/Pruefung | Kapitel |
| Kauf, Leasing, Miete | Kosten, Eigentum, Liquiditaet, Laufzeit, Entscheidungsschema | Lehrplan/Pruefung | Kapitel |
| Vertragsstoerungen | Kaufvertrag, Lieferung, Maengel, Gewaehrleistung, Garantie, Verzug | Lehrplan/Pruefung | Kapitel |
| RAID/USV | Verfuegbarkeit und Ausfallschutz fuer Arbeitsplatz/kleine Systeme | Lehrplan/Pruefung | Kapitel |
| Von-Neumann | CPU/RAM/Bus/Programm-Grundprinzip, nur als Systemverstaendnis | Grundlage | Kapitel |
| Logikgatter | Hardware-Gatter nicht als eigenes Kernkapitel | Extra | Box oder Raus |

### LF3: Client, Netzwerkgrundlagen, Integration

| Thema | Inhaltlicher Umfang | Bezug | Form |
|---|---|---|---|
| Netzwerkgrundbegriffe | Client, Server, Switch, Router, Access Point, Host, Interface | Lehrplan/Pruefung | Kapitel |
| OSI/TCP-IP | Schichten verstehen, Protokolle einordnen, keine Norm-Tiefe | Lehrplan/Pruefung | Kapitel |
| IPv4-Grundlagen | Adresse, Oktett, Netz-/Hostanteil, Maske, CIDR, Gateway | Lehrplan/Pruefung | Kapitel |
| Subnetting | Netzadresse, Broadcast, Hostbereich, Praefix, einfache Rechenwege | Lehrplan/Pruefung | Kapitel |
| DHCP/DNS/Gateway | automatische Konfiguration, Namensaufloesung, Standardgateway, Fehlerbilder | Lehrplan/Pruefung | Kapitel |
| TCP/UDP/Ports | verbindungsorientiert vs verbindungslos, Ports, typische Dienste | Lehrplan/Pruefung | Kapitel |
| WLAN | Standards grob, Frequenzen, Sicherheit, Reichweite, Stoerquellen | Lehrplan/Pruefung | Kapitel |
| Netzwerkdiagnose | ipconfig/ip a, ping, tracert/traceroute, nslookup, einfache Fehlersuche | Lehrplan/Pruefung | Kapitel |
| IPv6 | Aufbau, Schreibweise, Prefix, Autokonfiguration grob | Lehrplan/Pruefung | Kapitel |
| NAT/Port Forwarding | private/oeffentliche IPv4, NAT/PAT, Portweiterleitung, Grenzen | Lehrplan/Pruefung | Kapitel |
| Routing-Protokolle | dynamisches Routing im Detail | Extra | Box |

### LF4: Informationssicherheit und Datenschutz

| Thema | Inhaltlicher Umfang | Bezug | Form |
|---|---|---|---|
| Schutzziele | Vertraulichkeit, Integritaet, Verfuegbarkeit, Authentizitaet grob | Lehrplan/Pruefung | Kapitel |
| Schutzbedarf und Risiko | Schutzbedarf, Bedrohung, Schwachstelle, Risiko, Massnahme | Lehrplan/Pruefung | Kapitel |
| DSGVO-Grundlagen | personenbezogene Daten, Grundsaetze, Rechte, TOMs, Auftragsverarbeitung grob | Lehrplan/Pruefung | Kapitel |
| Backup | Voll, inkrementell, differenziell, 3-2-1, Restore-Test | Lehrplan/Pruefung | Kapitel |
| Malware und Social Engineering | Virus, Wurm, Trojaner, Ransomware, Phishing, Schutzmassnahmen | Lehrplan/Pruefung | Kapitel |
| Firewall/DMZ/Segmentierung | Paketfilter, Zonen, DMZ, Allowlist, einfache Regeln | Lehrplan/Pruefung | Kapitel |
| Passwoerter und Hashing | Passwortregeln, Hash, Salt, Pepper, MFA | Lehrplan/Pruefung | Kapitel |
| Verschluesselung | symmetrisch/asymmetrisch, Hash, Signatur, Zertifikat, VPN grob | Lehrplan/Pruefung | Kapitel |
| PKI/Zertifikate | CA, Zertifikat, Chain, Ablauf, HTTPS-Bezug; keine Kryptomathematik | Lehrplan/Pruefung | Kapitel |
| ISMS/BSI-Grundschutz | Grundidee, Rollen, Dokumentation, Massnahmen | Lehrplan | Abschnitt |
| Kryptomathematik | Primzahlen, Kurven, Algorithmusdetails | Extra | Raus |

### LF5: Daten, Datenbanken, einfache Softwareanpassung

| Thema | Inhaltlicher Umfang | Bezug | Form |
|---|---|---|---|
| Daten und Information | Unterschied Daten/Information, Datenarten, Datenherkunft, Datenqualitaet | Lehrplan | Kapitel |
| Datenformate | CSV, JSON, XML, einfache Struktur, Einsatz und Grenzen | Lehrplan/Pruefung | Kapitel |
| ER-Modell | Entitaet, Attribut, Beziehung, Kardinalitaet, einfache Modellierung | Lehrplan/Pruefung | Kapitel |
| SQL-Grundlagen | SELECT, WHERE, ORDER BY, JOIN, INSERT/UPDATE/DELETE grob | Lehrplan/Pruefung | Kapitel |
| Normalisierung | 1NF, 2NF, 3NF, Redundanz, Anomalien | Lehrplan/Pruefung | Kapitel |
| Stamm- und Bewegungsdaten | Definition, Beispiele, typische Verwechslungen | Lehrplan/Pruefung | Abschnitt |
| Pseudocode | Sequenz, Verzweigung, Schleife, Variablen, Vergleich, Schreibtischtest | Lehrplan/Pruefung | Kapitel |
| Boolesche Bedingungen | UND, ODER, NICHT, Wahrheitstabelle fuer Bedingungen | Grundlage/Pruefung | Abschnitt |
| UML-Aktivitaet | Aktivitaeten, Entscheidung, Start/Ende, Ablauf lesen | Lehrplan/Pruefung | Kapitel |
| Use Case | Akteur, Systemgrenze, Anwendungsfall, einfache Diagramme | Lehrplan/Pruefung | Abschnitt |
| Testfaelle | Eingabe, erwartetes Ergebnis, Blackbox/Whitebox grob | Lehrplan/Pruefung | Kapitel |
| Git | Commit, Branch, Merge nur als Grundwerkzeug | Grundlage | Abschnitt |
| OOP | Klasse, Objekt, Attribut, Methode nur soweit fuer AP1/Grundlagen noetig | Grundlage | Abschnitt |

### LF6: Service, Support, Kommunikation

| Thema | Inhaltlicher Umfang | Bezug | Form |
|---|---|---|---|
| Serviceanfrage und Incident | Anfrage, Stoerung, Dringlichkeit, Status, Eskalation | Lehrplan/Pruefung | Kapitel |
| Ticketsystem | Pflichtfelder, Verlauf, Bearbeitungsstatus, Wissensdatenbank | Lehrplan/Pruefung | Kapitel |
| Support-Level | 1st/2nd/3rd Level, Weitergabe, Zuständigkeit | Lehrplan/Pruefung | Kapitel |
| SLA | Reaktionszeit, Loesungszeit, Verfuegbarkeit, Priorisierung | Lehrplan/Pruefung | Kapitel |
| Fehleranalyse | Symptome, Eingrenzung, Reproduktion, Dokumentation | Lehrplan/Pruefung | Kapitel |
| Kundenkommunikation | aktiv zuhoeren, Rueckfragen, einfache Sprache, Deeskalation | Lehrplan/Pruefung | Kapitel |
| Schulung/Einweisung | Zielgruppe, Ablauf, Key User, kurze Doku | Lehrplan | Abschnitt |
| ITIL | Incident/Problem/Change nur als Einordnung | Extra | Box |

### LF7: Cyber-physische Systeme

| Thema | Inhaltlicher Umfang | Bezug | Form |
|---|---|---|---|
| CPS-Grundidee | Verbindung aus physischem Prozess, Sensorik/Aktorik und IT-System | Lehrplan | Kapitel |
| Sensor/Aktor | Messwert aufnehmen, Aktion ausfuehren, einfache Beispiele | Lehrplan | Kapitel |
| Schnittstellen/Protokolle | Datenfluss, einfache Protokollsicht, bestehendes Netz | Lehrplan | Abschnitt |
| Energieversorgung | Stromversorgung, Ausfall, Sicherheit, Grunddimensionierung | Lehrplan | Abschnitt |
| Funktionspruefung | Messwerte pruefen, Fehler eingrenzen, dokumentieren | Lehrplan | Kapitel |
| Mikrocontroller-Programmierung tief | hardwarenahe Programmierung im Detail | Extra | Raus |

### LF8: Daten systemuebergreifend bereitstellen

| Thema | Inhaltlicher Umfang | Bezug | Form |
|---|---|---|---|
| Datenquellen | interne/externe Quellen, heterogene Systeme, Datenstruktur | Lehrplan | Kapitel |
| Schnittstellen/API | Request/Response, Endpoint, Statuscode grob, JSON/XML | Lehrplan/Pruefung | Kapitel |
| Zugriff und Berechtigungen | Rollen, Rechte, Authentifizierung, Protokollierung | Lehrplan | Kapitel |
| Datenqualitaet | Redundanz, Konsistenz, Aktualitaet, Plausibilitaet | Lehrplan | Kapitel |
| Datenschutz bei Bereitstellung | Zweckbindung, Minimierung, Zugriffsschutz | Lehrplan | Abschnitt |
| Cloud-Konzepte | IaaS, PaaS, SaaS, Chancen/Risiken, Datenschutzbezug | Lehrplan/Pruefung | Kapitel |
| ETL/Data Warehouse | nur Grundidee bei Datenbereitstellung | Extra | Box |
| Machine Learning | nicht Kern fuer Jahr 1/2 | Extra | Raus |

### LF9: Netzwerke, Dienste, Betrieb

| Thema | Inhaltlicher Umfang | Bezug | Form |
|---|---|---|---|
| Netzwerkdienste | DNS, DHCP, Web, Mail, Datei-/Druckdienst grob | Lehrplan/Pruefung | Kapitel |
| Serverdienste bereitstellen | Installation grob, Konfiguration, Test, Doku | Lehrplan | Kapitel |
| Routing/NAT/Firewall | Regeln, Netze verbinden, private/oeffentliche Adressen | Lehrplan/Pruefung | Kapitel |
| VLAN/Segmentierung | Zweck, Trennung, Sicherheit, einfache Beispiele | Lehrplan | Kapitel |
| Linux-Rechte/chmod | rwx, User/Group/Other, Oktalwerte, sichere Rechte | Lehrplan/Pruefung | Kapitel |
| SSH/Telnet | sichere vs unsichere Fernwartung, Port, Einsatz | Lehrplan/Pruefung | Abschnitt |
| Monitoring/Logs | Ereignisse, Metriken, Fehleranalyse, Verfuegbarkeit | Lehrplan | Kapitel |
| Zertifikate bei Diensten | HTTPS/TLS, Zertifikat pruefen, Ablauf, CA grob | Lehrplan/Pruefung | Abschnitt |
| Kubernetes/Cloud-Architektur tief | Spezialwissen | Extra | Raus |

## Reihenfolge fuer den Ausbau

Diese Reihenfolge folgt Lernabhaengigkeiten, nicht der App-Navigation:

1. Bit und Byte
2. Zahlensysteme
3. Praefixe
4. Datenrate und Datenvolumen
5. IPv4-Grundlagen
6. Subnetting
7. Netzwerkkonfiguration
8. OSI/TCP/UDP
9. Hardware-Grundlagen
10. Schutzziele, DSGVO, Backup
11. ER-Modell, SQL, Normalisierung
12. Pseudocode, Bedingungen, Testfaelle
13. Beschaffung, Angebote, Kauf/Leasing/Miete, Vertragsstoerungen
14. Service, Tickets, SLA, Support

## Klare Entscheidungen

| Thema | Entscheidung |
|---|---|
| `logikgatter` | Kein eigenes grosses Kapitel. Boolesche Bedingungen reichen als Abschnitt bei Pseudocode. |
| `ieee-754` | Keine eigene Lektion. Kurze Box bei Zahlensysteme oder Datenformate reicht. |
| `kryptomathematik` | Nicht Teil dieser Lerndatei. |
| `machine-learning` | Nicht Teil des Jahr-1/2-Kerns. |
| `kubernetes` | Nicht Teil des Jahr-1/2-Kerns. |
| `cloud-konzepte` | Behalten, aber als LF8/LF9-Thema und nicht als Trend-Kapitel aufblasen. |
| `ki-grundlagen` | Erst spaeter pruefen; kein Ausbau vor den Kernkapiteln. |
