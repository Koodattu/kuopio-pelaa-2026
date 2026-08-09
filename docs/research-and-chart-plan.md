# Tutkimustulosten ja kuvaajien kuratointi

## Tarkoitus

Tämä tiedosto muuttaa elokuussa 2026 tehdyn Deep Research -selvityksen
esityskelpoisiksi väitteiksi, kuvaajiksi ja tapausesimerkeiksi. Selvityksen PDF
auttoi palauttamaan lähde-URL:t, mutta se ei ole ulkoisten faktaväitteiden
alkuperäislähde. Jokainen pääesitykseen valittu luku on tarkistettu tässä
tiedostossa mainitusta alkuperäisestä tai vahvimmasta saatavilla olevasta
lähteestä.

Lähdeaineistot:

```text
C:/Users/Juha/Downloads/deep-research-report.md
C:/Users/Juha/Downloads/Generatiivinen tekoäly peleissä ja pelinkehityksessä_ mitä tiedämme vuonna 2026_.pdf
```

PDF:n lopun linkkiluetteloa käytetään lähteiden paikantamiseen. PDF:n omia
numeroituja viitteitä tai Markdownin `turn...`-tunnuksia ei kopioida
esityssivulle.

## Sisältöpäätös

Varsinaisessa 60 minuutin esityksessä käytetään **kolmea datavisuaalia** ja yhtä
lyhyttä tapausjaksoa. Tämä on tarkoituksella vähemmän kuin tutkimusraportin
ehdottama määrä, koska esitysaikaan kuuluvat jo:

- viiden minuutin avaus
- 15 minuutin Live Voting
- SuomiWoW CCG -showcase
- siirtymä 45 minuutin työpajaan.

Valitut päävisuaalit:

1. GDC 2026: käyttö ei tarkoita hyväksyntää
2. GDC 2026: mihin GenAI-käyttäjät käyttävät työkaluja
3. Quantic Foundry 2025: pelaajien reaktio riippuu käyttötavasta

Päätapaus on **Steam-raja + Clair Obscur: Expedition 33**. Microsoft/Xbox,
GDC:n vuosivertailu, ammattiryhmät, Google/Harris, SAG-AFTRA, Ubisoft
Ghostwriter, Muse, METR ja ETLA pidetään puhujamuistiinpanoissa, varadioissa tai
Q&A:ssa.

Kaksi raportin hyödyllistä rajaa toteutetaan pääesityksessä vain lyhyinä
puheankkureina:

- AI/GenAI-erottelussa mainitaan sääntöpohjaiset pelihahmot,
  taitoluokitus/matchmaking ja proseduraalinen kenttien generointi esimerkkeinä
  peleissä jo ennen nykyistä GenAI-aaltoa käytetyistä AI-tekniikoista
- vastuuosuudessa todetaan, että tunnistettavan ihmisen äänen, kasvojen tai
  performanssin jäljittely on erillinen suostumus- ja korvauskysymys.

Näitä varten ei lisätä kuvaajaa, tapausjaksoa tai esitysaikaa. Lähteet ovat
Microsoft Gamingin AI-historiakatsaus ja SAG-AFTRAn vuoden 2025 Interactive
Media Agreement -aineisto.

## Uusi käsitteellinen jakso: mitä oikeastaan kokeiltiin?

Pääesityksen ensimmäiseen osaan lisätään alustavasti neljän minuutin jakso
kuluttajien GenAI-kokemuksen eroista. Se käyttää tutkimusta argumentin
rajaamiseen mutta **ei lisää neljättä datavisuaalia**.

Kahdessa eri maassa tehdyt kyselyt tukevat samaa rajattua havaintoa:

| Lähde | Otos ja ajankohta | Turvallinen havainto |
|---|---|---|
| Bitkom Research 2025 | Edustava saksalaiskysely, `n = 1 005`, vähintään 16-vuotiaat | GenAI:ta käyttävistä 8 % maksoi parhaillaan palvelusta ja 2 % oli maksanut aiemmin. |
| ACCC / Lonergan Research 2025 | Australialaiset ChatGPT-käyttäjät, `n = 1 016`, aineisto loka–marraskuulta 2024 | 93 % käytti ilmaisversiota ja 6 % maksullista versiota. |

