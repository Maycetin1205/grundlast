from __future__ import annotations

import argparse
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]

MAPPINGS = {
    "pruefungsrelevanz": "prüfungsrelevanz",
    "eintraege": "einträge",
    "initialGlossarEintraege": "initialGlossarEinträge",
    "registriereEintraege": "registriereEinträge",
    "naechsteEintraege": "nächsteEinträge",
    "zeigeNaechstenSchritt": "zeigeNächstenSchritt",
    "zuruecksetzen": "zurücksetzen",
}

SUFFIXES = {".ts", ".tsx", ".mdx"}
SCOPED_SUFFIXES = {
    "naechsteEintraege": {".ts", ".tsx"},
    "initialGlossarEintraege": {".ts", ".tsx"},
    "registriereEintraege": {".ts", ".tsx"},
    "zeigeNaechstenSchritt": {".ts", ".tsx"},
    "zuruecksetzen": {".ts", ".tsx"},
}


def target_files(source: str) -> list[Path]:
    backup = ROOT / "src/content/lessons.backup-mojibake"
    suffixes = SCOPED_SUFFIXES.get(source, SUFFIXES)
    return sorted(
        path
        for path in (ROOT / "src").rglob("*")
        if path.suffix in suffixes and backup not in path.parents
    )


def rename_identifier(text: str, source: str, target: str) -> tuple[str, int]:
    pattern = re.compile(rf"(?<![\wÄÖÜäöüß$]){re.escape(source)}(?![\wÄÖÜäöüß$])")
    return pattern.subn(target, text)


def apply_mapping(source: str, apply: bool) -> int:
    if source not in MAPPINGS:
        raise SystemExit(f"Unknown mapping: {source}")

    total = 0
    target = MAPPINGS[source]
    for path in target_files(source):
        original = path.read_text(encoding="utf-8-sig")
        updated, count = rename_identifier(original, source, target)
        if count:
            total += count
            print(f"{path.relative_to(ROOT).as_posix()}: {count}")
            if apply:
                path.write_text(updated, encoding="utf-8", newline="")
    print(f"Summe {source} -> {target}: {total}")
    return total


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("identifier", choices=sorted(MAPPINGS))
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()

    apply_mapping(args.identifier, args.apply)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
