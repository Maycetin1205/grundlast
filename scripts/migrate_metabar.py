from __future__ import annotations

import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
LESSONS = ROOT / "src/content/lessons"
METABAR_PATTERN = re.compile(r"<MetaBar\b.*?/>", re.DOTALL)
LESEZEIT_PATTERN = re.compile(r"^\s*lesezeit=(['\"]).*?\1\s*\r?\n", re.MULTILINE)


def migrate_block(block: str, slug: str) -> tuple[str, bool]:
    changed = False
    updated = LESEZEIT_PATTERN.sub("", block)
    changed = updated != block

    if not re.search(r"\bslug=", updated):
        updated = updated.replace("<MetaBar\n", f'<MetaBar\n  slug="{slug}"\n', 1)
        changed = True

    return updated, changed


def migrate_file(path: Path) -> int:
    slug = path.stem
    text = path.read_text(encoding="utf-8-sig")
    changes = 0

    def replace(match: re.Match[str]) -> str:
        nonlocal changes
        updated, changed = migrate_block(match.group(0), slug)
        if changed:
            changes += 1
        return updated

    updated = METABAR_PATTERN.sub(replace, text)
    if changes:
        path.write_text(updated, encoding="utf-8", newline="")
    return changes


def main() -> int:
    total = 0
    for path in sorted(LESSONS.glob("*.mdx")):
        changes = migrate_file(path)
        if changes:
            total += changes
            print(f"{path.relative_to(ROOT).as_posix()}: {changes}")
    print(f"Summe: {total}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
