# Lähdepankki

## Käyttötarkoitus

Tämä tiedosto on esityksen lähderekisteri ja julkaisun tarkistuslista. Sen
tavoite on estää sitä, että taustamuistiinpanojen väite tai irrotettu numero
päätyy kuvaajaan ilman alkuperäistä lähdettä, kontekstia ja caveatia.

Osa tietueista on nyt tarkistettu alkuperäisjulkaisuista ja osa on edelleen
taustamateriaalin perusteella tilassa **tarkistettava**. Tietuekohtainen tila on
aina tämän yleiskuvauksen yläpuolella.

Elokuussa 2026 tuotettua Deep Research -raporttia käytetään lähteiden
paikantamiseen ja tutkimuskysymysten jäsentämiseen, ei ulkoisen väitteen
alkuperäislähteenä. PDF säilytti linkit Markdown-versiota paremmin. Valitut
väitteet, kuvaajat ja hylkäysperusteet on koottu
[tutkimus- ja kuvaajasuunnitelmaan](research-and-chart-plan.md).
Game jamien GenAI-sääntöjä koskevat lähteet, keskenään erilaiset policy-mallit
ja tulkintarajat on koottu lisäksi
[game jam -sääntövertailuun](game-jam-ai-rules.md).

## Julkaisuportti

Väite tai kuvaaja saa tilan **valmis** vasta, kun:

- alkuperäinen URL ja julkaisupäivä on tallennettu
- väite löytyy lähteestä samassa merkityksessä
- prosenttien nimittäjä, otos, vuosi ja kysymyksenasettelu ymmärretään
- kuvaajan paikallinen data vastaa lähdettä
- caveat näkyy joko dialla tai puhujamuistiinpanoissa
- lähteen nimi ja vuosi näkyvät yleisölle
- tarkistuspäivä on merkitty tähän tiedostoon

## Pääesityksen lähteet

### SRC-NIST-AI-GENAI — AI-yläkäsite ja generatiivinen AI

- Tila: tarkistettu virallisista NIST-lähteistä 2026-08-07
- Suunniteltu dia: “AI ei alkanut ChatGPT:stä”
- AI-määritelmä: konepohjainen järjestelmä, joka ihmisen määrittämien
  tavoitteiden pohjalta tekee ennusteita, suosituksia tai päätöksiä ja vaikuttaa
  todelliseen tai virtuaaliseen ympäristöön
- GenAI-määritelmä: AI-mallien luokka, joka jäljittelee syötedatan rakennetta ja
  ominaisuuksia tuottaakseen johdettua synteettistä sisältöä, kuten tekstiä,
  kuvaa, videota tai ääntä
- Esityksen selkokielinen tulkinta: AI on yläkäsite; GenAI on sen sisältöä
  tuottava osa
- AI URL: `https://csrc.nist.gov/glossary/term/artificial_intelligence`
- GenAI URL:
  `https://csrc.nist.gov/glossary/term/generative_artificial_intelligence`
- Caveat: näkyvä dia käyttää selkokieltä eikä esitä ennustamista ja
  generoimista tekoälyn ainoina alalajeina
- Tarkistettu: kyllä, 2026-08-07

### SRC-GAME-AI-HISTORY — peleissä käytetty AI ennen GenAI-aaltoa

- Tila: Microsoft Gamingin alkuperäinen artikkeli tarkistettu 2026-08-08
- Suunniteltu dia: “AI ei alkanut ChatGPT:stä”
- Turvallinen väite: videopeleissä on käytetty AI:ksi kutsuttuja tekniikoita
  kauan ennen nykyistä GenAI-aaltoa, esimerkiksi sääntöpohjaisiin
  pelihahmoihin, pelaajan taitoluokitukseen ja matchmakingiin sekä
  proseduraaliseen kenttien generointiin
- Käyttö: kolme nopeasti nimettävää peliesimerkkiä AI-yläkäsitteen alle; ei
  omaa historia-aikajanaa
- Caveat: Microsoftin artikkeli on yrityksen oma yleiskatsaus. Esimerkeillä
  havainnollistetaan käsitteellistä eroa, ei arvioida järjestelmien laatua tai
  nimetä jokaista pelien automaatiota tekoälyksi.
- Alkuperäinen URL:
  `https://developer.microsoft.com/en-us/games/articles/2024/08/fortifying-teams-with-ai-and-optimized-workflows/`
- Julkaistu: 2024-08-07
- Tarkistettu: kyllä, 2026-08-08

### SRC-RECOMMENDERS — arjen AI-pohjaiset sisältösuositukset

- Tila: tarkistettu alustojen omista ensisijaisista lähteistä 2026-08-07
- Suunniteltu dia: “AI ei alkanut ChatGPT:stä”
- Turvallinen väite: YouTube, TikTok ja Instagram käyttävät personoituja
  suositus- tai järjestämisjärjestelmiä valitessaan ja järjestäessään käyttäjälle
  näytettävää sisältöä
- YouTube URL:
  `https://support.google.com/youtube/answer/16533387?hl=en`
- TikTok URL:
  `https://newsroom.tiktok.com/how-tiktok-recommends-videos-for-you?lang=en`
- Instagram / Meta URL:
  `https://about.fb.com/news/2023/06/how-ai-ranks-content-on-facebook-and-instagram/`
- Caveat: lähteet ovat alustojen omia kuvauksia. Niillä ei todisteta, että
  jokainen yleisön jäsen käyttää palveluja tai hyväksyy niiden toimintatavat.
- Tulkintaraja: suositusjärjestelmän käyttäminen ei tarkoita kaikkien GenAI:n
  luovien käyttötapojen hyväksymistä. Dia ei ole tekopyhyysargumentti.
- Tarkistettu: kyllä, 2026-08-07

### SRC-OPENAI-BRAND — ChatGPT-paljastuksen virallinen tunnus

- Tila: virallinen brändiohje tarkistettu 2026-08-07; lopullinen asset ladataan
  vasta esityksen toteutusvaiheessa
- Suunniteltu dia: avauksen ChatGPT-paljastus
- URL: `https://openai.com/brand/`
- Käyttöraja: käytä vain OpenAI:n tarjoamaa ajantasaista tunnusta, säilytä sen
  mittasuhteet ja suoja-alue äläkä käytä sitä esityksen tai tapahtuman omana
  brändinä
- Älä käytä Toivolanranta-PowerPointiin upotettua rasteroitua kopiota
- Tarkistettu: ohje kyllä, asset ei vielä

### SRC-BITKOM-FREE-PAID-2025 — maksullisten GenAI-palvelujen käyttö Saksassa

- Tila: Bitkom Researchin alkuperäinen tutkimustiedote tarkistettu 2026-08-09
- Suunniteltu käyttö: “Me emme arvioi samaa tekoälyä” -jakson
  puhujamuistiinpano; tarvittaessa yksi näkyvä numeronosto, ei pääkuvaaja
