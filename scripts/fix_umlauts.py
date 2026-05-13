from __future__ import annotations

import argparse
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


BASE_MAPPINGS = [
    ("Anhaeng", "Anhäng"),
    ("Bestaende", "Bestände"),
    ("Fuehr", "Führ"),
    ("Geraet", "Gerät"),
    ("Geschaeft", "Geschäft"),
    ("Koenn", "Könn"),
    ("Massnahm", "Maßnahm"),
    ("Moeglich", "Möglich"),
    ("Pruefungsmodus", "Prüfungsmodus"),
    ("Pruefungsstoff", "Prüfungsstoff"),
    ("Schluessel", "Schlüssel"),
    ("Verfuegbar", "Verfügbar"),
    ("Vertraeg", "Verträg"),
    ("Waehl", "Wähl"),
    ("aufgefuehrt", "aufgeführt"),
    ("ausfuehr", "ausführ"),
    ("durchfuehr", "durchführ"),
    ("fuehr", "führ"),
    ("fuer", "für"),
    ("groesst", "größt"),
    ("haeufig", "häufig"),
    ("heiss", "heiß"),
    ("koenn", "könn"),
    ("laeuft", "läuft"),
    ("massnahm", "maßnahm"),
    ("moeglich", "möglich"),
    ("naeher", "näher"),
    ("naeh", "näh"),
    ("pruef", "prüf"),
    ("schluessel", "schlüssel"),
    ("spaeter", "später"),
    ("ueber", "über"),
    ("unterstuetz", "unterstütz"),
    ("waehl", "wähl"),
]


def title_case_pair(source: str, target: str) -> tuple[str, str]:
    return source[:1].upper() + source[1:], target[:1].upper() + target[1:]


def lower_case_pair(source: str, target: str) -> tuple[str, str]:
    return source[:1].lower() + source[1:], target[:1].lower() + target[1:]


def build_mappings() -> list[tuple[str, str, str]]:
    mappings: dict[tuple[str, str], tuple[str, str, str]] = {}
    for source, target in BASE_MAPPINGS:
        variants = [(source, target), title_case_pair(source, target), lower_case_pair(source, target)]
        for variant_source, variant_target in variants:
            mappings[(variant_source, variant_target)] = (variant_source, variant_target, "")

    mappings[("weiss", "weiß")] = ("weiss", "weiß", r"(?:e|er|es|en)?")
    mappings[("Weiss", "Weiß")] = ("Weiss", "Weiß", r"(?:e|er|es|en)?")
    mappings[("gross", "groß")] = ("gross", "groß", r"(?=(?:e|en|er)?\b)")
    mappings[("Gross", "Groß")] = ("Gross", "Groß", r"(?=(?:e|en|er)?\b)")

    return sorted(mappings.values(), key=lambda item: (-len(item[0]), item[0]))


MAPPINGS = build_mappings()


def is_jsx_attribute_name(text: str, start: int, end: int) -> bool:
    after = text[end:]
    if after.startswith("="):
        return True
    if re.match(r"[A-Za-z0-9_$-]*=", after):
        return True
    line_start = text.rfind("\n", 0, start) + 1
    line_prefix = text[line_start:start]
    return bool(re.search(r"<[A-Za-z][A-Za-z0-9._-]*$", line_prefix))


def apply_mappings(text: str) -> tuple[str, int]:
    count = 0
    protected: list[tuple[int, int]] = []

    def overlaps(start: int, end: int) -> bool:
        return any(not (end <= a or start >= b) for a, b in protected)

    for source, target, suffix in MAPPINGS:
        pattern = re.compile(rf"\b{re.escape(source)}{suffix}")
        pos = 0
        pieces: list[str] = []
        changed = False
        for match in pattern.finditer(text):
            if overlaps(match.start(), match.end()) or is_jsx_attribute_name(text, match.start(), match.end()):
                continue
            pieces.append(text[pos:match.start()])
            word = match.group(0)
            replacement = target + word[len(source) :]
            pieces.append(replacement)
            protected.append((match.start(), match.start() + len(replacement)))
            pos = match.end()
            count += 1
            changed = True
        if changed:
            pieces.append(text[pos:])
            text = "".join(pieces)
            protected = []

    return text, count


def split_mdx_code(text: str) -> list[tuple[str, bool]]:
    parts: list[tuple[str, bool]] = []
    i = 0
    while i < len(text):
        fence = text.find("```", i)
        inline = text.find("`", i)
        candidates = [pos for pos in (fence, inline) if pos != -1]
        if not candidates:
            parts.append((text[i:], False))
            break
        pos = min(candidates)
        if pos > i:
            parts.append((text[i:pos], False))
        if text.startswith("```", pos):
            end = text.find("```", pos + 3)
            end = len(text) if end == -1 else end + 3
        else:
            end = text.find("`", pos + 1)
            end = len(text) if end == -1 else end + 1
        parts.append((text[pos:end], True))
        i = end
    return parts


def process_quoted_strings(text: str) -> tuple[str, int]:
    total = 0
    pattern = re.compile(r"(['\"])((?:\\.|(?!\1).)*)(\1)", re.DOTALL)

    def replace(match: re.Match[str]) -> str:
        nonlocal total
        replaced, count = apply_mappings(match.group(2))
        total += count
        return f"{match.group(1)}{replaced}{match.group(3)}"

    return pattern.sub(replace, text), total


