import { Link } from 'react-router-dom'
import { isLessonAvailable, lernfelder } from '../lib/toc'
import { auditWeight, isTrustedForExam } from '../lib/audit'

const PALETTE = ['sky', 'olive', 'teal', 'rose', 'plum', 'amber', 'sand', 'forest', 'indigo']

interface TopicMastery {
  name: string
  items: number
  ready: number
  trusted: number
  mastery: number
  to: string
}

function topicMastery(): TopicMastery[] {
  const topics: TopicMastery[] = []

  for (const lf of lernfelder) {
    for (const modul of lf.moduls) {
      const examLessons = modul.lessons.filter((lesson) => lesson.exam)
      if (examLessons.length === 0) continue
      const availableLessons = examLessons.filter(isLessonAvailable)
      if (availableLessons.length === 0) continue
      const trustedLessons = availableLessons.filter((lesson) => isTrustedForExam(lesson.slug))
      const ready = availableLessons.length
      const trusted = trustedLessons.length
      const firstLesson = trustedLessons[0] ?? availableLessons[0]
      const weightedTrust = examLessons.reduce((sum, lesson) => sum + auditWeight(lesson.slug), 0)

      topics.push({
        name: modul.title,
        items: examLessons.length,
        ready,
        trusted,
        mastery: examLessons.length > 0 ? weightedTrust / examLessons.length : 0,
        to: `/lernen/${lf.slug}/${modul.slug}/${firstLesson.slug}`,
      })
    }
  }

  topics.sort((a, b) => a.mastery - b.mastery)
  return topics
}

export default function AP1Modus() {
  let totalExam = 0
  let contentReadyExam = 0
  let trustedExam = 0
  for (const lf of lernfelder) {
    for (const modul of lf.moduls) {
      for (const lesson of modul.lessons) {
        if (!lesson.exam) continue
        totalExam += 1
        if (isLessonAvailable(lesson)) contentReadyExam += 1
        if (isLessonAvailable(lesson) && isTrustedForExam(lesson.slug)) trustedExam += 1
      }
    }
  }
  const readiness = totalExam ? Math.round((trustedExam / totalExam) * 100) : 0
  const topics = topicMastery()
  const ap1Lernfelder = lernfelder
    .map((lf, idx) => ({ lf, idx }))
    .filter(({ lf }) => lf.moduls.some((m) => m.lessons.some((l) => l.exam && isLessonAvailable(l))))

  return (
    <article>
      <div className="topbar">
        <div className="crumbs">
          <span>Lernhaus</span>
          <span className="sep">/</span>
          <span className="now">AP1-Modus</span>
        </div>
        <div className="mode-switch">
          <Link to="/" className="no-underline">
            <button>Lernen</button>
          </Link>
          <button className="on ap1">AP1-Modus</button>
        </div>
      </div>

      <section className="ap1-stage">
        <div className="ap1-eyebrow">
          <span className="pulse" />
          Teil 1 der gestreckten Abschlussprüfung
        </div>
        <h1 className="ap1-h1">
          Filtere alles auf <em>prüfungsrelevant</em>.
        </h1>
        <p className="hero-sub" style={{ maxWidth: '52ch' }}>
          Der AP1-Modus trennt alte Inhaltsstände von geprüftem Vertrauen.
          Ungeprüfte Kapitel bleiben sichtbar, aber zählen nicht als belastbar.
        </p>
        <div className="hero-cta" style={{ marginTop: 24 }}>
          <Link to="/prüfen" className="btn btn-accent no-underline">
            Klausur-Simulation
          </Link>
        </div>

        <div className="ap1-stats">
          <div>
            <div className="ap1-stat-lbl">Belastbar</div>
            <div className="ap1-stat-val">
              {readiness}
              <small>%</small>
            </div>
          </div>
          <div>
            <div className="ap1-stat-lbl">Teil-geprüft</div>
            <div className="ap1-stat-val">
              {trustedExam}
              <small>/{totalExam}</small>
            </div>
          </div>
          <div>
            <div className="ap1-stat-lbl">Lernfelder</div>
            <div className="ap1-stat-val">
              {ap1Lernfelder.length}
              <small> mit AP1</small>
            </div>
          </div>
          <div>
            <div className="ap1-stat-lbl">Inhalt alt</div>
            <div className="ap1-stat-val">
              {contentReadyExam}
              <small>/{totalExam}</small>
            </div>
          </div>
        </div>
      </section>

      {topics.length > 0 && (
        <section className="section">
          <div className="sec-head">
            <h2 className="sec-title">
              Themen-<em>Beherrschung</em>
            </h2>
            <div className="sec-meta">Wenig Vertrauen oben · klick startet erstes Kapitel</div>
          </div>
          <div className="topics">
            {topics.map((topic) => {
              const pct = Math.round(topic.mastery * 100)
              const tone = topic.mastery < 0.4 ? 'danger' : topic.mastery < 0.7 ? 'warn' : ''
              return (
                <Link
                  key={topic.name}
                  to={topic.to}
                  className="topic no-underline text-ink"
                >
                  <div>
                    <div className="topic-name">{topic.name}</div>
                    <div className="topic-meta">
                      {topic.items} Kapitel · {topic.trusted} teil-geprüft · {topic.ready} alter Inhalt
                    </div>
                    <div className={`topic-bar ${tone}`}>
                      <span style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                  <div className="topic-pct">{pct}%</div>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      <section className="section">
        <div className="sec-head">
          <h2 className="sec-title">
            AP1-relevante <em>Lernfelder</em>
          </h2>
          <div className="sec-meta">Nur Felder mit Prüfungsrelevanz</div>
        </div>
        <div className="lf-grid">
          {ap1Lernfelder.map(({ lf, idx }) => {
            const total = lf.moduls.reduce((a, m) => a + m.lessons.length, 0)
            const examTotal = lf.moduls.reduce(
              (a, m) => a + m.lessons.filter((l) => l.exam).length,
              0,
            )
            const examReady = lf.moduls.reduce(
              (a, m) => a + m.lessons.filter((l) => l.exam && isLessonAvailable(l)).length,
              0,
            )
            const examTrusted = lf.moduls.reduce(
              (a, m) => a + m.lessons.filter((l) => l.exam && isLessonAvailable(l) && isTrustedForExam(l.slug)).length,
              0,
            )
            const lfPct = examTotal ? examTrusted / examTotal : 0
            const firstReady = lf.moduls
              .flatMap((m) => m.lessons.map((l) => ({ modul: m, lesson: l })))
              .find((entry) => entry.lesson.exam && isLessonAvailable(entry.lesson) && isTrustedForExam(entry.lesson.slug))
              ?? lf.moduls
                .flatMap((m) => m.lessons.map((l) => ({ modul: m, lesson: l })))
                .find((entry) => entry.lesson.exam && isLessonAvailable(entry.lesson))

            const target = firstReady
              ? `/lernen/${lf.slug}/${firstReady.modul.slug}/${firstReady.lesson.slug}`
              : '/'

            return (
              <Link
                key={lf.slug}
                to={target}
                className="lf-card no-underline text-ink"
                style={{ ['--c' as string]: `var(--color-c-${PALETTE[idx % PALETTE.length]})` }}
              >
                <div className="lf-top">
                  <span className="lf-code">
                    {lf.slug.toUpperCase()} · {total} Kapitel
                  </span>
                  <span className="lf-badge">AP1</span>
                </div>
                <h3 className="lf-title">{lf.title}</h3>
                <div className="lf-foot">
                  <span>
                    {examTrusted}/{examTotal} belastbar · {examReady} alter Inhalt
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
