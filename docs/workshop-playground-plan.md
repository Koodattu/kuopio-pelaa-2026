# AI Workshop Playground -kytkentä

## Rooli ohjelmassa

45 minuutin peliprototyyppityöpaja tehdään erillisellä **AI Workshop
Playground** -sovelluksella. Sen paikallinen lähdeprojekti on:

```text
C:/Users/Juha/Desktop/Projektit/ai-workshop-playground
```

Sovellusta ei kopioida esitysrepoon. Esityssivu näyttää työpajan vaiheet,
promptit, QR-koodin ja lyhyen URL:n; varsinainen tekeminen tapahtuu
playgroundin omassa selainvälilehdessä.

## Toteutuksessa varmistetut ominaisuudet

Paikallisen projektin nykyinen toteutus sisältää:

- suomen- ja englanninkielisen käyttöliittymän
- työpajasalasanalla avattavan osallistujatilan
- erilliset **PELI / SIVUSTO**- ja **MUOKKAA / KYSY**-valinnat
- chatin, Monaco-koodieditorin ja hiekkalaatikoidun live-esikatselun
- mobiilissa yhden paneelin näkymän ja Chat / Editori / Esikatselu
  -alanavigoinnin
- AI:n tuottaman yhden HTML-tiedoston, joka sisältää CSS:n ja JavaScriptin
- olemassa olevan pelin iteroinnin keskustelun ja nykyisen koodin pohjalta
- jokaisen onnistuneen generoinnin palvelinpuoleisen version ja
  versiohistorian
- omien luomusten selainkohtaisen paikallistallennuksen
- koodin kopioinnin ja lataamisen `index.html`-tiedostona
- vapaaehtoisen julkisen jakolinkin
- opettajan `/admin`-näkymän salasanoille, käyttörajoille, malleille ja
  käyttötilastoille
- palvelinpuoliset Gemini-, OpenAI- ja DeepSeek-integraatiot, joista ylläpitäjä
  voi ottaa sopivat mallit käyttöön.

Ominaisuuslistaus kuvaa tämänhetkistä koodia, ei vielä tapahtumaverkossa
testattua tuotantopalvelua.

## Osallistujan polku

Tauon aikana osallistuja:

1. avaa QR-koodista playgroundin tuotanto-URL:n
2. vaihtaa tarvittaessa kieleksi suomen
3. syöttää yhteisen työpajasalasanan
4. valitsee tuotoksen tyypiksi **PELI** ja toimintatilaksi **MUOKKAA**
5. jättää esiintyjän ohjeistaman mallin ja pohjan valituiksi.

Työpajan aikana osallistuja tekee kolme tarkoituksellista pelikierrosta. Niihin
kuuluu vähintään kolme koodigenerointia ja toisella kierroksella valinnainen
KYSY-pyyntö:

| Aika | Playgroundissa tehtävä toiminto | Tavoiteltu tulos |
|---:|---|---|
| 1:20–1:30 | Ensimmäinen rajattu peliprompti | Pelattava yhden ruudun pystyleikkaus |
| 1:30–1:40 | Kolme vaihtoehtoa KYSY-tilassa, oma valinta ja yksi MUOKKAA-pyyntö | Selkeämpi valinta, palaute tai riski |
| 1:40–1:50 | Yksi tekijän oma rajaus | Vähemmän geneerinen, tunnistettava versio |

Chat näyttää pyynnön ja AI:n yhteenvedon, editori näyttää syntyvän koodin ja
esikatselu näyttää pelin. Puhelimella osallistuja vaihtaa näiden välillä
alanavigoinnista. **KYSY**-tilaa voidaan käyttää selitykseen, mutta työpajan
kolme varsinaista kierrosta tehdään **MUOKKAA**-tilassa.

Jos uusi versio rikkoutuu, osallistuja käyttää ensin yhtä debug-promptia. Sen
jälkeen hän voi avata versiohistorian ja palata toimivaan versioon. Viimeisenä
varmistuksena koodin voi ladata `index.html`-tiedostona.

## Fasilitaattorin käyttötapa

Esiintyjä näyttää projektorilla samaa playgroundia kuin osallistujat, mutta
pitää esityksen omassa valmiiksi avatussa välilehdessään. Ensimmäistä versiota
ei rakenneta `iframe`-upotuksena esityssivulle.

Ennen ensimmäistä kierrosta esiintyjä näyttää vain nämä toiminnot:

1. **PELI**
2. **MUOKKAA**
3. promptikenttä ja **Luo**
4. mobiilin **Esikatselu** tai työpöydän oikeanpuoleinen esikatselupaneeli
5. versiohistoria rikkoutuneesta versiosta palautumiseen.

