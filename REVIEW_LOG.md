# Review Log

> **Status-Uebersicht:** `AP1_STATUS.md` (generiert aus dem Code via `npm run emit:status`).
> Dieses Log ist das **Beleg-/Begruendungsarchiv** der Faktenchecks (Quellen-Matrix,
> Abschnitts-Audit, Aenderungen pro Kapitel) — kein Status-Verzeichnis.

Dieses Log dokumentiert Kapitel, die nach dem neuen Goldstandard formal als
`review-final` freigegeben sind.

## Neustart 2026-06-03

- Aktueller Stand: **4 Kapitel sind nach dem neuen Schema final freigegeben**.
- Grund: Die vorhandenen MDX-Dateien sind teilweise KI-generiert und alte
  Statuswerte wie `ready`, `draft` oder `final` werden nicht mehr als
  Qualitaetsnachweis verwendet.
- `zahlensysteme` ist das erste neue `review-final`-Referenzkapitel.
- `bit-byte` ist nach erneuter Quellen-, Glossar-, Struktur- und
  Aufgabenmodus-Pruefung als `review-final` freigegeben.
- `pki-zertifikate` ist als erstes Sicherheitskapitel nach Glossar-, Quellen-,
  Struktur- und Aufgabenmodus-Pruefung als `review-final` freigegeben.
- `prefixe` ist nach finalem Freigabecheck als Grundlagen-/Rechenkapitel zu
  SI- und Binaerpraefixen als `review-final` freigegeben.

## Aktuelle Freigaben

### prefixe
- Status: `review-final`
- Datum: 2026-06-05
- Scope: Thema steht in `INHALTSVERZEICHNIS_JAHR_1_2.md` als `Praefixe` mit Bezug `Grundlage/Pruefung` und Form `Kapitel`; `CURRICULUM_MAPPING.md` fuehrt `prefixe` als LF2/LF3, Jahr 1; TOC fuehrt `prefixe` in `src/lib/toc/data/grundlagen.ts` als `final`.
- Ergebnis vor Textarbeit: Kapitel darf bestehen bleiben. Die Quellenlage ist fuer SI-/IEC-Faktoren tragfaehig; Audit ergab kleine sichtbare Bereinigungen gegen die Schreibregeln und eine Quellen-ID-Luecke.

#### Quellen-/Benchmark-Matrix

| Bereich | Quellen/Links | Was daraus fachlich folgt | Was unser Kapitel daraus machen muss |
|---|---|---|---|
| Offizielle Ausbildungsquellen | KMK-Rahmenlehrplan Fachinformatiker, FIAusbV, BIBB-Umsetzungshilfe Fachinformatiker | Praefixe sind kein isoliertes Lehrplanwort, aber Werkzeugwissen fuer LF2-Arbeitsplaetze, LF3-Netze, Datenmengen, Speicherauswahl, Datenraten und AP1-nahe Rechnungen. | Als Grundlagenkapitel behalten; sichtbar nicht mit Lehrplan-/AP1-Labels beginnen, sondern als Rechen- und Einheitenkapitel fuehren. |
| Fachliche Primaerquellen | BIPM SI Brochure/SI Prefixes, IEC 80000-13, NIST Binary Prefixes, JEDEC 100B.01, GNU Coreutils `df` | SI-Praefixe sind strikt Zehnerpotenzen; Ki/Mi/Gi/Ti sind Zweierpotenzen; historische binaere K/M/G-Nutzung bei Halbleiterspeicher ist belegt; GNU `df` unterscheidet 1024er- und 1000er-Anzeige per Flag. | Zahlenwerte, Symbole, Historie und OS-Anzeige-Hinweise aus Primaer-/Hersteller-/Toolquellen stuetzen; keine ungenaue Motivation wie "verkauft sich besser" verwenden. |
| Serioese Vergleichsangebote | CS61C IEC/Base-10 Prefixes, IBM Storage Units, TechTarget Mebibyte/Megabyte, Khan Academy Bytes als niedrigschwelliger Bit/Byte-Vorlauf | Gute Angebote trennen zuerst die Tabellenwerte, zeigen dann Drift und rechnen konsequent ueber Byte; sie behandeln KB/KiB als Kontextfalle, nicht als isolierte Begriffsliste. | Lernleiter bleibt: zwei Reihen -> Tabelle -> Drift -> Byte-Zwischenschritt -> Beispiele -> Fehlerfallen; Beispiele erklaeren statt Aufgabenmodus. |
| Pruefungs-/Kataloghinweise | FIAusbV Teil 1, internes Mapping `Grundlage/Pruefung`, Themenlandkarte Reihenfolge Bit/Byte -> Zahlensysteme -> Praefixe -> Datenrate/Datenvolumen | Relevante Stolperstellen sind Faktor 1000/1024, Bit/Byte-Faktor 8, richtige Einheit, Herstellerangabe vs Anzeige und Mischaufgaben Datenrate/Datenmenge. | Stolperstellen erklaerend behalten; sichtbare Begriffe wie AP1, Klausur und IHK-Aufgabe im Lerntext neutralisieren. |
| Eigene Schlussfolgerung | Abgleich aus Scope, Kapiteltext, Quellenbank, Glossar und Benchmarks | Kapitel ist fachlich stark und gehoert in den Grundlagenpfad, aber noch nicht als `review-final` freigegeben, weil der formale Audit erst jetzt dokumentiert wurde. | Kleine Textpraezisierung und Quellenpflege erledigen; danach technische Checks ausfuehren. |

