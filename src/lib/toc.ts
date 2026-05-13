/**
 * Grundlast · Inhaltsverzeichnis
 *
 * Diese Struktur ist die einzige Quelle der Wahrheit für Navigation.
 * Lernfelder = 2-jährige Fachinformatiker-Ausbildung (FISI + FIAE).
 * AP1/AP2-Relevanz wird über exam: true/false als Filter-Tag gesteuert.
 */

export type LessonStatus = "final" | "ready" | "draft" | "stub";

export interface Lesson {
  slug: string;
  title: string;
  minutes?: number;
  importance?: 1 | 2 | 3 | 4 | 5;
  exam?: boolean;       // AP1-prüfungsrelevant
  status?: LessonStatus;
}

export interface Modul {
  slug: string;
  title: string;
  lessons: Lesson[];
}

export interface Lernfeld {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  moduls: Modul[];
}

export const lernfelder: Lernfeld[] = [

  // ── 1. GRUNDLAGEN & RECHNEN ──────────────────────────────────────────────
  {
    slug: "grundlagen",
    title: "Grundlagen & Rechnen",
    description: "Wie ein Computer denkt: Bits, Bytes, Zahlensysteme, Logik.",
    icon: "Binary",
    color: "#818cf8",
    moduls: [
      {
        slug: "rechnerarchitektur",
        title: "Rechnerarchitektur",
        lessons: [
          { slug: "von-neumann", title: "Von-Neumann-Architektur", minutes: 10, importance: 5, exam: true, status: "draft" },
        ],
      },
      {
        slug: "zahlen",
        title: "Zahlen & Einheiten",
        lessons: [
          { slug: "bit-byte", title: "Bit & Byte – die kleinsten Einheiten", minutes: 8, importance: 5, exam: true, status: "draft" },
          { slug: "zahlensysteme", title: "Zahlensysteme (Dual, Hex, Dezimal)", minutes: 12, importance: 5, exam: true, status: "draft" },
          { slug: "prefixe", title: "SI- und Binärpräfixe (KB vs. KiB)", minutes: 8, importance: 5, exam: true, status: "draft" },
        ],
      },
      {
        slug: "logikgatter",
        title: "Logik & Gatter",
        lessons: [
          { slug: "logikgatter", title: "Boolesche Algebra & Logikgatter", minutes: 14, importance: 4, exam: true, status: "stub" },
        ],
      },
    ],
  },

  // ── 2. HARDWARE & SYSTEME ────────────────────────────────────────────────
  {
    slug: "hardware",
    title: "Hardware & Systeme",
    description: "Die Maschine hinter der Software.",
    icon: "Cpu",
    color: "#94a3b8",
    moduls: [
      {
        slug: "komponenten",
        title: "PC-Komponenten",
        lessons: [
          { slug: "cpu-ram-speicher", title: "CPU, RAM und Speicher", minutes: 18, importance: 5, exam: true, status: "draft" },
        ],
      },
      {
        slug: "schnittstellen",
        title: "Schnittstellen & Peripherie",
        lessons: [
          { slug: "hardware-schnittstellen", title: "Hardware, Schnittstellen & Peripherie auswählen", minutes: 28, importance: 5, exam: true, status: "ready" },
          { slug: "homeoffice-ergonomie", title: "Homeoffice, Telearbeit & Ergonomie", minutes: 14, importance: 5, exam: true, status: "ready" },
        ],
      },
      {
        slug: "speichersysteme",
        title: "Speicher & Verfügbarkeit",
        lessons: [
          { slug: "raid-systeme", title: "RAID-Systeme (0, 1, 5, 6, 10)", minutes: 16, importance: 5, exam: true, status: "draft" },
          { slug: "usv-systeme", title: "USV-Systeme", minutes: 14, importance: 4, exam: true, status: "draft" },
        ],
      },
      {
        slug: "bilddaten",
        title: "Bild- & Scandaten rechnen",
        lessons: [
          { slug: "scan-bilddaten", title: "Scan- & Bilddaten rechnen (DPI, Farbtiefe)", minutes: 14, importance: 4, exam: true, status: "draft" },
        ],
      },
    ],
  },

  // ── 3. BETRIEBSSYSTEME & IT-SYSTEME ─────────────────────────────────────
  {
    slug: "betriebssysteme",
    title: "Betriebssysteme & IT-Systeme",
    description: "Linux, Dateisysteme, Prozesse, Virtualisierung und Unternehmenssoftware.",
    icon: "Monitor",
    color: "#64748b",
    moduls: [
      {
        slug: "os-grundlagen",
        title: "Betriebssystem-Grundlagen",
        lessons: [
          { slug: "linux-chmod", title: "Linux-Dateiberechtigungen (chmod, rwx)", minutes: 14, importance: 5, exam: true, status: "draft" },
          { slug: "dateisysteme", title: "Dateisysteme (FAT32, NTFS, ext4, APFS)", minutes: 22, importance: 4, exam: true, status: "ready" },
          { slug: "prozess-thread", title: "Prozesse, Threads & Tasks", minutes: 10, importance: 4, exam: true, status: "stub" },
        ],
      },
      {
        slug: "it-infrastruktur",
        title: "IT-Infrastruktur & Software",
        lessons: [
          { slug: "zentral-dezentral", title: "Zentrale vs. dezentrale IT-Systeme", minutes: 10, importance: 4, exam: true, status: "stub" },
          { slug: "virtualisierung", title: "Virtualisierung & Hypervisor", minutes: 14, importance: 5, exam: true, status: "draft" },
          { slug: "crm-erp-dms", title: "CRM, ERP, DMS & CMS – Unternehmenssoftware", minutes: 18, importance: 4, exam: true, status: "ready" },
        ],
      },
    ],
  },

  // ── 4. NETZWERKE ─────────────────────────────────────────────────────────
  {
    slug: "netzwerke",
    title: "Netzwerke",
    description: "Vom OSI-Modell bis zum Subnetting.",
    icon: "Network",
    color: "#38bdf8",
    moduls: [
      {
        slug: "grundlagen-netz",
        title: "Modelle & Protokolle",
        lessons: [
          { slug: "osi-modell", title: "OSI-Modell – sieben Schichten", minutes: 16, importance: 5, exam: true, status: "ready" },
          { slug: "tcp-udp", title: "TCP vs. UDP", minutes: 8, importance: 5, exam: true, status: "draft" },
          { slug: "imap-pop3-smtp", title: "E-Mail-Protokolle (IMAP, POP3, SMTP)", minutes: 12, importance: 5, exam: true, status: "ready" },
        ],
      },
      {
        slug: "adressierung",
        title: "IPv4 & Subnetting",
        lessons: [
          { slug: "ipv4-subnetting", title: "IPv4 & Subnetting", minutes: 20, importance: 5, exam: true, status: "draft" },
          { slug: "netzwerkkonfiguration", title: "Netzwerkkonfiguration, DHCP, DNS & Diagnose", minutes: 32, importance: 5, exam: true, status: "ready" },
        ],
      },
      {
        slug: "ipv6",
        title: "IPv6",
        lessons: [
          { slug: "ipv6-grundlagen", title: "IPv6 – Aufbau & Adressierung", minutes: 14, importance: 4, exam: true, status: "stub" },
        ],
      },
      {
        slug: "netz-sicherheit",
        title: "Netzwerksicherheit",
        lessons: [
          { slug: "firewall-dmz", title: "Firewall & DMZ", minutes: 14, importance: 5, exam: true, status: "draft" },
          { slug: "port-forwarding", title: "Port Forwarding & NAT", minutes: 10, importance: 3, exam: false, status: "stub" },
          { slug: "wlan-standards", title: "WLAN-Standards (802.11)", minutes: 10, importance: 4, exam: true, status: "stub" },
        ],
      },
      {
        slug: "rechnen-netz",
        title: "Rechenaufgaben",
        lessons: [
          { slug: "datenrate-berechnung", title: "Datenrate & Downloadzeit berechnen", minutes: 15, importance: 5, exam: true, status: "draft" },
          { slug: "datenvolumen-berechnung", title: "Datenmengen, Scan & Übertragung — komplett rechnen", minutes: 30, importance: 5, exam: true, status: "ready" },
        ],
      },
    ],
  },

  // ── 5. DATEN & DATENBANKEN ───────────────────────────────────────────────
  {
    slug: "daten",
    title: "Daten & Datenbanken",
    description: "Tabellen, Beziehungen, Abfragen.",
    icon: "Database",
    color: "#a78bfa",
    moduls: [
      {
        slug: "er-sql",
        title: "ER-Modell & SQL",
        lessons: [
          { slug: "er-grundlagen", title: "Was ist eine Datenbank? & ER-Modell", minutes: 15, importance: 5, exam: true, status: "draft" },
          { slug: "sql-grundlagen", title: "SQL-Grundlagen (SELECT, JOIN, DML)", minutes: 18, importance: 5, exam: false, status: "draft" },
        ],
      },
      {
        slug: "daten-qualitaet",
        title: "Datenqualität & -typen",
        lessons: [
          { slug: "normalisierung", title: "Normalisierung (1NF, 2NF, 3NF)", minutes: 16, importance: 5, exam: true, status: "draft" },
          { slug: "stamm-bewegungsdaten", title: "Stamm- und Bewegungsdaten", minutes: 8, importance: 4, exam: true, status: "stub" },
        ],
      },
    ],
  },

  // ── 6. SOFTWAREENTWICKLUNG ───────────────────────────────────────────────
  {
    slug: "software",
    title: "Softwareentwicklung",
    description: "Algorithmen, Paradigmen, UML.",
    icon: "Code2",
    color: "#60a5fa",
    moduls: [
      {
        slug: "logik",
        title: "Logik & Pseudocode",
        lessons: [
          { slug: "pseudocode-einstieg", title: "Pseudocode, Algorithmen & Kontrollstrukturen", minutes: 30, importance: 5, exam: true, status: "ready" },
          { slug: "uml-aktivitaet", title: "UML-Aktivitätsdiagramm", minutes: 10, importance: 5, exam: true, status: "draft" },
        ],
      },
      {
        slug: "uml-diagramme",
        title: "UML-Diagramme",
        lessons: [
          { slug: "use-case-diagramm", title: "UML-Use-Case-Diagramm", minutes: 18, importance: 5, exam: true, status: "ready" },
          { slug: "uml-beziehungen", title: "UML-Beziehungen (Komposition, Aggregation)", minutes: 10, importance: 3, exam: false, status: "stub" },
        ],
      },
      {
        slug: "paradigmen",
        title: "Programmierkonzepte",
        lessons: [
          { slug: "programmierparadigmen", title: "Programmierparadigmen (OOP, prozedural, funktional)", minutes: 12, importance: 4, exam: true, status: "stub" },
          { slug: "libraries-frameworks", title: "Libraries vs. Frameworks", minutes: 8, importance: 3, exam: false, status: "stub" },
          { slug: "oop-basics", title: "OOP-Grundlagen (Klassen, Objekte, Vererbung)", minutes: 18, importance: 4, exam: false, status: "stub" },
        ],
      },
      {
        slug: "moderne-entwicklung",
        title: "Moderne Entwicklung",
        lessons: [
          { slug: "git-versionsverwaltung", title: "Git & Versionsverwaltung", minutes: 14, importance: 4, exam: false, status: "stub" },
          { slug: "teststrategien", title: "Teststrategien (White-Box, Black-Box, Unit-Tests)", minutes: 14, importance: 4, exam: true, status: "stub" },
        ],
      },
    ],
  },

  // ── 7. PROJEKT & PROZESSE ────────────────────────────────────────────────
  {
    slug: "projekt",
    title: "Projekt & Prozesse",
    description: "Planen, steuern, dokumentieren.",
    icon: "GanttChart",
    color: "#fbbf24",
    moduls: [
      {
        slug: "service-management",
        title: "Service & Support",
        lessons: [
          { slug: "serviceanfragen-support-level", title: "Serviceanfragen, Ticketsystem & Support-Level", minutes: 18, importance: 5, exam: true, status: "ready" },
          { slug: "fehlermanagement-stoerungsannahme", title: "Fehlermanagement & Störungsannahme", minutes: 18, importance: 5, exam: true, status: "ready" },
          { slug: "bedarfsanalyse-feedback", title: "Bedarfsanalyse, Kommunikation & Feedback", minutes: 30, importance: 5, exam: true, status: "ready" },
          { slug: "mitarbeitermotivation-teamphasen-change", title: "Mitarbeitermotivation, Teamphasen und Change", minutes: 28, importance: 5, exam: true, status: "ready" },
          { slug: "schulung-einweisung-key-user", title: "Schulung, Einweisung, Key User & Multiplikatoren", minutes: 24, importance: 5, exam: true, status: "ready" },
          { slug: "schulz-von-thun", title: "4-Seiten-Modell nach Schulz von Thun", minutes: 14, importance: 5, exam: true, status: "ready" },
        ],
      },
      {
        slug: "projektplanung",
        title: "Projektplanung",
        lessons: [
          { slug: "netzplan", title: "Netzplantechnik (FAZ/FEZ/SAZ/SEZ)", minutes: 18, importance: 5, exam: true, status: "draft" },
          { slug: "gantt-diagramm", title: "Gantt-Diagramm — Balkenplan", minutes: 12, importance: 5, exam: true, status: "ready" },
          { slug: "vorgehensmodelle", title: "Vorgehensmodelle (Wasserfall & Agil)", minutes: 14, importance: 5, exam: true, status: "draft" },
          { slug: "bpmn", title: "BPMN – Prozesse modellieren", minutes: 14, importance: 5, exam: true, status: "draft" },
          { slug: "scrum", title: "Scrum – Rollen, Events, Artefakte", minutes: 14, importance: 4, exam: true, status: "draft" },
        ],
      },
      {
        slug: "dokumente",
        title: "Projektdokumente & Abschluss",
        lessons: [
          { slug: "lastenheft-pflichtenheft", title: "Lastenheft & Pflichtenheft", minutes: 8, importance: 4, exam: true, status: "draft" },
          { slug: "machbarkeitsanalyse", title: "Machbarkeitsanalyse", minutes: 10, importance: 4, exam: true, status: "stub" },
          { slug: "projektubergabe", title: "Projektübergabe & Abnahme", minutes: 8, importance: 3, exam: false, status: "stub" },
        ],
      },
    ],
  },

  // ── 8. IT-SICHERHEIT & DATENSCHUTZ ──────────────────────────────────────
  {
    slug: "sicherheit",
    title: "IT-Sicherheit & Datenschutz",
    description: "DSGVO, Verschlüsselung, Passwörter, Angriffsvektoren.",
    icon: "ShieldCheck",
    color: "#fb7185",
    moduls: [
      {
        slug: "dsgvo-krypto",
        title: "DSGVO & Kryptographie",
        lessons: [
          { slug: "dsgvo-basics", title: "DSGVO – die sieben Grundsätze", minutes: 12, importance: 5, exam: true, status: "draft" },
          { slug: "verschluesselung-hash-vpn", title: "Verschlüsselung, Hashing, Zertifikate, Signatur & VPN", minutes: 30, importance: 5, exam: true, status: "ready" },
          // Folgende zwei Kapitel sind durch `verschluesselung-hash-vpn` ersetzt;
          // bleiben als Quelle/Fallback bestehen, aber nicht in der Lernnavigation.
          { slug: "verschluesselung-sicherheit", title: "Verschlüsselung & IT-Sicherheit", minutes: 18, importance: 5, exam: true, status: "draft" },
          { slug: "passwoerter-hashing", title: "Passwörter & Hashing (Salt, Pepper)", minutes: 14, importance: 5, exam: true, status: "draft" },
          { slug: "pki-zertifikate", title: "PKI, CA & Zertifikate", minutes: 12, importance: 4, exam: true, status: "stub" },
        ],
      },
      {
        slug: "betrieb-sicherheit",
        title: "Betriebssicherheit",
        lessons: [
          { slug: "schutzziele", title: "Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz", minutes: 32, importance: 5, exam: true, status: "ready" },
          { slug: "backup-strategien", title: "Backup-Strategien (Voll, Inkrementell, Differenziell)", minutes: 14, importance: 5, exam: true, status: "draft" },
          { slug: "mtbf-mttf", title: "MTBF & MTTF – Ausfallwahrscheinlichkeit", minutes: 12, importance: 4, exam: true, status: "draft" },
          { slug: "ssh-telnet", title: "SSH vs. Telnet", minutes: 8, importance: 4, exam: true, status: "stub" },
          { slug: "endpoint-security", title: "Endpoint-Security & Schutzmaßnahmen", minutes: 12, importance: 4, exam: true, status: "stub" },
          { slug: "malware-grundlagen", title: "Malware — Viren, Würmer, Trojaner, Ransomware", minutes: 22, importance: 5, exam: true, status: "ready" },
        ],
      },
    ],
  },

  // ── 9. WIRTSCHAFT & RECHT ────────────────────────────────────────────────
  {
    slug: "wirtschaft",
    title: "Wirtschaft & Recht",
    description: "Kalkulation, Kosten, Märkte, Finanzierung.",
    icon: "Calculator",
    color: "#34d399",
    moduls: [
      {
        slug: "kalkulation",
        title: "Kalkulation & Kosten",
        lessons: [
          { slug: "kaufmaennische-rechenaufgaben", title: "Kaufmännische Rechenaufgaben (Kosten, Leasing, Skonto)", minutes: 25, importance: 5, exam: true, status: "ready" },
          { slug: "break-even", title: "Break-Even-Analyse", minutes: 12, importance: 5, exam: true, status: "draft" },
          { slug: "handelskalkulation", title: "Handelskalkulation (Vorwärts/Rückwärts)", minutes: 16, importance: 5, exam: true, status: "draft" },
          { slug: "afa-abschreibung", title: "AfA – lineare Abschreibung", minutes: 14, importance: 5, exam: true, status: "draft" },
          { slug: "variable-fixe-kosten", title: "Variable & fixe Kosten", minutes: 10, importance: 5, exam: true, status: "draft" },
          { slug: "gewinnermittlung", title: "Gewinnermittlung & Deckungsbeitrag", minutes: 12, importance: 4, exam: true, status: "draft" },
          { slug: "energiekosten", title: "Energiekosten, Wirkungsgrad & Amortisation", minutes: 16, importance: 4, exam: true, status: "draft" },
        ],
      },
      {
        slug: "entscheidung",
        title: "Wirtschaftliche Entscheidungen",
        lessons: [
          { slug: "nutzwertanalyse", title: "Nutzwertanalyse", minutes: 12, importance: 5, exam: true, status: "draft" },
          { slug: "make-or-buy", title: "Make-or-Buy-Entscheidung", minutes: 18, importance: 4, exam: true, status: "ready" },
          { slug: "angebotsvergleich", title: "Angebotsvergleich (quantitativ & qualitativ)", minutes: 18, importance: 4, exam: true, status: "ready" },
          { slug: "kauf-leasing-miete", title: "Kauf, Leasing & Miete im Vergleich", minutes: 18, importance: 4, exam: true, status: "ready" },
        ],
      },
      {
        slug: "markt",
        title: "Märkte & Finanzierung",
        lessons: [
          { slug: "marktformen", title: "Marktformen (Monopol, Polypol, Oligopol)", minutes: 10, importance: 5, exam: true, status: "draft" },
          { slug: "eigenfremdfinanzierung", title: "Eigen- & Fremdfinanzierung", minutes: 16, importance: 4, exam: true, status: "ready" },
          { slug: "aida-formel", title: "AIDA-Formel & Werbewirkung", minutes: 8, importance: 3, exam: true, status: "ready" },
        ],
      },
      {
        slug: "unternehmen",
        title: "Unternehmen & Organisation",
        lessons: [
          { slug: "organisationsformen-leitbild-nachhaltigkeit-esg", title: "Organisationsformen, Leitbild, Nachhaltigkeit & ESG", minutes: 22, importance: 4, exam: true, status: "ready" },
          { slug: "aufbauorganisation", title: "Aufbauorganisation, Vollmachten & Prokura", minutes: 14, importance: 4, exam: true, status: "ready" },
        ],
      },
    ],
  },

  // ── 10. VERTRAGSRECHT ────────────────────────────────────────────────────
  {
    slug: "vertragsrecht",
    title: "Vertragsrecht",
    description: "Gewährleistung, Mängelrüge, Vertragsstörungen im Handelskauf.",
    icon: "Scale",
    color: "#f97316",
    moduls: [
      {
        slug: "vertraege",
        title: "Verträge & Störungen",
        lessons: [
          { slug: "vertragsarten", title: "Vertragsarten: Kaufvertrag, Dienstvertrag & Werkvertrag", minutes: 20, importance: 4, exam: true, status: "ready" },
          { slug: "rechnung-zahlungsziel-aufbewahrungsfristen", title: "Rechnung, Zahlungsziel & Aufbewahrungsfristen", minutes: 22, importance: 5, exam: true, status: "ready" },
          { slug: "gewaehrleistung", title: "Gewährleistung & Garantie", minutes: 10, importance: 4, exam: true, status: "stub" },
          { slug: "maengelruege", title: "Mängelrüge im Handelskauf", minutes: 10, importance: 5, exam: true, status: "ready" },
          { slug: "vertragsstoerungen", title: "Vertragsstörungen (Verzug, Mängel, Unmöglichkeit)", minutes: 14, importance: 5, exam: true, status: "ready" },
          { slug: "zweiseitiger-handelskauf", title: "Zweiseitiger Handelskauf", minutes: 10, importance: 4, exam: true, status: "stub" },
        ],
      },
    ],
  },

  // ── 11. QUALITÄTSMANAGEMENT ──────────────────────────────────────────────
  {
    slug: "qualitaet",
    title: "Qualitätsmanagement",
    description: "PDCA, EFQM, ISO-Normen und Softwarequalität.",
    icon: "Award",
    color: "#8b5cf6",
    moduls: [
      {
        slug: "qm-methoden",
        title: "QM-Methoden & Normen",
        lessons: [
          { slug: "pdca-zyklus", title: "PDCA-Zyklus", minutes: 10, importance: 4, exam: true, status: "stub" },
          { slug: "efqm-modell", title: "EFQM-Modell", minutes: 10, importance: 3, exam: false, status: "stub" },
          { slug: "iso-9000", title: "ISO 9000–9004", minutes: 10, importance: 4, exam: true, status: "stub" },
          { slug: "iso-25010", title: "ISO 25010 – Softwarequalität", minutes: 12, importance: 4, exam: true, status: "stub" },
        ],
      },
    ],
  },

  // ── 12. WEB & MULTIMEDIA ─────────────────────────────────────────────────
  {
    slug: "webmedia",
    title: "Web & Multimedia",
    description: "Responsive Design, Wireframes, Softwareergonomie, Medienkompression.",
    icon: "Globe",
    color: "#06b6d4",
    moduls: [
      {
        slug: "webdesign",
        title: "Webdesign & Ergonomie",
        lessons: [
          { slug: "website-statisch-dynamisch", title: "Statische vs. dynamische Webseiten", minutes: 12, importance: 5, exam: true, status: "ready" },
          { slug: "responsive-webdesign", title: "Responsive Webdesign", minutes: 10, importance: 4, exam: true, status: "stub" },
          { slug: "mockup-wireframe", title: "Mockup & Wireframe", minutes: 8, importance: 4, exam: true, status: "stub" },
          { slug: "softwareergonomie", title: "Softwareergonomie & Barrierefreiheit", minutes: 10, importance: 4, exam: true, status: "stub" },
        ],
      },
      {
        slug: "medien",
        title: "Mediendaten & Kompression",
        lessons: [
          { slug: "audio-kompression", title: "Audio, MP3 & Datenkompression", minutes: 12, importance: 4, exam: true, status: "stub" },
        ],
      },
    ],
  },

  // ── 13. AKTUELLE THEMEN ──────────────────────────────────────────────────
  {
    slug: "aktuell",
    title: "Aktuelle Themen",
    description: "KI-Grundlagen, Cloud-Konzepte und Lizenzmodelle.",
    icon: "Sparkles",
    color: "#ec4899",
    moduls: [
      {
        slug: "neue-themen",
        title: "Neue & aktuelle Themen",
        lessons: [
          { slug: "ki-grundlagen", title: "KI-Grundlagen (ML, neuronale Netze)", minutes: 16, importance: 5, exam: true, status: "stub" },
          { slug: "cloud-konzepte", title: "Cloud-Konzepte (IaaS, PaaS, SaaS)", minutes: 12, importance: 4, exam: true, status: "stub" },
          { slug: "lizenzmodelle", title: "Lizenzmodelle (Open Source, proprietär, SaaS)", minutes: 10, importance: 4, exam: true, status: "stub" },
        ],
      },
    ],
  },

  // ── 14. ARBEITSRECHT & AUSBILDUNG ────────────────────────────────────────
  {
    slug: "arbeitsrecht",
    title: "Arbeitsrecht & Ausbildung",
    description: "BBiG, Ausbildungsvertrag, Arbeitnehmerrechte.",
    icon: "Briefcase",
    color: "#84cc16",
    moduls: [
      {
        slug: "ausbildung",
        title: "Ausbildung & Recht",
        lessons: [
          { slug: "bbig-ausbildungsvertrag", title: "BBiG & Ausbildungsvertrag", minutes: 12, importance: 4, exam: false, status: "stub" },
          { slug: "arbeitnehmerrechte", title: "Arbeitnehmerrechte & Kündigungsschutz", minutes: 12, importance: 3, exam: false, status: "stub" },
        ],
      },
    ],
  },
];

