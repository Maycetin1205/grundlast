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
| `linux-chmod` | Kapitel | ungeprüft | IT-Systeme: Betriebssystem/Dateien → Rechte → Virtualisierung | Einordnung, Quellen- und Vergleichsmatrix neu prüfen. |

Alle nicht unten dokumentierten bestehenden Lektionen gelten bis zu ihrem eigenen Audit als
`ungeprüft`. Historische Freigaben, Bewertungen und Review-Texte befinden sich
nur zur Nachvollziehbarkeit in `docs/archiv/`; sie werden nicht automatisch
übernommen.

## Abgeschlossene Audits

### `dateisysteme`

Slug: `dateisysteme`
Kompetenz: Dateisysteme als Organisationsschicht zwischen Speicherblöcken und
Dateien erklären; FAT32, exFAT, NTFS, ext4 und APFS nach Plattform,
Einzeldateigröße, Rechtemodell, Integritätsschutz und Einsatzfall unterscheiden;
für USB-Stick, Windows-Client, Linux-Server und Mac-Systemvolume eine begründete
Wahl treffen.
Form: Kapitel
Status: geprüft
Voraussetzungen → Anschluss: Hardware und Schnittstellen → Dateisysteme →
Linux-Dateirechte und Virtualisierung

Ausbildungsquelle: FIAusbV, KMK-Rahmenlehrplan und BIBB-Umsetzungshilfe als
Rahmen für LF2, in dem Arbeitsplätze nach Kundenwunsch ausgestattet, IT-Systeme
eingerichtet und betriebliche Anforderungen begründet werden. Das Kapitel bleibt
ein eigenständiges Grundlagenkapitel, weil die Wahl des Dateisystems direkt an
Massenspeicher und Betriebssystem anschließt und spätere Themen zu Rechten,
Backup, Virtualisierung und Serverbetrieb vorbereitet.

Fachliche Primärquellen: Microsoft Learn, *File System Functionality
Comparison*, für FAT32-Grenze, NTFS/FAT32-Vergleich, Journaling- und
Sicherheitsachsen; Microsoft Learn, *NTFS Overview*, für NTFS als
Windows-Dateisystem mit Transaktionslog und ACLs; Linux Kernel Documentation zu
ext4-Inodes, `inode.i_block`/Extents und Journal (jbd2) für Inodes, Extent Tree
und Journal; Apple Developer, *About Apple File System*, als prüfbare JSON-
Variante der Apple-Dokumentation für APFS, Clones, Snapshots, Space Sharing und
Sparse Files; POSIX `chmod` als Anschlussquelle für Dateimodus-Bits und
Rollen/Rechte. Nicht prüfbare PDF-/JS-Anker wurden nicht als Faktenbelege
gezählt.

Didaktische Vergleiche: Das Vorgängerkapitel `hardware-schnittstellen` endet bei
Massenspeicher, Schnittstellen und Arbeitsplatzpassung. Dieses Kapitel übernimmt
nur die logische Organisation auf dem Datenträger und verzichtet bewusst auf
versionsabhängige theoretische Maximalgrößen, weil sie prüfungsdidaktisch weniger
tragfähig sind als Plattform, FAT32-Einzeldateilimit, Rechte und Integrität. Das
Folgekapitel `linux-chmod` vertieft die Rechteachse; `virtualisierung` kann
danach Dateisystemwahl für VM-Images und Snapshots wieder aufnehmen.

Lokaler Materialabgleich: `_material_index/extraktion/Prüfung_4.md` enthält in
Aufgabe 2 f) einen tabellarischen Aufgabentyp zu FAT32, NTFS, APFS und EXT4 mit
Einsatzzwecken. Übernommen wurden nur Themenumfang und Denkoperation:
Dateisysteme anhand Einsatzgebiet/Plattform begründen und nicht als
Detail-Spezifikation auswendig lernen. Geschützte Aufgaben- oder Lösungstexte
wurden nicht übernommen.

Geprüfte Kernaussagen (10, mit maschinell prüfbarem Beleg in
`src/content/quellen/belege.json`; `npm run check:sources` grün):

1. FAT32 hat in Microsofts Dateisystemvergleich ein maximales Einzeldatei-Limit
   von 4 GiB.
2. NTFS verbessert die Zuverlässigkeit durch ein transaktionsbasiertes Log und
   Checkpoint-Informationen.
3. NTFS unterstützt detaillierte Berechtigungen auf Dateien und Ordnern über
   Access Control Lists.