- Linknachweis: Offizielle/fachliche Quellen stehen in `src/content/quellen/sourceBank.ts` und `tagMappings.ts`; zusaetzliche Benchmark-Links: CS61C `https://notes.cs61c.org/content/misc/iec-prefixes/`, IBM `https://www.ibm.com/docs/en/storage-insights?topic=overview-units-measurement-storage-data`, TechTarget `https://www.techtarget.com/searchstorage/definition/mebibyte-MiB`, Khan Academy `https://www.khanacademy.org/computing/in-class-11-informatics-practices/x76bb6fb98a3e6cac%3Acomputer-system/x76bb6fb98a3e6cac%3Acomputer-memory/a/byte-sized-bits`.

#### Abschnitts-Audit

| Abschnitt | Faktisch belegt? | Ohne Vorwissen verstaendlich? | Richtige Reihenfolge? | Umfang passend? | Aenderung noetig? |
|---|---|---|---|---|---|
| Einstieg | ja, durch Bit/Byte-Vorlauf, SI/IEC und Ausbildungsrahmen plausibel | ja | ja | ja | sichtbares `Klausuraufgabe` neutralisiert |
| Grundbegriffe | ja: SI-Praefixe, Binaerpraefixe, Byte, Hersteller-/Anzeige-Kontext | ja, Zwei-Reihen-Modell und Analogie tragen | ja | ja | `dezimalpraefix` als Term markiert; IEC-Historie praezisiert |
| Verfahren/Rechenweg | ja: alles ueber Byte; Faktoren `10^n`, `2^n`, Faktor 8 stimmen | ja, Schrittfolge ist wiederholbar | ja | ja | sichtbares `Pruefung` neutralisiert |
| Beispiele | ja: 500 GB -> 465,66 GiB; 2.048.000 bit -> 250 KiB; 1 GiB bei 16 Mbit/s -> ca. 536,87 s | ja | ja | ja | Aufgaben-/AP1-Label entfernt, Rechenwege unveraendert |
| Fehlerfallen | ja: kB/KiB, k/K, Bit/Byte, gemischte Rate/Menge, Einheit, OS-Anzeige, Folgepraefixe | ja | ja | ja | Microsoft/macOS-Hartbehauptung zu allgemeiner OS-Anzeige geglaettet; GNU-Quelle ergaenzt |
| Transfer/Anschluss | ja: Speicher, Datenrate, OS-Anzeigen, Datenvolumen | ja | ja | ja | nein |
| Quellen/Glossar | ja: verwendete Term-IDs vorhanden; Quellenbasis in `sourceBank.ts` ausgebaut | ja | ja | ja | `lessonSourceIds.prefixe`, IBM- und GNU-Quellen ergaenzt |

