import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

type Section = "huone" | "tyopoyta" | "ruutu" | "kadet" | "lopetus";

type Source = {
  label: string;
  url: string;
};

type Slide = {
  id: string;
  title: string;
  section: string;
  sectionKey: Section;
  steps: number;
  sourceLine?: string;
  notes: string[];
  sources?: Source[];
  content: ReactNode;
};

const RevealStepContext = createContext(0);

function useRevealStep() {
  return useContext(RevealStepContext);
}

function Reveal({ at, children, className = "" }: { at: number; children: ReactNode; className?: string }) {
  const step = useRevealStep();
  if (step < at) return null;
  return <div className={`reveal ${className}`.trim()}>{children}</div>;
}

function Kicker({ children }: { children: ReactNode }) {
  return <p className="kicker">{children}</p>;
}

function BigQuestion({ children }: { children: ReactNode }) {
  return <h1 className="display-question">{children}</h1>;
}

function SectionMarker({ index, label }: { index: string; label: string }) {
  return (
    <div className="section-marker" aria-hidden="true">
      <span>{index}</span>
      <strong>{label}</strong>
    </div>
  );
}

const links = {
  liveVoting: import.meta.env.VITE_LIVE_VOTING_URL as string | undefined,
  suomiWow: "https://suomiwow.vaarattu.tv/ccg",
  workshop: import.meta.env.VITE_WORKSHOP_URL as string | undefined,
  workshopShort: import.meta.env.VITE_WORKSHOP_SHORT_URL as string | undefined,
  workshopQr: import.meta.env.VITE_WORKSHOP_QR_IMAGE as string | undefined,
};

const sourceUrls = {
  brand: "https://openai.com/brand/",
  nistAi: "https://csrc.nist.gov/glossary/term/artificial_intelligence",
  nistGenAi: "https://csrc.nist.gov/glossary/term/generative_artificial_intelligence",
  gameAi: "https://developer.microsoft.com/en-us/games/articles/2024/08/fortifying-teams-with-ai-and-optimized-workflows/",
  recommenders: "https://support.google.com/youtube/answer/16533387?hl=en",
  bitkom: "https://bitkom-research.de/news/viele-nutzen-ki-aber-nur-wenige-bezahlen-dafuer",
  accc: "https://www.accc.gov.au/system/files/dpsi-consumer-survey-research-report-lonergan-research-feb2025.pdf",
  gdc: "https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/",
  quantic: "https://quanticfoundry.com/2025/12/18/gen-ai/",
  steam: "https://partner.steamgames.com/doc/gettingstarted/contentsurvey?language=english",
  clair: "https://elpais.com/cultura/2025-06-28/la-revolucion-creativa-low-cost-cuando-la-tecnologia-pone-el-arte-al-alcance-de-todos.html",
  clairAwards: "https://www.pcgamer.com/games/rpg/indie-game-awards-pulls-two-awards-from-clair-obscur-over-generative-ai-use-we-have-a-hard-stance-against-gen-ai-in-videogames/",
};

function ExternalPortal({
  href,
  eyebrow,
  title,
  action,
}: {
  href?: string;
  eyebrow: string;
  title: string;
  action: string;
}) {
  return (
    <div className="portal">
      <span>{eyebrow}</span>
      <strong>{title}</strong>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          {action} <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <p>{action}</p>
      )}
    </div>
  );
}

const agreementData = [
  { name: "käyttää työssään", value: 36, color: "var(--accent)" },
  { name: "näkee vaikutuksen kielteisenä", value: 52, color: "var(--danger)" },
];

