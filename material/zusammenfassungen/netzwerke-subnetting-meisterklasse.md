---
herkunft: "Die Subnetting-Meisterklasse" — Lern- und Uebungsleitfaden (eigenes Material)
quelldatei: subnettingmasterclass.pdf
datum: 2026-08
lernfeld: netzwerke
art: zusammenfassung
verdichtet: nein
extraktion: pdfplumber, Rohtext ohne Nachbearbeitung
---

# Die Subnetting-Meisterklasse

> Aus PDF extrahiert (12 Seiten). Didaktisch stark: gliedert Subnetting in die drei
> IHK-Aufgabentypen und leitet die Formeln her statt sie zu behaupten.
>
> **Bekannter Fehler:** In Aufgabentyp 2 steht fuer Subnetz 3
> "Nutzbare IPs: .129 bis .188, Broadcast: .189". Richtig ist **.129 bis .190,
> Broadcast .191** — bei Blockgroesse 64 laeuft der dritte Block von 128 bis 191.


<!-- Seite 1 -->

DIE SUBNETTING-MEISTERKLASSE
LÜCKENLOSE IP-ADRESSIERUNG & SUBNETTING FÜR FACHINFORMATIKER (AP1)
Didaktischer Lern- & Übungsleitfaden
Speziell entwickelt für die schriftliche Abschlussprüfung Teil 1 (AP1)
Ausbildungsjahr 1 & 2 für alle IT-Berufe.
Inhaltliche Schwerpunkte: Binärsystem, Subnetting-Formeln, IPv4-Adressklassen, CIDR, VLSM &
Nibble-IPv6.
Ganz ohne Vorwissen sofort verstehen.

<!-- Seite 2 -->



<!-- Seite 3 -->

Didaktisches Vorwort
Das Thema Subnetting ist in der Abschlussprüfung Teil 1 (AP1) der Fachinformatiker ein gefürchteter Klassiker. Oft wird es
in Lehrbüchern trocken und rein mathematisch erklärt, was zu Frustration führt. Dieses Handbuch wurde mit dem Ziel
erstellt, das Thema von Grund auf, ohne jegliches Vorwissen, rein logisch und didaktisch aufzubereiten.
Dieses Handbuch ist kein stumpfes Abschreibwerk. Es leitet Konzepte anhand von realen Analogien her und demonstriert
exakt die Rechenwege, die du in der Prüfung benötigst, um jeden Punkt sicher mitzunehmen. Am Ende dieses Leitfadens
wirst du Subnetting nicht mehr auswendig lernen, sondern du wirst es mit voller Überzeugung verstehen und anwenden
können.
Inhaltsverzeichnis
1. Die binäre Logik (Der Ursprung von allem) Seite 4
2. Anatomie einer IP-Adresse (Hausnummer & Straße) Seite 5
3. Private IP-Adressbereiche & Netzklassen Seite 6
4. Die vier magischen Parameter eines Netzes Seite 8
5. CIDR (Classless Inter-Domain Routing) Seite 10
6. Die 3 großen IHK-Prüfungsrechenaufgaben (Schritt für Schritt) Seite 12
- Aufgabentyp 1: Netzgrenzen aus IP und Maske bestimmen Seite 12
- Aufgabentyp 2: Ein Netz in N gleich große Netze teilen Seite 13
- Aufgabentyp 3: Variable Subnetzmasken (VLSM) für Abteilungen Seite 14
7. IPv6 Subnetting an der Nibble Boundary (Keine Angst vor Hexadezimal) Seite 16

<!-- Seite 4 -->

