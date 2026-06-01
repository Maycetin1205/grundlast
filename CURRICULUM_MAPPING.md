# Curriculum-Mapping

Stand: 13.05.2026

Diese Datei verfolgt, welche Kapitel welchen offiziellen Ausbildungs- und
Pruefungsbezug haben. Sie ist zuerst eine Arbeitsmatrix. Spaeter kann daraus
eine App-Datenstruktur entstehen.

## Legende

- **Jahr**: primaerer Lernzeitpunkt im Projekt, nicht zwingend bundesweit identisch
- **AP1**: hoch, mittel, niedrig, nein
- **AP2**: Anschlussrelevanz fuer spaetere Pruefung oder Fachrichtung
- **FR**: uebergreifend, AE, SI, DPA, DV
- **Prioritaet**: Muss, Soll, Vertiefung
- **Review**: offen, geprueft, final

## Mapping-Matrix Start

| Slug | Kapitel | KMK/LF | Jahr | AP1 | AP2 | FR | Prioritaet | Status | Quellen | Review |
|---|---|---:|---:|---|---|---|---|---|---|---|
| von-neumann | Von-Neumann-Architektur | LF2 | 1 | hoch | niedrig | uebergreifend | Muss | draft | allgemein | offen |
| bit-byte | Bit & Byte | LF2/LF3 | 1 | hoch | mittel | uebergreifend | Muss | draft | allgemein | offen |
| zahlensysteme | Zahlensysteme | LF2/LF3 | 1 | hoch | mittel | uebergreifend | Muss | draft | allgemein | offen |
| prefixe | SI- und Binaerpraefixe | LF2/LF3 | 1 | hoch | mittel | uebergreifend | Muss | draft | allgemein | offen |
| logikgatter | Boolesche Algebra und Logikgatter | LF5 | 1-2 | mittel | mittel | uebergreifend | Soll | stub | offen | offen |
| cpu-ram-speicher | CPU, RAM und Speicher | LF2 | 1 | hoch | mittel | uebergreifend | Muss | draft | allgemein | offen |
| hardware-schnittstellen | Hardware, Schnittstellen und Peripherie | LF2 | 1 | hoch | mittel | uebergreifend | Muss | ready | unspezifisch | offen |
| homeoffice-ergonomie | Homeoffice, Telearbeit und Ergonomie | LF2/LF4 | 1 | hoch | mittel | uebergreifend | Muss | ready | unspezifisch | offen |
| raid-systeme | RAID-Systeme | LF2/LF4/LF9 | 1-2 | hoch | hoch | SI | Muss | draft | allgemein | offen |
| usv-systeme | USV-Systeme | LF2/LF4 | 1-2 | mittel | hoch | SI | Soll | draft | allgemein | offen |
| scan-bilddaten | Scan- und Bilddaten rechnen | LF2 | 1 | mittel | niedrig | uebergreifend | Soll | draft | allgemein | offen |
| linux-chmod | Linux-Dateiberechtigungen | LF2/LF9 | 1-2 | hoch | hoch | SI/AE | Muss | draft | allgemein | offen |
| dateisysteme | Dateisysteme | LF2 | 1 | hoch | mittel | uebergreifend | Muss | ready | unspezifisch | offen |
| prozess-thread | Prozesse, Threads und Tasks | LF2 | 1 | hoch | mittel | uebergreifend | Muss | ready | spezifisch | offen |
| zentral-dezentral | Zentrale vs. dezentrale IT-Systeme | LF2/LF9 | 1-2 | hoch | hoch | SI | Muss | ready | spezifisch | offen |
| virtualisierung | Virtualisierung und Hypervisor | LF2/LF9 | 1-2 | hoch | hoch | SI | Muss | draft | allgemein | offen |
| crm-erp-dms | CRM, ERP, DMS und CMS | LF1/LF6/LF8 | 1-2 | hoch | mittel | uebergreifend | Muss | ready | spezifisch | offen |
| tcp-udp | TCP vs. UDP | LF3/LF9 | 1 | hoch | hoch | uebergreifend | Muss | ready | spezifisch | offen |
| datenrate-berechnung | Datenrate und Downloadzeit berechnen | LF2/LF3 | 1 | hoch | hoch | uebergreifend | Muss | ready | spezifisch | offen |
| wlan-standards | WLAN-Standards und WLAN-Sicherheit | LF3/LF9 | 1-2 | hoch | hoch | SI | Muss | ready | spezifisch | offen |
| firewall-dmz | Firewall und DMZ | LF3/LF4/LF9 | 1-2 | hoch | hoch | SI | Muss | ready | spezifisch | offen |
| port-forwarding | Port Forwarding und NAT | LF3/LF9 | 1-2 | hoch | hoch | SI | Muss | ready | spezifisch | offen |

## Naechste Mapping-Arbeit

1. Netzwerk-Kapitel aus `src/lib/toc/data/*.ts` vollstaendig eintragen.
2. Datenbank- und Software-Kapitel eintragen.
3. Projekt, Sicherheit, Wirtschaft und Recht eintragen.
4. Danach alle Stubs nach Prioritaet sortieren.

## Entscheidungsregel

Wenn ein Kapitel AP1-relevant ist, aber fachlich nicht zentral fuer die Ausbildung,
wird es nicht automatisch vorgezogen. Vorrang haben Themen, die Grundlagen fuer
mehrere Folgekapitel, betriebliche Handlungssituationen oder viele typische
Pruefungsaufgaben tragen.
