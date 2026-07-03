# Inhalts-Auditmatrix

Diese Datei ist der Nachweis für die tatsächliche Qualität einzelner Kapitel.
Technische Navigations- oder Altstatus sind kein Ersatz für einen Audit.

`geprüft` setzt zusätzlich zum Faktencheck einen unabhängigen Prüfer-Pass
(Erzeuger ≠ Prüfer), einen dokumentierten Lösbarkeitsnachweis und die
aktualisierte Zeile in `ABDECKUNGSMATRIX.md` voraus (siehe `KAPITELSTANDARD.md`).

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
| `nutzwertanalyse` | Kapitel | teilgeprüft | Wirtschaft: Beschaffung/Entscheidung → Nutzwertanalyse → Angebotsvergleich | Entwurf/Einordnung am 2026-07-03 abgeschlossen; nächste Phase: Belege. |

## Laufende und zuletzt bearbeitete Kapitel

### `nutzwertanalyse`

Slug: `nutzwertanalyse`
Kompetenz: Alternativen anhand gewichteter Kriterien vergleichen, Muss-Kriterien
vor der Rechnung ausschließen, Tabellenlücken über Gewichtung/Bewertung/Teilnutzwert
berechnen, Rangfolge bilden und eine betriebliche Empfehlung begründen.
Form: Kapitel
Status: teilgeprüft – Entwurf/Einordnung am 2026-07-03 abgeschlossen; Belege,
unabhängiger Prüfer-Pass, Fix-Pass und Abschluss-Gate sind offen.
Deckt ab (Zeile in ABDECKUNGSMATRIX.md): „Beschaffung und Entscheidung
(Nutzwert, Make-or-buy, Angebot, Finanzierung)“ in Abschnitt 6 · Betriebliche
Anwendung – Wirtschaft, Recht, Projekt, Qualität (LF1/LF6, Jahr 1/2).
Voraussetzungen → Anschluss: Prozentrechnung, einfache Multiplikation/Division
und Grundverständnis betrieblicher Anforderungen → Nutzwertanalyse →
`angebotsvergleich`, `make-or-buy`, `kauf-leasing-miete`.

Quellen- und Vergleichsmatrix:

| Rolle | Grundlage |
|---|---|
| Ausbildungsquelle | FIAusbV/Entsprechungsliste und KMK-Rahmenlehrplan ordnen das Thema in das Beurteilen marktgängiger IT-Systeme, das Bewerten von Angeboten sowie wirtschaftliches Handeln nach Anforderungen und Budget ein. BIBB bestätigt die modernisierte Ausbildungsgrundlage und dient als offizieller Ausbildungskontext. |
| Fachliche Primärquelle | KMK/FIAusbV als amtliche Ordnungsmittel für Kompetenzrahmen; für die Methode selbst Springer Gabler Wirtschaftslexikon als Fachlexikon zu Nutzwertanalyse, Kriteriengewichtung und Rangbildung. |
| Didaktischer Vergleich | Vorhandene Kapitel `angebotsvergleich` und `make-or-buy` zeigen Überschneidungen: Dieses Kapitel muss die qualitative, gewichtete Entscheidung erklären, aber keine Bezugskalkulation oder vollständige Make-or-buy-Rechnung vorwegnehmen. |
| Lokales Material | `..\PRUEFUNGSINVENTAR_2021_2024.md` nennt AP1 2023 Frühjahr mit Nutzwertanalyse ergänzen, gewichtete Punktsummen berechnen, auswählen und weiteres Kriterium begründen; außerdem AP1 2023 Herbst mit Nutzwertanalyse vervollständigen, Rangfolge bilden und Ausschlusskriterium anwenden. `_material_index\ocr_text\p9\seite_05.txt`/`p9_lsg\seite_05.txt` bestätigen den Probeprüfungstyp Tabellenlücken, gewichtete Bewertung und höchster Nutzwert. |
| Eigene Schlussfolgerung | Eigenständiges Kapitel ist gerechtfertigt, weil AP1-Aufgaben nicht nur die Definition, sondern Tabelle ergänzen, Prozentgewichte umrechnen, Teilnutzwerte addieren, K.O.-Kriterien beachten und eine begründete Empfehlung verlangen. |

Abschnitts-Audit vor Textarbeit:

| Abschnitt | Entscheidung |
|---|---|
| Kapitelumfang | Kapitel statt Box/Glossar, weil echte AP1-Aufgaben 16–22 Punkte und mehrere Denkoperationen enthalten. |
| Matrixabdeckung | Die bestehende Matrixzeile deckt den Aufgabentyp ab; keine neue Zeile nötig. Die Untertypen „Tabellenlücken berechnen“, „Rangfolge bilden“, „Ausschlusskriterium anwenden“ und „weiteres Kriterium begründen“ sind im Audit konkret dokumentiert. |
| Überschneidung | Preis-/Bezugskalkulation bleibt bei `angebotsvergleich`; dieses Kapitel trennt qualitative Nutzwertpunkte von Euro-Kosten. |
| Voraussetzungen | Prozentwerte als Dezimalzahl, Multiplikation, Division und Addition werden im Kapitel erneut kurz gezeigt; keine ungeprüfte IT-Spezialvoraussetzung nötig. |
| Textänderung | Ergänzt wurden Rückwärtsformeln für Tabellenlücken, Kontrollfragen zu 100-%-Gewichtung und Punktelogik sowie eine AP1-nahe Begründung zusätzlicher Kriterien. |

Geprüfte Kernaussagen im Entwurf (noch ohne Beleg-Gate):

1. Muss-Kriterien werden vor der Nutzwertrechnung geprüft.
2. Soll-Kriterien werden gewichtet und einheitlich bewertet.
3. Teilnutzwert = Gewichtung × Bewertung.
4. Gesamtnutzwert = Summe der Teilnutzwerte.
5. Bei hohen Punktzahlen für „gut“ muss die Preisbewertung so herum vergeben
   werden, dass das günstigere beziehungsweise wirtschaftlich vorteilhaftere
   Angebot mehr Punkte erhält.
6. Tabellenlücken lassen sich durch Umstellen der Grundformel berechnen.
7. Zusätzliche Kriterien müssen aus dem Bedarf begründet werden.

Lösbarkeitsnachweis (Entwurfsstand):

- Reale, abstrahierte Aufgabe: Nutzwerttabelle mit fehlenden Bewertungen und
  Teilnutzwerten vervollständigen, Summe bilden, Angebot mit höchstem Nutzwert
  auswählen; zusätzlich Kriterium begründen oder Ausschlusskriterium beachten.
- Tragende Kapitelteile: „Das Verfahren in 6 Schritten“, Formelblock,
  Rückwärtsformeln für Tabellenlücken, Beispiele 1/2, Abschnitt
  „Subjektivität richtig verstehen“.
- Ergebnis: Entwurf deckt den Aufgabentyp ab; maschinell prüfbare Belege und
  unabhängiger Prüfer-Pass fehlen noch.

Offen:

- Belege-Phase: mindestens 5 Kernaussagen in `src/content/quellen/belege.json`
  mit wörtlichen Zitaten und `npm run check:sources`.
- Danach unabhängiger Prüfer-Pass und Fix-Pass.
- Erst nach Abschluss-Gate Status in `ABDECKUNGSMATRIX.md`, `src/lib/audit/status.ts`
  und `src/lib/review.ts` bewegen.

### `prozess-thread`

Slug: `prozess-thread`
Kompetenz: Prozess, Thread, Task, Scheduler, Kontextwechsel und Multitasking
unterscheiden; Diagnosehinweise aus Task-Manager, `top`/`htop` oder `ps`
einordnen; erklären, warum mehrere Threads nicht automatisch echte Parallelität
oder höhere Geschwindigkeit bedeuten.
Form: Kapitel
Status: geprüft – Builder-Pass, Belege, unabhängiger Prüfer-Pass und Fix-Pass
am 2026-07-03 abgeschlossen; keine offenen Funde.
Deckt ab (Zeile in ABDECKUNGSMATRIX.md): „Prozesse und Threads“ in Abschnitt
2 · IT-Systeme (LF2, Jahr 1).
Voraussetzungen → Anschluss: Von-Neumann-Grundidee, CPU/RAM, Dateisysteme und
Linux-Rechte → Prozesse/Threads → zentrale/dezentrale Systeme und
Virtualisierung.

