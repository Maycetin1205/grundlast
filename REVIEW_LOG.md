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
