# Live Voting -suunnitelma

> **Tila:** ensimmäisen kierroksen ehdotus. Kymmenen kysymyksen sanamuodot,
> järjestys ja määrä lukitaan vasta täyden presenter-harjoituksen jälkeen.

## Tavoite

Esityksen alun noin 15 minuutin yleisöäänestys tekee huoneen oman ristiriidan
näkyväksi ennen ulkoisten tilastojen näyttämistä. Tulokset toimivat esityksen
läpi kulkevana vertailukohtana:

- kuinka moni on käyttänyt generatiivista AI:ta ja kuinka moni juuri
  pelintekoon
- eroaako yleinen AI-asenne suhtautumisesta AI:hin pelialalla
- pidetäänkö tekemisen helpottumista samana asiana kuin pelien paranemista
- näyttäytyykö AI uutena sisäänkäyntinä, työn korvaajana vai molempina
- muuttuuko reaktio, kun käyttö siirtyy bugien korjaamisesta näkyvään dialogiin.

Gallup ei pyydä yleisöä ratkaisemaan AI-politiikkaa ennen esitystä. Kysymykset
ovat nopeita ja tarkoituksella karkeita. Niiden tehtävä on tuottaa viisi
vertailuparia, joiden epäselvyyksiä ja ristiriitoja myöhempi esitys tarkentaa.

Tulokset kuvaavat vain paikalla olevaa, itse valikoitunutta yleisöä. Niitä ei
esitetä tutkimuksena eikä verrata GDC- tai pelaajakyselyihin tilastollisesti.

## Avaus ennen äänestystyökalua

Ennen Lobby-näkymään siirtymistä käytetään aika 0:00–0:05:

1. Näytä esityksen ylidramaattinen otsikko.
2. Kysy: “Kun sanon tekoäly, mikä on ensimmäinen asia, joka tulee mieleen?”
3. Ota 2–4 huudahdusta.
4. Paljasta virallinen ChatGPT-tunnus ja kysy “miksi juuri tämä?”.
5. Kerro, että äänestyksen kysymykset koskevat pääasiassa generatiivista AI:ta,
   vaikka sanaa AI käytetään arkikielessä laajemmin ja epätarkemmin.

Jos kukaan ei sano ChatGPT:tä, tunnus paljastetaan silti. Avaus ei ole
onnistumis- tai tietotesti eikä osa Live Voting -sovellusta. Vapaata tekstiä ei
kerätä työkalulla.

## Käytettävä työkalu

Äänestys ajetaan erillisellä `live-voting-visualization`-sovelluksella.
Suunnitelma nojaa sen nykyiseen v1-toimintaan:

- osallistujat liittyvät anonyymisti ilman käyttäjätiliä
- Lobby näyttää Join Namen, suoran linkin, QR-koodin ja liittyjämäärän
- yksi Question on avoinna kerrallaan
- Single-choice Question sisältää 2–5 Optionia
- osallistuja voi vaihtaa Votea kysymyksen ollessa avoinna
- sulkeminen lukitsee tuloksen eikä kysymystä voi avata uudelleen
- Presentation Display näyttää prosentit, äänimäärät ja vastausmäärän
- suljettuihin kysymyksiin voidaan palata myöhemmin esityksen aikana

Feedback Questionia ja Comment Wallia ei käytetä. Kommentit ilmestyvät työkalun
nykyisessä versiossa julkiselle seinälle ilman yksittäistä moderointia, mikä ei
ole tarpeellinen riski 12+ yleisölle.

## Istunnon määritys

- Session Language: Finnish
- Kysymystyyppi: alustavasti kymmenen Single-choice Questionia viitenä parina
- Feedback Question: ei
- Työnimi: `Kuopio Pelaa: tekoäly ja pelit`
- Join Name -ehdotus: `kuopio-pelaa-ai`
- Display Theme: esityksen visuaaliseen tyyliin sopiva tumma tai vaalea teema

