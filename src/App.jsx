import React, { useMemo, useState } from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero />
      <TrustBar />
      <main className="max-w-6xl mx-auto px-4">
        <SectionTitle
          eyebrow="Find your perfect fit"
          title="Answer a few quick questions — we’ll match the right algorithm"
          subtitle="No coding, 7-day trial on every strategy, and you control the risk."
        />
        <FinderCard />
        <HowItWorks />
        <Benefits />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Uptiq" className="h-8 w-auto hidden sm:block" />
          <span className="font-semibold tracking-wide">Uptiq</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#how" className="hover:text-slate-900">How it works</a>
          <a href="#benefits" className="hover:text-slate-900">Benefits</a>
          <a href="#faq" className="hover:text-slate-900">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#finder" className="text-sm px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50">Try the Finder</a>
          <a href="https://uptiq.io/trial" className="text-sm px-3 py-2 rounded-xl bg-black hover:bg-neutral-800 text-white font-semibold">Start Free Trial</a>
        </div>
      </div>
    </header>
  );
}
function Hero() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-wider text-neutral-600 text-xs mb-3">Algorithms made simple</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Pick the right trading algorithm in under a minute
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Uptiq give you the tools you need to identify data driven trades with transparent, customizable strategies. Take the quiz and see what your style of algorithm is based on your goals, risk, and platform.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#finder" className="px-5 py-3 rounded-2xl bg-black hover:bg-neutral-800 text-white font-semibold">Match Me</a>
              <a href="#how" className="px-5 py-3 rounded-2xl border border-slate-200 hover:bg-slate-50">How it works</a>
            </div>
            <p className="mt-3 text-xs text-slate-500">No hidden fees or charges • No coding needed • 30 day money back guarantee</p>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                <img
                  src="/Screenshot%202025-10-09%20130034.png"
                  alt="Uptiq Strategy Dashboard Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700">
                <li className="p-3 rounded-xl border border-slate-200 bg-slate-50">MetaTrader 5 Strategies</li>
                <li className="p-3 rounded-xl border border-slate-200 bg-slate-50">NinjaTrader + IBKR coming soon!</li>
                <li className="p-3 rounded-xl border border-slate-200 bg-slate-50">Risk controls built-in</li>
                <li className="p-3 rounded-xl border border-slate-200 bg-slate-50">Transparent performance</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="border-y border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 text-xs md:text-sm text-slate-600 flex flex-wrap items-center gap-4 justify-between">
        <div>Founder: 14+ yrs in finance (Merrill • JP Morgan) • AWMA</div>
        <div>7-day trials • No profit sharing • Cancel anytime</div>
        <div>Secure licensing • Simple setup • No coding</div>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto mt-16 mb-8">
      {eyebrow && <div className="text-neutral-600 text-xs uppercase tracking-wider mb-2">{eyebrow}</div>}
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
  );
}