- Otos: edustava kysely Saksassa, `n = 1 005`, vähintään 16-vuotiaat
- Turvallinen väite: GenAI:ta käyttävistä 8 % käytti parhaillaan maksullisia
  AI-palveluja ja 2 % oli käyttänyt niitä aiemmin mutta ei enää
- Lisäkonteksti: 67 % kaikista vastaajista käytti ainakin joskus GenAI:ta; 22 %
  maksamattomista voisi kuvitella maksavansa tulevaisuudessa ja 62 % ei aikonut
  käyttää maksullista palvelua
- Tulkintaraja: tutkimus mittaa maksamista, ei käytetyn mallin kokoa, tuloksen
  laatua, AI-osaamista tai suhtautumista pelien GenAI-käyttöön
- Kriittinen raja: aineistosta ei tiedetä, olivatko AI:ta kielteisesti
  arvioivat vastaajat juuri maksuttomien palvelujen käyttäjiä
- Alkuperäinen URL:
  `https://bitkom-research.de/news/viele-nutzen-ki-aber-nur-wenige-bezahlen-dafuer`
- Julkaistu: 2025-05-19
- Tarkistettu: kyllä, 2026-08-09

### SRC-ACCC-FREE-PAID-2025 — ilmainen ja maksullinen ChatGPT Australiassa

- Tila: Australian Competition and Consumer Commissionin julkaisema
  alkuperäinen kyselyraportti tarkistettu 2026-08-09
- Suunniteltu käyttö: Bitkom-luvun vahvistava toinen maa
  puhujamuistiinpanoissa; ei erillistä maavertailukuvaajaa
- Aineisto: Lonergan Researchin kuluttajakysely, loka–marraskuu 2024,
  australialaiset vähintään 14-vuotiaat
- ChatGPT-nimittäjä: ChatGPT:tä edeltäneen kuuden kuukauden aikana käyttäneet,
  `n = 1 016`
- Turvallinen väite: 93 % ChatGPT-käyttäjistä käytti ilmaisversiota ja 6 %
  maksullista versiota
- Tulkintaraja: tulos koskee ilmoitettua palvelutasoa, ei käyttötiheyttä,
  käyttötaitoa, mallin laatua tai AI-asennetta
- Yleistysraja: Australia ja vuoden 2024 lopun tuotetilanne eivät yksin kuvaa
  Suomen tapahtumayleisöä tai vuoden 2026 mallitarjontaa
- Alkuperäinen URL:
  `https://www.accc.gov.au/system/files/dpsi-consumer-survey-research-report-lonergan-research-feb2025.pdf`
- Julkaistu: 2025-02
- Tarkistettu: kyllä, 2026-08-09, raportin sivut 18–19

### SRC-GALLUP-USE-SENTIMENT-2026 — käyttötiheys ja Gen Z:n AI-tunteet

- Tila: Gallupin alkuperäinen tulosjulkaisu tarkistettu 2026-08-09
- Suunniteltu käyttö: kokemuksen ja myönteisen asenteen yhteyden caveat
  puhujamuistiinpanoissa, ei näkyvä pääkuvaaja
- Otos: `n = 1 572`, 14–29-vuotiaat yhdysvaltalaiset, probability-based Gallup
  Panel, verkkokysely 24.2.–4.3.2026
- Käyttötiheys: 22 % käytti GenAI:ta päivittäin, 29 % viikoittain ja 19 % ei
  koskaan
- Turvallinen havainto: päivittäisistä käyttäjistä 44 % kertoi olevansa
  innostuneita ja 38 % toiveikkaita; ei-käyttäjillä osuudet olivat 4 % ja 2 %
- Tasapainottava havainto: koko ryhmän innostus laski, toiveikkuus laski ja viha
  lisääntyi vuodesta 2025. Gallupin mukaan edes päivittäiset käyttäjät eivät
  muuttuneet vuoden aikana myönteisemmiksi.
- Kausaaliraja: käyttötiheys ja myönteiset tunteet liittyvät toisiinsa, mutta
  tutkimus ei osoita käytön aiheuttavan myönteisyyttä. Myönteisesti suhtautuvat
  voivat myös käyttää enemmän.
- Alkuperäinen URL:
  `https://news.gallup.com/poll/708224/gen-adoption-steady-skepticism-climbs.aspx`
- Julkaistu: 2026-04-08
- Tarkistettu: kyllä, 2026-08-09

### SRC-OPENAI-FREE-TIER-2026 — ChatGPT Free Tier -tuotedokumentaatio

- Tila: OpenAI Help Centerin ajantasainen virallinen ohje tarkistettu
  2026-08-09
- Suunniteltu käyttö: vastanäyttö väitteelle, että ilmaisversio tarkoittaisi
  aina pelkkää hyvin pientä tekstimallia
- Turvallinen väite: Free Tier sisältää keskustelun lisäksi verkkohakua,
  data-analyysia, tiedosto- ja kuvalatauksia, GPT:iden käyttöä sekä kuvien
  luontia; ominaisuuksilla ja mallikäytöllä on maksullisia tasoja tiukemmat
  rajat
- Tuoteraja: oletusmalli, ominaisuudet ja rajat voivat muuttua ajan myötä.
  Dokumentaatio ei lupaa ilmaisen ja maksullisen tason samanlaista laatua tai
  pääsyä kaikkiin malleihin.
- Lähdekritiikki: palveluntarjoajan oma dokumentaatio on ensisijainen lähde
  ominaisuuksille mutta ei riippumaton arvio niiden laadusta
- Alkuperäinen URL:
  `https://help.openai.com/en/articles/9275245-using-chatgpt-s-free-tier-faq`
- Tarkistettu: kyllä, 2026-08-09

### SRC-FRONTIERS-FREE-PAID-2024 — rajattu ilmais- ja tilausmallien vertailu

- Tila: vertaisarvioitu Frontiers in Education -artikkeli tarkistettu
  2026-08-09 tiivistelmän, menetelmän ja johtopäätösten osalta
- Suunniteltu käyttö: puhujamuistiinpanon vastaesimerkki oletukselle, että
  tilauspohjainen chatbot olisi aina ilmaista parempi; ei näkyvä numeronosto
- Tutkimustehtävä: vision-capable chatbotien kyky tulkita kinematiikan kuvaajia
- Turvallinen havainto: tutkimuksessa tilauspohjaiset chatbotit eivät yleisesti
  voittaneet ilmaisia vaihtoehtoja, ja ilmainen ChatGPT-4o suoriutui tässä
  tehtävässä paremmin kuin useat maksulliset versiot
- Tulkintaraja: yksi koulutuksellinen ja kuvallinen tehtävä ei mittaa yleistä
  kieli-, koodi-, kuva- tai pelinkehityskyvykkyyttä
