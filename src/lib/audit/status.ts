import { getChapter } from '../learning'
export type AuditTrustStatus = 'ungeprueft' | 'teilgeprueft' | 'geprueft' | 'gesperrt'

export interface LessonAudit {
  status: AuditTrustStatus
  title: string
  summary: string
  nextAction: string
}

const lessonAudits: Record<string, Omit<LessonAudit, 'status'>> = {
  'bit-byte': {
    title: 'Geprueft',
    summary: 'Scope, Quellen, Fakten, Didaktik, Aufgabenabgleich und Umfang sind auditiert und dokumentiert (AP1_AUDIT_MATRIX.md, Restaudit 2026-07-03).',
    nextAction: 'Unabhaengiger Pruef-Pass steht aus (Rechen-Kapitel, Pflicht laut QUEUE.md Abschnitt 2b) – Kapitel steht in der Pruef-Warteschlange.',
  },
  prefixe: {
    title: 'Geprueft',
    summary: 'Scope, Quellen, Fakten, Didaktik, Aufgabenabgleich und Umfang sind auditiert und dokumentiert (AP1_AUDIT_MATRIX.md, Restaudit 2026-07-03).',
    nextAction: 'Unabhaengiger Pruef-Pass steht aus (Rechen-Kapitel, Pflicht laut QUEUE.md Abschnitt 2b) – Kapitel steht in der Pruef-Warteschlange.',
  },
  zahlensysteme: {
    title: 'Geprueft',
    summary: 'Scope, Quellen, Fakten, Didaktik, Aufgabenabgleich und Umfang sind auditiert und dokumentiert (AP1_AUDIT_MATRIX.md, Restaudit 2026-07-03).',
    nextAction: 'Unabhaengiger Pruef-Pass steht aus (Rechen-Kapitel, Pflicht laut QUEUE.md Abschnitt 2b) - Kapitel steht in der Pruef-Warteschlange.',
  },
  'datenrate-berechnung': {
    title: 'Geprueft',
    summary: 'Scope, Quellen, Fakten, Didaktik, Aufgaben-Gate und Umfang sind auditiert; Netto-Prozentwerte wurden als nicht belastbare Daumenregel entfernt.',
    nextAction: 'Unabhaengiger Pruef-Pass steht aus (Rechen-Kapitel, Pflicht laut QUEUE.md Abschnitt 2b) - Kapitel steht in der Pruef-Warteschlange.',
  },
  'datenvolumen-berechnung': {
    title: 'Teilweise geprueft',
    summary: 'Datenmengen-, Scan-, Bitraten- und Übertragungsrechnungen wurden quellen- und rechenwegorientiert nachgezogen. Aufgabenmodus wurde neutralisiert.',
    nextAction: 'Mit legalem AP1-Material unter Zeit gegen Scan-/Datenmengenfälle und Brutto-Netto-Rechnungen testen.',
  },
  'ipv4-subnetting': {
    title: 'Geprueft',
    summary: 'Scope, Quellen, Fakten, Rechenwege, Didaktik, Aufgaben-Gate und Umfang sind auditiert; ein direkt geloester Selbstcheck wurde ergaenzt.',
    nextAction: 'Unabhaengiger Pruef-Pass steht aus (Rechen-Kapitel, Pflicht laut QUEUE.md Abschnitt 2b) - Kapitel steht in der Pruef-Warteschlange.',
  },
  netzwerkkonfiguration: {
    title: 'Geprueft',
    summary: 'Scope, Quellen, Fakten, Didaktik, Aufgaben-, Umfangs- und Technik-Gate sind auditiert und dokumentiert (AP1_AUDIT_MATRIX.md, Restaudit 2026-07-13).',
    nextAction: 'Unabhaengiger Pruef-Pass steht gesammelt an; das Kapitel steht in der Pruef-Warteschlange.',
  },
  'homeoffice-ergonomie': {
    title: 'Teilweise geprueft',
    summary: 'Ergonomie, Telearbeit und Barrierefreiheit wurden gegen Arbeits- und Web-Barrierefreiheitsquellen nachgezogen. Aufgabenabgleich fehlt noch.',
    nextAction: 'Mit legalen AP1-/U-Form-Aufgaben gegen Auswahl- und Beratungsfaelle testen.',
  },
  'osi-modell': {
    title: 'Teilweise geprueft',
    summary: 'OSI-/TCP-IP-Einordnung, Kapselung, ARP/TLS-Grenzfaelle und Diagnosebezug wurden fachlich nachgezogen. Aufgabenabgleich fehlt noch.',
    nextAction: 'Mit legalen AP1-/U-Form-Aufgaben gegen Zuordnungs- und Diagnosefaelle testen.',
  },
  'tcp-udp': {
    title: 'Teilweise geprueft',
    summary: 'TCP/UDP, Ports, DNS-Grenzfall, Firewall-/NAT-Bezug und Schicht-4-Diagnose wurden fachlich nachgezogen. Aufgabenabgleich fehlt noch.',
    nextAction: 'Mit legalen AP1-/U-Form-Aufgaben gegen Port-, Protokoll- und Firewall-Regelfaelle testen.',
  },
  'wlan-standards': {
    title: 'Teilweise geprueft',
    summary: 'WLAN-Standards, Frequenzbaender, Kanalplanung, WPA2/WPA3 und Gastnetz-Trennung wurden fachlich nachgezogen. Aufgabenabgleich fehlt noch.',
    nextAction: 'Mit legalen AP1-/U-Form-Aufgaben gegen WLAN-Auswahl-, Sicherheits- und Diagnosefaelle testen.',
  },
  'firewall-dmz': {
    title: 'Teilweise geprueft',
    summary: 'Firewall-Regeln, Default-Deny, DMZ-Zonen, Administration und Protokollierung wurden gegen BSI-Grundschutz und RFC 1918 abgeglichen. Aufgabenabgleich fehlt noch.',
    nextAction: 'Mit legalen AP1-/U-Form-Aufgaben gegen DMZ-Planungs-, Regelwerks- und Fehlersuchfaelle testen.',
  },
  'port-forwarding': {
    title: 'Teilweise geprueft',
    summary: 'Private IPv4-Bereiche, NAT/NAPT, Portweiterleitung, CGNAT/DS-Lite und Sicherheitsgrenzen wurden gegen RFCs und BSI-Quellen abgeglichen. Aufgabenabgleich fehlt noch.',
    nextAction: 'Mit legalen AP1-/U-Form-Aufgaben gegen NAT-/Portweiterleitungs-, Provider- und Sicherheitsfaelle testen.',
  },
  'ipv6-grundlagen': {
    title: 'Teilweise geprueft',
    summary: 'IPv6-Adressaufbau, kanonische Schreibweise, Präfixe, Adresstypen, SLAAC und Privacy-Interface-Identifier wurden gegen RFCs abgeglichen. Aufgabenabgleich fehlt noch.',
    nextAction: 'Mit legalen AP1-/U-Form-Aufgaben gegen Kürzungs-, Präfix- und Adresstyp-Fälle testen.',
  },
}

const fallbackAudit: Omit<LessonAudit, 'status'> = {
  title: 'Ausgearbeitet',
  summary: 'Faktencheck ausstehend.',
  nextAction: 'Erst Quellen-, Fakten-, Didaktik- und Aufgaben-Gate durchfuehren.',
}

export function getLessonAudit(slug: string | undefined): LessonAudit {
  const contentStatus = getChapter(slug)?.inhaltsstatus
  const status: AuditTrustStatus = contentStatus === 'geprueft' ? 'geprueft' : contentStatus === 'teilgeprueft' ? 'teilgeprueft' : contentStatus === 'gesperrt' ? 'gesperrt' : 'ungeprueft'
  return { ...(slug ? lessonAudits[slug] : undefined) ?? fallbackAudit, status }
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
      return 'Ausgearbeitet'
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
      return 'Ausgearbeitet'
  }
}

export function isFullyAudited(slug: string | undefined) {
  return getLessonAudit(slug).status === 'geprueft'
}

export function hasAuditProgress(slug: string | undefined) {
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