function FinderCard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [email, setEmail] = useState("");
  const [emailCaptured, setEmailCaptured] = useState(false);

  const steps = [
    { key: "experience", q: "What’s your trading experience?",
      options: [{ v: "new", label: "New to algos" }, { v: "intermediate", label: "Some experience" }, { v: "advanced", label: "Advanced / prop" }] },
    { key: "platform", q: "Which platform will you use?",
      options: [{ v: "mt5", label: "MetaTrader 5" }, { v: "ninja", label: "NinjaTrader" }, { v: "ibkr", label: "Interactive Brokers" }] },
    { key: "style", q: "Preferred style?",
      options: [{ v: "scalp", label: "Scalping (fast)" }, { v: "swing", label: "Swing (multi-day)" }, { v: "trend", label: "Trend-following" }, { v: "mean", label: "Mean-reversion" }] },
    { key: "markets", q: "Markets you trade?",
      options: [{ v: "forex", label: "Forex" }, { v: "indices", label: "Indices" }, { v: "crypto", label: "Crypto" }, { v: "futures", label: "Futures" }], multi: true },
    { key: "risk", q: "Risk tolerance?",
      options: [{ v: "conservative", label: "Conservative" }, { v: "moderate", label: "Moderate" }, { v: "aggressive", label: "Aggressive" }] },
    { key: "automation", q: "How automated do you want to be?",
      options: [{ v: "alerts", label: "Signals/alerts only" }, { v: "semi", label: "Semi-auto (confirm entries)" }, { v: "full", label: "Fully automated" }] },
    { key: "session", q: "When do you usually trade?",
      options: [{ v: "lon", label: "London session" }, { v: "ny", label: "New York session" }, { v: "asia", label: "Asia session" }, { v: "any", label: "Any / varies" }] },
  ];

  const progress = Math.round((step / steps.length) * 100);

  const handleSelect = (key, value, multi) => {
    setAnswers((prev) => {
      if (!multi) return { ...prev, [key]: value };
      const current = new Set(prev[key] || []);
      current.has(value) ? current.delete(value) : current.add(value);
      return { ...prev, [key]: Array.from(current) };
    });
  };

  const canContinue = useMemo(() => {
    const s = steps[step];
    if (!s) return false;
    const val = answers[s.key];
    return s.multi ? Array.isArray(val) && val.length > 0 : Boolean(val);
  }, [answers, step]);

  const result = useMemo(() => matchAlgos(answers), [answers]);
  const atFinalStep = step >= steps.length;

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const ok = /.+@.+\..+/.test(email);
    if (!ok) return alert("Please enter a valid email.");
    setEmailCaptured(true);
    // Optional: replace with your webhook (Airtable/HubSpot/Zapier)
    const WEBHOOK_URL = "";
    if (WEBHOOK_URL) {
      try {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, answers, ts: new Date().toISOString() })
        });
      } catch {}
    }
  };

  return (
    <section id="finder" className="mb-20">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h3 className="text-xl font-semibold">Uptiq Algo Finder</h3>
          <div className="flex-1 h-2 mx-6 rounded-full bg-slate-100">
            <div className="h-2 rounded-full bg-black" style={{ width: `${progress}%` }} />
          </div>
          <div className="text-sm tabular-nums text-slate-600">{progress}%</div>
        </div>

        {!atFinalStep ? (
          <div>
            <p className="text-lg mb-4">{steps[step].q}</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {steps[step].options.map((o) => {
                const selected = steps[step].multi
                  ? (answers[steps[step].key] || []).includes(o.v)
                  : answers[steps[step].key] === o.v;
                return (
                  <button
                    key={o.v}
                    onClick={() => handleSelect(steps[step].key, o.v, steps[step].multi)}
                    className={`p-4 text-left rounded-2xl border font-medium transition ${
                      selected
                        ? "border-black bg-black text-white"
                        : "border-slate-200 bg-white text-black hover:bg-neutral-100"
                    }`}
                  >
                    {o.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 disabled:opacity-40"
                disabled={step === 0}
              >
                Back
              </button>
              <button
                onClick={() => setStep((s) => Math.min(steps.length, s + 1))}
                disabled={!canContinue}
                className="px-5 py-2 rounded-xl bg-black hover:bg-neutral-800 text-white font-semibold disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>
        ) : !emailCaptured ? (
          <EmailGate email={email} setEmail={setEmail} onSubmit={handleEmailSubmit} />
        ) : (
          <ResultPanel result={result} answers={answers} />
        )}
      </div>
    </section>
  );
}

function EmailGate({ email, setEmail, onSubmit }) {
  return (
    <div className="max-w-lg mx-auto text-center">
      <h4 className="text-xl font-semibold">See your best matches</h4>
      <p className="text-slate-600 mt-2">Enter your email to view your personalized algorithm recommendations.</p>
      <form onSubmit={onSubmit} className="mt-5 flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-neutral-800"
          required
        />
        <button className="px-5 py-3 rounded-xl bg-black hover:bg-neutral-800 text-white font-semibold">Show My Matches</button>
      </form>
      <p className="text-xs text-slate-500 mt-2">We’ll also send setup tips for your match. Unsubscribe anytime.</p>
    </div>
  );
}

function ResultPanel({ result, answers }) {
  const top = result.slice(0, 3);
  return (
    <div>
      <h4 className="text-lg font-semibold">Your best matches</h4>
      <p className="text-slate-600 mt-1 text-sm">Based on your inputs we recommend starting with these strategies.</p>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {top.map((item) => (
          <div key={item.key} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-neutral-700 text-xs uppercase tracking-wide">{item.badge}</div>
                <div className="text-lg font-semibold">{item.name}</div>
              </div>
              <div className="text-sm text-slate-600">Score {Math.round(item.score)}</div>
            </div>
            <p className="text-sm text-slate-600 mt-2 min-h-[56px]">{item.desc}</p>
            <ul className="mt-2 text-xs text-slate-500 list-disc list-inside space-y-1">
              {item.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
            <div className="mt-4">
              <a href="https://uptiq.io/trial" className="px-4 py-2 rounded-xl bg-black hover:bg-neutral-800 text-white text-sm font-semibold">Start 7-Day Trial</a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-xs text-slate-500">
        <span className="font-semibold text-slate-700">Your inputs:</span> {Object.entries(answers).map(([k, v]) => `${k}=${Array.isArray(v)? v.join(','): v}`).join(" • ")}
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="mt-8">
      <SectionTitle eyebrow="What to expect" title="From quiz → to match → to live in minutes" />
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { t: "Take the 60-second quiz", d: "We learn your goals, platform, markets and risk tolerance." },
          { t: "Get a data-driven match", d: "We recommend strategies aligned to your inputs with transparent logic." },
          { t: "Launch with controls", d: "Use presets or fine-tune risk. Alerts-only or full automation — your call." }
        ].map((x, i) => (
          <div key={i} className="rounded-2xl p-5 border border-slate-200 bg-white shadow-sm">
            <div className="text-neutral-700 text-xs uppercase tracking-wider">Step {i + 1}</div>
            <div className="mt-1 font-semibold">{x.t}</div>
            <p className="text-slate-600 text-sm mt-2">{x.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="benefits" className="mt-16">
      <SectionTitle eyebrow="Why Uptiq" title="Built for real traders, not just techies" />
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { t: "Transparent performance", d: "Clear stats, risk, and assumptions. No black boxes." },
          { t: "7-day trials", d: "Test before you commit. Cancel anytime." },
          { t: "No coding", d: "Install, connect, and go. Parameters are simple sliders and toggles." },
          { t: "Platform choice", d: "Start with MT5; NinjaTrader and IBKR are on the roadmap." },
          { t: "Support, 7 days", d: "We’re here to help you go from demo to live with confidence." },
          { t: "Fair pricing", d: "No profit-sharing. Straightforward monthly subscriptions." }
        ].map((x, i) => (
          <div key={i} className="rounded-2xl p-5 border border-slate-200 bg-white shadow-sm">
            <div className="font-semibold">{x.t}</div>
            <p className="text-slate-600 text-sm mt-2">{x.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="mt-16 mb-24">
      <SectionTitle eyebrow="FAQ" title="Common questions" />
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { q: "How does the matching work?", a: "We score each algorithm across risk, style, markets, platform, and automation needs. The top scores are shown — you can still explore others." },
          { q: "Can I change risk settings?", a: "Yes. Adjust position size, max risk %, ATR-based stops, trade sessions, and more." },
          { q: "Do I need coding skills?", a: "No. Installation is a guided flow and support is available 7 days a week." },
          { q: "What if I’m not sure yet?", a: "Start with alerts-only mode, journal results, and switch to auto when comfortable." }
        ].map((x, i) => (
          <div key={i} className="rounded-2xl p-5 border border-slate-200 bg-white shadow-sm">
            <div className="font-semibold">{x.q}</div>
            <p className="text-slate-600 text-sm mt-2">{x.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-600 text-sm">© {new Date().getFullYear()} UPTIQ. All rights reserved.</div>
        <div className="text-xs text-slate-500">Trading involves risk. Past performance does not guarantee future results. No guarantee of profits.</div>
        <div className="flex items-center gap-4 text-sm">
          <a href="mailto:hello@uptiq.io" className="hover:underline">Contact</a>
          <a href="https://uptiq.io/privacy" className="hover:underline">Privacy</a>
          <a href="https://uptiq.io/terms" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Matching Logic ---------- */
const ALGORITHMS = [
  { key: "trendpulse", name: "TrendPulse", badge: "Momentum • MT5",
    desc: "Momentum-based scalper with ATR risk controls and session filters.",
    highlights: ["Best for London/NY sessions", "ATR-based SL/TP", "Option: alerts or auto"],
    tags: { platforms:["mt5"], styles:["trend","scalp"], markets:["forex","indices"], risk:["moderate","aggressive"], automation:["semi","full"], experience:["intermediate","advanced"] } },
  { key: "sma8", name: "8-SMA Trend Follower", badge: "Trend • MT5",
    desc: "Clean trend-following engine ideal for beginners and steady profiles.",
    highlights: ["Great for beginners", "Clear rules", "Stable risk curves"],
    tags: { platforms:["mt5"], styles:["trend"], markets:["forex","indices","futures"], risk:["conservative","moderate"], automation:["alerts","semi","full"], experience:["new","intermediate"] } },
  { key: "vbb", name: "Volatility-Filtered BB", badge: "Mean-Rev • MT5",
    desc: "Bollinger-based mean-reversion filtered by ADX/ATR for chop control.",
    highlights: ["Works in ranges", "Tight risk", "Good for alerts-first"],
    tags: { platforms:["mt5"], styles:["mean"], markets:["forex","crypto"], risk:["conservative","moderate"], automation:["alerts","semi"], experience:["new","intermediate"] } },
  { key: "swingx", name: "SwingX", badge: "Swing • Multi-Asset",
    desc: "Multi-day swing framework for indices & FX with 200-SMA + RSI filters.",
    highlights: ["Fewer trades", "Higher R multiples", "Good for busy pros"],
    tags: { platforms:["mt5","ibkr"], styles:["swing","trend"], markets:["indices","forex","futures"], risk:["moderate"], automation:["alerts","semi","full"], experience:["intermediate","advanced"] } }
];

function matchAlgos(answers) {
  const weights = { platform: 2.0, style: 2.0, markets: 1.5, risk: 1.5, automation: 1.2, experience: 1.0, session: 0.8 };
  const sessionAffinity = (algoKey, s) => (algoKey==="trendpulse" && (s==="lon"||s==="ny")) ? 0.8 : (algoKey==="swingx" && s==="any" ? 0.5 : 0);
  const marketSoftBonus = (algoMarkets=[], chosen=[]) => Math.min(1, chosen.filter(m => algoMarkets.includes(m)).length * 0.3);

  return ALGORITHMS.map((algo) => {
    let score = 0;
    if (answers.platform && algo.tags.platforms.includes(answers.platform)) score += 10 * weights.platform;
    if (answers.style && algo.tags.styles.includes(answers.style)) score += 10 * weights.style;
    if (answers.markets?.length) {
      const overlap = answers.markets.filter((m) => algo.tags.markets.includes(m)).length;
      score += overlap * 8 * weights.markets;
      score += marketSoftBonus(algo.tags.markets, answers.markets);
    }
    if (answers.risk && algo.tags.risk.includes(answers.risk)) score += 8 * weights.risk;
    if (answers.automation && algo.tags.automation.includes(answers.automation)) score += 6 * weights.automation;
    if (answers.experience && algo.tags.experience.includes(answers.experience)) score += 5 * weights.experience;
    score += sessionAffinity(algo.key, answers.session) * weights.session;
    return { ...algo, score };
  }).sort((a, b) => b.score - a.score);
}
