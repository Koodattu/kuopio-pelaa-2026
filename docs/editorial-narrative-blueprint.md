# Esityksen toimituksellinen selkäranka

> **Tila:** kriittinen toinen suunnittelukierros. Tämä ei ole dialista eikä
> lopullinen käsikirjoitus, vaan suositus siitä, mitä koko ohjelma oikeastaan
> yrittää sanoa ja millä dramaturgialla väite kannattaa rakentaa.

## Suora arvio nykyisestä ideasta

Formaatti on poikkeuksellisen vahva: yleisö ottaa ensin kantaa, kuulee sen
jälkeen tutkimusta ja yhden oikean projektin, kokeilee itse ja arvioi lopuksi
omaa tuotostaan. Esityksen ei tarvitse vain väittää jotakin AI:sta, koska se voi
antaa yleisön testata osan väitteestä käytännössä.

Suurin riski ei ole materiaalin puute vaan sen runsaus. Nykyiseen lähdepankkiin
mahtuu monta hyvää esitystä: AI:n historia, ilmais- ja maksullisten mallien
erot, pelialan työmarkkinat, kehittäjäkyselyt, pelaajien asenteet,
Steam-disclosure, Clair Obscur, game jamien säännöt ja useita yritystapauksia.
Varsinaista perinteistä esitysaikaa on kuitenkin vain noin 30 minuuttia
SuomiWoW-showcasen lisäksi.

Siksi ohjelmasta ei pidä tehdä tasapuolista AI-aiheiden yleiskatsausta. Sen
pitää tehdä yksi argumentti usealla eri tavalla.

## Mistä ohjelmassa oikeastaan on kyse?

Otsikossa on kaksi vastakkaista tulevaisuuskuvaa:

1. AI osaa pian kaiken, joten pelinkehittäjiä ei enää tarvita.
2. AI osaa pian kaiken, joten kuka tahansa voi tehdä pelin.

Ne näyttävät vastakohdilta, mutta jakavat saman oletuksen: kun tekstiä, kuvia,
ääntä ja koodia voidaan tuottaa nopeasti, peli on käytännössä tehty.

Tämä oletus on ohjelman todellinen vastustaja. Ei AI eikä AI-kritiikki.

Ohjelman kantava kysymys kannattaa siksi pitää nykyisessä muodossaan:

> Kun AI voi kirjoittaa, piirtää ja koodata, mikä tekee lopputuloksesta pelin,
> jota joku haluaa pelata?

Suositeltu työhypoteesi:

> Generatiivinen AI voi tehdä ensimmäisestä pelattavasta versiosta paljon
> nopeamman ja halvemman. Kun versioita voi tuottaa enemmän, jonkun pitää silti
> valita, mitä tavoitellaan, mikä toimii, mitä julkaistaan ja kuka vastaa
> lopputuloksesta.

Tässä muodossa ohjelma tunnustaa aidon muutoksen vähättelemättä sitä. Samalla se
ei sekoita teknistä tuotantokykyä pelisuunnitteluun, merkitykseen tai
hyväksyttävään käyttötapaan.

Yleisölle jäävä lyhyt ajatus voisi olla:

> Kysymys ei ole vain siitä, mitä AI osaa tuottaa. Kysymys on siitä, mihin
> tuotettua käytetään, kuka valitsee ja kuka vastaa.

## Mitä yleisössä pitäisi muuttua?

Tavoitteena ei ole saada AI-kriittistä yleisöä myönteiseksi tai innostunutta
yleisöä kielteiseksi. Tavoitteena on muuttaa kysymysten tarkkuutta.

Alussa osallistuja voi ajatella:

- “AI-peli on huijausta.”
- “AI tekee kohta koko pelin.”
- “Kokeilin ChatGPT:tä ja se oli surkea.”
- “Tein promptilla toimivan pelin, joten pelinkehitys on demokratisoitu.”

Lopussa hänen pitäisi osata kysyä:

1. **Mihin** työvaiheeseen GenAI:ta käytettiin?
2. **Mitä** sen tuotoksesta päätyi pelaajalle asti?
3. **Kenen** aineistoa, ääntä, ilmettä tai työtä käyttö kosketti?
4. **Kuka** valitsi, tarkisti, kertoi käytöstä ja vastaa seurauksista?

Yleisön ei tarvitse antaa samoja vastauksia. Ohjelma onnistuu, jos he eivät
enää pidä kysymystä “käytettiinkö AI:ta?” yksin riittävänä.

## Suositeltu kertomus

Koko ohjelma kannattaa rakentaa kolmeksi liikkeeksi:

1. **Mielipiteestä erotteluun:** mitä huone ajattelee ja puhummeko edes samasta
   asiasta?
2. **Tuottamisesta tekijyyteen:** mitä AI nopeuttaa ja mitä pelin tekeminen
   vaatii tuotoksen lisäksi?
3. **Tuotteesta suhteeseen:** mitä muuttuu, kun kokeilu päätyy pelaajan
   ruudulle, sääntöjen piiriin ja jonkun vastuulle?

Työpaja on näiden jälkeen käytännön koe, ei erillinen lisäohjelma.

### 0:00–0:05 — Avaus: kaksi maailmanloppua

Aloita otsikosta, älä puhujan ansioluettelosta tai ohjelman sisällysluettelosta.
Nimeä nopeasti kaksi keskenään vastakkaista lupausta:

> Toisen tarinan mukaan AI vie pelinkehittäjien työt. Toisen mukaan se antaa
> jokaiselle mahdollisuuden tehdä pelin. Molemmat alkavat samoista sanoista:
> “AI osaa tehdä sen.”

Kysy sen jälkeen, mitä sana “tekoäly” tuo ensimmäisenä mieleen. ChatGPT-tunnus
ja kysymys “miksi juuri tämä?” toimivat, koska yleisö paljastaa itse, kuinka
yksi kuluttajatuote on nielaissut kokonaisen käsitteen.

Älä vielä selitä AI:n ja GenAI:n eroa. Älä myöskään paljasta loppuväitettä.
Anna yleisölle vain lupaus:

> Ensin katsotaan, mitä tässä huoneessa ajatellaan. Sitten katsotaan, mitä
> tapahtuu tekijän työpöydällä, pelaajan ruudulla ja lopulta teidän omissa
> käsissänne.

Avauksen kaksi tulevaisuustarinaa voidaan halutessa ankkuroida yhteen
verkkokeskusteluun. Samassa keskustelussa yksi ohjelmistokehittäjä pelkää,
ettei ammatilla pian ole tulevaisuutta, kun taas toinen kirjoittaja näkee
samassa kehityksessä vapautumisen: kun toimivan prototyypin toteuttaminen
helpottuu, tekijä joutuu aikaisemmin kohtaamaan kysymyksen siitä, onko hänen
peli-ideansa oikeasti kiinnostava.

Tämän vastakkainasettelun turvallinen johtopäätös ei ole, että “koodaaminen on
ohi”, vaan:

> AI voi lyhentää matkaa ideasta ensimmäiseen pelattavaan versioon. Se ei
> automaattisesti lyhennä samassa suhteessa matkaa pelattavasta versiosta
> johdonmukaiseksi, testatuksi ja pelaamisen arvoiseksi peliksi.

Jos ankkuria käytetään, se pidetään noin minuutissa ja kerrotaan
parafraasina. Alkuperäisen kirjoittajan hätää, käyttäjänimiä tai kuvakaappausta
ei käytetä viihteenä. Keskustelu näyttää kaksi tapaa tulkita sama muutos; se ei
todista mallien kyvykkyyttä, työpaikkojen tulevaisuutta eikä pelinkehittäjien
yleistä mielipidettä. Tämä on vaihtoehtoinen tapa sanoittaa jo suunniteltu
“kaksi maailmanloppua”, ei uusi sisältöosuus.

Tämän pitäisi tuntua tutkimuksen alulta, ei luennon alulta.

### 0:05–0:20 — Gallup: yleisö sitoutuu ennen todistusaineistoa