1. Die binäre Logik: Der Ursprung von allem
Computer kommunizieren nicht mit Dezimalzahlen (wie 192 oder 168), sondern ausschließlich mit Stromsignalen: Strom an
(1) oder Strom aus (0). Diese binäre Stelle nennt man Bit. Acht solcher Bits werden zu einem Byte (oder Oktett)
zusammengefasst.
Um im Kopf spielend leicht zwischen der dezimalen und binären Welt hin- und herzuwechseln, nutzen wir die
8-Bit-Gewichtungstabelle. Jedes Bit von rechts nach links hat einen festen Wert, der sich von Stelle zu Stelle verdoppelt:
Abbildung 1: Die 8-Bit-Wertigkeitstabelle am Beispiel der Zahl 192
Didaktische Eselsbrücke: Lichtschalter
Das Prinzip des Binär-Zählers:
Stell dir 8 Lichtschalter vor. Jeder Schalter steht für einen der Werte: 128, 64, 32, 16, 8, 4, 2, 1.
· Willst du die Zahl 192 binär darstellen, überlegst du: Passt die 128 in die 192? Ja! Also Schalter 128 AN (1). Bleiben 64 übrig
(192 - 128 = 64).
· Passt die 64 in die verbleibenden 64? Ja, exakt! Also Schalter 64 AN (1). Bleiben 0 übrig.
· Alle weiteren Schalter (32, 16, 8, 4, 2, 1) bleiben AUS (0).
Das Ergebnis für die Dezimalzahl 192 lautet binär also: 11000000.
Dezimalzahl Binäre Schreibweise (Oktett) Logik (Zusammenrechnung)
0 0000 0000 Kein Schalter ist an (Minimum)
1 0000 0001 Nur der 1er-Schalter ist an
10 0000 1010 8 + 2 = 10
128 1000 0000 Nur der 128er-Schalter ist an
168 1010 1000 128 + 32 + 8 = 168
255 1111 1111 Alle Schalter sind an: 128+64+32+16+8+4+2+1 (Maximum)

<!-- Seite 5 -->

2. Anatomie einer IP-Adresse: Hausnummer & Straße
Eine IPv4-Adresse besteht aus insgesamt 32 Bits, aufgeteilt in 4 Oktette (z. B. 192.168.1.5). Doch eine IP-Adresse alleine
ist im Netzwerk nutzlos. Sie benötigt immer einen Partner: die Subnetzmaske (z. B. 255.255.255.0).
Die Post-Analogie:
Stell dir eine vollständige Postanschrift vor, bestehend aus Straßenname und Hausnummer. · Der Netzwerk-Teil (Net-ID)
entspricht dem Straßennamen. Alle Geräte in demselben physischen Netzwerk müssen denselben Straßennamen tragen,
um ohne Router miteinander sprechen zu können.
· Der Host-Teil (Host-ID) entspricht der Hausnummer. Jedes Gerät in diesem Netz benötigt eine eindeutige Hausnummer,
um Verwechslungen auszuschließen.
Die Rolle der Subnetzmaske:
Die Subnetzmaske zieht die messerscharfe Grenze zwischen dem Straßennamen und der Hausnummer. Überall dort, wo
in der Subnetzmaske eine binäre 1 steht (bzw. dezimal 255), gehört die Stelle zum Netzwerk-Teil (Straße). Wo eine 0 steht,
beginnt der Host-Teil (Hausnummer).
Die mathematische UND-Verknüpfung
Wie der Computer rechnet (Die logische UND-Verknüpfung):
Wenn ein PC an 192.168.1.50 ein Paket schicken will, prüft er über die bitweise UND-Operation seines eigenen Netzes, ob der
Empfänger im selben Netz liegt:
IP-Adresse: 11000000.10101000.00000001.00110010 (192.168.1.50)
Subnetzmaske: 11111111.11111111.11111111.00000000 (255.255.255.0)
------------------------------------------------------------- (UND-Verknüpfung)
Ergebnis: 11000000.10101000.00000001.00000000 (192.168.1.0 = Netz-ID)
Nur wenn beide Bits an derselben Stelle eine '1' aufweisen, ist das Ergebnis ebenfalls '1'. Dadurch filtert der Computer den
Host-Anteil einfach heraus und sieht nur die Straße (Net-ID).

<!-- Seite 6 -->