Koodieditoria, mallivalikkoa, omia API-avaimia, esikatselun tilaprotokollaa tai
admin-näkymää ei opeteta. Ne ovat työkalun ominaisuuksia, eivät tämän
45-minuuttisen työpajan oppimistavoitteita.

Showcasessa ensisijainen tapa on näyttää peli vieruskaverille omalta laitteelta.
Lavalle tuleva vapaaehtoinen voi halutessaan luoda jakolinkin ja antaa sen
esiintyjälle. Linkkiä ei luoda eikä näytetä ilman tekijän nimenomaista
suostumusta.

## Tapahtuma-asetus

Käytä osallistujille työpajasalasanatilaa. Vaikka sovellus tukee osallistujan
omia Gemini-, OpenAI- ja DeepSeek-avaimia, niitä ei pyydetä 12+-yleisöltä eikä
syötetä yhteiskäyttölaitteille.

Luo `/admin`-näkymässä tapahtumakohtainen salasana, joka:

- aktivoidaan vasta harjoitusta tai tapahtumaa varten
- vanhenee pian tapahtuman jälkeen
- sallii vähintään kolme suunniteltua koodigenerointia, yhden KYSY-pyynnön,
  kaksi debug-yritystä ja teknisen epäonnistumisen marginaalin
- mitoitetaan osallistujamäärän, AI-palvelun kiintiön ja budjetin mukaan.

Nykyinen oletusraja on 20 pyyntöä selainta kohti. 45 minuutin työpajaan
suositeltava lähtökohta on 8–10 pyyntöä, mutta lopullinen raja päätetään vasta
kuormitus- ja kustannustestin jälkeen. Generointipyyntö kuluttaa yhden käytön
ennen AI-kutsun valmistumista, joten epäonnistumisille tarvitaan marginaalia.

Ylläpitäjä valitsee yhden ensisijaisen mallin ja enintään yhden varamallin.
Osallistujille annetaan yksi yhteinen malliohje; työpajan aikaa ei käytetä
mallien vertailuun.

## Tallennus, tietosuoja ja jakaminen

Tapahtuman tietosuojatekstin pitää vastata nykyistä toteutusta:

- selain luo laite- ja selainkohtaiseen `localStorageen` satunnaisen
  kävijätunnisteen
- selain tallentaa paikallisesti työpajasalasanan, asetuksia ja enintään
  kymmenen omaa luomusta
- backend tallentaa onnistuneiden generointien promptit, koodiversiot,
  pseudonyymin kävijätunnisteen, mallin sekä käyttö- ja tokenitilastoja
  MongoDB:hen
- prompti, olemassa oleva koodi ja keskustelukonteksti välitetään valitulle
  AI-palveluntarjoajalle generointia varten
- **Jaa** luo ilman erillistä salasanaa avautuvan julkisen linkin, joka sisältää
  tuotoksen koodin
- nykyinen toteutus ei automaattisesti vanhenna jakolinkkejä.

Tästä seuraa neljä ennen julkaisemista ratkaistavaa asiaa:

1. selkokielinen tietosuojailmoitus ja tieto käytettävästä AI-palvelusta
2. MongoDB:n promptti-, koodi-, tunniste- ja lokitietojen säilytysaika sekä
   poistotapa
3. käytetäänkö jakolinkkejä tapahtumassa ja miten vapaaehtoinen suostumus
   kerätään
4. miten tapahtuman jälkeen poistetaan työpajasalasana, osallistujaversiot,
   käyttölokit ja mahdolliset jakolinkit.

Osallistujia ohjeistetaan olemaan kirjoittamatta nimiä, yhteystietoja,
salaisuuksia tai muiden henkilötietoja promptteihin ja peliteksteihin. Palvelua
ei kuvata anonyymiksi: kävijätunniste on pseudonyymi, mutta se yhdistää saman
selaimen pyynnöt ja versiot.

## Turvallisuusraja

Generoitu peli ajetaan `sandbox="allow-scripts"`-iframe-kehyksessä ilman pääsyä
playgroundin ylätason DOMiin tai kirjautumistietoihin. Tämä on hyödyllinen raja,
mutta ei täydellinen suoritusympäristön eristys:

- peli voi käyttää paljon prosessoria tai muistia ja jumittaa oman
  esikatselunsa
- peli voi yrittää tehdä verkkopyyntöjä tai ladata sallittuja ulkoisia
  kirjastoja
- ulkoinen kirjasto tai asset voi epäonnistua verkon takia
- sopimaton tai turvaton sisältö pitää edelleen käsitellä fasilitoinnilla ja
  AI-palvelun omilla suodattimilla.

Jos tallennettu projekti tekee näkymästä käyttökelvottoman, avaa playgroundin
URL parametrilla `?safe`. Safe start säilyttää tallennetun projektin, mutta ei
suorita sitä automaattisesti. Valitse tämän jälkeen toimiva pohja tai
versiohistoria.