Gallupin dramaturginen tehtävä on saada yleisö ottamaan kanta ennen kuin
puhuja kertoo omansa. Silloin myöhemmät luvut ja esimerkit eivät ole vain
informaatiota, vaan ne osuvat osallistujan jo tekemään arvioon.

Kymmenen kysymystä on tekninen enimmäismäärä, ei tavoite. Kriittinen suositus
on harjoitella ensisijaisesti kahdeksan kysymyksen versiota neljänä parina:

1. yleinen GenAI-käyttö / käyttö peliprototyypissä
2. pelinteosta helpompaa / peleistä parempia
3. kuka tahansa voi tehdä pelin / AI korvaa suuren osan työstä
4. bugien korjaaminen / dialogin kirjoittaminen

Yleinen “onko AI hyvä asia?” -pari on ensimmäinen leikkaus. Se tuottaa
mielipiteen, mutta muut parit tuottavat argumentille käyttökelpoisempia
eroja.

Gallupista ei tehdä 15 minuutin tulosanalyysiä. Jokaisesta parista nostetaan
vain yksi toteutunut havainto. Tärkeintä on jättää kolme avointa velkaa, joihin
palataan myöhemmin:

- käyttö ja hyväksyntä
- helpompi ja parempi
- taustatyö ja pelaajalle näkyvä sisältö.

Tavoite on päästä kysymyksistä läpi noin 12–13 minuutissa ja pitää 15 minuuttia
kovana takarajana. Liittyminen ja työkalun käyttö eivät saa tuntua ohjelman
alkua hidastavalta hallinnolta.

### 0:20–0:40 — Pääesitys I: mitä tekijän työpöydällä muuttuu?

Ensimmäisen pääosan ei pidä olla viisi peräkkäistä miniluentoa. Sen tulee
rakentaa yksi päättelyketju.

#### 1. Puhummeko samasta asiasta? 2–3 minuuttia

Erota AI ja GenAI nopeasti. YouTuben, TikTokin ja Instagramin suositukset sekä
pelien matchmaking ja proseduraalinen generointi osoittavat, että AI ei alkanut
ChatGPT:stä. Tätä ei käytetä tekopyhyysansana. Se, että ihminen käyttää
suositusjärjestelmää, ei poista hänen oikeuttaan vastustaa generatiivista
sisältöä.

Yhdistä tähän “kokeilin AI:ta” -jakson vahvin ajatus:

> Yksi huono raakavastaus ei kerro kaikkea järjestelmän kyvykkyydestä. Ei
> myöskään yksi tarkasti kuratoitu huippudemo.

Ilmais- ja maksullisten palvelujen luvut ovat hyödyllisiä lähdepankissa, mutta
niistä ei kannata tehdä tämän jakson päähenkilöä. Muuten esitys alkaa kuulostaa
siltä, että kritiikki selitetään väärän tilauksen tai kokemattomuuden avulla.
Yleisölle kiinnostavampi ja reilumpi havainto on, että **jokainen AI-demo on
koejärjestely**: tulokseen vaikuttavat malli, tehtävä, konteksti, korjauskierrokset
ja se, mitä tekijä päätti näyttää.

Tekninen kyvykkyys ja hyväksyttävä käyttötapa erotetaan heti:

> Parempi malli voi muuttaa sitä, onnistuuko tehtävä. Se ei yksin ratkaise,
> oliko tehtävä oikein valittu tai käyttö hyväksyttävää.

#### 2. Käyttö ja epäluottamus voivat olla totta yhtä aikaa, 5–6 minuuttia

GDC:n 36 % / 52 % / 7 % -jännite on esityksen paras ensimmäinen datakohta.
Se rikkoo kaksi helppoa leiriä: käyttäminen ei todista innostusta, eikä
kriittisyys todista käyttämättömyyttä.

Esitä luvuista vain se, minkä aineisto todella sanoo. Älä vihjaa, että samat
36 prosenttia muodostavat kielteisen ryhmän. Varsinainen havainto on:

> Ihminen voi käyttää työkalua ja epäillä sitä, mitä työkalu tekee alalle.

