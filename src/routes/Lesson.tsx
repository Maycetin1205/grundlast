import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AlertCircle, ArrowLeft, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  findLesson,
  getLessonNeighbors,
  isLessonAvailable,
  lessonStatusLabel,
} from '../lib/toc'
import { getSourcesForLesson } from '../lib/quellen'
import { getLessonReview, reviewStatusLabel } from '../lib/review'
import { auditStatusLabel, getLessonAudit } from '../lib/audit'
import GrundlastMDXProvider from '../components/mdx/MDXProvider'
import LessonSources from '../components/content/LessonSources'
import ChapterFooter from '../components/content/ChapterFooter'
import type { ComponentType } from 'react'


type MDXModule = { default: ComponentType<Record<string, never>> }
const lessonModules = import.meta.glob<MDXModule>('../content/lessons/*.mdx')

interface LessonLoadState {
  lektion?: string
  Content: ComponentType<Record<string, never>> | null
  error: boolean
}

type LessonTab = 'read' | 'sources'

export default function Lesson() {
  const { lektion } = useParams<{ lernfeld: string; modul: string; lektion: string }>()

  const [loadState, setLoadState] = useState<LessonLoadState>({
    Content: null,
    error: false,
  })
  const [tabState, setTabState] = useState<{ lektion?: string; activeTab: LessonTab }>({
    activeTab: 'read',
  })

  const meta = lektion ? findLesson(lektion) : null
  const review = lektion ? getLessonReview(lektion) : null
  const audit = getLessonAudit(lektion)
  const lessonSources = lektion ? getSourcesForLesson(lektion, meta?.lernfeld.slug) : []
  const chapterNav = lektion ? getLessonNeighbors(lektion) : { previous: null, next: null }
  const lessonKey = lektion ? `../content/lessons/${lektion}.mdx` : null
  const lessonLoader = lessonKey ? lessonModules[lessonKey] : undefined
  const isCurrentLesson = loadState.lektion === lektion
  const Content = isCurrentLesson ? loadState.Content : null
  const unavailable = Boolean(meta && !isLessonAvailable(meta.lesson))
  const error = unavailable || Boolean(lektion && !lessonLoader) || (isCurrentLesson && loadState.error)
  const loading = Boolean(lektion && lessonLoader && !Content && !error)
  const activeTab = tabState.lektion === lektion ? tabState.activeTab : 'read'

  function chooseTab(nextTab: LessonTab) {
    setTabState({ lektion, activeTab: nextTab })
  }

  useEffect(() => {
    if (!lektion || !lessonLoader) return
    let abgebrochen = false

    lessonLoader()
      .then((mod) => {
        if (!abgebrochen) {
          setLoadState({ lektion, Content: mod.default, error: false })
        }
      })
      .catch(() => {
        if (!abgebrochen) {
          setLoadState({ lektion, Content: null, error: true })
        }
      })

    return () => {
      abgebrochen = true
    }
  }, [lektion, lessonLoader])

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl py-12 text-center font-ui text-sm text-muted">
        Lektion wird geladen …
      </div>
    )
  }

  if (error || !Content) {
    return (
      <article>
        <div className="topbar">
          <div className="crumbs">
            <span>Lernhaus</span>
            <span className="sep">/</span>
            <span>Kapitel</span>
            <span className="sep">/</span>
            <span className="now">{lektion}</span>
          </div>
          <Link to="/" className="btn btn-ghost no-underline">
            <ArrowLeft size={14} aria-hidden="true" />
            Übersicht
          </Link>
        </div>
        <div
          className="flex items-start gap-3 rounded-lg border p-4"
          style={{
            borderColor: 'color-mix(in oklch, var(--color-accent-2) 35%, transparent)',
            background: 'var(--color-accent-2-soft)',
          }}
        >
          <AlertCircle
            size={18}
            className="mt-0.5 shrink-0"
            style={{ color: 'var(--color-accent-2)' }}
            aria-hidden="true"
          />
          <div>
            <p className="m-0 font-ui text-sm font-medium text-ink">
              Diese Lektion ist noch nicht freigegeben.
            </p>
            <p className="mt-1 font-mono text-xs text-ink-3">
              Slug: <code>{lektion}</code> - Status:{' '}
              <code>{meta ? lessonStatusLabel(meta.lesson.status) : 'Nicht gefunden'}</code>
            </p>
          </div>
        </div>
      </article>
    )
  }
  return (
    <motion.article
      className="lesson-shell"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      {meta && (
        <div className="topbar">
          <div className="crumbs">
            <Link to="/" className="no-underline" style={{ color: 'inherit' }}>
              Lernhaus
            </Link>
            <span className="sep">/</span>
            <span>{meta.lernfeld.slug.toUpperCase()}</span>
            <span className="sep">/</span>
            <span className="now">{meta.modul.title}</span>
          </div>
          <Link to="/" className="btn btn-ghost no-underline">
            <ArrowLeft size={14} aria-hidden="true" />
            Übersicht
          </Link>
        </div>
      )}

      {meta && (
        <header className="chapter-head">
          <div className="chapter-eyebrow">
            <span className="chapter-eyebrow-tag">
              {meta.lesson.lf ? `LF${meta.lesson.lf} · ` : ''}{meta.lernfeld.title} · {meta.modul.title}
            </span>
          </div>
          <h1 className="chapter-h1">{meta.lesson.title}</h1>
          <div className="chapter-meta">
            {meta.lesson.minutes && (
              <span className="inline-flex items-center gap-1.5">
                <Clock size={13} aria-hidden="true" />
                ca. <b>{meta.lesson.minutes}</b> min
              </span>
            )}
            {meta.lesson.status === 'draft' && (
              <span style={{ color: 'var(--color-c-amber)' }}>Entwurf</span>
            )}
            {meta.lesson.status === 'ready' && (
              <span style={{ color: 'var(--color-accent)' }}>Ausgearbeitet</span>
            )}
            {meta.lesson.status === 'final' && (
              <span style={{ color: 'var(--color-accent)' }}>Formal geprüft</span>
            )}
            {review && (
              <span>{reviewStatusLabel(review.status)}</span>
            )}
            <span className={`audit-pill audit-pill--${audit.status}`}>
              Vertrauen: {auditStatusLabel(audit.status)}
            </span>
          </div>
        </header>
      )}

      <aside className={`audit-banner audit-banner--${audit.status}`}>
        <div>
          <div className="audit-banner-title">{audit.title}</div>
          <p>{audit.summary}</p>
        </div>
        <span>{audit.nextAction}</span>
      </aside>

      <div className="tabs" role="tablist" aria-label="Kapitelinhalt">
        <button
          type="button"
          id="lesson-tab-read"
          role="tab"
          aria-selected={activeTab === 'read'}
          aria-controls="lesson-panel-read"
          className={`tab ${activeTab === 'read' ? 'active' : ''}`}
          onClick={() => chooseTab('read')}
        >
          Lese
        </button>
        <button
          type="button"
          id="lesson-tab-sources"
          role="tab"
          aria-selected={activeTab === 'sources'}
          aria-controls="lesson-panel-sources"
          className={`tab ${activeTab === 'sources' ? 'active' : ''}`}
          onClick={() => chooseTab('sources')}
        >
          Quellen
        </button>
      </div>

      <GrundlastMDXProvider>
        <div className="lesson-body">
          {activeTab === 'read' ? (
            <section
              id="lesson-panel-read"
              role="tabpanel"
              aria-labelledby="lesson-tab-read"
            >
              <Content />
            </section>
          ) : (
            <section
              id="lesson-panel-sources"
              role="tabpanel"
              aria-labelledby="lesson-tab-sources"
            >
              {lessonSources.length > 0 ? (
                <LessonSources sources={lessonSources} />
              ) : (
                <div className="my-10 border-l-4 border-rule bg-paper-deep px-8 py-7 font-ui text-sm text-muted">
                  Für diese Lektion sind noch keine separaten Quellen hinterlegt.
                </div>
              )}
            </section>
          )}

          <ChapterFooter previous={chapterNav.previous} next={chapterNav.next} />
        </div>
      </GrundlastMDXProvider>
    </motion.article>
  )
}
