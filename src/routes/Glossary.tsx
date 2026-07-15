import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useGlossarStore } from '../lib/glossar'
import type { GlossarEintrag } from '../lib/glossar'

export default function Glossary(){
  const location=useLocation();const [query,setQuery]=useState('');const [letter,setLetter]=useState('Alle')
  const entries=Object.values(useGlossarStore(s=>s.einträge)).sort((a,b)=>a.begriff.localeCompare(b.begriff,'de'))
  const filtered=entries.filter(e=>(letter==='Alle'||e.begriff[0]?.toUpperCase()===letter)&&(`${e.begriff} ${e.kurzdefinition}`.toLowerCase().includes(query.toLowerCase())))
  const grouped=useMemo(()=>filtered.reduce<Record<string,GlossarEintrag[]>>((a,e)=>{const l=e.begriff[0]?.toUpperCase()??'#';(a[l]??=[]).push(e);return a},{}),[filtered]);const letters=Object.keys(entries.reduce<Record<string,boolean>>((a,e)=>{a[e.begriff[0]?.toUpperCase()??'#']=true;return a},{})).sort((a,b)=>a.localeCompare(b,'de'))
  useEffect(()=>{if(location.hash)requestAnimationFrame(()=>document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({block:'start'}))},[location.hash,entries.length])
  return <article className="v2-page"><header className="v2-page-head"><div><h1>Glossar</h1><p>Fachbegriffe kurz, verständlich und mit direktem Rückweg in das passende Kapitel.</p></div></header><div className="v2-glossary-filter"><input className="v2-glossary-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Begriff suchen …" aria-label="Glossar durchsuchen"/><div className="v2-alphabet"><button className={`v2-letter-btn ${letter==='Alle'?'active':''}`} onClick={()=>setLetter('Alle')}>#</button>{letters.map(l=><button key={l} className={`v2-letter-btn ${letter===l?'active':''}`} onClick={()=>setLetter(l)}>{l}</button>)}</div></div>{Object.keys(grouped).sort((a,b)=>a.localeCompare(b,'de')).map(l=><section key={l}><div className="v2-letter-head"><strong>{l}</strong><span>{grouped[l].length} {grouped[l].length===1?'Eintrag':'Einträge'}</span></div>{grouped[l].map(e=><div className="v2-glossary-row" id={e.id} key={e.id}><div className="v2-term">{e.begriff}</div><div><p className="v2-definition">{e.kurzdefinition}</p>{e.kapitel&&<Link className="v2-source-link" to={e.kapitel.href}>→ {e.kapitel.titel}</Link>}</div></div>)}</section>)}</article>
}
