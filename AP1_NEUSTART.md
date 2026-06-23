# AP1-Neustart: KI-Inhalte nur nach Audit freigeben

Stand: 17.06.2026

Diese Datei ist die oberste Arbeitsregel fuer dieses Projekt. Sie existiert,
weil bisherige Inhalte, Plaene, Statuswerte und Kapitel ganz oder teilweise von
KI erzeugt wurden. KI-Inhalte sind ab jetzt nicht verboten, aber sie sind
grundsaetzlich nicht vertrauenswuerdig, bis sie belegt, geprueft und an
Aufgabentypen getestet wurden.

## Schnellstart fuer neue Chats

Wenn der Nutzer nur `LOS mach weiter` schreibt, zuerst `LOS_MACH_WEITER.md`
lesen und danach den dort beschriebenen Ablauf ausfuehren. Diese Datei bleibt
die oberste Regel; `LOS_MACH_WEITER.md` ist der operative Einstiegspunkt.

## Vorrangregel

Wenn diese Datei einer anderen Projektdatei widerspricht, gilt diese Datei.

Bestehende `ready`-, `final`- oder aehnliche Markierungen sind ab jetzt nur
technische oder historische Statuswerte. Sie bedeuten nicht automatisch:

- fachlich richtig
- AP1-ausreichend
- didaktisch gut
- durch echte Aufgaben bestaetigt
- fuer Wiederholung unter Zeitdruck geeignet

Ein Kapitel gilt erst dann als vertrauenswuerdig, wenn es die Gates in dieser
Datei bestanden hat.

## Ziel

Das Projekt soll keine grosse KI-Textsammlung sein. Es soll ein belastbares
AP1-Lernsystem werden:

1. Kompendium: verstehen.
2. Pruefungstraining: anwenden unter Zeitdruck.
3. Fehlerliste: persoenliche Luecken schliessen.

Die App und vorhandene Struktur duerfen weiterverwendet werden. Alte Texte
duerfen nur nach Audit freigegeben oder als Materialquelle genutzt werden.

## Direktive 2026-06-16

Der Anspruch wurde verschaerft: Die Lerndatei soll nicht nur brauchbar, sondern
maximal umfassend und pruefungsfest werden. Gleichzeitig gilt strenger als
vorher: Alles im Ordner, auch Markdown-Dateien, Roadmaps, Kapitel und
Statuswerte, kann KI-generiert sein und darf nicht als Beweis gelten.

`AP1_KONTROLLZENTRUM_2026.md` ist ab jetzt die operative Bruecke zwischen
Quellenstand, AP1-2025-Pruefungsrealitaet und spaeteren Probepruefungen. Diese
Datei hat Vorrang fuer den Umgang mit Probepruefungen, Aufgaben-Mapping und
Delta-Hinweisen aus dem neuen AP1-Katalog. Wenn sie dieser Datei widerspricht,
gilt weiterhin `AP1_NEUSTART.md`.

## Harte Regeln fuer jede KI

- Nichts als wahr behandeln, nur weil es bereits im Projekt steht.
- Keine neuen Kapitel schreiben, bevor Scope, Quellen und Audit klar sind.
- Keine Roadmaps, Kategorien oder Statuswerte erfinden.
- Keine sichtbaren Pruefungsaufgaben aus geschuetzten IHK-Aufgaben kopieren.
- Keine Blog-, YouTube- oder Lernzettel-Aussage als Faktenanker nutzen.
- Bei Unsicherheit nicht raten, sondern `unklar` notieren.
- Bei fehlender Quelle nicht formulieren, sondern Recherche/Audit fortsetzen.
- Bei Widerspruch zwischen Quellen nicht glaetten, sondern dokumentieren.
- Bei zu grossem Umfang kuerzen, parken oder als Box/Glossar einordnen.
- Bei jedem Kapitel die Zielperson mitdenken: Fachinformatiker im 2. Lehrjahr
  mit wenig Vorwissen und hohem AP1-Ziel.

## Quellenhierarchie

Quellen werden nach Rolle getrennt. Keine Quelle ersetzt eine andere Rolle.

| Rolle | Erlaubte Quellen | Wofuer sie zaehlen |
|---|---|---|
| Ausbildungsrahmen | FIAusbV, KMK-Rahmenlehrplan, BIBB-Umsetzungshilfe, IHK/AkA/ZPA-Hinweise | Thema, Umfang, Pruefungsnaehe |
| Fachliche Primaerquelle | BSI, RFCs, Gesetze, Normen, Herstellerdoku fuer Herstellerspezifika, offizielle Spezifikationen | harte Fakten, Definitionen, Zahlen, Protokolle, Recht |
| Didaktischer Vergleich | serioese Lernangebote, Fachbuecher, Berufsschulmaterial | Erklaeridee, Reihenfolge, typische Missverstaendnisse |
| Pruefungsrealitaet | legal erworbene Originalaufgaben, U-Form/IHK-nahe Trainer, eigene Aufgabentypen mit Loesung | Aufgabenform, Tiefe, Timing, Fehleranalyse |

Wenn ein Kapitel keine passende Ausbildungsquelle und keine passende
fachliche Quelle hat, darf es nicht auf `ready` oder `final` stehen.

## Audit-Gates

Ein Kapitel darf erst freigegeben werden, wenn alle passenden Gates bestanden
sind.