Quellen- und Vergleichsmatrix:

| Rolle | Grundlage |
|---|---|
| Ausbildungsquelle | FIAusbV, KMK-Rahmenlehrplan und BIBB-Umsetzungshilfe rahmen LF2: Arbeitsplätze und IT-Systeme nach Kundenanforderung bereitstellen, betreiben und beurteilen. |
| Fachliche Primärquelle | Microsoft Learn zu Prozessen, Threads, präemptivem Multitasking und Scheduling-Prioritäten; Linux Kernel Documentation zum CFS als Scheduler-Modell. |
| Didaktischer Vergleich | `von-neumann` und `cpu-ram-speicher` liefern CPU, Kerne, RAM und Thread-Grundbezug; dieses Kapitel verschiebt den Fokus auf Betriebssystemeinheiten, Ressourcenbesitz, Scheduling und Diagnose. |
| Lokales Material | `_material_index` zeigt AP1-nahe Hardware-Auswahl mit Kern-/Thread-Angaben; übernommen wurden nur Themenumfang und Denkoperation, keine Aufgabenformulierung und keine Lösung. |
| Eigene Schlussfolgerung | Eigenständiges Betriebssystemkapitel, weil Lernende Prozess, Thread, Task, CPU-Kern, Wartezustand und Ressourcengrenze sicher trennen müssen, bevor Virtualisierung und Systembetrieb folgen. |

Geprüfte Kernaussagen (7, mit maschinell prüfbarem Beleg in
`src/content/quellen/belege.json`; `prozess-thread`-Belege im
`npm run check:sources`-Lauf fehlerfrei):

1. Ein Prozess stellt Ressourcen zur Programmausführung bereit.
2. Ein Prozess besitzt unter anderem virtuellen Adressraum, Code, Handles,
   Sicherheitskontext, Prozess-ID, Umgebungsvariablen, Prioritätsklasse,
   Working-Set-Grenzen und mindestens einen Thread.
3. Ein Thread ist die Einheit innerhalb eines Prozesses, die zur Ausführung
   eingeplant werden kann.
4. Ein Thread ist die Grundeinheit, der das Betriebssystem Prozessorzeit
   zuteilt.
5. Präemptives Multitasking erzeugt den Eindruck gleichzeitiger Ausführung
   mehrerer Threads aus mehreren Prozessen.
6. Windows weist Zeitscheiben prioritätsbasiert zu; Threads gleicher höchster
   Priorität werden Round-Robin behandelt.
7. Die Linux-Kernel-Dokumentation beschreibt CFS als Completely Fair Scheduler.

Lösbarkeitsnachweis (realer, abstrahierter Aufgabentyp + tragende Kapitelteile):
Ein PC-Datenblatt oder Betriebssystemwerkzeug nennt mehrere CPU-Kerne und
Threads beziehungsweise einen Prozess mit mehreren Threads. Gefragt ist die
Einordnung: Software-Thread ist nicht CPU-Kern und nicht automatisch
Datenblatt-Thread, Prozess ist nicht Programmdatei oder Fenster, viele Threads
bedeuten auf einem Ein-Kern-System keine echte parallele Berechnung. Der
Software-Thread-Teil ist lösbar mit „Grundbegriffe“, „Prozess vs. Thread“,
„Zustände, Scheduling und CPU-Zeit“, „Multitasking, Parallelität und CPU-Kerne“
sowie „Typische Fehler“. Der Datenblatt-Teil zu CPU-Kernen und CPU-Threads wird
im Abschnitt „Multitasking, Parallelität und CPU-Kerne“ ausdrücklich als
Hardware-Einordnung zum geprüften Vorkapitel `cpu-ram-speicher` abgegrenzt. Das
lokale Material wurde nur als abstrakter Aufgabentyp genutzt.

Didaktik, Fehlerfallen und Anwendung geprüft: Einstieg über Betriebssystem als
Zeitverteiler; Restaurant-Analogie; Grundbegriffstabelle; Prozess/Thread-Tabelle;
Zustände und Scheduling ergänzt; Diagnoseablauf für hängende Anwendungen;
Fehlerfallen zu Programm/Prozess, Thread/Kern, Task-Kontext, RAM/CPU/I/O und
hartem Beenden vorhanden. Der frühere Klausur-Stil-Block wurde als kurzer
Mini-Selbstcheck formuliert, damit das Kapitel Lernkapitel bleibt.

Glossar, Quellen und Links geprüft: `Term`-IDs für Prozess, Thread, Task,
Scheduler, Kontextwechsel und Multitasking sind vorhanden. Quellenbank und
Quellen-Tags enthalten FIAusbV, KMK, BIBB, Microsoft Learn und Linux Kernel
Documentation; `lessonSourceIds` für `prozess-thread` wurde ergänzt.

Unabhängiger Prüfer-Pass (Datum; Funde behoben; Erzeuger ≠ Prüfer):
2026-07-03, gegnerisch nach Abschnitt 7 geprüft. Quellenbasis: FIAusbV, KMK,
BIBB, Microsoft Learn „About Processes and Threads“, Microsoft Learn
„Processes and Threads“, Microsoft Learn „Scheduling Priorities“, Linux Kernel
Documentation „CFS Scheduler“ sowie lokale `_material_index`-Treffer nur als
Aufgabentypen-Check.

Funde (alle behoben):
1. Der Kapiteltext trennte Software-Threads und CPU-Kerne, aber der
   dokumentierte lokale Aufgabentyp enthält CPU-Datenblattwerte wie „6 Kerne /
   12 Threads“. Fix am 2026-07-03: Im Abschnitt „Multitasking, Parallelität und
   CPU-Kerne“ ergänzt, dass Datenblatt-„Threads“ Hardware-Threads beziehungsweise
   logisch planbare CPU-Ausführungskontexte meinen und nicht dasselbe sind wie
   die Software-Threads eines einzelnen Prozesses; für die Hardware-Einordnung
   verweist das Kapitel auf `cpu-ram-speicher`.

Technische Checks: `npm run check:consistency`, `npm run check:sources`,
`npm run lint`, `npm run test` (8 Tests) und `npm run build` grün am
2026-07-03.

Entscheidung und offene Punkte: Eigenständiges Kapitel im gemeinsamen
IT-Systeme-Pfad. Keine offenen Punkte. Abschlussstatus in
`ABDECKUNGSMATRIX.md`, `src/lib/audit/status.ts`, `src/lib/review.ts` und
generiertem `AP1_STATUS.md` synchronisiert.

### `scan-bilddaten`

Slug: `scan-bilddaten`
Kompetenz: Scan- und Bilddaten aus Format, Auflösung/DPI, Farbtiefe,
Kompression und Stückzahl berechnen; zwischen Bit und Byte sowie SI- und
Binärpräfixen sauber unterscheiden; typische A4-Scanrechnungen nachvollziehbar
lösen.
Form: Kapitel
Status: geprüft
Deckt ab (Zeile in ABDECKUNGSMATRIX.md): „Scan-/Bilddaten (DPI, Farbtiefe)
rechnen“ in Abschnitt 2 · IT-Systeme (LF2, Jahr 1).
Voraussetzungen → Anschluss: Bit/Byte, Präfixe, Datenvolumen,
Datenrate/Übertragungsdauer und USV-Systeme → Scan-/Bilddaten →
Prozesse/Threads und weitere IT-System-Themen.

Quellen- und Vergleichsmatrix:

| Rolle | Grundlage |
|---|---|
| Ausbildungsquelle | FIAusbV, KMK-Rahmenlehrplan und BIBB-Umsetzungshilfe ordnen das Thema dem Einrichten, Betreiben und Bewerten von IT-Systemen im gemeinsamen Ausbildungsteil zu. |
| Fachliche Primärquelle | NIST/BIPM für Bit/Byte sowie SI- und Binärpräfixe; W3C PNG für Rasterbilddimensionen, Farbinformation und verlustfreie Bildkompression; ISO/IEC 10918-1 als JPEG-Kompressionsstandard. |
| Didaktischer Vergleich | Das geprüfte Kapitel `datenvolumen-berechnung` liefert die allgemeine Einheitenmechanik; `scan-bilddaten` fokussiert nur den AP1-Scanfall. |
| Lokales Material | `_material_index` und OCR-Extraktionen zeigen den Aufgabentyp A4-Scanrechnung mit Format, DPI, Farbtiefe, Jahresmenge, Kompression und TiB-Zieleinheit. |
| Eigene Schlussfolgerung | Eigenständiges kurzes Rechenkapitel, weil der Aufgabentyp mehrere bereits eingeführte Grundlagen kombiniert und typische Fehler an DPI, Farbtiefe, Kompression und TiB entstehen. |

Fakten- und Rechencheck: Beispielrechnung wurde nach dem Fix mit eigenständigen
Werten gegengerechnet: 29,7/2,54 ≈ 11,6929; 21,0/2,54 ≈ 8,2677;
2.923 × 2.067 = 6.041.841 px; × 24 / 8 = 18.125.523 Byte je Scan;
× 264.000 = 4.785.138.072.000 Byte; / 1024⁴ ≈ 4,35 TiB; × 0,6 ≈
2,61 TiB. Das Graustufen-Gegenbeispiel ergibt bei 8 Bit 6.041.841 Byte je
Scan.

Lösbarkeitsnachweis (realer, abstrahierter Aufgabentyp + tragende Kapitelteile):
A4-Dokumente werden über einen Arbeitszeitraum mit vorgegebener täglicher
Stückzahl, 200 × 200 dpi, 24 Bit Farbtiefe und Kompression auf 50 Prozent
archiviert; gesucht ist die Jahresmenge in TiB. Lösbar mit den Kapitelteilen
„Was bei einem Scan gespeichert wird“, „Die Formel“, „Beispiel:
DIN-A4-Archiv pro Jahr“, „Varianten sicher lesen“ und „Rundung und
Musterwerte“. Keine AP1-Aufgabenformulierung oder Lösung wurde übernommen;
übernommen wurde nur der abstrahierte Aufgabentyp und der Themenumfang.

Unabhängiger Prüfer-Pass (Datum; Funde behoben; Erzeuger ≠ Prüfer):
2026-06-30, keine offenen Funde. Gegnerisch nach §7 geprüft: Definitionen,
DPI-Umrechnung, Pixel-/Bit-/Byte-Rechenweg, SI-/Binärpräfix-Abgrenzung,
Kompressionsannahmen, Belegtragfähigkeit, Voraussetzungen und Lösbarkeit.

Funde (alle behoben):
1. Der Beispiel-Rechenfall lag zu nah am lokalen AP1-Aufgabentyp und konnte wie
   eine nachgebaute Aufgabe wirken; Kapitel nutzt jetzt eigenständige Werte
   (250 dpi, 1.200 Scans/Tag, 220 Arbeitstage, 60 Prozent Restgröße) und bleibt
   damit Lernkapitel statt Aufgabensammlung.
2. Die Abschlussdokumentation stand noch auf „Prüfer-Pass offen“; Auditmatrix,
   Abdeckungsmatrix, Review-Log und Vertrauensstatus dokumentieren jetzt den
   abgeschlossenen Fix-Pass für genau `scan-bilddaten`.

Technische Checks: `npm.cmd run check:consistency`, `npm.cmd run lint`,
`npm.cmd run test`, `npm.cmd run build` grün am 2026-06-30. `npm.cmd run
check:sources` zweimal ausgeführt, davon einmal außerhalb der Sandbox; einziger
Fehler ist HTTP 503 bei `https://www.bipm.org/en/measurement-units/si-prefixes`
in mehreren Kapiteln (`bit-byte`, `prefixe`, `datenvolumen-berechnung`,
`scan-bilddaten`, `datenrate-berechnung`). Inhaltlicher Belegfehler im Kapitel
nicht festgestellt.
Entscheidung und offene Punkte: Eigenständiges kurzes Rechenkapitel im
gemeinsamen IT-Systeme-Pfad. Keine offenen Punkte. Kein nächstes Kapitel
begonnen.

### `usv-systeme`

Slug: `usv-systeme`
Kompetenz: USV als Verfügbarkeitsmaßnahme einordnen; Standby-, Line-interactive-
und Online-Doppelwandler-USV unterscheiden; Überbrückungszeit aus Spannung,
Amperestunden, Akkuanzahl, nutzbarem Anteil und Last berechnen; `kWh / kW`-
Aufgaben lösen; `VA`, `W` und Leistungsfaktor einordnen; Verfügbarkeit aus
Gesamtzeit und Ausfallzeit berechnen.
Form: Kapitel
Status: geprüft
Deckt ab (Zeile in ABDECKUNGSMATRIX.md): „USV-Systeme und Verfügbarkeit“ in
Abschnitt 2 · IT-Systeme (LF2, Jahr 1).
Voraussetzungen → Anschluss: RAID-Level und technische Verfügbarkeit →
USV-Systeme, Überbrückungszeit und Verfügbarkeitsrechnung → Scan-/Bilddaten,
Prozesse/Threads und spätere Informationssicherheit mit Schutzzielen,
Backup-Strategien und MTBF/MTTF.

Ausbildungsquelle: FIAusbV, KMK-Rahmenlehrplan und BIBB-Umsetzungshilfe als
Rahmen für LF2 „Arbeitsplätze nach Kundenwunsch ausstatten“ sowie die AP1-
Aufgabenrealität zu Hardware, IT-Sicherheit und Verfügbarkeit. Das Thema bleibt
ein eigenständiges Kapitel, weil reale Aufgaben USV als infrastrukturelle
Sicherheitsmaßnahme nennen lassen und gleichzeitig Laufzeit- und
Verfügbarkeitsrechnungen verlangen.
Fachliche Primärquellen: Vertiv als Herstellerquelle zu USV-Bauarten
Offline/Standby, Line-interactive und Online-Doppelwandler; Google SRE als
fachlicher HTML-Anker für Verfügbarkeitsmessung und Ausfallzeitziele.
TechTarget wurde als frei prüfbare fachliche Vergleichsquelle für
USV-Auswahlkriterien, Last, Laufzeit und Leistungsfaktor genutzt. Nicht robust
prüfbare Norm-/PDF-Quellen wurden nicht als maschinelle Faktenbelege gezählt.
Didaktische Vergleiche: `raid-systeme` erklärt technische Verfügbarkeit bei
Laufwerksausfällen und grenzt RAID von Backup ab. `usv-systeme` übernimmt nur
den bereits eingeführten Verfügbarkeitsbegriff und vertieft Stromschutz,
Laufzeitrechnung und Prozentverfügbarkeit. `schutzziele` und `mtbf-mttf` werden
nicht vorausgesetzt, sondern später angeschlossen.
Lokaler Materialabgleich: `_material_index/extraktion/Prüfung_9.md` enthält den
Aufgabentyp Schutzbedarfsfeststellung mit Verfügbarkeit sowie die Maßnahme
„Anbindung der IT-Systeme an eine unterbrechungsfreie Stromversorgung (USV)“ als
infrastrukturelle Maßnahme. Übernommen wurden nur Themenumfang und Denkoperation;
kein geschützter Aufgaben- oder Lösungstext.