3. Private IP-Adressbereiche & Netzklassen
Historisch wurde der IPv4-Adressraum in fünf starre Netzklassen (Klassen A bis E) unterteilt. Obwohl dieses System
heute in der Praxis durch klassenloses Routing (CIDR) abgelöst wurde, verlangt die IHK in Prüfungen nach wie vor die
Kenntnis dieser Grenzen und standardmäßigen Zuordnungen.
Klasse Erstes Bit-Muster Dezimaler Bereich Standard-Maske Einsatzzweck
A 0... 0.0.0.0 bis 127.255.255.255 255.0.0.0 (/8) Sehr große Netze (wenige
Netze, extrem viele Hosts)
B 10... 128.0.0.0 bis 191.255.255.255 255.255.0.0 (/16) Mittlere Netze (Firmen,
Universitäten)
C 110... 192.0.0.0 bis 223.255.255.255 255.255.255.0 (/24) Kleine lokale Netze
(Heimnetze, kleine Büros)
D 1110... 224.0.0.0 bis 239.255.255.255 Keine Standardmaske Multicast-Adressen (Gruppe
von Empfängern)
E 1111... 240.0.0.0 bis 255.255.255.255 Keine Standardmaske Für Forschungszwecke
reserviert
Öffentliche vs. Private IP-Adressen
Damit nicht jedes Gerät auf der Welt eine teure, weltweit eindeutige öffentliche IP-Adresse benötigt, wurden für lokale
Netzwerke (LAN) **private IP-Adressbereiche** nach RFC 1918 reserviert. Private IPs werden im Internet von Routern
**nicht weitergeleitet (nicht geroutet)**. Die Kommunikation ins Internet erfolgt über die Adressübersetzung **NAT (Network
Address Translation)** am Router.
Klasse Privater Adressbereich Standardmaske Anzahl Netze Nutzbare Hosts pro Netz
Klasse A 10.0.0.0 bis 10.255.255.255 255.0.0.0 (/8) 1 Netz 16.777.214
Klasse B 172.16.0.0 bis 172.31.255.255 255.240.0.0 (/12) 16 Netze 65.534
Klasse C 192.168.0.0 bis 192.168.255.255 255.255.0.0 (/16) 256 Netze 254
Wichtige reservierte Sonderadressen
· 127.0.0.1 (Loopback / localhost): Diese virtuelle Adresse verweist auf das Gerät selbst. Sie dient zur internen Diagnose
und zum Testen lokaler Netzwerksoftware.
· 0.0.0.0: Steht für 'unbekanntes' oder 'jedes' Netzwerk. Wird u.a. bei DHCP-Anfragen als temporäre Absenderadresse
genutzt.

<!-- Seite 7 -->

4. Die vier magischen Parameter eines Netzes
Jedes Subnetz (oder IP-Netz) wird mathematisch durch exakt **vier fundamentale Parameter** definiert. Egal, welche
Aufgabe du in der Prüfung löst: Am Ende geht es immer darum, diese vier Werte fehlerfrei zu bestimmen.
Parameter Bedeutung & Funktion IHK-Regel & Logik
1. Netzwerkadresse Der offizielle Name des Subnetzes (z. B. Darf niemals an ein Endgerät vergeben werden! Binär
(Net-ID) 192.168.1.0). Bezeichnet das gesamte sind im Host-Teil alle Bits auf 0 gesetzt.
Netz als Einheit.
2. Erste nutzbare IP Die erste IP-Adresse, die du einem PC, Entspricht immer der Netzwerkadresse + 1 im letzten
(First Host) Server oder Drucker zuweisen kannst. Oktett (z. B. 192.168.1.1).
3. Letzte nutzbare IP Die letzte IP-Adresse, die du einem Entspricht immer der Broadcastadresse - 1 im letzten
(Last Host) Endgerät zuweisen kannst. Oktett (z. B. 192.168.1.254).
4. Broadcastadresse Die 'Rundruf-Adresse' des Netzes. Ein Darf niemals an ein Endgerät vergeben werden! Binär
Datenpaket an diese IP wird an alle sind im Host-Teil alle Bits auf 1 gesetzt (z. B.
Hosts im Subnetz verteilt. 192.168.1.255).
Die logische Herleitung von '- 2'
Warum ziehen wir in Formeln immer 2 ab?
Bei der Berechnung nutzbarer Adressen stößt du auf die Formel:
Nutzbare Hosts = 2^h - 2 (wobei h die Anzahl der Host-Bits ist).
Die logische Begründung ist extrem einfach: Von allen mathematisch möglichen Bit-Kombinationen im Hostbereich müssen wir
die allererste Kombination (alles 0) für die Netzwerkadresse und die allerletzte Kombination (alles 1) für die
Broadcastadresse abziehen. Diese beiden Sonderadressen sind fest reserviert und stehen für normale PCs nicht zur
Verfügung.
Übertragungsarten im Vergleich
Übertragungsart Funktion Visualisierung / Analogie
Unicast Direkte Verbindung von einem Punkt zu einem ganz Ein privater Brief an einen Empfänger.
bestimmten anderen Punkt (1-zu-1).
Multicast Verbindung von einem Punkt an eine geschlossene Ein Newsletter, den man abonnieren muss.
Gruppe von Empfängern (1-zu-Gruppe). Empfänger
müssen sich vorher beim Sender anmelden.
Broadcast Verbindung von einem Punkt an alle physisch Eine Durchsage über die Ortssirene im Dorf.
erreichbaren Teilnehmer im lokalen Netz (1-zu-Alle).
Wird von Routern nicht weitergeleitet.

