# Kapitelliste (Bauliste + Vollständigkeits-Check)

Geordnete Themenliste für FISI + FIAE, 1. und 2. Lehrjahr. Reihenfolge = so wird
aufeinander aufgebaut. Diese Liste ist das Arbeitswerkzeug für den 1-Chat-1-Kapitel-
Ablauf: Sie sagt, was als Nächstes dran ist und was schon steht.

Sollwert-Anker: KMK-Rahmenlehrplan (Lernfelder LF1–9) + IHK/AKA-AP1-Prüfungskatalog
(Stand Oktober 2024). Das Kompendium deckt die ganze Ausbildung ab; die AP1-Prüfung
ist nur ein Ausschnitt davon. Themen, die 2025 aus der AP1-Prüfung gestrichen wurden
(SQL, RAID, Struktogramm, PAP), bleiben hier als Ausbildungsinhalt erhalten.

**Stand je Thema:**
- `fertig` – Kapiteltext ist geschrieben (Qualität separat, hier nur: Text vorhanden).
- `Platzhalter` – eingeplant, aber noch leer.
- **`fehlt`** – gehört laut Lehrplan/Katalog rein, ist aber noch nicht einmal eingeplant.

---

## 1 · Digitale Grundlagen

| Thema | Kapitel | Stand |
|---|---|---|
| Bit und Byte, Bitmuster, Zeichencodierung | `bit-byte` | fertig |
| SI- und Binärpräfixe (kB vs. KiB) | `prefixe` | fertig |
| Zahlensysteme (Dual, Oktal, Hex, Dezimal) | `zahlensysteme` | fertig |
| Datenmenge aus Auflösung/Farbtiefe | `datenvolumen-berechnung` | fertig |
| Datenrate, Durchsatz, Übertragungsdauer | `datenrate-berechnung` | fertig |

## 2 · IT-Systeme (Hardware + Betriebssysteme)

| Thema | Kapitel | Stand |
|---|---|---|
| Von-Neumann, Befehlszyklus, Cache | `von-neumann` | fertig |
| CPU, RAM, Massenspeicher | `cpu-ram-speicher` | fertig |
| Schnittstellen, Peripherie, Docking | `hardware-schnittstellen` | fertig |
| BIOS/UEFI und Bootvorgang | — | **fehlt** |
| Ergonomie, Barrierefreiheit, Telearbeit | `homeoffice-ergonomie` | fertig |
| RAID-Level | `raid-systeme` | fertig |
| USV und Verfügbarkeit | `usv-systeme` | fertig |
| Scan-/Bilddaten rechnen (DPI, Farbtiefe) | `scan-bilddaten` | fertig |
| Dateisysteme (FAT, NTFS, ext4) | `dateisysteme` | fertig |
| Dateirechte unter Linux (chmod) | `linux-chmod` | fertig |
| Prozesse und Threads | `prozess-thread` | fertig |
| Virtualisierung und Container (Docker prüfen) | `virtualisierung` | fertig |
| Zentrale vs. dezentrale Systeme | `zentral-dezentral` | fertig |
| Betriebliche Anwendungen (CRM, ERP, DMS) | `crm-erp-dms` | fertig |
| Software-Arten (Standard/Branchen/Individual/System) | — | **fehlt** |

## 3 · Netzwerke

| Thema | Kapitel | Stand |
|---|---|---|
| Netz-Grundbegriffe und Topologien | — | **fehlt** |
| Netz-Komponenten (Router, Switch, Access Point) | — | **fehlt** |
| OSI- und TCP/IP-Modell | `osi-modell` | fertig |
| IPv4-Adressierung und Subnetting | `ipv4-subnetting` | fertig |
| IPv6-Grundlagen | `ipv6-grundlagen` | fertig |
| Transportprotokolle TCP/UDP | `tcp-udp` | fertig |
| Wichtige Dienste: DNS, DHCP, ARP | — | **fehlt** (evtl. teils in `netzwerkkonfiguration`) |
| Netzwerkkonfiguration und Dienste | `netzwerkkonfiguration` | fertig |
| Mailprotokolle (IMAP, POP3, SMTP) | `imap-pop3-smtp` | fertig |
| WLAN-Standards und Sicherheit | `wlan-standards` | fertig |
| Firewall und DMZ | `firewall-dmz` | fertig |
| NAT / Portweiterleitung | `port-forwarding` | fertig |

## 4 · Informationssicherheit

