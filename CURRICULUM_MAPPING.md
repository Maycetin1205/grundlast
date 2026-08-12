# Curriculum-Mapping — Grundlast gegen den KMK-Rahmenlehrplan

Stand: 2026-08-12

**Diese Datei wurde vollstaendig neu erstellt.** Die vorherige Fassung war seit
dem 13.05.2026 eingefroren, deckte 22 von 102 Kapiteln ab und enthielt
veraltete Statusangaben (sie fuehrte `zahlensysteme` als `draft`, obwohl das
Kapitel auf `final` steht). Handgepflegte Statustabellen verrotten; deshalb
enthaelt diese Fassung **keinen Status mehr**. Status steht ausschliesslich im
Code (`src/lib/toc/data/*.ts`) und wird von dort in die Lernfeld-Arbeitsdateien
unter `lernfelder/` generiert.

## Quelle

KMK-Rahmenlehrplan fuer die Ausbildungsberufe Fachinformatiker/Fachinformatikerin,
Beschluss vom 13.12.2019. Volltext liegt als
`material/zusammenfassungen/gesamt-kmk-rahmenlehrplan.md` im Repo.

Das ist eine **Primaerquelle**. Sie legt verbindlich fest, welche Lernfelder mit
welchem Zeitrichtwert in welchem Ausbildungsjahr unterrichtet werden. Anders als
das uebrige Material im Repo ist sie amtlich.

## Der Rahmen fuer Jahr 1 und 2

Ausbildungsjahr 1 und 2 umfassen **LF1 bis LF9** mit zusammen **600
Unterrichtsstunden**. LF10 bis LF12 sind fachrichtungsspezifisch und liegen im
3. Ausbildungsjahr — ausserhalb des Anspruchs aus `AUSBILDUNGS_KOMPASS.md`.

| LF | Titel | Jahr | Stunden |
|---|---|:--:|---:|
| 1 | Das Unternehmen und die eigene Rolle im Betrieb beschreiben | 1 | 40 |
| 2 | Arbeitsplaetze nach Kundenwunsch ausstatten | 1 | 80 |
| 3 | Clients in Netzwerke einbinden | 1 | 80 |
| 4 | Schutzbedarfsanalyse im eigenen Arbeitsbereich durchfuehren | 1 | 40 |
| 5 | Software zur Verwaltung von Daten anpassen | 1 | 80 |
| 6 | Serviceanfragen bearbeiten | 2 | 40 |
| 7 | Cyber-physische Systeme ergaenzen | 2 | 80 |
| 8 | Daten systemuebergreifend bereitstellen | 2 | 80 |
| 9 | Netzwerke und Dienste bereitstellen | 2 | 80 |

## Zuordnung der Grundlast-Gruppen

Grundlast ordnet nach 14 thematischen Gruppen, der Lehrplan nach 9 Lernfeldern.
Das sind verschiedene Achsen. Diese Zuordnung ist die erste hergestellte
Verbindung zwischen beiden — sie ist eine begruendete Einschaetzung, kein
amtlicher Abgleich.

| LF | Stunden | Kapitel | Zugeordnete Gruppen | Verhaeltnis |
|---|---:|---:|---|---|
| LF1 | 40 | 24 | wirtschaft, vertragsrecht, arbeitsrecht | **stark ueberdeckt** |
| LF2 | 80 | 17 | hardware, betriebssysteme, grundlagen | plausibel |
| LF3 | 80 | 11 | netzwerke | plausibel |
| LF4 | 40 | 11 | sicherheit | ueberdeckt |
| LF5 | 80 | 13 | daten, software | plausibel |
| LF6 | 40 | 14 | projekt | ueberdeckt |
| LF7 | 80 | **0** | — | **Luecke** |
| LF8 | 80 | **0** | — | **Luecke** |
| LF9 | 80 | **0** | — | **Luecke** |

Nicht zugeordnet: `aktuell` (3), `qualitaet` (4), `webmedia` (5). Diese Gruppen
haben im Rahmenlehrplan fuer Jahr 1 und 2 keine offensichtliche Heimat und
sind einzeln zu pruefen.

---

## Befund 1 — 240 von 600 Stunden ohne Kapitel

**LF7, LF8 und LF9 zusammen sind 240 Unterrichtsstunden, also 40 Prozent des
Lehrplans fuer Jahr 1 und 2. Grundlast hat dafuer kein einziges Kapitel.**

### LF7 — Cyber-physische Systeme ergaenzen (80 h)

Laut Lehrplan: die physische Welt und IT-Systeme funktional zusammenfuehren,
Datenfluss an der Schnittstelle zwischen physischer Welt und IT-System,
Kommunikation im bestehenden Netzwerk, Inbetriebnahme weiterer Komponenten.

Fehlende Themen: Sensorik und Aktorik, Embedded Systems, IoT-Architektur,
MQTT mit Broker/Publisher/Subscriber, Bussysteme, Industrie 4.0,
Smart-Home-Protokolle, Edge Computing.