4. In Unix-ähnlichen Dateisystemen speichert der Inode Metadaten einer Datei;
   der Name liegt im Verzeichniseintrag.
5. ext4 ersetzt die ältere Blockabbildung für Dateien durch einen Extent Tree.
6. ext4 verwendet ein Journal, um bei Systemabstürzen vor
   Metadaten-Inkonsistenzen zu schützen.
7. APFS ersetzt HFS Plus als Standard-Dateisystem für iOS 10.3 und neuer sowie
   macOS High Sierra und neuer.
8. APFS unterstützt Cloning, Snapshots, Space Sharing, Fast Directory Sizing,
   Atomic Safe-Save und Sparse Files.
9. APFS-Clones belegen beim Erstellen keine zusätzlichen Datenblöcke.
10. Bei APFS-Clones werden Änderungen an anderer Stelle geschrieben, während
    unveränderte Blöcke geteilt bleiben.

Didaktik, Fehlerfallen und Anwendung geprüft: Einstieg über typische
Kundensituationen; Archivmodell als mentale Brücke; Grundprinzip über Blöcke,
Metadaten, Rechte und Crash-Schutz; Vergleichstabelle mit prüfungsnahen Achsen
statt unzuverlässiger Zahlenlisten; Einzeldarstellung von FAT32, NTFS, ext4 und
APFS; Auswahlverfahren in sechs Schritten; Szenariotabelle; Beispiel zur
5,4-GB-Datei auf FAT32; Serverbeispiel Windows/NTFS gegen Linux/ext4;
Fehlerfallen zu FAT32/exFAT, Journaling/Backup, Rechten, NTFS-Austauschformat,
APFS und Formatieren vorhanden. Die einzige explizite Rechengrenze wurde geprüft:
4 GiB entspricht rund 4,29 GB und liegt unter 5,4 GB, daher scheitert die
Beispieldatei unabhängig von freier Gesamtkapazität.

Glossar, Quellen und Links geprüft: `Term`-IDs für Dateisystem, MFT, Inode,
Journaling, Copy-on-Write und Dateirechte sind gültig. Quellenbank,
Quellen-Tags und sichtbare Quellen enthalten FIAusbV, KMK, BIBB, Microsoft
Learn, Linux Kernel Documentation, Apple Developer und POSIX. Das Kapitel benennt
den Anschluss an `linux-chmod` und danach Virtualisierung.

Technische Checks: `npm run check:sources` (65/65 online und Zitate gefunden,
davon 10 für `dateisysteme`), `npm run check:consistency`, `npm run lint`,
`npm run test` (8 Tests) und `npm run build` — alle grün am 2026-06-29.

Entscheidung und offene Punkte: Eigenständiges Kapitel im gemeinsamen
Grundlagenpfad. Keine offenen Punkte für dieses Kapitel. Nächstes aktives
Kapitel gemäß Landkarte: `linux-chmod`.

### `hardware-schnittstellen`

Slug: `hardware-schnittstellen`
Kompetenz: Hardware-Anforderungen aus Szenarien ableiten; CPU, RAM,
Massenspeicher und Mainboard auf Passung prüfen; USB-C, USB4, Thunderbolt,
HDMI, DisplayPort, SATA, NVMe, PCIe und Peripherie unterscheiden; Docking-,
Monitor- und Multifunktionsgeräte-Setups technisch und wirtschaftlich
begründen.
Form: Kapitel
Status: geprüft
Voraussetzungen → Anschluss: CPU, RAM und Massenspeicher → Hardware und
Schnittstellen → Dateisysteme, Dateirechte und Virtualisierung

Ausbildungsquelle: FIAusbV, KMK-Rahmenlehrplan und BIBB-Umsetzungshilfe als
Rahmen für LF2, in dem Arbeitsplätze nach Kundenwunsch ausgestattet werden. Das
Kapitel bleibt ein eigenständiges Grundlagenkapitel, weil es nach der
Komponentenlehre die konkrete Passung von Schnittstellen, Peripherie,
Beschaffung und Ergonomie prüfungsnah zusammenführt.

Fachliche Primärquellen: USB-IF, *USB4 Specification*, *USB Type-C Cable and
Connector Specification* und *USB Charger/USB Power Delivery*, für USB-C als
Steckerform, USB4-Datenraten und USB-PD; Thunderbolt Technology FAQ für
Thunderbolt über USB-C; VESA, *DisplayPort 2.1 Specification*, für DisplayPort
über native Kabel, USB-C Alt Mode, USB4-Tunneling und DP80; HDMI Licensing
Administrator für HDMI 2.2, 8K@60, 4K@120 und 96 Gbit/s; NVM Express,
*Specifications*, für NVMe als Protokoll über mehrere Transporte und M.2 als
separate Bauform. DGUV Information 215-410 bleibt als offizieller
Ergonomieanker in der Quellenbasis.