Tämä on hyvä kohta palata ensimmäiseen gallup-tulokseen. Huoneen ja GDC:n
vastauksia ei verrata edustavina otoksina, vaan saman jännitteen kahtena
näkymänä.

#### 3. Missä GenAI:ta oikeasti käytetään? 4–5 minuuttia

GDC:n käyttötavat siirtävät keskustelun pois kuvitelmasta, jossa nappi tuottaa
valmiin pelin. Tutkimus/ideointi, arjen tehtävät, koodiapu ja prototypointi
kertovat ennen kaikkea ensimmäisten vaihtoehtojen ja versioiden
halpenemisesta.

Tämä kuvaaja on hyödyllinen, mutta kolmesta pääkuvaajasta se on ensimmäinen
leikattava. Sen luokat ovat laajoja eikä se osoita työn laatua tai säästettyä
aikaa. Jos se säilyy, sen pitää johtaa suoraan kysymykseen:

> Jos ensimmäinen versio syntyy nopeammin, mihin tekijän työ siirtyy?

#### 4. Paljastetaan jaettu oletus, 5–7 minuuttia

Nyt vasta sano ääneen, mikä kahdessa maailmanlopputarinassa jäi piiloon:

> Koodi, kuvat ja teksti ovat pelin materiaalia. Ne eivät yksin kerro, mitä
> pelaaja tekee, miksi valinta kiinnostaa tai miksi joku välittäisi tästä
> pelistä.

Tähän kuuluu puhujan oma “koodaajasta rakentajaksi” -kokemus. Sen arvo ei ole
todistaa koko alan tulevaisuutta, vaan näyttää konkreettisesti, miten työ voi
siirtyä kirjoittamisesta määrittelyyn, vaihtoehtojen arviointiin, testaamiseen,
integrointiin ja korjaamiseen.

Tämä pääosa päättyy kysymykseen, ei yhteenvetoon:

> Mitä oikea projekti tarvitsee sellaisen teknisen kyvykkyyden lisäksi, joka
> on kaikkien saatavilla?

### 0:40–0:50 — SuomiWoW: vastaus ilman AI-taikatemppua

SuomiWoW on ohjelman tärkeä käänne, jos se esitellään vastauksena edelliseen
kysymykseen. Se ei ole todiste siitä, että AI tekee pelejä, eikä tekninen
portfolioesittely.

Showcasen pitää osoittaa neljä asiaa:

- projekti syntyi tietyn yhteisön todellisesta tarpeesta ja historiasta
- data saa merkityksen vasta, kun joku päättää, mitä siinä arvostetaan
- CCG:n kiinnostavuus tulee tunnistamisesta, keräilystä ja yhteisestä
  kontekstista, ei vain korttigrafiikasta
- tuotteen rajat, kuten ei ostoksia tai markkinapaikkaa, ovat myös
  suunnittelupäätöksiä.

Vahvin aloitus ei ole “tein tällaisen AI:lla”, vaan:

> Tämä vastasi ensin kysymykseen “kuka tappoi mitä ja milloin?”. Sitten joku
> sai typerämmän ja kiinnostavamman ajatuksen: entä jos yhteisön historiaa
> voisi avata pakasta?

AI:n todellinen rooli kerrotaan täsmällisesti, mutta vasta kun yleisö ymmärtää,
mikä projektissa on merkityksellistä. Näin showcase ei yritä todistaa liikaa.

Siirtymälause toiseen pääosaan:

> Tekijän työpöydällä nopeus voi olla hyöty. Pelaajan ruudulla sama valinta voi
> muuttua luottamuskysymykseksi.

### 0:50–1:00 — Pääesitys II: milloin kokeilusta tulee lupaus pelaajalle?

Viimeiseen kymmeneen minuuttiin mahtuu vain yksi argumentti:

> Käyttötavan merkitys muuttuu, kun generoitu sisältö tai sen seuraukset
> päätyvät pelaajalle asti.

#### 1. Taustatyö ja näkyvä luova sisältö, 3–4 minuuttia

