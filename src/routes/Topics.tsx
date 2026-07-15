import { useMemo, useState } from 'react'
import ChapterList from '../components/learning/ChapterList'
import { topicGroups } from '../lib/learning'

export default function Topics() {
  const [query, setQuery] = useState('')
  const groups = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase('de')
    return topicGroups().map((group) => ({ ...group, chapters: group.chapters.filter((chapter) => !needle || chapter.titel.toLocaleLowerCase('de').includes(needle)) })).filter((group) => group.chapters.length)
  }, [query])
  return <article className="v2-page v2-page-wide"><header className="v2-page-head"><div><h1>Themen nachschlagen</h1><p>Themen sind eine Filter- und Suchsicht. Jedes Kapitel bleibt ein einziger kanonischer Datensatz.</p></div></header><input className="v2-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Kapitel filtern" aria-label="Kapitel filtern" />{groups.map((group) => <section className="v2-section" key={group.id}><div className="v2-section-head"><h2>{group.titel}</h2><span className="v2-muted">{group.chapters.length} Kapitel</span></div><ChapterList chapters={group.chapters} /></section>)}</article>
}
