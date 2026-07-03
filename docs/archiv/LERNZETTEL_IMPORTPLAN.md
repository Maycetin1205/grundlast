# Lernzettel-Importplan

Dieses Dokument ist eine Arbeitslandkarte fuer die drei neu aufgenommenen
Lernzettel. Es uebernimmt keine Rohtexte aus den PDFs. Die PDFs dienen nur fuer
Themenumfang, Denkoperationen, Reihenfolge und typische Luecken. Fakten gehen
weiterhin ueber Ausbildungs-, Gesetzes-, Norm- und Herstellerquellen.

## Aufgenommene Dateien

| Datei | Seiten | Textstatus | Rolle |
|---|---:|---|---|
| `lernzettel/Lernzettel AP1 2024.pdf` | 56 | Textschicht vorhanden | AP1-breiter Themenfundus |
| `lernzettel/Lernzettel AP1&AP2 2024.pdf` | 97 | Textschicht vorhanden | AP1 plus spaetere/AP2-Themen |
| `lernzettel/Lernzettel Kurzform.pdf` | 11 | Textschicht vorhanden | schnelle Begriffsliste, besonders fuer Lueckencheck |

## Kurzurteil

Die Sorge "zu wenig Stoff" ist damit praktisch erledigt. Der Engpass ist jetzt
nicht mehr Menge, sondern Verarbeitung: Themen sauber priorisieren, veraltete
oder ungenaue Aussagen korrigieren, Anfaengerluecken schliessen und alles in
den vorhandenen Lernpfad einbauen.

Die PDFs sind als Checkliste stark, aber nicht als Wahrheitsquelle. Schon die
ersten Stichproben zeigen typische Lernzettel-Risiken: alte Scrum-Begriffe,
vereinfachte Rechtsaussagen, OCR-/Tippfehler, unscharfe Port-/Protokollangaben
und sehr knappe Erklaerungen ohne Zwischenschritte. Genau hier muss die
Lerndatei besser werden.

## AP1-Kern, der gut zum bestehenden Bestand passt

| Themenfeld aus den Lernzetteln | Ziel in der Lerndatei |
|---|---|
| Projektmanagement, agile Modelle, Scrum, Wasserfall, Netzplan, Gantt | vorhandene Kapitel `scrum`, `vorgehensmodelle`, `netzplan`, `gantt-diagramm` gegen aktuelle Quellen und Aufgabenlogik pruefen |
| Datenschutz, DSGVO, technische und organisatorische Massnahmen | `dsgvo-basics` anfaengerfreundlich und rechtlich sauber nachschaerfen |
| Schutzziele, Gefaehrdungen, Malware, Phishing, Ransomware | `schutzziele`, `malware-grundlagen`, `endpoint-security` und `backup-strategien` als LF4-Kette pruefen |
| Verschluesselung, VPN, PKI, Zertifikate | `verschluesselung-hash-vpn`, `pki-zertifikate`, `tcp-udp`, `firewall-dmz` konsistent halten |
| IT-Systeme, Hardwareauswahl, Schnittstellen, Speicher, RAID, USV | vorhandene gepruefte Hardware-Kapitel behalten; Lernzettel nur als Aufgaben- und Missverstaendnischeck nutzen |
| Virtualisierung, Cloud, Betriebssysteme, zentrale/dezentrale Systeme | ungepruefte Kapitel und Platzhalter mit offiziellen Quellen ausbauen |
| OSI/TCP-IP, WLAN, IP-Konfiguration, IPv6, Verkabelung, Fernwartung | Netzwerkpfad von Grundlagen zu Diagnose und Sicherheit verdichten |
| Datenbanken, SQL, Normalisierung, primitive Datentypen | vorhandene Datenkapitel pruefen; Programmiergrundlagen als echte Luecke behandeln |
| Beschaffung, Marktformen, Wirtschaftlichkeit, SLA, Green IT | Wirtschafts-, Service- und Organisationskapitel mit Aufgabenlogik verbinden |
| Qualitaetsmanagement, PDCA, Softwarequalitaet, Barrierefreiheit | Platzhalter `pdca-zyklus`, `iso-9000`, `iso-25010`, `efqm-modell` priorisieren |

## Bestaetigte Luecken oder Platzhalter