Join Name varmistetaan tuotantoympäristössä ennen QR-koodien tekemistä. Sitä ei
kovakoodata yleisölle näkyviin materiaaleihin ennen kuin deployment ja nimi ovat
lopulliset.

## Alustava kysymyssarja

Kysymykset esitetään pareina. Ensimmäinen tulos jää Presentation Displayn
kompaktiin previous-strip-näkymään toisen kysymyksen ajaksi, joten esiintyjä voi
kommentoida parin eroa ilman palaamista aiempaan Questioniin.

Viisiportaisissa väitekysymyksissä käytetään aina samaa asteikkoa:

1. Täysin eri mieltä
2. Eri mieltä
3. Neutraali
4. Samaa mieltä
5. Täysin samaa mieltä

### Pari 1 — Oma kokemus

**1. Oletko käyttänyt generatiivista tekoälyä?**

- Kyllä
- En

**2. Oletko käyttänyt generatiivista tekoälyä pelin tai peliprototyypin
tekemiseen?**

- Kyllä
- En

Tehtävä: opettaa käyttöliittymä kahdella helpolla Vote-päätöksellä ja näyttää,
kuinka monelle AI on tuttu yleisesti mutta uusi juuri pelinteossa.

#### Vaihtoehto parille 1 — kokemuksen lähde ja syvyys

Jos “Me emme arvioi samaa tekoälyä” -jakso säilyy pääesityksessä, harjoituksessa
verrataan nykyistä paria seuraavaan vaihtoehtoon:

**1. Mistä oma GenAI-kokemuksesi pääasiassa tulee?**

- En ole käyttänyt GenAI:ta
- Maksuttomista kuluttajapalveluista
- Itse maksamastani palvelusta
- Työn tai opintojen tarjoamasta palvelusta

**2. Kuinka pitkälle olet vienyt yhden AI-tehtävän?**

- En ole käyttänyt GenAI:ta
- Yksi kysymys tai generointi
- Muutama korjauskierros
- Pidempi tehtävä tai projekti
- Valmis, oikeasti käytetty lopputulos

Tehtävä: erottaa käyttöoikeus kokemuksen syvyydestä ja avata pääesityksen
neljän minuutin jakso. Jos vain toinen näistä voidaan säilyttää, syvyyskysymys
on argumentille tärkeämpi kuin maksullisuus. Se kertoo, arvioiko vastaaja
yksittäistä raakavastausta vai pidempää työnkulkua.

Vaihtoehto **korvaa** nykyisen parin 1 eikä lisää kysymysten kokonaismäärää.
Nykyinen yleinen käyttö / pelintekokäyttö -pari säilytetään, jos vaihtoehdon
neljä- ja viisiportaiset vastaukset hidastavat aloitusta liikaa. Tarkempi
sisältöraja on
[GenAI-kokemuksen arviointisuunnitelmassa](ai-experience-and-evaluation.md).

### Pari 2 — Yleinen asenne ja peliala

**3. Generatiivinen tekoäly on mielestäni hyvä asia.**

Vastaus: yhteinen viisiportainen asteikko.

**4. Generatiivinen tekoäly on hyvä asia pelialalle.**

Vastaus: yhteinen viisiportainen asteikko.

Tehtävä: näyttää, muuttuuko yleinen asenne, kun sama teknologia sidotaan
peleihin. Eroa ei oleteta etukäteen.

### Pari 3 — Helpompi ja parempi

**5. Generatiivinen tekoäly tekee pelien tekemisestä helpompaa.**

Vastaus: yhteinen viisiportainen asteikko.

**6. Generatiivinen tekoäly tekee peleistä parempia.**

Vastaus: yhteinen viisiportainen asteikko.

Tehtävä: erottaa tuotannon kynnyksen madaltuminen lopputuloksen laadusta. Tämä
on gallupin tärkein pari ja suora silta esityksen sekä työpajan kantavaan
kysymykseen.

### Pari 4 — Sisäänkäynti ja korvaaminen

