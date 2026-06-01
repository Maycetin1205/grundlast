import { useMemo, useState, type ReactNode } from 'react'
import { Calculator, Check, Eye, RefreshCw, X } from 'lucide-react'
import { cn } from '../../lib/cn'
import {
  buildExplanation,
  calculateSubnet,
  evaluateSubnetAnswer,
  generateSubnetTrainingTask,
  numberToIp,
  type AnswerFeedback,
  type SubnetAnswerKey,
  type SubnetResult,
  type SubnetTrainingAnswers,
  type TrainingDifficulty,
  type TrainingTask,
} from '../../lib/netzwerk/subnetting'

type Mode = 'calculator' | 'training'

const emptyAnswers: SubnetTrainingAnswers = {
  network: '',
  firstHost: '',
  lastHost: '',
  broadcast: '',
  usableHosts: '',
}

const answerLabels: Record<SubnetAnswerKey, string> = {
  network: 'Netzadresse',
  firstHost: 'Erster Host',
  lastHost: 'Letzter Host',
  broadcast: 'Broadcast',
  usableHosts: 'Nutzbare Hosts',
}

const difficultyLabels: Record<TrainingDifficulty, string> = {
  easy: 'Einfach',
  exam: 'Klausurnah',
  mixed: 'Gemischt',
}

export default function SubnettingRechner() {
  const [mode, setMode] = useState<Mode>('training')
  const [ipValue, setIpValue] = useState('192.168.10.130')
  const [prefixValue, setPrefixValue] = useState(26)
  const [difficulty, setDifficulty] = useState<TrainingDifficulty>('exam')
  const [task, setTask] = useState<TrainingTask>(() => generateSubnetTrainingTask('exam'))
  const [answers, setAnswers] = useState<SubnetTrainingAnswers>(emptyAnswers)
  const [checked, setChecked] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  const result = useMemo(
    () => calculateSubnet(ipValue, prefixValue),
    [ipValue, prefixValue],
  )

  function resetCalculator() {
    setIpValue('192.168.10.130')
    setPrefixValue(26)
  }

  function createTask(nextDifficulty = difficulty) {
    setTask(generateSubnetTrainingTask(nextDifficulty))
    setAnswers(emptyAnswers)
    setChecked(false)
    setShowSolution(false)
  }

  function updateDifficulty(nextDifficulty: TrainingDifficulty) {
    setDifficulty(nextDifficulty)
    createTask(nextDifficulty)
  }

  function updateAnswer(key: SubnetAnswerKey, value: string) {
    setAnswers((current) => ({ ...current, [key]: value }))
    setChecked(false)
  }

  const inputClassName = cn(
    'min-h-10 w-full border border-rule bg-paper px-3 py-2 font-mono text-[0.95rem] text-ink',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
  )

  return (
    <section className="my-8 border-y border-rule bg-paper-deep/35 py-5 text-ink">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-accent" aria-hidden="true" />
          <h3 className="m-0 font-display text-xl font-bold leading-snug text-ink">
            Subnetting üben
          </h3>
        </div>

        <div className="inline-flex w-fit border border-rule bg-paper font-ui text-sm">
          <ModeButton active={mode === 'calculator'} onClick={() => setMode('calculator')}>
            Rechner
          </ModeButton>
          <ModeButton active={mode === 'training'} onClick={() => setMode('training')}>
            Training
          </ModeButton>
        </div>
      </div>

      {mode === 'calculator' ? (
        <CalculatorPanel
          inputClassName={inputClassName}
          ipValue={ipValue}
          prefixValue={prefixValue}
          result={result}
          onIpChange={setIpValue}
          onPrefixChange={setPrefixValue}
          onReset={resetCalculator}
        />
      ) : (
        <TrainingPanel
          inputClassName={inputClassName}
          difficulty={difficulty}
          task={task}
          answers={answers}
          checked={checked}
          showSolution={showSolution}
          onDifficultyChange={updateDifficulty}
          onAnswerChange={updateAnswer}
          onCheck={() => setChecked(true)}
          onShowSolution={() => {
            setShowSolution(true)
            setChecked(true)
          }}
          onNewTask={() => createTask()}
        />
      )}
    </section>
  )
}

