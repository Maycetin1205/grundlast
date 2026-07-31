import type { Chapter } from '../../content/catalog/types.ts'

export const CONTENT_STATUS_META = {
  geplant: {
    label: 'Geplant',
    shortLabel: 'geplant',
    explanation: 'Dieses Kapitel ist im Katalog vorgesehen, aber noch nicht als Lerntext verfügbar.',
  },
  ausgearbeitet: {
    label: 'Noch nicht fachlich geprüft',
    shortLabel: 'ungeprüft',
    explanation: 'Der Lerntext ist vorhanden, hat aber noch nicht alle Quellen-, Fakten-, Didaktik- und Aufgaben-Gates bestanden.',
  },
  teilgeprueft: {
    label: 'Teilweise geprüft',
    shortLabel: 'teilgeprüft',
    explanation: 'Teile des Kapitels wurden geprüft. Mindestens ein Freigabe-Gate ist noch offen.',
  },
  geprueft: {
    label: 'Fachlich geprüft',
    shortLabel: 'geprüft',
    explanation: 'Das Kapitel ist im Katalog als vollständig geprüft dokumentiert.',
  },
  gesperrt: {
    label: 'Gesperrt',
    shortLabel: 'gesperrt',
    explanation: 'Das Kapitel enthält einen bekannten kritischen Befund und ist nicht freigegeben.',
  },
} as const satisfies Record<Chapter['inhaltsstatus'], {
  label: string
  shortLabel: string
  explanation: string
}>

export function chapterTrust(chapter: Chapter) {
  return CONTENT_STATUS_META[chapter.inhaltsstatus]
}

export function isFullyAudited(chapter: Chapter) {
  return chapter.inhaltsstatus === 'geprueft'
}

export function trustForChapters(chapters: readonly Chapter[]) {
  const verified = chapters.filter(isFullyAudited).length
  const partial = chapters.filter((chapter) => chapter.inhaltsstatus === 'teilgeprueft').length
  const available = chapters.filter((chapter) => !['geplant', 'gesperrt'].includes(chapter.inhaltsstatus)).length
  return {
    verified,
    partial,
    available,
    total: chapters.length,
    verifiedPercent: chapters.length ? Math.round(verified / chapters.length * 100) : 0,
    availablePercent: chapters.length ? Math.round(available / chapters.length * 100) : 0,
  }
}