Didaktische Vergleiche: Das Vorgängerkapitel `cpu-ram-speicher` erklärt CPU,
RAM, SSD/HDD, NVMe und M.2 grundsätzlich. Dieses Kapitel wiederholt diese
Bausteine nur so weit, wie sie für Auswahl- und Kompatibilitätsentscheidungen
nötig sind, und verschiebt den Fokus auf Schnittstellen, Docks, Monitore,
Peripherie, Druckkosten, Kabel- und Versionsfallen. Der Anschluss an
`dateisysteme` startet den nächsten Landkartenblock Betriebssystem, Dateien,
Rechte und Virtualisierung.

Lokaler Materialabgleich: `_material_index/AP1_ABGLEICH.md` ordnet
`Prüfung_5`, Aufgabe 2, mit USB-, Schnittstellen- und Druckerbezug diesem
Kapitel zu. Zusätzlich bestätigen die Extraktionen zu `Prüfung_4` typische
Aufgabentypen zu Schnittstellenbezeichnung, Monitoranschluss und
barrierefreier Arbeitsplatzhardware. Übernommen wurden nur Themenumfang und
Denkoperationen: Standards erkennen, Peripherie passend anschließen,
USB-Versionen/Druckeranforderungen vergleichen und Arbeitsplatzeignung
begründen. Geschützte Aufgaben- oder Lösungstexte wurden nicht übernommen.

Geprüfte Kernaussagen (11, mit maschinell prüfbarem Beleg in
`src/content/quellen/belege.json`; `npm run check:sources` grün):

1. Die BIBB-Umsetzungshilfe ordnet Fachinformatiker/Fachinformatikerin in eine
   modernisierte Ausbildungsordnung mit komplexeren Anwendungen, Daten,
   Systemen und Netzen ein.
2. USB4 baut auf USB 3.2 und USB 2.0 auf, basiert auf dem
   Thunderbolt-Protokoll und ermöglicht mehrere gleichzeitige Daten- und
   Displayprotokolle.
3. USB4 kann über USB-C-Kabel laufen und erreicht mit entsprechend zertifizierten
   Kabeln bis zu 80 Gbit/s.
4. USB Type-C beschreibt unter anderem eine reversible Steckerorientierung und
   Kabelrichtung; der Stecker allein garantiert keine konkrete Datenrate.
5. USB Power Delivery Revision 3.1 ermöglicht bis zu 240 W Leistung über voll
   ausgestattete USB-C-Kabel und -Stecker.
6. Thunderbolt ergänzt USB-C um Thunderbolt-Verbindungen mit 40, 80 oder
   120 Gbit/s und DisplayPort über einen USB-C-Port.
7. DisplayPort kann nativ, über DisplayPort Alt Mode am USB-C-Stecker oder
   getunnelt über USB4 übertragen werden.
8. VESA-zertifizierte DP80-Kabel unterstützen vier Lanes mit UHBR20 und damit
   maximal 80 Gbit/s Durchsatz.
9. HDMI 2.2 wird von HDMI LA mit unkomprimiertem 8K@60Hz und 4K@120Hz
   beschrieben.
10. HDMI LA nennt für HDMI 2.2 eine Bandbreite bis 96 Gbit/s.
11. NVMe beschreibt, wie Host-Software mit nichtflüchtigem Speicher über mehrere
   Transporte kommuniziert; M.2 ist davon getrennt eine mögliche Bauform.

Didaktik, Fehlerfallen und Anwendung geprüft: Einstieg über konkrete
Beschaffungsszenarien; vier Auswahlfragen Leistung, Kompatibilität,
Erweiterbarkeit und Standard; Tabellen zu CPU/RAM/Massenspeicher und
Schnittstellen; USB-C/TB-Falle; Docking-Beispiel mit grober
Display-Bandbreitenrechnung; Multifunktionsgerätebeispiel mit Toner- und
Energiekosten; Fehlerfallen zu USB-Namensgebung, HDMI/DP, DDR-Generation,
NVMe/M.2, CPU-Sockel, USB-PD, PCIe-Lanes, Kabeln und Standby-Leistung. Die
Rechenwege wurden nachgerechnet, einschließlich MFG-Seitenmengen
(121.500 SW- und 13.500 Farbseiten über drei Jahre), Tonerbedarf,
Energiekosten (A ca. 488 €, B ca. 267 €) und Gesamtkosten (A ca. 7.573 €,
B ca. 10.877 €).

