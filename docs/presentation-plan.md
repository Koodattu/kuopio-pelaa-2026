# Esityssuunnitelma

## Tavoite ja rajaus

Ohjelman nimi: **Tekoäly tuli – nyt kaikki on ohi... vai onko?**

Julkiset verkkosivu- ja some-esittelyt ovat
[ohjelmatekstien dokumentissa](program-copy.md).
Ohjelman kantava kysymys, tehtävä ja yleisöpolku on määritelty ensin
[kokonaisidean dokumentissa](program-concept.md). Tämä dokumentti tarkentaa sen
esitysrakenteeksi.

- Formaatti: esitys + yleisöäänestykset + tauko + ohjattu työpaja
- Kokonaiskesto: 120 minuuttia
- Esitys: noin 60 minuuttia
- Tauko: 15 minuuttia esityksen ja työpajan välissä
- Työpaja ja yhteinen lopetus: noin 45 minuuttia
- Esityskieli: suomi
- Ikäsuositus: 12+
- Yleisö: pelaajat, harrastajat, pelinkehityksestä kiinnostuneet sekä ihmiset,
  joilla ei ole aiempaa ohjelmointikokemusta
- Sävy: utelias, suora ja itseironinen; kriittinen mutta ei
  teknologiapelkoinen tai yleisöä vähättelevä

Koko ohjelman viestintätehtävä:

> Ohjelman lopussa yleisö pystyy arvioimaan yksittäistä AI-käyttöä
> täsmällisemmin kuin akselilla “hyvä tai paha”, koska se on nähnyt eri
> käyttötapojen seurauksia ja kokenut itse, missä generointi auttaa sekä missä
> tekijän harkinta, maku ja vastuu ratkaisevat.

Kantava loppulause:

> AI voi tehdä pelistä olemassa olevan. Ihmisen pitää tehdä siitä pelaamisen
> arvoinen.

Esityksen ei ole tarkoitus ratkaista sitä, onko AI yksiselitteisesti hyvä tai
paha. Se auttaa yleisöä arvioimaan käyttötapaa viiden kysymyksen kautta:

1. Mihin työvaiheeseen AI:ta käytetään?
2. Kenen aineistolla ja ehdoilla se toimii — ja jäljitelläänkö tunnistettavaa
   ihmistä?
3. Kuka tekee lopulliset valinnat ja kantaa vastuun?
4. Näkyykö tai kuuluuko lopputulos pelaajalle?
5. Onko käytöstä kerrottu ymmärrettävästi?

Terminologiassa erotetaan koko esityksen ajan:

- **AI / tekoäly:** yläkäsite järjestelmille, jotka esimerkiksi ennustavat,
  suosittelevat, järjestävät, tunnistavat tai generoivat
- **generatiivinen AI / GenAI:** AI:n osa, joka tuottaa syötteen perusteella
  uutta tekstiä, kuvaa, ääntä, videota tai koodia.

Arkikielessä “AI” tarkoittaa nykyään usein GenAI:ta. Tämä havainto toimii
avauksena, mutta faktaväitteissä ja kyselyissä käytetään aina lähteen tarkoittamaa
tarkempaa termiä.

AI/GenAI-erottelussa nimetään myös kolme peleistä tuttua, generatiivista AI:ta
vanhempaa käyttötapaa: sääntöpohjaiset pelihahmot, pelaajan taitoluokitus ja
matchmaking sekä proseduraalinen kenttien generointi. Esimerkit ovat nopea
puheankkuri, eivät oma historiakatsaus.

## Avausvuorovaikutus

Esitys alkaa ennen Live Votingia lyhyellä huoneelle heitetyllä kysymyksellä:

> Kun sanon tekoäly, mikä on ensimmäinen asia, joka tulee mieleen?

Otetaan 2–4 nopeaa huudahdusta. Jos joku sanoo ChatGPT, näytetään virallinen
ChatGPT-tunnus ja kysytään “miksi juuri tämä?”. Jos kukaan ei sano sitä, tunnus
paljastetaan silti ja kysytään, miksi juuri tästä yhdestä palvelusta tuli monelle
koko tekoälyn synonyymi. Avaus ei saa olla riippuvainen tietystä vastauksesta.

