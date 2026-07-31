from __future__ import annotations

import json
import re
import zipfile
from collections import Counter, defaultdict
from dataclasses import dataclass
from pathlib import Path
from xml.etree import ElementTree as ET

import pdfplumber


ROOT = Path(__file__).resolve().parents[1]
PDF_ROOT = ROOT.parent / "Neuer Ordner"
OCR_TEXT_ROOT = ROOT / "_material_index" / "ocr_text"
OUT_ROOT = ROOT / "_material_index"
EXTRACTION_ROOT = OUT_ROOT / "extraktion"

EXAMS = {
    "p4": {"name": "Prüfung_4", "pdf": "Prüfung_4.pdf", "lsg": "p4_lsg", "lsg_pdf": "Prüfung_4_LSG.pdf", "docx": "Prüfung_4_LSG_Kurzform.docx"},
    "p5": {"name": "Prüfung_5", "pdf": "Prüfung_5.pdf", "lsg": "p5_lsg", "lsg_pdf": "Prüfung_5_LSG.pdf"},
    "p7": {"name": "Prüfung_7", "pdf": "Prüfung_7.pdf", "lsg": "p7_lsg", "lsg_pdf": "Prüfung_7_LSG.pdf"},
    "p9": {"name": "Prüfung_9", "pdf": "Prüfung_9.pdf", "lsg": "p9_lsg", "lsg_pdf": "Prüfung_9_LSG.pdf"},
    "ppr5": {"name": "Probeprüfung_Nr.5", "pdf": "Probeprüfung_Nr.5.pdf"},
}

