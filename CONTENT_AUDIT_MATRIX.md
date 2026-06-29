# Inhalts-Auditmatrix

Diese Datei ist der Nachweis für die tatsächliche Qualität einzelner Kapitel.
Technische Navigations- oder Altstatus sind kein Ersatz für einen Audit.

## Statuswerte

| Status | Bedeutung |
|---|---|
| `ungeprüft` | Nur Rohmaterial oder historische Angaben vorhanden. |
| `teilgeprüft` | Teile des Audits sind belastbar, mindestens ein Abschluss-Gate ist noch offen. |
| `geprüft` | Alle Gates aus `KAPITELSTANDARD.md` sind dokumentiert und die Checks sind erledigt. |
| `gesperrt` | Kein eigenständiger Inhalt; wird zusammengeführt, als Box geführt oder nicht aufgenommen. |

## Aktiver Eintrag

| Kapitel | Form | Status | Lernpfad | Nächste Aktion |
|---|---|---|---|---|
| `von-neumann` | Kapitel | ungeprüft | IT-Systeme: Von-Neumann-Grundidee → Hardware und Schnittstellen → Betriebssystem, Dateien, Rechte und Virtualisierung | Einordnung, Quellen- und Vergleichsmatrix neu prüfen. |

Alle nicht unten dokumentierten bestehenden Lektionen gelten bis zu ihrem eigenen Audit als
`ungeprüft`. Historische Freigaben, Bewertungen und Review-Texte befinden sich
nur zur Nachvollziehbarkeit in `docs/archiv/`; sie werden nicht automatisch
übernommen.

## Abgeschlossene Audits

### `datenrate-berechnung`

Slug: `datenrate-berechnung`
Kompetenz: Datenmenge, Zeit und Datenrate über eine gemeinsame Einheit
berechnen; bit/s und Byte/s sauber trennen; Brutto-, Netto- und
Durchsatzangaben mit vorgegebenem Wirkungsgrad in Download-, Upload- und
Backup-Zeiten übersetzen.
Form: Kapitel
Status: geprüft
Voraussetzungen → Anschluss: Bit & Byte/Präfixe → Zahlensysteme → Datenmengen
und Übertragungsdauer → Von-Neumann-Grundidee als Start der nächsten
Abhängigkeitskette

Ausbildungsquelle: FIAusbV, KMK-Rahmenlehrplan und BIBB-Umsetzungshilfe als
Rahmen für gemeinsames Grundlagenwissen zu IT-Systemen, Datenmengen,
Arbeitsplatzausstattung und Vernetzung. Die Kapitelentscheidung ist ein
eigenständiges Rechen- und Einordnungskapitel im gemeinsamen Grundlagenpfad.

Fachliche Primärquellen: BIPM, *SI prefixes*, für dezimale Präfixe; NIST,
*Prefixes for binary multiples*, für Byte, MB, GB und die Abgrenzung zu
Binärpräfixen; RFC 6349, *Framework for TCP Throughput Testing*, für
TCP-Durchsatz als Datenmenge pro Zeit, tatsächliche Transferzeit, ideale
Transferzeit und Overhead-Bezug. IEC 80000-13 bleibt als Normkontext in der
Quellenbank, wurde aber nicht als maschineller Faktenbeleg verwendet, weil die
frei prüfbaren NIST-/BIPM-/RFC-Seiten die benötigten Kernaussagen tragen.

Didaktische Vergleiche: Das bereits geprüfte Kapitel
`datenvolumen-berechnung` behandelt Datenmengen und Übertragungsdauer nur mit
vorgegebener effektiver Datenrate. Dieses Kapitel übernimmt deshalb nicht die
Scan- oder Bildrechnung, sondern vertieft Bandbreite, Durchsatz, Brutto/Netto,
Downloadzeit, Backupfenster und die Umkehrformeln. Die pauschale Tabelle mit
Netto-Prozentwerten wurde entfernt; stattdessen gilt didaktisch sauber: In
Rechenaufgaben werden vorgegebene Messwerte oder Wirkungsgrade verwendet, sonst
wird die Idealrechnung ohne zusätzlichen Overhead ausdrücklich benannt.

