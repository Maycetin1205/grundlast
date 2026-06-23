import type { Lernfeld } from "../types"

export const betriebssysteme: Lernfeld = {
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
        { lf: 2, slug: "linux-chmod", title: "Linux-Dateiberechtigungen (chmod, rwx)", minutes: 18, importance: 5, exam: true, status: "ready" },
        { lf: 2, slug: "dateisysteme", title: "Dateisysteme (FAT32, NTFS, ext4, APFS)", minutes: 22, importance: 4, exam: true, status: "ready" },
        { lf: 2, slug: "prozess-thread", title: "Prozesse, Threads & Tasks", minutes: 18, importance: 4, exam: true, status: "ready" },
      ],
    },
    {
      slug: "it-infrastruktur",
      title: "IT-Infrastruktur & Software",
      lessons: [
        { lf: 2, slug: "zentral-dezentral", title: "Zentrale vs. dezentrale IT-Systeme", minutes: 20, importance: 4, exam: true, status: "ready" },
        { lf: 2, slug: "virtualisierung", title: "Virtualisierung & Hypervisor", minutes: 14, importance: 5, exam: true, status: "draft" },
        { lf: 1, slug: "crm-erp-dms", title: "CRM, ERP, DMS & CMS – Unternehmenssoftware", minutes: 18, importance: 4, exam: true, status: "ready" },
      ],
    },
  ],
}