| Thema | Kapitel | Stand |
|---|---|---|
| Schutzziele (CIA) | `schutzziele` | fertig |
| Schutzbedarfs-/Risikoanalyse (BSI-Grundschutz) | — | **fehlt** |
| Datenschutz / DSGVO | `dsgvo-basics` | fertig |
| Verschlüsselung, Hash, VPN | `verschluesselung-hash-vpn` | fertig |
| Verschlüsselungsverfahren vertieft | `verschluesselung-sicherheit` | fertig |
| Passwörter und Hashing | `passwoerter-hashing` | fertig |
| PKI und Zertifikate | `pki-zertifikate` | fertig |
| Malware-Arten | `malware-grundlagen` | fertig |
| Endpoint-Security | `endpoint-security` | fertig |
| Backup-Strategien | `backup-strategien` | fertig |
| Verfügbarkeitskennzahlen (MTBF/MTTF) | `mtbf-mttf` | fertig |
| Sicherer Fernzugriff (SSH vs. Telnet) | `ssh-telnet` | Platzhalter |

## 5 · Daten und Software

### Daten / Datenbanken
| Thema | Kapitel | Stand |
|---|---|---|
| Stamm- und Bewegungsdaten | `stamm-bewegungsdaten` | fertig |
| ER-Modell / Datenmodellierung | `er-grundlagen` | fertig |
| SQL-Grundlagen (nicht mehr AP1, aber Ausbildung) | `sql-grundlagen` | fertig |
| Normalisierung | `normalisierung` | fertig |

### Programmierung — das größte Loch
| Thema | Kapitel | Stand |
|---|---|---|
| Programmier-Grundlagen (Datentypen, Variablen, Kontrollstrukturen, Funktionen) | — | **fehlt** |
| Pseudocode und Ablauflogik | `pseudocode-einstieg` | fertig |
| Algorithmen (Sortieren, Suchen) | — | **fehlt** |
| Programmierparadigmen (prozedural vs. OOP) | `programmierparadigmen` | Platzhalter |
| OOP-Grundlagen (Klassen, Objekte, Vererbung) | `oop-basics` | Platzhalter |
| UML Use-Case-Diagramm | `use-case-diagramm` | fertig |
| UML Aktivitätsdiagramm | `uml-aktivitaet` | fertig |
| UML Klassendiagramm und Beziehungen | `uml-beziehungen` | Platzhalter |
| Bibliotheken und Frameworks | `libraries-frameworks` | Platzhalter |
| Versionsverwaltung (Git) | `git-versionsverwaltung` | Platzhalter |
| Teststrategien (Black-/White-Box, Unit/Integration) | `teststrategien` | Platzhalter |

## 6 · Betriebliche Anwendung + Querschnitt

### Wirtschaft
| Thema | Kapitel | Stand |
|---|---|---|
| Kaufmännisches Rechnen | `kaufmaennische-rechenaufgaben` | fertig |
| Fixe und variable Kosten | `variable-fixe-kosten` | fertig |
| Break-even | `break-even` | fertig |
| Handelskalkulation | `handelskalkulation` | fertig |
| AfA / Abschreibung | `afa-abschreibung` | fertig |
| Gewinnermittlung | `gewinnermittlung` | fertig |
| Energiekosten | `energiekosten` | fertig |
| Kauf / Leasing / Miete | `kauf-leasing-miete` | fertig |
| Eigen-/Fremdfinanzierung | `eigenfremdfinanzierung` | fertig |
| Angebotsvergleich | `angebotsvergleich` | fertig |
| Nutzwertanalyse | `nutzwertanalyse` | fertig |
| Make-or-buy | `make-or-buy` | fertig |
| TCO (Total Cost of Ownership) | — | **fehlt** (evtl. teils in `make-or-buy`/`kauf-leasing-miete`) |
| Marktformen | `marktformen` | fertig |
| Marketing / AIDA | `aida-formel` | fertig |
| Organisation, Leitbild, Nachhaltigkeit/ESG | `organisationsformen-leitbild-nachhaltigkeit-esg` | fertig |
| Aufbauorganisation | `aufbauorganisation` | fertig |

### Recht
| Thema | Kapitel | Stand |
|---|---|---|
| Vertragsarten | `vertragsarten` | fertig |
| Zweiseitiger Handelskauf | `zweiseitiger-handelskauf` | Platzhalter |
| Vertragsstörungen | `vertragsstoerungen` | fertig |
| Gewährleistung | `gewaehrleistung` | fertig |
| Mängelrüge | `maengelruege` | fertig |
| Rechnung, Zahlungsziel, Aufbewahrungsfristen | `rechnung-zahlungsziel-aufbewahrungsfristen` | fertig |
| Ausbildungsvertrag / BBiG | `bbig-ausbildungsvertrag` | Platzhalter |
| Arbeitnehmerrechte | `arbeitnehmerrechte` | Platzhalter |