Lokaler Materialabgleich: `_material_index/AP1_ABGLEICH.md` weist aktuell keine
eigene Aufgabe direkt `datenrate-berechnung` zu. In
`_material_index/extraktion/Prüfung_9.md` kommen Downloadgeschwindigkeit,
Bandbreite und Firewall-Durchsatz als typische Prüfungs- und Datenblattbegriffe
vor. Übernommen wurden nur Themenumfang und Denkoperation; keine geschützten
Aufgaben- oder Lösungstexte.

Geprüfte Kernaussagen (7, mit maschinell prüfbarem Beleg in
`src/content/quellen/belege.json`; `npm run check:sources` grün):

1. `1 Byte = 8 Bit`.
2. SI-Präfixe bezeichnen dezimale Vielfache und Teile von SI-Einheiten.
3. `1 MB = 10⁶ B = 1.000.000 B`.
4. `1 GB = 10⁹ B = 1.000.000.000 B`.
5. RFC 6349 beschreibt TCP-Durchsatz als Datenmenge, die TCP pro Zeiteinheit
   transportiert.
6. Die tatsächliche TCP-Transferzeit ist die Zeit für die Übertragung eines
   Datenblocks über TCP-Verbindungen.
7. Die ideale TCP-Transferzeit wird aus maximal erreichbarem TCP-Durchsatz
   abgeleitet und steht im Zusammenhang mit Layer-1- bis Layer-4-Overheads.

Didaktik, Fehlerfallen und Anwendung geprüft: Einstieg über berufliche
Backup-, Cloud-Sync- und Downloadfälle; vollständige Rechenwege für
Downloadzeit, Backupfenster, benötigte Datenrate, maximale Datenmenge,
WLAN-Brutto/Netto und Standortbackup; Fehlerfallen zu bit/Byte, GB/GiB,
Brutto/Netto, Zeitbasis, Rundung, Download/Upload und Latenz vorhanden. Alle
Beispielrechnungen wurden nachgerechnet, einschließlich 600-GB-Backup
(30.000 s = 8 h 20 min), Cloud-Sync (200 Mbit/s netto), WLAN-Beispiel
(201,5 s) und Standortbackup (20.571,43 s ≈ 5 h 43 min).

Glossar, Quellen und Links geprüft: `Term`-IDs für Datenrate, Durchsatz,
Latenz, Bit, Byte und Bandbreite sind gültig. Quellenkomponente, Quellenbank
und Quellen-Tags enthalten FIAusbV, KMK, BIBB, BIPM, NIST und RFC 6349; nicht
prüfbare Norm-/PDF-Belege wurden nicht als Faktenbelege verwendet. Voraussetzung
Datenmengen/Präfixe und Anschluss an die nächste Landkartenkette sind benannt.

Technische Checks: `npm run check:sources` (27/27 online und Zitate gefunden,
davon 7 für `datenrate-berechnung`), `npm run check:consistency`,
`npm run lint`, `npm run test` (8 Tests) und `npm run build` — alle grün am
2026-06-29.

Entscheidung und offene Punkte: Eigenständiges Kapitel im gemeinsamen
Grundlagenpfad. Keine offenen Punkte für dieses Kapitel.

### `datenvolumen-berechnung`

Slug: `datenvolumen-berechnung`
Kompetenz: Datenmengen für unkomprimierte Scan- und Bilddaten aus Abmessungen,
Auflösung und vorgegebener Farbtiefe bestimmen; SI- und Binärpräfixe sauber
unterscheiden; bei einer vorgegebenen effektiven Datenrate die Übertragungsdauer
berechnen.
Form: Kapitel
Status: geprüft
Voraussetzungen → Anschluss: Bit & Byte/Präfixe → Zahlensysteme → Datenmengen
und Scanrechnung → Datenrate und Downloadzeit

