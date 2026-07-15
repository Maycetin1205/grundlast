import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'
import Fuse from 'fuse.js'
import { Search, X } from 'lucide-react'
import { chapters } from '../../content/catalog'
import { chapterUrl, isChapterAvailable } from '../../lib/learning'
import { shortcutLabel } from './nav-config'
export default function CommandPalette({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const navigate = useNavigate(), inputRef = useRef<HTMLInputElement>(null), [query, setQuery] = useState(''), keys = useMemo(() => shortcutLabel(), [])
  const items = useMemo(() => chapters.filter(isChapterAvailable).map((chapter) => ({ chapter, title: chapter.titel, lf: 'LF ' + chapter.primaryLf, topics: chapter.themen.join(' '), to: chapterUrl(chapter) })), [])
  const fuse = useMemo(() => new Fuse(items, { keys: ['title', 'lf', 'topics'], threshold: 0.34, ignoreLocation: true }), [items])
  const results = query.trim() ? fuse.search(query.trim()).map((result) => result.item).slice(0, 9) : items.slice(0, 9)
  useEffect(() => { const handler = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); onOpenChange(true) } }; window.addEventListener('keydown', handler); return () => window.removeEventListener('keydown', handler) }, [onOpenChange])
  useEffect(() => { if (!open) return; const timer = window.setTimeout(() => { setQuery(''); inputRef.current?.focus() }, 0); return () => window.clearTimeout(timer) }, [open])
  return <Dialog.Root open={open} onOpenChange={onOpenChange}><Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-[70] bg-ink/30" /><Dialog.Content className="fixed left-1/2 top-20 z-[80] w-[min(720px,calc(100vw-32px))] -translate-x-1/2 rounded-lg border border-rule bg-paper shadow-2xl outline-none"><Dialog.Title className="sr-only">Kapitelsuche</Dialog.Title><div className="flex items-center gap-3 border-b border-rule px-5 py-4"><Search size={19}/><input ref={inputRef} type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Kapitel, Lernfeld oder Thema suchen" className="min-w-0 flex-1 bg-transparent font-ui text-base text-ink outline-none" /><kbd>{keys}</kbd><Dialog.Close aria-label="Suche schließen"><X size={18}/></Dialog.Close></div><div className="max-h-[60vh] overflow-y-auto p-2">{results.map((item) => <button key={item.chapter.slug} type="button" onClick={() => { onOpenChange(false); navigate(item.to) }} className="grid w-full grid-cols-[1fr_auto] gap-3 rounded-md px-4 py-3 text-left hover:bg-paper-deep"><span><span className="block font-ui text-sm font-semibold">{item.title}</span><span className="text-xs text-muted">{item.lf}</span></span><span>{item.chapter.lernzeit} min</span></button>)}</div></Dialog.Content></Dialog.Portal></Dialog.Root>
}
