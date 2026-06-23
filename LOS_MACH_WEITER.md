# LOS mach weiter

Stand: 19.06.2026

Diese Datei ist der Schnellstart für neue Chats. Wenn der Nutzer nur schreibt
`LOS mach weiter`, dann nicht neu diskutieren, sondern hier starten und den
nächsten sinnvollen Schritt selbstständig aus den Projektdateien ableiten.

## Projekt

Arbeitsordner:

```text
C:\Users\mu.aycetin\Desktop\Projekte\Porjekte\AP1\grundlast
```

Alle Inhalte im Ordner können KI-generiert sein. Nichts ungeprüft glauben.

## Aktueller Arbeitsmodus

Es wird immer genau **ein Kapitel** bearbeitet.

Harte Regel:

1. Erst das aktuelle Kapitel komplett fertig machen.
2. Nichts am nächsten Kapitel beginnen, solange das aktuelle Kapitel nicht abgehakt ist.
3. Jeder Haken wird dokumentiert.
4. Kein Thema, keine Quelle und kein AP1-Abgleich wird auf „später“ verschoben, wenn er zum aktuellen Kapitel gehört.
5. Wenn der Nutzer nur `mach weiter` schreibt, wird das aktuelle offene Kapitel fortgesetzt.

Aktuelle Reihenfolge beginnt mit:

1. `bit-byte`
2. `prefixe`
3. `datenvolumen-berechnung`
4. `datenrate-berechnung`
5. Danach wird die nächste Lektion aus Status, Inhaltsverzeichnis und Arbeitsstand abgeleitet.

## Sofort lesen

In dieser Reihenfolge:

1. `AP1_NEUSTART.md`
2. `AP1_KONTROLLZENTRUM_2026.md`
3. `AP1_AUDIT_MATRIX.md`
4. `AP1_INHALTSVERZEICHNIS_LERNFELDER_DICHTE.md`
5. `INHALTSVERZEICHNIS_JAHR_1_2.md`
6. `KAPITEL_ARBEITSABLAUF.md`

Diese Dateien steuern die Arbeit. Alte Roadmaps, alte `ready`-/`final`-Werte
und vorhandene Kapitel sind nur Material, kein Beweis.

## Was "weitermachen" bedeutet

1. Prüfen, ob ein Kapitel bereits angefangen, aber noch nicht abgehakt ist.
2. Falls ja: genau dieses Kapitel weiterführen.
3. Falls nein: mit `bit-byte` starten, danach der festgelegten Reihenfolge folgen.
4. Vor Textänderungen Scope, Quellen, Ist-Abgleich und konkrete Aktion klären.
5. Nach jeder erledigten Teilprüfung die Checkliste im Arbeitsstand aktualisieren.
6. Erst nach vollständigem Abschluss das nächste Kapitel nennen.

## Pro Kapitel immer gleich arbeiten

Vor Kapiteltext-Aenderungen:

| Schritt | Pflicht |
|---|---|
| Scope | Welches LF, welches Soll-Thema, welche Soll-Dichte? |
| Ist-Abgleich | Gibt es MDX? Ist es TOC-sichtbar? Gibt es Dopplungen? |
| Form | Kapitel, Abschnitt, Box, Glossar oder Parken? |
| Quellen | Offizielle Ausbildungsquelle plus fachliche Primärquellen |
| Faktencheck | 5 bis 10 harte Aussagen prüfen |
| Didaktikcheck | Einstieg, Begriffe, Beispiele, Fehlerfallen, Selbstcheck |
| Umfang | Pflicht, Kann, Extra/Raus trennen |
| Aktion | Nur das ändern, was der Check wirklich ergibt |

Keine geschützten Prüfungsaufgaben kopieren. Blogs, Podcasts und Lernseiten
nur als Prüfungsnähe oder Didaktikvergleich nutzen, nie als harte Fachquelle.

## Sprachregel

Deutsche Fließtexte werden mit echten Umlauten geschrieben: `ä`, `ö`, `ü`,
`Ä`, `Ö`, `Ü` und `ß`. Keine Umschreibung mit `ae`, `oe`, `ue` oder `ss`,
außer bei Slugs, Dateinamen, IDs, URLs, Importpfaden, Code-Identifiern und
technisch exakt ASCII-only benannten Werten.

Diese Regel ist ein harter Abbruchgrund. Wenn in neu geschriebenem deutschen
Fließtext Ersatzschreibungen wie `fuer`, `pruefen`, `naechste`, `koennen`,
`muessen`, `ueber`, `gross` oder `weiss` auftauchen, wird der Text vor dem
Abschluss korrigiert. Ein Kapitel darf mit solchen Fehlern nicht abgehakt werden.

