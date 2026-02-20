import { Metadata } from "next";
import Link from "next/link";
import WaitlistForm from "./waitlist-form";

// ─── Feature flag ──────────────────────────────────────────────────────────────
const CHECKOUT_ENABLED = false;
// ──────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Builder Cohort — Build. Ship. Get Hired. | Vibe Coders PH",
  description:
    "Learn the AI-native workflow to build production-grade software using modern coding agents. Members of our community have landed ₱70K+ remote jobs using the workflows we teach.",
  openGraph: {
    title: "AI Builder Cohort — Build. Ship. Get Hired.",
    description:
      "Learn the AI-native workflow to build production-grade software using modern coding agents. ₱70K+ remote jobs. Real builders. Real outcomes.",
    type: "website",
  },
};

const outcomes = [
  "Built revenue-generating AI products",
  "Shipped production-grade apps",
  "Landed ₱70K+ remote entry-level roles",
  "Using Claude Code, Codex, VS Code agents, AntiGravity",
];

const learnings = [
  "Multi-agent development workflows",
  "Context engineering and structured AI coding",
  "Building and deploying a real AI product",
  "Production hygiene and debugging AI-generated code",
  "Positioning your AI project for hiring or monetization",
];

const programDetails = [
  { label: "Sessions", value: "4 Live Sessions" },
  { label: "Duration", value: "2 Hours Each" },
  { label: "Format", value: "2 Consecutive Weekends" },
  { label: "Schedule", value: "Sat & Sun, 9–11 AM PH Time" },
  { label: "Recording", value: "Replay Access Included" },
  { label: "Seats", value: "Max 30 Seats" },
];

const pricingTiers = [
  {
    name: "Regular",
    price: "₱24,999",
    highlight: true,
    note: "Full access to all 4 live sessions and replay",
    features: [
      "4 live sessions",
      "Replay access",
      "Community access",
      "Project feedback",
    ],
  },
  {
    name: "Premium Mentored",
    price: "₱39,999",
    highlight: false,
    badge: "Limited seats",
    note: "Includes 1-on-1 mentorship sessions",
    features: [
      "Everything in Regular",
      "1-on-1 mentorship sessions",
      "Portfolio review",
      "Hiring guidance",
    ],
  },
];

const audiences = [
  { icon: "🎓", label: "Students serious about AI development" },
  { icon: "💻", label: "Junior developers" },
  { icon: "🔄", label: "Career shifters" },
  { icon: "🛠", label: "Freelancers" },
  { icon: "🚀", label: "Builders who want leverage" },
];