Geprüfte Kernaussagen (9, mit maschinell prüfbarem Beleg in
`src/content/quellen/belege.json`; `npm.cmd run check:sources` grün):
1. Line-interactive-USV-Systeme liefern Spannungsaufbereitung und Batterie-
   Backup. (Vertiv)
2. Line-interactive-USV-Systeme haben beim Wechsel auf Batterie typischerweise
   eine kurze Umschaltunterbrechung. (Vertiv)
3. Offline-/Standby-USV-Systeme leiten im Normalbetrieb Netzstrom zum
   geschützten Ausgang durch. (Vertiv)
4. Eine echte Online-Doppelwandler-USV bietet vollständige Spannungsaufbereitung
   und keine Umschaltzeit auf Batterie. (Vertiv)
5. Bei der USV-Auswahl müssen Gesamtlast und benötigte Laufzeit während eines
   Ausfalls bestimmt werden. (TechTarget)
6. Der Leistungsfaktor beschreibt den Unterschied zwischen Wirkleistung und
   Scheinleistung. (TechTarget; Beleg-Aussage im Fix-Pass auf das tatsächlich
   gestützte Zitat eingegrenzt)
7. Google SRE beschreibt Verfügbarkeit traditionell als Anteil der System-
   Uptime. (Google SRE)
8. 99,99 % Verfügbarkeit erlauben ungefähr 52,56 Minuten Ausfall pro Jahr.
   (Google SRE)
9. Die Google-SRE-Verfügbarkeitstabelle nennt für 99,9 % Verfügbarkeit 8,76
   Stunden zulässige Ausfallzeit pro Jahr. (Google SRE)

Lösbarkeitsnachweis (realer, abstrahierter Aufgabentyp + tragende Kapitelteile):
Typ A (aus `_material_index/extraktion/Prüfung_9.md`, abstrahiert): „Ordne USV
als Maßnahme zur Verbesserung der IT-Sicherheit beziehungsweise Verfügbarkeit in
einem Sicherheitskonzept ein und begründe die Kategorie.“ Allein mit der
Lerndatei lösbar über „Warum existiert eine USV?“, „Auswahl und Betrieb“ und
„Typische Fehler“: USV ist eine infrastrukturelle Maßnahme, schützt gegen
Stromausfall/Netzstörung, erhöht Verfügbarkeit, ersetzt aber weder Backup noch
Redundanz. Typ B (prüfungsnahe Rechenform): „Berechne die Überbrückungszeit
einer USV aus Akkuwerten, Restladung und Last; berechne zusätzlich eine
Jahresverfügbarkeit aus Ausfallstunden.“ Lösbar über „Leistung, Energie und
Laufzeit“, „Rechenverfahren“ und „Verfügbarkeit berechnen“.
Didaktik, Fehlerfallen und Anwendung geprüft: Reihenfolge Nutzen →
USV-Bauarten → Einheiten/Formeln → Rechenverfahren → Verfügbarkeit →
Auswahl/Betrieb → Fehlerfallen trägt. Beispielrechnungen nachgerechnet:
`12 V × 4,5 Ah = 54 Wh`; `54 Wh × 20 = 1080 Wh`; `1080 Wh × 0,70 = 756 Wh`;
`756 Wh / 800 W = 0,945 h = 56,7 min`; `6 kWh / 11 kW = 0,545 h = 32,7 min`;
`6 kWh / 8,25 kW = 0,727 h = 43,6 min`; `3000 VA × 0,9 = 2700 W`;
`2100 / 2700 = 77,8 %`; `8740 / 8760 = 99,77 %`.
Glossar, Quellen und Links geprüft: `<Term>`-IDs `usv` und `verfügbarkeit` sind
vorhanden; lokales Glossar definiert USV, Überbrückungszeit, Wattstunde,
Scheinleistung, Wirkleistung, Leistungsfaktor und Online-Doppelwandler-USV.
Quellenbank und `lessonSourceIds['usv-systeme']` enthalten Ausbildungsquellen,
Vertiv, TechTarget und Google SRE.
Unabhängiger Prüfer-Pass (Datum; Funde behoben; Erzeuger ≠ Prüfer):
2026-06-30, keine offenen Funde. Gegnerisch nach §7 geprüft: Definitionen,
USV-Bauarten, Leistungs-/Energieformeln, Rechenwege, Verfügbarkeitstabelle,
Belegtragfähigkeit, Voraussetzungen und Lösbarkeit.

Funde (alle behoben):
1. Beleg-Aussage zum Leistungsfaktor war breiter als das hinterlegte wörtliche
   Zitat; `belege.json` wurde auf die belegte Kernaussage eingegrenzt.
2. Die Laufzeitformel war für Prüfungsrechnungen korrekt, aber ohne Hinweis auf
   idealisierte Annahmen zu glatt; Kapitel ergänzt jetzt den Hinweis auf
   Wirkungsgrad, Alter, Temperatur, Entladestrom und Hersteller-Laufzeittabellen.

Technische Checks: `npm.cmd run check:consistency`, `npm.cmd run check:sources`,
`npm.cmd run lint`, `npm.cmd run test`, `npm.cmd run build` grün am 2026-06-30.
Entscheidung und offene Punkte: Eigenständiges Kapitel im gemeinsamen
IT-Systeme-Pfad. Keine offenen Punkte. Nächstes aktives Kapitel gemäß
Lückenliste und Abhängigkeitsketten: `scan-bilddaten`.

### `raid-systeme`

Slug: `raid-systeme`
Kompetenz: RAID 0, 1, 5, 6 und 10 nach Striping, Mirroring und Parität
unterscheiden; nutzbare Kapazität und Speichereffektivität aus Laufwerkszahl und
Laufwerksgröße berechnen; die Umstellung von RAID 5 auf RAID 6 fachlich
begründen; RAID klar von Backup abgrenzen; konkrete Energieeffizienzmaßnahmen
für RAID-Systeme nennen.
Form: Kapitel
Status: geprüft
Deckt ab (Zeile in ABDECKUNGSMATRIX.md): „RAID-Level (0,1,5,6,10)" in Abschnitt
2 · IT-Systeme (LF2, Jahr 1).
Voraussetzungen → Anschluss: Hardware/Schnittstellen und Massenspeicher
(HDD/SSD, Schnittstellen, Server-/Workstation-Auswahl) → RAID-Level,
Kapazität, Speichereffektivität und Ausfalltoleranz → USV-Systeme,
Scan-/Bilddaten und spätere Backup-/Verfügbarkeitsthemen.

Ausbildungsquelle: FIAusbV, KMK-Rahmenlehrplan und BIBB-Umsetzungshilfe als
Rahmen für LF2 „Arbeitsplätze nach Kundenwunsch ausstatten". Das Thema bleibt
ein eigenständiges Kapitel, weil AP1-Aufgaben RAID-Level vergleichen,
Netto-Laufwerke und Speichereffektivität berechnen sowie RAID gegen Backup und
Energieeffizienz abgrenzen lassen.
Fachliche Primärquellen: Red Hat Enterprise Linux 8, „Managing RAID", als
fachlicher HTML-Anker zu RAID 0, RAID 1, RAID 5, RAID 6 und RAID 10, Striping,
Mirroring, Parität, Kapazität und Redundanz. Nicht frei prüfbare oder
paywallartige Norm-/Hersteller-PDFs wurden nicht als maschinelle Faktenbelege
verwendet.
Didaktische Vergleiche: Das Vorgängerkapitel `hardware-schnittstellen` erwähnt
RAID nur als Auswahlaspekt bei Servern/Workstations. `raid-systeme` vertieft
genau die Prüfungsoperationen: Level erkennen, Kapazität rechnen,
Speichereffektivität bestimmen, Ausfalltoleranz begründen, Backup-Falle
vermeiden und Energieeffizienzmaßnahmen nennen.
Lokaler Materialabgleich: `_material_index/extraktion/Prüfung_5.md` enthält den
Aufgabentyp RAID 5 auf RAID 6 umstellen, nutzbare Laufwerke und
Speichereffektivität bestimmen, drei Ursachen von Datenverlust nennen, gegen
die RAID nicht schützt, sowie zwei Energieeffizienzmaßnahmen für RAID-Systeme.
Übernommen wurden nur Themenumfang und Denkoperation; kein geschützter
Aufgaben- oder Lösungstext.