**7. Tekoälyn avulla kuka tahansa voi tehdä pelin.**

Vastaus: yhteinen viisiportainen asteikko.

**8. Tekoäly korvaa tulevaisuudessa suuren osan pelinkehittäjien työstä.**

Vastaus: yhteinen viisiportainen asteikko.

Tehtävä: nostaa näkyviin ohjelman otsikon kaksi kilpailevaa lupausta. Huone voi
hyvin kannattaa molempia väitteitä; sitä ei käsitellä loogisena virheenä.

### Pari 5 — Taustatyö ja näkyvä sisältö

**9. Häiritsisikö generatiivisen tekoälyn käyttö pelin bugien
korjaamisessa?**

- Kyllä
- Ei
- En osaa sanoa

**10. Häiritsisikö generatiivisen tekoälyn käyttö pelihahmojen dialogin
kirjoittamisessa?**

- Kyllä
- Ei
- En osaa sanoa

Tehtävä: testata yhdellä konkreettisella parilla, muuttuuko reaktio käytön
siirtyessä näkymättömästä kehitystyöstä näkyvään luovaan sisältöön. Pari
valmistelee Quantic Foundry-, Steamworks- ja Clair Obscur -osuuksia ilman, että
yleisöltä kysytään vielä monimutkaista disclosure-rajaa.

## 15 minuutin käyttöjärjestys

| Aika | Toiminta | Presenter Controls | Presentation Display |
|---:|---|---|---|
| 0:05–0:08 | Liittyminen ja lyhyt käyttöohje | Istunto on Lobbyssa. Seuraa liittyjämäärää. | Näytä otsikko, QR-koodi, suora linkki ja Join Name. |
| 0:08–0:10 | Pari 1: oma kokemus | Avaa, sulje ja vaihda kaksi kokemuskysymystä nopeasti. Lopullinen Yes/No- tai lähde/syvyys-versio lukitaan harjoituksessa. | Näytä kysymysparin tulokset rinnakkain ja kommentoi vasta toisen sulkeuduttua. |
| 0:10–0:12 | Pari 2: yleinen asenne ja peliala | Aja kaksi viisiportaista väitettä peräkkäin. | Vertaa nykyistä jakaumaa previous-stripissä näkyvään yleiseen asenteeseen. |
| 0:12–0:14 | Pari 3: helpompi ja parempi | Anna molemmille väitteille lyhyt mutta riittävä Vote-aika. | Jätä mahdollinen ero hetkeksi näkyviin; tämä on gallupin keskeinen vertailu. |
| 0:14–0:16 | Pari 4: sisäänkäynti ja korvaaminen | Aja kaksi viisiportaista väitettä. | Nimeä mahdollinen rinnakkaisuus ilman pitkää työmarkkinakeskustelua. |
| 0:16–0:18 | Pari 5: bugit ja dialogi | Aja kaksi kolmen vaihtoehdon kysymystä. | Vertaa taustatyötä ja näkyvää luovaa sisältöä. Jätä viimeinen pari suljettuna nykyiseksi näkymäksi. |
| 0:18–0:20 | Huoneen lukeminen ja siirtymä | Pidä Session Live-tilassa. Nosta vain 2–3 toteutunutta eroa tai yhtäläisyyttä. | Vaihda takaisin esityssivulle viimeistään aikaan 0:20. |

Äänestysistuntoa ei päätetä heti. Viimeinen bugit/dialogi-pari jää helposti
palautettavaksi näkymäksi, koska kysymys 9 näkyy previous-stripissä ja kysymys
10 nykyisenä suljettuna tuloksena. Pariin voidaan palata pääesityksen toisen
osan alussa ennen Quantic Foundry -kuvaajaa. Istunto päätetään ennen taukoa,
jolloin Participant View siirtyy Session Resultsiin.

## Esiintyjän puhelogiikka

Ennen ensimmäistä kysymystä:

> Ensin en kerro, mitä peliala ajattelee. Katsotaan mitä tämä huone ajattelee.

Tarvittaessa terminologinen muistutus:

> Nyt kysyn nimenomaan generatiivisesta AI:sta: työkaluista, jotka tuottavat
> uutta tekstiä, kuvaa, ääntä tai koodia. Kaikki AI ei tee tätä.

Tuloksia käsitellessä:

- sano “tässä huoneessa”, älä “pelaajat ajattelevat”
- keskustele ensisijaisesti kysymysparista, älä jokaisesta Questionista erikseen
- anna nopeaan kysymykseen noin 10–20 sekuntia Vote-aikaa; täydellistä
  osallistumisprosenttia ei odoteta
- nosta enintään yksi havainto per pari
- älä selitä jokaista palkkia
- älä arvioi yksittäisten osallistujien valintoja
- jätä osa tuloksista tarkoituksella myöhemmin ratkaistavaksi

Mahdollisia, tuloksesta riippuvia havaintoja:

- “AI on monelle tuttu, mutta pelinteko voi silti olla kokonaan uusi
  käyttötapa.”
- “Sana käyttänyt näyttää tarkoittavan tässä huoneessa hyvin eripituisia
  kokeita.”
- “Useimpien kokemus voi syntyä ilmaisessa palvelussa. Se ei vielä kerro,
  miksi he suhtautuvat AI:hin myönteisesti tai kielteisesti.”
- “Helpompi ja parempi eivät näytä olevan tässä huoneessa sama asia.”
- “Sama teknologia voi näyttää yhtä aikaa uutena sisäänkäyntinä ja uhkana
  nykyiselle työlle.”
- “Pelkkä AI:n käyttäminen ei näytä ratkaisevan suhtautumista. Myös käyttötapa
  merkitsee.”

Näitä lauseita ei käytetä, jos Result ei tue niitä. Myös parien samanlaisuus on
kelvollinen havainto.

Palattaessa viimeiseen kysymyspariin pääesityksen toisessa osassa:

> Vastaukset eivät ehkä muuttuneet, mutta nyt osaamme kysyä tarkemmin, mitä
> “AI:n käyttäminen pelissä” oikeastaan tarkoittaa.

## Pacing-raja

Kymmenen Questionia on nykyisen työkalun toiminnalla ylärajan tuntumassa.
Jokainen Question pitää sulkea erikseen, sulkeminen vahvistetaan selaimen
confirm-dialogissa ja vasta sen jälkeen voidaan avata seuraava Question.

Täyden harjoituksen jälkeen valitaan toinen näistä:

- **10 kysymystä:** kaikki viisi paria mahtuvat luontevasti 15 minuuttiin
- **8 kysymystä:** poistetaan pari 2, yleinen asenne vastaan peliala; muut neljä
  paria liittyvät suoremmin ohjelman kantavaan kysymykseen.

Kysymysmäärää ei kasvateta yli kymmenen ilman, että Presenter Controls saa
erikseen suunnitellun rapid-fire-käyttötavan tai nykyinen sulkemisvahvistus
muuttuu. Päätös tehdään harjoituksen, ei paperilla lasketun sekuntimäärän
perusteella.

Kokemuskysymystä ja myöhempää asennekysymystä ei ristiintaulukoida. Nykyinen
työkalu näyttää kysymyskohtaiset jakaumat, joten peräkkäisistä tuloksista ei saa
päätellä esimerkiksi, että kielteisesti vastanneet olivat samoja henkilöitä
kuin ilmaisversiota käyttäneet.

## Käyttöjärjestely

Suositeltu laitejako:

- projektori: julkinen `/{joinName}/display`
- esiintyjän oma näyttö tai erillinen laite: salasanalla suojattu `/admin`
- osallistujat: julkinen `/{joinName}`

Esityssivu ja Presentation Display pidetään valmiiksi avattuina erillisissä
täysruutuvälilehdissä tai selainikkunoissa. Siirtymä harjoitellaan niin, ettei
Admin Panel, salasana, selaimen ilmoitukset tai muu yksityinen sisältö näy
projektorilla.

