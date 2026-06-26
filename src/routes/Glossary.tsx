import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { glossarEintraege } from '../content/glossar'
import type { GlossarEintrag } from '../lib/glossar'

export default function Glossary() {
  const location = useLocation()
  const entries = [...glossarEintraege].sort((a, b) =>
    a.begriff.localeCompare(b.begriff, 'de'),
  )
  const grouped = entries.reduce<Record<string, GlossarEintrag[]>>((groups, entry) => {
    const letter = entry.begriff[0]?.toUpperCase() ?? '#'
    groups[letter] ??= []
    groups[letter].push(entry)
    return groups
  }, {})
  const letters = Object.keys(grouped).sort((a, b) => a.localeCompare(b, 'de'))

  useEffect(() => {
    if (!location.hash) return
    const targetId = decodeURIComponent(location.hash.slice(1))
    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: 'start' })
    })
  }, [location.hash])

  return (
    <article className="editorial-page reference-page">
      <header className="reference-header">
        <p className="page-eyebrow">Fachbegriffe · zentral gepflegt</p>
        <h1>
          Das <em>Glossar</em>
        </h1>
        <p>
          Jeder markierte Begriff führt zu derselben Definition. Kurz genug zum
          Nachschlagen, ausführlich genug zum Verstehen.
        </p>
        <span>{entries.length} Begriffe</span>
      </header>

      <nav className="alphabet-nav" aria-label="Buchstaben">
        {letters.map((letter) => (
          <a key={letter} href={`#glossar-${letter}`}>
            {letter}
          </a>
        ))}
      </nav>

      <div className="reference-groups">
        {letters.map((letter) => (
          <section key={letter} id={`glossar-${letter}`} className="reference-group">
            <header>
              <h2>{letter}</h2>
              <span>{grouped[letter].length} Einträge</span>
            </header>
            <ul className="reference-list">
              {grouped[letter].map((entry) => (
                <li key={entry.id} id={entry.id}>
                  <Link to={entry.kapitel?.href ?? `/glossar#${entry.id}`}>
                    <strong>{entry.begriff}</strong>
                    <span>
                      {entry.kurzdefinition}
                      {entry.kapitel && <small>→ {entry.kapitel.titel}</small>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  )
}
