import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpenCheck,
  CircleDot,
  Clock3,
  Flag,
  ListChecks,
} from 'lucide-react'
import {
  findLesson,
  isLessonAvailable,
  lernfelder,
  lessonStatusLabel,
} from '../lib/toc'
import type { Lernfeld, Lesson, Modul } from '../lib/toc'
import {
  auditStatusShortLabel,
  auditWeight,
  getLessonAudit,
  isTrustedForExam,
} from '../lib/audit'

interface PhaseDefinition {
  id: string
  eyebrow: string
  title: string
  focus: string
  slugs: string[]
}

interface PathLesson {
  lesson: Lesson
  modul: Modul
  lernfeld: Lernfeld
  to: string
  available: boolean
  audit: ReturnType<typeof getLessonAudit>
}

const phaseDefinitions: PhaseDefinition[] = [
  {
    id: 'basis',
    eyebrow: 'Lehrjahr 1',
    title: 'Rechner, Zahlen, Betriebssystem',
    focus: 'Die technische Grundsprache: Einheiten, Architektur, Dateisysteme und Rechte.',
    slugs: [
      'bit-byte',
      'zahlensysteme',
      'prefixe',
      'von-neumann',
      'linux-chmod',
      'dateisysteme',
      'prozess-thread',
    ],
  },
  {
    id: 'netzwerk',
    eyebrow: 'Lehrjahr 1',
    title: 'Netzwerke sicher beherrschen',
    focus: 'Alles, was in AP1-Aufgaben gern mit Protokollen, Adressen und Diagnose verknuepft wird.',
    slugs: [
      'osi-modell',
      'tcp-udp',
      'imap-pop3-smtp',
      'ipv4-subnetting',
      'netzwerkkonfiguration',
      'ipv6-grundlagen',
      'firewall-dmz',
      'port-forwarding',
      'wlan-standards',
    ],
  },
  {
    id: 'arbeit',
    eyebrow: 'Lehrjahr 2',
    title: 'Projekt, Betrieb, Kommunikation',
    focus: 'Der Teil, der technische Entscheidungen in Arbeitsablaeufe und Kundenkontakte übersetzt.',
    slugs: [
      'serviceanfragen-support-level',
      'fehlermanagement-störungsannahme',
      'bedarfsanalyse-feedback',
      'schulung-einweisung-key-user',
      'schulz-von-thun',
      'vorgehensmodelle',
      'scrum',
      'gantt-diagramm',
    ],
  },
  {
    id: 'prüfung',
    eyebrow: 'AP1-Kern',
    title: 'Rechnen, Sicherheit, Wirtschaft',
    focus: 'Die klassischen Punktebringer: Rechenwege, Schutzbedarf, Vertrage und Auswahlentscheidungen.',
    slugs: [
      'datenrate-berechnung',
      'datenvolumen-berechnung',
      'schutzziele',
      'verschluesselung-hash-vpn',
      'endpoint-security',
      'malware-grundlagen',
      'kaufmaennische-rechenaufgaben',
      'angebotsvergleich',
      'make-or-buy',
      'rechnung-zahlungsziel-aufbewahrungsfristen',
    ],
  },
]

function toPathLesson(slug: string): PathLesson | null {
  const found = findLesson(slug)

  if (!found) return null

  return {
    ...found,
    to: `/lernen/${found.lernfeld.slug}/${found.modul.slug}/${found.lesson.slug}`,
    available: isLessonAvailable(found.lesson),
    audit: getLessonAudit(found.lesson.slug),
  }
}

function phaseLessons(phase: PhaseDefinition) {
  return phase.slugs.map(toPathLesson).filter((item): item is PathLesson => Boolean(item))
}

function summarize(items: PathLesson[]) {
  const ready = items.filter((item) => item.available).length
  const trusted = items.filter((item) => item.available && isTrustedForExam(item.lesson.slug)).length
  const trustScore = items.reduce(
    (sum, item) => sum + (item.available ? auditWeight(item.lesson.slug) : 0),
    0,
  )
  const minutes = items
    .filter((item) => item.available)
    .reduce((sum, item) => sum + (item.lesson.minutes ?? 0), 0)
  const exam = items.filter((item) => item.lesson.exam).length

  return {
    total: items.length,
    ready,
    trusted,
    oldContent: ready - trusted,
    minutes,
    exam,
    progress: items.length ? Math.round((trustScore / items.length) * 100) : 0,
  }
}

function collectPriorityGaps() {
  return lernfelder
    .flatMap((lernfeld) =>
      lernfeld.moduls.flatMap((modul) =>
        modul.lessons.map((lesson) => ({
          lesson,
          modul,
          lernfeld,
          to: `/lernen/${lernfeld.slug}/${modul.slug}/${lesson.slug}`,
          available: isLessonAvailable(lesson),
        })),
      ),
    )
    .filter(
      (item) =>
        item.lesson.exam &&
        (item.lesson.importance ?? 0) >= 5 &&
        (!item.available || !isTrustedForExam(item.lesson.slug)),
    )
    .sort((a, b) => {
      const statusRank = { stub: 0, draft: 1, ready: 2, final: 3 }
      return (
        Number(b.available) - Number(a.available) ||
        statusRank[a.lesson.status ?? 'stub'] - statusRank[b.lesson.status ?? 'stub'] ||
        a.lesson.title.localeCompare(b.lesson.title, 'de')
      )
    })
    .slice(0, 8)
}

