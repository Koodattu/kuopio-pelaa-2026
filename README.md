# Kuopio Pelaa 2026

Suunnittelurepositorio Kuopio Pelaa 2026 -ohjelmalle **“Tekoäly tuli – nyt
kaikki on ohi... vai onko?”**. Ohjelma on kaksituntinen kokonaisuus: noin 60 minuutin
esitys, 15 minuutin tauko ja noin 45 minuutin osallistava
peliprototyyppityöpaja.

**Ajantasainen sisältörunko:** [esityksen pääsuunnitelma](docs/presentation-plan.md)
sisältää tutkimuskierrosten pohjalta aikataulun, dialuonnoksen,
pääesimerkit ja uuden työpajakulun. Toteutussuunta on 6.9.2026 alkaen
HTML ensin. [Visuaalinen ja kerronnallinen ohje](docs/presentation-direction.md)
ohjaa 6.9.2026 rakennettua uutta selainesitystä.
[Ajo-ohje](docs/presentation-runbook.md) sisältää ohjaimet, tapahtumakytkennät,
aineiston alkuperän ja varapolut.

## Selainesitys

Uusi selainesitys kattaa kahden tunnin ohjelman huoneen näkemyksistä
Astra-esimerkkiin, SuomiWoW CCG:hen, pelaajan kokemukseen ja vastuuseen
sekä osallistujien omaan kokeiluun. Visuaalinen suunta yhdistää vaaleat
selitysnäkymät, tummat peliesimerkit ja muutaman puhujan ohjaaman animaation.

Käynnistä esitys:

```powershell
npm install
npm run dev
```

Vite tulostaa selaimessa avattavan paikallisen osoitteen. Esityksessä on 35
näkymää ja 37 erillistä sisältöpaljastusta, yhteensä 72 sisältötilaa.
Mukana ovat kahdeksan kysymyksen gallup-varapolku, kaksi tilastokuvaajaa,
oikeat peliesimerkkien kuvat sekä tauon ja työpajan ajastimet.

Keskeiset ohjaimet:

- `→`, `Space` tai `PageDown`: seuraava paljastus tai dia
- `←` tai `PageUp`: edellinen paljastus tai dia
- `F`: koko näyttö
- `N`: puhujan muistiinpanot ja lähteet
- `P`: erillinen synkronoitu puhujanäkymä
- `O`: kaikki diat
- `B`: pimennä tai palauta esitys
- `?`: näppäinohjeet
- `Home` / `End`: alkuun / loppuun

Puhelimella dioja voi vaihtaa pyyhkäisemällä. Koko näyttö avautuu F:llä tai
alareunan painikkeella. Esitys säilyttää 16:9-kuvasuhteen.

Live Voting- ja AI Workshop Playground -osoitteet voidaan liittää kopioimalla
`.env.example` tiedostoksi `.env` ja täyttämällä muuttujat. Työpajan lyhyt URL
ja etukäteen luotu QR-kuva ovat erillisiä asetuksia, jotta niitä ei julkaista
ennen tuotanto-osoitteen hyväksyntää. SuomiWoW CCG:n julkinen osoite on jo
kytketty esitykseen.

## Suunnitelmat

Sisältöä ja ajoitusta koskevissa eroissa noudatetaan pääsuunnitelmaa.
Vanhemmat erillissuunnitelmat säilyvät tausta- ja työkaluaineistona.

- [Esityksen pääsuunnitelma](docs/presentation-plan.md) — ajantasainen viesti,
  120 minuutin rakenne, diojen sisältöluonnos, lähderajat ja HTML-version suunta.
- [Visuaalinen ja kerronnallinen ohje](docs/presentation-direction.md) —
  sommittelu, tarkoituksellinen liike, referenssit ja kolmen kohtauksen pilotti.
- [HTML-esityksen ajo-ohje](docs/presentation-runbook.md) — käynnistys,
  puhujanäkymä, aineiston alkuperä, tapahtumakytkennät ja varapolut.