- Kleine Bereinigung im Lerntext: sichtbare Pruefungs-/Aufgabenlabels neutralisiert (`Klausuraufgabe`, `Pruefung`, `AP1-Muster`, `IHK-Aufgaben`, `Klausuren`), IEC-Historie genauer formuliert, unbelegte Motivation bei Massenspeicherangaben entfernt, OS-Anzeige-Hinweis quellennaeher formuliert.
- Quellenpflege: `prefixe` in `lessonSourceIds` hinterlegt; neue Quellen-IDs `ibm-storage-units` und `gnu-coreutils-df` ergaenzt.
- Finaler Freigabecheck: Scope, Quellen-/Benchmark-Matrix, Abschnitts-Audit, zentrale Fakten, Rechenwege, Glossar-Terms, Quellen-Tags und sichtbare Label-Regeln geprueft; keine offenen Blocker.
- Glossar: 4 verwendete `<Term id="...">` geprueft, 0 fehlende Glossar-Eintraege.
- Quellen: 9 Quellen-IDs geprueft, 0 fehlende Eintraege in `sourceBank.ts`; Quellenbasis umfasst KMK, FIAusbV, BIBB, IEC 80000-13, NIST Binary Prefixes, BIPM SI Prefixes, JEDEC 100B.01, IBM Storage Units und GNU Coreutils `df`.
- Technik: `npm.cmd run lint` und `npm.cmd run build` erfolgreich.
- Ergebnis: `prefixe` ist als `review-final` freigegeben.

## Arbeitsstand ready, noch nicht final

### datenvolumen-berechnung
- Status: `teilgeprueft`
- Datum: 2026-06-19
- Ergebnis: LF2/LF3-nahes Rechenkapitel zu Datenmengen, Scan-/Bilddaten,
  Datenraten, Übertragungsdauer, Brutto/Netto-Wirkungsgrad und Video-Bitrate
  auditiert und aus dem sichtbaren Aufgabenmodus herausgelöst.
- Umfang: Bit/Byte, SI-/Binärpräfixe, cm → Inch → Pixel → Bit → Byte,
  Datenmenge/Datenrate/Zeit, Wirkungsgrad, Roh-Bitrate und Ziel-Bitrate; keine
  Codec-Interna oder geschützten Originalaufgaben im Lerntext.
- Didaktik: Beispiele bleiben als erklärende Rechenwege erhalten; der alte
  Übungsblock wurde in einen kurzen Selbstcheck mit direkten Kurzlösungen
  umgebaut.
- Glossar: Verwendete Term-IDs geprüft; falsche Umlaut-IDs für
  Dezimal-/Binärpräfixe auf vorhandene ASCII-IDs korrigiert.
- Quellen: Quellenzuordnung ergänzt; Quellenbasis umfasst KMK, FIAusbV, BIBB,
  BIPM SI Prefixes, NIST Binary Prefixes, IEC 80000-13, NIST IR 8354, RFC 791,
  RFC 9293, RFC 9110, ISO/IEC 10918-1, W3C PNG, ITU-T H.264 und ITU-T G.1010.
- AP1-Materialabgleich: `_material_index/AP1_ABGLEICH.md` zeigt passende
  legale Abgleichpunkte zu Scan-/Bilddaten und Datenmengenrechnung; nichts aus
  geschützten Aufgaben wurde nach `src` kopiert.
- Technik: `npm.cmd run lint` erfolgreich. `npm.cmd run build` startet wegen
  fehlendem Windows-`py`-Launcher nicht; ersatzweise erfolgreich ausgeführt:
  Konsistenzprüfung mit gebündeltem Python, `npm.cmd exec -- tsc -b` und
  `npm.cmd exec -- vite build`.

