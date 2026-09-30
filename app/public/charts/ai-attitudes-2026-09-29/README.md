# AI ja pelit – tutkimuskuvaajat

Viisi suomenkielistä kuvaajaa 29.9.2026 käydyn rakennekeskustelun perusteella.
Valmiit kuvat ovat 16:9-muodossa ja käyttävät esityksen nykyistä vaaleaa
väripalettia. Esityksen lähdekoodia tai puherunkoja ei ole muutettu.

- **PNG:** 3840 × 2160 px, valmis lisättäväksi diaan.
- **SVG:** skaalautuva vektorikuva. Tekstit säilyvät teksteinä; fontti on Segoe UI.
- **kaikki-kuvaajat.pdf:** samat viisi kuvaajaa vektorimuodossa, fontit upotettuina.
- **esikatselu.png:** kaikkien kuvien yhteinen esikatselu.
- **ai-pelit-kuvaajat.zip:** kuvat, lähdedata, lähdehuomiot ja generointiskripti.
- **data.csv / data.json:** numeerinen aineisto ja jälkimmäisessä myös lähteet,
  kohdejoukot, laskentatavat ja tulkintarajat. Prosentit ovat asteikolla 0–100.

| Tiedoston alku | Kysymys | Lähde |
|---|---|---|
| 01-gdc-vaikutusarviot | Miten ammattilaisten vaikutusarviot eroavat vuosittaisissa kyselyissä? | [GDC:n raportti, s. 5 ja 22](https://investgame.net/wp-content/uploads/2026/01/2026-01-29-dec052f4_d88e_48ce_9f83_a18ce2f2a6e5_541400_GDC26_PDF_SOTI_Report.pdf) |
| 02-gdc-kaytto-tyopaikoilla | Ketkä käyttävät GenAI:ta työssään? | [GDC:n virallinen yhteenveto](https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/) |
| 03-pelaajien-suhtautuminen | Kuinka kielteinen pelaajaotoksen suhtautuminen oli? | [Quantic Foundry](https://quanticfoundry.com/2025/12/18/gen-ai/) |
| 04-pelaajat-kayttotavat | Muuttuuko suhtautuminen käyttötavan mukaan? | [Quantic Foundry](https://quanticfoundry.com/2025/12/18/gen-ai/) |
| 05-ai-asenteet-maittain | Miten yleinen AI-asenne vaihtelee valituissa maissa? | [Ipsos AI Monitor 2026, s. 13 ja 48](https://www.ipsos.com/sites/default/files/ct/news/documents/2026-06/Ipsos-AI-Monitor-2026.pdf) |

## Puhujan muistettavaa

1. **GDC:n 2026-kysely muuttui.** Aikasarja kuvaa raportoitua suuntaa;
   siitä ei lasketa tarkkaa asennemuutosta. Mukana ovat vain myönteiset ja
   kielteiset vastausvaihtoehdot. Eri vuosina vastasivat eri ihmiset.
2. **Työpaikkaryhmän käyttöaste on eri asia kuin hyväksyntä.** 58 % koskee
   julkaisu-, tuki- ja markkinointi/PR-organisaatioiden yhdistettyä ryhmää.
   36 % on koko kyselyn käyttöaste. Se ei ole kolmas erillinen ryhmä.
3. **Quantic Foundryn otos oli vapaaehtoinen.** n = 1 799, vahva painotus
   aktiivisiin PC- ja konsolipelaajiin; tulos ei ole kaikkien pelaajien kanta.
   Kuvan 22 % ja 15 % on laskettu lähteen pyöristetyistä 85 %:sta ja 63 %:sta.
   Muut vastaukset sisältävät myös neutraalit vastaukset.
4. **Vaikeustason noin 50 % on laskettu**, ei suoraan julkaistu prosentti:
   100 − 26 % myönteisiä − 24 % neutraaleja. Kysymys koski GenAI:n käyttöä
   vaikeustason säätämiseen. Dynaaminen vaikeustaso ei itsessään edellytä GenAI:ta.
5. **Ipsos mittaa AI:ta yleisesti.** Kahdeksan maata on valittu esitykseen
   saman tutkimuksen 32 maasta. n = 23 532 tarkoittaa koko tutkimusta.
   Kiinan ja Intian otokset painottuvat paremmin verkottuneeseen väestöön.
   Kuva ei mittaa pelien GenAI:n hyväksyntää eikä muodosta länsi–itä-keskiarvoja.

## Uudelleen tuottaminen

Skripti käyttää ReportLabin kuvaajakirjastoa, Pillow'ta ja Node.js:n Sharpia.
Tarvittavat paketit löytyvät tämän työskentely-ympäristön valmiista ajonaikaisista
riippuvuuksista. Projektin npm-riippuvuuksia ei muutettu.

```powershell
& "$env:USERPROFILE\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" `
  .\public\charts\ai-attitudes-2026-09-29\generate_charts.py `
  --node "$env:USERPROFILE\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" `
  --node-modules "$env:USERPROFILE\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules"
```

Muokkaa ensisijaisesti `data.json`-aineistoa. Suoritus päivittää tämän hakemiston
kuvat ja paketin. `--font-dir` voi osoittaa toiseen hakemistoon, joka sisältää
Segoe UI:n `segoeui.ttf`- ja `segoeuib.ttf`-tiedostot. SVG:n avaaminen toisella
koneella voi korvata fontin; PNG ja PDF säilyttävät ulkoasun.

PNG-kuvissa on kiinteä vaalea tausta. SVG:ssä tausta on ensimmäinen suorakulmio,
jonka voi poistaa tai vaihtaa vektorieditorissa. Huolehdi tekstin kontrastista,
jos vaihdat taustan tummaksi.