## Julkaisu- ja kuormitustarkistus

Tuotantototeutus tarvitsee vähintään Next.js-frontendin, Express-backendin,
MongoDB:n ja palvelinpuoliset AI-avaimet. Nykyinen Docker Compose toimii
paikalliseen käyttöön, mutta sen `localhost`-osoitteita ei voi käyttää
osallistujien laitteiden tuotantoasetuksena.

Viimeistään kaksi päivää ennen tapahtumaa varmista:

- julkinen HTTPS-URL ja sitä vastaava backend-osoite
- frontendin buildiin asetettu oikea `NEXT_PUBLIC_API_URL`
- backendin täsmällinen `FRONTEND_URL` CORSia varten
- toimiva MongoDB, vahva `ADMIN_SECRET` ja vain palvelimella olevat AI-avaimet
- `/api/health`-vastauksen seuranta
- tapahtumasalasana, vanhenemisaika ja pyyntökiintiö
- ensisijainen malli, varamalli, palveluntarjoajan kiintiö ja kustannuskatto
- kuormitustesti vähintään arvioidulla yhtäaikaisten osallistujien määrällä
- oikea tapahtumaverkko sekä vähintään yksi puhelin, tabletti ja läppäri
- Chrome- ja Edge-testit sekä mobiilin Chat / Editori / Esikatselu -vaihto
- ensimmäinen generointi, kaksi iterointia, versioon palaaminen, lataus ja
  vapaaehtoinen jakolinkki
- `?safe`-palautuspolku ja uuden salasanan luonti kesken työpajan.

Tuotanto-URL: **päätettävä**. Esityksen QR-koodia ei hyväksytä ennen kuin sama
URL on läpäissyt yllä olevan testin tapahtumaverkossa.

## Varapolut

- **Yksittäinen laiteongelma:** pari käyttää yhtä laitetta tai osallistuja
  seuraa esiintyjän yhteistä protoa.
- **Malli hidastuu:** vaihda adminissa ennalta testattuun varamalliin ja ohjaa
  kaikki käyttämään sitä.
- **Kiintiö täyttyy:** aktivoi ennalta luotu varasalasana vain, jos palvelun
  kokonaiskiintiö ja budjetti sallivat jatkamisen.
- **Osallistujaverkko ruuhkautuu:** esiintyjä tekee yhteisen proton yleisön
  valinnoilla.
- **Backend tai AI-palvelu kaatuu:** käytä paikallisia kolmea valmista
  HTML-versiota: ensimmäinen proto, pelisuunnittelulla parannettu versio ja
  henkilökohtainen versio.
- **Playground ei aukea lainkaan:** workshop jatkuu prompttien suunnitteluna ja
  kolmen valmiin version vertailuna.

Varapolkujen pedagoginen tavoite on sama kuin verkossa: osallistuja erottaa
ensimmäisen generoinnin, pelisuunnittelua parantavan valinnan ja tekijän oman
maun.

## Hyväksymiskriteerit

- Osallistuja pääsee QR-koodista **PELI / MUOKKAA** -näkymään ja tekee
  ensimmäisen pyynnön enintään viidessä minuutissa.
- Ensimmäinen toimiva proto syntyy suurimmalle osalle ensimmäisen
  kymmenminuuttisen kierroksen aikana.
- Jokaisella selaimella on riittävä pyyntökiintiö kolmeen koodigenerointiin,
  yhteen KYSY-pyyntöön ja vähintään kahteen korjausyritykseen.
- Mobiilin ensisijainen tehtävä onnistuu ilman koodieditorin käyttöä.
- Esiintyjä pystyy palautumaan rikkoutuneesta demosta versiohistorian tai
  `?safe`-osoitteen avulla alle minuutissa.
- Osallistujalle kerrotaan ennen ensimmäistä promptia, mitä tallennetaan, mille
  AI-palvelulle sisältö lähetetään ja milloin tiedot poistetaan.
- Julkinen jakolinkki syntyy vain vapaaehtoisen tekijän pyynnöstä.
- Workshop voidaan vetää loppuun valmiilla paikallisilla HTML-versioilla ilman
  playgroundia tai internetiä.

## Avoimet päätökset

- tuotanto-URL ja hosting
- arvio osallistujamäärästä ja yhtäaikaisista generoinneista
- ensisijainen ja varalla oleva AI-malli
- selainkohtainen pyyntökiintiö ja tapahtuman kokonaiskustannuskatto
- työpajasalasanan voimassaoloaika
- tietosuojateksti, palveluntarjoajan ehdot, säilytysaika ja poistomenettely
- otetaanko julkiset jakolinkit käyttöön showcasessa
- kuka seuraa admin-näkymää ja auttaa laiteongelmissa työpajan aikana.
