# Netzwerke

> Arbeitsdatei fuer das Lernfeld `netzwerke`.
> Vom OSI-Modell bis zum Subnetting.

Ein Chat, der an einem Kapitel dieses Lernfelds arbeitet, liest **diese Datei**
und zusaetzlich `UNIVERSAL_PROMPT.md` sowie `CONTENT_GUIDELINES.md`. Mehr nicht.

---

## Quellenpolitik fuer dieses Lernfeld

Netzwerktechnik ist der Bereich mit der besten Quellenlage im ganzen Projekt:
Fast jede Aussage laesst sich auf ein oeffentlich zugaengliches, frei lesbares
Normdokument zurueckfuehren. Es gibt hier also **keine Entschuldigung** fuer
unbelegte Behauptungen.

**Primaer (belegt Fakten):**

- **RFCs** (rfc-editor.org) — die Referenz fuer alles rund um IP, TCP, UDP,
  DHCP, DNS, NAT, Mail. Frei lesbar, stabil zitierbar, mit Nummer eindeutig.
  Auf den Status achten: `Standards Track`, `Best Current Practice` und
  `Informational` sind nicht gleichwertig. Ein obsoleter RFC belegt nichts —
  jeder RFC nennt oben, wodurch er ersetzt wurde.
- **IEEE 802-Normen** — Ethernet (802.3) und WLAN (802.11). Die Norm selbst ist
  kostenpflichtig; fuer Zitate reicht die offizielle Uebersichtsseite von IEEE.
- **IANA-Register** — die verbindliche Liste der Portnummern und
  Protokollnummern. Bei jeder Port-Aussage die einzig richtige Quelle.
- **BSI** — fuer alles mit Sicherheitsbezug: Firewall, DMZ, WLAN-Absicherung,
  Netzsegmentierung. Amtlich und auf deutsche Betriebspraxis zugeschnitten.

**Sekundaer (Einordnung, nie alleiniger Beleg):**

- Herstellerdokumentation (Cisco, Microsoft, Fritz!Box) — zulaessig fuer
  **herstellerspezifisches** Verhalten, nicht fuer allgemeine Protokollaussagen.
- KMK-Rahmenlehrplan und BIBB-Umsetzungshilfe — belegen die didaktische
  Einordnung und Pruefungsrelevanz, nicht die Technik.

**Nicht zulaessig als Beleg:**

- Elektronik-Kompendium, Wikipedia, ITWissen, Blogbeitraege, YouTube.
  Zum Verstehen brauchbar, als Beleg wertlos. Wenn eine Aussage nur dort steht
  und in keinem RFC, gehoert sie nicht ins Kapitel.
- Andere Kapitel aus diesem Repo. Sie sind selbst noch ungeprueft und koennen
  keinen Beleg tragen.

---

## Aufgabentypen, die die Pruefung hier stellt

> **Noch nicht belegt.** Diese Tabelle wird aus echten Pruefungen unter
> `material/pruefungen/` hergeleitet, sobald sie vorliegen — nicht geraten.
> Bis dahin bleibt sie leer. Eine erfundene Aufgabentypen-Tabelle waere genau
> die Sorte plausibel aussehender KI-Struktur, die dieses Projekt loswerden will.

| Aufgabentyp | Wie erkennbar | Worauf es bei der Antwort ankommt |
|---|---|---|
| _wartet auf Material_ | | |

---

## Typische Fehler in diesem Fach

Fachlich pruefbare Stolperstellen, die in Netzwerkkapiteln immer wieder
auftauchen. Jedes Kapitel dieses Lernfelds sollte die einschlaegigen davon in
seinem `## Typische Fehler`-Abschnitt abdecken.

- **Bit gegen Byte bei Datenraten.** Datenraten werden in **Bit** pro Sekunde
  angegeben (Mbit/s), Dateigroessen in **Byte**. Wer den Faktor 8 vergisst,
  rechnet um eine Achterpotenz daneben. Kleines `b` gegen grosses `B`.
- **Dezimal- gegen Binaerpraefix.** Uebertragungsraten rechnen dezimal
  (1 Mbit/s = 10⁶ bit/s), Speichergroessen oft binaer (1 MiB = 2²⁰ Byte).
  Beides in einer Aufgabe zu mischen ist der Klassiker.
- **Netzadresse und Broadcast als nutzbare Hosts mitgezaehlt.** Bei einem /27
  sind 32 Adressen im Block, aber nur **30** nutzbar. Off-by-two.