Palaa gallupin bugit/dialogi-pariin. Näytä sen jälkeen Quantic Foundryn
käyttötapavertailu. Aineiston valikoituneisuus sanotaan rehellisesti, mutta
diaa ei hukuteta metodipuolustukseen.

Kiinnostava havainto ei ole “pelaajat vihaavat AI:ta”, vaan:

> Sama epäluuloinenkin yleisö reagoi eri tavoin eri käyttötapoihin.

Tunnistettavan ihmisen ääni, kasvot tai performanssi nimetään erilliseksi
suostumus- ja korvauskysymykseksi. Samalla sanotaan selvästi, ettei laadukas
lopputulos ratkaise aineistoon, työhön tai suostumukseen liittyvää kritiikkiä.

#### 2. Steam ja Clair Obscur, 4–5 minuuttia

Steamworks antaa hyödyllisen rajan sisäisen työkalun, peliin toimitetun
sisällön ja ajon aikana generoitavan sisällön välille. Clair Obscur tekee
abstraktista rajasta tarinan.

Tapausta ei kannata kertoa “pelaajat raivostuivat yhdestä kuvasta” -tarinana.
Se vähättelisi sekä yleisöä että tapauksen todellisia kerroksia. Kiinnostavampi
kysymys on:

> Missä kohtaa kokeilusta tuli ongelma: generoinnissa, QA:ssa, kertomisessa vai
> kilpailun sääntöjen rikkomisessa?

Yleisölle ei tarvitse antaa yhtä oikeaa kohtaa. Tapaus osoittaa, että tekninen
teko, julkaistu sisältö, disclosure ja kilpailusääntö ovat eri arviointitasoja.

#### 3. Paluu gallupiin ja avoin koe, 1–2 minuuttia

Palaa vain kahteen alun tulokseen: “helpompaa” ja “parempia”. Älä kertaa koko
äänestystä. Sano:

> Olemme nähneet syitä uskoa, että ensimmäinen versio helpottuu. Emme ole vielä
> todistaneet, että pelistä tulee parempi. Tauon jälkeen kokeilemme eroa itse.

Tämä on tauolle vahvempi lähtö kuin puhujan lopullinen kanta.

### 1:00–1:15 — Tauko: selkeä luvunvaihto

Tauko erottaa puheen kokeesta. Se ei ole aikapuskuria. Näytöllä näkyvät vain
paluuaika, työpajan QR-koodi, lyhyt URL ja tehtävän tiivistys:

> Tee pelattava ajatus. Ei valmista peliä.

### 1:15–1:50 — Työpaja: väitteen koe

Työpajan pitää testata täsmälleen samaa eroa, jonka gallup avasi:

1. **Tee versio:** kuinka nopeasti jotakin pelattavaa syntyy?
2. **Tee pelillinen valinta:** mikä muuttaa toimivan tuotoksen kiinnostavaksi?
3. **Tee tietoinen rajaus:** missä kohtaa osallistujan oma maku ja tarkoitus
   alkavat näkyä?

Tämä on nykyisen työpajasuunnitelman vahvin osa. Sitä ei pidä muuttaa
promptikurssiksi tai mallivertailuksi.

Ensimmäisen generoinnin jälkeen ei sanota “katso, AI teki pelin”. Tarkempi
muoto on:

> Nyt meillä on jotakin pelattavaa. Katsotaan seuraavaksi, onko siinä mitään
> kiinnostavaa päätettävää.

Nykyinen lause “AI teki version. Nyt varastetaan peli takaisin ihmiselle” on
värikäs mutta rakentaa turhan kaksintaistelun. Parempi työpajasiirtymä olisi:

> Ensimmäinen versio syntyi. Nyt te päätätte, mitä peli yrittää olla.

Game jam -sääntövertailu ei mahdu tähän kokonaisena neljän kortin osuutena ilman
että jotakin muuta poistetaan. Sen ajatus sopii kuitenkin 30–60 sekunnin
työpajasopimukseksi:

> Tämä ei ole kilpailu eikä ohjelmointitaidon koe. Tässä työpajassa AI:n käyttö
> on näkyvä osa menetelmää. Teidän tehtävänne on valita, testata ja muuttaa.

### 1:50–1:56 — Showcase: näytä erot, älä voittajia

Showcasen tehtävä ei ole esitellä teknisesti hienoimpia pelejä. Valitse
mieluummin 2–3 prototyyppiä, joissa näkyy erilainen päätös, vaikka ne olisivat
rosoisia.

Jokaiselta tekijältä riittää kaksi kysymystä:

1. Minkä pelillisen tai tyylillisen päätöksen teit itse?
2. Mitä muuttui, kun testasit sitä?

“Mitä AI teki typerästi?” voi toimia keventävänä lisäkysymyksenä, mutta se ei
saa tehdä showcasesta epäonnistuneiden generointien naurattamista. Kiinnostava
asia on osallistujien välinen ero, ei mallin sattumanvarainen omituisuus.

### 1:56–2:00 — Recap: vastaa otsikkoon yhdellä havainnolla

Lopussa ei tarvita kuutta selviytymissääntöä. Neljä minuuttia riittää kolmeen
palautukseen:

1. **Gallup:** helpompi ei automaattisesti tarkoittanut parempaa.
2. **Esitys:** käyttötapa, näkyvyys ja vastuu muuttivat arviota.
3. **Työpaja:** ensimmäinen versio syntyi nopeasti, mutta osallistujan päätös
   muutti sitä eniten.

Suositeltu loppuajatus:

> Tekoäly voi tehdä ensimmäisen version. Peli alkaa siitä, että joku päättää,
> mitä versiolla tehdään ja seisoo valintojensa takana.

Otsikkoon voi vastata viimeisellä, kevyemmällä rivillä:

> Kaikki ei ollut ohi. Ensimmäinen versio vasta alkoi.

## Miten argumentit kannattaa esittää?

### Käytä vastakohtia, älä aihelistoja

Ohjelman parhaat hetket ovat pareja:

- käytän / epäilen
- helpompi / parempi
- raakavastaus / kuratoitu demo
- taustatyö / pelaajalle näkyvä sisältö
- tekninen mahdollisuus / syy välittää
- ensimmäinen versio / tietoinen pelisuunnittelupäätös.

Jokaisen luvun, demon ja tapauksen pitäisi terävöittää yhtä näistä eroista.

### Rakenna väite neljässä vaiheessa

Jokaisessa pääjaksossa toimii sama rytmi:

1. **Kysymys:** mitä yleisö arvelee?
2. **Havainto:** mitä data, projekti tai tapaus näyttää?
3. **Raja:** mitä havainto ei todista?
4. **Seuraus:** mikä tarkempi kysymys tästä syntyy?

Lähdekritiikki kuuluu puheeseen, mutta sen tehtävä on rajata väite yhdellä
lauseella. Esitys ei saa kuulostaa tutkimusraportin puolustuspuheelta.

### Esitä reilu versio molemmista näkökulmista

AI-innostuksen vahva peruste on todellinen: kynnys ideasta toimivaan
prototyyppiin voi madaltua rajusti, ja se voi avata tekemistä ihmisille, jotka
eivät ohjelmoi.

AI-kritiikin vahva peruste on myös todellinen: hyväkään tuotos ei ratkaise
harjoitusaineiston, työn, suostumuksen, ympäristövaikutusten, yhdenmukaistumisen,
disclosuren tai vastuun kysymyksiä.

Esityksen oma kanta saa olla näkyvä:

> Kokeileminen ja protoilu ovat arvokkaita. Tekninen onnistuminen ei vapauta
> tekijää harkinnasta eikä vastuusta.

Tämä on uskottavampi kuin teeskennelty täydellinen neutraalius.

## Miten yleisö vedetään mukaan ja odotuksia rikotaan?

1. **Yleisö puhuu ennen puhujaa.** Sana-assosiaatio ja gallup tekevät huoneesta
   ensimmäisen lähteen.
