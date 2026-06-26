# AP1-Audit-Matrix

Stand: 17.06.2026

> **Status-Uebersicht ist jetzt generiert:** Die massgebliche Status-/Vertrauenstabelle
> steht in `AP1_STATUS.md` (erzeugt aus dem Code via `npm run emit:status`). Diese Datei
> ist das **Audit-Beleg-Archiv** (Begruendungen, gepruefte Fakten, Quellen pro Kapitel).
> Die Status-Spalten weiter unten koennen veraltet sein — Quelle der Wahrheit ist der Code
> (`src/lib/audit/status.ts`, `src/lib/toc/data/`), gesichert vom Konsistenz-Waechter.

Diese Datei ist das Kontrollzentrum fuer den Neustart aus `AP1_NEUSTART.md`.
Sie ersetzt kein Kapitel und keine Quelle. Sie sagt nur, welchen Inhalten wir
vertrauen duerfen und welche noch KI-ungeprueft sind.

## Grundregel

Alle bestehenden Kapitel, Plaene und Statuswerte gelten als `ungeprueft`, bis
sie einzeln durch Quellen-, Fakten-, Didaktik- und Aufgaben-Gate gegangen sind.

`Status alt` ist nur der technische Stand aus `src/lib/toc/data/*.ts`.
`Vertrauen` ist der echte Freigabestatus fuer den AP1-Neustart.

## Statuswerte

| Feld | Werte |
|---|---|
| AP1 alt | `ja`, `nein` aus TOC; noch kein Beweis |
| Status alt | `stub`, `draft`, `ready`, `final` aus TOC |
| Vertrauen | `ungeprueft`, `teilgeprueft`, `geprueft`, `gesperrt` |
| Prioritaet | `P1` sofort, `P2` wichtig, `P3` spaeter, `Parken` |

## Zusatzschicht ab 2026-06-16

`AP1_KONTROLLZENTRUM_2026.md` fuehrt den aktuellen Quellenstand, die
AP1-2025-Delta-Hinweise und das spaetere Probepruefungs-Mapping. Bei der
naechsten Matrix-Ueberarbeitung bekommt jedes Kapitel zusaetzlich eine klare
Einordnung:

| Feld | Werte |
|---|---|
| AP1 2025 | `hoch`, `mittel`, `niedrig`, `unklar`, `raus` |
| Klausur | `hoch`, `mittel`, `niedrig`, `unklar` |
| AP2/Grundlage | `ja`, `nein`, `unklar` |
| Aufgabenabgleich | `fehlt`, `teilweise`, `bestanden`, `gescheitert` |

Bis diese Felder pro Kapitel gepflegt sind, bleiben alte AP1-Markierungen nur
Arbeitshypothesen.

## Audit-Gates

Ein Kapitel darf erst `geprueft` werden, wenn diese Punkte dokumentiert sind:

1. Offizieller Bezug: FIAusbV, KMK, BIBB oder IHK/AkA/ZPA-Hinweis.
2. Fachquelle: Primaerquelle fuer harte Aussagen.
3. Faktencheck: 5 bis 10 harte Aussagen gegen Quellen geprueft.
4. Didaktikcheck: ohne Vorwissen verstaendlich, mit Beispielen und Fallen.
5. Aufgabencheck: AP1-naher Aufgabentyp mit Loesungsweg.
6. Umfangscheck: Pflicht, Kann, Extra/Raus klar getrennt.
7. Technikcheck: bei Inhalts-/App-Aenderung `npm.cmd run lint`; bei App/MDX auch Build.

## Erste Audit-Reihenfolge

| Rang | Slug | Warum zuerst |
|---:|---|---|
| 1 | `bit-byte` | Einheiten, b/B-Falle, Datenmenge und Datenrate tragen viele Folgekapitel. |
| 2 | `prefixe` | KB/KiB, MB/MiB und Hersteller-/OS-Anzeigen sind typische Rechenfallen. |
| 3 | `zahlensysteme` | Basis fuer Binaer, Hex, chmod, IPv4 und technische Lesekompetenz. |
| 4 | `datenrate-berechnung` | AP1-nahe Rechenaufgaben, Zeitdruck, Einheitenumstellung. |
| 5 | `ipv4-subnetting` | Netzadresse, Broadcast, Hostbereich, CIDR; hoher Fehlerwert. |
| 6 | `netzwerkkonfiguration` | DHCP, DNS, Gateway und Diagnose sind AP1- und Praxis-Kern. |

## Gesamtbestand

### Grundlagen

| Slug | AP1 alt | Status alt | Vertrauen | Prioritaet | Naechste Aktion |
|---|---|---|---|---|---|
| `von-neumann` | ja | ready | ungeprueft | P2 | Quellen- und Umfangsaudit |
| `bit-byte` | ja | final | geprueft | erledigt | Quellen-, Fakten-, Didaktik- und lokaler Aufgabenarten-Abgleich abgeschlossen |
| `zahlensysteme` | ja | final | geprueft | erledigt | Quellen-, Fakten-, Glossar-, Benchmark- und lokaler Aufgabenarten-Abgleich abgeschlossen |
| `prefixe` | ja | final | teilgeprueft | P1 | Aufgabenabgleich fehlt, Textpraezisierung erledigt |

### Netzwerke

| Slug | AP1 alt | Status alt | Vertrauen | Prioritaet | Naechste Aktion |
|---|---|---|---|---|---|
| `osi-modell` | ja | ready | teilgeprueft | P2 | Aufgabenabgleich fehlt, ARP/TLS/Diagnose-Praezisierung erledigt |
| `tcp-udp` | ja | ready | teilgeprueft | P1 | Aufgabenabgleich fehlt, Quellen/Text nachgezogen |
| `imap-pop3-smtp` | ja | ready | ungeprueft | P3 | Tiefe begrenzen |
| `ipv4-subnetting` | ja | ready | teilgeprueft | P1 | Aufgabenabgleich fehlt, Quellenblock nachgezogen |
| `netzwerkkonfiguration` | ja | ready | teilgeprueft | P1 | Aufgabenabgleich fehlt, DHCP/DNS-Praezisierung erledigt |
| `ipv6-grundlagen` | ja | ready | teilgeprueft | P2 | Aufgabenabgleich fehlt, RFC-/SLAAC-/Kuerzungscheck erledigt |
| `firewall-dmz` | ja | ready | teilgeprueft | P1 | Aufgabenabgleich fehlt, BSI-/Regelcheck erledigt |
| `port-forwarding` | ja | ready | teilgeprueft | P2 | Aufgabenabgleich fehlt, NAT/CGNAT/DS-Lite/Sicherheit nachgezogen |
| `wlan-standards` | ja | ready | teilgeprueft | P1 | Aufgabenabgleich fehlt, Standards/Sicherheit/Kanalplanung nachgezogen |
| `datenrate-berechnung` | ja | ready | teilgeprueft | P1 | Aufgabenabgleich fehlt, Quellenzuordnung nachgezogen |
| `datenvolumen-berechnung` | ja | ready | teilgeprueft | P1 | Aufgabenabgleich unter Zeit fehlt; Rechenwege/Quellen/Text nachgezogen |

### Hardware und Arbeitsplatz

| Slug | AP1 alt | Status alt | Vertrauen | Prioritaet | Naechste Aktion |
|---|---|---|---|---|---|
| `cpu-ram-speicher` | ja | ready | ungeprueft | P2 | Auswahlkriterien und Quellen pruefen |
| `hardware-schnittstellen` | ja | ready | ungeprueft | P2 | Kompatibilitaet und Tiefe pruefen |
| `homeoffice-ergonomie` | ja | ready | teilgeprueft | P1 | Barrierefreiheit/Softwareergonomie nachgezogen; Aufgabenabgleich fehlt |
| `raid-systeme` | ja | draft | ungeprueft | P2 | RAID-Fakten und Grenzen pruefen |
| `usv-systeme` | ja | draft | ungeprueft | P2 | Dimensionierung und Begriffe pruefen |
| `scan-bilddaten` | ja | draft | ungeprueft | P2 | Rechenwege gegen Aufgabencheck |

### Sicherheit und Datenschutz

| Slug | AP1 alt | Status alt | Vertrauen | Prioritaet | Naechste Aktion |
|---|---|---|---|---|---|
| `dsgvo-basics` | ja | draft | ungeprueft | P2 | Gesetzesbezug und TOMs pruefen |
| `verschluesselung-hash-vpn` | ja | ready | ungeprueft | P2 | Begriffe trennen, Tiefe begrenzen |
| `verschluesselung-sicherheit` | ja | draft | ungeprueft | P3 | Dublette pruefen |
| `passwoerter-hashing` | ja | draft | ungeprueft | P2 | Hash/Salt/Pepper fachlich pruefen |
| `pki-zertifikate` | ja | final | ungeprueft | P2 | Quellen- und Aufgabencheck |
| `schutzziele` | ja | ready | ungeprueft | P2 | BSI-Bezug und Didaktik pruefen |
| `backup-strategien` | ja | draft | ungeprueft | P2 | 3-2-1, Restore, RPO/RTO pruefen |
| `mtbf-mttf` | ja | draft | ungeprueft | P3 | AP1-Tiefe pruefen |
| `ssh-telnet` | ja | stub | ungeprueft | P3 | Abschnitt bei Netzwerk-/Sicherheitsdiensten; kein eigenes Kernkapitel |
| `endpoint-security` | ja | ready | ungeprueft | P2 | Schutzmassnahmen und Quellen pruefen |
| `malware-grundlagen` | ja | ready | ungeprueft | P2 | Begriffe und Schutzmassnahmen pruefen |

### Daten und Software

| Slug | AP1 alt | Status alt | Vertrauen | Prioritaet | Naechste Aktion |
|---|---|---|---|---|---|
| `er-grundlagen` | ja | draft | ungeprueft | P2 | Modellierungsaufgaben pruefen |
| `sql-grundlagen` | nein | draft | ungeprueft | P3 | AP1-Relevanz neu klaeren |
| `normalisierung` | ja | draft | ungeprueft | P2 | Tiefe und Beispiele pruefen |
| `stamm-bewegungsdaten` | ja | ready | ungeprueft | P2 | Begriffspaare pruefen |
| `pseudocode-einstieg` | ja | ready | ungeprueft | P2 | Aufgabencheck unter Zeit |
| `uml-aktivitaet` | ja | draft | ungeprueft | P2 | Diagrammregeln pruefen |
| `use-case-diagramm` | ja | ready | ungeprueft | P2 | Notation und Grenzen pruefen |
| `uml-beziehungen` | nein | stub | ungeprueft | Parken | nur Box bei UML, keine AP1-Tiefe |
| `programmierparadigmen` | ja | stub | ungeprueft | P3 | kurze Box, keine eigene Paradigmenkunde |
| `libraries-frameworks` | nein | stub | ungeprueft | Parken | Glossar/Box bei Softwareauswahl |
| `oop-basics` | nein | stub | ungeprueft | Parken | kurze LF5-Box, keine Vererbungstiefe |
| `git-versionsverwaltung` | nein | stub | ungeprueft | Parken | Grundlagenabschnitt spaeter, nicht AP1-Kern |
| `teststrategien` | ja | stub | ungeprueft | P2 | LF5-Testfaelle bauen, keine Testautomations-Tiefe |

### Service, Projekt und Kommunikation

| Slug | AP1 alt | Status alt | Vertrauen | Prioritaet | Naechste Aktion |
|---|---|---|---|---|---|
| `serviceanfragen-support-level` | ja | ready | ungeprueft | P2 | ITIL-Begriffe nicht aufblasen |
| `fehlermanagement-stoerungsannahme` | ja | ready | ungeprueft | P2 | Ablauf und Dokumentation pruefen |
| `bedarfsanalyse-feedback` | ja | ready | ungeprueft | P2 | Kundenfall und Fragen pruefen |
| `mitarbeitermotivation-teamphasen-change` | ja | ready | ungeprueft | P3 | AP1-Tiefe kritisch pruefen |
| `schulung-einweisung-key-user` | ja | ready | ungeprueft | P2 | Einweisung/Doku-Aufgabentyp |
| `schulz-von-thun` | ja | ready | ungeprueft | P3 | nur pruefungsnah halten |
| `netzplan` | ja | draft | ungeprueft | P2 | Rechenaufgaben pruefen |
| `gantt-diagramm` | ja | ready | ungeprueft | P2 | Darstellungsaufgaben pruefen |
| `vorgehensmodelle` | ja | ready | ungeprueft | P2 | Wasserfall/V/agil sauber trennen |
| `bpmn` | ja | draft | ungeprueft | P3 | AP1-Tiefe klaeren |
| `scrum` | ja | ready | ungeprueft | P3 | offizielle Scrum-Begriffe pruefen |
| `lastenheft-pflichtenheft` | ja | draft | ungeprueft | P2 | Begriffspaare und Rollen pruefen |
| `machbarkeitsanalyse` | ja | stub | ungeprueft | P3 | Abschnitt bei Projekt/Wirtschaft, kein Einzelkapitel |
| `projektubergabe` | nein | stub | ungeprueft | Parken | Abschnitt bei Abnahme/Einweisung, kein AP1-Kernkapitel |

### Wirtschaft und Recht

| Slug | AP1 alt | Status alt | Vertrauen | Prioritaet | Naechste Aktion |
|---|---|---|---|---|---|
| `kaufmaennische-rechenaufgaben` | ja | ready | ungeprueft | P2 | Formeln und Aufgabencheck |
| `break-even` | ja | draft | ungeprueft | P2 | Rechenweg pruefen |
| `handelskalkulation` | ja | draft | ungeprueft | P2 | Vorwaerts/rueckwaerts pruefen |
| `afa-abschreibung` | ja | draft | ungeprueft | P2 | Rechts-/Steuervereinfachung pruefen |
| `variable-fixe-kosten` | ja | draft | ungeprueft | P2 | Begriffspaare und Beispiele pruefen |
| `gewinnermittlung` | ja | draft | ungeprueft | P3 | AP1-Tiefe klaeren |
| `energiekosten` | ja | draft | ungeprueft | P2 | kWh, Leistung, Wirkungsgrad pruefen |
| `nutzwertanalyse` | ja | draft | ungeprueft | P2 | Gewichtung/Rechenweg pruefen |
| `make-or-buy` | ja | ready | ungeprueft | P3 | Aufgabenrelevanz pruefen |
| `angebotsvergleich` | ja | ready | ungeprueft | P2 | Skonto/Rabatt/Nutzwert pruefen |
| `kauf-leasing-miete` | ja | ready | ungeprueft | P2 | Entscheidungskriterien pruefen |
| `marktformen` | ja | draft | ungeprueft | P3 | nur Grundunterscheidung |
| `eigenfremdfinanzierung` | ja | ready | ungeprueft | P3 | AP1-Tiefe pruefen |
| `aida-formel` | ja | ready | ungeprueft | P3 | Relevanz kritisch pruefen |
| `organisationsformen-leitbild-nachhaltigkeit-esg` | ja | ready | ungeprueft | P3 | zu breites Kapitel pruefen |
| `aufbauorganisation` | ja | ready | ungeprueft | P2 | Vollmachten/Prokura pruefen |
| `vertragsarten` | ja | ready | ungeprueft | P2 | Rechtsquellen und Beispiele |
| `rechnung-zahlungsziel-aufbewahrungsfristen` | ja | ready | ungeprueft | P2 | Fristenquellen pruefen |
| `gewaehrleistung` | ja | ready | ungeprueft | P2 | Rechtliche Genauigkeit pruefen |
| `maengelruege` | ja | ready | ungeprueft | P2 | HGB/BGB-Abgrenzung pruefen |
| `vertragsstoerungen` | ja | ready | ungeprueft | P2 | Verzug/Mangel/Unmoeglichkeit pruefen |
| `zweiseitiger-handelskauf` | ja | stub | ungeprueft | P3 | Abschnitt bei Vertragsrecht/Maengelruege |
| `bbig-ausbildungsvertrag` | nein | stub | ungeprueft | Parken | Ausbildungs-/Arbeitsrecht-Anhang, nicht AP1-Kern |
| `arbeitnehmerrechte` | nein | stub | ungeprueft | Parken | Ausbildungs-/Arbeitsrecht-Anhang, nicht AP1-Kern |

### Qualitaet, Web/Medien und Aktuelles

| Slug | AP1 alt | Status alt | Vertrauen | Prioritaet | Naechste Aktion |
|---|---|---|---|---|---|
| `pdca-zyklus` | ja | stub | ungeprueft | P3 | Box/Abschnitt bei Qualitaetsverbesserung |
| `efqm-modell` | nein | stub | ungeprueft | Parken | nur Glossar/Parken, kein Kern |
| `iso-9000` | ja | stub | ungeprueft | P3 | Mini-Box QM-Begriffe, keine Normtiefe |
| `iso-25010` | ja | stub | ungeprueft | P3 | Box Softwarequalitaet, keine Normtiefe |
| `website-statisch-dynamisch` | ja | ready | ungeprueft | P3 | Grundbegriffe pruefen |
| `responsive-webdesign` | ja | stub | ungeprueft | P3 | Abschnitt bei Barrierefreiheit/Web |
| `mockup-wireframe` | ja | stub | ungeprueft | P3 | Box bei Bedarfsanalyse/UI |
| `softwareergonomie` | ja | stub | gesperrt | Parken | als Abschnitt in `homeoffice-ergonomie` umgesetzt; kein eigenes MDX-Kapitel |
| `audio-kompression` | ja | stub | ungeprueft | Parken | kleine Kompressionsbox bei Datenvolumen/Webmedien, kein Einzelkapitel |
| `ki-grundlagen` | ja | ready | ungeprueft | Parken | Trendthema, erst Kern auditieren |
| `cloud-konzepte` | ja | stub | ungeprueft | P3 | LF8/LF9 spaeter, nicht AP1-Kern |

## Stub-Huellen-Abgleich 2026-06-17

