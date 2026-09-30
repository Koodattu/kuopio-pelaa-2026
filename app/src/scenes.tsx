import { createContext, useContext, useEffect, useState, type CSSProperties, type ReactNode } from "react";

export type Slide = {
  id: string; title: string; section: string; time: string; theme: "paper" | "ink" | "ochre";
  steps: number; notes: string[]; sourceLine?: string;
  sources?: { label: string; url: string }[]; content: ReactNode;
};
export const StepContext = createContext(0);
const useStep = () => useContext(StepContext);
export const urls = {
  voting: import.meta.env.VITE_LIVE_VOTING_URL as string | undefined,
  workshop: import.meta.env.VITE_WORKSHOP_URL as string | undefined,
  workshopShort: import.meta.env.VITE_WORKSHOP_SHORT_URL as string | undefined,
  workshopQr: import.meta.env.VITE_WORKSHOP_QR_IMAGE as string | undefined,
  wow: "https://suomiwow.vaarattu.tv/ccg",
  astra: "https://www.youtube.com/watch?v=9xa7RTC5pzo&t=1758s",
  sunwake: "https://developers.openai.com/showcase/sunwake",
  gdc: "https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/",
  quantic: "https://quanticfoundry.com/2025/12/18/gen-ai/",
  nights: "https://arxiv.org/html/2503.09102v1",
  steam: "https://partner.steamgames.com/doc/gettingstarted/contentsurvey?language=english",
  clair: "https://elpais.com/cultura/2025-06-28/la-revolucion-creativa-low-cost-cuando-la-tecnologia-pone-el-arte-al-alcance-de-todos.html",
  awards: "https://www.pcgamer.com/games/rpg/indie-game-awards-pulls-two-awards-from-clair-obscur-over-generative-ai-use-we-have-a-hard-stance-against-gen-ai-in-videogames/",
};
const source = (key: keyof typeof urls, label: string) => ({ label, url: urls[key]! });
const media = (name: string) => `${import.meta.env.BASE_URL}media/${name}`;

function Reveal({ at, children, className = "" }: { at: number; children: ReactNode; className?: string }) {
  const visible = useStep() >= at;
  return <div className={`reveal ${className}`} data-visible={visible} inert={!visible}>{children}</div>;
}
function Label({ children }: { children: ReactNode }) { return <p className="eyebrow">{children}</p>; }
function Link({ href, children }: { href: string; children: ReactNode }) {
  return <a className="text-link" href={href} target="_blank" rel="noreferrer">{children} <span aria-hidden="true">↗</span></a>;
}
function Question({ children, sub }: { children: ReactNode; sub?: ReactNode }) {
  return <div className="question-scene"><h1>{children}</h1>{sub && <p className="lead">{sub}</p>}</div>;
}
function Cover() {
  const step = useStep();
  return <div className="cover" data-step={step}>
    <p className="cover-event">Kuopio Pelaa 2026</p>
    <h1>Tekoäly tuli.<br /><span className="cover-claim">Nyt kaikki<br />on ohi.</span></h1>
    <p className="cover-turn" aria-hidden={step === 0}>…vai onko?</p>
    <p className="cover-credit">Juha / Vaarattu <span>Pelinteko, pelaaja ja tekoäly</span></p>
  </div>;
}

function PollPair({ first, second, numbers, scale }: { first: string; second: string; numbers: string; scale: string }) {
  return <div className="poll-scene"><Label>Huoneen näkemykset · {numbers}</Label>
    <h1>{first}</h1><Reveal at={1}><h2>{second}</h2></Reveal>
    <p className="poll-scale">{scale}</p>
  </div>;
}

function GdcChart() {
  const step = useStep();
  return <div className="evidence"><Label>GDC 2026 · pelialan ammattilaisten kysely</Label>
    <h1>Käyttö ja vaikutusarvio</h1>
    <div className="gdc-chart" role="img" aria-label={`36 prosenttia käyttää GenAI:ta työssään.${step >= 1 ? " 52 prosenttia arvioi vaikutuksen pelialaan kielteiseksi." : ""}${step >= 2 ? " 7 prosenttia arvioi vaikutuksen myönteiseksi." : ""}`}>
      <div className="evidence-row"><div><strong>36<span>%</span></strong><p>Käyttää GenAI:ta<br />työssään</p></div><div className="bar-track"><span style={{ "--value": .36 } as CSSProperties} /></div></div>
      <Reveal at={1}><div className="evidence-row"><div><strong>52<span>%</span></strong><p>Arvioi vaikutuksen<br />pelialaan kielteiseksi</p></div><div className="bar-track rust"><span style={{ "--value": .52 } as CSSProperties} /></div></div></Reveal>
      <div className="chart-axis"><span>0 %</span><span>50 %</span><span>100 %</span></div>
    </div>
    <Reveal at={2}><p className="chart-conclusion"><strong>7 %</strong> arvioi vaikutuksen myönteiseksi.</p></Reveal>
    <p className="small-note">Eri kysymykset. Vastaajaryhmien päällekkäisyyttä ei tunneta.</p>
  </div>;
}