<!-- Seite 8 -->

5. CIDR (Classless Inter-Domain Routing)
Da die historischen Netzklassen (A, B, C) viel zu starr waren, kam es zu massiver Verschwendung von IP-Adressen. Ein
Klasse-C-Netz bot nur 254 Hosts (oft zu wenig), während Klasse B direkt 65.534 Hosts bot (oft viel zu viel). Deshalb wurde
**CIDR (Classless Inter-Domain Routing)** eingeführt.
Bei CIDR gibt es keine festen Klassen mehr. Stattdessen wird die Subnetzmaske durch ein Suffix mit Schrägstrich
angegeben (z. B. /24). Das Suffix sagt dir direkt, wie viele Bits von links nach rechts in der Maske auf 1 (aktiv) gesetzt sind.
CIDR Subnetzmaske (Dezimal) Host-Bits (h) Gesamt-IPs (2^h) Nutzbare IPs (2^h - 2)
/30 255.255.255.252 2 (32 - 30 = 2) 4 2 (Typisch für Point-to-Point
WAN-Links)
/29 255.255.255.248 3 8 6
/28 255.255.255.240 4 16 14
/27 255.255.255.224 5 32 30
/26 255.255.255.192 6 64 62
/25 255.255.255.128 7 128 126
/24 255.255.255.0 8 (32 - 24 = 8) 256 254 (Standard Klasse C)
/16 255.255.0.0 16 65.536 65.534 (Standard Klasse B)
Die grafische Aufteilung von Adressräumen
Subnetting bedeutet nichts anderes, als ein großes Netz in kleinere Netze zu unterteilen. Jedes Mal, wenn wir der
Subnetzmaske 1 Bit hinzufügen (z. B. von /24 auf /25), halbieren wir den Adressraum und erhalten zwei separate Subnetze:
Abbildung 2: Der Binärbaum der Subnetze am Beispiel der Aufteilung von /24

<!-- Seite 9 -->

6. Die 3 großen IHK-Prüfungsrechenaufgaben
Aufgabentyp 1: Netzgrenzen aus IP-Adresse und Subnetzmaske bestimmen
Aufgabe: Gegeben ist die IP-Adresse 172.16.50.73 mit der Maske 255.255.255.224 (/27). Bestimme die Netzwerkadresse,
die erste nutzbare IP, die letzte nutzbare IP und die Broadcastadresse.
Musterrezept: Schrittweite (Magic Number)
Schritt-für-Schritt-Anleitung zur Lösung:
1. Finde das 'interessante' Oktett:
Die Maske lautet 255.255.255.224. Die ersten drei Oktette sind '255', das vierte ist '224'. Das bedeutet, das vierte Oktett ist der
Bereich, in dem gearbeitet und gerechnet werden muss. Die ersten drei Oktette (172.16.50) bleiben für alle Parameter
unverändert bestehen!
2. Berechne die 'Schrittweite' (Magic Number):
Ziehe den Wert des interessanten Oktetts der Maske von 256 ab:
Schrittweite = 256 - 224 = 32.
Das bedeutet, alle Subnetze in diesem Bereich steigen in 32er-Schritten an: .0, .32, .64, .96, .128, ...
3. Finde die Netzwerkadresse (Net-ID):
Wo liegt die .73 aus unserer IP-Adresse im Vergleich zu den Netzen?
· Netz 1: .32
· Netz 2: .64
· Netz 3: .96 (zu hoch!)
Die Zahl 73 liegt zwischen 64 und 95. Das Netz beginnt also bei .64.
Netzwerkadresse: 172.16.50.64
4. Finde die Broadcastadresse:
Die Broadcastadresse ist immer genau die IP-Adresse vor dem Beginn des nächsten Subnetzes. Das nächste Subnetz beginnt
bei .96. Also ist die Adresse davor (.96 - 1 = .95) der Broadcast.
Broadcastadresse: 172.16.50.95
5. Nutzbaren Hostbereich ausfüllen:
· Erste nutzbare IP = Netzwerkadresse + 1 = 172.16.50.65
· Letzte nutzbare IP = Broadcastadresse - 1 = 172.16.50.94
Aufgabentyp 2: Ein Netz in N gleich große Netze aufteilen
Aufgabe: Du hast das Basisnetz 192.168.10.0/24. Für verschiedene Stockwerke sollst du dieses Netz in **4 gleich große
Subnetze** unterteilen. Bestimme die neue Subnetzmaske sowie alle Netzwerkadressen.