### logikgatter
- Status: `nicht als eigenes Kapitel freigegeben`
- Datum: 2026-06-03
- Ergebnis: Kapitel wurde als Grundlagen-Luecke fuer Boolesche Algebra, Wahrheitswerte, UND/ODER/NICHT, Wahrheitstabellen, einfache Schaltungen, De-Morgan-Regeln und IT-Bezuege angelegt, danach aber fachlich zurueckgestellt.
- Korrektur: Logikgatter sind im aktuellen Fachinformatiker-Rahmen nicht als eigenes Kernkapitel belegt. Das Kapitel darf bis zum Struktur-Audit nicht als `ready` oder `final` behandelt werden.
- Abschluss: Hardware-Gatter bleiben kein eigenes grosses Kapitel; der Software-Anteil gehoert als kurzer Abschnitt "Boolesche Bedingungen" zu `pseudocode-einstieg`.
- Didaktik: Kein Aufgabenmodus; nur ein kompakter Mini-Selbstcheck und erklaerende Schrittfolge im Lernfluss.
- Glossar: Verwendete Kernbegriffe fuer Boolesche Algebra, Logikgatter, Wahrheitswert, Wahrheitstabelle, UND/ODER/NICHT und De Morgan wurden ergaenzt.
- Quellen: Quellenbasis umfasst KMK, FIAusbV, BIBB, OpenStax zu Boolean Operations und Truth Tables, NIST DADS zu NAND sowie Texas Instruments Logic Guide.
- Technik: `npm.cmd run lint` und `npm.cmd run build` erfolgreich.

### stamm-bewegungsdaten
- Status: `ready`
- Datum: 2026-06-03
- Ergebnis: LF5/LF8-nahes Grundlagenkapitel zu Stammdaten, Bewegungsdaten, Bestandsdaten, Referenzdaten, Datenqualitaet und Datenschutz angelegt.
- Umfang: Definitionen, ERP/CRM-/Support-/Lager-Beispiele, Abgrenzung von Bewegung und Bestand, typische Denkfehler, Mini-Selbstcheck und LF5/LF8-Einordnung.
- Didaktik: Kein Aufgabenmodus; nur ein kompakter Mini-Selbstcheck im Lernfluss.
- Glossar: Neue Begriffe fuer Stammdaten, Bewegungsdaten, Bestandsdaten, Datenart, Datenqualitaet, Referenzdaten und Transaktionsdaten ergaenzt.
- Quellen: Quellenbasis umfasst KMK, FIAusbV, BIBB, SAP Help Portal, Microsoft Learn, IBM und DSGVO.
- Technik: `npm.cmd run lint` und `npm.cmd run build` erfolgreich.

### cpu-ram-speicher
- Status: `ready`
- Datum: 2026-06-03
- Ergebnis: LF2-Hardwaregrundlage zu CPU, RAM, Massenspeicher, SSD, HDD, NVMe, Cache, Taktfrequenz, Mainboard-Kompatibilitaet und Auswahl nach Kundenwunsch ueberarbeitet.
- Umfang: Komponentenmodell, Faktenkern, CPU-Kennwerte, RAM-Auswahl, Massenspeichervergleich, Zusammenspiel beim Programmstart, typische Fehler und Mini-Selbstcheck.
- Didaktik: Alter Draft mit volatilen Markt-/Preiswerten und Pruefungssprache wurde zu einem langlebigen Kompendiumskapitel ohne Aufgabenmodus umgebaut.
- Glossar: Neue Begriffe fuer Cache, Massenspeicher und Taktfrequenz ergaenzt; CPU, RAM, HDD, SSD, NVMe und Mainboard auf das Grundlagenkapitel verlinkt.
- Quellen: Quellenbasis umfasst KMK, FIAusbV, BIBB, IBM, Intel, Microsoft Support, NVM Express und Crucial.
- Technik: `npm.cmd run lint` und `npm.cmd run build` erfolgreich.

## pki-zertifikate
- Status: `review-final`
- Datum: 2026-06-03
- Ergebnis: Kapitel ist als Referenz fuer PKI, Public/Private Key, X.509-Zertifikate, CA-Ketten, Validierung und Widerruf im Sicherheitsbereich freigegeben.
- Umfang: PKI-Zweck, Schluesselpaar, Zertifikatsinhalt, Certificate Authority, Root-CA, Intermediate-CA, Endzertifikat, Trust Chain, Validierung, CRL/OCSP und typische Einsatzorte wie HTTPS, VPN, WLAN-Enterprise, E-Mail- und Software-Signaturen.
- Didaktik: Kapitel bleibt Kompendiumstext ohne Aufgabenmodus; nur ein kompakter Mini-Selbstcheck und erklaerende Fehlerfallen bleiben im Lernfluss.
- Glossar: 13 verwendete `<Term id="...">` geprueft, 0 fehlende Glossar-Eintraege.
- Quellen: 6 Quellen-IDs geprueft, 0 fehlende Eintraege in `sourceBank.ts`; Quellenbasis umfasst RFC 5280, RFC 6960, RFC 8446, BSI Kryptografie, BSI TR-02102-1 und BIBB.
- Technik: `npm.cmd run lint` und `npm.cmd run build` erfolgreich.

