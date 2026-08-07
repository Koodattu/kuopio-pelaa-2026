# Lähdepankki

## Käyttötarkoitus

Tämä tiedosto on esityksen lähderekisteri ja julkaisun tarkistuslista. Sen
tavoite on estää sitä, että taustamuistiinpanojen väite tai irrotettu numero
päätyy kuvaajaan ilman alkuperäistä lähdettä, kontekstia ja caveatia.

Alla olevat luvut ovat käyttäjän toimittamasta taustamateriaalista. Niitä ei ole
vielä tässä repossa tarkistettu alkuperäisjulkaisuista. Jokainen tietue on
oletuksena tilassa **tarkistettava**.

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

### SRC-GDC-2026-SENTIMENT — GDC State of the Game Industry 2026

- Tila: tarkistettava
- Suunniteltu dia: “Peliala käyttää AI:ta — ja suhtautuu siihen aiempaa
  kielteisemmin”
- Taustamuistiinpanon väite: generatiivisen AI:n vaikutuksen kielteisenä näkevien
  osuus nousi vuosina 2024–2026 luvuista 18 % ja 30 % lukuun 52 %; vuonna 2026
  7 % piti vaikutusta myönteisenä.
- Tukee argumenttia: kriittisyys on kasvanut samaan aikaan kuin työkalut ja käyttö
  ovat yleistyneet.
- Tarkista: ovatko vuosien kysymykset, vastaajaryhmät ja vastausasteikot täysin
  vertailukelpoisia.
- Alkuperäinen URL: puuttuu
- Tarkistettu: ei

### SRC-GDC-2026-USES — GDC State of the Game Industry 2026

- Tila: tarkistettava
- Suunniteltu dia: “AI on parhaimmillaan, kun se laskee aloittamisen kitkaa”
- Taustamuistiinpanon väite: AI:ta käyttävien yleisiä käyttötapoja ovat
  research/brainstorming 81 %, päivittäiset tehtävät 47 %, koodiapu 47 % ja
  protoilu 35 %.
- Tukee argumenttia: nykyinen käyttö levittäytyy tuotantoputkeen eikä tarkoita
  vain valmiin taiteen tuottamista.
- Tarkista: monivalintakysymys, vastaajien rajaus ja oikea nimittäjä.
- Alkuperäinen URL: puuttuu
- Tarkistettu: ei

### SRC-STEAM-DISCLOSURES-2025 — Totally Human Media / Ichiro Lambe

- Tila: tarkistettava
- Suunniteltu dia: “AI ei jäänyt taustatyökaluksi”
- Taustamuistiinpanon väite: heinäkuussa 2025 Steamissa oli 7 818 peliä, jotka
  ilmoittivat GenAI-käytöstä; määrä vastasi noin seitsemää prosenttia
  kirjastosta, hieman alle 20:tä prosenttia vuoden 2025 julkaisuista ja noin 60
  prosenttia ilmoituksista liittyi visuaalisiin assetteihin.
- Tukee argumenttia: AI-käyttö on jo pelaajalle näkyvä kauppapaikka- ja
  luottamuskysymys.
- Caveat: ilmoitukset muodostavat vain paljastetun käytön aineiston. Niistä ei
  voi päätellä kaikkea toteutunutta käyttöä.
- Tarkista: analyysin päivämäärä, datan keruutapa, Steam-kirjaston nimittäjä ja
  visuaalisten assettien luokittelu.
- Alkuperäinen URL: puuttuu
- Tarkistettu: ei

### SRC-QUANTIC-2025 — Quantic Foundry, gamer attitudes to GenAI

- Tila: tarkistettava
- Suunniteltu dia: “Työkalu, teoksen osa vai luottamuskysymys?”
- Taustamuistiinpanon väite: kyselyssä `n = 1 799` 85 % suhtautui GenAI:n
  käyttöön videopeleissä kielteisesti ja 63 % valitsi kielteisimmän
  vastausvaihtoehdon. Luovat käyttötavat saivat kielteisimmän vastaanoton.
- Tukee argumenttia: pelaajat suhtautuvat eri tavalla sisäisiin työkaluihin ja
  pelissä näkyvään tai kuuluvaan luovaan sisältöön.
- Caveat: otos painottuu core PC/console -yleisöön eikä edusta automaattisesti
  kaikkia pelaajia.
- Tarkista: kysymyksen tarkka sanamuoto, otoksen rekrytointi, asteikko ja
  käyttötapakohtaiset prosentit.
- Alkuperäinen URL: puuttuu
- Tarkistettu: ei

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

## Varadiat ja tasapainottavat lähteet

### SRC-GDC-2026-ROLES — GDC:n roolikohtainen suhtautuminen

- Tila: tarkistettava, varadia
- Taustamuistiinpanon väite: kielteinen suhtautuminen oli visual & technical art
  -rooleissa 64 %, game design & narrative -rooleissa 63 % ja ohjelmoinnissa
  59 %.
- Käyttö: ammattilaispainotteisessa yleisössä Quantic Foundry -dian vaihtoehto.
- Caveat: älä tulkitse syytä pelkistä prosenttieroista.
- Alkuperäinen URL: puuttuu
- Tarkistettu: ei

### SRC-GOOGLE-CLOUD-HARRIS — Google Cloud / Harris Poll

- Tila: tarkistettava, varadia
- Taustamuistiinpanon väite: 615 kehittäjän aineistossa 90 % kertoi käyttävänsä
  AI:ta työnkuluissa ja 95 % sen vähentävän toistuvia tehtäviä. Muistiinpanoissa
  mainitaan myös playtesting/balancing 47 %, localization/translation 45 %,
  code generation/scripting 44 % sekä luovan alueen käyttötapoja 36 %.