def process_mdx_visible_text(text: str) -> tuple[str, int]:
    total = 0
    out: list[str] = []
    i = 0
    while i < len(text):
        tag = text.find("<", i)
        if tag == -1:
            replaced, count = apply_mappings(text[i:])
            out.append(replaced)
            total += count
            break
        if tag > i:
            replaced, count = apply_mappings(text[i:tag])
            out.append(replaced)
            total += count
        end = text.find(">", tag + 1)
        if end == -1:
            out.append(text[tag:])
            break
        tag_text, count = process_quoted_strings(text[tag : end + 1])
        out.append(tag_text)
        total += count
        i = end + 1
    return "".join(out), total


def process_mdx(text: str) -> tuple[str, int]:
    total = 0
    out: list[str] = []
    for part, protected in split_mdx_code(text):
        if protected:
            out.append(part)
        else:
            replaced, count = process_mdx_visible_text(part)
            out.append(replaced)
            total += count
    return "".join(out), total


def process_css_comments(text: str) -> tuple[str, int]:
    total = 0

    def replace(match: re.Match[str]) -> str:
        nonlocal total
        replaced, count = apply_mappings(match.group(0))
        total += count
        return replaced

    return re.sub(r"/\*.*?\*/", replace, text, flags=re.DOTALL), total


def process_named_string_fields(text: str, field_names: set[str]) -> tuple[str, int]:
    total = 0
    fields = "|".join(re.escape(name) for name in sorted(field_names))
    pattern = re.compile(rf"(\b(?:{fields})\s*:\s*)(['\"])((?:\\.|(?!\2).)*)(\2)", re.DOTALL)

    def replace(match: re.Match[str]) -> str:
        nonlocal total
        replaced, count = apply_mappings(match.group(3))
        total += count
        return f"{match.group(1)}{match.group(2)}{replaced}{match.group(4)}"

    return pattern.sub(replace, text), total


def process_review_notes(text: str) -> tuple[str, int]:
    total = 0
    notes_pattern = re.compile(r"(notes\s*:\s*\[)(.*?)(\])", re.DOTALL)

    def replace_notes(match: re.Match[str]) -> str:
        nonlocal total
        body, count = process_quoted_strings(match.group(2))
        total += count
        return match.group(1) + body + match.group(3)

    return notes_pattern.sub(replace_notes, text), total


def process_tsx(text: str) -> tuple[str, int]:
    total = 0
    string_pattern = re.compile(r"(['\"])((?:\\.|(?!\1).)*)(\1)", re.DOTALL)
    jsx_text_pattern = re.compile(r"(>)([^<>{}]+)(<)")

    def replace_string(match: re.Match[str]) -> str:
        nonlocal total
        line_start = text.rfind("\n", 0, match.start()) + 1
        prefix = text[line_start:match.start()]
        if re.search(r"\bfrom\s*$|\bimport\s*$", prefix):
            return match.group(0)
        replaced, count = apply_mappings(match.group(2))
        total += count
        return f"{match.group(1)}{replaced}{match.group(3)}"

    text = string_pattern.sub(replace_string, text)

    def replace_jsx_text(match: re.Match[str]) -> str:
        nonlocal total
        replaced, count = apply_mappings(match.group(2))
        total += count
        return match.group(1) + replaced + match.group(3)

    return jsx_text_pattern.sub(replace_jsx_text, text), total


def target_files() -> list[Path]:
    files = sorted((ROOT / "src/content/lessons").glob("*.mdx"))
    files += [
        ROOT / "src/stores/glossarStore.ts",
        ROOT / "src/lib/sources.ts",
        ROOT / "src/lib/toc.ts",
        ROOT / "src/lib/review.ts",
        ROOT / "src/index.css",
    ]
    files += sorted((ROOT / "src").rglob("*.tsx"))
    return [path for path in files if path.exists()]


def process_file(path: Path) -> tuple[str, int]:
    text = path.read_text(encoding="utf-8")
    rel = path.relative_to(ROOT).as_posix()
    if rel.startswith("src/content/lessons/") and path.suffix == ".mdx":
        return process_mdx(text)
    if rel == "src/stores/glossarStore.ts":
        return process_named_string_fields(text, {"begriff", "definition", "kurzdefinition", "titel"})
    if rel == "src/lib/sources.ts":
        return process_named_string_fields(text, {"detail", "label"})
    if rel == "src/lib/toc.ts":
        return process_named_string_fields(text, {"description", "title"})
    if rel == "src/lib/review.ts":
        return process_review_notes(text)
    if rel == "src/index.css":
        return process_css_comments(text)
    if path.suffix == ".tsx":
        return process_tsx(text)
    return text, 0


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--apply", action="store_true", help="write replacements")
    args = parser.parse_args()

    total = 0
    changed: list[tuple[Path, int]] = []
    for path in target_files():
        original = path.read_text(encoding="utf-8")
        updated, count = process_file(path)
        if count:
            changed.append((path, count))
            total += count
            if args.apply and updated != original:
                path.write_text(updated, encoding="utf-8", newline="")

    for path, count in changed:
        print(f"{path.relative_to(ROOT).as_posix()}: {count}")
    print(f"Summe: {total}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
