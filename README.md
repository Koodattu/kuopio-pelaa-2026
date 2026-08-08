# Kuopio Pelaa 2026

Suunnittelurepositorio Kuopio Pelaa 2026 -ohjelmalle **“Tekoäly tuli – nyt
kaikki on ohi... vai onko?”**. Ohjelma on kaksituntinen kokonaisuus: noin 60 minuutin
esitys, 15 minuutin tauko ja noin 45 minuutin osallistava
peliprototyyppityöpaja.

## Esitysprototyyppi

Repositoriossa on ensimmäinen tarkoituksella keskeneräinen selainesityksen
prototyyppi. Sen tehtävä on tehdä ohjelman rytmi, visuaalinen suunta ja siirtymä
esityksestä työpajaan koettaviksi ennen lopullisen sisällön kirjoittamista.

Käynnistä prototyyppi:

```powershell
npm install
npm run dev
```

Vite tulostaa selaimessa avattavan paikallisen osoitteen. Esityksessä on 27 diaa.
Niissä hahmotellaan avaus, live-gallupiin siirtyminen, kaksi pääesityksen osaa,
SuomiWoW CCG -demo, tauko ajastimineen sekä työpajan kolme kierrosta.

Keskeiset ohjaimet:

- `→`, `Space` tai `PageDown`: seuraava dia
- `←` tai `PageUp`: edellinen dia
- `F`: koko näyttö
- `N`: puhujan muistiinpanot ja lähteet
- `O`: kaikki diat
- `?`: näppäinohjeet
- `Home` / `End`: alkuun / loppuun

Puhelimella dioja voi vaihtaa pyyhkäisemällä. Kaksoisnapsautus avaa koko näytön.

Live Voting- ja AI Workshop Playground -osoitteet voidaan liittää kopioimalla
`.env.example` tiedostoksi `.env` ja täyttämällä muuttujat. SuomiWoW CCG:n
julkinen osoite on jo kytketty prototyyppiin.

## Suunnitelmat

- [Julkiset esittelytekstit](docs/program-copy.md) — vahvistettu nimi sekä
  verkkosivu- ja some-esittelyt merkkirajoineen.
- [Ohjelman kokonaisidea](docs/program-concept.md) — ohjelman kantava kysymys,
  tehtävä, yleisöpolku, päärajaukset ja seitsemän osan aikarunko.
- [Esityssuunnitelma](docs/presentation-plan.md) — viesti, rakenne, diat ja
  visuaalinen suunta.
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

Suunnitelmien lisäksi repositorio sisältää toimivan ensimmäisen
selainesitysprototyypin. Sen rakenne ja visuaalinen kieli ovat kokeiltavia, eivät
lopullisia. Pääesityksen kolme kuvaajaa käyttävät alkuperäisjulkaisuista
tarkistettuja ydinarvoja. Live Voting ja varsinainen työpajasovellus avataan
esityksestä erillisinä näkymänä, kun niiden tapahtumaosoitteet ovat valmiit.