- **Zweierpotenz-Grenzen verwechselt.** 2ⁿ Adressen, aber 2ⁿ − 2 Hosts. Und
  `/24` sind 256 Adressen, nicht 255.
- **Port mit Protokoll gleichgesetzt.** Ein Port ist eine Nummer, kein
  Protokoll. HTTPS laeuft ueblicherweise auf 443, ist aber nicht als 443
  definiert.
- **TCP-Zuverlaessigkeit mit Sicherheit verwechselt.** TCP garantiert
  Reihenfolge und Vollstaendigkeit, **nicht** Vertraulichkeit. Verschluesselung
  kommt von TLS, nicht von TCP.
- **DHCP-Reihenfolge geraten.** DORA heisst Discover, Offer, Request,
  Acknowledge — in genau dieser Reihenfolge.
- **APIPA-Adresse falsch gelesen.** Eine Adresse aus `169.254.0.0/16` bedeutet:
  DHCP hat nicht geantwortet. Das ist ein Befund, keine gueltige Konfiguration.
- **DNS und DHCP vermischt.** DNS loest Namen zu Adressen auf. DHCP vergibt
  Adressen. Zwei verschiedene Dienste, zwei verschiedene Ports.
- **NAT als Sicherheitsfunktion verkauft.** NAT uebersetzt Adressen. Dass
  eingehende Verbindungen dabei scheitern, ist ein Nebeneffekt, kein
  Schutzkonzept. Die Firewall macht die Sicherheit.
- **OSI-Schichten verzaehlt.** Sieben Schichten, und die Nummerierung laeuft von
  unten (1 = Bitübertragung) nach oben (7 = Anwendung). Wer von oben zaehlt,
  vertauscht alles.
- **WPA2 und WPA3 als gleichwertig behandelt.** WPA2-Personal ist gegen
  Offline-Woerterbuchangriffe auf den Handshake angreifbar; WPA3 schliesst das
  mit SAE. In Sicherheitsaufgaben zaehlt der Unterschied.

---

## Material

<!-- GENERIERT:material — nicht von Hand aendern, wird ueberschrieben -->

Diese Dateien darf ein Chat fuer dieses Lernfeld heranziehen:

- `material/zusammenfassungen/gesamt-kmk-rahmenlehrplan.md`
- `material/zusammenfassungen/gesamt-lernkatalog-ap1.md`
- `material/zusammenfassungen/gesamt-lernzettel-ap1-2024.md`
- `material/zusammenfassungen/gesamt-pruefungsvorbereitung-technik.md`
- `material/zusammenfassungen/netzwerke-subnetting-meisterklasse.md`

<!-- /GENERIERT:material -->

---

## Kapitelbestand

<!-- GENERIERT:kapitel — nicht von Hand aendern, wird ueberschrieben -->

**11 von 11 Kapiteln** stehen auf `ready` oder `final`.

Spalte "Offen fuer ready" listet die Pflichtbausteine, die der Content-Validator
noch vermisst. Leer beziehungsweise "—" heisst: Kapitel erfuellt den Ready-Standard
mechanisch. Das ersetzt keine fachliche Pruefung.

### Modul: Modelle & Protokolle  `grundlagen-netz`

| Kapitel | Slug | AP1 | Wicht. | Status | Offen fuer ready |
|---|---|:--:|:--:|---|---|
| OSI-Modell – sieben Schichten | `osi-modell` | ja | 5 | `ready` | Schritte, Fehler |
| TCP vs. UDP | `tcp-udp` | ja | 5 | `ready` | — |
| E-Mail-Protokolle (IMAP, POP3, SMTP) | `imap-pop3-smtp` | ja | 5 | `ready` | Terme, Schritte, Fehler |

### Modul: IPv4 & Subnetting  `adressierung`

| Kapitel | Slug | AP1 | Wicht. | Status | Offen fuer ready |
|---|---|:--:|:--:|---|---|
| IPv4 & Subnetting | `ipv4-subnetting` | ja | 5 | `ready` | — |
| Netzwerkkonfiguration, DHCP, DNS & Diagnose | `netzwerkkonfiguration` | ja | 5 | `ready` | — |

### Modul: IPv6  `ipv6`

| Kapitel | Slug | AP1 | Wicht. | Status | Offen fuer ready |
|---|---|:--:|:--:|---|---|
| IPv6 – Aufbau & Adressierung | `ipv6-grundlagen` | ja | 5 | `ready` | Terme, Schritte, Fehler |

### Modul: Netzwerksicherheit  `netz-sicherheit`