- Aikaraja: vertailun vuosien 2023–2024 mallit ja palvelutasot vanhenevat
  nopeasti eikä tuloksia saa käyttää vuoden 2026 mallien rankingina
- Alkuperäinen URL:
  `https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2024.1452414/full`
- Julkaistu: 2024
- Tarkistettu: kyllä, 2026-08-09

### SRC-GDC-2026-SENTIMENT — GDC State of the Game Industry 2026

- Tila: väite tarkistettu GDC:n virallisesta yhteenvedosta ja vuoden 2026
  raportista 2026-08-08; paikallinen kuvaajadata puuttuu
- Suunniteltu dia: “Käyttö ei tarkoita hyväksyntää”
- Turvallinen pääväite: yli 2 300 pelialan ammattilaisen kyselyssä 36 % kertoi
  käyttävänsä generatiivisen AI:n työkaluja työssään, 52 % arvioi GenAI:n
  vaikutuksen pelialaan kielteiseksi ja 7 % myönteiseksi
- Kuvaajaraja: 36 %, 52 % ja 7 % ovat eri kysymysten mittareita eivätkä yhden
  jakauman osia. Niitä ei piirretä stacked barina eikä niistä päätellä, että
  juuri samat vastaajat käyttivät työkaluja ja suhtautuivat kielteisesti.
- Vuosivertailu: vuoden 2026 raportti mainitsee aiempien kielteisten osuuksien
  olleen 18 % vuonna 2024 ja 30 % vuonna 2025, mutta sanoo kyselymuutosten
  vaikeuttavan vuosivertailua ja uuden luotettavan vertailupohjan syntyvän vasta
  vuonna 2027
- Otoscaveat: vuoden 2026 kysely laajeni aiempaa useampiin pelialan
  ekosysteemin rooleihin ja painottui Pohjois-Amerikkaan sekä Länsi-Eurooppaan
- Virallinen yhteenveto:
  `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/`
- Virallinen raporttisivu: `https://reg.gdconf.com/2026-SOTI/`
- Tarkistettu: kyllä, 2026-08-08
- Kuvaajan tila: arvot tarkistettu, paikallinen data ei vielä luotu

### SRC-GDC-2026-USES — GDC State of the Game Industry 2026

- Tila: väite tarkistettu GDC:n virallisesta yhteenvedosta 2026-08-08;
  paikallinen kuvaajadata puuttuu
- Suunniteltu dia: “Ensin vaihtoehtoja, vasta sitten peli”
- Turvallinen pääväite: GenAI:ta työssään käyttävien yleisimmät käyttötavat
  olivat research/brainstorming 81 %, päivittäiset tehtävät 47 %, koodiapu 47 %
  ja prototypointi 35 %
- Tukee argumenttia: nykyinen käyttö painottuu työn tukeen ja vaihtoehtojen
  tuottamiseen ennen julkaistua lopputulosta
- Nimittäjä: GenAI:ta työssään käyttävät vastaajat, ei koko kyselyn otos tai koko
  peliala; julkinen yhteenveto ei kerro alaryhmän tarkkaa `n`:ää
- Kysymyscaveat: monivalinta, joten prosentteja ei summata sataan. Yhdistetty
  `research / brainstorming` ei kerro näiden kahden toiminnan erillisiä osuuksia
  eikä käytön laatua tai vaikutusta.
- Alkuperäinen URL:
  `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/`
- Tarkistettu: kyllä, 2026-08-08
- Kuvaajan tila: neljä pääarvoa tarkistettu, paikallinen data ei vielä luotu

### SRC-STEAM-DISCLOSURES-2025 — Totally Human Media / Ichiro Lambe

- Tila: kirjoittajan julkaisema analyysi tarkistettu 2026-08-08; ei Valven
  virallinen tilasto eikä itsenäisesti auditoitu raakadata
- Suunniteltu käyttö: yksi päivämäärään sidottu faktanosto Steam/Clair Obscur
  -tapauksessa, ei pääkuvaaja
- Snapshot: 13.7.2025 yhteensä 7 818 Steam-peliä ilmoitti GenAI-käytöstä;
  kirjoittajan mukaan noin 7 % noin 114 126 pelin kirjastosta ja hieman alle
  20 % vuoden 2025 julkaisuista
- Luokittelu: kirjoittajan mukaan noin 60 % ilmoituksista mainitsi visuaalisten
  assettien generoinnin
- Menetelmä: kirjoittaja kertoo käyttävänsä Steam API:a We Love Every Game
  -löytöpalvelussaan. Raakadataa tai luokittelukoodia ei julkaistu sivulla.
- Caveat: ilmoitukset mittaavat ilmoitettua käyttöä, eivät kaikkea toteutunutta
  käyttöä. Seitsemän prosenttia koko kirjastosta ja hieman alle 20 prosenttia
  vuoden 2025 julkaisuista ovat eri nimittäjiä.
- Aikasarjaraja: kirjoittajan noin tuhannen pelin 2024-luku on muistinvarainen;
  luotettavaa vuoden 2026 snapshotia ei löytynyt. Aikasarjakuvaajaa ei tehdä.
- Alkuperäinen URL:
  `https://www.totallyhuman.io/blog/the-surprising-new-number-of-genai-games-on-steam`
- Julkaistu: 2025-07-13
- Tarkistettu: kyllä, 2026-08-08, julkaistun analyysin sisäinen sisältö
- Kuvaajan tila: ei pääkuvaajaa; yksittäinen faktanosto hyväksytty caveatilla

### SRC-QUANTIC-2025 — Quantic Foundry, gamer attitudes to GenAI

- Tila: tarkistettu Quantic Foundryn alkuperäisestä julkaisusta 2026-08-08;
  paikallinen kuvaajadata puuttuu
- Suunniteltu dia: “Luova sisältö osuu herkempään rajaan”
- Otos: vapaaehtoinen lisäkysely Gamer Motivation Profile -testin jälkeen,
  `n = 1 799`, loka–joulukuu 2025
- Yleinen asenne: 85 % sijoittui neutraalin alapuolelle ja 63 % valitsi
  kielteisimmän vaihtoehdon
- Käyttötavat: AI-generoitu dialogi 83 % kielteinen ja AI-generoidut questit
  77 % kielteinen. GenAI:n käytössä dynaamiseen vaikeustasoon 26 % oli
  myönteisiä ja 24 % neutraaleja, joten kielteinen osuus on laskennallisesti
  noin 50 %.
- Tukee argumenttia: tässä otoksessa näkyvä luova sisältö sai kielteisemmän
  vastaanoton kuin teknisempi käyttötapa
- Kokemusjakson käyttö: Story- ja Design-motivaatioiden negatiiviset
  korrelaatiot tukevat tulkintaa, että osa vastustuksesta koskee luovaa
  merkitystä ja tekijyyttä eikä vain mallin teknistä laatua