Geprüfte Kernaussagen (7, mit maschinell prüfbarem Beleg in
`src/content/quellen/belege.json`; `npm.cmd run check:sources` grün):
1. RAID nutzt Striping, Mirroring und Striping mit Parität, um Redundanz,
   geringere Latenz, höhere Bandbreite und Wiederherstellungsfähigkeit nach
   Laufwerksausfällen zu erreichen. (Red Hat)
2. RAID 0 ist Striping, verteilt Daten über Mitgliedslaufwerke und bietet keine
   Redundanz. (Red Hat)
3. RAID 1 spiegelt identische Daten auf jedes Mitgliedslaufwerk und erhöht damit
   Datenverfügbarkeit. (Red Hat)
4. RAID 1 hat als nutzbare Kapazität die Kapazität des kleinsten gespiegelten
   Laufwerks. (Red Hat)
5. Bei RAID 5 ist die Leseleistung typischerweise deutlich höher als die
   Schreibleistung. (Red Hat)
6. Bei RAID 6 werden für die Kapazitätsrechnung zwei Laufwerke statt eines
   Laufwerks für zusätzliche Parität abgezogen. (Red Hat)
7. RAID 10 kombiniert die Performance-Vorteile von RAID 0 mit der Redundanz von
   RAID 1. (Red Hat)

Lösbarkeitsnachweis (realer, abstrahierter Aufgabentyp + tragende Kapitelteile):
Typ A (aus `_material_index/extraktion/Prüfung_5.md`, abstrahiert): „Ein
RAID-5-Verbund mit fünf gleich großen Laufwerken soll auf RAID 6 umgestellt
werden. Gib nutzbare Laufwerke, Speichereffektivität und Wirkung auf die
Ausfalltoleranz an." Allein mit der Lerndatei lösbar über „RAID-Level im
Überblick", „Schrittfolge für jede Kapazitätsaufgabe" und „RAID 5 auf RAID 6
umstellen": RAID 5 = `5 - 1 = 4` Netto-Laufwerke, `4 / 5 = 80 %`; RAID 6 =
`5 - 2 = 3` Netto-Laufwerke, `3 / 5 = 60 %`; Wirkung: ein Laufwerk weniger
nutzbar, dafür zwei statt ein Laufwerksausfall tolerierbar. Typ B
(gleicher Materialanker, abstrahiert): „Nenne Ursachen von Datenverlust, gegen
die RAID nicht schützt, und Energieeffizienzmaßnahmen für ein RAID-System." Über
„Warum existiert RAID?", „Energieeffizienz bei RAID" und „Typische Fehler"
lösbar: RAID schützt nicht vor Löschung, Schadsoftware/Ransomware,
Standortschaden/Brand/Diebstahl oder falschen Änderungen; Maßnahmen sind
passend dimensionierte/effiziente Laufwerke, geeignete SSDs/2,5-Zoll-Laufwerke,
Hot-Spare-/Power-Management bewusst bewerten, Monitoring und Rebuild-Risiko
beachten.
Didaktik, Fehlerfallen und Anwendung geprüft: Reihenfolge Nutzen → Bausteine →
Level-Tabelle → Rechenverfahren → RAID-5-/RAID-6-Prüfungstyp →
Szenarioentscheidung → Energieeffizienz → Fehlerfallen trägt. Alle
Beispielrechnungen nachgerechnet: RAID 5 mit 5 × 4 TB = 16 TB und 80 %; RAID 6
mit 5 × 4 TB = 12 TB und 60 %; RAID 10 mit 8 × 2 TB = 8 TB.
Glossar, Quellen und Links geprüft: `<Term>`-IDs `raid`, `hdd` und `ssd` sind
vorhanden; lokales Glossar im Kapitel definiert Striping, Mirroring, Parität,
Speichereffektivität und Rebuild; Quellenbank und
`lessonSourceIds['raid-systeme']` enthalten Ausbildungsquellen und Red Hat.
Unabhängiger Prüfer-Pass (Datum; Funde behoben; Erzeuger ≠ Prüfer):
2026-06-30, keine offenen Funde. Gegnerisch nach §7 geprüft: Definitionen,
Zahlen und Regeln gegen Red-Hat-Belege und eigene Rechnung geprüft; Zitate gegen
die belegten Aussagen gegengelesen; Materialtyp aus Prüfung 5 allein mit der
Lerndatei durchgespielt; Voraussetzungen gegen Register geprüft.
Funde (alle behoben):
1. Der RAID-5-Faktenbeleg behauptete „verteilte Parität" und
   Lese-/Schreibverhalten, das wörtliche Zitat trug aber nur das
   Lese-/Schreibverhalten. Aussage in `belege.json` und Auditmatrix auf die
   tatsächlich zitierte Performance-Aussage eingegrenzt.
2. `Verfügbarkeit` wurde vor der lokalen Erklärung als Zielbegriff benutzt.
   Kurzdefinition im Einstieg ergänzt: Weiterbetrieb bei bestimmten
   Laufwerksausfällen bis Ersatz und Wiederherstellung.
Technische Checks: `npm.cmd run check:sources`, `npm.cmd run check:consistency`,
`npm.cmd run lint`, `npm.cmd run test`, `npm.cmd run build` grün am 2026-06-30.
Entscheidung und offene Punkte: Eigenständiges Kapitel im gemeinsamen
IT-Systeme-Pfad. Keine offenen Punkte. Nächstes aktives Kapitel gemäß
Lückenliste: `usv-systeme` (Phase Bau).

Alle nicht unten dokumentierten bestehenden Lektionen gelten bis zu ihrem eigenen Audit als
`ungeprüft`. Historische Freigaben, Bewertungen und Review-Texte befinden sich
nur zur Nachvollziehbarkeit in `docs/archiv/`; sie werden nicht automatisch
übernommen.

## Abgeschlossene Audits

### `homeoffice-ergonomie`

Slug: `homeoffice-ergonomie`
Kompetenz: Telearbeit, Homeoffice und mobiles Arbeiten unterscheiden;
Bildschirmarbeitsplätze ergonomisch bewerten; Barrieren bei Hardware und
Software erkennen; eine Ausstattung für Bildschirmarbeit, Barrierefreiheit,
Kommunikation und sicheren Remote-Zugriff begründet auswählen.
Form: Kapitel
Status: geprüft
Deckt ab (Zeile in ABDECKUNGSMATRIX.md): „Ergonomie, Barrierefreiheit,
Telearbeit“ in Abschnitt 2 · IT-Systeme (LF2, Jahr 1).
Voraussetzungen → Anschluss: Hardware/Schnittstellen → Ergonomie,
Barrierefreiheit und Telearbeit → RAID-Level, USV, Scan-/Bilddaten.

Ausbildungsquelle: FIAusbV, KMK-Rahmenlehrplan und BIBB-Umsetzungshilfe als
Rahmen für LF2-Arbeitsplätze nach Kundenwunsch. Das Thema bleibt ein
eigenständiges Kapitel, weil reale AP1-Aufgaben Hardwareauswahl,
Barrierefreiheit, Bildschirmarbeit und Telearbeit fallbezogen begründen lassen.
Fachliche Primärquellen: ArbStättV § 2 Abs. 7 für Telearbeit; ArbStättV Anhang
Nr. 6 für Bildschirmarbeitsplätze, Blendung, getrennte Tastatur und
Softwareanforderungen; ArbSchG § 5 für Gefährdungsbeurteilung; W3C WCAG für die
vier Barrierefreiheitsprinzipien; BITV 2.0 § 3 für die deutsche
Rechtsanbindung wahrnehmbar/bedienbar/verständlich/robust.
Didaktische Vergleiche: Das Vorgängerkapitel `hardware-schnittstellen` liefert
Monitor, Eingabegeräte, Docking und Peripherie. Dieses Kapitel ordnet dieselbe
Hardware nach Aufgabe, Gesundheit, Barrierefreiheit und Remote-Arbeit ein.
Lokaler Materialabgleich: `_material_index/extraktion/Prüfung_4.md` enthält den
Aufgabentyp „Nenne vier Hardwaremaßnahmen für einen barrierefreien Arbeitsplatz“.
Übernommen wurden nur Themenumfang und Denkoperation; kein geschützter
Aufgabentext.

