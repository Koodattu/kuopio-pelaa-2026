"""Export slide 36 as native editable Excel charts, with observed and modeled data separate."""
import calendar
import json
from datetime import datetime, timedelta
from pathlib import Path
import xlsxwriter

ROOT=Path(__file__).resolve().parent
OUT=ROOT.parents[3]/'exports'/'modien-kokonaismaara-kaaviot-korjattu.xlsx'
data=json.loads((ROOT/'cumulative-counts.json').read_text('utf-8'))
milestones=json.loads((ROOT/'curseforge-milestones.json').read_text('utf-8'))
wb=xlsxwriter.Workbook(OUT)
wb.set_properties({'title':'Modiprojektien kokonaismäärä — esityksen kaaviot','comments':'Four editable native Excel charts. Minecraft uses reported milestones and an explicitly separate interpolated curve.'})
cream='#F3EFE2';blue='#1769A5';ink='#22261F';muted='#66665C';grid='#D1CFC2'
header=wb.add_format({'bold':True,'bg_color':blue,'font_color':'white','font_name':'Segoe UI','text_wrap':True})
body=wb.add_format({'font_name':'Segoe UI','font_size':11})
num=wb.add_format({'font_name':'Segoe UI','num_format':'#,##0'})
datefmt=wb.add_format({'font_name':'Segoe UI','num_format':'mmm yyyy'})
wrap=wb.add_format({'font_name':'Segoe UI','text_wrap':True,'valign':'top'})
heading=wb.add_format({'font_name':'Segoe UI','font_size':20,'bold':True,'font_color':ink})
board=wb.add_worksheet('Kaaviot');board.hide_gridlines(2);board.set_column('A:Z',9)
board.merge_range('A1:X2','Modiprojektien kokonaismäärä',heading)
board.merge_range('A3:X3','Kopioi kaavio PowerPointiin. Kaaviot ovat muokattavia; lähdedata on omilla välilehdillään.',body)
board.merge_range('A43:X44','Minecraft: ilmoitetut merkkipaalut; 0/2009 oletus, katkoviiva interpoloitu. Muut pelit: Nexus Mods. Eri aika- ja pystyskaalat.',wrap)
board.set_landscape();board.set_paper(8);board.fit_to_pages(1,1);board.print_area('A1:X44')
notes=wb.add_worksheet('Ohje ja lähteet');notes.set_column('A:A',26);notes.set_column('B:B',115);notes.freeze_panes(1,0)
notes.write_row(0,0,['Aihe','Selite / lähde'],header)
rows=[
('PowerPoint','Valitse kaavio Kaaviot-välilehdellä, kopioi ja liitä PowerPointiin. Säilytä muokattavuus valitsemalla liittämisessä upotettu työkirja; kuvana liittäminen poistaa datan muokattavuuden.'),
('Minecraft','CurseForgen ilmoitetut Minecraft-projektien merkkipaalut. Mukana useita sisältötyyppejä, ei pelkkä mods-luokka. Vanhemmat pisteet ovat yhteisöraportteja; myöhemmät CurseForgen ilmoituksia.'),
('2009 nollataso','Käyttäjän valitsema oletus Minecraftin ensijulkaisuvuodelle. Ei mitattu CurseForge-luku tai vahvistettu alustan julkaisupäivä. Piirretty avoimena ympyränä.'),
('Minecraftin katkoviiva','Monotoninen kuutiointerpolaatio viiden pisteen läpi. Mallinnetut arvot ovat välilehdellä Minecraft - käyrä. Niitä ei pidä tulkita mitatuiksi kuukausimääriksi.'),
('Päivämäärät','Minecraftin kuukausipisteet on sijoitettu kuukauden alkuun; 2009-oletus vuoden alkuun. Nexus-sarjoissa päivämäärä on kuukauden viimeinen päivä.'),
('Nexus Mods','Nykyisin julkisten projektien luontipäivistä rekonstruoitu kumulatiivinen määrä, haettu 9.10.2026. Poistetut/piilotetut puuttuvat. Mukana käännöksiä ja yhteensopivuuskorjauksia. Ei tiedostopäivityksiä.'),
('Tulkinta','Aika- ja pystyskaalat vaihtelevat. Käyrät eivät osoita AI:n osuutta kasvuun. Kumulatiivinen kasvu ei yksin osoita eksponentiaalista kasvua.'),
('Nexus API','https://graphql.nexusmods.com/'),
]+[(p['period']+' / '+str(p['total']),p['source'] or 'Oletus') for p in milestones['points']]
for row,(a,b) in enumerate(rows,1):
    notes.write(row,0,a,body);notes.write(row,1,b,wrap);notes.set_row(row,45)

