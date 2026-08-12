# Themenluecken — was im Material steht, aber kein Kapitel hat

Stand: 2026-08-12

Hergeleitet aus dem Abgleich von **197 Themen** aus dem hochgeladenen Material
gegen die **102 Kapitel** in `src/lib/toc/data/`.

Materialquellen:

- `material/zusammenfassungen/gesamt-lernkatalog-ap1.md` (6 Fragenkomplexe)
- `material/zusammenfassungen/gesamt-lernzettel-ap1-2024.md` (71 Gliederungspunkte)
- `material/zusammenfassungen/gesamt-pruefungsvorbereitung-technik.md` (8 Kapitel, 152 Folien)

**Methodik und ihre Grenze:** Der Abgleich lief zuerst automatisch ueber
Stichwortvergleich, danach von Hand kuratiert. Die automatische Stufe hat
Fehlalarme produziert (OSI, USV, WLAN galten als fehlend, obwohl es Kapitel
gibt). Die Liste unten ist die kuratierte Fassung. Sie ist eine
Arbeitsgrundlage, kein Beschluss — jede Zeile ist noch zu bestaetigen.

**Wichtig:** Dass ein Thema im Material steht, belegt Pruefungs- und
Unterrichtsrelevanz. Es belegt nicht, dass es ein eigenes Kapitel braucht.
Manches gehoert als Abschnitt in ein bestehendes Kapitel.

---

## Cluster 1 — Netzwerk-Infrastruktur

Die groesste Luecke. Grundlast hat 11 Netzwerkkapitel, aber sie behandeln fast
ausschliesslich Protokolle und Adressierung. Die physische und aktive
Infrastruktur fehlt praktisch vollstaendig — obwohl die Pruefungsvorbereitung
ihr allein rund 20 Folien widmet.

| Thema | Fundstelle im Material | Anmerkung |
|---|---|---|
| Netzwerkkomponenten (Hub, Switch, Bridge, Router, Repeater, Gateway) | PruefVorb 5.3 | Inkl. Zuordnung zu OSI-Schichten. Klassische Zuordnungsaufgabe |
| Verkabelung (Twisted Pair, Kupfer, Cat-Kategorien) | PruefVorb 5.14, Lernzettel S.40 | Cat5e bis Cat8, Laengenbegrenzungen |
| Glasfaser (Monomode, Multimode) | PruefVorb 5.11 | |
| Gebaeudeverkabelung (Primaer, Sekundaer, Tertiaer) | Lernzettel S.36 | Normbezug EN 50173 |
| Fehlerquellen bei Verkabelung | PruefVorb 5.14.4 | Diagnoseaufgaben |
| Ethernet-Standards | PruefVorb 5.17 | 10/100/1000/10G, CSMA/CD |
| Routing-Grundlagen und Routing-Protokolle | PruefVorb 5.23 | statisch/dynamisch, RIPv2 |
| Netzklassen A-E | PruefVorb 5.20.2 | teilweise in `ipv4-subnetting` |
| Private Adressbereiche | PruefVorb 5.20.4 | teilweise in `port-forwarding` |
| RADIUS und AAA | PruefVorb 5.25, 3.14 | |
| Forward Proxy und Reverse Proxy | PruefVorb 5.31 | |
| DSL-Arten | PruefVorb 5.13, Lernzettel S.51 | ADSL, VDSL, SDSL |
| Wireshark und Netzwerkanalyse | PruefVorb 5.32.3 | |
| Fernwartung | Lernzettel S.40 | |
| ARP | PruefVorb 5.2.2 | teilweise in `netzwerkkonfiguration` |
| Smart-Home-Protokolle, MQTT | PruefVorb 5.2.1, Lernzettel S.26 | Broker/Publisher/Subscriber |

## Cluster 2 — Speicher- und Serversysteme

| Thema | Fundstelle | Anmerkung |
|---|---|---|
| DAS, NAS, SAN im Vergleich | PruefVorb 4.1, Lernzettel S.25 | Komplett fehlend, stark pruefungsrelevant |
| UEFI und BIOS | Lernzettel S.16 | |
| Serversysteme (Rack, Tower, Blade) | PruefVorb 4.6 | |
| Snapshot gegen Backup | PruefVorb 4.7.2 | Gehoert zu `virtualisierung` oder `backup-strategien` |
| Revisionssicherheit der Datensicherung | PruefVorb 4.2.2 | Rechtsbezug GoBD |
| Dateiformate und Dateitypen | PruefVorb 4.9.4, Lernzettel S.28 | |

## Cluster 3 — Software, Modellierung, Datenbanken