function CalculatorPanel({
  inputClassName,
  ipValue,
  prefixValue,
  result,
  onIpChange,
  onPrefixChange,
  onReset,
}: {
  inputClassName: string
  ipValue: string
  prefixValue: number
  result: SubnetResult | null
  onIpChange: (value: string) => void
  onPrefixChange: (value: number) => void
  onReset: () => void
}) {
  return (
    <>
      <div className="grid gap-3 md:grid-cols-[1fr_8rem_auto] md:items-end">
        <label className="block font-ui text-sm font-semibold text-ink">
          IPv4-Adresse
          <input
            className={cn(inputClassName, 'mt-1.5')}
            value={ipValue}
            onChange={(event) => onIpChange(event.target.value)}
            inputMode="decimal"
            spellCheck={false}
            placeholder="192.168.10.130"
            aria-label="IPv4-Adresse"
          />
        </label>

        <label className="block font-ui text-sm font-semibold text-ink">
          Präfix
          <input
            className={cn(inputClassName, 'mt-1.5')}
            value={prefixValue}
            onChange={(event) => onPrefixChange(Number(event.target.value))}
            type="number"
            min={0}
            max={32}
            aria-label="CIDR-Präfix"
          />
        </label>

        <button
          type="button"
          onClick={onReset}
          className="inline-flex min-h-10 items-center justify-center gap-2 border border-rule bg-paper px-3 py-2 font-ui text-sm font-semibold text-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
          Reset
        </button>
      </div>

      {!result ? (
        <p className="mt-4 border-l-4 border-warn bg-warn-bg px-4 py-3 font-body text-base leading-relaxed text-ink">
          Gib eine IPv4-Adresse mit vier Oktetten von 0 bis 255 und ein Präfix von 0
          bis 32 ein.
        </p>
      ) : (
        <>
          <ResultGrid result={result} />
          <Explanation result={result} />
        </>
      )}
    </>
  )
}