Dieser Abgleich beantwortet die Frage: Gehoert das Thema zur Ausbildung, zum
AP1-Kern LF1-LF6, oder nur als Abschnitt/Box in ein bestehendes Kapitel? `Raus`
bedeutet hier nicht "hat nichts mit Ausbildung zu tun", sondern "kein eigenes
AP1-Kernkapitel jetzt".

| Slug | Ausbildungsbezug | AP1-LF1-LF6-Nahe | Entscheidung | Zielort ohne Dopplung | Begruendung |
|---|---|---|---|---|---|
| `teststrategien` | ja | mittel/hoch | bauen, aber eng | LF5 `Testfaelle`/Softwarequalitaet | Im Soll als Testfaelle D3-D4/P2; keine breite Testautomations-Lehre. |
| `softwareergonomie` | ja | mittel/hoch | zusammengefuehrt | `homeoffice-ergonomie`: LF2 Ergonomie/Barrierefreiheit plus Web/UI | Kontrollzentrum hebt Barrierefreiheit/Ergonomie ausdruecklich an; kein eigenes Grosskapitel noetig. |
| `ssh-telnet` | ja | mittel | Abschnitt | Netzwerk-/Sicherheitsdienste | Pruefungsnah als sicher/unsicherer Remotezugriff; kein eigenes Grosskapitel. |
| `pdca-zyklus` | ja | mittel | Box/Abschnitt | Qualitaetsverbesserung/Service | Relevant als Verbesserungslogik, aber nicht als Rahmenwerk-Tiefenstoff. |
| `zweiseitiger-handelskauf` | ja | mittel/niedrig | Abschnitt | Vertragsrecht, Maengelruege, Gewaehrleistung | Kaufrecht gehoert dazu; als eigenes Kapitel wuerde es doppeln. |
| `machbarkeitsanalyse` | ja | mittel/niedrig | Abschnitt | Projekt/Wirtschaft, Nutzwert, Make-or-buy | Pruefungsnah als Entscheidung, nicht als separates Projektkapitel. |
| `responsive-webdesign` | ja | mittel/niedrig | Abschnitt | Barrierefreiheit/Web/UI | Passt zu Web-/UI-Grundlagen, aber nicht als AP1-Kerninsel. |
| `mockup-wireframe` | ja | mittel/niedrig | Box | Bedarfsanalyse, UI-Kommunikation | Nuetzlich fuer Anforderungen und Abstimmung; kurz halten. |
| `iso-9000` | ja | niedrig/mittel | Mini-Box | Qualitaetsmanagement | Nur Begriffseinordnung, keine Normfamilie auswendig lernen. |
| `iso-25010` | ja | niedrig/mittel | Box | Softwarequalitaet/Softwareergonomie | Qualitaetsmerkmale als Kriterien, keine Normtiefe. |
| `cloud-konzepte` | ja | niedrig fuer AP1, spaeter hoch | spaeter behalten | LF8/LF9 | In Jahr-1/2-Verzeichnis ausdruecklich behalten, aber nicht als AP1-LF1-LF6-Kern. |
| `git-versionsverwaltung` | ja | niedrig | Grundlagenabschnitt spaeter | Software/Dokumentation/Projekt | Arbeitswerkzeug, aber im Soll nur Grundlagenabschnitt. |
| `oop-basics` | ja | niedrig | kurze Box | LF5/Pseudocode/Softwaregrundlagen | Klasse/Objekt als Lesekompetenz; Vererbung nicht aufblasen. |
| `programmierparadigmen` | ja | niedrig | kurze Box | LF5/Softwaregrundlagen | Begriffliche Orientierung reicht; keine Paradigmenkunde. |
| `libraries-frameworks` | ja | niedrig | Glossar/Box | Softwareauswahl/Web | Praxisbezug ja, AP1-Kern nein. |
| `uml-beziehungen` | ja | niedrig | Parken/Box | UML nur bei Bedarf | AP1-naeher sind Aktivitaet und Use Case, nicht Komposition/Aggregation tief. |
| `projektubergabe` | ja | niedrig | Parken/Abschnitt | Abnahme/Einweisung | Eher spaeter/AP2; AP1 nur als Randbezug bei Einweisung/Abnahme. |
| `bbig-ausbildungsvertrag` | ja | niedrig fuer AP1 | Anhang/Parken | Arbeitsrecht/Ausbildung | Wichtig fuer Azubis, aber nicht Kern der AP1-FI-LF1-LF6-Datei. |
| `arbeitnehmerrechte` | ja | niedrig fuer AP1 | Anhang/Parken | Arbeitsrecht/Ausbildung | Wichtig, aber nicht vor dem AP1-Kern ausbauen. |
| `efqm-modell` | ja | niedrig | Parken/Glossar | Qualitaet optional | Zu breit fuer AP1; hoechstens Name/Einordnung. |
| `audio-kompression` | ja, aber randnah | niedrig | Parken/kleine Box | Datenvolumen, Bild-/Mediendaten, Webmedien | Datenkompression gehoert zur Ausbildung, aber Audio/MP3 ist im LF1-LF6-Soll kein eigenes AP1-Kernthema. |
| `lizenzmodelle` | ja | ready | ungeprueft | P3 | Rechts-/Lizenzquellen pruefen |

## Detailaudit-Vorlage

```text
## Detailaudit: [slug]

Datum:
Bearbeiter:

### Scope
- Thema:
- AP1-Relevanz:
- Form: Kapitel / Abschnitt / Box / Glossar / Raus

### Quellen
- Offizielle Ausbildungsquelle:
- Fachliche Primaerquelle:
- Didaktischer Vergleich:
- Pruefungs-/Aufgabentyp:

### Faktencheck
1.
2.
3.
4.
5.

### Didaktikcheck
- Einstieg ohne Vorwissen:
- Begriffe vor Verwendung:
- Beispiel mit Loesungsweg:
- Fehlerfallen:
- Selbstcheck:

### Umfangsentscheidung
- Pflicht:
- Kann:
- Extra/Raus:

### Entscheidung
- Vertrauen:
- Nötige Änderungen:
- Nächste Aktion:
```

## Detailaudit: bit-byte

Datum: 10.06.2026
Bearbeiter: Codex

### Scope

- Thema: Bit, Byte, 8-Bit-Wertebereich, b/B-Falle, Datenmenge vs. Datenrate,
  dezimale/binaere Praefixe und Zeichenkodierung als Grundidee.
- AP1-Relevanz: Pflichtgrundlage. Das Thema steht nicht als einzelnes Wort in
  der AP1-Verordnung, ist aber Werkzeugwissen fuer "Hard- und Software
  auswaehlen", "IT-Arbeitsplatz konfigurieren und testen" und praxisbezogene
  Aufgaben im Bereich "Einrichten eines IT-gestuetzten Arbeitsplatzes".
- Form: Kapitel.

### Quellen

- Offizielle Ausbildungsquelle:
  - FIAusbV, besonders Teil 1: erste 18 Monate, Pruefungsbereich
    "Einrichten eines IT-gestuetzten Arbeitsplatzes", praxisbezogen, 90 Minuten.
    https://www.gesetze-im-internet.de/fiausbv/FIAusbV.pdf
  - KMK-Rahmenlehrplan Fachinformatiker/Fachinformatikerin, Lernfelder 1 bis 6
    vor Teil 1, besonders LF2 Arbeitsplaetze ausstatten und LF3 Clients in
    Netzwerke einbinden.
    https://www.kmk.org/fileadmin/Dateien/pdf/Bildung/BeruflicheBildung/rlp/Fachinformatiker_19-12-13_EL.pdf
- Fachliche Primaerquelle:
  - NIST IR 8354: Computer speichern digitale Objekte als binaere Daten;
    zeitgemaesser Byte-Begriff, 8 Bit, Werte 0 bis 255, Bedeutung von Bitstrings
    haengt von Interpretation/Kodierung ab.
    https://nvlpubs.nist.gov/nistpubs/ir/2022/NIST.IR.8354.pdf
  - NIST Binary Prefixes: 1 B = 8 bit, Ki/Mi/Gi als binaere Praefixe,
    MB/GB als dezimale Vergleichswerte.
    https://physics.nist.gov/cuu/Units/binary.html
  - BIPM SI Prefixes: kilo, mega, giga, tera als dezimale Potenzen.
    https://www.bipm.org/en/measurement-units/si-prefixes
  - RFC 20: ASCII als 7-Bit-Code und Einbettung in ein 8-Bit-Byte.
    https://www.rfc-editor.org/rfc/rfc20.html
  - RFC 3629 / Unicode: UTF-8 erhaelt den US-ASCII-Bereich; ASCII-Zeichen
    werden in UTF-8 mit einem Oktett kodiert, andere Zeichen koennen mehrere
    Oktette brauchen.
    https://www.rfc-editor.org/rfc/rfc3629.html
    https://www.unicode.org/versions/latest/core-spec/chapter-3/
- Didaktischer Vergleich:
  - Noch nicht gegen ein externes Lernangebot benchmarked. Interner
    Didaktikcheck bestanden, aber fuer `geprueft` fehlt noch ein Vergleich.
- Pruefungs-/Aufgabentyp:
  - Eigener AP1-naher Aufgabentyp vorhanden: Mbit/s in MB/s umrechnen,
    Uebertragungszeit berechnen, 8-Bit-Wertebereich erklaeren, MB vs. MiB
    unterscheiden.
  - Legal erworbene Original-/U-Form-Aufgabe noch nicht dagegen getestet.

### Faktencheck

1. "Computer speichern und uebertragen unten Muster aus 0 und 1": durch NIST IR
   8354 gestuetzt. Moderne Computer repraesentieren Daten binaer; Bedeutung
   entsteht erst durch Kodierung/Interpretation.
2. "Ein Bit hat zwei moegliche Zustaende": fachlich korrekt und durch die
   binaere Darstellung bei NIST IR 8354 gestuetzt.
3. "1 Byte = 8 Bit": durch NIST IR 8354 und NIST Binary Prefixes gestuetzt.
4. "8 Bit ergeben 256 Muster, unsigned 0 bis 255": durch NIST IR 8354
   gestuetzt; mathematisch folgt `2^8 = 256` und Bereich `0` bis `2^8 - 1`.
5. "Ein Nibble besteht aus 4 Bit; zwei Hex-Ziffern entsprechen einem Byte":
   durch NIST IR 8354 gestuetzt; dort wird ein Byte als 8 binary digits oder
   2 hexadecimal digits eingeordnet.
6. "`b` und `B` unterscheiden sich um Faktor 8": durch 1 B = 8 bit gestuetzt.
   Die Rechenbeispiele `100 Mbit/s -> 12,5 MB/s` und `64 Mbit/s -> 8 MB/s`
   sind rechnerisch korrekt.
7. "Datenmenge / Datenrate = Zeit": dimensionslogisch korrekt. Die Beispiele
   `600 MB / 6,25 MB/s = 96 s` und `200 MB / 12,5 MB/s = 16 s` sind korrekt.
8. "KB/MB/GB dezimal, KiB/MiB/GiB binaer": durch BIPM und NIST Binary Prefixes
   gestuetzt. Die Werte 1 MB = 1.000.000 B und 1 MiB = 1.048.576 B stimmen.
9. "1 TB sind etwa 931,32 GiB": Rechnung stimmt:
   `1.000.000.000.000 / 1.073.741.824 = 931,32`.
10. "ASCII ist 7 Bit/128 Werte; UTF-8 ist ASCII-kompatibel, aber nicht jedes
    Zeichen ist 1 Byte": durch RFC 20 und RFC 3629/Unicode gestuetzt.

### Didaktikcheck

- Einstieg ohne Vorwissen: stark. Das Kapitel beginnt mit der mentalen Kette
  Bit -> Byte -> Wertebereich -> b/B -> Datenrate -> Zeichen.
- Begriffe vor Verwendung: weitgehend ja. `Durchsatz` wird spaet eingefuehrt,
  aber direkt kontextualisiert. `unsigned` wird genannt und auf Zahlensysteme
  begrenzt; das ist sinnvoll.
- Beispiel mit Loesungsweg: ja. Mbit/s zu MB/s, Downloadzeit, 1 TB zu GiB und
  ASCII-Beispiele sind schrittweise genug.
- Fehlerfallen: stark. b/B, Off-by-one, KB/KiB, Zeichen != immer 1 Byte,
  Brutto/Netto sind direkt genannt.
- Selbstcheck: vorhanden und mit Loesungen. Fuer "Null Ahnung" brauchbar, weil
  nicht nur Fragen, sondern Loesungswege stehen.
- Didaktische Risiken:
  - Abschnitt 6 ueberschneidet sich mit `prefixe`; als Grundanker ist das ok,
    darf aber nicht weiter anwachsen.
  - Quellenliste nutzt fuer ASCII einen ANSI-Webstore-Link. Als harte offene
    Pruefquelle sollte RFC 20 in Quellenbank/Quellenliste ergaenzt werden.
  - Ohne echte Aufgabenabgleiche bleibt unklar, ob die Tiefe exakt AP1-genau
    ist. Fachlich wirkt der Umfang passend, aber noch nicht final bewiesen.

### Umfangsentscheidung

- Pflicht:
  - Bit vs. Byte
  - 1 Byte = 8 Bit
  - 8 Bit = 256 Muster, unsigned 0 bis 255
  - b/B-Falle und Faktor 8
  - Datenmenge vs. Datenrate
  - Zeit = Datenmenge / Datenrate
  - KB/MB vs. KiB/MiB als Grundfalle
- Kann:
  - 1 TB zu 931,32 GiB
  - ASCII-/UTF-8-Grundidee
  - Brutto/Netto-Durchsatz als Hinweis
- Extra/Raus:
  - tiefe UTF-8-Details
  - signed/unsigned im Detail
  - vollstaendige Praefixlehre
  - Protokoll-Overhead-Rechnung

### Entscheidung

- Vertrauen: `geprueft`.
- Grund: Kernfakten, Primärquellen, externe Didaktikbenchmarks und lokale
  legale Aufgabenarten wurden vollständig abgeglichen.
- Nötige Änderungen: erledigt. RFC 20/RFC 3629 sind gepflegt, der alte
  Aufgabenblock ist entfernt und die Transfergrenze zu Scan-/Datenvolumen-
  rechnungen ist dokumentiert.
- Nächste Aktion: keine für `bit-byte`; Neustartprüfung von `zahlensysteme`.

### Neustart-Nachtrag 25.06.2026

- RFC 20 und RFC 3629 wurden als frei zugängliche Primärquellen in
  `sourceBank.ts`, `tagMappings.ts`, `review.ts` und im Kapitel ergänzt.
- Der eigenständige Fragen-/Lösungsblock `Kann ich es wirklich?` wurde gemäß
  der neuen Kompendiumsregel entfernt; erklärende Mini-Selbstchecks bleiben.
- Die konkrete Angabe `550 MB/s` wird nur noch als Beispiel für eine
  Speichermedienrate verwendet, nicht als zeitabhängige typische SATA-Aussage.
- Alle 13 lokalen Prüfungs-PDFs wurden temporär in 151 Bildseiten gerendert
  und mit Windows OCR durchsucht. Rohtexte und Originalaufgaben wurden nicht
  ins Projekt übernommen.
- Bestätigte Aufgabenarten:
  - 8 Bit als Grundlage für 256 mögliche Farbzustände;
  - mehrstufige Datenmengenrechnung von Bit über Byte und IEC-Präfixe bis TiB;
  - Einordnung von Speicherangaben und Datenraten in technischen Daten.
- Das Kapitel deckt die benötigte Basis vollständig ab. Die zusammengesetzte
  Scanrechnung bleibt fachlich richtig in `scan-bilddaten` und
  `datenvolumen-berechnung` verortet.
- Vertrauen wird auf `geprueft` gesetzt. Offen: nichts.

## Detailaudit: prefixe

Datum: 10.06.2026
Bearbeiter: Codex

### Scope

- Thema: SI-Praefixe vs. IEC-Binaerpraefixe, KB/kB vs. KiB, MB vs. MiB,
  GB/TB vs. GiB/TiB, Umrechnung ueber Byte, typische Hersteller-/OS-Anzeigen.
- AP1-Relevanz: Pflichtgrundlage fuer Rechenaufgaben zu Datenmengen,
  Datenraten, Speicherangaben, Downloadzeiten und Hardwareauswahl. Direktes
  Werkzeugwissen fuer LF2/LF3 und AP1-nahe Aufgaben.
- Form: Kapitel, aber eng begrenzt. Tiefe ueber `TiB` hinaus nur als Hinweis.

### Quellen

- Offizielle Ausbildungsquelle:
  - FIAusbV und KMK-Rahmenlehrplan tragen das Thema indirekt ueber
    IT-Arbeitsplatz, Hardwareauswahl, Netzwerke, Konfiguration, Test und
    Dokumentation. Sie nennen die Praefixe nicht als eigenes Kapitel, aber die
    Rechenkompetenz ist notwendiges Werkzeugwissen.
- Fachliche Primaerquelle:
  - BIPM SI Prefixes: `k = 10^3`, `M = 10^6`, `G = 10^9`, `T = 10^12`; `k`
    ist im SI kleingeschrieben.
    https://www.bipm.org/en/measurement-units/si-prefixes
  - NIST Binary Prefixes: IEC-Binaerpraefixe `Ki = 2^10`, `Mi = 2^20`,
    `Gi = 2^30`, `Ti = 2^40`; Beispiele fuer 1 B = 8 bit, MiB vs. MB,
    GiB vs. GB und historischen Kontext.
    https://physics.nist.gov/cuu/Units/binary.html
  - GNU Coreutils `df`: `--human-readable` nutzt 1024er-Schritte, `--si`
    nutzt 1000er-Schritte. Stuetzt die Warnung zu OS-/Tool-Anzeigen.
    https://www.gnu.org/software/coreutils/df
- Didaktischer Vergleich:
  - IBM Storage-Dokumentation ist als serioese Vergleichsquelle in der
    Quellenbank vorhanden, wurde in diesem Audit aber nur als Kontext
    betrachtet, nicht als Faktenanker.
