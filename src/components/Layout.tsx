import * as Dialog from '@radix-ui/react-dialog'
import { Menu, Search } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import type { AppShellContext } from '../lib/shell'
import { useThemeSync } from '../lib/theme'
import Sidebar, { CommandPalette } from './Sidebar'
import ThemeToggle from './ThemeToggle'

export default function Layout() {
  useThemeSync()
  const location = useLocation()
  const [scrollElement, setScrollElement] = useState<HTMLElement | null>(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)
  const isLesson = location.pathname.startsWith('/lernen/')

  const mainRef = useCallback((element: HTMLElement | null) => {
    setScrollElement(element)
  }, [])

  useEffect(() => {
    if (!scrollElement) return
    const container = scrollElement

    function updateProgress() {
      const maxScroll = container.scrollHeight - container.clientHeight
      setReadingProgress(maxScroll > 0 ? container.scrollTop / maxScroll : 0)
    }

    updateProgress()
    container.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      container.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [scrollElement, location.pathname])

  useEffect(() => {
    scrollElement?.scrollTo({ top: 0 })
  }, [location.pathname, scrollElement])

  const shellContext: AppShellContext = {
    scrollElement,
    readingProgress,
    scrollToTop: () => scrollElement?.scrollTo({ top: 0, behavior: 'smooth' }),
  }

  return (
    <div className="app-shell">
      {isLesson && (
        <div className="reading-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${readingProgress})` }} />
        </div>
      )}

      <header className="mobile-header">
        <button
          type="button"
          onClick={() => setMobileNavOpen(true)}
          className="mobile-header__button"
          aria-label="Navigation öffnen"
        >
          <Menu size={18} aria-hidden="true" />
        </button>
        <div className="mobile-header__brand">
          lern<span>haus</span>
        </div>
        <div className="mobile-header__actions">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="mobile-header__button"
            aria-label="Suche öffnen"
          >
            <Search size={17} aria-hidden="true" />
          </button>
          <ThemeToggle className="mobile-theme-toggle" />
        </div>
      </header>

      <div className="desktop-rail">
        <Sidebar onSearchOpen={() => setSearchOpen(true)} />
      </div>

      <Dialog.Root open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="mobile-nav-overlay" />
          <Dialog.Content className="mobile-nav-panel">
            <Dialog.Title className="sr-only">Navigation</Dialog.Title>
            <Sidebar
              onNavigate={() => setMobileNavOpen(false)}
              onSearchOpen={() => {
                setMobileNavOpen(false)
                setSearchOpen(true)
              }}
            />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <main ref={mainRef} className="app-main" data-app-scroll>
        <div className="app-canvas">
          <Outlet context={shellContext} />
        </div>
      </main>

      <CommandPalette open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  )
}
