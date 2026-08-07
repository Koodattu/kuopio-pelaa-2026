# Web-esityksen toteutussuunnitelma

## Lopputulos

Rakennetaan selainpohjainen 16:9-esitys, joka:

- toimii täysruudulla projektorilla ja pitää varsinaiset esitysdiat käytettävissä
  ilman verkkoyhteyttä; Live Voting, SuomiWoW-live-demo ja erillinen AI Workshop
  Playground ovat ensisijaisesti verkkoriippuvaisia
- tarjoaa näppäimistö-, hiiri- ja kosketusohjauksen
- tukee vaiheittaisia sisältöpaljastuksia ja hillittyjä animaatioita
- piirtää datakuvaajat Rechartsilla tarkistetuista paikallisista aineistoista
- näyttää 15 minuutin tauon ajan selkeän paluuajan, QR-koodin ja lyhyen URL:n
- skaalautuu myös harjoitteluun läppärillä ja QR-laskeutumissivuksi puhelimella
- voidaan julkaista staattisena sivustona

Ensimmäinen toteutus ei sisällä AI-palvelun backendia, käyttäjätilejä,
maksuliikennettä tai osallistujien tekemien pelien tallennusta. Workshop avaa
erillisen olemassa olevan `ai-workshop-playground`-sovelluksen. Esityksen
rakentaminen ei jää kiinni sen deploymentista, mutta QR-koodi hyväksytään vasta,
kun playgroundin tuotanto-URL, kuormitus, mallit, kustannuskatto, tietosuoja ja
poistokäytäntö on testattu.

Alun yleisöäänestys käyttää erillistä `live-voting-visualization`-sovellusta.
Sen reaaliaikaista palvelinta tai tietokantaa ei kopioida tähän repoon.
Ensimmäisessä versiossa esitys vaihtaa selkeästi työkalun julkiseen
Presentation Display -näkymään ja takaisin.

## Tekninen päätös

Suositeltu minimipino:

- Vite
- React ja JavaScript
- Tailwind CSS
- Recharts
- tavallinen CSS animaatioihin

React on perusteltu, koska Recharts perustuu siihen ja diat tarvitsevat
yhteisen tila- ja askelmallin. Erillistä animaatiokirjastoa ei lisätä ennen kuin
CSS-siirtymien rajat tulevat oikeasti vastaan.

Ei ensimmäiseen versioon:

- reitityskirjastoa
- globaalia tilanhallintakirjastoa
- palvelinrenderöintiä
- komponenttikirjastoa
- yleiskäyttöistä design system -pakettia

## Ehdotettu hakemistorakenne

```text
src/
  app/
    App.jsx
    Deck.jsx
    controls.js
  components/
    SlideFrame.jsx
    SourceNote.jsx
    StepReveal.jsx
    charts/
  content/
    slides.js
    chart-data.js
    sources.js
  slides/
    00-Arrival.jsx
    01-Opening.jsx
    ...
    15-Closing.jsx
  styles/
    globals.css
    tokens.css
public/
  assets/
docs/
```

Rakenne on ohjeellinen. Toteutusvaiheessa tarkistetaan ensin olemassa oleva
projekti ja käytetään sen konventioita, jos sovellusrunko on jo luotu.

## Esitysmalli

Jokaisella dialla on:

- pysyvä `id`
- React-komponentti
- 0–3 paljastusaskelta
- puhujamuistiinpanot
- lista lähdetunnuksista
- valinnainen workshop-toiminto tai yleisökysymys

Esityksen tila koostuu vain dian indeksistä ja paljastusaskeleesta. URL:n hash
päivitetään dian tunnukseen, jotta harjoitellessa voidaan avata suoraan tietty
dia ilman reitityskirjastoa.

Ohjaus:

- `ArrowRight`, `PageDown` tai välilyönti: seuraava askel/dia
- `ArrowLeft` tai `PageUp`: edellinen askel/dia
- `Home` / `End`: alkuun / loppuun
- `F`: täysruutu
- klikkaus tai napautus oikealla/vasemmalla reunalla: seuraava/edellinen
- näkyvä mutta hillitty etenemismerkki, jonka voi piilottaa esitystilassa

Selaimen omaa takaisin-painiketta ei kaapata. Tekstivalinta ja linkkien avaus
eivät saa vahingossa vaihtaa diaa.

## Sommittelu ja responsiivisuus

- `SlideFrame` muodostaa 16:9-kankaan ja skaalaa sen käytettävissä olevaan
  viewportiin.
