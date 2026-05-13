import type { GlossarEintrag } from "../../lib/glossar/types"

export const grundlagen: GlossarEintrag[] = [
  {
      id: 'bit',
      begriff: 'Bit',
      kurzdefinition: 'Ein Bit ist die kleinste Informationseinheit und kann den Wert 0 oder 1 annehmen.',
      definition: [
        'Bit steht für Binary Digit. Es beschreibt genau eine binare Entscheidung: 0 oder 1, aus oder an, falsch oder wahr.',
        'Mehrere Bits werden zu größeren Einheiten zusammengefasst. Acht Bits ergeben ein Byte und bilden die Grundlage für Speicher, Dateien und Datenübertragung.',
      ],
      kapitel: {
        titel: 'Bit & Byte - die kleinsten Einheiten',
        href: '/lernen/grundlagen/zahlen/bit-byte',
      },
    },
  {
      id: 'byte',
      begriff: 'Byte',
      kurzdefinition: 'Ein Byte besteht aus acht Bit und ist eine typische Grundeinheit für Speicherangaben.',
      definition: [
        'Ein Byte fasst acht Bits zusammen. Dadurch sind 256 verschiedene Bitmuster möglich, von 00000000 bis 11111111.',
        'Dateigroessen, Arbeitsspeicher und viele Protokollfelder werden in Byte oder Vielfachen davon angegeben.',
      ],
      kapitel: {
        titel: 'Bit & Byte - die kleinsten Einheiten',
        href: '/lernen/grundlagen/zahlen/bit-byte',
      },
    },
  {
      id: 'nibble',
      begriff: 'Nibble',
      kurzdefinition: 'Ein Nibble besteht aus vier Bit und entspricht genau einer Hexadezimalstelle.',
      definition: [
        'Ein Nibble ist die Haelfte eines Bytes. Vier Bits können 16 verschiedene Werte darstellen.',
        'Deshalb passt ein Nibble exakt zu einer Hexadezimalziffer von 0 bis F.',
      ],
      kapitel: {
        titel: 'Bit & Byte - die kleinsten Einheiten',
        href: '/lernen/grundlagen/zahlen/bit-byte',
      },
    },
  {
      id: 'ascii',
      begriff: 'ASCII',
      kurzdefinition: 'ASCII ist eine Zeichenkodierung, die Zeichen auf Zahlenwerte abbildet.',
      definition: [
        'ASCII steht für American Standard Code for Information Interchange. Der klassische ASCII-Code nutzt 7 Bit und ordnet Buchstaben, Ziffern und Steuerzeichen festen Zahlenwerten zu.',
        'In AP1-Aufgaben ist ASCII vor allem wichtig, wenn aus Bits, Bytes und Zeichen Speicherbedarf berechnet wird.',
      ],
      kapitel: {
        titel: 'Bit & Byte - die kleinsten Einheiten',
        href: '/lernen/grundlagen/zahlen/bit-byte',
      },
    },
  {
      id: 'basis',
      begriff: 'Basis',
      kurzdefinition: 'Die Basis gibt an, wie viele Ziffern ein Stellenwertsystem verwendet.',
      definition: [
        'Die Basis bestimmt die verfuegbaren Ziffern und die Stellenwerte eines Zahlensystems. Im Dezimalsystem ist die Basis 10, im Binrsystem 2 und im Hexadezimalsystem 16.',
        'Beim Umrechnen multiplizierst du jede Ziffer mit ihrer Basis hoch der jeweiligen Stelle.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'stellenwert',
      begriff: 'Stellenwert',
      kurzdefinition: 'Der Stellenwert beschreibt, welchen Wert eine Position innerhalb einer Zahl hat.',
      definition: [
        'Der Stellenwert ergibt sich aus Basis und Position. Rechts beginnt die Position 0, nach links steigt der Exponent jeweils um eins.',
        'Bei der Binaerzahl 1011 haben die Stellen von rechts nach links die Werte 1, 2, 4 und 8.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'binaersystem',
      begriff: 'Binrsystem',
      kurzdefinition: 'Das Binrsystem ist ein Stellenwertsystem mit der Basis 2.',
      definition: [
        'Das Binrsystem nutzt nur die Ziffern 0 und 1. Jede Stelle steht für eine Potenz von 2.',
        'Computer arbeiten intern mit binaeren Zustaenden, weil digitale Schaltungen zwei stabile Signalzustaende gut unterscheiden können.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
  {
      id: 'hexadezimal',
      begriff: 'Hexadezimal',
      kurzdefinition: 'Hexadezimal ist ein Stellenwertsystem mit der Basis 16.',
      definition: [
        'Das Hexadezimalsystem verwendet die Ziffern 0 bis 9 und die Buchstaben A bis F. Eine Hexadezimalstelle entspricht vier Bits.',
        'Es wird haeufig genutzt, um binaere Werte kompakter darzustellen, zum Beispiel bei Farben, Speicheradressen oder MAC-Adressen.',
      ],
      kapitel: {
        titel: 'Zahlensysteme (Dual, Hex, Dezimal)',
        href: '/lernen/grundlagen/zahlen/zahlensysteme',
      },
    },
]
