# Live Voting -suunnitelma

## Tavoite

Esityksen alun noin 15 minuutin yleisöäänestys tekee huoneen oman ristiriidan
näkyväksi ennen ulkoisten tilastojen näyttämistä. Tulokset toimivat esityksen
läpi kulkevana vertailukohtana:

- kuinka moni käyttää AI:ta
- miltä sen vaikutus pelialaan tuntuu
- mihin sitä halutaan käyttää
- milloin käytöstä pitäisi kertoa pelaajalle

Tulokset kuvaavat vain paikalla olevaa, itse valikoitunutta yleisöä. Niitä ei
esitetä tutkimuksena eikä verrata GDC- tai pelaajakyselyihin tilastollisesti.

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
- Kysymystyyppi: neljä Single-choice Questionia
- Feedback Question: ei
- Työnimi: `Kuopio Pelaa: tekoäly ja pelit`
- Join Name -ehdotus: `kuopio-pelaa-ai`
- Display Theme: esityksen visuaaliseen tyyliin sopiva tumma tai vaalea teema

Join Name varmistetaan tuotantoympäristössä ennen QR-koodien tekemistä. Sitä ei
kovakoodata yleisölle näkyviin materiaaleihin ennen kuin deployment ja nimi ovat
lopulliset.

## Kysymykset

### 1. Kuinka usein käytät generatiivista tekoälyä?

Options:

1. Päivittäin
2. Viikoittain
3. Harvemmin
4. Olen vain kokeillut
5. En koskaan

Tehtävä: helppo ensimmäinen Vote, jolla osallistujat oppivat käyttöliittymän ja
esiintyjä näkee, että yhteys toimii.

### 2. Miltä generatiivisen tekoälyn vaikutus pelialaan tuntuu juuri nyt?

Options:

1. Erittäin myönteiseltä
2. Jokseenkin myönteiseltä
3. Ristiriitaiselta
4. Jokseenkin kielteiseltä
5. Erittäin kielteiseltä

Tehtävä: muodostaa huoneen oma lähtötilanne, johon GDC:n
suhtautumistrendin yhteydessä palataan.

### 3. Missä käyttäisit AI:ta mieluiten pelinteossa?

Options:

1. Ideoinnissa ja protoilussa
2. Koodissa, testauksessa ja debuggaamisessa
3. Dokumentaatiossa ja lokalisoinnissa
4. Pelaajalle näkyvässä luovassa sisällössä
5. En missään

Tehtävä: johdattaa kysymykseen siitä, madaltaako AI aloittamisen kitkaa vai
siirtyykö se kohti lopullista luovaa sisältöä.

### 4. Millä rajalla AI-käytöstä pitäisi kertoa pelaajalle?

Options:

1. Kaikesta AI-käytöstä
2. Kun AI näkyy tai kuuluu lopputuloksessa
3. Vain kun sisältöä generoidaan pelin aikana
4. Vain kun laki tai kauppapaikka vaatii
5. Siitä ei tarvitse kertoa

Tehtävä: luo silta Steam-ilmoituksiin, pelaajan luottamukseen ja esityksen
myöhempään rajakeskusteluun.

## 15 minuutin käyttöjärjestys

| Aika | Toiminta | Presenter Controls | Presentation Display |
|---:|---|---|---|
| 0:03–0:06 | Liittyminen ja lyhyt käyttöohje | Istunto on Lobbyssa. Seuraa liittyjämäärää. | Näytä otsikko, QR-koodi, suora linkki ja Join Name. |
| 0:06–0:08 | Kysymys 1 | Avaa, anna Voteille noin minuutti, sulje. | Näytä live-Result ja kommentoi vain käyttöjakauman pääpiirre. |
| 0:08–0:11 | Kysymys 2 | Avaa, anna aikaa, sulje. | Anna yleisön nähdä jakauma; nimeä mahdollinen ristiriita. |
| 0:11–0:14 | Kysymys 3 | Avaa, anna aikaa, sulje. | Nosta yleisin ja yllättävin Option ilman ylianalyysiä. |
| 0:14–0:17 | Kysymys 4 | Avaa, anna aikaa, sulje. | Nimeä huoneen disclosure-raja ja jätä kysymys auki narratiivisesti. |
| 0:17–0:18 | Siirtymä takaisin esitykseen | Pidä istunto Live-tilassa ja viimeinen Question suljettuna. | Vaihda takaisin esityssivulle. |

Äänestysistuntoa ei päätetä heti. Aikaan 0:56–0:58 palataan suljettuihin
kysymyksiin 2 ja 4, minkä jälkeen istunto päätetään. Tällöin osallistujien
Participant View siirtyy Session Resultsiin ennen taukoa.

## Esiintyjän puhelogiikka

Ennen ensimmäistä kysymystä:

> Ensin en kerro, mitä peliala ajattelee. Katsotaan mitä tämä huone ajattelee.

Tuloksia käsitellessä:

- sano “tässä huoneessa”, älä “pelaajat ajattelevat”
- nosta yksi havainto per kysymys
- älä selitä jokaista palkkia
- älä arvioi yksittäisten osallistujien valintoja
- jätä osa tuloksista tarkoituksella myöhemmin ratkaistavaksi

Palattaessa tuloksiin esityksen lopulla:

> Tätä mieltä olimme ennen kuin näimme luvut ja vedimme rajoja. Vastaukset
> eivät ehkä muuttuneet, mutta nyt tiedämme paremmin, mitä niiden takana on.

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
- testaa koko Lobby → neljä kysymystä → paluu suljettuihin tuloksiin → End
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
2. Tee kysymykset 2 ja 4 käsiäänestyksinä.
3. Käytä enintään viisi minuuttia koko fallbackiin.
4. Siirry henkilökohtaiseen tarinaan ja käytä vapautunut aika esityksen
   myöhempiin keskusteluihin.

Älä näytä vanhan yleisön tuloksia uuden yleisön vastauksina. Offline-varakuvat
saavat havainnollistaa käyttöliittymää, mutta ne merkitään selvästi demoksi.

## Onnistumiskriteerit

- Yleisö liittyy ilman tiliä ja ensimmäinen Question avautuu viimeistään
  kuuden minuutin kohdalla.
- Neljä kysymystä suljetaan 15 minuutin kokonaisajan sisällä.
- Presentation Display näyttää tulokset projektorilta luettavasti.
- Esityksen faktadiat palaavat vähintään kahteen alun tulokseen.
- Istunto päättyy ennen taukoa ja osallistujat näkevät Session Resultsin.
- Vapaata tekstiä, henkilötietoja tai hallintanäkymää ei näytetä yleisölle.
