# HTML-esityksen ajo-ohje

## Nykyinen versio

6.9.2026 rakennettu HTML-esitys sisältää 35 näkymää ja yhteensä 72
sisältötilaa, eli 37 erikseen käynnistettävää paljastusta. Se kattaa koko
120 minuutin ohjelman pääsuunnitelman mukaan. Neljä gallup-paridiaa toimivat
käsiäänestyksenä tai puhujan tukena; niitä ei käydä uudelleen läpi live-gallupin
jälkeen. Aikataulu näkyy puhujamuistiinpanoissa ja dianäkymässä.

## Käynnistys

```powershell
npm run dev
```

Avaa Viten ilmoittama paikallinen osoite. Tuotantoversio:

```powershell
npm run build
npm run preview
```

Esitys tarvitsee paikallisen tai muun staattisen HTTP-palvelimen. `dist/index.html`
ei ole kaksoisnapsauttamalla avattava, itsenäinen tiedosto. Tapahtumassa
paikallinen palvelin pitää tekstit, kuvat, kuvaajat ja yhteisen kokeilun
käytettävissä ilman ulkoista verkkoa. Videotoisto, live-gallup, SuomiWoW-live-demo
ja varsinainen generointityöpaja tarvitsevat verkkoyhteyden.

## Ohjaus

| Näppäin | Toiminto |
|---|---|
| Oikea nuoli, Space, PageDown | Seuraava paljastus tai dia |
| Vasen nuoli, PageUp | Edellinen paljastus tai dia |
| Home / End | Alku / loppu |
| O | Kaikki diat ja tavoiteajat |
| N | Tämän dian muistiinpanot ja lähteet |
| P | Erillinen puhujanäkymä |
| F | Koko näyttö |
| B | Pimennä tai palauta yleisön näkymä |
| Escape | Sulje avoin näkymä tai palauta pimennetty esitys |
| ? | Näppäinohjeet |

Alareunan ohjaimet tukevat hiirtä ja kosketusta. Vaakasuora pyyhkäisy vaihtaa
sisältövaihetta. Esitys ei etene automaattisesti. Videon painike käynnistää
erikseen minuutin katkelman; pysäytyskuvaan voi palata samalla painikkeella.
Alkuperäinen video avautuu myös omaan välilehteensä.

Avaa puhujanäkymä P:llä ja siirrä se omalle näytölle. Näytä yleisölle vain
varsinainen esitysikkuna. Puhujanäkymä näyttää dian, lähteet, tavoiteajan ja
seuraavan kohdan. Ohjaus toimii molempiin suuntiin saman selaimen ja saman
osoitteen ikkunoiden välillä. Eri selaimet tai esimerkiksi `localhost` ja
`127.0.0.1` eivät jaa synkronointikanavaa. N avaa muistiinpanot nykyiseen
ikkunaan, joten sitä ei käytetä yleisön ruudulla kesken esityksen.

Tauon ja työpajavaiheiden ajastimet käynnistetään käsin. Ne perustuvat
kellonaikaan, säilyvät dianvaihdon ja sivun päivityksen yli sekä synkronoituvat
puhujanäkymään. Nollaa vanhat ajat ennen harjoitusta. Tauon paluuaika määräytyy
käynnistyksestä. Pysäytyksen jälkeen jatkaminen asettaa uuden paluuajan.

## Tapahtumakytkennät ja varapolut

Kopioi tarvittaessa `.env.example` tiedostoksi `.env` ja lisää vahvistetut
tapahtumaosoitteet. Käynnistä kehityspalvelin uudelleen tai rakenna tuotantoversio
uudelleen asetusten muuttamisen jälkeen.

| Asetus | Käyttö | Ilman asetusta |
|---|---|---|
| `VITE_LIVE_VOTING_URL` | Äänestyssovelluksen esitysnäkymä | Kahdeksan kysymystä neljällä käsiäänestysdialla |
| `VITE_WORKSHOP_URL` | Varsinainen AI Workshop Playground | Parityö tai paikallinen yhteinen kokeilu |
| `VITE_WORKSHOP_SHORT_URL` | Yleisölle näytettävä lyhyt osoite | Painike ”Avaa työpaja” |
| `VITE_WORKSHOP_QR_IMAGE` | Vahvistettuun osoitteeseen johtava QR-kuva | Tekstilinkki; rikkinäinen kuva piilotetaan |

