import type { Lernfeld } from "../types"

export const netzwerke: Lernfeld = {
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
        { lf: 3, slug: "osi-modell", title: "OSI-Modell – sieben Schichten", minutes: 16, importance: 5, exam: true, status: "ready" },
        { lf: 3, slug: "tcp-udp", title: "TCP vs. UDP", minutes: 24, importance: 5, exam: true, status: "ready" },
        { lf: 3, slug: "imap-pop3-smtp", title: "E-Mail-Protokolle (IMAP, POP3, SMTP)", minutes: 12, importance: 5, exam: true, status: "ready" },
      ],
    },
    {
      slug: "adressierung",
      title: "IPv4 & Subnetting",
      lessons: [
        { lf: 3, slug: "ipv4-subnetting", title: "IPv4 & Subnetting", minutes: 20, importance: 5, exam: true, status: "ready" },
        { lf: 3, slug: "netzwerkkonfiguration", title: "Netzwerkkonfiguration, DHCP, DNS & Diagnose", minutes: 32, importance: 5, exam: true, status: "ready" },
      ],
    },
    {
      slug: "ipv6",
      title: "IPv6",
      lessons: [
        { lf: 3, slug: "ipv6-grundlagen", title: "IPv6 – Aufbau & Adressierung", minutes: 20, importance: 5, exam: true, status: "ready" },
      ],
    },
    {
      slug: "netz-sicherheit",
      title: "Netzwerksicherheit",
      lessons: [
        { lf: 3, slug: "firewall-dmz", title: "Firewall und DMZ", minutes: 24, importance: 5, exam: true, status: "ready" },
        { lf: 3, slug: "port-forwarding", title: "Port Forwarding und NAT", minutes: 24, importance: 4, exam: true, status: "ready" },
        { lf: 3, slug: "wlan-standards", title: "WLAN-Standards und WLAN-Sicherheit", minutes: 22, importance: 4, exam: true, status: "ready" },
      ],
    },
    {
      slug: "rechnen-netz",
      title: "Rechenaufgaben",
      lessons: [
        { lf: 2, slug: "datenrate-berechnung", title: "Datenrate & Downloadzeit berechnen", minutes: 24, importance: 5, exam: true, status: "ready" },
        { lf: 3, slug: "datenvolumen-berechnung", title: "Datenmengen, Scan & Übertragung — komplett rechnen", minutes: 30, importance: 5, exam: true, status: "ready" },
      ],
    },
  ],
}