Geprüfte Kernaussagen (8, mit maschinell prüfbarem Beleg in
`src/content/quellen/belege.json`; `npm.cmd run check:sources` grün):
1. Telearbeitsplätze sind vom Arbeitgeber fest eingerichtete
   Bildschirmarbeitsplätze im Privatbereich der Beschäftigten. (ArbStättV)
2. Telearbeit setzt vereinbarte Arbeitszeit, Dauer, Bedingungen und
   bereitgestellte Ausstattung voraus. (ArbStättV)
3. Bildschirmarbeitsplätze müssen Sicherheit und Gesundheit gewährleisten; die
   Grundsätze der Ergonomie sind anzuwenden. (ArbStättV)
4. Reflexionen und Blendungen sind bei Bildschirmarbeit zu vermeiden.
   (ArbStättV)
5. Für ortsgebundene Bildschirmarbeitsplätze müssen Tastaturen vom Bildschirm
   getrennte Einheiten sein. (ArbStättV)
6. Der Arbeitgeber ermittelt per Gefährdungsbeurteilung die erforderlichen
   Arbeitsschutzmaßnahmen. (ArbSchG)
7. WCAG 2.2 ordnet Leitlinien den vier Prinzipien wahrnehmbar, bedienbar,
   verständlich und robust zu. (W3C)
8. BITV 2.0 verlangt für die genannten IT-Angebote Barrierefreiheit nach diesen
   vier Prinzipien. (BITV 2.0)

Lösbarkeitsnachweis (realer, abstrahierter Aufgabentyp + tragende Kapitelteile):
Typ A (aus `_material_index/extraktion/Prüfung_4.md`, abstrahiert): „Nenne vier
Hardwaremaßnahmen, die einen barrierefreien Arbeitsplatz unterstützen.“ Allein
mit der Lerndatei lösbar über „Hardwaremaßnahmen für Barrierefreiheit“:
großer/höhenverstellbarer Monitor oder Bildschirmlesegerät, Braillezeile oder
Braille-Tastatur, Trackball/Spezialtaster/Fußpedal/Spracheingabe,
höhenverstellbarer Tisch/geeigneter Stuhl/Beinraum, Headset/Hörverstärkung.
Typ B (prüfungsnah): „Ordne einen regelmäßigen Arbeitsplatz zu Hause rechtlich
ein und begründe Ausstattung.“ Allein lösbar über „Die drei Arbeitsformen“,
„Ergonomische Bildschirmarbeit“, „Ausstattung für einen Telearbeitsplatz“ und
„Datenschutz und Datensicherheit“.
Didaktik, Fehlerfallen und Anwendung geprüft: Reihenfolge Arbeitsformen →
Ergonomie/Barrierefreiheit → Bildschirmarbeit → Software/WCAG →
Ausstattung/Sicherheit → Auswahlbeispiel trägt. Keine Rechenwege im Kapitel;
alle Richtwerte als Richtwerte, nicht als starre Gesetze formuliert. Der
Telearbeitsfall wurde gegen § 2 Abs. 7 gegengelesen.
Glossar, Quellen und Links geprüft: `<Term>`-IDs `barrierefreiheit`,
`softwareergonomie` und `wcag` sind gültig; Quellenbank und
`lessonSourceIds['homeoffice-ergonomie']` enthalten Ausbildungsquellen,
ArbStättV, ArbSchG, DGUV, BAuA, W3C und BITV.
Unabhängiger Prüfer-Pass (Erzeuger ≠ Prüfer): 2026-06-30, keine offenen Funde.
Gegnerisch nach §7 geprüft: Definitionen und Zitate gegen amtliche/W3C-Quellen
geprüft; AP1-Aufgabentyp aus Prüfung_4 allein mit der Lerndatei durchgespielt;
Voraussetzungen gegen Register geprüft.
Funde (alle behoben):
1. Belege fehlten vollständig; acht maschinell prüfbare Kernaussagen in
   `belege.json` ergänzt und exakte Unterseiten in der Quellenbank angelegt.
2. Auswahlbeispiel setzte drei feste Tage zu Hause zu unscharf mit Telearbeit
   gleich; auf ArbStättV-Kriterien eingegrenzt.
3. Der reale Aufgabentyp verlangte Hardwaremaßnahmen; Kapitel um konkrete
   Hardwaremaßnahmen für Seh-, Bewegungs-, Haltungs- und Hörbarrieren ergänzt.
4. MFA/VPN wurden benutzt, bevor sie erklärt waren; Kurzdefinitionen im
   Sicherheitsabschnitt ergänzt und Register gepflegt.
Technische Checks: `npm.cmd run check:sources`, `npm.cmd run check:consistency`,
`npm.cmd run lint`, `npm.cmd run test`, `npm.cmd run build` grün am 2026-06-30.
Entscheidung und offene Punkte: Eigenständiges Kapitel im gemeinsamen
Grundlagenpfad. Keine offenen Punkte. Nächstes aktives Kapitel gemäß
Lückenliste: `raid-systeme` (Phase Bau).

### `bit-byte`

Slug: `bit-byte`
Kompetenz: Bit als kleinste digitale Ja/Nein-Information erklären; Byte als
Gruppe aus 8 Bit anwenden; 8-Bit-Muster als 256 mögliche Werte von 0 bis 255
einordnen; `b` und `B` unterscheiden; Datenmenge und Datenrate nur nach
Einheitenangleichung verrechnen; einfache ASCII-/UTF-8-Zeichen als codierte
Bitmuster verstehen.
Form: Kapitel
Status: geprüft
Deckt ab (Zeile in ABDECKUNGSMATRIX.md): „Bit und Byte als kleinste Einheiten“
in Abschnitt 1 · Digitale Grundlagen (LF2, Jahr 1).
Voraussetzungen → Anschluss: keine inhaltlichen Vorkapitel; Wurzel der digitalen
Grundlagen → Präfixe → Zahlensysteme → Datenmengen und Datenraten.

Ausbildungsquelle: FIAusbV, KMK-Rahmenlehrplan und BIBB-Umsetzungshilfe als
Rahmen für LF2/LF3, in denen IT-Systeme, Speicher, Datenabbildung und
Vernetzung vorbereitet werden. Das Thema bleibt ein eigenständiges
Grundlagenkapitel, weil spätere Rechen- und Codierungskapitel ohne stabile
Bit-/Byte-Einheiten nicht allein lösbar sind.
Fachliche Primärquellen: NIST, *Prefixes for Binary Multiples*, für `1 B = 8
bit` sowie Bit-/Byte-Schreibweise in Datenmengeneinheiten; BIPM, *SI prefixes*,
für dezimale SI-Präfixe; RFC 20 für 7-Bit-ASCII im 8-Bit-Byte; RFC 3629 für
UTF-8 als variable 1- bis 4-Oktett-Codierung mit ASCII-Kompatibilität. NIST IR
8354 und IEC 80000-13 bleiben als Quellenbasis sichtbar, wurden aber nicht als
maschinelle Belege gezählt, weil PDF/Webstore-Zitate im Quellencheck nicht
robust prüfbar sind.
Didaktische Vergleiche: Das Folgekapitel `prefixe` vertieft SI- und
Binärpräfixe; `zahlensysteme` vertieft Stellenwerte, Hex und signed/unsigned;
`datenvolumen-berechnung` und `datenrate-berechnung` vertiefen die
Rechenverfahren. `bit-byte` beschränkt sich deshalb auf die Reihenfolge Bit →
Byte → 8-Bit-Wertebereich → b/B-Falle → Menge gegen Rate → Zeichen als
Bitmuster.
Lokaler Materialabgleich: `_material_index/extraktion/Prüfung_5.md` enthält bei
der Bilddatenrechnung die Denkoperation `8 Bit = 1 Byte` und die anschließende
Umrechnung über KiB/MiB/GiB/TiB. Übernommen wurden nur Themenumfang und
Umrechnungsbedarf; kein geschützter Aufgaben- oder Lösungstext.

