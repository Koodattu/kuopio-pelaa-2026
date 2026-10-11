"""Illustrative shifted exponential through three user-selected anchors.
Run with the bundled Python runtime (ReportLab installed).
This is not a reconstruction of CurseForge's measured catalogue history.
"""
from datetime import date
from pathlib import Path
import math
import json
from reportlab.graphics.shapes import Drawing, Rect, Line, Circle, String, PolyLine
from reportlab.graphics import renderSVG
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = Path(__file__).resolve().parent
pdfmetrics.registerFont(TTFont('Segoe UI', 'C:/Windows/Fonts/segoeui.ttf'))
pdfmetrics.registerFont(TTFont('Segoe UI Bold', 'C:/Windows/Fonts/segoeuib.ttf'))
# Month-only anchors use the first day for plotting, not claimed announcement dates.
dates = [date(2009,5,17),date(2025,2,1),date(2026,8,1)]
t1,t2 = [(d-dates[0]).days/365.2425 for d in dates[1:]]
# y(t) = A * (exp(k*t)-1). Pure A*exp(k*t) cannot pass through zero.
lo,hi = 1e-8,2.0
for _ in range(100):
    k=(lo+hi)/2
    if math.expm1(k*t1)/math.expm1(k*t2) > 2/3: lo=k
    else: hi=k
k=(lo+hi)/2
A=300000/math.expm1(k*t2)
def value(t): return A*math.expm1(k*t)
assert abs(value(t1)-200000)<1e-6 and abs(value(t2)-300000)<1e-6
assert value(0)==0
W,H=1600,900
cream,ink,muted,blue,grid=[HexColor(c) for c in ['#f3efe2','#22261f','#65665d','#1769a5','#d5d1c5']]
d=Drawing(W,H);d.add(Rect(0,0,W,H,fillColor=cream,strokeColor=None))
def text(x,y,s,size=22,color=ink,font='Segoe UI',anchor='start'):
    d.add(String(x,y,s,fontName=font,fontSize=size,fillColor=color,textAnchor=anchor))
text(90,828,'Miltä kasvu voisi näyttää?',48,font='Segoe UI Bold')
text(90,780,'Minecraft / CurseForge · havainnollistava eksponentiaalinen sovitus',25,color=muted)
x0,y0,pw,ph=150,218,1210,475
maxy=330000
x=lambda t:x0+pw*t/t2
y=lambda v:y0+ph*v/maxy
for v in [0,100000,200000,300000]:
    d.add(Line(x0,y(v),x0+pw,y(v),strokeColor=grid,strokeWidth=1))
    text(x0-18,y(v)-8,f'{v:,}'.replace(',',' '),23,color=muted,anchor='end')
text(x0,727,'Projektien määrä',22,color=muted)
for yr in [2010,2015,2020,2025]:
    xx=x((date(yr,1,1)-dates[0]).days/365.2425)
    d.add(Line(xx,y0,xx,y0-8,strokeColor=grid))
    text(xx,y0-39,str(yr),23,color=muted,anchor='middle')
points=[]
for i in range(601):
    t=t2*i/600;points.extend([x(t),y(value(t))])
d.add(PolyLine(points,strokeColor=blue,strokeWidth=4,fillColor=None,strokeDashArray=[10,5]))
# The assumed zero is hollow; the supplied milestones are solid.
d.add(Circle(x(0),y(0),7,strokeColor=blue,strokeWidth=3,fillColor=cream))
for t,v in [(t1,200000),(t2,300000)]:d.add(Circle(x(t),y(v),8,fillColor=blue,strokeColor=cream,strokeWidth=2))
text(x0+12,y0+42,'0 · 2009',25,font='Segoe UI Bold')
text(x0+12,y0+14,'Oletettu lähtöpiste',20,color=muted)
text(x(t1)-28,y(200000)+32,'200 000',29,font='Segoe UI Bold',anchor='end')
text(x(t1)-28,y(200000)+4,'Helmikuu 2025',22,color=muted,anchor='end')
text(x(t2)+22,y(300000)+8,'300 000',29,font='Segoe UI Bold')
text(x(t2)+22,y(300000)-23,'Elokuu 2026',22,color=muted)
text(90,123,'Katkoviiva on mallinnettu — välivuosilta ei ole tässä havaintoja.',25,font='Segoe UI Bold')
text(90,84,'2009 = Minecraftin ensijulkaisu ja valittu nollataso, ei vahvistettu CurseForge-lähtöarvo.',20,color=muted)
text(90,49,'Lähteet: CurseForgen 200k- ja 300k-julkaisut. Otsikkoluvut eivät ole varmennettu mods-only-sarja.',19,color=muted)
renderSVG.drawToFile(d,str(ROOT/'curseforge-illustrative.svg'))
svg = ROOT / 'curseforge-illustrative.svg'
svg.write_text(svg.read_text('utf-8').replace('font-family: Segoe UI Bold;', 'font-family: Segoe UI; font-weight: bold;'), encoding='utf-8')
(ROOT/'curseforge-illustrative.json').write_text(json.dumps({
 'type':'Illustration, not measured historical time series',
 'anchors':[{'date':str(dt),'projects':v,'status':st} for dt,v,st in zip(dates,[0,200000,300000],['Assumed zero at Minecraft first public release; not CurseForge launch','User-supplied February 2025 milestone; first day is plotting convention','User-supplied August 2026 milestone; first day is plotting convention'])],
 'model':'A * (exp(k * years_since_start) - 1)', 'A':A,'k':k,
 'sources':['https://www.minecraft.net/en-us/about-minecraft','https://blog.curseforge.com/200k-mods-on-minecraft/','https://blog.curseforge.com/curseforge-august-newsletter-300k-minecraft-mods-pubg-is-in/'],
 'caveats':['No observations between anchors','Milestone category scope not verified as mods only','Smooth curvature is imposed by the chosen model; it does not demonstrate exponential growth']
},indent=2)+'\n',encoding='utf-8')
print('Saved SVG and model metadata; all three anchor checks passed.')