LESSON_KEYWORDS = [
    ("ipv4-subnetting", ["subnetz", "cidr", "netzadresse", "broadcast", "hostbereich", "subnet"]),
    ("netzwerkkonfiguration", ["ipconfig", "ping", "gateway", "dns", "dhcp", "netzwerkkonfiguration", "client", "netzwerk"]),
    ("wlan-standards", ["wlan", "wi-fi", "ssid", "access point", "wpa", "funk"]),
    ("tcp-udp", ["tcp", "udp", "port", "protokoll"]),
    ("osi-modell", ["osi", "schichtenmodell", "tcp/ip"]),
    ("ipv6-grundlagen", ["ipv6"]),
    ("port-forwarding", ["nat", "port forwarding", "portweiterleitung"]),
    ("datenrate-berechnung", ["datenrate", "übertragung", "download", "mbit", "bandbreite"]),
    ("datenvolumen-berechnung", ["datenvolumen", "speicherbedarf", "bild", "scan", "auflösung"]),
    ("scan-bilddaten", ["scan", "dpi", "farbtiefe", "bilddaten"]),
    ("bit-byte", ["bit", "byte"]),
    ("prefixe", ["kibi", "mebi", "gibi", "präfix", "prefix", "mib", "gib"]),
    ("zahlensysteme", ["binär", "hex", "dual", "dezimal", "oktal"]),
    ("cpu-ram-speicher", ["cpu", "prozessor", "ram", "arbeitsspeicher", "ssd", "festplatte", "hardware"]),
    ("hardware-schnittstellen", ["usb", "hdmi", "displayport", "schnittstelle", "drucker", "monitor"]),
    ("homeoffice-ergonomie", ["ergonomie", "bildschirmarbeitsplatz", "homeoffice", "arbeitsplatz"]),
    ("energiekosten", ["energie", "kwh", "watt", "stromkosten", "leistungsaufnahme"]),
    ("angebotsvergleich", ["angebot", "rabatt", "skonto", "bezugspreis", "nutzwert"]),
    ("kauf-leasing-miete", ["leasing", "miete", "kauf"]),
    ("gewaehrleistung", ["gewährleistung", "garantie", "mangel", "sachmangel"]),
    ("vertragsstoerungen", ["lieferverzug", "zahlungsverzug", "vertragsstörung"]),
    ("lizenzmodelle", ["lizenz", "open source", "proprietär", "saas"]),
    ("dateisysteme", ["dateisystem", "fat32", "ntfs", "ext4"]),
    ("schutzziele", ["vertraulichkeit", "integrität", "verfügbarkeit", "schutzziel"]),
    ("dsgvo-basics", ["dsgvo", "datenschutz", "personenbezogene", "einwilligung"]),
    ("backup-strategien", ["backup", "sicherung", "restore", "inkrementell", "differenziell"]),
    ("firewall-dmz", ["firewall", "dmz", "paketfilter"]),
    ("malware-grundlagen", ["malware", "virus", "trojaner", "phishing", "ransomware"]),
    ("passwoerter-hashing", ["passwort", "hash", "salt", "mfa"]),
    ("verschluesselung-hash-vpn", ["verschlüsselung", "zertifikat", "vpn", "tls"]),
    ("pki-zertifikate", ["pki", "ca", "zertifikat"]),
    ("er-grundlagen", ["er-modell", "entität", "kardinalität", "datenbank"]),
    ("normalisierung", ["normalisierung", "1nf", "2nf", "3nf"]),
    ("sql-grundlagen", ["sql", "select", "where", "join"]),
    ("pseudocode-einstieg", ["pseudocode", "algorithmus", "schleife", "verzweigung"]),
    ("uml-aktivitaet", ["aktivitätsdiagramm", "uml"]),
    ("use-case-diagramm", ["use case", "anwendungsfall"]),
    ("stamm-bewegungsdaten", ["stammdaten", "bewegungsdaten"]),
    ("fehlermanagement-stoerungsannahme", ["störung", "fehleranalyse", "ticket", "incident"]),
    ("serviceanfragen-support-level", ["serviceanfrage", "support-level", "eskalation", "sla"]),
    ("schulung-einweisung-key-user", ["schulung", "einweisung", "key user"]),
    ("aufbauorganisation", ["organigramm", "aufbauorganisation", "prokura", "vollmacht"]),
    ("bedarfsanalyse-feedback", ["bedarfsanalyse", "kundenbedarf", "nutzungsprofil", "abnahmekriterium", "randbedingung", "anforderung"]),
    ("praesentation-dokumentation", ["präsentation", "folien", "zielgruppe", "powerpoint", "quellenangabe"]),
    ("lastenheft-pflichtenheft", ["lastenheft", "pflichtenheft", "anforderungskatalog"]),
    ("vorgehensmodelle", ["projekt", "smart", "magisches dreieck", "projektmanagement", "lessons learned"]),
    ("gantt-diagramm", ["gantt", "balkenplan"]),
    ("netzplan", ["netzplan", "kritischer pfad", "vorgang"]),
    ("scrum", ["scrum", "sprint", "product owner"]),
    ("virtualisierung", ["virtualisierung", "hypervisor", "vm", "virtual machine"]),
    ("raid-systeme", ["raid", "nas", "san", "storage"]),
    ("usv-systeme", ["usv"]),
    ("zentral-dezentral", ["zentral", "dezentral", "rechenzentrum", "server"]),
]


TYPE_KEYWORDS = [
    ("Rechnung", ["berechnen", "ermitteln", "kwh", "mbit", "byte", "rabatt", "skonto", "subnetz", "punkte"]),
    ("Begriff/Erklärung", ["erläutern", "beschreiben", "nennen", "begründen", "unterscheiden"]),
    ("Zuordnung", ["ordnen", "zuordnen", "tragen sie", "tabelle"]),
    ("Multiple-Choice", ["kreuzen", "ankreuzen", "mehrfachauswahl"]),
    ("Diagramm", ["diagramm", "netzplan", "aktivitätsdiagramm", "er-modell", "organigramm"]),
    ("Fallanalyse", ["situation", "kunde", "unternehmen", "beurteilen", "empfehlen"]),
    ("Pseudocode", ["pseudocode", "algorithmus", "schleife", "variable"]),
]


