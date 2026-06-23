# Kapitel-Arbeitsablauf

Stand: 17.06.2026

Diese Datei ist die harte Arbeits-Schablone fuer jedes Kapitel. Kein Chat und
keine KI darf Kapiteltext schreiben, umsortieren, erweitern oder final setzen,
bevor dieser Ablauf durchlaufen wurde.

## Vorrang

`AP1_NEUSTART.md` hat Vorrang vor dieser Datei. Bestehende KI-generierte
Kapitel, Plaene und Statuswerte gelten als ungeprueft, bis sie die dort
beschriebenen Quellen-, Fakten-, Didaktik- und Aufgaben-Gates bestanden haben.

Wenn ein neuer Chat nur `LOS mach weiter` bekommt, gilt zusaetzlich
`LOS_MACH_WEITER.md` als operativer Einstiegspunkt. Diese Datei hier regelt
dann die konkrete Kapitelarbeit.

## Grundregel

Erst Quellen, dann Vergleich, dann Audit, dann Text.

Wenn die Quellen-/Benchmark-Matrix fehlt, ist nur Recherche erlaubt. Schreiben
am Kapitel ist dann gesperrt.

## Ein-Kapitel-Regel

Es wird immer genau ein Kapitel vollständig abgeschlossen, bevor das nächste
Kapitel begonnen wird.

Ein Kapitel gilt erst als abgeschlossen, wenn:

- Scope und Ziel für LF1-LF9 geklärt sind
- Quellen-/Benchmark-Matrix ausgefüllt ist
- Abschnitts-Audit erledigt ist
- fachliche Aussagen gegen Quellen geprüft sind
- Rechenwege, Tabellen und Zahlen selbst geprüft sind, falls relevant
- Glossar-Terms und Quellen-Tags geprüft sind
- passendes AP1-Material abgeglichen wurde, falls vorhanden
- deutsche Fließtexte echte Umlaute verwenden
- technische Checks ausgeführt wurden oder begründet nicht nötig waren
- Status, Review und offener Rest dokumentiert sind

Solange einer dieser Punkte offen ist, darf kein nächstes Kapitel begonnen
werden. Ein neuer Chat mit `mach weiter` setzt genau an diesem offenen Punkt an.

## Schritt 0: Scope klaeren

Vor jeder Kapitelarbeit pruefen:

| Frage | Quelle |
|---|---|
| Gibt es das Thema in der Themenlandkarte? | `INHALTSVERZEICHNIS_JAHR_1_2.md` |
| Welchen `Bezug` hat es? | `INHALTSVERZEICHNIS_JAHR_1_2.md`, `CURRICULUM_MAPPING.md` |
| Welche `Form` hat es? | `INHALTSVERZEICHNIS_JAHR_1_2.md`, `CURRICULUM_MAPPING.md` |
| Gibt es schon ein Kapitel? | `src/content/lessons/*.mdx` |
| Ist es im TOC sichtbar? | `src/lib/toc/data/*.ts` |
| Gibt es alte Review-Hinweise? | `REVIEW_LOG.md` |

Erlaubte `Bezug`-Werte:

- `Lehrplan`
- `Pruefung`
- `Grundlage`
- `Extra`
- `Raus`

Erlaubte `Form`-Werte:

- `Kapitel`
- `Abschnitt`
- `Box`
- `Glossar`
- `Raus`

Keine neuen Kategorien erfinden.

## Schritt 1: Quellen-/Benchmark-Matrix

Vor jeder Kapiteländerung diese Matrix ausfuellen. Wenn ein Feld noch leer ist,
nicht schreiben, sondern erst recherchieren.

| Bereich | Quellen/Links | Was daraus fachlich folgt | Was unser Kapitel daraus machen muss |
|---|---|---|---|
| Offizielle Ausbildungsquellen |  |  |  |
| Fachliche Primaerquellen |  |  |  |
| Serioese Vergleichsangebote |  |  |  |
| Pruefungs-/Kataloghinweise |  |  |  |
| Eigene Schlussfolgerung |  |  |  |

Pflicht:

- mindestens 3 serioese Quellen
- mindestens 1 Primaerquelle
- bei Recht, Sicherheit, Normen, Protokollen und Zahlenwerten Primaerquelle vor Lernseite
- Vergleichsangebote nur als Benchmark nutzen, nicht als Faktenanker
- Pruefungs-/Kataloghinweise nur fuer Umfang und Stolperstellen nutzen

## Schritt 2: Abschnitts-Audit

Vor dem Schreiben jeden bestehenden oder geplanten Abschnitt pruefen:

| Abschnitt | Faktisch belegt? | Ohne Vorwissen verstaendlich? | Richtige Reihenfolge? | Umfang passend? | Aenderung noetig? |
|---|---|---|---|---|---|
| Einstieg |  |  |  |  |  |
| Grundbegriffe |  |  |  |  |  |
| Verfahren/Rechenweg |  |  |  |  |  |
| Beispiele |  |  |  |  |  |
| Fehlerfallen |  |  |  |  |  |
| Transfer/Anschluss |  |  |  |  |  |
| Quellen/Glossar |  |  |  |  |  |

Erst wenn klar ist, was wirklich geaendert werden muss, wird editiert.

## Schritt 3: Schreibregeln

Beim Schreiben gilt:

- deutsche Fließtexte mit echten Umlauten schreiben: `ä`, `ö`, `ü`, `Ä`,
  `Ö`, `Ü`, `ß`; keine Ersatzschreibung `ae`, `oe`, `ue`, `ss` außer in
  Slugs, Dateinamen, IDs, URLs, Importpfaden, Code-Identifiern und technisch
  exakt ASCII-only benannten Werten
- Ersatzschreibungen wie `fuer`, `pruefen`, `naechste`, `koennen`, `muessen`,
  `ueber`, `gross` oder `weiss` sind in neu geschriebenem deutschem Fließtext
  ein Fehler und müssen vor dem Abschluss korrigiert werden
- keine langen offiziellen Vorspanne im Lerntext
- keine sichtbaren Projektlabels wie `Bezug`, `Form`, `Lehrplan`, `Pruefung`
  als Abschnittssystem im Kapitel
- keine Kategorien wie `Soll`, `Vertiefung`, `Pflicht` im sichtbaren Lerntext
- keine Aufgabenbloecke, Quizbloecke, Karteikarten oder Pruefungssimulationen
- kleine Selbstchecks sind erlaubt, wenn sie direkt erklaerend sind
- Beispiele muessen den Stoff erklaeren, nicht den Leser abfragen
- keine kuenstlichen Berufssituationen, wenn sie den Lernfluss stoeren
- Fachbegriffe beim ersten sinnvollen Auftreten mit `<Term id="...">...</Term>` markieren
- Quellen in `src/content/quellen/sourceBank.ts` und `tagMappings.ts` pflegen
- Glossar in `src/content/glossar/*.ts` pflegen

## Schritt 4: Freigabecheck

Ein Kapitel darf nur auf `ready` oder `final`, wenn alles erledigt ist:

| Check | Pflicht |
|---|---|
| Scope gegen Themenlandkarte geprueft | ja |
| Quellen-/Benchmark-Matrix vorhanden | ja |
| Abschnitts-Audit erledigt | ja |
| zentrale Fakten belegt | ja |
| Rechenwege/Zahlen selbst geprueft | falls relevant |
| Glossar-Terms vorhanden | ja |
| Quellen-Tags gepflegt | ja |
| keine verbotenen sichtbaren Labels | ja |
| kein Aufgaben-/Pruefungsmodus im Kapitel | ja |
| echte Umlaute statt ae/oe/ue/ss im deutschen Fließtext | ja |
| `npm.cmd run lint` | exit 0 |
| `npm.cmd run build` | exit 0 |
| `REVIEW_LOG.md` aktualisiert | bei `final` ja |

## Harte Stop-Regeln

Sofort stoppen und nicht schreiben, wenn:

- das Thema nicht in der Themenlandkarte steht
- `Bezug` oder `Form` unklar ist
- Quellen fehlen
- eine fachliche Aussage nur aus einem Lernzettel oder Blog stammt
- die KI eine neue Kategorie, neue Roadmap oder neues Kapitel erfinden will
- ein Kapitel groesser wird, obwohl `Form` nur `Abschnitt`, `Box` oder `Glossar` ist
- der Nutzer explizit nur Brainstorming oder Planung will

## Standardprompt fuer neue Chats

```text
Du arbeitest im Projekt:
C:\Users\mu.aycetin\Desktop\Projekte\Porjekte\AP1\grundlast

Lies zuerst:
- LOS_MACH_WEITER.md
- KAPITEL_ARBEITSABLAUF.md
- INHALTSVERZEICHNIS_JAHR_1_2.md
- CURRICULUM_MAPPING.md
- KAPITEL_QUALITAET.md
- CONTENT_GUIDELINES.md
- REVIEW_LOG.md

Bearbeite genau dieses Kapitel:
[KAPITEL-SLUG]

Wichtig:
Erst Quellen-/Benchmark-Matrix erstellen oder aktualisieren.
Erst danach Abschnitts-Audit.
Kapiteltext erst aendern, wenn die Matrix und das Audit zeigen, was wirklich geaendert werden muss.
Keine neuen Kapitel, Kategorien oder Roadmaps erfinden.
```