## bit-byte
- Status: `review-final`
- Datum: 2026-06-03
- Ergebnis: Kapitel ist als Referenz fuer Bit, Byte, 8-Bit-Wertebereich, b/B-Falle, Speicher/Datenrate und Zeichenkontext im Fachinformatiker-Grundlagenpfad freigegeben.
- Umfang: Bit als kleinste Ja/Nein-Information, Byte als 8-Bit-Gruppe, 2^n-Musterlogik, unsigned Bereich 0 bis 255, b/B-Umrechnung, Datenmenge vs. Datenrate, SI-/Binaerpraefixe und begrenzter Ausblick auf ASCII/UTF-8.
- Didaktik: Alte Uebungs- und Klausurmodus-Bloecke wurden entfernt; im Lerntext bleiben nur erklaerende Mini-Selbstchecks und kompakte Fehlerfallen.
- Glossar: 8 verwendete `<Term id="...">` geprueft, 0 fehlende Glossar-Eintraege.
- Quellen: 9 Quellen-IDs geprueft, 0 fehlende Eintraege in `sourceBank.ts`; Quellenbasis umfasst KMK, FIAusbV, BIBB, NIST IR 8354, IEC 80000-13, NIST Binary Prefixes, BIPM SI Prefixes, ANSI ASCII und Unicode UTF-8.
- Technik: `npm.cmd run lint` und `npm.cmd run build` erfolgreich.

### Re-Audit 2026-06-05

- Scope: Thema steht in `INHALTSVERZEICHNIS_JAHR_1_2.md` als `Bit und Byte` mit Bezug `Grundlage/Pruefung` und Form `Kapitel`; `CURRICULUM_MAPPING.md` fuehrt `bit-byte` als LF2/LF3, Jahr 1, Status `review-final`; TOC setzt `bit-byte` in `src/lib/toc/data/grundlagen.ts` auf `final`.
- Ergebnis vor Textarbeit: Kapitel darf bestehen bleiben; Quellenlage und Glossar sind tragfaehig. Das Audit ergab nur kleine sichtbare Bereinigungen gegen die Schreibregeln, keine fachliche Neufassung.

#### Quellen-/Benchmark-Matrix

| Bereich | Quellen/Links | Was daraus fachlich folgt | Was unser Kapitel daraus machen muss |
|---|---|---|---|
| Offizielle Ausbildungsquellen | KMK-Rahmenlehrplan Fachinformatiker, FIAusbV, BIBB-Umsetzungshilfe Fachinformatiker | Bit/Byte ist kein isoliertes Lehrplanwort, aber notwendiges Werkzeugwissen fuer LF2 IT-Systeme, LF3 Netzwerke und rechnerische Grundlagen in den ersten 18 Monaten. | Als Grundlagenkapitel behalten; Umfang auf Bit, Byte, Wertebereich, b/B-Falle, Speicher/Datenrate und kurzen Zeichenkontext begrenzen. |
| Fachliche Primaerquellen | NIST IR 8354, IEC 80000-13, NIST Binary Prefixes, BIPM SI Prefixes, ANSI ASCII, Unicode UTF-8 | Belegt sind 8-Bit-Byte im heutigen Kontext, `2^n`-Musterlogik, 0-bis-255-Bereich fuer unsigned 8 Bit, dezimale SI-Praefixe, binaere IEC-Praefixe sowie ASCII/UTF-8-Abgrenzung. | Harte Fakten und Zahlenwerte bleiben aus Primaer-/Standardquellen; keine Lernseite als Faktenanker. |
| Serioese Vergleichsangebote | Khan Academy Bits/Bytes, Stanford CS101 Bits and Bytes, Computer Science Field Guide Data Representation, Teach Computing Binary Digits/Representing Text | Gute Angebote starten sehr niedrigschwellig mit zwei Zustanden, gruppieren danach zu Byte/Wertebereich und verbinden Bits spaeter mit Text oder Datenrepresentation. | Unsere Lernleiter bleibt Bit -> Byte -> 8 Bit -> b/B -> Datenmenge/Datenrate -> Zeichen; deutsch, kompakt, ohne Aufgabenbank. |
| Pruefungs-/Kataloghinweise | FIAusbV/BIBB fuer AP1-Rahmen; internes Mapping `Grundlage/Pruefung`; keine geschuetzten Originalaufgaben | Typische Stolperstellen sind Einheitenwechsel, Faktor 8, 0-basierter Wertebereich, MB/MiB und Brutto/Netto-Durchsatz. | Stolperstellen erklaerend einbauen; sichtbaren Pruefungsmodus und Labels vermeiden. |
| Eigene Schlussfolgerung | Abgleich aus Scope, Quellenbank, Kapiteltext, Glossar und Benchmarks | Faktenlage ist stabil; das Kapitel ist inhaltlich A+-nah. Kleinster Regelverstoss waren sichtbare Meta-/Pruefungslabels im Lerntext. | Keine Neufassung; nur Labels neutralisieren und Audit dokumentieren. |

