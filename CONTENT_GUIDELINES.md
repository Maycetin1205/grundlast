# Content-Guidelines

Stand: 15.05.2026

Für jedes Lern-Kapitel in Grundlast (MDX in `src/content/lessons/`) und für
jeden Chat oder Subagent, der ein Kapitel schreibt oder ueberarbeitet, gelten
diese Regeln. Sie ergaenzen `MASTER_ROADMAP.md` und sind verbindlich, bevor
ein Kapitel von `draft` auf `ready` gehoben wird.

## Zielgruppe

- Auszubildende Fachinformatiker im 1. und 2. Lehrjahr
- Berufsschueler, die ein klares Nachschlagewerk brauchen
- Lernende vor Klausuren oder Pruefungen (AP1 ist *einer* von vielen Anlaessen, nicht der Anker)
- Ausbilder, die Inhalte strukturiert wiederfinden wollen

Der Texthorizont liegt bei Lernenden **ohne Vorwissen**. Praezision verlieren
wir trotzdem nicht. Wir erklaeren auch das, was Fortgeschrittene "eh schon
wissen".

## Anspruch

Zwei Saeulen, beide nicht verhandelbar:

1. **Inhaltliche Korrektheit** — keine vereinfachte Halbwahrheit, kein nachgeplappertes Blog-Wissen.
2. **Didaktische Mastery** — Komplexes wird einfach erklaert, nicht weggelassen. Feynman-Regel: wer es nicht einem 14-Jaehrigen ohne IT-Vorwissen in 5 Minuten klarmachen kann, hat es selbst noch nicht verstanden.

## Pflicht-Workflow pro Kapitel

Vier Schritte. Jeder muss durchlaufen werden, in dieser Reihenfolge. Kein
Schritt darf uebersprungen werden, auch wenn das Thema "eh klar" wirkt.

### 1. Recherche

- **Mindestens 3 unabhaengige Quellen lesen**, davon mindestens 1 Primaerquelle:
  - Primaerquelle: FIAusbV, BSI, RFC, IEEE/ISO-Norm, KMK-Lehrplan, offizielle Herstellerdoku, Gesetzestext, IHK-Pruefungsordnung
  - Sekundaerquelle: gute Erklaerseite, Schulbuch-Web, Hochschulskript
  - Quer-Validierung: zweite Quelle fuer denselben Sachverhalt
- **Web-Suche ist Pflicht**, auch bei vertrauten Themen. SEO-Spam erkennen
  (weiche Formulierungen, fehlende Quellen, veraltete Daten) und eine andere
  Suchanfrage probieren. Die *beste* Erklaerung liegt oft nicht auf Treffer 1.
- Fakten + URLs in einer Notiz festhalten. Sie ist Grundlage fuer den
  Quellen-Eintrag in `src/content/quellen/sourceBank.ts`.

### 2. Skizze

Bevor die erste MDX-Zeile geschrieben wird, klaere:

- **Lernziel**: Was kann der Leser *nach* dem Kapitel, was er vorher nicht konnte?
- **Stolpersteine**: Welche Missverstaendnisse passieren typisch? Diese landen spaeter im Block `## Typische Fehler`.
- **2-3 konkrete Beispiele**: Mindestens eines anfasslich (Lichtschalter, Hausnummer, Buchseite) — nicht nur Code oder Diagramme.
- **Aha-Moment**: Welche Stelle des Kapitels verbindet Abstraktes mit Konkretem so, dass es "klick" macht?

### 3. Schreiben

MDX-Skelett gegen Validator-Pflichten:

- Einleitung: Was ist das? Warum brauche ich es?
- Schritt-fuer-Schritt-Erklaerung
- Beispiele, mindestens eines numerisch durchgerechnet
- `## Typische Fehler` (Validator-Pflicht fuer `ready`)
- `## Was du danach kannst` (Validator-Pflicht fuer `ready`)

Weitere Regeln:

- **Term-Links**: Jeden im Glossar definierten Begriff einmal verlinken mit `<Term id="...">Anzeigetext</Term>`. Nicht jedes Vorkommen, nur das erste pro Kapitel.
- **Quellen**: In `src/content/quellen/tagMappings.ts` die `slugTags` fuer das Kapitel ergaenzen, damit der Quellen-Lookup greift.
- **Sprache**: kurze Saetze, aktive Verben, eine Idee pro Absatz.
- **Tonfall**: respektvoll, nicht herablassend. Klarheit ist Respekt.

### 4. Selbsttest

Bevor `status: "draft"` auf `status: "ready"` gehoben wird:

- **Persona-Test**:
  - *Anna, 17, frisch in Ausbildung, kein Vorwissen* → versteht sie es?
  - *Ben, 19, im 2. Lehrjahr, hat schon gelernt aber unsicher* → bringt es ihn weiter?
  - *Carl, IT-erfahren aus Hobby, nutzt die App zur Wiederholung* → findet er es trotzdem praezise?
- **Validator**: `npm run check` muss exit 0 zeigen **und** keine neuen Warnungen fuer das Kapitel.
- **Numerische Stichprobe**: jede Zahl, jede Formel im Kapitel mindestens einmal selbst nachgerechnet.

Erst danach Status-Update in `src/lib/toc/data/<lernfeld>.ts`.

## Inhaltliche Korrektheit — Detail

- **Primaerquellen vor Sekundaerquellen.** Wenn die Spec etwas anderes sagt als ein populaerer Blog, gewinnt die Spec.
- **Cross-Check.** Jeder zentrale Fakt mindestens zwei unabhaengige Quellen.
- **Numerische Disziplin.** Edge-Cases explizit durchspielen (z.B. 8 Bit ergibt 256 Werte, *0 bis 255*, nicht 1 bis 256).
- **Abgrenzung.** Vereinfachungen, die im Lernkontext gelten, aber technisch nicht ganz exakt sind, kurz benennen. Beispiel: "Heute ist 1 Byte praktisch immer 8 Bit. Historisch gab es auch 6- oder 9-Bit-Bytes; im modernen Lernkontext kann man das ignorieren."

## Didaktische Mastery — Detail

- **Keine Vorannahmen.** Auch das "Selbstverstaendliche" wird kurz benannt.
- **Konkret vor abstrakt.** Erst anfassliches Beispiel, dann die Regel.
- **Eine Idee pro Absatz.** Stapeln verwirrt.
- **Stolpersteine aktiv ansprechen.** Wer Missverstaendnisse nicht antizipiert, laesst sie wachsen.
- **Mehrere Erklaer-Wege.** Visuell, numerisch, sprachlich — was am besten passt.

## Was wir nicht schreiben

- keine Fuellsaetze ("In der heutigen Zeit wird IT immer wichtiger...")
- keine Marketing-Sprache ("Mit diesem Kapitel meisterst du...")
- keine inhaltsleeren Kapitel-Uebersichten ("Im Folgenden lernst du...")
- keine kopierten Pruefungsaufgaben (urheberrechtlich kritisch)
- keine vagen Versprechen ohne Belege ("oft wird angenommen, dass...")