def serial(dt): return (dt-datetime(1899,12,30)).days

def chart_base(title,start,end,ymax,ystep,yearstep,date_axis=False):
    c=wb.add_chart({'type':'line'} if date_axis else {'type':'scatter','subtype':'straight'})
    c.set_title({'name':title,'name_font':{'name':'Segoe UI','size':16,'bold':True,'color':ink}})
    c.set_size({'width':720,'height':340})
    c.set_chartarea({'fill':{'color':cream},'border':{'none':True}})
    c.set_plotarea({'fill':{'color':cream},'border':{'none':True}})
    c.set_legend({'none':True})
    font={'name':'Segoe UI','size':11,'color':muted}
    x_axis={'min':serial(start),'max':serial(end),'num_format':'yyyy','num_font':font,'major_gridlines':{'visible':False},'line':{'color':grid},'major_tick_mark':'none'}
    if date_axis:
        x_axis.update({'date_axis':True,'major_unit':yearstep,'major_unit_type':'years','position_axis':'on_tick'})
    else:
        x_axis['major_unit']=365.2425*yearstep
    c.set_x_axis(x_axis)
    c.set_y_axis({'min':0,'max':ymax,'major_unit':ystep,'num_format':'#,##0','num_font':font,'major_gridlines':{'visible':True,'line':{'color':grid,'width':.6}},'line':{'none':True},'major_tick_mark':'none'})
    return c

m=wb.add_worksheet('Minecraft - pisteet');m.set_column('A:A',18);m.set_column('B:B',18);m.set_column('C:C',36);m.set_column('D:D',110);m.freeze_panes(1,0)
m.write_row(0,0,['Ajankohta','Projektit','Pisteen tyyppi','Lähde'],header)
dates=[datetime(2009,1,1),datetime(2019,9,1),datetime(2022,3,1),datetime(2025,2,1),datetime(2026,8,1)]
for row,(dt,p) in enumerate(zip(dates,milestones['points']),1):
    m.write_datetime(row,0,dt,datefmt);m.write_number(row,1,p['total'],num)
    m.write(row,2,'Oletettu nollataso' if row==1 else ('Yhteisöraportti' if row<4 else 'CurseForgen ilmoitus'),body)
    m.write(row,3,p['source'] or 'Käyttäjän valitsema oletus',body)
# Same monotone Hermite construction as the slide, with month-index coordinates.
xs=[0,128,158,193,211];ys=[0,50000,100000,200000,300000]
h=[b-a for a,b in zip(xs,xs[1:])];sec=[(b-a)/w for a,b,w in zip(ys,ys[1:],h)]
slopes=[sec[0]]
for i in range(1,4):
    w1,w2=2*h[i]+h[i-1],h[i]+2*h[i-1]
    slopes.append((w1+w2)/(w1/sec[i-1]+w2/sec[i]))
