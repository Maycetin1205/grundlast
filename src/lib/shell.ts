import { useOutletContext } from 'react-router-dom'

export interface AppShellContext {
  scrollElement: HTMLElement | null
  readingProgress: number
  scrollToTop: () => void
}

export function useAppShell() {
  return useOutletContext<AppShellContext>()
}