function LessonRow({ item }: { item: PathLesson }) {
  const status = item.lesson.status ?? 'stub'
  const content = (
    <>
      <span className={`path-status ${status}`}>
        {item.available ? 'bereit' : lessonStatusLabel(status)}
      </span>
      <span className="path-row-main">
        <span className="path-row-title">{item.lesson.title}</span>
        <span className="path-row-meta">
          {item.lernfeld.title} - {item.modul.title}
        </span>
      </span>
      <span className={`path-audit path-audit--${item.audit.status}`}>
        {auditStatusShortLabel(item.audit.status)}
      </span>
      <span className="path-row-time">
        {item.lesson.minutes ? `${item.lesson.minutes} min` : 'offen'}
      </span>
      {item.available && <ArrowRight size={15} aria-hidden="true" />}
    </>
  )

  if (!item.available) {
    return <div className="path-row muted">{content}</div>
  }

  return (
    <Link to={item.to} className="path-row no-underline text-ink">
      {content}
    </Link>
  )
}

export default function Lernpfad() {
  const phases = phaseDefinitions.map((phase) => {
    const lessons = phaseLessons(phase)
    return {
      ...phase,
      lessons,
      summary: summarize(lessons),
    }
  })
  const allLessons = phases.flatMap((phase) => phase.lessons)
  const overall = summarize(allLessons)
  const nextLesson =
    allLessons.find((item) => item.available && isTrustedForExam(item.lesson.slug)) ??
    allLessons.find((item) => item.available)
  const gaps = collectPriorityGaps()

  return (
    <article>
      <div className="topbar">
        <div className="crumbs">
          <span>Lernhaus</span>
          <span className="sep">/</span>
          <span className="now">Lernpfad</span>
        </div>
        {nextLesson && (
          <Link to={nextLesson.to} className="btn btn-ghost no-underline">
            <BookOpenCheck size={14} aria-hidden="true" />
            Weiterlernen
          </Link>
        )}
      </div>

      <section className="path-stage">
        <div className="path-eyebrow">
          <Flag size={15} aria-hidden="true" />
          1. und 2. Lehrjahr
        </div>
        <h1 className="path-h1">Der kompakte Weg durch die wichtigsten FIAE/FISI-Basics.</h1>
        <div className="path-summary">
          <div className="path-stat">
            <ListChecks size={17} aria-hidden="true" />
            <span>
              <b>{overall.trusted}</b>/{overall.total} Kernkapitel belastbar
            </span>
          </div>
          <div className="path-stat">
            <Clock3 size={17} aria-hidden="true" />
            <span>
              <b>{overall.ready}</b> bereit - {overall.oldContent} alt
            </span>
          </div>
          <div className="path-stat">
            <CircleDot size={17} aria-hidden="true" />
            <span>
              <b>{overall.progress}%</b> Vertrauen
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sec-head">
          <h2 className="sec-title">
            Lernpfad <em>in Reihenfolge</em>
          </h2>
          <div className="sec-meta">{phases.length} Etappen - AP1-nah priorisiert</div>
        </div>
        <div className="path-lanes">
          {phases.map((phase, index) => (
            <section key={phase.id} className="path-phase">
              <div className="path-phase-head">
                <div>
                  <div className="path-phase-eyebrow">
                    {String(index + 1).padStart(2, '0')} - {phase.eyebrow}
                  </div>
                  <h3>{phase.title}</h3>
                  <p>{phase.focus}</p>
                </div>
                <div className="path-ring" style={{ ['--p' as string]: phase.summary.progress }}>
                  <span>{phase.summary.progress}%</span>
                </div>
              </div>
              <div className="path-phase-meta">
                <span>{phase.summary.trusted}/{phase.summary.total} belastbar</span>
                <span>{phase.summary.oldContent} alt</span>
                <span>{phase.summary.exam} AP1-relevant</span>
                <span>{phase.summary.minutes} min</span>
              </div>
              <div className="path-rows">
                {phase.lessons.map((item) => (
                  <LessonRow key={item.lesson.slug} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      {gaps.length > 0 && (
        <section className="section">
          <div className="sec-head">
            <h2 className="sec-title">
              Nächste <em>Prüf-Lücken</em>
            </h2>
            <div className="sec-meta">Prüfungsrelevant - Wichtigkeit 5 - ungeprüft oder fehlend</div>
          </div>
          <div className="path-backlog">
            {gaps.map((item) => {
              const audit = getLessonAudit(item.lesson.slug)

              return (
                <div key={item.lesson.slug} className="path-gap">
                  <span className={`path-status ${item.lesson.status ?? 'stub'}`}>
                    {item.available ? 'bereit' : lessonStatusLabel(item.lesson.status)}
                  </span>
                  <div>
                    <b>{item.lesson.title}</b>
                    <span>
                      {item.lernfeld.title} - {item.modul.title}
                    </span>
                  </div>
                  <span className={`path-audit path-audit--${audit.status}`}>
                    {auditStatusShortLabel(audit.status)}
                  </span>
                </div>
              )
            })}
          </div>
        </section>
      )}
    </article>
  )
}
