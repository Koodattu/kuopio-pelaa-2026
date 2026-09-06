import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { slides, StepContext, type Slide } from "./scenes";

type Position = { index: number; step: number };
function boundedPosition(index: number, step: number): Position {
  index = Math.min(slides.length - 1, Math.max(0, Math.floor(index)));
  return { index, step: Math.min(slides[index].steps, Math.max(0, Math.floor(step))) };
}
function readHash(): Position {
  const [id, rawStep] = location.hash.slice(1).split("/");
  const byId = slides.findIndex(slide => slide.id === id);
  const numeric = Number.parseInt(id, 10);
  return boundedPosition(byId >= 0 ? byId : Number.isFinite(numeric) ? numeric - 1 : 0, Number.parseInt(rawStep, 10) || 0);
}
function interactive(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest("a,button,input,textarea,select,video,iframe,dialog"));
}
function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => { const dialog = ref.current!; dialog.showModal(); return () => dialog.close(); }, []);
  return <dialog ref={ref} className="modal" aria-label={title} onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <header><h2>{title}</h2><button onClick={onClose} aria-label="Sulje">×</button></header>{children}
  </dialog>;
}
function Notes({ slide, position }: { slide: Slide; position: Position }) {
  const next = position.step < slide.steps ? "Seuraava sisältövaihe" : slides[position.index + 1]?.title ?? "Esityksen loppu";
  return <div className="speaker-notes"><p className="speaker-time">Tavoiteaika {slide.time}</p><h2>{slide.title}</h2><ul>{slide.notes.map(note => <li key={note}>{note}</li>)}</ul>
    {slide.sources && <div className="speaker-sources"><h3>Lähteet</h3>{slide.sources.map(({ label, url }) => <a key={url} href={url} target="_blank" rel="noreferrer">{label} ↗</a>)}</div>}
    <p className="up-next"><span>Seuraavaksi</span>{next}</p>
  </div>;
}