- Otoscaveat: 90 % pelasi PC:llä, 74 % määrittyi core- ja 21 %
  hardcore-pelaajiksi; 80 % oli 18–34-vuotiaita. Otos ei edusta automaattisesti
  kaikkia pelaajia.
- Mittauscaveat: noin 50 % on johdettu arvosta `100 - 26 - 24`. Dynaaminen
  vaikeustaso ei itsessään tarkoita GenAI:ta; lähteen kysymys koski GenAI:n
  käyttämistä siihen.
- Alkuperäinen URL: `https://quanticfoundry.com/2025/12/18/gen-ai/`
- Julkaistu: 2025-12-18
- Tarkistettu: kyllä, 2026-08-08
- Kuvaajan tila: kolme käyttötapa-arvoa tarkistettu, yksi niistä johdettu;
  paikallinen data ei vielä luotu

## Oma projekti

### SRC-SUOMIWOW — SuomiWoW ja SuomiWoW CCG

- Tila: tarkistettu suunnittelua varten paikallisesta projektista 2026-08-07;
  tuotantodemo tarkistetaan uudelleen ennen tapahtumaa
- Suunniteltu osuus: “Kun raididata muuttui leikiksi”
- Ensisijaiset lähteet: `wow-guild-progress-tracker/README.md`, `PRODUCT.md`,
  nykyiset `/ccg`-reitit ja CCG-komponentit
- Julkinen URL projektin README:ssa: `https://suomiwow.vaarattu.tv`
- Turvalliset väitteet: SuomiWoW kokoaa suomalaisen WoW-raidiyhteisön
  progression, hahmo- ja suorituskykydatan, historian ja yhteisöominaisuudet
  yhteen kaksikieliseen palveluun. CCG muuttaa raidihistorian ilmaisiksi viiden
  kortin pakoiksi ja kerättäviksi, raid tieriin sidotuiksi hahmosnapshoteiksi.
- CCG:n nykyinen painopiste: pack opening, kortit ja finishit, kokoelmat,
  jakaminen ja keräilijöiden leaderboard
- Tuoteraja: ominaisuus on ilmainen, ei-vaihdettava ja ei-kaupallinen; siinä ei
  ole ostoksia tai pay-to-progress-mekaniikkaa
- Tärkeä caveat: card battles, deck building ja raid-leading-pelimuodot ovat
  erillisessä suunnitteludokumentissa, eivät nykyisen live-demon luvattavaa
  toimintaa
- AI-caveat: paikallinen projekti ei dokumentoi esityksessä kerrottavaa AI:n
  roolia. Esiintyjä vahvistaa ennen lopullista sisältöä, missä vaiheissa ja
  millä tavalla AI:ta oikeasti käytettiin.

### SRC-AI-WORKSHOP-PLAYGROUND — työpajan prototyyppityökalu

- Tila: tarkistettu suunnittelua varten paikallisesta projektista 2026-08-07;
  tuotantodeployment ja tietosuojateksti tarkistetaan ennen tapahtumaa
- Suunniteltu osuus: 45 minuutin osallistava peliprototyyppityöpaja
- Ensisijaiset lähteet: `ai-workshop-playground/README.md`, `TECHNICAL.md`,
  frontendin työtilakomponentit sekä backendin generate-, versions-, share- ja
  admin-reitit
- Paikallinen projekti:
  `C:/Users/Juha/Desktop/Projektit/ai-workshop-playground`
- Turvalliset väitteet: sovellus tarjoaa suomenkielisen PELI / MUOKKAA -polun,
  luonnollisen kielen AI-generoinnin, yhden HTML-tiedoston editorin,
  hiekkalaatikoidun live-esikatselun, mobiilin paneelinavigoinnin,
  versiohistorian, `index.html`-latauksen ja vapaaehtoiset jakolinkit
- Käyttöraja: työpajasalasanalla on vanhenemisaika ja selainkohtainen
  pyyntökiintiö; nykyinen oletus on 20 generointipyyntöä
- Tallennuscaveat: backend tallentaa onnistuneiden generointien promptit,
  koodiversiot, pseudonyymin kävijätunnisteen ja käyttötilastoja. Selain
  tallentaa tunnisteen, asetuksia ja omia luomuksia paikallisesti.
- Jakamiscaveat: julkinen jakolinkki sisältää koodin eikä nykyisessä
  toteutuksessa vanhene automaattisesti
- Turvallisuuscaveat: `sandbox="allow-scripts"` erottaa esikatselun playgroundin
  ylätason DOMista, mutta ei muodosta täydellistä verkko-, CPU- tai
  muistieristystä
- Tuotantoraja: julkinen HTTPS-URL, mallit, palveluntarjoajan ehdot,
  osallistujakuorma, kustannuskatto, tietosuojailmoitus, säilytysaika ja
  poistomenettely ovat vielä päätettäviä.

## Rakenteellinen referenssi

### SRC-TOIVOLANRANTA-REFERENCE — aiempi erillinen AI-esitys

- Tila: kaikki 85 diaa tarkastettu 2026-08-07
- Paikallinen tiedosto:
  `C:/Users/Juha/Downloads/toivolanranta_esitys.pptx`
- Käyttö: rakenteellinen inspiraatio, ei ulkoisten faktaväitteiden lähde eikä
  visuaalinen template
- Sovellettavat kohdat: sana-assosiaatio ja ChatGPT-paljastus (diat 6–8),
  AI/GenAI-erottelu (13–16), saman promptin vaihtelevuus (43 ja 55) sekä
  ajattelua tukeva kysymysmalli (80–82)
- Rajaus: Kuopio Pelaa -esitys ei kopioi referenssin rakennetta, kuvitusta,
  väripalettia, työpajaa, koululaisesimerkkejä tai loppuyhteenvetoa
- Tarkempi soveltaminen:
  [Toivolanranta-referenssin rajaus](toivolanranta-reference-adaptation.md)

## Varadiat ja tasapainottavat lähteet

### SRC-GDC-2026-ROLES — GDC:n roolikohtainen suhtautuminen

- Tila: arvot tarkistettu GDC:n virallisesta yhteenvedosta 2026-08-08, varadia
- Turvallinen väite: GenAI:n vaikutuksen pelialaan arvioi kielteiseksi 64 %
  visual & technical art -rooleista, 63 % game design & narrative -rooleista ja
  59 % ohjelmoinnista
- Käyttö: ammattilaispainotteisessa yleisössä Quantic Foundry -dian vaihtoehto.
- Caveat: virallinen yhteenveto nimeää nämä kielteisimmiksi ryhmiksi, joten
  valinta ei ole koko ammattijakauma. Älä tulkitse syytä tai yksilöiden kantaa
  pelkistä prosenttieroista.
- Alkuperäinen URL:
  `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/`
- Tarkistettu: kyllä, 2026-08-08

