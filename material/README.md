# Material

Hier liegt das **Quellmaterial**, aus dem Grundlast gebaut wird: Unterrichts-
mitschriften, Zusammenfassungen, Probepruefungen, Aufgabensammlungen.

Warum das existiert: Die Kapitel im Repo sind zu grossen Teilen KI-generiert.
Das ist ein Rohzustand, kein Ergebnis. Ein Kapitel gilt erst dann als belastbar,
wenn es gegen echtes Material und offizielle Quellen geprueft wurde. Dieser
Ordner ist die Belegseite dieser Pruefung.

## Ordnerkonvention

Die Lernfeld-Dateien in `lernfelder/` verweisen mit festen Pfaden hierher.
Deshalb sind Namen keine Geschmacksfrage.

```
material/
  mitschriften/     Unterrichtsmitschriften, nach Lernfeld benannt
  zusammenfassungen/  eigene Zusammenfassungen, thematisch
  pruefungen/       Probe- und Altpruefungen als lesbarer Text (OCR)
  aufgaben/         einzelne Aufgabensammlungen, Uebungsblaetter
```

### Namensschema

| Ordner | Muster | Beispiel |
|---|---|---|
| `mitschriften/` | `<lernfeld>-<thema>.md` | `netzwerke-subnetting.md` |
| `zusammenfassungen/` | `<lernfeld>-<thema>.md` | `wirtschaft-kalkulation.md` |
| `pruefungen/` | `<pruefung>-<jahr>-<termin>.md` | `ap1-2024-fruehjahr.md` |
| `aufgaben/` | `<lernfeld>-<thema>.md` | `sicherheit-schutzziele.md` |

Der Lernfeld-Praefix ist der Slug aus `src/lib/toc/data/` (`netzwerke`,
`wirtschaft`, `sicherheit`, …), damit sich Material und Kapitel automatisch
zuordnen lassen.

### Format

Bevorzugt **Markdown oder reiner Text**. Gruende:

- Ein Chat kann es direkt lesen, ohne Konvertierung.
- Es ist durchsuchbar und diffbar.
- Es bleibt klein genug fuers Repo.

Original-PDFs gehoeren nicht hierher. Wenn ein PDF die Quelle ist, kommt der
OCR- oder Exporttext hier rein und das PDF bleibt ausserhalb des Repos.

## Nutzungsregeln

Diese Regeln sind verbindlich fuer jeden Chat, der mit Material arbeitet.

1. **Pruefungsaufgaben sind Kalibrierung, keine Vorlage.**
   Aus einer Pruefung wird abgeleitet: welche Themen drankommen, in welcher
   Form gefragt wird, wie Punkte verteilt sind, welche Fallen gestellt werden.
   Der Aufgabentext selbst wird **nicht** in ein Kapitel uebernommen.
   Das ist keine Vorsicht, sondern die bestehende Projektregel
   (`KAPITEL_QUALITAET.md`, Punkt 12: keine 1:1-Uebernahme geschuetzter
   Pruefungsaufgaben).

2. **Material belegt Relevanz, nicht Fakten.**
   Eine Mitschrift zeigt, dass ein Thema unterrichtet wird — sie ist kein
   Nachweis, dass eine Aussage stimmt. Fachliche Belege kommen weiterhin aus
   offiziellen Quellen: Gesetz, Norm, RFC, BSI, BIBB, KMK, Herstellerdoku.
   Mitschriften koennen Fehler enthalten; im Zweifel gewinnt die Primaerquelle.

3. **Widersprueche werden sichtbar gemacht, nicht geglaettet.**
   Wenn Mitschrift und Primaerquelle auseinandergehen, gehoert das in die
   Lernfeld-Datei unter "Offene Punkte" — nicht stillschweigend in eine
   Richtung aufgeloest.

4. **Herkunft wird notiert.**
   Jede Materialdatei beginnt mit einem kurzen Kopf: woher, wann, welcher
   Kontext. Ohne Herkunft ist Material spaeter nicht bewertbar.

### Kopfzeile fuer jede Materialdatei

```markdown
---
herkunft: Berufsschule, Fach IT-Systeme, Frau Meyer
datum: 2025-11-14
lernfeld: netzwerke
art: mitschrift
---
```

`art` ist eines von: `mitschrift`, `zusammenfassung`, `pruefung`, `aufgaben`.

## Was hier nicht hingehoert

- Original-PDFs und Scans (nur der extrahierte Text)
- Fremde Lehrbuchkapitel im Volltext
- Alles, was ohne Herkunftsangabe auftaucht
