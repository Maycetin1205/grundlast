import { useEffect, useSyncExternalStore } from "react"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export type ThemeMode = "light" | "dark"

interface ThemeState {
  mode: ThemeMode
  toggle: () => void
  set: (m: ThemeMode) => void
}

export const useTheme = create<ThemeState>()(
  persist(
    (set) => ({
      mode: detectInitialMode(),
      toggle: () => set((s) => ({ mode: s.mode === "dark" ? "light" : "dark" })),
      set: (m) => set({ mode: m }),
    }),
    { name: "grundlast.theme" },
  ),
)

function detectInitialMode(): ThemeMode {
  if (typeof window === "undefined") return "light"
  const stored = readStoredMode()
  if (stored) return stored
  return "light"
}

function readStoredMode(): ThemeMode | null {
  try {
    const raw = window.localStorage.getItem("grundlast.theme")
    if (!raw) return null
    const parsed = JSON.parse(raw) as { state?: { mode?: ThemeMode } }
    const mode = parsed.state?.mode
    return mode === "dark" || mode === "light" ? mode : null
  } catch {
    return null
  }
}

export function applyTheme(mode: ThemeMode) {
  if (typeof document === "undefined") return
  const root = document.documentElement
  root.classList.toggle("dark", mode === "dark")
  root.dataset.theme = mode
  root.style.colorScheme = mode
}

const subscribeMedia = (callback: () => void) => {
  if (typeof window === "undefined") return () => {}
  const media = window.matchMedia("(prefers-color-scheme: dark)")
  media.addEventListener("change", callback)
  return () => media.removeEventListener("change", callback)
}

const getMediaSnapshot = () => {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

const getServerMediaSnapshot = () => false

export function usePrefersDark() {
  return useSyncExternalStore(subscribeMedia, getMediaSnapshot, getServerMediaSnapshot)
}

export function useThemeSync() {
  const mode = useTheme((s) => s.mode)

  useEffect(() => {
    applyTheme(mode)
  }, [mode])
}
