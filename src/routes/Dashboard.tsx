import { Link } from 'react-router-dom'
import { ArrowRight, Flame } from 'lucide-react'
import { isLessonAvailable, lernfelder } from '../lib/toc'

const PALETTE = ['sky', 'olive', 'teal', 'rose', 'plum', 'amber', 'sand', 'forest', 'indigo']

function lfColor(index: number) {
  return PALETTE[index % PALETTE.length]
}

function chapterStats() {
  let total = 0
  let ready = 0

  for (const lf of lernfelder) {
    for (const modul of lf.moduls) {
      for (const lesson of modul.lessons) {
        total += 1
        if (isLessonAvailable(lesson)) ready += 1
      }
    }
  }

  return { total, ready }
}

function nextRecommendedLessons() {
  type Recommendation = {
    slug: string
    title: string
    lernfeld: string
    minutes: number
    to: string
  }

  const items: Recommendation[] = []

  for (const lf of lernfelder) {
    for (const modul of lf.moduls) {
      for (const lesson of modul.lessons) {
        if (!isLessonAvailable(lesson)) continue
        items.push({
          slug: lesson.slug,
          title: lesson.title,
          lernfeld: lf.title,
          minutes: lesson.minutes ?? 0,
          to: `/lernen/${lf.slug}/${modul.slug}/${lesson.slug}`,
        })
      }
    }
  }

  items.sort((a, b) => a.minutes - b.minutes || a.title.localeCompare(b.title, 'de'))
  return items.slice(0, 4)
}

export default function Dashboard() {
  const stats = chapterStats()
  const progress = stats.total ? Math.round((stats.ready / stats.total) * 100) : 0
  const recommendations = nextRecommendedLessons()

  return (
    <article>
      <div className="topbar">
        <div className="crumbs">
          <span>Lernhaus</span>
          <span className="sep">/</span>
          <span className="now">Ãœbersicht</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="streak">
            <Flame size={14} aria-hidden="true" />
            <b>{stats.ready}</b> Kapitel ausgearbeitet
          </div>
        </div>
      </div>

      <section className="hero">
        <div className="hero-card">
          <div className="hero-greet">Kompendium Â· FIAE/FISI</div>
          <h1 className="hero-title">
            Dein Lernhaus fÃ¼r die <em>Ausbildung</em>.
          </h1>
          <p className="hero-sub">
            {stats.total} Kapitel Ã¼ber {lernfelder.length} Lernfelder. {stats.ready} sind
            ausgearbeitet, {stats.total - stats.ready} stehen noch als Stub. Fang mit einem
            fertigen Kapitel an und folge dann den Themen in Ruhe weiter.
          </p>
          <div className="hero-cta">
            {recommendations[0] && (
              <Link to={recommendations[0].to} className="btn btn-accent no-underline">
                Empfohlenes Kapitel
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            )}
            <Link to="/quellen" className="btn btn-ghost no-underline">
              Quellenbasis
            </Link>
          </div>
        </div>

        <div className="hero-side">
          <div className="kpi">
            <div>
              <div className="kpi-lbl">Inhaltsstand</div>
              <div className="kpi-val">
                {progress}
                <small>%</small>
              </div>
            </div>
            <div className="kpi-meta">
              {stats.ready} von {stats.total} Kapiteln Â· {stats.total - stats.ready} offen
            </div>
            <div className="ring" style={{ ['--p' as string]: progress }}>
              <span>{progress}%</span>
            </div>
          </div>

          <div className="kpi">
            <div>
              <div className="kpi-lbl">Themenbereiche</div>
              <div className="kpi-val">
                {lernfelder.length}
                <small> Felder</small>
              </div>
            </div>
            <div className="kpi-meta">
              thematisch sortiert mit Glossar, Quellen und Rechenwegen
            </div>
            <div className="ring" style={{ ['--p' as string]: progress }}>
              <span>{lernfelder.length}</span>
            </div>
          </div>
        </div>
      </section>

      {recommendations.length > 0 && (
        <section className="section">
          <div className="sec-head">
            <h2 className="sec-title">
              Empfohlen <em>jetzt</em>
            </h2>
            <div className="sec-meta">Kurzer Einstieg Â· Inhalt bereit</div>
          </div>
          <div className="cont">
            {recommendations.map((item) => (
              <Link key={item.slug} to={item.to} className="cont-row no-underline text-ink">
                <div className="cont-lf">{item.lernfeld}</div>
                <div className="cont-title">{item.title}</div>
                <div className="cont-mini" />
                <div className="cont-when">{item.minutes} min</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="section">
        <div className="sec-head">
          <h2 className="sec-title">
            Alle <em>Lernfelder</em>
          </h2>
          <div className="sec-meta">{lernfelder.length} Felder Â· thematisch sortiert</div>
        </div>
        <div className="lf-grid">
          {lernfelder.map((lf, idx) => {
            const total = lf.moduls.reduce((a, m) => a + m.lessons.length, 0)
            const ready = lf.moduls.reduce(
              (a, m) => a + m.lessons.filter(isLessonAvailable).length,
              0,
            )
            const lfPct = total ? ready / total : 0
            const firstReady = lf.moduls
              .flatMap((m) => m.lessons.map((l) => ({ modul: m, lesson: l })))
              .find((entry) => isLessonAvailable(entry.lesson))

            const target = firstReady
              ? `/lernen/${lf.slug}/${firstReady.modul.slug}/${firstReady.lesson.slug}`
              : '/'

            return (
              <Link
                key={lf.slug}
                to={target}
                className="lf-card no-underline text-ink"
                style={{ ['--c' as string]: `var(--color-c-${lfColor(idx)})` }}
              >
                <div className="lf-top">
                  <span className="lf-code">
                    {lf.slug.toUpperCase()} Â· {total} Kapitel
                  </span>
                </div>
                <h3 className="lf-title">{lf.title}</h3>
                <div className="lf-foot">
                  <span>
                    {ready}/{total} fertig
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)' }}>
                    {Math.round(lfPct * 100)}%
                  </span>
                </div>
                <div className="lf-bar">
                  <span style={{ width: `${lfPct * 100}%` }} />
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </article>
  )
}