Tämän jälkeen kerrotaan vain välttämätön rajaus: Live Votingin kysymykset
koskevat pääasiassa generatiivista AI:ta. Yläkäsitteen ja GenAI:n ero avataan
tarkemmin heti äänestyksen jälkeen.

Tarkempi rajaus suhteessa aiempaan esitykseen on
[Toivolanranta-referenssin soveltamissuunnitelmassa](toivolanranta-reference-adaptation.md).
Valitut väitteet, kuvaajat, caveatit ja hylätyt vertailut ovat
[tutkimus- ja kuvaajasuunnitelmassa](research-and-chart-plan.md).

## Kertomuksen kaari

1. **Mitä huone ajattelee?** Otsikko ja gallup tekevät yleisön lähtötilanteen
   näkyväksi ennen puhujan argumenttia.
2. **Mitä tekijän työpöydällä tapahtuu?** AI/GenAI-erottelu, kaksi GDC-kuvaajaa
   ja puhujan oma kokemus siirtävät keskustelun yleisestä paniikista todellisiin
   käyttötapoihin.
3. **Mitä oikea projekti vaatii?** SuomiWoW ja sen CCG näyttävät, mitä yhteisö,
   data, tarkoitus ja rajaukset lisäävät tekniseen toteutukseen.
4. **Mitä pelaaja kohtaa?** Pelaajatutkimus, Steamworksin raja ja Clair Obscur
   siirtävät huomion tuotannosta näkyvään sisältöön, luottamukseen ja vastuuseen.
5. **Mitä huone ajattelee nyt?** Alun tuloksiin palataan ilman väitettä, että
   mielipiteiden pitäisi muuttua.
6. **Mitä tapahtuu, kun yleisö kokeilee itse?** Työpaja testaa, kuinka nopeasti
   versio syntyy ja kuinka paljon pelillistä sekä persoonallista valintaa se
   vielä tarvitsee.
7. **Mitä tästä jää käteen?** Yhteinen purku vastaa otsikkoon kokemuksen kautta:
   generointi voi nopeuttaa alkua, mutta tekijyys ja vastuu eivät katoa.

## 120 minuutin ohjelmarunko

Ajat ovat tavoiteaikoja, eivät yleisölle näytettävää sisältöä.