Diese Punkte stehen bereits in `KAPITELLISTE.md` oder `ABDECKUNGSMATRIX.md` als
Luecke/ungeprueft und werden durch die Lernzettel bestaetigt:

1. Netzwerkgrundbegriffe und Topologien.
2. Netzwerkkomponenten wie Router, Switch, Access Point, Client, Server.
3. DNS, DHCP und ARP als eigene Dienstekette oder klarer Teil von
   `netzwerkkonfiguration`.
4. BIOS/UEFI und Bootvorgang.
5. Software-Arten: Standardsoftware, Branchensoftware, Individualsoftware,
   Systemsoftware, angepasste Software.
6. Programmiergrundlagen: Datentypen, Variablen, Kontrollstrukturen,
   Funktionen; danach Algorithmen.
7. Teststrategien: White-Box, Black-Box, Unit-, Integrations-, System- und
   Abnahmetest.
8. Qualitaetsmanagement: PDCA, ISO 9000/9001, ISO 25010, EFQM.
9. Cloud-Konzepte: IaaS, PaaS, SaaS sowie Cloud-Betriebsmodelle.
10. TCO und Web-Grundlagen bleiben gesondert gegen den Sollwert zu pruefen.

## Korrektur- und Quellenwachsamkeit

Beim Uebernehmen als Lernimpuls besonders pruefen:

- Scrum: aktuelle Scrum-Guide-2020-Begriffe gegen alte "Rollen"/Teamgroessen
  abgleichen.
- DSGVO/BDSG: Rechte, Rechtsgrundlagen, TOMs und Datenschutzbeauftragter nur
  aus Gesetz/Behoerdenquellen formulieren.
- IT-Grundschutz und Schutzbedarf: BSI-Standards 200-1/200-2/200-3 als
  Faktenanker nutzen.
- Ports und Protokolle: IANA/RFCs oder Herstellerdokumentation statt
  Lernzettel-Kurzform nutzen.
- BIOS/UEFI: MBR/GPT, Bootmodus und 2-TB-Grenze sauber trennen.
- Open Source/Public Domain: Urheberrechts- und Lizenzbegriffe nicht
  umgangssprachlich verkurzen.
- Aufbewahrungsfristen: alte Lernzettel koennen veraltet sein; aktuelle
  Rechtslage separat pruefen.
- Rechenkapitel: Einheiten, Byte/Bit, dezimal/binaer und Rundung immer
  nachrechnen.

## Didaktischer Einbau

Pro Kapitel bleibt der bestehende Standard:

1. Lernzettel nur als Themen- und Aufgabenradar lesen.
2. Matrixzeile klaeren: Kapitel, Abschnitt, Box, Glossar oder nicht aufnehmen.
3. Fakten aus Primaer- oder Ausbildungsquellen belegen.
4. Stoff in eine Anfaenger-Reihenfolge bringen: Nutzen, mentales Modell,
   Begriffe, Verfahren, Beispiel, typische Fehler, Anwendung.
5. Mindestens einen realen, abstrahierten Aufgabentyp gegen die Lerndatei
   durchspielen.
6. Erst nach Review und Checks auf `geprueft` setzen.

## Konkrete Reihenfolge

1. Aktuelles Kapitel `prozess-thread` nicht verlassen: Review/Fix sauber
   abschliessen.
2. Danach die bestaetigten Luecken nach Abhaengigkeitskette priorisieren:
   Netzwerkgrundlagen vor Spezialdiensten, Programmiergrundlagen vor OOP,
   PDCA vor ISO/EFQM.
3. Bei jedem ungeprueften Kapitel einen "Lernzettel-Abgleich" als
   Didaktik-Pass machen: Was fragt das Material? Was ist bei uns schon klar?
   Was braucht mehr Zwischenschritte?
4. Quellenbank und Belege nur mit belastbaren Quellen erweitern.

## Ergebnisziel

Die Lerndatei soll am Ende nicht wie ein groesserer Lernzettel wirken, sondern
wie ein gefuehrter Lernpfad: weniger Stichwortsammlung, mehr Verstehen,
saubere Rechenwege, klare Begriffsreihenfolge, echte Fehlerwarnungen und
pruefbare Quellen.