Geprüfte Kernaussagen (8, mit maschinell prüfbarem Beleg in
`src/content/quellen/belege.json`; `npm run check:sources` grün):
1. Ein Byte besteht aus acht Bit. (NIST)
2. Ein Kibibit entspricht 2¹⁰ Bit beziehungsweise 1024 Bit. (NIST)
3. SI-Präfixe bezeichnen dezimale Vielfache und Teile von SI-Einheiten. (BIPM)
4. RFC 20 schlägt Standard-ASCII als 7-Bit-Code vor, eingebettet in ein
   8-Bit-Byte mit führendem Nullbit. (RFC 20)
5. RFC 20 beschreibt die ASCII-Zeichendarstellung als 7 Bit mit b7 als
   höchstwertigem und b1 als niedrigstwertigem Bit. (RFC 20)
6. UTF-8 bewahrt den vollständigen US-ASCII-Bereich; US-ASCII-Zeichen werden in
   einem Oktett mit dem normalen ASCII-Wert codiert. (RFC 3629)
7. UTF-8 codiert Unicode-Zeichen mit variabler Oktettzahl. (RFC 3629)
8. UTF-8 codiert Zeichen aus U+0000 bis U+10FFFF mit Sequenzen aus 1 bis 4
   Oktetten. (RFC 3629)

Lösbarkeitsnachweis (realer, abstrahierter Aufgabentyp + tragende Kapitelteile):
Typ A (aus `_material_index/extraktion/Prüfung_5.md`, abstrahiert):
„Berechne aus einer Bitmenge eine Speichergröße und wandle über Byte in größere
Einheiten weiter.“ Der erste zwingende Schritt `Bit → Byte` ist allein über die
Kapitelteile „Byte: acht Bit als Standardgruppe“ und „Die b/B-Falle“ lösbar; die
anschließenden Präfixschritte sind als Anschluss an `prefixe` bewusst
ausgelagert. Typ B (prüfungsüblicher Kern): „Wie lange dauert eine 600-MB-Datei
bei 50 Mbit/s ideal?“ ist allein mit „Die b/B-Falle“ und „Speicher ist Menge,
Datenrate ist Geschwindigkeit“ lösbar: `50 Mbit/s ÷ 8 = 6,25 MB/s`,
`600 MB ÷ 6,25 MB/s = 96 s`.
Didaktik, Fehlerfallen und Anwendung geprüft: Einstieg, Lernleiter,
Lichtschaltermodell, 2^n-Mustertabelle, 8-Bit-Wertebereich, b/B-Umrechnung,
Menge-/Rate-Tabelle, drei Grundformeln, Präfix-Einordnung als Vorschau, ASCII-
und UTF-8-Abgrenzung sowie typische Fehler vorhanden. Rechenwege geprüft:
`2^8 = 256`, Bereich `0` bis `255`, `100 Mbit/s = 12,5 MB/s`, `600 MB` bei
`50 Mbit/s = 96 s`, `200 MB` bei `100 Mbit/s = 16 s`, `1 TB ≈ 931,32 GiB`,
`20 ASCII-Zeichen = 160 Bit`.
Glossar, Quellen und Links geprüft: `<Term>`-IDs `bit`, `byte`, `nibble`,
`datenrate`, `durchsatz`, `dezimalpraefix`, `binaerpraefix` und `ascii` sind
vorhanden; Quellenbank und `lessonSourceIds['bit-byte']` enthalten
Ausbildungsquellen, NIST, BIPM, RFC 20, RFC 3629 und Unicode.
Unabhängiger Prüfer-Pass (Erzeuger ≠ Prüfer): 2026-06-30, keine offenen Funde.
Gegnerisch nach §7 geprüft: Definitionen und Zahlen selbst nachgerechnet
(`2^8 = 256`, Wertebereich `0` bis `255`, `100 Mbit/s = 12,5 MB/s`, `600 MB`
bei `50 Mbit/s = 96 s`, `200 MB` bei `100 Mbit/s = 16 s`,
`1 TB ≈ 931,32 GiB`, `20 ASCII-Zeichen = 160 Bit`), Zitate gegen die belegten
Aussagen geprüft, Voraussetzungen als Wurzelkapitel verifiziert und den
Lösbarkeitsnachweis Typ A/B allein mit der Lerndatei durchgespielt.
Funde (alle behoben):
1. Zwei `<Term>`-IDs nutzten Umlaut-IDs (`dezimalpräfix`, `binärpräfix`) statt
   der vorhandenen Glossar-IDs `dezimalpraefix` und `binaerpraefix`; in
   `bit-byte.mdx` korrigiert.
2. Das im Kapitel eingeführte Kernkonzept `Nibble` fehlte im
   Voraussetzungs-Register; Registereintrag ergänzt.
3. Der zweite Faktenbeleg formulierte über das Zitat hinaus, Bit sei damit die
   Grundeinheit binärer Datenmengenangaben; Aussage auf den belegten
   Kibibit-Wert eingegrenzt.
Technische Checks: `npm.cmd run check:sources`, `npm.cmd run check:consistency`,
`npm.cmd run lint`, `npm.cmd run test`, `npm.cmd run build` grün am 2026-06-30.
Entscheidung und offene Punkte: Eigenständiges Wurzelkapitel im gemeinsamen
Grundlagenpfad. Keine offenen Punkte. Nächstes aktives Kapitel gemäß
Lückenliste: `homeoffice-ergonomie` (Phase Bau).

### `linux-chmod`

Slug: `linux-chmod`
Kompetenz: Linux-Dateirechte symbolisch (`rwxr-xr-x`) und oktal (`755`) lesen,
berechnen und begründen; `r=4`, `w=2`, `x=1` und die feste Reihenfolge
User-Group-Other anwenden; den Bedeutungsunterschied von `r`/`w`/`x` bei Dateien
und Verzeichnissen erklären; symbolische `chmod`-Befehle (`u+x`, `g-w`, `o=`,
`a+r`) und Sonderbits (setuid, setgid, sticky) einordnen; riskante Modi wie `777`
als sicherheitskritisch erkennen.
Form: Kapitel
Status: geprüft
Deckt ab (Zeile in ABDECKUNGSMATRIX.md): „Dateirechte unter Linux (chmod)" in
Abschnitt 2 · IT-Systeme (LF2, Jahr 1).
Voraussetzungen → Anschluss: Zahlensysteme (Oktal) und Dateisysteme (Inode,
Metadaten) → Linux-Dateirechte (chmod) → Prozesse/Threads bzw. Virtualisierung.