### SRC-GOOGLE-CLOUD-HARRIS — Google Cloud / Harris Poll

- Tila: virallisen raporttisivun top-line-väitteet tarkistettu 2026-08-08,
  varadia tai puhujamuistiinpano
- Julkaistu otos: 615 pelinkehityksessä työskentelevää vastaajaa
- Raportoidut top-line-väitteet: 90 % kertoi AI:n olevan työnkulussa, 95 % sen
  auttavan automatisoimaan toistuvaa työtä ja 44 % koodi- tai scripting-tukea
- Käyttö: näyttää, miten AI-infrastruktuuria myyvä toimija kehystää hyödyt, ja
  opettaa miksi kyselyiden otsikkolukuja ei voi yhdistää ilman menetelmiä
- Caveat: Google Cloud sponsoroi tutkimuksen ja myy tutkimuksen käsittelemää
  teknologiaa. Raportoidut hyödyt ovat vastaajien ilmoituksia, eivät 95 %:lle
  objektiivisesti mitattu tuottavuusparannus.
- Vertailuraja: älä piirrä 90 %:a GDC:n 36 %:n vastaluvuksi; otos, kysymys ja
  käyttömittari eroavat.
- Alkuperäinen URL: `https://cloud.google.com/resources/games-report`
- Julkaistu: 2025
- Tarkistettu: kyllä top-line-väitteiden osalta, 2026-08-08

## Rajat, käytännöt ja tapausesimerkit

### SRC-STEAMWORKS-AI — Steamworksin AI disclosure -käytäntö

- Tila: nykyinen virallinen Steamworks-dokumentaatio tarkistettu 2026-08-08
- Turvallinen väite: sisältökyselyn GenAI-osio ei keskity modernien
  kehitystyökalujen yleisiin tehokkuushyötyihin vaan AI:n avulla luotuun,
  peliin toimitettavaan ja pelaajan kuluttamaan sisältöön
- Pre-generated: kehityksen aikana AI:n avulla luotu sisältö, joka toimitetaan
  pelin mukana ja jota pelaaja kuluttaa
- Live-generated: pelin ajon aikana AI:n avulla syntyvä sisältö; kehittäjän pitää
  lisäksi kuvata suojaukset laittoman sisällön estämiseksi
- Käyttö: tukee rajaäänestystä ja väitettä, että AI on kuluttajaluottamuksen
  kysymys.
- Caveat: dokumentaatio kuvaa nykyistä Steam-käytäntöä eikä yleistä eettistä tai
  oikeudellista rajaa kaikille alustoille.
- Alkuperäinen URL:
  `https://partner.steamgames.com/doc/gettingstarted/contentsurvey?language=english`
- Tarkistettu: kyllä, 2026-08-08

### SRC-UBISOFT-GHOSTWRITER — Ubisoft Ghostwriter

- Tila: Ubisoftin alkuperäinen esittely tarkistettu 2026-08-08, puhemateriaali
  tai Q&A
- Turvallinen väite: Ghostwriter tuottaa NPC-barkkien ensimmäisiä luonnoksia;
  käsikirjoittaja määrittää tilanteen, valitsee vaihtoehdon ja muokkaa sitä
- Käyttö: paras mahdollinen puolustus “AI apurina” -mallille ja johdanto
  junioripolkuja koskevaan vastakysymykseen.
- Caveat: Ubisoftin oma tuote- ja rekrytointihenkinen kuvaus osoittaa
  suunnitellun työnkulun, ei riippumattomasti mitattua ajansäästöä,
  kirjoittajien hyväksyntää tai työmarkkinavaikutusta.
- Alkuperäinen URL:
  `https://news.ubisoft.com/en-gb/article/7Cm07zbBGy4Xml6WgYi25d/the-convergence-of-ai-and-creativity-introducing-ghostwriter`
- Julkaistu: 2023-03-21
- Tarkistettu: kyllä, 2026-08-08

### SRC-SAG-AFTRA-2025 — videopelisopimuksen AI-suojat

- Tila: SAG-AFTRAn virallinen sopimus- ja FAQ-sivu tarkistettu 2026-08-08,
  vastuuosuuden puhujamuistiinpano ja varamateriaali
- Turvallinen väite: vuoden 2025 Interactive Media Agreement toi suostumus- ja
  disclosure-vaatimuksia AI-digitaalireplikoihin sekä mahdollisuuden keskeyttää
  uuden materiaalin generointia koskeva suostumus lakon aikana
- Käyttö: erottaa generoidun sisällön ihmisen äänen, identiteetin ja
  neuvotteluaseman kopioimisesta. Pääesityksessä tämä on yksi puhuttu lause,
  ei uusi kalvo tai yleinen lakiväite.
- Caveat: suoja koskee sopimuksen piiriin kuuluvia esiintyjiä ja tuotantoja. Se
  ei ole yleinen AI-laki eikä ratkaise kaikkien pelialan työntekijöiden
  tekijänoikeus-, koulutusdata- tai työmarkkinakysymyksiä.
- Alkuperäinen URL:
  `https://www.sagaftra.org/contracts-industry-resources/interactive/2025-interactive-media-video-game-agreement`
- Tarkistettu: kyllä, 2026-08-08

### SRC-CLAIR-OBSCUR-2025 — placeholderit, disclosure ja palkintosääntö

- Tila: tapahtumaketjun ydin tarkistettu alkuperäisestä El País -haastattelusta,
  siihen lisätystä Sandfall-täsmennyksestä ja palkintopäätöstä raportoivasta
  luotettavasta pelimediasta 2026-08-08
- Suunniteltu käyttö: pääesityksen lyhyt Steam/disclosure-tapaus
- Turvallinen tapahtumaketju: Sandfall kertoo kokeilleensa vuonna 2022 GenAI:ta
  placeholder-tekstuureihin. Placeholder-tekstuurin esiintymiä jäi
  julkaisuversioon, ja ne korvattiin viiden päivän sisällä julkaisuun
  tarkoitetuilla tekstuureilla.
- Palkintoraja: Indie Game Awards veti kaksi palkintoa takaisin. Järjestäjän
  mukaan sääntö kielsi GenAI:n käytön ja hakuvaiheessa oli ilmoitettu, ettei
  GenAI:ta käytetty.
- Käyttö: tapaus näyttää, miten sisäinen kokeilu voi muuttua QA-, disclosure- ja
  luottamuskysymykseksi, kun tuotosta päätyy julkaisuun ja ulkoinen sääntö on
  ehdoton
- Caveat: älä väitä, että peli tehtiin AI:lla, että kyse oli varmasti vain
  yhdestä kuvasta tai että Steam-disclosure varmasti puuttui. Arkistoitua
  julkaisupäivän Steam-kauppasivua ei ole tässä aineistossa varmennettu.
