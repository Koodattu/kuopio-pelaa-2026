"""Fetch public monthly mod-project counts, then render the four slide charts.

Usage: python build_charts.py --refresh   # refresh the dated source snapshot
       python build_charts.py             # redraw from the saved snapshot

Nexus timestamp format follows Nexus-Mods/discord-bot's v2-latestmods example.
Only public catalogue counts are queried; no API keys or accounts are used.
"""
import argparse
import csv
import json
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parent
NEXUS = "https://api.nexusmods.com/v2/graphql"
MODRINTH = "https://api.modrinth.com/v2/search"
AGENT = "KuopioPelaaPresentationResearch/1.0"
MONTHS = [f"{year}-{month:02d}" for year in range(2022, 2027)
          for month in range(1, 13) if (year, month) <= (2026, 9)]
GAMES = [
    {"key": "minecraft", "name": "Minecraft", "platform": "Modrinth",
     "source": "https://docs.modrinth.com/api/operations/searchprojects/"},
    {"key": "skyrim", "name": "Skyrim Special Edition", "platform": "Nexus Mods", "id": 1704,
     "source": "https://www.nexusmods.com/skyrimspecialedition/about/stats"},
    {"key": "stardew", "name": "Stardew Valley", "platform": "Nexus Mods", "id": 1303,
     "source": "https://www.nexusmods.com/stardewvalley/about/stats"},
    {"key": "cyberpunk", "name": "Cyberpunk 2077", "platform": "Nexus Mods", "id": 3333,
     "source": "https://www.nexusmods.com/cyberpunk2077/about/stats"},
]


def bounds(month):
    start = datetime.fromisoformat(month + "-01").replace(tzinfo=timezone.utc)
    end = datetime(start.year + (start.month == 12), start.month % 12 + 1, 1, tzinfo=timezone.utc)
    return int(start.timestamp()), int(end.timestamp())


def read_json(url, payload=None):
    headers = {"User-Agent": AGENT}
    body = None
    if payload is not None:
        body = json.dumps(payload).encode()
        headers["Content-Type"] = "application/json"
    with urlopen(Request(url, data=body, headers=headers), timeout=25) as response:
        result = json.load(response)
    if "errors" in result:
        raise RuntimeError(json.dumps(result["errors"])[:1500])
    return result


def nexus_filter(game_id, month):
    start, end = bounds(month)
    return {"op": "AND", "filter": [
        {"gameId": [{"value": str(game_id), "op": "EQUALS"}]},
        {"createdAt": [{"value": str(start), "op": "GTE"}]},
        {"createdAt": [{"value": str(end), "op": "LT"}]},
        {"status": [{"value": "published", "op": "EQUALS"}]},
    ]}


def collect_game(game, months=None):
    months = MONTHS if months is None else months
    counts = []
    if game["platform"] == "Modrinth":
        for month in months:
            start, end = bounds(month)
            facets = [["project_type:mod"], [f"created_timestamp>={start}"], [f"created_timestamp<{end}"]]
            url = MODRINTH + "?" + urlencode({"limit": 1, "index": "newest", "facets": json.dumps(facets)})
            data = read_json(url)
            for hit in data["hits"]:
                assert hit["date_created"][:7] == month, (month, hit["date_created"])
            counts.append(data["total_hits"])
    else:
        # Small batches reduce requests without pulling individual mod catalogues.
        for offset in range(0, len(months), 6):
            batch = months[offset:offset + 6]
            declarations = ", ".join(f"$f{i}: ModsFilter" for i in range(len(batch)))
            fields = " ".join(f"m{i}: mods(filter:$f{i}, count:1, viewUploaderHidden:false) "
                              "{ totalCount nodes { createdAt status game { id } } }" for i in range(len(batch)))
            variables = {f"f{i}": nexus_filter(game["id"], month) for i, month in enumerate(batch)}
            data = read_json(NEXUS, {"query": f"query MonthlyCounts({declarations}) {{ {fields} }}",
                                    "variables": variables})["data"]
            for i, month in enumerate(batch):
                item = data[f"m{i}"]
                for node in item["nodes"]:
                    assert node["createdAt"][:7] == month, (month, node["createdAt"])
                    assert node["status"] == "published"
                    assert node["game"]["id"] == game["id"]
                counts.append(item["totalCount"])
    assert len(counts) == len(months)
    assert all(isinstance(value, int) and value >= 0 for value in counts)
    print(f"Fetched {game['name']}: {len(counts)} months; first={counts[0]}, last={counts[-1]}, peak={max(counts)}", flush=True)
    return {**game, "counts": counts}