| Kapitel | Slug | AP1 | Wicht. | Status | Offen fuer ready |
|---|---|:--:|:--:|---|---|
| Firewall und DMZ | `firewall-dmz` | ja | 5 | `ready` | — |
| Port Forwarding und NAT | `port-forwarding` | ja | 4 | `ready` | — |
| WLAN-Standards und WLAN-Sicherheit | `wlan-standards` | ja | 4 | `ready` | — |

### Modul: Rechenaufgaben  `rechnen-netz`

| Kapitel | Slug | AP1 | Wicht. | Status | Offen fuer ready |
|---|---|:--:|:--:|---|---|
| Datenrate & Downloadzeit berechnen | `datenrate-berechnung` | ja | 5 | `ready` | — |
| Datenmengen, Scan & Übertragung — komplett rechnen | `datenvolumen-berechnung` | ja | 5 | `ready` | — |

<!-- /GENERIERT:kapitel -->

---

## Reihenfolge und Voraussetzungen

Die Kapitelliste oben ist nach Modulen sortiert, nicht nach Lernreihenfolge.
Das hier ist die Lernreihenfolge — und sie fuehrt aus einem anderen Lernfeld
hierher.

**Stufe 0 — Fundament, liegt in `grundlagen`:**

`bit-byte` → `prefixe` → `zahlensysteme`

Ohne diese drei ist Subnetting nicht rechenbar und jede Datenratenaufgabe wird
zum Ratespiel. Wer bei `ipv4-subnetting` einsteigt und Binaer nicht sicher
beherrscht, scheitert nicht am Subnetting, sondern an der Umrechnung.

**Stufe 1 — Modelle verstehen, bevor es konkret wird:**

`osi-modell` → `tcp-udp`

Das OSI-Modell ist die Landkarte. Ohne sie ist unklar, warum eine
MAC-Adresse etwas anderes ist als eine IP-Adresse, und warum ein Switch anders
arbeitet als ein Router.

**Stufe 2 — Adressierung, das Herzstueck:**

`ipv4-subnetting` → `netzwerkkonfiguration` → `ipv6-grundlagen`

`ipv4-subnetting` setzt Stufe 0 und 1 voraus. `netzwerkkonfiguration` (DHCP,
DNS, Diagnose) setzt Subnetting voraus, weil die Diagnoseschritte auf dem
Verstaendnis von Netz- und Hostanteil beruhen. `ipv6-grundlagen` kommt bewusst
danach: Es ist leichter zu verstehen, wenn man weiss, welche IPv4-Probleme es
loest.

**Stufe 3 — Anwendung und Absicherung:**

`port-forwarding` → `firewall-dmz` → `wlan-standards` → `imap-pop3-smtp`

`port-forwarding` braucht Adressierung und Ports. `firewall-dmz` braucht
Port-Forwarding, weil DMZ-Konzepte auf Portweiterleitung und Segmentierung
aufbauen.

**Querlaeufer — jederzeit, sobald Stufe 0 sitzt:**

`datenrate-berechnung` und `datenvolumen-berechnung` haengen nicht an der
Netzwerk-Kette, sondern nur an `bit-byte` und `prefixe`. Sie eignen sich als
frueher Einstieg, weil sie schnelle Erfolgserlebnisse liefern.

---

## Offene Punkte

- **Vier `ready`-Kapitel erfuellen den Ready-Standard nicht.** Laut Tabelle oben
  fehlen `osi-modell` (Schritte, Fehler), `imap-pop3-smtp` (Terme, Schritte,
  Fehler), `ipv6-grundlagen` (Terme, Schritte, Fehler) und
  `datenvolumen-berechnung` (Ziele, Fehler) Pflichtbausteine. Entweder
  nachbessern oder ehrlich auf `draft` zuruecksetzen.
- **Aufgabentypen-Tabelle ist leer.** Blockiert durch fehlendes Material unter
  `material/pruefungen/`.
- **`datenrate-berechnung` und `datenvolumen-berechnung` ueberschneiden sich
  moeglicherweise.** Beide rechnen Datenmengen und Uebertragungszeiten,
  zusammen 1239 Zeilen. Pruefen, ob das zwei Kapitel sein sollten oder eines.
- **Alle Inhalte dieses Lernfelds sind KI-generiert und ungeprueft.** Kein
  Kapitel hat bisher das Review-Gate durchlaufen (`REVIEW_LOG.md` enthaelt
  ausschliesslich `zahlensysteme`). Die Quellenangaben in den Kapiteln sind
  ebenfalls generiert und muessen gegengeprueft werden — dafuer gibt es
  `node scripts/check-links.mjs`.