2. **Pro- ja anti-AI-tarinat paljastetaan sukulaisiksi.** Molemmat voivat
   yliarvioida tuotoksen ja pelin samankaltaisuutta.
3. **AI/GenAI-erottelu ei muutu gotchaksi.** “Käytät TikTokia” ei kumoa
   GenAI-kritiikkiä.
4. **Huono screenshot ja täydellinen demo menettävät todistusvoimansa yhtä
   aikaa.** Molemmat ovat valittuja koejärjestelyjä.
5. **Oma projekti ei ole AI-menestystarina.** Se näyttää, mitä yhteisö,
   tarkoitus ja rajat lisäävät teknologiaan.
6. **Clair Obscurin ongelma ei typisty assetin rumuuteen.** QA, disclosure ja
   yhteisesti hyväksytyt säännöt osoittautuvat osaksi tuotetta.
7. **Ensimmäinen workshop-generointi ei ole huipennus.** Huipennus on se, kun
   kaksi samasta lähtökohdasta tehtyä peliä eroavat tekijöidensä valintojen
   vuoksi.
8. **Loppu ei pyydä mielipiteenvaihdosta.** Se pyytää tarkempaa arviota.

## Sisällön prioriteetit

### Pidä varmasti

- otsikon kaksi vastakkaista lupausta ja niiden yhteinen oletus
- yleisön ennakkokannat tuottava gallup
- lyhyt AI/GenAI-raja ilman tekopyhyysväitettä
- symmetrinen “yksi huono vastaus / yksi hyvä demo” -arviointiraja
- GDC:n käyttö ja kielteinen vaikutusarvio rinnakkain
- helpompi / parempi -ero
- SuomiWoW yhteisön, tarkoituksen ja rajojen esimerkkinä
- taustatyön ja pelaajalle näkyvän sisällön ero
- Steam + Clair Obscur yhtenä vastuu- ja disclosure-tapauksena
- workshopin kolme kierrosta: versio, pelillinen päätös, oma rajaus
- showcase ja paluu alun helpompi / parempi -pariin.

### Pidä vain, jos harjoituksessa on tilaa

- GDC:n käyttötapakuvaaja; hyödyllinen mutta pääkuvaajista ensimmäinen
  leikattava
- ilmais- ja maksullisten palvelujen tarkat kuluttajaluvut; pidä argumentin
  taustana, ei pääviestinä
- Quantic Foundryn tarkat prosentit; käyttötapojen ero on numeroita tärkeämpi
- game jamien neljän säännön vertailu; vahva oma miniosuus, mutta päällekkäinen
  Clair Obscurin sääntöteeman kanssa.

### Pidä varamateriaalissa

- Microsoft/Xbox-irtisanomiset ja AI-johtajuus. Jos ne nostetaan pääesitykseen,
  yleisölle luvataan samalla kunnollinen työmarkkina-argumentti, jolle ei nyt
  ole aikaa.
- laaja AI:n historia
- useiden yritysten työkaluesimerkit
- Steam-pelien disclosure-määrä erillisenä numeronostona
- game jam -kyselyluvut
- mallien tai tilaustasojen paremmuusvertailut
- laki-, tekijänoikeus- ja ympäristökysymysten laaja ratkaiseminen.

Näitä aiheita ei tarvitse teeskennellä merkityksettömiksi. Ne nimetään
rajauksina ja pidetään Q&A:ta tai myöhempää materiaalia varten.

## Visuaalinen ja esiintymisen kieli

Verkkosivun pitää tuntua esitykseltä, ei AI-tuotteen dashboardilta.

- Käytä neljää toistuvaa lukua: **HUONE**, **TYÖPÖYTÄ**, **RUUTU** ja tauon
  jälkeen **KÄDET**. Ne tekevät liikkeen mielipiteestä tekemiseen näkyväksi.
- Yhdellä dialla on yksi väite tai yksi kysymys. Lähde ja rajaus voivat olla
  pieninä, mutta niitä ei lueta kokonaan ääneen.
- Paljasta vertailuparin ensimmäinen puoli ennen toista. Animaation tehtävä on
  luoda ajatus, ei vain liikuttaa elementtejä.
