import { Link } from 'react-router-dom'
import { ExternalLink, Library } from 'lucide-react'
import { sourceBank } from '../lib/quellen'
import type { SourceEntry } from '../lib/quellen'

interface Group {
  code: string
  title: string
  tags: string[]
}

const groups: Group[] = [
  {
    code: 'Q.1',
    title: 'Ausbildung & Prüfung',
    tags: ['ordnung', 'ausbildung', 'lernfelder'],
  },
  {
    code: 'Q.2',
    title: 'IT-Sicherheit & Datenschutz',
    tags: ['sicherheit', 'krypto', 'dsgvo', 'datenschutz'],
  },
  {
    code: 'Q.3',
    title: 'Netzwerke & Protokolle',
    tags: ['netzwerk', 'ipv4', 'ipv6', 'tcp', 'udp', 'osi'],
  },
  {
    code: 'Q.4',
    title: 'Daten, Software & Web',
    tags: ['datenbank', 'software', 'web', 'uml', 'bpmn'],
  },
  {
    code: 'Q.5',
    title: 'Projekt, Wirtschaft & Recht',
    tags: ['projekt', 'wirtschaft', 'recht', 'service', 'sla'],
  },
]

function detectKind(href: string): string {
  if (href.includes('rfc-editor')) return 'RFC'
  if (href.includes('bsi.bund.de')) return 'BSI'
  if (href.includes('gesetze-im-internet') || href.includes('eur-lex')) return 'GESETZ'
  if (href.includes('bibb.de')) return 'BIBB'
  if (href.includes('kmk.org')) return 'KMK'
  if (href.includes('omg.org')) return 'OMG'
  if (href.includes('w3.org')) return 'W3C'
  if (href.includes('axelos.com')) return 'ITIL'
  if (href.includes('scrumguides.org')) return 'SCRUM'
  if (href.includes('postgresql.org') || href.includes('sqlite.org')) return 'DOC'
  if (href.includes('bundesfinanzministerium')) return 'BMF'
  if (href.includes('destatis.de')) return 'DESTATIS'
  return 'REF'
}

export default function Sources() {
  const groupSources = groups.map((group) => ({
    ...group,
    sources: sourceBank.filter((source) =>
      source.tags.some((tag) => group.tags.includes(tag)),
    ) as SourceEntry[],
  }))

  const totalSources = sourceBank.length

  return (
    <article>
      <div className="topbar">
        <div className="crumbs">
          <Link to="/" className="no-underline" style={{ color: 'inherit' }}>
            Lernhaus
          </Link>
          <span className="sep">/</span>
          <span className="now">Quellen</span>
        </div>
        <div className="streak">
          <Library size={14} aria-hidden="true" />
          <b>{totalSources}</b> Quellen registriert
        </div>
      </div>

      <section className="hero">
        <div className="hero-card">
          <div className="hero-greet">Quellenbasis · Primär- und Referenzquellen</div>
          <h1 className="hero-title">
            Nur <em>seriöse</em> Quellen.
          </h1>
          <p className="hero-sub">
            Ausbildungsordnung, Rahmenlehrplan, amtliche Gesetzestexte, BSI,
            RFCs und offizielle Spezifikationen. Wikipedia, Foren und
            Firmenblogs sind keine Hauptquellen — Paragraphen werden vor jedem
            Eintrag gegen den amtlichen Text verifiziert.
          </p>
        </div>

        <div className="hero-side">
          <div className="kpi">
            <div>
              <div className="kpi-lbl">Quellen gesamt</div>
              <div className="kpi-val">{totalSources}</div>
            </div>
            <div className="kpi-meta">über alle Lernfelder hinweg</div>
          </div>
          <div className="kpi">
            <div>
              <div className="kpi-lbl">Themen-Bereiche</div>
              <div className="kpi-val">
                {groups.length}
                <small> Gruppen</small>
              </div>
            </div>
            <div className="kpi-meta">nach Lernfeld-Schwerpunkten</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sec-head">
          <h2 className="sec-title">
            Qualitäts-<em>Freigabe</em>
          </h2>
          <div className="sec-meta">ready vs. final</div>
        </div>
        <div
          className="border-l-4 border-rule bg-paper-deep px-8 py-7 font-ui text-sm"
          style={{ borderRadius: 'var(--r-md)', color: 'var(--color-ink-2)' }}
        >
          <p className="m-0">
            Die Quellenbasis ordnet offizielle Rahmenquellen, technische Primärquellen
            und didaktische Vergleichsangebote den jeweiligen Kapiteln zu.
          </p>
        </div>
      </section>

      {groupSources.map((group) => (
        <section key={group.code} className="section">
          <div className="sec-head">
            <h2 className="sec-title">
              {group.title.split(' & ')[0]}
              {group.title.includes(' & ') && (
                <>
                  {' & '}
                  <em>{group.title.split(' & ').slice(1).join(' & ')}</em>
                </>
              )}
            </h2>
            <div className="sec-meta">
              {group.code} · {group.sources.length}{' '}
              {group.sources.length === 1 ? 'Quelle' : 'Quellen'}
            </div>
          </div>

          {group.sources.length === 0 ? (
            <div
              className="border-l-4 border-rule bg-paper-deep px-8 py-7 font-ui text-sm text-muted"
              style={{ borderRadius: 'var(--r-md)' }}
            >
              Für diese Gruppe sind noch keine Einträge registriert.
            </div>
          ) : (
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
              {group.sources.map((source) => (
                <li key={source.id} style={{ background: 'var(--color-paper)' }}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="no-underline"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '78px 1fr auto',
                      alignItems: 'baseline',
                      gap: 18,
                      padding: '16px 22px',
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
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 9.5,
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        padding: '3px 7px',
                        background: 'var(--color-ink)',
                        color: 'var(--color-bg)',
                        borderRadius: 3,
                        justifySelf: 'start',
                      }}
                    >
                      {detectKind(source.href)}
                    </span>
                    <div>
                      <p
                        className="m-0"
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontVariationSettings: '"opsz" 144, "SOFT" 30',
                          fontWeight: 500,
                          fontSize: '1.05rem',
                          color: 'var(--color-ink)',
                          lineHeight: 1.25,
                        }}
                      >
                        {source.label}
                      </p>
                      <p
                        className="m-0 mt-1.5 font-body leading-relaxed"
                        style={{ fontSize: 13.5, color: 'var(--color-ink-2)' }}
                      >
                        {source.detail}
                      </p>
                    </div>
                    <ExternalLink
                      size={15}
                      aria-hidden="true"
                      style={{ color: 'var(--color-ink-3)', alignSelf: 'center' }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </article>
  )
}
