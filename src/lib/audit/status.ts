export type AuditTrustStatus = 'ungeprueft' | 'teilgeprueft' | 'geprueft' | 'gesperrt'

export interface LessonAudit {
  status: AuditTrustStatus
  title: string
  summary: string
  nextAction: string
}

// Jede Lektion gilt bis zu ihrem dokumentierten Kapitel-Audit als `ungeprueft`
// (Quelle der Wahrheit: CONTENT_AUDIT_MATRIX.md + KAPITELSTANDARD.md).
// Frühere KI-Selbstfreigaben liegen nur noch als historische Referenz in
// docs/archiv/.
const lessonAudits: Record<string, LessonAudit> = {
  prefixe: {
    status: 'geprueft',
    title: 'Geprüft',
    summary: 'SI- und Binärpräfixe mit sieben online geprüften Faktenbelegen.',
    nextAction: 'Abgeschlossen; Lernpfad mit Zahlensystemen fortsetzen.',
  },
  zahlensysteme: {
    status: 'geprueft',
    title: 'Geprüft',
    summary: 'Zahlensysteme mit sieben online geprüften Faktenbelegen zu Basen, Ziffern und Literalen.',
    nextAction: 'Abgeschlossen; im Grundlagenpfad mit Datenmengen und Datenraten fortsetzen.',
  },
  'datenvolumen-berechnung': {
    status: 'geprueft',
    title: 'Geprüft',
    summary: 'Datenmengen mit sechs online geprüften Belegen zu SI- und Binärpräfixen sowie nachgerechneten Scan- und Übertragungsbeispielen.',
    nextAction: 'Abgeschlossen; im Grundlagenpfad mit Datenrate und Downloadzeit fortsetzen.',
  },
  'datenrate-berechnung': {
    status: 'geprueft',
    title: 'Geprüft',
    summary: 'Datenrate und Downloadzeit mit sieben online geprüften Belegen zu Bit/Byte, SI-Präfixen, MB/GB und TCP-Durchsatz.',
    nextAction: 'Abgeschlossen; im Lernpfad mit der Von-Neumann-Grundidee fortsetzen.',
  },
}

const fallbackAudit: LessonAudit = {
  status: 'ungeprueft',
  title: 'KI-ungeprueft',
  summary: 'Dieses Kapitel wurde im Neustart noch nicht fachlich auditiert.',
  nextAction: 'Erst Quellen-, Fakten-, Didaktik- und Aufgaben-Gate durchfuehren.',
}

export function getLessonAudit(slug: string | undefined): LessonAudit {
  if (!slug) return fallbackAudit
  return lessonAudits[slug] ?? fallbackAudit
}

export function auditStatusLabel(status: AuditTrustStatus) {
  switch (status) {
    case 'geprueft':
      return 'Geprueft'
    case 'teilgeprueft':
      return 'Teilweise geprueft'
    case 'gesperrt':
      return 'Gesperrt'
    case 'ungeprueft':
      return 'KI-ungeprueft'
  }
}

export function auditStatusShortLabel(status: AuditTrustStatus) {
  switch (status) {
    case 'geprueft':
      return 'Geprueft'
    case 'teilgeprueft':
      return 'Teil-geprueft'
    case 'gesperrt':
      return 'Gesperrt'
    case 'ungeprueft':
      return 'KI-ungeprueft'
  }
}

export function isTrustedForExam(slug: string | undefined) {
  const status = getLessonAudit(slug).status
  return status === 'teilgeprueft' || status === 'geprueft'
}

export function auditWeight(slug: string | undefined) {
  switch (getLessonAudit(slug).status) {
    case 'geprueft':
      return 1
    case 'teilgeprueft':
      return 0.65
    case 'ungeprueft':
    case 'gesperrt':
      return 0
  }
}
