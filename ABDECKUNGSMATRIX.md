# Abdeckungsmatrix

## Zweck

Diese Datei ist die **Vollständigkeitsgarantie**. Sie listet, was in Ausbildung
und AP1 drankommen kann (der Sollwert), und ordnet jedem Thema ein Kapitel und
einen Prüfstatus zu. Die Zeilen mit Status `fehlt` sind die Bauliste: Das
nächste aktive Kapitel in `LOS_MACH_WEITER.md` wird aus ihnen gewählt, nicht aus
dem Bauchgefühl.

Abdeckung ist nicht Qualität. Ein Thema gilt erst als sicher, wenn sein Kapitel
nach `KAPITELSTANDARD.md` den Status `geprüft` erreicht hat.

## Sollwert – woher die Themenliste kommt

Zwei Anker, die sich ergänzen:

- **Von oben (was gelehrt werden soll):** FIAusbV, KMK-Rahmenlehrplan und der
  IHK-/AKA-Prüfungskatalog für AP1. Sie definieren die prüfbaren Themen je
  Lernfeld.
- **Von unten (wie wirklich gefragt wird):** reale Probeprüfungen und die
  Extraktionen in `_material_index/`. Sie zeigen die konkreten Aufgabentypen.
  Übernommen werden nur Themenumfang und Denkoperation, kein geschützter
  Wortlaut (siehe `MATERIALABGLEICH.md`).

Regel: Jeder Aufgabentyp aus den Probeprüfungen muss als Zeile auftauchen.
Findet sich ein Typ, der zu keinem Sollwert-Thema passt, fehlt das Thema –
Zeile mit Status `fehlt` anlegen.

## Statuswerte

| Status | Bedeutung |
|---|---|
| `geprüft` | Kapitel deckt das Thema ab und ist nach Kapitelstandard geprüft. |
| `ungeprüft` | Kapitel oder Entwurf existiert, aber noch nicht geprüft. |
| `fehlt` | Kein Kapitel deckt das Thema ab. Bauliste. |

## Erfassungsstand

Die Ketten unten sind aus `AUSBILDUNGSLANDKARTE.md` und dem aktuellen
Lektionsbestand befüllt; die Statuswerte stammen aus `CONTENT_AUDIT_MATRIX.md`
und der generierten Übersicht `AP1_STATUS.md` (Stand: 9 geprüft, 91 ungeprüft).
Die **feine** Auflösung je Aufgabentyp und die `fehlt`-Zeilen werden gegen den
Anker (IHK-Prüfungskatalog + Probeprüfungen) vervollständigt; das ist der erste
verbindliche Arbeitsschritt unter diesem Plan. Erfundene Themen oder Quellen
sind unzulässig: Eine Zeile entsteht nur aus einem belegten Anker.

## Matrix nach Lernpfad

### 1 · Digitale Grundlagen (LF2, Jahr 1)

| Prüfbares Thema | Kapitel | Status |
|---|---|---|
| Bit und Byte als kleinste Einheiten | `bit-byte` | geprüft |
| SI- und Binärpräfixe (kB vs. KiB) | `prefixe` | geprüft |
| Zahlensysteme (Dual, Oktal, Hex, Dezimal) | `zahlensysteme` | geprüft |
| Datenmengen aus Auflösung/Farbtiefe rechnen | `datenvolumen-berechnung` | geprüft |
| Datenrate, Durchsatz, Übertragungsdauer | `datenrate-berechnung` | geprüft |

### 2 · IT-Systeme (LF2, Jahr 1)

| Prüfbares Thema | Kapitel | Status |
|---|---|---|
| Von-Neumann-Grundidee, Befehlszyklus, Cache | `von-neumann` | geprüft |
| CPU, RAM, Massenspeicher auswählen | `cpu-ram-speicher` | geprüft |
| Schnittstellen, Peripherie, Docking | `hardware-schnittstellen` | geprüft |
| Ergonomie, Barrierefreiheit, Telearbeit | `homeoffice-ergonomie` | geprüft |
| RAID-Level (0,1,5,6,10) | `raid-systeme` | ungeprüft |
| USV-Systeme und Verfügbarkeit | `usv-systeme` | ungeprüft |
| Scan-/Bilddaten (DPI, Farbtiefe) rechnen | `scan-bilddaten` | ungeprüft |
| Dateisysteme | `dateisysteme` | geprüft |
| Dateirechte unter Linux (chmod) | `linux-chmod` | geprüft |
| Prozesse und Threads | `prozess-thread` | ungeprüft |
| Zentrale vs. dezentrale Systeme | `zentral-dezentral` | ungeprüft |
| Virtualisierung | `virtualisierung` | ungeprüft |
| Betriebliche Anwendungen (CRM, ERP, DMS) | `crm-erp-dms` | ungeprüft |

### 3 · Netzwerke (LF3/LF9, Jahr 1/2)