Turvallinen pääväite:

> Useimpien kuluttajien ensikokemus GenAI:sta syntyy ilmaisessa
> oletustuotteessa.

Luvut eivät osoita:

- kuinka moni kielteisesti tai myönteisesti suhtautuva käytti maksullista
  palvelua
- mikä malli kunkin vastaajan ilmaisen käyttöliittymän taustalla oli
- että ilmaisversio olisi aina pieni tai huono
- että maksaminen parantaisi tulosta kaikissa tehtävissä.

Gallupin vuoden 2026 Gen Z -aineistossa päivittäinen käyttö liittyi
myönteisempiin tunteisiin, mutta koko ryhmän suhtautuminen muuttui samalla
kielteisemmäksi eikä päivittäisten käyttäjien asenne vuoden aikana muuttunut
myönteisemmäksi. Tätä käytetään korrelaation caveatina, ei väitteenä että
kokemus käännyttäisi käyttäjän.

OpenAI:n ajantasainen Free Tier -ohje osoittaa, että maksuton tuote voi sisältää
edistyneitä kyvykkyyksiä ja työkaluja mutta tiukempia käyttörajoja. Vuoden 2024
kinematiikkakuvioihin rajattu vertailututkimus toimii lisäksi kapeana
vastaesimerkkinä oletukselle, että maksullinen taso olisi aina parempi. Kumpikaan
ei sovellu yleiseksi mallien laatukuvaajaksi, koska tuotteet muuttuvat nopeasti
ja yksittäinen tehtävä ei mittaa yleistä kyvykkyyttä.

Jakson tutkimuksellinen lopputulos on menetelmällinen:

> Kyvykkyysväite tarvitsee nimetyn mallin, tuotteen, tehtävän, kontekstin,
> työnkulun, yritysten määrän ja valintaperusteen. Käyttötavan hyväksyttävyys
> tarvitsee lisäksi aineiston, tekijyyden, suostumuksen, työvaikutusten,
> disclosuren ja vastuun arviointia.

Tarkempi puherakenne, gallup-vaihtoehdot ja kielletyt tulkinnat ovat
[GenAI-kokemuksen arviointisuunnitelmassa](ai-experience-and-evaluation.md).

Lähteet:

- [Bitkom Research: Viele nutzen KI, aber nur wenige bezahlen dafür](https://bitkom-research.de/news/viele-nutzen-ki-aber-nur-wenige-bezahlen-dafuer)
- [ACCC: DPSI Consumer Survey Research Report](https://www.accc.gov.au/system/files/dpsi-consumer-survey-research-report-lonergan-research-feb2025.pdf)
- [Gallup: Gen Z's AI Adoption Steady, but Skepticism Climbs](https://news.gallup.com/poll/708224/gen-adoption-steady-skepticism-climbs.aspx)
- [OpenAI: ChatGPT Free Tier FAQ](https://help.openai.com/en/articles/9275245-using-chatgpt-s-free-tier-faq)
- [Frontiers in Education: free and subscription-based chatbot comparison](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2024.1452414/full)

## Vahvimmat esitysfaktat

### 1. Käyttö ja hyväksyntä eivät ole sama mittari

GDC:n vuoden 2026 kyselyssä:

- 36 % yli 2 300:sta pelialan ammattilaisesta kertoi käyttävänsä
  generatiivisen AI:n työkaluja työssään
- 52 % arvioi generatiivisen AI:n vaikutuksen pelialaan kielteiseksi
- 7 % arvioi vaikutuksen myönteiseksi.

Turvallinen tulkinta:

> Työkalua voidaan käyttää ja sen laajempia seurauksia silti epäillä.

Rajat:

- luvut tulevat saman tutkimuksen eri kysymyksistä
- niistä ei tiedetä, kuinka moni yksittäinen vastaaja sekä käytti työkaluja että
  piti vaikutusta kielteisenä
- kysely laajennettiin vuonna 2026 kattamaan pelinkehittäjien lisäksi aiempaa
  enemmän esimerkiksi julkaisun, markkinoinnin, palvelujen ja sijoittamisen
  tehtäviä
- otos painottuu Pohjois-Amerikkaan ja Länsi-Eurooppaan.

Lähteet:

- [GDC:n virallinen 2026-yhteenveto](https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/)
- [GDC:n virallinen raporttisivu](https://reg.gdconf.com/2026-SOTI/)

### 2. Yleisin GenAI-käyttö ei ole valmiin pelin generoimista

Niistä GDC 2026 -vastaajista, jotka käyttivät GenAI:ta työssään:

| Käyttötapa | Osuus GenAI-käyttäjistä |
|---|---:|
| Tutkimus tai ideointi | 81 % |
| Päivittäiset tehtävät, kuten sähköpostit | 47 % |
| Koodiapu | 47 % |
| Prototypointi | 35 % |

Turvallinen tulkinta:

> Nykykäyttö painottuu vaihtoehtojen tuottamiseen ja työn tukemiseen ennen
> julkaisua.

Rajat:

- kysymys oli monivalinta; prosentteja ei summata sataan
- nimittäjä ei ole koko peliala vaan GenAI:ta työssään käyttäneet vastaajat
- julkisessa yhteenvedossa ei ilmoiteta tämän alaryhmän tarkkaa `n`:ää
- `research / brainstorming` yhdistää kaksi keskenään erilaista toimintaa eikä
  todista, että käyttö parantaisi ideointia.

Lähde:

- [GDC:n virallinen 2026-yhteenveto](https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/)

### 3. Pelaajien reaktio muuttuu käyttötavan mukana

Quantic Foundryn vapaaehtoisessa lisäkyselyssä `n = 1 799`:

- 85 % sijoittui yleisessä GenAI-asenteessa neutraalin alapuolelle
- 63 % valitsi kaikkein kielteisimmän vastausvaihtoehdon
- AI-generoituun dialogiin suhtautui kielteisesti 83 %
- AI-generoituihin questeihin suhtautui kielteisesti 77 %
- GenAI:n käyttöön dynaamisessa vaikeustason säädössä suhtautui myönteisesti
  26 % ja neutraalisti 24 %, joten kielteinen osuus oli laskennallisesti noin
  50 %.

Turvallinen tulkinta:

> Vastustus oli voimakkainta näkyvässä luovassa sisällössä ja suhteellisesti
> lievempää teknisemmässä käyttötavassa.

Rajat:

- kysely oli vapaaehtoinen lisäosa Gamer Motivation Profile -testiin
- otos oli 90-prosenttisesti PC-pelaajia, 74-prosenttisesti core-pelaajia ja
  21-prosenttisesti hardcore-pelaajia
- 80 % vastaajista oli 18–34-vuotiaita
- tulos kuvaa tätä itsevalikoitunutta otosta, ei kaikkia pelaajia
- dynaaminen vaikeustaso ei itsessään tarkoita GenAI:ta; kysymys koski
  nimenomaan GenAI:n käyttämistä siihen
- noin 50 % on johdettu laskemalla `100 - 26 - 24`, ei lähteen suoraan
  tulostama arvo.

Lähde:

- [Quantic Foundry: Gamers Are Overwhelmingly Negative About Gen AI in Video Games](https://quanticfoundry.com/2025/12/18/gen-ai/)

### 4. Steam erottaa sisäisen tehokkuuden pelaajan kuluttamasta sisällöstä

Steamworksin nykyinen sisältökysely sanoo, ettei AI-työkalujen tuottama
yleinen tehokkuushyöty ole GenAI-ilmoitusosion varsinainen kohde. Ilmoitus
keskittyy pelaajan kuluttamaan sisältöön:

- **pre-generated:** kehityksen aikana AI:n avulla luotu sisältö, joka
  toimitetaan pelin mukana ja jota pelaaja kuluttaa
- **live-generated:** AI:n avulla pelin ajon aikana syntyvä sisältö; kehittäjän
  pitää lisäksi kuvata laittoman sisällön estämiseen tarkoitetut suojaukset.

Turvallinen tulkinta:

> Pelaajan kannalta olennainen raja ei ole jokainen AI-avusteinen työvaihe vaan
> se, päätyykö generoitua sisältöä tuotteeseen tai syntyykö sitä pelin aikana.

Lähde:

- [Steamworks Content Survey](https://partner.steamgames.com/doc/gettingstarted/contentsurvey?language=english)

### 5. Steamista voidaan mitata ilmoituksia, ei kaikkea käyttöä

Ichiro Lamben Steam API -analyysin 13.7.2025 tilannekuvassa:

- 7 818 peliä ilmoitti GenAI-käytöstä
- määrä vastasi noin seitsemää prosenttia noin 114 126 pelin kirjastosta
- hieman alle 20 % vuoden 2025 julkaisuista ilmoitti GenAI-käytöstä
- noin 60 % ilmoituksista mainitsi visuaalisten assettien generoinnin.

Turvallinen tulkinta:

> GenAI-ilmoitukset eivät ole Steamissa enää harvinainen poikkeus.

Rajat:

- analyysi on yhden riippumattoman tekijän API-snapshot, ei Valven virallinen
  tilasto
- raakadataa tai luokittelukoodia ei julkaistu tarkistettavaksi
- ilmoitukset eivät kata salaista, unohtunutta tai ilmoitusrajan ulkopuolista
  käyttöä
- seitsemän prosenttia koko kirjastosta ja hieman alle 20 prosenttia vuoden
  2025 julkaisuista ovat eri nimittäjiä; niitä ei piirretä samaan
  vertailupylvääseen
- kirjoittajan noin tuhannen pelin vertailu vuoteen 2024 on muistinvarainen eikä
  yhtä vahva havainto kuin vuoden 2025 snapshot.

Lähde:

- [Totally Human Media: The NEW Surprising Number of Steam Games that Use GenAI](https://www.totallyhuman.io/blog/the-surprising-new-number-of-genai-games-on-steam)

## Pääkuvaajat

### CHART-MAIN-1 — Käyttö ei tarkoita hyväksyntää

**Dian otsikko:** Käyttö ei tarkoita hyväksyntää

**Väite:** Samassa GDC 2026 -aineistossa 36 % käytti GenAI:ta työssään ja 52 %
arvioi sen vaikutuksen alaan kielteiseksi.

**Data:**

```csv
measure,pct
uses_genai_at_work,36
sees_negative_industry_impact,52
sees_positive_industry_impact,7
```

**Piirrä:**

- kaksi suurta pystypylvästä samalla 0–100 % asteikolla: `36 % käyttää` ja
  `52 % näkee vaikutuksen kielteisenä`
- lisää `7 % myönteinen` pienenä suorana lukuna, ei kolmantena samanarvoisena
  pääpylväänä
- merkitse selvästi, että kyse on eri kysymyksistä; pylväät eivät ole saman
  jakauman osia
- paljasta ensin käyttö, sitten kielteinen arvio ja vasta lopuksi 7 %.

**Älä piirrä:**

- Venn-diagrammia ilman ristiintaulukointia
- päätelmää, että juuri samat 36 % vastustavat teknologiaa
- 36/52/7-stacked baria; luvut eivät muodosta yhtä kokonaisuutta.

**Näkyvä lähde- ja rajausrivi:**

> GDC State of the Game Industry 2026, yli 2 300 pelialan ammattilaista.
> Erilliset käyttö- ja vaikutuskysymykset.

### CHART-MAIN-2 — Mihin GenAI:ta käytetään?

**Dian otsikko:** Ensin vaihtoehtoja, vasta sitten peli

**Väite:** GenAI-käyttäjien yleisimmät käyttötavat olivat tutkimus/ideointi,
arkitehtävät, koodiapu ja prototypointi.

**Data:**

```csv
use_case,pct_of_genai_users
research_or_brainstorming,81
daily_tasks,47
code_assistance,47
prototyping,35
```

**Piirrä:**

- laskeva vaakapylväskaavio, 0–100 %
- suorat arvot jokaisen pylvään päähän
- korosta `prototyping 35 %` ihmisen valintaa kuvaavalla värillä, koska se
  johdattaa suoraan työpajaan
- käännä yleisölle näkyvät nimet suomeksi, mutta säilytä lähteen alkuperäinen
  luokitus puhujamuistiinpanoissa.

**Älä piirrä:**

- piirakkaa; kysymys oli monivalinta
- arvioituja 22/20/19/10/5-lukuja pääkuvaajaan, vaikka raportin kuva-aineistossa
  näkyi lisää kategorioita. Neljä virallisessa yhteenvedossa nimettyä arvoa
  riittää väitteeseen.

**Näkyvä lähde- ja rajausrivi:**

> GDC State of the Game Industry 2026. Osuus vastaajista, jotka käyttävät
> GenAI:ta työssään; monivalinta; alaryhmän tarkkaa n:ää ei raportoitu.

### CHART-MAIN-3 — Käyttötapa muuttaa reaktiota

**Dian otsikko:** Luova sisältö osuu herkempään rajaan

**Väite:** Quantic Foundryn otoksessa dialogi ja questit saivat selvästi
kielteisemmät arviot kuin GenAI:n käyttö dynaamiseen vaikeustasoon.

**Data:**

```csv
use_case,negative_pct,value_status
ai_generated_dialogue,83,reported
ai_generated_quests,77,reported
genai_dynamic_difficulty,50,derived_from_26_positive_and_24_neutral
```

**Piirrä:**

- vaakasuora dot plot tai kolme ohutta palkkia yhteisellä 0–100 % asteikolla
- merkitse kolmas arvo `noin 50 %` ja lisää pieni johdettu-arvo-merkintä
- järjestä dialogi, questit ja dynaaminen vaikeus samalle akselille
- pidä koko otoksen 85 %:n yleinen kielteisyys puhujan calloutina, ei neljäntenä
  keskenään samanlaisena käyttötapana.

**Älä piirrä:**

- täydellisiä stacked bareja dialogille ja questeille, koska neutraalin ja
  myönteisen tarkkoja osuuksia ei raportoitu tekstissä
- väitettä, että puolet vastaajista hyväksyi dynaamisen vaikeuden; myönteisiä
  oli 26 %
- otsikkoa “pelaajat vihaavat AI:ta”; otos ei edusta kaikkia pelaajia.

**Näkyvä lähde- ja rajausrivi:**

> Quantic Foundry, loka–joulukuu 2025, n=1 799; vapaaehtoinen,
> PC/core-painotteinen otos. Dynaamisen vaikeuden kielteinen osuus on johdettu.

## Päätapaus: Steam + Clair Obscur

Tapaus käsitellään kahdella nopealla dialla noin neljässä minuutissa osana
esityksen viimeistä kymmenen minuutin jaksoa.

### Dia A — Missä disclosure-raja kulkee?

Näytä Steamworksin kolmiportainen raja:

```text
sisäinen tehokkuustyökalu -> peliin toimitettu sisältö -> ajon aikana generoitu sisältö
ei disclosure-osion fokus -> pre-generated disclosure -> disclosure + guardrailit
```

Lisää yksi faktanosto:

> 7 818 Steam-peliä ilmoitti GenAI-käytöstä 13.7.2025 tehdyssä riippumattomassa
> API-snapshotissa.

Tätä ei tehdä aikasarjakuvaajaksi. Yksi päivämäärään sidottu luku on
rehellisempi kuin heikko 2024–2026-trendi.

### Dia B — Missä Clair Obscurin varsinainen virhe tapahtui?

Näytä neljä askelta:

1. **2022:** Sandfall kokeili GenAI:ta placeholder-tekstuureihin.
2. **Julkaisu 2025:** joitakin placeholder-tekstuurin esiintymiä jäi peliin.
3. **Viiden päivän sisällä:** ne korvattiin julkaisuun tarkoitetuilla
   tekstuureilla.
4. **Joulukuu 2025:** Indie Game Awards veti kaksi palkintoa takaisin; sääntö
   kielsi GenAI-käytön ja hakuvaiheen no-AI-ilmoitus oli osa ongelmaa.

Yleisökysymys:

> Missä kohtaa varsinainen virhe tapahtui: kokeilussa, QA:ssa, kertomisessa vai
> kilpailuun osallistumisessa?

Kriittiset rajat:

- älä sano, että peli “tehtiin AI:lla”
- älä sano “yksi piilotettu kuva”, koska lähteet puhuvat placeholder-tekstuurin
  esiintymistä eivätkä varmista täsmällistä kappalemäärää
- älä väitä Steam-disclosurea puuttuneeksi ilman arkistoitua kauppasivua
- älä käytä pelin menestystä todisteena AI:n hyväksynnästä
- älä käytä valittuja somekommentteja koko pelaajakunnan mielipiteenä.

Lähteet:

- [El Paísin alkuperäinen haastattelu ja myöhempi Sandfall-täsmennys](https://elpais.com/cultura/2025-06-28/la-revolucion-creativa-low-cost-cuando-la-tecnologia-pone-el-arte-al-alcance-de-todos.html)
- [Indie Game Awards -päätöstä ja järjestäjän lausuntoa raportoiva PC Gamer](https://www.pcgamer.com/games/rpg/indie-game-awards-pulls-two-awards-from-clair-obscur-over-generative-ai-use-we-have-a-hard-stance-against-gen-ai-in-videogames/)

## Varadiat ja puhujamuistiinpanot

### GDC 2024–2026 — suunta, ei puhdas trendi

Raportoidut kielteiset osuudet olivat 18 %, 30 % ja 52 %. Vuoden 2026 raportti
sanoo kuitenkin suoraan, että kyselyn muutokset tekevät vuosivertailusta vaikean
ja luotettava uusi vertailupohja syntyy vasta vuonna 2027.

Jos kuvaaja tarvitaan varalle:

- käytä kolmea erillistä pylvästä, ei jatkuvaa viivaa
- erottele vuoden 2026 pylväs katkoviivalla tai taustavaihdolla
- kirjoita kuvaan “2026 metodologia muuttui; vain suuntaa-antava”
- älä laske trendiviivaa tai kasvuprosenttia.

### GDC:n ammattiryhmät — vain valikoitu varadia

Virallinen yhteenveto nimeää kielteisimmiksi visual/technical art 64 %, game
design/narrative 63 % ja programming 59 %. Nämä ovat valitut ääriryhmät, eivät
koko ammattijakauma. Kuva voidaan näyttää vain otsikolla, joka kertoo valinnan:

> GDC:n kielteisimmät raportoidut ammattiryhmät

Älä päättele luvuista syytä tai väitä kaikkien luovien työntekijöiden jakavan
saman kannan.

### Microsoft/Xbox — jännite, ei kausaalitodiste

Yhden varadian faktat:

- Asha Sharma oli vuonna 2024 Microsoftin AI Platformin tuotejohtaja
- hänet nimitettiin Microsoft Gamingin, myöhemmin Xboxin, toimitusjohtajaksi
  20.2.2026
- nimitysviestissään hän sanoi, ettei Xbox tavoittele lyhyen aikavälin
  tehokkuutta tavalla, joka täyttäisi ekosysteemin “AI slopilla”, ja kuvasi
  pelejä ihmisten tekemäksi taiteeksi
- Xbox ilmoitti 6.7.2026 noin 3 200 roolin vähentämisestä tilivuoden aikana,
  joista noin 1 600 heti
- Xboxin oma perustelu koski liiketoiminnan terveyttä, matalia marginaaleja,
  liian laajaa studiokantaa, johtamiskerroksia ja hajanaisuutta; tiedote ei
  nimennyt AI:ta vähennysten syyksi
- Microsoft kehittää samanaikaisesti Musea ja muita pelialan AI-työkaluja.

Turvallinen tulkinta:

> AI-investoinnit, luovan työn puolustus ja henkilöstövähennykset tapahtuvat
> samassa yrityksessä. Tämä on aito jännite, mutta ei todiste siitä, että AI
> korvasi vähennetyt työntekijät.

Lähteet:

- [Asha Sharman AI Platform -rooli](https://ir.aboutcoupang.com/news-events/news/news-details/2024/Coupang-Names-Head-of-Product-for-the-Microsoft-AI-Group-and-Former-Meta-and-Instacart-Executive-Asha-Sharma-to-Board-of-Directors/default.aspx)
- [Microsoftin nimitystiedote](https://blogs.microsoft.com/blog/2026/02/20/asha-sharma-named-evp-and-ceo-microsoft-gaming/)
- [Xboxin 6.7.2026 uudelleenjärjestely](https://news.xbox.com/en-us/2026/07/06/resetting-xbox/)
- [Microsoft Research: Muse](https://www.microsoft.com/en-us/research/blog/introducing-muse-our-first-generative-ai-model-designed-for-gameplay-ideation/)

### Ubisoft Ghostwriter — yrityksen oma paras tapaus apurimallista

Ubisoft kuvaa Ghostwriterin työkaluksi, joka tuottaa NPC-barkkien ensimmäisiä
luonnoksia. Käsikirjoittaja valitsee ja muokkaa vaihtoehdot. Tämä muistuttaa
työpajan KYSY -> valitse -> MUOKKAA -mallia.

Kriittinen raja: lähde on Ubisoftin oma tuote- ja rekrytointihenkinen kuvaus. Se
osoittaa suunnitellun työnkulun, ei riippumattomasti mitattua ajansäästöä,
kirjoittajien hyväksyntää tai vaikutusta junioritöihin.

Lähde:

- [Ubisoft: Introducing Ghostwriter](https://news.ubisoft.com/en-gb/article/7Cm07zbBGy4Xml6WgYi25d/the-convergence-of-ai-and-creativity-introducing-ghostwriter)

### SAG-AFTRA — identiteetti ja suostumus ovat oma kysymyksensä

Vuoden 2025 Interactive Media Agreement toi suostumus- ja disclosure-vaatimuksia
AI-digitaalireplikoihin sekä mahdollisuuden keskeyttää uuden materiaalin
generointia koskeva suostumus lakon aikana.

Kriittinen raja: kyse on sopimuksen kattamista esiintyjistä ja tuotannoista, ei
yleisestä AI-laista eikä kaikkien pelialan työntekijöiden suojasta.

Lähde:

- [SAG-AFTRA: 2025 Interactive Media Video Game Agreement](https://www.sagaftra.org/contracts-industry-resources/interactive/2025-interactive-media-video-game-agreement)

### Google Cloud / Harris — vendor-kontrasti, ei käyttöastetotuus

Google Cloudin sponsoroimassa 615 vastaajan kyselyssä 90 % kertoi AI:n olevan
työnkulussa ja 95 % sen auttavan automatisoimaan toistuvaa työtä.

Käyttö:

- osoita tarvittaessa, miten teknologiatoimittaja kehystää hyödyt
- pidä näkyvissä `Google Cloud / Harris Poll, vendor-sponsored`.

Älä tee:

- `90 % Google` vastaan `36 % GDC` -pylväsvertailua
- väitettä, että 95 % olisi objektiivisesti mitattu nopeutuminen
- yleistystä koko pelialaan ilman otannan ja kysymysten erojen käsittelyä.

Lähde:

- [Google Cloud 2025 Games Report](https://cloud.google.com/resources/games-report)

### METR — hyödyllinen varoitus, mutta ei pelialan tulos

METR:n satunnaistetussa kokeessa 16 kokenutta avoimen lähdekoodin kehittäjää
teki 246 tehtävää tutuissa repositorioissa. Alkuvuoden 2025 AI-työkalut
pidensivät tehtäväaikaa keskimäärin 19 %, vaikka osallistujat kokivat niiden
nopeuttaneen työtä.

Käyttö: puhujamuistiinpanoihin muistuttamaan, että koettu nopeus ja mitattu
nopeus voivat erota.

Älä tee: pääkuvaajaa tai väitettä, että AI hidastaa pelinkehittäjiä 19 %.

Lähde:

- [METR / arXiv: Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://arxiv.org/abs/2507.09089)

### ETLA — suomalainen konteksti vain tarvittaessa

ETLA:n syksyn 2024 kyselyssä noin puolet suomalaisista oli kokeillut GenAI:ta,
29 % työssäkäyvistä oli käyttänyt sitä työssä ja 11 % viikoittain.

Käyttö: korkeintaan varadia tai vastaus kysymykseen Suomen tilanteesta.

Älä tee: pääesityksen neljättä yleistä AI-kuvaajaa. Tapahtuman oma Live Voting
on yleisölle relevantimpi ja tuoreempi paikallinen peili.

Lähde:

- [ETLA: Generative Artificial Intelligence, Fall 2024 Survey](https://www.etla.fi/en/publications/briefs/generatiivisen-tekoalyn-kaytto-suomessa-havaintoja-syksyn-2024-kyselysta/)

## Hylätyt kuvaajaideat

| Idea | Päätös | Syy |
|---|---|---|
| GDC 18 -> 30 -> 52 jatkuvana trendiviivana | Vain varadia, ilman viivaa | Vuoden 2026 metodologia ja kohdejoukko muuttuivat. |
| Google/Harris 90 % vastaan GDC 36 % | Hylätty | Eri otos, kysymys ja mittari. |
| Steam 2024–2026 aikasarja | Hylätty | 2024 on muistinvarainen ja luotettavaa 2026-snapshotia ei löytynyt. |
| Steam 7 % vastaan 20 % samassa palkissa | Hylätty | Koko kirjasto ja vuoden 2025 julkaisut ovat eri nimittäjiä. |
| AI-disclosure vastaan myynti tai arvostelut | Hylätty | Riittävää kontrolloitua kausaalinäyttöä ei löytynyt. |
| “AI slop” määrällisenä kehityksenä | Hylätty | Kategoriaa ei ole operationalisoitu. |
| Xbox-layoffit AI:n seurauksena | Hylätty | Kausaalisuhdetta ei osoitettu. |
| Somekommenttien myönteinen/kielteinen jakauma | Hylätty | Itsevalikoitu keskustelu ei ole mielipidemittaus. |
| METR:n 19 % pääkuvaajana | Hylätty | Pieni, ohjelmistokehitykseen rajattu ja nopeasti vanheneva koe. |
| ETLA:n yleinen GenAI-käyttö pääkuvaajana | Hylätty | Liian kaukana peleistä ja päällekkäinen Live Votingin kanssa. |
| Ilmais- ja maksullisten käyttäjien AI-asenne | Hylätty kuvaajana | Maksullisuuden ja mielipiteen luotettavaa ristiintaulukointia ei löytynyt; kahden erillisen jakauman yhdistäminen olisi virhe. |
| Ilmaisversio vastaan maksullinen yhden yleisen laatupisteen avulla | Hylätty | Mallit, tuotteet, ominaisuudet ja tehtävät vaihtuvat; hinta ei muodosta vakaata yleistä laatumittaria. |

## Lähdemuistiinpanojen minimimuoto

Kun web-esitys toteutetaan, jokaisen datadian puhujamuistiinpanoihin kirjataan:

```text
[Sources]
- SRC-ID — organisaatio, julkaisun nimi, vuosi, URL
- Claim: täsmällinen väite ja arvo
- Denominator: ketkä vastasivat / mistä osuus laskettiin
- Caveat: tärkein tulkintaraja
- Checked: YYYY-MM-DD
```

Yleisölle näkyvä lähderivi on tätä lyhyempi, mutta siinä näkyvät aina lähde,
vuosi, otos tai nimittäjä sekä olennainen caveat.