export function findLesson(slug: string): { lesson: Lesson; modul: Modul; lernfeld: Lernfeld } | null {
  for (const lf of lernfelder) {
    for (const m of lf.moduls) {
      const l = m.lessons.find((x) => x.slug === slug);
      if (l) return { lesson: l, modul: m, lernfeld: lf };
    }
  }
  return null;
}

export interface LessonNavLink {
  label: string;
  to: string;
  eyebrow: string;
}

interface LessonNavEntry extends LessonNavLink {
  slug: string;
}

export function isLessonAvailable(lesson: Pick<Lesson, "status">) {
  return lesson.status === "ready" || lesson.status === "final";
}

export function isLessonFinal(lesson: Pick<Lesson, "status">) {
  return lesson.status === "final";
}

export function lessonStatusLabel(status: LessonStatus | undefined) {
  switch (status) {
    case "final":
      return "Formal geprueft";
    case "ready":
      return "Ausgearbeitet";
    case "draft":
      return "Entwurf";
    case "stub":
      return "Geplant";
    default:
      return "Unbekannt";
  }
}

function lessonRoute(lernfeld: Lernfeld, modul: Modul, lesson: Lesson) {
  return `/lernen/${lernfeld.slug}/${modul.slug}/${lesson.slug}`;
}

export function getLessonNeighbors(slug: string): {
  previous: LessonNavLink | null;
  next: LessonNavLink | null;
} {
  const entries: LessonNavEntry[] = lernfelder.flatMap((lf) =>
    lf.moduls.flatMap((modul) =>
      modul.lessons.filter(isLessonAvailable).map((lesson) => ({
        slug: lesson.slug,
        label: lesson.title,
        to: lessonRoute(lf, modul, lesson),
        eyebrow: `${lf.title} · ${modul.title}`,
      })),
    ),
  );

  const index = entries.findIndex((entry) => entry.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: entries[index - 1] ?? null,
    next: entries[index + 1] ?? null,
  };
}
