import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BookMarked } from 'lucide-react'
import { useGlossarStore } from '../lib/glossar'
import type { GlossarEintrag } from '../lib/glossar'

export default function Glossary() {
  const location = useLocation()
  const einträge = useGlossarStore((state) => state.einträge)
  const entries = Object.values(einträge).sort((a, b) =>
    a.begriff.localeCompare(b.begriff, 'de'),
  )

  const grouped = entries.reduce<Record<string, GlossarEintrag[]>>((acc, eintrag) => {
    const letter = eintrag.begriff[0]?.toUpperCase() ?? '#'
    if (!acc[letter]) acc[letter] = []
    acc[letter].push(eintrag)
    return acc
  }, {})

  const letters = Object.keys(grouped).sort((a, b) => a.localeCompare(b, 'de'))

  useEffect(() => {
    if (!location.hash) return
    const targetId = decodeURIComponent(location.hash.slice(1))
    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: 'start' })
    })
  }, [entries.length, location.hash])

  return (
    <article>
      <div className="topbar">
        <div className="crumbs">
          <Link to="/" className="no-underline" style={{ color: 'inherit' }}>
            Lernhaus
          </Link>
          <span className="sep">/</span>
          <span className="now">Glossar</span>
        </div>
        <div className="streak">
          <BookMarked size={14} aria-hidden="true" />
          <b>{entries.length}</b> Begriffe registriert
        </div>
      </div>

      <section className="hero">
        <div className="hero-card">
          <div className="hero-greet">Fachbegriffe · zentral gepflegt</div>
          <h1 className="hero-title">
            Das <em>Glossar</em> als Single Source.
          </h1>
          <p className="hero-sub">
            Alle Term-Tooltips in den Lektionen greifen auf dasselbe Register
            zu. Hier findest du jeden registrierten Begriff alphabetisch, mit
            Kurzdefinition und Sprung zur Quell-Lektion.
          </p>
        </div>

        <div className="hero-side">
          <div className="kpi">
            <div>
              <div className="kpi-lbl">Begriffe</div>
              <div className="kpi-val">{entries.length}</div>
            </div>
            <div className="kpi-meta">aus laufender Stub-Befüllung</div>
          </div>
          <div className="kpi">
            <div>
              <div className="kpi-lbl">Bereiche</div>
              <div className="kpi-val">
                {letters.length}
                <small> Buchstaben</small>
              </div>
            </div>
            <div className="kpi-meta">
              {entries.length === 0
                ? 'noch keine Einträge registriert'
                : `${(entries.length / Math.max(letters.length, 1)).toFixed(1)} im Schnitt pro Buchstabe`}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sec-head">
          <h2 className="sec-title">
            Alle <em>Begriffe</em>
          </h2>
          <div className="sec-meta">{entries.length} · alphabetisch</div>
        </div>

        {letters.length === 0 ? (
          <div
            className="border-l-4 border-rule bg-paper-deep px-8 py-7 font-ui text-sm text-muted"
            style={{ borderRadius: 'var(--r-md)' }}
          >
            Es sind noch keine Glossar-Einträge registriert. Kapitel mit
            <code className="mx-1">Term</code>-Tags befüllen das Register
            automatisch — Stand: in Arbeit.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {letters.map((letter) => (
              <div key={letter}>
                <div className="mb-3 flex items-baseline gap-3">
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontVariationSettings: '"opsz" 144, "SOFT" 100',
                      fontStyle: 'italic',
                      fontSize: '1.6rem',
                      lineHeight: 1,
                      color: 'var(--color-accent)',
                    }}
                  >
                    {letter}
                  </span>
                  <span
                    className="font-mono uppercase text-ink-3"
                    style={{ fontSize: 10.5, letterSpacing: '0.12em' }}
                  >
                    {grouped[letter].length}{' '}
                    {grouped[letter].length === 1 ? 'Eintrag' : 'Einträge'}
                  </span>
                </div>

                <ul
                  style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    display: 'grid',
                    gap: 1,
                    background: 'var(--color-rule)',
                    border: '1px solid var(--color-rule)',
                    borderRadius: 'var(--r-lg)',
                    overflow: 'hidden',
                  }}
                >
                  {grouped[letter].map((eintrag) => (
                    <li
                      key={eintrag.id}
                      id={eintrag.id}
                      style={{
                        background: 'var(--color-paper)',
                        scrollMarginTop: 24,
                      }}
                    >
                      <Link
                        to={eintrag.kapitel.href}
                        className="no-underline"
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'minmax(160px, 200px) 1fr',
                          alignItems: 'baseline',
                          gap: 18,
                          padding: '14px 22px',
                          color: 'inherit',
                          transition: 'background 0.15s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--color-bg-2)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent'
                        }}
                      >
                        <div
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontVariationSettings: '"opsz" 144, "SOFT" 30',
                            fontWeight: 500,
                            fontSize: '1rem',
                            color: 'var(--color-ink)',
                          }}
                        >
                          {eintrag.begriff}
                        </div>
                        <div>
                          <p
                            className="m-0 font-body leading-relaxed"
                            style={{ fontSize: 13.5, color: 'var(--color-ink-2)' }}
                          >
                            {eintrag.kurzdefinition}
                          </p>
                          <p
                            className="m-0 mt-1 font-mono uppercase text-ink-3"
                            style={{ fontSize: 10.5, letterSpacing: '0.06em' }}
                          >
                            → {eintrag.kapitel.titel}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>
    </article>
  )
}
