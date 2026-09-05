# Tutkimuskierros 5.9.2026: mitä esitykseen kannattaa nostaa?

Tämä on tutkimus- ja sisältösuositus ennen PowerPointin rakentamista. Nykyistä
esitystä, työpajaa tai aiempia suunnitelmia ei ole muutettu. Alla ehdotetut
sisältövalinnat eivät vielä ole lukittu käsikirjoitus.

## Suositus

Pidetään nykyinen yleisöpolku: huoneen mielipiteet → tekijän työ → SuomiWoW →
pelaajan kokemus → oma kokeilu. Vahvistetaan sitä kolmella asialla:

1. Näytetään ensimmäisen version lisäksi **yksi todellinen korjaus ja sen syy**.
2. Kysytään näkyvästi **mitä pelaaja saa AI:n käytöstä**. Sisäinen apu ja
   pelaajalle näkyvä sisältö ovat hyödyllinen erottelu, mutta eivät yksin
   hyvän ja huonon käytön raja.
3. Annetaan oman maun ja pelitestauksen merkitykselle konkreettinen tehtävä
   sekä nykyistä vahvempi tutkimustausta.

Uusia aiheita ei lisätä nykyisen tunnin päälle. Suosittelen GDC:n
käyttötapakuvaajan siirtämistä varamateriaaliin, kuluttajatilausten käsittelyn
tiivistämistä ja enintään kahta lyhyttä uutta peliesimerkkiä.

Kantava kysymys toimii edelleen:

> Kun AI voi kirjoittaa, piirtää ja koodata, mikä tekee lopputuloksesta pelin,
> jota joku haluaa pelata?

Lisäisin sen rinnalle arviointikysymyksen:

> Mitä tämä ratkaisu antaa pelaajalle — ja kuka vastaa siitä?

## Mikä on uutta, mikä vain aiempaa parempaa taustaa?

| Löydös | Ajankohta | Suositeltu asema |
|---|---|---|
| DLSS 5:n generatiivinen renderöinti ja viralliset vertailukuvat | NVIDIA, 1.9.2026 julkaistu ja sittemmin saatavuutta päivittävä sivu | Tuore 60–90 sekunnin visuaalinen keskusteluesimerkki |
| Steam-arvosteluja analysoiva Bazzazin ja Cooperin tutkimus | arXiv-versio 12.8.2026 | Uusi tausta pelaajan luottamuksesta; ei uutta tilastokuvaajaa |
| Pelinkehityksen laadullinen tutkimussynteesi | CHI 2026; julkaisutieto 17.4.2026 | Aiemmin lähdepankissa tarkistamattomana ollut lähde, nyt paikannettu ja luettu |
| METR:n jatkokoe ja erillinen käyttökysely | 24.2. ja 11.5.2026 | Päivitys vanhan tuottavuuskokeen rinnalle |
| 1001 Nightsin tarinankerrontamekaniikka | CHI Interactivity 2025 sekä tekijän nykyinen press kit | Uusi esimerkki tähän esitykseen, ei uusi syyskuun julkaisu |
| Luovuus ja tuotosten keskinäinen samankaltaisuus | Doshi & Hauser, 12.7.2024 | Vanhempi mutta hyödyllinen koe työpajan perusteluksi |
| GMTK Game Jam 2026:n säännöt | Vuoden 2026 tapahtuma | Korvaa tarvittaessa vuoden 2025 sääntökortin |

## Vahvimmat lisäykset ja niiden rajat

### 1. Ensimmäisen version ja hyväksyttävän tuloksen välissä on työtä