| Prüfbares Thema | Kapitel | Status |
|---|---|---|
| Netzwerkgrundbegriffe und Topologien | — | gegen Anker prüfen |
| OSI- und TCP/IP-Schichtenmodell | `osi-modell` | ungeprüft |
| Transportprotokolle TCP/UDP | `tcp-udp` | ungeprüft |
| Mailprotokolle (IMAP, POP3, SMTP) | `imap-pop3-smtp` | ungeprüft |
| IPv4-Adressierung und Subnetting | `ipv4-subnetting` | ungeprüft |
| IPv6-Grundlagen | `ipv6-grundlagen` | ungeprüft |
| Netzwerkkonfiguration und Dienste | `netzwerkkonfiguration` | ungeprüft |
| WLAN-Standards | `wlan-standards` | ungeprüft |
| Firewall und DMZ | `firewall-dmz` | ungeprüft |
| Portweiterleitung / NAT | `port-forwarding` | ungeprüft |

### 4 · Informationssicherheit (LF4, Jahr 1)

| Prüfbares Thema | Kapitel | Status |
|---|---|---|
| Schutzziele (CIA) | `schutzziele` | ungeprüft |
| Risiko- und Schutzbedarfsanalyse | — | gegen Anker prüfen |
| Datenschutz / DSGVO-Grundlagen | `dsgvo-basics` | ungeprüft |
| Verschlüsselung, Hash, VPN | `verschluesselung-hash-vpn` | ungeprüft |
| Verschlüsselungsverfahren vertieft | `verschluesselung-sicherheit` | ungeprüft |
| Passwörter und Hashing | `passwoerter-hashing` | ungeprüft |
| PKI und Zertifikate | `pki-zertifikate` | ungeprüft |
| Backup-Strategien | `backup-strategien` | ungeprüft |
| Verfügbarkeitskennzahlen (MTBF/MTTF) | `mtbf-mttf` | ungeprüft |
| Sichere Fernzugriffe (SSH vs. Telnet) | `ssh-telnet` | ungeprüft |
| Endpoint-Security | `endpoint-security` | ungeprüft |
| Malware-Grundlagen | `malware-grundlagen` | ungeprüft |

### 5 · Daten und Software (LF5/LF8, Jahr 1/2)

| Prüfbares Thema | Kapitel | Status |
|---|---|---|
| Stamm- und Bewegungsdaten | `stamm-bewegungsdaten` | ungeprüft |
| ER-Modell / Datenmodellierung | `er-grundlagen` | ungeprüft |
| SQL-Grundlagen | `sql-grundlagen` | ungeprüft |
| Normalisierung | `normalisierung` | ungeprüft |
| Pseudocode und Ablauflogik | `pseudocode-einstieg` | ungeprüft |
| UML-Aktivitätsdiagramm | `uml-aktivitaet` | ungeprüft |
| Use-Case-Diagramm | `use-case-diagramm` | ungeprüft |
| UML-Beziehungen | `uml-beziehungen` | ungeprüft |
| Programmierparadigmen | `programmierparadigmen` | ungeprüft |
| Bibliotheken und Frameworks | `libraries-frameworks` | ungeprüft |
| OOP-Grundlagen | `oop-basics` | ungeprüft |
| Versionsverwaltung (Git) | `git-versionsverwaltung` | ungeprüft |
| Teststrategien | `teststrategien` | ungeprüft |

### 6 · Betriebliche Anwendung – Wirtschaft, Recht, Projekt, Qualität (LF1/LF6, Jahr 1/2)

| Prüfbares Thema | Kapitel | Status |
|---|---|---|
| Kaufmännisches Rechnen | `kaufmaennische-rechenaufgaben` | ungeprüft |
| Kosten-/Gewinnrechnung (Break-even, Kalkulation, AfA, Kosten, Gewinn) | `break-even`, `handelskalkulation`, `afa-abschreibung`, `variable-fixe-kosten`, `gewinnermittlung`, `energiekosten` | ungeprüft |
| Beschaffung und Entscheidung (Nutzwert, Make-or-buy, Angebot, Finanzierung) | `nutzwertanalyse`, `make-or-buy`, `angebotsvergleich`, `kauf-leasing-miete`, `eigenfremdfinanzierung` | ungeprüft |
| Markt, Marketing, Organisation | `marktformen`, `aida-formel`, `organisationsformen-leitbild-nachhaltigkeit-esg`, `aufbauorganisation` | ungeprüft |
| Vertragsrecht (Arten, Störungen, Gewährleistung, Rechnung) | `vertragsarten`, `vertragsstoerungen`, `gewaehrleistung`, `maengelruege`, `rechnung-zahlungsziel-aufbewahrungsfristen`, `zweiseitiger-handelskauf` | ungeprüft |
| Arbeits-/Ausbildungsrecht | `bbig-ausbildungsvertrag`, `arbeitnehmerrechte` | ungeprüft |
| Service und Kommunikation | `serviceanfragen-support-level`, `fehlermanagement-stoerungsannahme`, `bedarfsanalyse-feedback`, `schulung-einweisung-key-user`, `schulz-von-thun`, `mitarbeitermotivation-teamphasen-change` | ungeprüft |
| Projektmanagement (Modelle, Planung) | `vorgehensmodelle`, `scrum`, `netzplan`, `gantt-diagramm`, `bpmn`, `lastenheft-pflichtenheft`, `machbarkeitsanalyse`, `projektubergabe` | ungeprüft |
| Qualitätsmanagement | `pdca-zyklus`, `efqm-modell`, `iso-9000`, `iso-25010` | ungeprüft |

