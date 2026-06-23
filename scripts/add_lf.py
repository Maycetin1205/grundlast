"""
Grundlast - LF-Zuordnung in den TOC-Code einspielen

Setzt das Feld `lf` (offizielles KMK-Lernfeld 1-9) an jede Lektion in
src/lib/toc/data/*.ts. Quelle der Zuordnung:

1. EXPLIZIT: primaeres (erstes) LF aus CURRICULUM_MAPPING.md, wo vorhanden.
2. SONST: Cluster-Default nach Themen-Datei (= grobe Orientierung, "ungefaehr").

Beide sind nur ein SEED. Die genaue LF-Zuordnung wird pro Lektion im
Audit bestaetigt. Nichts wird ueberschrieben, das bereits ein `lf` hat.

Dry-run per Default. Mit --apply schreiben.
    py scripts/add_lf.py            # zeigt nur, was passieren wuerde
    py scripts/add_lf.py --apply    # schreibt
"""

from __future__ import annotations

import argparse
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TOC_DATA_DIR = ROOT / "src/lib/toc/data"

# Primaeres LF aus CURRICULUM_MAPPING.md (erstes LF der Mehrfachzuordnung).
EXPLICIT_LF: dict[str, int] = {
    "von-neumann": 2,
    "bit-byte": 2,
    "zahlensysteme": 2,
    "prefixe": 2,
    "cpu-ram-speicher": 2,
    "hardware-schnittstellen": 2,
    "homeoffice-ergonomie": 2,
    "raid-systeme": 2,
    "usv-systeme": 2,
    "scan-bilddaten": 2,
    "linux-chmod": 2,
    "dateisysteme": 2,
    "prozess-thread": 2,
    "zentral-dezentral": 2,
    "virtualisierung": 2,
    "crm-erp-dms": 1,
    "stamm-bewegungsdaten": 5,
    "tcp-udp": 3,
    "datenrate-berechnung": 2,
    "wlan-standards": 3,
    "firewall-dmz": 3,
    "port-forwarding": 3,
    "pki-zertifikate": 4,
    "gewaehrleistung": 1,
}

# Cluster-Default nach TOC-Datei (Themen-Cluster -> primaeres LF). Grob.
CLUSTER_DEFAULT_LF: dict[str, int] = {
    "grundlagen": 2,
    "hardware": 2,
    "betriebssysteme": 2,
    "netzwerke": 3,
    "daten": 5,
    "software": 5,
    "projekt": 6,
    "sicherheit": 4,
    "wirtschaft": 1,
    "vertragsrecht": 1,
    "qualitaet": 6,
    "webmedia": 5,
    "aktuell": 5,
    "arbeitsrecht": 1,
}

LESSON_OBJ = re.compile(r"\{[^{}]*?slug:\s*\"([^\"]+)\"[^{}]*?\}")


def lf_for(slug: str, cluster: str) -> int | None:
    if slug in EXPLICIT_LF:
        return EXPLICIT_LF[slug]
    return CLUSTER_DEFAULT_LF.get(cluster)


def process(text: str, cluster: str) -> tuple[str, list[tuple[str, int, str]]]:
    changes: list[tuple[str, int, str]] = []

    def repl(m: re.Match[str]) -> str:
        obj = m.group(0)
        slug = m.group(1)
        if re.search(r"\blf:\s*\d", obj):
            return obj  # schon gesetzt, nicht anfassen
        lf = lf_for(slug, cluster)
        if lf is None:
            changes.append((slug, 0, "KEIN LF - manuell setzen"))
            return obj
        source = "explizit" if slug in EXPLICIT_LF else f"cluster:{cluster}"
        changes.append((slug, lf, source))
        return obj.replace("{ slug:", f"{{ lf: {lf}, slug:", 1)

    new_text = LESSON_OBJ.sub(repl, text)
    return new_text, changes


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true")
    args = ap.parse_args()

    total = 0
    missing = 0
    for ts in sorted(TOC_DATA_DIR.glob("*.ts")):
        if ts.name == "index.ts":
            continue
        cluster = ts.stem
        text = ts.read_text(encoding="utf-8-sig")
        new_text, changes = process(text, cluster)
        if not changes:
            continue
        print(f"\n{ts.name}  (Cluster-Default LF{CLUSTER_DEFAULT_LF.get(cluster, '?')})")
        for slug, lf, source in changes:
            total += 1
            if lf == 0:
                missing += 1
                print(f"  [!] {slug:42s} {source}")
            else:
                print(f"  LF{lf}  {slug:42s} ({source})")
        if args.apply and new_text != text:
            ts.write_text(new_text, encoding="utf-8", newline="")

    print(f"\n{'GESCHRIEBEN' if args.apply else 'DRY-RUN'}: {total} Lektionen, {missing} ohne LF.")
    if not args.apply:
        print("Mit --apply ausfuehren, um zu schreiben.")
    return 0


if __name__ == "__main__":
    main()
    raise SystemExit(0)
