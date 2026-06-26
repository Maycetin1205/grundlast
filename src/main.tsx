import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { applyTheme, getThemeMode } from './lib/theme'

// Sofortige Theme-Anwendung — verhindert hellen Flash beim Start
applyTheme(getThemeMode())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
