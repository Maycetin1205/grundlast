import type { Lernfeld } from "../types"

export const sicherheit: Lernfeld = {
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
        { lf: 4, slug: "dsgvo-basics", title: "DSGVO – die sieben Grundsätze", minutes: 12, importance: 5, exam: true, status: "draft" },
        { lf: 4, slug: "verschluesselung-hash-vpn", title: "Verschlüsselung, Hashing, Zertifikate, Signatur & VPN", minutes: 30, importance: 5, exam: true, status: "ready" },
        // Folgende zwei Kapitel sind durch `verschluesselung-hash-vpn` ersetzt;
        // bleiben als Quelle/Fallback bestehen, aber nicht in der Lernnavigation.
        { lf: 4, slug: "verschluesselung-sicherheit", title: "Verschlüsselung & IT-Sicherheit", minutes: 18, importance: 5, exam: true, status: "draft" },
        { lf: 4, slug: "passwoerter-hashing", title: "Passwörter & Hashing (Salt, Pepper)", minutes: 14, importance: 5, exam: true, status: "draft" },
        { lf: 4, slug: "pki-zertifikate", title: "PKI, CA & Zertifikate", minutes: 18, importance: 5, exam: true, status: "final" },
      ],
    },
    {
      slug: "betrieb-sicherheit",
      title: "Betriebssicherheit",
      lessons: [
        { lf: 4, slug: "schutzziele", title: "Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz", minutes: 32, importance: 5, exam: true, status: "ready" },
        { lf: 4, slug: "backup-strategien", title: "Backup-Strategien (Voll, Inkrementell, Differenziell)", minutes: 14, importance: 5, exam: true, status: "draft" },
        { lf: 4, slug: "mtbf-mttf", title: "MTBF & MTTF – Ausfallwahrscheinlichkeit", minutes: 12, importance: 4, exam: true, status: "draft" },
        { lf: 4, slug: "ssh-telnet", title: "SSH vs. Telnet", minutes: 8, importance: 4, exam: true, status: "stub" },
        { lf: 4, slug: "endpoint-security", title: "Endpoint-Security & Schutzmaßnahmen", minutes: 14, importance: 5, exam: true, status: "ready" },
        { lf: 4, slug: "malware-grundlagen", title: "Malware — Viren, Würmer, Trojaner, Ransomware", minutes: 22, importance: 5, exam: true, status: "ready" },
      ],
    },
  ],
}