- Alkuperäinen haastattelu ja Sandfall-täsmennys:
  `https://elpais.com/cultura/2025-06-28/la-revolucion-creativa-low-cost-cuando-la-tecnologia-pone-el-arte-al-alcance-de-todos.html`
- Palkintopäätöksen raportointi:
  `https://www.pcgamer.com/games/rpg/indie-game-awards-pulls-two-awards-from-clair-obscur-over-generative-ai-use-we-have-a-hard-stance-against-gen-ai-in-videogames/`
- Tarkistettu: kyllä tapahtumaketjun ydinosalta, 2026-08-08

### SRC-GGJ-AI-POLICY — Global Game Jamin AI-policy ja yhteisökysely

- Tila: nykyinen virallinen policy ja siinä julkaistut kyselyluvut tarkistettu
  2026-08-09, ehdokastapaus
- Turvallinen policy-väite: Global Game Jam ei aseta globaalilla tasolla
  rajoituksia AI:n tai GenAI:n käytölle, kun pelit noudattavat muuta
  tekijänoikeus- ja IP-politiikkaa. GGJ kuvaa itseään ei-kilpailulliseksi
  tapahtumaksi.
- Kyselyaineisto: vuoden 2024 tapahtuman jälkeen 3 578 vapaaehtoista vastausta
  34 649 rekisteröityneeltä jammerilta, vastausaste hieman yli 10 %
- Tarkistetut osallistujaluvut: 70 % kertoi sivustonsa sallineen AI-projektit,
  18 % tiiminsä käyttäneen AI:ta, 49 % tunteidensa olevan ristiriitaisia, 27 %
  hyväksyi käytön GGJ:ssä täysin, 14 % vastusti täysin ja 10 % ei ollut juuri
  ajatellut asiaa
- Käyttö: yksi sääntökortti ja tarvittaessa puhujamuistiinpanon vastapaino
  yksinkertaiselle “sallittu = hyväksytty” -tulkinnalle
- Caveat: vapaaehtoinen otos ei ole satunnainen; prosentteja ei voi
  ristiintaulukoida; globaali policy ei kuvaa jokaisen paikallisen jamin kaikkia
  käytäntöjä eikä koko pelialan mielipidettä
- Alkuperäinen URL:
  `https://globalgamejam.org/news/global-game-jam-artificial-intelligence-policy`
- Policy alkujaan esitelty GGJ 2025:lle; sivu kuvaa sitä nykyiseksi policyksi
- Tarkistettu: kyllä, 2026-08-09

### SRC-LUDUM-DARE-AI — Ludum Daren AI-FAQ

- Tila: nykyinen virallinen FAQ tarkistettu 2026-08-09, ehdokastapaus
- Turvallinen väite: AI-avustajia ja copilot-työkaluja saa käyttää, mutta
  osallistujan pitäisi jättäytyä kategoriasta, jossa generaattori teki
  suurimman osan työstä. FAQ käyttää noin 90 %:a ohjenuorana.
- Järjestäjän perustelu: yleiskielto olisi vaikea toteuttaa ja valvoa, mutta
  taiteellista työtä halutaan edelleen juhlia kategorioissa.
- Käyttö: näyttää mallin, jossa osallistuminen sallitaan mutta palkittava taito
  rajataan erikseen
- Caveat: “suurin osa työstä” ja johdannaisteoksen arviointi jäävät osittain
  osallistujan omaan harkintaan; FAQ ei ole yleinen oikeudellinen ohje
- Alkuperäinen URL:
  `https://ludumdare.com/resources/questions/can-i-use-ai/`
- Tarkistettu: kyllä, 2026-08-09

### SRC-GMTK-JAM-AI-2025 — GMTK Game Jam 2025:n GenAI-sääntö

- Tila: vuoden 2025 virallinen itch.io-sääntö tarkistettu 2026-08-09,
  ehdokastapaus
- Turvallinen väite: järjestäjä pyysi yleisesti olemaan käyttämättä AI:ta ja
  kielsi GenAI:lla tehdyt kuva- ja äänisisällöt sekä pelissä että itch.io
  -sivulla; tämä ilmoitettiin hylkäysperusteeksi
- Valvontaraja: järjestäjä sanoi pystyvänsä aktiivisesti valvomaan juuri
  generoitua kuvaa ja ääntä
- Käyttö: osoittaa, että tapahtuman käsityö- ja luovuuspainotus sekä
  valvottavuus voivat yhdessä muovata sääntöä
- Caveat: käytä aina vuosilukua 2025; sääntö ei ole koko GMTK:n historian,
  kaikkien jamien tai koko pelialan kanta. Älä tulkitse valvontarajaa luvaksi
  piilottaa AI-koodiapua.
- Alkuperäinen URL: `https://itch.io/jam/gmtk-2025`
- Tarkistettu: kyllä, 2026-08-09

### SRC-HF-AI-GAME-JAM-2023 — Open Source AI Game Jam

- Tila: Hugging Facen virallinen itch.io-jam-sivu tarkistettu 2026-08-09,
  ehdokastapauksen historiallinen vastapää
- Turvallinen väite: vuoden 2023 jam vaati vähintään yhden avoimen lähdekoodin
  AI-työkalun käyttöä projektissa tai sen työnkulussa; myös muut AI-työkalut
  sallittiin tämän lisäksi
- Käyttö: näyttää, että AI-teemaisessa jamissa työkalun käyttö voi olla koko
  osallistumisen tarkoitus
- Caveat: kyse oli vuoden 2023 AI-erikoisjamista. Se ei kerro nykyisten game
  jamien yleisestä linjasta eikä muodosta ajallista trendiä.
- Alkuperäinen URL: `https://itch.io/jam/open-source-ai-game-jam`
- Tarkistettu: kyllä, 2026-08-09

### SRC-MEHU-JAM-AI-2026 — suomalainen GenAI-tuotoksen kielto

- Tila: mehu jam 19:n virallinen itch.io-sivu tarkistettu 2026-08-09,
  puhujamuistiinpano tai varadia
- Turvallinen väite: tammikuun 2026 jam kielsi generatiivisen AI:n tuotokset;
  sivu kertoo tapahtuman olevan Finnish Game Jamin isännöimä
- Käyttö: suomalainen esimerkki siitä, että myös ei-kilpailullinen luova jam voi
  rajata GenAI-tuotoksen pois
- Caveat: älä yleistä yksittäisen mehu jamin sääntöä Finnish Game Jam ry:n
  kaikkiin tapahtumiin tai Suomen game jam -kenttään
- Alkuperäinen URL: `https://itch.io/jam/mehu-jam-19`
- Tarkistettu: kyllä, 2026-08-09

### SRC-ITCH-AI-DISCLOSURE — itch.io:n GenAI-merkintä

- Tila: nykyinen virallinen laatukäytäntö tarkistettu 2026-08-09,
  puhujamuistiinpano tai varadia