def collect():
    with ThreadPoolExecutor(max_workers=3) as pool:
        series = list(pool.map(collect_game, GAMES))
    snapshot = {
        "retrieved_at": datetime.now(timezone.utc).isoformat(),
        "period": "2022-01 through 2026-09; complete calendar months, UTC",
        "metric": "Currently publicly searchable mod projects grouped by original platform creation month; one project counted once",
        "nexus_scope": "Published projects, uploader-hidden excluded; translations and compatibility patches included; file updates excluded",
        "modrinth_scope": "Public search, project_type=mod; excludes modpacks/resourcepacks/shaders; creation date is specific to Modrinth",
        "limitations": [
            "Deleted, hidden or delisted projects are absent; this is a retrospective catalogue snapshot, not a submission log.",
            "A platform creation date can represent an existing project newly brought to that platform.",
            "Games and platform moderation policies differ. The series do not identify AI usage or establish causation.",
            "No interpolation, exponential fit or synthetic values are used."
        ],
        "api_documentation": ["https://graphql.nexusmods.com/", "https://docs.modrinth.com/api/operations/searchprojects/"],
        "months": MONTHS, "series": series,
    }
    (ROOT / "monthly-counts.json").write_text(json.dumps(snapshot, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    with (ROOT / "monthly-counts.csv").open("w", encoding="utf-8-sig", newline="") as file:
        writer = csv.writer(file)
        writer.writerow(["Month"] + [f"{game['name']} ({game['platform']})" for game in series])
        for i, month in enumerate(MONTHS):
            writer.writerow([month] + [game["counts"][i] for game in series])
    return snapshot


def render(snapshot, suffix=""):
    """Render saved monthly or cumulative series without changing their values."""
    import math
    from reportlab.graphics import renderSVG
    from reportlab.graphics.charts.lineplots import LinePlot
    from reportlab.graphics.shapes import Drawing, Circle
    from reportlab.lib.colors import HexColor
    from reportlab.pdfbase import pdfmetrics
    from reportlab.pdfbase.ttfonts import TTFont

    pdfmetrics.registerFont(TTFont("Segoe UI", "C:/Windows/Fonts/segoeui.ttf"))
    blue, muted, grid = map(HexColor, ["#1769a5", "#66665c", "#d1cfc2"])
    for game in snapshot["series"]:
        values = game["counts"]
        # Three to four readable major intervals, with every vertical scale starting at zero.
        rough_step = max(values) / 3
        magnitude = 10 ** math.floor(math.log10(rough_step))
        step = next(candidate * magnitude for candidate in [1, 2, 2.5, 5, 10]
                    if candidate * magnitude >= rough_step)
        upper = math.ceil(max(values) * 1.04 / step) * step
        drawing = Drawing(720, 225)
        chart = LinePlot()
        chart.x, chart.y, chart.width, chart.height = (95, 44, 604, 169) if suffix else (75, 44, 624, 169)
        chart.data = [list(enumerate(values))]
        chart.joinedLines = 1
        chart.lines[0].strokeColor = blue
        chart.lines[0].strokeWidth = 3.2
        chart.gridFirst = True
        for axis in [chart.xValueAxis, chart.yValueAxis]:
            axis.labels.fontName = "Segoe UI"
            axis.labels.fontSize = 20
            axis.labels.fillColor = muted
            axis.visibleTicks = False
        chart.xValueAxis.valueMin = 0
        chart.xValueAxis.valueMax = len(values) - 1
        months = game.get("months", snapshot["months"])
        year_step = 2 if len(months) > 84 else 1
        first_year = int(months[0][:4])
        chart.xValueAxis.valueSteps = [i for i, month in enumerate(months)
                                      if month.endswith("-01") and (int(month[:4]) - first_year) % year_step == 0]
        chart.xValueAxis.labelTextFormat = lambda value: months[int(value)][:4]
        chart.xValueAxis.strokeColor = grid
        chart.xValueAxis.strokeWidth = 1
        chart.xValueAxis.labels.dy = -11
        chart.yValueAxis.valueMin = 0
        chart.yValueAxis.valueMax = upper
        chart.yValueAxis.valueSteps = [i * step for i in range(round(upper / step) + 1)]
        chart.yValueAxis.labelTextFormat = lambda value: f"{int(value):,}".replace(",", " ")
        chart.yValueAxis.visibleAxis = False
        chart.yValueAxis.visibleGrid = True
        chart.yValueAxis.gridStrokeColor = grid
        chart.yValueAxis.gridStrokeWidth = .8
        chart.yValueAxis.labels.dx = -10
        drawing.add(chart)
        drawing.add(Circle(chart.x + chart.width, chart.y + values[-1] / upper * chart.height,
                           4.2, fillColor=blue, strokeColor=None))
        renderSVG.drawToFile(drawing, str(ROOT / f"{game['key']}{suffix}.svg"))
    print(f"Rendered {len(snapshot['series'])} SVG line charts (suffix={suffix!r}).", flush=True)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--refresh", action="store_true")
    args = parser.parse_args()
    snapshot = collect() if args.refresh else json.loads((ROOT / "monthly-counts.json").read_text(encoding="utf-8"))
    render(snapshot)
