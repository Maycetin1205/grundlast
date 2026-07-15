# Design-Brief fuer Claude Code: Grundlast visuell neu ordnen

Stand: 14.07.2026

## Auftrag

Ueberarbeite die bestehende Oberflaeche zu einer ruhigen, modernen und
hochwertigen Lernanwendung. Der aktuelle Stand wirkt wie eine Mischung aus
Audit-Dashboard, Verwaltungsoberflaeche und mehreren nicht ganz
zusammenpassenden Designsystemen. Das Redesign soll die App wieder wie einen
Ort zum Lernen wirken lassen.

Das ist ein **Implementierungsauftrag**. Nicht nur analysieren oder einen Plan
schreiben, sondern die Oberflaeche im bestehenden React-/Vite-Projekt
ueberarbeiten und im Browser verifizieren.

## Prioritaeten

1. **Lernen vor Projektverwaltung.** Dashboard, Navigation und Kapitel sollen
   zuerst Orientierung, naechsten Lernschritt und Lesbarkeit vermitteln.
   Interne Begriffe wie Audit, Statuswelten, alt/offen oder technische
   Freigabestufen duerfen nicht die visuelle Hauptbotschaft sein. Fachlich
   notwendige Inhaltswarnungen bleiben wahr, werden aber dezent dargestellt.
2. **Eine klare visuelle Sprache.** Typografie, Abstaende, Farben, Radien,
   Flaechen, Rahmen, Buttons, Badges und Karten konsolidieren. Den derzeitigen
   Mix aus grossen Legacy-CSS-Komponenten und lokalen Tailwind-Entscheidungen
   sichtbar beruhigen.
3. **Gute Leseflaeche.** Kapitel sind das Kernprodukt. Fliesstext braucht eine
   angenehme Zeilenlaenge, klare Hierarchie, grosszuegigen Rhythmus und
   konsistente Tabellen, Codebloecke, Hinweise und interaktive Werkzeuge.
4. **Weniger Dashboard-Optik.** Kreisdiagramme, KPI-Kacheln, Statuszaehler und
   zahlreiche kleine Badges nur dort verwenden, wo sie Lernenden wirklich
   helfen. Keine Kontrollzentrale als Startseite.
5. **Responsiv und robust.** Desktop, Tablet und Mobilansicht muessen bewusst
   gestaltet sein; kein horizontales Seiten-Scrolling, keine abgeschnittenen
   Tabellen oder unlesbaren Diagramme.

## Gewuenschte Richtung

- Zeitgemaess, klar, freundlich und serioes; keine sterile Corporate-App und
  kein verspieltes Schulportal.
- Sans-Serif als gut lesbare Grundschrift. Eine charaktervolle Display-Schrift
  nur gezielt fuer grosse Ueberschriften, wenn sie das Gesamtbild verbessert.
- Ruhige neutrale Grundflaechen mit einer kontrollierten Akzentfarbe.
- Weniger Rahmen und Karten-in-Karten; Hierarchie staerker ueber Abstand,
  Typografie und Flaechen aufbauen.
- Interaktionen klar und tastaturbedienbar; sichtbare Focus-States beibehalten.
- Light und Dark Mode als gleichwertige Ansichten behandeln.
- Keine zur Laufzeit benoetigten Google-Font-Requests. Vorhandene lokale
  `@fontsource`-Pakete nutzen oder Fonts sauber lokal einbinden.

## Konkrete Oberflaechen

### Navigation und Layout

- Die feste Sidebar ist mit 344 px sehr dominant. Breite, Dichte und
  Informationshierarchie neu bewerten.
- Top-Level-Navigation klar von der umfangreichen Kapitelstruktur trennen.
- Suche leicht auffindbar halten.
- Lernfelder/Kapitel scannbar machen, ohne jede Zeile mit Statusinformationen
  zu ueberladen.
- Mobile Navigation als echte mobile Oberflaeche pruefen, nicht nur als
  verkleinerte Desktop-Sidebar.

### Dashboard

- Eine klare primaere Aktion: sinnvoll weiterlernen oder Lernpfad oeffnen.
- Auditfortschritt nicht als persoenliche Lernbeherrschung darstellen und
  visuell nicht dominieren lassen.
