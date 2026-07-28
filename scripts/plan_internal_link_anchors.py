#!/usr/bin/env python3
"""Build a deterministic, allowlisted internal-link anchor plan.

The script never invents anchor text. Every selected anchor must be one of the
five keyword variants already approved for the destination URL in the page map.
It prefers supporting variants (keyword_2 through keyword_5) so internal links
do not all repeat the primary keyword.
"""

from __future__ import annotations

import argparse
import csv
import hashlib
import sys
from collections import Counter, defaultdict
from pathlib import Path
from typing import Iterable


KEYWORD_COLUMNS = tuple(f"keyword_{index}" for index in range(1, 6))


def clean(value: str | None) -> str:
    return " ".join((value or "").strip().split())


def read_csv(path: Path) -> list[dict[str, str]]:
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        return list(csv.DictReader(handle))


def approved_keywords(
    page_rows: Iterable[dict[str, str]],
) -> dict[str, list[tuple[int, str]]]:
    approved: dict[str, list[tuple[int, str]]] = {}

    for row in page_rows:
        url = clean(row.get("url"))
        if not url or clean(row.get("track_status")).lower() != "track":
            continue

        variants: list[tuple[int, str]] = []
        seen: set[str] = set()
        for slot, column in enumerate(KEYWORD_COLUMNS, start=1):
            keyword = clean(row.get(column))
            normalized = keyword.casefold()
            if not keyword or normalized in seen:
                continue
            variants.append((slot, keyword))
            seen.add(normalized)

        if variants:
            approved[url] = variants

    return approved


def stable_offset(source_url: str, target_url: str, size: int) -> int:
    digest = hashlib.sha256(f"{source_url}|{target_url}".encode()).digest()
    return int.from_bytes(digest[:4], "big") % size


def choose_anchor(
    source_url: str,
    target_url: str,
    variants: list[tuple[int, str]],
    usage: Counter[tuple[str, str]],
) -> tuple[int, str]:
    supporting = [variant for variant in variants if variant[0] != 1]
    candidates = supporting or variants
    offset = stable_offset(source_url, target_url, len(candidates))
    rotated = candidates[offset:] + candidates[:offset]

    return min(
        rotated,
        key=lambda variant: (
            usage[(target_url, variant[1].casefold())],
            rotated.index(variant),
        ),
    )


def build_plan(
    actions: Iterable[dict[str, str]],
    approved: dict[str, list[tuple[int, str]]],
) -> tuple[list[dict[str, str]], list[str]]:
    planned: list[dict[str, str]] = []
    errors: list[str] = []
    usage: Counter[tuple[str, str]] = Counter()

    for row_number, action in enumerate(actions, start=2):
        source_url = clean(action.get("source_url"))
        target_url = clean(action.get("target_url"))
        variants = approved.get(target_url, [])

        if not variants:
            errors.append(
                f"row {row_number}: no approved keyword variants for {target_url}"
            )
            continue

        slot, anchor = choose_anchor(source_url, target_url, variants, usage)
        usage[(target_url, anchor.casefold())] += 1
        allowed = {keyword.casefold() for _, keyword in variants}

        planned.append(
            {
                **action,
                **{
                    column: next(
                        (
                            keyword
                            for keyword_slot, keyword in variants
                            if keyword_slot == index
                        ),
                        "",
                    )
                    for index, column in enumerate(KEYWORD_COLUMNS, start=1)
                },
                "selected_anchor": anchor,
                "selected_keyword_slot": f"keyword_{slot}",
                "anchor_validation": (
                    "approved" if anchor.casefold() in allowed else "rejected"
                ),
            }
        )

    return planned, errors


def write_plan(path: Path, rows: list[dict[str, str]]) -> None:
    if not rows:
        raise ValueError("Cannot write an empty anchor plan")

    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=list(rows[0]))
        writer.writeheader()
        writer.writerows(rows)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description=(
            "Select varied internal-link anchors exclusively from each target "
            "page's approved keyword_1..keyword_5 set."
        )
    )
    parser.add_argument("--page-map", required=True, type=Path)
    parser.add_argument("--actions", required=True, type=Path)
    parser.add_argument("--output", required=True, type=Path)
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    page_rows = read_csv(args.page_map)
    action_rows = read_csv(args.actions)
    approved = approved_keywords(page_rows)
    plan, errors = build_plan(action_rows, approved)

    if errors:
        for error in errors:
            print(error, file=sys.stderr)
        return 1

    write_plan(args.output, plan)
    distribution = Counter(row["selected_keyword_slot"] for row in plan)
    rejected = sum(row["anchor_validation"] != "approved" for row in plan)

    print(f"Planned anchors: {len(plan)}")
    print(
        "Keyword-slot distribution: "
        + ", ".join(f"{slot}={count}" for slot, count in sorted(distribution.items()))
    )
    print(f"Rejected anchors: {rejected}")
    print(f"Output: {args.output}")
    return 1 if rejected else 0


if __name__ == "__main__":
    raise SystemExit(main())
