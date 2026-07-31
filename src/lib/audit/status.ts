import { CONTENT_STATUS_META, getChapter } from '../learning'
import type { Chapter } from '../../content/catalog'

export type AuditTrustStatus = 'ungeprueft' | 'teilgeprueft' | 'geprueft' | 'gesperrt'

export interface LessonAudit {
  status: AuditTrustStatus
  title: string
  summary: string
  nextAction: string
}

function toAuditStatus(status: Chapter['inhaltsstatus']): AuditTrustStatus {
  if (status === 'geprueft' || status === 'teilgeprueft' || status === 'gesperrt') return status
  return 'ungeprueft'
}

export function getLessonAudit(slug: string | undefined): LessonAudit {
  const chapter = getChapter(slug)
  if (!chapter) {
    return {
      status: 'ungeprueft',
      title: 'Kapitel nicht gefunden',
      summary: 'Für diesen Slug existiert kein Eintrag im zentralen Kapitelkatalog.',
      nextAction: 'Katalogeintrag prüfen.',
    }
  }

  const status = toAuditStatus(chapter.inhaltsstatus)
  const meta = CONTENT_STATUS_META[chapter.inhaltsstatus]
  return {
    status,
    title: meta.label,
    summary: meta.explanation,
    nextAction: status === 'geprueft'
      ? 'Quellen bei Änderungen erneut prüfen.'
      : 'Offene Freigabe-Gates im strukturierten Audit schließen.',
  }
}

export function auditStatusLabel(status: AuditTrustStatus) {
  if (status === 'geprueft') return 'Geprüft'
  if (status === 'teilgeprueft') return 'Teilweise geprüft'
  if (status === 'gesperrt') return 'Gesperrt'
  return 'Ungeprüft'
}

export function auditStatusShortLabel(status: AuditTrustStatus) {
  if (status === 'teilgeprueft') return 'Teil-geprüft'
  return auditStatusLabel(status)
}

export function isFullyAudited(slug: string | undefined) {
  return getLessonAudit(slug).status === 'geprueft'
}

export function hasAuditProgress(slug: string | undefined) {
  const status = getLessonAudit(slug).status
  return status === 'teilgeprueft' || status === 'geprueft'
}

export function auditWeight(slug: string | undefined) {
  const status = getLessonAudit(slug).status
  if (status === 'geprueft') return 1
  if (status === 'teilgeprueft') return 0.65
  return 0
}
