import { Link } from 'react-router-dom'
import { ArrowRight, Flame } from 'lucide-react'
import {
  auditStatusShortLabel,
  getLessonAudit,
  isTrustedForExam,
} from '../lib/audit'
import { isLessonAvailable, lernfelder } from '../lib/toc'

const PALETTE = ['sky', 'olive', 'teal', 'rose', 'plum', 'amber', 'sand', 'forest', 'indigo']

function lfColor(index: number) {
  return PALETTE[index % PALETTE.length]
}

function chapterStats() {
  let total = 0
  let available = 0
  let trusted = 0

  for (const lf of lernfelder) {
    for (const modul of lf.moduls) {
      for (const lesson of modul.lessons) {
        total += 1
        if (!isLessonAvailable(lesson)) continue
        available += 1
        if (isTrustedForExam(lesson.slug)) trusted += 1
      }
    }
  }

  return { total, available, trusted, oldContent: available - trusted }
}

function nextRecommendedLessons() {
  type Recommendation = {
    slug: string
    title: string
    lernfeld: string
    minutes: number
    to: string
    auditStatus: ReturnType<typeof getLessonAudit>['status']
    trusted: boolean
  }

  const items: Recommendation[] = []

  for (const lf of lernfelder) {
    for (const modul of lf.moduls) {
      for (const lesson of modul.lessons) {
        if (!isLessonAvailable(lesson)) continue
        const audit = getLessonAudit(lesson.slug)
        items.push({
          slug: lesson.slug,
          title: lesson.title,
          lernfeld: lf.title,
          minutes: lesson.minutes ?? 0,
          to: `/lernen/${lf.slug}/${modul.slug}/${lesson.slug}`,
          auditStatus: audit.status,
          trusted: isTrustedForExam(lesson.slug),
        })
      }
    }
  }

  items.sort(
    (a, b) =>
      Number(b.trusted) - Number(a.trusted) ||
      a.minutes - b.minutes ||
      a.title.localeCompare(b.title, 'de'),
  )
  return items.slice(0, 4)
}

export default function Dashboard() {
  const stats = chapterStats()
  const trustProgress = stats.total ? Math.round((stats.trusted / stats.total) * 100) : 0
  const contentProgress = stats.total ? Math.round((stats.available / stats.total) * 100) : 0
  const recommendations = nextRecommendedLessons()

  return (
    <article>
      <div className="topbar">
        <div className="crumbs">
          <span>Lernhaus</span>
          <span className="sep">/</span>
          <span className="now">Übersicht</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="streak">
            <Flame size={14} aria-hidden="true" />
            <b>{stats.trusted}</b> Kapitel belastbar
          </div>
        </div>
      </div>

      <section className="hero">
        <div className="hero-card">
          <div className="hero-greet">Kompendium · FIAE/FISI</div>
          <h1 className="hero-title">
            Dein Lernhaus für die <em>Ausbildung</em>.
          </h1>
          <p className="hero-sub">
            {stats.total} Kapitel ueber {lernfelder.length} Lernfelder. {stats.trusted} sind
            belastbar, {stats.oldContent} alte Inhalte sind markiert. Fang mit einem geprueften
            Einstieg an und pruefe den Rest nicht blind.
          </p>
          <div className="hero-cta">
            {recommendations[0] && (
              <Link to={recommendations[0].to} className="btn btn-accent no-underline">
                Belastbares Kapitel
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
              <div className="kpi-lbl">Vertrauen</div>
              <div className="kpi-val">
                {trustProgress}
                <small>%</small>
              </div>
            </div>
            <div className="kpi-meta">
              {stats.trusted} von {stats.total} Kapiteln belastbar - {stats.oldContent} alt
            </div>
            <div className="ring" style={{ ['--p' as string]: trustProgress }}>
              <span>{trustProgress}%</span>
            </div>
          </div>

          <div className="kpi">
            <div>
              <div className="kpi-lbl">Alter Ausbau</div>
              <div className="kpi-val">
                {stats.available}
                <small>/{stats.total}</small>
              </div>
            </div>
            <div className="kpi-meta">
              vorhandene Lerntexte, aber nicht automatisch prüfungssicher
            </div>
            <div className="ring" style={{ ['--p' as string]: contentProgress }}>
              <span>{contentProgress}%</span>
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
            <div className="sec-meta">Geprüft zürst - alte Inhalte markiert</div>
          </div>
          <div className="cont">
            {recommendations.map((item) => (
              <Link key={item.slug} to={item.to} className="cont-row no-underline text-ink">
                <div className="cont-lf">{item.lernfeld}</div>
                <div className="cont-title">{item.title}</div>
                <div className={`cont-audit cont-audit--${item.auditStatus}`}>
                  {auditStatusShortLabel(item.auditStatus)}
                </div>
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
          <div className="sec-meta">{lernfelder.length} Felder · thematisch sortiert</div>
        </div>
        <div className="lf-grid">
          {lernfelder.map((lf, idx) => {
            const total = lf.moduls.reduce((a, m) => a + m.lessons.length, 0)
            const available = lf.moduls.reduce(
              (a, m) => a + m.lessons.filter(isLessonAvailable).length,
              0,
            )
            const trusted = lf.moduls.reduce(
              (a, m) =>
                a +
                m.lessons.filter(
                  (lesson) => isLessonAvailable(lesson) && isTrustedForExam(lesson.slug),
                ).length,
              0,
            )
            const oldContent = available - trusted
            const lfPct = total ? trusted / total : 0
            const firstReady = lf.moduls
              .flatMap((m) => m.lessons.map((l) => ({ modul: m, lesson: l })))
              .find((entry) => isLessonAvailable(entry.lesson) && isTrustedForExam(entry.lesson.slug))
              ?? lf.moduls
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
                    {lf.slug.toUpperCase()} · {total} Kapitel
                  </span>
                </div>
                <h3 className="lf-title">{lf.title}</h3>
                <div className="lf-foot">
                  <span>
                    {trusted}/{total} belastbar - {oldContent} alt
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
