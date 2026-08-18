# Prototypen

Eigenstaendige HTML-Seiten, die ein Kapitelformat erproben, bevor es in die App
wandert. Doppelklick genuegt — kein Server, kein Build, keine Internetverbindung.

## Was hier liegt

### `subnetting.html`

Erster vollstaendiger Prototyp des Kapitelformats. Inhalt aus
`material/zusammenfassungen/netzwerke-subnetting-meisterklasse.md`, Gestaltung nach
der Referenzdatei des Nutzers (`AP1_Modul_1.1_Werkstoffe`).

Was der Prototyp erprobt:

| Baustein | Warum |
|---|---|
| Schriften als Data-URI eingebettet | Newsreader, Karla und JetBrains Mono kommen sonst per Google-CDN. In einer eigenstaendigen Datei ist das blockiert — vorherige Versuche fielen still auf Systemschriften zurueck und sahen billig aus. |
| Anklickbare Lichtschalter | Binaerlogik zum Anfassen statt als Tabelle. |
| Zahlenstrahl mit Bloecken | Das eine Bild, das Subnetting erklaert: Nadel steht still, die Blockgrenzen wandern. |
| Drei Uebungsgeneratoren | Ein Generator je IHK-Aufgabentyp, Eingabefelder statt Multiple Choice, Rueckmeldung pro Feld. |
| Begriffstafel | Jedes Fachwort anklickbar, Erklaerung faehrt unten ein. Entspricht `<Term>` in der App. |

## Warum eigenstaendig und nicht direkt in der App

Ein Prototyp darf verworfen werden. Solange das Format nicht steht, waere es
teuer, es in MDX-Komponenten zu giessen und 100 Kapitel darauf umzubauen.

Sobald das Format bestaetigt ist, wandern die Bausteine als React-Komponenten
nach `src/components/content/` und der Prototyp bleibt als Referenz liegen.

## Groesse

`subnetting.html` ist rund 300 KB, davon 244 KB eingebettete Schriften. In der
App fallen die weg, weil dort `@fontsource`-Pakete gebuendelt werden — die
Schriften liegen dann einmal fuer alle Kapitel im Build statt in jeder Datei.
