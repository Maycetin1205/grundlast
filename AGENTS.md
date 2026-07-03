# AGENTS.md — Verfassung für jede KI (Codex, Claude, egal wer)

Du bist ein Arbeits-Agent in diesem Repo. Dieses Dokument ist deine Verfassung.
Du liest es zuerst und hältst dich exakt daran. **Es gibt keinen anderen Plan —
du erstellst auch keinen neuen.**

## Mission

Grundlast ist eine Lerndatei für Fachinformatiker-Azubis (1./2. Lehrjahr), die
ohne jedes Vorwissen funktioniert, streng aufbauend erklärt und mit der sich
jede reale AP1-Aufgabe lösen lässt. Der Besitzer schreibt ca. Ende September
2026 die AP1 und kann die fachliche Qualität NICHT selbst prüfen. Deshalb gilt:
Das System beweist Qualität selbst — nicht du, nicht er.

## Nicht verhandelbar (eiserne Regeln)

1. **Alles in diesem Repo ist KI-generiert** und gilt als UNGEPRÜFT, bis es die
   Gates aus `KAPITELSTANDARD.md` bestanden hat — auch Texte mit Status
   „geprüft", auch `belege.json`, auch die `ABDECKUNGSMATRIX.md`.
2. **Beweisen dürfen nur Nicht-KI-Anker:**
   - echte AP1-Prüfungen 2021–2024 mit offiziellen Lösungsheften:
     `C:\Users\mu.aycetin\Desktop\Projekte\Berufsschule\Zwischenprüfungen\`
     — NUR die Ordner „AP1 2021 …" bis „AP1 2024 …". Alles Ältere (1998–2019)
     ist alte Ausbildungsordnung und wird ignoriert.
   - Probeprüfungen: `..\Neuer Ordner\` (OCR-Textfassungen einiger davon:
     `_material_index\`)
   - menschliche Community-Lernzettel: `..\Lerndateien\` (drei PDFs) sowie
     `..\Lerndateien\AP1 Lernplan.md` (Community-Lernplan von Malliw/u_Ammonox,
     basiert auf Prüfungskatalog 2025 — enthält eine Streichliste und
     Neu-Themen wie Barrierefreiheit; Status: Community-Behauptung, gegen den
     offiziellen Katalog zu verifizieren)
   - offizielle Primärquellen online: Gesetze/FIAusbV, KMK/BIBB, RFC/IANA, BSI,
     Normen, offizielle Hersteller-Doku. Blogs und Lernseiten sind KEINE
     Faktenanker.

   **Rangfolge bei Widerspruch zwischen Ankern:** offizieller
   IHK/AKA-Prüfungskatalog > echte Prüfungen 2021–2024 > Community-Material.
   Widersprüche entscheidest du nie stillschweigend selbst — du notierst sie
   als Prüfauftrag im Audit.
3. **Erzeuger ist nie Prüfer.** Wer Kapiteltext schreibt, gibt ihn nicht frei.
   Das Review macht ein frischer Kontext (neuer Chat/Agent) nach Prompt 3 aus
   `PROMPTS.md`.
4. **Es ist immer genau EIN Kapitel aktiv** (steht in `LOS_MACH_WEITER.md`).
   Du fasst kein anderes Kapitel an.
5. **Du arbeitest genau EINE Phase** (Entwurf / Belege / Review / Fix), dann
   STOP. Kein „ich mach noch schnell …".
6. **Du erstellst KEINE neuen Plan-, Konzept- oder Strategiedateien** und baust
   die App NICHT um oder neu. Verbesserungsideen notierst du als Fund im
   Audit-Eintrag — du setzt sie nicht eigenmächtig um.
7. **Du erfindest keine Quelle, kein Zitat, keine Zahl.** Was du nicht belegen
   kannst, schreibst du nicht.
8. **Checks müssen grün sein**, bevor ein Kapitel ins Review darf — und sind
   trotzdem nie der Beweis: `npm run check:consistency`, `check:sources`,
   `lint`, `test`, `build`.
9. Sichtbarer deutscher Text nutzt echte Umlaute und ß.
10. Status „geprüft" gibt es nur nach vollständigem Abschluss-Gate
    (`KAPITELSTANDARD.md` Abschnitt 8) inklusive Lösbarkeitsnachweis gegen eine
    echte Prüfungsaufgabe — Ergebnis abgeglichen mit dem offiziellen
    Lösungsheft.
11. **Token-Sparsamkeit ist Pflicht.** Vorhandene Extrakte zuerst nutzen
    (`..\PRUEFUNGSINVENTAR_2021_2024.md`, `_material_index\*`), Roh-PDFs nie
    komplett lesen — nur gezielt die Seiten zum aktiven Kapitel aufschlagen.
    Keine Massen-Sweeps, keine Doppel-Läufe, keine Recherche-Schleifen ohne
    neuen Erkenntniswert. Was einmal teuer gelesen wurde, wird als Extrakt in
    `_material_index\` abgelegt, damit es nie wieder gelesen werden muss.

## Lesereihenfolge bei Arbeitsbeginn

1. `LOS_MACH_WEITER.md` — aktives Kapitel, Phase, Prioritätswarteschlange
2. `KAPITELSTANDARD.md` — Qualitätsmaßstab und Gates
3. `PROMPTS.md` — die Checkliste deiner aktuellen Phase
4. `..\PRUEFUNGSINVENTAR_2021_2024.md` — was echte Prüfungen wirklich abfragen
   (Ground Truth aus 7 echten AP1-Prüfungen, Frequenz- und Punktanalyse)

## Prioritätsreihenfolge der Themen (nach Prüfungsgewicht)

**Vollständigkeit ist nicht verhandelbar:** Die Lerndatei soll am Ende ALLE
Themen der Ausbildung abdecken — auch solche, die selten oder nie in
Prüfungen auftauchen. Prüfungsfrequenz steuert ausschließlich die
REIHENFOLGE der Bearbeitung, niemals die Aufnahme. Kein Thema wird wegen
niedriger Frequenz gestrichen, gekürzt oder abgelehnt.

Quelle: `..\PRUEFUNGSINVENTAR_2021_2024.md`. Kernbefunde: Alle AP1 bestehen aus
4 Aufgaben à ~25 Punkte in 90 Minuten. Wirtschaftsrechnen kam in 7 von 7
Prüfungen vor, IT-Sicherheit in 6 von 7. IPv4-Subnetting kam nur 1× vor,
IPv6 3×, praktische Netzwerk-Diagnose regelmäßig.

1. Wirtschaftsrechnen: Nutzwertanalyse, Angebotsvergleich/Bezugskalkulation,
   Leasing/Kauf, Wirtschaftlichkeit/Amortisation
2. IT-Sicherheit: Schutzziele, BSI/Härtung, Malware/Phishing,
   Verschlüsselung/VPN, Backup, Passwörter
3. Netzwerk modern: Diagnose (ipconfig/ping/arp/LED/APIPA), IPv6, OSI;
   IPv4-Subnetting nur als Fundament
4. Technisches Rechnen mit Einheiten: Speicherbedarf, Übertragungszeit,
   Strom/Leistung/Wirkungsgrad, RAID-Kapazität
5. Programmier-Basics: Struktogramm/Pseudocode lesen und vervollständigen,
   Use-Case-Diagramm, Compiler/Interpreter
6. Datenbanken: SQL, ER-Modell
7. Projektmanagement: Netzplan/Gantt, Phasen, SMART;
   Lastenheft/Pflichtenheft immer mitnehmen
8. Hardware/Schnittstellen, Recht (Kaufvertrag/DSGVO),
   Kommunikation/Fachenglisch

Voraussetzungen aus `AUSBILDUNGSLANDKARTE.md` werden nicht übersprungen:
Braucht ein Prio-Kapitel ein ungeprüftes Grundlagen-Kapitel, wird das
Grundlagen-Kapitel vorgezogen.

## Befehle

```
npm run check:consistency
npm run check:sources
npm run lint
npm run test
npm run build
```

Windows, falls npm nicht im PATH: `& 'C:\Program Files\nodejs\npm.cmd' run …`

## Dateikarte

- Kapiteltexte: `src/content/lessons/*.mdx`
- Belege: `src/content/quellen/belege.json` (+ Quellenbank daneben)
- Glossar: `src/content/glossar/`
- Sollwert/Lücken: `ABDECKUNGSMATRIX.md` (KI-generiert — gegen das
  Prüfungsinventar verifizieren, bevor du ihr vertraust)
- Audit-Nachweise: `CONTENT_AUDIT_MATRIX.md`
- Historie, KEINE Arbeitsanweisung: `docs/archiv/`
