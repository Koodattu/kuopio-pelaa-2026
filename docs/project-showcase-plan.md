# SuomiWoW-projektishowcase

## Tarkoitus esityksessä

Kahdeksan minuutin showcase tekee “builder”-näkökulmasta konkreettisen.
SuomiWoW ei ole esityksessä portfolioesittely tai teknologiapinon läpikäynti,
vaan esimerkki siitä, miten tietty yhteisö, oikea data ja tekijän rajaukset
muuttavat yleisen teknisen mahdollisuuden merkitykselliseksi tuotteeksi.

Showcasen muistettava väite:

> Koodi tekee ominaisuuden. Yhteisö, rajat ja valinnat tekevät siitä meidän.

## Mitä projekti on

SuomiWoW on epävirallinen, kaksikielinen suomalaisen World of Warcraft
-raidiyhteisön palvelu. Se kokoaa samaan paikkaan muun muassa progression,
raidihistorian, hahmojen suorituskyvyn, guildit ja yhteisöominaisuudet.

SuomiWoW CCG muuttaa tämän historian keräilykokemukseksi:

- ilmaiset viiden kortin pakkaukset
- raid tieriin sidotut, muuttumattomat hahmosnapshotit
- guild, rooli, ulkoasu, raidisuoritus, mechanics ja Mythic+ -tausta
- S–F-rarity, erilaiset finishit ja vaihtoehtoinen kuvitus
- kokoelmat, suosikit, settien valmistuminen, jaettavat pullit ja leaderboard
- ei ostoksia, vaihtoa, markkinapaikkaa tai pay-to-progress-mekaniikkaa

Nykyinen käyttäjälooppi on pack opening ja keräily. Erillisessä
suunnitteludokumentissa kuvattu raid-leading- ja party-management-peli ei ole
vielä osa tämän live-demon lupausta. Älä kutsu nykyistä versiota card
battleriksi tai näytä tulevia pelimuotoja toteutettuina ominaisuuksina.

## Kahdeksan minuutin kulku

| Aika | Toiminta | Yleisölle näkyvä asia | Puheen tehtävä |
|---:|---|---|---|
| 0:24–0:26 | Kehystys | Yksi kuva SuomiWoWista ja otsikko “Kun raididata muuttui leikiksi” | Kerro yhdellä lauseella, mikä palvelu on ja miksi CCG syntyi. |
| 0:26–0:29 | Avaa yksi pakka | `/ccg/open`, valittu raid tai All raids, yhden viiden kortin pakan avaus | Näytä tunne ja palaute; älä selitä jokaista kontrollia. |
| 0:29–0:31 | Tarkastele yhtä korttia | Kortin nimi, guild, rooli, tier grade, data ja yksi näkyvä finish | Selitä, että kortti on oikean yhteisöhistorian muuttumaton snapshot eikä geneerinen fantasy-hahmo. |
| 0:31–0:32 | Kokoelma ja teesilause | `/ccg/collection` tai yksi ennalta valittu kokoelmanäkymä | Näytä, miten yksittäinen pull liittyy pitkäaikaiseen keräilyyn, ja palaa esityksen väitteeseen. |

Demo päättyy ajallaan riippumatta siitä, kuinka harvinainen pakka on. Tavoite ei
ole saada näyttävää satunnaistulosta, vaan näyttää tuotteen idea.

## Ehdotettu puhekaari

### Kehystys

> Tämä alkoi progress trackerina. Sen tehtävä oli vastata kysymykseen: kuka
> tappoi mitä ja milloin? Jossain vaiheessa kysyimme kiinnostavamman kysymyksen:
> entä jos yhteisön historiaa ei vain luettaisi — entä jos sitä voisi avata
> pakasta?

### Pakan aikana

> Nämä eivät ole satunnaisia fantasy-hahmoja. Kortit ovat tämän yhteisön
> oikeita hahmoja tietyssä raid tierissä. Data tulee historiasta, mutta kokemus
> syntyy siitä, miten se rajataan, arvotetaan ja esitetään.

### Korttia tarkastellessa