Ternarin ym. *Generative AI in Game Development: A Qualitative Research
Synthesis* kokoaa kymmenen laadullista tai olennaisen laadullisen osuuden
sisältävää tutkimusta. Aineiston julkaisuraja on tammi 2020 – kesäkuu 2025.
Toistuvia teemoja ovat tuotosten muokkaaminen, projektin vaatimuksiin
sovittaminen ja työvaiheesta riippuvat tehokkuushyödyt. Katsaus huomauttaa myös
alkuperäistutkimusten menetelmäpuutteista ja pitkittäistutkimuksen puutteesta.
Tämä tukee nykyistä argumenttia, mutta ei mittaa syyskuun 2026 työkalujen
nopeutta eikä todista, että jokainen generoitu tuotos tarvitsee aina korjausta.
[Tutkimusteksti](https://arxiv.org/html/2509.11898v2),
[julkaisutieto](https://eprints.whiterose.ac.uk/id/eprint/239293/).

**Sisältöehdotus:** SuomiWoW-osuuteen yksi todellinen päätösketju:

> Ensimmäinen ehdotus → havaittu ongelma → oma päätös → lopputulos.

Valitaan esimerkiksi ohjauksen, palautteen, kortin luettavuuden tai
keräilykokemuksen muutos, josta löytyy oikea ennen/jälkeen-aineisto. Ei
keksittyä epäonnistumista eikä jälkikäteen arvattua ajansäästöä. Tästä olisi
enemmän hyötyä kuin uudesta yleisestä väitteestä, että ihminen valitsee.

### 2. Pelaajan kysymys: mitä tässä tehtiin minun hyväkseni?

Bazzaz ja Cooper analysoivat elokuussa julkaistussa käsikirjoituksessa
508 192 englanninkielistä Steam-arvostelua sekä laadullisesti 600 arvostelua.
Teemoja ovat koettu laatu ja huolellisuus, periaatteellinen vastustus,
hyväksyttäväksi koettu käyttö sekä ilmoituksen ja havaitun sisällön ristiriita.
Vertailuryhmä on proseduraaliseksi merkittyjen pelien joukko, ei satunnaistettu
saman pelin AI/ei-AI-koe. Laadulliseen otokseen poimittiin tarkoituksella paljon
kielteisiä arvioita. [Tutkimuksen 12.8.2026 versio](https://arxiv.org/html/2608.11539v1).

**Käyttö:** tutkimus antaa sanastoa pelaajapuolelle, ei näyttöä AI:n aiheuttamasta
myyntitappiosta. Sen numeroita en nostaisi pääesitykseen: esimerkiksi
GenAI-arvostelujen määrä on kohdassa 3.1 / taulukossa 1 eri kuin kohdassa 4.2.1
(166 745 / 166 515), ja lähtötason suositteluluvuissa on selittämättömiä eroja.
Käsikirjoituksen julkaisutiedoissa on marraskuu 2026; syyskuun esityksessä
viitataan saatavilla olevaan elokuun versioon.

**Puheeseen sopiva oma kysymys:**

> Auttoiko tämä tekemään minulle kiinnostavamman pelin? Vai saanko minä vain
> enemmän sisältöä, jonka toimivuutta kukaan ei tarkistanut?

Älä esitä kysymystä kaikkien pelaajien mielipiteenä. Se on esityksen
arviointikehys.

### 3. 1001 Nights: generointi voi olla pelimekaniikan materiaalia

Vuoden 2025 tutkimusesittelyssä pelaaja kertoo tarinaa kuninkaalle ja yrittää
saada tämän jatkamaan sitä tietyillä aseisiin liittyvillä sanoilla. Sanat
muuttuvat pelissä käyttökelpoisiksi esineiksi. Generoitu vastaus on siis osa
sääntöä ja tavoitetta. Tämä on ymmärrettävä vastaesimerkki sille, että
AI-dialogi olisi aina vain halvempi tapa täyttää käsikirjoitus.
[Tekijöiden tutkimusesittely](https://arxiv.org/html/2503.09102v1).

**Suositus:** 45–60 sekuntia ja yksi kuva tai lyhyt tallenne. Kysy:

> Mitä tässä pelataan: valmiin tekstin lukemista vai toisen kertojan ohjaamista?

Tekijän press kit erottaa etukäteen tehdyn ihmiskuvituksen ajon aikana
generoidusta tarinatekstistä ja kuvista. Siksi ei sanota yksinkertaisesti
“kaikki kuvat ovat ihmisen tekemiä”. Sivulla peli on kehityksessä ja demo
saatavilla; täyden julkaisun päivämäärä on avoin. Kuvaus ei todista
kaupallista menestystä tai koko malliketjun koulutusaineiston ongelmattomuutta.
[Press kit, videot ja kuvat](https://1001nights.notion.site/1001-Nights-press-kit-adb983eed6c2495a94878e6e93792881).

### 4. DLSS 5: realistisempi ja parempi ovat eri arvioita

NVIDIA julkaisi 1.9.2026 DLSS 5:n tutkimuskuvauksen, jossa se erottaa uuden
generatiivisen renderöintivaiheen aiempien DLSS-tekniikoiden
rekonstruktiotehtävästä. Kyse on olemassa olevan pelin lopullisen kuvan
muodostamisesta, ei kokonaisen pelin generoinnista.
[NVIDIAn tekninen alkuperäiskuvaus](https://research.nvidia.com/labs/adlr/DLSS5/).

Valmistajan ajantasainen julkaisusivu ilmoittaa ominaisuuden olevan saatavilla
NBA 2K27:ssä ja sisältää ON/OFF-kuvapareja sekä kuvauksen taiteellisista
säädöistä. Nämä ovat valmistajan valitsemia esimerkkejä, eivät riippumaton
laatukoe. [Julkaisusivu ja vertailumateriaali](https://www.nvidia.com/en-eu/geforce/news/dlss-5-3d-guided-neural-rendering/).

**Suositus:** enintään 60–90 sekuntia pelaajaosuuteen. Näytetään sama kohtaus
rinnakkain ja kysytään ensin mikä muuttui, sitten kumpi sopii pelin
tavoitteeseen. Eriävä mielipide on hyvä lopputulos. Puhujan ei tarvitse
julistaa voittajaa.

Tämä on kierroksen tuorein helposti visualisoitava lisä. Älä kutsu kaikkea
aiempaa DLSS:ää samaksi asiaksi äläkä siirrä tätä automaattisesti Steamworksin
live-generointisäännön tulkinnaksi. Tuoterakenne ja alustasääntö ovat eri
lähteistä varmistettavia asioita.

### 5. Oma maku tarvitsee muutakin kuin koristeellisen viimeistelykierroksen

Doshi ja Hauser havaitsivat lyhyiden tarinoiden kokeessa, että generoidut
ideat paransivat tarinoiden arvioitua luovuutta ja laatua, etenkin lähtötasoltaan
vähemmän luovilla kirjoittajilla. AI-avusteiset tarinat olivat kuitenkin
keskenään samankaltaisempia. Molemmat havainnot kuuluvat esitykseen.
Tämä ei ole pelitutkimus eikä universaali laki AI:n vaikutuksesta luovuuteen.
[Science Advances -julkaisu](https://doi.org/10.1126/sciadv.adn5290),
[tekijöiden avoin käsikirjoitus ja tiivistelmä](https://arxiv.org/abs/2312.00506v3).

**Sisältöehdotus:** työpajan kolmannen kierroksen perusteluksi 30 sekuntia:

> Hyvältä kuulostava idea voi olla hyvä myös monen muun mielestä. Minkä
> valinnan sinä teet, jotta tämän pelin tunnistaa omaksesi?

Osallistuja määrittää ensin itse yhden rajoitteen, kokemuksen tai tavoitteen,
jonka perusteella arvioi ehdotuksia. Tämä on ehdotettu harjoitus, ei
tutkimuksessa todennettu keino poistaa yhdenmukaistumista. Paikallinen vitsi
voi toimia, mutta myös pelillinen ratkaisu: esimerkiksi keräämisen sijaan
luopuminen tai piste-ennätyksen sijaan toisen pelaajan auttaminen.

## Aiemman aineiston tarkistus

| Kohta | Tarkistuksen tulos ja suositus |
|---|---|
| GDC 2026: 36 / 52 / 7 % | Luvut löytyvät edelleen alkuperäisestä yhteenvedosta. Säilytetään. Nimitys on pelialan ammattilaiset, ei pelkästään kehittäjät; vastaukset tulevat eri kysymyksistä. Päällekkäisyyttä ei tunneta. |
| GDC 2026: 81 / 47 / 47 / 35 % | Luvut vahvistuvat. Mittari kuvaa käyttöä, ei ajansäästöä tai tuotannon laatua. Siirretään ensisijaisesti varalle ajan vapauttamiseksi. |
| Quantic Foundry: 83 / 77 / noin 50 % | Arvot vahvistuvat. Säilytetään yksi käyttötapavertailu. Dynaamisen vaikeuden kysymys koski GenAI:n käyttöä siinä; noin 50 % on laskettu 100 − 26 − 24. Kyseessä on vapaaehtoinen, PC/core-painotteinen otos. |
| Ilmaispalvelu on useimpien “ensikosketus” | Nykyinen sanamuoto on liian vahva. Bitkom mittaa maksullisten palvelujen käyttöä, ei ensimmäistä käyttökertaa tai oletusmallia. Poistetaan ensikosketusväite. Maksullisuutta ei tarvita pääargumenttiin. |
| AI/GenAI-erottelu | Säilytetään, mutta ei luokitella kaikkea proseduraalista generointia tai matchmakingia automaattisesti koneoppimiseksi. Perinteisiä pelialgoritmeja ja oppivia malleja voi olla saman toiminnon taustalla. |
| Steamworks | Nykyinen dokumentaatio tukee rajaa yleisestä tehokkuuskäytöstä peliin toimitettuun ja ajon aikana syntyvään sisältöön. Tämä on alustan ilmoitusraja, ei yleinen eettinen hyväksyntä sisäiselle käytölle. |
| Clair Obscur | Sandfallin täsmennys vahvistaa placeholder-kokeilun ja viiden päivän sisällä tehdyn vaihdon. Palkintotapahtuma vahvistuu PC Gamerin raportoinnista. Pidetään enintään noin minuutin tapauksena; ei väitettä puuttuneesta Steam-ilmoituksesta. |

Tarkistetut alkuperäislähteet:
[GDC 2026](https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/),
[Quantic Foundry 18.12.2025](https://quanticfoundry.com/2025/12/18/gen-ai/),
[Bitkom 19.5.2025](https://bitkom-research.de/news/viele-nutzen-ki-aber-nur-wenige-bezahlen-dafuer),
[Steamworks Content Survey](https://partner.steamgames.com/doc/gettingstarted/contentsurvey?language=english),
[El País / Sandfall](https://elpais.com/cultura/2025-06-28/la-revolucion-creativa-low-cost-cuando-la-tecnologia-pone-el-arte-al-alcance-de-todos.html),
[PC Gamer 21.12.2025](https://www.pcgamer.com/games/rpg/indie-game-awards-pulls-two-awards-from-clair-obscur-over-generative-ai-use-we-have-a-hard-stance-against-gen-ai-in-videogames/).

### METR: päivitä varamateriaali, älä tee uutta nopeustrendiä

Vuoden 2025 rajatun kokeen 19 % hidastuminen ei ole nykytyökalujen
yleisominaisuus. METR:n 24.2.2026 päivityksessä jatkokokeen raakadata viittasi
nopeutumiseen, mutta valikoituminen ja ajankäytön mittausongelmat heikensivät
tulkintaa. Molempien raportoituja alaryhmiä koskevien arvioiden luottamusvälit
sisälsivät nollavaikutuksen. [Jatkokokeen päivitys](https://metr.org/blog/2026-02-24-uplift-update/).

Myöhempi 11.5.2026 tutkimus on 349 teknisen työn tekijän käyttökysely, ei uusi
satunnaistettu koe. Vastaajat raportoivat merkittäviä hyötyjä; tutkijat
erottavat koetun nopeuden tuotetun työn arvosta ja huomauttavat otoksen
valikoitumisesta sekä itsearvioiden epävarmuudesta.
[METR:n toukokuun kysely](https://metr.org/blog/2026-05-11-ai-usage-survey/).

Puhujan hyödyllinen opetus on **mitataan hyväksyttävää lopputulosta ja
kokonaistyötä**. Näistä aineistoista ei rakenneta vuosien 2025–2026
prosenttitrendiä eikä pelialan tuottavuuslukua.

### Säännöt ja studiolinjaukset: varalle löytyi parempi lähdepohja

- **GMTK 2026:** GenAI-kuva- ja äänisisältö on kielletty pelissä ja itch.io-sivulla.
  Yleisempi pyyntö välttää AI:ta sekä rajaus aktiivisesti valvottaviin sisältöihin
  säilyvät. Käytetään vuoden 2026 lähdettä, jos sääntökortti tarvitaan.
  [Viralliset säännöt](https://itch.io/jam/gmtk-jam-2026).
- **Global Game Jam:** globaali policy sallii AI:n muiden käytäntöjen puitteissa.
  **Ludum Dare:** AI-apurit sallitaan, mutta generaattorin hallitsemista
  arviointikategorioista tulee jättäytyä pois. Ero näyttää tapahtumien
  tarkoitukset, ei yhtä koko alan sääntöä.
  [GGJ](https://globalgamejam.org/news/global-game-jam-artificial-intelligence-policy),
  [Ludum Dare](https://ludumdare.com/resources/questions/can-i-use-ai/).
- **Capcom:** 16.2.2026 sijoittajatilaisuuden japaninkielinen Q&A sanoo yhtiön
  rajaavan GenAI:lla tuotetut materiaalit pois pelisisällöstä, mutta tutkivan
  teknologian käyttöä kehitysprosessin tehokkuuteen. Tämä on yhtiön ilmoittama
  linja, ei toteutuksen tai tuottavuuden riippumaton auditointi. Sopii
  Steam-osuuden varatapaukseksi. [Alkuperäinen Q&A, s. 1–2](https://www.capcom.co.jp/ir/data/pdf/explanation/2026/full/explanation_2026_full_08.pdf).

Remedyä ei niputeta Capcomin kanssa yhdeksi linjaukseksi. Tällä kierroksella
Remedystä löytyi haastatteluraportointia, mutta vastaavaa alkuperäistä lausuntoa
ei varmennettu. Xboxin vähennykset, ETLA, ympäristöluvut ja sopimusten
yksityiskohdat eivät kuulu tämän kierroksen päivitettyihin väitteisiin.

## Mitä jättäisin pääesityksen ulkopuolelle?

**Project Genie** on hyödyllinen vastaus kysymykseen generoiduista
pelimaailmoista. Googlen nykyinen ohje kuvaa edelleen tutkimusprototyypin,
60 sekunnin tutkimisajan sekä ohjaus-, viive- ja johdonmukaisuusongelmia.
Näytettävää ympäristöä ei pidä rinnastaa valmiiseen, ylläpidettävään peliin.
Pitäisin tämän Q&A:ssa; käytössä on jo oma proto ja kaksi lyhyttä uutta
esimerkkiehdotusta. [Nykyinen tuoteohje](https://support.google.com/labs/answer/16875695?hl=en).

**“Tunnistatko AI:n?” -testi** olisi houkutteleva mutta veisi väärään suuntaan.
Bazzazin ja Cooperin CHI 2026 -kokeessa lyhyiden Mario- ja Sokoban-kenttien
alkuperän tunnistus ei ylittänyt merkitsevästi sattumatasoa, ja kokemus liittyi
osallistujan omaan alkuperäuskomukseen. Uskomusta ei satunnaistettu
valheellisella AI-merkinnällä. Koe ei osoita, että kaikki AI-kritiikki olisi
kuvittelua tai että hyvä kokemus ratkaisisi suostumuksen.
[Alkuperäinen tutkimus](https://arxiv.org/html/2602.14254v1).

Myöskään mallien pistetaulukko, kaupallinen markkinakoko, uusi irtisanomisten
aikajana tai somekohujen sarja ei paranna nykyistä yleisöpolkua riittävästi
käyttämäänsä aikaan nähden. Eettiset kysymykset pidetään silti mukana
käyttötapojen yhteydessä; niitä ei selitetä pelkäksi laatu- tai makuasiaksi.

## Sisältöehdotus nykyisen 60 minuutin sisään

| Aika | Sisältö | Muutos nykyiseen |
|---|---|---|
| 0–5 min | Kaksi maailmanloppua ja huoneen assosiaatiot | Pidetään |
| 5–20 min | Gallup, ensisijaisesti 8 kysymystä | Nykyisen toimituksellisen suunnitelman tiiviimpi vaihtoehto |
| 20–24 min | AI/GenAI sekä mitä oikeastaan kokeiltiin | Maksullisuuspohdinta varalle; kokemus kuvataan tehtävän ja työnkulun kautta |
| 24–29 min | GDC:n käyttö ja suhtautuminen | Yksi pääkuvaaja; käyttötapojen toinen kuvaaja varalle |
| 29–35 min | Ensimmäinen versio, arviointi ja kokonainen työ | Oma konkreettinen korjausesimerkki, tutkimussynteesi lähteeksi |
| 35–45 min | SuomiWoW | Näytetään myös yksi dokumentoitu oma suunnittelupäätös; sen voi yhdistää edelliseen esimerkkiin |
| 45–49 min | Pelaajan näkökulma ja Quantic Foundry | Paluu bugit/dialogi-pariin; uusi Steam-tutkimus taustalle |
| 49–52 min | DLSS 5 ja 1001 Nights | Kaksi lyhyttä esimerkkiä: kuvan tavoite ja generointi osana mekaniikkaa |
| 52–57 min | Steam, lyhyt Clair Obscur, tarkemmat kysymykset | Selkeästi eri säännöt ja vastuut, ei pitkää kohukronologiaa |
| 57–60 min | Helpompi/parempi-palautus ja työpajan koe | Jätetään tulos avoimeksi ja annetaan tauon paluuaika |

Tauko säilyy 15 minuutissa ja työpaja 45 minuutissa. Aikataulu on
sisältösuositus, ei harjoiteltu kesto. Jos kaksi uutta peliesimerkkiä ei mahdu,
säilyttäisin **1001 Nightsin** pääargumentin vuoksi ja siirtäisin DLSS 5:n
varalle. Jos halutaan nimenomaan yksi ajankohtainen kuvallinen yleisökeskustelu,
DLSS 5 on vaihtoehto samalle paikalle.

Pääesityksessä olisi näin kaksi tilastokuvaajaa kolmen sijaan. Aiemmin päätetty
kolmas kuvaaja voi säilyä liitteessä. Tuoreus syntyy esimerkeistä ja
vahvistetuista väitteistä, ei prosenttien lisäämisestä.

## Mitä omaa aineistoa kannattaa valmistella myöhemmin?

| Materiaali | Mitä sen pitäisi näyttää | Saatavuus nyt |
|---|---|---|
| SuomiWoW ennen/jälkeen | Yksi oikea ongelma, päätös ja vaikutus kokemukseen | Näyttöä ei ole tämän esityksen repositoriossa; tarvitaan projektin historiasta tai puhujalta |
| Täsmällinen kuvaus AI:n osuudesta | Missä sitä käytettiin, mitä hyväksyttiin ja mitä tehtiin itse | Nykyinen showcase-suunnitelma jättää tämän puhujan vahvistettavaksi |
| Ensimmäinen proto ja harkitusti muutettu versio | Sama peli, yksi selitettävä pelillinen muutos | Valmistellaan myöhemmin ja säilytetään myös epäonnistuneet yritykset; ei tuotettu tällä kierroksella |
| DLSS 5:n sama ON/OFF-kohtaus | Sama kuvakulma ja sisältö, selkeä tekijä- ja lähdemerkintä | Kuvaparit paikannettu NVIDIAn yllä linkitetystä julkaisusivusta; ei ladattu tai muokattu |
| 1001 Nightsin lyhyt esimerkki | Tarinan sana muuttuu pelin esineeksi | Press kitissä on videot, kuvamateriaali ja [traileri](https://youtu.be/LQ2X3yiqsR8); sopivaa leikkausta ei vielä valittu |
| Työpajan yksinkertainen arviointikortti | Ymmärsinkö tavoitteen? Toimiko ohjaus? Oliko kiinnostavaa päätettävää? | Sisältöehdotus, ei toteutettu |

Ulkoisia promo- ja tutkimuskuvia ei esitetä omina kokeina. Lopullista käyttöä
varten valitaan tarkka versio ja säilytetään lähde sekä mahdolliset
materiaalikohtaiset käyttöehdot. Tämä kierros paikansi aineiston; se ei
sisältänyt videoiden leikkausta tai kuvien valmistelua.

## Työpajan kannattaa sallia myös odottamaton tulos

Nykyinen aineisto paikoin ennakoi, että osallistujan päätös paransi peliä
eniten. Tätä ei tiedetä ennen kokeilua. Lopussa voidaan aivan hyvin todeta,
että ensimmäinen versio oli paras, oma muutos huononsi peliä tai aikaa meni
kokonaan vian korjaamiseen.

Suosittelen seuraavaa pientä arviointitapaa nykyisten kierrosten sisään:

1. Pelaa ensimmäistä versiota lyhyesti ja nimeä yksi havaittu ongelma.
2. Päätä yksi muutos ja kerro, mitä sen pitäisi parantaa.
3. Anna vieruskaverin kokeilla. Kysy, havaitsiko hän tavoitellun vaikutuksen.
4. Kerro purussa havainto, myös silloin kun muutos ei auttanut.

Tämä on ohjattu oppimiskokemus. Ilman vertailuryhmää ja vakioitua tehtävää se
ei mittaa AI:n kausaalista tehokkuusvaikutusta tai ihmisen yleistä paremmuutta.
Se voi silti näyttää arvokkaasti, mitä tämä ihminen joutui päättämään tässä
tehtävässä.

## Tarkistuksen kattavuus ja avoimet rajat

Pohjana luettiin repositorion keskeiset esitys-, lähde-, toimitukselliset,
gallup- ja työpajasuunnitelmat, selainesityksen sisältö ja puhujamuistiinpanot
sekä aiemman paikallisen tutkimusraportin ydinaineistoa. Verkkotarkistus
kohdistui pääväitteisiin, uusiin peli- ja tutkimusesimerkkeihin sekä
vanhentumiselle herkkiin sääntöihin. Tämä ei ole systemaattinen
kirjallisuuskatsaus eikä koko lähdepankin kaikkien varaväitteiden auditointi.

Science Advancesin julkaisusivu palautui haussa, mutta sen suora avaaminen
epäonnistui; ydinlöydös tarkistettiin lisäksi tekijöiden avoimesta
arXiv-tiivistelmästä. Uusia tarkkoja vaikutuskokoja ei siitä poimittu.
Indie Game Awardsin FAQ ja Bluesky eivät palauttaneet päätöksen koko tekstiä;
palkintopäätöksessä käytetään edelleen nimettyä PC Gamerin raportointia.
1001 Nightsin press kit sisältää myös vanhoja tapahtumamerkintöjä, joten sitä
ei käytetä tarkan tulevan julkaisupäivän lähteenä.

PowerPointin kannalta suurin avoin sisältötarve on nyt **oma todennettava
esimerkki työn muuttumisesta**. Ulkoista tutkimusta on riittävästi
perustelemaan valitun suunnan ja rajaamaan sen väitteet.
