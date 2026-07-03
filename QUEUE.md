# QUEUE.md — Arbeitsstand und Warteschlange

Stand: 03.07.2026 · Regeln: `PROJEKT.md`. Diese Datei beantwortet nur:
**wo stehen wir, was kommt als Nächstes und warum.**

Bestand (aus `AP1_STATUS.md`, generiert): 100 Kapitel im TOC (80 mit Inhalt,
20 Stubs). Vertrauen: **0 geprüft, 14 teilgeprüft, 86 ungeprüft.**

## 1. Aktueller Arbeitsstand

| Feld | Wert |
|---|---|
| Aktueller Queue-Eintrag | `bit-byte` (Neustartprüfung abschließen) |
| Kapiteldatei | `src/content/lessons/bit-byte.mdx` |
| Vertrauen | `teilgeprüft` |
| Aktuelle Phase | Aufgabenabgleich + Restaudit offen |
| Nächster Eintrag | erst nach Abschluss festlegen (nächster offener Haken unten) |

**Jeder Chat aktualisiert diese Tabelle und hakt seinen Eintrag unten ab.**

## 2. Start-Prompt für jeden neuen Chat (kopieren)

```text
Du arbeitest im Projekt grundlast.

Lies zuerst PROJEKT.md (verbindliche Regeln) und QUEUE.md (Arbeitsstand,
Warteschlange) vollständig. Alles im Projekt kann KI-generiert sein und gilt
als ungeprüft, bis es die Gates aus PROJEKT.md bestanden hat.

Bearbeite genau einen Eintrag: den Queue-Eintrag aus QUEUE.md Abschnitt 1
bzw. den obersten offenen Haken der Warteschlange.

Verbindlich: Erst Quellen-/Benchmark-Matrix, dann Abschnitts-Audit, erst
dann Text (PROJEKT.md Abschnitt 5). Web-Recherche mit mindestens 3 Quellen,
davon 1 Primärquelle. Material in material/ nur als Themen-Checkliste.
Keine neuen Kapitel, Kategorien oder Roadmaps erfinden. Am Ende: technische
Checks, AP1_AUDIT_MATRIX.md ergänzen, QUEUE.md aktualisieren (Arbeitsstand +
Haken + abgeschlossenes Kapitel in die Prüf-Warteschlange in Abschnitt 2b
eintragen), Abschlussformat aus PROJEKT.md Abschnitt 7 ausgeben.
```

## 2b. Prüf-Prompt — unabhängiger Prüfer (starkes Modell, z. B. Opus auf max)

**Wann Pflicht** (Erzeuger≠Prüfer, siehe PROJEKT.md Abschnitt 5, Audit-Gates):

- **Sofort nach jedem Rechen-Kapitel** (alles mit Formeln/Zahlen: Subnetting,
  Nutzwertanalyse, Datenraten, Handelskalkulation, Energiekosten, AfA …).
- Sonst gesammelt **alle 3–5 abgeschlossenen Kapitel**.
- Der Arbeits-Chat trägt seine Kapitel nach Abschluss unten in die
  Prüf-Warteschlange ein; der Prüf-Chat hakt sie ab. So geht nichts vergessen.

```text
Du arbeitest im Projekt grundlast als unabhängiger Prüfer.

Lies PROJEKT.md (verbindliche Regeln). Prüfe die Kapitel aus der
Prüf-Warteschlange in QUEUE.md Abschnitt 2b (alle offenen Haken).

Du hast diese Kapitel NICHT geschrieben und darfst nichts davon glauben.
Deine Aufgabe ist es, Fehler zu FINDEN, nicht das Kapitel zu loben:
- Rechne jede Zahl, Formel und Tabelle selbst nach (mit Einheiten).
- Prüfe jede Definition und Regel per Web-Recherche gegen Primärquellen
  (Quellenhierarchie aus PROJEKT.md Abschnitt 4).
- Prüfe die Audit-Gates aus PROJEKT.md Abschnitt 5 einzeln nach.
- Prüfe: ohne Vorwissen verständlich? Reihenfolge logisch?

Ergebnis pro Kapitel: BESTANDEN oder DURCHGEFALLEN mit konkreter Fehlerliste.
Bei DURCHGEFALLEN: Vertrauensstatus in src/lib/audit/status.ts NICHT anheben,
Befund als neuen Eintrag oben in die Warteschlange (Abschnitt 4, P0) und in
die Notizen (Abschnitt 5) eintragen. Fehler nicht selbst fixen — nur
dokumentieren, der nächste Arbeits-Chat behebt sie.
Bei BESTANDEN: Befund in AP1_AUDIT_MATRIX.md dokumentieren und den Haken
in der Prüf-Warteschlange abhaken.
```

