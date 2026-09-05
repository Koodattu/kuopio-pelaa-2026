# Tutkimusmuistio 5.9.2026: Astra, yhden promptin pelit ja pelaamisen syy

Tämä muistio täydentää [syyskuun tutkimuskierrosta](research-pass-2026-09-05.md).
Se on tutkimusta ja sisältösuosituksia. Esitystä, HTML-prototyyppejä tai
työpajaa ei ole muutettu eikä PowerPointia rakennettu.

## Suositus esityksen väitteeksi

**Astra-esimerkit kannattaa ottaa mukaan, koska ne tekevät esityksen
pääkysymyksestä ajankohtaisemman.** Pelattavan kokonaisuuden tuottaminen
voi jo sisältää koodin, mallintamisen, kuvituksen, animaation ja automaattisen
testaamisen. Tätä saavutusta ei tarvitse pienentää voidakseen kysyä, mitä
pelaaja saa siitä.

Ehdotettu pääväite:

> Kun ensimmäinen pelattava versio syntyy yhdellä pyynnöllä, kysymys on yhä:
> kenelle tämä on tehty, mitä hänen pitäisi kokea ja mistä tiedämme sen toimivan?

Väite ”kukaan ei halua pelata näitä” olisi liian vahva. Tässä aineistossa on
myös tekijän raportoimaa pelaamisen iloa. Kaveriporukalle, itselle tai yhteen
iltaan tehty peli voi täyttää tarkoituksensa. Sen ei tarvitse kerätä tuhansia
pelaajia tai sitouttaa viikoiksi.

Terävämpi kritiikki kohdistuu **todistamattomaan siirtymään teknisestä
saavutuksesta pelaaja-arvoon**. ”Tämä syntyi yhdellä promptilla” kertoo
tuotantotavasta. Se ei yksin vastaa siihen, miksi joku valitsisi juuri tämän
pelin tai oliko pelaamiseen käytetty aika hänelle hyvä kokemus.

## Mitä tarkistettiin ja mitä ei?

Kierroksella luettiin OpenAI:n julkaisu- ja showcase-aineistoa, alkuperäisiä
tekijäjulkaisuja X:ssä, Matthew Bermanin alkuperäisen YouTube-videon
aikaleimallinen tekstitys sekä pelisuunnittelun ja pelitestauksen lähteitä.
Koontisivuja ja Reddit-uudelleenjulkaisuja käytettiin alkuperäisten lähteiden
löytämiseen; alla olevat tapausväitteet perustuvat alkuperäisiin lähteisiin.

Tämä ei ole oma mallivertailu, pelien tekninen auditointi tai pelaajatutkimus.
Pelejä ei pelitestattu tässä työssä. Tekijöiden ilmoittamia aikoja,
promptimääriä tai kustannuksia ei voitu riippumattomasti varmentaa. Julkinen
työvaihekuvaus ei myöskään ole täydellinen ajoloki. Tarkistetuista lähteistä
ei löytynyt näille tapauksille systemaattista kohdeyleisön pelaajadataa.
Se on tiedon puute, ei todiste yleisön puuttumisesta.

## Konkreettiset Astra-tapaukset

### 1. Anshun viraali 45 minuutin esimerkki: tärkeä tarkennus alkuperäisessä ketjussa

