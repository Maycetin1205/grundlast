import type { GlossarEintrag } from "../../lib/glossar/types"

export const sicherheit: GlossarEintrag[] = [
  {
      id: 'dsgvo',
      begriff: 'DSGVO',
      kurzdefinition: 'Die DSGVO regelt den Umgang mit personenbezogenen Daten in der EU.',
      definition: [
        'Die Datenschutz-Grundverordnung legt Grundsaetze, Rechte und Pflichten für die Verarbeitung personenbezogener Daten fest.',
        'Für IT-Aufgaben ist besonders wichtig, Datenminimierung, Zweckbindung, Sicherheit und Betroffenenrechte unterscheiden zu können.',
      ],
      kapitel: {
        titel: 'DSGVO - die sieben Grundsaetze',
        href: '/lernen/sicherheit/dsgvo-krypto/dsgvo-basics',
      },
    },
  {
      id: 'mtbf',
      begriff: 'MTBF',
      kurzdefinition: 'MTBF beschreibt die mittlere Zeit zwischen zwei Ausfaellen reparierbarer Systeme.',
      definition: [
        'MTBF steht für Mean Time Between Failures. Der Wert wird für reparierbare Systeme verwendet und beschreibt den durchschnittlichen Zeitraum zwischen Ausfaellen.',
        'Er ist ein Zuverlaessigkeitswert, aber keine Garantie für die Laufzeit eines einzelnen konkreten Geräts.',
      ],
      kapitel: {
        titel: 'MTBF & MTTF - Ausfallwahrscheinlichkeit',
        href: '/lernen/sicherheit/betrieb-sicherheit/mtbf-mttf',
      },
    },
  {
      id: 'mttf',
      begriff: 'MTTF',
      kurzdefinition: 'MTTF beschreibt die mittlere Zeit bis zum Ausfall nicht reparierbarer Systeme.',
      definition: [
        'MTTF steht für Mean Time To Failure. Der Wert wird für Komponenten genutzt, die nach einem Ausfall nicht repariert, sondern ersetzt werden.',
        'In Aufgaben musst du MTBF und MTTF anhand der Reparierbarkeit sauber unterscheiden.',
      ],
      kapitel: {
        titel: 'MTBF & MTTF - Ausfallwahrscheinlichkeit',
        href: '/lernen/sicherheit/betrieb-sicherheit/mtbf-mttf',
      },
    },
  {
      id: 'schutzziel',
      begriff: 'Schutzziel',
      kurzdefinition: 'Eigenschaft, die ein System oder Daten in der IT-Sicherheit erfuellen sollen.',
      definition: [
        'Ein Schutzziel beschreibt, was geschuetzt werden soll, nicht wie. Klassisch sind Vertraulichkeit, Integritaet und Verfuegbarkeit (CIA). Authentizitaet, Nicht-Abstreitbarkeit und Verbindlichkeit erweitern den Katalog.',
        'In der Pruefung musst du Massnahmen oft einem Schutzziel zuordnen, zum Beispiel Verschluesselung der Vertraulichkeit oder Hashwert der Integritaet.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'vertraulichkeit',
      begriff: 'Vertraulichkeit',
      kurzdefinition: 'Schutzziel: nur Berechtigte können Daten lesen oder einsehen.',
      definition: [
        'Vertraulichkeit bedeutet, dass Informationen nur für befugte Personen, Prozesse oder Systeme zugaenglich sind. Verletzungen sind zum Beispiel Mitlesen im Netz, Datendiebstahl oder ungeschuetzte Bildschirmsperre.',
        'Typische Schutzmassnahmen sind Zugriffsrechte, Verschluesselung in Ruhe und auf der Leitung, Multi-Faktor-Authentifizierung sowie Schulung gegen Phishing.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'integritaet',
      begriff: 'Integritaet',
      kurzdefinition: 'Schutzziel: Daten sind unversehrt; jede Veraenderung wird erkannt.',
      definition: [
        'Integritaet bedeutet, dass Daten und Systeme korrekt, vollständig und unveraendert bleiben. Eine unbemerkte Aenderung verletzt das Schutzziel, auch wenn die Daten danach noch lesbar sind.',
        'Hashwerte, digitale Signaturen, Pruefsummen und Schreibrechte schuetzen die Integritaet. RAID schuetzt Daten vor Plattendefekten, ist aber kein Ersatz für Backup oder Versionierung.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'verfügbarkeit',
      begriff: 'Verfügbarkeit',
      kurzdefinition: 'Schutzziel: Systeme und Daten sind erreichbar, wenn sie gebraucht werden.',
      definition: [
        'Verfuegbarkeit beschreibt, dass autorisierte Nutzer einen Dienst zu einem festgelegten Zeitpunkt mit einer festgelegten Qualitaet nutzen können. Stromausfall, Hardwaredefekt, DDoS oder Ransomware können die Verfuegbarkeit kappen.',
        'Massnahmen sind Redundanz (RAID, Cluster), USV, Backup mit getestetem Restore, Lastverteilung und ein Notfall- und Wiederanlaufplan.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'authentizitaet',
      begriff: 'Authentizitaet',
      kurzdefinition: 'Schutzziel: die behauptete Identitaet einer Person oder Datenquelle ist nachweislich echt.',
      definition: [
        'Authentizitaet stellt sicher, dass ein Absender, ein System oder eine Datei tatsaechlich der oder das ist, was behauptet wird. Sie ist Voraussetzung für Vertraulichkeit und Integritaet, weil ohne echten Absender keine Zuordnung möglich ist.',
        'Digitale Signaturen, Zertifikate (PKI), starke Authentifizierung mit mehreren Faktoren und gepruefte Boot-Ketten sind typische Massnahmen.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'nichtabstreitbarkeit',
      begriff: 'Nicht-Abstreitbarkeit',
      kurzdefinition: 'Schutzziel: eine durchgefuehrte Handlung kann gegenüber Dritten zweifelsfrei nachgewiesen werden.',
      definition: [
        'Nicht-Abstreitbarkeit (auch Verbindlichkeit) verhindert, dass jemand eine Aktion glaubhaft leugnen kann. Dazu braucht es eine starke Authentifizierung des Akteurs, einen vollständigen Zeitstempel und einen revisionssicheren Nachweis.',
        'Klassische Mittel sind digitale Signaturen mit qualifiziertem Zertifikat, lueckenlose Logs auf Append-Only-Speichern und Vier-Augen-Freigaben.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'schutzbedarf',
      begriff: 'Schutzbedarf',
      kurzdefinition: 'Mass für die Folgen, die eine Verletzung eines Schutzziels für einen Prozess oder ein System hat.',
      definition: [
        'Der Schutzbedarf wird je Schutzziel bewertet und drueckt aus, wie schlimm es ist, wenn das Ziel verletzt wird. Das BSI nutzt drei Stufen: normal, hoch, sehr hoch.',
        'Aus dem Schutzbedarf ergibt sich, welche Massnahmen verhaeltnismaessig sind. Ein hoher Schutzbedarf fordert mehr und staerkere Massnahmen, ein normaler Schutzbedarf kommt in der Regel mit den Standard-Anforderungen aus dem IT-Grundschutz aus.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'schutzbedarfsfeststellung',
      begriff: 'Schutzbedarfsfeststellung',
      kurzdefinition: 'Vorgang, bei dem für jeden Geschäftsprozess oder jedes System der Schutzbedarf je Schutzziel ermittelt wird.',
      definition: [
        'Die Schutzbedarfsfeststellung beschreibt zunaechst Geschaeftsprozesse und die zugehoerigen Informationen, ordnet ihnen Anwendungen und IT-Systeme zu und bewertet anschliessend Schadensszenarien je Schutzziel auf normal, hoch oder sehr hoch.',
        'Die Bewertung folgt im IT-Grundschutz dem Maximumprinzip: ein abhaengiges System übernimmt den hoechsten Schutzbedarf der Prozesse oder Daten, die es verarbeitet.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'maximumprinzip',
      begriff: 'Maximumprinzip',
      kurzdefinition: 'BSI-Grundregel: ein System übernimmt den hoechsten Schutzbedarf der Prozesse oder Daten, die es verarbeitet.',
      definition: [
        'Das Maximumprinzip vermeidet, dass eine Schutzbedarfsbewertung kuenstlich heruntergebrochen wird. Verarbeitet ein Server mehrere Anwendungen, gilt für ihn der hoechste Schutzbedarf der beteiligten Prozesse.',
        'Davon abweichen darf man nur mit Begruendung, etwa wenn der Kumulationseffekt oder der Verteilungseffekt das Bild aendert.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'risikomatrix',
      begriff: 'Risikomatrix',
      kurzdefinition: 'Tabelle, die Eintrittswahrscheinlichkeit und Schadenshoehe gegeneinander stellt, um Risiken einzustufen.',
      definition: [
        'Eine Risikomatrix kombiniert die geschaetzte Eintrittswahrscheinlichkeit (selten, möglich, wahrscheinlich, sehr wahrscheinlich) mit der Schadenshoehe (gering, mittel, hoch, sehr hoch). Das Ergebnis ist eine Risikoklasse, oft farblich von gruen bis rot dargestellt.',
        'Sie hilft, über den Umgang mit Risiken zu entscheiden: vermeiden, vermindern, übertragen (zum Beispiel über eine Versicherung) oder bewusst akzeptieren.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'restrisiko',
      begriff: 'Restrisiko',
      kurzdefinition: 'Risiko, das nach Umsetzung der Sicherheitsmassnahmen verbleibt und vom Management formell akzeptiert wird.',
      definition: [
        'Vollstaendige Sicherheit gibt es nicht. Nach Umsetzung der angemessenen Massnahmen verbleibt ein Restrisiko, das die Geschaeftsleitung dokumentiert akzeptieren muss.',
        'Wenn das Restrisiko zu hoch ist, sind weitere Massnahmen, eine Risikoübertragung oder im Extremfall ein Verzicht auf den Geschaeftsprozess nötig.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'isms',
      begriff: 'ISMS',
      kurzdefinition: 'Information Security Management System; Regelwerk für Planung, Umsetzung, Prüfung und Verbesserung der Informationssicherheit.',
      definition: [
        'Ein ISMS ist kein Produkt, sondern ein dokumentiertes System aus Leitlinien, Rollen, Prozessen und Massnahmen. Es legt fest, wer für Informationssicherheit verantwortlich ist, wie Risiken bewertet werden und wie auf Vorfaelle reagiert wird.',
        'Internationaler Massstab für Anforderungen ist ISO/IEC 27001, in Deutschland zusaetzlich der BSI-Standard 200-1 mit der IT-Grundschutz-Methodik 200-2 und der Risikoanalyse 200-3.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'pdca-zyklus',
      begriff: 'PDCA-Zyklus',
      kurzdefinition: 'Plan-Do-Check-Act; kontinuierlicher Verbesserungszyklus, der in ISMS und Qualitaetsmanagement steckt.',
      definition: [
        'Plan: Ziele, Risiken und Massnahmen festlegen. Do: Massnahmen umsetzen und betreiben. Check: Ergebnisse messen, Audits durchfuehren, Vorfaelle auswerten. Act: Korrekturen einleiten und das System anpassen.',
        'In der Pruefung wird der PDCA-Zyklus oft als Begruendung gefordert, warum ein ISMS nie fertig ist und regelmaessig überprueft werden muss.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'bsi-grundschutz',
      begriff: 'BSI IT-Grundschutz',
      kurzdefinition: 'Vom BSI herausgegebene Methodik und Bausteinkatalog für ein angemessenes Sicherheitsniveau.',
      definition: [
        'Der IT-Grundschutz beschreibt im IT-Grundschutz-Kompendium Bausteine zu Themenbereichen wie ISMS, Organisation, Personal, Anwendungen oder Netze. Jeder Baustein enthaelt Basis-, Standard- und Anforderungen für erhoehten Schutzbedarf.',
        'Die zugehoerige Methodik steht in den BSI-Standards 200-1 (ISMS), 200-2 (Vorgehensweise) und 200-3 (Risikoanalyse). Der BSI-Standard 200-4 ergaenzt das Business Continuity Management.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'iso-27001',
      begriff: 'ISO/IEC 27001',
      kurzdefinition: 'Internationale Norm mit Anforderungen an ein ISMS, herausgegeben von ISO und IEC.',
      definition: [
        'ISO/IEC 27001 legt die Anforderungen an Aufbau, Betrieb, Ueberwachung und Verbesserung eines ISMS fest. Die aktuelle Fassung stammt aus 2022 und enthaelt im Anhang A einen Massnahmenkatalog mit organisatorischen, personellen, physischen und technischen Controls.',
        'Eine Zertifizierung nach ISO/IEC 27001 weist gegenüber Kunden und Aufsichtsbehoerden nach, dass die Organisation Informationssicherheit systematisch managt. Der BSI IT-Grundschutz ist dazu kompatibel und kann als Pfad zur Zertifizierung genutzt werden.',
      ],
      kapitel: {
        titel: 'Schutzziele, Schutzbedarf, ISMS & BSI-Grundschutz',
        href: '/lernen/sicherheit/betrieb-sicherheit/schutzziele',
      },
    },
  {
      id: 'verschluesselung',
      begriff: 'Verschluesselung',
      kurzdefinition: 'Verschluesselung macht Klartext mit einem Schlüssel zu Chiffretext und ist mit passendem Schlüssel umkehrbar.',
      definition: [
        'Verschluesselung schuetzt Vertraulichkeit: Unbefugte sollen den Inhalt nicht lesen können, auch wenn sie die Daten abfangen oder einen Datentraeger entwenden.',
        'Sie ist etwas anderes als Hashing und Signieren. Verschluesselung ist umkehrbar, Hashing ist eine Einwegfunktion, und Signaturen beweisen Echtheit und Unveraendertheit.',
      ],
      kapitel: {
        titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'symmetrische-verschluesselung',
      begriff: 'Symmetrische Verschluesselung',
      kurzdefinition: 'Ein gemeinsamer geheimer Schlüssel wird für Verschluesselung und Entschluesselung genutzt.',
      definition: [
        'Symmetrische Verfahren wie AES sind schnell und deshalb für große Datenmengen geeignet, etwa Festplatten, Backups oder die Nutzdaten einer TLS-Verbindung.',
        'Das zentrale Problem ist die sichere Schluesselverteilung: Beide Parteien brauchen dasselbe Geheimnis, ohne dass es unterwegs abgefangen wird.',
      ],
      kapitel: {
        titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'asymmetrische-verschluesselung',
      begriff: 'Asymmetrische Verschluesselung',
      kurzdefinition: 'Public Key und Private Key bilden ein Schlüsselpaar mit getrennten Rollen.',
      definition: [
        'Der Public Key darf verteilt werden, der Private Key bleibt geheim. Was für einen Empfaenger mit dessen Public Key verschluesselt wird, kann nur mit dem passenden Private Key entschluesselt werden.',
        'Asymmetrische Verfahren sind rechenintensiver als symmetrische Verfahren. In der Praxis werden sie daher oft für Schluesselaustausch, Zertifikate und Signaturen eingesetzt.',
      ],
      kapitel: {
        titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'hybrides-verfahren',
      begriff: 'Hybrides Verfahren',
      kurzdefinition: 'Kombiniert asymmetrische Kryptographie für den Start mit symmetrischer Kryptographie für Nutzdaten.',
      definition: [
        'Hybride Verfahren loesen den Zielkonflikt: Asymmetrisch hilft beim sicheren Start und bei der Authentizitaet, symmetrisch ist schnell für die laufende Datenübertragung.',
        'TLS ist das typische AP1-Beispiel: Zertifikat pruefen, Schluessel aushandeln, danach Nutzdaten mit Sitzungsschluesseln schuetzen.',
      ],
      kapitel: {
        titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'hashfunktion',
      begriff: 'Hashfunktion',
      kurzdefinition: 'Einwegfunktion, die aus Daten einen Fingerabdruck fester Laenge bildet.',
      definition: [
        'Eine kryptografische Hashfunktion soll aus gleicher Eingabe denselben Hash erzeugen, kleine Aenderungen sichtbar machen und keine praktikable Rueckrechnung auf die Eingabe erlauben.',
        'Hashwerte schuetzen Integritaet, nicht Vertraulichkeit. Eine gehashte Datei ist nicht geheim; sie kann nur auf Veraenderung geprueft werden.',
      ],
      kapitel: {
        titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'passwort-hash',
      begriff: 'Passwort-Hash',
      kurzdefinition: 'Speicherform für Passwoerter mit Salt und langsamem, spezialisierten Hashverfahren.',
      definition: [
        'Bei der Registrierung wird nicht das Passwort gespeichert, sondern ein Ergebnis aus Passwort, Salt und einem Passwort-Hashverfahren wie Argon2id, bcrypt oder scrypt.',
        'Beim Login wird der Hash aus der Eingabe neu berechnet und verglichen. Dadurch muss das System das Klartextpasswort nach der Eingabe nicht dauerhaft kennen.',
      ],
      kapitel: {
        titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'salt',
      begriff: 'Salt',
      kurzdefinition: 'Zufaelliger Zusatz pro Nutzer oder Datensatz, der Hashwerte eindeutig macht.',
      definition: [
        'Ein Salt wird zusammen mit dem Passwort gehasht und meist offen neben dem Hash gespeichert. Er muss nicht geheim sein.',
        'Der Nutzen liegt darin, dass gleiche Passwoerter unterschiedliche Hashes erhalten und vorgefertigte Rainbow Tables unbrauchbar werden.',
      ],
      kapitel: {
        titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'pepper',
      begriff: 'Pepper',
      kurzdefinition: 'Zusaetzliches Geheimnis außerhalb der Passwortdatenbank.',
      definition: [
        'Ein Pepper fliesst in die Passwort-Hash-Berechnung ein, wird aber nicht in derselben Datenbank gespeichert wie Hash und Salt.',
        'Er hilft zusaetzlich bei einem reinen Datenbank-Leak, ersetzt aber weder individuelle Salts noch ein langsames Passwort-Hashverfahren.',
      ],
      kapitel: {
        titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'digitale-signatur',
      begriff: 'Digitale Signatur',
      kurzdefinition: 'Kryptografischer Nachweis für Integritaet und Herkunft von Daten.',
      definition: [
        'Bei einer digitalen Signatur wird typischerweise ein Hash der Daten mit dem Private Key des Signierenden signiert. Empfaenger pruefen die Signatur mit dem Public Key.',
        'Sie macht Daten nicht geheim. Sie zeigt, ob die Daten veraendert wurden und ob die Signatur zum passenden Schluesselpaar gehört.',
      ],
      kapitel: {
        titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'zertifikat',
      begriff: 'Zertifikat',
      kurzdefinition: 'Digitaler Ausweis, der eine Identitaet mit einem Public Key verbindet.',
      definition: [
        'Ein X.509-Zertifikat enthaelt unter anderem Subjekt, Public Key, Aussteller, Gueltigkeitszeitraum und erlaubte Verwendungen. Es wird von einer CA signiert.',
        'In TLS bestaetigt das Serverzertifikat, dass der Public Key zur aufgerufenen Domain gehört. Der Browser prueft Name, Gueltigkeit, Kette und Widerruf.',
      ],
      kapitel: {
        titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'certificate-authority',
      begriff: 'Certificate Authority',
      kurzdefinition: 'Vertrauenswuerdige Zertifizierungsstelle, die Zertifikate ausstellt und signiert.',
      definition: [
        'Eine CA prueft je nach Zertifikatstyp bestimmte Angaben und bestaetigt anschliessend per Signatur, dass ein Public Key zu einer Identitaet gehört.',
        'Root-CAs sind als Vertrauensanker im Betriebssystem oder Browser hinterlegt. Intermediate-CAs stehen meist zwischen Root-CA und Endzertifikat.',
      ],
      kapitel: {
        titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'pki',
      begriff: 'Public Key Infrastructure',
      kurzdefinition: 'Gesamtsystem aus CAs, Zertifikaten, Schlüsseln, Widerruf und Regeln zur Vertrauenspruefung.',
      definition: [
        'Eine PKI sorgt dafür, dass Public Keys nicht nur mathematisch existieren, sondern vertrauenswuerdig Identitaeten zugeordnet werden können.',
        'Dazu gehören Root- und Intermediate-CAs, Zertifikatsketten, CRL oder OCSP für Widerruf sowie Regeln für Ausstellung und Schluesselverwendung.',
      ],
      kapitel: {
        titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'vpn',
      begriff: 'VPN',
      kurzdefinition: 'Virtuelles privates Netzwerk, das einen geschuetzten Tunnel über ein unsicheres Netz aufbaut.',
      definition: [
        'Ein VPN schuetzt die Uebertragung zwischen definierten Endpunkten, etwa Notebook und Firmennetz oder zwei Standorten. Es bietet je nach Verfahren Vertraulichkeit, Integritaet und Authentifizierung.',
        'VPN ersetzt keine Rechtevergabe. Wer durch den Tunnel kommt, darf im Zielnetz nur das tun, was Rollen, Firewall-Regeln und Anwendungen erlauben.',
      ],
      kapitel: {
        titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'tls',
      begriff: 'TLS',
      kurzdefinition: 'Transport Layer Security schuetzt Transportverbindungen wie HTTPS.',
      definition: [
        'TLS bietet einen sicheren Kanal mit Authentifizierung, Vertraulichkeit und Integritaetsschutz. Serverauthentifizierung erfolgt typischerweise über Zertifikate.',
        'TLS arbeitet praktisch hybrid: Der Handshake prueft Identitaet und handelt Schluessel aus, die laufenden Nutzdaten werden mit symmetrischen Sitzungsschluesseln geschuetzt.',
      ],
      kapitel: {
        titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
  {
      id: 'ipsec',
      begriff: 'IPsec',
      kurzdefinition: 'Protokollfamilie zur Absicherung von IP-Verkehr auf Netzwerkschicht.',
      definition: [
        'IPsec schuetzt IP-Pakete mit Security Associations und Protokollen wie ESP und AH. Für die automatische Schluesselaushandlung wird haeufig IKEv2 eingesetzt.',
        'In AP1-Aufgaben taucht IPsec oft bei Site-to-Site-VPNs, Routerkopplung und sicheren Standortverbindungen auf.',
      ],
      kapitel: {
        titel: 'Verschluesselung, Hashing, Zertifikate, Signatur & VPN',
        href: '/lernen/sicherheit/dsgvo-krypto/verschluesselung-hash-vpn',
      },
    },
]