- Turvallinen väite: itch.io pyytää merkitsemään projektin AI Disclosure
  -kohdassa, jos se sisältää GenAI:n tuottamaa materiaalia
- Terminologiaraja: itch.io erottaa tästä perinteisen peli-AI:n,
  viholliskäyttäytymisen, polunhaun, proseduraalisen kenttägeneroinnin ja
  dynaamisen vaikeuden kaltaiset omavaraiset algoritmit
- Käyttö: osoittaa, että julkaisualustan disclosure ja yksittäisen jamin
  osallistumissääntö ovat kaksi eri kerrosta
- Caveat: merkintä ei itsessään tarkoita kieltoa, hyväksyntää tai kelpoisuutta
  yksittäisen jamin arvosteluun
- Alkuperäinen URL:
  `https://itch.io/docs/creators/quality-guidelines#ai-disclosure`
- Tarkistettu: kyllä, 2026-08-09

### SRC-MICROSOFT-XBOX-2026 — AI-strategia ja henkilöstövähennykset

- Tila: viralliset nimitys-, tutkimus- ja uudelleenjärjestelytiedotteet
  tarkistettu 2026-08-08, vain varadia tai Q&A
- Tausta: Coupangin vuoden 2024 hallitusnimitys kuvaa Asha Sharman Microsoftin
  AI Platformin Corporate Vice Presidentiksi ja Head of Productiksi
- Nimitys: Sharma nimitettiin Microsoft Gamingin toimitusjohtajaksi 20.2.2026;
  huhtikuusta 2026 alkaen titteli on CEO Xbox
- Julkinen linja: nimitysviestissä Sharma sanoi, ettei yhtiö tavoittele lyhyen
  aikavälin tehokkuutta tavalla, joka täyttäisi ekosysteemin “AI slopilla”, ja
  kuvasi pelejä ihmisten tekemäksi taiteeksi
- Uudelleenjärjestely: Xbox ilmoitti 6.7.2026 vähentävänsä noin 3 200 roolia
  tilivuoden 2027 aikana, joista noin 1 600 heti
- Xboxin ilmoittamat syyt: liiketoiminnan heikko terveys ja marginaalit, liian
  laajaksi kasvanut studiokanta, johtamiskerrokset, hajanaisuus sekä tarve
  keskittää investointeja
- AI-konteksti: Microsoft Research julkaisi vuonna 2025 Muse-pelimaailma- ja
  toimintamallin gameplay ideation -tutkimuksena
- Tulkintaraja: AI-investoinnit, ihmiskeskeinen retoriikka ja vähennykset ovat
  samanaikaisia tapahtumia. Lähteet eivät osoita, että AI korvasi vähennetyt
  työntekijät. Tapausta ei käytetä kausaaliväitteenä tai pääkuvaajana.
- Asha Sharman AI-tausta:
  `https://ir.aboutcoupang.com/news-events/news/news-details/2024/Coupang-Names-Head-of-Product-for-the-Microsoft-AI-Group-and-Former-Meta-and-Instacart-Executive-Asha-Sharma-to-Board-of-Directors/default.aspx`
- Microsoftin nimitystiedote:
  `https://blogs.microsoft.com/blog/2026/02/20/asha-sharma-named-evp-and-ceo-microsoft-gaming/`
- Xboxin uudelleenjärjestely:
  `https://news.xbox.com/en-us/2026/07/06/resetting-xbox/`
- Muse:
  `https://www.microsoft.com/en-us/research/blog/introducing-muse-our-first-generative-ai-model-designed-for-gameplay-ideation/`
- Tarkistettu: kyllä virallisten tapahtumien osalta, 2026-08-08

### SRC-CAPCOM-REMEDY — studioiden rajaukset

- Tila: tarkistettava, Q&A tai varadia
- Taustamuistiinpanon väite: studiot ovat kuvanneet rajaa pelaajalle päätyvän
  generoidun sisällön ja sisäisten tehokkuustyökalujen välille.
- Käyttö: näyttää, että käytännöllinen AI-policy on usein kyllä/ei-vastausta
  tarkempi.
- Caveat: tarkista jokainen studio ja lainaus erikseen; älä yhdistä eri
  ajankohtien kantoja yhdeksi yhteiseksi policyksi.
- Alkuperäiset URL:t: puuttuvat
- Tarkistettu: ei

## Tutkimusvarannot

Nämä soveltuvat puhujamuistiinpanoihin, Q&A:han tai väitteiden taustoitukseen.
Niitä ei tarvita 60 minuutin pääesitykseen, ellei jokin pääväite tarvitse
vahvempaa tutkimustukea.

### SRC-METR-2025 — kokeneiden kehittäjien tuottavuuskoe

- Tila: alkuperäinen tutkimuspaperi tarkistettu 2026-08-08, vain
  puhujamuistiinpano tai Q&A
- Tutkimusasetelma: satunnaistettu koe, jossa 16 kokenutta avoimen lähdekoodin
  kehittäjää teki 246 tehtävää tutuissa projekteissaan alkuvuoden 2025
  AI-työkaluilla tai ilman niitä
- Tulos: AI-työkalujen salliminen kasvatti tehtäviin käytettyä aikaa 19 %, vaikka
  osallistujat arvioivat niiden nopeuttaneen työtä
- Käyttö: vastapaino oletukselle, että koettu sujuvuus on sama asia kuin
  mitattu ajansäästö
- Caveat: pieni ja valikoitunut otos, kokeneet avoimen lähdekoodin kehittäjät,
  tutut koodikannat ja alkuvuoden 2025 työkalut. Tulosta ei yleistetä suoraan
  pelinkehitykseen, aloittelijoihin tai uudempiin malleihin.
- Alkuperäinen URL: `https://arxiv.org/abs/2507.09089`
- Tarkistettu: kyllä tutkimuksen omien väitteiden osalta, 2026-08-08

| Tunnus | Työnimi taustamuistiinpanoissa | Mahdollinen käyttö | Tarkistettava caveat |
|---|---|---|---|
| SRC-RESEARCH-SYNTHESIS | *Generative AI in Game Development: A Qualitative Research Synthesis* | Tuotantotapojen, pipelinejen ja arvoverkkojen muutos | Julkaisukanava, menetelmä ja katsauksen aineisto |
| SRC-OSS-GAMEDEV | *An Empirical Study of GenAI Adoption in Open-Source Game Development* | Käytännön käyttötavat avoimen lähdekoodin peliprojekteissa | GitHub-issueiden edustavuus koko alalle |
| SRC-GAME-INDUSTRY-PROBLEMS | *Game Industry Problems: an Extensive Analysis of the Gray Literature* | Organisaatio- ja johtamisongelmien merkitys | Aineisto 1997–2019, ei suoraan AI-tutkimus |
| SRC-AI-RULES-REDDIT | *AI Rules? Characterizing Reddit Community Policies Towards AI-Generated Content* | Yhteisöjen laatu- ja aitoushuolten taustoitus | Säännöt eivät ole sama asia kuin käyttäjäasenteet |

