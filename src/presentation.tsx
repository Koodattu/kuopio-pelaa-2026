import {
  type ReactNode,
  useCallback,
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

type Theme = "night" | "violet" | "signal" | "ember" | "paper";

type Source = {
  label: string;
  url: string;
};

type Slide = {
  id: string;
  title: string;
  section: string;
  theme: Theme;
  sourceLine?: string;
  notes: string[];
  sources?: Source[];
  content: ReactNode;
};

const links = {
  liveVoting: import.meta.env.VITE_LIVE_VOTING_URL as string | undefined,
  suomiWow: "https://suomiwow.vaarattu.tv/ccg",
  workshop: import.meta.env.VITE_WORKSHOP_URL as string | undefined,
};

const sourceUrls = {
  gdc: "https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/",
  quantic: "https://quanticfoundry.com/2025/12/18/gen-ai/",
  steam:
    "https://partner.steamgames.com/doc/gettingstarted/contentsurvey?language=english",
  clair:
    "https://elpais.com/cultura/2025-06-28/la-revolucion-creativa-low-cost-cuando-la-tecnologia-pone-el-arte-al-alcance-de-todos.html",
  clairAwards:
    "https://www.pcgamer.com/games/rpg/indie-game-awards-pulls-two-awards-from-clair-obscur-over-generative-ai-use-we-have-a-hard-stance-against-gen-ai-in-videogames/",
};

function Kicker({ children }: { children: ReactNode }) {
  return <p className="kicker stagger-1">{children}</p>;
}

function BigQuestion({ children }: { children: ReactNode }) {
  return <h1 className="display-question stagger-2">{children}</h1>;
}

function SourceLine({ children }: { children: ReactNode }) {
  return <p className="source-line">{children}</p>;
}

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
    <div className="portal stagger-2">
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
  { name: "Käyttää työssään", value: 36, color: "var(--accent)" },
  { name: "Näkee vaikutuksen kielteisenä", value: 52, color: "var(--danger)" },
];

