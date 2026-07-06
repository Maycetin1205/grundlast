# Universal-Prompt

Kopiere alles unter "Prompt-Body" in jeden neuen Aufgabenchat ganz oben.
Trage am Ende deine konkrete Aufgabe ein. **Eine Aufgabe pro Chat.**

---

## Prompt-Body (ab hier kopieren)

Du arbeitest am Repo `grundlast` (Branch `stufe-1-mechanik`). Das ist eine
Selbstlern-App fuer IT-Azubis und Klausurlerner (Fachinformatiker 1./2.
Lehrjahr, Berufsschueler). React 19 + Vite + MDX, Single-File-Build via
HashRouter. AP1 ist **ein** Anwendungsfall, nicht der Anker.

### Pflicht-Lektuere vor dem Anfangen

Lies in dieser Reihenfolge:

0. `HANDOFF.md` — offene Architektur-Auftraege mit Prioritaet. Solange dort
   Auftraege auf "offen" stehen, gehen sie vor neuen Inhalts-Aufgaben.
1. `MASTER_ROADMAP.md` — Plan, Versionsstufen, aktueller Stand,
   "Naechster konkreter Schritt".
2. `CONTENT_GUIDELINES.md` — wenn die Aufgabe Inhalt betrifft.
3. `AUFGABENCHAT_PROMPT.md` — wenn die Aufgabe "Kapitel auf Ready heben"
   ist. Dann exakt nach diesem Detail-Playbook arbeiten.
4. Die konkreten Dateien, die deine Aufgabe beruehrt.

### Session-Regeln

1. **Eine Aufgabe pro Chat.** Nichts nebenbei. Kein Refactor-Drive-By,
   keine "ich raeum auch grad das hier auf"-Ergaenzungen. Wenn dir
   waehrenddessen Lucken auffallen: notieren, nicht aufmachen.
2. **Ein Schritt komplett fertig (inkl. Commit) bevor der naechste
   anfaengt.** Keine parallel offenen Baustellen. Nutze TodoWrite wenn
   die Aufgabe mehr als 2 Schritte hat.
3. **Vor risikoreichen Operationen stoppen und fragen.** Risikoreich =
   destruktiv (loeschen, force-push, reset --hard), oeffentlich (push,
   PR), oder mehrdeutig (mehrere sinnvolle Wege denkbar).
4. **Vor Aktionen, die schreiben oder aendern, kurz ansagen was passiert.**
   Eine Zeile reicht. Schweigen + Schreiben verwirrt.
5. **Trivial-Fragen vermeiden.** Wenn die Antwort im Repo steht: lesen
   statt fragen. Wenn es eine Geschmacksfrage ist: einen Vorschlag machen
   und kurz begruenden, statt offen zu fragen.

### Erfolgs-Test (Pflicht fuer jede Aufgabe)

`npm run check` muss am Ende **exit 0** zeigen UND **keine neuen
Warnungen** produzieren. Vorher/nachher-Vergleich der Warnungs-Zahl ist
Pflicht und gehoert in die Commit-Message. Bei Inhaltsarbeit: keine neue
Warnung fuer das betroffene Kapitel.

### Architektur-Disziplin (falls Code geaendert wird)

- Import-Richtung: `routes/` -> `components/` -> `lib/` -> `content/`.
  Nur in dieser Richtung, niemals rueckwaerts.
- Modul = Ordner = `index.ts`-Public-API. Keine Tief-Importe in
  Implementierungsdateien.
- Daten in `content/`, Logik in `lib/`. Nicht mischen.
- Keine sibling-Kreuzimporte in `lib/` (z.B. `lib/glossar` darf nicht aus
  `lib/quellen` importieren).
- `madge --circular --extensions ts,tsx src` muss clean bleiben.

### Commit-Stil

- Conventional Commits: `type(scope): kurze description`
- Types: `feat`, `fix`, `refactor`, `chore`, `docs`, `content`
- Scope: Modul oder Lesson-Slug (z.B. `glossar`, `quellen`, `sidebar`,
  `bit-byte`)
- Body: warum + was, ggf. Validator-Vorher/Nachher
- Trailer: `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`

### Was nicht passiert

- Keine neuen Uebungs- oder Pruefungs-Module (Plan-Stufe 0.5+, ausserhalb
  Horizont). Tools.tsx und Exams.tsx nicht erweitern, hoechstens ehrlich
  markieren.
- Keine AP1-Dominanz (AP1 ist Filter, nicht Headliner).
- Keine MASTER_ROADMAP-Edits, ausser explizit verlangt oder durch die
  Aufgabe hinfaellig.
- Keine Backwards-Compat-Hacks fuer entfernten Code.
- Keine Refactorings nebenbei. Refactor ist eine eigene Aufgabe in einem
  eigenen Chat.

### Wenn du nicht weiterkommst

Kurz beschreiben woran es hakt, was du bisher versucht hast, und was du
als naechstes vorhast. Dann auf Antwort warten — nicht im Kreis weiter
probieren.

---

## Aufgabe

(Vom Benutzer in der naechsten Nachricht oder unten ergaenzt. Lies die
Aufgabe vollstaendig, frage **eine** Klaerung wenn etwas wirklich offen
ist, sonst beginne mit Pflicht-Lektuere und dann Schritt 1.)
