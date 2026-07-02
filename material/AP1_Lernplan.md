
# AP1 Lernplan & Zusammenfassung 
Fachinformatiker: Malliw
Reddit: u/Ammonox

Dieser Plan basiert auf dem Prüfungskatalog 2025 sowie der Analyse der Prüfungen von 2021 bis 2025. Er gilt für alle IT-Berufe, da die AP1 (Einrichten eines IT-gestützten Arbeitsplatzes) inhaltsgleich ist.

**Ziel:** Strukturierte Vorbereitung und Abgleich mit dem aktuellen Katalog.

----------

## 1. Änderungen und Streichliste

Wichtiger Abgleich: Was ist im aktuellen Katalog gestrichen, was ist neu, was ist geblieben?

-   **RAID-Level konfigurieren:** [Gestrichen]
    
    -   Detailtiefe zur Konfiguration ist entfallen. Das Konzept der Verfügbarkeit bleibt relevant.
        
-   **NAS / Datensicherung:** [Relevant]
    
    -   Explizit gefordert als "Sicherung der Verfügbarkeit".
        
-   **SAN (Storage Area Network):** [Gestrichen]
    
    -   Zu komplex für AP1, eher AP2.
        
-   **Komplexes SQL:** [Gestrichen]
    
    -   Keine JOINs, GROUP BY, HAVING.
        
    -   **Wichtig:** Einfache SELECT-Abfragen auf einer Tabelle sind explizit gefordert.
        
-   **Struktogramme / PAP:** [Gestrichen]
    
    -   Ersetzt durch UML Aktivitätsdiagramme.
        
-   **Vererbung (OOP):** [Gestrichen]
    
    -   Keine Vererbungshierarchien.
        
    -   **Neu:** Fokus auf Klassen, Attribute, Objekte, Methoden und Sichtbarkeit.
        
-   **LTE / 5G Details:** [Gestrichen]
    
    -   Kein tiefes technisches Funkwissen mehr gefordert.
        
-   **ISO 2700x Normen:** [Gestrichen]
    
    -   Ersetzt durch "BSI IT-Grundschutz-Kompendium" (Auszüge).
        
-   **NoSQL Datenbanken:** [Gestrichen]
    
    -   Fokus liegt rein auf relationalen Datenbanken & ER-Modellen.
        

----------

## 2. Themenschwerpunkte (Priorisierung)

Basierend auf der Häufigkeit in den letzten 9 Prüfungen.

**Sehr hohe Priorität (Dauerbrenner)**

-   Nutzwertanalyse & Angebote (Kam in 9/9 Prüfungen)
    
-   Netzplan & Projektmanagement (Kam in 9/9 Prüfungen)
    
-   Schreibtischtest & Code-Analyse (Kam in 9/9 Prüfungen)
    

**Hohe Priorität**

-   SQL & ER-Modell (Einfache Abfragen)
    
-   IPv6-Konfiguration & Subnetting
    
-   Dateigrößen & Speicher berechnen
    

**Mittlere Priorität & Neue Trends**

-   Künstliche Intelligenz (KI) [Neu 2025]
    
-   Endpoint-Security & Malware
    
-   Gantt-Diagramm
    
-   UML Diagramme (Use-Case, Klasse, Aktivität)
    
-   Barrierefreiheit [Neu & explizit im Katalog]
    
-   Englische Texte interpretieren [Neu & explizit im Katalog]
    

----------

## 3. Lern-Checkliste (4-Wochen-Struktur)

### Bereich 1: Wirtschaft, Hardware & Rechnen

**1.1 Nutzwertanalyse (NWA) & Angebote**

-   [ ] Schema beherrschen: Gewichtung mal Bewertung gleich Wert; Summe entscheidet.
    
-   [ ] Subjektivität verstehen: Gewichtung ist eine Managemententscheidung.
    
-   [ ] Quantitativer Vergleich: Rein preisbezogen.
    
-   [ ] Qualitativer Vergleich: Support, Garantie, Referenzen.
    
-   [ ] K.O.-Kriterium vs. Soll-Kriterium unterscheiden.
    

**1.2 Handelskalkulation & Finanzierung**

-   [ ] Vorwärtskalkulation Schema (auswendig lernen):
    
    ```
    Listeneinkaufspreis (netto)
    - Liefererrabatt
    = Zieleinkaufspreis
    - Lieferskonto
    = Bareinkaufspreis
    + Bezugskosten
    = Einstandspreis (Bezugspreis)
    
    ```
    
