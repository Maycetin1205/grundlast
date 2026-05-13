import type { GlossarEintrag } from "../../lib/glossar/types"

export const betriebssysteme: GlossarEintrag[] = [
  {
      id: 'crm',
      begriff: 'CRM',
      kurzdefinition: 'CRM buendelt Kundenbeziehungen, Kontakte, Angebote, Kampagnen und Servicehistorie.',
      definition: [
        'CRM steht für Customer Relationship Management. Es beschreibt Strategie und Software, mit denen ein Unternehmen Kundenbeziehungen über Marketing, Vertrieb und Service hinweg plant, dokumentiert und auswertet.',
        'Pruefungsrelevant: CRM erkennst du an Kundenkontakten, Leads, Angeboten, Nachfass-Terminen, Beschwerden und Servicehistorie. Es ist nicht dasselbe wie ERP.',
      ],
      kapitel: {
        titel: 'CRM, ERP, DMS und CMS',
        href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
      },
    },
  {
      id: 'erp-system',
      begriff: 'ERP-System',
      kurzdefinition: 'Ein ERP-System verbindet betriebliche Kernprozesse wie Einkauf, Lager, Auftrag, Rechnung und Controlling.',
      definition: [
        'ERP steht für Enterprise Resource Planning. ERP-Systeme unterstuetzen bereichsübergreifende Geschaeftsprozesse und arbeiten typischerweise mit Modulen für Einkauf, Lager, Produktion, Vertrieb, Personal, Rechnungswesen und Controlling.',
        'Pruefungsrelevant: ERP erkennst du an Ressourcen, Auftraegen, Bestellungen, Bestaenden, Rechnungen, Kostenstellen und unternehmensweiten Prozessen.',
      ],
      kapitel: {
        titel: 'CRM, ERP, DMS und CMS',
        href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
      },
    },
  {
      id: 'dms',
      begriff: 'DMS',
      kurzdefinition: 'Ein DMS verwaltet Dokumente mit Metadaten, Suche, Versionen, Rechten und Freigaben.',
      definition: [
        'DMS steht für Dokumentenmanagementsystem. Es speichert Dokumente nicht nur als Dateien, sondern verwaltet sie strukturiert mit Metadaten, Berechtigungen, Versionierung, Suche und oft Freigabeprozessen.',
        'Pruefungsrelevant: DMS passt zu Vertraegen, Rechnungen, Spezifikationen, Protokollen, Archivierung, Dokumentensuche und kontrollierter Freigabe.',
      ],
      kapitel: {
        titel: 'CRM, ERP, DMS und CMS',
        href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
      },
    },
  {
      id: 'cms',
      begriff: 'CMS',
      kurzdefinition: 'Ein CMS verwaltet digitale Inhalte für Website, Intranet, Portal oder andere Publikationskanaele.',
      definition: [
        'CMS steht für Content Management System. Es unterstuetzt Redaktion, Medienverwaltung, Rechte, Templates und Veroeffentlichung digitaler Inhalte.',
        'Pruefungsrelevant: CMS erkennst du an Website, Intranet, Produktseiten, News, Downloads, redaktioneller Pflege und Trennung von Inhalt und Layout.',
      ],
      kapitel: {
        titel: 'CRM, ERP, DMS und CMS',
        href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
      },
    },
  {
      id: 'unternehmenssoftware',
      begriff: 'Unternehmenssoftware',
      kurzdefinition: 'Unternehmenssoftware unterstützt betriebliche Aufgaben und Geschäftsprozesse.',
      definition: [
        'Unternehmenssoftware umfasst Anwendungen, die betriebliche Prozesse unterstuetzen, etwa Kundenbetreuung, Warenwirtschaft, Dokumentenablage, Rechnungswesen, Personal oder Content-Pflege.',
        'In AP1-Aufgaben geht es meist darum, Systemklassen anhand von Zweck, Daten und Prozess zu unterscheiden, nicht darum, einen bestimmten Hersteller auswendig zu kennen.',
      ],
      kapitel: {
        titel: 'CRM, ERP, DMS und CMS',
        href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
      },
    },
  {
      id: 'schnittstelle',
      begriff: 'Schnittstelle',
      kurzdefinition: 'Eine Schnittstelle ist ein definierter Übergang für den Datenaustausch zwischen Systemen.',
      definition: [
        'Eine Schnittstelle legt fest, welche Daten Systeme austauschen, in welchem Format sie übertragen werden und wie Fehler behandelt werden. Beispiele sind Kundennummern, Auftraege, Rechnungen, Dokument-IDs oder Statusinformationen.',
        'Pruefungsrelevant: Schnittstellen reduzieren doppelte Datenerfassung, brauchen aber saubere Datenfelder, Verantwortlichkeiten, Berechtigungen und Testfaelle.',
      ],
      kapitel: {
        titel: 'CRM, ERP, DMS und CMS',
        href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
      },
    },
  {
      id: 'medienbruch',
      begriff: 'Medienbruch',
      kurzdefinition: 'Ein Medienbruch unterbricht einen digitalen Prozess, oft durch manuelle Übertragung zwischen Systemen oder Medien.',
      definition: [
        'Ein Medienbruch entsteht, wenn Informationen nicht durchgaengig digital weiterverarbeitet werden, sondern zum Beispiel aus E-Mail, Papier oder Excel manuell in ein anderes System übertragen werden.',
        'Typische Folgen sind Fehler, Zeitverlust, Doppelarbeit und widerspruechliche Datenstaende. In Aufgaben ist eine Schnittstelle oft eine passende Gegenmassnahme.',
      ],
      kapitel: {
        titel: 'CRM, ERP, DMS und CMS',
        href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
      },
    },
  {
      id: 'workflow',
      begriff: 'Workflow',
      kurzdefinition: 'Ein Workflow ist ein festgelegter Arbeitsablauf mit Schritten, Rollen und Status.',
      definition: [
        'Ein Workflow beschreibt, welche Arbeitsschritte in welcher Reihenfolge ablaufen und welche Rolle jeweils verantwortlich ist. Typische Status sind neu, in Pruefung, freigegeben, abgelehnt oder archiviert.',
        'In DMS- und ERP-Aufgaben sind Workflows wichtig, wenn Dokumente, Rechnungen, Bestellungen oder Aenderungen kontrolliert geprueft und freigegeben werden müssen.',
      ],
      kapitel: {
        titel: 'CRM, ERP, DMS und CMS',
        href: '/lernen/betriebssysteme/it-infrastruktur/crm-erp-dms',
      },
    },
  {
      id: 'dateisystem',
      begriff: 'Dateisystem',
      kurzdefinition: 'Organisationsschema, das festlegt, wie Dateien und Verzeichnisse auf einem Datentraeger gespeichert und verwaltet werden.',
      definition: [
        'Ein Dateisystem definiert, wie Daten auf einem Datentraeger logisch organisiert sind. Es legt fest, wie Dateien benannt, in Verzeichnisse gruppiert, mit Metadaten (Groesse, Rechte, Zeitstempel) versehen und in physischen Speicherbloecken abgelegt werden.',
        'Bekannte Beispiele sind FAT32 und exFAT (geraeteuebergreifend), NTFS (Windows), ext4 (Linux) und APFS (macOS/iOS). Die Wahl bestimmt Kompatibilitaet, maximale Dateigroesse, Rechtemodell und Schutz vor Datenverlust.',
      ],
      kapitel: {
        titel: 'Dateisysteme (FAT32, NTFS, ext4, APFS)',
        href: '/lernen/betriebssysteme/os-grundlagen/dateisysteme',
      },
    },
  {
      id: 'cluster',
      begriff: 'Cluster',
      kurzdefinition: 'Kleinste Speichereinheit, in der ein Dateisystem Daten auf dem Datentraeger ablegt.',
      definition: [
        'Ein Cluster (auch Allocation Unit) ist die kleinste Einheit, die ein Dateisystem fuer Dateien reserviert. Typische Clustergroessen liegen bei 4 KiB; bei FAT32 sind groessere Cluster bis 32 KiB ueblich.',
        'Eine 1-Byte-Datei belegt trotzdem einen ganzen Cluster — der Rest gilt als interner Verschnitt (Slack). Groessere Cluster bedeuten weniger Verwaltungsaufwand, aber mehr Verschnitt; kleinere Cluster sind effizienter bei vielen kleinen Dateien.',
      ],
      kapitel: {
        titel: 'Dateisysteme (FAT32, NTFS, ext4, APFS)',
        href: '/lernen/betriebssysteme/os-grundlagen/dateisysteme',
      },
    },
  {
      id: 'journaling',
      begriff: 'Journaling',
      kurzdefinition: 'Verfahren, bei dem ein Dateisystem geplante Aenderungen vor der Ausführung in einem Logbuch festhaelt.',
      definition: [
        'Beim Journaling protokolliert das Dateisystem vor jeder Schreibaktion, was es vorhat. Stuerzt das System mitten in der Operation ab, kann das Dateisystem aus dem Journal entweder die Aenderung sauber abschliessen oder den vorherigen Zustand wiederherstellen.',
        'Journaling schuetzt vor Inkonsistenzen nach Stromausfall oder Crash. NTFS und ext4 sind klassische Journaling-Dateisysteme; APFS nutzt stattdessen Copy-on-Write, das einen aehnlichen Schutz erreicht. FAT32 kennt kein Journaling.',
      ],
      kapitel: {
        titel: 'Dateisysteme (FAT32, NTFS, ext4, APFS)',
        href: '/lernen/betriebssysteme/os-grundlagen/dateisysteme',
      },
    },
  {
      id: 'inode',
      begriff: 'Inode',
      kurzdefinition: 'Metadaten-Eintrag in Unix-aehnlichen Dateisystemen, der eine einzelne Datei beschreibt.',
      definition: [
        'Ein Inode (Index Node) speichert in ext-Dateisystemen alle Metadaten einer Datei: Eigentuemer, Gruppe, Rechte, Groesse, Zeitstempel und Verweise auf die tatsaechlichen Datenbloecke. Der Dateiname steht nicht im Inode, sondern im Verzeichniseintrag.',
        'Die Anzahl der Inodes wird beim Formatieren festgelegt. Sind alle Inodes belegt, koennen keine neuen Dateien angelegt werden — auch wenn freier Speicherplatz vorhanden ist.',
      ],
      kapitel: {
        titel: 'Dateisysteme (FAT32, NTFS, ext4, APFS)',
        href: '/lernen/betriebssysteme/os-grundlagen/dateisysteme',
      },
    },
  {
      id: 'mft',
      begriff: 'MFT (Master File Table)',
      kurzdefinition: 'Zentrale Tabelle in NTFS, die alle Dateien und Verzeichnisse des Datentraegers verwaltet.',
      definition: [
        'Die Master File Table ist das Herzstueck von NTFS. Sie enthaelt fuer jede Datei und jedes Verzeichnis einen Eintrag mit Metadaten, Rechten, Zeitstempeln und Verweisen auf die Datenbloecke. Bei sehr kleinen Dateien speichert NTFS die Inhalte sogar direkt im MFT-Eintrag.',
        'Wenn die MFT beschaedigt wird, ist der gesamte Datentraeger nicht mehr lesbar. Deshalb haelt NTFS eine Kopie der ersten MFT-Eintraege als Sicherheit vor.',
      ],
      kapitel: {
        titel: 'Dateisysteme (FAT32, NTFS, ext4, APFS)',
        href: '/lernen/betriebssysteme/os-grundlagen/dateisysteme',
      },
    },
  {
      id: 'cow-copy-on-write',
      begriff: 'Copy-on-Write',
      kurzdefinition: 'Schreibverfahren, bei dem geaenderte Datenbloecke neu geschrieben werden, statt vorhandene zu überschreiben.',
      definition: [
        'Beim Copy-on-Write (CoW) schreibt das Dateisystem geaenderte Daten in neue Bloecke und aktualisiert erst danach die Verweise. Der alte Zustand bleibt erhalten, bis er nicht mehr benoetigt wird.',
        'CoW ermoeglicht effiziente Snapshots und schuetzt aehnlich wie Journaling vor inkonsistenten Zustaenden nach Abstuerzen. APFS und ZFS arbeiten nach diesem Prinzip; NTFS und ext4 nicht.',
      ],
      kapitel: {
        titel: 'Dateisysteme (FAT32, NTFS, ext4, APFS)',
        href: '/lernen/betriebssysteme/os-grundlagen/dateisysteme',
      },
    },
  {
      id: 'prozess',
      begriff: 'Prozess',
      kurzdefinition: 'Laufende Instanz eines Programms mit eigenem Speicherbereich und Betriebssystemressourcen.',
      definition: [
        'Ein Prozess entsteht, wenn ein Programm gestartet wird. Er besitzt typischerweise eine Prozess-ID, eigenen virtuellen Speicher, geoeffnete Dateien, Rechte, Umgebung und mindestens einen Thread.',
        'Pruefungsrelevant: Der Prozess ist die Ressourcengrenze. Ausgefuehrt wird aber ein Thread innerhalb des Prozesses.',
      ],
      kapitel: {
        titel: 'Prozesse, Threads und Tasks',
        href: '/lernen/betriebssysteme/os-grundlagen/prozess-thread',
      },
    },
  {
      id: 'thread',
      begriff: 'Thread',
      kurzdefinition: 'Ausfuehrungsstrang innerhalb eines Prozesses, dem das Betriebssystem CPU-Zeit zuteilt.',
      definition: [
        'Ein Thread laeuft im Kontext eines Prozesses und teilt dessen Speicherbereich und Ressourcen mit anderen Threads desselben Prozesses.',
        'Threads sind leichter als Prozesse, koennen aber durch gemeinsamen Speicher auch Fehler verursachen, wenn mehrere Threads gleichzeitig dieselben Daten veraendern.',
      ],
      kapitel: {
        titel: 'Prozesse, Threads und Tasks',
        href: '/lernen/betriebssysteme/os-grundlagen/prozess-thread',
      },
    },
  {
      id: 'task',
      begriff: 'Task',
      kurzdefinition: 'Allgemeiner Begriff fuer eine auszufuehrende Aufgabe; Bedeutung haengt vom Systemkontext ab.',
      definition: [
        'Task kann in Oberflaechen eine Anwendung oder einen Prozess meinen, in Scheduler-Kontexten aber allgemeiner eine planbare Arbeitseinheit.',
        'Deshalb muss bei Aufgaben immer der Kontext beachtet werden: Task-Manager, Betriebssystem-Scheduler oder geplante Hintergrundaufgabe meinen nicht zwingend exakt dasselbe.',
      ],
      kapitel: {
        titel: 'Prozesse, Threads und Tasks',
        href: '/lernen/betriebssysteme/os-grundlagen/prozess-thread',
      },
    },
  {
      id: 'scheduler',
      begriff: 'Scheduler',
      kurzdefinition: 'Betriebssystem-Komponente, die entscheidet, welcher Thread oder Task CPU-Zeit bekommt.',
      definition: [
        'Der Scheduler verteilt Prozessorzeit auf lauffaehige Threads oder Tasks. Dabei spielen Zustand, Prioritaet, Fairness und verfuegbare CPU-Kerne eine Rolle.',
        'Ohne Scheduler koennte ein Betriebssystem mehrere Programme nicht geordnet scheinbar gleichzeitig ausfuehren.',
      ],
      kapitel: {
        titel: 'Prozesse, Threads und Tasks',
        href: '/lernen/betriebssysteme/os-grundlagen/prozess-thread',
      },
    },
  {
      id: 'kontextwechsel',
      begriff: 'Kontextwechsel',
      kurzdefinition: 'Wechsel der CPU von einem Thread oder Task zu einem anderen.',
      definition: [
        'Bei einem Kontextwechsel speichert das Betriebssystem den aktuellen Ausfuehrungszustand und stellt den Zustand eines anderen Threads oder Tasks wieder her.',
        'Kontextwechsel ermoeglichen Multitasking, kosten aber Zeit. Sehr viele Wechsel koennen ein System ausbremsen.',
      ],
      kapitel: {
        titel: 'Prozesse, Threads und Tasks',
        href: '/lernen/betriebssysteme/os-grundlagen/prozess-thread',
      },
    },
  {
      id: 'multitasking',
      begriff: 'Multitasking',
      kurzdefinition: 'Faehigkeit eines Betriebssystems, mehrere Aufgaben scheinbar gleichzeitig auszufuehren.',
      definition: [
        'Beim Multitasking teilt das Betriebssystem CPU-Zeit auf mehrere lauffaehige Threads oder Tasks auf. Auf einem Kern geschieht das durch schnelles Umschalten, auf mehreren Kernen kann echte Parallelitaet entstehen.',
        'Pruefungsrelevant: Multitasking ist nicht automatisch echte parallele Berechnung. Dafuer braucht es mehrere Kerne oder Prozessoren und parallelisierbare Arbeit.',
      ],
      kapitel: {
        titel: 'Prozesse, Threads und Tasks',
        href: '/lernen/betriebssysteme/os-grundlagen/prozess-thread',
      },
    },
  {
      id: 'zentralisiertes-it-system',
      begriff: 'Zentralisiertes IT-System',
      kurzdefinition: 'IT-Architektur, bei der Daten, Dienste oder Verwaltung an einer zentralen Stelle gebuendelt werden.',
      definition: [
        'Ein zentralisiertes IT-System konzentriert wichtige Funktionen wie Dateiablage, Benutzerverwaltung, Datenbanken, Softwareverteilung oder Backup auf zentrale Server oder Dienste.',
        'Vorteile sind einheitliche Verwaltung, besser kontrollierbare Rechte und zentrale Sicherung. Risiken sind Abhaengigkeit vom zentralen Dienst und hoehere Anforderungen an Verfuegbarkeit, Backup und Notfallplanung.',
      ],
      kapitel: {
        titel: 'Zentrale vs. dezentrale IT-Systeme',
        href: '/lernen/betriebssysteme/it-infrastruktur/zentral-dezentral',
      },
    },
  {
      id: 'dezentralisiertes-it-system',
      begriff: 'Dezentralisiertes IT-System',
      kurzdefinition: 'IT-Architektur, bei der Daten, Dienste oder Verantwortung auf mehrere Systeme verteilt sind.',
      definition: [
        'Ein dezentralisiertes IT-System verteilt Funktionen auf mehrere Rechner, Standorte oder Verantwortungsbereiche. Beispiele sind lokale Benutzerkonten, lokale Dateiablagen oder Peer-to-Peer-Freigaben.',
        'Dezentrale Loesungen koennen lokal schnell und einfach sein, fuehren aber bei Wachstum oft zu Versionsproblemen, uneinheitlichen Rechten und schwierigerem Backup.',
      ],
      kapitel: {
        titel: 'Zentrale vs. dezentrale IT-Systeme',
        href: '/lernen/betriebssysteme/it-infrastruktur/zentral-dezentral',
      },
    },
  {
      id: 'hybrides-it-system',
      begriff: 'Hybrides IT-System',
      kurzdefinition: 'IT-Architektur, die zentrale und dezentrale Anteile bewusst kombiniert.',
      definition: [
        'Ein hybrides IT-System nutzt zentrale Dienste fuer gemeinsame Daten, Identitaeten oder Backups und erlaubt gleichzeitig lokale Komponenten, etwa Offline-Synchronisation, lokale Caches oder Standortserver.',
        'Hybride Architekturen sind realistisch, brauchen aber klare Datenfluesse, Verantwortlichkeiten und Synchronisationsregeln.',
      ],
      kapitel: {
        titel: 'Zentrale vs. dezentrale IT-Systeme',
        href: '/lernen/betriebssysteme/it-infrastruktur/zentral-dezentral',
      },
    },
  {
      id: 'client-server-modell',
      begriff: 'Client-Server-Modell',
      kurzdefinition: 'Architektur, bei der Clients Dienste eines Servers anfordern und nutzen.',
      definition: [
        'Im Client-Server-Modell stellen Server zentrale Dienste bereit, zum Beispiel Dateien, Druck, Datenbanken, Webseiten oder Authentifizierung. Clients greifen ueber das Netzwerk darauf zu.',
        'Pruefungsrelevant: Der Server buendelt Verwaltung und Daten, muss aber gegen Ausfall, Fehlkonfiguration und unberechtigten Zugriff geschuetzt werden.',
      ],
      kapitel: {
        titel: 'Zentrale vs. dezentrale IT-Systeme',
        href: '/lernen/betriebssysteme/it-infrastruktur/zentral-dezentral',
      },
    },
  {
      id: 'peer-to-peer',
      begriff: 'Peer-to-Peer',
      kurzdefinition: 'Architektur, bei der gleichrangige Systeme direkt miteinander Ressourcen austauschen.',
      definition: [
        'Bei Peer-to-Peer gibt es keinen dauerhaft uebergeordneten zentralen Server fuer die betrachtete Funktion. Geraete stellen sich gegenseitig Ressourcen bereit, etwa lokale Ordnerfreigaben.',
        'Das kann fuer kleine oder kurzfristige Szenarien reichen, wird aber bei vielen Nutzern schnell unuebersichtlich.',
      ],
      kapitel: {
        titel: 'Zentrale vs. dezentrale IT-Systeme',
        href: '/lernen/betriebssysteme/it-infrastruktur/zentral-dezentral',
      },
    },
  {
      id: 'verzeichnisdienst',
      begriff: 'Verzeichnisdienst',
      kurzdefinition: 'Zentraler Dienst zur Verwaltung von Benutzern, Computern, Gruppen, Ressourcen und Rechten.',
      definition: [
        'Ein Verzeichnisdienst speichert Objekte wie Benutzerkonten, Gruppen, Computer, Drucker oder Freigaben strukturiert und macht sie fuer Verwaltung und Zugriffskontrolle nutzbar.',
        'Active Directory Domain Services ist ein typisches Beispiel. Es erlaubt zentrale Anmeldung, Gruppenrichtlinien und Rechteverwaltung in Windows-Netzen.',
      ],
      kapitel: {
        titel: 'Zentrale vs. dezentrale IT-Systeme',
        href: '/lernen/betriebssysteme/it-infrastruktur/zentral-dezentral',
      },
    },
  {
      id: 'single-point-of-failure',
      begriff: 'Single Point of Failure',
      kurzdefinition: 'Einzelne Komponente, deren Ausfall einen ganzen Dienst oder Prozess lahmlegt.',
      definition: [
        'Ein Single Point of Failure entsteht, wenn ein Dienst von einer einzelnen Komponente abhaengt und es keine Redundanz oder Ersatzroute gibt.',
        'Zentrale Systeme muessen deshalb mit Backup, Monitoring, Redundanz und Wiederanlaufplan betrieben werden.',
      ],
      kapitel: {
        titel: 'Zentrale vs. dezentrale IT-Systeme',
        href: '/lernen/betriebssysteme/it-infrastruktur/zentral-dezentral',
      },
    },
]