- Zahlreiche KPI-Ringe und Verwaltungsformulierungen reduzieren oder durch
  eine ruhigere, lernorientierte Zusammenfassung ersetzen.
- Lernfelder und Empfehlungen schneller erfassbar machen.

### Kapitelansicht

- Lesespalte auf eine angenehme Breite begrenzen; interaktive Werkzeuge und
  breite Tabellen duerfen kontrolliert weiter reichen.
- Kapitelkopf, Breadcrumb, Metadaten und Inhaltsaudit deutlich vereinfachen.
- H2/H3, Listen, Tabellen, Inline-Code, Codebloecke, Quellen, Tipps,
  Warnungen, Analogien und Werkzeuge als zusammenhaengendes System gestalten.
- Lange Kapitel muessen ruhig und lesbar bleiben; nicht jeden Abschnitt mit
  starken Linien oder Boxen abtrennen.

### Lernpfad, AP1, Pruefen, Glossar, Quellen und Werkzeuge

- Dieselbe visuelle Grammatik wie Dashboard und Kapitel verwenden.
- Prioritaet auf Orientierung und Handlungsmoeglichkeiten statt Statusdichte.
- Leere oder noch nicht implementierte Funktionen ehrlich und ansprechend
  darstellen; keine scheinbar fertige Pruefungsplattform vortaeuschen.

## Technische Leitplanken

- Bestehende Routen, Inhalte, Slugs und Datenmodelle beibehalten.
- Keine Fachtexte, Auditwerte, Quellen, Glossareintraege oder Queue-Audits
  nebenbei umschreiben.
- Keine komplette Framework-Migration und keine neue UI-Bibliothek nur fuer
  das Redesign einfuehren.
- Vorhandene Radix-/Lucide-/Tailwind-Mittel koennen weiter genutzt werden.
- Design-Tokens in `src/styles/tokens.css` konsolidieren und danach
  Komponenten schrittweise angleichen.
- Bestehende fremde WIP-Aenderungen im schmutzigen Arbeitsbaum nicht
  ueberschreiben.

## Visuelle Abnahme

Im lokalen Browser mindestens diese Ansichten pruefen:

- Dashboard
- ein langes Kapitel mit Tabellen und Werkzeugen, bevorzugt
  `zahlensysteme`
- Lernpfad
- AP1-Ansicht
- Glossar oder Quellen

Jeweils mindestens in:

- Desktop etwa 1440 x 900
- Mobil etwa 390 x 844
- Light Mode und Dark Mode

Dabei gezielt pruefen:

- visuelle Hierarchie und Lesefluss
- Kontrast, Hover und Tastatur-Focus
- Sidebar/Mobilnavigation
- horizontales Overflow
- Tabellen, Code, Hinweise und interaktive Werkzeuge
- konsistente Abstaende und Typografie zwischen den Routen

Nach dem ersten Durchgang nicht sofort aufhoeren: Screenshots ansehen,
sichtbare Schwachstellen korrigieren und erneut pruefen.

## Technische Abnahme

- `npm.cmd run lint`
- `npm.cmd run test`
- `npm.cmd run build`
- Falls der bekannte lokale `py`-Launcher fehlt: Konsistenzskript mit der
  verfuegbaren Python-Laufzeit direkt ausfuehren, danach `npx.cmd tsc -b` und
  `npx.cmd vite build`; den Launcherfehler exakt dokumentieren.

## Fertig, wenn

- Dashboard, Navigation, Kapitel und mindestens die genannten Nebenrouten wie
  eine zusammenhaengende Anwendung aussehen.
- Die Oberflaeche klar lernorientiert statt audit-/verwaltungsorientiert ist.
- Desktop und Mobil sowie Light und Dark Mode sichtbar geprueft wurden.
- Keine Inhalte oder fachlichen Statuswerte unbeabsichtigt geaendert wurden.
- Lint, Tests und Build bzw. der dokumentierte Build-Fallback gruen sind.
- Claude Code am Ende die veraenderten UI-Dateien, die visuell geprueften
  Ansichten und verbleibende echte Designprobleme knapp auflistet.