- Pruefungs-/Aufgabentyp:
  - Eigene AP1-nahe Aufgabentypen vorhanden: 500 GB in GiB, Bit in KiB,
    Downloadzeit aus GiB und Mbit/s, MiB in Byte, kB/KiB erkennen.
  - Legal erworbene Original-/U-Form-Aufgabe noch nicht dagegen getestet.

### Faktencheck

1. "SI-Praefixe `k`, `M`, `G`, `T` stehen fuer `10^3`, `10^6`, `10^9`,
   `10^12`": durch BIPM gestuetzt.
2. "Korrektes SI-Symbol fuer kilo ist `k`, nicht `K`": durch BIPM-Tabelle
   gestuetzt; Alltags-`KB` ist verbreitet, aber nicht streng SI.
3. "Binaerpraefixe `Ki`, `Mi`, `Gi`, `Ti` stehen fuer `2^10`, `2^20`,
   `2^30`, `2^40`": durch NIST/IEC-Kontext gestuetzt.
4. "1 KiB = 1.024 B, 1 MiB = 1.048.576 B, 1 GiB = 1.073.741.824 B":
   durch NIST gestuetzt.
5. "1 MB = 1.000.000 B und 1 GB = 1.000.000.000 B": durch BIPM/NIST
   gestuetzt.
6. "Drift waechst je Stufe": mathematisch korrekt. `1024/1000 = 1,024`,
   `MiB/MB = 1,048576`, `GiB/GB = 1,073741824`, `TiB/TB = 1,0995...`.
7. "500 GB -> 465,66 GiB": Rechnung korrekt:
   `500.000.000.000 / 1.073.741.824 = 465,66`.
8. "2.048.000 Bit -> 250 KiB": Rechnung korrekt:
   `2.048.000 / 8 = 256.000 B`, `256.000 / 1024 = 250 KiB`.
9. "1 GiB bei 16 Mbit/s dauert etwa 536,87 s": korrekt, wenn Mbit/s dezimal
   gelesen wird: `16.000.000 / 8 = 2.000.000 B/s`,
   `1.073.741.824 / 2.000.000 = 536,87 s`.
10. "Linux `df -h`/`--si` kann unterschiedliche Skalen zeigen": durch GNU
    Coreutils-Dokumentation gestuetzt.

### Didaktikcheck

- Einstieg ohne Vorwissen: gut, weil direkt die zwei Reihen und der Nutzen
  erklaert werden. Eine schwammige Stelle wurde korrigiert: Aus "931 GB"
  wurde "931 GiB; manche Oberflaechen beschriften das historisch als GB".
- Begriffe vor Verwendung: ja. SI, binaer, Byte, KiB/MiB/GiB werden vor den
  Rechenbeispielen eingefuehrt.
- Beispiel mit Loesungsweg: stark. Vier Beispiele decken Speicher, Bit->Byte,
  gemischte Datenrate und reine Multiplikation ab.
- Fehlerfallen: stark. kB/KiB, k/K, Bit/Byte, Gbit/s->MiB, Einheit weglassen
  und OS-Anzeige sind direkt adressiert.
- Selbstcheck: indirekt vorhanden ueber Beispiele und "Was du danach kannst",
  aber kein kompakter Check mit Loesung wie bei `bit-byte`. Fuer `geprueft`
  waere ein kurzer Selbstcheck sinnvoll.
- Didaktische Risiken:
  - Kapitel ist dicht. Fuer Lernende ohne Vorwissen ist der Byte-Zwischenschritt
    der Rettungsanker; dieser muss beim Lernen aktiv wiederholt werden.
  - JEDEC-Link in der Quellenliste ist als historischer Kontext nuetzlich, aber
    die harte Belegung der Kernaussagen sollte BIPM/NIST/GNU bleiben.
  - Aufgabenabgleich mit echten/gekauften AP1-Aufgaben fehlt weiterhin.

### Umfangsentscheidung

- Pflicht:
  - SI-Praefixe dezimal lesen
  - IEC-Binaerpraefixe am `i` erkennen
  - kB/MB/GB/TB vs. KiB/MiB/GiB/TiB unterscheiden
  - immer ueber Byte umrechnen
  - Bit zuerst durch 8 in Byte umrechnen
  - 1 TB -> ca. 931 GiB erklaeren
- Kann:
  - Historie Halbleiterindustrie vs. Massenspeicher
  - OS-/Tool-Anzeigen wie `df -h` vs. `--si`
  - Drift-Prozentwerte
- Extra/Raus:
  - detaillierte Normgeschichte
  - Folgepraefixe ab Pi/Ei als Lernschwerpunkt
  - Hersteller- oder Betriebssystemdetails im Einzelfall

### Entscheidung

- Vertrauen: `teilgeprueft`.
- Grund: Kernfakten und Rechnungen sind gegen Primaerquellen geprueft; eine
  unpraezise GB/GiB-Stelle im Kapitel wurde korrigiert. `geprueft` fehlt noch,
  weil externer Didaktikbenchmark, kurzer Selbstcheck und legaler
  Aufgabenabgleich fehlen.
- Noetige Aenderungen:
  - Erledigt: Intro und Drift-Beispiel sprachlich/fachlich praezisiert.
  - Optional spaeter: kurzer Selbstcheck mit Loesungen nach den Beispielen.
  - Spaeter: eine echte/legale AP1- oder U-Form-Aufgabe gegen das Kapitel
    testen.
- Naechste Aktion:
  - `zahlensysteme` auditieren.

## Detailaudit: zahlensysteme

Datum: 10.06.2026
Bearbeiter: Codex

### Scope

- Thema: Stellenwertsysteme, Binär, Dezimal, Hexadezimal, Oktal, Umrechnung
  über Stellenwerte und Teilungsmethode, Hex-Nibble-Brücke, chmod, MAC-/CSS-/
  IPv4-Bezüge, Kontextabhängigkeit von Bitmustern.
- AP1-Relevanz: Pflichtgrundlage für technische Rechen- und Verständnisaufgaben.
  Direkter Anschluss an IPv4/Subnetting, Datenmengen, chmod/Linux-Rechte,
  Hardware-/Netzwerkgrundlagen und einfache Programmier-/Datenaufgaben.
- Form: Kapitel.

### Quellen

- Offizielle Ausbildungsquelle:
  - FIAusbV und KMK-Rahmenlehrplan tragen das Thema indirekt als
    Werkzeugwissen für IT-Systeme, Datenabbildung, Netzwerke, Clients und
    Dienste.
- Fachliche Primaerquelle:
  - NIST IR 8354: Stellenwertnotation, Basis 2/8/16, 8-Bit-Bytes,
    Hex-Gruppierung und Kontextabhängigkeit von Bitmustern.
    https://nvlpubs.nist.gov/nistpubs/ir/2022/NIST.IR.8354.pdf
  - POSIX/Open Group `chmod`: numerische Dateimodi als Oktal-/Mode-Bits,
    Rollen User/Group/Other und rwx-Bits.
    https://pubs.opengroup.org/onlinepubs/9699919799/utilities/chmod.html
  - RFC 9542: 48-Bit-MAC/EUI-48-Kontext und Darstellung von Oktetten als zwei
    Hex-Ziffern.
    https://www.rfc-editor.org/rfc/rfc9542.html
  - W3C CSS Color 4: `#RRGGBB` als Hex-Notation für sRGB-Komponenten.
    https://www.w3.org/TR/css-color-4/
  - RFC 4632: CIDR-Präfixnotation, 32-Bit-IPv4-Adresse und explizite
    Präfixlänge.
    https://www.rfc-editor.org/rfc/rfc4632
  - IEEE 754: Normbezug für Gleitkomma als Kontext-Hinweis; keine
    Detailcodierung in diesem Kapitel.
    https://standards.ieee.org/ieee/754/6210/
- Didaktischer Vergleich:
  - Noch kein externer Lernangebots-Benchmark dokumentiert. Interner
    Didaktikcheck stark, aber für `geprueft` fehlt der Vergleich.
- Pruefungs-/Aufgabentyp:
  - Eigene AP1-nahe Aufgabentypen vorhanden: Dezimal->Binär, Binär->Dezimal,
    Hex->Binär, Hex->Dezimal, chmod lesen, IPv4-Oktett als 8-Bit-Wert.
  - Legal erworbene Original-/U-Form-Aufgabe noch nicht dagegen getestet.

### Faktencheck

1. "Binär, Dezimal, Hexadezimal und Oktal sind Stellenwertsysteme mit
   unterschiedlicher Basis": mathematisch korrekt und durch NIST IR 8354
   gestützt.
2. "Rechts steht Position 0; Stellenwert = Basis^Position": korrekt. Die
   Dezimalprobe `305 = 3*100 + 0*10 + 5*1` stimmt.
3. "Binär hat Ziffern 0/1, Oktal 0-7, Dezimal 0-9, Hex 0-9 und A-F": korrekt.
4. "46 dezimal = 101110 binär": Teilungsmethode und Probe stimmen:
   `32 + 8 + 4 + 2 = 46`.
5. "11000000 binär = 192 dezimal": korrekt:
   `128 + 64 = 192`.
6. "192 dezimal = C0 hex; FF hex = 255": korrekt:
   `12*16 + 0 = 192`, `15*16 + 15 = 255`.
7. "Eine Hex-Ziffer entspricht 4 Bit; ein Byte entspricht zwei Hex-Ziffern":
   durch NIST/RFC-Kontext gestützt.
8. "MAC-/EUI-48-Identifier sind 48 Bit und werden als sechs Hex-Paare
   dargestellt": durch RFC 9542 gestützt. Das Kapitel bleibt didaktisch bei
   der Leselogik, nicht bei Vergabedetails.
9. "`chmod 755` wird als Oktal-/Rechtebits gelesen und ergibt `rwxr-xr-x`":
   fachlich korrekt; `7=rwx`, `5=r-x`, `5=r-x`.
10. "IPv4/CIDR: IPv4 ist 32 Bit; `/24` bedeutet 24 signifikante Netzbits":
    durch RFC 4632 gestützt. Die Brücke zu `255.255.255.0` ist korrekt.
11. "Dasselbe Bitmuster kann je nach Datentyp anders gelesen werden":
    korrekt; signed/unsigned und IEEE 754 werden nur als Kontext-Hinweis
    genutzt, nicht als Rechenstoff dieses Kapitels.

### Didaktikcheck

- Einstieg ohne Vorwissen: stark. Das Kapitel startet mit der Kernidee
  "verschiedene Schreibweisen für dieselbe Zahl" und baut danach in Stufen auf.
- Begriffe vor Verwendung: weitgehend ja. Basis, Stellenwert, Position,
  Binär/Hex/Oktal werden vor den Anwendungen erklärt.
- Beispiel mit Loesungsweg: stark. Es gibt Dezimal->Binär, Binär->Dezimal,
  Dezimal->Hex, Hex->Dezimal, Hex<->Binär, chmod und IPv4-Brücke.
- Fehlerfallen: stark. Basis vergessen, Reste falsch herum, Null vergessen,
  Hex-Vierergruppen, chmod als Dezimalzahl und ungültige Hex-Ziffern sind
  passend genannt.
- Selbstcheck: vorhanden und mit Lösungen. Für "Null Ahnung" hilfreich, weil
  die Checks klein und lösbar sind.
- Didaktische Risiken:
  - Kapitel ist lang. Für AP1-Lernen muss der Pflichtkern klar bleiben:
    Stellenwert, Restmethode, 8-Bit-Reihe, Hex-Vierergruppen, chmod, IPv4-Oktett.
  - signed/unsigned und IEEE 754 sind richtig eingeordnet, dürfen aber nicht
    zum Lernschwerpunkt dieses Kapitels werden.
  - CSS-Farbe wurde von "drei Bytes" auf "drei 8-Bit-Werte" präzisiert, damit
    keine falsche Speicherbehauptung entsteht.

### Umfangsentscheidung

- Pflicht:
  - Basis und Stellenwert verstehen
  - Binär->Dezimal und Dezimal->Binär
  - Hex->Dezimal, Dezimal->Hex grob
  - Hex<->Binär über Vierergruppen
  - 8-Bit-Reihe `128 64 32 16 8 4 2 1`
  - chmod 755/644 lesen
  - IPv4-Oktett als 8-Bit-Wert lesen
- Kann:
  - MAC-Adresse und CSS-Farbe als Hex-Anwendungen
  - Programmiersprachen-Literale `0b`, `0o`, `0x`
  - Kontextidee signed/unsigned
- Extra/Raus:
  - Zweierkomplement-Rechnen im Detail
  - IEEE-754-Codierung von Hand
  - MAC-Vergabedetails, OUI-/EUI-Politik
  - komplette Subnetting-Verfahren

### Entscheidung

- Vertrauen: `geprueft`.
- Grund: Kernfakten und Rechenwege sind gegen Primärquellen nachgerechnet.
  Computer Science Field Guide und Teach Computing bestätigen die didaktische
  Reihenfolge. Der lokale Materialabgleich bestätigt Zahlensysteme als
  Werkzeug für 8-Bit-Farbzustände, IPv6-Hexschreibweise, Präfixlängen/VLSM
  und chmod.
- Erledigte Änderungen:
  - sichtbare AP1-/Pflicht-Metasprache entfernt;
  - eigenständige Aufgaben- und Übungsblöcke entfernt, Mini-Selbstchecks im
    Erklärfluss beibehalten;
  - Glossar-IDs `binaersystem`, `binaerzahl` und `fuehrende-null` korrigiert;
  - Hardwareerklärung auf definierte digitale Signalbereiche präzisiert;
  - pauschale Aussage zu `chmod 755` bei Skripten entfernt;
  - MAC-Formulierung auf den 48-Bit-Ethernet-Kontext begrenzt.
- Nächste Aktion: keine für `zahlensysteme`; Neustartprüfung von `prefixe`.

## Detailaudit: datenrate-berechnung

Datum: 16.06.2026
Bearbeiter: Codex

### Scope

- Thema: Datenrate, Datenmenge und Zeit berechnen; Bit/Byte-Umrechnung;
  dezimale und binaere Einheiten; Brutto-/Netto-Datenrate; Backup-,
  Download-, Upload- und WLAN-Szenarien.
- AP1-Relevanz: Pflichtgrundlage. Das Thema passt direkt zu "Hard- und Software
  auswaehlen", "IT-Arbeitsplatz konfigurieren und testen" sowie
  praxisbezogenen Rechen-/Bewertungsaufgaben rund um Netzwerk, Backup, Cloud
  und Arbeitsplatz.
- Form: Kapitel.

### Quellen

- Offizielle Ausbildungsquelle:
  - FIAusbV, besonders Teil 1: erste 18 Monate und Pruefungsbereich
    "Einrichten eines IT-gestuetzten Arbeitsplatzes", praxisbezogene
    schriftliche Aufgaben, 90 Minuten.
  - KMK-Rahmenlehrplan, besonders LF2 Arbeitsplaetze ausstatten und LF3
    Clients in Netzwerke einbinden.
  - BIBB-Umsetzungshilfe als Ordnungsmittel- und Umsetzungsbezug.
- Fachliche Primaerquelle:
  - BIPM SI Prefixes: dezimale SI-Praefixe `k`, `M`, `G`, `T`.
  - NIST Binary Prefixes und IEC 80000-13: KiB, MiB, GiB als binaere
    Praefixe und Abgrenzung zu SI.
  - RFC 9293 (TCP) und RFC 9110 (HTTP) als Protokollkontext dafuer, dass
    Nutzdatenuebertragung nicht identisch mit physischer Bruttorate ist.
  - IEEE 802.11 und BSI WLAN/LAN-Grundlagen als Kontext fuer WLAN als
    geteiltes, stoeranfaelliges Medium; keine festen Netto-Prozentwerte daraus
    abgeleitet.
- Didaktischer Vergleich:
  - AP1-Kontrollzentrum 2026: Datenrate, Uebertragungszeit und Datenmenge sind
    als P1-Rechenkette markiert.
- Pruefungs-/Aufgabentyp:
  - Eigene AP1-nahe Aufgabentypen vorhanden: Downloadzeit, benoetigte
    Datenrate, maximale Datenmenge, Backupfenster, Brutto/Netto mit
    Wirkungsgrad.
  - Legal erworbene Original-/U-Form-Aufgabe noch nicht dagegen getestet.

### Faktencheck

1. "1 Byte = 8 Bit": durch NIST/IEC-Kontext und bestehendes `bit-byte`-Audit
   gestuetzt.
2. "Mbit/s zu MB/s: durch 8 teilen": korrekt, wenn beide Einheiten dieselbe
   dezimale Praefixstufe nutzen.
3. "Datenrate = Datenmenge / Zeit; Zeit = Datenmenge / Datenrate;
   Datenmenge = Datenrate * Zeit": dimensionslogisch korrekt.
4. "Bei Mbit/s, Gbit/s, MB, GB ohne weiteren Hinweis dezimal rechnen": fuer
   SI-Praefixe durch BIPM gestuetzt; als Pruefungsregel sinnvoll, solange die
   Aufgabe keine KiB/MiB/GiB nennt.
5. "KiB, MiB, GiB nutzen 1024er-Schritte": durch NIST/IEC gestuetzt.
6. Beispiel A ist korrekt: `100 Mbit/s / 8 = 12,5 MB/s`,
   `2 GB = 2000 MB`, `2000 / 12,5 = 160 s`.
7. Beispiel B ist korrekt: `200 Mbit/s * 0,80 = 160 Mbit/s`,
   `160 / 8 = 20 MB/s`, `600.000 / 20 = 30.000 s = 8,33 h`.
8. Beispiel C ist korrekt: `45 GB = 45.000 MB`, `30 min = 1800 s`,
   `45.000 / 1800 = 25 MB/s = 200 Mbit/s`; bei 80 Prozent netto:
   `200 / 0,80 = 250 Mbit/s brutto`.
