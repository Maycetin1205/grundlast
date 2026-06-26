import { ArrowRight, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  isLessonAvailable,
  learningFieldTitle,
  lernfelder,
  type LernfeldNr,
} from '../lib/toc'

const LEARNING_FIELDS: LernfeldNr[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

interface PathLesson {
  slug: string
  title: string
  minutes?: number
  area: string
  module: string
  to: string
}

function lessonsForLearningField(lf: LernfeldNr): PathLesson[] {
  return lernfelder.flatMap((area) =>
    area.moduls.flatMap((module) =>
      module.lessons
        .filter((lesson) => lesson.lf === lf && isLessonAvailable(lesson))
        .map((lesson) => ({
          slug: lesson.slug,
          title: lesson.title,
          minutes: lesson.minutes,
          area: area.title,
          module: module.title,
          to: `/lernen/${area.slug}/${module.slug}/${lesson.slug}`,
        })),
    ),
  )
}

export default function Lernpfad() {
  const stages = LEARNING_FIELDS.map((lf) => ({
    lf,
    title: learningFieldTitle(lf),
    lessons: lessonsForLearningField(lf),
  }))
  const firstLesson = stages.flatMap((stage) => stage.lessons)[0]
  const lessonCount = stages.reduce((sum, stage) => sum + stage.lessons.length, 0)

  return (
    <article className="editorial-page learning-path-page">
      <header className="reference-header learning-path-header">
        <p className="page-eyebrow">1. und 2. Lehrjahr</p>
        <h1>Lernen entlang der neun Lernfelder.</h1>
        <p>
          Der Lernpfad ordnet die vorhandenen Kapitel nach den offiziellen Lernfeldern.
          Er bewertet keinen Fortschritt und verspricht keine Prüfungsreife – er zeigt
          einfach eine klare, nachvollziehbare Reihenfolge.
        </p>
        <div className="learning-path-header__meta">
          <span>{lessonCount} vorhandene Kapitel</span>
          <span>LF 1–9</span>
          {firstLesson && (
            <Link to={firstLesson.to}>
              Beim ersten Kapitel beginnen
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          )}
        </div>
      </header>

      <div className="learning-field-path">
        {stages.map((stage) => (
          <section key={stage.lf} className="learning-field-stage">
            <div className="learning-field-stage__marker">
              <span>LF</span>
              <strong>{stage.lf}</strong>
            </div>

            <div className="learning-field-stage__content">
              <header>
                <p>{String(stage.lf).padStart(2, '0')} · Lernfeld</p>
                <h2>{stage.title}</h2>
                <span>
                  {stage.lessons.length}{' '}
                  {stage.lessons.length === 1 ? 'vorhandenes Kapitel' : 'vorhandene Kapitel'}
                </span>
              </header>

              {stage.lessons.length > 0 ? (
                <div className="learning-field-stage__lessons">
                  {stage.lessons.map((lesson) => (
                    <Link key={lesson.slug} to={lesson.to} className="path-lesson">
                      <BookOpen size={16} aria-hidden="true" />
                      <span>
                        <strong>{lesson.title}</strong>
                        <small>
                          {lesson.area} · {lesson.module}
                        </small>
                      </span>
                      <span className="path-lesson__time">
                        {lesson.minutes ? `${lesson.minutes} min` : 'Kapitel'}
                      </span>
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="learning-field-stage__empty">
                  Für dieses Lernfeld ist noch kein Kapitel in der App vorhanden.
                </p>
              )}
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}
