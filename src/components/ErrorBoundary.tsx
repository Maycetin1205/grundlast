import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

/**
 * Fängt Render-Fehler einer Ansicht ab, damit eine einzelne fehlerhafte Lektion
 * (z. B. ungültiges MDX, fehlende Props an einer Inhaltskomponente) nicht die
 * gesamte App in einen weißen Bildschirm reißt. Das umgebende Layout bleibt
 * bedienbar; nur der Inhaltsbereich zeigt die Rückfallmeldung.
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: unknown, info: ErrorInfo) {
    console.error('Fehler beim Rendern einer Ansicht:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto max-w-3xl py-12 text-center font-ui text-sm text-muted">
          <p>Diese Ansicht konnte nicht geladen werden.</p>
          <p>
            Der restliche Lernbereich funktioniert weiterhin – bitte eine andere
            Lektion oder die Navigation nutzen.
          </p>
        </div>
      )
    }
    return this.props.children
  }
}
