import React, { useEffect, useMemo, useState } from "react";

/**
 * LEAD CAPTURE CONFIG
 *
 * Choose ONE:
 *
 * A) FluentCRM Form (recommended for WordPress-native automation)
 *    - You must create the form in: FluentCRM -> Forms
 *    - Then set FLUENTCRM_FORM_ID
 *    - Endpoint: https://uptiq.io/wp-json/fluent-crm/v2/forms/{id}/submit
 *
 * B) Webhook (Make/Zapier) (most reliable, avoids WP REST/CORS issues)
 *    - Set WEBHOOK_URL to your Make/Zapier catch hook
 *    - Works immediately, then you can push into FluentCRM from Make/Zapier.
 */
const CAPTURE_MODE = "webhook"; // "fluentcrm" OR "webhook"

// If CAPTURE_MODE === "fluentcrm"
const FLUENTCRM_FORM_ID = 0; // <-- put FluentCRM form id here (NOT Fluent Forms id)
const FLUENTCRM_SUBMIT_URL =
  FLUENTCRM_FORM_ID > 0
    ? `https://uptiq.io/wp-json/fluent-crm/v2/forms/${FLUENTCRM_FORM_ID}/submit`
    : "";

// If CAPTURE_MODE === "webhook"
const WEBHOOK_URL = "https://hook.us2.make.com/6gn9xzbvgrn00uinnvwtuweh3yg1mzp3";

// Brand color (matched from your screenshot)
const UPTIQ_BLUE = "#044FE7";

