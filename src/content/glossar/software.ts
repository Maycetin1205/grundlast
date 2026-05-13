import type { GlossarEintrag } from "../../lib/glossar/types"

export const software: GlossarEintrag[] = [
  {
      id: 'algorithmus',
      begriff: 'Algorithmus',
      kurzdefinition: 'Ein Algorithmus ist eine endliche, deterministische Folge von Anweisungen zur Loesung eines Problems.',
      definition: [
        'Ein Algorithmus beschreibt eindeutig, welche Schritte bei welcher Eingabe ausgefuehrt werden. Endlich bedeutet, dass der Ablauf terminieren muss. Deterministisch bedeutet, dass gleiche Eingaben zum gleichen Ablauf und Ergebnis fuehren.',
        'In der AP1 begegnen Algorithmen meist als Pseudocode, Programmablaufplan oder Struktogramm. Entscheidend ist nicht die konkrete Programmiersprache, sondern ob Eingabe, Verarbeitung, Ausgabe und Kontrollfluss sauber nachvollziehbar sind.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
  {
      id: 'pseudocode',
      begriff: 'Pseudocode',
      kurzdefinition: 'Pseudocode ist eine sprachneutrale, menschenlesbare Schreibweise für Algorithmen.',
      definition: [
        'Pseudocode liegt zwischen Alltagssprache und Programmiersprache. Er ist frei von konkreter Syntax einer Sprache, muss aber so genau sein, dass ein Ablauf geprueft und spaeter implementiert werden kann.',
        'Pruefungsrelevant ist vor allem das Lesen und Nachverfolgen: Variablenwerte aendern, Bedingungen entscheiden Zweige, Schleifen wiederholen Blöcke, und am Ende muss die Ausgabe stimmen.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
  {
      id: 'sequenz',
      begriff: 'Sequenz',
      kurzdefinition: 'Sequenz bedeutet, dass Anweisungen nacheinander in der geschriebenen Reihenfolge ausgefuehrt werden.',
      definition: [
        'Die Sequenz ist die einfachste Kontrollstruktur: erst Schritt 1, dann Schritt 2, dann Schritt 3. Jede Zuweisung kann den bisherigen Wert einer Variable überschreiben.',
        'Beim Schreibtischtest ist Sequenz die Grundregel. Du gehst Zeile für Zeile weiter und notierst nach jeder wirksamen Anweisung den neuen Zustand.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
  {
      id: 'selektion',
      begriff: 'Selektion',
      kurzdefinition: 'Selektion ist eine Auswahlstruktur: Eine Bedingung entscheidet, welcher Zweig ausgefuehrt wird.',
      definition: [
        'Typische Formen sind WENN/DANN, WENN/DANN/SONST und SONST-WENN-Ketten. Die Bedingung wird zu wahr oder falsch ausgewertet; danach läuft nur der passende Zweig.',
        'Pruefungsfalle: Bei einer SONST-WENN-Kette wird von oben nach unten geprueft. Sobald eine Bedingung wahr ist, werden die spaeteren Alternativen nicht mehr ausgefuehrt.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
  {
      id: 'iteration',
      begriff: 'Iteration',
      kurzdefinition: 'Iteration wiederholt einen Anweisungsblock, solange eine Zaehllogik oder Bedingung es verlangt.',
      definition: [
        'Iteration ist die allgemeine Bezeichnung für Wiederholung im Kontrollfluss. Dazu gehören FOR-Schleifen mit bekannter Anzahl, WHILE-Schleifen mit Vorbedingung und REPEAT-UNTIL-Schleifen mit Nachbedingung.',
        'In AP1-Aufgaben zeigt eine Iteration meist eine Summe, ein Maximum, einen Zaehler, eine Suche oder eine Eingabewiederholung. Die Grenze der Wiederholung ist dabei fast immer der kritische Punkt.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
  {
      id: 'schleife',
      begriff: 'Schleife',
      kurzdefinition: 'Eine Schleife ist eine Kontrollstruktur, die denselben Block mehrfach ausführt.',
      definition: [
        'Schleifen arbeiten mit einer Bedingung oder einem Zaehler. FOR eignet sich für bekannte Durchlaufzahlen, WHILE für Wiederholung solange eine Bedingung gilt, REPEAT-UNTIL für mindestens einen Durchlauf.',
        'Typische Fehler sind Off-by-One-Grenzen, fehlende Aktualisierung des Zaehlerwerts und Schleifenbedingungen, die nie falsch werden.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
  {
      id: 'bedingung',
      begriff: 'Bedingung',
      kurzdefinition: 'Eine Bedingung ist ein Ausdruck, der zu wahr oder falsch ausgewertet wird.',
      definition: [
        'Bedingungen entstehen aus Vergleichen und logischen Operatoren, zum Beispiel alter >= 18 oder rolle = "Admin" UND aktiv = wahr. Sie steuern Selektion und Iteration.',
        'Beim Schreibtischtest musst du Bedingungen explizit auswerten. Erst wenn wahr oder falsch feststeht, ist klar, welcher Zweig oder ob ein weiterer Schleifendurchlauf erfolgt.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
  {
      id: 'variable',
      begriff: 'Variable',
      kurzdefinition: 'Eine Variable ist ein benannter Speicherplatz für einen Wert, der sich im Ablauf aendern kann.',
      definition: [
        'Variablen machen Zwischenergebnisse greifbar: summe, max, i, gefunden oder anzahlFehler. Eine Zuweisung schreibt einen neuen Wert in die Variable und ersetzt den alten Wert.',
        'Gute Variablennamen zeigen die Absicht. In der Pruefung helfen sie dir, Summen, Zaehler, Flags und aktuelle Listenelemente sauber auseinanderzuhalten.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
  {
      id: 'datentyp',
      begriff: 'Datentyp',
      kurzdefinition: 'Ein Datentyp beschreibt, welche Art von Wert vorliegt und welche Operationen sinnvoll sind.',
      definition: [
        'Typische AP1-Datentypen sind int für ganze Zahlen, float für Kommazahlen, string für Text und bool für wahr/falsch. Der Datentyp beeinflusst Vergleiche, Rechenoperationen und Ausgaben.',
        'Pruefungsfalle: Ein Durchschnitt ist meist ein float, auch wenn die Eingabewerte ganze Zahlen sind. Wird eine Kommazahl ungewollt als int behandelt, kann das Ergebnis abgeschnitten werden.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
  {
      id: 'schreibtischtest',
      begriff: 'Schreibtischtest',
      kurzdefinition: 'Ein Schreibtischtest führt Pseudocode von Hand Zeile für Zeile aus.',
      definition: [
        'Beim Schreibtischtest spielst du Computer: Du liest jede Anweisung, pruefst Bedingungen, fuehrst den passenden Zweig aus und schreibst neue Variablenwerte in eine Trace-Tabelle.',
        'Diese Methode findet Grenzfehler, falsche Initialisierung und verwechselt Zuweisung mit Vergleich. In der AP1 ist sie eine Standardform für Pseudocode-Aufgaben.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
  {
      id: 'eva-prinzip',
      begriff: 'EVA-Prinzip',
      kurzdefinition: 'Das EVA-Prinzip strukturiert Algorithmen in Eingabe, Verarbeitung und Ausgabe.',
      definition: [
        'EVA hilft beim Entwurf von Pseudocode: Zuerst klaerst du, welche Daten hineinkommen, dann welche Verarbeitungsschritte nötig sind, und am Ende, welche Ausgabe erwartet wird.',
        'In Pruefungsaufgaben ist EVA auch ein Kontrollwerkzeug. Fehlt die Eingabe, ist der Algorithmus nicht startbar. Fehlt die Ausgabe, bleibt unklar, was die Loesung liefern soll.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
  {
      id: 'off-by-one',
      begriff: 'Off-by-One',
      kurzdefinition: 'Off-by-One ist ein Grenzfehler um genau einen Index oder Schleifendurchlauf.',
      definition: [
        'Der Fehler entsteht, wenn Anfang, Ende oder Vergleichsoperator einer Schleife um eins danebenliegen. Bei Listen ist der letzte Index bei Laenge n meist n - 1, nicht n.',
        'Pruefungsrelevant sind vor allem FOR-Schleifen und WHILE-Bedingungen mit <, <=, > oder >=. Ein Mini-Trace mit den ersten und letzten zwei Durchlaeufen findet den Fehler schnell.',
      ],
      kapitel: {
        titel: 'Pseudocode, Algorithmen & Kontrollstrukturen',
        href: '/lernen/software/logik/pseudocode-einstieg',
      },
    },
]
