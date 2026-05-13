import { Link } from 'react-router-dom'
import { Wrench } from 'lucide-react'

interface Tool {
  code: string
  title: string
  blurb: string
  voraussetzung: string
  color: string
}

const tools: Tool[] = [
  {
    code: 'T.1',
    title: 'Zahlensystem-Rechner',
    blurb:
      'Konvertiert zwischen Dezimal, Binär, Oktal und Hexadezimal mit schrittweisem Rechenweg über StepByStep.',
    voraussetzung: 'Kapitel Zahlensysteme',
    color: 'sky',
  },
  {
    code: 'T.2',
    title: 'Subnetting-Rechner',
    blurb:
      'Aus IP plus Maske oder Präfix Netz, Broadcast, Hostbereich und Magic Number berechnen, mit Rechenweg.',
    voraussetzung: 'Schritt 2.5 · Netzwerkkonfiguration',
    color: 'teal',
  },
  {
    code: 'T.3',
    title: 'Netzplan-Rechner',
    blurb:
      'Vorgangsliste eingeben, FAZ, FEZ, SAZ, SEZ und Gesamtpuffer ableiten, kritischen Pfad markieren.',
    voraussetzung: 'Schritt 2.10 · Projektplanung',
    color: 'olive',
  },
  {
    code: 'T.4',
    title: 'Nutzwertanalyse-Rechner',
    blurb:
      'Kriterien gewichten, Alternativen bewerten, gewichtete Summen und Empfehlung darstellen.',
    voraussetzung: 'Schritt 2.21 · Nutzwertanalyse',
    color: 'forest',
  },
  {
    code: 'T.5',
    title: 'Backup-Strategie-Visualisierer',
    blurb:
      'Voll-, differenzielle und inkrementelle Backups als Timeline mit Recovery-Simulation.',
    voraussetzung: 'Schritt 2.19 · Backup und RAID',
    color: 'plum',
  },
  {
    code: 'T.6',
    title: 'AfA-Abschreibungsrechner',
    blurb:
      'Lineare Abschreibung mit Jahrestabelle, Restbuchwert und Rechenweg pro Jahr.',
    voraussetzung: 'Kapitel AfA / Abschreibung',
    color: 'sand',
  },
  {
    code: 'T.7',
    title: 'Verfügbarkeits-Rechner (SLA)',
    blurb:
      'Aus MTBF und MTTR Verfügbarkeit in Prozent und Neunen-Klasse ableiten.',
    voraussetzung: 'Kapitel SLA / Verfügbarkeit',
    color: 'rose',
  },
]

export default function Tools() {
  const total = tools.length

  return (
    <article>
      <div className="topbar">
        <div className="crumbs">
          <Link to="/" className="no-underline" style={{ color: 'inherit' }}>
            Lernhaus
          </Link>
          <span className="sep">/</span>
          <span className="now">Werkzeuge</span>
        </div>
        <div className="streak">
          <Wrench size={14} aria-hidden="true" />
          <b>{total}</b> Module geplant
        </div>
      </div>

      <section className="hero">
        <div className="hero-card">
          <div className="hero-greet">Phase 2T · Werkzeuge geplant</div>
          <h1 className="hero-title">
            Werkzeuge <em>in Planung</em>.
          </h1>
          <p className="hero-sub">
            Diese Seite ist eine Roadmap fuer spaetere Rechner und Visualisierer.
            Aktuell sind die Module bewusst als geplant markiert und noch keine
            freigegebenen Lernwerkzeuge.
          </p>
          <div className="hero-cta">
            <Link to="/" className="btn btn-ghost no-underline">
              Zur Übersicht
            </Link>
          </div>
        </div>

        <div className="hero-side">
          <div className="kpi">
            <div>
              <div className="kpi-lbl">Geplante Module</div>
              <div className="kpi-val">
                {total}
                <small> Tools</small>
              </div>
            </div>
            <div className="kpi-meta">je eigene Route unter /tools/…</div>
          </div>
          <div className="kpi">
            <div>
              <div className="kpi-lbl">Status</div>
              <div className="kpi-val">
                0<small>% fertig</small>
              </div>
            </div>
            <div className="kpi-meta">in Arbeit · Implementierung folgt nach Phase 2</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sec-head">
          <h2 className="sec-title">
            Geplante <em>Werkzeuge</em>
          </h2>
          <div className="sec-meta">7 Module · sortiert nach Schritt-Nummer</div>
        </div>
        <div className="lf-grid">
          {tools.map((t) => (
            <article
              key={t.code}
              className="lf-card"
              style={{
                cursor: 'default',
                ['--c' as string]: `var(--color-c-${t.color})`,
              }}
            >
              <div className="lf-top">
                <span className="lf-code">{t.code}</span>
                <span
                  className="lf-badge"
                  style={{
                    background: 'var(--color-bg-2)',
                    color: 'var(--color-ink-3)',
                    border: '1px solid var(--color-rule)',
                  }}
                >
                  geplant
                </span>
              </div>
              <h3 className="lf-title">{t.title}</h3>
              <p
                className="font-body m-0 leading-relaxed"
                style={{
                  fontSize: 13,
                  color: 'var(--color-ink-2)',
                  marginTop: 8,
                  marginBottom: 'auto',
                }}
              >
                {t.blurb}
              </p>
              <div className="lf-foot">
                <span>{t.voraussetzung}</span>
                <span style={{ fontFamily: 'var(--font-mono)' }}>Phase 2T</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </article>
  )
}