9. Beispiel E ist rechnerisch korrekt: `866 * 0,55 = 476,3 Mbit/s`,
   `476,3 / 8 = 59,54 MB/s`, `12.000 / 59,54 = ca. 201,5 s`.
10. Komplette Pruefungsaufgabe ist korrekt: `100 * 0,70 = 70 Mbit/s`,
    `70 / 8 = 8,75 MB/s`, `180.000 / 8,75 = 20.571,43 s`,
    `20.571,43 / 3600 = 5,71 h`.

### Didaktikcheck

- Einstieg ohne Vorwissen: gut. Das Kapitel verbindet Download, Backup, Cloud,
  NAS und WLAN auf eine einzige Rechenmechanik.
- Begriffe vor Verwendung: weitgehend ja. Bit, Byte, Datenrate, Bandbreite,
  Durchsatz und Latenz werden eingefuehrt. `Overhead` wird praktisch erklaert,
  koennte aber spaeter noch als Glossarbegriff auftauchen.
- Beispiel mit Loesungsweg: stark. Jede Grundformel hat ein eigenes Szenario.
- Fehlerfallen: stark. b/B, 1000/1024, Brutto/Netto, Zeitumrechnung,
  asymmetrischer Upload/Download und Latenz sind enthalten.
- Selbstcheck: vorhanden und loesbar.
- Didaktisches Risiko:
  - Die Tabelle mit groben Netto-Orientierungen ist nuetzlich, aber nicht hart
    genug belegt. Sie darf nicht als feste Pruefungszahl gelernt werden. In
    Rechenaufgaben muss immer der im Text genannte Wirkungsgrad gelten.
  - Das Kapitel ist sehr AP1-nah, aber noch nicht gegen echte Aufgaben unter
    Zeitdruck geprueft.

### Umfangsentscheidung

- Pflicht:
  - Bit vs. Byte und Faktor 8
  - Datenrate, Datenmenge, Zeit als Formelkreis
  - Mbit/s, MB/s, GB, GiB, MiB unterscheiden
  - Download-/Uploadzeit berechnen
  - Brutto/Netto mit gegebenem Wirkungsgrad berechnen
  - Ergebnis in Sekunden, Minuten, Stunden sinnvoll ausgeben
- Kann:
  - Backupfenster bewerten und Massnahmen nennen
  - WLAN-Bruttorate vs. reale Dateiuebertragung erklaeren
  - Reserve und Schwankungen in professioneller Antwort nennen
- Extra/Raus:
  - exakte Protokolloverhead-Rechnung
  - TCP-Fenstergroessen, MTU/MSS-Detailrechnung
  - Shannon-Theorem oder physikalische Kanalkapazitaet
  - echte WLAN-Durchsatzmodellierung

### Entscheidung

- Vertrauen: `teilgeprueft`.
- Grund: Rechenwege und Kernaussagen sind stabil und AP1-nah; Quellenzuordnung
  wurde nachgezogen. `geprueft` ist noch zu frueh, weil die
  Netto-Orientierungstabelle weicher belegt werden muss und ein echter
  Aufgabenabgleich fehlt.
- Noetige Aenderungen:
  - Erledigt: Quellenzuordnung in `tagMappings.ts` nachgezogen.
  - Spaeter: Netto-Orientierungstabelle entweder mit Fachquelle belegen oder
    sprachlich noch klarer als Daumenregel markieren.
  - Spaeter: mindestens eine legale Probeaufgabe gegen die Kapitelstruktur
    testen und Bearbeitungszeit notieren.
- Naechste Aktion:
  - `ipv4-subnetting` wurde als naechstes P1-Kapitel auditiert.

## Detailaudit: ipv4-subnetting

Datum: 16.06.2026
Bearbeiter: Codex

### Scope

- Thema: IPv4-Adresse, CIDR-Praefix, Subnetzmaske, Netzadresse, Broadcast,
  Hostbereich, nutzbare Hosts, Gateway-Plausibilitaet, private IPv4-Bereiche
  und Sonderfaelle `/31` und `/32`.
- AP1-Relevanz: Pflichtgrundlage. Das Thema ist P1, weil AP1-nahe Aufgaben zu
  Arbeitsplatzkonfiguration, Gateway, DHCP, DNS, Diagnose und Netzplanung ohne
  IPv4-/Subnetting-Verstaendnis nicht sicher loesbar sind.
- Form: Kapitel.

### Quellen

- Offizielle Ausbildungsquelle:
  - FIAusbV, besonders Teil 1: Einrichten eines IT-gestuetzten Arbeitsplatzes.
  - KMK-Rahmenlehrplan, besonders LF3 Clients in Netzwerke einbinden.
  - BIBB-Umsetzungshilfe als Ordnungsmittel- und Umsetzungsbezug.
- Fachliche Primaerquelle:
  - RFC 791: IPv4-Adressen sind vier Oktette bzw. 32 Bit; IP nutzt Adressen
    fuer Routing.
  - RFC 4632: CIDR-Praefixnotation mit Slash und Praefixlaenge 0 bis 32;
    explizite Trennung von Netz-/Praefixbits und Hostbits.
  - RFC 1918: private IPv4-Bereiche `10.0.0.0/8`, `172.16.0.0/12`,
    `192.168.0.0/16`.
  - RFC 3021: `/31` als Sonderfall fuer Punkt-zu-Punkt-Verbindungen.
  - IANA IPv4 Special-Purpose Address Registry: besondere IPv4-Bereiche,
    darunter Private-Use, Loopback, Link Local und Dokumentationsnetze.
- Didaktischer Vergleich:
  - Interner Vergleich gegen `AP1_INHALTSVERZEICHNIS_LERNFELDER_DICHTE.md`:
    Soll-Dichte D3-D4 fuer IPv4/Subnetting.
- Pruefungs-/Aufgabentyp:
  - Eigene AP1-nahe Aufgabentypen vorhanden: Netzadresse/Broadcast/Hostbereich
    berechnen, passende Subnetzgroesse waehlen, Gateway-Plausibilitaet pruefen.
  - Legal erworbene Original-/U-Form-Aufgabe noch nicht dagegen getestet.

### Faktencheck

1. "IPv4-Adresse besteht aus 32 Bit und vier Oktetten": durch RFC 791
   gestuetzt.
2. "CIDR `/26` bedeutet 26 signifikante Netz-/Praefixbits und 6 Hostbits":
   durch RFC 4632 gestuetzt.
3. "`192.168.10.130/26` liegt im Block `192.168.10.128` bis
   `192.168.10.191`": rechnerisch korrekt. `/26` hat 6 Hostbits, also
   `2^6 = 64` Adressen; 130 liegt im 64er-Block ab 128.
4. "`/26` entspricht `255.255.255.192`": korrekt, weil im letzten Oktett die
   zwei hoechsten Bits Netzbits sind: `11000000 = 192`.
5. "Netzadresse bei `192.168.10.130/26` ist `192.168.10.128`": korrekt per
   bitweisem UND `130 AND 192 = 128`.
6. "Broadcast ist `192.168.10.191`, letzter Host `192.168.10.190`": korrekt
   fuer ein normales LAN-Subnetz mit 64 Adressen.
7. "Nutzbare Hosts bei normalen LAN-Subnetzen: `2^Hostbits - 2`": fuer die im
   Kapitel behandelten normalen Subnetze korrekt, weil Netzadresse und
   Broadcast nicht als normale Hostadressen vergeben werden.
8. "Gateway muss im selben Subnetz liegen wie der Host": fachlich korrekt fuer
   direkt erreichbares Standardgateway; das Beispiel `172.16.4.200/25` mit
   Gateway `172.16.4.1` ist deshalb falsch konfiguriert.
9. "Private Bereiche sind `10.0.0.0/8`, `172.16.0.0/12`,
   `192.168.0.0/16`": durch RFC 1918 gestuetzt.
10. "`/31` kann auf Punkt-zu-Punkt-Verbindungen zwei Hostadressen nutzen":
    durch RFC 3021 gestuetzt; Kapitel grenzt korrekt ab, dass die `-2`-Regel
    fuer normale Client-, Server- und LAN-Netze gilt.

### Didaktikcheck

- Einstieg ohne Vorwissen: gut. Das Kapitel startet mit einem konkreten Fehler:
  `192.168.10.130/26` gehoert nicht in den `.0-.63`-Block.
- Begriffe vor Verwendung: weitgehend ja. IPv4-Adresse, Oktett, CIDR, Praefix,
  Netzanteil, Hostanteil, Netzadresse, Broadcast und Gateway werden erklaert.
- Beispiel mit Loesungsweg: stark. Das `/26`-Beispiel zeigt Hostbits,
  Blockgroesse, Maske, bitweises UND, Hostbereich und Broadcast.
- Fehlerfallen: passend. Gesamtadressen vs. nutzbare Hosts, Broadcast als Host,
  Netzadresse als Clientadresse, falsches Gateway und Klassen-Denken sind
  sichtbar.
- Selbstcheck/Training: vorhanden ueber den Subnetting-Rechner. Ein kurzer
  statischer Mini-Check mit Loesungen waere fuer Offline-Lernen noch besser.
- Didaktisches Risiko:
  - Das Kapitel ist fuer AP1 gut fokussiert, aber IPv4-Grundlagen und
    Subnetting stecken im selben Kapitel. Fuer sehr schwache Lernende koennte
    ein kurzer vorgeschalteter IPv4-Grundlagenabschnitt oder eine Lernleiter
    helfen.
  - Quellenblock fehlte im Kapitel und wurde nachgezogen.

### Umfangsentscheidung

- Pflicht:
  - IPv4 als 32 Bit / vier Oktette
  - CIDR-Praefix lesen
  - Hostbits, Gesamtadressen und nutzbare Hosts berechnen
  - Netzadresse, Broadcast, erster/letzter Host bestimmen
  - Gateway-Plausibilitaet pruefen
  - private IPv4-Bereiche erkennen
- Kann:
  - bitweises UND als exakte Erklaerung
  - `/31` und `/32` als Sonderfaelle
  - VLAN-Abgrenzung als kurzer Hinweis
- Extra/Raus:
  - VLSM/Route-Summarization tief
  - historische Klassen als Lernschwerpunkt
  - Routing-Protokolle und Enterprise-Adressplanung

### Entscheidung

- Vertrauen: `teilgeprueft`.
- Grund: Kernfakten, Rechenwege und Beispiele sind gegen Primaerquellen und
  eigene Nachrechnung stabil. `geprueft` waere zu frueh, weil legaler
  Aufgabenabgleich unter Zeitdruck fehlt.
- Noetige Aenderungen:
  - Erledigt: Quellenblock im Kapitel nachgezogen.
  - Erledigt: `src/lib/audit/status.ts` um `ipv4-subnetting` ergaenzt.
  - Spaeter: kurzer Mini-Check mit Loesungen direkt im Kapitel oder im
    Training.
  - Spaeter: mindestens eine legale AP1-/U-Form-Aufgabe gegen das Kapitel
    testen und Bearbeitungszeit notieren.
- Naechste Aktion:
  - `netzwerkkonfiguration` als naechstes P1-Kapitel auditieren.

## Detailaudit: netzwerkkonfiguration

Datum: 17.06.2026
Bearbeiter: Codex

### Scope

- Thema: IPv4-Konfiguration im Client, DHCP, DNS, ARP, APIPA/IPv4-Link-Local
  und geordnete Netzwerkdiagnose.
- AP1-Relevanz: P1. Das Thema deckt LF3 direkt ab: Clients in Netzwerke
  einbinden, DHCP/DNS/Gateway verstehen, Fehler eingrenzen und Funktion testen.
- Form: Kapitel. Subnetting bleibt im eigenen Kapitel; hier steht die
  praktische Konfiguration und Diagnosekette.

### Quellen

- Offizielle Ausbildungsquelle:
  - FIAusbV, AP Teil 1: Einrichten eines IT-gestuetzten Arbeitsplatzes.
  - KMK-Rahmenlehrplan, LF3: Clients in Netzwerke einbinden.
  - BIBB-Umsetzungshilfe als Ordnungsmittel- und Umsetzungsbezug.
- Fachliche Primaerquelle:
  - RFC 2131: DHCP, DORA-Ablauf, Lease, Optionen.
  - RFC 1034 und RFC 1035: DNS-Hierarchie, Resolver, Resource Records, TTL.
  - RFC 826: ARP als IPv4-zu-MAC-Aufloesung im lokalen Netz.
  - RFC 3927: IPv4-Link-Local/APIPA-Bereich `169.254.0.0/16`.
  - RFC 791 und IANA IPv4 Special-Purpose Registry fuer IPv4- und
    Sonderadress-Kontext.
- Didaktischer Vergleich:
  - Interner Vergleich gegen `AP1_INHALTSVERZEICHNIS_LERNFELDER_DICHTE.md`:
    DHCP/DNS/Gateway D4/P1, Netzwerkdiagnose D5/P1.
- Pruefungs-/Aufgabentyp:
  - Eigene AP1-nahe Aufgaben vorhanden: Konfiguration lesen,
    Gateway-Plausibilitaet pruefen, DORA ordnen, APIPA-Fehlerbild erkennen,
    Diagnose-Schritte begruenden.
  - Legal erworbene Original-/U-Form-Aufgabe noch nicht dagegen getestet.

### Faktencheck

1. "IPv4-Konfiguration am Arbeitsplatz braucht IP, Maske, Gateway und DNS":
   als AP1-Diagnosemodell korrekt. Im Kapitel wurde die zu absolute Formulierung
   "kein einziger optional" entschaerft, weil Spezialfaelle ohne Gateway/DNS
   moeglich sind.
2. "DHCP nutzt DORA und UDP-Ports 67/68": durch RFC 2131 gestuetzt.
3. "DHCP-ACK liefert die finale Konfiguration": korrekt. Praezisiert wurde,
   dass die zugewiesene Adresse im DHCP-Paket steht; Option 50 ist nicht die
   allgemeine "Adresse im ACK", sondern die Requested-IP-Option im Ablauf.
4. "Offer erreicht den Client vor finaler IP-Konfiguration": korrekt, aber
   nicht immer schlicht "direkt". Praezisiert auf passend adressiert oder
   Broadcast je nach Clientzustand.
5. "ARP loest IPv4-Adressen in MAC-Adressen im lokalen Netz auf": durch RFC
   826 gestuetzt.
6. "APIPA/IPv4-Link-Local nutzt `169.254.0.0/16` und ist nicht routbar":
   durch RFC 3927/IANA gestuetzt. Formulierung wurde von "Windows oder Linux
   macht immer" auf "Client kann bei aktiver Link-Local-Autokonfiguration"
   entschaerft.
7. "DNS-Hierarchie mit Resolver, Root, TLD, autoritativem Server und TTL":
   durch RFC 1034/1035 gestuetzt. "13 Root-Server-Cluster" wurde auf
   Root-Server-Instanz entschaerft.
8. "Diagnosekette Link -> IP -> Gateway -> Internet -> DNS -> Anwendung":
   didaktisch und praktisch plausibel; als AP1-Antwortmuster stark.
9. "Ping ohne Antwort beweist nicht zwingend offline": korrekt, weil ICMP
   gefiltert werden kann.
10. Beispielrechnungen zum `/27`-Subnetz sind korrekt und passen zum
    `ipv4-subnetting`-Kapitel.

### Didaktikcheck

- Einstieg ohne Vorwissen: gut. Das Kapitel beginnt mit typischen Symptomen und
  fuehrt dann zu den vier Kernwerten.
- Begriffe vor Verwendung: weitgehend ja. IP, Maske, Gateway, DNS, DHCP, ARP,
  APIPA und Diagnosewerkzeuge werden eingefuehrt.
- Beispiel mit Loesungsweg: stark. `ipconfig /all`, `/27`-Subnetz, DHCP-Relay
  und Stoerungsdiagnose sind praxisnah.
- Fehlerfallen: stark. APIPA, falsches Gateway, DNS-Fehler, DHCP-Pool,
  statische IP im Pool, Ping-Fehlschluss und TTL-Verwechslung sind enthalten.
- Didaktisches Risiko:
  - Kapitel ist lang und hat Subnetting-Anteile. Das bleibt okay, solange
    `ipv4-subnetting` das Rechenhauptkapitel bleibt.
  - DNS-Ablauf und DHCP-Optionen duerfen nicht zu Normdetail-Lernen werden.

### Umfangsentscheidung

- Pflicht:
  - IP/Maske/Gateway/DNS lesen und Fehlerbild zuordnen
  - statisch vs. DHCP unterscheiden
  - DORA-Reihenfolge und Ports 67/68
  - APIPA/IPv4-Link-Local erkennen
  - DNS-Fehler von Routing-/IP-Fehler unterscheiden
  - Diagnosekette mit passenden Werkzeugen begruenden
- Kann:
  - ARP als Layer-2/Layer-3-Bruecke
  - DHCP-Relay, Reservierung, Lease/Renew/Rebind
  - TTL bei DNS-Umstellungen
- Extra/Raus:
  - DNS-Zonentypen tief
  - DHCP-Optionen auswendig jenseits der Kernoptionen
  - Enterprise-Monitoring, Routing-Protokolle, tiefes IPv6

### Entscheidung

- Vertrauen: `teilgeprueft`.
- Grund: Kernfakten und mehrere zu starke/unsaubere Formulierungen wurden
  gegen Primaerquellen korrigiert. Das Kapitel ist AP1-nah und didaktisch
  brauchbar, aber noch nicht mit legalen Aufgaben unter Zeitdruck abgeglichen.
- Noetige Aenderungen:
  - Erledigt: zu absolute Pruefungsbehauptung entschaerft.
  - Erledigt: DHCP-Offer/ACK und Option-50-Stelle praezisiert.
  - Erledigt: APIPA, Root-Server, TTL und MAC/OUI-Formulierungen entschaerft.
  - Erledigt: Quellenbank und technischer Auditstatus nachgezogen.
  - Spaeter: eine legale AP1-/U-Form-Aufgabe gegen Diagnose und DORA testen.
