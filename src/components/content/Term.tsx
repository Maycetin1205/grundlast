import * as Dialog from '@radix-ui/react-dialog'
import * as Tooltip from '@radix-ui/react-tooltip'
import { BookOpen, X } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'
import { normalisiereGlossarId, useGlossarStore } from '../../stores/glossarStore'

interface TermProps {
  id: string
  children: ReactNode
  className?: string
}

export default function Term({ id, children, className }: TermProps) {
  const [dialogOffen, setDialogOffen] = useState(false)
  const eintrag = useGlossarStore((state) => state.eintraege[normalisiereGlossarId(id)])

  const termClassName = cn(
    'inline cursor-help appearance-none border-0 bg-transparent p-0 align-baseline font-[inherit] leading-[inherit]',
    '[color:var(--color-term)] underline [text-decoration-color:var(--color-term)] decoration-dotted decoration-1 underline-offset-3',
    'transition-colors hover:text-accent',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-term',
    className,
  )

  if (!eintrag) {
    return (
      <span className={termClassName} title={`Glossar-Eintrag fehlt: ${id}`}>
        {children}
      </span>
    )
  }

  return (
    <Dialog.Root open={dialogOffen} onOpenChange={setDialogOffen}>
      <Tooltip.Provider delayDuration={180}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              type="button"
              className={termClassName}
              onClick={() => setDialogOffen(true)}
            >
              {children}
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className={cn(
                'z-50 max-w-xs rounded-md border border-rule bg-ink px-3 py-2 shadow-lg',
                'font-ui text-sm leading-snug text-paper',
              )}
              sideOffset={7}
            >
              {eintrag.kurzdefinition}
              <Tooltip.Arrow className="fill-ink" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/35" />
        <Dialog.Content
          className={cn(
            'fixed left-1/2 top-1/2 z-50 w-[calc(100vw-2rem)] max-w-[34rem]',
            'max-h-[82vh] -translate-x-1/2 -translate-y-1/2 overflow-hidden',
            'border border-rule bg-paper text-ink shadow-2xl focus:outline-none',
          )}
        >
          <div className="flex items-start justify-between gap-4 border-b border-rule bg-paper-deep px-6 py-5">
            <div className="min-w-0">
              <p className="mb-2 font-ui text-xs font-semibold uppercase tracking-widest text-accent">
                Glossar
              </p>
              <Dialog.Title className="m-0 font-display text-2xl font-bold leading-tight text-ink">
                {eintrag.begriff}
              </Dialog.Title>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className={cn(
                  'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm',
                  'border border-rule bg-paper text-muted transition-colors',
                  'hover:text-accent focus-visible:outline focus-visible:outline-2',
                  'focus-visible:outline-offset-2 focus-visible:outline-accent',
                )}
                aria-label="Dialog schliessen"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Description asChild>
            <div className="max-h-[calc(82vh-7rem)] overflow-y-auto px-6 py-5">
              <div className="font-body text-base leading-relaxed text-ink">
                {eintrag.definition.map((absatz) => (
                  <p key={absatz}>{absatz}</p>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-rule pt-4 font-ui text-sm text-muted">
                <BookOpen className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>Herkunft:</span>
                <Link
                  to={eintrag.kapitel.href}
                  onClick={() => setDialogOffen(false)}
                  className="font-medium text-accent no-underline hover:underline"
                >
                  {eintrag.kapitel.titel}
                </Link>
              </div>
            </div>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
