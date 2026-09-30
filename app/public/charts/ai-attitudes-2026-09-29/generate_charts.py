"""Render the presentation's research charts with ReportLab, Sharp and Pillow.

Usage: python generate_charts.py --node PATH --node-modules PATH
Existing files in this chart package are regenerated; the slide app is untouched.
"""

import argparse
import csv
import json
import os
from pathlib import Path
import shutil
import subprocess
from xml.sax.saxutils import escape
import zipfile

from PIL import Image
from reportlab.graphics import renderPDF, renderSVG
from reportlab.graphics.charts.barcharts import HorizontalBarChart, VerticalBarChart
from reportlab.graphics.shapes import Drawing, Line, Rect, String
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas


ROOT = Path(__file__).resolve().parent
WIDTH, HEIGHT = 1600, 900
BG = "#f0ece2"
INK = "#262a24"
MUTED = "#65685f"
GRID = "#d4d2c7"
RUST = "#a44827"
GREEN = "#3c7469"
PALE_RUST = "#cc997e"
NEUTRAL = "#c6cbbf"
FONT, BOLD = "Segoe UI", "Segoe UI Bold"
TEXT_BOUNDS = []


def text(d, x, y, value, size=24, color=INK, bold=False, anchor="start"):
    font = BOLD if bold else FONT
    value = str(value)
    width = pdfmetrics.stringWidth(value, font, size)
    left = x - width if anchor == "end" else x - width / 2 if anchor == "middle" else x
    TEXT_BOUNDS.append((value, left, y - size * .28, left + width, y + size))
    d.add(String(x, y, value, fontName=font, fontSize=size,
                 fillColor=HexColor(color), textAnchor=anchor))


def line(d, x1, y1, x2, y2, color=GRID, width=1, dash=None):
    d.add(Line(x1, y1, x2, y2, strokeColor=HexColor(color),
               strokeWidth=width, strokeDashArray=dash))


def box(d, x, y, w, h, color):
    d.add(Rect(x, y, w, h, fillColor=HexColor(color), strokeColor=None))


def base(item, eyebrow):
    TEXT_BOUNDS.clear()
    d = Drawing(WIDTH, HEIGHT)
    box(d, 0, 0, WIDTH, HEIGHT, BG)
    text(d, 88, 838, eyebrow, 19, MUTED, bold=True)
    text(d, 88, 764, item["title"], 46, bold=True)
    text(d, 88, 718, item["subtitle"], 24, MUTED)
    return d


def footer(d, source, notes):
    for index, note in enumerate(notes):
        text(d, 88, 119 - index * 27, note, 19, MUTED)
    line(d, 88, 66, 1512, 66)
    text(d, 88, 37, source, 17, MUTED)


def grid(d, x, y, width, height, vertical=True):
    for tick in range(0, 101, 20):
        if vertical:
            pos = x + width * tick / 100
            line(d, pos, y, pos, y + height, INK if tick == 0 else GRID,
                 1.4 if tick == 0 else 1)
            text(d, pos, y - 34, f"{tick} %", 20, MUTED, anchor="middle")
        else:
            pos = y + height * tick / 100
            line(d, x, pos, x + width, pos, INK if tick == 0 else GRID,
                 1.4 if tick == 0 else 1)
            text(d, x - 24, pos - 7, f"{tick} %", 20, MUTED, anchor="end")


def bars(d, values, x, y, width, height, colors, horizontal=True,
         bar_width=45, group_spacing=35, stacked=False):
    chart = HorizontalBarChart() if horizontal else VerticalBarChart()
    chart.x, chart.y, chart.width, chart.height = x, y, width, height
    chart.data = values
    chart.valueAxis.valueMin, chart.valueAxis.valueMax = 0, 100
    chart.valueAxis.valueStep = 20
    chart.valueAxis.visible = False
    chart.categoryAxis.visible = False
    chart.categoryAxis.reverseDirection = horizontal
    chart.categoryAxis.style = "stacked" if stacked else "parallel"
    chart.barWidth, chart.groupSpacing, chart.barSpacing = bar_width, group_spacing, 16
    chart.bars.strokeColor = None
    for index, color in enumerate(colors):
        chart.bars[index].fillColor = HexColor(color)
    d.add(chart.draw())
    positions = chart._barPositions
    # Check exported geometry against the numerical scale, independently of labels.
    for row, row_positions in zip(values, positions):
        for value, (_, _, w, h) in zip(row, row_positions):
            extent = w if horizontal else h
            expected = (width if horizontal else height) * value / 100
            assert abs(extent - expected) < 0.001, (value, extent, expected)
    return positions