- Linknachweis: Offizielle und fachliche Links stehen im Kapitel und in `src/content/quellen/sourceBank.ts`; Benchmark-Links: Khan Academy `https://www.khanacademy.org/computing/in-class-11-informatics-practices/x76bb6fb98a3e6cac%3Acomputer-system/x76bb6fb98a3e6cac%3Acomputer-memory/a/byte-sized-bits`, Stanford CS101 `https://stanford.edu/class/cs101/bits-bytes.html`, Computer Science Field Guide `https://www.csfieldguide.org.nz/en/chapters/data-representation/numbers/`, Teach Computing `https://teachcomputing.org/curriculum/key-stage-3/representations-from-clay-to-silicon/binary-digits`.

#### Abschnitts-Audit

| Abschnitt | Faktisch belegt? | Ohne Vorwissen verstaendlich? | Richtige Reihenfolge? | Umfang passend? | Aenderung noetig? |
|---|---|---|---|---|---|
| Einstieg | ja, durch NIST/IEC und Ausbildungsrahmen plausibel | ja, startet mit 0/1-Mustern und Lernkette | ja | ja | nein |
| Grundbegriffe | ja: Bit, Byte, Nibble, Datenrate, Praefixe, ASCII | ja, Definitionen und Analogie sind niedrigschwellig | ja | ja | kleine Label-Bereinigung erledigt |
| Verfahren/Rechenweg | ja: `2^n`, Faktor 8, Zeitformel und TB/GiB-Rechnung stimmen | ja, Schrittfolgen sind wiederholbar | ja | ja | nur sichtbare Aufgaben-/Pruefungswoerter neutralisiert |
| Beispiele | ja | ja, Beispiele erklaeren statt zu simulieren | ja | ja | Tabellenkopf `Aufgabe` zu `Check` geaendert |
| Fehlerfallen | ja: b/B, Off-by-one, KB/KiB, UTF-8, Brutto/Netto | ja | ja, direkt nach Kernstoff und kompakt am Ende | ja | nein |
| Transfer/Anschluss | ja: Zahlensysteme, Zeichenkodierung, Durchsatz/Datenrate | ja | ja | ja | `Zahlensysteme-Vertiefung` zu `Zahlensysteme` geglaettet |
| Quellen/Glossar | ja: 9 Quellen-IDs vorhanden, 8 Term-IDs vorhanden | ja | ja | ja | nein |

- Kleine Bereinigung im Lerntext: Spalte `Stufe` samt `Pflicht`/`Vertiefung` entfernt, einzelne sichtbare Pruefungs-/Aufgabenlabels neutralisiert (`AP1`, `AP1-Aufgaben`, `Pruefungsannahme`, Tabellenkopf `Aufgabe`, `Pflichtteil`, `Zahlensysteme-Vertiefung`). Fakten, Quellen, Rechenwege und Glossar unveraendert.
- Ergebnis: `bit-byte` bleibt `review-final`.
- Technik: `npm.cmd run lint` und `npm.cmd run build` erfolgreich.