- Naechste Aktion:
  - `softwareergonomie`/Barrierefreiheit wurde danach in
    `homeoffice-ergonomie` zusammengefuehrt. Naechster Kandidat:
    `osi-modell` als LF3-Grundbaustein.

## Detailaudit: homeoffice-ergonomie

Datum: 17.06.2026
Bearbeiter: Codex

### Scope

- Thema: Ergonomie, Barrierefreiheit, Telearbeit/Homeoffice/mobiles Arbeiten,
  Softwareergonomie und arbeitsplatznahe IT-Sicherheitsmassnahmen.
- AP1-Relevanz: P1 nach LF2-Soll. Das aktuelle AP1-Inhaltsverzeichnis fuehrt
  "Ergonomie und Barrierefreiheit" mit D3-D4/P1: Arbeitsplatz, Bildschirm,
  Eingabegeraete, Barrierefreiheit, Arbeitsschutzbezug und begruendete Auswahl.
- Form: eigenes LF2-Kapitel `homeoffice-ergonomie`; `softwareergonomie` ist
  kein eigenes MDX-Kapitel mehr, sondern Zielabschnitt im selben Kapitel.

### Quellen

- Offizielle Ausbildungsquelle:
  - FIAusbV, AP Teil 1: Einrichten eines IT-gestuetzten Arbeitsplatzes.
  - KMK-Rahmenlehrplan, LF2: Arbeitsplaetze nach Kundenwunsch ausstatten.
  - BIBB-Umsetzungshilfe als Ordnungsmittel- und Umsetzungsbezug.
- Fachliche Primaerquelle:
  - ArbStaettV, besonders Paragraf 2 Absatz 7 und Anhang Nr. 6.
  - ArbSchG, besonders Arbeitgeberpflichten und Gefaehrdungsbeurteilung.
  - BITV 2.0 fuer barrierefreie Informationstechnik oeffentlicher Stellen.
  - W3C WAI WCAG 2 Overview/WCAG 2.2 fuer Web-Barrierefreiheit.
- Fachlicher Praxis-/Didaktikvergleich:
  - DGUV Information 215-410 fuer Bildschirm- und Bueroarbeitsplaetze.
  - BAuA zu mobiler Arbeit/Homeoffice als arbeitsschutzorientierte Einordnung.
  - Interner Vergleich gegen `AP1_KONTROLLZENTRUM_2026.md`:
    Barrierefreiheit am IT-Arbeitsplatz und auf Webseiten wurde als
    AP1-2025-Luecke hochgezogen.
- Pruefungs-/Aufgabentyp:
  - Eigene AP1-nahe Aufgabentypen vorhanden: Ausstattung fuer Telearbeit
    begruenden, ergonomische Anforderungen nennen, Barrieren erkennen,
    Software-/Webmassnahmen zuordnen, Sicherheit im Homeoffice begruenden.
  - Legal erworbene Original-/U-Form-Aufgabe noch nicht dagegen getestet.

### Faktencheck

1. "Ergonomie und Barrierefreiheit gehoeren zu LF2": durch KMK/FIAusbV/BIBB
   sowie das verbindliche AP1-Inhaltsverzeichnis im Projekt gestuetzt.
2. "Telearbeit ist nicht nur ein anderes Wort fuer Homeoffice": durch ArbStaettV
   gestuetzt; das Kapitel trennt Telearbeit, Homeoffice als Sammelbegriff und
   mobiles Arbeiten.
3. "Arbeitsschutz bleibt relevant": durch ArbSchG gestuetzt. Die alte
   Formulierung "volle Geltung der ArbStaettV" wurde entfernt, weil Telearbeit
   differenzierter geregelt ist als eine normale Betriebsarbeitsstaette.
4. "ArbStaettV nennt Anforderungen an Bildschirmarbeit, aber nicht starre
   22-Zoll-/Zwei-Monitor-Pflichten": im Kapitel korrigiert. Zahlen werden nur
   noch als praxisnahe Richtwerte oder Aufgabenbegruendung genutzt.
5. "DGUV/BAuA duerfen Richtwerte und Gestaltungsideen liefern, ersetzen aber
   keine Rechtsnorm": im Kapitel und in der Quellenbank getrennt.
6. "Laengere Notebookarbeit braucht ergonomisch meist externe Anzeige und
   Eingabe": fachlich plausibel und durch DGUV-/BAuA-Kontext gestuetzt; nicht
   mehr als absolute Gesetzespflicht formuliert.
7. "500 lx fuer Bueroarbeit ist ein Planungs-/Praxiswert": im Kapitel bewusst
   als haeufiger Planungswert, nicht als allgemeine starre AP1-Pflicht genannt.
8. "WCAG 2.2 ist nach vier Prinzipien organisiert: wahrnehmbar, bedienbar,
   verstaendlich, robust; Erfolgskriterien haben Level A/AA/AAA": durch W3C WAI
   gestuetzt.
9. "WCAG kann auch fuer Webanwendungen, mobile Webinhalte und teilweise
   nicht-webbasierte ICT als Orientierung genutzt werden": durch W3C-Kontext
   gestuetzt; Kapitel bleibt AP1-nah.
10. "BITV 2.0 gilt nicht pauschal fuer jedes Privatunternehmen": Kapitel grenzt
    BITV auf oeffentliche Stellen des Bundes ein und nutzt Barrierefreiheit im
    allgemeinen Unternehmensfall als Auswahl-/Qualitaetskriterium.
11. "Homeoffice-Sicherheitsmassnahmen sind risikobasiert": alte absolute Liste
    "ohne die rechtlich nicht zulaessig" wurde ersetzt durch typische Bausteine
    je Schutzbedarf.

### Didaktikcheck

- Einstieg ohne Vorwissen: verbessert. Das Kapitel beginnt nicht mehr mit
  Corona-/Punkteversprechen, sondern mit dem Nutzen: Arbeitsplatz, Aufgabe und
  Person passend machen.
- Begriffe vor Verwendung: verbessert. Telearbeit, Homeoffice, mobiles Arbeiten,
  Ergonomie, Barrierefreiheit und Softwareergonomie werden getrennt.
- Beispiel mit Loesungsweg: vorhanden. Das Auswahlbeispiel zeigt einen
  Support-Arbeitsplatz mit Sehbeeintraechtigung und begruendet Hardware,
  Software-Barrierefreiheit und Sicherheit.
- Fehlerfallen: stark. Starre Richtwerte, Homeoffice-Begriffsfehler,
  "barrierefrei" ohne Massnahme und reine Hardwareantworten werden genannt.
- Selbstcheck/Aufgabenmodus: die alte "Typische Klausuraufgabe" wurde entfernt,
  damit das Kompendium kein Aufgabenarchiv wird.
- Didaktisches Risiko:
  - Das Kapitel verbindet Recht, Ergonomie, Web-Barrierefreiheit und Sicherheit.
    Fuer AP1 ist das sinnvoll, darf aber nicht in Norm- oder Medizintiefe kippen.
  - Echte Aufgaben unter Zeitdruck fehlen noch.

### Umfangsentscheidung

- Pflicht:
  - Telearbeit/Homeoffice/mobiles Arbeiten unterscheiden
  - Bildschirm, Eingabe, Moebel, Licht und Raum fallbezogen bewerten
  - Barrierefreiheit als konkrete Massnahme begruenden
  - Softwareergonomie und WCAG-Grundprinzipien anwenden
  - Homeoffice-Sicherheitsmassnahmen risikobasiert nennen
- Kann:
  - BITV 2.0 als Rechtsbezug fuer oeffentliche Stellen
  - DGUV-/BAuA-Richtwerte als Praxisorientierung
  - assistive Technologien und besondere Eingabegeraete
- Extra/Raus:
  - medizinische Detaillehre
  - DIN-/ISO-Normtiefe zu 9241
  - vollstaendige WCAG-Erfolgskriterien auswendig
  - allgemeines Arbeitsrecht jenseits des Arbeitsplatzbezugs

### Entscheidung

- Vertrauen: `teilgeprueft`.
- Grund: zentrale Rechts-/Arbeitsplatz-/Barrierefreiheitsquellen wurden
  nachgezogen, zu absolute Aussagen wurden entschaerft und das AP1-2025-Delta
  Barrierefreiheit ist im Zielkapitel sichtbar.
- Noetige Aenderungen:
  - Erledigt: Kapitel von Homeoffice-only auf Ergonomie, Barrierefreiheit und
    Telearbeit erweitert.
  - Erledigt: `softwareergonomie`-Stub in der TOC auf `homeoffice-ergonomie`
    als Zielort umgestellt.
  - Erledigt: Quellenbank, Tag-Mapping, Glossar und technischer Auditstatus
    nachgezogen.
  - Spaeter: mit legaler AP1-/U-Form-Aufgabe gegen Auswahl- und
    Beratungsaufgaben testen.
- Naechste Aktion:
  - `osi-modell` als naechstes Queue-Kapitel auditieren, wenn kein legaler
    Aufgabenabgleich fuer Ergonomie/Barrierefreiheit vorliegt.

## Detailaudit: osi-modell

Datum: 17.06.2026
Bearbeiter: Codex

### Scope

- Thema: OSI-Schichtenmodell, TCP/IP-Praxisbezug, PDU/Kapselung,
  Protokoll-/Geraetezuordnung und einfache Diagnose mit Schichtenblick.
- AP1-Relevanz: P2 nach LF3. Das Thema ist keine tiefe Normkunde, aber ein
  wichtiger Ordnungsbaustein fuer Netzwerkkonfiguration, TCP/UDP, DNS,
  Subnetting, Gateway, WLAN und Fehlersuche.
- Form: Kapitel.

### Quellen

- Offizielle Ausbildungsquelle:
  - FIAusbV, AP Teil 1: Einrichten eines IT-gestuetzten Arbeitsplatzes.
  - KMK-Rahmenlehrplan, LF3: Clients in Netzwerke einbinden.
  - BIBB-Umsetzungshilfe als Ordnungsmittel- und Umsetzungsbezug.
- Fachliche Primaerquelle:
  - ITU-T X.200 / ISO/IEC 7498-1: OSI Basic Reference Model, Zweck als
    Referenzmodell, Schichtenarchitektur und sieben Layer.
  - RFC 1122: Internet-Host-Schichten, TCP/IP-Stack, Link-/Internet-/
    Transport-Bezug und ARP im Link-Kontext.
  - RFC 791: IPv4 mit Adressierung und Fragmentierung als Kernfunktionen.
  - RFC 826: ARP loest Protokolladressen zu Hardware-/Ethernet-Adressen auf.
  - RFC 9293: TCP als Transportprotokoll mit Ports, Segmenten,
    zuverlaessigem geordnetem Byte-Strom.
  - RFC 768: UDP als Datagramm-Protokoll ueber IP.
  - RFC 9110: HTTP als zustandsloses Anwendungsprotokoll.
  - RFC 8446: TLS schuetzt Client-/Server-Kommunikation und liegt oberhalb
    des Transports, ist aber kein TCP/UDP-Ersatz.
- Didaktischer Vergleich:
  - Interner Vergleich gegen `AP1_INHALTSVERZEICHNIS_LERNFELDER_DICHTE.md`:
    OSI/TCP-IP D2-D3/P2, Protokolle einordnen, keine Normdetails auswendig.
  - Interner Vergleich gegen `INHALTSVERZEICHNIS_JAHR_1_2.md`:
    OSI/TCP-IP als LF3-Kapitel mit Lehrplan-/Pruefungsbezug.
- Pruefungs-/Aufgabentyp:
  - Eigene AP1-nahe Aufgabentypen vorhanden: Schichtnummer/PDU/Geraet
    zuordnen, DNS/ARP/TLS-Grenzfaelle erklaeren, Diagnosefolge aus Symptomen
    ableiten.
  - Legal erworbene Original-/U-Form-Aufgabe noch nicht dagegen getestet.

### Faktencheck

1. "Das OSI-Modell ist ein Referenzmodell, kein direkt gesprochenes
   Protokoll": durch ITU-T X.200/ISO 7498-1 gestuetzt; Kapitel wurde darauf
   umformuliert.
2. "Das Modell dient als konzeptueller Rahmen und nicht als
   Implementierungsspezifikation": durch ITU-T X.200 gestuetzt; Normdetails
   wurden nicht in den Lerntext aufgeblasen.
3. "Sieben Schichten von Physical/Bituebertragung bis Application/Anwendung":
   durch ITU-T X.200/ISO 7498-1 gestuetzt.
4. "IPv4 gehoert in die Vermittlungs-/Internet-Schicht": durch RFC 791 und
   RFC 1122 gestuetzt.
5. "TCP arbeitet als Transportprotokoll mit Ports und Segmenten": durch
   RFC 9293 gestuetzt.
6. "UDP ist Datagramm-Kommunikation ueber IP": durch RFC 768 gestuetzt.
7. "HTTP ist ein zustandsloses Anwendungsprotokoll": durch RFC 9110 gestuetzt.
8. "ARP loest im lokalen Netz IPv4-/Protokolladressen zu MAC-/Hardwareadressen
   auf": durch RFC 826 und RFC 1122 gestuetzt. Kapitel fuehrt ARP jetzt als
   Grenzfall bei Sicherung/Link statt pauschal als Schicht-3-Protokoll.
9. "TLS schuetzt vor Mitlesen, Manipulation und Nachrichtfaelschung, ist aber
   nicht dasselbe wie TCP/UDP": durch RFC 8446 gestuetzt. Kapitel formuliert
   TLS jetzt als Grenzfall oberhalb des Transports.
10. "Ein erfolgreicher Ping auf eine IP beweist nicht DNS, TLS, HTTP oder
    offenen TCP-Port": fachlich korrekt aus Schichtenlogik; Kapitel hat die
    alte zu starke Diagnosebehauptung ersetzt.

### Didaktikcheck

- Einstieg ohne Vorwissen: verbessert. Das Kapitel startet mit dem Nutzen des
  Ordnungsschemas statt mit Normdetails.
- Begriffe vor Verwendung: verbessert. OSI, PDU, Kapselung, Schichten,
  DNS/ARP/TLS-Grenzfaelle und TCP/IP werden schrittweise eingefuehrt.
- Beispiel mit Loesungsweg: vorhanden. HTTPS-Aufruf und Wiki-Diagnose zeigen
  Schichtenbezug ohne geschuetzte Pruefungsaufgabe.
- Fehlerfallen: verbessert. Paket/Frame, DNS, ARP, Geraete, TLS und Ping werden
  explizit getrennt.
- Selbstcheck: vorhanden als kurzer Zuordnungscheck mit Loesung.
- Didaktisches Risiko:
  - Schicht 5 und 6 bleiben abstrakt. Das ist fuer AP1 akzeptabel, solange
    nicht ISO-tief gelernt wird.
  - Die Zuordnung von ARP und TLS ist je nach Lehrmaterial unterschiedlich.
    Kapitel nennt beide bewusst als Grenzfaelle und gibt eine pruefungssichere
    Formulierung.

### Umfangsentscheidung

- Pflicht:
  - sieben Schichten nennen und grob erklaeren
  - PDU-Folge Daten, Segment/Datagramm, Paket, Frame, Bit
  - Switch/Router/Port/DNS/TCP/UDP/IP/Ethernet zuordnen
  - OSI vs. TCP/IP grob vergleichen
  - ARP und TLS als Grenzfaelle sauber formulieren
  - Diagnoseaussagen nicht aus einem einzelnen Ping ueberdehnen
- Kann:
  - Kapselung mit Headern erklaeren
  - HTTPS-Ablauf schichtenweise lesen
  - TCP/IP-Schichten nach RFC 1122 einordnen
- Extra/Raus:
  - ISO/IEC-7498-Detailbegriffe, Service Access Points, Conformance-Fragen
  - vollstaendige Protokollheader
  - historische OSI-Protokollfamilie

### Entscheidung

- Vertrauen: `teilgeprueft`.
- Grund: Kernaussagen und kritische Grenzfaelle wurden gegen Primaerquellen
  geprueft; Kapiteltext, Quellenbank und technischer Auditstatus wurden
  nachgezogen. `geprueft` ist noch zu frueh, weil legaler Aufgabenabgleich
  unter Zeitdruck fehlt.
- Noetige Aenderungen:
  - Erledigt: Kapiteltext von zu starken/pruefungsaufgabenartigen Stellen
    befreit und fachlich praezisiert.
  - Erledigt: ARP, TLS und Ping-Diagnose korrigiert.
  - Erledigt: Quellenbank, Tag-Mapping und technischer Auditstatus nachgezogen.
  - Spaeter: legale AP1-/U-Form-Aufgabe gegen Zuordnung und Diagnose testen.
- Naechste Aktion:
  - `tcp-udp` als naechstes LF3-Netzwerkprotokoll-Kapitel auditieren, wenn
    kein legaler Aufgabenabgleich fuer `osi-modell` vorliegt.

## Detailaudit: tcp-udp

Datum: 17.06.2026
Bearbeiter: Codex

### Scope

- Thema: TCP, UDP, Portnummern, typische Dienste, DNS-Grenzfall, Firewall-/
  NAT-Regeln und einfache Schicht-4-Diagnose.
- AP1-Relevanz: P1 nach LF3-Soll. Das verbindliche Inhaltsverzeichnis fuehrt
  "TCP, UDP und Ports" mit D3/P1: verbindungsorientiert/verbindungslos,
  Ports, typische Dienste und Einsatz begruenden.
- Form: Kapitel. Es stuetzt OSI/TCP-IP, Netzwerkkonfiguration, Firewall,
  NAT/Port-Forwarding, Webdienste, E-Mail, DHCP/DNS und Diagnose.

### Quellen

- Offizielle Ausbildungsquelle:
  - FIAusbV, AP Teil 1: Einrichten eines IT-gestuetzten Arbeitsplatzes.
  - KMK-Rahmenlehrplan, LF3: Clients in Netzwerke einbinden.
  - BIBB-Umsetzungshilfe als Ordnungsmittel- und Umsetzungsbezug.