- [Tutkimuskierros 5.9.2026](docs/research-pass-2026-09-05.md) — päivitetty
  tutkimuspohja ja sisältösuositukset.
- [Astra ja yhden promptin pelit](docs/astra-one-shot-games-research-2026-09-05.md)
  — alkuperäiset esimerkit, tuotantotavan rajaus ja pelaamisen tarkoitus.

- [Julkiset esittelytekstit](docs/program-copy.md) — vahvistettu nimi sekä
  verkkosivu- ja some-esittelyt merkkirajoineen.
- [Ohjelman kokonaisidea](docs/program-concept.md) — ohjelman kantava kysymys,
  tehtävä, yleisöpolku, päärajaukset ja seitsemän osan aikarunko.
- [Esityksen toimituksellinen selkäranka](docs/editorial-narrative-blueprint.md)
  — kriittinen suositus pääargumentista, yleisön matkasta, dramaturgiasta sekä
  pidettävän ja leikattavan sisällön järjestyksestä.
- [GenAI-kokemuksen arviointi](docs/ai-experience-and-evaluation.md) —
  ilmais- ja maksullisten palvelujen tutkimusraja, neljän minuutin esitysjakso,
  gallup-vaihtoehdot ja yhteys työpajaan.
- [Game jamien GenAI-säännöt](docs/game-jam-ai-rules.md) — virallisten
  sääntöjen vertailu, kriittiset rajat ja mahdollinen työpajasilta.
- [Toivolanranta-referenssin rajaus](docs/toivolanranta-reference-adaptation.md)
  — mitä toisesta esityksestä sovelletaan ja mitä pidetään tarkoituksella
  erillään.
- [Työpajasuunnitelma](docs/workshop-plan.md) — osallistujapolku,
  fasilitointi, promptit ja varasuunnitelmat.
- [AI Workshop Playground -kytkentä](docs/workshop-playground-plan.md) —
  työpajatyökalun todelliset ominaisuudet, osallistujapolku, käyttörajat,
  tietosuoja ja tuotantotarkistus.
- [Live Voting -suunnitelma](docs/live-voting-plan.md) — 15 minuutin
  yleisöäänestys, kysymykset, käyttöjärjestys ja varapolku.
- [SuomiWoW-showcase](docs/project-showcase-plan.md) — oman projektin ja sen
  CCG-ominaisuuden kymmenen minuutin osuus, johon sisältyy enintään kahdeksan
  minuutin live-demo.
- [Web-toteutussuunnitelma](docs/web-presentation-implementation-plan.md) —
  rajaus, tekniset valinnat, arkkitehtuuri ja toteutusvaiheet.
- [Lähdepankki](docs/source-bank.md) — suunnitellut väitteet, kuvaajat,
  lähteet ja tarkistettavat asiat.
- [Tutkimus- ja kuvaajasuunnitelma](docs/research-and-chart-plan.md) — valitut
  faktat, kolme pääkuvaajaa, lähdekritiikki ja hylätyt vertailut.

## Tila

Esitys on rakennettu ja tarkistettu selaimessa. Sisältö, lähteet ja puhujan
ohjeet ovat tiedostossa `src/scenes.tsx`, esityksen ohjaus tiedostossa
`src/presentation.tsx` ja visuaalinen toteutus tiedostossa `src/styles.css`.
Paikallinen kahden version keräilykokeilu löytyy tiedostosta
`public/workshop-example.html`.

Tapahtuman live-gallupin ja generointityöpajan osoitteet pitää vielä kytkeä.
Niiden puuttuessa esitys käyttää käsiäänestystä ja yhteistä paikallista
kokeilua. Koko puheen harjoittelu sekä tapahtuman projektorin, verkon ja
äänentoiston tarkistus kuuluvat tapahtumavalmisteluun.