Ausbildungsquelle: FIAusbV, KMK-Rahmenlehrplan und BIBB-Umsetzungshilfe als Rahmen
für LF2 (Arbeitsplätze ausstatten, IT-Systeme einrichten, Rechte und Sicherheit
begründen). Eigenständiges Grundlagenkapitel, weil die in `dateisysteme`
angerissene Rechteachse hier vertieft und für Server- und Sicherheitsthemen
vorbereitet wird.
Fachliche Primärquellen: IEEE Std 1003.1 (POSIX) chmod für symbolischen gegenüber
oktalem Modus, die who-Symbole (u/g/o/a), die Operatoren (+/-/=) und die absolute
Wirkung der Oktalzahl; Linux man-pages chmod(2) für die Modus-Bits mit Oktalwerten
(S_IRUSR 0400, S_IWUSR 0200, S_IXUSR 0100), die x-Bedeutung bei Verzeichnissen
sowie die Sonderbits S_ISUID (4000), S_ISGID (2000) und S_ISVTX/Sticky (1000). GNU
Coreutils chmod bleibt als praxisnahe Sekundärquelle im sichtbaren Quellenblock,
wurde aber nicht als maschineller Beleg gezählt, weil `npm run check:sources` dort
HTTP 403 erhält (gleiche Einschränkung wie bei Kingston in `cpu-ram-speicher`).
Didaktische Vergleiche: Aufbau Faktenkern (Rollen + r/w/x-Werte) → rwx lesen (Datei
gegenüber Verzeichnis) → Oktalschreibweise → Schritt-für-Schritt-Umrechnung in
beide Richtungen → symbolische Modi → Sonderbits → Fehlerfallen. Vorausgesetzt
werden nur bereits eingeführte Konzepte: Oktal aus `zahlensysteme`, Inode und
Metadaten aus `dateisysteme`.
Lokaler Materialabgleich: In `_material_index/extraktion/Prüfung_7.md` erscheint
`chmod` in einer Befehl-zu-Bedeutung-Zuordnung (chmod = Ändern von
Zugriffsrechten). Übernommen wurde nur die abstrakte Denkoperation; kein
geschützter Aufgaben- oder Lösungstext.

Geprüfte Kernaussagen (11, mit maschinell prüfbarem Beleg in
`src/content/quellen/belege.json`; `npm run check:sources` grün):

1. Die Systemaufrufe chmod()/fchmod() ändern die Modus-Bits einer Datei. (man7)
2. Der Dateimodus umfasst die Dateizugriffsbits (file permission bits). (man7)
3. Der mode-Operand ist entweder ein symbolischer Ausdruck (symbolic_mode) oder
   eine nicht-negative Oktalzahl. (POSIX)
4. Im symbolischen Modus ist das who-Symbol a gleichbedeutend mit ugo. (POSIX)
5. Eigentümer-Lesen entspricht S_IRUSR mit Oktalwert 0400. (man7)
6. Eigentümer-Schreiben entspricht S_IWUSR mit Oktalwert 0200. (man7)
7. Eigentümer-Ausführen entspricht S_IXUSR (0100); bei Verzeichnissen erlaubt es
   den Zugriff auf die Einträge. (man7)
8. Für jedes gesetzte Bit der Oktalzahl wird das zugehörige Rechtebit gesetzt, alle
   anderen werden gelöscht (absolute Wirkung). (POSIX)
9. Das set-user-ID-Bit S_ISUID hat den Oktalwert 4000. (man7)
10. Das set-group-ID-Bit S_ISGID hat den Oktalwert 2000. (man7)
11. Das Sticky-Bit S_ISVTX hat den Oktalwert 1000 und wirkt als eingeschränktes
    Löschflag. (man7)

Lösbarkeitsnachweis (realer, abstrahierter Aufgabentyp + tragende Kapitelteile):
Typ A (aus Prüfung_7, abstrahiert): „Ordne den Befehl `chmod` seiner Bedeutung zu"
ist über den Abschnitt „Worum geht's" und das Glossar `chmod`/`dateirechte`
lösbar. Typ B (prüfungsüblicher Kern): „Rechne `-rw-r-----` in eine Oktalzahl um
und benenne, wer ausführen darf" ist über Faktenkern (r=4/w=2/x=1, Reihenfolge
UGO), Oktaltabelle und die StepByStep-Umrechnung lösbar; im Kapitel als „Typische
Prüfungsaufgabe" mit Ergebnis 640 vollständig durchgerechnet. Beide Typen brauchen
keinen Begriff außerhalb dieses Kapitels oder bereits geprüfter Vorkapitel.
Didaktik, Fehlerfallen und Anwendung geprüft: Ziel/Einstieg, Schlüssel-Analogie,
Faktenkern, Datei-/Verzeichnis-Tabelle, Oktaltabelle, zwei StepByStep-Umrechnungen,
symbolische Modi, Sonderbits, sieben Fehlerfallen und ein Praxisfall vorhanden.
Alle Umrechnungen nachgerechnet: 755=rwxr-xr-x, 750=rwxr-x---, 644=rw-r--r--,
640=rw-r-----.
Glossar, Quellen und Links geprüft: `<Term>`-IDs `dateirechte`, `bit`,
`dateisystem` und `inode` sind gültig; das lokale `<Glossar>` deckt chmod, rwx,
Oktalmodus und Sticky Bit ab. Sichtbare Quellen und
`lessonSourceIds['linux-chmod']` enthalten KMK, FIAusbV, BIBB, POSIX, GNU Coreutils
und man7.
Sprachprüfung: echte Umlaute und ß; Title-Case-Überschriften in deutsche
Kleinschreibung korrigiert; Tippfehler („wiederzürkennen", „Ausserdem") behoben.
Unabhängiger Prüfer-Pass (Erzeuger ≠ Prüfer): 2026-06-29, keine offenen Funde.
Gegnerisch nach §7 geprüft: Definitionen und alle Oktalrechnungen selbst
nachgerechnet (755=rwxr-xr-x, 750=rwxr-x---, 700=rwx------, 644=rw-r--r--,
600=rw-------, 640=rw-r-----; Sonderbits 4000/2000/1000), rwx-Semantik bei Datei
gegenüber Verzeichnis, symbolische Modi, Voraussetzungen und Lösbarkeit Typ A/B;
`<Term>`- und Quellen-IDs sowie der Materialbeleg in `Prüfung_7.md` gegengeprüft.
Funde (alle behoben): Drei Beleg-Zitate in `belege.json` stützten nur einen
Halbsatz. Claim 2 (Dateimodus-Zusammensetzung) und Claim 4 (who-Symbole) wurden
auf den robust zitierbaren Quellsatz eingegrenzt, Claim 3 auf den vollen
POSIX-Satz erweitert. Ein robustes Zitat der jeweils weggelassenen Satzhälfte
scheitert am Zeilenumbruch der man7-Seite (`set- user-ID`) bzw. am Symbol-Markup
der POSIX-Seite (`u , g , o`); die betroffenen Fakten (set-*/Sticky-Bits, u/g/o)
bleiben über die Claims 9–11 und den Faktenkern des Kapitels gedeckt.
Technische Checks: `npm run check:sources` (76/76 online und Zitate gefunden, davon
11 für `linux-chmod`), `npm run check:consistency`, `npm run lint`, `npm run test`
(8 Tests) und `npm run build` — alle grün am 2026-06-29, erneut nach dem
Prüfer-Pass und den Beleg-Korrekturen bestätigt.
Entscheidung und offene Punkte: Eigenständiges Kapitel im gemeinsamen
Grundlagenpfad. Keine offenen Punkte. Nächstes aktives Kapitel gemäß Lückenliste
und Abhängigkeitsketten: `bit-byte` (oberste `ungeprüft`-Zeile, Wurzel von
Kette 1; Phase Bau, Faktenbelege ausstehend).

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
Grundlagenpfad. Das separate, inzwischen geprüfte Kapitel `scan-bilddaten` ist als
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
Deckt ab (Zeile in ABDECKUNGSMATRIX.md):
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

Lösbarkeitsnachweis (realer, abstrahierter Aufgabentyp + tragende Kapitelteile):
Didaktik, Fehlerfallen und Anwendung geprüft:
Glossar, Quellen und Links geprüft:
Unabhängiger Prüfer-Pass (Datum; Funde behoben; Erzeuger ≠ Prüfer):
Technische Checks:
Entscheidung und offene Punkte:
```