> Tämä kortti ei ole vain kuva ja rarity. Se on päätös siitä, mikä yhteisössä on
> muistamisen arvoista ja miten data muutetaan tunnistamiseksi.

### Lopetus

> Työkalu voi auttaa rakentamaan enemmän ja nopeammin. Se ei päätä, miksi
> suomalainen raidihistoria pitäisi muuttaa korttipeliksi. Se typerä päätös piti
> keksiä itse.

Viimeisen kappaleen AI-väite muotoillaan lopullisesti vasta, kun esiintyjä on
kirjannut faktapohjaisesti, missä SuomiWoW-projektin vaiheissa AI:ta käytettiin.
Älä anna ymmärtää, että koko projekti tai CCG on AI:n tekemä, ellei se ole
tarkka ja perusteltavissa oleva kuvaus.

## Live-demo

Projektin README:n tämänhetkinen julkinen osoite:

```text
https://suomiwow.vaarattu.tv/ccg
```

Suositeltu reitti:

1. Avaa CCG:n landing valmiiksi ladattuna.
2. Siirry pack openingiin.
3. Anna yleisön valita vain “yksi raid” tai “All raids”.
4. Avaa tasan yksi viiden kortin pakka.
5. Valitse paketista visuaalisesti tai tarinallisesti selkein kortti.
6. Avaa kortti suureksi ja nimeä korkeintaan kolme tietokenttää.
7. Avaa collection valmiiksi valittuun näkymään.
8. Palaa esitykseen.

Leaderboard, activity history, character checker, Twitch rewards, redeem codes
ja hallintatyökalut ovat oikeita ominaisuuksia, mutta niitä ei selata tässä
kahdeksan minuutin demossa.

## Ennen tapahtumaa

- tarkista, että tuotantosivusto ja CCG-feature flag ovat käytössä
- päätä käytetäänkö valmista esiintyjätiliä vai ennalta testattua guest-istuntoa
- varmista pack balance ja että yksi pakka voidaan avata ilman kirjautumis- tai
  claim-dialogia
- valitse etukäteen yksi näyttävä mutta sisällöllisesti selkeä kortti
  fallbackiksi
- avaa landing, pack opening, fallback-kortti ja collection omiin
  välilehtiinsä
- päätä käytetäänkö pakan ääniä; testaa tapahtuman äänentoisto tai pidä äänet
  pois päältä
- kytke ilmoitukset pois ja varmista, ettei projektorin kautta näy hallinta- tai
  henkilötietoja
- harjoittele koko kulku alle kahdeksaan minuuttiin myös hitaalla verkolla
- kirjoita puhujamuistiinpanoihin tarkka, todennettava kuvaus AI:n roolista
  projektissa

## Varapolku

Valmistele paikallisesti:

- enintään kolmen minuutin ruutukaappaus yhdestä pack openingista
- pysäytyskuva avatusta pakasta
- pysäytyskuva yhdestä tietorikkaasta kortista
- pysäytyskuva collection-näkymästä

Jos tuotantosivu ei avaudu tai demo ei etene 30 sekunnissa, vaihda suoraan
ruutukaappaukseen. Älä debuggaa tuotantoa yleisön edessä.

Jos satunnainen pakka ei tarjoa hyvää selitysesimerkkiä, näytä se silti loppuun
ja avaa sen jälkeen ennalta valittu fallback-kortti. Älä avaa uusia pakkoja
paremman tuloksen toivossa.

## Onnistumiskriteerit

- Showcase kestää enintään kahdeksan minuuttia.
- Yleisö ymmärtää SuomiWoW-palvelun tarkoituksen ilman teknologiapinolistaa.
- Yksi pack opening, yksi kortti ja collection näkyvät.
- Kortin yhteys oikeaan yhteisödataan tulee selväksi.
- Ilmainen, ei-vaihdettava ja ei-kaupallinen tuoteraja mainitaan lyhyesti.
- Nykyistä CCG:tä ei esitetä card battlerina eikä tulevia game modeja valmiina.
- AI:n roolista esitetään vain puhujan vahvistama, todennettava kuvaus.
- Verkkohäiriö ei vie showcaselta yli 30 sekuntia ennen fallbackiin siirtymistä.