<!-- Seite 10 -->

Musterrezept: Subnetz-Bit-Vergabe
Schritt-für-Schritt-Anleitung zur Lösung:
1. Finde die Anzahl der benötigten 'Subnetz-Bits' (s):
Wir müssen 4 Subnetze bilden. Wie viele Bits müssen wir uns dafür aus dem Hostbereich ausleihen?
Formel: 2^s >= Anzahl Subnetze
2^2 = 4. Wir müssen uns exakt 2 Bits ausleihen.
2. Berechne das neue CIDR-Suffix:
Das alte Netz war ein /24. Wir fügen die 2 ausgeliehenen Bits hinzu:
Neues Suffix = 24 + 2 = /26.
Binär hat die neue Maske nun 26 Einsen von links: 255.255.255.192 (128 + 64 = 192).
3. Berechne die Schrittweite (Magic Number) des neuen Netzes:
Schrittweite = 256 - 192 = 64 (oder 2^(32 - 26) = 2^6 = 64).
Das bedeutet, jedes der 4 neuen Subnetze hat eine Blockgröße von exakt 64 Adressen.
4. Liste die Subnetze auf:
Wir starten bei .0 und zählen immer die Schrittweite von 64 hinzu:
· Subnetz 1: 192.168.10.0/26 (Nutzbare IPs: .1 bis .62, Broadcast: .63)
· Subnetz 2: 192.168.10.64/26 (Nutzbare IPs: .65 bis .126, Broadcast: .127)
· Subnetz 3: 192.168.10.128/26 (Nutzbare IPs: .129 bis .188, Broadcast: .189)
· Subnetz 4: 192.168.10.192/26 (Nutzbare IPs: .193 bis .254, Broadcast: .255)

<!-- Seite 11 -->

Aufgabentyp 3: Variable Subnetzmasken (VLSM) für Abteilungen
Aufgabe (Der absolute IHK-Favorit):
Gegeben ist der Adressbereich 192.168.1.0/24. Du sollst ein Adresskonzept für drei Abteilungen mit folgenden
Anforderungen erstellen:
· Abteilung A (Vertrieb): 60 benötigte Hosts
· Abteilung B (Entwicklung): 28 benötigte Hosts
· Abteilung C (Verwaltung): 12 benötigte Hosts
Die goldene Regel der VLSM-Planung:
Sortiere die Anforderungen immer zwingend von groß nach klein! Beginne mit der größten Abteilung. Wenn du diese
Regel missachtest, überlappen sich deine Subnetze und du verlierst Punkte.
VLSM Schritt für Schritt durchgerechnet
Didaktischer Rechenweg zur lückenlosen VLSM-Zuweisung:
1. Abteilung A (60 Hosts):
· Wie viele Host-Bits h werden benötigt? 2^h - 2 >= 60.
2^5 - 2 = 30 (zu wenig!). 2^6 - 2 = 62 (passt!). Wir wählen 6 Host-Bits.
· Neue Maske: Suffix = 32 - 6 = /26 (Subnetzmaske: 255.255.255.192).
· Schrittweite = 256 - 192 = 64.
· Zuweisung: Netz beginnt bei 192.168.1.0/26. (Host-Range: .1 bis .62, Broadcast: .63)
2. Abteilung B (28 Hosts):
Wir setzen exakt am Ende von Abteilung A auf (nächste freie IP ist .64).
· Host-Bits: 2^h - 2 >= 28. 2^5 - 2 = 30 (passt!). Wir wählen 5 Host-Bits.
· Neue Maske: Suffix = 32 - 5 = /27 (Subnetzmaske: 255.255.255.224).
· Schrittweite = 256 - 224 = 32.
· Zuweisung: Netz beginnt bei 192.168.1.64/27. (Host-Range: .65 bis .94, Broadcast: .95)
3. Abteilung C (12 Hosts):
Wir setzen am Ende von Abteilung B auf (nächste freie IP ist .96).
· Host-Bits: 2^h - 2 >= 12. 2^4 - 2 = 14 (passt!). Wir wählen 4 Host-Bits.
· Neue Maske: Suffix = 32 - 4 = /28 (Subnetzmaske: 255.255.255.240).
· Schrittweite = 256 - 240 = 16.
· Zuweisung: Netz beginnt bei 192.168.1.96/28. (Host-Range: .97 bis .110, Broadcast: .111)
Abbildung 3: Visuelle Aufteilung des /24-Adressraums mittels Variable Length Subnet Mask (VLSM)