def horizontal(item, labels, x, y, w, h, color, font_size=30, approximate=()):
    d = base(item, "PELIALAN AMMATTILAISET" if item["id"].startswith("02")
             else "PELAAJAT" if item["id"].startswith("04") else "KANSAINVÄLINEN NÄKÖKULMA • AI YLEISESTI")
    grid(d, x, y, w, h)
    positions = bars(d, [item["series"][0]["values"]], x, y, w, h, [color])[0]
    for index, (label, value, (bx, by, bw, bh)) in enumerate(zip(labels, item["series"][0]["values"], positions)):
        lines = label.split("\n")
        center = by + bh / 2
        for j, label_line in enumerate(lines):
            baseline = center + (len(lines) - 1) * font_size * .62 - j * font_size * 1.24 - font_size * .32
            text(d, 88, baseline, label_line, font_size, bold=True)
        prefix = "≈ " if index in approximate else ""
        text(d, bx + bw + 18, center - font_size * .34,
             f"{prefix}{value} %", font_size + 2, bold=True)
    return d


def render_chart(item):
    chart_id = item["id"][:2]
    if chart_id == "01":
        d = base(item, "PELIALAN AMMATTILAISET")
        x, y, w, h = 186, 217, 1240, 413
        box(d, x + 2 * w / 3, y, w / 3, h, "#e8e3d7")
        grid(d, x, y, w, h, vertical=False)
        for legend_x, color, label in [(186, RUST, "Kielteinen vaikutus"), (560, GREEN, "Myönteinen vaikutus")]:
            box(d, legend_x, 667, 19, 19, color)
            text(d, legend_x + 31, 666, label, 23)
        values = [series["values"] for series in item["series"]]
        positions = bars(d, values, x, y, w, h, [RUST, GREEN], horizontal=False,
                         bar_width=66, group_spacing=150)
        for row, row_positions in zip(values, positions):
            for value, (bx, by, bw, bh) in zip(row, row_positions):
                text(d, bx + bw / 2, by + bh + 15, f"{value} %", 30, bold=True, anchor="middle")
        for index, year in enumerate(item["categories"]):
            text(d, x + w * (index + .5) / 3, 172, year, 28, bold=True, anchor="middle")
        line(d, x + 2 * w / 3, y - 4, x + 2 * w / 3, y + h + 5, MUTED, 1.4, [6, 6])
        text(d, x + w * 2.5 / 3, 658, "Kysely muuttui", 21, MUTED, anchor="middle")
        footer(d, "Lähde: GDC State of the Game Industry 2026, s. 5 ja 22 • gdconf.com", [
            "2026: kohderyhmä ja kysely muuttuivat. Vuosivertailu on suuntaa antava.",
            "Näytetään vain myönteiset ja kielteiset arviot. Eri vuosina vastasivat eri ihmiset."])
    elif chart_id == "02":
        d = horizontal(item, ["Pelinkehitysstudiot", "Julkaisu, tukipalvelut\nja markkinointi / PR"],
                       548, 267, 878, 302, GREEN)
        text(d, 88, 629, "Koko kyselyssä", 25, MUTED)
        text(d, 294, 629, f"{item['overall_percent']} %", 35, GREEN, bold=True)
        footer(d, "Lähde: GDC State of the Game Industry 2026 • gdconf.com", [
            "Osuudet lasketaan kunkin työpaikkaryhmän vastaajista. 58 % koskee yhdistettyä ryhmää.",
            "Käyttöaste, ei hyväksyntä. Koko kyselyssä yli 2 300 vastaajaa."])
    elif chart_id == "03":
        d = base(item, "PELAAJAT")
        text(d, 88, 542, f"{item['negative_total_percent']} %", 108, RUST, bold=True)
        text(d, 443, 594, "suhtautui kielteisesti", 37, bold=True)
        text(d, 443, 544, "GenAI:n käyttöön peleissä", 37)
        values = item["series"][0]["values"]
        colors = [RUST, PALE_RUST, NEUTRAL]
        positions = bars(d, [[value] for value in values], 88, 340, 1424, 114,
                         colors, bar_width=100, group_spacing=0, stacked=True)
        for index, (value, row) in enumerate(zip(values, positions)):
            bx, by, bw, bh = row[0]
            text(d, bx + bw / 2, by + bh / 2 - 14, f"{value} %", 44,
                 BG if index == 0 else INK, bold=True, anchor="middle")
        for lx, color, label in zip([88, 660, 1130], colors, item["categories"]):
            box(d, lx, 271, 22, 22, color)
            text(d, lx + 35, 271, label, 25)
        text(d, 1165, 229, "sisältää neutraalit", 19, MUTED)
        text(d, 1165, 204, "ja myönteiset vastaukset", 19, MUTED)
        footer(d, "Lähde: Quantic Foundry, 18.12.2025 • quanticfoundry.com/2025/12/18/gen-ai/", [
            "Vapaaehtoinen otos, n = 1 799; painottuu aktiivisiin PC- ja konsolipelaajiin.",
            "22 % ja 15 % on laskettu lähteen pyöristetyistä kokonaisluvuista."])
    elif chart_id == "04":
        d = horizontal(item, ["Dialogi", "Tehtävät (questit)", "Dynaaminen\nvaikeustason säätö"],
                       515, 237, 911, 421, RUST, approximate=(2,))
        footer(d, "Lähde: Quantic Foundry, 18.12.2025 • quanticfoundry.com/2025/12/18/gen-ai/", [
            "Vapaaehtoinen otos, n = 1 799. Kysymykset koskivat GenAI:n käyttöä näihin tarkoituksiin.",
            "Vaikeustaso: 100 − 26 % myönteisiä − 24 % neutraaleja ≈ 50 % kielteisiä."])
    else:
        d = horizontal(item, item["categories"], 390, 186, 1036, 490, GREEN, font_size=26)
        text(d, 88, 677, "Samaa mieltä", 21, MUTED)
        footer(d, "Lähde: Ipsos AI Monitor 2026, s. 13 ja 48 • 20.3.–3.4.2026 • Valitut maat", [
            "Yleinen AI-asenne, ei pelien GenAI:n hyväksyntä. Koko tutkimus: n = 23 532 / 32 maata.",
            "Kiinan ja Intian otokset painottuvat kaupungistuneempaan, koulutetumpaan ja/tai varakkaampaan väestöön."])

    for label, left, bottom, right, top in TEXT_BOUNDS:
        assert 25 <= left < right <= WIDTH - 25 and 15 <= bottom < top <= HEIGHT - 15, (item["id"], label, left, bottom, right, top)
    return d


