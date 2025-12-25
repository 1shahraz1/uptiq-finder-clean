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

        <HowItWorks />
        <Benefits />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

/* ---------------- Header / Hero ---------------- */

function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          {/* Keep your current header logo path */}
          <img src="/header-logo.png" alt="Uptiq Logo" className="h-4 w-auto" />
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#how" className="hover:text-slate-900">
            How it works
          </a>
          <a href="#benefits" className="hover:text-slate-900">
            Benefits
          </a>
          <a href="#faq" className="hover:text-slate-900">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#finder"
            className="text-sm px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50"
          >
            Try the Finder
          </a>
          {/* Keep as is now (your current behavior/URL) */}
          <a
            href="https://uptiq.io/shop/"
            className="text-sm px-3 py-2 rounded-xl bg-black hover:bg-neutral-800 text-white font-semibold"
          >
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
            <p className="uppercase tracking-wider text-neutral-600 text-xs mb-3">
              Algorithms made simple
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Pick the right trading algorithm in under a minute!
            </h1>

            <p className="mt-4 text-slate-600 text-lg">
              Uptiq give you the tools to automate your trading through our customizable
              strategies. Take the quiz and see what your style of algorithm is based on your
              goals, risk, and skill level.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {/* Keep as is now */}
              <a
                href="#finder"
                className="px-5 py-3 rounded-2xl bg-black hover:bg-neutral-800 text-white font-semibold"
              >
                Match Me
              </a>
              <a
                href="#how"
                className="px-5 py-3 rounded-2xl border border-slate-200 hover:bg-slate-50"
              >
                How it works
              </a>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              No hidden fees or charges • No coding needed • 30 day money back guarantee
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                {/* Keep your screenshot file name/path */}
                <img
                  src="/Screenshot%202025-10-09%20130034.png"
                  alt="Uptiq Strategy Dashboard Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>

              <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700">
                <li className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                  MetaTrader 5 Strategies
                </li>
                <li className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                  NinjaTrader + IBKR coming soon!
                </li>
                <li className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                  Risk controls built-in
                </li>
                <li className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                  Transparent performance
                </li>
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
      {eyebrow && (
        <div className="text-neutral-600 text-xs uppercase tracking-wider mb-2">{eyebrow}</div>
      )}
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
  );
}

/* ---------------- Finder ---------------- */

function FinderCard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [email, setEmail] = useState("");
  const [emailCaptured, setEmailCaptured] = useState(false);

  // 5 questions total
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

  const ranked = useMemo(() => matchAlgosHybrid(answers), [answers]);
  const primary = ranked[0];
  const secondary = ranked[1];

  const atFinalStep = step >= steps.length;

  // Soft gate: show primary result immediately; email reveals secondary + full details
  const handleEmailSubmit = async (e) => {
  e.preventDefault();

  const ok = /.+@.+\..+/.test(email);
  if (!ok) return alert("Please enter a valid email.");

  setEmailCaptured(true);

  try {
    await fetch("https://uptiq.io/wp-json/fluent-crm/v2/forms/4/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        meta: {
          source: "uptiq_algo_finder",
          primary_match: primary?.name,
          secondary_match: secondary?.name,
          answers: answers
        }
      })
    });
  } catch (err) {
    console.error("FluentCRM submission failed", err);
  }
};


    // Optional: Add your webhook URL to receive submissions
    const WEBHOOK_URL = "";
    if (WEBHOOK_URL) {
      try {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, answers, match: { primary, secondary }, ts: new Date().toISOString() }),
        });
      } catch {
        // Swallow errors; don't block UX
      }
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
        ) : (
          <SoftGateResults
            answers={answers}
            primary={primary}
            secondary={secondary}
            email={email}
            setEmail={setEmail}
            emailCaptured={emailCaptured}
            onSubmit={handleEmailSubmit}
          />
        )}
      </div>

      <BrowseAllCTA />
    </section>
  );
}