function TrainingPanel({
  inputClassName,
  difficulty,
  task,
  answers,
  checked,
  showSolution,
  onDifficultyChange,
  onAnswerChange,
  onCheck,
  onShowSolution,
  onNewTask,
}: {
  inputClassName: string
  difficulty: TrainingDifficulty
  task: TrainingTask
  answers: SubnetTrainingAnswers
  checked: boolean
  showSolution: boolean
  onDifficultyChange: (difficulty: TrainingDifficulty) => void
  onAnswerChange: (key: SubnetAnswerKey, value: string) => void
  onCheck: () => void
  onShowSolution: () => void
  onNewTask: () => void
}) {
  const feedback = getFeedback(task.result, answers)
  const allCorrect = Object.values(feedback).every((item) => item.correct)

  return (
    <>
      <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
        <div className="border border-rule bg-paper px-4 py-3">
          <p className="m-0 font-ui text-xs font-semibold uppercase tracking-widest text-muted">
            Aufgabe
          </p>
          <p className="m-0 mt-1 font-mono text-xl font-bold text-ink">
            {task.ip}/{task.prefix}
          </p>
        </div>

        <label className="block font-ui text-sm font-semibold text-ink">
          Schwierigkeit
          <select
            className="mt-1.5 min-h-10 w-full border border-rule bg-paper px-3 py-2 font-ui text-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            value={difficulty}
            onChange={(event) => onDifficultyChange(event.target.value as TrainingDifficulty)}
          >
            {Object.entries(difficultyLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        {(Object.keys(answerLabels) as SubnetAnswerKey[]).map((key) => (
          <AnswerInput
            key={key}
            answerKey={key}
            label={answerLabels[key]}
            value={answers[key]}
            inputClassName={inputClassName}
            checked={checked}
            correct={feedback[key].correct}
            expected={feedback[key].expected}
            feedback={feedback[key].message}
            showSolution={showSolution}
            onChange={(value) => onAnswerChange(key, value)}
          />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={onCheck}
          className="inline-flex min-h-10 items-center justify-center gap-2 border border-accent bg-accent px-3 py-2 font-ui text-sm font-semibold text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <Check className="h-4 w-4" aria-hidden="true" />
          Prüfen
        </button>
        <button
          type="button"
          onClick={onShowSolution}
          className="inline-flex min-h-10 items-center justify-center gap-2 border border-rule bg-paper px-3 py-2 font-ui text-sm font-semibold text-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <Eye className="h-4 w-4" aria-hidden="true" />
          Lösung
        </button>
        <button
          type="button"
          onClick={onNewTask}
          className="inline-flex min-h-10 items-center justify-center gap-2 border border-rule bg-paper px-3 py-2 font-ui text-sm font-semibold text-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
          Neue Aufgabe
        </button>

        {checked && (
          <p className="m-0 ml-0 font-ui text-sm font-semibold text-ink md:ml-2">
            {allCorrect ? 'Alles richtig.' : 'Noch nicht ganz. Lies die Hinweise an den Feldern.'}
          </p>
        )}
      </div>

      {(checked || showSolution) && <Explanation result={task.result} compact />}
    </>
  )
}

function AnswerInput({
  answerKey,
  label,
  value,
  inputClassName,
  checked,
  correct,
  expected,
  feedback,
  showSolution,
  onChange,
}: {
  answerKey: SubnetAnswerKey
  label: string
  value: string
  inputClassName: string
  checked: boolean
  correct: boolean
  expected: string
  feedback: string
  showSolution: boolean
  onChange: (value: string) => void
}) {
  const statusClassName = checked
    ? correct
      ? 'border-accent'
      : 'border-warn'
    : ''

  return (
    <label className="block font-ui text-sm font-semibold text-ink">
      {label}
      <span className="relative mt-1.5 block">
        <input
          className={cn(
            inputClassName,
            statusClassName,
            checked && 'pr-8',
            answerKey === 'usableHosts' ? 'font-ui' : '',
          )}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          spellCheck={false}
          inputMode={answerKey === 'usableHosts' ? 'numeric' : 'decimal'}
          placeholder={answerKey === 'usableHosts' ? '62' : '192.168.10.128'}
        />
        {checked && (
          <span className="absolute right-2 top-1/2 -translate-y-1/2">
            {correct ? (
              <Check className="h-4 w-4 text-accent" aria-label="richtig" />
            ) : (
              <X className="h-4 w-4 text-warn" aria-label="falsch" />
            )}
          </span>
        )}
      </span>
      {checked && (
        <span
          className={cn(
            'mt-1 block font-body text-xs font-normal leading-snug',
            correct ? 'text-accent' : 'text-muted',
          )}
        >
          {feedback}
        </span>
      )}
      {showSolution && (
        <span className="mt-1 block font-mono text-xs font-semibold text-muted">
          Lösung: {expected}
        </span>
      )}
    </label>
  )
}

function ResultGrid({ result }: { result: SubnetResult }) {
  return (
    <div className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
      <ResultItem label="Subnetzmaske" value={result.maskOctets.join('.')} />
      <ResultItem label="Netzadresse" value={`${numberToIp(result.network)}/${result.prefix}`} />
      <ResultItem label="Erster Host" value={numberToIp(result.firstHost)} />
      <ResultItem label="Letzter Host" value={numberToIp(result.lastHost)} />
      <ResultItem label="Broadcast" value={numberToIp(result.broadcast)} />
      <ResultItem label="Nutzbare Hosts" value={result.usableHostsLabel} />
      <ResultItem label="Host-Bits" value={String(result.hostBits)} />
      <ResultItem
        label="Magic Number"
        value={result.magicNumber === null ? 'nicht nötig' : String(result.magicNumber)}
      />
    </div>
  )
}

function Explanation({ result, compact = false }: { result: SubnetResult; compact?: boolean }) {
  return (
    <div className={cn('mt-5 border border-rule bg-paper px-4 py-3', compact && 'mt-4')}>
      <p className="m-0 mb-2 font-ui text-xs font-semibold uppercase tracking-widest text-accent">
        Erklärung
      </p>
      <ul className="m-0 grid gap-1.5 pl-5 font-body text-[0.98rem] leading-relaxed md:grid-cols-2">
        {buildExplanation(result).map((line) => (
          <li key={line} className="m-0">
            {line}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ResultItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-rule bg-paper px-3 py-2.5">
      <p className="m-0 font-ui text-[11px] font-semibold uppercase tracking-widest text-muted">
        {label}
      </p>
      <p className="m-0 mt-1 break-words font-mono text-[0.96rem] font-semibold text-ink">
        {value}
      </p>
    </div>
  )
}

function ModeButton({
  active,
  children,
  onClick,
}: {
  active: boolean
  children: ReactNode
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'min-h-9 px-3 py-1.5 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        active ? 'bg-accent text-paper' : 'bg-transparent text-muted hover:text-ink',
      )}
    >
      {children}
    </button>
  )
}

function getFeedback(
  result: SubnetResult,
  answers: SubnetTrainingAnswers,
): Record<SubnetAnswerKey, AnswerFeedback> {
  return {
    network: evaluateSubnetAnswer(result, 'network', answers.network),
    firstHost: evaluateSubnetAnswer(result, 'firstHost', answers.firstHost),
    lastHost: evaluateSubnetAnswer(result, 'lastHost', answers.lastHost),
    broadcast: evaluateSubnetAnswer(result, 'broadcast', answers.broadcast),
    usableHosts: evaluateSubnetAnswer(result, 'usableHosts', answers.usableHosts),
  }
}
