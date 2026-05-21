# Review-Log für freigegebene Kapitel

Zweck: Diese Datei dokumentiert die formale Freigabe von Kapiteln. `ready` bedeutet:
inhaltlich ausgearbeitet und lernbar. `final` bedeutet: fachlich geprüft, Quellen
kontrolliert, Build/Lint bestanden und für Weitergabe geeignet.

## Statusregeln

- `stub`: geplant, nicht als Lerninhalt anzeigen.
- `draft`: Inhalt vorhanden, aber noch nicht didaktisch/fachlich rund.
- `ready`: ausgearbeitet, quellenorientiert, intern lernbar.
- `final`: formal geprüft und freigegeben.

## Freigabe-Checkliste pro Kapitel

1. Lernfeld und AP1-Relevanz gegen BIBB/KMK/FIAusbV plausibilisiert.
2. Fachliche Kernaussagen gegen Primär- oder Fachquellen geprüft.
3. Rechenwege, Tabellen, Sonderfälle und Einheiten manuell kontrolliert.
4. Recht/Sicherheit/Normen nur mit amtlichen oder offiziellen Quellen belegt.
5. Keine echten IHK-Prüfungsaufgaben kopiert oder zu nah nachgebaut.
6. Glossar-Terme vorhanden und korrekt verlinkt.
7. Quellen im Quellen-Tab passend und nicht nur allgemein.
8. Kapitel im Browser lesbar, mobil grob plausibel, keine offensichtlichen Überläufe.
9. `npm.cmd run lint` erfolgreich.
10. `npm.cmd run build` und bei Weitergabe `npm.cmd run build:single` erfolgreich.

## Freigegebene Kapitel

## zahlensysteme
- Titel: Zahlensysteme (Dual, Hex, Dezimal)
- Status: final
- Geprüft am: 21.05.2026 (nachgezogen am 21.05.2026 um Binäraddition, Zweierkomplement, IEEE 754)
- Prüfer: Codex, Claude
- Quellen:
  - IEEE Std 1003.1 (POSIX) - chmod
  - RFC 9542 - IANA Considerations and IETF Usage for IEEE 802 Parameters
  - W3C - CSS Color Module Level 4
  - RFC 4632 - Classless Inter-domain Routing (CIDR)
  - Python Language Reference - Integer literals
  - ECMAScript Language Specification - Numeric literals
  - IEEE Std 754-2019 - Floating-Point Arithmetic
- Kritische Aussagen:
  - Stellenwertprinzip: Wert = Summe aus Ziffer mal Basis^Position.
  - 46 dezimal wird binär zu 101110.
  - 192 dezimal wird hexadezimal zu C0 und binär zu 11000000.
  - 255 dezimal wird hexadezimal zu FF.
  - 511 dezimal wird oktal zu 777.
  - chmod 755 zerlegt sich in rwxr-xr-x.
  - CSS-Hexfarben nutzen hexadezimale sRGB-Komponenten.
  - MAC-/EUI-48-Schreibweisen nutzen hexadezimale Oktette.
  - CIDR-Präfixe beschreiben Netzanteile als Bitlänge.
  - Python 3 nutzt 0o für Oktal-Literale; führende Nullen in Nicht-Null-Dezimalzahlen sind nicht erlaubt.
  - Binäraddition: `1+1 = 10` mit Übertrag; `1011 + 0110 = 10001` (Dezimal-Probe: 11+6 = 17).
  - Zweierkomplement: höchstwertiges Bit trägt negativen Stellenwert; bei 8 Bit Wertigkeitsreihe `-128, 64, 32, 16, 8, 4, 2, 1`; Wertebereich −128 bis +127.
  - Bildungsregel Zweierkomplement: Bits invertieren und +1 addieren; `-5` als 8 Bit = `11111011`.
  - Wertebereiche Zweierkomplement: 16 Bit −32 768 bis +32 767; 32 Bit −2 147 483 648 bis +2 147 483 647.
  - IEEE 754 binary32: 1 Vorzeichen + 8 Exponent (Bias 127) + 23 Mantisse; binary64: 1 + 11 (Bias 1023) + 52.
  - IEEE-754-Formel: Wert = (-1)^s · 1,M · 2^(E − Bias).
  - 0,15625 = 1,25 · 2⁻³; binary32-Codierung Vorzeichen 0, Exponent 124 (0111 1100), Mantisse 010…0.
  - 0.1 + 0.2 ergibt in IEEE 754 0.30000000000000004 (binäre Periodizität von 0,1).
- Build/Lint:
  - `node scripts/validate-content.mjs --lesson=zahlensysteme --strict --verbose`: 0 Fehler, 0 Warnungen (nach Nachzug).
  - `npm.cmd run lint`: erfolgreich (nach Nachzug).
  - `npm.cmd run build`: erfolgreich (nach Nachzug).
  - `npm.cmd run build:single`: erfolgreich (Initialfreigabe).
- Notizen:
  - Rechenbeispiele maschinell gegen JavaScript-Zahlenkonvertierung kontrolliert.
  - Quellen gegen Primär- und offizielle Spezifikationen plausibilisiert.
  - Quellen-Tab priorisiert jetzt kapitelspezifische Quellen vor allgemeinen Ordnungsmitteln.
  - Browser-Stichprobe mit Headless Chrome/CDP: Desktop 1440x1200 und Mobile 390x1200 gerendert; Mobile ohne horizontale Seitenbreite (`docScroll == docClient`, `mainScroll == mainClient`).
  - Nachzug 21.05.2026: Subnetting-Term entfernt, Halbsatz „warum nur zwei Pegel" ergänzt, Abschnitt „Binär → Hex (Nibble-Trick andersrum)" eingefügt, chmod-Schnellcheck-Tabelle um 2/3 vervollständigt, toter Verweis auf IPv4-Kapitel entfernt, Abschnitte Binäraddition, Zweierkomplement und IEEE 754 ergänzt, vier neue Typische-Fehler-Punkte (Übertrag, MSB-Missverständnis, signed/unsigned, Gleitkomma-Gleichheit), drei neue Lernziele in „Was du danach kannst".
  - Übungsblock bewusst nicht im Kapitel; geplantes Tool T.1 Zahlensystem-Rechner in `src/routes/Tools.tsx` übernimmt das (Phase 2T).

## Final-Kandidaten

Aktuell keine dokumentierten Final-Kandidaten offen.

Format für spätere Einträge:

```text
## slug
- Titel:
- Status: final
- Geprüft am:
- Prüfer:
- Quellen:
- Kritische Aussagen:
- Build/Lint:
- Notizen:
```