| # | Aika | Dian yleisölle näkyvä pääajatus | Tehtävä ja sisältö | Visuaali tai toiminta |
|---:|---:|---|---|---|
| 0 | 0:00–0:05 | Mitä “tekoäly” tarkoittaa teille juuri nyt? | Ylidramaattinen otsikko, lyhyt esittäytyminen, sana-assosiaatio, ChatGPT-tunnuksen paljastus ja kysymys “miksi juuri tämä?”. Älä vielä anna ohjelman vastausta. | Otsikkodia → yleisön huudahdukset → virallinen ChatGPT-tunnus. |
| 1 | 0:05–0:20 | Mitä tämä huone ajattelee AI:sta? | Avaa Live Voting -istunto, anna yleisön liittyä QR-koodilla ja käy läpi neljä ennalta laadittua kysymystä. | Työkalun Lobby, Participant View ja Presentation Display; katso [Live Voting -suunnitelma](live-voting-plan.md). |
| 2 | 0:20–0:24 | AI ei alkanut ChatGPT:stä. Se oli jo valitsemassa, mitä näet. | Erota AI-yläkäsite ja GenAI. Näytä suositteleminen, järjestäminen ja tunnistaminen rinnakkain uuden sisällön generoimisen kanssa. Nimeä nopeasti myös sääntöpohjaiset pelihahmot, taitoluokitus/matchmaking ja proseduraalinen kenttien generointi. Tee selväksi, ettei tämä tee GenAI-kritiikistä tekopyhää. | Yksi selkeä yläkäsite/alajoukko-sommittelu: peleistä kolme pientä esimerkkiä ja arjesta YouTube, TikTok sekä Instagram. Ei aikajanaa tai historiakatsausta. |
| 3 | 0:24–0:30 | Käyttö ei tarkoita hyväksyntää | Näytä GDC:n saman kyselyn kaksi eri mittaria: 36 % käyttää GenAI:ta työssään ja 52 % arvioi vaikutuksen alaan kielteiseksi. Nosta 7 % myönteinen arvio erillisenä lukuna. Vertaa jännitettä, ei vastaajaryhmien päällekkäisyyttä. | **Datavisuaali 1/3:** kaksi samalla 0–100-asteikolla olevaa pylvästä ja pieni 7 %:n numeronosto. Ei stacked baria eikä vuositrendiä. |
| 4 | 0:30–0:35 | Ensin vaihtoehtoja, vasta sitten peli | Näytä GenAI:ta työssään käyttävien yleisimmät käyttötavat: ideointi/tutkimus, arjen tehtävät, koodiapu ja prototypointi. Peilaa tulosta yleisön suosimaan käyttökohteeseen. | **Datavisuaali 2/3:** järjestetyt vaakapylväät 81 / 47 / 47 / 35 %. Nimittäjä ja monivalintacaveat näkyviin. |
| 5 | 0:35–0:40 | Portti madaltuu. Vastuu ei katoa. | Yhdistä puhujan oma siirtymä koodin kirjoittajasta rakentajaksi kysymykseen siitä, mihin työ, taito ja vastuu siirtyvät, kun ensimmäinen versio syntyy nopeammin. | Henkilökohtainen ennen / nyt -ankkuri ja lyhyt reitti ideasta protoksi; ei kolmatta kuvaajaa. |
| 6 | 0:40–0:42 | Kun raididata muuttui leikiksi | Esittele SuomiWoW yhden lauseen tuotteena ja kerro, miksi datapalveluun syntyi CCG. | Yksi projektikuva ja teesilause; ei teknologiapinolistaa. |
| 7 | 0:42–0:48 | Oikea yhteisö tekee datasta merkityksellistä | Avaa yksi viiden kortin pakka, tarkastele yhtä dataan sidottua korttia ja näytä kokoelma. | Live-demo; katso [SuomiWoW-showcase](project-showcase-plan.md). |
| 8 | 0:48–0:50 | Teknisestä mahdollisuudesta ei vielä synny syytä välittää | Nimeä, mitä yhteisö, data ja tekijän rajaukset toivat toteutukseen. Käännä näkökulma tekijän työpöydältä pelaajan ruudulle. | Palaa esityssivulle ja jätä näkyviin yksi teesilause. |
| 9 | 0:50–0:54 | Luova sisältö osuu herkempään rajaan | Näytä, että Quantic Foundryn valikoituneessa otoksessa GenAI-dialogi ja -questit kohtasivat dynaamista vaikeustasoa enemmän vastustusta. Sano ääneen erillinen identiteettiraja: tunnistettavan ihmisen äänen, kasvojen tai performanssin jäljittely on suostumus- ja korvauskysymys. | **Datavisuaali 3/3:** kolme ohutta pylvästä tai dot plot 83 / 77 / noin 50 %. Identiteettiraja on yksi puhuttu lause, ei lisäkalvo. |
| 10 | 0:54–0:58 | Pelaajalle asti päätyvä sisältö muuttaa vastuuta | Siirry Steamworksin rajaan sisäisestä tehokkuudesta julkaistuun ja live-generoituun sisältöön. Päätä Clair Obscurin lyhyeen tapahtumaketjuun: kokeilu → placeholder jäi julkaisuun → korjaus → palkintosäännön seuraus. Kysy, missä varsinainen epäonnistuminen tapahtui. | Nopea rajakaavio ja nelivaiheinen tapausaikajana, eivät lisäkuvaajia. |
| 11 | 0:58–1:00 | Tätä mieltä olimme ennen kuin puhuimme asiasta | Palaa kahteen olennaisimpaan suljettuun kysymykseen, nimeä jännite, päätä istunto ja anna tauon paluuaika. Jätä kantava kysymys työpajassa testattavaksi. | Live Voting -tulokset → taukonäkymä, QR-koodi, lyhyt URL ja paluuaika. |
| — | 1:00–1:15 | Tauko | Täysi 15 minuutin tauko esityksen ja työpajan välissä. | Pysyvä taukonäkymä: paluuaika, QR-koodi ja lyhyt URL. |
| 12 | 1:15–1:20 | Yksi ruutu. Yksi mekaniikka. Yksi vitsi. | Kokoa yleisö takaisin, varmista playground ja rajaa tehtävä. Näytä kaksi ennalta tehtyä tulosta samasta promptista. | Kolme suurta sääntöä, sama prompti / eri tulos ja yksi debug-ohje. |
| 13 | 1:20–1:30 | Tee ensimmäinen proto | Yleisö määrittää hahmon, tavoitteen, esteen ja tunnelman. Esiintyjä tekee saman live-esimerkkinä. | Täytettävä prompttipohja ja 3–4 ideaa. |
| 14 | 1:30–1:40 | Nyt lisätään pelisuunnittelua | Jokainen pyytää ensin kolme vaihtoehtoa KYSY-tilassa, valitsee niistä yhden ja toteuttaa vain sen MUOKKAA-tilassa. | KYSY / valitse / MUOKKAA -rytmi ja live-iterointi. |
| 15 | 1:40–1:50 | AI teki version. Nyt varastetaan peli takaisin ihmiselle. | Osallistuja lisää oman vitsin, paikallisen viittauksen, pelon, kokemuksen tai oudon säännön. | Maku- ja tyylipromptien lyhyt valikoima. |
| 16 | 1:50–1:56 | Mitä hirviöitä syntyi? | Näytä ensin vieruskaverille. Ota enintään 1–3 vapaaehtoista. Kysy, mitä AI teki hyvin, typerästi ja mitä ihminen paransi. | Selkeät showcase-ohjeet. |
| 17 | 1:56–2:00 | Maailmanloppu oli prototyyppi | Palaa avaukseen, kokoa selviytymissäännöt ja päätä kantavaan loppulauseeseen. | Viisi sääntöä, lopuksi vain päätöslause. |