@dataclass
class Task:
    exam: str
    number: str
    topic: str
    typ: str
    knowledge: str
    points: str
    lesson: str
    coverage: str
    density: str
    level: str
    source_pages: str
    solution_hint: str = ""


def read_ocr_folder(key: str) -> list[tuple[str, str]]:
    folder = OCR_TEXT_ROOT / key
    pages = []
    for path in sorted(folder.glob("*.txt")):
        text = path.read_text(encoding="utf-8", errors="replace").strip()
        pages.append((path.stem, text))
    return pages


def pdf_text_status(pdf_name: str) -> tuple[int, str]:
    path = PDF_ROOT / pdf_name
    chars = 0
    sample = ""
    try:
        with pdfplumber.open(path) as pdf:
            for page in pdf.pages[:3]:
                text = page.extract_text() or ""
                chars += len(text.strip())
                sample += "\n" + text[:400]
    except Exception as exc:
        return 0, f"pdfplumber error: {exc}"
    return chars, sample.strip()


def read_docx_text(path: Path) -> str:
    if not path.exists():
        return ""
    ns = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
    out = []
    with zipfile.ZipFile(path) as zf:
        xml = zf.read("word/document.xml")
    root = ET.fromstring(xml)
    for para in root.findall(".//w:p", ns):
        texts = [node.text or "" for node in para.findall(".//w:t", ns)]
        line = "".join(texts).strip()
        if line:
            out.append(line)
    return "\n".join(out)


def classify_level(text: str) -> str:
    low = text.lower()
    if "ga 1" in low or "ga i" in low or "ga1" in low or "ga 2" in low or "fachqualifikation" in low:
        return "AP2"
    if "handlungsschritt" in low and "25 punkte" in low:
        return "AP2"
    if "einrichten eines it-gestützten arbeitsplatzes" in low or "90 minuten" in low or "90 min" in low:
        return "AP1"
    return "AP1?"


def total_points(text: str, level: str) -> str:
    low = text.lower()
    if level == "AP2" and "vier der folgenden fünf handlungsschritte" in low and "25 punkte" in low:
        return "100 (4 von 5 Handlungsschritten à 25)"
    hits = re.findall(r"(\d{1,3})\s*(?:punkte|pkt)", text, flags=re.I)
    nums = [int(x) for x in hits if int(x) <= 200]
    if 100 in nums:
        return "100"
    if nums:
        return str(max(nums))
    return "unbekannt"


def split_task_chunks(pages: list[tuple[str, str]]) -> list[tuple[str, str, str]]:
    joined = []
    for page, text in pages:
        joined.append(f"\n\n[[{page}]]\n{text}")
    text = "".join(joined)
    pattern = re.compile(
        r"(?im)^\s*(?:(\d+(?:[.,]\d+)?)\.\s*Aufgabe\b|Aufgabe\s+(\d+(?:[.,]\d+)?)\s*:|Handlungsschritt\s+(\d+(?:[.,]\d+)?)\s*:)"
    )
    matches = list(pattern.finditer(text))
    if not matches:
        # Fallback: one chunk per page after first page.
        return [(str(i), page, t) for i, (page, t) in enumerate(pages, 1) if t.strip()]
    chunks = []
    for idx, match in enumerate(matches):
        start = match.start()
        end = matches[idx + 1].start() if idx + 1 < len(matches) else len(text)
        chunk = text[start:end].strip()
        pages_hit = ", ".join(sorted(set(re.findall(r"\[\[(seite_\d+)\]\]", chunk))))
        num = next(group for group in match.groups() if group)
        chunks.append((num.replace(",", "."), pages_hit, chunk))
    return chunks


def score_lesson(text: str) -> str:
    low = text.lower()
    scores = []
    for slug, kws in LESSON_KEYWORDS:
        score = sum(low.count(kw) for kw in kws)
        if score:
            scores.append((score, slug))
    if not scores:
        return "Lücke"
    scores.sort(reverse=True)
    return scores[0][1]