- Fachliche Primaerquelle:
  - RFC 9293: TCP als Transportprotokoll mit Ports, Verbindungen,
    geordnetem zuverlaessigem Byte-Strom, Sequenznummern und Segmenten.
  - RFC 768: UDP als Datagramm-Protokoll mit minimalem Mechanismus; keine
    Garantie fuer Zustellung, Reihenfolge oder Duplikatschutz.
  - RFC 6335 und IANA Service Name and Port Number Registry: Portbereiche und
    offizielle Service-/Port-Zuordnung.
  - RFC 1035 und RFC 7766: DNS auf UDP/TCP Port 53, Standardabfragen meist UDP,
    TCP-Unterstuetzung fuer allgemeine DNS-Implementierungen.
  - RFC 2131: DHCP nutzt UDP im Client-/Server-Ablauf.
  - RFC 9110 und RFC 8446 fuer HTTP/TLS-Abgrenzung oberhalb der
    Transportschicht.
- Didaktischer Vergleich:
  - Interner Vergleich gegen `AP1_INHALTSVERZEICHNIS_LERNFELDER_DICHTE.md`:
    D3/P1, anwenden und begruenden, keine TCP-Flags-Tiefe.
  - Interner Vergleich gegen `INHALTSVERZEICHNIS_JAHR_1_2.md`:
    `TCP/UDP/Ports` als LF3-Kapitel mit Lehrplan-/Pruefungsbezug.
- Pruefungs-/Aufgabentyp:
  - Eigene AP1-nahe Aufgabentypen vorhanden: TCP/UDP unterscheiden,
    Dienst/Port/Protokoll zuordnen, Firewall-Regel mit Quelle, Ziel,
    Richtung, Protokoll und Port formulieren, DNS-UDP/TCP-Falle erklaeren.
  - Legal erworbene Original-/U-Form-Aufgabe noch nicht dagegen getestet.

### Faktencheck

1. "TCP ist ein wichtiges Transportprotokoll im Internet-Protokollstapel":
   durch RFC 9293 gestuetzt.
2. "TCP liefert Anwendungen einen zuverlaessigen, geordneten Byte-Strom":
   durch RFC 9293 gestuetzt.
3. "TCP nutzt Portnummern, um Anwendungsdienste zu identifizieren und Flows
   zwischen Hosts zu multiplexen": durch RFC 9293 gestuetzt.
4. "TCP-Segmente enthalten Source Port, Destination Port, Sequence Number,
   Acknowledgment Number, Fenster und weitere Headerfelder": durch RFC 9293
   gestuetzt.
5. "UDP bietet Datagrammkommunikation mit minimalem Protokollmechanismus;
   Zustellung, Reihenfolge und Duplikatschutz sind nicht garantiert": durch
   RFC 768 gestuetzt.
6. "UDP-Header hat 8 Oktette Mindestlaenge": durch RFC 768 gestuetzt.
7. "Portbereiche 0-1023, 1024-49151 und 49152-65535 sind System/Well Known,
   User/Registered und Dynamic/Private": durch RFC 6335 gestuetzt.
8. "TCP-Port 53 und UDP-Port 53 sind getrennte Kommunikationsziele": fachlich
   durch getrennte Transportprotokoll-Portnamensraeume und IANA/RFC 6335
   gestuetzt.
9. "DNS ist nicht nur UDP": durch RFC 1035 und RFC 7766 gestuetzt. Kapitel
   formuliert Standardabfragen als meist UDP, TCP aber als notwendigen
   unterstuetzten Transport und Zonentransfer-/Groessenantwort-Kontext.
10. "TCP ist nicht automatisch verschluesselt; TLS/HTTPS ist eine separate
    Schutzschicht oberhalb des Transports": durch RFC 8446 und die
    OSI/TCP-IP-Einordnung gestuetzt.

### Didaktikcheck

- Einstieg ohne Vorwissen: gut. Kapitel startet mit IP als Weg zum Host und
  Port als Weg zur Anwendung.
- Begriffe vor Verwendung: ja. TCP, UDP, Portnummer, Socket, Segment,
  Datagramm und Three-Way-Handshake sind als Begriffe markiert und im Glossar
  vorhanden.
- Beispiel mit Loesungsweg: vorhanden. Firewall-Regel fuer HTTPS und
  DNS-Regeln zeigen Quelle, Ziel, Richtung, Protokoll, Port und Zweck.
- Fehlerfallen: stark. TCP ist nicht Verschluesselung, UDP ist nicht "falsch",
  Port ohne Protokoll ist ungenau, DNS kann UDP und TCP, Handshakes werden
  getrennt.
- Selbstcheck: vorhanden und mit Loesungen versehen; alter Aufgabenmodus wurde
  entfernt.
- Didaktisches Risiko:
  - Kapitel beruehrt Firewall/NAT/Port-Forwarding. Das ist als Transfer
    sinnvoll, darf aber die eigenen Kapitel dazu nicht ersetzen.
  - HTTP/3/QUIC ist bewusst nicht vertieft; die Formulierung "klassische
    Variante TCP 443" vermeidet eine absolute HTTPS-Aussage.

### Umfangsentscheidung

- Pflicht:
  - TCP vs. UDP unterscheiden
  - Portnummern und Portbereiche erklaeren
  - typische Dienste samt Transportprotokoll einordnen
  - DNS als UDP/TCP-Grenzfall formulieren
  - Firewall-Regeln mit Richtung, Quelle, Ziel, Protokoll, Port und Zweck
    schreiben
  - einfache Schicht-4-Diagnose und Fehlersymptome lesen
- Kann:
  - Three-Way-Handshake als Ablauf verstehen
  - Sequenznummern, ACK, Wiederholung, Fluss- und Staukontrolle grob
    einordnen
  - TCP-Reset, Timeout und "Connection refused" als Diagnosehinweis nutzen
- Extra/Raus:
  - TCP-Flag-Details auswendig
  - Fenster-/MSS-/MTU-Tuning
  - QUIC/HTTP3-Tiefe
  - Socket-API-Programmierung

### Entscheidung

- Vertrauen: `teilgeprueft`.
- Grund: Kernfakten wurden gegen RFCs/IANA geprueft, sichtbare
  Pruefungs-/Aufgabenlabels wurden aus dem Lerntext entfernt, Quellenbank und
  technischer Auditstatus wurden nachgezogen. `geprueft` ist noch zu frueh,
  weil legaler Aufgabenabgleich unter Zeitdruck fehlt.
- Noetige Aenderungen:
  - Erledigt: Pruefungs-Metabar, Pruefungsblick, Pruefungssatz,
    Pruefungsaufgabenblock und ungeloester Mini-Lerncheck neutralisiert.
  - Erledigt: UDP-Latenz-Aussage von "geringer" auf weniger
    Transportmechanik mit Netz-/Anwendungsabhaengigkeit praezisiert.
  - Erledigt: RFC 6335 und RFC 7766 in Quellenbank aufgenommen.
  - Erledigt: `lessonSourceIds.tcp-udp`, Quellenliste im Kapitel und
    `src/lib/audit/status.ts` nachgezogen.
  - Spaeter: legale AP1-/U-Form-Aufgabe gegen Port-/Protokoll- und
    Firewall-Regel-Faelle testen.
- Naechste Aktion:
  - `wlan-standards` als naechstes LF3-Netzwerkkapitel auditieren, wenn kein
    legaler Aufgabenabgleich fuer `tcp-udp` vorliegt.

## Detailaudit: wlan-standards

Datum: 18.06.2026
Bearbeiter: Codex

### Scope

- Thema: WLAN nach IEEE 802.11, Standards/Wi-Fi-Generationen, Frequenzbaender,
  Kanalplanung, Roaming, WPA2/WPA3, Personal vs. Enterprise, Gastnetz-Trennung
  und einfache WLAN-Auswahl-/Diagnosefaelle.
- AP1-Relevanz: P1 nach LF3-Soll. Das verbindliche AP1-Inhaltsverzeichnis
  fuehrt WLAN mit D3-D4/P1: Standards grob, Frequenzen, WPA2/WPA3,
  Reichweite, Stoerquellen und passende Massnahmen.
- Form: Kapitel.

### Quellen

- Offizielle Ausbildungsquelle:
  - FIAusbV, AP Teil 1: Einrichten eines IT-gestuetzten Arbeitsplatzes.
  - KMK-Rahmenlehrplan, LF3: Clients in Netzwerke einbinden.
  - BIBB-Umsetzungshilfe als Ordnungsmittel- und Umsetzungsbezug.
- Fachliche Primaerquelle:
  - IEEE 802.11 Working Group / IEEE SA P802.11 fuer WLAN-MAC/PHY und den
    Standardkontext.
  - IEEE 802.11ax-2021 fuer High-Efficiency-WLAN.
  - IEEE 802.11be-2024 fuer Extremely High Throughput/Wi-Fi-7-Fakten.
  - Wi-Fi Alliance Security fuer WPA3-/WPA2-Einordnung.
  - BSI WLAN-/Router-Hinweise fuer sichere Konfiguration, WPA2/WPA3 und
    Gastnetz-/Routerpraxis.
- Didaktischer Vergleich:
  - Microsoft Support zu Wi-Fi 6/6E, Wi-Fi 7 und WPA3 als
    Hersteller-/Kompatibilitaetsvergleich, nicht als alleiniger Faktenanker.
  - Interner Vergleich gegen `AP1_INHALTSVERZEICHNIS_LERNFELDER_DICHTE.md`:
    D3-D4/P1, keine Funkphysik- oder Normdetailtiefe.
- Pruefungs-/Aufgabentyp:
  - Eigene AP1-nahe Aufgabentypen vorhanden: WLAN-Standard und Band grob
    zuordnen, Stoer-/Reichweitenproblem begruenden, WPA2/WPA3 und
    Personal/Enterprise vergleichen, Gast-WLAN-Trennung vorschlagen.
  - Legal erworbene Original-/U-Form-Aufgabe noch nicht dagegen getestet.

### Faktencheck

1. "WLAN basiert auf IEEE 802.11 fuer Wireless LAN MAC/PHY": durch IEEE
   802.11 Working Group und IEEE SA P802.11 gestuetzt.
2. "802.11ax ist High-Efficiency-WLAN": durch IEEE 802.11ax-2021 gestuetzt;
   Kapitel nutzt es nur grob fuer Wi-Fi 6/6E.
3. "Wi-Fi 6E erweitert Wi-Fi 6 um 6 GHz": durch Wi-Fi-Alliance-/Microsoft-
   Kontext gestuetzt; Kapitel formuliert es als zusaetzliches Band, nicht als
   pauschalen Geschwindigkeitsgaranten.
4. "802.11be-2024 ist der fachliche Anker fuer Wi-Fi 7": durch IEEE
   802.11be-2024 gestuetzt. Das Kapitel nennt Wi-Fi 7 mit 2,4/5/6 GHz,
   Multi-Link-Operation und geringerer Latenz vorsichtig als Praxismerkmal.
5. "802.11be-2024 wurde als aktiver Standard gefuehrt und am 22.07.2025
   veroeffentlicht": gegen IEEE-SA-Seite geprueft; nicht als Lernpflicht
   auswendig, aber als Quellenstand dokumentiert.
6. "Brutto-Datenraten sind nicht echte Nutzdatenraten": fachlich durch
   MAC/PHY-Kontext und Praxisquellen gestuetzt; Kapitel nennt Overhead,
   Stoerungen, Entfernung, Kanalbreite, Geraeteanzahl und Signalqualitaet.
7. "2,4 GHz bietet mehr Reichweite, aber weniger saubere Kanaele als 5/6 GHz":
   als Praxisregel beibehalten, aber nicht als absolute Funkphysikformel
   ueberdehnt.
8. "Kanal 1/6/11 ist ein haeufig robuster 2,4-GHz-Plan mit 20-MHz-Kanaelen":
   Kapitel wurde entschaerft; andere Kanalplaene koennen je nach Land,
   Kanalbreite und Umgebung moeglich sein.
9. "WPA3 ist die aktuelle Wi-Fi-Sicherheitsgeneration, WPA2 bleibt verbreitet":
   durch Wi-Fi Alliance/Microsoft/BSI-Kontext gestuetzt.
10. "Verschluesselung ersetzt keine Netztrennung": BSI-/Praxisbezug; Kapitel
    nennt Gast-WLAN, VLAN/Firewall und getrennte IP-Bereiche als Massnahmen.

### Didaktikcheck

- Einstieg ohne Vorwissen: brauchbar. Das Kapitel erklaert WLAN als geteiltes
  Funkmedium und startet mit typischen betrieblichen Fragen.
- Begriffe vor Verwendung: verbessert. WLAN, Access Point, SSID, Frequenzband,
  Kanal, Roaming und WPA3 sind als Glossar-Terme vorhanden.
- Beispiel mit Loesungsweg: vorhanden. Die Arztpraxis-Situation zeigt interne
  Clients, Gast-WLAN, Altgeraete und Bandwahl.
- Fehlerfallen: stark. Brutto/Netto, WEP/WPA, SSID-Verstecken, 2,4-GHz-Kanaele,
  Repeater, WPS und Roaming werden genannt.
- Selbstcheck: verbessert. Der alte Klausur-/Aufgabenblock wurde in einen
  kurzen Selbstcheck mit Loesungen umgewandelt.
- Didaktisches Risiko:
  - Wi-Fi-Generationen koennen in Marketingtabellen ausufern. Das Kapitel bleibt
    bewusst bei grober Zuordnung und Praxisfolgen.
  - 2,4-GHz-Kanalplanung ist regional und von Kanalbreite abhaengig; deshalb
    keine absolute "nur 1/6/11"-Formulierung.

### Umfangsentscheidung

- Pflicht:
  - WLAN als IEEE-802.11-Funk-LAN und geteiltes Medium erklaeren
  - Wi-Fi 4/5/6/6E/7 grob einordnen
  - 2,4/5/6 GHz mit Reichweite, Stoerung, Kompatibilitaet und Kapazitaet
    begruenden
  - Brutto-/Netto-Datenrate und Stoerfaktoren erklaeren
  - WPA2/WPA3, Personal/Enterprise und Gastnetz-Trennung anwenden
  - einfache Planungs- und Diagnosemassnahmen nennen
- Kann:
  - OFDMA, MIMO, Multi-Link-Operation als grobe Praxismerkmale
  - Roaming und Sendeleistung als typische Planungsfallen
  - WPS als Sicherheitsrisiko im professionellen Betrieb
- Extra/Raus:
  - vollstaendige IEEE-802.11-Header und MAC-Prozeduren
  - Funkphysik, Modulationsdetails und DFS-Tiefe
  - Hersteller-spezifisches Controller-/Mesh-Tuning
  - Wi-Fi-Zertifizierungsprogramm auswendig

### Entscheidung

- Vertrauen: `teilgeprueft`.
- Grund: Kernaussagen wurden gegen IEEE-, Wi-Fi-Alliance-/BSI- und
  Herstellerquellen abgeglichen; sichtbare Pruefungs-/Aufgabenlabels wurden
  aus dem Lerntext entfernt, Quellenbank und technischer Auditstatus wurden
  nachgezogen. `geprueft` ist noch zu frueh, weil legaler Aufgabenabgleich
  unter Zeitdruck fehlt.
- Noetige Aenderungen:
  - Erledigt: Pruefungs-Metabar, Pruefungsblick, Pruefungsaufgabenblock und
    Musterantwort neutralisiert.
  - Erledigt: 2,4-GHz-Kanalformulierung entschaerft und regionale/planerische
    Abhaengigkeit sichtbar gemacht.
  - Erledigt: IEEE 802.11ax-2021, IEEE 802.11be-2024 und Microsoft-Wi-Fi-
    Praxisquelle in der Quellenbank aufgenommen.
  - Erledigt: `lessonSourceIds.wlan-standards`, Tag-Mapping und
    `src/lib/audit/status.ts` nachgezogen.
  - Spaeter: legale AP1-/U-Form-Aufgabe gegen WLAN-Auswahl, Kanalplanung,
    Sicherheitsmodus und Gastnetz-Trennung testen.
- Naechste Aktion:
  - `firewall-dmz` als naechstes Netz-/Sicherheitskapitel auditieren, wenn
    kein legaler Aufgabenabgleich fuer `wlan-standards` vorliegt.

## Detailaudit: firewall-dmz

Datum: 18.06.2026
Bearbeiter: Codex

### Scope

- Thema: Firewalls, Firewall-Regeln, Default Deny/Allowlist, Paketfilter,
  Stateful Firewall, Application-Layer-Gateway, DMZ, Netzsegmentierung,
  NAT-/Port-Forwarding-Abgrenzung und einfache Fehlersuche.
- AP1-Relevanz: P1 nach aktuellem verbindlichem Inhaltsverzeichnis fuer LF4
  "Firewall und Haertung" mit D4-D5: Regeln grob verstehen, sichere
  Konfiguration und Fallmassnahmen ableiten. Gleichzeitig stuetzt das Kapitel
  LF3-Netzwerkdiagnose und LF9-Netzdienste.
- Form: Kapitel.

### Quellen

- Offizielle Ausbildungsquelle:
  - FIAusbV, AP Teil 1: Einrichten eines IT-gestuetzten Arbeitsplatzes.
  - KMK-Rahmenlehrplan, besonders LF3 Clients in Netzwerke einbinden und LF4
    Schutzbedarfsanalyse im eigenen Arbeitsbereich.
  - BIBB-Umsetzungshilfe als Ordnungsmittel- und Umsetzungsbezug.
