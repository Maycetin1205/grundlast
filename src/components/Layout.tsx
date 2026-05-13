import { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'
import { Menu } from 'lucide-react'
import Sidebar, { CommandPalette } from './Sidebar'
import { useThemeSync } from '../lib/theme'

export default function Layout() {
  useThemeSync()
  const mainRef = useRef<HTMLElement>(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const element = mainRef.current
    if (!element) return

    function updateProgress() {
      if (!element) return
      const maxScroll = element.scrollHeight - element.clientHeight
      setScrollProgress(maxScroll > 0 ? element.scrollTop / maxScroll : 0)
    }

    updateProgress()
    element.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      element.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 900px)')

    function closeMobileNav() {
      if (media.matches) setMobileNavOpen(false)
    }

    closeMobileNav()
    media.addEventListener('change', closeMobileNav)
    return () => media.removeEventListener('change', closeMobileNav)
  }, [])

  function openSearch() {
    setSearchOpen(true)
  }

  return (
    <div className="min-h-full bg-paper text-ink">
      <div
        className="fixed right-0 top-0 z-[60] h-[2px] origin-left bg-accent left-0 min-[900px]:left-[344px]"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={() => setMobileNavOpen(true)}
        className="fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center border border-rule bg-paper-deep text-ink shadow-sm min-[900px]:hidden"
        aria-label="Navigation öffnen"
      >
        <Menu size={20} aria-hidden="true" />
      </button>

      <div className="fixed inset-y-0 left-0 z-40 hidden min-[900px]:block">
        <Sidebar onSearchOpen={openSearch} />
      </div>

      <Dialog.Root open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[55] bg-ink/25 min-[900px]:hidden" />
          <Dialog.Content className="fixed inset-y-0 left-0 z-[65] w-[344px] max-w-[calc(100vw-32px)] bg-paper-deep outline-none min-[900px]:hidden">
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

      <main
        ref={mainRef}
        className="h-screen overflow-y-auto bg-paper min-[900px]:ml-[344px]"
      >
        <div className="w-full px-5 pb-16 pt-20 sm:px-8 min-[900px]:px-14 min-[1200px]:px-20 min-[900px]:pb-24 min-[900px]:pt-14">
          <Outlet />
        </div>
      </main>

      <CommandPalette open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  )
}
