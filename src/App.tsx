import { lazy, Suspense, type ReactNode } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import ErrorBoundary from './components/ErrorBoundary'

const Dashboard = lazy(() => import('./routes/Dashboard'))
const Lesson = lazy(() => import('./routes/Lesson'))
const Glossary = lazy(() => import('./routes/Glossary'))
const Sources = lazy(() => import('./routes/Sources'))
const Lernpfad = lazy(() => import('./routes/Lernpfad'))

function withPageFallback(element: ReactNode) {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <div className="mx-auto max-w-3xl py-12 text-center font-ui text-sm text-muted">
            Ansicht wird geladen ...
          </div>
        }
      >
        {element}
      </Suspense>
    </ErrorBoundary>
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
          <Route path="lernen/:lernfeld/:modul/:lektion" element={withPageFallback(<Lesson />)} />
          <Route path="glossar" element={withPageFallback(<Glossary />)} />
          <Route path="quellen" element={withPageFallback(<Sources />)} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