Ausbildungsquelle: FIAusbV, KMK-Rahmenlehrplan und BIBB-Umsetzungshilfe als
Rahmen für das gemeinsame Grundlagenwissen zu IT-Systemen, Daten und Vernetzung.
Die Kapitelentscheidung ist ein eigenständiges Werkzeugkapitel für die
Speicher- und Übertragungsrechnungen im ersten Ausbildungsjahr; es enthält keine
herstellerspezifische oder fachrichtungsspezifische Vertiefung.

Fachliche Primärquellen: BIPM, *SI prefixes*, für die dezimalen Präfixe;
NIST, *Prefixes for binary multiples*, für die online prüfbaren KiB-/MiB-/GiB-
und MB-/GB-Werte sowie die Abgrenzung der Binärpräfixe vom SI. Alle Rechenwege
im Kapitel wurden mit den angegebenen Einheiten selbst nachgerechnet. Die
Kapitelbeispiele verwenden nur ausdrücklich vorgegebene Farbtiefen, Bitraten und
Wirkungsgrade; sie behaupten keine allgemeinen Netz- oder Kompressionsquoten.

Didaktische Vergleiche: Das vorhandene Kapitel `datenrate-berechnung` behandelt
Bandbreite, Durchsatz und Downloadzeit vertieft. Dieses Kapitel bleibt deshalb
bei Datenmengen, Scanrechnung und der Übertragungsdauer mit vorgegebenem Faktor;
es verlinkt auf das Folgekapitel, statt dessen Netzwerklehre zu duplizieren.
Die Reihenfolge Pixel → Bits → Byte → Zieleinheit → Stückzahl macht den
Rechenweg und den Faktor 8 sichtbar.

Lokaler Materialabgleich: `_material_index/AP1_ABGLEICH.md` weist die
Aufgabentypen „Bild, Scan, Auflösung" aus `Prüfung_4`, Aufgabe 3, sowie „Bild"
aus `Prüfung_5`, Aufgabe 1, diesem Kapitel zu. Übernommen wurden nur
Themenumfang, Umrechnungskette und erforderliche Rechendichte; keine geschützten
Aufgaben- oder Lösungstexte.

Geprüfte Kernaussagen (6, mit maschinell prüfbarem Beleg in
`src/content/quellen/belege.json`; `npm run check:sources` grün):

1. SI-Präfixe bezeichnen dezimale Vielfache und Teile von SI-Einheiten.
2. `1 MiB = 2²⁰ B = 1.048.576 B`.
3. `1 MB = 10⁶ B = 1.000.000 B`.
4. `1 GiB = 2³⁰ B = 1.073.741.824 B`.
5. `1 GB = 10⁹ B = 1.000.000.000 B`.
6. Binärpräfixe gehören nicht zum Internationalen Einheitensystem (SI).

Didaktik, Fehlerfallen und Anwendung geprüft: Einstieg über Einheitentrennung;
vollständige Rechenwege für A4-Scan, Übertragungsdauer und Rohdaten/Bitrate;
Fehlerfallen zu Bit/Byte, Präfixreihe, Farbtiefe, Zentimeter/Inch, vorgegebenem
Wirkungsgrad und Zwischenrundung vorhanden. Alle Beispielergebnisse wurden
nachgerechnet, einschließlich der gerundeten A4-Pixelwerte.

Glossar, Quellen und Links geprüft: Alle verwendeten `Term`-IDs sind gültig;
Quellenkomponente, Quellenbank und Quellen-Tags sind auf FIAusbV, KMK, BIBB,
BIPM und NIST eingegrenzt. Die direkte Voraussetzung sowie das Folgekapitel
`datenrate-berechnung` sind im Text klar benannt.

Technische Checks: `npm run check:sources` (20/20 online und Zitate gefunden),
`npm run check:consistency`, `npm run lint`, `npm run test` (8 Tests) und
`npm run build` — alle grün am 2026-06-26.

Entscheidung und offene Punkte: Eigenständiges Kapitel im gemeinsamen
Grundlagenpfad. Das separate, noch ungeprüfte Kapitel `scan-bilddaten` ist als
inhaltliche Doppelung festgestellt, wurde gemäß Einzelkapitelregel aber nicht
verändert. Keine offenen Punkte für dieses Kapitel.

### `zahlensysteme`

