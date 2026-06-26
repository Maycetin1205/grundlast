import { useEffect, useSyncExternalStore } from 'react'

export type ThemeMode = 'light' | 'dark'

const listeners = new Set<() => void>()
let currentMode = detectInitialMode()

function detectInitialMode(): ThemeMode {
  if (typeof window === 'undefined') return 'light'
  return readStoredMode() ?? 'light'
}

function readStoredMode(): ThemeMode | null {
  try {
    const raw = window.localStorage.getItem('grundlast.theme')
    if (!raw) return null
    if (raw === 'dark' || raw === 'light') return raw

    const parsed = JSON.parse(raw) as {
      state?: { mode?: ThemeMode }
      mode?: ThemeMode
    }
    const mode = parsed.state?.mode ?? parsed.mode
    return mode === 'dark' || mode === 'light' ? mode : null
  } catch {
    return null
  }
}

function subscribe(callback: () => void) {
  listeners.add(callback)
  return () => listeners.delete(callback)
}

export function getThemeMode() {
  return currentMode
}

export function setThemeMode(mode: ThemeMode) {
  if (mode === currentMode) return
  currentMode = mode

  try {
    window.localStorage.setItem('grundlast.theme', mode)
  } catch {
    // Das Theme funktioniert auch ohne persistierbaren Browser-Speicher.
  }

  for (const listener of listeners) listener()
}

export function toggleTheme() {
  setThemeMode(currentMode === 'dark' ? 'light' : 'dark')
}

export function useTheme() {
  return useSyncExternalStore(subscribe, getThemeMode, (): ThemeMode => 'light')
}

export function applyTheme(mode: ThemeMode) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  root.classList.toggle('dark', mode === 'dark')
  root.dataset.theme = mode
  root.style.colorScheme = mode
}

export function useThemeSync() {
  const mode = useTheme()

  useEffect(() => {
    applyTheme(mode)
  }, [mode])
}