### Querschnitt / aktuell

| Prüfbares Thema | Kapitel | Status |
|---|---|---|
| KI-Grundlagen | `ki-grundlagen` | ungeprüft |
| Cloud-Konzepte | `cloud-konzepte` | ungeprüft |
| Lizenzmodelle | `lizenzmodelle` | ungeprüft |
| Webseiten statisch/dynamisch | `website-statisch-dynamisch` | ungeprüft |
| Responsive Webdesign | `responsive-webdesign` | ungeprüft |
| Mockup / Wireframe | `mockup-wireframe` | ungeprüft |
| Audio-/Medienkompression | `audio-kompression` | ungeprüft |

## Voraussetzungs-Register (was bis hier eingeführt ist)

Damit „baut aufeinander auf" prüfbar bleibt: Jedes geprüfte Kapitel trägt hier
die Kernkonzepte ein, die es **zuerst** einführt. Ein neues Kapitel darf nur
Konzepte voraussetzen, die in diesem Register vor ihm stehen – sonst ist das
eine Lücke (Vorkapitel zuerst).

| Reihenfolge | Kapitel | Erstmals eingeführte Kernkonzepte |
|---:|---|---|
| 1 | `bit-byte` | Bit, Byte, Nibble, Bitmuster, 8-Bit-Wertebereich, b/B-Unterscheidung, Datenmenge vs. Datenrate, Zeichenkodierung, ASCII, UTF-8 |
| 2 | `prefixe` | SI-Präfix, Binärpräfix (IEC), Datenmenge in Byte |
| 3 | `zahlensysteme` | Stellenwertsystem, Basis 2/8/10/16, Umrechnung, Hexziffern |
| 4 | `datenvolumen-berechnung` | Farbtiefe, Auflösung, Datenmenge aus Pixeln, Faktor 8 |
| 5 | `datenrate-berechnung` | Datenrate, Durchsatz, Bandbreite, Latenz, Brutto/Netto, Übertragungsdauer |
| 6 | `von-neumann` | CPU, ALU, Steuerwerk, gemeinsamer Speicher, Bus, Fetch-Decode-Execute, Cache, Flaschenhals, EVA |
| 7 | `cpu-ram-speicher` | RAM, Cache-Ebenen, Takt, Thread, SSD/HDD, NVMe, M.2, SATA, DDR-Generation, ECC |
| 8 | `hardware-schnittstellen` | USB/USB-C/USB4, Thunderbolt, USB-PD, HDMI, DisplayPort, PCIe, Docking, KVM |
| 9 | `homeoffice-ergonomie` | Bildschirmarbeitsplatz, Telearbeit, Homeoffice, mobiles Arbeiten, Ergonomie, Barrierefreiheit, Softwareergonomie, WCAG-Prinzipien, Gefährdungsbeurteilung, Unterweisung, Mehrfaktor-Authentisierung (MFA), VPN als geschützter Remote-Zugriff |
| 10 | `dateisysteme` | Dateisystem, Partition, Mount, Journaling (Konzeptliste beim nächsten Durchlauf am Kapitel verifizieren) |
| 11 | `linux-chmod` | Dateimodus-Bits, rwx mit r=4/w=2/x=1, Oktalmodus in Reihenfolge User-Group-Other, symbolische Modi (u/g/o/a mit +/-/=), Sonderbits setuid/setgid/sticky |
| 12 | `raid-systeme` | RAID, RAID-Level, Striping, Mirroring, Parität, doppelte Parität, Speichereffektivität, Rohkapazität, Nettokapazität, Ausfalltoleranz, Rebuild |

`bit-byte` ist als Wurzelkapitel eingetragen und am 2026-06-30 durch den
unabhängigen Prüfer-Pass bestätigt (`geprüft`). Spätere Kapitel dürfen die dort
eingeführten Konzepte als geprüft voraussetzen.

`linux-chmod` (Zeile 11) ist am 2026-06-29 durch den unabhängigen Prüfer-Pass
bestätigt (`geprüft`); der Registereintrag ist nicht mehr provisorisch.
Voraussetzungen sind bereits eingeführt: Oktal aus `zahlensysteme` (Zeile 3),
Inode/Metadaten aus `dateisysteme` (Zeile 10).

## Pflege

- Neue Sollwert-Zeile entsteht aus dem Anker (oben/unten), nie aus dem Gedächtnis.
- Status einer Zeile wird nur durch den Kapitelstandard bewegt
  (`ungeprüft` → `geprüft` erst nach unabhängigem Prüfer-Pass).
- `fehlt`-Zeilen werden in `LOS_MACH_WEITER.md` als nächstes Kapitel eingeplant,
  in der Reihenfolge der Abhängigkeitsketten.
- Diese Datei wird bei jedem Kapitelabschluss aktualisiert.