## Pakollinen ja leikattava sisältö

Pidetään kaikissa versioissa:

- alun sana-assosiaatio, ChatGPT-paljastus ja kysymys “miksi juuri tämä?”
- alun 15 minuutin Live Voting -osuus ja myöhempi paluu sen tuloksiin
- AI-yläkäsitteen ja generatiivisen AI:n lyhyt erottelu ilman
  tekopyhyysväitettä
- henkilökohtainen “koodaajasta builderiksi” -ankkuri
- SuomiWoW CCG -showcase: yksi pakka, yksi kortti ja yhteys esityksen väitteeseen
- AI:n käytön ja kasvavan epäluottamuksen ristiriita
- reilu kuvaus hyödyistä ja tekemisen kynnyksen madaltumisesta
- taustatyön ja pelaajalle julkaistun luovan sisällön raja
- Steamworksin sisältöraja ja Clair Obscur -tapauksen QA-, disclosure- ja
  sääntökysymys ilman väitettä, että peli olisi “tehty AI:lla”
- yleisön rajaäänestys
- workshopin kolme sääntöä
- kierros “tee siitä sinun”
- lopun selviytymissäännöt ja päätöslause

Leikkausjärjestys, jos esitysosuus uhkaa ylittää 60 minuuttia:

1. Käytä Live Votingissa kolmea kysymystä neljän sijaan; säilytä liittymisaika
   ja tulosten lyhyt käsittely.
2. Lyhennä SuomiWoW-osuus seitsemään minuuttiin ja varsinainen live-demo viiteen
   minuuttiin: yksi pakka, yksi kortti ja teesilause. Älä selaa koko palvelua.
3. Jätä roolikohtainen GDC-kuvaaja varamateriaaliin.
4. Poista 7 818 Steam-pelin numeronosto, mutta säilytä Steamworksin raja ja
   Clair Obscurin nelivaiheinen tapaus.
5. Siirrä Microsoft/Xbox ja muut ylimääräiset tapausesimerkit Q&A- tai
   varamateriaaliin.
6. Älä lyhennä 15 minuutin taukoa esityksen ylityksen korjaamiseksi.

Jos workshop myöhästyy erillisestä teknisestä syystä:

1. Jätä lavashowcase pois, mutta säilytä vieruskaverille näyttäminen.
2. Yhdistä workshopin toinen ja kolmas kierros; älä poista oman maun lisäämistä.

## Visuaalinen suunta

Esitys tehdään verkkosivuna, mutta sen ei pidä näyttää dashboardilta tai
komponenttikirjaston esittelyltä.

