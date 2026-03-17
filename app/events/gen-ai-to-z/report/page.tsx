import { Metadata } from "next";
import { getEventReport } from "@/lib/event-report";
import type { ReportItem } from "@/lib/event-report";

export const metadata: Metadata = {
  title: "Gen AI to Z — Registration Demographics Report",
  description:
    "Live registration demographics and analytics for the Gen AI to Z AI Career Summit at UP Diliman, March 17, 2026.",
  openGraph: {
    title: "Gen AI to Z — Registration Demographics Report",
    description:
      "Live demographics report: schools, affiliations, and organization partners for the Gen AI to Z AI Career Summit.",
    type: "website",
    url: "https://www.vibecoders.ph/events/gen-ai-to-z/report",
    images: [{ url: "/events/gen-ai-to-z-og.jpg", width: 1200, height: 630 }],
  },
};

// Revalidate every 5 minutes
export const revalidate = 300;

// ── Chart colors ─────────────────────────────────────────────────────
const COLORS = [
  "#8b5cf6", "#d946ef", "#06b6d4", "#10b981", "#f59e0b",
  "#f43f5e", "#38bdf8", "#84cc16", "#f97316", "#ec4899",
  "#6366f1", "#14b8a6",
];

// ── Donut Chart (CSS conic-gradient) ─────────────────────────────────
function DonutChart({ items, total }: { items: ReportItem[]; total: number }) {
  let cumPct = 0;
  const segments = items.map((item, i) => {
    const start = cumPct;
    cumPct += item.pct;
    return `${COLORS[i % COLORS.length]} ${start}% ${cumPct}%`;
  });
  const gradient = `conic-gradient(from 0deg, ${segments.join(", ")})`;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-8">
      <div className="relative w-52 h-52 shrink-0">
        <div
          className="w-full h-full rounded-full"
          style={{ background: gradient }}
        />
        <div className="absolute inset-[25%] rounded-full bg-[#0f0b1a] flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-white">{total}</span>
          <span className="text-xs text-violet-300">registrants</span>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        {items.map((item, i) => (
          <div key={item.name} className="flex items-center gap-2 text-sm">
            <span
              className="w-3 h-3 rounded-sm shrink-0"
              style={{ background: COLORS[i % COLORS.length] }}
            />
            <span className="text-violet-100">{item.name}</span>
            <span className="text-violet-400 ml-auto pl-4 tabular-nums">
              {item.count}{" "}
              <span className="text-violet-500">({item.pct}%)</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Horizontal Bar Chart ─────────────────────────────────────────────
function BarChart({
  items,
  maxCount,
  colorStart = "#8b5cf6",
  colorEnd = "#d946ef",
}: {
  items: ReportItem[];
  maxCount?: number;
  colorStart?: string;
  colorEnd?: string;
}) {
  const max = maxCount ?? items[0]?.count ?? 1;
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => {
        const pct = (item.count / max) * 100;
        const t = items.length > 1 ? i / (items.length - 1) : 0;
        // Simple lerp for gradient effect
        const color = i % 2 === 0 ? colorStart : colorEnd;
        void t; // unused but keeping for potential gradient
        return (
          <div key={item.name} className="group">
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm text-violet-200 w-[40%] sm:w-[35%] text-right truncate shrink-0">
                {item.name}
              </span>
              <div className="flex-1 h-6 sm:h-7 bg-violet-950/50 rounded overflow-hidden">
                <div
                  className="h-full rounded transition-all duration-700 ease-out"
                  style={{
                    width: `${Math.max(pct, 2)}%`,
                    background: color,
                  }}
                />
              </div>
              <span className="text-xs sm:text-sm text-violet-100 font-semibold tabular-nums w-16 sm:w-20">
                {item.count}{" "}
                <span className="text-violet-500 text-[10px] sm:text-xs">
                  ({item.pct}%)
                </span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Stat Card ────────────────────────────────────────────────────────
function StatCard({
  value,
  label,
  color,
}: {
  value: string | number;
  label: string;
  color: string;
}) {
  return (
    <div
      className="rounded-xl border-2 px-5 py-4 text-center"
      style={{ borderColor: color, background: "rgba(15,11,26,0.8)" }}
    >
      <div className="text-2xl sm:text-3xl font-bold" style={{ color }}>
        {value}
      </div>
      <div className="text-xs sm:text-sm text-violet-400 mt-1">{label}</div>
    </div>
  );
}

// ── Section Wrapper ──────────────────────────────────────────────────
function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl bg-[#1a1332]/80 border border-violet-900/40 p-5 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-violet-400 mb-6">{subtitle}</p>
      )}
      {children}
    </section>
  );
}

// ── Page ─────────────────────────────────────────────────────────────
export default async function ReportPage() {
  const data = await getEventReport();
  const topSchools = data.schools.slice(0, 25);
  const otherSchools = data.schools.slice(25);

  return (
    <div className="min-h-screen bg-[#0f0b1a]">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/80 via-[#0f0b1a] to-fuchsia-950/60" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139,92,246,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative max-w-5xl mx-auto px-4 pt-28 pb-16 text-center">
          <p className="text-violet-400 text-sm font-medium tracking-wider uppercase mb-3">
            Registration Analytics
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3">
            Gen AI to Z
          </h1>
          <p className="text-violet-300 text-base sm:text-lg mb-10">
            AI Career Summit &middot; UP Diliman &middot; March 17, 2026
          </p>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            <StatCard
              value={data.summary.total}
              label="Total Registrants"
              color="#8b5cf6"
            />
            <StatCard
              value={data.summary.confirmed}
              label="Confirmed"
              color="#10b981"
            />
            <StatCard
              value={data.summary.checkedIn}
              label="Checked In"
              color="#06b6d4"
            />
            <StatCard
              value={`${data.summary.checkinPctConfirmed}%`}
              label="Show-up Rate"
              color="#f59e0b"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mt-3">
            <StatCard
              value={data.summary.pending}
              label="Pending"
              color="#f59e0b"
            />
            <StatCard
              value={data.schools.length}
              label="Schools"
              color="#d946ef"
            />
            <StatCard
              value={data.orgPartners.length}
              label="Org Partners"
              color="#f43f5e"
            />
            <StatCard
              value={`${data.summary.checkinPctTotal}%`}
              label="% of All Registered"
              color="#38bdf8"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 pb-20 space-y-8">
        {/* Check-in Analytics */}
        {data.checkinTimeline.length > 0 && (
          <Section
            title="Check-in Analytics"
            subtitle={`${data.summary.checkedIn} of ${data.summary.total} registered attendees checked in (${data.summary.checkinPctTotal}%)`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              <div className="rounded-lg border border-cyan-800/50 bg-cyan-950/20 px-4 py-3 text-center">
                <div className="text-2xl font-bold text-cyan-400">{data.summary.checkedIn}</div>
                <div className="text-xs text-cyan-300/60">Total Checked In</div>
              </div>
              <div className="rounded-lg border border-emerald-800/50 bg-emerald-950/20 px-4 py-3 text-center">
                <div className="text-2xl font-bold text-emerald-400">{data.summary.checkinPctConfirmed}%</div>
                <div className="text-xs text-emerald-300/60">of Confirmed</div>
              </div>
              <div className="rounded-lg border border-violet-800/50 bg-violet-950/20 px-4 py-3 text-center col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold text-violet-400">{data.summary.total - data.summary.checkedIn}</div>
                <div className="text-xs text-violet-300/60">No-Shows</div>
              </div>
            </div>
            {/* Check-in timeline bars */}
            <div className="flex flex-col gap-2">
              {(() => {
                const maxCheckin = Math.max(...data.checkinTimeline.map(t => t.count));
                return data.checkinTimeline.map((t, i) => {
                  const pct = (t.count / maxCheckin) * 100;
                  return (
                    <div key={t.label} className="group">
                      <div className="flex items-center gap-3">
                        <span className="text-xs sm:text-sm text-cyan-200 w-[35%] sm:w-[30%] text-right truncate shrink-0">
                          {t.label}
                        </span>
                        <div className="flex-1 h-7 bg-cyan-950/40 rounded overflow-hidden">
                          <div
                            className="h-full rounded transition-all duration-700 ease-out"
                            style={{
                              width: `${Math.max(pct, 2)}%`,
                              background: i === 0 ? '#06b6d4' : i <= 2 ? '#8b5cf6' : '#d946ef',
                            }}
                          />
                        </div>
                        <span className="text-xs sm:text-sm text-cyan-100 font-semibold tabular-nums w-12">
                          {t.count}
                        </span>
                      </div>
                    </div>
                  );
                });
              })()}
            </div>
            <p className="text-xs text-violet-500 mt-4">
              Peak check-in hour:{" "}
              {(() => {
                const peak = data.checkinTimeline.reduce((a, b) => a.count > b.count ? a : b);
                return `${peak.label} with ${peak.count} check-ins`;
              })()}
            </p>
          </Section>
        )}

        {/* Affiliation */}
        <Section title="Demographics by Affiliation" subtitle="Breakdown of registrant types">
          <DonutChart items={data.affiliation} total={data.summary.total} />
        </Section>

        {/* How Did You Hear */}
        <Section
          title="How Did You Hear About Us?"
          subtitle="Discovery channel breakdown"
        >
          <BarChart
            items={data.howDidYouHear}
            colorStart="#8b5cf6"
            colorEnd="#06b6d4"
          />
        </Section>

        {/* Top Schools */}
        <Section
          title={`Top ${topSchools.length} Schools`}
          subtitle={`Out of ${data.schools.length} unique institutions`}
        >
          <BarChart
            items={topSchools}
            colorStart="#8b5cf6"
            colorEnd="#d946ef"
          />
        </Section>

        {/* Other Schools */}
        {otherSchools.length > 0 && (
          <Section
            title="Other Schools"
            subtitle={`${otherSchools.length} additional institutions`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
              {otherSchools.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center justify-between py-1.5 border-b border-violet-900/30 text-sm"
                >
                  <span className="text-violet-200 truncate mr-3">
                    {s.name}
                  </span>
                  <span className="text-violet-400 tabular-nums shrink-0">
                    {s.count}
                  </span>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Org Partners */}
        <Section
          title="Organization Partners"
          subtitle={`${data.orgPartners.length} partner organizations represented`}
        >
          <BarChart
            items={data.orgPartners}
            colorStart="#06b6d4"
            colorEnd="#d946ef"
          />
        </Section>

        {/* Timeline */}
        <Section
          title="Registration Timeline"
          subtitle="Daily registration volume over time"
        >
          <div className="overflow-x-auto">
            <div className="flex items-end gap-[2px] h-40 min-w-[600px]">
              {data.timeline.map((t) => {
                const maxDaily = Math.max(...data.timeline.map((d) => d.count));
                const h = (t.count / maxDaily) * 100;
                return (
                  <div
                    key={t.date}
                    className="flex-1 group relative"
                    title={`${t.date}: ${t.count} new (${t.cumulative} total)`}
                  >
                    <div
                      className="w-full rounded-t bg-violet-500/70 hover:bg-fuchsia-500/80 transition-colors"
                      style={{ height: `${Math.max(h, 2)}%` }}
                    />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-violet-900 text-violet-100 text-[10px] rounded px-1.5 py-0.5 whitespace-nowrap z-10">
                      {t.date.slice(5)}: {t.count} new
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between text-[10px] text-violet-500 mt-1 min-w-[600px]">
              <span>{data.timeline[0]?.date.slice(5)}</span>
              <span>{data.timeline[Math.floor(data.timeline.length / 2)]?.date.slice(5)}</span>
              <span>{data.timeline[data.timeline.length - 1]?.date.slice(5)}</span>
            </div>
          </div>
          <p className="text-xs text-violet-500 mt-3">
            Peak day:{" "}
            {(() => {
              const peak = data.timeline.reduce((a, b) =>
                a.count > b.count ? a : b
              );
              return `${peak.date} with ${peak.count} registrations`;
            })()}
          </p>
        </Section>

        {/* Footer */}
        <p className="text-center text-xs text-violet-600 pt-4">
          Vibe Coders Philippines &middot; vibecoders.ph &middot; Data
          auto-refreshes every 5 minutes
        </p>
      </div>
    </div>
  );
}