Slug: `zahlensysteme`
Kompetenz: Stellenwertsysteme mit Basis 2, 8, 10 und 16 lesen; nichtnegative
ganze Zahlen zwischen diesen Schreibweisen umrechnen; Bit-, Byte-, Hex- und
Oktalbezug in typischen IT-Kontexten einordnen.
Form: Kapitel
Status: geprüft
Voraussetzungen → Anschluss: Bit & Byte/Präfixe → Zahlensysteme → Datenmengen
und Datenraten

Ausbildungsquelle: FIAusbV sowie KMK-Rahmenlehrplan und BIBB-Umsetzungshilfe
als Rahmen für Grundlagen zu IT-Systemen, Daten und Netzwerken. Zahlensysteme
sind dafür Werkzeugwissen, kein eigenständiges Lernfeld.

Fachliche Primärquelle: Python Language Reference, *Integer literals*, als
online prüfbare Sprachspezifikation für Basisangaben, Ziffern und die
Schreibkonventionen `0b`, `0o` und `0x`. Die Umrechnungsbeispiele im Kapitel
sind vollständig über Stellenwerte und Division mit Rest selbst nachgerechnet.

Didaktische Vergleiche: Die Kapitelstruktur setzt zuerst Stellenwert und
Leserichtung, dann die zwei Umrechnungswege und erst danach Hex-, Oktal- und
IPv4-Anwendungen. Das verhindert den verbreiteten Sprung zu Merktricks ohne
Zahlverständnis.

Lokaler Materialabgleich: Die Suche im lokalen Materialindex ergab keine
passende Zahlensystem-Aufgabe. Daher wurden keine Aufgaben- oder Lösungstexte
übernommen.

Geprüfte Kernaussagen (7, mit maschinell prüfbarem Beleg in
`src/content/quellen/belege.json`; `npm run check:sources` grün):

1. Python kann Ganzzahlliterale binär zur Basis 2, oktal zur Basis 8 und
   hexadezimal zur Basis 16 schreiben und verwendet dafür `0b`, `0o` und
   `0x`.
2. Die Hexwerte 10 bis 15 werden mit den Buchstaben A bis F dargestellt;
   Groß- und Kleinschreibung ist gleichwertig.
3. Die formale Python-Grammatik beschreibt Binärliterale mit `0b` oder `0B`
   und anschließenden Binärziffern.
4. Die formale Python-Grammatik beschreibt Oktalliterale mit `0o` oder `0O`
   und anschließenden Oktalziffern.
5. Die formale Python-Grammatik beschreibt Hexadezimalliterale mit `0x` oder
   `0X` und anschließenden Hexziffern.
6. Binärziffern sind `0` und `1`.
7. Oktalziffern reichen von `0` bis `7`.

Didaktik, Fehlerfallen und Anwendung geprüft: Einstieg über Stellenwerte;
vollständige Rechenwege für Binär↔Dezimal und Hex↔Binär/Dezimal; Fehlerfallen
zu Basis, Rest-Leserichtung, führenden Nullen, Hexziffern und Oktalrechten;
Anwendungen für MAC, CSS-Farben, `chmod` und IPv4-Bitmuster vorhanden.

Glossar, Quellen und Links geprüft: Alle verwendeten `Term`-IDs sind gültig;
Quellenkomponente, Quellenbank, Quellen-Tags und Glossar-Verweise sind
integriert. Die jetzt belegte Python-Schreibweise ist im Kapitel als
sprachspezifisches Beispiel formuliert. Voraussetzungen und Anschluss sind
benannt.

Technische Checks: `npm run check:sources` (14/14 online und Zitate gefunden),
`npm run check:consistency`, `npm run lint`, `npm run test` (8 Tests) und
`npm run build` — alle grün am 2026-06-26.

Entscheidung und offene Punkte: Eigenständiges Kapitel im gemeinsamen
Grundlagenpfad. Keine offenen Punkte.

### `prefixe`