- 16:9-sommittelu, joka skaalautuu projektorille ja läppärille.
- Yksi pääväite ja yksi päävisuaali per dia.
- Suuret otsikot, lyhyt leipäteksti ja tasaiset vasen/oikea-marginaalit.
- Tumma, hieman dramaattinen aloitus; workshopia kohti sävy voi lämmetä ja
  muuttua kevyemmäksi.
- Rajattu paletti: taustaväri, tekstiväri, yksi AI:ta kuvaava korostusväri ja
  yksi ihmisen valintaa kuvaava korostusväri.
- Kuvaajat piirretään samalla visuaalisella kielellä kuin muu esitys. Ei
  oletustyylisiä Recharts-kuvaajia, 3D-efektejä tai tarpeetonta selitettä.
- Jokaisessa kuvaajassa näkyvät mittayksikkö, otos tai rajaus, lähde ja vuosi.

## Liike ja rytmi

Animaation tehtävä on ohjata huomiota, ei todistaa että sivu on interaktiivinen.

- Käytä pääasiassa opacity- ja translate-siirtymiä.
- Paljasta sisältö puheen tahdissa 1–3 vaiheessa per dia.
- Kuvaajan viivat tai pylväät voivat piirtyä kerran, kun dia avataan.
- Pidä tavalliset siirtymät noin 180–300 ms ja tärkeät avaukset enintään noin
  450 ms.
- Älä animoi taustaa jatkuvasti.
- Kunnioita `prefers-reduced-motion`-asetusta.

## Teksti ja esittäjän muistiinpanot

- Yleisölle näkyvä teksti on suomeksi ja puheeseen sopivaa.
- Näkyvillä dioilla ei ole aikatauluja, tuotanto-ohjeita tai pitkiä
  puhujamuistiinpanoja.
- Jokaisella dialla on yksi lause, jonka yleisön tulisi muistaa.
- Puhujamuistiinpanot säilytetään sisällön yhteydessä, mutta ne erotetaan
  julkisesta esitysnäkymästä.
- Jokaisen ulkoisen faktaväitteen ja kuvaajan muistiinpanoissa on lähdetunnus,
  joka viittaa [lähdepankkiin](source-bank.md).

## Sisällön hyväksymiskriteerit

- Koko ohjelma toimii 120 minuutissa ilman kiireistä loppua.
- Live Voting -osuus kestää enintään 15 minuuttia ja sisältää korkeintaan neljä
  yksivalintakysymystä.
- SuomiWoW-osuus kestää enintään kymmenen minuuttia. Sen varsinainen live-demo
  kestää enintään kahdeksan minuuttia ja näyttää vain yhden pack openingin.
- Showcase erottaa nykyisen keräilykokemuksen suunnitelluista tulevista
  pelimuodoista eikä keksi AI:n roolia projektissa.
- Äänestystuloksista puhutaan tämän huoneen näkemyksenä, ei edustavana
  tutkimusaineistona.
- Esitys päättyy viimeistään aikaan 1:00 ja tauko kestää täydet 15 minuuttia.
- Workshop alkaa aikaan 1:15 ja sille jää 45 minuuttia yhteinen lopetus mukaan
  lukien.
- Workshop käyttää AI Workshop Playgroundin työpajasalasanatilaa; osallistujilta
  ei pyydetä omia API-avaimia.
- Esitys erottaa AI:n ja generatiivisen AI:n eikä käytä
  suositusjärjestelmiä todisteena siitä, että kaikki GenAI-kritiikki olisi
  epäjohdonmukaista.
- AI/GenAI-erottelu sisältää lyhyet peliesimerkit, ja vastuuosuus nimeää
  tunnistettavan äänen, kasvojen tai performanssin erilliseksi suostumus- ja
  korvauskysymykseksi.
- Tunnin esitysosuudessa on täsmälleen kolme ennalta valittua datavisuaalia;
  prosessikaaviota ja tapausaikajanaa ei esitetä tilastokuvina.
- Jokainen numero on tarkistettu alkuperäislähteestä ja merkitty lähdepankissa
  valmiiksi.
- Yleisön toiminta on joka vaiheessa yksiselitteinen.
- Päätös vastaa avauksessa asetettuun jännitteeseen eikä lopu yleiseen
  “kiitos”-diaan.