### Projekt, Service, Kommunikation
| Thema | Kapitel | Stand |
|---|---|---|
| Vorgehensmodelle | `vorgehensmodelle` | fertig |
| Scrum | `scrum` | fertig |
| Netzplantechnik | `netzplan` | fertig |
| Gantt-Diagramm | `gantt-diagramm` | fertig |
| BPMN | `bpmn` | fertig |
| Lasten- / Pflichtenheft | `lastenheft-pflichtenheft` | fertig |
| Machbarkeitsanalyse | `machbarkeitsanalyse` | Platzhalter |
| Projektübergabe / Dokumentation | `projektubergabe` | Platzhalter |
| Serviceanfragen, Support-Level, SLA | `serviceanfragen-support-level` | fertig |
| Fehler-/Störungsmanagement | `fehlermanagement-stoerungsannahme` | fertig |
| Bedarfsanalyse und Feedback | `bedarfsanalyse-feedback` | fertig |
| Schulung, Einweisung, Key-User | `schulung-einweisung-key-user` | fertig |
| Kommunikation (Schulz von Thun) | `schulz-von-thun` | fertig |
| Team, Motivation, Change (Tuckman/Lewin) | `mitarbeitermotivation-teamphasen-change` | fertig |

### Qualität
| Thema | Kapitel | Stand |
|---|---|---|
| PDCA-Zyklus | `pdca-zyklus` | Platzhalter |
| EFQM-Modell | `efqm-modell` | Platzhalter |
| ISO 9000 | `iso-9000` | Platzhalter |
| ISO 25010 (Softwarequalität) | `iso-25010` | Platzhalter |

### Querschnitt / Web / aktuell
| Thema | Kapitel | Stand |
|---|---|---|
| KI-Grundlagen (neu prüfungsrelevant) | `ki-grundlagen` | fertig |
| Cloud-Konzepte (IaaS/PaaS/SaaS) | `cloud-konzepte` | Platzhalter |
| Lizenzmodelle | `lizenzmodelle` | fertig |
| Website statisch / dynamisch | `website-statisch-dynamisch` | fertig |
| Web-Grundlagen: URL/URI-Aufbau, HTTP/HTTPS | — | **fehlt** |
| HTML / CSS / JavaScript Grundlagen | — | **fehlt** |
| Responsive Webdesign | `responsive-webdesign` | Platzhalter |
| Mockup / Wireframe | `mockup-wireframe` | Platzhalter |
| Audio-/Medienkompression | `audio-kompression` | Platzhalter |

---

## Zusammenfassung

- **Geschrieben (fertig):** ~80 Themen.
- **Platzhalter (leer, eingeplant):** ~20 Themen.
- **Fehlt ganz (nicht einmal eingeplant):** ~10 Themen.

### Die echten Lücken (`fehlt`) — nach Wichtigkeit
1. **Programmieren:** Programmier-Grundlagen (Datentypen/Variablen/Kontrollstrukturen/Funktionen), Algorithmen — dazu die Platzhalter OOP, Paradigmen, Git, Tests. Das ist der größte Block.
2. **Netzwerk:** Grundbegriffe/Topologien, Netz-Komponenten, Dienste DNS/DHCP/ARP.
3. **Sicherheit:** Schutzbedarfs-/Risikoanalyse (BSI) — der Namensgeber von LF4.
4. **Web:** URL/HTTP-Grundlagen, HTML/CSS/JS.
5. **IT-Systeme:** BIOS/UEFI/Bootvorgang, Software-Arten.
6. **Wirtschaft:** TCO (falls nicht schon in Beschaffungskapiteln mit drin).

### Leere Bereiche, die nur aus Platzhaltern bestehen
Qualitätsmanagement (PDCA, EFQM, ISO 9000/25010), Arbeits-/Ausbildungsrecht,
Cloud-Konzepte.

---

Quellen (Sollwert-Anker): [KMK-Rahmenlehrplan Fachinformatiker](https://www.kmk.org/fileadmin/Dateien/pdf/Bildung/BeruflicheBildung/rlp/Fachinformatiker_19-12-13_EL.pdf) ·
[Themen AP1 / neuer Prüfungskatalog ab 2025 (IT-Berufe-Podcast)](https://it-berufe-podcast.de/vorbereitung-auf-die-ihk-abschlusspruefung-der-it-berufe/moegliche-themen-von-teil-1-der-gestreckten-abschlusspruefung-gap-in-den-it-berufen/)