-   [ ] Kauf vs. Leasing vs. Miete vergleichen (Liquidität, Eigentum).
    
-   [ ] Amortisationsrechnung: Wann decken die Einsparungen die Anschaffungskosten?
    

**1.3 Hardware & Energie**

-   [ ] Stromkosten berechnen: `(Watt / 1000) * Stunden * Tage * Preis`. (Achtung: 1 kW = 1000 Watt).
    
-   [ ] Wirkungsgrad berechnen: `Nutzleistung / Eingangsleistung`.
    
-   [ ] USV-Arten unterscheiden: Online (VFI), Offline (VFD), Line-Interactive (VI).
    
-   [ ] Speichertechnologien: HDD vs. SSD vs. Hybrid.
    

**1.4 Schnittstellen**

-   [ ] Video: DisplayPort, HDMI, USB-C, DVI.
    
-   [ ] Daten: USB 2.0 vs. 3.0/3.1 vs. USB-C.
    

----------

### Bereich 2: Barrierefreiheit (Accessibility)

Dieser Bereich wird im Katalog 2025 explizit genannt.

**2.1 Hardware-Lösungen**

-   [ ] Braillezeile (für Sehbehinderte).
    
-   [ ] Screenreader (Software wie NVDA/JAWS).
    
-   [ ] Systemlupe / Kontrast-Einstellungen.
    
-   [ ] Ergonomie: Trackball, spezialisierte Tastaturen, Eye-Tracking.
    

**2.2 Software & Web (WCAG Standards)**

-   [ ] Kontrastverhältnis: Mindestens 4,5:1 für Text.
    
-   [ ] Alt-Texte: Bilder müssen für Screenreader beschrieben sein.
    
-   [ ] Tastaturnavigation: Bedienung muss ohne Maus möglich sein (Tab-Reihenfolge).
    
-   [ ] Formulare: Müssen Labels (Beschriftungen) besitzen.
    
-   [ ] Skalierbarkeit: Schriftgröße muss anpassbar sein.
    

----------

### Bereich 3: Software, Logik & Englisch

**3.1 Englischkompetenz**

-   [ ] Fehlermeldungen interpretieren (nicht nur übersetzen, sondern Ursache erkennen).
    
    -   Begriffe: Connection refused, Timeout, Permission denied, Deprecated, Unauthorized.
        
-   [ ] Handbuch-Auszüge verstehen und Handlungsschritte ableiten.
    

**3.2 Schreibtischtest (Desk Check)**

-   [ ] Trace Table erstellen: Variablen schrittweise in Tabelle verfolgen.
    
-   [ ] Typische Logikfehler finden: Endlosschleifen, Off-by-One Fehler, Division durch Null.
    

**3.3 UML-Diagramme**

-   [ ] Use-Case-Diagramm: Akteur, Systemgrenze, Include (Pflicht), Extend (Optional).
    
-   [ ] Klassendiagramm: Klassenname, Attribute, Methoden, Sichtbarkeit (+/-), Kardinalitäten (1:1, 1:n, n:m).
    
-   [ ] Aktivitätsdiagramm: Start/Ende, Aktion, Entscheidung (Raute), Gabelung/Fusion.
    

**3.4 SQL & Datenmodellierung**

-   [ ] Einfache SQL-Abfragen: `SELECT ... FROM ... WHERE ... ORDER BY`.
    
-   [ ] Operatoren: `=`, `<`, `>`, `LIKE`, `AND`, `OR`, `BETWEEN`.
    
-   [ ] ER-Modell (Chen-Notation): Entität (Rechteck), Beziehung (Raute), Attribut (Oval).
    

----------

### Bereich 4: Netzwerk & Infrastruktur

**4.1 OSI-Modell & Protokolle**

-   [ ] Alle 7 Schichten benennen und Protokolle zuordnen können (Layer 1 bis 7).
    
-   [ ] Wichtige Ports kennen: FTP (20/21), SSH (22), SMTP (25), DNS (53), HTTP (80), HTTPS (443), IMAP (143), RDP (3389).
    

**4.2 IPv4 & Subnetting**

-   [ ] Umrechnung Dezimal <-> Binär.
    