- Sisältö mitoitetaan suhteessa esityskankaaseen, ei yksittäiseen laitteeseen.
- Projektorin tavoitetarkistus tehdään vähintään koossa 1920×1080 ja 1280×720.
- Yleisölle näkyvän leipätekstin tavoite vastaa vähintään noin 16 pt:n
  esityskokoa; otsikot ovat selvästi suurempia.
- Pitkät otsikot lyhennetään. Niitä ei pienennetä tai pakoteta kahdelle riville
  sattumanvaraisesti.
- QR-laskeutumissivu on aidosti mobiili eikä kutistettu esitysdia.

## Visuaaliset tokenit

Määritä ennen diojen toteutusta pieni joukko CSS-muuttujia:

```css
--color-bg
--color-surface
--color-text
--color-muted
--color-ai
--color-human
--color-warning
--space-slide-x
--space-slide-y
--font-display
--font-body
--motion-fast
--motion-normal
--ease-standard
```

Väreille ja fonteille tehdään lopullinen päätös vasta, kun tapahtuman mahdollinen
brändiohje ja käytettävissä olevat fontit on tarkistettu.

## Animaatiot

Toteuta ensin neljä uudelleenkäytettävää liikettä:

1. dian sisääntulo: pieni opacity/translate
2. vaiheittainen tekstipaljastus
3. numeron tai korostuksen vaihto
4. kuvaajan kertaluonteinen piirto

Säännöt:

- yksi liikesuunta per dia
- ei jatkuvasti liikkuvia koristeita
- ei spring- tai overshoot-liikettä vakavissa datadioissa
- kaikki olennainen sisältö jää näkyviin ilman animaatiota
- `prefers-reduced-motion: reduce` poistaa siirtymät ja näyttää lopputilan heti

## Recharts-kuvaajat

Ensisijaiset kuvaajat:

1. pelialan kielteisen AI-suhtautumisen trendi
2. generatiivisen AI:n yleiset käyttötavat
3. Steam-pelien GenAI-ilmoitukset
4. pelaajien suhtautuminen luoviin käyttötapoihin, jos aika ja lähdevarmuus
   riittävät

Toteutusperiaatteet:

- data kirjoitetaan paikalliseen, lähdetunnuksella merkittyyn tiedostoon
- akselit alkavat tarkoituksenmukaisesta kohdasta ja mahdollinen rajaus
  kerrotaan
- värit kuvaavat väitettä johdonmukaisesti, eivät koristeellisesti
- tooltip ei saa olla ainoa paikka, jossa arvo näkyy
- projektoriversiossa tärkeät arvot merkitään suoraan kuvaajaan
- lähde, vuosi, otos ja olennainen caveat näkyvät dian alareunassa
- kuvaaja tarkistetaan lähdedataa vastaan ennen sisällön hyväksymistä

## Puhujanäkymä ja muistiinpanot

Ensimmäisessä versiossa muistiinpanot voivat olla samassa sisältömoduulissa ja
näkyä vain erillisessä harjoittelutilassa, esimerkiksi URL-parametrilla.

Huomio: staattiseen JavaScript-bundleen pakatut muistiinpanot ovat teknisesti
yleisön ladattavissa. Jos muistiinpanojen pitää olla yksityisiä, ne pidetään
erillisessä paikallisessa tiedostossa tai rakennetaan erillinen, julkaisematon
presenter-versio.

## Workshop-kytkentä

Workshop käyttää erillistä paikallista projektia:

```text
C:/Users/Juha/Desktop/Projektit/ai-workshop-playground
```

Se on Next.js-, Express- ja MongoDB-sovellus, joka tarjoaa työpajasalasanan,
PELI / MUOKKAA -polun, AI-generoinnin, live-esikatselun, versionhallinnan,
latauksen ja jakolinkit. Tarkempi käyttö-, tietosuoja- ja tuotantosuunnitelma on
[AI Workshop Playground -kytkennässä](workshop-playground-plan.md).

Esityksen vastuulla on:

- näyttää QR-koodi ja lyhyt URL
- näyttää tauon aikana täsmällinen paluuaika ja workshopiin valmistautumisen ohje
- tarkistaa linkki ennen tapahtumaa
- tarjota selkeä paluu esitykseen
- näyttää osallistujille workshopin vaiheet ja promptit
- tarjota offline-varademot paikallisina tiedostoina
- avata playground erilliseen valmiiksi ladattuun välilehteen; sitä ei upoteta
  ensimmäisessä versiossa `iframeen`

