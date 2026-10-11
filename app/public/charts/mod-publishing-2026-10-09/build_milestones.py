"""Render the five requested CurseForge milestones; no synthetic history exported.
The dashed curve is monotone cubic interpolation, not an exponential fit.
Run with the bundled ReportLab Python runtime.
"""
import csv
import json
from pathlib import Path
from reportlab.graphics import renderSVG
from reportlab.graphics.shapes import Drawing, Line, Circle, String, PolyLine
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = Path(__file__).resolve().parent
POINTS = [
    {'period':'2009','total':0,'kind':'Assumed zero','source':None},
    {'period':'2019-09','total':50000,'kind':'Community milestone report','source':'https://www.reddit.com/r/feedthebeast/comments/d0c08i/'},
    {'period':'2022-03','total':100000,'kind':'Community milestone report','source':'https://www.reddit.com/r/feedthebeast/comments/ts2bvy/today_we_hit_100000_minecraft_mods_on_curseforge/'},
    {'period':'2025-02','total':200000,'kind':'Official milestone announcement','source':'https://blog.curseforge.com/200k-mods-on-minecraft/'},
    {'period':'2026-08','total':300000,'kind':'Official milestone announcement','source':'https://www.reddit.com/r/CurseForge/comments/1vnc4an/300k_mods_on_curseforge_revisiting_the_most/'},
]
# Month resolution: 2009 is plotted at the start of the year as an explicit assumption.
xs = [0, 10*12+8, 13*12+2, 16*12+1, 17*12+7]
ys = [p['total'] for p in POINTS]
h = [b-a for a,b in zip(xs,xs[1:])]
secants = [(b-a)/width for a,b,width in zip(ys,ys[1:],h)]
slopes = [secants[0]]
for i in range(1,len(xs)-1):
    w1,w2 = 2*h[i]+h[i-1],h[i]+2*h[i-1]
    slopes.append((w1+w2)/(w1/secants[i-1]+w2/secants[i]))
slopes.append(secants[-1])
def interpolate(i,t):
    return ((2*t**3-3*t**2+1)*ys[i]+(t**3-2*t**2+t)*h[i]*slopes[i]
            +(-2*t**3+3*t**2)*ys[i+1]+(t**3-t**2)*h[i]*slopes[i+1])
for i in range(4):
    assert abs(interpolate(i,0)-ys[i])<1e-8 and abs(interpolate(i,1)-ys[i+1])<1e-8
samples=[(xs[i]+h[i]*j/60,interpolate(i,j/60)) for i in range(4) for j in range(61)]
assert all(a[1]<=b[1] for a,b in zip(samples,samples[1:]))

pdfmetrics.registerFont(TTFont('Segoe UI','C:/Windows/Fonts/segoeui.ttf'))
blue,muted,grid,cream=map(HexColor,['#1769a5','#66665c','#d1cfc2','#f3efe2'])
d=Drawing(720,225)
x=lambda v:95+604*v/xs[-1]
y=lambda v:44+169*v/330000
for v in [0,100000,200000,300000]:
    d.add(Line(95,y(v),699,y(v),strokeColor=grid,strokeWidth=.8))
    d.add(String(85,y(v)-6,f'{v:,}'.replace(',',' '),textAnchor='end',fontName='Segoe UI',fontSize=20,fillColor=muted))
for year in [2009,2015,2020,2026]:
    d.add(String(x((year-2009)*12),14,str(year),textAnchor='middle',fontName='Segoe UI',fontSize=20,fillColor=muted))
coords=[c for xx,yy in samples for c in (x(xx),y(yy))]
d.add(PolyLine(coords,strokeColor=blue,strokeWidth=3.2,strokeDashArray=[7,4],fillColor=None))
for i,(xx,yy) in enumerate(zip(xs,ys)):
    d.add(Circle(x(xx),y(yy),5,strokeColor=blue,strokeWidth=2,fillColor=cream if i==0 else blue))
renderSVG.drawToFile(d,str(ROOT/'minecraft-curseforge-milestones.svg'))
metadata={'platform':'CurseForge','metric':'Reported Minecraft project milestones, multiple content categories',
          'points':POINTS,'curve':'Monotone cubic Hermite interpolation; dashed; no observations between milestones',
          'limitations':['2009 zero is user-assumed, not a measured platform total or verified launch date.',
                         'Older reports include mods, modpacks, maps and resource packs; exact category coverage may differ over time.',
                         'Only milestone values are exported; interpolated samples are not observations.']}
(ROOT/'curseforge-milestones.json').write_text(json.dumps(metadata,indent=2)+'\n',encoding='utf-8')
with (ROOT/'curseforge-milestones.csv').open('w',encoding='utf-8-sig',newline='') as f:
    w=csv.writer(f);w.writerow(['Period','Projects','Evidence','Source'])
    for p in POINTS:w.writerow([p['period'],p['total'],p['kind'],p['source'] or ''])
print('Five milestones rendered; interpolation passes every anchor and is monotone.')

# Export only the Nexus columns displayed beside this milestone chart.
with (ROOT / 'cumulative-counts.csv').open(encoding='utf-8-sig', newline='') as f:
    rows = list(csv.reader(f))
columns = [0] + [i for i, name in enumerate(rows[0]) if '(Nexus Mods)' in name]
with (ROOT / 'nexus-cumulative-counts.csv').open('w', encoding='utf-8-sig', newline='') as f:
    csv.writer(f).writerows([[row[i] for i in columns] for row in rows])
