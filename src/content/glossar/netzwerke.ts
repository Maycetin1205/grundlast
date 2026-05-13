import type { GlossarEintrag } from "../../lib/glossar/types"

export const netzwerke: GlossarEintrag[] = [
  {
      id: 'osi',
      begriff: 'OSI-Modell',
      kurzdefinition: 'Das OSI-Modell gliedert Netzwerkkommunikation in sieben Schichten.',
      definition: [
        'Das OSI-Modell ist ein Referenzmodell für Netzwerkkommunikation. Es trennt Aufgaben wie Bitübertragung, Adressierung, Transport und Anwendung in sieben Schichten.',
        'In der Pruefung hilft dir das Modell, Protokolle und Fehlerquellen sauber einer Ebene zuzuordnen.',
      ],
      kapitel: {
        titel: 'OSI-Modell - sieben Schichten',
        href: '/lernen/netzwerke/grundlagen-netz/osi-modell',
      },
    },
  {
      id: 'pdu',
      begriff: 'PDU',
      kurzdefinition: 'Eine PDU ist die Dateneinheit, mit der eine OSI-Schicht arbeitet.',
      definition: [
        'PDU steht für Protocol Data Unit. Je nach Schicht heißt die Dateneinheit anders, zum Beispiel Bit, Frame, Paket, Segment oder Daten.',
        'Der Begriff ist wichtig, weil er zeigt, auf welcher Ebene ein Protokoll gerade arbeitet.',
      ],
      kapitel: {
        titel: 'OSI-Modell - sieben Schichten',
        href: '/lernen/netzwerke/grundlagen-netz/osi-modell',
      },
    },
  {
      id: 'ip',
      begriff: 'IP',
      kurzdefinition: 'IP adressiert und vermittelt Pakete zwischen Netzwerken.',
      definition: [
        'IP steht für Internet Protocol. Es arbeitet auf OSI-Schicht 3 und sorgt dafür, dass Pakete über Netzwerkgrenzen hinweg weitergeleitet werden.',
        'IP garantiert keine Zustellung und keine Reihenfolge. Diese Aufgaben übernehmen bei Bedarf Protokolle hoeherer Schichten, zum Beispiel TCP.',
      ],
      kapitel: {
        titel: 'OSI-Modell - sieben Schichten',
        href: '/lernen/netzwerke/grundlagen-netz/osi-modell',
      },
    },
  {
      id: 'ipv4',
      begriff: 'IPv4-Adresse',
      kurzdefinition: 'Eine IPv4-Adresse ist eine 32-Bit-Adresse für ein Gerät in einem IPv4-Netz.',
      definition: [
        'Eine IPv4-Adresse besteht aus 32 Bit und wird meist als vier Dezimalzahlen mit Punkten geschrieben, zum Beispiel 192.168.1.10.',
        'Zusammen mit der Subnetzmaske erkennst du, welcher Teil die Netzadresse und welcher Teil den Host beschreibt.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'subnetzmaske',
      begriff: 'Subnetzmaske',
      kurzdefinition: 'Die Subnetzmaske trennt den Netzanteil vom Hostanteil einer IPv4-Adresse.',
      definition: [
        'Die Subnetzmaske legt fest, welche Bits einer IPv4-Adresse zum Netzwerk gehören und welche Bits Hosts innerhalb dieses Netzwerks adressieren.',
        'In CIDR-Schreibweise wird sie als Präfixlänge notiert, zum Beispiel /24 für 255.255.255.0.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'subnetting',
      begriff: 'Subnetting',
      kurzdefinition: 'Subnetting teilt ein größeres IP-Netz in kleinere Teilnetze auf.',
      definition: [
        'Beim Subnetting werden Host-Bits zu Netz-Bits gemacht. Dadurch entstehen mehrere kleinere Netze mit jeweils eigenem Adressbereich.',
        'Das ist in der Praxis wichtig für Struktur, Sicherheit und Adressplanung; in der AP1 wird es oft rechnerisch abgefragt.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'cidr',
      begriff: 'CIDR',
      kurzdefinition: 'CIDR beschreibt IPv4-Netze mit einer Präfixlänge wie /24 statt nur mit klassischen Adressklassen.',
      definition: [
        'CIDR steht für Classless Inter-Domain Routing. Die Schreibweise 192.168.10.0/24 bedeutet: Die ersten 24 Bit gehören zum Netzanteil.',
        'CIDR macht Netze flexibel groß. Ein /25-Netz hat weniger Host-Bits als /24, ein /23-Netz hat mehr Host-Bits als /24.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'oktett',
      begriff: 'Oktett',
      kurzdefinition: 'Ein Oktett ist ein Block aus acht Bit innerhalb einer IPv4-Adresse.',
      definition: [
        'Eine IPv4-Adresse besteht aus vier Oktetten. Jedes Oktett kann Werte von 0 bis 255 darstellen, weil acht Bit 256 Kombinationen ergeben.',
        'In der Schreibweise 192.168.10.50 sind 192, 168, 10 und 50 die vier Oktette.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'netzanteil',
      begriff: 'Netzanteil',
      kurzdefinition: 'Der Netzanteil zeigt, zu welchem IP-Netz eine Adresse gehört.',
      definition: [
        'Der Netzanteil besteht aus den Bits, die durch die Subnetzmaske oder Präfixlänge auf 1 gesetzt sind.',
        'Hosts mit gleichem Netzanteil liegen im selben IPv4-Subnetz und können direkt miteinander kommunizieren, sofern Layer 2 und Firewall-Regeln passen.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'hostanteil',
      begriff: 'Hostanteil',
      kurzdefinition: 'Der Hostanteil adressiert ein einzelnes Gerät innerhalb eines IP-Netzes.',
      definition: [
        'Der Hostanteil besteht aus den Bits, die nicht zum Netzanteil gehören. Mit ihnen werden die einzelnen Adressen innerhalb eines Subnetzes gebildet.',
        'Je mehr Host-Bits vorhanden sind, desto mehr Adressen gibt es im Subnetz.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'netzadresse',
      begriff: 'Netzadresse',
      kurzdefinition: 'Die Netzadresse ist die erste Adresse eines Subnetzes und beschreibt das Subnetz selbst.',
      definition: [
        'Bei der Netzadresse sind alle Host-Bits 0. Sie wird nicht an einen normalen Host vergeben.',
        'Aus IP-Adresse und Subnetzmaske berechnest du die Netzadresse mit einer bitweisen UND-Verknuepfung oder mit der Magic-Number-Methode.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'broadcast',
      begriff: 'Broadcast-Adresse',
      kurzdefinition: 'Die Broadcast-Adresse ist die letzte Adresse eines IPv4-Subnetzes.',
      definition: [
        'Bei der Broadcast-Adresse sind alle Host-Bits 1. Sie steht für alle Hosts im Subnetz und wird nicht an einen einzelnen Host vergeben.',
        'In einem /24-Netz wie 192.168.10.0/24 ist 192.168.10.255 die Broadcast-Adresse.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'hostadresse',
      begriff: 'Hostadresse',
      kurzdefinition: 'Eine Hostadresse ist eine nutzbare IP-Adresse für ein Gerät innerhalb eines Subnetzes.',
      definition: [
        'Hostadressen liegen zwischen Netzadresse und Broadcast-Adresse. In 192.168.10.0/24 sind 192.168.10.1 bis 192.168.10.254 typische nutzbare Hostadressen.',
        'Die Netzadresse und die Broadcast-Adresse sind in normalen IPv4-Subnetzen nicht als Hostadresse nutzbar.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'host',
      begriff: 'Host',
      kurzdefinition: 'Ein Host ist ein adressierbares Gerät oder System in einem Netzwerk.',
      definition: [
        'Host ist ein Sammelbegriff für ein System, das in einem Netzwerk mit eigener Adresse erreichbar ist, zum Beispiel Client, Server, Drucker, VM oder Router-Interface.',
        'Wichtig: In IPv4-Aufgaben meint Host oft nicht den ganzen Computer als Gehaeuse, sondern eine nutzbare Adresse innerhalb eines Subnetzes.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'interface',
      begriff: 'Interface',
      kurzdefinition: 'Ein Interface ist eine Netzwerkschnittstelle, über die ein Gerät am Netz teilnimmt.',
      definition: [
        'Ein Interface kann eine physische Netzwerkkarte, ein WLAN-Adapter, ein virtuelles Interface oder ein Router-Port sein.',
        'IP-Adressen werden fachlich Interfaces zugeordnet. Ein Gerät kann deshalb mehrere IP-Adressen haben, wenn es mehrere Interfaces oder mehrere konfigurierte Adressen besitzt.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'private-ipv4-adresse',
      begriff: 'Private IPv4-Adresse',
      kurzdefinition: 'Private IPv4-Adressen sind für interne Netze reserviert und im Internet nicht global geroutet.',
      definition: [
        'RFC 1918 definiert drei private Bereiche: 10.0.0.0/8, 172.16.0.0/12 und 192.168.0.0/16.',
        'Private Adressen sind in vielen Unternehmen und Heimnetzen normal. Für den Zugriff ins Internet wird meist NAT oder ein anderer vermittelnder Gateway-Mechanismus genutzt.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'oeffentliche-ipv4-adresse',
      begriff: 'Oeffentliche IPv4-Adresse',
      kurzdefinition: 'Eine oeffentliche IPv4-Adresse ist global eindeutig und im Internet routbar.',
      definition: [
        'Oeffentliche IPv4-Adressen werden im Internet eindeutig vergeben und koennen ueber globale Routingtabellen erreicht werden, sofern Firewall und Routing dies erlauben.',
        'Bei typischen Heim- und kleinen Unternehmensanschluessen besitzt der Router am WAN-Anschluss eine oeffentliche IPv4-Adresse, waehrend interne Geraete private Adressen verwenden.',
      ],
      kapitel: {
        titel: 'Firewall und DMZ',
        href: '/lernen/netzwerke/netz-sicherheit/firewall-dmz',
      },
    },
  {
      id: 'nat',
      begriff: 'NAT',
      kurzdefinition: 'NAT uebersetzt IP-Adressen zwischen unterschiedlichen Adressraeumen.',
      definition: [
        'NAT steht fuer Network Address Translation. Ein NAT-Geraet veraendert IP-Adressen in Paketen, zum Beispiel zwischen privatem LAN und oeffentlichem Internet.',
        'NAT wird haeufig eingesetzt, damit private IPv4-Netze ueber eine oeffentliche Adresse kommunizieren koennen. Es ersetzt aber keine durchdachte Firewall- und Sicherheitsarchitektur.',
      ],
      kapitel: {
        titel: 'Port Forwarding und NAT',
        href: '/lernen/netzwerke/netz-sicherheit/port-forwarding',
      },
    },
  {
      id: 'napt',
      begriff: 'NAPT/PAT',
      kurzdefinition: 'NAPT oder PAT uebersetzt neben IP-Adressen auch Portnummern.',
      definition: [
        'NAPT steht fuer Network Address Port Translation, PAT fuer Port Address Translation. Beide Begriffe beschreiben, dass mehrere interne Hosts ueber unterschiedliche Portzuordnungen eine oeffentliche IPv4-Adresse teilen koennen.',
        'Typisch ist der Heimrouter: Viele Clients bauen Verbindungen nach aussen auf, der Router merkt sich die Zuordnung von interner Adresse, internem Port und externem Port.',
      ],
      kapitel: {
        titel: 'Port Forwarding und NAT',
        href: '/lernen/netzwerke/netz-sicherheit/port-forwarding',
      },
    },
  {
      id: 'port-forwarding',
      begriff: 'Port Forwarding',
      kurzdefinition: 'Port Forwarding leitet eingehende Verbindungen von einem externen Port an ein internes Ziel weiter.',
      definition: [
        'Beim Port Forwarding wird eine Verbindung auf einer oeffentlichen Adresse und einem Port an eine private interne IP-Adresse und einen Zielport weitergeleitet.',
        'Dadurch werden interne Dienste von aussen erreichbar. Das ist nuetzlich fuer Webserver oder bestimmte Dienste, erhoeht aber die Angriffsoberflaeche und muss mit Firewall, Updates und Authentifizierung abgesichert werden.',
      ],
      kapitel: {
        titel: 'Port Forwarding und NAT',
        href: '/lernen/netzwerke/netz-sicherheit/port-forwarding',
      },
    },
  {
      id: 'firewall-regel',
      begriff: 'Firewall-Regel',
      kurzdefinition: 'Eine Firewall-Regel erlaubt oder blockiert Netzwerkverkehr nach Kriterien wie Quelle, Ziel, Port und Protokoll.',
      definition: [
        'Firewall-Regeln beschreiben, welcher Verkehr erlaubt oder verboten ist. Typische Kriterien sind Quelladresse, Zieladresse, Protokoll, Port, Richtung und Verbindungszustand.',
        'Bei Port Forwarding muessen NAT-Regel und Firewall-Regel zusammenpassen: Die NAT-Regel uebersetzt, die Firewall entscheidet, ob der Verkehr durch darf.',
      ],
      kapitel: {
        titel: 'Port Forwarding und NAT',
        href: '/lernen/netzwerke/netz-sicherheit/port-forwarding',
      },
    },
  {
      id: 'firewall',
      begriff: 'Firewall',
      kurzdefinition: 'Eine Firewall kontrolliert Netzwerkverkehr zwischen Netzen oder auf einem Endgeraet anhand von Regeln.',
      definition: [
        'Eine Firewall entscheidet anhand eines Regelwerks, ob Verkehr erlaubt oder blockiert wird. Typische Kriterien sind Quelle, Ziel, Port, Protokoll, Richtung und Verbindungszustand.',
        'Professionell wird eine Firewall nicht als Einzelschutz verstanden, sondern als Baustein einer Sicherheitsarchitektur mit Netzsegmentierung, Updates, Logging, Monitoring und klarer Administration.',
      ],
      kapitel: {
        titel: 'Firewall und DMZ',
        href: '/lernen/netzwerke/netz-sicherheit/firewall-dmz',
      },
    },
  {
      id: 'default-deny',
      begriff: 'Default Deny',
      kurzdefinition: 'Default Deny bedeutet: Alles ist gesperrt, ausser es wurde ausdruecklich erlaubt.',
      definition: [
        'Default Deny ist ein Sicherheitsprinzip fuer Regelwerke. Zuerst werden benoetigte Verbindungen gezielt erlaubt, danach blockiert eine Standardregel den Rest.',
        'Das Gegenteil waere ein sehr offenes Regelwerk, bei dem nur einzelne bekannte Gefahren gesperrt werden. Das ist schwerer sicher zu beherrschen.',
      ],
      kapitel: {
        titel: 'Firewall und DMZ',
        href: '/lernen/netzwerke/netz-sicherheit/firewall-dmz',
      },
    },
  {
      id: 'allowlist',
      begriff: 'Allowlist',
      kurzdefinition: 'Eine Allowlist enthaelt ausdruecklich erlaubte Kommunikation oder erlaubte Objekte.',
      definition: [
        'Bei einer Allowlist wird definiert, was erlaubt ist. Alles andere bleibt verboten oder wird nicht weitergeleitet.',
        'Im Firewall-Kontext ist das besonders wichtig: Nur fachlich benoetigte Kombinationen aus Quelle, Ziel, Protokoll und Port sollten freigegeben werden.',
      ],
      kapitel: {
        titel: 'Firewall und DMZ',
        href: '/lernen/netzwerke/netz-sicherheit/firewall-dmz',
      },
    },
  {
      id: 'paketfilter',
      begriff: 'Paketfilter',
      kurzdefinition: 'Ein Paketfilter bewertet Netzwerkpakete nach technischen Merkmalen wie IP-Adresse, Port und Protokoll.',
      definition: [
        'Paketfilter arbeiten mit Informationen aus Netzwerk- und Transportschicht, zum Beispiel Quell-IP, Ziel-IP, TCP/UDP und Portnummer.',
        'Sie sind schnell und fuer viele Netzgrenzen geeignet, verstehen aber nicht automatisch den fachlichen Inhalt einer Anwendung.',
      ],
      kapitel: {
        titel: 'Firewall und DMZ',
        href: '/lernen/netzwerke/netz-sicherheit/firewall-dmz',
      },
    },
  {
      id: 'stateful-firewall',
      begriff: 'Stateful Firewall',
      kurzdefinition: 'Eine Stateful Firewall merkt sich den Zustand von Verbindungen.',
      definition: [
        'Stateful Firewalls fuehren eine Zustandstabelle. Dadurch koennen sie Antworten auf erlaubte ausgehende oder eingehende Verbindungen erkennen.',
        'Das ist sicherer und praktischer als ein rein zustandsloser Paketfilter, ersetzt aber keine Anwendungssicherheit oder saubere Segmentierung.',
      ],
      kapitel: {
        titel: 'Firewall und DMZ',
        href: '/lernen/netzwerke/netz-sicherheit/firewall-dmz',
      },
    },
  {
      id: 'application-layer-gateway',
      begriff: 'Application-Layer-Gateway',
      kurzdefinition: 'Ein Application-Layer-Gateway prueft Netzwerkverkehr auf Anwendungsebene.',
      definition: [
        'Ein Application-Layer-Gateway oder Sicherheits-Proxy versteht Teile eines Anwendungsprotokolls, zum Beispiel HTTP, und kann dadurch genauer filtern als ein reiner Paketfilter.',
        'Der Vorteil ist tiefere Kontrolle. Der Nachteil sind mehr Komplexitaet, mehr Betriebsaufwand und moegliche Performance-Kosten.',
      ],
      kapitel: {
        titel: 'Firewall und DMZ',
        href: '/lernen/netzwerke/netz-sicherheit/firewall-dmz',
      },
    },
  {
      id: 'netzsegmentierung',
      begriff: 'Netzsegmentierung',
      kurzdefinition: 'Netzsegmentierung teilt ein Netzwerk in getrennte Bereiche mit kontrollierten Uebergaengen.',
      definition: [
        'Bei der Netzsegmentierung werden Bereiche wie Clients, Server, DMZ, Management, Produktion oder Gastnetz voneinander getrennt.',
        'Ziel ist, Kommunikation zu begrenzen und die Ausbreitung von Angriffen oder Fehlkonfigurationen einzudaemmen. Uebergaenge werden typischerweise durch Firewalls oder Layer-3-Regeln kontrolliert.',
      ],
      kapitel: {
        titel: 'Firewall und DMZ',
        href: '/lernen/netzwerke/netz-sicherheit/firewall-dmz',
      },
    },
  {
      id: 'dmz',
      begriff: 'DMZ',
      kurzdefinition: 'Eine DMZ ist ein getrenntes Netzsegment fuer Systeme, die von aussen erreichbar sein muessen.',
      definition: [
        'DMZ steht fuer Demilitarized Zone. In der Netzwerktechnik ist damit ein isoliertes Segment zwischen Internet und internem LAN gemeint.',
        'Oeffentlich erreichbare Dienste wie Webserver stehen in einer DMZ, damit ein kompromittierter Server nicht direkt Zugriff auf das interne LAN hat.',
      ],
      kapitel: {
        titel: 'Firewall und DMZ',
        href: '/lernen/netzwerke/netz-sicherheit/firewall-dmz',
      },
    },
  {
      id: 'carrier-grade-nat',
      begriff: 'Carrier-Grade NAT',
      kurzdefinition: 'Carrier-Grade NAT ist NAT beim Provider, bei dem mehrere Kunden oeffentliche IPv4-Adressen teilen.',
      definition: [
        'Bei Carrier-Grade NAT befindet sich eine NAT-Schicht nicht nur im Kundennetz, sondern auch beim Provider. Der Kundenrouter hat dann oft keine eigene direkt erreichbare oeffentliche IPv4-Adresse.',
        'Eingehendes IPv4-Portforwarding funktioniert dadurch nicht wie bei einem Anschluss mit eigener oeffentlicher IPv4. Alternativen sind echte oeffentliche IPv4, IPv6, VPN, Reverse Tunnel oder Cloud-Loesungen.',
      ],
      kapitel: {
        titel: 'Port Forwarding und NAT',
        href: '/lernen/netzwerke/netz-sicherheit/port-forwarding',
      },
    },
  {
      id: 'magic-number',
      begriff: 'Magic Number',
      kurzdefinition: 'Die Magic Number ist die Schrittweite, mit der Subnetze im relevanten Oktett beginnen.',
      definition: [
        'Die Magic Number berechnest du mit 256 minus dem Maskenwert im interessanten Oktett. Bei 255.255.255.192 ist sie 64.',
        'Die Subnetze beginnen dann bei 0, 64, 128 und 192. Diese Methode ist eine schnelle Kopf-Rechenhilfe für viele IPv4-Aufgaben.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'bitweises-und',
      begriff: 'Bitweises UND',
      kurzdefinition: 'Bitweises UND verknuepft zwei Bitfolgen; nur 1 UND 1 ergibt 1.',
      definition: [
        'Beim Subnetting verknuepfst du IP-Adresse und Subnetzmaske bitweise. Das Ergebnis ist die Netzadresse.',
        'Beispiel: 50 ist binaer 00110010, 192 ist 11000000. Das bitweise UND ergibt 00000000.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'tcp',
      begriff: 'TCP',
      kurzdefinition: 'TCP ist ein verbindungsorientiertes Transportprotokoll mit Zustellkontrolle.',
      definition: [
        'TCP steht für Transmission Control Protocol. Es baut eine Verbindung auf, nummeriert Daten, bestaetigt Empfang und sendet verlorene Segmente erneut.',
        'Es eignet sich für Anwendungen, bei denen Vollstaendigkeit wichtiger ist als minimale Verzoegerung, zum Beispiel Web, E-Mail oder Dateiübertragung.',
      ],
      kapitel: {
        titel: 'TCP vs. UDP',
        href: '/lernen/netzwerke/grundlagen-netz/tcp-udp',
      },
    },
  {
      id: 'udp',
      begriff: 'UDP',
      kurzdefinition: 'UDP ist ein verbindungsloses Transportprotokoll ohne Zustellgarantie.',
      definition: [
        'UDP steht für User Datagram Protocol. Es sendet Datagramme ohne Verbindungsaufbau und ohne automatische Wiederholung verlorener Pakete.',
        'Dadurch ist UDP schlank und schnell, aber die Anwendung muss bei Bedarf selbst mit Verlusten umgehen.',
      ],
      kapitel: {
        titel: 'TCP vs. UDP',
        href: '/lernen/netzwerke/grundlagen-netz/tcp-udp',
      },
    },
  {
      id: 'transportschicht',
      begriff: 'Transportschicht',
      kurzdefinition: 'Die Transportschicht ist OSI-Schicht 4 und verbindet Anwendungen Ende-zu-Ende.',
      definition: [
        'Die Transportschicht stellt Kommunikation zwischen Anwendungen auf zwei Hosts her. Sie nutzt Ports, um die richtige Anwendung zu adressieren.',
        'TCP und UDP sind die wichtigsten Transportprotokolle. TCP bietet Zuverlaessigkeit und Reihenfolge, UDP ist verbindungslos und schlank.',
      ],
      kapitel: {
        titel: 'TCP vs. UDP',
        href: '/lernen/netzwerke/grundlagen-netz/tcp-udp',
      },
    },
  {
      id: 'portnummer',
      begriff: 'Portnummer',
      kurzdefinition: 'Eine Portnummer adressiert einen Dienst oder Prozess auf einem Host.',
      definition: [
        'Portnummern werden auf der Transportschicht genutzt. Zusammen mit IP-Adresse und Protokoll zeigen sie, welche Anwendung die Daten erhalten soll.',
        'Wichtig fuer Firewall-Regeln: TCP-Port 443 und UDP-Port 443 sind unterschiedliche Ziele. Deshalb muss das Transportprotokoll immer genannt werden.',
      ],
      kapitel: {
        titel: 'TCP vs. UDP',
        href: '/lernen/netzwerke/grundlagen-netz/tcp-udp',
      },
    },
  {
      id: 'socket',
      begriff: 'Socket',
      kurzdefinition: 'Ein Socket beschreibt einen Kommunikationsendpunkt aus IP-Adresse, Transportprotokoll und Port.',
      definition: [
        'Ein Socket verbindet eine IP-Adresse mit einem Transportprotokoll und einer Portnummer, zum Beispiel 192.168.10.20:443/TCP.',
        'Verbindungen werden oft durch Quell-IP, Quellport, Ziel-IP, Zielport und Protokoll eindeutig unterschieden.',
      ],
      kapitel: {
        titel: 'TCP vs. UDP',
        href: '/lernen/netzwerke/grundlagen-netz/tcp-udp',
      },
    },
  {
      id: 'segment',
      begriff: 'Segment',
      kurzdefinition: 'Ein Segment ist die typische Dateneinheit von TCP auf der Transportschicht.',
      definition: [
        'In der OSI-PDU-Sprache wird die TCP-Dateneinheit auf Schicht 4 meist Segment genannt.',
        'Ein TCP-Segment enthaelt unter anderem Quellport, Zielport, Sequenznummern, Flags und Nutzdaten.',
      ],
      kapitel: {
        titel: 'TCP vs. UDP',
        href: '/lernen/netzwerke/grundlagen-netz/tcp-udp',
      },
    },
  {
      id: 'datagramm',
      begriff: 'Datagramm',
      kurzdefinition: 'Ein Datagramm ist eine eigenstaendige Dateneinheit, bei UDP besonders auf der Transportschicht relevant.',
      definition: [
        'UDP sendet Daten als Datagramme ohne vorherigen Verbindungsaufbau. Jedes Datagramm wird unabhaengig behandelt.',
        'Es gibt bei UDP keine automatische Garantie fuer Reihenfolge, Zustellung oder Wiederholung.',
      ],
      kapitel: {
        titel: 'TCP vs. UDP',
        href: '/lernen/netzwerke/grundlagen-netz/tcp-udp',
      },
    },
  {
      id: 'three-way-handshake',
      begriff: 'Three-Way-Handshake',
      kurzdefinition: 'Der Three-Way-Handshake ist der TCP-Verbindungsaufbau mit SYN, SYN-ACK und ACK.',
      definition: [
        'Beim Three-Way-Handshake sendet der Client SYN, der Server antwortet mit SYN-ACK, und der Client bestaetigt mit ACK.',
        'Erst danach ist die TCP-Verbindung aufgebaut und Nutzdaten koennen als geordneter Byte-Strom uebertragen werden.',
      ],
      kapitel: {
        titel: 'TCP vs. UDP',
        href: '/lernen/netzwerke/grundlagen-netz/tcp-udp',
      },
    },
  {
      id: 'mac',
      begriff: 'MAC-Adresse',
      kurzdefinition: 'Eine MAC-Adresse ist die Hardwareadresse einer Netzwerkschnittstelle.',
      definition: [
        'Eine MAC-Adresse arbeitet auf der Sicherungsschicht und identifiziert eine Netzwerkschnittstelle innerhalb eines lokalen Netzes.',
        'Sie wird typischerweise hexadezimal geschrieben, zum Beispiel AA:BB:CC:DD:EE:FF.',
      ],
      kapitel: {
        titel: 'OSI-Modell - sieben Schichten',
        href: '/lernen/netzwerke/grundlagen-netz/osi-modell',
      },
    },
  {
      id: 'dhcp',
      begriff: 'DHCP',
      kurzdefinition: 'DHCP weist Netzwerkkonfigurationen automatisch zu.',
      definition: [
        'DHCP steht für Dynamic Host Configuration Protocol. Es kann Geräten automatisch IP-Adresse, Subnetzmaske, Standardgateway und DNS-Server zuweisen.',
        'Dadurch müssen Clients in vielen Netzen nicht manuell konfiguriert werden.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'dns',
      begriff: 'DNS',
      kurzdefinition: 'DNS loest Domainnamen in IP-Adressen auf.',
      definition: [
        'DNS steht für Domain Name System. Es übersetzt menschenlesbare Namen wie example.org in IP-Adressen, mit denen Rechner kommunizieren.',
        'Ohne DNS muesstest du dir für viele Dienste numerische IP-Adressen merken.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'vlan',
      begriff: 'VLAN',
      kurzdefinition: 'Ein VLAN trennt ein physisches Netz logisch in mehrere Teilnetze.',
      definition: [
        'VLAN steht für Virtual Local Area Network. Damit lassen sich Geräte logisch trennen, obwohl sie an derselben physischen Switch-Infrastruktur haengen.',
        'VLANs helfen bei Segmentierung, Sicherheit und sauberer Netzwerkorganisation.',
      ],
      kapitel: {
        titel: 'IPv4 & Subnetting',
        href: '/lernen/netzwerke/adressierung/ipv4-subnetting',
      },
    },
  {
      id: 'datenrate',
      begriff: 'Datenrate',
      kurzdefinition: 'Die Datenrate beschreibt, wie viele Bits oder Bytes pro Zeiteinheit übertragen werden.',
      definition: [
        'Die Datenrate gibt an, wie schnell Daten übertragen werden, klassisch in bit/s oder Byte/s. Internet-Anschluesse werden üblicherweise in Mbit/s angegeben (kleines b), Datei- oder Speichergeschwindigkeiten in MB/s (großes B). Der Faktor 8 entscheidet jedes Mal über den richtigen Wert.',
        'In AP1-Aufgaben rechnest du mit drei verwandten Formeln: Zeit = Datenmenge / Datenrate, Datenrate = Datenmenge / Zeit und Datenmenge = Datenrate * Zeit. Wer die Einheiten vorher in eine gemeinsame Basis bringt (beides in Bit oder beides in Byte), liegt sicher.',
      ],
      kapitel: {
        titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
        href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
      },
    },
  {
      id: 'bandbreite',
      begriff: 'Bandbreite',
      kurzdefinition: 'Die Bandbreite ist die theoretisch maximale Datenrate eines Übertragungswegs.',
      definition: [
        'Bandbreite stammt urspruenglich aus der Nachrichtentechnik und beschreibt die Breite des Frequenzbereichs einer Leitung in Hertz. In der IT wird der Begriff lose mit der theoretischen Maximaldatenrate gleichgesetzt - zum Beispiel 100 Mbit/s bei einer Fast-Ethernet-Leitung.',
        'Die tatsaechlich nutzbare Datenrate (Durchsatz) liegt fast immer unter der Bandbreite, weil Header, Protokolle, Wiederholungen und Geräte-Latenzen Anteile abziehen. In Pruefungsaufgaben kommen typische Brutto-Netto-Annahmen wie 80 Prozent vor.',
      ],
      kapitel: {
        titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
        href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
      },
    },
  {
      id: 'latenz',
      begriff: 'Latenz',
      kurzdefinition: 'Die Latenz ist die Zeit, die ein einzelnes Datenpaket bis zum Empfaenger braucht.',
      definition: [
        'Latenz misst die Verzoegerung pro Paket - typisch in Millisekunden. Ein hoher Ping zwischen Berlin und Tokio entsteht nicht durch geringe Bandbreite, sondern durch die Laufzeit auf langen Glasfasern und durch Paketverarbeitung in Routern.',
        'Bandbreite und Latenz sind unabhaengig voneinander. Eine Satellitenleitung kann Hunderte Mbit/s liefern und trotzdem 600 ms Verzoegerung haben - was für Videokonferenzen oder Online-Spiele schmerzhaft ist, für einen Datei-Download aber kaum stoert.',
      ],
      kapitel: {
        titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
        href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
      },
    },
  {
      id: 'durchsatz',
      begriff: 'Durchsatz',
      kurzdefinition: 'Durchsatz ist die effektiv erreichte Datenrate auf einem Übertragungsweg.',
      definition: [
        'Der Durchsatz (Throughput) ist das, was nach Abzug von Overhead, Latenz, Wiederholungen und Endgeraete-Bremsen tatsaechlich beim Empfaenger ankommt. Er liegt immer unter der Bandbreite und wird oft brutto/netto unterschieden.',
        'Bei Ethernet rechnet man typisch mit ca. 95 Prozent Effizienz, bei TCP über WAN deutlich darunter, bei WLAN je nach Standard, Stoerumgebung und Geräteanzahl mit 30 bis 70 Prozent. Pruefungsaufgaben geben den Faktor meist explizit an.',
      ],
      kapitel: {
        titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
        href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
      },
    },
  {
      id: 'dpi',
      begriff: 'DPI',
      kurzdefinition: 'DPI gibt an, wie viele Punkte (Pixel) pro Zoll ein Scanner oder Drucker erfasst.',
      definition: [
        'DPI steht für Dots per Inch. Ein Scanner mit 600 dpi erzeugt 600 Bildpunkte pro Inch in jeder Richtung. Beim Rechnen wandelst du zuerst Zentimeter in Inch um (1 Inch = 2,54 cm) und multiplizierst dann mit der DPI-Zahl, um die Pixelmasse zu erhalten.',
        'In Aufgabentexten steht oft 1:1 - also gleiche DPI in horizontaler und vertikaler Richtung. Streng genommen gibt es zwei Werte (z. B. 600 x 300 dpi). PPI (Pixel per Inch) wird im Bildschirmkontext genutzt und ist für Pruefungsaufgaben zu DPI fast deckungsgleich.',
      ],
      kapitel: {
        titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
        href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
      },
    },
  {
      id: 'farbtiefe',
      begriff: 'Farbtiefe',
      kurzdefinition: 'Die Farbtiefe gibt an, wie viele Bits pro Pixel für Farb- oder Helligkeitswerte gespeichert werden.',
      definition: [
        'Typische Farbtiefen in der AP1 sind 1 Bit (Schwarz/Weiss), 8 Bit (256 Graustufen oder Farben aus einer Palette), 24 Bit (RGB mit je 8 Bit pro Kanal, ca. 16,7 Mio. Farben) und 32 Bit (RGB plus Alpha-Kanal für Transparenz).',
        'Wichtig für die Rechnung: Farbtiefe wird in Bit pro Pixel angegeben. Wer 24 Bit faelschlich als 24 Byte verarbeitet, multipliziert mit dem Faktor 8 zu viel. Erst Pixelanzahl mal Farbtiefe ergibt Bits, dann durch 8 für Bytes.',
      ],
      kapitel: {
        titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
        href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
      },
    },
  {
      id: 'kompression',
      begriff: 'Kompression',
      kurzdefinition: 'Kompression reduziert die Dateigroesse, indem Redundanzen entfernt oder Daten ungenauer gespeichert werden.',
      definition: [
        'Verlustfreie Verfahren wie ZIP, PNG oder FLAC erlauben eine Wiederherstellung der Originaldaten. Verlustbehaftete Verfahren wie JPEG, MP3 oder H.264 werfen Daten weg, die das menschliche Auge oder Ohr ohnehin schlecht wahrnimmt - das Original ist danach nicht mehr exakt rekonstruierbar.',
        'In AP1-Aufgaben heißt Komprimierung auf 50 Prozent meist: Originalgroesse mal 0,5. Das ist kein absoluter Abzug von 50 Bytes, sondern ein Faktor. Welche Verfahren in der Praxis welche Faktoren erreichen, regeln Normen wie ISO/IEC 10918 (JPEG) oder ITU-T H.264.',
      ],
      kapitel: {
        titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
        href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
      },
    },
  {
      id: 'bitrate',
      begriff: 'Bitrate',
      kurzdefinition: 'Die Bitrate ist die Datenrate eines kontinuierlichen Medienstroms wie Audio oder Video.',
      definition: [
        'Eine Audio-Datei mit 320 kbit/s erzeugt pro Sekunde 320 000 Bit, also 40 000 Byte. Bei Video kombinieren sich Aufloesung, Framerate und Farbtiefe zu einer Roh-Bitrate, die durch Kompression deutlich gesenkt wird.',
        'Bitraten gibt es in zwei Varianten: Konstant (CBR) liefert eine gleichbleibende Datenrate und ist gut planbar. Variabel (VBR) passt die Datenrate dem Inhalt an - ruhige Szenen brauchen weniger, actionreiche mehr Bits.',
      ],
      kapitel: {
        titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
        href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
      },
    },
  {
      id: 'binaerpraefix',
      begriff: 'Binaerpraefix',
      kurzdefinition: 'Binaerpraefixe stehen für Vielfache von 1024 und folgen der IEC-80000-13.',
      definition: [
        'Die IEC 80000-13 (frueher IEC 60027-2) definiert KiB, MiB, GiB, TiB als 2^10, 2^20, 2^30, 2^40 Byte. Sie wurde eingefuehrt, um die Verwechslung mit den SI-Präfixen zu beenden, die offiziell stets dezimal gemeint sind.',
        'In Pruefungsaufgaben werden Binaerpraefixe oft explizit genannt - etwa wenn ein Bild in MiB statt MB ausgedrueckt werden soll. Wer dann mit 1000 statt 1024 teilt, erhaelt ein systematisch zu großes Ergebnis.',
      ],
      kapitel: {
        titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
        href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
      },
    },
  {
      id: 'dezimalpraefix',
      begriff: 'Dezimalpraefix',
      kurzdefinition: 'Dezimalpraefixe stehen für Vielfache von 1000 und folgen dem SI-System.',
      definition: [
        'Das Internationale Einheitensystem definiert kilo = 10^3, mega = 10^6, giga = 10^9, tera = 10^12. KB, MB, GB, TB sind also dezimal. Festplatten- und Internet-Hersteller geben ihre Werte in der Regel dezimal an - daher zeigt eine 1 TB-Platte unter Windows nur ca. 931 GiB.',
        'In Pruefungsaufgaben gilt: Wenn nichts anderes angegeben ist, KB/MB/GB als dezimal lesen. Bei IHK-Aufgaben mit Festplattenkapazitaet, Datenraten oder Mobilfunk-Tarifen sind Dezimalpraefixe der Standard.',
      ],
      kapitel: {
        titel: 'Datenmengen, Scan & Übertragung - komplett rechnen',
        href: '/lernen/netzwerke/rechnen-netz/datenvolumen-berechnung',
      },
    },
  {
      id: 'gateway',
      begriff: 'Standardgateway',
      kurzdefinition: 'Das Standardgateway ist die Router-Adresse, an die ein Host alle Pakete schickt, deren Ziel außerhalb des eigenen Subnetzes liegt.',
      definition: [
        'Das Standardgateway (englisch Default Gateway) ist die IP-Adresse des Routers im eigenen Subnetz. Liegt das Ziel im selben Subnetz, schickt der Host das Paket direkt an die Ziel-MAC. Liegt das Ziel außerhalb, schickt er es an die MAC des Gateways - dieses entscheidet dann, wohin es weitergeht.',
        'Pruefungsfalle: Das Gateway muss zwingend im gleichen Subnetz liegen wie der Host. Eine /24-IP 192.168.10.50 mit Gateway 192.168.20.1 funktioniert nicht. Ist das Gateway falsch oder leer, klappt der lokale Verkehr trotzdem - aber Internet und alle anderen Subnetze sind nicht erreichbar.',
      ],
      kapitel: {
        titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
        href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
      },
    },
  {
      id: 'arp',
      begriff: 'ARP',
      kurzdefinition: 'ARP loest IPv4-Adressen in MAC-Adressen auf und ist das Bindeglied zwischen Layer 3 und Layer 2.',
      definition: [
        'ARP steht für Address Resolution Protocol (RFC 826). Bevor ein Host ein IP-Paket im lokalen Subnetz versenden kann, muss er die MAC-Adresse des Empfaengers kennen. Per ARP-Request fragt er per Broadcast "Wer hat 192.168.10.7?" und erhaelt die Antwort als ARP-Reply mit der MAC des Zielhosts.',
        'Die Antworten landen im ARP-Cache und gelten dort einige Minuten. Mit dem Befehl "arp -a" siehst du den aktuellen Cache. Wichtig: ARP funktioniert nur im lokalen Subnetz - für Pakete über das Gateway wird die MAC des Gateways aufgeloest, nicht die des Endziels.',
      ],
      kapitel: {
        titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
        href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
      },
    },
  {
      id: 'apipa',
      begriff: 'APIPA',
      kurzdefinition: 'APIPA ist eine Notfall-Selbstkonfiguration aus dem Bereich 169.254.0.0/16, die ein Client vergibt, wenn kein DHCP-Server antwortet.',
      definition: [
        'APIPA steht für Automatic Private IP Addressing (RFC 3927). Erhaelt ein Windows- oder Linux-Client per DHCP keine Antwort, wuerfelt er selbst eine Adresse aus 169.254.1.0 - 169.254.254.255 und prueft per ARP, ob sie noch frei ist. Diese Adresse ist nicht routbar - das Gerät kommt nur noch mit anderen APIPA-Hosts im selben Segment in Kontakt.',
        'Diagnose-Wert: Sieht ein Host eine 169.254.x.x-Adresse, ist das fast immer ein Hinweis darauf, dass der DHCP-Server nicht erreicht wurde. Moegliche Ursachen sind defektes Kabel, falsches VLAN, ausgeschalteter DHCP-Dienst oder ein DHCP-Relay, das den Broadcast nicht weitergibt.',
      ],
      kapitel: {
        titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
        href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
      },
    },
  {
      id: 'nameserver',
      begriff: 'Nameserver',
      kurzdefinition: 'Ein Nameserver ist ein DNS-Server, der Anfragen zu Domainnamen beantwortet - rekursiv aufloesend oder autoritativ für eine Zone.',
      definition: [
        'Ein rekursiver Nameserver (Resolver) nimmt die Anfrage eines Clients an und durchläuft die DNS-Hierarchie - Root-Server, dann TLD-Server (.de, .com), dann den autoritativen Server der Zone - bis er eine Antwort hat. Ein autoritativer Nameserver ist für eine bestimmte Zone (z. B. example.org) verantwortlich und liefert die offiziellen Datensaetze.',
        'In den Netzwerkeinstellungen siehst du meist zwei oder drei Nameserver - der Client fragt sie der Reihe nach. Pruefungsfalle: Ohne erreichbaren Nameserver funktionieren Domain-Aufrufe nicht, aber ein Ping auf eine IP-Adresse geht weiterhin. Genau diese Trennung ist die Standard-Diagnose-Frage.',
      ],
      kapitel: {
        titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
        href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
      },
    },
  {
      id: 'lease',
      begriff: 'DHCP-Lease',
      kurzdefinition: 'Ein Lease ist die zeitlich begrenzte Reservierung einer IP-Adresse, die ein DHCP-Server an einen Client vergibt.',
      definition: [
        'Beim DORA-Handshake (Discover, Offer, Request, Acknowledge) erhaelt der Client eine IP-Konfiguration auf Zeit - die Lease-Dauer steht in der Acknowledge-Nachricht (DHCP-Option 51). Ist die Haelfte der Zeit abgelaufen, fragt der Client per DHCP-Request beim selben Server eine Verlaengerung an (Renew). Antwortet er nicht, wird ab 87,5 Prozent der Lease-Zeit ein Broadcast versucht (Rebind).',
        'Wird ein Gerät ausgeschaltet oder das Netzwerk gewechselt, kann es per DHCP-Release seine Adresse zurueckgeben. Wichtig: Eine zu kurze Lease (z. B. 2 Stunden in einem Hotel-WLAN) entlastet den Pool, eine zu lange Lease (z. B. 8 Tage im Heimnetz) reduziert die DHCP-Last.',
      ],
      kapitel: {
        titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
        href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
      },
    },
  {
      id: 'ttl-dns',
      begriff: 'TTL (DNS)',
      kurzdefinition: 'Die TTL eines DNS-Eintrags gibt an, wie lange ein Resolver oder Client den Datensatz zwischenspeichern darf.',
      definition: [
        'TTL steht für Time to Live und ist ein Wert in Sekunden. Ein A-Record mit TTL 3600 darf eine Stunde im Cache liegen. Erst danach holt der Resolver den Datensatz erneut beim autoritativen Server. Hohe TTLs entlasten die Server, niedrige TTLs erlauben schnellere Umzuege - bei einem Server-Wechsel wird die TTL einige Stunden vorher gesenkt, damit Aenderungen schnell sichtbar werden.',
        'Wichtig: Die TTL im DNS hat nichts mit der TTL im IP-Header zu tun (dort begrenzt sie die Hop-Anzahl, sichtbar in tracert/traceroute). In DNS bezieht sich TTL ausschliesslich auf die Cache-Zeit eines Resource Records.',
      ],
      kapitel: {
        titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
        href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
      },
    },
  {
      id: 'ipconfig',
      begriff: 'ipconfig / ip a',
      kurzdefinition: 'ipconfig (Windows) und ip a beziehungsweise ip addr (Linux) zeigen die aktuelle IPv4-Konfiguration eines Hosts.',
      definition: [
        'Unter Windows liefert "ipconfig /all" die volle Konfiguration je Adapter: IPv4-Adresse, Subnetzmaske, Standardgateway, DNS-Server, MAC-Adresse, DHCP-Lease und ob die Adresse statisch oder per DHCP vergeben wurde. "ipconfig /release" gibt die Lease zurueck, "ipconfig /renew" fordert eine neue an, "ipconfig /flushdns" leert den DNS-Cache.',
        'Unter Linux entspricht das den Befehlen "ip a" (Adressen) und "ip r" (Routing-Tabelle inkl. Default-Gateway). Diese Befehle sind die erste Station der Layer-3-Diagnose: ohne saubere IP-Konfiguration nuetzt jeder weitere Test nichts.',
      ],
      kapitel: {
        titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
        href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
      },
    },
  {
      id: 'dora',
      begriff: 'DORA-Handshake',
      kurzdefinition: 'DORA (Discover, Offer, Request, Acknowledge) ist der vierstufige Handshake, mit dem ein DHCP-Server einem Client eine IP-Konfiguration zuteilt.',
      definition: [
        'Schritt 1: Discover - der Client schickt einen Broadcast (Quelle 0.0.0.0, Ziel 255.255.255.255), weil er noch keine IP hat. Schritt 2: Offer - jeder erreichbare DHCP-Server antwortet mit einem Adressvorschlag inklusive Lease-Dauer. Schritt 3: Request - der Client waehlt das erste Angebot per Broadcast und teilt allen Servern mit, welches Angebot er akzeptiert. Schritt 4: Acknowledge - der gewaehlte Server bestaetigt und schickt die finalen DHCP-Optionen mit.',
        'Wichtig: Genau diese vier Schritte werden gern abgefragt - oft als Reihenfolge-Aufgabe oder als Einzelschritt-Erklaerung. Jeder Schritt nutzt UDP, Port 67 (Server) und 68 (Client). Das Protokoll ist in RFC 2131 definiert.',
      ],
      kapitel: {
        titel: 'Netzwerkkonfiguration, DHCP, DNS & Diagnose',
        href: '/lernen/netzwerke/adressierung/netzwerkkonfiguration',
      },
    },
  {
      id: 'wlan',
      begriff: 'WLAN',
      kurzdefinition: 'Drahtloses lokales Netzwerk, meist auf Basis der IEEE-802.11-Standardfamilie.',
      definition: [
        'WLAN steht fuer Wireless Local Area Network. Es verbindet Geraete per Funk mit einem lokalen Netzwerk, typischerweise ueber Access Points.',
        'WLAN ist ein geteiltes Medium: Geraete teilen sich Funkzeit, Kanal und Stoerumgebung. Deshalb sind Planung, Verschluesselung und Kanalwahl wichtig.',
      ],
      kapitel: {
        titel: 'WLAN-Standards und WLAN-Sicherheit',
        href: '/lernen/netzwerke/netz-sicherheit/wlan-standards',
      },
    },
  {
      id: 'access-point',
      begriff: 'Access Point',
      kurzdefinition: 'Funkbasisstation, die WLAN-Clients mit einem kabelgebundenen oder logischen Netz verbindet.',
      definition: [
        'Ein Access Point sendet eine oder mehrere SSIDs aus und nimmt WLAN-Clients ins Netz auf. Er ist die Bruecke zwischen Funknetz und LAN.',
        'In Heimroutern sind Access Point, Router, Switch und Firewall oft in einem Geraet kombiniert. In Unternehmen sind Access Points meist separate, zentral verwaltete Geraete.',
      ],
      kapitel: {
        titel: 'WLAN-Standards und WLAN-Sicherheit',
        href: '/lernen/netzwerke/netz-sicherheit/wlan-standards',
      },
    },
  {
      id: 'ssid',
      begriff: 'SSID',
      kurzdefinition: 'Name eines WLANs, den Clients zur Auswahl des Funknetzes sehen.',
      definition: [
        'SSID steht fuer Service Set Identifier. Sie ist der sichtbare oder konfigurierbare Name eines WLANs, zum Beispiel Firma-Mitarbeiter oder Firma-Gast.',
        'Das Verstecken der SSID ist keine echte Sicherheitsmassnahme. Entscheidend sind sichere Authentifizierung, Verschluesselung und Netztrennung.',
      ],
      kapitel: {
        titel: 'WLAN-Standards und WLAN-Sicherheit',
        href: '/lernen/netzwerke/netz-sicherheit/wlan-standards',
      },
    },
  {
      id: 'frequenzband',
      begriff: 'Frequenzband',
      kurzdefinition: 'Funkbereich, in dem ein WLAN arbeitet, zum Beispiel 2,4 GHz, 5 GHz oder 6 GHz.',
      definition: [
        'Das Frequenzband beeinflusst Reichweite, Stoeranfaelligkeit, Kanalanzahl und moegliche Datenrate. 2,4 GHz reicht weiter, ist aber oft voller; 5 GHz und 6 GHz bieten mehr Kapazitaet bei kuerzerer Reichweite.',
        'Bei der Planung muessen Client-Faehigkeiten, Gebaeude, Nachbar-WLANs und Stoerquellen beruecksichtigt werden.',
      ],
      kapitel: {
        titel: 'WLAN-Standards und WLAN-Sicherheit',
        href: '/lernen/netzwerke/netz-sicherheit/wlan-standards',
      },
    },
  {
      id: 'wlan-kanal',
      begriff: 'WLAN-Kanal',
      kurzdefinition: 'Teilbereich eines Frequenzbands, auf dem ein Access Point funkt.',
      definition: [
        'Ein WLAN-Kanal ist ein Ausschnitt im Frequenzband. Benachbarte oder ueberlappende Kanaele koennen sich stoeren, besonders im 2,4-GHz-Band.',
        'In der Praxis werden bei 2,4 GHz haeufig die nicht ueberlappenden Kanaele 1, 6 und 11 verwendet.',
      ],
      kapitel: {
        titel: 'WLAN-Standards und WLAN-Sicherheit',
        href: '/lernen/netzwerke/netz-sicherheit/wlan-standards',
      },
    },
  {
      id: 'roaming',
      begriff: 'Roaming',
      kurzdefinition: 'Wechsel eines WLAN-Clients zwischen Access Points derselben WLAN-Umgebung.',
      definition: [
        'Beim Roaming wechselt ein Client von einem Access Point zu einem anderen, ohne dass der Nutzer das WLAN manuell neu auswaehlt.',
        'Der Client entscheidet wesentlich mit, wann er wechselt. Schlechte AP-Positionierung oder zu hohe Sendeleistung kann dazu fuehren, dass Clients zu lange an einem entfernten AP kleben.',
      ],
      kapitel: {
        titel: 'WLAN-Standards und WLAN-Sicherheit',
        href: '/lernen/netzwerke/netz-sicherheit/wlan-standards',
      },
    },
  {
      id: 'wpa3',
      begriff: 'WPA3',
      kurzdefinition: 'Aktuelle Wi-Fi-Sicherheitsgeneration mit verbessertem Schutz gegen Angriffe auf WLAN-Passwoerter.',
      definition: [
        'WPA3 ist der Nachfolger von WPA2 und verbessert unter anderem den Schutz bei der Authentifizierung, besonders gegen Offline-Woerterbuchangriffe auf schwache Passwoerter.',
        'Wo moeglich sollte WPA3 genutzt werden. In gemischten Umgebungen kann WPA2 weiterhin noetig sein, WEP und altes WPA sollten nicht mehr verwendet werden.',
      ],
      kapitel: {
        titel: 'WLAN-Standards und WLAN-Sicherheit',
        href: '/lernen/netzwerke/netz-sicherheit/wlan-standards',
      },
    },
  {
      id: 'wpa-personal',
      begriff: 'WPA-Personal',
      kurzdefinition: 'WLAN-Sicherheitsmodus mit gemeinsamem Passwort fuer alle berechtigten Nutzer.',
      definition: [
        'WPA-Personal nutzt ein gemeinsames Passwort, auch Pre-Shared Key genannt. Das ist einfach und fuer kleine Umgebungen praktisch.',
        'In Unternehmen ist es problematisch, weil ein bekannt gewordenes Passwort fuer alle geaendert werden muss und einzelne Nutzer nicht sauber getrennt gesperrt werden koennen.',
      ],
      kapitel: {
        titel: 'WLAN-Standards und WLAN-Sicherheit',
        href: '/lernen/netzwerke/netz-sicherheit/wlan-standards',
      },
    },
  {
      id: 'wpa-enterprise',
      begriff: 'WPA-Enterprise',
      kurzdefinition: 'WLAN-Sicherheitsmodus mit individueller Authentifizierung ueber 802.1X und meist RADIUS.',
      definition: [
        'WPA-Enterprise nutzt individuelle Benutzeranmeldung oder Zertifikate statt eines gemeinsamen WLAN-Passworts. Haefig wird dafuer 802.1X mit einem RADIUS-Server eingesetzt.',
        'Das passt besser zu Unternehmen, weil einzelne Konten gesperrt, Rollen getrennt und Zugriffe zentral verwaltet werden koennen.',
      ],
      kapitel: {
        titel: 'WLAN-Standards und WLAN-Sicherheit',
        href: '/lernen/netzwerke/netz-sicherheit/wlan-standards',
      },
    },
]