### Prüf-Warteschlange (vom Arbeits-Chat befüllen, vom Prüf-Chat abhaken)

_(leer — Arbeits-Chats tragen hier abgeschlossene Kapitel ein: `- [ ] slug`)_

## 3. Lücken-Audit gegen den offiziellen AP1-Rahmen

Geprüft am 02.07.2026 gegen §§ 7–9 FIAusbV, KMK-Rahmenlehrplan, BIBB sowie
Wiedergaben des IHK-AkA/ZPA-Katalogs (2. Auflage, ab Frühjahr 2025); ergänzt
um die Prüfungshäufigkeit 2021–2025 aus `material/AP1_Lernplan.md`
(Community, nur Checkliste). Quellen in Abschnitt 6.

### Befund in einem Satz

**Kein Prüfungsthema fehlt komplett in der Themenlandkarte** — das Risiko
liegt in ungeprüften/unfertigen Kapiteln bei prüfungszentralen Themen und in
drei dünnen Stellen: Barrierefreiheit (Stub), Cloud-Modelle (Stub),
Schreibtischtest/Code-Analyse (bisher kein klarer Ort).

### Prüfungs-Dauerbrenner (Häufigkeit in 9 Prüfungen 2021–2025, Community-Analyse)

| Thema | Häufigkeit | Zustand im Projekt |
|---|---|---|
| Nutzwertanalyse & Angebote | 9/9 | `nutzwertanalyse` draft/ungeprüft, `angebotsvergleich` ready/ungeprüft |
| Netzplan & Projektmanagement | 9/9 | `netzplan` draft/ungeprüft, `gantt-diagramm` ready/ungeprüft |
| Schreibtischtest & Code-Analyse | 9/9 | **kein klarer Ort** — Scope-Entscheid nötig (zu `pseudocode-einstieg`?) |
| SQL (einfache SELECTs) & ER-Modell | hoch | `sql-grundlagen`, `er-grundlagen` draft/ungeprüft |
| IPv6 & Subnetting | hoch | `ipv6-grundlagen`, `ipv4-subnetting` teilgeprüft ✓ |
| Dateigrößen & Speicher rechnen | hoch | `datenvolumen-berechnung`, `datenrate-berechnung` teilgeprüft ✓ |
| KI, Barrierefreiheit, Englisch | neu 2025 | `ki-grundlagen` ungeprüft; Barrierefreiheit **Stub**; Englisch ohne Ort |

### Katalog-2025-Deltas (Arbeitsannahme, beim Aufgabenabgleich bestätigen)

- **Neu/verstärkt:** Barrierefreiheit (WCAG-Basics), KI-Grundlagen, englische
  Fehlermeldungen/Handbuch-Auszüge, Projektmanagement, DSGVO-Betroffenenrechte,
  Anonymisierung vs. Pseudonymisierung, 2FA, BSI-Grundschutz-Auszüge.
- **Raus/geparkt:** RAID-Konfiguration (Verfügbarkeits-Konzept bleibt!), SAN,
  komplexes SQL (JOIN/GROUP BY — einfache SELECTs bleiben gefordert),
  Struktogramm/PAP (→ UML-Aktivität), ISO 2700x (→ BSI), NoSQL,
  OOP-Vererbung (Klassen/Attribute/Methoden/Sichtbarkeit bleiben), LTE/5G.
- **Warnung:** „AP1 ist 95 % Multiple Choice" (kursiert im Netz) ist falsch —
  ungebundene, frei zu beantwortende Aufgaben.

## 4. Warteschlange

