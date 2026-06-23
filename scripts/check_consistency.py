"""
Grundlast · Konsistenz-Waechter (read-only)

Eine Lektion ist heute ueber bis zu fuenf Orte verteilt, gekoppelt nur ueber
den Slug-String. Nichts erzwingt, dass diese Orte zusammenpassen:

  1. src/content/lessons/<slug>.mdx       Inhalt          (wird per glob geladen)
  2. src/lib/toc/data/*.ts                 Titel, Status, Navigationsposition
  3. src/lib/audit/status.ts               Vertrauensstatus
  4. src/lib/review.ts                     Faktencheck-Status
  5. src/content/quellen/tagMappings.ts    Quellenzuordnung (slugTags, lessonSourceIds)

Dieses Skript liest nur, schreibt nie. Es meldet jede Drift und liefert
Exit-Code 1, sobald ein FEHLER vorliegt (sonst 0). Damit kann es spaeter ein
Gate in CI bzw. vor dem Build werden.

Verwendung:
    python scripts/check_consistency.py
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

# Windows-Konsole ist oft cp1252; Ausgabe bleibt ohnehin ASCII, dies ist nur
# eine Absicherung gegen UnicodeEncodeError.
try:
    sys.stdout.reconfigure(encoding="utf-8")
except (AttributeError, ValueError):
    pass

ROOT = Path(__file__).resolve().parents[1]
LESSONS_DIR = ROOT / "src/content/lessons"
TOC_DATA_DIR = ROOT / "src/lib/toc/data"
AUDIT_FILE = ROOT / "src/lib/audit/status.ts"
REVIEW_FILE = ROOT / "src/lib/review.ts"
QUELLEN_FILE = ROOT / "src/content/quellen/tagMappings.ts"
GLOSSAR_DIR = ROOT / "src/content/glossar"

# Status, bei denen die Lektion in der UI sichtbar/verlinkt ist und daher
# zwingend eine MDX-Datei braucht. "stub" = bewusst geplant, noch ohne Inhalt.
VISIBLE_STATUS = {"ready", "final", "draft"}


def read(path: Path) -> str:
    # utf-8-sig wegen frueherer BOM-/Mojibake-Historie im Projekt.
    return path.read_text(encoding="utf-8-sig")


def match_bracket(text: str, open_index: int, open_ch: str, close_ch: str) -> int:
    """Index des passenden schliessenden Zeichens zu text[open_index]."""
    depth = 0
    for j in range(open_index, len(text)):
        c = text[j]
        if c == open_ch:
            depth += 1
        elif c == close_ch:
            depth -= 1
            if depth == 0:
                return j
    raise ValueError(f"Kein passendes '{close_ch}' ab Index {open_index} gefunden.")


def object_body(text: str, decl_regex: str) -> str | None:
    """Inhalt zwischen den aeussersten { } einer `const NAME ... = { ... }`-Deklaration."""
    m = re.search(decl_regex, text)
    if not m:
        return None
    open_index = text.index("{", m.start())
    close_index = match_bracket(text, open_index, "{", "}")
    return text[open_index + 1 : close_index]


def array_bodies(text: str, key: str) -> list[str]:
    """Inhalte aller `key: [ ... ]`-Arrays."""
    bodies: list[str] = []
    for m in re.finditer(re.escape(key) + r"\s*:\s*\[", text):
        open_index = text.index("[", m.start())
        close_index = match_bracket(text, open_index, "[", "]")
        bodies.append(text[open_index + 1 : close_index])
    return bodies


# --- Quellen einlesen -------------------------------------------------------

def lesson_files() -> set[str]:
    return {p.stem for p in LESSONS_DIR.glob("*.mdx")}


def toc_entries() -> list[tuple[str, str | None, str]]:
    """(slug, status, herkunftsdatei) fuer jede Lektion in den TOC-Daten."""
    entries: list[tuple[str, str | None, str]] = []
    for ts in sorted(TOC_DATA_DIR.glob("*.ts")):
        if ts.name == "index.ts":
            continue
        text = read(ts)
        for body in array_bodies(text, "lessons"):
            for obj in re.finditer(r"\{[^{}]*\}", body):
                o = obj.group(0)
                slug_m = re.search(r"slug:\s*[\"']([^\"']+)[\"']", o)
                if not slug_m:
                    continue
                status_m = re.search(r"status:\s*[\"']([^\"']+)[\"']", o)
                entries.append((slug_m.group(1), status_m.group(1) if status_m else None, ts.name))
    return entries


def toc_lf_map() -> dict[str, int]:
    """slug -> Lernfeld-Nummer (1-9) aus den TOC-Daten."""
    result: dict[str, int] = {}
    for ts in sorted(TOC_DATA_DIR.glob("*.ts")):
        if ts.name == "index.ts":
            continue
        for body in array_bodies(read(ts), "lessons"):
            for obj in re.finditer(r"\{[^{}]*\}", body):
                o = obj.group(0)
                slug_m = re.search(r"slug:\s*[\"']([^\"']+)[\"']", o)
                lf_m = re.search(r"\blf:\s*(\d)", o)
                if slug_m and lf_m:
                    result[slug_m.group(1)] = int(lf_m.group(1))
    return result


def glossar_lesson_links() -> list[tuple[str, str]]:
    """(ziel-slug, herkunftsdatei) fuer jeden Deeplink `href: '/lernen/.../slug'`."""
    links: list[tuple[str, str]] = []
    for ts in sorted(GLOSSAR_DIR.glob("*.ts")):
        text = read(ts)
        for m in re.finditer(r"href:\s*[\"']/lernen/[^\"']*/([^\"'/]+)[\"']", text):
            links.append((m.group(1), ts.name))
    return links


def object_keys(text: str, decl_regex: str, value_open: str) -> set[str]:
    """Top-Level-Slug-Keys eines Objekts (Wert beginnt mit value_open, z. B. '{' oder '[')."""
    body = object_body(text, decl_regex)
    if body is None:
        return set()
    pattern = r"(?m)^  '?([A-Za-z0-9][\w.-]*)'?:\s*" + re.escape(value_open)
    return set(re.findall(pattern, body))


# --- Pruefungen -------------------------------------------------------------

def main() -> int:
    errors: list[str] = []
    infos: list[str] = []

    mdx = lesson_files()
    toc = toc_entries()
    toc_slugs = {slug for slug, _, _ in toc}

    # Doppelte TOC-Slugs
    seen: dict[str, str] = {}
    for slug, _, src in toc:
        if slug in seen:
            errors.append(f"Slug doppelt im TOC: '{slug}' ({seen[slug]} und {src}).")
        else:
            seen[slug] = src

    visible_slugs = {slug for slug, status, _ in toc if (status or "stub") in VISIBLE_STATUS}
    stub_slugs = {slug for slug, status, _ in toc if (status or "stub") == "stub"}

    audit_keys = object_keys(read(AUDIT_FILE), r"lessonAudits\b[^=]*=", "{")
    review_keys = object_keys(read(REVIEW_FILE), r"reviewLog\b[^=]*=", "{")
    slugtag_keys = object_keys(read(QUELLEN_FILE), r"slugTags\b[^=]*=", "[")
    sourceid_keys = object_keys(read(QUELLEN_FILE), r"lessonSourceIds\b[^=]*=", "[")

    # 1) MDX-Datei ohne TOC-Eintrag -> unerreichbar
    for slug in sorted(mdx - toc_slugs):
        errors.append(f"MDX ohne TOC-Eintrag (unerreichbar): {slug}.mdx")

    # 2) Sichtbarer TOC-Eintrag ohne MDX -> toter Link / leere Lektion
    for slug in sorted(visible_slugs - mdx):
        errors.append(f"TOC-Lektion sichtbar (ready/final/draft), aber MDX fehlt: {slug}")

    # 2b) Stub ohne MDX ist erlaubt (bewusst geplant) -> nur Info
    for slug in sorted(stub_slugs - mdx):
        infos.append(f"Stub ohne MDX (geplant, ok): {slug}")

    # 3) Dangling-Keys: Audit/Review/Quellen zeigen auf unbekannten Slug
    known = toc_slugs | mdx
    for name, keys in (
        ("audit/status.ts (lessonAudits)", audit_keys),
        ("review.ts (reviewLog)", review_keys),
        ("quellen/tagMappings.ts (slugTags)", slugtag_keys),
        ("quellen/tagMappings.ts (lessonSourceIds)", sourceid_keys),
    ):
        for slug in sorted(keys - known):
            errors.append(f"{name}: Eintrag '{slug}' passt zu keiner Lektion (Tippfehler oder umbenannt).")

    # 4) Glossar-Deeplinks ins Leere: href zeigt auf Slug ohne sichtbare Lektion
    reachable = visible_slugs & mdx
    dead_links: dict[str, set[str]] = {}
    for slug, src in glossar_lesson_links():
        if slug not in reachable:
            dead_links.setdefault(slug, set()).add(src)
    for slug in sorted(dead_links):
        srcs = ", ".join(sorted(dead_links[slug]))
        errors.append(f"Glossar-Deeplink ins Leere: '/lernen/.../{slug}' (in {srcs}) hat keine sichtbare Lektion.")

    # 5) LF-Pflicht: jede TOC-Lektion braucht ein gueltiges Lernfeld (1-9)
    lf_map = toc_lf_map()
    for slug, _, src in toc:
        lf = lf_map.get(slug)
        if lf is None:
            errors.append(f"Lektion ohne LF (1-9): {slug} ({src})")
        elif not 1 <= lf <= 9:
            errors.append(f"Lektion mit ungueltigem LF {lf}: {slug} ({src})")

    # Abdeckung (nur Info)
    real = sorted(toc_slugs & mdx)
    infos.append(
        f"Lektionen real (TOC + MDX): {len(real)} | "
        f"davon mit Audit-Eintrag: {len(audit_keys & set(real))} | "
        f"mit Review: {len(review_keys & set(real))} | "
        f"mit Quellen-Tags: {len(slugtag_keys & set(real))}"
    )

    # --- Ausgabe ---
    print("Grundlast - Konsistenz-Waechter")
    print("=" * 60)
    print(f"MDX-Dateien:        {len(mdx)}")
    print(f"TOC-Lektionen:      {len(toc_slugs)}  (sichtbar: {len(visible_slugs)}, stub: {len(stub_slugs)})")
    print()

    if infos:
        print("INFO")
        for line in infos:
            print(f"  - {line}")
        print()

    if errors:
        print(f"FEHLER ({len(errors)})")
        for line in errors:
            print(f"  [X] {line}")
        print()
        print("Ergebnis: NICHT konsistent.")
        return 1

    print("Ergebnis: konsistent. Alle Slugs passen ueber alle Quellen zusammen.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
