# Työpajasuunnitelma

## Tavoite

Työpajan jälkeen osallistujalla on pieni, selaimessa toimiva peliprototyyppi ja
käytännön kokemus siitä, että AI:n ensimmäinen versio ei vielä korvaa ihmisen
pelisuunnittelua tai makua.

Osallistuja oppii kolme asiaa:

1. Pieni ja konkreettinen pyyntö toimii paremmin kuin “tee hyvä peli”.
2. Pelillisyys syntyy säännöistä, palautteesta, riskistä ja valinnoista.
3. Persoonallisuus syntyy tekijän rajauksista, kokemuksista ja mausta.

## Oletukset

- Koko ohjelma kestää 120 minuuttia: noin 60 minuutin esitys, 15 minuutin tauko
  ja 45 minuutin workshop yhteinen lopetus mukaan lukien.
- Tauko on esityksen ja workshopin välissä. Sitä ei käytetä esityksen
  ylityksen paikkaamiseen.
- Osallistujat ovat vähintään 12-vuotiaita.
- Osallistuminen suunnitellaan puhelimelle, tabletille ja läppärille. Playground
  sisältää mobiilin yhden paneelin näkymän, mutta tuetut laitteet vahvistetaan
  tapahtumaverkossa tehtävällä käytännön testillä.
- Ohjelmointiosaamista ei tarvita.
- Ensisijainen toteutus käyttää erillistä
  [AI Workshop Playground](workshop-playground-plan.md) -sovellusta, jonka
  tuotanto-osoite avataan QR-koodilla jo tapahtuman alussa.
- Esiintyjän live-proto toimii yhteisenä kokemuksena myös niille, joilla ei ole
  omaa laitetta tai joiden laite ei toimi.

Playground on olemassa oleva Next.js-, Express- ja MongoDB-sovellus. Se tarjoaa
työpajasalasanan, PELI / MUOKKAA -tilan, AI-generoinnin, koodieditorin,
live-esikatselun, versiohistorian, latauksen ja vapaaehtoiset jakolinkit.
Tuotanto-URL, mallit, kuormitus, kustannuskatto, tietosuojateksti ja tietojen
poisto ratkaistaan ennen tapahtumaa sen omassa käyttöönottopolussa, ei
esityssivun toteutuksessa.

## Osallistujan tehtävä

Tee yhden ruudun peliprototyyppi, jossa on:

- yksi ohjattava asia
- yksi tavoite tai vaara
- yksi selkeä mekaniikka
- yksi oma vitsi, tunne, kokemus tai outo sääntö
- aloitusohje, palaute ja mahdollisuus aloittaa uudelleen

Tavoite ei ole valmis tai julkaistava peli. Tavoite on **pelattava ajatus**.

## Fasilitoinnin kulku

### 0:58–1:00 — Siirtymä tauolle

Näytä playgroundin osoite, paluuaika ja kerro:

> Pidetään 15 minuutin tauko. Kun palaamme, lopetamme puhumisen siitä, mitä AI
> tekee peleille, ja katsomme mitä se tekee meille.

Yleisö voi avata playgroundin valmiiksi, mutta mitään ei tarvitse vielä tehdä.

### 1:00–1:15 — Tauko

Pidä näytöllä koko tauon ajan:

- täsmällinen paluuaika
- QR-koodi ja kirjoitettu lyhyt URL
- ohje “voit avata sivun valmiiksi”
- workshopin tavoite: pieni proto, ei unelmapeli

Esiintyjä käyttää tauon myös playgroundin, verkkoyhteyden ja live-demon
viimeiseen tarkistukseen. Tauko päättyy ajallaan, vaikka osa yleisöstä ei olisi
vielä avannut sivua.

### 1:15–1:20 — Paluu ja rajaus

Näytä kolme sääntöä:

> Yksi ruutu. Yksi mekaniikka. Yksi vitsi.

Lisäohje:

> Jos peli ei toimi, pyydä AI:ta korjaamaan se. Jos se ei vieläkään toimi, olet
> nyt oikea pelinkehittäjä.

