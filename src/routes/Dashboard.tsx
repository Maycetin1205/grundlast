import { ArrowRight } from 'lucide-react'
import { useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { findLesson, isLessonAvailable, lernfelder } from '../lib/toc'
import type { LernfeldNr } from '../lib/toc'

const RECOMMENDED_SLUGS = ['bit-byte', 'zahlensysteme']
const LEARNING_FIELDS: LernfeldNr[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function lessonLink(slug: string) {
  const found = findLesson(slug)
  return found
    ? {
        title: found.lesson.title,
        minutes: found.lesson.minutes,
        lf: found.lesson.lf,
        area: found.lernfeld.title,
        to: `/lernen/${found.lernfeld.slug}/${found.modul.slug}/${found.lesson.slug}`,
      }
    : null
}

export default function Dashboard() {
  const [selectedLf, setSelectedLf] = useState<LernfeldNr | null>(null)
  const recommendations = RECOMMENDED_SLUGS.map(lessonLink).filter(
    (item): item is NonNullable<typeof item> => Boolean(item),
  )
  const firstRecommendation = recommendations[0]

  const areas = lernfelder.map((area) => {
    const availableLessons = area.moduls.flatMap((modul) =>
      modul.lessons.filter(isLessonAvailable).map((lesson) => ({ lesson, modul })),
    )
    const learningFields = Array.from(
      new Set(availableLessons.flatMap(({ lesson }) => (lesson.lf ? [lesson.lf] : []))),
    ).sort((a, b) => a - b)
    const first = availableLessons[0]
    return {
      area,
      availableLessons,
      learningFields,
      to: first
        ? `/lernen/${area.slug}/${first.modul.slug}/${first.lesson.slug}`
        : '/',
    }
  })

  return (
    <article className="editorial-page">
      <header className="home-intro">
        <p className="page-eyebrow">Kompendium · FIAE / FISI · 1. + 2. Lehrjahr</p>
        <h1>
          Dein <em>Lernhaus</em> für die Ausbildung.
        </h1>
        <p>
          Ein roter Faden durch die Themen der Fachinformatiker-Ausbildung – als
          Lehrbuch, Nachschlagewerk und ruhiger Ort zum Verstehen.
        </p>
      </header>

      <section className="home-entry-grid" aria-label="Empfohlene Einstiege">
        {firstRecommendation && (
          <Link to={firstRecommendation.to} className="continue-card">
            <span className="continue-card__eyebrow">Empfohlener Einstieg</span>
            <span className="continue-card__meta">
              {firstRecommendation.lf ? `LF ${firstRecommendation.lf}` : 'Grundlage'} ·{' '}
              {firstRecommendation.area}
            </span>
            <strong>{firstRecommendation.title}</strong>
            <span className="continue-card__footer">
              Beginne hier
              <span>
                {firstRecommendation.minutes ?? '–'} min
                <ArrowRight size={14} aria-hidden="true" />
              </span>
            </span>
          </Link>
        )}

        <div className="entry-list">
          {recommendations.slice(1).map((item) => (
            <Link key={item.to} to={item.to} className="entry-list__item">
              <span className="entry-list__dot" aria-hidden="true" />
              <span>
                <small>{item.lf ? `LF ${item.lf}` : 'Grundlage'} · {item.area}</small>
                <strong>{item.title}</strong>
              </span>
              <span>{item.minutes ?? '–'} min</span>
            </Link>
          ))}
          <Link to="/lernpfad" className="entry-list__item">
            <span className="entry-list__dot entry-list__dot--muted" aria-hidden="true" />
            <span>
              <small>Orientierung</small>
              <strong>Den vollständigen Lernpfad ansehen</strong>
            </span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="area-index">
        <div className="section-heading">
          <div>
            <p className="page-eyebrow">Inhaltsverzeichnis</p>
            <h2>Alle Themenbereiche</h2>
          </div>
          <span>{areas.length} Bereiche · LF 1–9</span>
        </div>

        <div className="lf-filter" aria-label="Nach Lernfeld filtern">
          <button
            type="button"
            className={selectedLf === null ? 'active' : ''}
            onClick={() => setSelectedLf(null)}
          >
            Alle
          </button>
          {LEARNING_FIELDS.map((lf) => (
            <button
              key={lf}
              type="button"
              className={selectedLf === lf ? 'active' : ''}
              onClick={() => setSelectedLf(lf)}
            >
              LF {lf}
            </button>
          ))}
        </div>

        <div className="area-grid">
          {areas.map(({ area, availableLessons, learningFields, to }) => {
            const dimmed = selectedLf !== null && !learningFields.includes(selectedLf)
            return (
              <Link
                key={area.slug}
                to={to}
                className={`area-card ${dimmed ? 'area-card--dimmed' : ''}`}
                style={{ '--area-color': area.color } as CSSProperties}
                aria-disabled={availableLessons.length === 0}
              >
                <span className="area-card__edge" aria-hidden="true" />
                <div className="area-card__meta">
                  <span>{area.moduls.length} Module</span>
                  {learningFields.length > 0 && (
                    <span>{learningFields.map((lf) => `LF ${lf}`).join(' · ')}</span>
                  )}
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <span className="area-card__count">
                  {availableLessons.length} vorhandene Kapitel
                </span>
              </Link>
            )
          })}
        </div>
      </section>
    </article>
  )
}