<!-- Seite 12 -->

7. IPv6 Subnetting an der Nibble Boundary
Viele Prüflinge geraten in Panik, wenn IPv6 in der Prüfung auftaucht. Dabei ist IPv6 aufgrund der enormen Größe von 128
Bits und der hexadezimalen Darstellung strukturell viel einfacher zu subnetten als IPv4 – wenn man das Prinzip der Nibble
Boundary (Halb-Byte-Grenze) verstanden hat.
Die Grundlagen von IPv6-Adressen:
· Eine IPv6-Adresse besteht aus 8 Blöcken (Hextets) mit je 16 Bit (z. B. fe80:0000:0000:0000:0000:0000:0000:0001).
· Führende Nullen dürfen weggelassen werden (fe80:0:0:0:0:0:0:1).
· Eine Kette aufeinanderfolgender Null-Blöcke darf **einmalig** durch einen doppelten Doppelpunkt '::' ersetzt werden
(fe80::1).
· In der Regel werden Kundennetze als ein **/56** oder **/48** Präfix übergeben. Das Standard-Endnutzernetz auf
LAN-Ebene ist immer ein **/64**-Netz.
IPv6-Subnetting im Handumdrehen
Was ist die Nibble-Grenze?
Ein 'Nibble' entspricht einem halben Byte, also exakt 4 Bits. Da eine einzelne Hex-Ziffer bei IPv6 genau 4 Bits groß ist (0 bis F),
entspricht jede Verschiebung des Subnetz-Präfixes um 4 Bits (also von /56 auf /60, /64, etc.) genau **einer vollen Hex-Stelle**
in der Adresse!
Beispiel: Ein /56 Netz in /60 Netze aufteilen
Gegeben ist das Netz: 2001:db8:aaaa:1200::/56
Das 4. Hextet lautet '1200'. Da das Präfix bei /56 liegt, gehört die '12' zum festen Routing-Präfix. Die verbleibenden beiden
Hexstellen '00' stehen uns für die Subnetzbildung zur Verfügung.
Wir erhöhen das Präfix auf /60. Das ist ein Unterschied von 4 Bits (+1 Hex-Stelle). Die veränderliche Stelle ist also exakt die
dritte Ziffer im 4. Hextet (2001:db8:aaaa:12X0::/60).
Da es sich um Hexadezimalwerte handelt, zählen wir diese Stelle einfach von 0 bis F hoch:
· Subnetz 0: 2001:db8:aaaa:1200::/60
· Subnetz 1: 2001:db8:aaaa:1210::/60
· Subnetz 2: 2001:db8:aaaa:1220::/60
· ...
· Subnetz 10: 2001:db8:aaaa:12a0::/60
· Subnetz 15: 2001:db8:aaaa:12f0::/60
Wir erhalten ohne langes Binärrechnen sofort 16 perfekt saubere Subnetze!
Präfix-Größe Anzahl der verfügbaren /64 Subnetze Mathematische Logik
/64 1 Subnetz 2^(64 - 64) = 2^0 = 1
/60 16 Subnetze 2^(64 - 60) = 2^4 = 16 (1 Hex-Stelle veränderbar)
/56 256 Subnetze 2^(64 - 56) = 2^8 = 256 (2 Hex-Stellen veränderbar)
/52 4.096 Subnetze 2^(64 - 52) = 2^12 = 4.096 (3 Hex-Stellen veränderbar)
/48 65.536 Subnetze 2^(64 - 48) = 2^16 = 65.536 (4 Hex-Stellen veränderbar)