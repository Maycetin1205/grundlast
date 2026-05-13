"""
Replace botched search-replace artefact "Aufgabesmodus" with grammatically
correct German equivalents (target: "Prüfung" / "prüfungs-").

Rules are applied in order, longest match first.

Dry-run by default; pass --apply to write changes.
"""

import argparse
import re
import sys
from pathlib import Path

# (pattern, replacement). Order matters: longer/specific first.
RULES: list[tuple[str, str]] = [
    # MetaBar value — also normalize "PFLICHT -" to "PFLICHT ·"
    ('"Aufgabesmodus - 5/5"', '"PFLICHT · 5/5"'),
    ('"Aufgabesmodus - 4/5"', '"PFLICHT · 4/5"'),
    ('"Aufgabesmodus - 3/5"', '"PFLICHT · 3/5"'),
    ('"PFLICHT - 5/5"', '"PFLICHT · 5/5"'),
    ('"PFLICHT - 4/5"', '"PFLICHT · 4/5"'),
    ('"PFLICHT - 3/5"', '"PFLICHT · 3/5"'),

    # Composite nouns with hyphen kept (improves readability)
    ('Aufgabesmodus-Rechenaufgaben', 'Prüfungs-Rechenaufgaben'),
    ('Aufgabesmodus-Rechenaufgabe', 'Prüfungs-Rechenaufgabe'),
    ('Aufgabesmodus-Zuordnungsaufgabe', 'Prüfungs-Zuordnungsaufgabe'),
    ('Aufgabesmodus-Formulierung', 'Prüfungs-Formulierung'),
    ('Aufgabesmodus-Erkennung', 'Prüfungs-Erkennung'),
    ('Aufgabesmodus-Signalwoerter', 'Prüfungs-Signalwörter'),
    ('Aufgabesmodus-Signalwort', 'Prüfungs-Signalwort'),
    ('Aufgabesmodus-Präsentation', 'Prüfungs-Präsentation'),
    ('Aufgabesmodus-Antworten', 'Prüfungs-Antworten'),
    ('Aufgabesmodus-Anwendungen', 'Prüfungsanwendungen'),

    # Compound nouns — fused (no hyphen, more idiomatic)
    ('Aufgabesmodus-Klassiker', 'Prüfungsklassiker'),
    ('Aufgabesmodus-Situation', 'Prüfungssituation'),
    ('Aufgabesmodus-Reaktion', 'Prüfungsreaktion'),
    ('Aufgabesmodus-Relevanz', 'Prüfungsrelevanz'),
    ('Aufgabesmodus-Grundlage', 'Prüfungsgrundlage'),
    ('Aufgabesmodus-Rechnung', 'Prüfungsrechnung'),
    ('Aufgabesmodus-Kontext', 'Prüfungskontext'),
    ('Aufgabesmodus-Faellen', 'Prüfungsfällen'),
    ('Aufgabesmodus-Fehler', 'Prüfungsfehler'),
    ('Aufgabesmodus-Bezug', 'Prüfungsbezug'),
    ('Aufgabesmodus-Regel', 'Prüfungsregel'),
    ('Aufgabesmodus-Stil', 'Prüfungsstil'),
    ('Aufgabesmodus-Kern', 'Prüfungskern'),
    ('Aufgabesmodus-Wege', 'Prüfungswege'),

    # Adjectives / adverbs (lowercase)
    ('Aufgabesmodus-relevant', 'prüfungsrelevant'),
    ('Aufgabesmodus-taugliche', 'prüfungstaugliche'),
    ('Aufgabesmodus-typisches', 'prüfungstypisches'),
    ('Aufgabesmodus-stark', 'prüfungsstark'),
    ('Aufgabesmodus-naher', 'prüfungsnaher'),
    ('Aufgabesmodus-nahe', 'prüfungsnahe'),

    # Generic fallback for any remaining hyphenated form
    ('Aufgabesmodus-', 'Prüfungs-'),

    # Standalone — handle preceding words first to fix grammar
    ('Fuer Aufgabesmodus', 'Für die Prüfung'),
    ('Für Aufgabesmodus', 'Für die Prüfung'),
    ('fuer Aufgabesmodus', 'für die Prüfung'),
    ('für Aufgabesmodus', 'für die Prüfung'),

    # Plain word — catches remaining occurrences
    ('Aufgabesmodus', 'Prüfung'),
]


_PREFIX_RE = re.compile(r"\bAufgabes(?=[a-zäöüß])")


def apply_rules(text: str) -> tuple[str, dict[str, int]]:
    counts: dict[str, int] = {}
    for pat, repl in RULES:
        new = text.replace(pat, repl)
        if new != text:
            counts[pat] = text.count(pat)
            text = new
    # Catch remaining "Aufgabes<lowercase>" compound artefacts.
    n_prefix = len(_PREFIX_RE.findall(text))
    if n_prefix:
        text = _PREFIX_RE.sub("Prüfungs", text)
        counts["[regex] Aufgabes<lc>"] = n_prefix
    return text, counts


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("path", type=Path)
    ap.add_argument("--apply", action="store_true")
    args = ap.parse_args()

    files = sorted(args.path.rglob("*.mdx")) if args.path.is_dir() else [args.path]
    grand_total: dict[str, int] = {}
    touched = 0

    for f in files:
        raw = f.read_bytes()
        had_bom = raw.startswith(b"\xef\xbb\xbf")
        text = raw[3:].decode("utf-8") if had_bom else raw.decode("utf-8")
        new_text, counts = apply_rules(text)
        if not counts:
            continue
        touched += 1
        total = sum(counts.values())
        print(f"FIX {f.name}  (+{total})")
        for k, v in counts.items():
            grand_total[k] = grand_total.get(k, 0) + v
        if args.apply:
            out = (b"\xef\xbb\xbf" if had_bom else b"") + new_text.encode("utf-8")
            f.write_bytes(out)

    print(f"\n--- summary: {touched} file(s) touched ---")
    for k, v in sorted(grand_total.items(), key=lambda x: -x[1]):
        print(f"  {v:4}  {k}")
    if not args.apply and touched:
        print("\n(dry-run — re-run with --apply to write)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
