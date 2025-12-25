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
          title="Answer a few quick questions — we’ll help match you with algorithms"
          subtitle="Let us help you navigate based on your personal preferences."
        />
        <FinderCard />
        <BrowseAllCTA />
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
        <div className="flex items-center">
          <img src="/header-logo.png" alt="Uptiq Logo" className="h-4 w-auto" />
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#how" className="hover:text-slate-900">How it works</a>
          <a href="#benefits" className="hover:text-slate-900">Benefits</a>
          <a href="#faq" className="hover:text-slate-900">FAQ</a>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#finder" className="text-sm px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50">
            Try the Finder
          </a>
          <a href="https://uptiq.io/shop/" className="text-sm px-3 py-2 rounded-xl bg-black hover:bg-neutral-800 text-white font-semibold">
            View Strategies
          </a>
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
              Pick the right trading algorithm in under a minute!
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Uptiq give you the tools to automate your trading through our customizable strategies. Take the quiz and see what your style of algorithm is based on your goals, risk, and skill level.
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
        <div>• Built by real traders • Full automation • Your control</div>
        <div>• Money back guarantee • No profit sharing • No hidden fees</div>
        <div>• Secure licensing • Simple setup • No coding</div>
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

  // 5-question quiz aligned to current Uptiq lineup (MT5 + Forex + fully automated)
  const steps = [
    {
      key: "experience",
      q: "What’s your experience level with automated trading?",
      options: [
        { v: "new", label: "New to automation" },
        { v: "some", label: "Some experience (comfortable following rules)" },
        { v: "advanced", label: "Advanced / quantitative (systems + stats)" },
      ],
    },
    {
      key: "frequency",
      q: "How often do you want the strategy to trade?",
      options: [
        { v: "low", label: "Low frequency (very selective trades)" },
        { v: "medium", label: "Moderate activity (steady but controlled)" },
        { v: "high", label: "High frequency (many trades driven by probability)" },
      ],
    },
    {
      key: "holding",
      q: "How long are you comfortable holding positions?",
      options: [
        { v: "minutes", label: "Minutes (fast-paced)" },
        { v: "hours", label: "Hours (intraday)" },
        { v: "multi", label: "Multiple hours to days (patient swing-style)" },
      ],
    },
    {
      key: "riskMindset",
      q: "Which best describes your risk mindset?",
      options: [
        { v: "protect", label: "Capital protection and fewer trades" },
        { v: "payoff", label: "Small losses, larger winners (payoff-focused)" },
        { v: "stat", label: "I understand streaks/drawdowns in statistical systems" },
      ],
    },
    {
      key: "priority",
      q: "What matters most to you in a strategy?",
      options: [
        { v: "clarity", label: "Clarity and discipline (avoid noise)" },
        { v: "repeatable", label: "Repeatable logic with volatility-aware controls" },
        { v: "probability", label: "Probability and long-term edge over individual trades" },
      ],
    },
  ];

  const progress = Math.round((step / steps.length) * 100);

  const handleSelect = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const canContinue = useMemo(() => {
    const s = steps[step];
    if (!s) return false;
    return Boolean(answers[s.key]);
  }, [answers, step]);

  const result = useMemo(() => matchAlgos(answers), [answers]);
  const atFinalStep = step >= steps.length;

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const ok = /.+@.+\..+/.test(email);
    if (!ok) return alert("Please enter a valid email.");
    setEmailCaptured(true);

    // TODO: Add your webhook URL to receive submissions
    const WEBHOOK_URL = "";
    if (WEBHOOK_URL) {
      try {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            answers,
            matched: result.slice(0, 2).map((x) => ({ key: x.key, name: x.name, score: x.score })),
            ts: new Date().toISOString(),
          }),
        });
      } catch {}
    }
  };

  return (
    <section id="finder" className="mb-10">
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
                const selected = answers[steps[step].key] === o.v;
                return (
                  <button
                    key={o.v}
                    onClick={() => handleSelect(steps[step].key, o.v)}
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

function BrowseAllCTA() {
  return (
    <section className="mb-20">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-center">
        <div className="text-xl font-semibold">Prefer to browse instead?</div>
        <p className="mt-2 text-slate-600">
          Skip the quiz and view all available MetaTrader 5 strategies in the Uptiq Shop.
        </p>
        <div className="mt-5">
          <a
            href="https://uptiq.io/shop/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-black hover:bg-neutral-800 text-white font-semibold"
          >
            View All Strategies
          </a>
        </div>
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
        <button className="px-5 py-3 rounded-xl bg-black hover:bg-neutral-800 text-white font-semibold">
          Show My Matches
        </button>
      </form>
      <p className="text-xs text-slate-500 mt-2">We’ll also send setup tips for your match. Unsubscribe anytime.</p>
    </div>
  );
}

function ResultPanel({ result, answers }) {
  const primary = result[0];
  const secondary = result[1];

  return (
    <div>
      <h4 className="text-lg font-semibold">Your best matches</h4>
      <p className="text-slate-600 mt-1 text-sm">
        Based on your inputs, here are the two best-fitting strategies to start with.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {[{ label: "Primary match", item: primary }, { label: "Secondary match", item: secondary }].map(({ label, item }) => (
          <div key={item.key} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
                <div className="text-neutral-800 text-xs uppercase tracking-wide mt-1">{item.badge}</div>
                <div className="text-xl font-semibold mt-1">{item.name}</div>
              </div>
              <div className="text-sm text-slate-600">Score {Math.round(item.score)}</div>
            </div>

            <p className="text-sm text-slate-600 mt-3">{item.desc}</p>

            {item.warning && (
              <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                <span className="font-semibold">Note:</span> {item.warning}
              </div>
            )}

            <ul className="mt-3 text-sm text-slate-700 list-disc list-inside space-y-1">
              {item.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://uptiq.io/shop/"
                className="px-5 py-2 rounded-xl bg-black hover:bg-neutral-800 text-white text-sm font-semibold"
              >
                View in Shop
              </a>
              <a
                href="#finder"
                className="px-5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-sm font-semibold"
              >
                Retake Quiz
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-xs text-slate-500">
        <span className="font-semibold text-slate-700">Your inputs:</span>{" "}
        {Object.entries(answers).map(([k, v]) => `${k}=${v}`).join(" • ")}
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
          { t: "Take the 60-second quiz", d: "We learn your goals, skill level, and trading preferences." },
          { t: "Get a data-driven match", d: "We narrow down strategies aligned to your inputs with transparent logic." },
          { t: "Launch with controls", d: "Use presets, confirm parameters, and go live with a simple MT5 setup." }
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
  const items = [
    { icon: CheckIcon, t: "Transparent performance", d: "Clear backtests, stats, risk, and assumptions." },
    { icon: ShieldIcon, t: "30-day guarantee", d: "We’ll be happy to refund your money if you are not satisfied." },
    { icon: CodeIcon,  t: "No coding", d: "Install, confirm parameters, connect, and go." },
    { icon: MonitorIcon, t: "MetaTrader 5", d: "Strategies are currently for MT5 (Forex-focused)." },
    { icon: LifeBuoyIcon, t: "Support, 7 days", d: "We’re here to help you go from demo to live with confidence." },
    { icon: TagIcon, t: "Fair pricing", d: "No profit-sharing. Straightforward licensing fee." },
  ];

  return (
    <section id="benefits" className="mt-16">
      <SectionTitle eyebrow="Why Uptiq" title="Built for real traders, not just techies" />
      <ul className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-10 gap-y-5">
        {items.map(({ icon: Icon, t, d }, i) => (
          <li key={i} className="flex items-start gap-4">
            <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white">
              <Icon />
            </span>
            <div>
              <div className="font-semibold">{t}</div>
              <p className="text-slate-600 text-sm mt-1">{d}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* Simple inline icons (stroke currentColor) */
function CheckIcon(){ return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current"><path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>); }
function ShieldIcon(){ return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>); }
function CodeIcon(){ return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current"><path d="M16 18l6-6-6-6M8 6L2 12l6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>); }
function MonitorIcon(){ return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth="2"/><path d="M8 21h8M12 17v4" strokeWidth="2" strokeLinecap="round"/></svg>); }
function LifeBuoyIcon(){ return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current"><circle cx="12" cy="12" r="10" strokeWidth="2"/><circle cx="12" cy="12" r="4" strokeWidth="2"/><path d="M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M19.07 4.93l-4.24 4.24M9.17 14.83L4.93 19.07" strokeWidth="2" strokeLinecap="round"/></svg>); }
function TagIcon(){ return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current"><path d="M20.59 13.41L11 3H4v7l9.59 9.59a2 2 0 0 0 2.82 0l4.18-4.18a2 2 0 0 0 0-2.82Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>); }

function FAQ() {
  const qs = [
    { q: "How does the matching work?", a: "We score each algorithm across experience level, trade frequency preference, holding time, and risk mindset. The top matches are shown — you can still browse all strategies." },
    { q: "Do I need coding skills?", a: "No. Installation is designed to be simple (copy & paste), and support is available 7 days a week." },
    { q: "Can I run multiple strategies?", a: "Yes. Many traders use multiple strategies to diversify behavior across market conditions." },
    { q: "Is this financial advice?", a: "No. These tools are for informational and educational purposes. Trading involves risk and results vary." }
  ];

  return (
    <section id="faq" className="mt-16 mb-24">
      <SectionTitle eyebrow="FAQ" title="Common questions" />
      <ul className="max-w-4xl mx-auto space-y-5">
        {qs.map((item, i) => (
          <li key={i}>
            <div className="font-semibold">{item.q}</div>
            <p className="text-slate-600 text-sm mt-1">{item.a}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-600 text-sm">© {new Date().getFullYear()} Uptiq. All rights reserved.</div>
        <div className="text-xs text-slate-500">
          Trading involves risks. Past performance does not guarantee future results. No guarantee of profits. Algorithms are designed as automation tools.
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="mailto:hello@uptiq.io" className="hover:underline">Contact</a>
          <a href="https://uptiq.io/privacy" className="hover:underline">Privacy</a>
          <a href="https://uptiq.io/terms" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Matching Logic (updated to your 4 strategies) ---------- */
const ALGORITHMS = [
  {
    key: "flowguard",
    name: "FlowGuard Momentum",
    badge: "Momentum + Trend • M15 • Selective",
    desc: "A disciplined momentum strategy that waits for alignment with the prevailing trend — designed for clarity, reduced noise, and repeatable execution.",
    highlights: [
      "Very selective trade profile (low frequency)",
      "Trend + momentum realignment logic",
      "Designed for controlled, rules-based execution",
    ],
    warning: "",
  },
  {
    key: "trendspring",
    name: "TrendSpring",
    badge: "Payoff-Focused Trend • H1 • Selective",
    desc: "A trend-aligned system built around the principle that payoff matters more than win rate — small controlled losses with larger winners when moves follow through.",
    highlights: [
      "Low trade frequency with payoff-driven profile",
      "Built for disciplined traders who can tolerate losing streaks",
      "Designed to capture larger directional moves",
    ],
    warning: "",
  },
  {
    key: "voltiband",
    name: "VoltiBand Trend",
    badge: "Volatility-Aware Mean Reversion • M5",
    desc: "Mean-reversion entries filtered by trend structure, with volatility-aware risk management (ATR-based) to adapt to shifting market conditions.",
    highlights: [
      "Moderate trade frequency on M5",
      "Volatility-aware exits (ATR-based)",
      "Designed to avoid random mean-reversion noise",
    ],
    warning: "",
  },
  {
    key: "spreadlock",
    name: "SpreadLock Alpha",
    badge: "Market-Neutral Quant • M5 • High Frequency",
    desc: "A quantitative, market-neutral strategy that trades statistical divergence between two related instruments — performance driven by relative normalization rather than market direction.",
    highlights: [
      "High frequency, probability-driven trade flow",
      "Designed for traders comfortable with statistics and optimization",
      "Pairs/relationship trading (long/short structure)",
    ],
    warning:
      "This is an Advanced strategy. It can experience long losing streaks and requires comfort with statistical behavior and parameter testing before going live.",
  },
];

// Simple scoring model aligned to your backtests and positioning
function matchAlgos(a) {
  const base = {
    flowguard: 0,
    trendspring: 0,
    voltiband: 0,
    spreadlock: 0,
  };

  // Q1 Experience
  if (a.experience === "new") {
    base.flowguard += 18;
    base.trendspring += 16;
    base.voltiband += 8;
    base.spreadlock += 2; // still possible, but unlikely
  }
  if (a.experience === "some") {
    base.flowguard += 14;
    base.trendspring += 12;
    base.voltiband += 14;
    base.spreadlock += 8;
  }
  if (a.experience === "advanced") {
    base.flowguard += 8;
    base.trendspring += 10;
    base.voltiband += 14;
    base.spreadlock += 22;
  }

  // Q2 Frequency preference (major differentiator)
  if (a.frequency === "low") {
    base.flowguard += 24;
    base.trendspring += 22;
    base.voltiband += 8;
    base.spreadlock += 2;
  }
  if (a.frequency === "medium") {
    base.flowguard += 10;
    base.trendspring += 10;
    base.voltiband += 22;
    base.spreadlock += 10;
  }
  if (a.frequency === "high") {
    base.flowguard += 2;
    base.trendspring += 2;
    base.voltiband += 10;
    base.spreadlock += 26;
  }

  // Q3 Holding time (timeframe fit)
  if (a.holding === "minutes") {
    base.voltiband += 18;
    base.spreadlock += 18;
    base.flowguard += 4;
    base.trendspring += 2;
  }
  if (a.holding === "hours") {
    base.flowguard += 16;
    base.voltiband += 10;
    base.trendspring += 10;
    base.spreadlock += 8;
  }
  if (a.holding === "multi") {
    base.trendspring += 18;
    base.flowguard += 10;
    base.voltiband += 6;
    base.spreadlock += 4;
  }

  // Q4 Risk mindset (psychological fit)
  if (a.riskMindset === "protect") {
    base.flowguard += 18;
    base.voltiband += 10;
    base.trendspring += 8;
    base.spreadlock += 4;
  }
  if (a.riskMindset === "payoff") {
    base.trendspring += 20;
    base.flowguard += 10;
    base.voltiband += 8;
    base.spreadlock += 6;
  }
  if (a.riskMindset === "stat") {
    base.spreadlock += 22;
    base.voltiband += 14;
    base.trendspring += 6;
    base.flowguard += 6;
  }

  // Q5 Priority
  if (a.priority === "clarity") {
    base.flowguard += 18;
    base.trendspring += 10;
    base.voltiband += 8;
    base.spreadlock += 6;
  }
  if (a.priority === "repeatable") {
    base.voltiband += 18;
    base.flowguard += 10;
    base.trendspring += 10;
    base.spreadlock += 10;
  }
  if (a.priority === "probability") {
    base.spreadlock += 18;
    base.voltiband += 12;
    base.trendspring += 8;
    base.flowguard += 6;
  }

  // Build scored list
  const scored = ALGORITHMS.map((algo) => {
    const score = base[algo.key] ?? 0;
    return { ...algo, score };
  }).sort((x, y) => y.score - x.score);

  return scored;
}