Bestaetigt durch das hochgeladene Material: MQTT und Industrie 4.0 stehen im
Lernzettel, haben aber kein Kapitel (siehe `THEMENLUECKEN.md`, Cluster 1 und 6).

### LF8 — Daten systemuebergreifend bereitstellen (80 h)

Laut Lehrplan: Daten aus dezentralen, heterogenen Quellen zusammenfuehren,
aufbereiten und bereitstellen; Datenquellen nach Struktur, rechtlichen
Rahmenbedingungen und Zugriffsmechanismen analysieren.

Fehlende Themen: Schnittstellen und APIs (REST, Webservices), Datenformate
(JSON, XML, CSV), Datenintegration und ETL, Datenqualitaet, Zugriffsmechanismen,
Datenaustausch zwischen Systemen.

Die Gruppe `daten` (ER-Modell, SQL, Normalisierung, Stammdaten) bedient LF5
"Software zur Verwaltung von Daten anpassen" — nicht LF8. Das ist ein anderes
Lernfeld mit anderer Kompetenz: LF5 verwaltet Daten *in einem* System, LF8
fuehrt sie *zwischen* Systemen zusammen.

### LF9 — Netzwerke und Dienste bereitstellen (80 h)

Laut Lehrplan: Netzwerke und Dienste planen, konfigurieren und erweitern;
Eigenschaften, Funktionen und Leistungsmerkmale der Netzwerkkomponenten und
Dienste ermitteln.

Die elf Netzwerkkapitel bedienen **LF3** — Clients *in* Netzwerke einbinden,
also die Client-Sicht: Adressierung, Protokolle, Diagnose. LF9 ist die
Infrastruktur-Sicht: aktive Komponenten, Verkabelung, Dienste bereitstellen.

Fehlende Themen: Netzwerkkomponenten (Hub, Switch, Bridge, Router, Repeater,
Gateway) und ihre OSI-Zuordnung, Verkabelung (Twisted Pair, Cat-Kategorien,
Glasfaser, Gebaeudeverkabelung), Ethernet-Standards, Routing-Grundlagen und
Routing-Protokolle, Serverdienste einrichten, RADIUS, Proxy.

**Diese Luecke wurde unabhaengig zweimal gefunden:** einmal im Abgleich gegen
das hochgeladene Material (`THEMENLUECKEN.md`, Cluster 1 — rund 20 Folien der
Pruefungsvorbereitung ohne Kapitel), einmal hier gegen den Lehrplan. Zwei
verschiedene Quellen, derselbe Befund. Das ist der belastbarste Einzelbefund
dieser Analyse.

---

## Befund 2 — LF1 ist stark ueberdeckt

LF1 hat 40 Unterrichtsstunden, den kleinsten Zeitrichtwert neben LF4 und LF6.
Grundlast hat dafuer 24 Kapitel — mehr als fuer jedes andere Lernfeld.

Der Lehrplantext zu LF1 nennt: Wertschoepfungskette, Unternehmensleitbild,
oekonomische/oekologische/soziale Zielsetzungen, Marktstruktur der Branche,
Einordnung des Unternehmens mit Markt- und Kundenbeziehungen, eigene Rolle im
Betrieb.

Das rechtfertigt `marktformen`, `aufbauorganisation`,
`organisationsformen-leitbild-nachhaltigkeit-esg`. Es rechtfertigt **nicht**
ohne Weiteres den vollen Umfang an Kalkulation (`handelskalkulation`,
`break-even`, `gewinnermittlung`, `variable-fixe-kosten`, `afa-abschreibung`)
und Vertragsrecht (sechs Kapitel).

Das deckt sich mit dem Materialbefund: Der gesamte kaufmaennisch-rechtliche
Block hat in den drei hochgeladenen Dokumenten praktisch keinen Rueckhalt.

**Das ist kein Loeschbefehl.** Kaufmaennische Themen kommen in der AP1 vor und
sind Teil der betrieblichen Realitaet. Aber die Gewichtung stimmt nicht: 24
Kapitel fuer 40 Stunden, waehrend 240 Stunden ohne Kapitel dastehen.

---

## Offene Punkte

1. **Die Zuordnung Gruppe → Lernfeld ist geschaetzt, nicht belegt.** Sie beruht
   auf Titelaehnlichkeit und Lehrplantext, nicht auf einer Kapitel-fuer-Kapitel-
   Pruefung. Vor weitreichenden Entscheidungen einzeln nachpruefen.
2. **`aktuell`, `qualitaet`, `webmedia` sind nicht zugeordnet.** Qualitaet
   taucht im Lehrplan als Querschnittsthema auf, nicht als eigenes Lernfeld fuer
   Jahr 1/2. Webmedia hat im Rahmenlehrplan fuer FI keine Entsprechung in
   LF1-LF9 — vermutlich aus einem anderen Lehrplan uebernommen.
3. **Fachrichtung ist nicht beruecksichtigt.** Der Lernkatalog im Material ist
   fuer Systemintegration. LF10-12 unterscheiden sich je Fachrichtung, LF1-9
   nicht — fuer Jahr 1 und 2 ist die Fachrichtung also unerheblich.