def classify_type(text: str) -> str:
    low = text.lower()
    hits = [(sum(low.count(k) for k in kws), typ) for typ, kws in TYPE_KEYWORDS]
    hits = [x for x in hits if x[0]]
    return sorted(hits, reverse=True)[0][1] if hits else "Fallanalyse"


def infer_topic(text: str, lesson: str) -> str:
    low = text.lower()
    for slug, kws in LESSON_KEYWORDS:
        if slug == lesson:
            present = [kw for kw in kws if kw in low][:4]
            if present:
                return ", ".join(present).capitalize()
    cleaned = re.sub(r"\s+", " ", text)
    return cleaned[:90] + ("..." if len(cleaned) > 90 else "")


def infer_subparts(text: str) -> str:
    labels = re.findall(r"(?im)^\s*([a-z]{1,2}\))\s+(.{8,120})", text)
    if not labels:
        labels = re.findall(r"(?im)^\s*([a-z]{1,2})\s+(.{8,120})", text)
    parts = []
    for label, title in labels[:8]:
        title = re.sub(r"\s+", " ", title).strip()
        parts.append(f"{label} {title}")
    return "; ".join(parts)


def infer_density(typ: str, level: str, lesson: str) -> str:
    if level == "AP2":
        return "AP2-Spezialtiefe"
    if typ in {"Rechnung", "Diagramm", "Pseudocode"}:
        return "D3"
    if typ in {"Fallanalyse"}:
        return "D4-D5"
    if typ == "Multiple-Choice":
        return "D2-D3"
    return "D2-D4"


def infer_coverage(lesson: str, level: str) -> str:
    if lesson == "Lücke":
        return "Lücke"
    if level == "AP2":
        return "teils"
    lesson_file = ROOT / "src" / "content" / "lessons" / f"{lesson}.mdx"
    if not lesson_file.exists():
        return "Lücke"
    size = lesson_file.stat().st_size
    return "voll" if size > 7000 else "teils"


def points_for_chunk(text: str) -> str:
    hits = re.findall(r"(\d{1,2})\s*(?:punkte|pkt)", text, flags=re.I)
    return ", ".join(hits[:3]) if hits else ""


def solution_summary(lsg_text: str, number: str) -> str:
    if not lsg_text:
        return ""
    number_pat = re.escape(number).replace("\\.", "[.,]")
    pat = re.compile(rf"(?is)(?:{number_pat}\.\s*Aufgabe|Aufgabe\s+{number_pat}|Handlungsschritt\s+{number_pat})(.{{0,900}})")
    m = pat.search(lsg_text)
    snippet = m.group(1) if m else lsg_text[:700]
    snippet = re.sub(r"\s+", " ", snippet).strip()
    return snippet[:500]


def make_task(exam: str, level: str, num: str, pages: str, chunk: str, lsg_text: str) -> Task:
    lesson = score_lesson(chunk)
    typ = classify_type(chunk)
    knowledge = infer_topic(chunk, lesson)
    subparts = infer_subparts(chunk)
    if subparts:
        knowledge = f"{knowledge}; Teilaufgaben: {subparts}"
    return Task(
        exam=exam,
        number=num,
        topic=infer_topic(chunk, lesson),
        typ=typ,
        knowledge=knowledge,
        points=points_for_chunk(chunk),
        lesson=lesson,
        coverage=infer_coverage(lesson, level),
        density=infer_density(typ, level, lesson),
        level=level,
        source_pages=pages,
        solution_hint=solution_summary(lsg_text, num),
    )


def md_escape(text: str) -> str:
    return text.replace("|", "\\|").replace("\n", " ").strip()


