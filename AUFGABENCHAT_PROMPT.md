# Aufgabenchat: Kapitel auf Ready heben

Dieser Prompt wird in einen neuen Chat kopiert, der genau **ein** Kapitel
auf den Ready-Standard hebt. Vorher `{{LESSON_SLUG}}` und `{{LERNFELD}}`
durch die konkreten Werte ersetzen.

---

## Prompt-Body (alles ab hier kopieren)

Du arbeitest am Repo `grundlast`, Branch `stufe-1-mechanik`.

**Auftrag:** Hebe das Kapitel `{{LESSON_SLUG}}` (Lernfeld `{{LERNFELD}}`)
auf `status: "ready"`.

**Verbindliche Regeln**

1. Halte dich strikt an `CONTENT_GUIDELINES.md` im Repo-Root. Der dort
   beschriebene 4-Schritt-Workflow (Recherche → Skizze → Schreiben →
   Selbsttest) ist Pflicht, nicht Vorschlag.
2. **Beende jeden Schritt komplett, bevor du zum naechsten uebergehst.**
   Kein Vorgriff, kein parallel anfangen.
3. Nach Schritt 2 (Skizze) **stoppen** und auf explizite Bestaetigung
   warten, bevor geschrieben wird. Sonst riskierst du Re-Arbeit.
4. Web-Suche ist Pflicht. Mindestens 3 unabhaengige Quellen, davon
   mindestens 1 primaer (Norm, Spec, RFC, Gesetz, IHK-Ordnung,
   Herstellerdoku).
5. `npm run check` muss am Ende exit 0 zeigen **und** keine neue Warnung
   fuer `{{LESSON_SLUG}}` produzieren. Vorher/nachher-Vergleich der
   Warnungs-Anzahl ist Pflicht.
6. Tonfall: respektvoll, nicht herablassend. Lerner ohne Vorwissen muss
   verstehen, Praezision wird nie aufgegeben. Siehe CONTENT_GUIDELINES.

**Schritt 1 — Recherche**

- Lies `src/content/lessons/{{LESSON_SLUG}}.mdx`.
- Lies den TOC-Eintrag in `src/lib/toc/data/{{LERNFELD}}.ts`.
- Pruefe, welche Quellen schon in `src/content/quellen/sourceBank.ts`
  passen koennten (Tag-Match).
- Web-Suche: mindestens 3 Quellen, davon 1 primaer. Fakten + URLs notieren.
- Berichte die Recherche-Notiz an den User.

**Schritt 2 — Skizze**

- Lernziel: was kann der Leser nach dem Kapitel?
- Stolpersteine: was wird typisch falsch verstanden? (Spaeter `## Typische
  Fehler`.)
- 2-3 konkrete Beispiele, mindestens eines anfasslich.
- Aha-Moment: welche Stelle "klick"-macht.
- Was die aktuelle MDX bereits gut hat (nicht ueberschreiben).
- Was fuer Ready fehlt: Validator-Pflichten und inhaltliche Luecken.
- **Stoppen. Auf User-OK warten.**

**Schritt 3 — Schreiben (nach User-OK)**

- MDX ueberarbeiten und ergaenzen. Gutes bestehendes behalten.
- `<Term id="...">`-Links zu allen verlinkbaren Glossarbegriffen (jeweils
  beim ersten Vorkommen im Kapitel).
- Validator-Pflichtbloecke sicherstellen:
  - `## Typische Fehler` (oder `## Fehler`)
  - `## Was du danach kannst`
  - `<Analogie>...</Analogie>` (oder `## Analogie`)
  - `<StepByStep>` mit `<Schritt>`-Kindern (oder Text "Schritt fuer Schritt")
  - `<Quellen quellen={[...]} />` am Ende, mit den Recherche-Quellen
- `src/content/quellen/sourceBank.ts`: neue Quellen-Eintraege ergaenzen,
  falls noetig.
- `src/content/quellen/tagMappings.ts`: `{{LESSON_SLUG}}`-Tags spezifischer
  machen, damit der Lookup im Quellen-Tab die neuen Eintraege findet.
- Sprache: kurze Saetze, aktive Verben, eine Idee pro Absatz.
- Keine Fuellsaetze, keine Marketing-Sprache.

**Schritt 4 — Selbsttest**

- Numerische Stichprobe: jede Zahl, jede Formel selbst nachgerechnet.
- Persona-Test im Kopf:
  - *Anna*, 17, kein Vorwissen
  - *Ben*, 19, 2. Lehrjahr, unsicher
  - *Carl*, IT-Hobby, Mittelstufe
- `npm run check` mit Status noch `draft` — exit 0, Warnungen merken.
- Status auf `ready` setzen in `src/lib/toc/data/{{LERNFELD}}.ts`.
- `npm run check` erneut: exit 0, **keine eigene Warnung** fuer
  `{{LESSON_SLUG}}`.
- Falls neue Warnungen auftauchen (z.B. fehlende Analogie- oder
  Quellen-Komponente): nachbessern und erneut pruefen. Schritt ist erst
  fertig wenn die Warnungs-Zahl identisch oder kleiner ist als vorher.

**Schritt 5 — Commit**

Stil: `content({{LESSON_SLUG}}): heben auf ready`

Body enthaelt:
- inhaltliche Aenderungen (was wurde neu, was geschaerft)
- Quellen-Infrastruktur (sourceBank/tagMappings-Aenderungen)
- Validator-Ergebnis (vorher/nachher Warnungs-Zahl)
- Recherche-Basis (Quellen mit Hinweis welche primaer sind)
- numerische Stichprobe

Co-Authored-By-Trailer wie in vorigen Commits.

**Was nicht passiert**

- Keine Code-Refactorings nebenbei.
- Keine Architektur-Aenderungen.
- Keine neuen Features (keine Tools, keine Pruefungs- oder Uebungs-Module —
  Plan-Stufe 0.5+ und ausserhalb des aktuellen Horizonts; siehe
  `MASTER_ROADMAP.md`).
- Keine Aenderungen am MASTER_ROADMAP, ausser dort steht etwas das durch
  diesen Schritt hinfaellig wird.

---

## Beispiel-Eingabe

Fuer das naechste Kapitel laut Plan:

```
{{LESSON_SLUG}} = prefixe
{{LERNFELD}}    = grundlagen
```
