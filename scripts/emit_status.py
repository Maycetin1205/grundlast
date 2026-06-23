"""
Grundlast - Status-Generator

Erzeugt AP1_STATUS.md aus dem Code. Die Wahrheit ueber Lektionen liegt im Code;
diese Datei macht sie nur lesbar. Dadurch kann der Status nicht mehr zwischen
Code und einer handgepflegten Markdown-Matrix auseinanderdriften.

Quellen (read-only):
  src/lib/toc/data/*.ts      Lernfeld, Modul, Slug, TOC-Status, Reihenfolge
  src/lib/audit/status.ts    Vertrauensstatus (massgeblich)
  src/lib/review.ts          Review-/Faktencheck-Status
  src/content/quellen/...     Quellen-Tags pro Slug

Verwendung:
    py scripts/emit_status.py        (oder: npm run emit:status)

Die Parser-Logik wird aus check_consistency.py wiederverwendet (keine Dublette).
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from check_consistency import (  # noqa: E402
    AUDIT_FILE,
    QUELLEN_FILE,
    REVIEW_FILE,
    VISIBLE_STATUS,
    lesson_files,
    object_body,
    object_keys,
    read,
    toc_entries,
)

OUT_FILE = Path(__file__).resolve().parents[1] / "AP1_STATUS.md"


def status_map(path: Path, decl_regex: str) -> dict[str, str]:
    """slug -> status-Wert fuer ein `Record<string, {...}>`-Objekt."""
    body = object_body(read(path), decl_regex)
    result: dict[str, str] = {}
    if body is None:
        return result
    for m in re.finditer(r"(?m)^  '?([\w-]+)'?:\s*\{", body):
        slug = m.group(1)
        sm = re.search(r"status:\s*'([^']+)'", body[m.end():])
        result[slug] = sm.group(1) if sm else "?"
    return result


def main() -> int:
    toc = toc_entries()  # (slug, status, herkunftsdatei) in TOC-Reihenfolge
    mdx = lesson_files()
    audit = status_map(AUDIT_FILE, r"lessonAudits\b[^=]*=")
    review = status_map(REVIEW_FILE, r"reviewLog\b[^=]*=")
    quellen = object_keys(read(QUELLEN_FILE), r"slugTags\b[^=]*=", "[")

    visible = [t for t in toc if (t[1] or "stub") in VISIBLE_STATUS]
    stubs = [t for t in toc if (t[1] or "stub") == "stub"]

    def vertrauen(slug: str) -> str:
        return audit.get(slug, "ungeprueft")

    geprueft = sum(1 for s, _, _ in toc if vertrauen(s) == "geprueft")
    teil = sum(1 for s, _, _ in toc if vertrauen(s) == "teilgeprueft")
    ungeprueft = len(toc) - geprueft - teil

    lines: list[str] = []
    lines.append("# AP1 - Status (GENERIERT)")
    lines.append("")
    lines.append("> Diese Datei wird aus dem Code erzeugt: `npm run emit:status` "
                 "(bzw. `py scripts/emit_status.py`).")
    lines.append("> **Nicht von Hand editieren.** Quelle der Wahrheit: "
                 "`src/lib/toc/data/`, `src/lib/audit/status.ts`, `src/lib/review.ts`.")
    lines.append("> Massgeblich ist `Vertrauen` (ungeprueft -> teilgeprueft -> geprueft), "
                 "nicht der technische `TOC`-Status.")
    lines.append("")
    lines.append("## Zusammenfassung")
    lines.append("")
    lines.append(f"- Lektionen im TOC: **{len(toc)}** (sichtbar {len(visible)}, stub {len(stubs)})")
    lines.append(f"- MDX vorhanden: **{len(mdx)}**")
    lines.append(f"- Vertrauen: geprueft **{geprueft}** | teilgeprueft **{teil}** | ungeprueft **{ungeprueft}**")
    lines.append(f"- Review dokumentiert: **{len([s for s, _, _ in toc if s in review])}**")
    lines.append(f"- Mit Quellen-Tags: **{len([s for s, _, _ in toc if s in quellen])}**")
    lines.append("")
    lines.append("## Lektionen nach Lernfeld")
    lines.append("")

    current_src = None
    for slug, toc_status, src in toc:
        if src != current_src:
            current_src = src
            lernfeld = src[:-3] if src.endswith(".ts") else src
            lines.append("")
            lines.append(f"### {lernfeld}")
            lines.append("")
            lines.append("| Slug | TOC | Vertrauen | Review | MDX | Quellen |")
            lines.append("|---|---|---|---|---|---|")
        rev = review.get(slug, "-")
        has_mdx = "ja" if slug in mdx else "-"
        has_q = "ja" if slug in quellen else "-"
        lines.append(
            f"| `{slug}` | {toc_status or '?'} | {vertrauen(slug)} | {rev} | {has_mdx} | {has_q} |"
        )

    lines.append("")
    OUT_FILE.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Geschrieben: {OUT_FILE.name} ({len(toc)} Lektionen)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