function GameFrame({ scrutinize = false }: { scrutinize?: boolean }) {
  const step = useStep();
  const [playing, setPlaying] = useState(false);
  useEffect(() => { setPlaying(false); }, [step]);
  const questions = ["Kenelle tämä on tehty?", "Miksi tätä pelataan?", "Mistä tiedämme, että se toimii?"];
  return <div className={`game-scene ${scrutinize ? "game-study" : ""}`} data-step={step}>
    <div className="game-heading"><Label>GPT-6 Astra · Matthew Bermanin esimerkki</Label><h1>Cloud Top Chaos</h1></div>
    <div className="game-frame"><img src={media("cloud-top-chaos.png")} alt="Cloud Top Chaos Bermanin peliesittelyssä" />
      {playing && <iframe title="Matthew Berman: Cloud Top Chaos, 29:18–30:18" src="https://www.youtube-nocookie.com/embed/9xa7RTC5pzo?start=1758&end=1818&autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />}
    </div>
    {!scrutinize && <div className="media-actions"><button onClick={() => setPlaying(!playing)}>{playing ? "Palaa pysäytyskuvaan" : "Toista minuutin katkelma"}</button><Link href={urls.astra}>Avaa alkuperäinen video</Link></div>}
    {scrutinize && <div className="player-questions">{questions.map((q, i) => <p key={q} data-current={step === i + 1} data-visible={step >= i + 1}>{q}</p>)}</div>}
    <p className="game-caption">Tekijän esittely. Mukana lisäpalautteen jälkeen työstetty versio.</p>
  </div>;
}

function PromptSequence() {
  const step = useStep();
  return <div className="process-scene"><Label>Tuotantotavan rajaus</Label><h1>Yksi prompti.<br />Monta työvaihetta.</h1>
    <div className="prompt-sequence" data-step={step}><div className="prompt-origin">Pyyntö</div>
      <Reveal at={1}><div className="process-word">Rakentaminen</div></Reveal>
      <Reveal at={2}><div className="process-word">Kokeilu ja korjaus</div></Reveal>
      <Reveal at={3}><div className="process-word final-word">Pelattava versio</div></Reveal>
    </div><p className="lead">Agentti voi tehdä monta kierrosta itsenäisesti.</p>
    <Reveal at={3}><p className="small-note">Tekijän myöhemmin antama lisäpalaute on uusi vaihe.</p></Reveal>
  </div>;
}

function WowCard() {
  const step = useStep();
  const details = [
    ["Tuttu hahmo", "Batchester", "Tony Halme Pro Skater"],
    ["Tietty raidikausi", "March on Quel’Danas", "Kortti säilyttää yhden hetken."],
    ["Yhteisön oma kokoelma", "Tunnistamisen ilo", "Tavoite: oma historia tuntuu keräilemisen arvoiselta."],
  ];
  return <div className="card-scene" data-step={step}><Label>SuomiWoW CCG</Label><h1>Yksi kortti.<br />Jonkun historia.</h1>
    <div className="real-card"><img src={media("suomiwow-card.png")} alt="Batchesterin kortti, Tony Halme Pro Skater, March on Quel’Danas" /></div>
    {details.map(([label, title, text], i) => <div className="card-annotation" data-active={step === i + 1} key={label} aria-hidden={step !== i + 1}><Label>{label}</Label><h2>{title}</h2><p>{text}</p></div>)}
    <div className="card-controls"><Link href={urls.wow}>Avaa pakka ja kokoelma</Link></div>
  </div>;
}

function ReactionChart() {
  const values = [["Pelihahmojen dialogi", 83], ["Questit", 77], ["Dynaaminen vaikeustaso", 50]] as const;
  return <div className="evidence"><Label>Quantic Foundry · joulukuu 2025</Label><h1>Käyttötapa vaikuttaa<br />suhtautumiseen</h1>
    <p className="chart-subtitle">GenAI:n käyttöön kielteisesti suhtautuvat</p>
    <div className="reaction-chart" role="img" aria-label="Dialogi 83 prosenttia, questit 77 prosenttia, dynaaminen vaikeustaso noin 50 prosenttia.">
      {values.map(([label, value]) => <div className="reaction-row" key={label}><span>{label}</span><div className="bar-track"><span style={{ "--value": value / 100 } as CSSProperties} /></div><strong>{value === 50 ? "≈ " : ""}{value} %</strong></div>)}
      <div className="reaction-axis"><span>0 %</span><span>50 %</span><span>100 %</span></div>
    </div><p className="small-note">1 799 vastaajaa. Vapaaehtoinen, PC/core-painotteinen otos.<br />Kaikki kolme kysymystä koskivat generatiivista AI:ta.</p>
  </div>;
}

function Nights() {
  const step = useStep();
  return <div className="nights-scene" data-step={step}><Label>1001 Nights</Label><h1>Tarinan sana muuttuu esineeksi</h1>
    <img src={media("1001-nights.png")} alt="Tutkijoiden pelikuva: kuningas sanoo dagger, ja tarinasta syntyy tikarikortti." />
    <div className="nights-steps"><span>Kerro tarinaa</span><span data-visible={step >= 1}>Houkuttele kuningas sanomaan asesana</span><span data-visible={step >= 2}>Käytä syntyvää esinettä</span></div>
    <Reveal at={2}><p className="small-note">Mitä generointi antaa pelaajan tehdä?</p></Reveal>
  </div>;
}

function FiveQuestions() {
  const step = useStep();
  return <div className="five-scene"><Label>Oma arvio</Label><h1>Viisi kysymystä AI:n käytöstä</h1>
    <ol>{["Kenelle ja miksi?", "Mihin AI:ta käytettiin?", "Mitä pelaaja kohtaa?", "Kenen aineistoa tai työtä käyttö koskee?", "Kuka valitsee, kertoo ja vastaa?"].map((q, i) => <li key={q} data-active={step === i} data-visible={step >= i}><span>{i + 1}</span>{q}</li>)}</ol>
  </div>;
}

function Countdown({ minutes, id, large = false }: { minutes: number; id: string; large?: boolean }) {
  type Clock = { remaining: number; deadline: number | null };
  const key = `kuopio-clock-${id}`;
  const [clock, setClock] = useState<Clock>(() => {
    try { const saved = JSON.parse(localStorage.getItem(key) ?? "null") as Clock | null;
      if (saved && Number.isFinite(saved.remaining) && (saved.deadline === null || Number.isFinite(saved.deadline))) return saved;
    } catch { /* A fresh timer also works when storage is unavailable. */ }
    return { remaining: minutes * 60, deadline: null };
  });
  const [now, setNow] = useState(Date.now);
  useEffect(() => { const interval = window.setInterval(() => setNow(Date.now()), 250); return () => clearInterval(interval); }, []);
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(clock)); } catch { /* Storage is optional. */ } }, [clock, key]);
  useEffect(() => {
    const sync = (event: StorageEvent) => {
      if (event.key !== key || !event.newValue) return;
      try { const incoming = JSON.parse(event.newValue) as Clock;
        if (Number.isFinite(incoming.remaining) && (incoming.deadline === null || Number.isFinite(incoming.deadline))) setClock(incoming);
      } catch { /* Ignore an invalid saved timer. */ }
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, [key]);
  const remaining = clock.deadline === null ? clock.remaining : Math.max(0, Math.ceil((clock.deadline - now) / 1000));
  const running = clock.deadline !== null && remaining > 0;
  return <div className={`countdown ${large ? "countdown-large" : ""}`}>
    <div className="timer-digits" role="timer" aria-label={`${Math.floor(remaining / 60)} minuuttia ${remaining % 60} sekuntia`}>{String(Math.floor(remaining / 60)).padStart(2, "0")}<span>:</span>{String(remaining % 60).padStart(2, "0")}</div>
    {large && <p className="return-time">{clock.deadline ? `Palataan klo ${new Date(clock.deadline).toLocaleTimeString("fi-FI", { hour: "2-digit", minute: "2-digit" })}` : "15 minuutin tauko"}</p>}
    <div className="timer-actions"><button disabled={remaining === 0} onClick={() => { const instant = Date.now(); setNow(instant); setClock(running ? { remaining, deadline: null } : { remaining, deadline: instant + remaining * 1000 }); }}>{running ? "Pysäytä" : "Käynnistä"}</button><button onClick={() => setClock({ remaining: minutes * 60, deadline: null })}>Nollaa</button></div>
  </div>;
}

function WorkshopLink() {
  const [qrFailed, setQrFailed] = useState(false);
  return <div className="workshop-link">{urls.workshop ? <><Link href={urls.workshop}>{urls.workshopShort || "Avaa työpaja"}</Link>{urls.workshopQr && !qrFailed && <img onError={() => setQrFailed(true)} src={urls.workshopQr} alt="Työpajan QR-koodi" />}</> : <p>Voit tehdä parin kanssa<br />tai seurata yhteistä kokeilua.</p>}</div>;
}
function WorkshopStage({ number, title, children, duration, id }: { number: string; title: string; children: ReactNode; duration: number; id: string }) {
  return <div className="workshop-stage"><div><Label>Oma kokeilu · {number}</Label><h1>{title}</h1><div className="workshop-copy">{children}</div></div><Countdown id={id} minutes={duration} /></div>;
}

const pollNotes = ["Käytä live-gallupia, jos tapahtumaistunto on valmis. Nämä diat toimivat myös käsiäänestyksenä. Älä keksi tuloksia.", "Käsittele yksi kysymys kerrallaan. Pariin noin kaksi minuuttia. Kerro yksi havaittu ero tai yhtäläisyys. Huoneen vastauksia ei yleistetä tutkimustuloksiksi."];
const astraNotes = ["Lähde: Matthew Bermanin oma video, Cloud Top Chaos noin 29:18 alkaen. Näytä korkeintaan minuutin katkelma; pysäytyskuva toimii ilman verkkoa.", "Tekijä kertoo pelaamisen ilosta ja lisäpromptista, joka käsittelee kameraa, kallistuvia tasoja ja reunan läpi sukeltamista. Päivitettyä versiota ei esitellä muokkaamattomana yhden promptin tuloksena.", "Tämä on tekijän esittely, ei riippumaton malli- tai pelaajakoe. Videon suosio ei mittaa pelin kysyntää. Pieni tai lyhyt peli voi onnistua omassa tarkoituksessaan."];
const wowNotes = ["Puhujan vahvistus 6.9.2026: koko toteutus on rakennettu AI:lla, kaikki suunnittelupäätökset ovat hänen tekemiään. Kerro tämä projektikohtaisena työnjakona.", "SuomiWoW CCG on keräilykokemus. Älä kutsu sitä card battleriksi. Julkiset kuvat on tallennettu 6.9.2026; niissä näkyy sen päivän palvelu."];

export const slides: Slide[] = [
  {
    id: "title",
    title: "Tekoäly tuli – nyt kaikki on ohi... vai onko?",
    section: "Avaus",
    time: "0:00–0:02",
    theme: "ink",
    steps: 1,
    notes: ["Esittele itsesi lyhyesti. Anna otsikon liioittelun näkyä. Paljasta vastakysymys omalla painalluksella.", "AI vie pelintekijöiden työn / AI antaa kaikille mahdollisuuden tehdä pelejä. Nämä ovat keskustelun kaksi lupausta, eivät kattava ennuste."],
    content: <Cover />
  },
  {
    id: "association",
    title: "Mitä tekoäly tuo mieleen?",
    section: "Avaus",
    time: "0:02–0:05",
    theme: "paper",
    steps: 1,
    notes: ["Ota 2–4 huudahdusta. Älä luennoi vielä. ChatGPT on tuttu esimerkki, vaikka kukaan ei mainitsisi sitä.", "Kerro, että seuraavat kysymykset koskevat generatiivista AI:ta. Tavoite on tarkentaa perusteluja, ei saada kaikkia samalle kannalle."],
    content: <><Question>Mitä tekoäly<br />tuo mieleen?</Question><Reveal at={1} className="association-reveal"><span>ChatGPT?</span><p>Yksi tuttu esimerkki.</p></Reveal></>
  },
  {
    id: "gallup",
    title: "Mitä tämä huone ajattelee?",
    section: "Huone",
    time: "0:05–0:08",
    theme: "ochre",
    steps: 0,
    notes: ["Varaa kolme minuuttia liittymiselle. Avaa erillisen äänestyssovelluksen liittymisnäkymä, jossa on istunnon QR-koodi ja osoite.", "Pääsarja on kahdeksan kysymystä neljänä parina. Jos tekniikka takeltelee kaksi minuuttia, käytä seuraavia neljää diaa ja käsiäänestystä.", "Live-gallupin jälkeen siirry suoraan AI/GenAI-dialle. Älä käy samoja kysymyksiä uudelleen."],
    content: <div className="gallup-intro"><Label>Kahdeksan kysymystä · 15 minuuttia</Label><h1>Mitä tämä<br />huone ajattelee?</h1><p className="lead">Oma kokemus riittää vastaukseksi.</p><div className="portal-actions">{urls.voting ? <Link href={urls.voting}>Avaa yhteinen gallup</Link> : <p>Vastataan käsiäänestyksellä.</p>}<a href="#ai-genai">Gallupin jälkeen jatketaan tästä →</a></div></div>
  },
  {
    id: "poll-experience",
    title: "Oma kokemus",
    section: "Huone",
    time: "0:08–0:10",
    theme: "paper",
    steps: 1,
    notes: pollNotes,
    content: <PollPair numbers="1–2 / 8" first="Oletko käyttänyt generatiivista tekoälyä?" second="Entä pelin tai peliprototyypin tekemiseen?" scale="Kyllä / En" />
  },
  {
    id: "poll-quality",
    title: "Helpompi ja parempi",
    section: "Huone",
    time: "0:10–0:12",
    theme: "paper",
    steps: 1,
    notes: pollNotes,
    content: <PollPair numbers="3–4 / 8" first="GenAI tekee pelien tekemisestä helpompaa." second="GenAI tekee peleistä parempia." scale="Täysin eri mieltä · Eri mieltä · Neutraali · Samaa mieltä · Täysin samaa mieltä" />
  },
  {
    id: "poll-work",
    title: "Sisäänkäynti ja työn muutos",
    section: "Huone",
    time: "0:12–0:14",
    theme: "paper",
    steps: 1,
    notes: [...pollNotes, "Molempien väitteiden kannattaminen ei ole looginen virhe. Työn korvaamista koskeva vastaus on odotus, ei esityksen vahvistama ennuste."],
    content: <PollPair numbers="5–6 / 8" first="Tekoälyn avulla kuka tahansa voi tehdä pelin." second="Tekoäly korvaa tulevaisuudessa suuren osan pelinkehittäjien työstä." scale="Täysin eri mieltä · Eri mieltä · Neutraali · Samaa mieltä · Täysin samaa mieltä" />
  },
  {
    id: "poll-dialogue",
    title: "Bugit ja dialogi",
    section: "Huone",
    time: "0:14–0:20",
    theme: "paper",
    steps: 1,
    notes: [...pollNotes, "Kysymyksiin kaksi minuuttia; loppuaika tulosten käsittelyyn ja siirtymään. Palaa tähän eroon pelaajaosuudessa. Älä päätä live-istuntoa vielä."],
    content: <PollPair numbers="7–8 / 8" first="Häiritsisikö GenAI:n käyttö pelin bugien korjaamisessa?" second="Entä pelihahmojen dialogin kirjoittamisessa?" scale="Kyllä / Ei / En osaa sanoa" />
  },
  {
    id: "ai-genai",
    title: "Kaikki tekoäly ei generoi",
    section: "Tekijä",
    time: "0:20–0:22",
    theme: "paper",
    steps: 1,
    notes: ["AI on laaja yläkäsite. GenAI tuottaa esimerkiksi tekstiä, kuvaa, ääntä ja koodia.", "Pelien tunnistaminen, reitinhaku ja vastustajakäytös voivat perustua erilaisiin menetelmiin. Kaikki proseduraalinen generointi tai matchmaking ei ole koneoppimista."],
    sources: [{ label: "NIST: generative artificial intelligence", url: "https://csrc.nist.gov/glossary/term/generative_artificial_intelligence" }],
    content: <div className="definition-scene"><Label>Käsitteet</Label><h1>Kaikki tekoäly<br />ei generoi</h1><div className="definition-pair"><div><h2>AI</h2><p>Esimerkiksi tunnistaa,<br />ennustaa tai valitsee.</p></div><Reveal at={1}><h2>GenAI</h2><p>Tuottaa tekstiä, kuvaa,<br />ääntä tai koodia.</p></Reveal></div></div>
  },
  {
    id: "experiment",
    title: "Mitä oikeastaan kokeiltiin?",
    section: "Tekijä",
    time: "0:22–0:24",
    theme: "paper",
    steps: 2,
    notes: ["Kysy yhdestä kokeilusta. Mikä tehtävä, mikä malli, mitkä työkalut, mitä kontekstia ja kuinka monta korjauskierrosta?", "Yksittäinen onnistuminen tai epäonnistuminen ei kuvaa kaikkia tehtäviä. Maksuton/maksullinen-jako ei yksin selitä kokemusta."],
    content: <div className="experiment-scene"><Label>Oman kokemuksen rajaus</Label><h1>Mitä oikeastaan<br />kokeiltiin?</h1><div className="editorial-rows"><p>Millainen tehtävä?</p><Reveal at={1}><p>Millä välineillä ja tiedoilla?</p></Reveal><Reveal at={2}><p>Miten tulosta arvioitiin?</p></Reveal></div></div>
  },
  {
    id: "use-vs-approval",
    title: "Käyttö ja vaikutusarvio",
    section: "Tekijä",
    time: "0:24–0:28",
    theme: "paper",
    steps: 2,
    sourceLine: "GDC 2026 · State of the Game Industry",
    sources: [source("gdc", "GDC 2026: alkuperäinen julkaisu")],
    notes: ["36 % kertoo käyttävänsä GenAI:ta työssään. 52 % arvioi vaikutuksen pelialaan kielteiseksi ja 7 % myönteiseksi.", "Käyttö ja vaikutusarvio ovat eri kysymyksiä. Näitä prosentteja ei lasketa yhteen eikä ryhmien päällekkäisyyttä tunneta. Ei trendiä eikä syy-seurauspäätelmää työpaikoista."],
    content: <GdcChart />
  },
  {
    id: "astra",
    title: "Astralla rakennettu peli",
    section: "Pelaamisen syy",
    time: "0:28–0:29",
    theme: "ink",
    steps: 0,
    sourceLine: "Matthew Berman · Cloud Top Chaos · videon kohta 29:18 alkaen",
    sources: [source("astra", "Alkuperäinen video")],
    notes: astraNotes,
    content: <GameFrame />
  },
  {
    id: "one-prompt",
    title: "Yksi prompti, monta työvaihetta",
    section: "Pelaamisen syy",
    time: "0:29–0:30",
    theme: "paper",
    steps: 3,
    sourceLine: "Työnkulun havainnollistus · ei ajoloki tai mitattu aikajana",
    sources: [source("astra", "Bermanin työnkulku"), source("sunwake", "Sunwake: dokumentoitu kehityspolku")],
    notes: ["Tämä prosessikuva näyttää käsitteellisen työnkulun, ei väitä tuntevansa jokaisen esimerkin sisäistä ajolokia.", "Yksi alkuperäinen pyyntö voi käynnistää suunnittelua, koodausta, mallintamista ja automaattista testaamista. Tekijän uusi palaute erotetaan autonomisista kierroksista."],
    content: <PromptSequence />
  },
  {
    id: "player",
    title: "Kenelle tämä on tehty?",
    section: "Pelaamisen syy",
    time: "0:30–0:32",
    theme: "ink",
    steps: 3,
    sourceLine: "Sama peliesimerkki · Matthew Berman / Cloud Top Chaos",
    sources: [source("astra", "Alkuperäinen video")],
    notes: [...astraNotes, "Anna yleisölle aikaa: haluaisitko katsoa demoa, pelata vai molempia? Paljasta kysymykset puheen tahdissa.", "Älä päättele kysyntätiedon puutteesta, ettei kukaan halua pelata. Kaveriporukka tai yksi ilta voi olla riittävä tarkoitus."],
    content: <GameFrame scrutinize />
  },
  {
    id: "feedback",
    title: "Myös pelituntumaa työstettiin",
    section: "Pelaamisen syy",
    time: "0:32–0:34",
    theme: "paper",
    steps: 1,
    sourceLine: "Bermanin kuvaama lisäpalaute · ei oma pelitesti",
    sources: [source("astra", "Berman: kamera ja liike")],
    notes: [...astraNotes, "Kuvaa palautteen sisältö: kameran käytös, kallistuvat tasot ja reunojen läpi sukeltaminen. Emme esitä ennen/jälkeen-todistetta tai pelaajatestin tulosta."],
    content: <div className="feedback-scene"><Label>Yksi konkreettinen jatkokierros</Label><h1>Kamera.<br />Liike.<br />Reunat.</h1><div className="feedback-aside"><p>Tekijä antoi lisäpalautetta siitä,<br />miltä pelaaminen tuntuu.</p><Reveal at={1}><h2>Mitä sinä<br />haluaisit kokeilla?</h2></Reveal></div></div>
  },
  {
    id: "own-work",
    title: "AI rakensi. Minä suunnittelin.",
    section: "Oma projekti",
    time: "0:34–0:35",
    theme: "ochre",
    steps: 1,
    notes: [...wowNotes, "Tämä on puhujan kuvaus omasta työstä, ei yleislaki AI:n kyvyistä. Älä keksi ajansäästöä tai nimeä vahvistamattomia työkaluja."],
    content: <div className="ownership-scene"><Label>Oma tapani rakentaa SuomiWoW</Label><h1>AI rakensi<br />toteutuksen.</h1><Reveal at={1}><h2>Minä tein<br />suunnittelupäätökset.</h2></Reveal></div>
  },
  {
    id: "suomiwow",
    title: "Yhteisön raidihistoria keräiltäväksi",
    section: "SuomiWoW CCG",
    time: "0:35–0:37",
    theme: "ink",
    steps: 0,
    sourceLine: "SuomiWoW CCG · julkinen näkymä 6.9.2026",
    sources: [source("wow", "SuomiWoW CCG")],
    notes: [...wowNotes, "SuomiWoW kokoaa suomalaisen World of Warcraft -raidiyhteisön historiaa. CCG muuttaa hahmot ja raidikaudet keräiltäväksi.", "Varaa kaksi minuuttia tarkoitukseen, neljä demoon, kolme päätökseen ja minuutti johtopäätökseen."],
    content: <div className="wow-intro"><h1>Meidän yhteisömme.<br />Meidän raidihistoriamme.</h1><img className="vault-image" src={media("suomiwow-vault.png")} alt="SuomiWoW CCG:n pakkaukset, raidisetit ja julkinen esimerkkikortti" /><p className="lead">SuomiWoW CCG</p><Link href={urls.wow}>Avaa yhteisön korttikokoelma</Link></div>
  },
  {
    id: "suomiwow-card",
    title: "Yksi pakka, yksi kortti",
    section: "SuomiWoW CCG",
    time: "0:37–0:41",
    theme: "ink",
    steps: 3,
    sourceLine: "Julkinen esimerkkikortti · SuomiWoW CCG · 6.9.2026",
    sources: [source("wow", "SuomiWoW: pakka, kortti ja kokoelma")],
    notes: [...wowNotes, "Avaa live-demossa yksi viiden kortin pakka. Näytä yksi kortti ja kokoelma. Älä metsästä harvinaista tulosta tai selitä jokaista tietokenttää.", "Verkon takerrellessa palaa 30 sekunnissa tähän paikalliseen esimerkkikorttiin. Kortin yksityiskohdat on kuvattu julkisesta palvelusta, ei keksitty."],
    content: <WowCard />
  },
  {
    id: "snapshot",
    title: "Kortti säilyttää yhden hetken",
    section: "SuomiWoW CCG",
    time: "0:41–0:44",
    theme: "paper",
    steps: 1,
    sources: [source("wow", "SuomiWoW CCG")],
    notes: [...wowNotes, "Dokumentoitu päätös: julkaistu kortti säilyy muuttumattomana raidikauden hahmokuvana. Uudesta tilanteesta voi syntyä uusi versio. Paikallinen lähde: wow-guild-progress-tracker/docs/ccg-implementation-plan.md, Product summary ja Goals.", "Peruste on yhteisön raidihistorian säilyttäminen. Tämä on dokumentoitu tavoite, ei mitattu osoitus pelaajien tyytyväisyydestä.", "Kuvassa ovat julkisen palvelun raidisetit. Ne eivät esitä oman tilin keräilyhistoriaa."],
    content: <div className="snapshot-scene"><Label>Yksi suunnittelupäätös</Label><h1>Kortti säilyttää<br />yhden hetken</h1><img src={media("suomiwow-sets.png")} alt="SuomiWoW CCG:n eri raidikausien kokoelmat" /><Reveal at={1}><p className="lead">Hahmo voi muuttua.<br />Julkaistu kortti säilyy.</p></Reveal></div>
  },
  {
    id: "wow-purpose",
    title: "Mitä pelaaja tunnistaa?",
    section: "SuomiWoW CCG",
    time: "0:44–0:45",
    theme: "paper",
    steps: 1,
    notes: [...wowNotes, "Kerro tavoite tunnistamisen ilosta ja oman historian keräämisestä. Käyttäjäpalautetta tai mitattua vaikutusta ei ole tähän esitykseen vahvistettu.", "Kysy miltä tämä voisi tuntua yhteisön jäsenestä. Erottele yleisön arvaus ja havaittu pelaajapalaute. Oma projekti läpäisee saman näyttövaatimuksen kuin Astra-esimerkit."],
    content: <><Question>Mitä pelaaja<br />tunnistaa?</Question><Reveal at={1} className="bottom-statement"><p>Tavoite on tunnistamisen ilo.<br />Sen toteutuminen selviää pelaajilta.</p></Reveal></>
  },
  {
    id: "player-reaction",
    title: "Käyttötapa vaikuttaa suhtautumiseen",
    section: "Pelaaja",
    time: "0:45–0:48",
    theme: "paper",
    steps: 0,
    sourceLine: "Quantic Foundry · 18.12.2025",
    sources: [source("quantic", "Gen AI in Video Games: alkuperäinen kysely")],
    notes: ["Palaa huoneen bugit/dialogi-pariin ennen kuvaajaa. Vastaus voi olla sama tai eri kuin tutkimuksen otoksessa.", "Dialogi 83 %, questit 77 % kielteisiä. Dynaaminen vaikeus noin 50 %: 100 − 26 (myönteinen) − 24 (neutraali). Pyöristetyt osuudet.", "N = 1 799, vapaaehtoinen PC/core-painotteinen otos. Ei kaikkien pelaajien edustava otos. Vaikeustasokysymyskin koski GenAI:ta."],
    content: <ReactionChart />
  },
  {
    id: "trust",
    title: "Kokemus ja luottamus",
    section: "Pelaaja",
    time: "0:48–0:49",
    theme: "ink",
    steps: 1,
    notes: ["Koettu laatu, käytöstä kertominen ja periaatteellinen hyväksyttävyys ovat eri kysymyksiä. Hyvä kokemus ei ratkaise suostumusta tai aineistojen ehtoja."],
    content: <div className="trust-scene"><Label>Pelaajan näkökulma</Label><h1>Oliko se<br />hyvä kokemus?</h1><Reveal at={1}><h2>Oliko tapa tehdä<br />se hyväksyttävä?</h2></Reveal></div>
  },
  {
    id: "1001-nights",
    title: "Generointi osana pelimekaniikkaa",
    section: "Pelaaja",
    time: "0:49–0:52",
    theme: "ink",
    steps: 2,
    sourceLine: "1001 Nights · Fu ym., CHI EA ’25 · tekijöiden tutkimusesittely, kuva 1",
    sources: [source("nights", "1001 Nights: tutkimus ja kuva")],
    notes: ["Pelaaja jatkaa tarinaa kuninkaan kanssa ja yrittää saada tämän mainitsemaan asesanan. Sana muuttuu pelissä käytettäväksi esineeksi.", "Kuva näyttää tekijöiden esimerkin: dagger eli tikari. Pelaajan tavoite ohjaa kirjoittamista. Generointi on osa toimintaa eikä vain tuotantoväline.", "Kysy, mitä tämä antaa pelaajalle. Tämä ei ole todiste kaupallisesta menestyksestä eikä vastaus aineistojen hyväksyttävyyteen."],
    content: <Nights />
  },
  {
    id: "steam",
    title: "Peliin päätyvä sisältö",
    section: "Vastuu",
    time: "0:52–0:54",
    theme: "paper",
    steps: 1,
    sourceLine: "Steamworks · Content Survey · tarkistettu tutkimuskierroksella 5.9.2026",
    sources: [source("steam", "Steamworks: AI Generated Content")],
    notes: ["Steamworks erottaa ennalta generoidun ja pelaamisen aikana generoidun sisällön. Live-generointiin liittyy kuvaus laittoman sisällön estämisestä.", "Tämä kuvaa alustan ilmoitusrajaa. Älä esitä sitä yleisenä eettisenä hyväksyntänä sisäiselle AI-käytölle tai yleisenä lakiohjeena."],
    content: <div className="steam-scene"><Label>Steamworksin sisältöilmoitus</Label><h1>Peliin päätyvä sisältö</h1><div className="definition-pair"><div><h2>Ennalta<br />generoitu</h2><p>Esimerkiksi peliin<br />sisältyvä kuva tai ääni.</p></div><Reveal at={1}><h2>Pelaamisen aikana<br />generoitu</h2><p>Lisäksi kuvaus siitä, miten<br />laiton sisältö estetään.</p></Reveal></div><p className="small-note">Alustan ilmoitusraja ja oma eettinen arvio ovat eri asioita.</p></div>
  },
  {
    id: "clair-obscur",
    title: "Kokeilusta julkaisuvastuuseen",
    section: "Vastuu",
    time: "0:54–0:55",
    theme: "paper",
    steps: 2,
    sourceLine: "Clair Obscur: Expedition 33 · Sandfall / El País; PC Gamer",
    sources: [source("clair", "Sandfallin täsmennys / El País"), source("awards", "Indie Game Awards / PC Gamer")],
    notes: ["Enintään minuutti. Sandfallin mukaan väliaikaisia AI-tekstuureja jäi vahingossa julkaisuun ja ne vaihdettiin viiden päivän sisällä.", "Indie Game Awards poisti kaksi palkintoa omien GenAI-sääntöjensä perusteella. Tämä ei osoita, että koko peli olisi AI:n tekemä tai Steam-ilmoitus olisi puuttunut."],
    content: <div className="timeline-scene"><Label>Clair Obscur: Expedition 33</Label><h1>Kokeilulla on myös<br />julkaisuvastuu</h1><ol className="timeline"><li><span>Kokeilu</span><p>Väliaikaisia<br />AI-tekstuureja</p></li><li><Reveal at={1}><span>Julkaisu</span><p>Osa jäi peliin.<br />Korjattiin.</p></Reveal></li><li><Reveal at={2}><span>Palkintotapahtuma</span><p>Omat säännöt.<br />Kaksi palkintoa pois.</p></Reveal></li></ol></div>
  },
  {
    id: "five-questions",
    title: "Viisi kysymystä AI:n käytöstä",
    section: "Vastuu",
    time: "0:55–0:57",
    theme: "ochre",
    steps: 4,
    notes: ["Tämä on esityksen oma arviointikehys, ei validoitu mittari. Älä vaadi yhtä yhteistä vastausta.", "Neljäs kysymys sisältää suostumuksen, käytön ehdot ja tunnistettavan ihmisen äänen tai performanssin jäljittelyn. Viides sisältää käytöstä kertomisen ja ongelmien korjaamisen."],
    content: <FiveQuestions />
  },
  {
    id: "return-to-room",
    title: "Helpompi tehdä. Parempi pelata?",
    section: "Oma kokeilu",
    time: "0:57–1:00",
    theme: "paper",
    steps: 1,
    notes: ["Palaa yhteen toteutuneeseen helpompi/parempi-parin tulokseen. Jos ero puuttui, sano se. Älä keksi jakaumaa.", "Sulje live-gallup. Kerro työpajan tehtävä ja anna täysi 15 minuutin tauko."],
    content: <><Question>Helpompi tehdä.<br />Parempi pelata?</Question><Reveal at={1} className="bottom-statement"><p>Kokeillaan yhtä pientä ajatusta.<br />Katsotaan, mitä pelaaja kokee.</p></Reveal></>
  },
  {
    id: "break",
    title: "15 minuutin tauko",
    section: "Tauko",
    time: "1:00–1:15",
    theme: "ink",
    steps: 0,
    notes: ["Käynnistä 15 minuutin ajastin tauon alkaessa. Paluuaika lukittuu käynnistyksestä. Kellonaikaan perustuva ajastin toimii myös taustavälilehdellä.", "Työpajan osoite ja mahdollinen QR-koodi tulevat tapahtuma-asetuksista. Osallistuja voi tehdä parin kanssa tai seurata demoa."],
    content: <div className="break-scene"><div><Label>Kohta tehdään itse</Label><h1>Tauko.</h1><WorkshopLink /></div><Countdown id="break" minutes={15} large /></div>
  },
  {
    id: "workshop-brief",
    title: "Yksi ruutu. Yksi kokemus.",
    section: "Työpaja",
    time: "1:15–1:20",
    theme: "ochre",
    steps: 0,
    notes: ["Työpaja kestää 45 minuuttia. Avaa playground, valitse PELI ja MUOKKAA. Osallistujilta ei pyydetä omia API-avaimia. Jakaminen on vapaaehtoista.", "Nimeä yksi pelaaja tai tilanne ja tavoiteltu kokemus. Rajaa yhteen ruutuun ja yhteen päämekaniikkaan. Oma vitsi on mahdollinen valinta, ei pakollinen viimeistelykerros.", "Ilman verkkoyhteyttä avaa paikallinen kokeilu. Vaihtoehtoina kaksi saman pelin ohjaustapaa. Yleisö havainnoi suhteessa tarkoitukseen, ei etukäteen nimettyyn voittajaan."],
    content: <div className="brief-scene"><Label>45 minuutin työpaja</Label><h1>Yksi ruutu.<br />Yksi kokemus.</h1><p className="lead">Kenelle teet?<br />Mitä hänen pitäisi kokea?</p><WorkshopLink /><Link href={`${import.meta.env.BASE_URL}workshop-example.html`}>Yhteinen kokeilu</Link></div>
  },
  {
    id: "first-version",
    title: "Ensimmäinen pelattava ajatus",
    section: "Työpaja",
    time: "1:20–1:30",
    theme: "paper",
    steps: 0,
    notes: ["Kymmenen minuuttia ensimmäiseen versioon. Käytä esimerkkipyyntöä rakenteena, vaihda pelaaja ja kokemus omaan ajatukseen.", "Jos versio ei käynnisty, korjaa yksi havaittu ongelma tai palaa toimivaan versioon. Toiminnan korjaaminen ja todentaminen voi olla koko työpajan tulos."],
    content: <WorkshopStage number="1" id="build" duration={10} title="Ensimmäinen pelattava ajatus"><p className="prompt-example">Tee yhden ruudun peli kaverille, joka haluaa lyhyen rauhallisen tauon. Pelaaja kerää esineitä. Yksi päämekaniikka. Selkeä aloitus ja palaute.</p><p>Vaihda pelaaja ja kokemus omiksesi.</p></WorkshopStage>
  },
  {
    id: "observe",
    title: "Anna parin kokeilla",
    section: "Työpaja",
    time: "1:30–1:37",
    theme: "paper",
    steps: 0,
    notes: ["Seitsemän minuuttia. Anna parin kokeilla ennen selittämistä. Katso mitä hän ymmärtää, tekee ja tuntee.", "Kirjaa yksi havainto. Havainnon ei tarvitse olla ongelma. Yleisön edessä jakaminen on vapaaehtoista."],
    content: <WorkshopStage number="2" id="observe" duration={7} title="Anna parin kokeilla"><p>Katso ennen kuin selität.</p><ul><li>Mitä hän ymmärsi voivansa tehdä?</li><li>Mikä tuntui hauskalta tai turhauttavalta?</li><li>Toteutuiko tavoiteltu kokemus?</li></ul><p className="emphasis">Kirjaa yksi havainto.</p></WorkshopStage>
  },
  {
    id: "decide",
    title: "Yksi perusteltu päätös",
    section: "Työpaja",
    time: "1:37–1:47",
    theme: "paper",
    steps: 1,
    notes: ["Kymmenen minuuttia. KYSY-tilassa voi pyytää vaihtoehtoja, MUOKKAA-tilassa toteuttaa valinnan. Yhtä toimivaa ratkaisua saa myös säilyttää.", "Emme vaadi muutosta ihmisen roolin osoittamiseksi. Pidä ensimmäinen versio saatavilla, jotta vaikutusta voi verrata."],
    content: <WorkshopStage number="3" id="decide" duration={10} title="Yksi perusteltu päätös"><p className="decision-line">Havaitsin…<br />Siksi säilytän tai muutan…<br />Odotan, että pelaaja…</p><Reveal at={1}><p className="emphasis">Myös säilyttäminen on päätös.</p></Reveal></WorkshopStage>
  },
  {
    id: "retest",
    title: "Kokeile uudelleen",
    section: "Työpaja",
    time: "1:47–1:52",
    theme: "paper",
    steps: 0,
    notes: ["Viisi minuuttia. Anna saman pelaajan kokeilla. Näkyikö tavoiteltu vaikutus? Myös epäselvä tulos tai huonompi versio on kelvollinen havainto.", "Jos ensimmäinen versio säilytettiin, tarkista toteutuuko havainto toisella kokeilulla. Yksittäistä tulosta ei yleistetä kaikkien pelaajien kokemukseksi."],
    content: <WorkshopStage number="4" id="retest" duration={5} title="Kokeile uudelleen"><p className="large-copy">Näkyikö se vaikutus,<br />jota odotit?</p><p>Parempi, huonompi tai epäselvä.<br />Kaikki ovat mahdollisia tuloksia.</p></WorkshopStage>
  },
  {
    id: "showcase",
    title: "Kaksi pientä kokeilua",
    section: "Työpaja",
    time: "1:52–1:56",
    theme: "ink",
    steps: 0,
    notes: ["Enintään kaksi vapaaehtoista. Kaksi minuuttia kummallekin. Kysy tarkoitus, havainto ja päätös, ei teknologiapinoa.", "Ei paremmuuskilpailua. Älä avaa julkista jakolinkkiä ilman tekijän lupaa. Jos aikataulu venyy, tämä osuus leikataan ennen yhteistä purkua."],
    content: <WorkshopStage number="5" id="showcase" duration={4} title="Kaksi pientä kokeilua"><p className="large-copy">Kenelle teit?<br />Mitä havaitsit?<br />Mitä päätit?</p><p>Vapaaehtoisesti. Keskeneräinenkin kelpaa.</p></WorkshopStage>
  },
  {
    id: "recap",
    title: "Mitä tästä opittiin?",
    section: "Lopetus",
    time: "1:56–1:58",
    theme: "paper",
    steps: 0,
    notes: ["Kysy mitä AI teki, mitä osallistuja päätti ja mitä pelaajalta opittiin. Palaa yhteen huoneen alkuvastaukseen.", "Työpaja ei mittaa AI:n tuottavuutta tai ihmisen yleistä paremmuutta. Tavoite on perustellumpi arvio omasta tilanteesta."],
    content: <div className="recap-scene"><Label>Yhteinen purku</Label><h1>Mitä tästä opittiin?</h1><div className="editorial-rows"><p>Mitä AI teki?</p><p>Mitä sinä päätit?</p><p>Mitä pelaajalta opittiin?</p></div></div>
  },
  {
    id: "final",
    title: "Oliko tämä sinun aikasi arvoinen?",
    section: "Lopetus",
    time: "1:58–2:00",
    theme: "ink",
    steps: 1,
    notes: ["Pelattavan pelin tekeminen yhdellä pyynnöllä on iso saavutus. Seuraava kysymys kuuluu pelaajalle.", "Jätä tilaa erilaisille vastauksille. Kiitä yleisöä. Lopetus ei palauta jakoa, jossa AI tekee olemassa olevan ja ihminen pelaamisen arvoisen."],
    content: <div className="final-scene"><Label>Seuraava kysymys kuuluu pelaajalle</Label><h1>Oliko tämä<br />sinun aikasi<br /><em>arvoinen?</em></h1><Reveal at={1}><p>Kiitos. <span>Juha / Vaarattu</span></p></Reveal></div>
  },
];