- Fachliche Primaerquelle:
  - BSI IT-Grundschutz NET.3.2 Firewall: Firewall als sichere Kopplung
    IP-basierter Netze, Allowlist-Regeln, zustandsbehaftete Filterung,
    Administration, Protokollierung und Dokumentation.
  - BSI IT-Grundschutz NET.1.1 Netzarchitektur und -design: Netztrennung in
    internes Netz, DMZ und Aussenanbindung; Zonenuebergaenge durch Firewalls;
    DMZ fuer aus dem Internet erreichbare Dienste.
  - RFC 1918: private IPv4-Adressbereiche und Grenzen privater Adressen.
  - BSI-Verbraucher-/Router-Hinweise nur als praxisnaher Zusatz, nicht als
    Ersatz fuer Grundschutz.
- Didaktischer Vergleich:
  - Interner Vergleich gegen `AP1_INHALTSVERZEICHNIS_LERNFELDER_DICHTE.md`:
    D4-D5/P1, arbeitsplatznah, keine Enterprise-Firewall-Tiefe.
  - Interner Vergleich gegen `INHALTSVERZEICHNIS_JAHR_1_2.md`:
    Firewall/DMZ/Segmentierung als Lehrplan-/Pruefungskapitel.
- Pruefungs-/Aufgabentyp:
  - Eigene AP1-nahe Aufgabentypen vorhanden: DMZ-Skizze lesen, Regel mit
    Quelle/Ziel/Protokoll/Port/Zweck formulieren, ANY-Regel erkennen,
    Webserver-Platzierung begruenden und Firewall-/Routing-/Dienstfehler
    eingrenzen.
  - Legal erworbene Original-/U-Form-Aufgabe noch nicht dagegen getestet.

### Faktencheck

1. "Eine Firewall koppelt Netze mit unterschiedlichem Vertrauens- oder
   Schutzbedarf und begrenzt Kommunikation auf erlaubte Datenstroeme": durch
   BSI NET.3.2 gestuetzt.
2. "Default Deny/Allowlist ist der richtige Grundsatz fuer professionelle
   Regelwerke": durch BSI NET.3.2 und NET.1.1 gestuetzt; alle anderen
   Verbindungen muessen unterbunden werden.
3. "Firewall-Regeln brauchen eindeutige Kommunikationsbeziehungen": durch BSI
   NET.3.2 gestuetzt. Das Kapitel nennt Quelle, Ziel, Protokoll, Port, Richtung,
   Aktion und Zweck.
4. "Zonenuebergaenge zwischen internem Netz, DMZ und Aussenanbindung werden
   durch Firewalls kontrolliert": durch BSI NET.1.1 gestuetzt.
5. "Aus dem Internet erreichbare Dienste gehoeren in eine externe DMZ oder
   sauber getrennte Serverzone, nicht frei ins interne LAN": durch BSI NET.1.1
   gestuetzt.
6. "Clients und Server bzw. Bereiche mit unterschiedlichem Sicherheitsniveau
   sollen segmentiert werden": durch BSI NET.1.1 gestuetzt.
7. "Zustandsbehaftete Filterung ist fuer Paketfilter im Grundschutz relevant":
   durch BSI NET.3.2 und NET.1.1 gestuetzt. Das Kapitel erklaert Stateful
   bewusst nur AP1-nah.
8. "Administrationsschnittstellen duerfen nicht ungeschuetzt aus
   nicht vertrauenswuerdigen Netzen erreichbar sein": durch BSI NET.3.2
   gestuetzt.
9. "Protokollierung ist fuer abgewiesene Verbindungen, Fehler und
   Konfigurationsaenderungen wichtig": durch BSI NET.3.2 gestuetzt.
10. "Private IPv4-Adressen wie 10/8, 172.16/12 und 192.168/16 sind nicht global
    routbar und brauchen fuer externe Erreichbarkeit Vermittlung wie Gateway,
    NAT, Proxy oder Portweiterleitung": durch RFC 1918 gestuetzt.

### Didaktikcheck

- Einstieg ohne Vorwissen: gut. Das Kapitel erklaert Firewall als kontrollierte
  Grenze und DMZ als Empfangsbereich-Analogie.
- Begriffe vor Verwendung: gut. Firewall, Regel, Default Deny, Allowlist,
  Paketfilter, Stateful Firewall, ALG, DMZ und Netzsegmentierung stehen vor den
  Beispielen im Begriffsraster und sind im Glossar vorhanden.
- Beispiel mit Loesungsweg: verbessert. Der alte Klausurblock wurde in ein
  erklaerendes Anwendungsbeispiel mit Schrittfolge umgebaut.
- Fehlerfallen: stark. ANY-Regeln, falsche Richtung, NAT-Verwechslung,
  Adminzugriff aus dem Internet und "DMZ ist sicher" werden genannt.
- Selbstcheck: verbessert. Der Kurzcheck enthaelt direkte Kurzloesungen.
- Didaktisches Risiko:
  - Das Kapitel beruehrt NAT/Port Forwarding und WLAN-Gastnetz. Das ist als
    Transfer sinnvoll, darf aber die jeweiligen Kapitel nicht ersetzen.
  - BSI-Grundschutz ist tiefer als AP1. Das Kapitel nutzt nur die AP1-nahe
    Essenz: Zonen, Regeln, Administration, Logging und Dokumentation.

### Umfangsentscheidung

- Pflicht:
  - Firewall, Regel, Default Deny/Allowlist, Paketfilter, Stateful und ALG
    unterscheiden
  - DMZ als getrennte Zone fuer oeffentlich erreichbare Dienste erklaeren
  - Regeln mit Quelle, Ziel, Richtung, Protokoll, Port, Aktion und Zweck
    formulieren
  - breite ANY-Regeln und direkten Adminzugriff als Risiko erkennen
  - NAT, Port Forwarding, Routing, Dienst und Firewall grob auseinanderhalten
  - einfache Fehlersuche an IP, Port, Routing, Firewall, Host-Firewall, Dienst
    und Logs strukturieren
- Kann:
  - zweistufige Firewall-Struktur und P-A-P-Struktur einordnen
  - Managementnetz, Bastion/Admin-VPN und Protokollierung nennen
  - Gastnetz/Servernetz/Managementnetz als weitere Segmente begruenden
- Extra/Raus:
  - NGFW-/UTM-Produktfunktionen im Detail
  - IDS/IPS-, WAF-, Reverse-Proxy- und SIEM-Tiefe
  - Firewall-Herstellerkonfiguration, NAT-Regel-Syntax, BSI-Anforderungscodes
    auswendig

### Entscheidung

- Vertrauen: `teilgeprueft`.
- Grund: zentrale Aussagen wurden gegen BSI-Grundschutz und RFC 1918 geprueft,
  sichtbare Pruefungs-/Klausurlabels wurden aus dem Lerntext entfernt,
  Quellenzuordnung und technischer Auditstatus wurden nachgezogen.
  `geprueft` ist noch zu frueh, weil legaler Aufgabenabgleich unter Zeitdruck
  fehlt.
- Noetige Aenderungen:
  - Erledigt: Pruefungs-Metabar, Pruefungsblick, Pruefungsantwort-Tipp und
    Klausuraufgabenblock neutralisiert.
  - Erledigt: Anwendungsbeispiel mit Loesungsweg und Kurzcheck mit
    Kurzloesungen eingebaut.
  - Erledigt: `lessonSourceIds.firewall-dmz` und
    `src/lib/audit/status.ts` nachgezogen.
  - Spaeter: legale AP1-/U-Form-Aufgabe gegen DMZ-Planung, Regelwerk und
    Fehlersuche testen.
- Naechste Aktion:
  - `port-forwarding` als naechstes Netz-/Sicherheitskapitel auditieren, wenn
    kein legaler Aufgabenabgleich fuer `firewall-dmz` vorliegt.

## Detailaudit: port-forwarding

Datum: 18.06.2026
Bearbeiter: Codex

### Scope

- Thema: Private und oeffentliche IPv4-Adressen, NAT, NAPT/PAT,
  Portweiterleitung, Firewall-/NAT-Zusammenspiel, CGNAT/DS-Lite-Grenzen,
  sichere Alternativen wie VPN und DMZ sowie einfache Fehlersuche.
- AP1-Relevanz: P2 nach aktuellem verbindlichem Inhaltsverzeichnis fuer LF3
  "NAT und Port Forwarding" mit D2-D3. Das Kapitel stuetzt LF3-Client-
  Einbindung, LF3-Netzwerkdiagnose, LF4-Firewall/Haertung und LF9-Dienste.
- Form: Kapitel, aber eng halten. Kein Routerprodukt-Tutorial, kein tiefes
  Firewall-Regelwerk und keine Providertechnik-Ausweitung.

### Quellen

- Offizielle Ausbildungsquelle:
  - FIAusbV, AP Teil 1: Einrichten eines IT-gestuetzten Arbeitsplatzes.
  - KMK-Rahmenlehrplan, besonders LF3 Clients in Netzwerke einbinden und LF4
    Schutzbedarf/Sicherheitsmassnahmen im eigenen Arbeitsbereich.
  - BIBB-Umsetzungshilfe als Ordnungsmittel- und Umsetzungsbezug.
- Fachliche Primaerquelle:
  - RFC 1918: private IPv4-Adressbereiche, fehlende globale Eindeutigkeit und
    Grenzen privater Adressen im Internet-Routing.
  - RFC 2663: NAT-Terminologie, Basic NAT, NAPT und Port-/Transportidentifier-
    Uebersetzung.
  - RFC 3022: Traditional NAT/NAPT und zustandsbezogene Uebersetzung.
  - RFC 5737: Dokumentationsnetze fuer Beispieladressen.
  - RFC 6333: DS-Lite mit IPv4-in-IPv6 und providerseitiger NAT-Infrastruktur.
  - RFC 6888: Carrier-Grade NAT als NAT-Funktion im Provider-Netz fuer mehrere
    Kunden.
  - BSI IT-Grundschutz NET.1.1 und NET.3.2: DMZ, Zonenuebergaenge,
    Segmentierung, Allowlist-/Firewall-Grundsatz.
- Didaktischer Vergleich:
  - Interner Vergleich gegen `AP1_INHALTSVERZEICHNIS_LERNFELDER_DICHTE.md`:
    D2-D3/P2, private/oeffentliche IP, NAT/PAT, Portweiterleitung,
    Sicherheitsgrenzen; keine Firewall-Regelwerks-Tiefe.
  - Interner Vergleich gegen `INHALTSVERZEICHNIS_JAHR_1_2.md`:
    NAT/Port Forwarding als Lehrplan-/Pruefungskapitel in LF3, mit LF9-Bezug.
- Pruefungs-/Aufgabentyp:
  - Eigene AP1-nahe Aufgabentypen vorhanden: private Adresse erkennen,
    NAT/NAPT/Portweiterleitung unterscheiden, HTTPS-Weiterleitung formulieren,
    Sicherheitsmassnahmen nennen, DS-Lite/CGNAT als Ursache erkennen.
  - Legal erworbene Original-/U-Form-Aufgabe noch nicht dagegen getestet.

### Faktencheck

1. "RFC 1918 definiert 10.0.0.0/8, 172.16.0.0/12 und 192.168.0.0/16 als
   private IPv4-Bereiche": durch RFC 1918 gestuetzt.
2. "Private IPv4-Adressen sind nicht global eindeutig und werden im Internet
   nicht normal zwischen Unternehmen geroutet": durch RFC 1918 gestuetzt.
3. "Basic NAT uebersetzt IP-Adressen zwischen privaten und externen
   Adressbereichen": durch RFC 2663 gestuetzt.
4. "NAPT/PAT uebersetzt zusaetzlich Transportkennungen wie TCP-/UDP-Ports und
   erlaubt mehreren internen Hosts, eine externe Adresse zu teilen": durch RFC
   2663 und RFC 3022 gestuetzt.
5. "Ausgehendes NAT braucht einen Zustand oder eine Zuordnungstabelle, damit
   Rueckpakete dem internen Client zugeordnet werden koennen": durch RFC 3022
   und NAT/NAPT-Funktionsbeschreibung gestuetzt.
6. "203.0.113.0/24 und 198.51.100.0/24 sind Beispielnetze fuer Dokumentation":
   durch RFC 5737 gestuetzt; Kapitel nutzt sie fuer externe Beispieladressen.
7. "DS-Lite kombiniert IPv4-in-IPv6 mit NAT und erlaubt Providern, IPv4-
   Adressen unter Kunden zu teilen": durch RFC 6333 gestuetzt.
8. "Carrier-Grade NAT ist eine NAT-Funktion im Provider-Netz, die mehrere
   Kunden eine IPv4-Adresse teilen laesst und nicht vom Kunden verwaltet wird":
   durch RFC 6888 gestuetzt.
9. "Port Forwarding macht einen Dienst erreichbar, schuetzt ihn aber nicht":
   durch BSI-Firewall-/Routerpraxis und Grundschutz-Logik zu erlaubter
   Kommunikation, Segmentierung und Absicherung gestuetzt.
10. "Oeffentlich erreichbare Dienste gehoeren nicht ungeschuetzt ins normale
    LAN, sondern in eine DMZ oder sauber getrennte Serverzone": durch BSI
    NET.1.1 gestuetzt.

### Didaktikcheck

- Einstieg ohne Vorwissen: gut. Das Kapitel startet bei privaten Adressen und
  erklaert NAT ueber eine Empfangsanalogie.
- Begriffe vor Verwendung: gut. NAT, NAPT/PAT, Port Forwarding, private/
  oeffentliche IPv4, Firewall-Regel, DMZ und CGNAT sind als Glossar-Terme
  vorhanden.
- Beispiel mit Loesungsweg: verbessert. Der alte Klausurblock wurde in ein
  normales Anwendungsbeispiel mit Schrittfolge umgebaut.
- Fehlerfallen: stark. RFC-1918-Grenzen, NAT-ist-keine-Firewall, TCP/UDP,
  DHCP-Wechsel, Adminfreigaben, DS-Lite/CGNAT und Heimrouter-"DMZ" werden
  genannt.
- Selbstcheck: verbessert. Der Mini-Lerncheck enthaelt jetzt direkte
  Kurzloesungen.
- Didaktisches Risiko:
  - Das Kapitel beruehrt Firewall/DMZ, VPN und Providertechnik. Es bleibt bei
    AP1-nahem Diagnose- und Entscheidungswissen und ersetzt die Spezialkapitel
    nicht.
  - "Port Forwarding" ist kein eigener RFC-Begriff in derselben Schaerfe wie
    NAT/NAPT; deshalb wird es als praktische feste Weiterleitung auf Basis der
    NAT-/Firewall-Logik erklaert.

### Umfangsentscheidung

- Pflicht:
  - private und oeffentliche IPv4-Adressen unterscheiden
  - RFC-1918-Bereiche sicher erkennen
  - NAT, NAPT/PAT, statisches NAT und Port Forwarding trennen
  - einfache Portweiterleitung mit externer Adresse, Port, Protokoll, internem
    Ziel und internem Port formulieren
  - NAT-Regel, Firewall-Regel, Server-Firewall und Anwendung getrennt pruefen
  - Sicherheitsmassnahmen und Alternativen wie VPN, DMZ/Servernetz und Reverse
    Proxy begruenden
  - DS-Lite/CGNAT als Ursache fuer scheiterndes IPv4-Portforwarding erkennen
- Kann:
  - Dokumentationsadressen aus RFC 5737 einordnen
  - externe und interne Ports unterscheiden, z. B. extern 8443 auf intern 443
  - IPv6-Fall knapp einordnen: kein NAT wegen Adressknappheit, aber Firewall
    und Segmentierung bleiben Pflicht
- Extra/Raus:
  - Produktklickpfade fuer Heimrouter
  - vollstaendige NAT-Traversal-/STUN-/TURN-/UPnP-Tiefe
  - Provider-Architektur, AFTR-Details und IPv6-Migrationsverfahren tief
  - Enterprise-Firewall-Syntax und SIEM/IDS-Tiefe

### Entscheidung

- Vertrauen: `teilgeprueft`.
- Grund: zentrale Aussagen wurden gegen RFC 1918, RFC 2663, RFC 3022, RFC
  5737, RFC 6333, RFC 6888 und BSI-Quellen geprueft. Sichtbare
  Pruefungs-/Klausurlabels wurden aus dem Lerntext entfernt, Quellenbank,
  Quellenzuordnung und technischer Auditstatus wurden nachgezogen. `geprueft`
  ist noch zu frueh, weil legaler Aufgabenabgleich unter Zeitdruck fehlt.
- Noetige Aenderungen:
  - Erledigt: Pruefungs-Metabar, Pruefungsblick, Pruefungsantwort-Tipp,
    Klausuraufgabenblock und ungeloester Mini-Lerncheck neutralisiert.
  - Erledigt: externe Beispieladresse im NAT-Beispiel auf RFC-5737-
    Dokumentationsbereich umgestellt.
  - Erledigt: Anwendungsbeispiel mit Loesungsweg und Kurzcheck mit
    Kurzloesungen eingebaut.
  - Erledigt: RFC 5737, RFC 6333 und RFC 6888 in Quellenbank aufgenommen.
  - Erledigt: `lessonSourceIds.port-forwarding`, Tag-Mapping und
    `src/lib/audit/status.ts` nachgezogen.
  - Spaeter: legale AP1-/U-Form-Aufgabe gegen NAT-/Portweiterleitungs-,
    Provider- und Sicherheitsfaelle testen.
- Naechste Aktion:
  - `ipv6-grundlagen` als naechstes LF3-P2-Netzkapitel auditieren, wenn kein
    legaler Aufgabenabgleich fuer die teilgeprueften Netzkapitel vorliegt.

## Detailaudit: ipv6-grundlagen

Datum: 18.06.2026
Bearbeiter: Codex

### Scope

- Thema: IPv6-Adressaufbau, 128-Bit-Länge, Hex-Schreibweise, kanonische
  Kürzung, Präfixnotation, Link-Local, Global Unicast, Unique Local,
  Multicast, Loopback, SLAAC und Interface-Identifier.