## zahlensysteme
- Status: `review-final`
- Datum: 2026-06-03
- Ergebnis: Kapitel ist als Referenz fuer Zahlensysteme im Fachinformatiker-Grundlagenpfad freigegeben.
- Umfang: Stellenwertsystem, Binaer/Dezimal, Hex/Nibble, Oktal/chmod, MAC-/CSS-/IPv4-Bruecke, typische Fehlerfallen und kurze Ausblicke auf Datentyp-Kontext.
- Didaktik: Aufgaben-/Trainer-Elemente wurden auf dezente Selbstchecks und erklaerende Werkzeuge reduziert; kein Pruefungsmodus im Lernkapitel.
- Glossar: 30 verwendete `<Term id="...">` geprueft, 0 fehlende Glossar-Eintraege.
- Quellen: 10 Quellen-IDs geprueft, 0 fehlende Eintraege in `sourceBank.ts`; Quellenbasis umfasst KMK, FIAusbV, BIBB, NIST, IEC, POSIX, RFC 9542, W3C CSS Color 4, RFC 4632 und IEEE 754.
- Technik: `npm.cmd run lint` und `npm.cmd run build` erfolgreich.
- Re-Audit 2026-06-05: Scope, Quellen-/Benchmark-Matrix und Abschnitts-Audit erneut geprueft. Kleine Bereinigung im Lerntext: sichtbare Labels `Pflicht`, `Vertiefung` und `Muss sitzen` entfernt; Fakten, Rechenwege, Quellen und Glossar unveraendert stimmig. `npm.cmd run lint` und `npm.cmd run build` erfolgreich.
- Re-Audit 2026-07-03: Externer Benchmark und Aufgabenabgleich nach PROJEKT.md-Gates abgeschlossen. Vertrauen in `src/lib/audit/status.ts` auf `geprueft` angehoben; Details in `AP1_AUDIT_MATRIX.md`. Quellenbank-Detail zu CSS-Farben auf 8-Bit-Komponenten praezisiert. Unabhaengiger Pruef-Pass bleibt wegen Rechenkapitel in QUEUE.md Abschnitt 2b offen.
- P0-Korrektur 2026-07-13 nach unabhängigem Prüf-Pass: fünf nicht auflösbare Umlaut-Term-ID-Vorkommen auf `binaersystem`, `binaerzahl` und `fuehrende-null` korrigiert; unbelegte Mehrheitsbehauptung zu `chmod 755` entfernt; LF2-Manifest und Review-Metadaten synchronisiert; kapitelbezogener Glossar-ID-Test ergänzt. Erneuter unabhängiger Prüf-Pass bleibt in `QUEUE.md` Abschnitt 2b offen.

## Historische Freigaben

Die folgenden Eintraege sind nur noch Projektgeschichte. Sie zaehlen **nicht**
als aktuelle Freigabe nach dem neuen Goldstandard.

## zahlensysteme historisch
- Status: historisch final, neu `review-offen`
- Datum: 2026-06-01
- Ergebnis: Kapitel ist als Goldstandard fuer Zahlensysteme, Umrechnungen, Quellen, Glossar und Uebungsdosierung freigegeben.
- Nacharbeit: Lernspur auf Stellenwert, Binaer/Dezimal, Hex/Nibble, Oktal/chmod und IPv4-Bruecke gestrafft; Zusatzkontexte sichtbar vom Kern getrennt; Glossar-Tags erweitert; Quellenliste auf belastbare Fachquellen bereinigt.

## bit-byte historisch
- Status: historisch final, neu `review-offen`
- Datum: 2026-06-01
- Ergebnis: Kapitel ist als Goldstandard fuer Bit, Byte, 8-Bit-Wertebereich, b/B-Falle, Speicher/Datenrate, Quellen, Glossar und Uebungsdosierung freigegeben.
- Nacharbeit: Lernspur auf Bit -> Byte -> 8 Bit = 256 Werte -> b/B -> Speicher/Datenrate -> Zeichen als Bitmuster gestrafft; Fehlerfallen dezent eingebaut; Uebungen nach leicht, mittel und Klausurtyp ergaenzt; Quellen auf IEC/NIST/BIPM/ANSI fokussiert.