Anshu (@anshuc) kertoi 5.9.2026 yhden promptin 3D-demosta. Työnkulkuun
kuuluivat Codex, Blender MCP, konsepti sekä kuvageneroinnilla tehtävät
tyyliviitteet. Mallia pyydettiin iteroimaan pelinäkymiä viitteiden suuntaan
ja tavoittelemaan 60 kuvaa sekunnissa. Tämä oli ohje, ei riippumattomasti
mitattu suorituskykytulos. [Alkuperäinen julkaisu](https://x.com/anshuc/status/2096008083826725132),
[työnkulku](https://x.com/anshuc/status/2096008086901113339).

Myöhemmässä tarkennuksessa tekijä sanoo pyytäneensä alkuun pientä
grafiikkademoa; gameplay oli vielä työn alla. Hän lupaa pelattavan demon ja
promptin myöhemmin. Hän myös suhtautuu itse varauksella ilmoittamaansa
kiintiökulutukseen. [Tekijän tarkennus](https://x.com/anshuc/status/2096170387126042973).

**Käyttö esityksessä:** vahva esimerkki grafiikan ja työkalujen käytön
automatisoinnista. Tätä ensimmäistä tulosta ei pidä nimetä valmiiksi
yhden promptin peliksi vastoin tekijän omaa tarkennusta. Tarkennus ei ole
syy pilkata demoa: se kertoo, mitä tekijä todella yritti tehdä.

### 2. Street Heat: laajempi yhden lauseen peliväite

Higgsfield AI ilmoitti 4.9.2026 tehneensä Astralla selainajopelin yhden
lauseen kuvauksesta. Julkaisussa nimetään drifting, combo-pisteytys,
läheltä piti -bonukset, nopeusansat ja nitro. Työnkulun kerrotaan ajaneen
Higgsfield Supercomputerissa. [Higgsfieldin alkuperäinen julkaisu](https://x.com/higgsfield_ai/status/2095916820431827408).

Kyse on palveluntarjoajan omasta demoväitteestä. Tarkistettu julkaisu ei
sisällä koko promptia, ajolokia, yritysten kokonaismäärää tai
kohdeyleisön pelitestituloksia. Sen perusteella ei voi määrittää yleistä
onnistumisprosenttia tai arvioida kaikkien ominaisuuksien toimintaa.

**Käyttö esityksessä:** tunnustetaan väitteen laajuus. Pisteytys ja
ajomekaniikat ovat pelisuunnittelua, eivät pelkkää grafiikkaa. Seuraava
kysymys on, tekevätkö niiden suhteet ajamisesta kiinnostavaa tarkoitetulle
pelaajalle. Ominaisuuslista ei vielä vastaa siihen.

### 3. Cloud Top Chaos: nautintoa ja konkreettinen palautekierros samassa esimerkissä

Matthew Berman esittelee Fall Guys -henkistä peliä alkuperäisen
videonsa kohdassa 29:18. Hän kutsuu lähtöä yhden promptin tulokseksi,
mutta tarkentaa 29:49–29:57 näytettävän version sisältävän Brianin
palautteesta tehdyn lisäpromptin. Palautteen aiheet ovat hiirtä seuraava
kamera, enemmän kallistuvat tasot ja reunojen läpi sukeltamisen korjaus
(30:31–30:44). [Alkuperäinen video tästä kohdasta](https://www.youtube.com/watch?v=9xa7RTC5pzo&t=1758s).

Berman kuvaa peliä hauskaksi ja palaa siihen myöhemmin. Kohdassa
55:23–55:41 hän arvioi käyttäneensä itse noin neljä minuuttia ja mallin
noin tunnin. Nämä ovat tekijän arvioita. [Pelaamiskokemuksen ja ajan kuvaus](https://www.youtube.com/watch?v=9xa7RTC5pzo&t=3323s).

**Käyttö esityksessä:** paras silta meidän aiheeseemme. Se antaa tilaa
sekä innostukselle että työlle kokemuksen parissa. Tekijän kertoma ilo
on rajallista myönteistä näyttöä, ei riippumaton yleisötutkimus. Palautetta
ei saa myöskään esittää kontrolloituna todisteena siitä, että juuri
ihmisen muutos aiheutti kaiken hauskuuden.

### 4. Sunwake ja Little Ritual: julkiset työvaiheet paljastavat suunnittelun

Thomas Ricouardin Sunwake on Astralla tehty purjehduspeli. Sen julkaistu
rakennuspolku sisältää konseptien valinnan, ensimmäisen pelattavan osan,
veneilyn tuntuman kehittämisen, vesityylien vertailun, majakkakohteet,
Blender-veneen ja kelluvuuden säätämisen. Sivulla on myös pelilinkki.
[Sunwaken prosessikuvaus](https://developers.openai.com/showcase/sunwake).

Jeff Wangin Little Ritualissa jo alkuperäinen briefi määrittelee
kahvinkuljetuksen, pienen pallomaisen maailman, löytämisen ilon,
tunnelman ja palautteella jatkamisen. Julkaistut vaiheet ulottuvat
muokattaviin Blender-objekteihin, tekstuuriin, liikkeeseen ja mobiiliohjaukseen.
[Little Ritualin prosessikuvaus](https://developers.openai.com/showcase/little-ritual).

**Käyttö esityksessä:** näitä ei esitellä yhden promptin tuloksina.
Ne näyttävät, miltä tavoitteellinen AI-avusteinen pelin rakentaminen voi
näyttää. Julkaistu briefi osoittaa suunnittelutavoitteen; se ei vielä
osoita, että pelaajat kokivat sen tavoitellulla tavalla.

### 5. Playco: nopeampi prototypointi auttaa valitsemaan

OpenAI:n 3.9.2026 julkaisemassa asiakastarinassa Playco kuvaa Playbotin
kautta tapahtuvaa moottorityöskentelyä, jossa malli voi muokata, pelata,
testata ja korjata. Harmaalaatikkoprototyyppiä iteroitiin ensin, minkä
jälkeen samasta perustasta tehtiin kolme teemaversiota. Yksi versio
tarvitsi suorituskykykorjauksen. Yritys raportoi aiempaan malliin nähden
50 prosenttia vähemmän käsikorjauksia.
[Playcon asiakastarina](https://openai.com/index/playco-game-prototyping-with-astra/).

**Käyttö esityksessä:** tekijöiden mahdollisuus kokeilla ja vertailla
useampia ideoita on konkreettinen hyöty. Luku on yrityksen oma
prosessihavainto; se ei tarkoita 50 prosenttia pienempää koko pelin
budjettia tai parempaa pelaajien vastaanottoa. ”Kerralla” tapahtunut
teemaversioiden teko ei myöskään tarkoita, että koko hanke alkoi tyhjästä
ilman edeltävää suunnittelua.

Virallinen julkaisusivu näyttää lisäksi Blenderistä Unreal Engine 5:een
viedyn taloympäristön. Se on hyödyllinen todiste sovellusten yli ulottuvasta
tekemisestä, mutta arkkitehtuurin läpikäveltävä ympäristö ei itsessään
ole pelin kysyntätutkimus. [OpenAI:n julkaisusivu](https://openai.com/index/gpt-6-astra/).

## Mitä ”yksi prompti” ja ”alusta loppuun” oikeastaan rajaavat?

**Yksi käyttäjän aloituspyyntö voi käynnistää monta työvaihetta.** Malli
voi tuottaa koodia ja materiaaleja, käyttää sovelluksia, tarkastaa tuloksia
ja korjata niitä. Iterointi voi siirtyä käyttäjältä agentille. Tämä on osa
saavutusta eikä automaattisesti peruste hylätä yhden promptin kuvausta.
Anshun julkinen ohje ja Playcon prosessi näyttävät juuri tällaista
työskentelyä.

Jos termiä käytetään esityksessä, kerrotaan mitä sillä tarkoitetaan:

| Ilmaus | Mitä tarvitsemme sen rinnalle? |
|---|---|
| Yksi prompti | Oliko tämä ensimmäinen käyttäjäpyyntö? Oliko myöhempiä ohjeita tai käsieditointia? |
| Ensimmäinen yritys | Kuinka monta muuta ajoa tai vaihtoehtoa tehtiin? Onko määrä tiedossa? |
| Tehty 45 minuutissa | Onko kyse käyttäjän työajasta vai koko kuluneesta ajasta? Mitä valmisteluja oli? |
| AI teki kaiken | Mitkä työkalut, kuvanluontimallit, lähtöprojektit ja aineistot olivat mukana? |
| Valmis peli | Valmis mihin tarkoitukseen: kokeiltavaksi, kaveri-iltaan vai ylläpidettävään julkaisuun? |

Kaikkea ei tarvitse tietää voidakseen näyttää kiinnostavan esimerkin.
Tuntematon merkitään tuntemattomaksi. Julkaistujen parhaiden esimerkkien
joukosta ei lasketa tavallisen käyttäjän onnistumisen todennäköisyyttä.

”Alusta loppuun” voi tarkoittaa matkaa briefistä toimivaan peliin. Pelaajan
kannalta matka sisältää lisäksi pelin löytämisen, aloituksen ymmärtämisen
ja itse kokemuksen. Nämäkin tehtävät voivat hyötyä AI:sta. Yhden
tuotantoketjun näyttäminen ei vielä varmista koko matkan onnistumista.

## Kaksi yleisöä: demon katsoja ja pelin pelaaja

Tämä on muistion toimituksellinen tulkinta, ei mitattu yleisöjakauma.

AI-demolla voi olla selkeä tarkoitus: näyttää mallin kyky, auttaa
tekijää oppimaan tai herättää keskustelua. Sen katsoja voi saada
videosta juuri sen, mitä tuli hakemaan. Pelin tarkoitus voi olla toinen.
Katsoja, jota kiinnostaa tekemisen nopeus, ei välttämättä ole kiinnostunut
pelaamaan ajopeliä. Vastaavasti ajopelin pelaaja voi arvostaa ohjaustuntumaa
ilman erityistä kiinnostusta tuotantotapaan.

Siksi esityksessä kannattaa kysyä:

> Mikä tässä kiinnostaa sinua: että peli syntyi näin, vai että haluaisit pelata sitä?

Molemmat, toinen tai ei kumpikaan ovat mahdollisia vastauksia. Esityksessä
ei tarvitse teeskennellä, että luomisen tarina olisi kaikille yhdentekevä.

Kysymystä ”kenelle?” ei myöskään pidä muuttaa pakolliseksi markkinointiharjoitukseksi:

| Tarkoitus | Sopivaa näyttöä onnistumisesta |
|---|---|
| Oma kokeilu tai oppiminen | Tekijä sai tutkia kiinnostavaa ideaa tai oppi jotakin. |
| Yhden illan peli kavereille | Kaverit ymmärsivät pelin ja kokivat illan hauskaksi. |
| Lyhyt tunnelma tai taideteos | Kokija sai tavoitellun vaikutelman; palaaminen ei ole välttämätön tavoite. |
| Tietyn yhteisön peli | Yhteisön jäsen tunnisti itselleen merkityksellisen asian ja halusi osallistua. |
| Laajempi julkaisu | Tarkoitetut pelaajat löytävät pelin, kokeilevat sitä ja pitävät kokemusta lupauksen arvoisena. |

Nämä ovat ehdotettuja arviointiperusteita. Peliajan maksimoiminen ei ole
kaikkien pelien laatumittari, eikä pieni yleisö ole epäonnistuminen.

## Mitä työtä ”pelin generoimisen” rinnalla on tehtävä?

Pelisuunnittelun MDA-kehys erottaa säännöt ja toteutuksen, pelaamisessa
syntyvän toiminnan sekä tavoitellun kokemuksen. Sen *aesthetics* tarkoittaa
pelaajan kokemusta ja tunnereaktiota, ei vain ulkoasua. Kehys auttaa
selittämään, miksi toimivista osista ei voi suoraan päätellä kokemuksen
laatua. Se on vuoden 2004 suunnittelukehys, ei tutkimustulos Astran
rajoista tai kaava hyvään peliin.
[Hunicke, LeBlanc ja Zubek: MDA](https://www.cs.northwestern.edu/~hunicke/MDA.pdf).

Alla on oma sovelluksemme esitykseen. Luettelo ei tarkoita, että kaikki
asiat puuttuisivat tarkistetuista peleistä tai että vain ihminen voisi
tehdä niitä.

| Työ | Kysymys pelaajan kannalta | Konkreettinen ratkaisu voi olla… |
|---|---|---|
| Tarkoitus ja kohdeyleisö | Miksi tämä sopii minulle tässä tilanteessa? | Viiden minuutin kaverihaaste tai rauhallinen löytöretki. |
| Pelin ydin | Minkä kiinnostavan asian saan tehdä? | Ajolinjan valinta, yllätys, oivallus tai yhdessä syntyvä tilanne. |
| Tuntuma ja luettavuus | Ymmärränkö mitä tapahtui ja voinko vaikuttaa siihen? | Kameran säätö, selkeä osumapalaute tai ennakoitava liike. |
| Oppiminen ja rytmi | Saanko sopivan mahdollisuuden oppia ja yllättyä? | Ensimmäisen tilanteen muuttaminen tai turhan odotuksen poistaminen. |
| Kokonaisuuden valinta | Tukevatko ominaisuudet samaa kokemusta? | Mekaniikan poistaminen, vaikka se toimii ja oli helppo generoida. |
| Pelitestaus | Kokiko tarkoitettu pelaaja sen, mitä tavoittelimme? | Pelaamisen havainnointi ja muutoksen kokeilu hänen palautteestaan. |
| Saavutettavuus ja toimintavarmuus | Pääsenkö peliin sisään omalla laitteellani ja taidoillani? | Luettavat ohjeet, toimiva ohjaustapa ja sopiva suorituskyky. |
| Julkaiseminen ja vastuu | Voinko luottaa siihen, mitä minulle luvataan? | Rehellinen kuvaus, aineistojen alkuperän selvittäminen ja ongelmien korjaus. |

Pelaajapalaute on oma työvaiheensa: esimerkiksi Steam Playtestin
ohjeistus erottaa testiin pääsyn järjestämisen palautteen keräämisestä,
joka jää kehittäjän järjestettäväksi. Työkalu ei itsessään kerro, mitä
kokemuksesta pitäisi oppia. [Steam Playtest](https://partner.steamgames.com/doc/features/playtest).

**Emme puolusta ihmistä väittämällä, että AI osaa vain toteuttaa.**
AI voi ehdottaa yleisöjä, mekaniikkoja, tyylejä, suunnitteluratkaisuja ja
testejä. Tarkistetuissa esimerkeissä sillä on jo rooli kokemuksen
muokkaamisessa. Silti mallin arvio kuvitteellisen pelaajan reaktiosta ei
ole havainto oikean pelaajan kokemuksesta. Jos tavoitteena on palvella
tiettyä yleisöä, sen onnistuminen on varmistettava kyseisen yleisön kanssa.

Vastaavasti ihmisen valinta ei takaa laatua. Oleellista on perustella
valinta, katsoa mitä tapahtui ja pystyä muuttamaan suuntaa. Myös tuttu
genre tai lainattu perusmekaniikka voi tuottaa hyvän pelin; täydellinen
omaperäisyys ei ole pääsylippu pelaamisen arvoon.

## Miten tämä vahvistaa nykyistä esitystä?

### Ehdotus: yksi 5–6 minuutin osuus nykyisen tuotanto–kokemus-keskustelun sisään

1. **Anna saavutuksen näkyä.** Näytä yksi vahva peliesimerkki ja kerro
   tarkasti sen rajaus. Suosittelen Bermanin tapausta pääesimerkiksi,
   koska sama lähde käsittelee iloa ja konkreettista palautetta.
2. **Käännä huomio omaan pelaamiseen.** Kysy yleisöltä, mikä saisi heidät
   kokeilemaan peliä ja kenelle he suosittelisivat sitä. Vastauksia ei ohjata
   ennalta kielteisiksi.
3. **Näytä yksi kokemukseen liittyvä valinta.** Kameran tai liikkeen
   muutos on ymmärrettävämpi kuin abstrakti puhe ”inhimillisestä mausta”.
4. **Vie kysymys SuomiWoWiin.** Kenelle se on olemassa, mikä siinä
   tunnistetaan ja mikä havainto tukee valittua ratkaisua?

Anshun tapaus sopii varamateriaaliksi termin ”one shot” tarkentamiseen.
Sunwake tai Little Ritual sopii vaihtoehtoiseksi esimerkiksi, jos halutaan
näyttää dokumentoitu briefi ja kehityspolku. Kaikkia tapauksia ei tarvita
dioille. Mallin yleisiä benchmarkeja tai tilaushintoja ei tarvita tämän
argumentin tueksi.

### SuomiWoW: vahvuus on täsmällinen suhde yleisöön

Nykyinen [showcase-suunnitelma](project-showcase-plan.md) antaa valmiiksi
vastauksen siihen, keitä varten keräilykokemus on: suomalainen
raidiyhteisö, sen hahmot ja yhteinen historia. Se ei yksin todista
käytön suosiota, mutta se on täsmällisempi lähtökohta kuin ”tehdään
näyttävä korttipeli”.

Paras lisämateriaali olisi **yksi todellinen yhteisön reaktio tai
pelitestaushavainto ja siitä seurannut valinta**. Näin omaa projektia
arvioidaan samalla mittapuulla kuin Astra-demoja. Korttien tuttuus ja
tekijän tarkoitus eivät automaattisesti takaa onnistunutta kokemusta.

Myöhemmässä käsikirjoituksessa kannattaa tarkentaa suunnitelman lausetta
”se päätös piti keksiä itse”. Kerrotaan, kuka tässä projektissa teki
päätöksen ja miksi. Ei väitetä yleisesti, ettei AI voisi ehdottaa
yhteisöhistorian muuttamista keräilykokemukseksi. AI:n todellinen rooli
on edelleen dokumentoitava.

### Työpaja: annetaan ensimmäisen version myös onnistua

Nykyisen [työpajasuunnitelman](workshop-plan.md) tavoite olettaa,
että osallistuja kokee ensimmäisen version tarvitsevan ihmisen makua.
Se kannattaa myöhemmin muotoilla avoimemmaksi:

> Tee pelattava ajatus tietylle ihmiselle. Katso, mitä hän kokee.
> Päätä havainnon perusteella, mitä säilytät tai muutat.

Ensimmäinen versio voi jo toimia. Toinen prompti voi myös huonontaa sitä.
Oppimistulos syntyy arvioinnista ja perustelusta, ei vaaditusta käsityön
määrästä tai siitä, että mallin pitäisi epäonnistua.

## Mitä materiaalia kannattaa vielä kerätä ennen diojen lukitsemista?

Tämä on seuraavan valmisteluvaiheen aineistotarve, ei tässä muistiossa
tehty pelitesti tai toteutus.

- **Yksi lyhyt alkuperäisen demon kohta ja sen tarkka versio.** Bermanin
  videon 29:18–30:59 sisältää peliväitteen sekä lisäpalautteen. Tarkista
  kuva ja ääni ennen esitysklipin valintaa; tässä analyysi tehtiin
  alkuperäisen videon tekstityksestä.
- **Yksi oikea kokeilu tarkoitetulla pelaajalla.** Kirjaa, ymmärsikö hän
  tekemisen, mikä kohta tuntui hyvältä tai turhauttavalta ja halusiko hän
  jatkaa. Yksittäinen testi kertoo tästä kohtaamisesta, ei koko markkinasta.
- **Yksi todellinen muutos ja sen peruste.** Esimerkiksi kameran muutos,
  ominaisuuden poistaminen tai SuomiWoWin yhteisöpalautteeseen perustuva
  rajaus. Säilytä mahdollisuuksien mukaan myös edeltävä versio.
- **Lyhyt tuotantotavan kuvaus.** Käyttäjän ohjeet, työkalut, AI:n rooli,
  muutokset ja tiedossa olevat rajat. Kiintiöprosenteista ei tehdä
  yleistä hintaväitettä.

Esitykseen sopiva lopetus tälle osuudelle:

> Pelattavan pelin tekeminen yhdellä pyynnöllä on iso saavutus.
> Seuraava kysymys kuuluu pelaajalle: oliko tämä sinun aikasi arvoinen?