function AgreementChart() {
  const step = useRevealStep();
  const visibleData = agreementData.slice(0, Math.min(2, step));

  return (
    <div
      className="chart chart--vertical"
      aria-label="GDC 2026: 36 prosenttia käyttää generatiivista AI:ta työssään ja 52 prosenttia arvioi vaikutuksen kielteiseksi"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={visibleData} margin={{ top: 58, right: 18, bottom: 20, left: 18 }}>
          <CartesianGrid vertical={false} stroke="var(--chart-grid)" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--muted)", fontSize: 18 }}
            interval={0}
          />
          <YAxis domain={[0, 100]} hide />
          <Bar dataKey="value" radius={[12, 12, 2, 2]} maxBarSize={160} isAnimationActive animationDuration={520}>
            {visibleData.map((entry) => <Cell fill={entry.color} key={entry.name} />)}
            <LabelList
              dataKey="value"
              position="top"
              fill="var(--text)"
              fontSize={40}
              fontWeight={850}
              formatter={(value: unknown) => `${String(value)} %`}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

const usesData = [
  { label: "Tutkimus / ideointi", value: 81 },
  { label: "Arjen tehtävät", value: 47 },
  { label: "Koodiapu", value: 47 },
  { label: "Prototypointi", value: 35 },
];

function UsesChart() {
  return (
    <div className="chart chart--horizontal" aria-label="GDC 2026: generatiivisen AI:n käyttötavat työssä">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={usesData} layout="vertical" margin={{ top: 4, right: 62, bottom: 4, left: 8 }}>
          <CartesianGrid horizontal={false} stroke="var(--chart-grid)" />
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis
            type="category"
            dataKey="label"
            width={220}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--text)", fontSize: 18 }}
          />
          <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={28} isAnimationActive animationDuration={620}>
            {usesData.map((entry, index) => (
              <Cell fill={index === usesData.length - 1 ? "var(--human)" : "var(--accent)"} key={entry.label} />
            ))}
            <LabelList
              dataKey="value"
              position="right"
              fill="var(--text)"
              fontSize={20}
              fontWeight={800}
              formatter={(value: unknown) => `${String(value)} %`}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

const reactionData = [
  { label: "AI-dialogi", value: 83 },
  { label: "AI-questit", value: 77 },
  { label: "Dynaaminen vaikeus", value: 50 },
];

function ReactionChart() {
  return (
    <div className="chart chart--horizontal" aria-label="Quantic Foundry 2025: kielteinen suhtautuminen kolmeen generatiivisen AI:n käyttötapaan">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={reactionData} layout="vertical" margin={{ top: 10, right: 84, bottom: 10, left: 8 }}>
          <CartesianGrid horizontal={false} stroke="var(--chart-grid)" />
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis
            type="category"
            dataKey="label"
            width={220}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--text)", fontSize: 18 }}
          />
          <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={30} isAnimationActive animationDuration={620}>
            {reactionData.map((entry, index) => (
              <Cell fill={index === reactionData.length - 1 ? "var(--muted-strong)" : "var(--danger)"} key={entry.label} />
            ))}
            <LabelList
              dataKey="value"
              position="right"
              fill="var(--text)"
              fontSize={20}
              fontWeight={800}
              formatter={(value: unknown) => `${String(value)} %${Number(value) === 50 ? "*" : ""}`}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function BreakSlide() {
  const duration = 15 * 60;
  const [remaining, setRemaining] = useState(duration);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running || remaining <= 0) return;
    const timer = window.setInterval(() => setRemaining((current) => Math.max(0, current - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [remaining, running]);

  const minutes = Math.floor(remaining / 60).toString().padStart(2, "0");
  const seconds = (remaining % 60).toString().padStart(2, "0");
  const returnAt = new Date(Date.now() + remaining * 1000).toLocaleTimeString("fi-FI", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="break-layout">
      <div>
        <Kicker>15 minuutin tauko</Kicker>
        <h1>Palataan klo {returnAt}.</h1>
        <p className="lead">Voit avata työpajan jo valmiiksi. Tee pelattava ajatus — älä unelmapeliä.</p>
        <div className="break-actions">
          <button type="button" onClick={() => setRunning((value) => !value)}>
            {running ? "Pysäytä" : remaining === duration ? "Käynnistä" : "Jatka"}
          </button>
          <button
            type="button"
            className="button-secondary"
            onClick={() => {
              setRunning(false);
              setRemaining(duration);
            }}
          >
            Nollaa
          </button>
        </div>
      </div>
      <div className="break-side">
        <div className="break-clock tabular" aria-label={`${minutes} minuuttia ja ${seconds} sekuntia jäljellä`}>
          {minutes}:{seconds}
        </div>
        {links.workshopQr && <img className="workshop-qr" src={links.workshopQr} alt="Työpajan QR-koodi" />}
        <p className="break-url">{links.workshopShort ?? links.workshop ?? "Työpajan osoite vahvistetaan ennen tapahtumaa"}</p>
      </div>
    </div>
  );
}

const slides: Slide[] = [
  {
    id: "title",
    title: "Tekoäly tuli",
    section: "Kuopio Pelaa 2026",
    sectionKey: "huone",
    steps: 2,
    notes: [
      "Aloita otsikosta, älä ansioluettelosta tai agendasta.",
      "Anna maailmanlopun mittakaavan tehdä vitsi. Sisältö alkaa vasta seuraavalla dialla.",
    ],
    content: (
      <div className="hero-layout">
        <Kicker>Kuopio Pelaa 2026</Kicker>
        <h1 className="hero-title">Tekoäly tuli</h1>
        <Reveal at={1}><p className="hero-turn">nyt kaikki on ohi...</p></Reveal>
        <Reveal at={2}><p className="hero-answer">vai onko?</p></Reveal>
      </div>
    ),
  },
  {
    id: "two-apocalypses",
    title: "Kaksi maailmanloppua",
    section: "Huone",
    sectionKey: "huone",
    steps: 3,
    notes: [
      "Nimeä otsikon kaksi vastakkaista tulevaisuustarinaa reilusti.",
      "Paljasta vasta lopuksi niiden jaettu oletus: tuottaminen ja pelin tekeminen muka tarkoittavat samaa asiaa.",
    ],
    content: (
      <div className="future-layout">
        <Kicker>Kaksi vastakkaista lupausta</Kicker>
        <div className="future-grid">
          <Reveal at={1}><div className="future-card"><span>01</span><strong>Pelintekijöitä ei enää tarvita.</strong></div></Reveal>
          <Reveal at={2}><div className="future-card"><span>02</span><strong>Kuka tahansa voi tehdä pelin.</strong></div></Reveal>
        </div>
        <Reveal at={3}><p className="shared-assumption">Molemmat alkavat sanoista: <strong>“AI osaa tehdä sen.”</strong></p></Reveal>
      </div>
    ),
  },
  {
    id: "central-question",
    title: "Mikä tekee lopputuloksesta pelin?",
    section: "Huone",
    sectionKey: "huone",
    steps: 1,
    notes: [
      "Tämä on koko kahden tunnin kantava kysymys. Älä vastaa siihen vielä.",
      "Lupaa, että kysymystä katsotaan huoneessa, tekijän työpöydällä, pelaajan ruudulla ja lopulta yleisön käsissä.",
    ],
    content: (
      <div className="center-layout">
        <Kicker>Kantava kysymys</Kicker>
        <BigQuestion>Kun AI voi kirjoittaa, piirtää ja koodata —</BigQuestion>
        <Reveal at={1}><p className="question-tail">mikä tekee lopputuloksesta pelin, jota joku haluaa pelata?</p></Reveal>
      </div>
    ),
  },
  {
    id: "association",
    title: "Mitä tekoäly tuo mieleen?",
    section: "Huone",
    sectionKey: "huone",
    steps: 0,
    notes: [
      "Kysy yleisöltä ja ota 2–4 nopeaa huudahdusta.",
      "Älä korjaa vastauksia. Odota hetki ennen seuraavaa diaa.",
    ],
    content: (
      <div className="center-layout">
        <Kicker>Ensimmäinen ajatus</Kicker>
        <BigQuestion>Kun sanon <span className="accent">tekoäly</span>, mitä tulee ensimmäisenä mieleen?</BigQuestion>
      </div>
    ),
  },
  {
    id: "chatgpt",
    title: "Miksi juuri ChatGPT?",
    section: "Huone",
    sectionKey: "huone",
    steps: 2,
    sourceLine: "OpenAI Design Guidelines · nimeä käytetään vain palveluun viitatessa",
    notes: [
      "Jos joku sanoi ChatGPT, kysy miksi juuri se. Jos ei, paljasta nimi silti.",
      "Tässä käytetään typografista nimeä, ei uudelleen piirrettyä brändimerkkiä.",
    ],
    sources: [{ label: "OpenAI Design Guidelines", url: sourceUrls.brand }],
    content: (
      <div className="chatgpt-layout">
        <p>Monelle “tekoäly” tarkoittaa käytännössä tätä:</p>
        <Reveal at={1}><div className="brand-word">ChatGPT</div></Reveal>
        <Reveal at={2}><h1>Miksi yksi tuote nielaisi kokonaisen käsitteen?</h1></Reveal>
      </div>
    ),
  },
  {
    id: "gallup",
    title: "Mitä tämä huone ajattelee?",
    section: "Live-gallup",
    sectionKey: "huone",
    steps: 1,
    notes: [
      "Vaihda Live Voting -sovelluksen julkiseen Presentation Displayhin.",
      "Harjoittele ensisijaisesti kahdeksan kysymyksen versio neljänä parina.",
      "Nosta yksi havainto paria kohti ja palaa esitykseen viimeistään minuutilla 20.",
    ],
    content: (
      <div className="split-layout">
        <div>
          <Kicker>Ensin huone, sitten tutkimus</Kicker>
          <h1>Mitä tämä huone ajattelee?</h1>
          <p className="lead">Vastaa nopeasti. Mielipidettä ei tarvitse puolustaa.</p>
        </div>
        <Reveal at={1}>
          <ExternalPortal
            href={links.liveVoting}
            eyebrow="Live Voting"
            title="Ota puhelin esiin"
            action={links.liveVoting ? "Avaa äänestys" : "Äänestys avataan erilliseen näkymään"}
          />
        </Reveal>
      </div>
    ),
  },
  {
    id: "desk-section",
    title: "Tekijän työpöytä",
    section: "Työpöytä",
    sectionKey: "tyopoyta",
    steps: 1,
    notes: ["Luvunvaihto. Siirry yleisestä asenteesta siihen, mitä työkalulla todella tehdään."],
    content: (
      <div className="section-layout">
        <SectionMarker index="01" label="TYÖPÖYTÄ" />
        <Reveal at={1}><h1>Mitä muuttuu, kun ensimmäinen versio syntyy nopeammin?</h1></Reveal>
      </div>
    ),
  },
  {
    id: "ai-genai",
    title: "Kaikki AI ei generoi",
    section: "Työpöytä",
    sectionKey: "tyopoyta",
    steps: 2,
    sourceLine: "NIST Glossary · AI on yläkäsite, GenAI sisältöä tuottava malliluokka",
    notes: [
      "Selitä AI yläkäsitteenä ja GenAI sen osana. Älä esitä näitä tekoälyn ainoina lajeina.",
      "Erottelu tekee kritiikistä tarkempaa; se ei ole gotcha AI-kriitikoille.",
    ],
    sources: [
      { label: "NIST: artificial intelligence", url: sourceUrls.nistAi },
      { label: "NIST: generative artificial intelligence", url: sourceUrls.nistGenAi },
    ],
    content: (
      <div className="definition-layout">
        <div className="definition-main">
          <span>AI</span>
          <p>ennustaa · suosittelee · tunnistaa · järjestää · generoi</p>
        </div>
        <Reveal at={1}><div className="subset-line" aria-hidden="true" /></Reveal>
        <Reveal at={2}>
          <div className="definition-sub">
            <span>GenAI</span>
            <p>tuottaa uutta tekstiä, kuvaa, ääntä, videota tai koodia</p>
          </div>
        </Reveal>
      </div>
    ),
  },
  {
    id: "before-chatgpt",
    title: "AI ei alkanut ChatGPT:stä",
    section: "Työpöytä",
    sectionKey: "tyopoyta",
    steps: 2,
    sourceLine: "Alustojen omat kuvaukset · Microsoft Gaming 2024 · käsitteelliset esimerkit",
    notes: [
      "Nimeä esimerkit nopeasti. Älä rakenna historiakatsausta.",
      "Suositusjärjestelmän käyttäminen ei mitätöi generatiivisen sisällön kritiikkiä.",
    ],
    sources: [
      { label: "YouTube recommendation systems", url: sourceUrls.recommenders },
      { label: "Microsoft Gaming: AI in games", url: sourceUrls.gameAi },
    ],
    content: (
      <div className="examples-layout">
        <Kicker>AI oli jo valitsemassa, mitä näet</Kicker>
        <h1>AI ei alkanut ChatGPT:stä.</h1>
        <div className="example-rows">
          <Reveal at={1}><p><span>ARJESSA</span>YouTube · TikTok · Instagram</p></Reveal>
          <Reveal at={2}><p><span>PELEISSÄ</span>NPC-säännöt · matchmaking · proseduraaliset kentät</p></Reveal>
        </div>
      </div>
    ),
  },
  {
    id: "tried-ai",
    title: "Kokeilin AI:ta",
    section: "Työpöytä",
    sectionKey: "tyopoyta",
    steps: 1,
    sourceLine: "Bitkom 2025 · ACCC 2025 · kuluttajakokemus syntyy yleensä ilmaisessa oletustuotteessa",
    notes: [
      "Anna lauseen seistä ensin yksin ja kysy, mitä kokeilu tarkoitti.",
      "Kahden kyselyn mukaan kuluttajakokemus syntyy useimmiten ilmaisversiossa. Tämä ei kerro kriitikoiden osuutta eikä mallin laatua.",
    ],
    sources: [
      { label: "Bitkom Research 2025", url: sourceUrls.bitkom },
      { label: "ACCC Consumer Survey 2025", url: sourceUrls.accc },
    ],
    content: (
      <div className="statement-layout">
        <BigQuestion>“Kokeilin AI:ta.”</BigQuestion>
        <Reveal at={1}><p className="question-tail">Mitä tarkalleen kokeilit — ja miten?</p></Reveal>
      </div>
    ),
  },
  {
    id: "same-ai",
    title: "Me emme arvioi samaa tekoälyä",
    section: "Työpöytä",
    sectionKey: "tyopoyta",
    steps: 2,
    notes: [
      "Paljasta ensin järjestelmä, sitten koejärjestely.",
      "Pääasia ei ole maksullisuus. Jokainen demo on valittu koejärjestely.",
    ],
    content: (
      <div className="factors-layout">
        <Kicker>Tulos riippuu muustakin kuin promptista</Kicker>
        <h1>Me emme arvioi samaa tekoälyä.</h1>
        <div className="factor-groups">
          <Reveal at={1}><div><span>JÄRJESTELMÄ</span><p>malli · tuote · käyttöoikeus</p></div></Reveal>
          <Reveal at={2}><div><span>KOE</span><p>tehtävä · työnkulku · valikointi</p></div></Reveal>
        </div>
      </div>
    ),
  },
  {
    id: "two-anecdotes",
    title: "Kaksi anekdoottia",
    section: "Työpöytä",
    sectionKey: "tyopoyta",
    steps: 2,
    notes: [
      "Kohtele molempia osapuolia symmetrisesti.",
      "Parempi malli voi muuttaa kyvykkyysarviota, mutta ei yksin ratkaise käyttötavan hyväksyttävyyttä.",
    ],
    content: (
      <div className="anecdote-layout">
        <Kicker>Kumpikaan ei yksin ole reilu koe</Kicker>
        <h1>Kaksi anekdoottia. Sama todistusongelma.</h1>
        <div className="anecdote-grid">
          <Reveal at={1}><blockquote>“Yksi huono vastaus todistaa, ettei AI osaa.”</blockquote></Reveal>
          <Reveal at={2}><blockquote>“Yksi loistava demo todistaa, että AI toimii.”</blockquote></Reveal>
        </div>
      </div>
    ),
  },
  {
    id: "use-vs-approval",
    title: "Käyttö ei tarkoita hyväksyntää",
    section: "Työpöytä",
    sectionKey: "tyopoyta",
    steps: 3,
    sourceLine: "GDC State of the Game Industry 2026 · yli 2 300 vastaajaa · erilliset kysymykset",
    notes: [
      "Näytä käyttö ensin ja kielteinen vaikutusarvio vasta sen jälkeen.",
      "Älä väitä, että samat 36 prosenttia kuuluvat kielteiseen 52 prosenttiin.",
      "Nosta 7 % myönteinen arvio viimeisenä erillisenä lukuna.",
    ],
    sources: [{ label: "GDC State of the Game Industry 2026", url: sourceUrls.gdc }],
    content: (
      <div className="chart-layout">
        <div className="chart-copy">
          <Kicker>Sama ala, kaksi eri mittaria</Kicker>
          <h1>Käyttö ei tarkoita hyväksyntää.</h1>
          <Reveal at={3}><p className="chart-callout"><strong>7 %</strong> arvioi vaikutuksen myönteiseksi.</p></Reveal>
        </div>
        <AgreementChart />
      </div>
    ),
  },
  {
    id: "actual-uses",
    title: "Ensin vaihtoehtoja, vasta sitten peli",
    section: "Työpöytä",
    sectionKey: "tyopoyta",
    steps: 2,
    sourceLine: "GDC 2026 · osuus GenAI:ta työssään käyttävistä · monivalinta",
    notes: [
      "Nimittäjä on GenAI:ta työssään käyttävät, ei koko peliala.",
      "Kuvaaja ei kerro työn laadusta tai säästetystä ajasta. Johda siitä seuraava kysymys.",
    ],
    sources: [{ label: "GDC State of the Game Industry 2026", url: sourceUrls.gdc }],
    content: (
      <div className="chart-layout chart-layout--wide">
        <div className="chart-copy">
          <Kicker>Mihin työkalua käytetään?</Kicker>
          <h1>Ensin vaihtoehtoja, vasta sitten peli.</h1>
          <Reveal at={2}><p className="chart-question">Jos versio syntyy nopeammin, mihin tekijän työ siirtyy?</p></Reveal>
        </div>
        <Reveal at={1}><UsesChart /></Reveal>
      </div>
    ),
  },
  {
    id: "easier-better",
    title: "Helpompi ei tarkoita parempaa",
    section: "Työpöytä",
    sectionKey: "tyopoyta",
    steps: 2,
    notes: [
      "Palaa gallupin helpompi/parempi-pariin.",
      "Kerro omasta työstäsi vain konkreettisesti: määrittely, arviointi, testaus, integraatio ja korjaus.",
    ],
    content: (
      <div className="distance-layout">
        <Kicker>Kaksi eri matkaa</Kicker>
        <h1>Helpompi ei tarkoita parempaa.</h1>
        <div className="distance-lines">
          <Reveal at={1}><div><span>idea</span><i /><strong>toimiva versio</strong><em>AI voi lyhentää</em></div></Reveal>
          <Reveal at={2}><div><span>toimiva versio</span><i className="long" /><strong>pelaamisen arvoinen</strong><em>valinta ja vastuu jäävät</em></div></Reveal>
        </div>
      </div>
    ),
  },
  {
    id: "suomiwow-intro",
    title: "Kun raididata muuttui leikiksi",
    section: "Työpöytä · SuomiWoW",
    sectionKey: "tyopoyta",
    steps: 2,
    notes: [
      "Esittele SuomiWoW vastauksena edellisen dian kysymykseen, ei portfolio-osuutena.",
      "Älä väitä projektia AI:n tekemäksi. AI:n todellinen rooli kerrotaan vain vahvistettuna.",
    ],
    content: (
      <div className="suomiwow-layout">
        <Kicker>Oikea yhteisö · oikea historia</Kicker>
        <h1>Kun raididata muuttui leikiksi.</h1>
        <Reveal at={1}><p className="lead">Suomalaisen WoW-yhteisön raidihistoria muuttui keräiltäväksi CCG-kokemukseksi.</p></Reveal>
        <Reveal at={2}><div className="card-fan" aria-hidden="true"><span /><span /><span /><span /><span /></div></Reveal>
      </div>
    ),
  },
  {
    id: "suomiwow-demo",
    title: "Yksi pakka. Yksi kortti. Yksi tarina.",
    section: "Työpöytä · SuomiWoW",
    sectionKey: "tyopoyta",
    steps: 1,
    notes: [
      "Avaa yksi pakka, tarkastele yhtä korttia ja näytä kokoelma. Kahdeksan minuuttia on kova raja.",
      "Jos sivu ei reagoi 30 sekunnissa, vaihda tallenteeseen. Älä debuggaa yleisön edessä.",
    ],
    content: (
      <div className="portal-layout">
        <Kicker>Live-demo · enintään 8 minuuttia</Kicker>
        <h1>Yksi pakka. Yksi kortti. Yksi tarina.</h1>
        <Reveal at={1}>
          <ExternalPortal href={links.suomiWow} eyebrow="suomiwow.vaarattu.tv" title="SuomiWoW CCG" action="Avaa live-demo" />
        </Reveal>
      </div>
    ),
  },
  {
    id: "meaning",
    title: "Tekninen mahdollisuus tarvitsee syyn",
    section: "Työpöytä · SuomiWoW",
    sectionKey: "tyopoyta",
    steps: 2,
    notes: [
      "Yhteisö, data ja tuoterajat tekevät teknisestä mahdollisuudesta tunnistettavan kokemuksen.",
      "Nimeä myös ei-kaupallinen raja: ei ostoksia, vaihtoa tai pay-to-progressia.",
    ],
    content: (
      <div className="meaning-layout">
        <h1>Koodi tekee ominaisuuden.</h1>
        <Reveal at={1}><p className="meaning-answer">Yhteisö, tarkoitus ja valinnat tekevät siitä <em>meidän.</em></p></Reveal>
        <Reveal at={2}><p className="meaning-tags">oikea data · yhteinen historia · tuoterajat · maku</p></Reveal>
      </div>
    ),
  },
  {
    id: "screen-section",
    title: "Pelaajan ruutu",
    section: "Ruutu",
    sectionKey: "ruutu",
    steps: 1,
    notes: ["Käännä näkökulma. Tekijän työpöydällä nopeus voi olla hyöty; pelaajan ruudulla sama valinta voi olla luottamuskysymys."],
    content: (
      <div className="section-layout">
        <SectionMarker index="02" label="RUUTU" />
        <Reveal at={1}><h1>Milloin kokeilusta tulee lupaus pelaajalle?</h1></Reveal>
      </div>
    ),
  },
  {
    id: "use-case",
    title: "Käyttötapa muuttaa reaktiota",
    section: "Ruutu",
    sectionKey: "ruutu",
    steps: 2,
    notes: [
      "Palaa vain Live Votingin bugit/dialogi-pariin.",
      "Älä oleta, että tulokset eroavat. Myös samanlaisuus on havainto.",
    ],
    content: (
      <div className="versus-layout">
        <Kicker>Palaa huoneen vastauksiin</Kicker>
        <div className="versus">
          <Reveal at={1}><span>bugien korjaaminen</span></Reveal>
          <Reveal at={2} className="versus-sign"><b>≠</b></Reveal>
          <Reveal at={2}><span>dialogin kirjoittaminen</span></Reveal>
        </div>
        <p>Käyttötapa muuttaa reaktiota.</p>
      </div>
    ),
  },
  {
    id: "player-reaction",
    title: "Luova sisältö osuu herkempään rajaan",
    section: "Ruutu",
    sectionKey: "ruutu",
    steps: 2,
    sourceLine: "Quantic Foundry 2025 · n=1 799 · vapaaehtoinen PC/core-painotteinen otos · *johdettu arvo",
    notes: [
      "Kerro otoksen vinoumasta ääneen. Tämä ei edusta kaikkia pelaajia.",
      "Noin 50 % on johdettu 26 % myönteisestä ja 24 % neutraalista.",
      "Nimeä puheessa tunnistettavan äänen, kasvojen tai performanssin jäljittely erilliseksi suostumus- ja korvauskysymykseksi.",
    ],
    sources: [{ label: "Quantic Foundry: Gamers and GenAI", url: sourceUrls.quantic }],
    content: (
      <div className="chart-layout chart-layout--wide">
        <div className="chart-copy">
          <Kicker>Kielteisesti suhtautuvien osuus</Kicker>
          <h1>Luova sisältö osuu herkempään rajaan.</h1>
          <Reveal at={2}><p className="chart-question">Hyvä laatu ei yksin ratkaise tekijyyttä tai suostumusta.</p></Reveal>
        </div>
        <Reveal at={1}><ReactionChart /></Reveal>
      </div>
    ),
  },
  {
    id: "steam-boundary",
    title: "Pelaajalle asti päätyvä sisältö muuttaa vastuuta",
    section: "Ruutu",
    sectionKey: "ruutu",
    steps: 3,
    sourceLine: "Steamworks Content Survey · nykyinen GenAI-ilmoitusraja",
    notes: [
      "Steam ei kohdista GenAI-osiota yleiseen sisäiseen tehokkuuskäyttöön.",
      "Pre-generated on peliin toimitettua, pelaajan kuluttamaa sisältöä. Live-generated tarvitsee lisäksi guardrailit.",
    ],
    sources: [{ label: "Steamworks Content Survey", url: sourceUrls.steam }],
    content: (
      <div className="boundary-layout">
        <Kicker>Missä pelaajan kannalta olennainen raja kulkee?</Kicker>
        <h1>Pelaajalle asti päätyvä sisältö muuttaa vastuuta.</h1>
        <div className="boundary-steps">
          <Reveal at={1}><div><span>01</span><strong>Sisäinen apuri</strong><small>ei osion fokus</small></div></Reveal>
          <Reveal at={2}><div><span>02</span><strong>Julkaistu sisältö</strong><small>pre-generated</small></div></Reveal>
          <Reveal at={3}><div><span>03</span><strong>Live-generointi</strong><small>disclosure + guardrailit</small></div></Reveal>
        </div>
      </div>
    ),
  },
  {
    id: "clair-obscur",
    title: "Kokeilu muuttui seuraukseksi",
    section: "Ruutu",
    sectionKey: "ruutu",
    steps: 3,
    sourceLine: "El País / Sandfall · Indie Game Awards -päätös · 2025",
    notes: [
      "Älä sano, että peli tehtiin AI:lla tai että kyse oli varmasti yhdestä kuvasta.",
      "Palkinnot vedettiin takaisin, koska järjestäjän sääntö kielsi GenAI:n ja hakuvaiheen no-AI-ilmoitus oli osa ongelmaa.",
    ],
    sources: [
      { label: "El País: Sandfall-haastattelu ja täsmennys", url: sourceUrls.clair },
      { label: "PC Gamer: Indie Game Awards -päätös", url: sourceUrls.clairAwards },
    ],
    content: (
      <div className="timeline-layout">
        <Kicker>Clair Obscur: Expedition 33</Kicker>
        <h1>Kokeilu muuttui seuraukseksi.</h1>
        <ol className="timeline">
          <li><span>2022</span><strong>Placeholder-kokeilu</strong></li>
          <Reveal at={1}><li><span>2025</span><strong>Jäi julkaisuun</strong></li></Reveal>
          <Reveal at={2}><li><span>+5 päivää</span><strong>Korvattiin</strong></li></Reveal>
          <Reveal at={3}><li><span>joulukuu</span><strong>Palkinnot takaisin</strong></li></Reveal>
        </ol>
      </div>
    ),
  },
  {
    id: "where-failed",
    title: "Missä virhe tapahtui?",
    section: "Ruutu",
    sectionKey: "ruutu",
    steps: 3,
    notes: [
      "Anna yleisön vastata. Oikeita arviointitasoja on useita.",
      "Tämän dian tehtävä on näyttää, miksi pelkkä käytettiinkö AI:ta on liian karkea kysymys.",
    ],
    content: (
      <div className="failure-layout">
        <BigQuestion>Missä virhe tapahtui?</BigQuestion>
        <div className="failure-options">
          <Reveal at={1}><span>kokeilussa?</span></Reveal>
          <Reveal at={2}><span>QA:ssa?</span></Reveal>
          <Reveal at={2}><span>kertomisessa?</span></Reveal>
          <Reveal at={3}><span>sääntöihin sitoutumisessa?</span></Reveal>
        </div>
      </div>
    ),
  },
  {
    id: "four-questions",
    title: "Kysy tarkemmin",
    section: "Ruutu",
    sectionKey: "ruutu",
    steps: 2,
    notes: [
      "Kokoa tähän vain neljä kysymystä. Älä pidä uutta miniluentoa.",
      "Päätä Live Voting -istunto tämän jälkeen ja siirry taukoon.",
    ],
    content: (
      <div className="question-list-layout">
        <Kicker>“Käytettiinkö AI:ta?” ei vielä riitä</Kicker>
        <h1>Kysy tarkemmin.</h1>
        <div className="question-list">
          <Reveal at={1}><p><span>01</span>Mihin sitä käytettiin?</p></Reveal>
          <Reveal at={1}><p><span>02</span>Mitä päätyi pelaajalle?</p></Reveal>
          <Reveal at={2}><p><span>03</span>Kenen aineistoa tai työtä se kosketti?</p></Reveal>
          <Reveal at={2}><p><span>04</span>Kuka valitsi, kertoi ja vastaa?</p></Reveal>
        </div>
      </div>
    ),
  },
  {
    id: "break",
    title: "Tauko",
    section: "Tauko",
    sectionKey: "kadet",
    steps: 0,
    notes: [
      "Käynnistä ajastin vasta, kun tauko alkaa. Tauko kestää täydet 15 minuuttia.",
      "Varmista ennen tapahtumaa, että työpajan URL ja QR-kuva on asetettu ympäristömuuttujiin ja testattu tapahtumaverkossa.",
    ],
    content: <BreakSlide />,
  },
  {
    id: "workshop-rules",
    title: "Yksi ruutu. Yksi mekaniikka. Yksi vitsi.",
    section: "Kädet",
    sectionKey: "kadet",
    steps: 2,
    notes: [
      "Tämä ei ole kilpailu eikä ohjelmointitaidon koe. AI:n käyttö on näkyvä osa menetelmää.",
      "Kerro ennen ensimmäistä promptia, mitä tallennetaan, mille palvelulle sisältö lähetetään ja milloin tiedot poistetaan.",
    ],
    content: (
      <div className="workshop-opening">
        <SectionMarker index="03" label="KÄDET" />
        <h1>Yksi ruutu.<br />Yksi mekaniikka.<br /><em>Yksi vitsi.</em></h1>
        <Reveal at={1} className="workshop-lead"><p className="lead">Tavoite on pelattava ajatus, ei valmis peli.</p></Reveal>
        <Reveal at={2} className="workshop-portal">
          <ExternalPortal
            href={links.workshop}
            eyebrow="AI Workshop Playground"
            title="Valitse PELI + MUOKKAA"
            action={links.workshop ? "Avaa työpaja" : "Työpaja avataan yhteisestä osoitteesta"}
          />
        </Reveal>
      </div>
    ),
  },
  {
    id: "same-prompt",
    title: "Sama prompti ei ole resepti",
    section: "Kädet",
    sectionKey: "kadet",
    steps: 2,
    notes: [
      "Näytä kaksi etukäteen tehtyä protoa samasta promptista.",
      "Kysy, mitkä erot tulivat promptista ja mitkä mallin omista valinnoista.",
    ],
    content: (
      <div className="branch-layout">
        <Kicker>Sama pyyntö, eri versio</Kicker>
        <h1>Sama prompti ei ole resepti.</h1>
        <div className="branches">
          <Reveal at={1}><div><span>A</span><strong>nopea · kirkas · helppo</strong></div></Reveal>
          <Reveal at={2}><div><span>B</span><strong>hidas · outo · vaikea</strong></div></Reveal>
        </div>
      </div>
    ),
  },
  {
    id: "round-one",
    title: "Tee ensimmäinen versio",
    section: "Kädet · kierros 1",
    sectionKey: "kadet",
    steps: 2,
    notes: [
      "Anna noin 10 minuuttia. Ensimmäistä versiota ei arvostella eikä juhlita valmiina pelinä.",
      "Esiintyjä tekee rinnalla yhteistä live-protoa yleisön ehdotuksista.",
    ],
    content: (
      <div className="round-layout">
        <Kicker>Kierros 1 · tee versio</Kicker>
        <h1>Tee se olemassa olevaksi.</h1>
        <Reveal at={1}>
          <div className="prompt-template">
            <p>Pelaaja on <span>[hahmo tai asia]</span>.</p>
            <p>Se yrittää <span>[tavoite]</span>.</p>
            <p>Se <span>[väistää / kerää / ampuu]</span> <span>[asiaa]</span>.</p>
            <p>Tunnelma on <span>[tunne tai tyyli]</span>.</p>
          </div>
        </Reveal>
        <Reveal at={2}><p className="round-message">Nyt meillä on jotakin pelattavaa. Se ei vielä tarkoita, että siinä on kiinnostava päätös.</p></Reveal>
      </div>
    ),
  },
  {
    id: "round-two",
    title: "Tee pelillinen valinta",
    section: "Kädet · kierros 2",
    sectionKey: "kadet",
    steps: 3,
    notes: [
      "Testaa ensin. Tunnista yksi ongelma ja pyydä tarvittaessa kolme vaihtoehtoa.",
      "Osallistuja valitsee yhden ja pyytää toteuttamaan vain sen.",
    ],
    content: (
      <div className="workshop-cycle">
        <Kicker>Kierros 2 · tee pelillinen valinta</Kicker>
        <h1>Nyt päätät, mitä peli yrittää olla.</h1>
        <div className="cycle">
          <Reveal at={1}><span>KYSY</span></Reveal>
          <Reveal at={2} className="cycle-stage"><b>→</b><span>VALITSE</span></Reveal>
          <Reveal at={3} className="cycle-stage"><b>→</b><span>MUOKKAA + TESTAA</span></Reveal>
        </div>
        <p className="lead">Älä pyydä AI:ta päättämään, mikä peli on hyvä.</p>
      </div>
    ),
  },
  {
    id: "round-three",
    title: "Tee tietoinen rajaus",
    section: "Kädet · kierros 3",
    sectionKey: "kadet",
    steps: 2,
    notes: [
      "Jokainen lisää yhden henkilökohtaisen rajauksen. Sen pitää vaikuttaa mekaniikkaan, kirjoitukseen tai tyyliin — ei vain väriin.",
      "Älä kehystä tätä AI vastaan ihminen -taisteluksi. Kiinnostava asia on tekijän päätös.",
    ],
    content: (
      <div className="your-game-layout">
        <Kicker>Kierros 3 · tee tietoinen rajaus</Kicker>
        <h1>Tee siitä tunnistettavasti sinun.</h1>
        <Reveal at={1}><p className="your-game-words">oma vitsi · Kuopio · huono kokemus · outo sääntö</p></Reveal>
        <Reveal at={2}><blockquote>“Poista geneerinen tunnelma. Tee tästä tunnistettavan suomalainen muuttamatta päämekaniikkaa.”</blockquote></Reveal>
      </div>
    ),
  },
  {
    id: "showcase",
    title: "Näytä erot, älä voittajia",
    section: "Kädet · purku",
    sectionKey: "kadet",
    steps: 2,
    notes: [
      "Näytä ensin vieruskaverille. Ota lavalle enintään 1–3 vapaaehtoista.",
      "Valitse erilaisia päätöksiä, ei teknisesti hienoimpia pelejä. Jakolinkki vain tekijän suostumuksella.",
    ],
    content: (
      <div className="reflection-layout">
        <Kicker>Näytä ensin vieruskaverille</Kicker>
        <h1>Näytä erot, älä voittajia.</h1>
        <div className="reflection-questions">
          <Reveal at={1}><p>Minkä <strong>päätöksen</strong> teit itse?</p></Reveal>
          <Reveal at={2}><p>Mitä muuttui, kun <strong>testasit</strong> sitä?</p></Reveal>
        </div>
      </div>
    ),
  },
  {
    id: "recap",
    title: "Mitä jäi käteen?",
    section: "Lopetus",
    sectionKey: "lopetus",
    steps: 3,
    notes: [
      "Palaa kolmeen havaintoon, ei kuuteen selviytymissääntöön.",
      "Älä vaadi mielipiteen muuttumista. Tarkempi erimielisyys on onnistunut lopputulos.",
    ],
    content: (
      <div className="recap-layout">
        <Kicker>Lopetus</Kicker>
        <h1>Mitä jäi käteen?</h1>
        <div className="recap-lines">
          <Reveal at={1}><p><span>HUONE</span>Helpompi ei automaattisesti tarkoittanut parempaa.</p></Reveal>
          <Reveal at={2}><p><span>RUUTU</span>Käyttötapa, näkyvyys ja vastuu muuttivat arviota.</p></Reveal>
          <Reveal at={3}><p><span>KÄDET</span>Ensimmäinen versio syntyi nopeasti. Päätös muutti sitä eniten.</p></Reveal>
        </div>
      </div>
    ),
  },
  {
    id: "final",
    title: "Kaikki ei ollut ohi",
    section: "Lopetus",
    sectionKey: "lopetus",
    steps: 2,
    notes: ["Jätä viimeinen lause näkyviin. Älä vaihda yleiseen kiitos-diaa."],
    content: (
      <div className="final-layout">
        <p>Tekoäly voi tehdä ensimmäisen version.</p>
        <Reveal at={1}><h1>Peli alkaa siitä, että joku päättää, mitä versiolla tehdään — ja seisoo valintojensa takana.</h1></Reveal>
        <Reveal at={2}><p className="final-answer">Kaikki ei ollut ohi. Ensimmäinen versio vasta alkoi.</p></Reveal>
      </div>
    ),
  },
];

type DeckPosition = {
  index: number;
  step: number;
};

function getPositionFromHash(): DeckPosition {
  const [rawSlide, rawStep] = window.location.hash.slice(1).split("/");
  const byId = slides.findIndex((slide) => slide.id === rawSlide);
  const numericSlide = Number.parseInt(rawSlide, 10);
  const index = byId >= 0
    ? byId
    : Number.isFinite(numericSlide)
      ? Math.min(slides.length - 1, Math.max(0, numericSlide - 1))
      : 0;
  const parsedStep = Number.parseInt(rawStep, 10);
  const step = Number.isFinite(parsedStep) ? Math.min(slides[index].steps, Math.max(0, parsedStep)) : 0;
  return { index, step };
}

function isInteractiveTarget(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest("a, button, input, textarea, select, [role='button']"));
}

export function Presentation() {
  const initial = useMemo(getPositionFromHash, []);
  const [index, setIndex] = useState(initial.index);
  const [step, setStep] = useState(initial.step);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [notesOpen, setNotesOpen] = useState(false);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const transitionTimer = useRef<number | null>(null);
  const pointerStart = useRef<number | null>(null);

  const goTo = useCallback((nextIndex: number, nextStep = 0) => {
    const boundedIndex = Math.min(slides.length - 1, Math.max(0, nextIndex));
    const boundedStep = Math.min(slides[boundedIndex].steps, Math.max(0, nextStep));
    if (boundedIndex === index) {
      setStep(boundedStep);
      return;
    }
    if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
    setDirection(boundedIndex > index ? 1 : -1);
    setPreviousIndex(index);
    setIndex(boundedIndex);
    setStep(boundedStep);
    setOverviewOpen(false);
    transitionTimer.current = window.setTimeout(() => setPreviousIndex(null), 320);
  }, [index]);

  const next = useCallback(() => {
    if (step < slides[index].steps) setStep((current) => current + 1);
    else if (index < slides.length - 1) goTo(index + 1, 0);
  }, [goTo, index, step]);

  const previous = useCallback(() => {
    if (step > 0) setStep((current) => current - 1);
    else if (index > 0) goTo(index - 1, slides[index - 1].steps);
  }, [goTo, index, step]);

  const toggleFullscreen = useCallback(() => {
    void (document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen());
  }, []);

  useEffect(() => {
    const suffix = step > 0 ? `/${step}` : "";
    window.history.replaceState(null, "", `#${slides[index].id}${suffix}`);
  }, [index, step]);

  useEffect(() => {
    const onHashChange = () => {
      const position = getPositionFromHash();
      goTo(position.index, position.step);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [goTo]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setNotesOpen(false);
        setOverviewOpen(false);
        setHelpOpen(false);
        return;
      }
      if (isInteractiveTarget(event.target)) return;
      if (["ArrowRight", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        next();
      } else if (["ArrowLeft", "PageUp"].includes(event.key)) {
        event.preventDefault();
        previous();
      } else if (event.key === "Home") {
        event.preventDefault();
        goTo(0, 0);
      } else if (event.key === "End") {
        event.preventDefault();
        goTo(slides.length - 1, slides.at(-1)?.steps ?? 0);
      } else if (event.key.toLowerCase() === "n") {
        setNotesOpen((value) => !value);
      } else if (event.key.toLowerCase() === "o") {
        setOverviewOpen((value) => !value);
      } else if (event.key === "?") {
        setHelpOpen((value) => !value);
      } else if (event.key.toLowerCase() === "f") {
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goTo, next, previous, toggleFullscreen]);

  useEffect(() => () => {
    if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
  }, []);

  const current = slides[index];
  const previousSlide = previousIndex === null ? null : slides[previousIndex];
  const progress = ((index + (current.steps > 0 ? step / (current.steps + 1) : 0)) / slides.length) * 100;
  const slideNumber = `${String(index + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  const revealNumber = current.steps > 0 ? `${step} / ${current.steps}` : null;

  return (
    <main
      className="deck"
      data-section={current.sectionKey}
      onPointerDown={(event) => {
        if (!isInteractiveTarget(event.target)) pointerStart.current = event.clientX;
      }}
      onPointerUp={(event) => {
        if (pointerStart.current === null) return;
        const distance = event.clientX - pointerStart.current;
        pointerStart.current = null;
        if (Math.abs(distance) < 70) return;
        if (distance < 0) next();
        else previous();
      }}
    >
      <div
        className="slide-shell"
        onDoubleClick={toggleFullscreen}
        onClick={(event) => {
          if (isInteractiveTarget(event.target)) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          const x = event.clientX - bounds.left;
          if (x < bounds.width * 0.2) previous();
          else if (x > bounds.width * 0.8) next();
        }}
      >
        {previousSlide && (
          <SlideCanvas
            slide={previousSlide}
            step={previousSlide.steps}
            className={`slide-layer slide-layer--exit ${direction > 0 ? "is-next" : "is-previous"}`}
          />
        )}
        <SlideCanvas
          slide={current}
          step={step}
          className={`slide-layer ${previousSlide ? `slide-layer--enter ${direction > 0 ? "is-next" : "is-previous"}` : ""}`}
        />

        <div className="deck-meta" aria-hidden="true">
          <span>{current.section}</span>
          <span className="tabular">{slideNumber}{revealNumber ? ` · ${revealNumber}` : ""}</span>
        </div>

        <nav className="deck-controls" aria-label="Esityksen navigointi">
          <button type="button" onClick={previous} disabled={index === 0 && step === 0} aria-label="Edellinen paljastus tai dia">←</button>
          <button type="button" onClick={() => setOverviewOpen(true)} aria-label="Avaa dianäkymä">•••</button>
          <button
            type="button"
            onClick={next}
            disabled={index === slides.length - 1 && step === current.steps}
            aria-label="Seuraava paljastus tai dia"
          >→</button>
        </nav>

        <button className="notes-toggle" type="button" onClick={() => setNotesOpen((value) => !value)} aria-label="Näytä puhujamuistiinpanot">N</button>

        <div className="progress-track" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
      </div>

      {notesOpen && (
        <aside className="notes-panel" aria-label="Puhujamuistiinpanot">
          <header>
            <div><span>{slideNumber}</span><h2>{current.title}</h2></div>
            <button type="button" onClick={() => setNotesOpen(false)} aria-label="Sulje muistiinpanot">×</button>
          </header>
          <ul>{current.notes.map((note) => <li key={note}>{note}</li>)}</ul>
          {current.sources && current.sources.length > 0 && (
            <div className="notes-sources">
              <strong>[Sources]</strong>
              {current.sources.map((source) => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.label}</a>)}
            </div>
          )}
        </aside>
      )}

      {overviewOpen && (
        <div className="overlay" role="dialog" aria-modal="true" aria-label="Kaikki diat">
          <header className="overlay-header">
            <div><span>Esitysnäkymä</span><h2>Kaikki diat</h2></div>
            <button type="button" onClick={() => setOverviewOpen(false)} aria-label="Sulje dianäkymä">×</button>
          </header>
          <div className="overview-grid">
            {slides.map((slide, slideIndex) => (
              <button
                type="button"
                className={slideIndex === index ? "is-current" : ""}
                onClick={() => goTo(slideIndex, 0)}
                key={slide.id}
              >
                <span className="tabular">{String(slideIndex + 1).padStart(2, "0")}</span>
                <small>{slide.section}</small>
                <strong>{slide.title}</strong>
              </button>
            ))}
          </div>
        </div>
      )}

      {helpOpen && (
        <div className="help-panel" role="dialog" aria-modal="true" aria-label="Näppäinohjeet">
          <button type="button" onClick={() => setHelpOpen(false)} aria-label="Sulje ohje">×</button>
          <h2>Näppäimet</h2>
          <dl>
            <div><dt>← → / Space</dt><dd>paljastus tai dia</dd></div>
            <div><dt>O</dt><dd>kaikki diat</dd></div>
            <div><dt>N</dt><dd>puhujamuistiinpanot</dd></div>
            <div><dt>F</dt><dd>koko näyttö</dd></div>
            <div><dt>?</dt><dd>tämä ohje</dd></div>
          </dl>
        </div>
      )}

      <button className="help-toggle" type="button" onClick={() => setHelpOpen(true)} aria-label="Avaa näppäinohjeet">?</button>
    </main>
  );
}

function SlideCanvas({ slide, step, className }: { slide: Slide; step: number; className: string }) {
  return (
    <section className={className} aria-label={slide.title}>
      <RevealStepContext.Provider value={step}>
        <div className="slide-content">{slide.content}</div>
      </RevealStepContext.Provider>
      {slide.sourceLine && <p className="source-line">{slide.sourceLine}</p>}
    </section>
  );
}