Taulukon neljästä tarkistamattomasta varannosta puuttuvat vielä alkuperäinen
URL, julkaisutiedot ja tarkistuspäivä.

## Kulttuuripulssi, ei tilastollinen todiste

### SRC-REDDIT-PANICKING-ENGINEER-2026 — sama oletus, kaksi tulevaisuustarinaa

- Tila: käyttäjän 2026-08-15 tallettama keskustelukatkelma; vain
  kulttuuripulssi ja mahdollinen puhujamuistiinpano
- Keskustelun jännite: alkuperäinen kirjoittaja tulkitsee nopeasti kehittyvät
  mallit uhaksi ohjelmistokehittäjän toimeentulolle. Samassa ketjussa
  pelinkehitystä käsittelevä kommentti tulkitsee koodin tuottamisen kynnyksen
  madaltumisen mahdollisuudeksi päästä nopeammin varsinaiseen
  pelisuunnitteluun, testaamiseen ja tasapainottamiseen.
- Turvallinen takeaway: GenAI voi lyhentää matkaa ideasta ensimmäiseen
  pelattavaan versioon huomattavasti. Tästä ei seuraa, että matka prototyypistä
  johdonmukaiseksi, testatuksi ja pelaamisen arvoiseksi peliksi lyhenisi yhtä
  paljon.
- Mahdollinen käyttö: noin minuutin anonyymi parafraasi avauksen “kahden
  maailmanlopun” konkretisointiin. Vastakkain ovat pelko ammatin katoamisesta
  ja innostus toteutuskynnyksen madaltumisesta; molemmat lähtevät samasta
  oletuksesta, että toimivan koodin tuottaminen helpottuu.
- Työpajayhteys: ensimmäinen pelattava generointi ei ole kokeen voitto vaan sen
  lähtöpiste. Kiinnostava havainto syntyy siitä, mitä osallistujan valinta,
  testaus, rajaus ja iterointi lisäävät versioon.
- Rajaus: keskustelu on itse valikoitunut ja r/singularity painottuu nopeaa
  teknologista muutosta koskeviin odotuksiin. Se kertoo ihmisten käyttämistä
  tulevaisuustarinoista, ei muutoksen nopeudesta tai todennäköisyydestä.
- Älä käytä faktaväitteenä: “koodaaminen on ohi”, “koodaus oli vain
  portinvartiointia”, “idea ratkaisee 99 % onnistumisesta” tai ohjelmistotyön
  katoaminen tietyssä ajassa. Pienen tekstipohjaisen prototyypin tuottaminen ei
  edusta julkaistun pelin arkkitehtuuria, suorituskykyä, integraatioita,
  ylläpitoa tai laadunvarmistusta.
- Eettinen rajaus: älä näytä alkuperäisen kirjoittajan käyttäjänimeä tai tee
  hänen taloudellisesta hädästään vitsiä. Jos keskustelusta käytetään myöhemmin
  suoraa sitaattia, tarkista tarkka sanamuoto ja ketjun senhetkinen tila ensin.
- Sivuhavainto varamateriaaliin: automaation odotus voi muuttaa opiskelua,
  rekrytointia, osaamisen kehittämistä ja työyhteisön käyttäytymistä jo ennen
  kuin ennustettu työpaikkavaikutus on osoitettu. Tämä on kiinnostava mutta
  tämän esityksen työmarkkinarajauksen ulkopuolinen kysymys.
- Alkuperäinen URL:
  `https://old.reddit.com/r/singularity/comments/1vote1t/panicking_software_engineer/`
- Tarkistettu: ei itsenäisesti; sisältö perustuu käyttäjän tallettamaan
  keskustelukatkelmaan, 2026-08-15

Taustamuistiinpanot mainitsevat r/gamedev-keskusteluja seuraavista aiheista:

- AI-sisällön aiheuttama asset store -tulva
- assettien alkuperän ja myyjän ilmoituksen luotettavuus
- AI-slop ja pelien löydettävyys
- työkalun ja lopullisen luovan sisällön välinen raja

Näitä voi käyttää anonyymeina keskustelunavauksina tai Q&A:n taustana. Niitä ei
käytetä prosenttiväitteisiin, koko kehittäjäyhteisön mielipiteen kuvaamiseen tai
vahvemman tutkimuslähteen korvikkeena.

## Kuvaaja-aineistojen tila

Pääesitykseen on valittu täsmälleen kolme datavisuaalia:

| Tunnus | Sisältö | Lähde | Tila |
|---|---|---|---|
| CHART-MAIN-1 | Työkäyttö 36 % ja kielteinen vaikutusarvio 52 %; myönteinen 7 % numeronostona | SRC-GDC-2026-SENTIMENT | Arvot tarkistettu; paikallinen data puuttuu |
| CHART-MAIN-2 | Research/brainstorming 81 %, arjen tehtävät 47 %, koodiapu 47 %, prototypointi 35 % | SRC-GDC-2026-USES | Arvot tarkistettu; paikallinen data puuttuu |
| CHART-MAIN-3 | Dialogi 83 % kielteinen, questit 77 % kielteinen, dynaaminen vaikeustaso noin 50 % kielteinen | SRC-QUANTIC-2025 | Arvot tarkistettu; noin 50 % on johdettu; paikallinen data puuttuu |

Steamworksin sisältöraja ja Clair Obscur -tapahtumaketju toteutetaan
prosessina ja aikajanana, ei neljäntenä kuvaajana. 7 818 Steam-pelin snapshot
voidaan näyttää päivättynä numeronostona, jos se mahtuu puheeseen.

Varamateriaaliin voidaan toteuttaa GDC:n roolikohtainen vertailu ja vuosien
2024–2026 kolme erillistä pylvästä. Jälkimmäinen ei ole trendiviiva, koska
vuoden 2026 raportti varoittaa kyselymuutosten vaikeuttavan vuosivertailua.

Taustamuistiinpanossa mainittuja vanhoja PNG- ja CSV-tiedostoja ei tarvita.
Web-esityksen kuvaajat rakennetaan Rechartsilla tarkistetuista arvoista. Ne
saavat tilan **valmis** vasta, kun arvot on tallennettu paikalliseen
`chart-data.js`-tiedostoon ja tarkistettu vielä kerran lähteitä vasten.

## Kuvaajan tarkistusmerkintä

Kun lähde on tarkistettu, lisää sen tietueeseen:

```text
Alkuperäinen URL: https://...
Julkaistu: YYYY-MM-DD
Tarkistettu: YYYY-MM-DD / tarkistaja
Paikallinen data: src/content/chart-data.js
Kuvaajan tila: valmis
```