VITE-asetukset päätyvät selaimeen. Niihin kuuluvat vain julkiset osoitteet,
eivät salasanat tai API-avaimet. QR-kuva näkyy vain, kun työpajan URL on asetettu.
Esitys ei luo, julkaise tai määritä gallup-istuntoa tai työpajapalvelua.

SuomiWoW-demon reitti on yksi pakka, yksi kortti ja kokoelma. Jos live-demo ei
etene 30 sekunnissa, käytä paikallisia kortti- ja kokoelmakuvia. Bermanin
videon epäonnistuessa käytä saman pelin tallennettua pysäytyskuvaa ja kerro
tekijän kuvaama palaute. Videoa ei väitetä paikallisesti tallennetuksi.

Työpajan aloitusdia linkittää [paikalliseen kokeiluun](../public/workshop-example.html).
Samasta keräilytehtävästä on kaksi versiota: kohde pysyy paikallaan tai vaihtaa
paikkaa. Tavoite on rauhallinen tauko. Yleisö arvioi, miltä versiot tuntuvat.
Koe on rakennettu tätä esitystä varten eikä esitä tallennettua AI-ajoa tai
mitattua pelaajatulosta. Näppäimistön ja hiiren ero on myös mahdollinen
havainto. Kumpaakaan versiota ei nimetä valmiiksi paremmaksi.

## Aineiston alkuperä

Kuvat ovat oikeita esimerkkejä. Niiden alkuperä kerrotaan myös dioilla tai
puhujamuistiinpanoissa. Kolmannen osapuolen aineistot eivät muutu tämän repon
lisenssin alaisiksi tallentamisen vuoksi.

| Paikallinen aineisto | Alkuperä ja rajaus |
|---|---|
| `public/media/cloud-top-chaos.png` | [Matthew Bermanin video](https://www.youtube.com/watch?v=9xa7RTC5pzo&t=1802s), pysäytyskuva noin 30:02.8 kohdasta. Näytettävä katkelma alkaa 29:18. Tekijän esittely sisältää lisäpalautteen jälkeistä työtä. Kuvaan on säilytetty myös esittelijän videokuva. |
| `public/media/suomiwow-vault.png` | [SuomiWoW CCG:n](https://suomiwow.vaarattu.tv/ccg) julkisen aloitusnäkymän rajaus 6.9.2026. Ei kirjautuneen käyttäjän yksityistä kokoelmaa. |
| `public/media/suomiwow-card.png` | Saman julkisen sivun Batchester-esimerkkikortti, Tony Halme Pro Skater, March on Quel’Danas. Pysäytyskuva kortin tuon päivän ulkoasusta. |
| `public/media/suomiwow-sets.png` | Saman sivun raidisettien rajaus. Kokoelmamäärät ovat kuvaushetken vierasnäkymästä eivätkä esitä yhteisön menestysmittaria. |
| `public/media/1001-nights.png` | [Fu ym., CHI EA ’25](https://arxiv.org/html/2503.09102v1), kuva 1. Tutkijoiden kuvapari tarinasta ja esineestä, kokonaisena. |

GDC:n ja Quantic Foundryn kuvaajat tehdään paikallisista luvuista. Nimittäjät,
erilliset kysymykset ja otosrajat säilyvät. Tarkat lähdelinkit ovat
puhujamuistiinpanoissa ja [pääsuunnitelmassa](presentation-plan.md).

SuomiWoWin työnjako perustuu puhujan vahvistukseen 6.9.2026: AI rakensi koko
toteutuksen, puhuja teki kaikki suunnittelupäätökset. Korttien muuttumattomuus
ja raidikauden historian säilyttäminen ovat projektin dokumentoitu valinta ja
tavoite. Pelaajavaikutusta ei esitetä mitattuna.

## Tarkistus ennen tapahtumaa

- Varmista oikeat gallup- ja työpajaosoitteet sekä osallistujien pääsy niihin.
- Harjoittele koko puhe siirtymineen. 60/15/45 minuutin rakenne on tavoiteaika,
  ei selaintestillä varmennettu puheen kesto.
- Tarkista tekstin luettavuus ja värit varsinaisella projektorilla.
- Testaa videon toisto, äänet, live-demon paluu ja varakuvat tapahtumakoneella.
- Avaa paikallinen esitys ennen verkkokatkon kokeilua; pidä palvelin käynnissä.
- Varmista, että yleisön ruudulla näkyy esitys ja puhujan muistiinpanot jäävät
  omalle näytölle. Nollaa ajastimet.
