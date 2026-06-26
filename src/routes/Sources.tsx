import { ExternalLink } from 'lucide-react'
import { sourceBank } from '../lib/quellen'
import type { SourceEntry } from '../lib/quellen'

interface SourceGroup {
  code: string
  title: string
  tags: string[]
}

const groups: SourceGroup[] = [
  { code: 'SCOPE', title: 'Ausbildung und amtlicher Rahmen', tags: ['ordnung', 'ausbildung', 'lernfelder'] },
  { code: 'SEC', title: 'IT-Sicherheit und Datenschutz', tags: ['sicherheit', 'krypto', 'dsgvo', 'datenschutz'] },
  { code: 'NET', title: 'Netzwerke und Protokolle', tags: ['netzwerk', 'ipv4', 'ipv6', 'tcp', 'udp', 'osi'] },
  { code: 'DATA', title: 'Daten, Software und Web', tags: ['datenbank', 'software', 'web', 'uml', 'bpmn'] },
  { code: 'BIZ', title: 'Projekt, Wirtschaft und Recht', tags: ['projekt', 'wirtschaft', 'recht', 'service', 'sla'] },
]

function detectKind(href: string): string {
  if (href.includes('rfc-editor')) return 'RFC'
  if (href.includes('bsi.bund.de')) return 'BSI'
  if (href.includes('gesetze-im-internet') || href.includes('eur-lex')) return 'GESETZ'
  if (href.includes('bibb.de')) return 'BIBB'
  if (href.includes('kmk.org')) return 'KMK'
  if (href.includes('w3.org')) return 'W3C'
  if (href.includes('omg.org')) return 'NORM'
  return 'REFERENZ'
}

export default function Sources() {
  const groupedSources = groups.map((group) => ({
    ...group,
    sources: sourceBank.filter((source) =>
      source.tags.some((tag) => group.tags.includes(tag)),
    ) as SourceEntry[],
  }))

  return (
    <article className="editorial-page reference-page">
      <header className="reference-header">
        <p className="page-eyebrow">Belege · nachvollziehbar</p>
        <h1>
          Die <em>Quellenbasis</em>
        </h1>
        <p>
          Fachliche Aussagen stützen sich auf amtliche Texte, Normen, RFCs und
          offizielle Dokumentation. Die Quelle zeigt, worauf eine Erklärung beruht.
        </p>
        <span>{sourceBank.length} Quellen</span>
      </header>

      <div className="reference-groups">
        {groupedSources.map((group) => (
          <section key={group.code} className="reference-group">
            <header>
              <div>
                <span className="source-group-code">{group.code}</span>
                <h2>{group.title}</h2>
              </div>
              <span>{group.sources.length} Quellen</span>
            </header>
            {group.sources.length > 0 ? (
              <ul className="source-list">
                {group.sources.map((source) => (
                  <li key={source.id}>
                    <a href={source.href} target="_blank" rel="noreferrer">
                      <span className="source-kind">{detectKind(source.href)}</span>
                      <span>
                        <strong>{source.label}</strong>
                        <small>{source.detail}</small>
                      </span>
                      <ExternalLink size={15} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="reference-empty">Für diesen Bereich sind noch keine Quellen hinterlegt.</p>
            )}
          </section>
        ))}
      </div>
    </article>
  )
}