- Käyttö: näyttää, miten AI:n hyödyt ja tuottavuuslupaus myydään pelialalle.
- Caveat: AI-palveluntarjoajan julkaisema vendor-tutkimus; esitä näkökulmana,
  älä neutraalina alan totuutena.
- Tarkista: tutkimuksen otanta, tilaaja, kysymykset ja prosenttien nimittäjät.
- Alkuperäinen URL: puuttuu
- Tarkistettu: ei

## Rajat, käytännöt ja tapausesimerkit

### SRC-STEAMWORKS-AI — Steamworksin AI disclosure -käytäntö

- Tila: tarkistettava
- Taustamuistiinpanon väite: Valve muutti sisältökyselyä tammikuussa 2024,
  erottaa ennalta generoidun ja ajossa generoituvan sisällön ja näyttää
  pelaajalle AI Generated Content Disclosure -osion.
- Käyttö: tukee rajaäänestystä ja väitettä, että AI on kuluttajaluottamuksen
  kysymys.
- Suositeltu lähde: Valven oma Steamworks-julkaisu.
- Alkuperäinen URL: puuttuu
- Tarkistettu: ei

### SRC-UBISOFT-GHOSTWRITER — Ubisoft Ghostwriter

- Tila: tarkistettava, puhemateriaali tai Q&A
- Taustamuistiinpanon väite: Ghostwriter luonnostelee NPC-barkseja, joita
  kirjoittajat valitsevat ja muokkaavat.
- Käyttö: paras mahdollinen puolustus “AI apurina” -mallille ja johdanto
  junioripolkuja koskevaan vastakysymykseen.
- Suositeltu lähde: Ubisoftin oma esittely ja mahdollinen tekijähaastattelu.
- Alkuperäinen URL: puuttuu
- Tarkistettu: ei

### SRC-SAG-AFTRA-2025 — videopelisopimuksen AI-suojat

- Tila: tarkistettava, rajaäänestyksen taustamateriaali
- Taustamuistiinpanon väite: vuoden 2025 sopimus toi suostumusta ja disclosurea
  koskevia suojia digitaalisiin replikoihin.
- Käyttö: erottaa generoidun sisällön ihmisen äänen, identiteetin ja
  neuvotteluaseman kopioimisesta.
- Suositeltu lähde: SAG-AFTRAn sopimus- tai yhteenvetosivu.
- Alkuperäinen URL: puuttuu
- Tarkistettu: ei

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

| Tunnus | Työnimi taustamuistiinpanoissa | Mahdollinen käyttö | Tarkistettava caveat |
|---|---|---|---|
| SRC-RESEARCH-SYNTHESIS | *Generative AI in Game Development: A Qualitative Research Synthesis* | Tuotantotapojen, pipelinejen ja arvoverkkojen muutos | Julkaisukanava, menetelmä ja katsauksen aineisto |
| SRC-OSS-GAMEDEV | *An Empirical Study of GenAI Adoption in Open-Source Game Development* | Käytännön käyttötavat avoimen lähdekoodin peliprojekteissa | GitHub-issueiden edustavuus koko alalle |
| SRC-METR-2025 | *Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity* | Vastapaino oletukselle, että AI nopeuttaa aina | Ei yleistetä suoraan kaikkeen pelinkehitykseen |
| SRC-GAME-INDUSTRY-PROBLEMS | *Game Industry Problems: an Extensive Analysis of the Gray Literature* | Organisaatio- ja johtamisongelmien merkitys | Aineisto 1997–2019, ei suoraan AI-tutkimus |
| SRC-AI-RULES-REDDIT | *AI Rules? Characterizing Reddit Community Policies Towards AI-Generated Content* | Yhteisöjen laatu- ja aitoushuolten taustoitus | Säännöt eivät ole sama asia kuin käyttäjäasenteet |

Kaikista puuttuvat vielä alkuperäinen URL, julkaisutiedot ja tarkistuspäivä.

## Kulttuuripulssi, ei tilastollinen todiste

Taustamuistiinpanot mainitsevat r/gamedev-keskusteluja seuraavista aiheista:

- AI-sisällön aiheuttama asset store -tulva
- assettien alkuperän ja myyjän ilmoituksen luotettavuus
- AI-slop ja pelien löydettävyys
- työkalun ja lopullisen luovan sisällön välinen raja

Näitä voi käyttää anonyymeina keskustelunavauksina tai Q&A:n taustana. Niitä ei
käytetä prosenttiväitteisiin, koko kehittäjäyhteisön mielipiteen kuvaamiseen tai
vahvemman tutkimuslähteen korvikkeena.

## Kuvaaja-aineistojen tila

Taustamuistiinpano viittaa seuraaviin aiemmin tuotettuihin tiedostoihin, mutta
niitä ei ole tässä repossa:

- `ai_games_chart_data.csv`
- `chart_01_gdc_negative_sentiment.png`
- `chart_02_gdc_common_uses.png`
- `chart_03_gdc_negative_by_role.png`
- `chart_04_steam_genai_disclosures.png`
- `chart_05_google_cloud_workflows.png`
- `chart_06_quantic_foundry_gamer_attitudes.png`

PNG-kuvia ei tarvitse etsiä tai kopioida sellaisinaan. Web-esitystä varten
kuvaajat rakennetaan Rechartsilla uudelleen vasta, kun CSV-arvot tai vastaava
paikallinen data on tarkistettu alkuperäislähteitä vasten.

## Kuvaajan tarkistusmerkintä

Kun lähde on tarkistettu, lisää sen tietueeseen:

```text
Alkuperäinen URL: https://...
Julkaistu: YYYY-MM-DD
Tarkistettu: YYYY-MM-DD / tarkistaja
Paikallinen data: src/content/chart-data.js
Kuvaajan tila: valmis
```