Reihenfolge: oben nach unten, ein Eintrag pro Chat, abhaken mit `[x]`.
Grundsatz aus PROJEKT.md: Audit vor Neuschreiben; Stubs erst ab P3.

### P0 — Angefangenes zu Ende bringen

- [ ] `bit-byte` — Neustartprüfung abschließen (Aufgabenabgleich, Restaudit) → Ziel `geprüft`
- [ ] `prefixe` — Audit abschließen (teilgeprüft, Aufgabenabgleich offen) → Ziel `geprüft`
- [ ] `zahlensysteme` — Audit abschließen (teilgeprüft, Aufgabenabgleich offen) → Ziel `geprüft`
- [ ] Offener technischer Plan: `docs/PLAN_RECHENWEG.md` umsetzen (Rechenweg-/StepByStep-Komponenten entfernen, Inhalt 1:1 in MDX; betrifft ~40 Kapitel — vor breiter Kapitelarbeit erledigen)

### P1 — Grundlagenkette fertig auditieren (Basis für alles Rechnen)

- [ ] `datenrate-berechnung` → Ziel `geprüft`
- [ ] `ipv4-subnetting` → Ziel `geprüft` (Dauerbrenner Netzwerkplanung)
- [ ] `netzwerkkonfiguration` → Ziel `geprüft` (DHCP/DORA, DNS, Diagnosebefehle, Englisch-Fehlermeldungen einbauen)
- [ ] `datenvolumen-berechnung` → Ziel `geprüft` (binär 1024 vs. dezimal 1000 sauber!)

### P2 — Prüfungs-Dauerbrenner (9/9 und hohe Frequenz)

- [ ] `nutzwertanalyse` — auditieren + auf Goldstandard (K.O.- vs. Soll-Kriterium, Gewichtung als Managemententscheidung)
- [ ] `angebotsvergleich` — auditieren (quantitativ vs. qualitativ)
- [ ] `netzplan` — auditieren + heben (FAZ/FEZ/SAZ/SEZ, kritischer Pfad, Puffer)
- [ ] `gantt-diagramm` — auditieren
- [ ] Scope-Entscheid + Umsetzung: **Schreibtischtest/Trace Table & Code-Analyse** (Erweiterung von `pseudocode-einstieg` oder eigenes Kapitel — nach Themenlandkarte entscheiden, nicht raten)
- [ ] `uml-aktivitaet` — auditieren + heben (Struktogramm-Nachfolger)
- [ ] `er-grundlagen` — auditieren + heben (Chen-Notation)
- [ ] `sql-grundlagen` — auditieren + heben (nur einfache SELECT/WHERE/ORDER BY, Operatoren; kein JOIN)
- [ ] `handelskalkulation` — auditieren + heben (Vorwärts-/Rückwärtsschema)
- [ ] `kaufmaennische-rechenaufgaben` — auditieren (Skonto, Leasing, Amortisation)
- [ ] `dsgvo-basics` — auditieren + heben (Betroffenenrechte, Anonymisierung vs. Pseudonymisierung — 2025 verstärkt)
- [ ] `schutzziele` — auditieren (CIA, Schutzbedarf, BSI 200-3, Risikomatrix)
- [ ] `verschluesselung-hash-vpn` — auditieren (symmetrisch/asymmetrisch/hybrid, SHA-256, Signatur) **+ Dubletten-Entscheid** mit `verschluesselung-sicherheit` (zusammenlegen?)
- [ ] `passwoerter-hashing` — auditieren + heben (Salt/Pepper, 2FA: Wissen/Besitz/Biometrie)
- [ ] `ipv6-grundlagen` — Audit abschließen (Kürzungsregeln, Adresstypen, SLAAC)
- [ ] `osi-modell` — Audit abschließen (+ Port-Tabelle: 20/21, 22, 25, 53, 80, 443, 143, 3389)

### P3 — AP1-Kern breit absichern