Varmista, että kaikki ovat palanneet ja ymmärtävät tehtävän. Kaikki avaavat
playgroundin, syöttävät yhteisen työpajasalasanan ja valitsevat **PELI** sekä
**MUOKKAA**. Esiintyjä avaa saman näkymän projektorille. Mallivalinta ja pohja
pidetään esiintyjän ohjeistamassa oletuksessa.

Näytä kaksi etukäteen tehtyä versiota täsmälleen samasta yksinkertaisesta
pelipromptista. Kysy nopeasti, mitkä erot tulivat promptista ja mitkä AI:n omista
valinnoista. Ydinviesti:

> Sama prompti ei ole resepti. Se rajaa vaihtoehtoja, mutta ei määrää tulosta.

### 1:20–1:30 — Kierros 1: tee se olemassa olevaksi

Osallistujat täyttävät seuraavan rungon:

```text
Tee pieni yhden ruudun selainpeli HTML:llä, CSS:llä ja JavaScriptillä.
Pelaaja on [hahmo tai asia].
Pelaajan tavoite on [tavoite].
Pelaaja [väistää / kerää / ampuu / neuvottelee] [asiaa].
Pelin tunnelma on [tunne tai tyyli].
Lisää pisteet, lyhyt aloitusohje, game over ja restart.
Pelin pitää toimia myös puhelimella.
```

Esiintyjä pyytää yleisöltä live-esimerkkiin vastaukset:

- Mikä on pelaaja?
- Mitä se haluaa?
- Mitä se pelkää?
- Mikä tekee ideasta hieman typerän?
- Mikä on game over -teksti?

Ensimmäistä versiota ei arvostella. Sen tehtävä on antaa jotakin konkreettista,
jota voidaan muuttaa.

### 1:30–1:40 — Kierros 2: tee siitä peli

Jos osallistuja ei vielä tiedä, mitä parantaa, hän käyttää ensin **KYSY**-tilaa:

```text
Nimeä kolme tapaa, joilla nykyisen pelin ainoa valinta voisi olla
kiinnostavampi. Älä muokkaa koodia.
```

Osallistuja valitsee itse yhden ehdotuksen, vaihtaa takaisin **MUOKKAA**-tilaan
ja pyytää toteuttamaan vain sen. Valittava parannus voi olla:

- vaikeus kasvaa ajan myötä
- riskin ottamisesta saa suuremman palkinnon
- ohjaus toimii paremmin yhdellä sormella
- osumista ja onnistumisista saa selkeän palautteen
- pisteytys pakottaa tekemään valintoja
- restart on nopea ja yksiselitteinen

Esimerkkipyyntö:

```text
Lisää riski–palkinto-mekaniikka: pelaaja saa enemmän pisteitä, kun hän pysyy
lähellä vaaroja, mutta kuolee kosketuksesta. Näytä kerroin selkeästi ruudulla.
Älä lisää muita uusia ominaisuuksia.
```

Esiintyjä näyttää yhden muutoksen myös yhteiseen live-protoon.

Ydinviesti:

> Älä pyydä AI:ta päättämään, mikä peli on hyvä. Pyydä vaihtoehtoja, valitse
> itse ja testaa seuraus.

### 1:40–1:50 — Kierros 3: tee siitä sinun

Jokainen lisää yhden henkilökohtaisen rajauksen:

- oma huono kokemus
- oma lempigenre
- oma vitsi tai pelko
- Kuopio- tai Suomi-viittaus
- tarkka tunnelma
- epäreilu mutta hauska sääntö

Esimerkkipyyntöjä:

```text
Poista geneerinen scifi- ja fantasy-tunnelma. Tee pelistä tunnistettavan
suomalainen muuttamatta päämekaniikkaa.
```

```text
Tee pelin teksteistä kuivaa virastokieltä ja game over -tekstistä
passiivis-aggressiivinen. Älä lisää uusia ruutuja tai valikoita.
```

```text
Tee pelistä söpö mutta uhkaava. Lisää yksi sääntö, joka tekee voitosta hieman
epäilyttävän.
```

Fasilitaattorin ydinviesti:

> Ensimmäinen versio oli pelimäinen. Tämä kierros tekee siitä teidän tekemänne.

### 1:50–1:56 — Showcase

1. Kaikki näyttävät pelin vieruskaverille.
2. Enintään 1–3 vapaaehtoista näyttää oman protonsa yleisölle.
3. Jokaiselta kysytään lyhyesti:
   - Mikä oli alkuperäinen idea?
   - Mitä AI teki hyvin?
   - Mitä AI teki typerästi?
   - Missä kohtaa sinä teit tästä paremman?

Yksi esimerkki saa käyttää enintään noin minuutin. Jos vapaaehtoinen näyttää
pelin projektorilla, hän voi suostumuksellaan luoda playgroundin julkisen
jakolinkin esiintyjälle. Jos aika on vähissä, lavashowcase jätetään pois mutta
parijako säilytetään.

### 1:56–2:00 — Yhteinen johtopäätös

Työpajan havainto sidotaan esityksen väitteeseen:

- Käytä AI:ta aloittamiseen, älä ajattelun lopettamiseen.
- Sama prompti voi tuottaa eri version; ensimmäinen vastaus ei ole totuus eikä
  suunnittelupäätös.
- Anna AI:n koskea tylsään ennen kuin annat sen koskea sieluun.
- Älä ulkoista makua.
- Kerro pelaajalle, jos AI näkyy tai kuuluu.
- Muista: peli ei ole sisältöä. Peli on valintoja.

## Ideapankki

Helppoja:

- Kahvikuppi väistelee maanantaipalavereita.
- NPC yrittää välttää antamasta questia.
- Lomake yrittää päästä järjestelmän läpi.
- Pelaaja on bugi, joka yrittää selvitä code reviewsta.
- Kasvi kerää vettä mutta vihaa omistajaansa.

Kuopio- ja Suomi-henkisiä:

- Bussi tulee aina väärään suuntaan.
- Pelaaja yrittää löytää vapaan saunavuoron.
- Taloyhtiön kokous on bullet hell.
- Passiivis-aggressiivinen mökkinaapuri on stealth-vastus.

Pelialaan liittyviä:

- Scope creep -survival.
- Indie-kehittäjä vastaan kauppapaikan algoritmi.
- QA-testaaja yrittää rikkoa pelin ennen pelaajia.
- Producer boss fight.
- Asset store -kaivos, jossa etsitään ihmisen tekemää assettia.

Outoja:

- Jokainen kerätty piste tekee maailmasta rumemman.
- Pelaaja voittaa vain lopettamalla pelaamisen.
- Dating sim käyttöehtojen kanssa.
- Cozy horror -peli, jossa puutarha vihaa pelaajaa.
- NPC:t tietävät olevansa placeholder-hahmoja.

## Debug-promptit

```text
Peli ei toimi. Etsi virheet ja korjaa ne. Älä lisää uusia ominaisuuksia.
```

```text
Pidä sama idea, mutta yksinkertaista toteutusta niin, että se toimii varmasti
yhdessä selaimessa avattavassa HTML-tiedostossa.
```

```text
Peli toimii läppärillä mutta ei puhelimella. Korjaa kosketusohjaus ja estä sivun
vieritys pelaamisen aikana. Älä muuta pelin ideaa.
```

```text
Peli hidastuu puhelimella. Etsi suorituskykyongelma ja korjaa se. Säilytä sama
mekaniikka ja ulkoasu mahdollisimman tarkasti.
```

## Turvallisuus ja osallistumisen rajat

- Älä pyydä osallistujia syöttämään nimeä, yhteystietoja tai muuta yksityistä
  tietoa AI-palveluun.
- Käytä ikäsuositukseen sopivia esimerkkejä ja vältä yleisöstä tehtyjä
  henkilökohtaisia pilkkoja.
- Kerro ennen ensimmäistä promptia, että onnistuneiden generointien promptit,
  koodi, pseudonyymi kävijätunniste ja käyttötilastot tallentuvat backendin
  MongoDB:hen ja että sisältö välitetään valitulle AI-palvelulle.