export default function App() {
  // Favicon: best practice is to set in index.html,
  // but this runtime approach will still work as long as /public/favicon.png exists.
  useEffect(() => {
    const href = "/favicon.png"; // Put your favicon image into /public/favicon.png
    let link =
      document.querySelector("link[rel='icon']") ||
      document.querySelector("link[rel='shortcut icon']");

    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = href;
  }, []);

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

function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
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
            <p
              className="uppercase tracking-wider text-xs mb-3"
              style={{ color: UPTIQ_BLUE }}
            >
              Algorithms made simple
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Pick the right trading algorithm in under a minute!
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Uptiq gives you the tools to automate your trading through our customizable strategies.
              Take the quiz and see what your style of algorithm is based on your goals, risk, and skill level.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
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
              No hidden fees or charges • No coding needed • 14-day money-back guarantee
            </p>
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

              {/* Center text in the 4 boxes */}
              <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700">
                {[
                  "MetaTrader 5 Strategies",
                  "NinjaTrader + IBKR coming soon!",
                  "Risk controls built-in",
                  "Transparent performance"
                ].map((t) => (
                  <li
                    key={t}
                    className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center text-center min-h-[52px]"
                  >
                    {t}
                  </li>
                ))}
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
        <div>• 14-day guarantee • No profit sharing • No hidden fees</div>
        <div>• Secure licensing • Simple setup • No coding</div>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto mt-16 mb-8">
      {eyebrow && (
        <div
          className="text-xs uppercase tracking-wider mb-2"
          style={{ color: UPTIQ_BLUE }}
        >
          {eyebrow}
        </div>
      )}
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
  const [submitError, setSubmitError] = useState("");

  const steps = [
    {
      key: "experience",
      q: "What’s your experience level with automated trading?",
      options: [
        { v: "new", label: "New to automation" },
        { v: "some", label: "Some experience (comfortable following rules)" },
        { v: "advanced", label: "Advanced / quantitative (systems + stats)" }
      ]
    },
    {
      key: "frequency",
      q: "How often do you want the strategy to trade?",
      options: [
        { v: "low", label: "Low frequency (very selective trades)" },
        { v: "medium", label: "Moderate activity (steady but controlled)" },
        { v: "high", label: "High frequency (many trades driven by probability)" }
      ]
    },
    {
      key: "holding",
      q: "How long are you comfortable holding positions?",
      options: [
        { v: "minutes", label: "Minutes (fast-paced)" },
        { v: "hours", label: "Hours (intraday)" },
        { v: "multi", label: "Multiple hours to days (patient swing-style)" }
      ]
    },
    {
      key: "riskMindset",
      q: "Which best describes your risk mindset?",
      options: [
        { v: "protect", label: "Capital protection and fewer trades" },
        { v: "payoff", label: "Small losses, larger winners (payoff-focused)" },
        { v: "stat", label: "I understand streaks/drawdowns in statistical systems" }
      ]
    },
    {
      key: "priority",
      q: "What matters most to you in a strategy?",
      options: [
        { v: "clarity", label: "Clarity and discipline (avoid noise)" },
        { v: "repeatable", label: "Repeatable logic with volatility-aware controls" },
        { v: "probability", label: "Probability and long-term edge over individual trades" }
      ]
    }
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

  const ranked = useMemo(() => matchAlgos(answers), [answers]);
  const primary = ranked[0] || null;
  const secondary = ranked[1] || null;

  const atFinalStep = step >= steps.length;

  async function submitLead(payload) {
    setSubmitError("");

    if (CAPTURE_MODE === "webhook") {
      if (!WEBHOOK_URL) throw new Error("WEBHOOK_URL is empty. Paste your Make/Zapier webhook URL.");
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error(`Webhook error: ${res.status}`);
      return;
    }

    if (!FLUENTCRM_SUBMIT_URL) {
      throw new Error("FLUENTCRM_FORM_ID is not set. Create the form in FluentCRM (not Fluent Forms) and set the ID.");
    }

    const res = await fetch(FLUENTCRM_SUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: payload.email,
        meta: payload.meta
      })
    });

    if (!res.ok) throw new Error(`FluentCRM submit failed: ${res.status}`);
  }

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    const ok = /.+@.+\..+/.test(email);
    if (!ok) return alert("Please enter a valid email.");

    setEmailCaptured(true);

    const payload = {
      email,
      answers,
      match: {
        primary: primary?.key,
        secondary: secondary?.key
      },
      meta: {
        source: "uptiq_algo_finder",
        primary_name: primary?.name,
        secondary_name: secondary?.name,
        primary_url: primary?.url,
        secondary_url: secondary?.url,
        tags: [
          "algo-finder",
          primary?.key ? `match-${primary.key}` : null,
          secondary?.key ? `secondary-${secondary.key}` : null
        ].filter(Boolean),
        ts: new Date().toISOString()
      }
    };

    try {
      await submitLead(payload);
    } catch (err) {
      console.error(err);
      setSubmitError(err?.message || "Submission failed.");
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
          <ResultsWithEmailUnlock
            primary={primary}
            secondary={secondary}
            email={email}
            setEmail={setEmail}
            emailCaptured={emailCaptured}
            onSubmit={handleEmailSubmit}
            submitError={submitError}
          />
        )}
      </div>

      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 md:p-7 text-center">
        <div className="text-lg font-semibold">Want to skip the quiz?</div>
        <p className="text-slate-600 mt-1">
          Browse all available Uptiq strategies and choose what fits your style.
        </p>
        <div className="mt-4">
          <a
            href="https://uptiq.io/shop/"
            className="inline-flex px-5 py-3 rounded-2xl bg-black hover:bg-neutral-800 text-white font-semibold"
          >
            View All Strategies
          </a>
        </div>
      </div>
    </section>
  );
}