- Älä käytä jatkuvaa AI-hehkua, particle-taustoja tai futuristista
  käyttöliittymäestetiikkaa. Se tekisi jo visuaalisesti mainospuheen.
- SuomiWoW ja workshop saavat olla lämpimämpiä, sotkuisempia ja ihmisläheisiä
  kuin tutkimusosuudet.
- Näytä otsikot puheenomaisina väitteinä, ei aiheina. “Käyttö ei tarkoita
  hyväksyntää” on parempi kuin “GDC 2026”.
- Käytä hiljaisuutta tärkeän kysymyksen jälkeen. Kaikkea ei tarvitse täyttää
  animaatiolla tai vitsillä.

Huumorin pitää syntyä maailmanlopun mittakaavan ja käytännön rosoisuuden
välisestä erosta. AI-kriitikko, innostunut aloittelija tai epäonnistunut
workshop-peli ei ole vitsin kohde.

## Kriittiset varoitukset

1. **Älä aloita puolustuskannalta.** Jos AI/GenAI-erottelua seuraa pitkä puhe
   ilmaisversioiden heikkoudesta, yleisö voi perustellusti kuulla viestin
   “kritisoit vain, koska et osaa käyttää oikeaa mallia”.
2. **Älä lupaa työmarkkinapuhetta sivulauseella.** Microsoft-irtisanominen ei
   ole tunnelmakuva vaan suuri oma aihe, joka vaatii kausaalisuuden ja ihmisten
   kokemusten huolellista käsittelyä.
3. **Älä käytä SuomiWoWia AI:n todisteena, jos AI:n roolia ei ole kirjattu
   täsmällisesti.** Projektin vahvin arvo on sen konteksti, ei työkalulista.
4. **Älä tee ensimmäisestä generoinnista workshopin voittoa.** Muuten ohjelma
   päätyy todistamaan juuri sen oletuksen, jota se yrittää tarkentaa.
5. **Älä esitä “AI tekee tylsän, ihminen sielun” -jakoa totuutena.** Myös
   tylsä toteutustyö on ammattitaitoa, ja AI voi osallistua luovaan vaiheeseen.
   Parempi raja on valinta ja vastuu, ei tylsä ja luova.
6. **Älä päätä sloganipatteriin.** Yksi tarkka havainto ja yksi otsikkoon
   palaava lause jäävät mieleen paremmin kuin kuusi ohjetta.
7. **Älä yritä saada yleisöä samaan leiriin.** Tarkempi erimielisyys on tämän
   ohjelman onnistunut lopputulos.

## Harjoituksessa testattavat kysymykset

Sisältöä ei lukita pelkän paperisuunnitelman perusteella. Täydessä
kahden tunnin harjoituksessa tarkistetaan:

1. Ehtiikö kahdeksan gallup-kysymystä niin, että huoneen tuloksia ehditään myös
   ajatella?
2. Kuulostaako “emme arvioi samaa AI:ta” reilulta koejärjestelyn kritiikiltä vai
   maksullisten tuotteiden puolustuspuheelta?
3. Johtaako jokainen pääkuvaaja seuraavaan kysymykseen, vai pysähtyykö esitys
   numeroiden selittämiseen?
4. Ymmärtääkö uusi kuulija ilman ennakkotietoa, miksi SuomiWoW kuuluu juuri
   tähän tarinaan?
5. Mahtuuko Quantic Foundry + Steam + Clair Obscur kymmeneen minuuttiin yhtenä
   ajatuksena? Jos ei, vähennetään sisältöä, ei puhenopeutta.
6. Saavatko osallistujat ensimmäisen version ajoissa niin, että valitsemiseen
   ja testaamiseen jää enemmän huomiota kuin generoimiseen?
7. Näkyykö showcase-esimerkeissä osallistujien tekemä ero, vai vertaillaanko
   vain mallin satunnaisia tuotoksia?
8. Palaako viimeinen lause alun kysymykseen ilman että se kuulostaa AI:n
   puolustus- tai tuomiopuheelta?
