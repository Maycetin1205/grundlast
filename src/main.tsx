import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { useTheme, applyTheme } from './lib/theme'

// Sofortige Theme-Anwendung — verhindert hellen Flash beim Start
applyTheme(useTheme.getState().mode)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
