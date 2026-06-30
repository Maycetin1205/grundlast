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
  'bit-byte': {
    status: 'geprueft',
    title: 'Geprüft',
    summary: 'Bit und Byte mit acht online geprüften Belegen zu 1 Byte = 8 Bit, b/B, SI-/Binärpräfixen, ASCII und UTF-8 sowie nachgerechneten Einheitenbeispielen.',
    nextAction: 'Abgeschlossen; im Lernpfad mit Präfixen und Zahlensystemen fortsetzen.',
  },
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
  'von-neumann': {
    status: 'geprueft',
    title: 'Geprüft',
    summary: 'Von-Neumann-Architektur mit neun online geprüften Belegen zu gemeinsamem Speicher, CPU-Bausteinen, Instruction Cycle, Bus, Takt und Cache.',
    nextAction: 'Abgeschlossen; im Lernpfad mit CPU, RAM und Massenspeicher fortsetzen.',
  },
  'cpu-ram-speicher': {
    status: 'geprueft',
    title: 'Geprüft',
    summary: 'CPU, RAM und Massenspeicher mit acht online geprüften Belegen zu CPU, RAM, Cache, Threads, Takt, SSD/HDD, NVMe und M.2.',
    nextAction: 'Abgeschlossen; im Lernpfad mit Hardware und Schnittstellen fortsetzen.',
  },
  'hardware-schnittstellen': {
    status: 'geprueft',
    title: 'Geprüft',
    summary: 'Hardware, Schnittstellen und Peripherie mit elf online geprüften Belegen zu Ausbildungsrahmen, USB4, USB-C, USB-PD, Thunderbolt, DisplayPort, HDMI und NVMe.',
    nextAction: 'Abgeschlossen; im Lernpfad mit Dateisystemen fortsetzen.',
  },
  dateisysteme: {
    status: 'geprueft',
    title: 'Geprüft',
    summary: 'Dateisysteme mit zehn online geprüften Belegen zu FAT32-Limit, NTFS-Log und ACLs, ext4-Inodes, Extents und Journal sowie APFS-Clones und Space Sharing.',
    nextAction: 'Abgeschlossen; im Lernpfad mit Linux-Dateirechten fortsetzen.',
  },
  'linux-chmod': {
    status: 'geprueft',
    title: 'Geprüft',
    summary: 'Linux-Dateirechte (chmod) mit elf online geprüften Belegen zu Modus-Bits, r=4/w=2/x=1 (S_IRUSR/S_IWUSR/S_IXUSR), Oktal- gegenüber symbolischem Modus und den Sonderbits setuid (4000), setgid (2000) und sticky (1000).',
    nextAction: 'Abgeschlossen; im Lernpfad mit Prozessen/Threads bzw. Virtualisierung fortsetzen.',
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
