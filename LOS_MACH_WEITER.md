# Mach weiter

Diese Datei ist der einzige operative Einstieg für die Kapitelarbeit.
Verfassung und Regeln für jede KI: `AGENTS.md`. Qualitätsmaßstab:
`KAPITELSTANDARD.md`.

## Aktueller Arbeitsstand

| Feld | Wert |
|---|---|
| Aktuelles Kapitel | `nutzwertanalyse` |
| Kapiteldatei | `src/content/lessons/nutzwertanalyse.mdx` |
| Status | `nutzwertanalyse` am 03.07.2026 im Entwurf/Einordnung-Pass bearbeitet; Quellen-/Vergleichsmatrix und Abschnitts-Audit in `CONTENT_AUDIT_MATRIX.md` dokumentiert |
| Phase | Belege |
| Einordnung | Nutzwertanalyse kam in 2 von 7 echten AP1-Prüfungen (2021–2024) vor und hatte dort 16–22 Punkte; hoher kaufmännischer Prioritätsblock. |
| Nächstes Kapitel | `angebotsvergleich` (Prioritätswarteschlange Platz 2) |

## Prioritätswarteschlange (ersetzt die alte Lückenlisten-Reihenfolge)

Begründung: `..\PRUEFUNGSINVENTAR_2021_2024.md` — Frequenz × Punktgewicht aus
7 echten AP1-Prüfungen 2021–2024. **Die Warteschlange regelt nur die
Reihenfolge, nie den Umfang: Am Ende werden ALLE Themen bearbeitet, auch die
mit niedriger Prüfungsfrequenz.** Voraussetzungs-Kapitel werden bei Bedarf
vorgezogen (`AUSBILDUNGSLANDKARTE.md`), sonst gilt diese Reihenfolge:

1. [x] `nutzwertanalyse` – Entwurf/Einordnung abgeschlossen; nächste Phase: Belege
2. `angebotsvergleich` (10–13 P., Bezugskalkulation)
3. `kauf-leasing-miete` (10–12 P.)
4. `kaufmaennische-rechenaufgaben` (Amortisation, Stundensatz, MwSt, Tilgungsplan)
5. `handelskalkulation`
6. `break-even`
7. `schutzziele`
8. `malware-grundlagen` (dabei prüfen: Phishing ausreichend abgedeckt?)
9. `verschluesselung-hash-vpn`
10. `backup-strategien`
11. `passwoerter-hashing`
12. `endpoint-security` (Härtung, BSI-Grundschutz-Bezug)
13. Netzwerk-Diagnose-Cluster: `netzwerkkonfiguration` (APIPA, ipconfig, ping,
    arp — Diagnose-Anteil prüfen und ggf. als fehlt-Zeile ergänzen),
    `ipv6-grundlagen`, `osi-modell`
14. Rechnen-Cluster: `datenvolumen-berechnung`, `datenrate-berechnung`,
    `energiekosten`, `raid-systeme`
15. `pseudocode-einstieg`, `use-case-diagramm`, `sql-grundlagen`, `er-grundlagen`
16. `netzplan`, `gantt-diagramm`, `lastenheft-pflichtenheft`

Danach: Rest nach `ABDECKUNGSMATRIX.md`-Lückenliste.

## Offene Sonderaufträge (je ein eigener Arbeitsabschnitt, frischer Kontext)

1. Matrix-Verifikation — TEILERLEDIGT 02.07.2026, Rest läuft pro Kapitel:
   Lücken aus Prüfungsinventar + Lernzettel-Kurzform + Community-Lernplan sind
   als Nachtrag in `ABDECKUNGSMATRIX.md` eingetragen. Die zwei großen
   Lernzettel-PDFs (56/97 Seiten) werden NICHT mehr vorab komplett gelesen
   (Token-Entscheidung des Besitzers): Jeder Kapitel-Chat liest im
   Recherche-Gate gezielt NUR die Seiten zu seinem Thema und ergänzt dabei
   gefundene neue Aufgabentypen als `fehlt`-Zeile (steht so bereits in
   `KAPITELSTANDARD.md` Abschnitt 1).

2. Katalog-2025-Verifikation: Der Community-Lernplan
   (`..\Lerndateien\AP1 Lernplan.md`) behauptet Änderungen im
   IHK/AKA-Prüfungskatalog 2025: gestrichen u. a. RAID-Konfiguration, SAN,
   komplexes SQL (JOINs), Struktogramme (ersetzt durch UML-Aktivitätsdiagramme),
   OOP-Vererbung, ISO 2700x (ersetzt durch BSI-Grundschutz); NEU u. a.
   Barrierefreiheit, englische Texte, KI. Die Prüfung des Besitzers ist
   Herbst 2026 — es gilt der aktuelle Katalog, nicht der Stand 2021–2024.
   Auftrag: offiziellen AKA/IHK-Prüfungskatalog beschaffen, Behauptungen
   verifizieren, dann Prioritätswarteschlange und `ABDECKUNGSMATRIX.md`
   anpassen (insbesondere: Barrierefreiheit als Kapitel? `uml-aktivitaet`
   hochstufen? Schreibtischtest/Trace-Table als Aufgabentyp?).

## Für jeden neuen Arbeitsabschnitt

1. `AGENTS.md` lesen (Verfassung), dann diese Datei, dann `git status --short`.
2. `KAPITELSTANDARD.md` und den Eintrag in `CONTENT_AUDIT_MATRIX.md` für das
   aktuelle Kapitel lesen.
3. Den passenden Prompt aus `PROMPTS.md` für die aktuelle Phase verwenden
   (Entwurf → Belege → unabhängiges Review → Fix).
4. Nur das aktuelle Kapitel und seine direkten Abhängigkeiten bearbeiten.
5. `geprüft` erst nach unabhängigem Prüfer-Pass (Erzeuger ≠ Prüfer) und
   dokumentiertem Lösbarkeitsnachweis gegen eine echte Prüfungsaufgabe mit
   offiziellem Lösungsheft (siehe `KAPITELSTANDARD.md`).
6. Erst nach dem vollständigen Abschluss den Arbeitsstand oben aktualisieren
   und das nächste Kapitel aus der Prioritätswarteschlange nehmen.

Historische Dateien in `docs/archiv/` sind keine Arbeitsanweisung.