Slug: `prefixe`
Kompetenz: SI- und IEC-Binärpräfixe unterscheiden, Datenmengen über Byte
umrechnen und Speicher- von Übertragungsangaben sauber trennen.
Form: Kapitel
Status: geprüft
Voraussetzungen → Anschluss: Bit & Byte → Präfixe → Zahlensysteme sowie Datenmengen und Datenraten

Ausbildungsquelle: FIAusbV sowie KMK-Rahmenlehrplan und BIBB-Umsetzungshilfe
als Rahmen für die rechnerischen Grundlagen beim Planen, Einrichten und
Vernetzen von IT-Systemen (in der Quellenbank und im Kapitel hinterlegt).

Fachliche Primärquellen: BIPM, *SI prefixes* (dezimaler SI-Rahmen); NIST,
*Prefixes for binary multiples* (offizielle Wiedergabe der IEC-Namen und
-Symbole sowie Vergleichswerte).

Didaktische Vergleiche: Die Probeprüfung verlangt eine Umrechnungskette von
Bit über Byte, KiB, MiB und GiB bis TiB. Deshalb setzt das Kapitel auf den
durchgehenden Byte-Zwischenschritt statt auf auswendig gelernte Direktfaktoren.

Lokaler Materialabgleich: `_material_index/extraktion/Prüfung_5.md`, Aufgabe
2, und die zugehörige Lösung: mehrstufige Binärumrechnung bei Bilddaten bis
TiB. Nur Denkoperation und Umfang übernommen, kein geschützter Aufgabentext.

Geprüfte Kernaussagen (7, mit maschinell prüfbarem Beleg in
`src/content/quellen/belege.json`; `npm run check:sources` grün):

1. SI-Präfixe bezeichnen dezimale Vielfache und Teile von SI-Einheiten.
2. `1 MiB = 2²⁰ B = 1.048.576 B`.
3. `1 MB = 10⁶ B = 1.000.000 B`.
4. `1 GiB = 2³⁰ B = 1.073.741.824 B`.
5. `1 GB = 10⁹ B = 1.000.000.000 B`.
6. Die IEC standardisierte Namen und Symbole für Binärpräfixe im Dezember
   1998 für Datenverarbeitung und Datenübertragung.
7. Binärpräfixe gehören nicht zum SI.

Didaktik, Fehlerfallen und Anwendung geprüft: Einstieg mit zwei Präfixreihen;
Tabelle, Driftvergleich und vier vollständige Rechenbeispiele; Fehlerfallen zu
`kB`/`KiB`, Bit/Byte, Einheiten und Anzeigen; Anschluss an Zahlensysteme sowie
Datenmengen und Datenraten vorhanden.

Glossar, Quellen und Links geprüft: gültige `Term`-IDs für Bit, Byte,
Dezimalpräfix, Binärpräfix und Datenrate; Quellenkomponente, Quellenbank und
Quellen-Tags vorhanden; direkte Voraussetzung Bit & Byte sowie Folgekapitel
verlinkt bzw. im Text benannt.

Technische Checks: `npm run check:sources` (7/7 online und Zitate gefunden),
`npm run check:consistency`, `npm run lint`, `npm run test` (8 Tests),
`npm run build` — alle grün am 2026-06-26.

Entscheidung und offene Punkte: Eigenständiges Kapitel im gemeinsamen
Grundlagenpfad. Keine offenen Punkte.

## Pflichtschema für einen Kapitel-Eintrag

```text
Slug:
Kompetenz:
Form:
Status:
Voraussetzungen → Anschluss:

Ausbildungsquelle:
Fachliche Primärquellen:
Didaktische Vergleiche:
Lokaler Materialabgleich:

Geprüfte Kernaussagen (mind. 5, je mit maschinell prüfbarem Beleg in
src/content/quellen/belege.json — Eintrag: { aussage, zitat (wörtlich),
quelleId, fundstelle, abgerufenAm }). Eine Aussage zählt erst als belegt,
wenn `npm run check:sources` grün ist (Quelle erreichbar + Zitat im Quelltext
gefunden):
1.
2.
3.
4.
5.

Didaktik, Fehlerfallen und Anwendung geprüft:
Glossar, Quellen und Links geprüft:
Technische Checks:
Entscheidung und offene Punkte:
```
