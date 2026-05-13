import { Link } from 'react-router-dom'
import { ClipboardCheck } from 'lucide-react'
import { isLessonAvailable, lernfelder } from '../lib/toc'

interface Mode {
  code: string
  title: string
  blurb: string
  voraussetzung: string
  color: string
}

const modes: Mode[] = [
  {
    code: 'M.1',
    title: 'Themen-Drill',
    blurb:
      'Aufgabe wählen, selbst beantworten, Lösung aufdecken. Kein Timer, voller Fokus auf einem Thema. Wiederholungen werden für Spaced Repetition vorgemerkt.',
    voraussetzung: 'Schritt 3.1 · Aufgaben-Datenmodell',
    color: 'teal',
  },
  {
    code: 'M.2',
    title: 'Klausur-Simulation',
    blurb:
      '90 Minuten, sechs bis acht Aufgaben, Gewichtung nach Heatmap. Punkteverteilung wie in der echten AP1; am Ende automatische Auswertung mit Schwächenprofil.',
    voraussetzung: 'Schritt 3.2 · Parametrische Generatoren',
    color: 'rose',
  },
  {
    code: 'M.3',
    title: 'Heatmap-Übersicht',
    blurb:
      'Matrix Themen × Prüfungen × Punkte, eingefärbt nach Häufigkeit. Klick öffnet die zugehörigen Aufgaben und vergangenen Versuche.',
    voraussetzung: 'Schritt 3.3 · Prüfungsmodus-UI',
    color: 'amber',
  },
]

export default function Exams() {
  let totalExam = 0
  let readyExam = 0
  for (const lf of lernfelder) {
    for (const modul of lf.moduls) {
      for (const lesson of modul.lessons) {
        if (!lesson.exam) continue
        totalExam += 1
        if (isLessonAvailable(lesson)) readyExam += 1
      }
    }
  }
  const readiness = totalExam ? Math.round((readyExam / totalExam) * 100) : 0

  return (
    <article>
      <div className="topbar">
        <div className="crumbs">
          <Link to="/" className="no-underline" style={{ color: 'inherit' }}>
            Lernhaus
          </Link>
          <span className="sep">/</span>
          <span className="now">Prüfen</span>
        </div>
        <div className="streak">
          <ClipboardCheck size={14} aria-hidden="true" />
          <b>{modes.length}</b> Modi geplant
        </div>
      </div>

      <section className="ap1-stage">
        <div className="ap1-eyebrow">
          <span className="pulse" />
          Phase 3 · Prüfungsmodul geplant
        </div>
        <h1 className="ap1-h1">
          Prüfungsmodul <em>in Planung</em>.
        </h1>
        <p className="hero-sub" style={{ maxWidth: '52ch' }}>
          Diese Seite dokumentiert den geplanten Prüfungsbereich. Sie ist noch
          keine freigegebene Klausur-Simulation und erzeugt aktuell keine
          bewertbaren Aufgaben.
        </p>

        <div className="ap1-stats">
          <div>
            <div className="ap1-stat-lbl">AP1-Bereitschaft</div>
            <div className="ap1-stat-val">
              {readiness}
              <small>%</small>
            </div>
          </div>
          <div>
            <div className="ap1-stat-lbl">Inhalt fertig</div>
            <div className="ap1-stat-val">
              {readyExam}
              <small>/{totalExam}</small>
            </div>
          </div>
          <div>
            <div className="ap1-stat-lbl">Modi geplant</div>
            <div className="ap1-stat-val">{modes.length}</div>
          </div>
          <div>
            <div className="ap1-stat-lbl">Aufgaben-Pool</div>
            <div className="ap1-stat-val">
              0<small>/15+</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sec-head">
          <h2 className="sec-title">
            Drei <em>Modi</em>
          </h2>
          <div className="sec-meta">Phase 3 · in Arbeit</div>
        </div>
        <div className="lf-grid">
          {modes.map((m) => (
            <article
              key={m.code}
              className="lf-card"
              style={{
                cursor: 'default',
                ['--c' as string]: `var(--color-c-${m.color})`,
              }}
            >
              <div className="lf-top">
                <span className="lf-code">{m.code}</span>
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
              <h3 className="lf-title">{m.title}</h3>
              <p
                className="font-body m-0 leading-relaxed"
                style={{
                  fontSize: 13,
                  color: 'var(--color-ink-2)',
                  marginTop: 8,
                  marginBottom: 'auto',
                }}
              >
                {m.blurb}
              </p>
              <div className="lf-foot">
                <span>{m.voraussetzung}</span>
                <span style={{ fontFamily: 'var(--font-mono)' }}>Phase 3</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sec-head">
          <h2 className="sec-title">
            Heatmap als <em>Grundlage</em>
          </h2>
          <div className="sec-meta">finalisiert in Schritt 1.3</div>
        </div>
        <div
          className="border-l-4 border-rule bg-paper-deep px-8 py-7 font-ui text-sm"
          style={{ borderRadius: 'var(--r-md)', color: 'var(--color-ink-2)' }}
        >
          <p className="m-0">
            Die Klausur-Simulation zieht Aufgaben gewichtet aus der Heatmap (Top-25
            Themen). Bis das Prüfungsmodul aktiv ist, dient die Heatmap unter
            <code className="mx-1">_workflow/HEATMAP.md</code> als Referenz für die
            Reihenfolge der Inhalts-Phase.
          </p>
        </div>
      </section>
    </article>
  )
}
