# AP1-Prüfungen — Auswertung

## Wozu

Der KMK-Rahmenlehrplan sagt, *was* gekonnt werden muss. Er sagt nicht, *wie tief*
gerechnet wird — in Lernfeld 3 kommen die Wörter „Subnetting" und „Subnetzmaske"
zum Beispiel überhaupt nicht vor. Die Rechentiefe und die Themengewichtung ergeben
sich erst aus den tatsächlich gestellten Prüfungen.

Dieser Ordner sammelt die Auswertung echter AP1-Sätze. Daraus entsteht das
Themenraster, das die Reihenfolge bestimmt, in der Kapitel von `draft` auf `ready`
gehoben werden.

## Was hier steht — und was nicht

Erfasst werden **Metadaten und Anforderungen**: welches Thema, wie viele Punkte,
welcher Aufgabentyp, welche Rechentiefe, welches Antwortformat. Dazu die
Zuordnung auf die Kapitel dieses Projekts.

**Nicht erfasst werden die Aufgabentexte, die Lösungstexte und die PDFs.** Auf dem
Deckblatt der Prüfungssätze steht ausdrücklich:

> „Die Vervielfältigung, Verbreitung und öffentliche Wiedergabe der Prüfungsaufgaben
> und Lösungen ist nicht gestattet." — © ZPA Nord-West, §§ 97 ff., 106 ff. UrhG

Das deckt sich mit der Regel in `REVIEW_LOG.md`: *keine echten IHK-Prüfungsaufgaben
kopiert oder zu nah nachgebaut*. Die Beobachtung „Nutzwertanalyse kam mit 6 Punkten
dran und verlangte eine 4×4-Matrix" ist eine Tatsache über die Prüfung und keine
Vervielfältigung — der Aufgabentext selbst wäre eine.

Die PDFs bleiben lokal. Ein Ordner `material/` ist dafür in `.gitignore` eingetragen.

## Wie eine neue Prüfung dazukommt

1. PDF lokal ablegen, Text extrahieren (`pdftotext -layout`, bei Scans `pdftoppm`)
2. Je Teilaufgabe erfassen: Thema, Punkte, Aufgabentyp, geforderte Tiefe
3. Auf Kapitel-Slugs abbilden
4. Rechenwerte der Musterlösung nachrechnen — die OCR-Vorlagen sind fehlerhaft,
   und die Prüfungslösungen selbst sind es gelegentlich auch
5. `themenraster.md` neu aggregieren

## Bestand

| Prüfung | Datei | Punkte erfasst |
|---|---|---|
| Frühjahr 2024 (28.02.2024) | `2024-fruehjahr.md` | 100 / 100 |
