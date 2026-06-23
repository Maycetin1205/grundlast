/**
 * Sidebar · ChapterLink
 *
 * Einzelner Kapitel-Link im Lernfeld-Drawer, mit Hover-Popover
 * fuer eine Vorschau (Titel + Status + Lesedauer).
 */

import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import * as Popover from "@radix-ui/react-popover"
import { cn } from "../../lib/cn"
import { auditStatusLabel, auditStatusShortLabel, getLessonAudit } from "../../lib/audit"
import { lessonStatusLabel } from "../../lib/toc"
import type { LessonSearchItem } from "../../lib/toc"

interface ChapterLinkProps {
  item: LessonSearchItem
  onNavigate?: () => void
}

export default function ChapterLink({ item, onNavigate }: ChapterLinkProps) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<number | null>(null)
  const audit = getLessonAudit(item.slug)
  const trusted = audit.status === "teilgeprueft" || audit.status === "geprueft"

  function clearCloseTimer() {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  function showPreview() {
    clearCloseTimer()
    setOpen(true)
  }

  function hidePreview() {
    clearCloseTimer()
    closeTimer.current = window.setTimeout(() => setOpen(false), 100)
  }

  useEffect(() => clearCloseTimer, [])

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <NavLink
          to={item.to}
          onClick={onNavigate}
          onPointerEnter={showPreview}
          onPointerLeave={hidePreview}
          onFocus={showPreview}
          onBlur={hidePreview}
          className={({ isActive }) =>
            cn(
              "group grid min-h-9 grid-cols-[16px_minmax(0,1fr)_auto] items-center gap-2 rounded-md px-2.5 py-1.5 font-ui text-[13px] leading-snug no-underline transition-colors",
              isActive
                ? "bg-paper text-ink shadow-[inset_3px_0_0_var(--color-accent)] hover:no-underline"
                : "text-muted hover:bg-paper hover:text-ink hover:no-underline",
            )
          }
        >
          <span
            className={cn(
              "h-2.5 w-2.5 justify-self-center rounded-full border",
              trusted
                ? "border-accent bg-accent"
                : audit.status === "gesperrt"
                  ? "border-accent-2 bg-accent-2"
                  : "border-rule bg-transparent",
            )}
            aria-hidden="true"
          />
          <span className="flex min-w-0 items-center gap-1.5">
            {item.lf && (
              <span
                className="shrink-0 rounded-sm bg-paper-deep px-1 py-px font-mono text-[9px] font-semibold leading-none text-muted"
                title={`Lernfeld ${item.lf}`}
              >
                LF{item.lf}
              </span>
            )}
            <span className="truncate">{item.title}</span>
          </span>
          <span
            className={cn(
              "justify-self-end rounded-sm border px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase leading-none",
              trusted
                ? "border-accent/35 bg-accent-soft text-accent"
                : "border-rule bg-paper-deep text-muted",
            )}
            title={auditStatusLabel(audit.status)}
          >
            {auditStatusShortLabel(audit.status)}
          </span>
        </NavLink>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="right"
          align="start"
          sideOffset={14}
          collisionPadding={16}
          onPointerEnter={showPreview}
          onPointerLeave={hidePreview}
          onOpenAutoFocus={(event) => event.preventDefault()}
          className="z-50 w-80 rounded-md border border-rule bg-paper px-4 py-3 shadow-xl outline-none"
        >
          <p className="mb-1 font-ui text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
            Kapitelvorschau
          </p>
          <p className="mb-2 font-ui text-[15px] font-semibold leading-snug text-ink">
            {item.title}
          </p>
          <p className="mb-3 font-body text-sm leading-relaxed text-muted">{item.preview}</p>
          <div className="flex flex-wrap items-center gap-2 font-ui text-[11px] text-muted">
            {item.minutes && <span>{item.minutes} min</span>}
            <span>Inhalt: {lessonStatusLabel(item.status)}</span>
            <span>Vertrauen: {auditStatusLabel(audit.status)}</span>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