function AgreementChart() {
  return (
    <div className="chart chart--vertical stagger-3" aria-label="GDC 2026: 36 prosenttia käyttää generatiivista AI:ta työssään ja 52 prosenttia arvioi sen vaikutuksen kielteiseksi">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={agreementData} margin={{ top: 48, right: 24, bottom: 18, left: 24 }}>
          <CartesianGrid vertical={false} stroke="var(--chart-grid)" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--muted)", fontSize: 18 }}
            interval={0}
          />
          <YAxis domain={[0, 100]} hide />
          <Bar dataKey="value" radius={[14, 14, 3, 3]} maxBarSize={170} isAnimationActive animationDuration={680}>
            {agreementData.map((entry) => (
              <Cell fill={entry.color} key={entry.name} />
            ))}
            <LabelList
              dataKey="value"
              position="top"
              fill="var(--text)"
              fontSize={38}
              fontWeight={800}
              formatter={(value: unknown) => `${String(value)} %`}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

const usesData = [
  { label: "Tutkimus / ideointi · 81 %", value: 81 },
  { label: "Arjen tehtävät · 47 %", value: 47 },
  { label: "Koodiapu · 47 %", value: 47 },
  { label: "Prototypointi · 35 %", value: 35 },
];

function UsesChart() {
  return (
    <div className="chart chart--horizontal stagger-3" aria-label="GDC 2026: generatiivisen AI:n käyttötavat työssä">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={usesData}
          layout="vertical"
          margin={{ top: 4, right: 34, bottom: 4, left: 10 }}
        >
          <CartesianGrid horizontal={false} stroke="var(--chart-grid)" />
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis
            type="category"
            dataKey="label"
            width={250}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--text)", fontSize: 18 }}
          />
          <Bar dataKey="value" fill="var(--accent)" radius={[0, 12, 12, 0]} barSize={30} isAnimationActive animationDuration={720}>
            {usesData.map((entry, index) => (
              <Cell
                fill={index === usesData.length - 1 ? "var(--human)" : "var(--accent)"}
                key={entry.label}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

const reactionData = [
  { label: "AI-dialogi · 83 %", value: 83 },
  { label: "AI-questit · 77 %", value: 77 },
  { label: "Dynaaminen vaikeus · noin 50 %", value: 50 },
];

function ReactionChart() {
  return (
    <div className="chart chart--horizontal stagger-3" aria-label="Quantic Foundry 2025: kielteinen suhtautuminen kolmeen generatiivisen AI:n käyttötapaan">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={reactionData}
          layout="vertical"
          margin={{ top: 10, right: 36, bottom: 10, left: 10 }}
        >
          <CartesianGrid horizontal={false} stroke="var(--chart-grid)" />
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis
            type="category"
            dataKey="label"
            width={300}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--text)", fontSize: 18 }}
          />
          <Bar dataKey="value" radius={[0, 12, 12, 0]} barSize={32} isAnimationActive animationDuration={720}>
            {reactionData.map((entry, index) => (
              <Cell
                fill={index === reactionData.length - 1 ? "var(--muted-strong)" : "var(--danger)"}
                key={entry.label}
              />
            ))}
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
    const timer = window.setInterval(() => {
      setRemaining((current) => Math.max(0, current - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [remaining, running]);

  const minutes = Math.floor(remaining / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (remaining % 60).toString().padStart(2, "0");

  return (
    <div className="break-layout">
      <div>
        <Kicker>15 minuutin tauko</Kicker>
        <h1 className="break-title stagger-2">Palataan tekemään peli.</h1>
        <p className="lead stagger-3">Voit avata työpajan jo valmiiksi puhelimella tai läppärillä.</p>
        <div className="break-actions stagger-4">
          <button type="button" onClick={() => setRunning((value) => !value)}>
            {running ? "Pysäytä" : remaining === duration ? "Käynnistä ajastin" : "Jatka"}
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
      <div className="break-clock tabular" aria-label={`${minutes} minuuttia ja ${seconds} sekuntia jäljellä`}>
        {minutes}:{seconds}
      </div>
    </div>
  );
}

const slides: Slide[] = [
  {
    id: "title",
    title: "Tekoäly tuli",
    section: "Kuopio Pelaa 2026",
    theme: "night",
    notes: [
      "Aloita rauhassa. Otsikko saa olla ylidramaattinen, puheen ei tarvitse.",
      "Esittäydy yhdellä lauseella. Älä näytä ohjelman rakennetta vielä.",
    ],
    content: (
      <div className="hero-layout">
        <Kicker>Kuopio Pelaa 2026</Kicker>
        <h1 className="hero-title stagger-2">
          Tekoäly tuli
          <span>nyt kaikki on ohi...</span>
          <em>vai onko?</em>
        </h1>
        <p className="hero-foot stagger-4">Esitys, live-gallup ja peliprototyyppityöpaja</p>
      </div>
    ),
  },
  {
    id: "association",
    title: "Mitä tekoäly tuo mieleen?",
    section: "Avaus",
    theme: "night",
    notes: [
      "Kysy yleisöltä ja ota 2–4 nopeaa huudahdusta.",
      "Älä korjaa vastauksia. Odota hetki ennen seuraavaa diaa.",
    ],
    content: (
      <div className="center-layout">
        <Kicker>Ensimmäinen ajatus</Kicker>
        <BigQuestion>
          Kun sanon <span className="accent">tekoäly</span>, mitä tulee ensimmäisenä mieleen?
        </BigQuestion>
      </div>
    ),
  },
  {
    id: "chatgpt",
    title: "Miksi juuri ChatGPT?",
    section: "Avaus",
    theme: "night",
    notes: [
      "Jos joku sanoi ChatGPT, kysy miksi juuri se. Jos ei, paljasta tämä silti.",
      "Älä vielä pidä AI/GenAI-luentoa. Luo vain epäilys siitä, puhummeko samasta asiasta.",
    ],
    content: (
      <div className="chatgpt-layout">
        <span className="chatgpt-word stagger-1">ChatGPT</span>
        <h1 className="stagger-2">Miksi juuri tästä tuli monelle koko tekoälyn synonyymi?</h1>
      </div>
    ),
  },
  {
    id: "gallup",
    title: "Mitä tämä huone ajattelee?",
    section: "Live-gallup",
    theme: "night",
    notes: [
      "Vaihda tästä Live Voting -sovelluksen julkiseen Presentation Displayhin.",
      "Kymmenen kysymystä muodostaa viisi paria. Kommentoi vain parien eroja.",
      "Tavoite: takaisin esitykseen viimeistään minuutilla 20.",
    ],
    content: (
      <div className="split-layout split-layout--gallup">
        <div>
          <Kicker>10 nopeaa kysymystä · 5 paria</Kicker>
          <h1 className="stagger-2">Mitä tämä huone ajattelee?</h1>
          <p className="lead stagger-3">Vastaa nopeasti. Mielipidettä ei tarvitse puolustaa.</p>
        </div>
        <ExternalPortal
          href={links.liveVoting}
          eyebrow="Live Voting"
          title="Ota puhelin esiin"
          action={links.liveVoting ? "Avaa äänestys" : "Äänestys avataan erilliseen näkymään"}
        />
      </div>
    ),
  },
  {
    id: "ai-genai",
    title: "AI ei tarkoita vain generointia",
    section: "Tekijän työpöytä",
    theme: "violet",
    notes: [
      "Selitä AI yläkäsitteenä ja GenAI sen osana.",
      "Tämä ei ole gotcha AI-kriitikoille. Eri käyttötavoilla on eri seuraukset.",
    ],
    content: (
      <div className="definition-layout">
        <div className="definition-main stagger-1">
          <span>AI</span>
          <p>ennustaa · suosittelee · tunnistaa · järjestää · generoi</p>
        </div>
        <div className="definition-sub stagger-3">
          <span>GenAI</span>
          <p>tuottaa uutta tekstiä, kuvaa, ääntä, videota tai koodia</p>
        </div>
      </div>
    ),
  },
  {
    id: "before-chatgpt",
    title: "AI ei alkanut ChatGPT:stä",
    section: "Tekijän työpöytä",
    theme: "violet",
    notes: [
      "Nimeä esimerkit nopeasti. Älä rakenna historiakatsausta.",
      "Sido arjen algoritmit ja peleissä pitkään käytetyt menetelmät samaan yläkäsitteeseen.",
    ],
    content: (
      <div className="statement-layout">
        <Kicker>Se oli jo valitsemassa, mitä näet</Kicker>
        <h1 className="stagger-2">AI ei alkanut ChatGPT:stä.</h1>
        <div className="word-stream stagger-3" aria-label="Esimerkkejä tekoälyn käyttötavoista">
          <span>YouTube</span>
          <span>TikTok</span>
          <span>matchmaking</span>
          <span>NPC:t</span>
          <span>proseduraaliset kentät</span>
        </div>
      </div>
    ),
  },
  {
    id: "use-vs-approval",
    title: "Käyttö ei tarkoita hyväksyntää",
    section: "Tekijän työpöytä",
    theme: "violet",
    sourceLine: "GDC State of the Game Industry 2026 · yli 2 300 vastaajaa · erilliset kysymykset",
    notes: [
      "Näytä käyttö ensin ja kielteinen vaikutusarvio vasta sen jälkeen.",
      "Älä väitä, että samat 36 prosenttia kuuluvat kielteiseen 52 prosenttiin.",
      "Nosta 7 % myönteinen arvio puheessa, ei kolmantena samanarvoisena pylväänä.",
    ],
    sources: [{ label: "GDC State of the Game Industry 2026", url: sourceUrls.gdc }],
    content: (
      <div className="chart-layout">
        <div className="chart-copy">
          <Kicker>Sama ala, kaksi eri mittaria</Kicker>
          <h1 className="stagger-2">Käyttö ei tarkoita hyväksyntää.</h1>
          <p className="chart-callout stagger-4"><strong>7 %</strong> arvioi vaikutuksen myönteiseksi.</p>
        </div>
        <AgreementChart />
      </div>
    ),
  },
  {
    id: "actual-uses",
    title: "Ensin vaihtoehtoja, vasta sitten peli",
    section: "Tekijän työpöytä",
    theme: "violet",
    sourceLine: "GDC 2026 · osuus GenAI:ta työssään käyttävistä · monivalinta",
    notes: [
      "Korosta, että nimittäjä on GenAI:ta työssään käyttävät, ei koko peliala.",
      "Prototypointi johdattaa työpajaan, mutta suurin luokka on tutkimus/ideointi.",
    ],
    sources: [{ label: "GDC State of the Game Industry 2026", url: sourceUrls.gdc }],
    content: (
      <div className="chart-layout chart-layout--wide">
        <div className="chart-copy">
          <Kicker>Mihin työkalua käytetään?</Kicker>
          <h1 className="stagger-2">Ensin vaihtoehtoja, vasta sitten peli.</h1>
        </div>
        <UsesChart />
      </div>
    ),
  },
  {
    id: "easier-better",
    title: "Helpompi ei tarkoita parempaa",
    section: "Tekijän työpöytä",
    theme: "violet",
    notes: [
      "Palaa gallupin helpompi/parempi-pariin sanallisesti.",
      "Kerro omasta työstä: kirjoittaminen voi vähentyä, mutta määrittely, arviointi, testaus ja vastuu eivät.",
    ],
    content: (
      <div className="two-paths-layout">
        <Kicker>Kun ensimmäinen versio syntyy nopeammin</Kicker>
        <h1 className="stagger-2">Helpompi ei tarkoita parempaa.</h1>
        <div className="two-paths stagger-3">
          <div>
            <span>idea → toimiva versio</span>
            <strong>AI voi lyhentää matkaa</strong>
          </div>
          <div>
            <span>toimiva versio → hyvä peli</span>
            <strong>valinnat eivät katoa</strong>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "suomiwow-intro",
    title: "Kun raididata muuttui leikiksi",
    section: "SuomiWoW",
    theme: "signal",
    notes: [
      "Kerro SuomiWoWista yksi lause ja siirry nopeasti CCG:n syntyyn.",
      "Älä luettele teknologiapinoa tai koko palvelun ominaisuuksia.",
    ],
    content: (
      <div className="suomiwow-layout">
        <Kicker>SuomiWoW CCG</Kicker>
        <h1 className="stagger-2">Kun raididata muuttui leikiksi.</h1>
        <p className="lead stagger-3">Yhteisön oikea historia pakassa, kortissa ja kokoelmassa.</p>
        <div className="card-fan stagger-4" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    ),
  },
  {
    id: "suomiwow-demo",
    title: "SuomiWoW-live-demo",
    section: "SuomiWoW",
    theme: "signal",
    notes: [
      "Vaihda tuotantosivulle. Avaa yksi pakka, yksi kortti ja kokoelma.",
      "Jos sivu ei reagoi 30 sekunnissa, vaihda tallenteeseen.",
    ],
    content: (
      <div className="portal-layout">
        <Kicker>Live-demo · enintään 8 minuuttia</Kicker>
        <h1 className="stagger-2">Yksi pakka. Yksi kortti. Yksi tarina.</h1>
        <ExternalPortal
          href={links.suomiWow}
          eyebrow="suomiwow.vaarattu.tv"
          title="SuomiWoW CCG"
          action="Avaa live-demo"
        />
      </div>
    ),
  },
  {
    id: "meaning",
    title: "Tekninen mahdollisuus tarvitsee syyn",
    section: "SuomiWoW",
    theme: "signal",
    notes: [
      "Nimeä, mitä geneerinen tekninen kyvykkyys ei tuonut projektiin itsestään.",
      "Käännä lopuksi näkökulma tekijän työpöydältä pelaajan ruudulle.",
    ],
    content: (
      <div className="meaning-layout">
        <h1 className="stagger-1">Koodi tekee ominaisuuden.</h1>
        <p className="meaning-answer stagger-3">Yhteisö, tarkoitus ja valinnat tekevät siitä merkityksellisen.</p>
        <div className="meaning-words stagger-4">
          <span>oikea data</span>
          <span>yhteinen historia</span>
          <span>tuoterajat</span>
          <span>maku</span>
        </div>
      </div>
    ),
  },
  {
    id: "use-case",
    title: "Käyttötapa muuttaa reaktiota",
    section: "Pelaajan ruutu",
    theme: "ember",
    notes: [
      "Palaa tässä Live Votingin viimeiseen pariin: bugit ja dialogi.",
      "Älä selaa kaikkia tuloksia. Pari on jätetty valmiiksi nykyiseksi näkymäksi.",
    ],
    content: (
      <div className="versus-layout">
        <Kicker>Palaa huoneen vastauksiin</Kicker>
        <div className="versus stagger-2">
          <span>bugien korjaaminen</span>
          <b>≠</b>
          <span>dialogin kirjoittaminen</span>
        </div>
        <h1 className="stagger-4">Käyttötapa muuttaa reaktiota.</h1>
      </div>
    ),
  },
  {
    id: "player-reaction",
    title: "Luova sisältö osuu herkempään rajaan",
    section: "Pelaajan ruutu",
    theme: "ember",
    sourceLine: "Quantic Foundry 2025 · n=1 799 · vapaaehtoinen PC/core-painotteinen otos",
    notes: [
      "Kerro otoksen vinoumasta ääneen. Tämä ei edusta kaikkia pelaajia.",
      "Noin 50 % on johdettu myönteisen ja neutraalin osuuksista.",
      "Identiteettiraja: tunnistettavan äänen, kasvojen tai performanssin jäljittely on erillinen suostumus- ja korvauskysymys.",
    ],
    sources: [{ label: "Quantic Foundry: Gamers and GenAI", url: sourceUrls.quantic }],
    content: (
      <div className="chart-layout chart-layout--wide">
        <div className="chart-copy">
          <Kicker>Kielteisesti suhtautuvien osuus</Kicker>
          <h1 className="stagger-2">Luova sisältö osuu herkempään rajaan.</h1>
        </div>
        <ReactionChart />
      </div>
    ),
  },
  {
    id: "steam-boundary",
    title: "Pelaajalle asti päätyvä sisältö muuttaa vastuuta",
    section: "Pelaajan ruutu",
    theme: "ember",
    sourceLine: "Steamworks Content Survey · nykyinen disclosure-raja",
    notes: [
      "Steam ei kohdista disclosure-osiota kaikkeen sisäiseen tehokkuuskäyttöön.",
      "Erota peliin toimitettu pre-generated ja ajon aikana syntyvä live-generated sisältö.",
    ],
    sources: [{ label: "Steamworks Content Survey", url: sourceUrls.steam }],
    content: (
      <div className="boundary-layout">
        <Kicker>Missä pelaajan kannalta olennainen raja kulkee?</Kicker>
        <h1 className="stagger-2">Pelaajalle asti päätyvä sisältö muuttaa vastuuta.</h1>
        <div className="boundary-steps stagger-3">
          <div><span>01</span><strong>Sisäinen apuri</strong><small>työprosessi</small></div>
          <div><span>02</span><strong>Julkaistu sisältö</strong><small>pre-generated</small></div>
          <div><span>03</span><strong>Live-generointi</strong><small>sisältö + guardrailit</small></div>
        </div>
      </div>
    ),
  },
  {
    id: "clair-obscur",
    title: "Missä Clair Obscurin virhe tapahtui?",
    section: "Pelaajan ruutu",
    theme: "ember",
    sourceLine: "El País / Sandfall · Indie Game Awards -päätös · 2025",
    notes: [
      "Älä sano, että peli tehtiin AI:lla tai että kyse oli varmasti yhdestä kuvasta.",
      "Kerro tapahtumaketju tiiviisti ja kysy, missä varsinainen epäonnistuminen tapahtui.",
    ],
    sources: [
      { label: "El País: Sandfall-haastattelu ja täsmennys", url: sourceUrls.clair },
      { label: "PC Gamer: Indie Game Awards -päätös", url: sourceUrls.clairAwards },
    ],
    content: (
      <div className="timeline-layout">
        <Kicker>Clair Obscur: Expedition 33</Kicker>
        <h1 className="stagger-2">Kokeilu → julkaisu → korjaus → seuraus</h1>
        <ol className="timeline stagger-3">
          <li><span>2022</span><strong>Placeholder-kokeilu</strong></li>
          <li><span>2025</span><strong>Jäi julkaisuun</strong></li>
          <li><span>+5 päivää</span><strong>Korvattiin</strong></li>
          <li><span>joulukuu</span><strong>Palkinnot takaisin</strong></li>
        </ol>
      </div>
    ),
  },
  {
    id: "where-failed",
    title: "Missä virhe tapahtui?",
    section: "Pelaajan ruutu",
    theme: "ember",
    notes: [
      "Anna yleisön vastata. Mahdollisia kohtia on useita, eikä yhtä oikeaa tarvitse nimetä.",
      "Tämän dian tehtävä on näyttää, miksi 'käytettiinkö AI:ta' on liian karkea kysymys.",
    ],
    content: (
      <div className="failure-layout">
        <BigQuestion>Missä virhe tapahtui?</BigQuestion>
        <div className="failure-options stagger-3">
          <span>kokeilussa</span>
          <span>QA:ssa</span>
          <span>kertomisessa</span>
          <span>sääntöihin sitoutumisessa</span>
        </div>
      </div>
    ),
  },
  {
    id: "five-questions",
    title: "Kysy tarkemmin kuin käytettiinkö AI:ta",
    section: "Pelaajan ruutu",
    theme: "ember",
    notes: [
      "Kokoa esitys viideksi arviointikysymykseksi.",
      "Päätä Voting Session tämän jälkeen ja siirry taukoon.",
    ],
    content: (
      <div className="five-layout">
        <Kicker>“Käytettiinkö AI:ta?” ei vielä riitä</Kicker>
        <h1 className="stagger-2">Kysy tarkemmin.</h1>
        <ol className="five-list stagger-3">
          <li><span>01</span>Mihin sitä käytettiin?</li>
          <li><span>02</span>Kenen aineistolla ja ehdoilla?</li>
          <li><span>03</span>Kuka teki valinnat?</li>
          <li><span>04</span>Mitä pelaaja kohtaa?</li>
          <li><span>05</span>Kuka kertoo ja vastaa?</li>
        </ol>
      </div>
    ),
  },
  {
    id: "break",
    title: "Tauko",
    section: "Tauko",
    theme: "paper",
    notes: [
      "Käynnistä ajastin vasta kun tauko alkaa.",
      "Pidä tämä näkymä koko 15 minuutin ajan. Työpajan QR-koodi lisätään lopulliseen versioon.",
    ],
    content: <BreakSlide />,
  },
  {
    id: "workshop-rules",
    title: "Yksi ruutu. Yksi mekaniikka. Yksi vitsi.",
    section: "Työpaja",
    theme: "paper",
    notes: [
      "Palauta huone tauolta ja rajaa tehtävä. Tavoite on pelattava ajatus, ei valmis peli.",
      "Avaa Playground ja varmista yhteinen salasana sekä PELI/MUOKKAA-tila.",
    ],
    content: (
      <div className="workshop-opening">
        <Kicker>45 minuutin koe</Kicker>
        <h1 className="stagger-2">Yksi ruutu.<br />Yksi mekaniikka.<br /><em>Yksi vitsi.</em></h1>
        <ExternalPortal
          href={links.workshop}
          eyebrow="AI Workshop Playground"
          title="Tee pelattava ajatus"
          action={links.workshop ? "Avaa työpaja" : "Työpaja avataan erilliseen näkymään"}
        />
      </div>
    ),
  },
  {
    id: "same-prompt",
    title: "Sama prompti ei ole resepti",
    section: "Työpaja",
    theme: "paper",
    notes: [
      "Näytä lopullisessa versiossa kaksi etukäteen generoitua protoa samasta promptista.",
      "Kysy, mitkä erot tulivat promptista ja mitkä mallin omista valinnoista.",
    ],
    content: (
      <div className="branch-layout">
        <Kicker>Sama pyyntö, eri versio</Kicker>
        <h1 className="stagger-2">Sama prompti ei ole resepti.</h1>
        <div className="branches stagger-3">
          <div><span>A</span><strong>nopea · kirkas · helppo</strong></div>
          <div><span>B</span><strong>hidas · outo · vaikea</strong></div>
        </div>
      </div>
    ),
  },
  {
    id: "round-one",
    title: "Tee se olemassa olevaksi",
    section: "Työpaja · kierros 1",
    theme: "paper",
    notes: [
      "Anna noin 10 minuuttia. Ensimmäistä versiota ei arvostella.",
      "Esiintyjä tekee rinnalla yhteistä live-protoa yleisön ehdotuksista.",
    ],
    content: (
      <div className="prompt-layout">
        <Kicker>Kierros 1</Kicker>
        <h1 className="stagger-2">Tee se olemassa olevaksi.</h1>
        <div className="prompt-template stagger-3">
          <p>Pelaaja on <span>[hahmo tai asia]</span>.</p>
          <p>Se yrittää <span>[tavoite]</span>.</p>
          <p>Se <span>[väistää / kerää / ampuu]</span> <span>[asiaa]</span>.</p>
          <p>Tunnelma on <span>[tunne tai tyyli]</span>.</p>
        </div>
      </div>
    ),
  },
  {
    id: "round-two",
    title: "Tee siitä peli",
    section: "Työpaja · kierros 2",
    theme: "paper",
    notes: [
      "Testaa ensin. Tunnista yksi pelisuunnitteluongelma.",
      "Pyydä tarvittaessa kolme vaihtoehtoa, valitse itse yksi ja toteuta vain se.",
    ],
    content: (
      <div className="workshop-cycle">
        <Kicker>Kierros 2</Kicker>
        <h1 className="stagger-2">Nyt lisätään pelisuunnittelua.</h1>
        <div className="cycle stagger-3">
          <span>KYSY</span><b>→</b><span>VALITSE</span><b>→</b><span>MUOKKAA</span><b>→</b><span>TESTAA</span>
        </div>
        <p className="lead stagger-4">Älä pyydä AI:ta päättämään, mikä peli on hyvä.</p>
      </div>
    ),
  },
  {
    id: "round-three",
    title: "Tee siitä sinun",
    section: "Työpaja · kierros 3",
    theme: "paper",
    notes: [
      "Anna noin 10 minuuttia. Jokainen lisää yhden henkilökohtaisen rajauksen.",
      "Rajaus saa vaikuttaa mekaniikkaan, kirjoitukseen tai tyyliin — ei vain väriin.",
    ],
    content: (
      <div className="your-game-layout">
        <Kicker>Kierros 3</Kicker>
        <h1 className="stagger-2">Tee siitä sinun.</h1>
        <div className="your-game-words stagger-3">
          <span>oma vitsi</span>
          <span>Kuopio</span>
          <span>huono kokemus</span>
          <span>outo sääntö</span>
          <span>tarkka tunnelma</span>
          <span>oma pelko</span>
        </div>
      </div>
    ),
  },
  {
    id: "showcase",
    title: "Mitä syntyi?",
    section: "Työpaja · purku",
    theme: "paper",
    notes: [
      "Ensin näyttäminen vieruskaverille, sitten enintään 1–3 vapaaehtoista.",
      "Yksi julkinen esimerkki saa käyttää noin minuutin.",
    ],
    content: (
      <div className="reflection-layout">
        <Kicker>Näytä ensin vieruskaverille</Kicker>
        <h1 className="stagger-2">Mitä syntyi?</h1>
        <div className="reflection-questions stagger-3">
          <p>Mitä AI teki <strong>hyvin?</strong></p>
          <p>Mitä AI teki <strong>typerästi?</strong></p>
          <p>Mitä <strong>sinä</strong> paransit?</p>
        </div>
      </div>
    ),
  },
  {
    id: "prototype-apocalypse",
    title: "Maailmanloppu oli prototyyppi",
    section: "Lopetus",
    theme: "signal",
    notes: [
      "Palaa otsikkoon. Anna yleisön oman kokemuksen tehdä suurin osa johtopäätöksestä.",
      "Älä väitä, että työpaja todisti AI:n hyväksi tai sitä vastaan.",
    ],
    content: (
      <div className="center-layout">
        <Kicker>Kaksi tuntia myöhemmin</Kicker>
        <BigQuestion>
          Maailmanloppu oli <span className="accent">prototyyppi.</span>
        </BigQuestion>
      </div>
    ),
  },
  {
    id: "final",
    title: "AI voi tehdä pelistä olemassa olevan",
    section: "Lopetus",
    theme: "night",
    notes: [
      "Jätä päätöslause näkyviin. Älä vaihda yleiseen kiitos-diaa.",
    ],
    content: (
      <div className="final-layout">
        <p className="stagger-1">AI voi tehdä pelistä olemassa olevan.</p>
        <h1 className="stagger-3">Ihmisen pitää tehdä siitä <em>pelaamisen arvoinen.</em></h1>
      </div>
    ),
  },
];

function getInitialIndex() {
  const hash = window.location.hash.slice(1);
  const byId = slides.findIndex((slide) => slide.id === hash);
  if (byId >= 0) return byId;
  const byNumber = Number.parseInt(hash, 10);
  return Number.isFinite(byNumber)
    ? Math.min(slides.length - 1, Math.max(0, byNumber - 1))
    : 0;
}

export function Presentation() {
  const [index, setIndex] = useState(getInitialIndex);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [notesOpen, setNotesOpen] = useState(false);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const transitionTimer = useRef<number | null>(null);
  const pointerStart = useRef<number | null>(null);

  const goTo = useCallback(
    (nextIndex: number) => {
      const bounded = Math.min(slides.length - 1, Math.max(0, nextIndex));
      if (bounded === index) return;
      if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
      setDirection(bounded > index ? 1 : -1);
      setPreviousIndex(index);
      setIndex(bounded);
      setOverviewOpen(false);
      transitionTimer.current = window.setTimeout(() => setPreviousIndex(null), 360);
    },
    [index],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const previous = useCallback(() => goTo(index - 1), [goTo, index]);
  const toggleFullscreen = useCallback(() => {
    void (document.fullscreenElement
      ? document.exitFullscreen()
      : document.documentElement.requestFullscreen());
  }, []);

  useEffect(() => {
    window.history.replaceState(null, "", `#${slides[index].id}`);
  }, [index]);

  useEffect(() => {
    const onHashChange = () => goTo(getInitialIndex());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [goTo]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLButtonElement ||
        target instanceof HTMLAnchorElement
      ) {
        return;
      }

      if (["ArrowRight", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        next();
      } else if (["ArrowLeft", "PageUp"].includes(event.key)) {
        event.preventDefault();
        previous();
      } else if (event.key === "Home") {
        event.preventDefault();
        goTo(0);
      } else if (event.key === "End") {
        event.preventDefault();
        goTo(slides.length - 1);
      } else if (event.key.toLowerCase() === "n") {
        setNotesOpen((value) => !value);
      } else if (event.key.toLowerCase() === "o") {
        setOverviewOpen((value) => !value);
      } else if (event.key === "?") {
        setHelpOpen((value) => !value);
      } else if (event.key.toLowerCase() === "f") {
        toggleFullscreen();
      } else if (event.key === "Escape") {
        setNotesOpen(false);
        setOverviewOpen(false);
        setHelpOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goTo, next, previous, toggleFullscreen]);

  useEffect(
    () => () => {
      if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
    },
    [],
  );

  const current = slides[index];
  const previousSlide = previousIndex === null ? null : slides[previousIndex];
  const progress = ((index + 1) / slides.length) * 100;

  const slideNumber = useMemo(
    () => `${String(index + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`,
    [index],
  );

  return (
    <div
      className="deck"
      data-theme={current.theme}
      onPointerDown={(event) => {
        pointerStart.current = event.clientX;
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
      <div className="slide-shell" onDoubleClick={toggleFullscreen}>
        {previousSlide && (
          <SlideCanvas
            slide={previousSlide}
            className={`slide-layer slide-layer--exit ${direction > 0 ? "is-next" : "is-previous"}`}
          />
        )}
        <SlideCanvas
          slide={current}
          className={`slide-layer ${previousSlide ? `slide-layer--enter ${direction > 0 ? "is-next" : "is-previous"}` : ""}`}
        />

        <div className="deck-meta" aria-hidden="true">
          <span>{current.section}</span>
          <span className="tabular">{slideNumber}</span>
        </div>

        <div className="deck-controls">
          <button type="button" onClick={previous} disabled={index === 0} aria-label="Edellinen dia">←</button>
          <button type="button" onClick={() => setOverviewOpen(true)} aria-label="Avaa dianäkymä">○</button>
          <button type="button" onClick={next} disabled={index === slides.length - 1} aria-label="Seuraava dia">→</button>
        </div>

        <button className="notes-toggle" type="button" onClick={() => setNotesOpen((value) => !value)}>
          N
        </button>

        <div className="progress-track" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>

      {notesOpen && (
        <aside className="notes-panel" aria-label="Puhujamuistiinpanot">
          <header>
            <div>
              <span>{slideNumber}</span>
              <h2>{current.title}</h2>
            </div>
            <button type="button" onClick={() => setNotesOpen(false)} aria-label="Sulje muistiinpanot">×</button>
          </header>
          <ul>
            {current.notes.map((note) => <li key={note}>{note}</li>)}
          </ul>
          {current.sources && current.sources.length > 0 && (
            <div className="notes-sources">
              <strong>[Sources]</strong>
              {current.sources.map((source) => (
                <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.label}</a>
              ))}
            </div>
          )}
        </aside>
      )}

      {overviewOpen && (
        <div className="overlay" role="dialog" aria-modal="true" aria-label="Kaikki diat">
          <header className="overlay-header">
            <div><span>Prototype overview</span><h2>Kaikki diat</h2></div>
            <button type="button" onClick={() => setOverviewOpen(false)} aria-label="Sulje dianäkymä">×</button>
          </header>
          <div className="overview-grid">
            {slides.map((slide, slideIndex) => (
              <button
                type="button"
                className={slideIndex === index ? "is-current" : ""}
                onClick={() => goTo(slideIndex)}
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
            <div><dt>← → / Space</dt><dd>vaihda diaa</dd></div>
            <div><dt>O</dt><dd>kaikki diat</dd></div>
            <div><dt>N</dt><dd>puhujamuistiinpanot</dd></div>
            <div><dt>F</dt><dd>koko näyttö</dd></div>
            <div><dt>?</dt><dd>tämä ohje</dd></div>
          </dl>
        </div>
      )}

      <button className="help-toggle" type="button" onClick={() => setHelpOpen(true)} aria-label="Avaa näppäinohjeet">?</button>
    </div>
  );
}

function SlideCanvas({ slide, className }: { slide: Slide; className: string }) {
  return (
    <section className={className} aria-label={slide.title}>
      <div className="slide-content">{slide.content}</div>
      {slide.sourceLine && <SourceLine>{slide.sourceLine}</SourceLine>}
    </section>
  );
}
