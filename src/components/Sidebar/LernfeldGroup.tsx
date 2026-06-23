/**
 * Sidebar · LernfeldGroup
 *
 * Aufklappbarer Block fuer ein Lernfeld: Header mit Icon und Fortschritt,
 * darunter Liste der verfuegbaren Kapitel gruppiert nach Modul.
 */

import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { BookOpen, ChevronRight } from "lucide-react"
import { cn } from "../../lib/cn"
import { isTrustedForExam } from "../../lib/audit"
import { isLessonAvailable, lessonIndex } from "../../lib/toc"
import type { Lernfeld } from "../../lib/toc"
import { ICONS } from "./nav-config"
import ChapterLink from "./ChapterLink"

interface LernfeldGroupProps {
  lf: Lernfeld
  onNavigate?: () => void
}

export default function LernfeldGroup({ lf, onNavigate }: LernfeldGroupProps) {
  const location = useLocation()
  const activeInGroup = lf.moduls.some((modul) =>
    modul.lessons.some(
      (lesson) =>
        location.pathname === `/lernen/${lf.slug}/${modul.slug}/${lesson.slug}`,
    ),
  )
  const [manualOpen, setManualOpen] = useState(false)
  const open = activeInGroup || manualOpen
  const Icon = ICONS[lf.icon] ?? BookOpen
  const [listRef] = useAutoAnimate({ duration: 140 })
  const total = lf.moduls.reduce((sum, modul) => sum + modul.lessons.length, 0)
  const ready = lf.moduls.reduce(
    (sum, modul) => sum + modul.lessons.filter(isLessonAvailable).length,
    0,
  )
  const trusted = lf.moduls.reduce(
    (sum, modul) =>
      sum +
      modul.lessons.filter((lesson) => isLessonAvailable(lesson) && isTrustedForExam(lesson.slug))
        .length,
    0,
  )
  const oldContent = ready - trusted
  const planned = total - ready
  const availableModules = lf.moduls
    .map((modul) => ({
      ...modul,
      lessons: modul.lessons.filter(isLessonAvailable),
    }))
    .filter((modul) => modul.lessons.length > 0)

  return (
    <section className="rounded-lg border border-transparent">
      <button
        type="button"
        onClick={() => setManualOpen((current) => !current)}
        aria-expanded={open}
        className={cn(
          "flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left font-ui transition-colors",
          open ? "bg-paper text-ink" : "text-ink hover:bg-paper",
        )}
      >
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-rule bg-paper-deep text-muted"
          aria-hidden="true"
        >
          <Icon size={16} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[14px] font-semibold leading-tight">{lf.title}</span>
          <span className="mt-0.5 block text-[11px] leading-tight text-muted">
            {trusted} belastbar{oldContent > 0 ? ` - ${oldContent} alt` : ""}
            {planned > 0 ? ` - ${planned} geplant` : ""}
          </span>
        </span>
        <ChevronRight
          size={16}
          className={cn("shrink-0 text-muted transition-transform", open && "rotate-90")}
          aria-hidden="true"
        />
      </button>

      <div ref={listRef}>
        {open && (
          <div className="mt-1 space-y-3 border-l border-rule/80 pl-4">
            {availableModules.map((modul) => (
              <div key={modul.slug}>
                <p className="mb-1.5 px-2 font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {modul.title}
                </p>
                <div className="space-y-1">
                  {modul.lessons.map((lesson) => {
                    const item = lessonIndex.find(
                      (entry) => entry.id === `${lf.slug}/${modul.slug}/${lesson.slug}`,
                    )

                    if (!item) return null

                    return <ChapterLink key={lesson.slug} item={item} onNavigate={onNavigate} />
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