slopes.append(sec[-1])
curve=wb.add_worksheet('Minecraft - käyrä');curve.set_column('A:A',20);curve.set_column('B:B',26);curve.set_column('D:D',95);curve.freeze_panes(1,0)
curve.write_row(0,0,['Ajankohta','Interpoloitu määrä'],header)
curve.write('D1','MALLINNETTU KÄYRÄ — ei havaintoaineistoa',header)
curve.write('D2','Vain kaavion pehmeää katkoviivaa varten. Varsinaiset viisi pistettä ovat Minecraft - pisteet -välilehdellä.',wrap)
samples=[]
for i in range(4):
    for j in range(61):
        if i and j==0:continue
        t=j/60
        v=(2*t**3-3*t*t+1)*ys[i]+(t**3-2*t*t+t)*h[i]*slopes[i]+(-2*t**3+3*t*t)*ys[i+1]+(t**3-t*t)*h[i]*slopes[i+1]
        dt=dates[i]+(dates[i+1]-dates[i])*t
        samples.append((dt,v))
for row,(dt,v) in enumerate(samples,1):curve.write_datetime(row,0,dt,datefmt);curve.write_number(row,1,v,num)
assert all(a[1]<=b[1] for a,b in zip(samples,samples[1:]))
c=chart_base('Minecraft · CurseForge\nMerkkipaalut + interpolaatio; 0/2009 oletus',dates[0],dates[-1],330000,100000,5)
c.add_series({'name':'Interpoloitu yhteys','categories':[curve.name,1,0,len(samples),0],'values':[curve.name,1,1,len(samples),1],'line':{'color':blue,'width':2.5,'dash_type':'dash'},'marker':{'type':'none'}})
c.add_series({'name':'Ilmoitetut merkkipaalut','categories':[m.name,2,0,5,0],'values':[m.name,2,1,5,1],'line':{'none':True},'marker':{'type':'circle','size':6,'border':{'color':blue},'fill':{'color':blue}}})
c.add_series({'name':'Oletettu nollataso','categories':[m.name,1,0,1,0],'values':[m.name,1,1,1,1],'line':{'none':True},'marker':{'type':'circle','size':6,'border':{'color':blue},'fill':{'color':cream}}})
board.insert_chart('A5',c)
settings={'skyrim':('Skyrim Special Edition','L5',150000,50000,2),'stardew':('Stardew Valley','A24',40000,20000,2),'cyberpunk':('Cyberpunk 2077','L24',30000,10000,1)}
for g in data['series']:
    if g['key'] not in settings:continue
    name,anchor,ymax,step,yearstep=settings[g['key']]
    ws=wb.add_worksheet(name);ws.set_column('A:A',20);ws.set_column('B:B',22);ws.set_column('D:D',105);ws.freeze_panes(1,0)
    ws.write_row(0,0,['Kuukauden loppu','Projektit yhteensä'],header)
    ws.write('D1','Nexus Mods · julkinen katalogi luontipäivän mukaan',header)
    ws.write('D2',g['source'],body)
    dts=[]
    pairs=list(zip(g['months'],g['counts']))
    if g['key']=='cyberpunk':
        pairs=[(month,value) for month,value in pairs if month >= '2020-11']
        assert pairs[0]==('2020-11',0) and pairs[1][1]>0
        ws.write('D3','Alkaa marraskuusta 2020 (0 projektia); aiemmat nollakuukaudet poistettu.',wrap)
    for row,(month,v) in enumerate(pairs,1):
        yy,mm=map(int,month.split('-'));dt=datetime(yy,mm,calendar.monthrange(yy,mm)[1]);dts.append(dt)
        ws.write_datetime(row,0,dt,datefmt);ws.write_number(row,1,v,num)
    c=chart_base(name+' · Nexus Mods',dts[0] if g['key']=='cyberpunk' else datetime(dts[0].year,1,1),dts[-1],ymax,step,yearstep,date_axis=True)
    c.add_series({'name':'Projektit yhteensä','categories':[name,1,0,len(dts),0],'values':[name,1,1,len(dts),1],'line':{'color':blue,'width':2.5},'marker':{'type':'none'}})
    board.insert_chart(anchor,c)
board.activate();wb.close()
print(OUT)
