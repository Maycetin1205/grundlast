import { useState, type CSSProperties } from 'react'
import { ChevronRight } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { cn } from '../../lib/cn'
import { isLessonAvailable, lessonIndex } from '../../lib/toc'
import type { Lernfeld } from '../../lib/toc'
import ChapterLink from './ChapterLink'

interface ThemenbereichGroupProps {
  area: Lernfeld
  onNavigate?: () => void
}

export default function LernfeldGroup({ area, onNavigate }: ThemenbereichGroupProps) {
  const location = useLocation()
  const activeInGroup = area.moduls.some((modul) =>
    modul.lessons.some(
      (lesson) =>
        location.pathname === `/lernen/${area.slug}/${modul.slug}/${lesson.slug}`,
    ),
  )
  const [manualOpen, setManualOpen] = useState(false)
  const open = activeInGroup || manualOpen
  const availableModules = area.moduls
    .map((modul) => ({
      ...modul,
      lessons: modul.lessons.filter(isLessonAvailable),
    }))
    .filter((modul) => modul.lessons.length > 0)

  return (
    <section
      className={cn('area-group', activeInGroup && 'area-group--active')}
      style={{ '--area-color': area.color } as CSSProperties}
    >
      <button
        type="button"
        className="area-group__trigger"
        onClick={() => setManualOpen((current) => !current)}
        aria-expanded={open}
      >
        <span className="area-group__color" aria-hidden="true" />
        <span className="area-group__title">{area.title}</span>
        <ChevronRight
          size={14}
          className={cn('area-group__chevron', open && 'area-group__chevron--open')}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="area-group__content">
          {availableModules.map((modul) => (
            <div key={modul.slug} className="area-module">
              <p className="area-module__title">{modul.title}</p>
              <div className="area-module__lessons">
                {modul.lessons.map((lesson) => {
                  const item = lessonIndex.find(
                    (entry) => entry.id === `${area.slug}/${modul.slug}/${lesson.slug}`,
                  )
                  return item ? (
                    <ChapterLink key={lesson.slug} item={item} onNavigate={onNavigate} />
                  ) : null
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