| Gate | Muss beantwortet sein |
|---|---|
| Scope-Gate | Warum ist das Thema fuer Jahr 1/2 oder AP1 relevant? |
| Quellen-Gate | Welche offiziellen und fachlichen Quellen tragen die Kernaussagen? |
| Fakten-Gate | Welche 5 bis 10 harten Aussagen wurden gegen Quellen geprueft? |
| Didaktik-Gate | Versteht jemand ohne Vorwissen Einstieg, Begriffe, Ablauf und Beispiele? |
| Aufgaben-Gate | Welche AP1-nahe Aufgabe oder welcher Aufgabentyp laesst sich danach loesen? |
| Umfangs-Gate | Was ist Pflicht, was ist Kann, was ist Extra oder Raus? |
| Technik-Gate | Lint, Build und bei UI-Aenderungen Browser-Stichprobe bestanden? |
| Review-Gate | Ergebnis in Auditmatrix oder Review-Log dokumentiert? |

Kein Gate darf durch "klingt plausibel" ersetzt werden.

## Audit-Matrix pro Kapitel

Jedes Kernkapitel bekommt mindestens diesen Eintrag:

```text
Slug:
Thema:
AP1-Relevanz: Pflicht / Hoch / Mittel / Niedrig / Raus
Form: Kapitel / Abschnitt / Box / Glossar / Raus
Status alt:
Vertrauensstatus: ungeprueft / teilgeprueft / geprueft / gesperrt

Offizielle Ausbildungsquelle:
Fachliche Primaerquelle:
Didaktischer Vergleich:
Pruefungs-/Aufgabentyp:

5 harte Aussagen geprueft:
1.
2.
3.
4.
5.

Didaktikcheck:
- Begriff vor Verwendung erklaert?
- mentales Modell vorhanden?
- Schritt-fuer-Schritt bei Verfahren/Rechnung?
- Beispiel mit Loesungsweg?
- typische Fehler direkt genannt?
- kurze Selbstkontrolle mit Loesung?

Umfang:
- Pflicht:
- Kann:
- Extra/Raus:

Entscheidung:
Naechste Aktion:
```

## Didaktikstandard: Null-Ahnung-tauglich

Ein Kapitel ist didaktisch gut, wenn ein Lernender danach ohne Raten kann:

- den Kernbegriff in einem Satz erklaeren
- die wichtigsten Fachbegriffe unterscheiden
- ein kleines Beispiel nachvollziehen
- einen Rechenweg oder Ablauf wiederholen
- typische Fallen erkennen
- eine passende Aufgabe mit Loesungsweg bearbeiten
- am naechsten Tag die Grundidee erneut erklaeren

Fuer Rechen- und Verfahrensthemen gilt:

1. Erst Idee.
2. Dann Begriffe.
3. Dann Formel oder Verfahren.
4. Dann Beispiel mit Zwischenschritten.
5. Dann Fehlerfallen.
6. Dann kurzer Selbstcheck mit Loesung.

## Was zu viel Mist ist

Inhalte werden gekuerzt oder geparkt, wenn sie:

- keinen klaren Bezug zu FIAusbV, KMK, BIBB oder AP1-Aufgabentypen haben
- nur interessant, aber nicht pruefungs- oder grundlagenrelevant sind
- mehr Tiefe liefern, als ein AP1-Lernender braucht
- ohne Vorwissen verwirren, statt zu helfen
- Trendthemen aufblasen, bevor die Grundlagen sitzen
- keine Aufgabe loesen helfen

`Extra` ist kein Verbot. Es bedeutet: nicht vor den Pflichtketten ausbauen.

## Pruefungstraining ist getrennt

Das normale Kompendium erklaert. Es ist kein Aufgabenarchiv.

Zusaetzlich braucht das Projekt eine getrennte Trainingsschicht:

- legale Original-/U-Form-Aufgaben, wenn vorhanden
- IHK-nahe eigene Aufgabentypen mit Loesung
- 90-Minuten-Simulationen
- Fehlerliste
- Wiederholungsplan

Ohne Aufgaben- und Fehlertraining ist ein Kapitel fuer 90 Prozent AP1 nicht
ausreichend, auch wenn es fachlich gut geschrieben ist.

## Erste Arbeitsreihenfolge

Freeze: Erst pruefen, dann erweitern.

1. `AP1_AUDIT_MATRIX.md` erstellen.
2. Alle vorhandenen Kapitel mit altem Status und Vertrauensstatus erfassen.
3. Alle vorhandenen `final`-Markierungen als `ungeprueft` behandeln, bis der
   Audit bestanden ist.
4. Zuerst die Grundlagenkette auditieren:
   - `bit-byte`
   - `prefixe`
   - `zahlensysteme`
   - `datenrate-berechnung`
   - `ipv4-subnetting`
   - `netzwerkkonfiguration`
5. Danach Sicherheit, Datenschutz, Hardware/Beschaffung und kaufmaennische
   Rechenaufgaben auditieren.

## Stoppschild fuer neue Chats

Ein neuer Chat darf nur dann Kapiteltext aendern, wenn er vorher explizit
nennt:

1. welches Kapitel bearbeitet wird
2. welche Quellen fuer dieses Kapitel gelten
3. welche alten Aussagen geprueft oder verworfen werden
4. welche Aufgabe oder welcher Aufgabentyp danach loesbar sein soll
5. welche Dateien geaendert werden sollen

Wenn diese fuenf Punkte fehlen, ist nur Audit oder Recherche erlaubt.

## Standardprompt

```text
Du arbeitest im Projekt:
C:\Users\mu.aycetin\Desktop\Projekte\Porjekte\AP1\grundlast

Lies zuerst LOS_MACH_WEITER.md und AP1_NEUSTART.md. AP1_NEUSTART.md hat
Vorrang vor allen alten KI-generierten Plaenen und Statuswerten.

Behandle alle bestehenden Inhalte als ungeprueft, bis sie durch Quellen-,
Fakten-, Didaktik- und Aufgaben-Gate gegangen sind.

Bearbeite genau diesen Schritt:
[SCHRITT EINFUEGEN]
```
