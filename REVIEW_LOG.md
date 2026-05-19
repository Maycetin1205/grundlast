# Review-Log fuer freigegebene Kapitel

Zweck: Diese Datei dokumentiert die formale Freigabe von Kapiteln. `ready` bedeutet:
inhaltlich ausgearbeitet und lernbar. `final` bedeutet: fachlich geprueft, Quellen
kontrolliert, Build/Lint bestanden und fuer Weitergabe geeignet.

## Statusregeln

- `stub`: geplant, nicht als Lerninhalt anzeigen.
- `draft`: Inhalt vorhanden, aber noch nicht didaktisch/fachlich rund.
- `ready`: ausgearbeitet, quellenorientiert, intern lernbar.
- `final`: formal geprueft und freigegeben.

## Freigabe-Checkliste pro Kapitel

1. Lernfeld und AP1-Relevanz gegen BIBB/KMK/FIAusbV plausibilisiert.
2. Fachliche Kernaussagen gegen Primaer- oder Fachquellen geprueft.
3. Rechenwege, Tabellen, Sonderfaelle und Einheiten manuell kontrolliert.
4. Recht/Sicherheit/Normen nur mit amtlichen oder offiziellen Quellen belegt.
5. Keine echten IHK-Pruefungsaufgaben kopiert oder zu nah nachgebaut.
6. Glossar-Terme vorhanden und korrekt verlinkt.
7. Quellen im Quellen-Tab passend und nicht nur allgemein.
8. Kapitel im Browser lesbar, mobil grob plausibel, keine offensichtlichen Ueberlaeufe.
9. `npm.cmd run lint` erfolgreich.
10. `npm.cmd run build` und bei Weitergabe `npm.cmd run build:single` erfolgreich.

## Freigegebene Kapitel

Noch keine Kapitel formal auf `final` gesetzt.

## Final-Kandidaten

### zahlensysteme
- Titel: Zahlensysteme (Dual, Hex, Dezimal)
- Status: final-kandidat
- Geprueft am: 18.05.2026
- Pruefer: Codex
- Quellen:
  - IEEE Std 1003.1 (POSIX) - chmod
  - RFC 9542 - IANA Considerations and IETF Usage for IEEE 802 Parameters
  - W3C - CSS Color Module Level 4
  - RFC 4632 - Classless Inter-domain Routing (CIDR)
  - Python Language Reference - Integer literals
  - ECMAScript Language Specification - Numeric literals
- Kritische Aussagen:
  - Stellenwertprinzip: Wert = Summe aus Ziffer mal Basis^Position.
  - 46 dezimal wird binaer zu 101110.
  - 192 dezimal wird hexadezimal zu C0 und binaer zu 11000000.
  - 255 dezimal wird hexadezimal zu FF.
  - 511 dezimal wird oktal zu 777.
  - chmod 755 zerlegt sich in rwxr-xr-x.
  - CSS-Hexfarben nutzen hexadezimale sRGB-Komponenten.
  - MAC-/EUI-48-Schreibweisen nutzen hexadezimale Oktette.
  - CIDR-Praefixe beschreiben Netzanteile als Bitlaenge.
  - Python 3 nutzt 0o fuer Oktal-Literale; fuehrende Nullen in Nicht-Null-Dezimalzahlen sind nicht erlaubt.
- Build/Lint:
  - `node scripts/validate-content.mjs --lesson=zahlensysteme --strict --verbose`: 0 Fehler, 0 Warnungen.
  - `npm.cmd run validate:content`: erfolgreich, globale Warnungen bleiben bei anderen Ready-Kapiteln.
  - `npm.cmd run lint`: erfolgreich.
  - `npm.cmd run build`: erfolgreich.
  - `npm.cmd run build:single`: erfolgreich.
- Notizen:
  - Rechenbeispiele maschinell gegen JavaScript-Zahlenkonvertierung kontrolliert.
  - Single-HTML-Build enthaelt Kapitel- und Quellenstrings.
  - Noch offen vor `final`: echte Browser-Stichprobe Desktop und mobil.

Format fuer spaetere Eintraege:

```text
## slug
- Titel:
- Status: final
- Geprueft am:
- Pruefer:
- Quellen:
- Kritische Aussagen:
- Build/Lint:
- Notizen:
```
