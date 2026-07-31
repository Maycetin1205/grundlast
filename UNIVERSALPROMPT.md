# Universalprompt fuer jeden Grundlast-Kapitel-Chat

Kopiere diesen Text unveraendert in jeden neuen Kapitel-Chat:

```text
Arbeite im Projekt `grundlast` genau ein Kapitel vollstaendig ab. Handle
selbststaendig und frage nicht nach einer Kapitel-ID oder nach Erlaubnis fuer
normale notwendige Integrationsschritte.

1. START
- Pruefe `git status --short` und erhalte alle fremden Aenderungen.
- Lies in `KAPITELPLAN_LF1_LF9.md` nur die Abschnitte 1, 2, 4, 5, 6 und 8.
- Ermittle per Suche die erste Zeile, die mit `- [ ] **LF` beginnt. Bearbeite
  nur diesen ersten offenen Eintrag. Gibt es keinen, aendere nichts.
- Setze den Haken noch nicht.

2. UMFANG UND INTEGRATION
- Bearbeite nur dieses Kapitel und seine notwendigen Glossar-, Quellen- und
  Integrationsdateien. Kein Design, allgemeiner Refactor, Dependency-Update
  oder zweites Kapitel.
- Fehlt die Lektion, erstelle sie mit einem passenden Slug nach vorhandenem
  Muster und integriere sie in `src/content/catalog/chapters/lfX.ts`. Dieser
  Katalog ist die einzige Quelle für Navigation, Status, Lernfeld, AP1-Mapping
  und Quellenzuordnung. Frage dafür nicht erneut nach.
- Aendere keine Routing-, Navigations- oder Designarchitektur.

3. QUELLEN VOR TEXT
- Bestimme Scope und Tiefe zuerst über die passenden IDs in
  `src/content/catalog/scope/`; gleiche anschließend die dort verlinkten
  Primärquellen ab.
- Recherchiere mindestens eine aktuelle fachliche Primaerquelle und eine zweite
  unabhaengige serioese Fachquelle. Alter MDX-Text, Lernzettel, Suchtreffer und
  KI-Antworten sind keine Faktenanker.
- Suche lokale Lern-PDFs gezielt per Index, Textextraktion oder OCR. Lies nur
  relevante Trefferseiten und notiere Originalpfad plus Seiten. Verwende
  mindestens einen passenden Treffer; gibt es keinen, dokumentiere die Suche
  knapp und arbeite mit den Fachquellen weiter.
- Kopiere keine geschuetzten Aufgaben oder Loesungstexte.

4. SCHREIBEN
- Folge Pflichtaufbau und Meistermassstab aus `KAPITELPLAN_LF1_LF9.md`: von
  absolut null Vorwissen bis zur sicheren Anwendung und Begruendung.
- Erklaere jeden Begriff vor seiner Benutzung, alle Abkuerzungen und jeden
  notwendigen Zwischenschritt.
- Belege Definitionen, Regeln, Zahlen, Formeln, Ports, Fristen und zentrale
  Aussagen. Rechne Zahlen und Einheiten selbst nach.
- Entferne Fuelltext und Wiederholungen. Zeige ein vollstaendiges Beispiel,
  typische Fehler oder Gegenfaelle, einen anwendungsorientierten Selbstcheck,
  Transfer, Zusammenfassung und konkrete Quellen.
- Verwende echte deutsche Umlaute und `ß` im sichtbaren Text.
- Pflege Glossar, `<Term>`-IDs und `sourceBank.ts` ohne Dubletten. Trage alle
  verwendeten Quellen-IDs rollengetrennt im Katalogfeld `quellen` ein.

5. ABSCHLUSS UND HAKEN
- Fuehre die sieben Schlussdurchgaenge aus: Scope, Fakten, Rechnen/Logik,
  Nullwissen, Didaktik, Dichte und Integration. Behebe jeden Fund.
- Führe `npm run check`, `npm run build:single`, `npm run emit:status` und bei
  Scope-Änderungen `npm run emit:scope` aus.
  Alle technischen Befehle müssen Exitcode 0 haben. Kontrolliere danach den
  Diff auf unbeabsichtigte Änderungen und Statusdrift.
- Erst wenn Inhalt, Quellen, Glossar, App-Integration und alle Checks komplett
  sind, aendere genau den gewaehlten Eintrag in `KAPITELPLAN_LF1_LF9.md` von
  `[ ]` auf `[x]`. Aendere keinen zweiten Haken.
- Bei einem echten Blocker bleibt `[ ]` stehen. Frage nur, wenn eine Entscheidung
  ausserhalb dieser ausdruecklichen Berechtigungen notwendig ist.

Antworte knapp mit: Kapitel und Ergebnis; geaenderte Dateien; zentrale Quellen;
lokale PDFs mit Seiten; sieben Schlussdurchgänge; Checks mit Exitcodes;
Haken ja/nein; offene Punkte; naechster offener Eintrag.
```