Glossar, Quellen und Links geprüft: `Term`-IDs für CPU, RAM, SSD, HDD,
Mainboard, ECC-RAM, SATA, NVMe, PCIe, USB, Thunderbolt, USB-PD, HDMI,
DisplayPort und KVM-Switch sind gültig. Quellenkomponente, Quellenbank und
Quellen-Tags enthalten FIAusbV, KMK, BIBB, USB-IF, Thunderbolt Technology,
VESA, HDMI LA, NVM Express und DGUV. Die sichtbaren Quellen wurden von
Sekundärportalen auf offizielle Anker umgestellt.

Technische Checks: `npm run check:sources` (55/55 online und Zitate gefunden,
davon 11 für `hardware-schnittstellen`), `npm run check:consistency`,
`npm run lint`, `npm run test` (8 Tests) und `npm run build` — alle grün am
2026-06-29.

Entscheidung und offene Punkte: Eigenständiges Kapitel im gemeinsamen
Grundlagenpfad. Keine offenen Punkte für dieses Kapitel. Nächstes aktives
Kapitel gemäß Landkarte: `dateisysteme`.

### `cpu-ram-speicher`

Slug: `cpu-ram-speicher`
Kompetenz: CPU, RAM, Cache, SSD, HDD, NVMe, M.2, SATA, DDR-Generation, ECC-RAM
und grundlegende Hardware-Auswahlkriterien unterscheiden; typische
Kundenwünsche in begründete Komponentenentscheidungen übersetzen; RAM,
Massenspeicher und CPU-Leistungsangaben in Prüfungsfragen sauber trennen.
Form: Kapitel
Status: geprüft
Voraussetzungen → Anschluss: Von-Neumann-Grundidee → CPU, RAM und
Massenspeicher → Hardware und Schnittstellen → Betriebssystem, Dateien, Rechte
und Virtualisierung

Ausbildungsquelle: FIAusbV, KMK-Rahmenlehrplan und BIBB-Umsetzungshilfe als
Rahmen für LF2, in dem Arbeitsplätze nach Kundenwunsch ausgestattet werden. Das
Kapitel bleibt ein eigenständiges Grundlagenkapitel, weil es die Auswahl und
Begründung zentraler Arbeitsplatzkomponenten vorbereitet und danach
Schnittstellen, Betriebssystem, Dateien, Rechte und Virtualisierung anschließt.

Fachliche Primärquellen: IBM, *What is a Central Processing Unit (CPU)?*, für
CPU, Speicherbezug, Cache und Threads; Intel, *CPU Speed: What Is CPU Clock
Speed?*, für Taktfrequenz und die Grenze von GHz als Einzelvergleich; Microsoft
Support, *All about SSD, HDD, and storage types*, für SSD/HDD-Abgrenzung; NVM
Express, *NVMe Specifications*, als HTML-Alternative zur PDF-FAQ für NVMe,
M.2-Formfaktoren und nichtflüchtigen Speicher über PCIe und weitere Transporte.
Kingston, *DDR5 Memory Standard*, wurde als Herstellervergleich für
DDR-Keying/ECC im Text genutzt, aber nicht als maschineller Beleganker gezählt,
weil `npm run check:sources` dort HTTP 403 erhält. Die alte Crucial-URL lieferte
HTTP 404 und wurde deshalb aus der aktuellen Kapitelzuordnung entfernt.

Didaktische Vergleiche: Das Vorgängerkapitel `von-neumann` erklärt
Architekturmodell, ALU, Steuerwerk, Bus, Fetch-Decode-Execute und Cache als
Grundidee. Dieses Kapitel wiederholt das nur knapp und verschiebt den Fokus auf
Komponentenauswahl, RAM-Kapazität, SSD/HDD/NVMe, DDR-Kompatibilität,
ECC-Einordnung, Kundenwünsche und typische AP1-Verwechslungen. Das Folgekapitel
`hardware-schnittstellen` kann danach Mainboard, Steckplätze, Ports, Peripherie,
Kühlung, Netzteil und konkrete Schnittstellen vertiefen.

