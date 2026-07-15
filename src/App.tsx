import { lazy, Suspense, type ReactNode } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'

const Dashboard = lazy(() => import('./routes/Dashboard'))
const Lesson = lazy(() => import('./routes/Lesson'))
const Glossary = lazy(() => import('./routes/Glossary'))
const Exams = lazy(() => import('./routes/Exams'))
const Tools = lazy(() => import('./routes/Tools'))
const Sources = lazy(() => import('./routes/Sources'))
const AP1Modus = lazy(() => import('./routes/AP1Modus'))
const Lernpfad = lazy(() => import('./routes/Lernpfad'))
const Topics = lazy(() => import('./routes/Topics'))

function withPageFallback(element: ReactNode) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-3xl py-12 text-center font-ui text-sm text-muted">
          Ansicht wird geladen ...
        </div>
      }
    >
      {element}
    </Suspense>
  )
}

// HashRouter statt BrowserRouter: funktioniert beim Doppelklick auf die
// Single-File-HTML (file://-Protokoll) ohne Webserver.
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={withPageFallback(<Dashboard />)} />
          <Route path="lernpfad" element={withPageFallback(<Lernpfad />)} />
          <Route path="ap1" element={withPageFallback(<AP1Modus />)} />
          <Route path="themen" element={withPageFallback(<Topics />)} />
          <Route path="lernen/:lernfeld/:modul/:lektion" element={withPageFallback(<Lesson />)} />
          <Route path="prüfen" element={withPageFallback(<Exams />)} />
          <Route path="werkzeuge" element={withPageFallback(<Tools />)} />
          <Route path="glossar" element={withPageFallback(<Glossary />)} />
          <Route path="quellen" element={withPageFallback(<Sources />)} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
