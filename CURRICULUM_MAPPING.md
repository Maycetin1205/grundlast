# Curriculum-Mapping

Stand: 04.06.2026

Diese Datei ist die Arbeitsmatrix fuer vorhandene Kapitel. Die vollstaendige
Themenlandkarte fuer Jahr 1/2 steht in `INHALTSVERZEICHNIS_JAHR_1_2.md`.

## Regel

Jedes Kapitel bekommt einen fachlichen Bezug und eine Form. Dadurch sieht man
sofort, ob etwas ein eigenes Kapitel bleiben darf, nur als Abschnitt taugt oder
aus dem Lernplan raus muss.

## Legende

- **Jahr**: primaerer Lernzeitpunkt im Projekt
- **AP1/AP2**: erwartete Relevanz als Orientierung fuer Umfang und Beispiele
- **FR**: uebergreifend, AE, SI, DPA, DV
- **Bezug**: `Lehrplan`, `Pruefung`, `Grundlage`, `Extra`, `Raus`
- **Form**: `Kapitel`, `Abschnitt`, `Box`, `Glossar`, `Raus`
- **Status/Review**: technischer und manueller Reifegrad

## Mapping-Matrix Start

| Slug | Kapitel | KMK/LF | Jahr | AP1 | AP2 | FR | Bezug | Form | Status | Quellen | Review |
|---|---|---:|---:|---|---|---|---|---|---|---|---|
| von-neumann | Von-Neumann-Architektur | LF2 | 1 | hoch | niedrig | uebergreifend | Grundlage | Kapitel | draft | allgemein | offen |
| bit-byte | Bit & Byte | LF2/LF3 | 1 | hoch | mittel | uebergreifend | Grundlage/Pruefung | Kapitel | review-final | geprueft | final |
| zahlensysteme | Zahlensysteme | LF2/LF3/LF5 | 1 | hoch | mittel | uebergreifend | Grundlage/Pruefung | Kapitel | review-final | geprueft | final |
| prefixe | SI- und Binaerpraefixe | LF2/LF3 | 1 | hoch | mittel | uebergreifend | Grundlage/Pruefung | Kapitel | review-final | geprueft | final |
| logikgatter | Boolesche Algebra und Logikgatter | LF5 indirekt | 1-2 | niedrig | niedrig | uebergreifend | Extra | Box oder Raus | pruefen | spezifisch | offen |
| cpu-ram-speicher | CPU, RAM und Massenspeicher | LF2 | 1 | hoch | mittel | uebergreifend | Lehrplan/Pruefung | Kapitel | ready | spezifisch | offen |
| hardware-schnittstellen | Hardware, Schnittstellen und Peripherie | LF2 | 1 | hoch | mittel | uebergreifend | Lehrplan/Pruefung | Kapitel | ready | unspezifisch | offen |
| homeoffice-ergonomie | Ergonomie, Barrierefreiheit und Telearbeit | LF2/LF4 | 1 | hoch | mittel | uebergreifend | Lehrplan/Pruefung | Kapitel | ready | spezifisch | teilgeprueft |
| raid-systeme | RAID-Systeme | LF2/LF4/LF9 | 1-2 | hoch | hoch | SI | Lehrplan/Pruefung | Kapitel | draft | allgemein | offen |
| usv-systeme | USV-Systeme | LF2/LF4 | 1-2 | mittel | hoch | SI | Lehrplan | Abschnitt | draft | allgemein | offen |
| scan-bilddaten | Scan- und Bilddaten rechnen | LF2 | 1 | mittel | niedrig | uebergreifend | Grundlage | Abschnitt | draft | allgemein | offen |
| linux-chmod | Linux-Dateiberechtigungen | LF2/LF9 | 1-2 | hoch | hoch | SI/AE | Lehrplan/Pruefung | Kapitel | draft | allgemein | offen |
| dateisysteme | Dateisysteme | LF2 | 1 | hoch | mittel | uebergreifend | Lehrplan/Pruefung | Kapitel | ready | unspezifisch | offen |
| prozess-thread | Prozesse, Threads und Tasks | LF2 | 1 | hoch | mittel | uebergreifend | Lehrplan/Pruefung | Kapitel | ready | spezifisch | offen |
| zentral-dezentral | Zentrale vs. dezentrale IT-Systeme | LF2/LF9 | 1-2 | hoch | hoch | SI | Lehrplan/Pruefung | Kapitel | ready | spezifisch | offen |
| virtualisierung | Virtualisierung und Hypervisor | LF2/LF9 | 1-2 | hoch | hoch | SI | Lehrplan/Pruefung | Kapitel | draft | allgemein | offen |
| crm-erp-dms | CRM, ERP, DMS und CMS | LF1/LF6/LF8 | 1-2 | hoch | mittel | uebergreifend | Lehrplan/Pruefung | Kapitel | ready | spezifisch | offen |
| stamm-bewegungsdaten | Stamm- und Bewegungsdaten | LF5/LF8 | 1-2 | hoch | mittel | uebergreifend | Lehrplan/Pruefung | Abschnitt | ready | spezifisch | offen |
| tcp-udp | TCP vs. UDP | LF3/LF9 | 1 | hoch | hoch | uebergreifend | Lehrplan/Pruefung | Kapitel | ready | spezifisch | offen |
| ipv4-subnetting | IPv4 & Subnetting | LF3 | 1 | hoch | mittel | uebergreifend | Lehrplan/Pruefung | Kapitel | ready | geprueft | final |
| datenrate-berechnung | Datenrate und Downloadzeit berechnen | LF2/LF3 | 1 | hoch | hoch | uebergreifend | Grundlage/Pruefung | Kapitel | ready | spezifisch | offen |
| wlan-standards | WLAN-Standards und WLAN-Sicherheit | LF3/LF9 | 1-2 | hoch | hoch | SI | Lehrplan/Pruefung | Kapitel | ready | spezifisch | offen |
| firewall-dmz | Firewall und DMZ | LF3/LF4/LF9 | 1-2 | hoch | hoch | SI | Lehrplan/Pruefung | Kapitel | ready | spezifisch | offen |
| port-forwarding | Port Forwarding und NAT | LF3/LF9 | 1-2 | hoch | hoch | SI | Lehrplan/Pruefung | Kapitel | ready | spezifisch | offen |
| pki-zertifikate | PKI, CA und Zertifikate | LF4/LF9 | 1-2 | hoch | hoch | uebergreifend/SI | Lehrplan/Pruefung | Kapitel | review-final | geprueft | final |
| gewaehrleistung | Gewaehrleistung und Garantie | LF1 | 1-2 | hoch | mittel | uebergreifend | Lehrplan/Pruefung | Kapitel | ready | spezifisch | offen |

## Naechste Mapping-Arbeit

1. Alle aktuellen TOC-Kapitel gegen `INHALTSVERZEICHNIS_JAHR_1_2.md` abgleichen.
2. Dubletten, Mode-Themen und unbelegte Themen mit `Bezug`/`Form` klar markieren.
3. Netzwerk-, Datenbank-, Software-, Projekt-, Sicherheit-, Wirtschaft- und Recht-Kapitel vollstaendig eintragen.
4. Danach die naechste Kapitelarbeit nach Grundlagenwirkung und Pruefungsnaehe festlegen.
