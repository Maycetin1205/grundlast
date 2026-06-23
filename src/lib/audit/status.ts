export type AuditTrustStatus = 'ungeprueft' | 'teilgeprueft' | 'geprueft' | 'gesperrt'

export interface LessonAudit {
  status: AuditTrustStatus
  title: string
  summary: string
  nextAction: string
}

const lessonAudits: Record<string, LessonAudit> = {
  'bit-byte': {
    status: 'teilgeprueft',
    title: 'Teilweise geprueft',
    summary: 'Kernfakten und Didaktik sind auditiert. Echte AP1-/U-Form-Aufgaben fehlen noch.',
    nextAction: 'Offene ASCII-Quelle in der Quellenbank nachziehen und mit legalen Aufgaben testen.',
  },
  prefixe: {
    status: 'teilgeprueft',
    title: 'Teilweise geprueft',
    summary: 'SI-/IEC-Fakten und Rechenwege sind auditiert. Aufgabenabgleich fehlt noch.',
    nextAction: 'Kurzen Selbstcheck ergaenzen und mit legalen Aufgaben testen.',
  },
  zahlensysteme: {
    status: 'teilgeprueft',
    title: 'Teilweise geprueft',
    summary: 'Stellenwerte, Umrechnungen und Anwendungen sind auditiert. Aufgabenabgleich fehlt noch.',
    nextAction: 'Mit echten/nahen AP1-Aufgaben gegenpruefen.',
  },
  'datenrate-berechnung': {
    status: 'teilgeprueft',
    title: 'Teilweise geprueft',
    summary: 'Rechenwege und Kernaussagen sind auditiert. Netto-Orientierung und echter Aufgabenabgleich fehlen noch.',
    nextAction: 'Netto-Daumenregeln belegen oder klarer markieren und mit legalen Aufgaben testen.',
  },
  'datenvolumen-berechnung': {
    status: 'teilgeprueft',
    title: 'Teilweise geprueft',
    summary: 'Datenmengen-, Scan-, Bitraten- und Übertragungsrechnungen wurden quellen- und rechenwegorientiert nachgezogen. Aufgabenmodus wurde neutralisiert.',
    nextAction: 'Mit legalem AP1-Material unter Zeit gegen Scan-/Datenmengenfälle und Brutto-Netto-Rechnungen testen.',
  },
  'ipv4-subnetting': {
    status: 'teilgeprueft',
    title: 'Teilweise geprueft',
    summary: 'IPv4-/CIDR-Kernfakten, Subnetting-Rechenwege und Beispiele sind auditiert. Aufgabenabgleich fehlt noch.',
    nextAction: 'Mit legalen AP1-/U-Form-Aufgaben unter Zeitdruck testen.',
  },
  netzwerkkonfiguration: {
    status: 'teilgeprueft',
    title: 'Teilweise geprueft',
    summary: 'DHCP, DNS, ARP, APIPA und Diagnosekette sind fachlich nachgezogen. Echte Aufgaben- und Zeitpruefung fehlen noch.',
    nextAction: 'Mit legalen AP1-/U-Form-Aufgaben gegen Diagnose- und Konfigurationsfaelle testen.',
  },
  'homeoffice-ergonomie': {
    status: 'teilgeprueft',
    title: 'Teilweise geprueft',
    summary: 'Ergonomie, Telearbeit und Barrierefreiheit wurden gegen Arbeits- und Web-Barrierefreiheitsquellen nachgezogen. Aufgabenabgleich fehlt noch.',
    nextAction: 'Mit legalen AP1-/U-Form-Aufgaben gegen Auswahl- und Beratungsfaelle testen.',
  },
  'osi-modell': {
    status: 'teilgeprueft',
    title: 'Teilweise geprueft',
    summary: 'OSI-/TCP-IP-Einordnung, Kapselung, ARP/TLS-Grenzfaelle und Diagnosebezug wurden fachlich nachgezogen. Aufgabenabgleich fehlt noch.',
    nextAction: 'Mit legalen AP1-/U-Form-Aufgaben gegen Zuordnungs- und Diagnosefaelle testen.',
  },
  'tcp-udp': {
    status: 'teilgeprueft',
    title: 'Teilweise geprueft',
    summary: 'TCP/UDP, Ports, DNS-Grenzfall, Firewall-/NAT-Bezug und Schicht-4-Diagnose wurden fachlich nachgezogen. Aufgabenabgleich fehlt noch.',
    nextAction: 'Mit legalen AP1-/U-Form-Aufgaben gegen Port-, Protokoll- und Firewall-Regelfaelle testen.',
  },
  'wlan-standards': {
    status: 'teilgeprueft',
    title: 'Teilweise geprueft',
    summary: 'WLAN-Standards, Frequenzbaender, Kanalplanung, WPA2/WPA3 und Gastnetz-Trennung wurden fachlich nachgezogen. Aufgabenabgleich fehlt noch.',
    nextAction: 'Mit legalen AP1-/U-Form-Aufgaben gegen WLAN-Auswahl-, Sicherheits- und Diagnosefaelle testen.',
  },
  'firewall-dmz': {
    status: 'teilgeprueft',
    title: 'Teilweise geprueft',
    summary: 'Firewall-Regeln, Default-Deny, DMZ-Zonen, Administration und Protokollierung wurden gegen BSI-Grundschutz und RFC 1918 abgeglichen. Aufgabenabgleich fehlt noch.',
    nextAction: 'Mit legalen AP1-/U-Form-Aufgaben gegen DMZ-Planungs-, Regelwerks- und Fehlersuchfaelle testen.',
  },
  'port-forwarding': {
    status: 'teilgeprueft',
    title: 'Teilweise geprueft',
    summary: 'Private IPv4-Bereiche, NAT/NAPT, Portweiterleitung, CGNAT/DS-Lite und Sicherheitsgrenzen wurden gegen RFCs und BSI-Quellen abgeglichen. Aufgabenabgleich fehlt noch.',
    nextAction: 'Mit legalen AP1-/U-Form-Aufgaben gegen NAT-/Portweiterleitungs-, Provider- und Sicherheitsfaelle testen.',
  },
  'ipv6-grundlagen': {
    status: 'teilgeprueft',
    title: 'Teilweise geprueft',
    summary: 'IPv6-Adressaufbau, kanonische Schreibweise, Präfixe, Adresstypen, SLAAC und Privacy-Interface-Identifier wurden gegen RFCs abgeglichen. Aufgabenabgleich fehlt noch.',
    nextAction: 'Mit legalen AP1-/U-Form-Aufgaben gegen Kürzungs-, Präfix- und Adresstyp-Fälle testen.',
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