- [ ] `cpu-ram-speicher` — auditieren + heben (Leistungsdaten, HDD/SSD/Hybrid)
- [ ] `hardware-schnittstellen` — auditieren (DisplayPort/HDMI/USB-C/DVI, USB-Generationen)
- [ ] `usv-systeme` — auditieren + heben (VFI/VFD/VI nach Norm)
- [ ] `energiekosten` — auditieren + heben (kW-Formel, Wirkungsgrad, Amortisation)
- [ ] `scan-bilddaten` — auditieren + heben (DPI, Farbtiefe)
- [ ] `homeoffice-ergonomie` — Audit abschließen
- [ ] **Barrierefreiheit**: Stub `softwareergonomie` per Scope-Entscheid ausarbeiten (neu 2025: Braillezeile, Screenreader, WCAG: Kontrast ≥ 4,5:1, Alt-Texte, Tastaturnavigation, Labels)
- [ ] `cloud-konzepte` — Stub per Scope-Entscheid ausarbeiten (IaaS/PaaS/SaaS, VDI) — Lernplan: Prüfungsthema
- [ ] `virtualisierung` — auditieren + heben (Hypervisor-Typen)
- [ ] `backup-strategien` — auditieren + heben (Voll/Inkrementell/Differenziell, NAS als „Sicherung der Verfügbarkeit"; RAID nur als Verfügbarkeits-Konzept)
- [ ] `malware-grundlagen` + `endpoint-security` — auditieren
- [ ] `ki-grundlagen` — auditieren (Chancen/Risiken: Halluzination, Bias, Datenschutz, Urheberrecht — neu 2025)
- [ ] Scope-Entscheid: **Englisch-Kompetenz** (Fehlermeldungen: Connection refused, Timeout, Permission denied … — Querschnitts-Box in Netzwerk-/OS-Kapiteln oder Glossar)
- [ ] `break-even`, `variable-fixe-kosten`, `gewinnermittlung`, `afa-abschreibung` — Wirtschafts-Rechenblock auditieren + heben (je 1 Chat)
- [ ] `kauf-leasing-miete`, `eigenfremdfinanzierung`, `make-or-buy` — auditieren
- [ ] `vertragsarten`, `vertragsstoerungen`, `gewaehrleistung`, `maengelruege`, `rechnung-zahlungsziel-aufbewahrungsfristen` — Vertragsrechts-Block auditieren (Fallunterscheidungen 2025 verstärkt)
- [ ] `lastenheft-pflichtenheft`, `vorgehensmodelle`, `scrum`, `bpmn` — Projekt-Block auditieren (SMART ergänzen?)
- [ ] `use-case-diagramm` — auditieren; **Klassendiagramm-Lücke** klären (Stub `uml-beziehungen`: Kardinalitäten, Sichtbarkeit — laut Lernplan gefordert)
- [ ] `dateisysteme`, `linux-chmod`, `prozess-thread`, `zentral-dezentral` — OS-Block auditieren (BIOS/UEFI-Lücke prüfen)
- [ ] `tcp-udp`, `firewall-dmz`, `port-forwarding`, `wlan-standards`, `imap-pop3-smtp` — Netzwerk-Block-Audits abschließen
- [ ] `normalisierung` — auditieren (1NF–3NF)
- [ ] LF1/Kommunikations-Block auditieren: `bedarfsanalyse-feedback`, `schulz-von-thun`, `schulung-einweisung-key-user`, `serviceanfragen-support-level`, `fehlermanagement-stoerungsannahme`, `organisationsformen-leitbild-nachhaltigkeit-esg`, `aufbauorganisation`, `crm-erp-dms` (je 1 Chat)
- [ ] `mtbf-mttf`, `raid-systeme` — als Verfügbarkeits-Hintergrund knapp halten (RAID: AP2)
- [ ] `von-neumann`, `marktformen`, `aida-formel`, `stamm-bewegungsdaten`, `website-statisch-dynamisch`, `pseudocode-einstieg` (falls nicht in P2 erledigt) — Rest-Audits

### P4 — Vollständigkeit Ausbildung/Klausur (Stubs, nicht AP1-zentral)

- [ ] Qualitäts-Block: `pdca-zyklus`, `iso-9000`, `iso-25010`, `efqm-modell` (Scope-Entscheid: ggf. ein Sammelkapitel statt vier)
- [ ] `machbarkeitsanalyse`, `projektubergabe` (§ 9: Abnahme/Leistungskontrolle)
- [ ] `ssh-telnet`, `pki-zertifikate` (final-Markierung ist unbelegt → auditieren)
- [ ] `zweiseitiger-handelskauf`, `logikgatter`, `responsive-webdesign`, `mockup-wireframe`, `audio-kompression`
- [ ] Software-Anschluss: `oop-basics` (ohne Vererbungstiefe), `programmierparadigmen`, `git-versionsverwaltung`, `libraries-frameworks`, `teststrategien`, `uml-beziehungen` (falls nicht in P3)
- [ ] `bbig-ausbildungsvertrag`, `arbeitnehmerrechte`

## 5. Notizen aus Arbeits-Chats

(Auffälligkeiten hier eintragen statt nebenbei fixen.)

- `pki-zertifikate` steht als `final`/reviewed im TOC, ist aber `ungeprüft` —
  Beispiel dafür, dass alte Statuswerte kein Beleg sind.
- `verschluesselung-sicherheit` vs. `verschluesselung-hash-vpn`: Dublette,
  Entscheid in P2.
- Auf dem Branch `backup/lokal-altstand-2026-07-03` liegt gesicherter alter
  Arbeitsstand mit Kapitel-Audits (u. a. `usv-systeme` deutlich ausführlicher,
  `bit-byte`, `linux-chmod`, `datenrate`, `datenvolumen`, `von-neumann`,
  `raid-systeme`). Beim Bearbeiten dieser Kapitel den Altstand als Rohstoff
  sichten — gilt aber wie alles als ungeprüft.

## 6. Quellen des Audits

Offiziell:

- § 8 FIAusbV (Inhalt AP1, erste 18 Monate): https://www.gesetze-im-internet.de/fiausbv/__8.html
- § 9 FIAusbV (Prüfungsbereich, 90 Min): https://www.gesetze-im-internet.de/fiausbv/__9.html
- FIAusbV gesamt: https://www.gesetze-im-internet.de/fiausbv/
- KMK-Rahmenlehrplan Fachinformatiker/-in: https://www.kmk.org/fileadmin/Dateien/pdf/Bildung/BeruflicheBildung/rlp/Fachinformatiker_19-12-13_EL.pdf
- BIBB-Umsetzungshilfe: https://www.bibb.de/dienst/publikationen/de/16661
- IHK Hannover zu den Prüfungskatalogen (2. Auflage ab Frühjahr 2025): https://www.ihk.de/hannover/hauptnavigation/ausbildung-und-weiterbildung/ausbildung/ausbildung-a-z/neuordnungen/pruefungskataloge-it-berufe-6438900
- IHK-AkA Prüfungsübersicht: https://www.ihk-aka.de/pruefungen/ap/berufe/B1202

Verlässliche Wiedergaben des Katalogs (Katalog selbst nur via u-form Verlag):

- IT-Berufe-Podcast, AP1-Themenliste: https://it-berufe-podcast.de/vorbereitung-auf-die-ihk-abschlusspruefung-der-it-berufe/moegliche-themen-von-teil-1-der-gestreckten-abschlusspruefung-gap-in-den-it-berufen/
- IT-Berufe-Podcast #190, Katalog 2025: https://it-berufe-podcast.de/neuer-pruefungskatalog-fuer-die-ap1-der-it-berufe-ab-2025-it-berufe-podcast-190/
- ausbildung-in-der-it.de (Format): https://ausbildung-in-der-it.de/pruefung/teil-1-der-gestreckten-abschlusspruefung

Community (nur Themen-Checkliste, keine Faktenbasis):

- `material/AP1_Lernplan.md` (Masterplan, Katalog 2025 + Prüfungsanalyse 2021–2025)
- `material/AP1_Lernzettel.pdf`
- fachinformatiker.de Downloads: https://www.fachinformatiker.de/files/file/44-ap1-pr%C3%BCfungsvorbereitung-masterplan/ · https://www.fachinformatiker.de/files/file/36-fachinformatiker-ap1-lernzettel-ab-2025/