-   [ ] CIDR verstehen (/24, /26 etc.).
    
-   [ ] Netzadresse, Broadcast, ersten/letzten Host berechnen.
    

**4.3 IPv6 Adressierung**

-   [ ] Aufbau verstehen (128 Bit, Hexadezimal).
    
-   [ ] Kürzungsregeln anwenden:
    
    -   Führende Nullen weglassen.
        
    -   Längste Null-Kette einmalig durch `::` ersetzen.
        
-   [ ] Adresstypen: Unicast (Global/Link-Local), Multicast, Anycast.
    
-   [ ] SLAAC: Automatische Konfiguration ohne DHCP.
    

**4.4 Befehle & Troubleshooting**

-   [ ] Ausgaben interpretieren von: `ping`, `tracert` / `traceroute`, `ipconfig` / `ip addr`, `nslookup`.
    
-   [ ] DHCP-Ablauf (DORA) verstehen.
    

**4.5 Virtualisierung & Cloud**

-   [ ] Cloud-Modelle: SaaS (Software), PaaS (Plattform), IaaS (Infrastruktur).
    
-   [ ] Virtualisierung: VDI (Virtual Desktop), Hypervisor-Konzepte.
    

----------

### Bereich 5: Sicherheit, KI & Projektmanagement

**5.1 IT-Sicherheit (CIA-Triade)**

-   [ ] Schutzziele definieren: Vertraulichkeit, Integrität, Verfügbarkeit.
    
-   [ ] Verschlüsselung unterscheiden:
    
    -   Symmetrisch (ein Schlüssel, schnell).
        
    -   Asymmetrisch (Public/Private Key, sicher).
        
    -   Hybrid (Kombination, z.B. bei HTTPS).
        
-   [ ] Hashwerte: Dienen der Integrität (z.B. SHA-256).
    
-   [ ] 2-Faktor-Authentifizierung (2FA): Wissen, Besitz, Biometrie.
    
-   [ ] Malware-Arten: Virus, Wurm, Trojaner, Ransomware, Phishing.
    

**5.2 Datenschutz (DSGVO)**

-   [ ] Betroffenenrechte: Auskunft, Löschung, Berichtigung, Datenübertragbarkeit.
    
-   [ ] Unterschied Anonymisierung (kein Personenbezug mehr) vs. Pseudonymisierung (rückführbar).
    

**5.3 Künstliche Intelligenz (KI)**

-   [ ] Chancen: Automatisierung, Analyse, Coding-Support.
    
-   [ ] Risiken: Halluzinationen (Falschinformationen), Datenschutzverstöße, Bias (Vorurteile), Urheberrecht.
    

**5.4 Projektmanagement**

-   [ ] Netzplan berechnen: FAZ, FEZ, SAZ, SEZ.
    
-   [ ] Kritischen Pfad identifizieren (Puffer = 0).
    
-   [ ] Gantt-Diagramm: Zeitliche Balkenplanung lesen/zeichnen.
    
-   [ ] Phasenmodell vs. Agil (Scrum).
    
-   [ ] Change Management: Akzeptanzkurve, Schulungsmaßnahmen.
    

----------

## 4. Wichtige Hinweise für die Prüfung

**Rechenwege und Einheiten**

-   [ ] Bei Speichergrößen (RAM, HDD) rechnet die IHK fast immer binär (Faktor 1024).
    
-   [ ] Bei Übertragungsraten (Bandbreite) oft dezimal (Faktor 1000).
    
-   [ ] Immer den Rechenweg notieren (gibt Teilpunkte, auch wenn das Ergebnis falsch ist).
    

**Zeitmanagement**

-   [ ] Faustformel: 100 Punkte in 90 Minuten entsprechen ca. 0,9 Minuten pro Punkt.
    
-   [ ] Bei Hängern sofort weitermachen, keine Zeit verlieren.
    

**Checkliste kurz vor der Prüfung**

-   [ ] Kalkulationsschema sicher?
    
-   [ ] Netzplan (Vorwärts/Rückwärts) geübt?
    
-   [ ] Trace Table (Schreibtischtest) verstanden?
    
-   [ ] IPv6 Kürzungsregeln präsent?
    
-   [ ] Unterschiede der UML-Diagramme klar?
    
-   [ ] Barrierefreiheit (Kontrast, Alt-Texte) bedacht?