export default function AIBuilderCohortPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
        {/* Dot grid background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(139,92,246,0.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Fade edges over the grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, var(--background) 100%)",
          }}
        />

        {/* Ambient orbs */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[100px]" />
          <div className="absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full bg-fuchsia-600/8 blur-[80px]" />
          <div className="absolute bottom-0 left-1/2 h-[200px] w-[400px] -translate-x-1/2 rounded-full bg-violet-500/6 blur-[60px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-600 dark:text-violet-300 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse" />
            AI Builder Cohort — Early Access
          </div>

          <h1
            className="animate-fade-in-up text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground mb-6 leading-[1.05]"
            style={{ animationDelay: "80ms" }}
          >
            Build.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #7c3aed 0%, #c026d3 50%, #7c3aed 100%)",
                backgroundSize: "200% auto",
                animation: "gradient-shift 4s linear infinite",
              }}
            >
              Ship.
            </span>{" "}
            Get Hired.
          </h1>

          <p
            className="animate-fade-in-up text-xl sm:text-2xl text-foreground/70 max-w-2xl mx-auto mb-4 leading-relaxed"
            style={{ animationDelay: "160ms" }}
          >
            Learn the AI-native workflow to build production-grade software
            using modern coding agents.
          </p>

          <p
            className="animate-fade-in-up text-base sm:text-lg text-violet-700 dark:text-violet-300 mb-10"
            style={{ animationDelay: "240ms" }}
          >
            Members of our community have landed{" "}
            <span className="font-semibold">₱70K+ remote jobs</span> using the
            workflows we teach.
          </p>

          <div
            className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{ animationDelay: "320ms" }}
          >
            {CHECKOUT_ENABLED ? (
              <Link
                href="#waitlist"
                className="group relative inline-flex items-center gap-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 text-lg transition-all hover:shadow-lg hover:shadow-violet-500/40 overflow-hidden"
              >
                <span className="relative z-10">Secure Your Seat</span>
                <span className="relative z-10" aria-hidden>→</span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500" />
              </Link>
            ) : (
              <Link
                href="#waitlist"
                className="group relative inline-flex items-center gap-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 text-lg transition-all hover:shadow-lg hover:shadow-violet-500/40 overflow-hidden"
              >
                <span className="relative z-10">
                  👉 Join the GenAI to Z Early Access Waitlist
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF ─────────────────────────────────────────────────── */}
      <section className="py-20 border-t border-border/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="animate-fade-in-up text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
            Real Builders. Real Outcomes.
          </h2>
          <p
            className="animate-fade-in-up text-center text-muted-foreground mb-12 text-sm uppercase tracking-widest"
            style={{ animationDelay: "80ms" }}
          >
            From our community
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex items-start gap-4 rounded-xl border border-border bg-muted/20 p-5 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-200"
              >
                <span className="mt-0.5 flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/20 text-violet-600 dark:text-violet-400">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-foreground/80 leading-snug">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU'LL LEARN ────────────────────────────────────────────── */}
      <section className="py-20 border-t border-border/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="animate-fade-in-up text-3xl sm:text-4xl font-bold text-foreground mb-3">
              What You&apos;ll Master in 2 Weekends
            </h2>
            <p
              className="animate-fade-in-up text-muted-foreground"
              style={{ animationDelay: "80ms" }}
            >
              Hands-on. Production-focused. No fluff.
            </p>
          </div>

          <div className="space-y-4">
            {learnings.map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-5 rounded-xl border border-border bg-muted/20 px-6 py-5 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-200"
              >
                <span className="flex-shrink-0 text-lg font-black text-violet-600/50 dark:text-violet-400/60 tabular-nums w-6 text-right">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-foreground/85 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROGRAM STRUCTURE ────────────────────────────────────────────── */}
      <section className="py-20 border-t border-border/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Cohort Format
            </h2>
            <p className="text-muted-foreground">
              Focused. Structured. Results-oriented.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {programDetails.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl border border-border bg-muted/20 p-5"
              >
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  {label}
                </p>
                <p className="text-foreground font-semibold leading-snug">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground italic">
            Schedule is tentative. Final dates announced after GenAI to Z.
          </p>
        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────────────────────────── */}
      <section className="py-20 border-t border-border/60" id="pricing">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Investment
            </h2>
          </div>

          {/* Early bird callout */}
          <div className="mb-8 flex items-start gap-3 rounded-xl border border-violet-500/40 bg-violet-500/8 px-5 py-4">
            <span className="text-xl flex-shrink-0">⚡</span>
            <div>
              <p className="font-semibold text-violet-700 dark:text-violet-300 text-sm">
                First 10 on the waitlist get ₱5,000 off — any tier
              </p>
              <p className="text-muted-foreground text-sm mt-0.5">
                When enrollment opens, early bird slots get a coupon code with a 24-hour claim window. Unused slots roll to the next person on the list.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-6 flex flex-col transition-all duration-200 ${
                  tier.highlight
                    ? "border-violet-500/50 bg-violet-500/8 shadow-lg shadow-violet-500/10"
                    : "border-border bg-muted/20 hover:border-border"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white tracking-wide">
                      Standard
                    </span>
                  </div>
                )}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex rounded-full bg-fuchsia-600 px-3 py-1 text-xs font-semibold text-white tracking-wide">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    {tier.name}
                  </p>
                  <p className="text-4xl font-black text-foreground">
                    {tier.price}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {tier.note}
                  </p>
                </div>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-foreground/70"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-violet-600 dark:text-violet-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={CHECKOUT_ENABLED ? "#checkout" : "#waitlist"}
                  className={`block w-full text-center rounded-lg py-3 px-4 text-sm font-semibold transition-all duration-200 ${
                    tier.highlight
                      ? "bg-violet-600 hover:bg-violet-500 text-white hover:shadow-md hover:shadow-violet-500/25"
                      : "border border-border text-foreground/80 hover:border-violet-500/40 hover:text-violet-700 dark:hover:text-violet-300 hover:bg-violet-500/10"
                  }`}
                >
                  {CHECKOUT_ENABLED ? "Enroll Now" : "Join Waitlist"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR ──────────────────────────────────────────────── */}
      <section className="py-20 border-t border-border/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Who This Is For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {audiences.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-xl border border-border bg-muted/20 px-5 py-4 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-200"
              >
                <span className="text-2xl" aria-hidden>
                  {icon}
                </span>
                <span className="text-foreground/80 text-sm leading-snug font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-20 border-t border-border/60">
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-violet-500/10 blur-[80px]"
          />
          <h2 className="relative text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Build With Us?
          </h2>
          <p className="relative text-muted-foreground mb-8">
            Spots are limited to 30 builders. First 10 on the waitlist get ₱5,000 off any tier — coupon sent when enrollment opens, 24-hour claim window.
          </p>
          <Link
            href="#waitlist"
            className="group relative inline-flex items-center gap-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 text-lg transition-all hover:shadow-lg hover:shadow-violet-500/30 overflow-hidden"
          >
            <span className="relative z-10">Join the Early Access List</span>
            <span className="relative z-10" aria-hidden>→</span>
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500" />
          </Link>
        </div>
      </section>

      {/* ─── WAITLIST FORM ────────────────────────────────────────────────── */}
      {!CHECKOUT_ENABLED && (
        <section className="py-20 border-t border-border/60" id="waitlist">
          <div className="mx-auto max-w-lg px-4 sm:px-6">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-3">
                Get Early Access
              </h2>
              <p className="text-muted-foreground text-sm">
                First 10 on the waitlist get ₱5,000 off any tier — coupon sent when enrollment opens, 24-hour claim window.
              </p>
            </div>

            <div className="relative rounded-2xl border border-violet-500/20 bg-card p-6 sm:p-8 shadow-lg shadow-violet-500/5">
              {/* Subtle glow ring */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139,92,246,0.1) 0%, transparent 50%, rgba(192,38,211,0.06) 100%)",
                }}
              />
              <WaitlistForm />
            </div>

            <p className="mt-6 text-center text-xs text-muted-foreground/70">
              No spam. Just the info you need to get in early.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
