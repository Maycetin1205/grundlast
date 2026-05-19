# Qualitätssicherung

Diese Datei beschreibt, wie Grundlast fachlich stabil bleibt, waehrend Inhalte
laufend wachsen.

## Ziel

`ready` bedeutet: Ein Kapitel ist intern lernbar und erfuellt den
Kapitelstandard. `final` bedeutet: Das Kapitel wurde fachlich geprueft,
technisch validiert und fuer Weitergabe freigegeben.

## Automatische Gates

Vor jeder Freigabe laufen:

```text
npm.cmd run lint
npm.cmd run validate:content
npm.cmd run build
```

Fuer Release-Builds zusaetzlich:

```text
npm.cmd run build:single
```

Ein einzelner Final-Kandidat kann gezielt streng geprueft werden:

```text
node scripts/validate-content.mjs --lesson=zahlensysteme --strict --verbose
```

Der Content-Validator prueft unter anderem:

- TOC-Eintrag, Status und vorhandene MDX-Datei
- Glossar-IDs gegen `src/content/glossar/*.ts`
- Quellen-Zuordnung ueber `src/content/quellen/tagMappings.ts`
- Ready-Struktur: Was-du-danach-kannst, Analogie, Faktenkern, Glossar-Terme,
  Schritt-fuer-Schritt, typische Fehler und Quellen-Komponente
- `final` nur mit Eintrag in `REVIEW_LOG.md`

## Manuelles Review-Gate

Ein Kapitel wird erst auf `final` gesetzt, wenn diese Punkte erledigt sind:

1. Lernfeld, Ausbildungsjahr und AP1/AP2-Relevanz sind gegen
   `CURRICULUM_MAPPING.md` plausibilisiert.
2. Fachliche Kernaussagen sind gegen Primaer- oder Fachquellen geprueft.
3. Rechenwege, Tabellen, Einheiten und Sonderfaelle sind manuell kontrolliert.
4. Recht, Sicherheit und Normen sind nur mit amtlichen oder offiziellen Quellen
   belegt.
5. Es wurden keine echten IHK-Pruefungsaufgaben kopiert oder eng nachgebaut.
6. Glossar-Terme sind gesetzt und verweisen auf vorhandene Glossar-IDs.
7. Quellen sind spezifisch genug fuer das Thema, nicht nur allgemeine
   Lernfeld-Quellen.
8. Desktop- und Mobile-Stichprobe zeigen keine offensichtlichen Lesbarkeits-
   oder Layoutprobleme.
9. `REVIEW_LOG.md` dokumentiert Pruefer, Datum, Quellen, kritische Aussagen und
   Build/Lint-Ergebnis.

## Arbeitsregel

Neue Kapitel duerfen schnell entstehen. Statusaufstiege sind langsam:

- `stub` zu `draft`: Inhaltliche Grundstruktur steht.
- `draft` zu `ready`: Automatischer Ready-Standard ohne Kapitelwarnung.
- `ready` zu `final`: Manuelles Review-Gate plus technische Checks.

Wenn ein Kapitel als `ready` markiert ist, aber noch Warnungen hat, wird es
entweder repariert oder wieder auf `draft` zurueckgestuft.
