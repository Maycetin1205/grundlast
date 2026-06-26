/**
 * Sidebar · CommandPalette
 *
 * Cmd/Ctrl+K-Such-Dialog mit Fuse.js-Volltextsuche ueber alle Lektionen.
 */

import { useEffect, useMemo, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import * as Dialog from "@radix-ui/react-dialog"
import Fuse from "fuse.js"
import { Search, X } from "lucide-react"
import { isLessonAvailable, lessonIndex } from "../../lib/toc"
import type { LessonSearchItem } from "../../lib/toc"
import { shortcutLabel } from "./nav-config"

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState("")
  const keys = useMemo(() => shortcutLabel(), [])
  const fuse = useMemo(
    () =>
      new Fuse(lessonIndex, {
        keys: ["title", "lernfeld", "modul", "preview"],
        threshold: 0.34,
        ignoreLocation: true,
      }),
    [],
  )
  const results = query.trim()
    ? fuse
        .search(query.trim())
        .map((result) => result.item)
        .filter(isLessonAvailable)
        .slice(0, 9)
    : lessonIndex.filter(isLessonAvailable).slice(0, 9)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        onOpenChange(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onOpenChange])

  useEffect(() => {
    if (!open) return
    const focusTimer = window.setTimeout(() => {
      setQuery("")
      inputRef.current?.focus()
    }, 0)

    return () => window.clearTimeout(focusTimer)
  }, [open])

  function choose(item: LessonSearchItem) {
    onOpenChange(false)
    navigate(item.to)
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-ink/30" />
        <Dialog.Content className="fixed left-1/2 top-20 z-[80] w-[min(720px,calc(100vw-32px))] -translate-x-1/2 rounded-lg border border-rule bg-paper shadow-2xl outline-none">
          <Dialog.Title className="sr-only">Command-Palette</Dialog.Title>
          <div className="flex items-center gap-3 border-b border-rule px-5 py-4">
            <Search size={19} className="shrink-0 text-muted" aria-hidden="true" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Kapitel suchen"
              className="min-w-0 flex-1 bg-transparent font-ui text-base text-ink outline-none placeholder:text-muted"
            />
            <kbd className="hidden shrink-0 rounded-sm border border-rule bg-paper-deep px-2 py-1 font-ui text-[10px] font-semibold uppercase tracking-[0.1em] text-muted sm:block">
              {keys}
            </kbd>
            <Dialog.Close
              className="shrink-0 rounded-md p-1 text-muted transition-colors hover:bg-paper-deep hover:text-ink"
              aria-label="Suche schließen"
            >
              <X size={18} aria-hidden="true" />
            </Dialog.Close>
          </div>

          <div className="max-h-[60vh] overflow-y-auto p-2">
            {results.length > 0 ? (
              results.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => choose(item)}
                    className="grid w-full grid-cols-[1fr_auto] gap-3 rounded-md px-4 py-3 text-left transition-colors hover:bg-paper-deep"
                  >
                    <span className="min-w-0">
                      <span className="block truncate font-ui text-sm font-semibold text-ink">
                        {item.title}
                      </span>
                      <span className="mt-0.5 block truncate font-ui text-xs text-muted">
                        {item.lernfeld} / {item.modul}
                      </span>
                    </span>
                    <span className="self-center rounded-sm border border-rule px-2 py-0.5 font-ui text-[10px] uppercase tracking-[0.1em] text-accent">
                      {item.minutes ? `${item.minutes} min` : "Kapitel"}
                    </span>
                  </button>
                ))
            ) : (
              <p className="px-4 py-8 text-center font-ui text-sm text-muted">Keine Treffer.</p>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