- Kerro, että luomukset ja asetukset tallentuvat myös osallistujan selaimeen.
- Jakolinkit ovat julkisia eivätkä nykyisessä toteutuksessa vanhene
  automaattisesti. Niitä käytetään vain vapaaehtoisen tekijän suostumuksella.
- Älä oleta, että jokainen haluaa näyttää työnsä lavalla.
- Käytä vain sellaisia palveluja ja tunnuksia, joiden käyttöehdot sopivat
  tapahtuman ikärajalle ja toteutukselle.
- Älä pyydä osallistujia käyttämään omia AI-palveluiden API-avaimia.

## Tekniikka ja tila

Tarvitaan:

- projektori tai iso näyttö
- esiintyjän läppäri ja sopiva HDMI-/USB-C-adapteri
- äänentoisto, jos live-protoissa käytetään ääntä
- vakaa internet esiintyjälle ja mielellään osallistujille
- pöydät tai muu tapa käyttää puhelinta/läppäriä mukavasti
- lyhyt URL QR-koodin rinnalle
- virtalähde ja varalaturi esiintyjän laitteelle

Hyödyllistä:

- erillinen esittäjäverkko tai hotspot-varaus
- avustaja, joka auttaa kirjautumis- ja laiteongelmissa
- valmiiksi ladattu esimerkkiproto ja ruutukaappaukset workshopin vaiheista

## Varasuunnitelmat

### A — Kaikki toimii

Osallistujat tekevät omat protot, esiintyjä tekee yhteisen live-version ja
showcase toteutetaan suunnitellusti.

### B — Osallistujaverkko tai palvelu ruuhkautuu

Esiintyjä tekee yhden yhteisen proton yleisön äänestämillä valinnoilla.
Osallistujat kirjoittavat omat promptinsa muistiin ja arvioivat parin kanssa,
mitä AI:n pitäisi tuottaa.

### C — Internet tai AI-palvelu ei toimi lainkaan

Käytä etukäteen tallennettuja kolmea versiota samasta pelistä:

1. ensimmäinen geneerinen proto
2. pelisuunnittelulla parannettu proto
3. henkilökohtaiseksi ja oudoksi rajattu proto

Yleisö valitsee seuraavat muutokset ja vertailee versioita. Workshopin
pedagoginen tavoite säilyy, vaikka generointia ei tehdä livenä.

## Ennakko- ja tapahtumapäivän tarkistuslista

Viimeistään kaksi päivää ennen:

- testaa playground puhelimella, tabletilla ja läppärillä
- varmista osallistujamäärää vastaavat käyttö- ja kustannusrajat
- luo tapahtumakohtainen salasana, vanhenemisaika ja testattu pyyntökiintiö
- tarkista kirjautuminen, palveluntarjoajan ehdot, ikäraja, tallennus,
  tietosuojateksti, säilytysaika ja tietojen poistotapa
- tee valmis yhteinen demo ja kolme offline-varaversiota
- varmista, että QR-koodi ja lyhyt URL osoittavat tuotantoversioon

Tilassa ennen ohjelmaa:

- testaa projektorin resoluutio ja tekstin luettavuus takarivistä
- testaa internet samalla verkolla, jota osallistujat käyttävät
- avaa esitys, playground ja varademot omiin välilehtiinsä
- kytke käyttöjärjestelmän ilmoitukset pois
- varmista, että live-demon palautus onnistuu versiohistoriasta ja
  `?safe`-osoitteella
- varmista, että taukonäkymässä näkyvät oikea paluuaika, QR-koodi ja lyhyt URL

## Onnistumiskriteerit

- Osallistuja pääsee alkuun ilman ohjelmointiosaamista.
- Suurin osa osallistujista saa ensimmäisen 10 minuutin kierroksen aikana
  näkyvän version tai pystyy seuraamaan yhteistä demoa.
- Workshopissa tehdään vähintään yksi pelisuunnittelua parantava muutos ja yksi
  tekijän omaa makua lisäävä muutos.
- Lopun keskustelu erottaa toisistaan nopean generoinnin, pelillisen valinnan ja
  tekijän vastuun.
