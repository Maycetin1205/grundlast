# PLAN: Rechenweg-Komponenten komplett entfernen

> **Handoff-Dokument für die nächste Bearbeitung (z. B. codex).**
> Erstellt am 2026-06-19. Inventar unten ist **am Code verifiziert** (nicht aus Doku abgeschrieben).
> Diese Datei ist ein Plan, kein Code. Sie folgt dem Hausgesetz: *„Docs sind KI-generiert, Code ist Wahrheit"* — **vor dem Handeln alle Zahlen/Listen erneut gegen den Code prüfen** (Greps stehen dabei).

---

## 1. Ziel

Die drei „Rechenweg"-Komponenten sind zerstückelt (zwei konkurrierende APIs für dieselbe Sache) und wurden als unbrauchbar bewertet. Sie werden **vollständig entfernt**.

- **Kein Inhaltsverlust.** Jede Formel und jede Erklärung wandert 1:1 in normales MDX (Listen / Fettungen / Code-Blöcke).
- Ein **besserer** Ersatz wird *später separat* entworfen (→ Abschnitt 6, **nicht** Teil dieses Auftrags). Nichts Neues erfinden.

Ergebnis nach diesem Plan: 0 Vorkommen von `<Rechenweg`, `<StepByStep`, `<Schritt`, `<Ergebnis` im Projekt, 3 gelöschte Komponentendateien, Build grün, Wächter grün.

---

## 2. Leitplanken (verbindlich)

1. **Nichts fabrizieren, erst verifizieren.** Inhalt wird *verschoben*, nicht zusammengefasst, gekürzt oder neu geschrieben. Jede `formula` und `explanation` muss im Ergebnis wortgleich auffindbar sein.
2. **Code ist Wahrheit.** Die Datei-/Zahlangaben unten am Code gegenprüfen, bevor editiert wird. Wenn Abweichung → Code gilt, diese Doku ist veraltet.
3. **Gate-getrieben.** Nach jedem größeren Schritt: `npx tsc -b`, `py scripts/check_consistency.py`, Build. Erst grün, dann weiter.
4. **Inkrementell.** Pro MDX-Datei committen/prüfen, nicht 40 Dateien in einem Rutsch ohne Zwischen-Check.

---

## 3. Ist-Zustand (code-verifiziert 2026-06-19)

### Zwei APIs für dasselbe

| API | Tag-Form | Komponentendatei(en) | Dateien |
|---|---|---|---|
| **Props-API** | `<Rechenweg title="…" steps={[{title,formula,explanation}]} />` | `src/components/mdx/Rechenweg.tsx` | **12** (Liste §7) |
| **Children-API** | `<StepByStep titel="…"><Schritt nr={1} titel="…">…</Schritt><Ergebnis>…</Ergebnis></StepByStep>` | `src/components/content/StepByStep.tsx` (exportiert `StepByStep` **und** `Ergebnis`), `src/components/content/Schritt.tsx` | **restliche** (40 gesamt − 12; §7) |

Re-Verify-Greps:
```
# alle betroffenen Dateien (40):
rg -l "<(Rechenweg|StepByStep|Schritt|Ergebnis)\b" src/content/lessons
# nur Props-API (12):
rg -l "<Rechenweg\b" src/content/lessons
```
Hinweis: Eine Datei *könnte* beide APIs nutzen → in jeder Datei **alle vier** Tag-Arten entfernen, egal welche API.

### Registrierung (zentral)
`src/components/mdx/MDXProvider.tsx`:
- Imports: Zeile 2 (`Rechenweg`), 15 (`StepByStep, { Ergebnis }`), 16 (`Schritt`)
- Registry-Objekt `components`: Einträge `Rechenweg` (~Z.51), `StepByStep` (~Z.63), `Schritt` (~Z.64), `Ergebnis` (~Z.65)