SHARP_EXPORT = r"""
const fs = require('fs');
const path = require('path');
const root = process.argv[1];
const modules = process.argv[2];
const sharp = require(require.resolve('sharp', {paths: [modules, process.cwd()]}));
(async () => {
  for (const file of fs.readdirSync(root).filter(f => /^0[1-5]-.*\.svg$/.test(f))) {
    await sharp(path.join(root, file), {density: 172.8})
      .resize(3840, 2160).png().toFile(path.join(root, file.replace('.svg', '.png')));
  }
})().catch(error => { console.error(error); process.exit(1); });
"""


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--node", default=shutil.which("node"))
    parser.add_argument("--node-modules", default=os.environ.get("NODE_PATH", ""))
    parser.add_argument("--font-dir", type=Path, default=Path(os.environ.get("WINDIR", "C:/Windows")) / "Fonts")
    args = parser.parse_args()
    if not args.node:
        parser.error("Node.js is needed for Sharp PNG export; pass --node.")
    pdfmetrics.registerFont(TTFont(FONT, str(args.font_dir / "segoeui.ttf")))
    pdfmetrics.registerFont(TTFont(BOLD, str(args.font_dir / "segoeuib.ttf")))
    dataset = json.loads((ROOT / "data.json").read_text(encoding="utf-8"))
    drawings = []
    for item in dataset["charts"]:
        assert all(0 <= value <= 100 for series in item["series"] for value in series["values"])
        assert all(len(series["values"]) == len(item["categories"]) for series in item["series"])
        drawing = render_chart(item)
        drawings.append(drawing)
        svg = renderSVG.drawToString(drawing)
        # ReportLab font names are PDF identifiers; SVG needs a family and weight.
        svg = svg.replace("font-family: Segoe UI Bold;", "font-family: 'Segoe UI', sans-serif; font-weight: 700;")
        svg = svg.replace("font-family: Segoe UI;", "font-family: 'Segoe UI', sans-serif; font-weight: 400;")
        svg = svg.replace("\t<title>...</title>", "").replace("\t<desc>...</desc>", "")
        desc = " ".join([item["subtitle"], item["population"], *item["notes"],
                         *[f"{s['title']}: {s['url']}" for s in item["sources"]]])
        pos = svg.index(">", svg.index("<svg")) + 1
        svg = svg[:pos] + f"<title>{escape(item['title'])}</title><desc>{escape(desc)}</desc>" + svg[pos:]
        (ROOT / f"{item['id']}.svg").write_text(svg, encoding="utf-8")

    subprocess.run([args.node, "-e", SHARP_EXPORT, str(ROOT), args.node_modules], check=True)
    pdf = Canvas(str(ROOT / "kaikki-kuvaajat.pdf"), pagesize=(WIDTH, HEIGHT))
    pdf.setTitle("AI ja pelit – tutkimuskuvaajat")
    pdf.setAuthor("Kuopio pelaa 2026")
    for drawing in drawings:
        renderPDF.draw(drawing, pdf, 0, 0)
        pdf.showPage()
    pdf.save()

    with (ROOT / "data.csv").open("w", newline="", encoding="utf-8-sig") as handle:
        writer = csv.writer(handle)
        writer.writerow(["chart", "category", "series", "percent", "derived", "formula", "source_url"])
        for item in dataset["charts"]:
            derived = {d["category"]: d["formula"] for d in item.get("derivations", [])}
            for series in item["series"]:
                for category, value in zip(item["categories"], series["values"]):
                    writer.writerow([item["id"], category, series["label"], value,
                                     category in derived, derived.get(category, ""), item["sources"][0]["url"]])
            for key, label in [("overall_percent", "Kaikki vastaajat"),
                               ("negative_total_percent", "Kielteiset yhteensä")]:
                if key in item:
                    writer.writerow([item["id"], label, "Erillinen kokonaisluku",
                                     item[key], False, "", item["sources"][0]["url"]])

    preview = Image.new("RGB", (1600, 1350), BG)
    for index, item in enumerate(dataset["charts"]):
        with Image.open(ROOT / f"{item['id']}.png") as source:
            assert source.size == (3840, 2160)
            tile = source.convert("RGB").resize((800, 450), Image.Resampling.LANCZOS)
        offset = (400, 900) if index == 4 else ((index % 2) * 800, (index // 2) * 450)
        preview.paste(tile, offset)
    preview.save(ROOT / "esikatselu.png")
    package = ROOT / "ai-pelit-kuvaajat.zip"
    with zipfile.ZipFile(package, "w", zipfile.ZIP_DEFLATED) as archive:
        for path in sorted(ROOT.iterdir()):
            if path.suffix in {".svg", ".png", ".pdf", ".json", ".csv", ".md", ".py"}:
                archive.write(path, path.name)
    print(f"Rendered {len(drawings)} charts: SVG, 3840×2160 PNG, PDF, CSV and ZIP.")


if __name__ == "__main__":
    main()