Lokaler Materialabgleich: `_material_index/AP1_ABGLEICH.md` ordnet
`Prüfung_4`, Aufgabe 2, mit CPU-, RAM-/Arbeitsspeicher-, SSD-/HDD- und
Beschaffungsbezug diesem Kapitel zu. Übernommen wurden nur Themenumfang und
Denkoperation: begründete PC-Auswahl, CPU-/RAM-/SSD-Unterscheidung,
DDR-/ECC-Hinweis, SSD-Vor- und Nachteile gegenüber HDD und Anschluss an
Monitor/Grafik/Schnittstellen. Geschützte Aufgaben- oder Lösungstexte wurden
nicht übernommen; Montage- und Schnittstellenthemen bleiben Anschlussstoff für
`hardware-schnittstellen`.

Geprüfte Kernaussagen (8, mit maschinell prüfbarem Beleg in
`src/content/quellen/belege.json`; `npm run check:sources` grün):

1. Eine CPU speichert und führt Programmbefehle über ihre Schaltungen aus.
2. RAM beziehungsweise Arbeitsspeicher dient als kurzfristiger Speicher für
   aktuell genutzte Daten.
3. CPU-Cache liegt näher an der CPU und kann typische Speicherzugriffe schneller
   bedienen als RAM.
4. Threads sind virtuelle Befehlsfolgen, die an eine CPU ausgegeben werden.
5. Taktfrequenz beschreibt CPU-Zyklen pro Sekunde und wird in GHz gemessen.
6. SSDs sind im Microsoft-Support als kleiner und schneller als HDDs beschrieben.
7. NVMe beschreibt, wie Host-Software mit nichtflüchtigem Speicher über mehrere
   Transporte kommuniziert.
8. M.2 ist bei NVM Express als Formfaktor für SSDs aufgeführt; NVMe ist davon
   getrennt die Spezifikation.

Didaktik, Fehlerfallen und Anwendung geprüft: Einstieg über
Arbeitsplatz-/Serverauswahl; Werkstattmodell; Faktenkern zu CPU, RAM,
Massenspeicher und Mainboard; CPU-Kennwerte mit GHz-Falle; Kerne/Threads;
RAM-Kapazität, DDR-Kompatibilität und ECC-Abgrenzung; SSD/HDD/NVMe-Tabelle;
M.2-/NVMe-Warnung; Programmstart-Ablauf; Auswahl nach Kundenwunsch; typische
Fehler und Mini-Selbstcheck vorhanden. Keine Rechenwege im Kapitel; die
Entscheidungsbeispiele sind qualitativ geprüft.

Glossar, Quellen und Links geprüft: `Term`-IDs für CPU, RAM, SSD, HDD,
Taktfrequenz, Thread, Cache, Massenspeicher und NVMe sind gültig. Quellenbank,
Quellen-Tags und sichtbare Quellen enthalten FIAusbV, KMK, BIBB, IBM, Intel,
Microsoft, NVM Express und Kingston; maschinell gezählte Faktenbelege verwenden
nur die erreichbaren HTML-Anker IBM, Intel, Microsoft und NVM Express. Der
Anschluss an `hardware-schnittstellen` ist als nächster Lernpfadschritt
festgelegt.

Technische Checks: `npm run check:sources` (44/44 online und Zitate gefunden,
davon 8 für `cpu-ram-speicher`), `npm run check:consistency`, `npm run lint`,
`npm run test` (8 Tests) und `npm run build` — alle grün am 2026-06-29.

Entscheidung und offene Punkte: Eigenständiges Kapitel im gemeinsamen
Grundlagenpfad. Keine offenen Punkte für dieses Kapitel.

### `von-neumann`

Slug: `von-neumann`
Kompetenz: Die Von-Neumann-Grundidee als Modell für Allzweckrechner erklären;
CPU-Bausteine, gemeinsamen Speicher, Bus, Fetch-Decode-Execute-Zyklus,
Flaschenhals und Cache einordnen; RAM, Massenspeicher, ALU und Steuerwerk in
Prüfungsfragen sauber trennen.
Form: Kapitel
Status: geprüft
Voraussetzungen → Anschluss: Datenmengen und Datenraten → Von-Neumann-Grundidee
→ CPU, RAM und Massenspeicher → Hardware und Schnittstellen

Ausbildungsquelle: FIAusbV, KMK-Rahmenlehrplan und BIBB-Umsetzungshilfe als
Rahmen für gemeinsames Grundlagenwissen zu IT-Systemen, Arbeitsplätzen und
Vernetzung. Die Kapitelentscheidung ist ein eigenständiges Grundlagenkapitel in
LF2, weil die Rechnerarchitektur späteres Verständnis von Hardwareauswahl,
Betriebssystemen, Dateien, Rechten und Virtualisierung vorbereitet.