- AP1-Relevanz: P2 nach aktuellem verbindlichem Inhaltsverzeichnis für LF3
  "Clients in Netzwerke einbinden". IPv6 wird als Grundlage für
  Client-Konfiguration, Netzwerkdiagnose und IPv4/IPv6-Unterscheidung benötigt.
- Form: Kapitel, aber eng. Keine IPv6-Header-Tiefe, kein Routing-Protokoll,
  kein vollständiges Neighbor-Discovery-Kapitel.

### Quellen

- Offizielle Ausbildungsquelle:
  - FIAusbV, AP Teil 1: Einrichten eines IT-gestützten Arbeitsplatzes.
  - KMK-Rahmenlehrplan, besonders LF3 Clients in Netzwerke einbinden.
  - BIBB-Umsetzungshilfe als Ordnungsmittel- und Umsetzungsbezug.
- Fachliche Primaerquelle:
  - RFC 8200: IPv6 als aktueller Internet-Standard mit 128-Bit-Adressen.
  - RFC 4291: IPv6 Addressing Architecture, Adresstypen, `fe80::/10`,
    `ff00::/8`, Loopback, Unspecified und Modified EUI-64.
  - RFC 5952: kanonische Textdarstellung, Kleinschreibung, führende Nullen,
    `::`-Regeln und linke Kürzung bei Gleichstand.
  - RFC 4862: SLAAC und Router Advertisements für automatische
    IPv6-Adressbildung.
  - RFC 8981 und RFC 7217: temporäre bzw. stabile opaque Interface-Identifier
    statt dauerhaft nachvollziehbarer MAC-Ableitung.
  - RFC 4193: Unique Local Addresses `fc00::/7`.
  - RFC 3849: Dokumentationspräfix `2001:db8::/32`.
- Didaktischer Vergleich:
  - Interner Vergleich gegen `AP1_INHALTSVERZEICHNIS_LERNFELDER_DICHTE.md`:
    D2-D3/P2, Aufbau, Schreibweise, Präfix, grobe Unterschiede zu IPv4, keine
    IPv6-Header-Tiefe.
  - Interner Vergleich gegen `INHALTSVERZEICHNIS_JAHR_1_2.md`: IPv6 als
    LF3-Kapitel mit Aufbau, Schreibweise, Prefix und Autokonfiguration grob.
- Pruefungs-/Aufgabentyp:
  - Eigene AP1-nahe Aufgabentypen vorhanden: IPv6-Adresse kürzen,
    Adresstyp anhand des Präfixes erkennen, `/64` in Netz-/Interface-Teil
    zerlegen, Link-Local vs. ULA vs. Global Unicast begründen und einfache
    SLAAC/EUI-64-Schritte nachvollziehen.
  - Legal erworbene Original-/U-Form-Aufgabe noch nicht dagegen getestet.

### Faktencheck

1. "IPv6-Adressen sind 128 Bit lang": durch RFC 8200 und RFC 4291 gestützt.
2. "IPv6-Adressen werden in acht 16-Bit-Gruppen hexadezimal geschrieben": durch
   RFC 4291 gestützt.
3. "Kanonische Darstellung lässt führende Nullen weg, nutzt Kleinbuchstaben und
   `::` nur einmal": durch RFC 5952 gestützt.
4. "Bei gleich langen Nullfolgen wird in der kanonischen Form die linke Folge
   gekürzt; einzelne Nullgruppen werden nicht per `::` gekürzt": durch RFC 5952
   gestützt.
5. "`2001:db8::/32` ist für Dokumentation reserviert": durch RFC 3849
   gestützt; Kapitel nutzt es deshalb als Beispielbereich.
6. "`fe80::/10` ist Link-Local und nicht routbar über Router hinweg": durch RFC
   4291 gestützt.
7. "`fc00::/7` ist Unique Local Address Space": durch RFC 4193 gestützt.
8. "IPv6 kennt keinen Broadcast und nutzt Multicast": durch RFC 4291 gestützt.
9. "SLAAC bildet Adressen aus Router Advertisement und Interface-Identifier":
   durch RFC 4862 gestützt.
10. "EUI-64 ist nicht als heutige Muss-Regel zu lernen; temporäre oder opaque
    Interface-Identifier sind verbreitete Schutzmechanismen": durch RFC 8981
    und RFC 7217 gestützt.

### Didaktikcheck

- Einstieg ohne Vorwissen: verbessert. Das Kapitel startet bei IPv4-Knappheit
  und dem Denkwechsel zu mehreren IPv6-Adressen pro Interface.
- Begriffe vor Verwendung: verbessert. Grundbegriffe stehen in einem Raster;
  `IPv6`, `IPv4` und `Interface` sind Glossar-Terme.
- Beispiel mit Loesungsweg: vorhanden. Kürzung wird Schritt für Schritt gezeigt;
  SLAAC/EUI-64 wird als Rechenbeispiel erklärt.
- Fehlerfallen: verbessert. `::`, Hex-Gruppen, Link-Local, ULA, Broadcast und
  EUI-64 werden als Fallen benannt.
- Selbstcheck: vorhanden. Kurzer Selbstcheck mit Lösung und Begründung statt
  sichtbarem Klausur-/Aufgabenblock.
- Didaktisches Risiko:
  - IPv6 kann schnell in Header, Neighbor Discovery, ICMPv6 und Routing
    ausufern. Das Kapitel bleibt bewusst bei Adressierung und
    Client-Konfiguration.
  - EUI-64 ist prüfungsnah als Rechenweg, aber in der Praxis nicht die einzige
    oder beste Adressbildungsform. Deshalb wird es als klassisches Verfahren
    markiert und mit Privacy-Hinweis begrenzt.

### Umfangsentscheidung

- Pflicht:
  - 128 Bit, 8 Hex-Gruppen, Doppelpunkt-Schreibweise
  - RFC-5952-Kürzungsregeln und typische Fehler
  - Präfixnotation, besonders `/64` für normale LAN-/SLAAC-Fälle
  - `fe80::/10`, `fc00::/7`, `ff00::/8`, `::1/128`, `::/128`,
    `2001:db8::/32`
  - IPv6 vs. IPv4 grob unterscheiden: Länge, Schreibweise, Broadcast,
    Link-Local, NAT, Sicherheit
  - SLAAC und Interface-Identifier grob erklären
- Kann:
  - Modified EUI-64 als nachvollziehbares Rechenverfahren
  - temporäre und opaque Interface-Identifier als Datenschutzgrenze
  - mehrere IPv6-Adressen pro Interface als Normalfall
- Extra/Raus:
  - vollständiger IPv6-Header und Extension-Header-Tiefe
  - Neighbor Discovery im Detail
  - DHCPv6/SLAAC-Flag-Details
  - IPv6-Routing, Prefix Delegation und Providerarchitektur tief
  - IPsec als IPv6-Nebenbaustelle

### Entscheidung

- Vertrauen: `teilgeprueft`.
- Grund: zentrale Aussagen wurden gegen RFC 8200, RFC 4291, RFC 5952, RFC
  4862, RFC 8981, RFC 7217, RFC 4193 und RFC 3849 abgeglichen. Sichtbare
  Pruefungs-/Klausurlabels, konkrete Alt-Pruefungsbehauptung, Sandkorn-
  Analogie und IPsec-Seitenpfad wurden aus dem Lerntext entfernt.
  `geprueft` ist noch zu frueh, weil legaler Aufgabenabgleich unter Zeitdruck
  fehlt.
- Noetige Aenderungen:
  - Erledigt: Kapitel auf D2-D3/P2-Tiefe gekürzt und fachlich präzisiert.
  - Erledigt: Prüfungs-/Klausurblock in Mini-Selbstcheck mit Lösung
    umgewandelt.
  - Erledigt: RFC 4291, RFC 5952, RFC 4862, RFC 8981, RFC 7217, RFC 4193 und
    RFC 3849 in der Quellenbank ergänzt.
  - Erledigt: `lessonSourceIds.ipv6-grundlagen`, Slug-Tags,
    Glossar-Eintrag `ipv6` und `src/lib/audit/status.ts` nachgezogen.
  - Spaeter: legale AP1-/U-Form-Aufgabe gegen Kürzung, Präfixerkennung,
    Adresstypen und SLAAC/EUI-64 testen.
- Naechste Aktion:
  - `datenvolumen-berechnung` als naechstes Rechen-/Netzkapitel auditieren,
    wenn kein legaler Aufgabenabgleich für die teilgeprueften Netzkapitel
    vorliegt.

## Detailaudit: datenvolumen-berechnung

Datum: 19.06.2026
Bearbeiter: Codex

### Scope

- Thema: Datenmengen, Scan-/Bilddaten, Bit/Byte- und Präfixumrechnung,
  Datenrate, Übertragungsdauer, Brutto/Netto-Wirkungsgrad, Roh-Bitrate und
  komprimierte Ziel-Bitrate.
- AP1-Relevanz: P1 nach `AP1_INHALTSVERZEICHNIS_LERNFELDER_DICHTE.md`:
  LF2-Grundlagenrechnen D3 zu Datenrate und Datenvolumen, inklusive
  Scan-/Bilddaten; zusätzlich Anschluss an LF3-Netzwerkübertragung.
- Form: Kapitel. `scan-bilddaten` bleibt als mögliches kurzes Spezialkapitel
  bzw. Übungsweg vorhanden; für den AP1-Kern ist die Rechenlogik hier vollständig
  abgedeckt. `audio-kompression` bleibt nur Box-/Randthema, kein eigenes
  Kernkapitel.

### Quellen

- Offizielle Ausbildungsquelle:
  - FIAusbV, AP Teil 1: Einrichten eines IT-gestützten Arbeitsplatzes.
  - KMK-Rahmenlehrplan, besonders LF2 Arbeitsplätze ausstatten und LF3 Clients
    in Netzwerke einbinden.
  - BIBB-Umsetzungshilfe als Ordnungsmittel- und Umsetzungsbezug.
- Fachliche Primärquelle:
  - BIPM SI Prefixes: kilo, mega, giga, tera als dezimale Zehnerpotenzen.
  - NIST Binary Prefixes und IEC 80000-13: Ki/Mi/Gi/Ti als binäre 1024er-Schritte.
  - NIST IR 8354: Bit-/Byte-Kontext, digitale Daten als Bitmuster und
    8-Bit-Byte-Grundlage.
  - RFC 791, RFC 9293 und RFC 9110: IP-/TCP-/HTTP-Kontext für Header und
    Protokoll-Overhead; im Kapitel bewusst nur als Brutto/Netto-Grundidee.
  - ISO/IEC 10918-1: JPEG als Standard für kontinuierliche Standbildkompression.
  - W3C PNG Specification: PNG als verlustfreies Rasterbildformat mit Breite,
    Höhe, Bit Depth und Color Type.
  - ITU-T H.264: Videocodierungsstandard für Ziel-Bitraten statt pauschaler
    Rohdaten-Speicherung.
  - ITU-T G.1010: Multimedia-QoS-Kontext für Latenz/Jitter/Datenrate.
- Didaktischer Vergleich:
  - Interner Vergleich gegen `AP1_INHALTSVERZEICHNIS_LERNFELDER_DICHTE.md`:
    D3/P1, Rechenweg mit Datenmenge, Datenrate, Zeit, Wirkungsgrad und
    Scan-/Bilddaten.
  - Westermann/IT-Berufe und Elektronik-Kompendium nur als Vergleich für
    Aufgabenrealität und Erklärreihenfolge, nicht als harte Fachquelle.
- Prüfungs-/Aufgabentyp:
  - `_material_index/AP1_ABGLEICH.md` zeigt passende legale Abgleichpunkte zu
    Scan-/Bilddaten und Datenmengenrechnung, besonders `Prüfung_5 2` und
    `Prüfung_4 3`. Es wurden daraus keine geschützten Aufgaben in `src` kopiert.

### Faktencheck

1. "1 Byte = 8 Bit" ist durch NIST- und IEC-/NIST-Präfixquellen gestützt.
2. "KB/MB/GB/TB sind dezimale 1000er-Schritte" ist durch BIPM SI Prefixes
   gestützt.
3. "KiB/MiB/GiB/TiB sind binäre 1024er-Schritte" ist durch NIST Binary
   Prefixes und IEC 80000-13 gestützt.
4. "Datenträgerangabe in TB und Anzeige in GiB können unterschiedliche Zahlen
   für dieselbe Byte-Menge zeigen" ist durch SI-/IEC-/NIST-Präfixlogik gestützt.
5. "Scan-Speicher ergibt sich aus Breite in Inch × DPI, Höhe in Inch × DPI,
   Pixelanzahl × Farbtiefe ÷ 8" ist als Einheitenrechnung aus DPI, Bit/Pixel
   und Byte-Faktor fachlich konsistent; passende AP1-Materialien nutzen genau
   diesen Rechenweg.
6. "Datenrate, Zeit und Datenmenge müssen in gemeinsamer Einheit gerechnet
   werden" ist durch Dimensionsanalyse und Bit/Byte-Faktor gestützt.
7. "Brutto-Bandbreite ist nicht gleich Netto-Durchsatz" ist durch Header- und
   Protokollkontext aus IP/TCP/HTTP sowie WLAN-/Netzwerkpraxis gestützt; die
   genannten Spannen sind als Überschlagswerte markiert, nicht als Norm.
8. "PNG ist verlustfrei" ist durch die W3C-PNG-Spezifikation gestützt.
9. "JPEG ist verlustbehaftete Standbildkompression" ist durch ISO/IEC 10918-1
   gestützt.
10. "Bei Video ist eine Ziel-Bitrate belastbarer als ein pauschaler
    Kompressionsfaktor" ist durch Codec-/H.264-Kontext und die Abhängigkeit von
    Inhalt, Profil und Qualitätsziel begründet.

### Didaktikcheck

- Einstieg ohne Vorwissen: verbessert. Das Kapitel startet mit praktischen
  Rechnungen und grenzt Datenmenge, Datenrate, Durchsatz und Latenz früh ab.
- Begriffe vor Verwendung: verbessert. `bit`, `byte`, `bandbreite`,
  `durchsatz`, `latenz`, `ascii`, `dezimalpraefix`, `binaerpraefix`, `dpi`,
  `farbtiefe`, `kompression`, `datenrate` und `bitrate` sind als Terms gesetzt.
- Beispiel mit Lösungsweg: stark. A4-Scan, Backup-Übertragung und Video-Bitrate
  zeigen Einheiten, Zwischenschritte und Ergebnisinterpretation.
- Fehlerfallen: gut. b/B, MB/MiB, Farbtiefe in Bit, cm/Inch, DPI horizontal und
  vertikal, Brutto/Netto, Kompression als Faktor und Zwischenrundungen sind
  sichtbar.
- Selbstcheck: verbessert. Der alte Aufgabenblock wurde in einen kurzen
  Selbstcheck mit direkten Kurzlösungen umgebaut.

### Umfangsentscheidung

- Pflicht:
  - Bit/Byte, Faktor 8, SI- und Binärpräfixe anwenden
  - Scan-/Bilddaten mit cm → Inch → Pixel → Bit → Byte → Zieleinheit rechnen
  - Datenmenge, Datenrate und Zeit umstellen
  - Brutto/Netto mit vorgegebenem Wirkungsgrad berechnen
  - Roh-Bitrate und Ziel-Bitrate bei Video unterscheiden
  - typische Einheitenfallen erkennen
- Kann:
  - Dateiformate knapp einordnen: JPEG, PNG, RAW, TIFF, PDF
  - Latenz, Jitter und Durchsatz als Transfer zur Netzwerkdiagnose nennen
  - Überschlagswerte für Wirkungsgrad nur als Plausibilitätscheck verwenden
- Extra/Raus:
  - Codec-Interna, Makroblock-/Transformationsdetails, H.265/AV1-Tiefe
  - physikalische Kanalkapazität, Shannon, WLAN-Funkphysik
  - Produktvergleiche, Hersteller-Benchmarks und Dateiformat-Normtiefe
  - geschützte Originalaufgaben im Lerntext

### Entscheidung

- Vertrauen: `teilgeprueft`.
- Grund: Scope, Quellen, zentrale Fakten, Rechenwege, Glossar-Terms,
  Quellenbank, Tag-Mapping, AP1-Materialindex und sichtbarer Aufgabenmodus
  wurden geprüft bzw. nachgezogen. `geprueft` ist noch zu früh, weil der
  Aufgabenabgleich unter Zeit mit legalem Material nur als Indexabgleich, nicht
  als vollständige Simulation dokumentiert ist.
- Noetige Aenderungen:
  - Erledigt: sichtbare Prüfungs-/Aufgabenlabels und Punkteblock neutralisiert.
  - Erledigt: falsche Term-IDs `dezimalpräfix`/`binärpräfix` auf vorhandene
    Glossar-IDs korrigiert.
  - Erledigt: pauschale Codec- und Wirkungsgradbehauptungen präzisiert.
  - Erledigt: Quellenbank um JPEG, PNG, H.264 und ITU-T G.1010 erweitert.
  - Erledigt: `lessonSourceIds.datenvolumen-berechnung`, Slug-Tags und
    `src/lib/audit/status.ts` nachgezogen.
  - Später: legalen AP1-Aufgabensatz unter Zeit gegen Scan-/Datenmengen- und
    Brutto/Netto-Rechnungen testen.
- Naechste Aktion:
  - `datenrate-berechnung` als nächstes Kapitel nachziehen, weil es direkt auf
    dem hier geprüften Rechenfundament aufbaut.

## Nächster Schritt

Nächstes Queue-Kapitel: `datenrate-berechnung` als Rechen-/Netzkapitel.
Alternativ, wenn legale AP1-/U-Form-Aufgaben vorliegen: Aufgabenabgleich für
`ipv6-grundlagen`, `port-forwarding`, `firewall-dmz`, `wlan-standards`,
`homeoffice-ergonomie`/Barrierefreiheit, `osi-modell` oder `tcp-udp`
durchführen. Die Kapitel werden weiter nach Matrix abgearbeitet: P1 vor P2,
danach P3/Parken.