## Wann ein Kapitel abgehakt ist

Ein Chat darf ein Kapitel nur abhaken, wenn das Ergebnis dokumentiert wurde.

| Ergebnis | Bedeutung |
|---|---|
| `vorhanden` | Kapitel/Huelle existiert, aber nicht automatisch vertrauenswuerdig |
| `ungeprueft` | KI-/Altbestand, noch kein echtes Audit |
| `teilgeprueft` | Quellen/Fakten/Didaktik teilweise geprueft, Aufgabenabgleich fehlt meist |
| `geprueft` | Audit plus legaler Aufgabenabgleich bestanden |
| `Parken` | nicht eigenes AP1-Kernkapitel; Zielort als Abschnitt/Box/Glossar nennen |

Zusätzlich gilt: Ein Kapitel darf erst abgehakt werden, wenn alle Punkte der
Kapitel-Checkliste erledigt sind.

| Check | Erledigt |
|---|---|
| Scope gegen LF1-LF9 geklärt | nein |
| Quellen geprüft und harte Aussagen belegt | nein |
| Bestehender KI-Text fachlich geprüft | nein |
| Kapitelstruktur verständlich und vollständig | nein |
| Beispiele/Rechenwege selbst geprüft | nein |
| typische Fehler ergänzt | nein |
| Glossar/Terms geprüft | nein |
| Quellenbank/Tag-Mapping geprüft | nein |
| AP1-Material abgeglichen, falls passend | nein |
| echte Umlaute im deutschen Fließtext geprüft | nein |
| technische Checks ausgeführt oder begründet übersprungen | nein |
| Status/Review dokumentiert | nein |

Pflichtdokumentation:

- Zeile in `AP1_AUDIT_MATRIX.md` aktualisieren.
- Detailaudit in `AP1_AUDIT_MATRIX.md` ergaenzen, wenn ein Kapitel auditiert wurde.
- `src/lib/audit/status.ts` aktualisieren, wenn die App den Status anzeigen soll.
- `src/content/quellen/sourceBank.ts` und `tagMappings.ts` pflegen, wenn Quellen
  oder Quellenzuordnungen fehlen.

## Keine Dopplung erzeugen

Wenn ein Thema nur Abschnitt, Box oder Glossar ist:

1. Nicht einfach ein neues grosses MDX-Kapitel schreiben.
2. Zielort in der Matrix nennen.
3. Bestehendes Kapitel suchen, in das es passt.
4. Nur kurze Bruecke oder Box einbauen.

Beispiele aus der Matrix:

| Thema | Ziel |
|---|---|
| `audio-kompression` | kleine Box bei Datenvolumen/Webmedien, kein Einzelkapitel |
| `cloud-konzepte` | spaeter LF8/LF9, nicht AP1-LF1-LF6-Kern |
| `git-versionsverwaltung` | Grundlagenabschnitt spaeter |
| `oop-basics` | kurze LF5-Box, keine Vererbungstiefe |
| `teststrategien` | LF5-Testfaelle, keine Testautomations-Tiefe |

## Technische Checks

Bei MDX-, TS-, UI- oder Quellenbank-Aenderungen:

```powershell
& 'C:\Program Files\nodejs\npm.cmd' run lint
& 'C:\Program Files\nodejs\npm.cmd' run build
```

Wenn nur Markdown-Kontrolltexte geaendert wurden, reicht eine kurze
Plausibilitaetspruefung mit `rg`.

## Antwortformat am Ende

Immer kurz und konkret:

```text
Kapitel: [slug]
Status vorher: [status]
Status nachher: [status]
Geaendert: [Dateien]
Gut abgedeckt: [...]
Fehlt: [...]
Zu duenn: [...]
Offen: [...]
Checks: [lint/build oder nicht noetig]
Naechstes Kapitel: [slug]
```

## Standardprompt fuer neue Chats

```text
Du arbeitest im Projekt:
C:\Users\mu.aycetin\Desktop\Projekte\Porjekte\AP1\grundlast

Lies zuerst LOS_MACH_WEITER.md.
Dann lies die dort genannten Steuerdateien.

Mach das aktuelle Kapitel komplett fertig, bevor du zum nächsten gehst.
Wenn kein Kapitel offen ist, starte mit bit-byte.
Keine Kapitel umbauen, bevor Scope, Quellen, Ist-Abgleich und Aktion klar sind.
Dokumentiere jeden Haken in AP1_AUDIT_MATRIX.md.
Schreibe deutschen Fließtext immer mit echten Umlauten: ä, ö, ü, Ä, Ö, Ü, ß.
```