### Importeure (vollständig)
Nur `MDXProvider.tsx` importiert die drei Komponenten; `StepByStep.tsx` importiert intern `Schritt`. **Keine** Route, kein anderes Modul. → Nach dem Provider-Edit ist Löschen sicher.
```
rg "from\s+['\"].*(Rechenweg|StepByStep|Schritt)['\"]" src
```

### Wächter
`scripts/check_consistency.py` hat **keine** Kopplung an diese Komponenten (die Treffer „Ergebnis:" sind nur Ausgabetext). Entfernen verändert keine Slugs → Wächter bleibt grün.

---

## 4. Transformations-Vorlagen

### 4a. Props-API `<Rechenweg>` → plain MDX

**Vorher** (echtes Beispiel, `afa-abschreibung.mdx`):
```mdx
<Rechenweg
  title="Beispiel 1: 5 Server, 4 Jahre Nutzungsdauer"
  steps={[
    {
      title: "Schritt 1: Gesamte Anschaffungskosten",
      formula: "Anschaffungskosten = 5 × 4.000 € = 20.000 €",
      explanation: "ERST alle Geräte addieren! …"
    }
  ]}
/>
```

**Nachher** (Schema): `title` → fette Zwischenüberschrift; jeder Step → nummerierter Eintrag mit fettem `step.title`, der `step.formula` in einem Code-Block (erhält Monospace + die `\n`-Zeilenumbrüche!), darunter die `explanation` als Fließtext.

````mdx
**Beispiel 1: 5 Server, 4 Jahre Nutzungsdauer**

**1. Gesamte Anschaffungskosten**

```
Anschaffungskosten = 5 × 4.000 € = 20.000 €
```

ERST alle Geräte addieren! …
````

Regeln:
- `\n` innerhalb einer `formula` = echte Zeilenumbrüche im Code-Block beibehalten.
- Sonderzeichen (`×`, `÷`, `€`, `≈`, `η`, `²`) **unverändert** übernehmen.
- Reihenfolge der Steps strikt beibehalten.

### 4b. Children-API `<StepByStep>` → plain MDX

**Vorher** (Schema):
```mdx
<StepByStep titel="Datenrate berechnen">
  <Schritt nr={1} titel="Gegebene Größen">
    Hier steht schon fertiges MDX (Text, Listen, `code`, <Term/> …).
  </Schritt>
  <Ergebnis>
    Die Datenrate beträgt **…**.
  </Ergebnis>
</StepByStep>
```

**Nachher** — Hülle entfernen, Kinder sind bereits gültiges MDX:
```mdx
**Rechenweg: Datenrate berechnen**

**Schritt 1 — Gegebene Größen**

Hier steht schon fertiges MDX (Text, Listen, `code`, <Term/> …).

**Ergebnis**

Die Datenrate beträgt **…**.
```

Regeln:
- `<StepByStep titel="X">` → `**Rechenweg: X**`
- jedes `<Schritt nr={N} titel="Y">` → `**Schritt N — Y**`, Kinder unverändert darunter
- `<Ergebnis>` (optionales `titel`) → `**Ergebnis**` (bzw. der `titel`), Kinder darunter
- Kein Inhalt der Kinder anfassen — nur die vier Tags entfernen/ersetzen.

> Hinweis Ersatz später: Diese plain-MDX-Form ist Zwischenstand. Sie ist absichtlich schlicht, kein Redesign.

---

## 5. Arbeitsschritte (Reihenfolge)

0. **Re-Verify** Inventar mit den Greps aus §3. Bei Abweichung Listen anpassen.
1. **Props-API migrieren** — die 12 Dateien (§7), Vorlage §4a. Nach je ~3 Dateien: `npx tsc -b` (MDX wird beim Build geprüft).
2. **Children-API migrieren** — restliche Dateien (§7), Vorlage §4b.
3. **Provider entkoppeln** — in `MDXProvider.tsx` die 3 Imports (Z.2/15/16) und die 4 Registry-Einträge (`Rechenweg`, `StepByStep`, `Schritt`, `Ergebnis`) entfernen.
4. **Komponenten löschen**:
   - `src/components/mdx/Rechenweg.tsx`
   - `src/components/content/StepByStep.tsx`
   - `src/components/content/Schritt.tsx`
5. **Gates** (alle müssen grün sein):
   ```
   rg -c "<(Rechenweg|StepByStep|Schritt|Ergebnis)\b" src/content/lessons   # erwartet: 0 Treffer
   npx tsc -b                                                                # EXIT 0
   py scripts/check_consistency.py                                           # "konsistent"
   npm run build                                                             # baut durch
   ```

---

## 6. Bekannte Umlaut-Artefakte (separater, klar abgegrenzter Cleanup — optional)

Ein früherer Umlaut-Reparaturlauf hat ein paar **eindeutig kaputte** Wörter hinterlassen (keine gültigen deutschen Wörter, daher sicher ersetzbar). **Nicht** der allgemeine ä/ö/ü-Sumpf — nur diese deterministischen Fälle:

| falsch | richtig | Stand |
|---|---|---|
| `zürst` | `zuerst` | **65× in 34 Dateien** (`rg -c "zürst" src/content/lessons`) |
| `Nacherfuellung` | `Nacherfüllung` | Rest aus `-üll-`-Schutzregel |
| `ausfuellen` | `ausfüllen` | dito |

Wenn codex die MDX-Dateien ohnehin anfasst: diese Wörter im selben Zug korrigieren. **Sonst keinen** weiteren Umlaut-Pass starten (ausdrückliche Nutzer-Vorgabe: „lasse einfach"). Korrekten Text **nicht** anrühren.

---

## 7. Datei-Listen (code-verifiziert)

**Props-API `<Rechenweg>` — 12 Dateien** (`src/content/lessons/`):
```
afa-abschreibung.mdx        handelskalkulation.mdx   raid-systeme.mdx
backup-strategien.mdx       normalisierung.mdx       scan-bilddaten.mdx
break-even.mdx              nutzwertanalyse.mdx      usv-systeme.mdx
energiekosten.mdx          gewinnermittlung.mdx     variable-fixe-kosten.mdx
```

**Alle betroffenen — 40 Dateien** (`src/content/lessons/`):
```
afa-abschreibung            gewaehrleistung                 port-forwarding
angebotsvergleich           gewinnermittlung                prefixe
backup-strategien           handelskalkulation              pseudocode-einstieg
bedarfsanalyse-feedback     hardware-schnittstellen         raid-systeme
bit-byte                    homeoffice-ergonomie            rechnung-zahlungsziel-aufbewahrungsfristen
break-even                  kauf-leasing-miete              scan-bilddaten
datenrate-berechnung        kaufmaennische-rechenaufgaben   schutzziele
datenvolumen-berechnung     linux-chmod                     scrum
eigenfremdfinanzierung      make-or-buy                     tcp-udp
energiekosten               netzwerkkonfiguration           usv-systeme
firewall-dmz                normalisierung                  variable-fixe-kosten
                            nutzwertanalyse                 verschluesselung-hash-vpn
                            organisationsformen-leitbild-nachhaltigkeit-esg   von-neumann
                            pki-zertifikate                 vorgehensmodelle
                                                            zahlensysteme
```
Children-API-Dateien = diese 40 minus die 12 Props-Dateien (falls eine Datei beide nutzt: beide Formen entfernen).

---

## 8. Phase 2 — der „bessere" Ersatz (NICHT jetzt)

Bewusst offen gelassen, separat zu entwerfen. Leitfragen für später:
- Eine einzige Komponente, eine API (kein Props-vs-Children-Split).
- Braucht es überhaupt interaktive Akkordeon-/Stepper-Mechanik, oder reicht sauberes statisches Layout?
- Muss vom Konsistenz-Wächter erfassbar sein.

Bis dahin bleibt der Inhalt als plain MDX (Abschnitt 4) — funktioniert, nichts kaputt, nichts verloren.