## Tietosuoja ja tulosten tulkinta

- Osallistujilta ei pyydetä nimeä, yhteystietoja tai vapaata tekstiä.
- Guest Identity erottaa selaimet yhden Voting Sessionin sisällä, mutta ei
  takaa yhtä ääntä fyysistä henkilöä kohden.
- Presentation Display ja päättyneen istunnon Session Results ovat julkisia
  niille, jotka tietävät Join Namen.
- Istunto poistetaan tapahtuman jälkeen sovitun säilytysajan mukaisesti.
- CSV-exportia ei tarvita, ellei tulosten myöhempään käyttöön ole etukäteen
  määriteltyä tarkoitusta.
- Tuloksista ei tehdä yleistäviä prosenttiväitteitä myöhemmissä materiaaleissa.

## Tekninen ennakkotarkistus

Viimeistään kaksi päivää ennen:

- varmista tuotantodeployment, HTTPS ja oikea `PUBLIC_ORIGIN`
- luo Draft Session ja tarkista kaikki Options täsmälleen
- varmista, että odotettu osallistujamäärä sopii työkalun testattuun
  100 osallistujan luotettavuustavoitteeseen
- avaa Participant View vähintään kahdella eri puhelimella
- testaa koko Lobby → kymmenen kysymystä pareina → paluu viimeiseen pariin → End
- mittaa erikseen Questionin sulkemisen, confirm-dialogin ja seuraavan
  Questionin avaamisen todellinen rytmi
- tarkista QR-koodi tapahtumassa käytettävältä projektorilta
- testaa venue-verkon lisäksi esiintyjän varayhteys

Tilassa ennen ohjelmaa:

- kirjaudu Admin Paneliin ja varmista 24 tunnin Admin Session
- käynnistä oikea Voting Session vasta, kun Question set on varmasti lopullinen
- avaa Presentation Display projektorille ja Presenter Controls erilliselle
  pinnalle
- varmista, että Display Theme sopii esityksen taustaan
- testaa yksi erillinen harjoitusistunto; älä kuluta varsinaisen istunnon
  kysymyksiä, koska suljettua Questionia ei voi avata uudelleen

## Varasuunnitelma

Jos liittyminen tai reaaliaikapäivitys ei toimi kahden minuutin sisällä:

1. Lopeta tekninen vianhaku yleisön edessä.
2. Tee korkeintaan viisi lyhyttä käsiäänestystä: aiempi GenAI-käyttö, pelinteon
   helpottuminen, pelien paraneminen, bugien korjaaminen ja dialogin
   kirjoittaminen.
3. Käytä enintään viisi minuuttia koko fallbackiin.
4. Siirry henkilökohtaiseen tarinaan ja käytä vapautunut aika esityksen
   myöhempiin keskusteluihin.

Älä näytä vanhan yleisön tuloksia uuden yleisön vastauksina. Offline-varakuvat
saavat havainnollistaa käyttöliittymää, mutta ne merkitään selvästi demoksi.

## Onnistumiskriteerit

- Yleisö liittyy ilman tiliä ja ensimmäinen Question avautuu viimeistään
  kahdeksan minuutin kohdalla.
- Lopullinen 8–10 kysymyksen sarja suljetaan 15 minuutin kokonaisajan sisällä.
- Kysymykset muodostavat neljä tai viisi tarkoituksellista vertailuparia.
- Presentation Display näyttää tulokset projektorilta luettavasti.
- Jokaista paria kommentoidaan enintään yhdellä havainnolla ja viimeiseen
  bugit/dialogi-pariin voidaan palata ilman pitkää navigointia.
- Istunto päättyy ennen taukoa ja osallistujat näkevät Session Resultsin.
- Vapaata tekstiä, henkilötietoja tai hallintanäkymää ei näytetä yleisölle.
