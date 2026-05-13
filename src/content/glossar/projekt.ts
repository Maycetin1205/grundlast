import type { GlossarEintrag } from "../../lib/glossar/types"

export const projekt: GlossarEintrag[] = [
  {
      id: 'sla',
      begriff: 'SLA',
      kurzdefinition: 'Service Level Agreement — Vertrag über messbare Leistungsmerkmale einer IT-Dienstleistung.',
      definition: [
        'Ein SLA legt fest, welche Qualitaets- und Verfuegbarkeitszusagen ein IT-Dienstleister macht (z. B. 99,9 % Verfuegbarkeit, maximale Reaktionszeit).',
        'Es regelt auch Konsequenzen bei Nichteinhaltung (Pauschalen, Gutschriften) und dient als Grundlage für Preisbildung und Ticket-Eskalation.',
      ],
      kapitel: {
        titel: 'Serviceprozess & Support-Level',
        href: '/lernen/projekt/dokumente/serviceprozess-support',
      },
    },
  {
      id: 'bedarfsanalyse',
      begriff: 'Bedarfsanalyse',
      kurzdefinition: 'Strukturierte Erhebung dessen, was ein Kunde oder Anwender wirklich braucht, getrennt vom geaeusserten Wunsch.',
      definition: [
        'Eine Bedarfsanalyse übersetzt einen Wunsch ("wir brauchen neue Tablets") in ein Problem, eine Anforderung und schliesslich eine begruendete Loesung. Sie verhindert, dass eine konkrete Loesung gekauft wird, bevor das eigentliche Problem verstanden ist.',
        'Im Kern besteht sie aus sechs Schritten: Ausgangslage klaeren, Ziele formulieren, Anforderungen sammeln, Daten erheben, bewerten und priorisieren, Massnahmen ableiten. Pruefungsrelevant: Methodenwahl (Interview, Fragebogen, Beobachtung) und die Trennung quantitativ/qualitativ.',
      ],
      kapitel: {
        titel: 'Bedarfsanalyse, Kommunikation & Feedback',
        href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
      },
    },
  {
      id: 'ist-soll-vergleich',
      begriff: 'Ist-Soll-Vergleich',
      kurzdefinition: 'Gegenüberstellung des aktuellen Zustands (Ist) und des angestrebten Zielzustands (Soll), aus der sich der Bedarf ableitet.',
      definition: [
        'Der Ist-Soll-Vergleich ist die mathematische Form der Bedarfsdefinition: Bedarf = Soll minus Ist. Beispiel: Soll-Bearbeitungszeit pro Ticket 8 Minuten, Ist 14 Minuten - Bedarf ist die Schliessung der Luecke von 6 Minuten.',
        'In Pruefungen wird der Vergleich oft mit Kennzahlen oder Tabellen abgefragt. Wichtig: Soll-Werte müssen vorher messbar definiert sein, sonst ist der Vergleich nicht belastbar. Auch im PDCA- und im Projekt-Controlling-Kontext findet sich dieselbe Logik wieder.',
      ],
      kapitel: {
        titel: 'Bedarfsanalyse, Kommunikation & Feedback',
        href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
      },
    },
  {
      id: 'sender-empfaenger',
      begriff: 'Sender-Empfaenger-Modell',
      kurzdefinition: 'Grundmodell der Kommunikation: ein Sender kodiert eine Nachricht, der Empfaenger dekodiert sie - mit möglichen Stoerungen unterwegs.',
      definition: [
        'Das Modell geht auf Shannon und Weaver (1948) zurueck und beschreibt Kommunikation als Kette: Sender, Kodierung, Kanal, Dekodierung, Empfaenger. Stoerungen können auf jeder Stufe auftreten - etwa Mehrdeutigkeit beim Kodieren, Hintergrundlaerm im Kanal oder unterschiedliche Deutung beim Empfaenger.',
        'Pruefungsrelevant: Das Modell ist die Grundlage für alle weiteren Kommunikationsmodelle (Vier-Ohren, Watzlawick). Verstehe: Eine Nachricht ist nicht das, was der Sender meint, sondern das, was beim Empfaenger ankommt.',
      ],
      kapitel: {
        titel: 'Bedarfsanalyse, Kommunikation & Feedback',
        href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
      },
    },
  {
      id: 'vier-ohren',
      begriff: 'Vier-Ohren-Modell',
      kurzdefinition: 'Modell von Friedemann Schulz von Thun: Jede Aussage hat vier Botschaften - Sachebene, Selbstoffenbarung, Beziehung, Appell.',
      definition: [
        'Schulz von Thun (1981) zeigt, dass jede Aussage gleichzeitig auf vier Ebenen wirkt: 1) Sachinhalt - die nuechterne Information, 2) Selbstoffenbarung - was der Sender über sich preisgibt, 3) Beziehung - wie er den Empfaenger sieht, 4) Appell - was er erreichen will. Jede Ebene hat einen "Schnabel" beim Sender und ein "Ohr" beim Empfaenger.',
        'Pruefungsrelevant: Die typische Aufgabe gibt eine Beispiel-Aussage und fragt nach den vier möglichen Lesarten. Beispiel: "Das System ist wieder mal langsam." Sachinhalt: Performance-Beobachtung. Selbstoffenbarung: Frust. Beziehung: "Du als IT bist verantwortlich". Appell: "Mach was dagegen".',
      ],
      kapitel: {
        titel: 'Bedarfsanalyse, Kommunikation & Feedback',
        href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
      },
    },
  {
      id: 'sbi-feedback',
      begriff: 'SBI-Feedback',
      kurzdefinition: 'Methode der gewaltfreien Rueckmeldung: Situation - Behavior - Impact, also Situation, beobachtbares Verhalten, Auswirkung.',
      definition: [
        'Das SBI-Modell (Center for Creative Leadership) strukturiert ein Feedback-Gespraech in drei Schritten: Situation - wann/wo war es konkret, Behavior - was hat die Person beobachtbar getan (kein Urteil), Impact - welche Auswirkung hatte das Verhalten auf dich, das Team oder das Ergebnis.',
        'Pruefungsrelevant: SBI ist die saubere Form, "Du-Botschaften" und Pauschalurteile zu vermeiden. Ich-Botschaft statt Schuldzuweisung. Verwandt: STAR-Methode (Situation, Task, Action, Result) wird eher für Bewerbungsgespraeche und Leistungsbewertung verwendet.',
      ],
      kapitel: {
        titel: 'Bedarfsanalyse, Kommunikation & Feedback',
        href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
      },
    },
  {
      id: 'interview',
      begriff: 'Interview (Erhebungsmethode)',
      kurzdefinition: 'Strukturiertes oder halbstrukturiertes Gespraech mit Einzelpersonen, das tiefe qualitative Einblicke in Bedarf und Ursachen liefert.',
      definition: [
        'Das Interview ist die Methode der Wahl, wenn Ursachen, Sonderfaelle oder Hintergruende erfragt werden sollen, die ein Fragebogen nicht abdeckt. Drei Formen: strukturiert (fester Fragenkatalog), halbstrukturiert (Leitfaden mit offenen Fragen), unstrukturiert (freies Gespraech).',
        'Staerken: Tiefe, Anpassbarkeit an die Antwort, Sichtbarkeit nonverbaler Hinweise. Schwaechen: Zeitaufwendig, subjektiv, nur mit wenigen Personen möglich. Pruefungsrelevant: Methodenwahl begruenden - Interview eignet sich für Key User und Fuehrungskraefte, Fragebogen eher für breite Mitarbeiterkreise.',
      ],
      kapitel: {
        titel: 'Bedarfsanalyse, Kommunikation & Feedback',
        href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
      },
    },
  {
      id: 'fragebogen',
      begriff: 'Fragebogen (Erhebungsmethode)',
      kurzdefinition: 'Standardisierte schriftliche Befragung vieler Personen mit festem Fragenkatalog - liefert quantitativ vergleichbare Ergebnisse.',
      definition: [
        'Der Fragebogen erlaubt es, viele Personen mit identischen Fragen zu befragen und ihre Antworten zu zaehlen, zu vergleichen und statistisch auszuwerten. Frageformen: geschlossen (vorgegebene Antworten), offen (Freitext), Likert-Skala (Zustimmungsgrad in 5 oder 7 Stufen).',
        'Staerken: Skaliert, vergleichbar, anonym. Schwaechen: keine Tiefe, abhaengig von Fragequalitaet, suggestive Formulierungen verzerren das Ergebnis. Pruefungsfallen: Mehrfachfragen ("Finden Sie das System schnell und benutzerfreundlich?") und suggestive Fragen ("Stimmen Sie auch zu, dass...").',
      ],
      kapitel: {
        titel: 'Bedarfsanalyse, Kommunikation & Feedback',
        href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
      },
    },
  {
      id: 'beobachtung',
      begriff: 'Beobachtung (Erhebungsmethode)',
      kurzdefinition: 'Direkte Erfassung tatsaechlicher Arbeitsablaeufe und Handlungen, oft am Arbeitsplatz - zeigt unausgesprochene Probleme.',
      definition: [
        'Die Beobachtung erfasst, was Anwender tatsaechlich tun, statt was sie sagen. Sie ist besonders wertvoll, wenn Routinen übersehen werden ("das mache ich seit Jahren so") oder wenn Anwender eigene Workarounds entwickelt haben, die kein Interview offenbart haette.',
        'Staerken: Echte Ablaeufe, blinde Flecken sichtbar machen. Schwaechen: Beobachtung kann das Verhalten veraendern (Hawthorne-Effekt), zeitaufwendig, und Datenschutz/Mitbestimmung sind zu beachten - nicht jede Beobachtung am Arbeitsplatz ist ohne Zustimmung des Betriebsrats erlaubt.',
      ],
      kapitel: {
        titel: 'Bedarfsanalyse, Kommunikation & Feedback',
        href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
      },
    },
  {
      id: 'likert-skala',
      begriff: 'Likert-Skala',
      kurzdefinition: 'Antwortformat in Fragebogen, das Zustimmungsgrade in meist fuenf oder sieben Stufen abbildet (von "stimme gar nicht zu" bis "stimme voll zu").',
      definition: [
        'Die Skala wurde 1932 von Rensis Likert eingefuehrt und ist heute Standard in Mitarbeiter-, Kunden- und Usability-Befragungen. Typisch sind Skalen mit fuenf Stufen (sehr unzufrieden - unzufrieden - neutral - zufrieden - sehr zufrieden) oder mit sieben für feinere Differenzierung.',
        'Pruefungsrelevant: Die mittlere Stufe ("neutral") ist umstritten - manche Skalen lassen sie weg, um Antwort-Tendenzen zur Mitte zu vermeiden. Auswertung erfolgt entweder als Durchschnitt (mit Vorsicht, da Ordinaldaten) oder als Verteilung pro Stufe.',
      ],
      kapitel: {
        titel: 'Bedarfsanalyse, Kommunikation & Feedback',
        href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
      },
    },
  {
      id: 'aktives-zuhoeren',
      begriff: 'Aktives Zuhoeren',
      kurzdefinition: 'Gespraechstechnik, die durch Spiegeln, Paraphrasieren und Nachfragen sicherstellt, dass eine Aussage richtig verstanden wurde.',
      definition: [
        'Aktives Zuhoeren wurde von Carl Rogers gepraegt und ist die Grundtechnik in Interview, Beratung und Konfliktgespraech. Vier Werkzeuge: Spiegeln (das Gehoerte zurueckgeben), Paraphrasieren (in eigenen Worten wiederholen), Zusammenfassen (mehrere Aussagen buendeln), Nachfragen (Verstehensluecken schliessen).',
        'Pruefungsrelevant: Aktives Zuhoeren reduziert Missverstaendnisse und ist Voraussetzung für eine saubere Bedarfsanalyse. Kombiniert mit dem Vier-Ohren-Modell schuetzt es vor reinen Sach-Interpretationen, wenn die Botschaft eigentlich eine Beziehungs- oder Appell-Schicht hat.',
      ],
      kapitel: {
        titel: 'Bedarfsanalyse, Kommunikation & Feedback',
        href: '/lernen/projekt/service-management/bedarfsanalyse-feedback',
      },
    },
  {
      id: 'mitarbeitermotivation',
      begriff: 'Mitarbeitermotivation',
      kurzdefinition: 'Gruende, aus denen Mitarbeitende Aufgaben annehmen, ausdauernd bearbeiten und Verantwortung übernehmen.',
      definition: [
        'Mitarbeitermotivation beschreibt innere und aeussere Antriebe im Arbeitskontext. Sie entsteht nicht durch Befehl, sondern wird durch Arbeitsbedingungen, Sinn, Anerkennung, Beteiligung und Entwicklung beeinflusst.',
        'Pruefungsrelevant: In IT-Projekten entscheidet Motivation mit darüber, ob neue Systeme, Prozesse oder Rollen wirklich genutzt werden.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'intrinsische-motivation',
      begriff: 'Intrinsische Motivation',
      kurzdefinition: 'Motivation aus der Aufgabe selbst, etwa Interesse, Sinn, Lernchance oder Verantwortung.',
      definition: [
        'Intrinsische Motivation entsteht, wenn eine Person die Aufgabe selbst als sinnvoll, interessant oder entwicklungsfoerderlich erlebt.',
        'Im IT-Kontext wirken zum Beispiel echte Verantwortung, Lernmöglichkeiten, gute Problembearbeitung und sichtbarer Nutzen für Anwender intrinsisch motivierend.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'extrinsische-motivation',
      begriff: 'Extrinsische Motivation',
      kurzdefinition: 'Motivation durch aeussere Folgen wie Geld, Lob, Bewertung, Status oder Sanktionen.',
      definition: [
        'Extrinsische Motivation kommt von aussen: Belohnung, Anerkennung, Bonus, Note, Zertifikat, Status oder auch Druck und Sanktion.',
        'Pruefungsrelevant: Extrinsische Anreize können Verhalten anstossen, ersetzen aber nicht automatisch Sinn, Beteiligung, Kompetenz und gute Arbeitsbedingungen.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'zweifaktorentheorie',
      begriff: 'Zwei-Faktoren-Theorie',
      kurzdefinition: 'Motivationstheorie nach Herzberg: Hygienefaktoren verhindern Unzufriedenheit, Motivatoren foerdern Zufriedenheit.',
      definition: [
        'Die Zwei-Faktoren-Theorie trennt zwischen Hygienefaktoren wie Bezahlung, Arbeitsplatzsicherheit, Fuehrung und Arbeitsbedingungen sowie Motivatoren wie Anerkennung, Erfolg, Verantwortung und Weiterentwicklung.',
        'Typische AP1-Falle: Ein Hygienefaktor kann Frust senken, ist aber nicht automatisch ein Motivator. Für Akzeptanz im Change braucht man oft beides.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'hygienefaktoren',
      begriff: 'Hygienefaktoren',
      kurzdefinition: 'Arbeitsbedingungen, deren Fehlen Unzufriedenheit erzeugt, zum Beispiel Bezahlung, Ausstattung und klare Regeln.',
      definition: [
        'Hygienefaktoren sind Grundbedingungen der Arbeit. Wenn sie schlecht sind, entsteht Unzufriedenheit; wenn sie gut sind, verhindern sie vor allem Frust.',
        'Im IT-Projekt gehören dazu vernuenftige Tools, Zeit für Schulung, klare Rollen, erreichbarer Support und faire Information.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'motivatoren',
      begriff: 'Motivatoren',
      kurzdefinition: 'Faktoren, die Zufriedenheit und Engagement foerdern, etwa Anerkennung, Erfolg, Verantwortung und Entwicklung.',
      definition: [
        'Motivatoren erzeugen positive Arbeitszufriedenheit, weil sie den Inhalt der Arbeit aufwerten: Leistung wird sichtbar, Verantwortung wird übertragen, Entwicklung ist möglich.',
        'Bei IT-Changes sind Motivatoren zum Beispiel Key-User-Verantwortung, sichtbare Quick Wins, Anerkennung für gute Rueckmeldungen und echte Mitsprache.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'teamphasen',
      begriff: 'Teamphasen',
      kurzdefinition: 'Entwicklungsstufen eines Teams: Forming, Storming, Norming, Performing und Adjourning.',
      definition: [
        'Teamphasen beschreiben, wie Gruppen sich typischerweise entwickeln: Orientierung, Konflikt, Regelbildung, Leistung und Abschluss.',
        'In Pruefungsaufgaben erkennst du die Phase an Symptomen: Unsicherheit, Konflikte, stabile Regeln, eigenstaendige Leistung oder Projektabschluss.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'forming',
      begriff: 'Forming',
      kurzdefinition: 'Orientierungsphase eines Teams mit Unsicherheit, Hoeflichkeit und vielen Fragen.',
      definition: [
        'In der Forming-Phase lernen sich Teammitglieder, Ziele, Rollen und Arbeitsweise kennen. Die Gruppe orientiert sich stark an der Leitung.',
        'Gute Massnahmen sind Zielklaerung, Rollenklaerung, Kommunikationsregeln und ein gemeinsames Verstaendnis des Auftrags.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'storming',
      begriff: 'Storming',
      kurzdefinition: 'Konfliktphase eines Teams, in der Rollen, Einfluss und Vorgehen ausgehandelt werden.',
      definition: [
        'Storming zeigt sich durch Reibung, Widerstand, Machtfragen und Diskussionen über Vorgehen oder Verantwortung.',
        'Die Phase ist nicht automatisch ein Scheitern. Wichtig sind Moderation, transparente Entscheidungen und belastbare Regeln.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'norming',
      begriff: 'Norming',
      kurzdefinition: 'Regelbildungsphase, in der ein Team Arbeitsweisen, Rollen und Umgangsformen stabilisiert.',
      definition: [
        'Im Norming werden Regeln akzeptiert, Absprachen belastbarer und Zusammenarbeit planbarer.',
        'Pruefungsstarke Massnahmen sind Standards dokumentieren, Verantwortung verteilen, Retrospektiven nutzen und gemeinsame Qualitaetskriterien festlegen.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'performing',
      begriff: 'Performing',
      kurzdefinition: 'Leistungsphase, in der ein Team eigenstaendig und wirksam arbeitet.',
      definition: [
        'In der Performing-Phase sind Rollen und Regeln so stabil, dass das Team eigenstaendig Probleme loest und Ergebnisse liefert.',
        'Fuehrung bedeutet hier eher Hindernisse entfernen, Autonomie geben, Ergebnisse messen und Weiterentwicklung ermöglichen.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'adjourning',
      begriff: 'Adjourning',
      kurzdefinition: 'Abschlussphase eines Teams oder Projekts mit Übergabe, Rueckblick und Aufloesung.',
      definition: [
        'Adjourning beschreibt den Abschluss: Ergebnisse übergeben, Wissen sichern, Lessons Learned dokumentieren und Leistung anerkennen.',
        'In IT-Projekten ist diese Phase wichtig, damit Betrieb, Support und Dokumentation nicht nach Projektende abbrechen.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'change-management',
      begriff: 'Change Management',
      kurzdefinition: 'Geplante Gestaltung organisatorischer Veraenderungen von der Begruendung bis zur Stabilisierung.',
      definition: [
        'Change Management sorgt dafür, dass Veraenderungen nicht nur technisch umgesetzt, sondern von Menschen verstanden, gelernt und dauerhaft genutzt werden.',
        'Typische Bausteine sind Zielbild, Stakeholderanalyse, Kommunikation, Beteiligung, Schulung, Pilot, Quick Wins, Erfolgsmessung und Stabilisierung.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'stakeholderanalyse',
      begriff: 'Stakeholderanalyse',
      kurzdefinition: 'Analyse, welche Personen oder Gruppen von einer Aenderung betroffen sind oder Einfluss darauf haben.',
      definition: [
        'Die Stakeholderanalyse klaert Betroffenheit, Einfluss, Interessen und mögliche Risiken. Daraus werden Kommunikations- und Beteiligungsmassnahmen abgeleitet.',
        'Im IT-Change gehören neben Anwendern oft IT, Fachbereich, Leitung, Datenschutz, Informationssicherheit und Betriebsrat zu den Stakeholdern.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'change-widerstand',
      begriff: 'Change-Widerstand',
      kurzdefinition: 'Skepsis oder Ablehnung gegen Veraenderung, oft als Hinweis auf Risiken, Angst oder fehlende Beteiligung.',
      definition: [
        'Change-Widerstand ist nicht nur Stoerung, sondern auch Information. Er kann auf unklare Ziele, schlechte Erfahrungen, Ueberlastung, Kompetenzangst oder echte fachliche Probleme hinweisen.',
        'Pruefungsrelevant ist eine sachliche Reaktion: Ursache benennen, Betroffene beteiligen, Schulung anbieten und den Nutzen konkret machen.',
      ],
      kapitel: {
        titel: 'Mitarbeitermotivation, Teamphasen und Change',
        href: '/lernen/projekt/service-management/mitarbeitermotivation-teamphasen-change',
      },
    },
  {
      id: 'key-user',
      begriff: 'Key User',
      kurzdefinition: 'Praxisnahe Schlüsselanwender, die frueh testen, Feedback geben und andere bei der Einfuehrung unterstützen.',
      definition: [
        'Key User verbinden Fachbereich und Projektteam. Sie kennen den Arbeitsalltag, testen neue Loesungen frueh und können typische Fragen aus der Praxis beantworten.',
        'Bei IT-Einfuehrungen sind Key User wichtige Multiplikatoren, ersetzen aber keine strukturierte Schulung und keinen Supportprozess.',
      ],
      kapitel: {
        titel: 'Schulung, Einweisung, Key User und Multiplikatoren',
        href: '/lernen/projekt/service-management/schulung-einweisung-key-user',
      },
    },
  {
      id: 'schulung',
      begriff: 'Schulung',
      kurzdefinition: 'Geplante Lernmassnahme zum Aufbau von Wissen, Faehigkeiten oder Sicherheit für eine Aufgabe.',
      definition: [
        'Eine Schulung vermittelt Wissen und Uebung für eine Rolle, ein System oder einen Prozess. Sie hat Zielgruppe, Lernziele, Inhalte, Methode und idealerweise eine Erfolgskontrolle.',
        'In IT-Einfuehrungen reicht eine reine Information meist nicht aus. Anwender müssen typische Faelle ueben, Fragen stellen können und nach dem Start Unterstuetzung bekommen.',
      ],
      kapitel: {
        titel: 'Schulung, Einweisung, Key User und Multiplikatoren',
        href: '/lernen/projekt/service-management/schulung-einweisung-key-user',
      },
    },
  {
      id: 'einweisung',
      begriff: 'Einweisung',
      kurzdefinition: 'Konkrete Anleitung zur Nutzung eines Arbeitsplatzes, Geräts, Systems oder Ablaufs.',
      definition: [
        'Eine Einweisung ist enger als eine Schulung. Sie zeigt direkt, wie eine konkrete Bedienhandlung oder ein konkreter Ablauf funktioniert.',
        'Typisch sind kurze Termine am Arbeitsplatz, zum Beispiel MFA-App koppeln, neues Multifunktionsgeraet bedienen oder ein Standardformular im Ticketsystem ausfuellen.',
      ],
      kapitel: {
        titel: 'Schulung, Einweisung, Key User und Multiplikatoren',
        href: '/lernen/projekt/service-management/schulung-einweisung-key-user',
      },
    },
  {
      id: 'schulungsbedarf',
      begriff: 'Schulungsbedarf',
      kurzdefinition: 'Luecke zwischen benötigten und vorhandenen Kompetenzen einer Zielgruppe.',
      definition: [
        'Schulungsbedarf entsteht, wenn Personen für einen Soll-Prozess, ein neues System oder eine neue Rolle noch nicht ausreichend vorbereitet sind.',
        'Pruefungsrelevant ist die Ableitung: Zielgruppe trennen, Soll-Kompetenz bestimmen, Vorwissen pruefen und passende Lernform mit Erfolgskontrolle planen.',
      ],
      kapitel: {
        titel: 'Schulung, Einweisung, Key User und Multiplikatoren',
        href: '/lernen/projekt/service-management/schulung-einweisung-key-user',
      },
    },
  {
      id: 'multiplikator',
      begriff: 'Multiplikator',
      kurzdefinition: 'Person, die vorbereitetes Wissen im eigenen Bereich weitergibt und erste Fragen auffaengt.',
      definition: [
        'Multiplikatoren tragen Wissen in Teams, Schichten, Standorte oder Fachbereiche. Sie sind nah an der Praxis und wirken deshalb oft glaubwuerdiger als eine anonyme Rundmail.',
        'Sie brauchen klare Materialien, Zeit und Rueckkanal zum Projektteam. Ohne diese Basis verbreiten sie leicht unterschiedliche oder unvollständige Informationen.',
      ],
      kapitel: {
        titel: 'Schulung, Einweisung, Key User und Multiplikatoren',
        href: '/lernen/projekt/service-management/schulung-einweisung-key-user',
      },
    },
  {
      id: 'train-the-trainer',
      begriff: 'Train-the-Trainer',
      kurzdefinition: 'Vorgehen, bei dem Trainer oder Key User vorbereitet werden, um andere einheitlich zu schulen.',
      definition: [
        'Train-the-Trainer eignet sich, wenn viele Personen, Standorte oder Schichten geschult werden müssen. Zuerst werden Trainer oder Key User intensiv vorbereitet.',
        'Wichtig sind einheitliche Unterlagen, Uebungsfaelle, klare Grenzen der Rolle und ein Rueckkanal für Fragen, die nicht lokal geloest werden können.',
      ],
      kapitel: {
        titel: 'Schulung, Einweisung, Key User und Multiplikatoren',
        href: '/lernen/projekt/service-management/schulung-einweisung-key-user',
      },
    },
  {
      id: 'schulungsnachweis',
      begriff: 'Schulungsnachweis',
      kurzdefinition: 'Dokumentation einer Schulung mit Datum, Teilnehmenden, Inhalten und offenen Punkten.',
      definition: [
        'Ein Schulungsnachweis macht nachvollziehbar, wer zu welchen Inhalten geschult wurde. Typisch sind Datum, Trainer, Teilnehmende, Thema, Material und offene Fragen.',
        'Im IT-Betrieb hilft der Nachweis bei Qualitaetssicherung, Audit, Datenschutz- oder Sicherheitsunterweisungen und gezielter Nachschulung.',
      ],
      kapitel: {
        titel: 'Schulung, Einweisung, Key User und Multiplikatoren',
        href: '/lernen/projekt/service-management/schulung-einweisung-key-user',
      },
    },
]
