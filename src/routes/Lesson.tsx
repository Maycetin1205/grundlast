import { AlertCircle, ArrowLeft, Clock } from 'lucide-react'
import { useEffect, useState, type ComponentType } from 'react'
import { Link, useParams } from 'react-router-dom'
import ChapterFooter from '../components/content/ChapterFooter'
import GrundlastMDXProvider from '../components/mdx/MDXProvider'
import {
  findLesson,
  getLessonNeighbors,
  isLessonAvailable,
  learningFieldTitle,
  lessonStatusLabel,
} from '../lib/toc'

type MDXModule = { default: ComponentType<Record<string, never>> }
const lessonModules = import.meta.glob<MDXModule>('../content/lessons/*.mdx')

interface LessonLoadState {
  lesson?: string
  Content: ComponentType<Record<string, never>> | null
  error: boolean
}

export default function Lesson() {
  const { lektion } = useParams<{ lektion: string }>()
  const [loadState, setLoadState] = useState<LessonLoadState>({
    Content: null,
    error: false,
  })

  const meta = lektion ? findLesson(lektion) : null
  const chapterNav = lektion ? getLessonNeighbors(lektion) : { previous: null, next: null }
  const lessonKey = lektion ? `../content/lessons/${lektion}.mdx` : null
  const lessonLoader = lessonKey ? lessonModules[lessonKey] : undefined
  const isCurrentLesson = loadState.lesson === lektion
  const Content = isCurrentLesson ? loadState.Content : null
  const unavailable = Boolean(meta && !isLessonAvailable(meta.lesson))
  const error = unavailable || Boolean(lektion && !lessonLoader) || (isCurrentLesson && loadState.error)
  const loading = Boolean(lektion && lessonLoader && !Content && !error)
  const officialField = learningFieldTitle(meta?.lesson.lf)

  useEffect(() => {
    if (!lektion || !lessonLoader) return
    let cancelled = false

    lessonLoader()
      .then((module) => {
        if (!cancelled) setLoadState({ lesson: lektion, Content: module.default, error: false })
      })
      .catch(() => {
        if (!cancelled) setLoadState({ lesson: lektion, Content: null, error: true })
      })

    return () => {
      cancelled = true
    }
  }, [lektion, lessonLoader])

  if (loading) {
    return <div className="route-message">Lektion wird geladen …</div>
  }

  if (error || !Content || !meta) {
    return (
      <article className="route-message route-message--error">
        <AlertCircle size={20} aria-hidden="true" />
        <div>
          <h1>Diese Lektion ist noch nicht verfügbar.</h1>
          <p>
            {lektion ? (
              <>
                <code>{lektion}</code> ·{' '}
                {meta ? lessonStatusLabel(meta.lesson.status) : 'nicht im Inhaltsverzeichnis'}
              </>
            ) : (
              'Keine Lektion gewählt.'
            )}
          </p>
          <Link to="/" className="inline-link">
            <ArrowLeft size={14} aria-hidden="true" />
            Zur Übersicht
          </Link>
        </div>
      </article>
    )
  }

  return (
    <GrundlastMDXProvider>
      <div className="lesson-layout">
        <article className="lesson-article">
          <header className="lesson-header">
            {meta.lesson.lf && (
              <div className="lesson-field">
                <strong>LF {meta.lesson.lf}</strong>
                {officialField && <span>{officialField}</span>}
              </div>
            )}
            <h1>{meta.lesson.title}</h1>
            <div className="lesson-header__meta">
              {meta.lesson.minutes && (
                <span>
                  <Clock size={14} aria-hidden="true" />
                  ca. {meta.lesson.minutes} min Lesezeit
                </span>
              )}
              <span>{meta.lernfeld.title}</span>
            </div>
          </header>

          <section className="lesson-body">
            <Content />
          </section>

          <ChapterFooter previous={chapterNav.previous} next={chapterNav.next} />
        </article>
      </div>
    </GrundlastMDXProvider>
  )
}