| Thema | Fundstelle | Anmerkung |
|---|---|---|
| UML-Klassendiagramm | PruefVorb 8.8 | Stub `uml-beziehungen` deckt nur Beziehungen |
| Programmablaufplan (PAP) | PruefVorb 8.15, 2.2 | Eigene Notation, nicht in `pseudocode-einstieg` |
| Struktogramm (Nassi-Shneiderman) | PruefVorb 8.16 | |
| Sortieralgorithmen | PruefVorb 8.19 | |
| ACID-Eigenschaften | PruefVorb 8.17.5 | Gehoert zu Datenbanken |
| SQL gegen NoSQL | PruefVorb 8.17, Lernzettel S.30 | |
| Fehlersuche und Debugging | PruefVorb 8.11 | |
| HTML-Grundbegriffe | PruefVorb 8.6 | |
| Boolesche Algebra und Gatter | PruefVorb 8.13 | Stub `logikgatter` existiert bereits |

## Cluster 4 — Projektmanagement und Qualitaet

| Thema | Fundstelle | Anmerkung |
|---|---|---|
| Magisches Dreieck | PruefVorb 6.6 | Zeit, Kosten, Qualitaet |
| Shareholder und Stakeholder | PruefVorb 6.12 | inkl. Stakeholderanalyse |
| EPK (Ereignisgesteuerte Prozesskette) | PruefVorb 6.18 | Andere Notation als BPMN |
| Organigramm | PruefVorb 6.19 | teilweise in `aufbauorganisation` |
| Lean Management | PruefVorb 6.8 | |
| Kano-Modell | PruefVorb 7.3 | |
| SWOT-Analyse | Lernzettel S.53 | |
| KPI (Key Performance Indicator) | Lernzettel S.49 | |
| Service Level Agreement | Lernzettel S.55 | teilweise in `serviceanfragen-support-level` |

## Cluster 5 — Recht, Datenschutz, Compliance

| Thema | Fundstelle | Anmerkung |
|---|---|---|
| BDSG neben der DSGVO | PruefVorb 2.1 | Abgrenzung wird explizit gefragt |
| Standard-Datenschutzmodell (SDM) | PruefVorb 2.4, Lernzettel S.12 | Sieben Gewaehrleistungsziele |
| Technische und organisatorische Massnahmen (TOM) | Lernzettel S.21 | Art. 32 DSGVO |
| IT-Sicherheitsgesetz / BSIG | Lernzettel S.14 | |
| Compliance und Governance | PruefVorb 2.5 | |
| Passwortrichtlinien | PruefVorb 1.1 | teilweise in `passwoerter-hashing` |
| Bildschirmarbeitsplatz nach ArbStaettV | PruefVorb 1.3 | teilweise in `homeoffice-ergonomie` |
| Remote-Arbeit | PruefVorb 1.5 | |

## Cluster 6 — Wirtschaft und Sonstiges

| Thema | Fundstelle | Anmerkung |
|---|---|---|
| Beschaffungsprozess | Lernzettel S.46 | |
| Industrie 4.0 | Lernzettel S.22 | Im Material selbst als unvollstaendig markiert |
| Green IT und Nachhaltigkeit | Lernzettel S.54 | teilweise in `organisationsformen-...-esg` |
| Barrierefreiheit | PruefVorb 7.14, Lernzettel S.10 | Stub `softwareergonomie` existiert |
| Kuenstliche neuronale Netze | PruefVorb 8.18 | teilweise in `ki-grundlagen` |

---

## Gegenrichtung: Kapitel ohne Materialbezug

Diese Kapitel existieren in Grundlast, kommen im Material aber nicht vor.
Das ist **kein** Fehler — Grundlast soll laut `AUSBILDUNGS_KOMPASS.md` mehr
abdecken als die AP1. Es ist nur ein Hinweis, dass diese Themen aus einer
anderen Quelle gerechtfertigt werden muessen (KMK-Rahmenlehrplan LF1-LF9).

- `zahlensysteme`, `bit-byte`, `prefixe` — kein Treffer im Material
- `afa-abschreibung`, `handelskalkulation`, `break-even`, `gewinnermittlung`
- `vertragsarten`, `maengelruege`, `vertragsstoerungen`, `zweiseitiger-handelskauf`
- `bbig-ausbildungsvertrag`, `arbeitnehmerrechte`
- `aida-formel`, `marktformen`

Auffaellig: Der gesamte kaufmaennisch-rechtliche Block hat im Material kaum
Rueckhalt. Entweder ist er in der AP1 tatsaechlich schwach vertreten, oder das
Material bildet ihn nicht ab. Klaerbar nur gegen den KMK-Rahmenlehrplan.

---

## Was als Naechstes zu entscheiden ist

1. Welche der Luecken werden **eigene Kapitel**, welche werden **Abschnitte**
   in bestehenden Kapiteln?
2. Der KMK-Rahmenlehrplan (LF1-LF9) fehlt als Gegenprobe fuer alles jenseits
   der AP1. Er ist oeffentlich verfuegbar.
3. Echte Pruefungsboegen mit Aufgabentexten und Punktzahlen fehlen weiterhin.
   Ohne sie bleiben die Aufgabentypen-Tabellen in `lernfelder/` leer.
