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
    focus: 'Der Teil, der technische Entscheidungen in Arbeitsablaeufe und Kundenkontakte uebersetzt.',
    slugs: [
      'serviceanfragen-support-level',
      'fehlermanagement-stoerungsannahme',
      'bedarfsanalyse-feedback',
      'schulung-einweisung-key-user',
      'schulz-von-thun',
      'vorgehensmodelle',
      'scrum',
      'gantt-diagramm',
    ],
  },
  {
    id: 'pruefung',
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
  }
}

function phaseLessons(phase: PhaseDefinition) {
  return phase.slugs.map(toPathLesson).filter((item): item is PathLesson => Boolean(item))
}

function summarize(items: PathLesson[]) {
  const ready = items.filter((item) => item.available).length
  const minutes = items
    .filter((item) => item.available)
    .reduce((sum, item) => sum + (item.lesson.minutes ?? 0), 0)
  const exam = items.filter((item) => item.lesson.exam).length

  return {
    total: items.length,
    ready,
    minutes,
    exam,
    progress: items.length ? Math.round((ready / items.length) * 100) : 0,
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
    .filter((item) => item.lesson.exam && (item.lesson.importance ?? 0) >= 5 && !item.available)
    .sort((a, b) => {
      const statusRank = { stub: 0, draft: 1, ready: 2, final: 3 }
      return (
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
          {item.lernfeld.title} · {item.modul.title}
        </span>
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
  const nextLesson = allLessons.find((item) => item.available)
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
              <b>{overall.ready}</b>/{overall.total} Kernkapitel bereit
            </span>
          </div>
          <div className="path-stat">
            <Clock3 size={17} aria-hidden="true" />
            <span>
              <b>{overall.minutes}</b> Minuten Lernstoff
            </span>
          </div>
          <div className="path-stat">
            <CircleDot size={17} aria-hidden="true" />
            <span>
              <b>{overall.progress}%</b> Pfad ausgebaut
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sec-head">
          <h2 className="sec-title">
            Lernpfad <em>in Reihenfolge</em>
          </h2>
          <div className="sec-meta">{phases.length} Etappen · AP1-nah priorisiert</div>
        </div>
        <div className="path-lanes">
          {phases.map((phase, index) => (
            <section key={phase.id} className="path-phase">
              <div className="path-phase-head">
                <div>
                  <div className="path-phase-eyebrow">
                    {String(index + 1).padStart(2, '0')} · {phase.eyebrow}
                  </div>
                  <h3>{phase.title}</h3>
                  <p>{phase.focus}</p>
                </div>
                <div className="path-ring" style={{ ['--p' as string]: phase.summary.progress }}>
                  <span>{phase.summary.progress}%</span>
                </div>
              </div>
              <div className="path-phase-meta">
                <span>{phase.summary.ready}/{phase.summary.total} bereit</span>
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
              Naechste <em>Ausbau-Luecken</em>
            </h2>
            <div className="sec-meta">Pruefungsrelevant · Wichtigkeit 5</div>
          </div>
          <div className="path-backlog">
            {gaps.map((item) => (
              <div key={item.lesson.slug} className="path-gap">
                <span className={`path-status ${item.lesson.status ?? 'stub'}`}>
                  {lessonStatusLabel(item.lesson.status)}
                </span>
                <div>
                  <b>{item.lesson.title}</b>
                  <span>
                    {item.lernfeld.title} · {item.modul.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