Playgroundin oman deploymentin vastuulla on:

- AI-mallikutsut
- API-avainten hallinta
- työpajasalasanat, käyttökiintiöt ja admin-näkymä
- generoitujen versioiden tallennus ja vapaaehtoiset julkiset jakolinkit
- palveluntarjoajien ehdot, tietosuojateksti, säilytysaika ja poistotapa
- kuormitus-, kustannus- ja virhetilojen hallinta.

Playgroundin palvelinpuolisia AI-avaimia ei koskaan kopioida esitysrepoon tai
lähetetä selaimen JavaScriptiin. Osallistujille käytetään yhteistä
työpajasalasanaa, ei heidän omia API-avaimiaan.

## Live Voting -kytkentä

Esityssivulle määritetään ympäristökohtaisesti:

- julkinen Participant View -osoite tai Join Name
- julkinen Presentation Display -osoite
- paluulinkki tai pikanäppäin esitykseen

Ensimmäinen toteutus käyttää erillistä täysruutuvälilehteä. `iframe`-upotusta ei
tehdä ennen kuin fokus, täysruutu, selainrajoitukset ja virhetilat on testattu
oikealla deploylla.

Käyttötilanne tarvitsee kaksi erillistä pintaa:

- projektorilla näkyy vain julkinen Presentation Display
- Presenter Controls on esiintyjän toisella näytöllä tai erillisellä laitteella

Presentation Display on julkinen eikä sisällä hallintaa. Admin-salasanaa tai
Admin Panelia ei koskaan näytetä projektorilla eikä tallenneta tähän repoon.
Tarkempi käyttöjärjestys, kysymykset ja fallback ovat
[Live Voting -suunnitelmassa](live-voting-plan.md).

## SuomiWoW-showcase-kytkentä

SuomiWoW on erillinen tuotantosovellus. Sen koodia, dataa tai autentikointia ei
kopioida esitysrepoon. Esityksessä avataan ulkoinen tuotanto-URL valmiiksi
ladattuun selainvälilehteen.

Nykyinen julkinen lähtöosoite projektin oman README:n mukaan on:

```text
https://suomiwow.vaarattu.tv/ccg
```

Demo käyttää enintään seuraavia julkisia reittejä:

```text
/ccg
/ccg/open
/ccg/collection
```

Lopullinen URL, CCG-feature flag, pack balance ja mahdollinen kirjautuminen
tarkistetaan ennen tapahtumaa. Esityssivulle määritetään yksi showcase-linkki ja
selkeä paluu esitykseen; sovellusta ei upoteta `iframeen` ensimmäisessä
versiossa.

Live-demon rinnalle tallennetaan paikallinen, alle kahdeksan minuutin
ruutukaappaus samasta kulusta sekä pysäytyskuvat pakasta, yhdestä kortista ja
kokoelmasta. Tarkempi puhe- ja varapolku on
[showcase-suunnitelmassa](project-showcase-plan.md).

## Saavutettavuus

- tekstin ja taustan kontrasti tarkistetaan
- kaikki toiminnot onnistuvat näppäimistöllä
- fokus on näkyvä linkeissä ja kontrolleissa
- kuvaajilla on tekstimuotoinen yhteenveto
- väri ei ole ainoa merkityksen välittäjä
- animaation vähentämisasetus toimii
- QR-koodin vieressä on aina kirjoitettu lyhyt URL

## Toteutusvaiheet

### 1. Sisältö ja lähteet lukkoon

- vahvista 120 minuutin runko: 60 minuutin esitys, 15 minuutin tauko ja 45
  minuutin workshop
- tarkista kaikki luvut alkuperäislähteistä
- päätä kolme pääkuvaajaa ja varadiat
- vahvista SuomiWoW-demon tuotanto-URL, käyttökunto ja rehellinen kuvaus AI:n
  roolista projektissa
- vahvista AI Workshop Playgroundin tuotanto-URL, tapahtumasalasana,
  ensisijainen malli, pyyntökiintiö ja tietosuojateksti

Valmis, kun jokaisella dialla on pääväite, sisältövastuu ja lähdetunnukset.

### 2. Esityskehys

- luo Vite/React/Tailwind-runko
- toteuta `SlideFrame`, navigointi, hash-tila ja täysruutu
- toteuta typografia, tokenit ja reduced-motion
- tee kolme sisältöä edustavaa koediaa: otsikko, data ja workshop-ohje