function ResultsWithEmailUnlock({
  primary,
  secondary,
  email,
  setEmail,
  emailCaptured,
  onSubmit,
  submitError
}) {
  return (
    <div>
      <h4 className="text-lg font-semibold">Your recommended match</h4>
      <p className="text-slate-600 mt-1 text-sm">
        Here’s your best match based on your quiz answers. Enter your email to unlock a secondary recommendation.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {primary ? (
          <AlgoCard
            title="Primary Match"
            algo={primary}
            note={
              primary.key === "spreadlock-alpha"
                ? "Advanced-level strategy. Best for experienced traders comfortable with statistical systems."
                : ""
            }
          />
        ) : null}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-xs uppercase tracking-wide text-neutral-600">Secondary Match</div>
          {!emailCaptured ? (
            <div className="mt-2">
              <div className="text-lg font-semibold">Unlock your secondary match</div>
              <p className="mt-2 text-slate-600 text-sm">
                Enter your email to reveal a second strategy that complements your primary match.
              </p>
              <EmailGate email={email} setEmail={setEmail} onSubmit={onSubmit} />
            </div>
          ) : secondary ? (
            <div className="mt-2">
              <div className="text-xl font-semibold">{secondary.name}</div>
              <p className="mt-2 text-slate-600 text-sm">{secondary.desc}</p>
              <div className="mt-4">
                <a
                  href={secondary.url}
                  className="inline-flex px-4 py-2 rounded-xl bg-black hover:bg-neutral-800 text-white text-sm font-semibold"
                >
                  View Strategy
                </a>
              </div>

              {submitError ? (
                <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  <div className="font-semibold">Lead capture warning</div>
                  <div className="mt-1">
                    Your results are shown, but the email may not have saved successfully:
                    <span className="font-mono"> {submitError}</span>
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="mt-2 text-slate-600 text-sm">
              Thanks — your secondary match is loading. If it doesn’t appear, refresh and re-run the quiz.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function EmailGate({ email, setEmail, onSubmit }) {
  return (
    <div className="mt-4">
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-neutral-800"
          required
        />
        <button className="w-full px-5 py-3 rounded-xl bg-black hover:bg-neutral-800 text-white font-semibold">
          Unlock My Second Match
        </button>
      </form>
      <p className="text-xs text-slate-500 mt-2">
        By submitting your email, you agree to receive Uptiq news and marketing emails, plus setup tips for your match.
        Unsubscribe anytime.
      </p>
    </div>
  );
}

function AlgoCard({ title, algo, note }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-xs uppercase tracking-wide text-neutral-600">{title}</div>
      <div className="mt-1 text-xl font-semibold">{algo.name}</div>
      <p className="mt-2 text-slate-600 text-sm">{algo.desc}</p>

      {note ? (
        <div className="mt-3 text-sm rounded-xl border border-slate-200 bg-slate-50 p-3 text-slate-700">
          {note}
        </div>
      ) : null}

      <div className="mt-4">
        <a
          href={algo.url}
          className="inline-flex px-4 py-2 rounded-xl bg-black hover:bg-neutral-800 text-white text-sm font-semibold"
        >
          View Strategy
        </a>
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
          { t: "Take the 60-second quiz", d: "We learn your goals, skill level, and risk tolerance." },
          { t: "Get a data-driven match", d: "We narrow down strategies aligned to your inputs with transparent logic." },
          { t: "Launch with controls", d: "Use presets or fine-tune risk. Have control over your accounts — no coding required." }
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
    { icon: ShieldIcon, t: "14-day guarantee", d: "We’ll be happy to refund your money within 14 days if you’re not satisfied." },
    { icon: CodeIcon, t: "No coding", d: "Install, confirm parameters, connect, and go." },
    { icon: MonitorIcon, t: "MetaTrader 5", d: "Our strategies are currently for MT5 with other platforms coming soon." },
    { icon: LifeBuoyIcon, t: "Support, 7 days", d: "We’re here to help you go from demo to live with confidence." },
    { icon: TagIcon, t: "Fair pricing", d: "No profit-sharing. Straightforward licensing fee." }
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
      a: "We score each algorithm across risk mindset, frequency preferences, skill level, and strategy priorities. The top matches are shown — you can still explore all strategies."
    },
    {
      q: "Can I change risk settings?",
      a: "Yes. Adjust position size, max risk %, stop-loss and take-profit behavior, session filters, and more."
    },
    {
      q: "Do I need coding skills?",
      a: "No. Installation is made simple as copy & paste and support is available 7 days a week."
    },
    {
      q: "Can I run multiple strategies?",
      a: "Yes. Many traders use multiple strategies across different pairs and conditions to diversify execution."
    }
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
        <div className="text-slate-600 text-sm">© {new Date().getFullYear()} NASF LLC. All rights reserved.</div>
        <div className="text-xs text-slate-500">
          Trading involves risks. Past performance does not guarantee future results. No guarantee of profits. Algorithms
          are designed as automation tools.
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="https://uptiq.io/contact-us/" className="hover:underline">
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

/* ---------- Strategies + Matching Logic ---------- */

const ALGORITHMS = [
  {
    key: "flowguard-momentum",
    name: "FlowGuard Momentum",
    url: "https://uptiq.io/product/flowguard-momentum-algo/",
    desc: "Selective momentum strategy that waits for momentum to realign with the prevailing trend before executing. Designed for disciplined, rules-based execution.",
    traits: {
      experience: ["new", "some"],
      frequency: ["low"],
      holding: ["hours"],
      riskMindset: ["protect", "clarity"],
      priority: ["clarity"]
    }
  },
  {
    key: "spreadlock-alpha",
    name: "SpreadLock Alpha",
    url: "https://uptiq.io/product/spreadlock-alpha/",
    desc: "Quantitative market-neutral pairs strategy. Trades relationships between instruments with frequent repetition. Best for advanced users comfortable with statistical systems and streaks.",
    traits: {
      experience: ["advanced"],
      frequency: ["high"],
      holding: ["minutes", "hours"],
      riskMindset: ["stat"],
      priority: ["probability"]
    }
  },
  {
    key: "trendspring",
    name: "TrendSpring",
    url: "https://uptiq.io/product/trendspring/",
    desc: "Payoff-focused momentum + trend framework. Accepts short losing sequences while aiming for materially larger winners when markets follow through.",
    traits: {
      experience: ["new", "some"],
      frequency: ["low", "medium"],
      holding: ["multi"],
      riskMindset: ["payoff"],
      priority: ["clarity", "repeatable"]
    }
  },
  {
    key: "voltiband-trend",
    name: "VoltiBand Trend",
    url: "https://uptiq.io/product/voltiband-trend/",
    desc: "Volatility-aware mean-reversion within trend structure, using ATR-based exits and optional volatility regime filtering. Tunable selectivity for disciplined traders.",
    traits: {
      experience: ["some", "advanced"],
      frequency: ["medium"],
      holding: ["minutes", "hours"],
      riskMindset: ["protect", "payoff"],
      priority: ["repeatable"]
    }
  }
];

function matchAlgos(answers) {
  const w = { experience: 2.0, frequency: 2.0, holding: 1.4, riskMindset: 1.6, priority: 1.6 };

  return ALGORITHMS.map((algo) => {
    let score = 0;

    if (answers.experience && algo.traits.experience.includes(answers.experience)) score += 10 * w.experience;
    if (answers.frequency && algo.traits.frequency.includes(answers.frequency)) score += 10 * w.frequency;
    if (answers.holding && algo.traits.holding.includes(answers.holding)) score += 8 * w.holding;
    if (answers.riskMindset && algo.traits.riskMindset.includes(answers.riskMindset)) score += 9 * w.riskMindset;
    if (answers.priority && algo.traits.priority.includes(answers.priority)) score += 9 * w.priority;

    // Soft preference: if user is NOT advanced, slightly reduce SpreadLock as a primary match
    if (algo.key === "spreadlock-alpha" && answers.experience !== "advanced") score -= 6;

    return { ...algo, score };
  }).sort((a, b) => b.score - a.score);
}
