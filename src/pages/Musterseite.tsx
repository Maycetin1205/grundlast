import { Binary, BookOpen, Network } from 'lucide-react'
import Analogie from '../components/content/Analogie'
import Beispiel from '../components/content/Beispiel'
import Breadcrumb from '../components/content/Breadcrumb'
import ChapterFooter from '../components/content/ChapterFooter'
import Divider from '../components/content/Divider'
import Formel from '../components/content/Formel'
import Glossar from '../components/content/Glossar'
import MetaBar from '../components/content/MetaBar'
import MonoBox from '../components/content/MonoBox'
import Quellen from '../components/content/Quellen'
import Schritt from '../components/content/Schritt'
import Schritte from '../components/content/Schritte'
import Section from '../components/content/Section'
import StepByStep, { Ergebnis } from '../components/content/StepByStep'
import Term from '../components/content/Term'
import Tipp from '../components/content/Tipp'
import Warnung from '../components/content/Warnung'

export default function Musterseite() {
  return (
    <article className="text-ink">
      <Breadcrumb items={['Kompendium', 'Lernfeld 2', 'Zahlensysteme']} />
      <h1>Zahlensysteme als Content-Probe</h1>
      <p className="mt-6 max-w-2xl font-body text-xl italic leading-relaxed text-muted">
        Diese Seite zeigt die Basis-Komponenten in einem Kapitelkontext. Die Inhalte sind kurz gehalten,
        damit Form, Abstand und Typografie der Bausteine sichtbar werden.
      </p>

      <MetaBar
        lesezeit="12 min"
        schwierigkeit="mittel"
        lernfeld="LF 2"
        pruefungsrelevanz="hoch relevant"
      />

      <Section nr="01" titel="Warum existiert das überhaupt?">
        <p>
          Computer speichern Zustände als elektrische Signale. Für dich wird daraus ein Zahlensystem:
          erst Bits, dann Bytes, dann Adressen, Dateien und Protokolle.
        </p>

        <Analogie icon={<Binary size={18} strokeWidth={2} />}>
          <strong>Analogie: Kilometerzähler im Auto.</strong> Wenn eine Stelle voll ist, springt sie
          zurück auf null und die nächste Stelle links zählt eins weiter. Genau so verhält sich auch
          ein Stellenwertsystem.
        </Analogie>

        <Tipp titel="Prüfungsblick">
          Schreibe bei Umrechnungen immer die Potenzen über die Stellen. Das kostet wenig Zeit und
          macht Vorzeichen- oder Stellenfehler sofort sichtbar.
        </Tipp>

        <Warnung titel="Typische Falle">
          Eine führende Null verändert den Wert nicht, kann aber die Byte-Grenze markieren. In der
          Prüfung ist dieser Unterschied häufig relevant.
        </Warnung>

        <Beispiel titel="Term-Demo: Fachbegriffe im Lesefluss" label="TERM-DEMO">
          <p>
            Ein <Term id="bit">Bit</Term> ist die kleinste Einheit. Acht davon ergeben ein{' '}
            <Term id="byte">Byte</Term>. Beim Umrechnen entscheidet der{' '}
            <Term id="stellenwert">Stellenwert</Term>, wie stark eine einzelne Ziffer zählt.
          </p>
        </Beispiel>
      </Section>

      <Divider />

      <Section nr="02" titel="Die Mechanik">
        <Schritte
          items={[
            {
              titel: 'Stellen von rechts nach links nummerieren',
              text: 'Die rechte Stelle hat den Exponenten 0. Danach steigen die Exponenten jeweils um eins.',
            },
            {
              titel: 'Ziffer mit Stellenwert multiplizieren',
              text: 'Bei Binärzahlen ist jeder Stellenwert eine Potenz von 2. Eine 1 zählt, eine 0 zählt nicht.',
            },
            {
              titel: 'Teilwerte addieren',
              text: 'Die Summe der aktiven Stellen ergibt den Dezimalwert.',
            },
          ]}
        />

        <Beispiel titel="10110101₂ in Dezimal umrechnen">
          <p>
            Die Einsen stehen bei 128, 32, 16, 4 und 1. Diese Teilwerte werden addiert.
          </p>
          <Formel ariaLabel="Binaerzahl 10110101 in Dezimal umgerechnet">
            128 + 32 + 16 + 4 + 1 = 181
          </Formel>
          <p>
            Das Ergebnis lautet also 181₁₀.
          </p>
        </Beispiel>

        <Formel ariaLabel="Allgemeine Stellenwertformel">
          Wert = Ziffer × Basis^Stelle
        </Formel>

        <MonoBox label="Rechenweg">
{`10110101_2
= 1*128 + 0*64 + 1*32 + 1*16 + 0*8 + 1*4 + 0*2 + 1*1
= 181_10`}
        </MonoBox>
      </Section>

      <Divider />

      <Section nr="03" titel="Step-by-Step Rechenweg">
        <p>
          Die Dezimalzahl 13 wird fortlaufend durch 2 geteilt. Die Reste werden am Ende
          von unten nach oben gelesen.
        </p>

        <StepByStep titel="13 dezimal in binär umrechnen">
          <Schritt nr={1} titel="Erste Division">
            <p>
              13 / 2 = 6, Rest <strong>1</strong>. Dieser Rest ist das niedrigste Bit.
            </p>
          </Schritt>
          <Schritt nr={2} titel="Zweite Division">
            <p>
              6 / 2 = 3, Rest <strong>0</strong>.
            </p>
          </Schritt>
          <Schritt nr={3} titel="Dritte Division">
            <p>
              3 / 2 = 1, Rest <strong>1</strong>.
            </p>
          </Schritt>
          <Schritt nr={4} titel="Letzte Division">
            <p>
              1 / 2 = 0, Rest <strong>1</strong>. Dieser Rest ist das höchste Bit.
            </p>
          </Schritt>
          <Ergebnis>
            <p>
              Die Reste ergeben von unten nach oben gelesen <strong>1101_2</strong>.
              Damit gilt: <strong>13_10 = 1101_2</strong>.
            </p>
          </Ergebnis>
        </StepByStep>
      </Section>

      <Glossar
        eintraege={[
          {
            term: 'Basis',
            definition: 'Anzahl der Ziffern eines Stellenwertsystems. Im Binärsystem ist die Basis 2.',
          },
          {
            term: 'Bit',
            definition: 'Kleinste Informationseinheit. Ein Bit kann den Wert 0 oder 1 annehmen.',
          },
          {
            term: 'Byte',
            definition: 'Gruppe aus acht Bit. Viele Speicher- und Dateigrößen werden darauf aufgebaut.',
          },
          {
            term: 'Stellenwert',
            definition: 'Wert, den eine Position innerhalb einer Zahl besitzt, zum Beispiel 2^4 bei Binärzahlen.',
          },
        ]}
      />

      <Quellen
        quellen={[
          {
            label: 'KMK Rahmenlehrplan Fachinformatiker',
            href: 'https://www.kmk.org/themen/berufliche-schulen/duale-berufsausbildung/downloadbereich-rahmenlehrplaene.html',
            detail: 'Lernfelder und Kompetenzorientierung',
          },
          {
            label: 'BIBB Umsetzungshilfen IT-Berufe',
            href: 'https://www.bibb.de/de/berufeinfo.php/profile/apprenticeship/261016',
            detail: 'Einordnung der Ausbildungsordnung',
          },
          {
            label: 'IT-Berufe-Ausbildungsverordnung',
            href: 'https://www.gesetze-im-internet.de/itktausbv/BJNR025000020.html',
            detail: 'offizielle Ausbildungsordnung',
          },
          {
            label: 'IEEE 754-2019',
            href: 'https://standards.ieee.org/standard/754-2019.html',
            detail: 'Standard für Gleitkommazahlen',
          },
          {
            label: 'Elektronik-Kompendium: Zahlensysteme',
            href: 'https://www.elektronik-kompendium.de/sites/dig/0206211.htm',
            detail: 'Vertiefung zu Dual- und Hexadezimalsystem',
          },
        ]}
      />

      <ChapterFooter
        previous={{ label: 'Dashboard', to: '/' }}
        next={{ label: 'Glossar', to: '/glossar' }}
      />

      <div className="mt-12 flex items-center gap-3 border-t border-rule pt-6 font-ui text-sm text-muted">
        <BookOpen className="h-4 w-4 text-accent" aria-hidden="true" />
        <span>Alle Content-Komponenten aus Schritt 0.2 sind auf dieser Seite sichtbar.</span>
        <Network className="h-4 w-4 text-accent" aria-hidden="true" />
      </div>
    </article>
  )
}