Fachliche Primärquellen: Smithsonian Libraries, *First Draft of a Report on the
EDVAC*, als historische Primärquelle zur Stored-Program-Idee; Computer History
Museum als online prüfbarer HTML-Anker zur Einordnung des EDVAC-Reports und des
gemeinsamen Speichers; IBM, *What is a Central Processing Unit (CPU)?*, für ALU,
Bus und Instruction Cycle; Intel, *CPU Speed: What Is CPU Clock Speed?*, für
Taktfrequenz, GHz und Cache als Leistungsfaktor. Cornell CS 3410 wurde als
didaktischer Vergleich für die klassische Stufenreihenfolge Fetch, Decode,
Execute, Memory und Writeback genutzt.

Didaktische Vergleiche: Das Folgekapitel `cpu-ram-speicher` behandelt
Komponentenauswahl, RAM-Größe, Massenspeicher und PC-Kaufentscheidungen. Dieses
Kapitel bleibt deshalb bei der Architekturidee, dem Befehlszyklus und den
typischen AP1-Verwechslungen. Die Harvard-Abgrenzung ist knapp gehalten und dient
nur dazu, den gemeinsamen Speicherraum der Von-Neumann-Architektur kontrastiv zu
verstehen.

Lokaler Materialabgleich: `_material_index/AP1_ABGLEICH.md` ordnet lokale
CPU-/RAM-/SSD-Aufgabentypen dem Kapitel `cpu-ram-speicher` zu. Für
`von-neumann` wurde daher kein Aufgaben- oder Lösungstext übernommen; der
Materialabgleich bestätigt nur den Anschluss an das nächste Hardwarekapitel.

Geprüfte Kernaussagen (9, mit maschinell prüfbarem Beleg in
`src/content/quellen/belege.json`; `npm run check:sources` grün):

1. Die Von-Neumann-Grundidee nutzt einen gemeinsamen internen Speicher, in dem
   Instruktionen und Daten gehalten werden können.
2. Die ALU ist der Teil der CPU, der arithmetische und logische Operationen
   ausführt.
3. CPU-Arbeit wird als wiederholter Instruction Cycle beschrieben.
4. Beim Fetch-Schritt werden Daten beziehungsweise Befehle aus dem Speicher
   geholt.
5. Beim Decode-Schritt übersetzt die CPU Binärinstruktionen in elektrische
   Steuersignale.
6. Beim Execute-Schritt interpretiert und führt der Computer
   Programminstruktionen aus.
7. Ein Bus verbindet CPU und Speicher und trägt damit den Datenfluss zwischen
   diesen Komponenten.
8. Die Taktfrequenz misst CPU-Zyklen pro Sekunde und wird in GHz angegeben.
9. CPU-Leistung hängt nicht nur von der Taktfrequenz ab; Cache-Größe und
   Cache-Effizienz sind relevante Faktoren.

Didaktik, Fehlerfallen und Anwendung geprüft: Einstieg über den gemeinsamen
Speicherraum; Werkstattanalogie, Faktenkern, EVA-Einordnung,
Fetch-Decode-Execute-Zyklus, Mini-Assemblerbeispiel, Flaschenhals, Cache,
Harvard-Abgrenzung und prüfungsnahe Aussagen vorhanden. Keine Rechenwege im
Kapitel; die Mini-Addition wurde als Ablaufbeispiel geprüft. Fehlerfallen zu
RAM/Massenspeicher, CPU/ALU, Steuerwerk, Bus, Cache und
Von-Neumann-Flaschenhals sind enthalten.

Glossar, Quellen und Links geprüft: `Term`-IDs für CPU, RAM, Cache,
Massenspeicher und EVA-Prinzip sind gültig. Quellenkomponente, Quellenbank und
Quellen-Tags enthalten FIAusbV, KMK, BIBB, Smithsonian, Computer History Museum,
IBM, Cornell und Intel. Der Anschluss an `cpu-ram-speicher` ist als nächster
Lernpfadschritt festgelegt.

Technische Checks: `npm run check:sources` (36/36 online und Zitate gefunden,
davon 9 für `von-neumann`), `npm run check:consistency`, `npm run lint`,
`npm run test` (8 Tests) und `npm run build` — alle grün am 2026-06-29.

Entscheidung und offene Punkte: Eigenständiges Kapitel im gemeinsamen
Grundlagenpfad. Keine offenen Punkte für dieses Kapitel.

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