Valmis, kun koediat toimivat projektorikoossa, läppärillä ja näppäimistöllä.

### 3. Kaikki diat ja kuvaajat

- toteuta diat [esityssuunnitelman](presentation-plan.md) mukaan
- lisää Recharts-kuvaajat tarkistetusta datasta
- lisää puhujamuistiinpanot ja lähdeviitteet
- tee QR- ja workshop-siirtymät

Valmis, kun koko esitys voidaan käydä alusta loppuun ilman placeholder-sisältöä.

### 4. Workshop-varautuminen

- lisää paikalliset varademot
- testaa AI Workshop Playgroundin PELI / MUOKKAA -polku puhelimella,
  tabletilla ja läppärillä
- testaa tapahtumasalasana, kolme generointia, versiohistoria, `index.html`-
  lataus, vapaaehtoinen jakolinkki ja `?safe`-palautus
- kuormitustestaa arvioitu yhtäaikaisten osallistujien määrä ja tarkista
  palveluntarjoajan kiintiö sekä kustannuskatto
- tee presenter-only- ja offline-polut näkyviksi muistiinpanoihin

Valmis, kun ohjelman voi vetää myös ilman osallistujien verkkoyhteyttä.

### 5. Laadunvarmistus ja harjoittelu

- aja lint, testit ja tuotantobuild
- käy jokainen dia läpi 1920×1080- ja 1280×720-koossa
- testaa Chrome- ja Edge-selaimilla tapahtumaläppärillä
- tarkista mobiililanding, QR-koodi ja kaikki linkit
- testaa Live Votingin Lobby, neljä kysymystä, suljettujen tulosten palaute ja
  paluu esitykseen
- testaa SuomiWoW-siirtymä, yksi pack opening, kortin tarkastelu, kokoelman
  avaaminen ja paluu esitykseen
- testaa AI Workshop Playgroundin avaus QR-koodista, suomenkielinen kirjautuminen,
  PELI / MUOKKAA -valinnat, kolme kierrosta ja paluu esitykseen
- harjoittele koko 120 minuutin läpimeno ja merkitse erikseen esityksen sekä
  workshopin leikkauskohdat
- varmista, että 15 minuutin tauko alkaa ja päättyy sovittuina aikoina
- testaa täysi offline-varapolku

Valmis, kun esitysosuus päättyy harjoituksessa viimeistään minuutilla 60, tauko
kestää 15 minuuttia ja koko ohjelma päättyy viimeistään minuutilla 120.

## Toteutuksen hyväksymiskriteerit

- Tuotantobuild valmistuu ilman virheitä.
- Dioissa ei ole ylivuotoa tai odottamatonta rivittymistä tuetuissa ko'oissa.
- Navigointi toimii näppäimistöllä, hiirellä ja kosketuksella.
- Sivun uudelleenlataus säilyttää nykyisen dian hashin avulla.
- Kaikki lähdeviitteet vastaavat [lähdepankin](source-bank.md) valmiiksi
  tarkistettuja tietueita.
- Varsinaiset esitysdiat toimivat ilman verkkoa. Live Votingille,
  SuomiWoW-showcaselle ja AI Workshop Playgroundille on dokumentoidut
  verkottomat varapolut.
- Reduced-motion-tila on käyttökelpoinen eikä vain animaatioiden rikkinäinen
  välimuoto.
- Projektorin takariviltä luettavuus on testattu käytännössä.

## Avoimet päätökset ennen toteutusta

- tapahtuman brändi, logo, värit ja fonttiluvat
- lopullinen esityksen nimi ja esiintyjän tiedot
- AI Workshop Playgroundin tuotanto-URL ja hosting
- osallistujamäärä, ensisijainen ja varalla oleva AI-malli, pyyntökiintiö sekä
  kokonaiskustannuskatto
- tietosuojateksti, palveluntarjoajan ehdot, tietojen säilytysaika ja
  tapahtuman jälkeinen poistomenettely
- Live Voting -deploymentin julkinen origin ja lopullinen Join Name
- SuomiWoW-showcasessa käytettävä tili tai guest-istunto sekä faktapohjainen
  kuvaus AI:n todellisesta roolista projektissa
- hosting-kohde ja tarvitaanko salasanaa
- puhujamuistiinpanojen yksityisyystaso
- käytetäänkö tapahtuman aikana ääntä
- mitkä kolme kuvaajaa jäävät lopulliseen tunnin esitysosuuteen