function SoftGateResults({ answers, primary, secondary, email, setEmail, emailCaptured, onSubmit }) {
  return (
    <div>
      <h4 className="text-lg font-semibold">Your recommended match</h4>
      <p className="text-slate-600 mt-1 text-sm">
        Hybrid match = fit to your preferences plus alignment with each strategy’s historical behavior.
      </p>

      {/* Primary (always visible) */}
      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-wide text-slate-500">Primary recommendation</div>
            <div className="text-neutral-700 text-xs uppercase tracking-wide mt-1">{primary.badge}</div>
            <div className="text-xl font-semibold mt-1">{primary.name}</div>
          </div>
          <div className="text-sm text-slate-600">Score {Math.round(primary.score)}</div>
        </div>

        {/* Advanced reminder style B: small note under name (only when present) */}
        {primary.advancedNote && (
          <div className="mt-2 text-xs text-slate-500">{primary.advancedNote}</div>
        )}

        <p className="text-sm text-slate-600 mt-3">{primary.desc}</p>

        <ul className="mt-3 text-sm text-slate-700 list-disc list-inside space-y-1">
          {primary.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={primary.url}
            className="px-5 py-2 rounded-xl bg-black hover:bg-neutral-800 text-white text-sm font-semibold"
          >
            View Strategy
          </a>
          <a
            href="#finder"
            className="px-5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-sm font-semibold"
          >
            Retake Quiz
          </a>
        </div>
      </div>

      {/* Soft gate */}
      {!emailCaptured ? (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h5 className="text-base font-semibold">Want a secondary recommendation?</h5>
          <p className="text-slate-600 text-sm mt-1">
            Enter your email to unlock your backup match + a short setup checklist for your style.
          </p>

          <form onSubmit={onSubmit} className="mt-4 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-neutral-800"
              required
            />
            <button className="px-5 py-3 rounded-xl bg-black hover:bg-neutral-800 text-white font-semibold">
              Reveal My Secondary Match
            </button>
          </form>

          <p className="text-xs text-slate-500 mt-2">
            We’ll also send setup tips. Unsubscribe anytime.
          </p>
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-500">Secondary recommendation</div>
              <div className="text-neutral-700 text-xs uppercase tracking-wide mt-1">{secondary.badge}</div>
              <div className="text-xl font-semibold mt-1">{secondary.name}</div>
              {secondary.advancedNote && <div className="mt-2 text-xs text-slate-500">{secondary.advancedNote}</div>}
            </div>
            <div className="text-sm text-slate-600">Score {Math.round(secondary.score)}</div>
          </div>

          <p className="text-sm text-slate-600 mt-3">{secondary.desc}</p>

          <ul className="mt-3 text-sm text-slate-700 list-disc list-inside space-y-1">
            {secondary.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          <div className="mt-5">
            <a
              href={secondary.url}
              className="px-5 py-2 rounded-xl bg-black hover:bg-neutral-800 text-white text-sm font-semibold"
            >
              View Strategy
            </a>
          </div>

          <div className="mt-6 text-xs text-slate-500">
            <span className="font-semibold text-slate-700">Your inputs:</span>{" "}
            {Object.entries(answers)
              .map(([k, v]) => `${k}=${v}`)
              .join(" • ")}
          </div>

          <div className="mt-3 text-[11px] text-slate-500">
            Note: Trading involves risk. Matches are informational and based on preferences + historical behavior characteristics,
            not guarantees of results.
          </div>
        </div>
      )}
    </div>
  );
}

function BrowseAllCTA() {
  return (
    <div className="mt-8 mb-20">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm text-center">
        <h4 className="text-xl font-semibold">Prefer to browse instead?</h4>
        <p className="text-slate-600 mt-2">
          Skip the quiz and explore all available Uptiq strategies in the shop.
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
    </div>
  );
}

/* ---------------- Sections ---------------- */

function HowItWorks() {
  return (
    <section id="how" className="mt-8">
      <SectionTitle eyebrow="What to expect" title="From quiz → to match → to live in minutes" />
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { t: "Take the 60-second quiz", d: "We learn your goals, skill level and risk preferences." },
          { t: "Get a data-driven match", d: "We narrow down the strategies aligned to your inputs with transparent logic." },
          { t: "Launch with controls", d: "Use presets or fine-tune risk. Have control over your accounts — no coding required." },
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
    { icon: CodeIcon, t: "No coding", d: "Install, confirm parameters, connect, and go." },
    { icon: MonitorIcon, t: "MetaTrader 5", d: "Our strategies are currently for MT5 with other platforms coming soon." },
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
function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current">
      <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current">
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function CodeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current">
      <path d="M16 18l6-6-6-6M8 6L2 12l6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function MonitorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth="2" />
      <path d="M8 21h8M12 17v4" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function LifeBuoyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current">
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" strokeWidth="2" />
      <path
        d="M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M19.07 4.93l-4.24 4.24M9.17 14.83L4.93 19.07"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function TagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current">
      <path
        d="M20.59 13.41L11 3H4v7l9.59 9.59a2 2 0 0 0 2.82 0l4.18-4.18a2 2 0 0 0 0-2.82Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </svg>
  );
}

function FAQ() {
  const qs = [
    {
      q: "How does the matching work?",
      a: "We score each algorithm across risk profile, trade frequency, holding style, and experience fit. The top recommendations are shown — you can still explore all strategies.",
    },
    {
      q: "Can I change risk settings?",
      a: "Yes. Adjust position size, max risk %, ATR-based stops, trade sessions, and more.",
    },
    {
      q: "Do I need coding skills?",
      a: "No. Installation is made simple as copy & paste and support is available 7 days a week.",
    },
    {
      q: "Can I run multiple strategies?",
      a: "Yes. Many traders use multiple strategies across different assets or behaviors to diversify.",
    },
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
          Trading involves risks. Past performance does not guarantee future results. No guarantee of profits. Algorithms are
          designed as automation tools.
        </div>

        <div className="flex items-center gap-4 text-sm">
          <a href="mailto:hello@uptiq.io" className="hover:underline">
            Contact
          </a>
          <a href="https://uptiq.io/privacy" className="hover:underline">
            Privacy
          </a>
          <a href="https://uptiq.io/terms" className="hover:underline">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Hybrid Matching Logic (4 strategies only) ---------------- */

const ALGORITHMS = [
  {
    key: "flowguard",
    name: "FlowGuard Momentum",
    badge: "Momentum • MT5 • M15",
    url: "https://uptiq.io/product/flowguard-momentum-algo/",
    desc: "Selective momentum re-entry aligned with trend. Built for disciplined execution with strong filters.",
    highlights: [
      "Low frequency / highly selective (10 trades YTD in backtest)",
      "Designed for clarity: fewer signals, more structure",
      "Defined SL/TP, optional trailing, time/spread filters",
    ],
    profile: {
      experienceFit: ["new", "some"],
      frequency: "low",
      holding: ["minutes", "hours"],
      riskMindset: ["protect", "clarity"],
      priority: ["clarity"],
      performanceTilt: { drawdown: "low", payoff: "higherPerTrade", tradeCount: "veryLow" },
    },
  },
  {
    key: "spreadlock",
    name: "SpreadLock Alpha",
    badge: "Market-Neutral • MT5 • M5",
    url: "https://uptiq.io/product/spreadlock-alpha/",
    desc: "Pairs/relationship trading built around statistical divergence and normalization — not market direction.",
    highlights: [
      "High frequency (2,472 trades YTD in backtest)",
      "Market-neutral behavior via balanced long/short positions",
      "Best for traders comfortable with repetition and probability",
    ],
    advancedNote: "Advanced strategy: best for experienced users comfortable with statistics and high trade frequency.",
    profile: {
      experienceFit: ["advanced"],
      frequency: "high",
      holding: ["minutes"],
      riskMindset: ["stat"],
      priority: ["probability"],
      performanceTilt: { drawdown: "low", payoff: "smallPerTrade", tradeCount: "veryHigh" },
    },
  },
  {
    key: "trendspring",
    name: "TrendSpring",
    badge: "Trend • MT5 • H1",
    url: "https://uptiq.io/product/trendspring/",
    desc: "Payoff-focused trend participation: controlled losses with the goal of materially larger winners.",
    highlights: [
      "Moderate-low frequency (20 trades YTD in backtest)",
      "Lower win-rate by design; payoff-focused profile",
      "Session/spread filters with defined risk parameters",
    ],
    profile: {
      experienceFit: ["new", "some"],
      frequency: "low",
      holding: ["hours", "multi"],
      riskMindset: ["payoff"],
      priority: ["repeatable"],
      performanceTilt: { drawdown: "lowToMod", payoff: "largeWinners", tradeCount: "low" },
    },
  },
  {
    key: "voltiband",
    name: "VoltiBand Trend",
    badge: "Volatility-MeanReversion • MT5 • M5",
    url: "https://uptiq.io/product/voltiband-trend/",
    desc: "Volatility-aware mean reversion with trend context. ATR-based exits help adapt to changing conditions.",
    highlights: [
      "Moderate frequency (66 trades YTD in backtest)",
      "ATR-based SL/TP (volatility-aware risk control)",
      "Optional volatility regime filter for selectivity",
    ],
    profile: {
      experienceFit: ["some", "advanced"],
      frequency: "medium",
      holding: ["minutes", "hours"],
      riskMindset: ["protect", "stat"],
      priority: ["repeatable"],
      performanceTilt: { drawdown: "veryLow", payoff: "moderate", tradeCount: "medium" },
    },
  },
];

function matchAlgosHybrid(answers) {
  // Hybrid weights: fit first, then a light performance tilt (behavioral backtest characteristics)
  const w = {
    experience: 2.2,
    frequency: 2.4,
    holding: 2.0,
    riskMindset: 2.0,
    priority: 2.2,
    performanceTilt: 1.0, // deliberately modest
  };

  const scoreAlgo = (algo) => {
    let score = 0;

    // Experience fit
    if (answers.experience && algo.profile.experienceFit.includes(answers.experience)) score += 10 * w.experience;

    // Frequency fit
    if (answers.frequency && algo.profile.frequency === answers.frequency) score += 10 * w.frequency;

    // Holding fit
    if (answers.holding && algo.profile.holding.includes(answers.holding)) score += 10 * w.holding;

    // Risk mindset fit
    if (answers.riskMindset && algo.profile.riskMindset.includes(answers.riskMindset)) score += 10 * w.riskMindset;

    // Priority fit
    if (answers.priority && algo.profile.priority.includes(answers.priority)) score += 10 * w.priority;

    // Light performance tilt (no promises; just aligning expectations)
    // - If user chooses "protect", prefer lower drawdown profiles slightly
    if (answers.riskMindset === "protect") {
      if (algo.profile.performanceTilt.drawdown === "veryLow") score += 6 * w.performanceTilt;
      if (algo.profile.performanceTilt.drawdown === "low") score += 4 * w.performanceTilt;
    }

    // - If user chooses "payoff", prefer "largeWinners/higherPerTrade"
    if (answers.riskMindset === "payoff") {
      if (algo.profile.performanceTilt.payoff === "largeWinners") score += 6 * w.performanceTilt;
      if (algo.profile.performanceTilt.payoff === "higherPerTrade") score += 4 * w.performanceTilt;
    }

    // - If user chooses "stat", prefer trade-count profiles with repetition
    if (answers.riskMindset === "stat") {
      if (algo.profile.performanceTilt.tradeCount === "veryHigh") score += 6 * w.performanceTilt;
      if (algo.profile.performanceTilt.tradeCount === "medium") score += 3 * w.performanceTilt;
    }

    // Small nudge: if user is "new", lightly discourage SpreadLock unless explicitly advanced
    if (answers.experience === "new" && algo.key === "spreadlock") score -= 10;

    return score;
  };

  return ALGORITHMS.map((a) => ({ ...a, score: scoreAlgo(a) })).sort((a, b) => b.score - a.score);
}
