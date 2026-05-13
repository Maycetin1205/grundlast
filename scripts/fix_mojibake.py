"""
Fix UTF-8-as-cp1252 mojibake in lesson .mdx files.

Pattern: bytes were originally UTF-8, got misinterpreted as Windows-1252,
then re-saved as UTF-8. Some files were later edited with real UTF-8 chars,
producing mixed content. ftfy.fix_encoding handles both cleanly.

Dry-run by default. Pass --apply to write changes.
"""

import argparse
import sys
from pathlib import Path

import ftfy

MOJIBAKE_MARKERS = ["Ã¤", "Ã¶", "Ã¼", "ÃŸ", "Ã„", "Ã–", "Ãœ", "â€", "Â·", "Â ", "Â»", "Â«"]


def looks_like_mojibake(text: str) -> bool:
    return any(m in text for m in MOJIBAKE_MARKERS)


def try_fix(text: str) -> tuple[str | None, str]:
    """Return (fixed_text or None, reason)."""
    fixed = ftfy.fix_encoding(text)
    if fixed == text:
        return None, "ftfy: no change"
    return fixed, "ftfy"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("path", type=Path)
    ap.add_argument("--apply", action="store_true")
    args = ap.parse_args()

    files = sorted(args.path.rglob("*.mdx")) if args.path.is_dir() else [args.path]

    stats = {"checked": 0, "clean": 0, "fixed": 0, "failed": 0}
    failures: list[tuple[Path, str]] = []

    for f in files:
        stats["checked"] += 1
        raw = f.read_bytes()
        # strip UTF-8 BOM for processing, restore on write
        had_bom = raw.startswith(b"\xef\xbb\xbf")
        text = raw[3:].decode("utf-8") if had_bom else raw.decode("utf-8")

        if not looks_like_mojibake(text):
            stats["clean"] += 1
            continue

        fixed, reason = try_fix(text)
        if fixed is None:
            stats["failed"] += 1
            failures.append((f, reason))
            continue

        stats["fixed"] += 1
        print(f"FIX  {f.name}  ({reason})")
        if args.apply:
            out = (b"\xef\xbb\xbf" if had_bom else b"") + fixed.encode("utf-8")
            f.write_bytes(out)

    print(f"\n--- summary ---")
    for k, v in stats.items():
        print(f"{k}: {v}")
    if failures:
        print("\n--- failures ---")
        for f, r in failures:
            print(f"  {f.name}: {r}")
    if not args.apply and stats["fixed"]:
        print("\n(dry-run — re-run with --apply to write)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