def build():
    EXTRACTION_ROOT.mkdir(parents=True, exist_ok=True)

    lessons = {}
    for p in (ROOT / "src" / "content" / "lessons").glob("*.mdx"):
        lessons[p.stem] = p.read_text(encoding="utf-8", errors="replace")[:1200]

    all_tasks: list[Task] = []
    level_counter = Counter()
    exam_level_counter = Counter()
    topic_counter = Counter()
    warnings = []

    docx_text = read_docx_text(PDF_ROOT / "Prüfung_4_LSG_Kurzform.docx")

    inventory_lines = ["# AP1-Materialinventar", "", "Stand: automatisch aus Neuer Ordner und _ocr_out erzeugt.", ""]
    inventory_lines.append("| Datei | OCR-Ordner | Seiten | Textlayer-Zeichen Probe | Klassifikation |")
    inventory_lines.append("|---|---:|---:|---:|---|")

    for key, meta in EXAMS.items():
        pages = read_ocr_folder(key)
        text = "\n\n".join(t for _, t in pages)
        chars, sample = pdf_text_status(meta["pdf"])
        level = classify_level(text + "\n" + sample)
        level_counter[level] += 1
        exam_level_counter[level] += 1
        points = total_points(text, level)

        lsg_text = ""
        if meta.get("lsg"):
            lsg_pages = read_ocr_folder(meta["lsg"])
            lsg_text = "\n\n".join(t for _, t in lsg_pages)
        if meta.get("docx"):
            lsg_text += "\n\n## Kurzform DOCX\n" + docx_text

        chunks = split_task_chunks(pages)
        exam_warnings = []
        if "vier der folgenden fünf handlungsschritte" in text.lower() and len(chunks) < 5:
            exam_warnings.append(
                f"Material/OCR-Auffälligkeit: Es werden fünf Handlungsschritte angekündigt, sichtbar erkannt wurden {len(chunks)} Blöcke."
            )
            warnings.append(f"{meta['name']}: fünf Handlungsschritte angekündigt, {len(chunks)} sichtbar erkannt.")
        tasks = [make_task(meta["name"], level, num, pg, chunk, lsg_text) for num, pg, chunk in chunks]
        all_tasks.extend(tasks)
        topic_counter.update(t.lesson for t in tasks)

        inventory_lines.append(f"| {meta['pdf']} | {key} | {len(pages)} | {chars} | {level} |")

        out = []
        out.append(f"# Extraktion: {meta['name']}")
        out.append("")
        out.append("## Meta")
        out.append("")
        out.append(f"- Dateiname: `{meta['pdf']}`")
        out.append(f"- Level: {level}")
        out.append(f"- Gesamtpunkte: {points}")
        out.append(f"- Anzahl erkannter Aufgaben/Blöcke: {len(tasks)}")
        out.append(f"- PDF-Textlayer-Prüfung: {chars} Zeichen in den ersten Seiten; genutzt wurde {'Textlayer' if chars > 500 else 'Windows-OCR aus PNGs'}.")
        for warning in exam_warnings:
            out.append(f"- Warnung: {warning}")
        out.append("")
        out.append("## Strukturierte Aufgaben")
        out.append("")
        out.append("| Aufgabe | Thema | Typ | Benötigtes Wissen | Punkte | Lösung/Erwartung kurz | Seiten |")
        out.append("|---|---|---|---|---:|---|---|")
        for task in tasks:
            out.append(
                f"| {md_escape(task.number)} | {md_escape(task.topic)} | {task.typ} | {md_escape(task.knowledge)} | {md_escape(task.points)} | {md_escape(task.solution_hint[:220])} | {md_escape(task.source_pages)} |"
            )
        out.append("")
        out.append("## OCR-Transkript (privat, nicht in App übernehmen)")
        for page, page_text in pages:
            out.append("")
            out.append(f"### {page}")
            out.append("")
            out.append(page_text or "_Keine OCR-Zeilen erkannt._")
        if lsg_text:
            out.append("")
            out.append("## Lösungs-OCR / Kurzform (privat)")
            out.append("")
            out.append(lsg_text)
        (EXTRACTION_ROOT / f"{meta['name']}.md").write_text("\n".join(out), encoding="utf-8")

    (OUT_ROOT / "AP1_MATERIAL_INVENTAR.md").write_text("\n".join(inventory_lines) + "\n", encoding="utf-8")

    ap1 = [t for t in all_tasks if t.level.startswith("AP1")]
    ap2 = [t for t in all_tasks if t.level == "AP2"]
    gap_counts = Counter(t.lesson for t in all_tasks if t.coverage == "Lücke")
    partial_counts = Counter(t.lesson for t in all_tasks if t.coverage == "teils")

    master = []
    master.append("# AP1-Abgleich und Abdeckungsmatrix")
    master.append("")
    master.append("Rohtranskripte und Lösungsauszüge liegen ausschließlich privat unter `_material_index/extraktion/`.")
    master.append("")
    master.append("## Kurzreport")
    master.append("")
    if ap2:
        master.append(f"- Klassifizierte Prüfungen: AP1/AP1? = {sum(v for k, v in exam_level_counter.items() if k.startswith('AP1'))} Dateien; AP2 = {exam_level_counter['AP2']} Dateien.")
        master.append(f"- Erkannte Aufgaben/Blöcke: {len(all_tasks)} gesamt, davon {len(ap1)} AP1/AP1? und {len(ap2)} AP2.")
    else:
        master.append(f"- Klassifizierte Prüfungen: AP1/AP1? = {sum(v for k, v in exam_level_counter.items() if k.startswith('AP1'))} Dateien.")
        master.append(f"- Erkannte Aufgaben/Blöcke: {len(ap1)} gesamt.")
    master.append("- Top-Themen nach Häufigkeit: " + ", ".join(f"{k} ({v})" for k, v in topic_counter.most_common(12)))
    master.append("- Größte App-Lücken: " + (", ".join(f"{k} ({v})" for k, v in (gap_counts + partial_counts).most_common(10)) or "keine automatisch erkannt"))
    if warnings:
        master.append("- Material-/OCR-Auffälligkeiten: " + "; ".join(warnings))
    master.append("")
    master.append("## AP1-Matrix")
    master.append("")
    master.append("| Aufgabe (Thema) | Typ | Level | passende Lektion (slug) | Abdeckung | Soll-Dichte |")
    master.append("|---|---|---|---|---|---|")
    for t in ap1:
        master.append(f"| {md_escape(t.exam + ' ' + t.number + ': ' + t.topic)} | {t.typ} | {t.level} | `{t.lesson}` | {t.coverage} | {t.density} |")
    if ap2:
        master.append("")
        master.append("## AP2 separat")
        master.append("")
        master.append("| Aufgabe (Thema) | Typ | Level | passende Lektion (slug) | Abdeckung | Soll-Dichte |")
        master.append("|---|---|---|---|---|---|")
        for t in ap2:
            master.append(f"| {md_escape(t.exam + ' ' + t.number + ': ' + t.topic)} | {t.typ} | {t.level} | `{t.lesson}` | {t.coverage} | {t.density} |")
    master.append("")
    master.append("## Hinweise zur Qualität")
    master.append("")
    master.append("- Der Bericht enthält nur AP1/AP1?-Material; fachfremde Probeprüfungen wurden aus dem Arbeitsindex entfernt.")
    master.append("- OCR stammt aus Windows OCR `de-DE`; Tabellen und Diagramme können Nachpflege brauchen.")
    master.append("- Abdeckung wurde automatisch anhand vorhandener Lesson-Dateien und Topic-Keywords geschätzt; Zeilen mit `teils` oder `Lücke` sind die priorisierte Review-Liste.")
    (OUT_ROOT / "AP1_ABGLEICH.md").write_text("\n".join(master) + "\n", encoding="utf-8")

    json_rows = [t.__dict__ for t in all_tasks]
    (OUT_ROOT / "exam_tasks.json").write_text(json.dumps(json_rows, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
    build()
