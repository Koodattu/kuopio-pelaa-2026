"""Render the slide's illustrative electricity comparison from explicit assumptions."""
from pathlib import Path
import json
from html import escape

ROOT = Path(__file__).resolve().parent
d = json.loads((ROOT / "assumptions.json").read_text(encoding="utf-8"))
requests = d["participants"] * d["requests_per_person"]
coefficient = d["assumed_Wh_per_model_call"]
rows = [
    ("Työpajan tapainen editointi", f"{requests} pyyntöä × {d['workshop_calls_per_request']} mallikutsu", requests*d["workshop_calls_per_request"]*coefficient/1000, "#1769a5"),
    ("Agenttiesimerkki", f"{requests} tehtävää × {d['illustrative_agent_calls_per_task']} mallikutsua", requests*d["illustrative_agent_calls_per_task"]*coefficient/1000, "#47785a"),
    ("Luokan LED-valot", f"{d['assumed_LED_luminaires']} × {d['assumed_watts_per_luminaire']} W × {d['hours_of_lighting']} h", d["assumed_LED_luminaires"]*d["assumed_watts_per_luminaire"]*d["hours_of_lighting"]/1000, "#a78632"),
]
assert [round(row[2],2) for row in rows] == [0.15,1.50,0.80]
x0,width,maximum = 455,790,1.6
svg = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1424 340" role="img" aria-labelledby="title desc">',
       '<title id="title">Sähkönkulutuksen laskuesimerkki, kWh</title>',
       '<desc id="desc">Kaikki arvot ovat laskuoletuksia, eivät työpajan mittauksia. Yhden kutsun editit 0,15; kymmenen kutsun agenttiesimerkki 1,50; LED-valot 0,80 kilowattituntia.</desc>',
       '<g font-family="Segoe UI,Arial,sans-serif" fill="#20231f">']
for tick in [0,0.5,1,1.5]:
    x=x0+tick/maximum*width
    label=str(tick).replace('.',',')
    svg.append(f'<path d="M{x} 22 V286" stroke="#d1cfc2"/><text x="{x}" y="321" text-anchor="middle" font-size="22" fill="#66665c">{label}</text>')
svg.append('<text x="1350" y="321" font-size="22" fill="#66665c">kWh</text>')
for index,(label,detail,value,color) in enumerate(rows):
    y=34+index*90
    svg.append(f'<text x="0" y="{y+21}" font-size="29" font-weight="700">{escape(label)}</text>')
    svg.append(f'<text x="0" y="{y+52}" font-size="22" fill="#66665c">{escape(detail)}</text>')
    w=value/maximum*width
    svg.append(f'<rect x="{x0}" y="{y}" width="{w}" height="57" fill="{color}"/>')
    svg.append(f'<text x="{x0+w+17}" y="{y+38}" font-size="31" font-weight="750">{value:.2f}</text>'.replace(f'{value:.2f}',f'{value:.2f}'.replace('.',',')))
svg.append('</g></svg>')
(ROOT/'comparison.svg').write_text('\n'.join(svg)+'\n',encoding='utf-8')
print('Rendered illustrative kWh:', [row[2] for row in rows])
