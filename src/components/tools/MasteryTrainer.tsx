import { useMemo, useState } from 'react'
import { CheckCircle2, Flame, RotateCcw, TriangleAlert } from 'lucide-react'
import { cn } from '../../lib/cn'
import {
  SKILLS,
  checkExercise,
  makeExercise,
  seedFor,
  type SkillId,
} from '../../lib/zahlensysteme/conversions'

type Mode = SkillId | 'mix'

const MODES: { id: Mode; label: string }[] = [
  { id: 'mix', label: 'Mix (alle)' },
  ...SKILLS.map((s) => ({ id: s.id as Mode, label: s.label })),
]

const MIX_ORDER: SkillId[] = ['dec2bin', 'bin2dec', 'hex2dec', 'chmod']
const STREAK_GOAL = 5

export default function MasteryTrainer() {
  const [mode, setMode] = useState<Mode>('mix')
  const [round, setRound] = useState(0)
  const [answer, setAnswer] = useState('')
  const [feedback, setFeedback] = useState<ReturnType<typeof checkExercise> | null>(null)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [solved, setSolved] = useState(0)
  const [attempts, setAttempts] = useState(0)

  const skill: SkillId = mode === 'mix' ? MIX_ORDER[round % MIX_ORDER.length] : mode
  const skillIndex = MIX_ORDER.indexOf(skill)

  const exercise = useMemo(
    () => makeExercise(skill, seedFor(skillIndex, round)),
    [skill, skillIndex, round],
  )

  function check() {
    if (feedback?.correct) return
    const result = checkExercise(exercise, answer)
    setFeedback(result)
    setAttempts((a) => a + 1)
    if (result.correct) {
      setSolved((s) => s + 1)
      setStreak((s) => {
        const next = s + 1
        setBestStreak((b) => Math.max(b, next))
        return next
      })
    } else {
      setStreak(0)
    }
  }

  function nextExercise() {
    setRound((r) => r + 1)
    setAnswer('')
    setFeedback(null)
  }

  function switchMode(next: Mode) {
    setMode(next)
    setRound((r) => r + 1)
    setAnswer('')
    setFeedback(null)
  }

  function resetStats() {
    setStreak(0)
    setBestStreak(0)
    setSolved(0)
    setAttempts(0)
    nextExercise()
  }

  const progress = Math.min(streak, STREAK_GOAL)

  return (
    <section className="my-8 border-y border-rule bg-paper-deep/35 py-5 text-ink">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 font-ui text-xs font-bold uppercase tracking-widest text-accent">
            Interaktiv · Kannst du es wirklich?
          </p>
          <h3 className="m-0 font-display text-xl font-bold leading-snug text-ink">
            Mastery-Trainer
          </h3>
        </div>
        <div className="flex items-center gap-3 font-ui text-sm">
          <span className="inline-flex items-center gap-1.5 font-semibold text-accent">
            <Flame className="h-4 w-4" aria-hidden="true" />
            {streak} in Folge
          </span>
          <span className="text-muted">
            {solved}/{attempts} richtig
          </span>
        </div>
      </div>

      {/* Mastery-Fortschritt */}
      <div className="mb-4">
        <div className="flex items-center justify-between font-ui text-xs text-muted">
          <span>Ziel: {STREAK_GOAL} richtig in Folge</span>
          {streak >= STREAK_GOAL && (
            <span className="font-bold text-accent">Mastery erreicht — Respekt!</span>
          )}
        </div>
        <div className="mt-1 flex gap-1" aria-hidden="true">
          {Array.from({ length: STREAK_GOAL }, (_, i) => (
            <div
              key={i}
              className={cn(
                'h-2 flex-1 border border-rule transition-colors',
                i < progress ? 'bg-accent' : 'bg-paper-deep',
              )}
            />
          ))}
        </div>
      </div>

      {/* Skill-Auswahl */}
      <div role="group" aria-label="Übungsart wählen" className="mb-4 flex flex-wrap gap-2">
        {MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => switchMode(m.id)}
            aria-pressed={mode === m.id}
            className={cn(
              'min-h-9 border px-3 py-1.5 font-ui text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
              mode === m.id
                ? 'border-accent bg-accent text-paper'
                : 'border-rule bg-paper text-muted hover:text-accent',
            )}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Aufgabe */}
      <div className="border border-rule bg-paper p-4">
        <p className="m-0 font-body text-base leading-relaxed text-ink">{exercise.prompt}</p>

        <form
          className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]"
          onSubmit={(event) => {
            event.preventDefault()
            if (feedback?.correct) nextExercise()
            else check()
          }}
        >
          <label className="block font-ui text-sm font-semibold text-ink">
            <span className="sr-only">Deine Antwort</span>
            <input
              className={cn(
                'min-h-10 w-full border border-rule bg-paper px-3 py-2 font-mono text-[0.95rem] text-ink',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
              )}
              value={answer}
              onChange={(event) => {
                setAnswer(event.target.value)
                if (feedback && !feedback.correct) setFeedback(null)
              }}
              spellCheck={false}
              autoComplete="off"
              placeholder={exercise.inputHint}
              aria-label="Deine Antwort"
            />
          </label>
          <button
            type="submit"
            className="inline-flex min-h-10 items-center justify-center gap-2 border border-accent bg-accent px-4 py-2 font-ui text-sm font-bold text-paper transition-colors hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {feedback?.correct ? 'Nächste Aufgabe →' : 'Prüfen'}
          </button>
        </form>

        {feedback && (
          <div
            className={cn(
              'mt-3 flex gap-3 border px-4 py-3 font-body text-sm leading-relaxed',
              feedback.correct ? 'border-accent bg-accent-soft' : 'border-accent-2 bg-warn-bg',
            )}
            role="status"
          >
            {feedback.correct ? (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            ) : (
              <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-accent-2" aria-hidden="true" />
            )}
            <div className="min-w-0">
              <p className="mb-1 font-ui font-bold text-ink">
                {feedback.correct ? 'Richtig!' : 'Noch nicht'}
              </p>
              <p className="m-0">{feedback.message}</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 font-ui text-sm">
        <button
          type="button"
          onClick={nextExercise}
          className="inline-flex min-h-10 items-center justify-center border border-rule bg-paper px-4 py-2 font-semibold text-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Andere Aufgabe
        </button>
        <button
          type="button"
          onClick={resetStats}
          className="inline-flex min-h-10 items-center justify-center gap-2 border border-rule bg-transparent px-4 py-2 font-semibold text-muted transition-colors hover:bg-paper-deep hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Zähler zurücksetzen
        </button>
        {bestStreak > 0 && <span className="text-muted">Bestwert: {bestStreak} in Folge</span>}
      </div>
    </section>
  )
}