export function Presentation() {
  const [position, setPosition] = useState(readHash);
  const positionRef = useRef(position);
  const [modal, setModal] = useState<"notes" | "overview" | "help" | null>(null);
  const [blank, setBlank] = useState(false);
  const [message, setMessage] = useState("");
  const channel = useRef<BroadcastChannel | null>(null);
  const pointer = useRef<{ x: number; y: number } | null>(null);
  const isPresenter = new URLSearchParams(location.search).has("presenter");
  const pilot = new URLSearchParams(location.search).get("pilot");
  const current = slides[position.index];
  const goTo = useCallback((index: number, step = 0) => {
    const next = boundedPosition(index, step);
    positionRef.current = next; setPosition(next); setBlank(false); setModal(null);
    channel.current?.postMessage({ type: "position", position: next });
  }, []);
  const next = useCallback(() => {
    const { index, step } = positionRef.current;
    if (step < slides[index].steps) goTo(index, step + 1);
    else if (index < slides.length - 1) goTo(index + 1);
  }, [goTo]);
  const previous = useCallback(() => {
    const { index, step } = positionRef.current;
    if (step > 0) goTo(index, step - 1);
    else if (index > 0) goTo(index - 1, slides[index - 1].steps);
  }, [goTo]);
  const fullscreen = useCallback(() => {
    const request = document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
    void request.catch(() => setMessage("Koko näyttö ei avautunut. Kokeile selaimen F11-näppäintä."));
  }, []);
  const openPresenter = useCallback(() => {
    const url = new URL(location.href); url.searchParams.set("presenter", "1");
    const popup = window.open(url.href, "kuopio-speaker", "popup,width=1440,height=900");
    if (!popup) { setMessage("Salli tämän sivun ponnahdusikkuna avataksesi puhujanäkymän."); setModal("notes"); }
  }, []);
  useEffect(() => {
    if (!("BroadcastChannel" in window)) return;
    const bus = new BroadcastChannel("kuopio-pelaa-presentation-v2"); channel.current = bus;
    bus.onmessage = event => {
      if (event.data?.type === "position") {
        const incoming = event.data.position;
        if (!Number.isFinite(incoming?.index) || !Number.isFinite(incoming?.step)) return;
        const next = boundedPosition(incoming.index, incoming.step);
        positionRef.current = next; setPosition(next); setBlank(false);
      } else if (event.data?.type === "blank") setBlank(Boolean(event.data.blank));
    };
    return () => { bus.close(); channel.current = null; };
  }, []);
  useEffect(() => {
    positionRef.current = position;
    history.replaceState(null, "", `#${current.id}${position.step ? `/${position.step}` : ""}`);
    document.title = `${current.title} · Kuopio Pelaa 2026`;
  }, [position, current]);
  useEffect(() => {
    const handler = () => { const p = readHash(); goTo(p.index, p.step); };
    window.addEventListener("hashchange", handler); return () => window.removeEventListener("hashchange", handler);
  }, [goTo]);
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const navigationKey = ["arrowright", "pagedown", "arrowleft", "pageup", "home", "end"].includes(key);
      const onNavigation = event.target instanceof Element && Boolean(event.target.closest(".deck-controls"));
      if (modal || (interactive(event.target) && !(onNavigation && navigationKey)) || event.altKey || event.ctrlKey || event.metaKey) return;
      if (["arrowright", "pagedown", " "].includes(key)) { event.preventDefault(); next(); }
      else if (["arrowleft", "pageup"].includes(key)) { event.preventDefault(); previous(); }
      else if (key === "home") { event.preventDefault(); goTo(0); }
      else if (key === "end") { event.preventDefault(); goTo(slides.length - 1, slides.at(-1)!.steps); }
      else if (key === "o") setModal("overview");
      else if (key === "n") setModal("notes");
      else if (key === "?") setModal("help");
      else if (key === "f") fullscreen();
      else if (key === "p") openPresenter();
      else if (key === "b") setBlank(value => { channel.current?.postMessage({ type: "blank", blank: !value }); return !value; });
      else if (key === "escape") { setBlank(false); channel.current?.postMessage({ type: "blank", blank: false }); }
    };
    window.addEventListener("keydown", handler); return () => window.removeEventListener("keydown", handler);
  }, [fullscreen, goTo, modal, next, openPresenter, previous]);
  useEffect(() => { if (!message) return; const id = setTimeout(() => setMessage(""), 7000); return () => clearTimeout(id); }, [message]);
  return <main className={`deck ${isPresenter ? "presenter" : ""}`}>
    <div className="stage-wrap"><div className="slide-shell" data-theme={pilot === "paper" || pilot === "ink" ? pilot : current.theme} data-slide={current.id} data-step={position.step}
      onPointerDown={event => { if (!interactive(event.target) && !modal) pointer.current = { x: event.clientX, y: event.clientY }; }}
      onPointerCancel={() => { pointer.current = null; }}
      onPointerUp={event => { const start = pointer.current; pointer.current = null; if (!start) return; const dx = event.clientX - start.x; if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(event.clientY - start.y)) { if (dx < 0) next(); else previous(); } }}>
      <section className="slide-content" key={current.id} aria-label={current.title}><StepContext.Provider value={position.step}>{current.content}</StepContext.Provider></section>
      {current.sourceLine && <p className="source-line">{current.sourceLine}</p>}
      <footer className="slide-footer"><span>{current.section}</span><span>{String(position.index + 1).padStart(2, "0")} / {slides.length}<i aria-label={`Vaihe ${position.step + 1} / ${current.steps + 1}`}>{Array.from({ length: current.steps + 1 }, (_, i) => <b key={i} data-active={i === position.step} />)}</i></span></footer>
      {blank && <div className="blank-screen" aria-label="Esitys pimennetty" />}
    </div></div>
    <nav className="deck-controls" aria-label="Esityksen ohjaus">
      <button onClick={previous} disabled={position.index === 0 && position.step === 0} aria-label="Edellinen vaihe">←</button>
      <button onClick={() => setModal("overview")} aria-label="Kaikki diat">{String(position.index + 1).padStart(2, "0")} / {slides.length}</button>
      <button onClick={next} disabled={position.index === slides.length - 1 && position.step === current.steps} aria-label="Seuraava vaihe">→</button><span className="control-divider" />
      <button onClick={() => setModal("notes")} title="Puhujamuistiinpanot (N)" aria-label="Puhujamuistiinpanot">N</button>
      <button onClick={openPresenter} title="Erillinen puhujanäkymä (P)" aria-label="Erillinen puhujanäkymä">P</button>
      <button onClick={fullscreen} title="Koko näyttö (F)" aria-label="Koko näyttö">⛶</button>
      <button onClick={() => setModal("help")} aria-label="Ohjeet">?</button>
    </nav>
    {isPresenter && <aside className="presenter-panel"><Notes slide={current} position={position} /></aside>}
    {modal === "notes" && <Modal title="Puhujamuistiinpanot" onClose={() => setModal(null)}><Notes slide={current} position={position} /></Modal>}
    {modal === "overview" && <Modal title="Esityksen kulku" onClose={() => setModal(null)}><div className="overview-grid">{slides.map((slide, i) => <button key={slide.id} data-current={i === position.index} onClick={() => goTo(i)}><span>{String(i + 1).padStart(2, "0")}</span><div><small>{slide.time} · {slide.section}</small><strong>{slide.title}</strong></div></button>)}</div></Modal>}
    {modal === "help" && <Modal title="Esityksen ohjaus" onClose={() => setModal(null)}><dl className="help-list">{[["← → / Space / PageUp / PageDown", "Edellinen tai seuraava sisältövaihe"], ["Home / End", "Esityksen alku / loppu"], ["O", "Kaikki diat ja tavoiteajat"], ["N", "Tämän dian puhujamuistiinpanot"], ["P", "Erillinen puhujanäkymä. Siirrä se omalle näytöllesi."], ["F", "Koko näyttö"], ["B / Escape", "Pimennä / palauta esitys"], ["Pyyhkäisy", "Edellinen tai seuraava vaihe"], ["Escape", "Sulje avoin näkymä"]].map(([key, text]) => <div key={key}><dt>{key}</dt><dd>{text}</dd></div>)}</dl><p>Videot käynnistetään erikseen. Esitys etenee puhujan tahdissa. Vähennetyn liikkeen asetus seuraa laitteen asetusta.</p></Modal>}
    {message && <p className="status-message" role="status">{message}</p>}
  </main>;
}
