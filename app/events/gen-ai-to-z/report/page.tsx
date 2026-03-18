import { Metadata } from "next";
import { getEventReport } from "@/lib/event-report";
import type { ReportItem, AffiliationAttendance, RegTimingBucket, FeedbackData } from "@/lib/event-report";

export const metadata: Metadata = {
  title: "Gen AI to Z — Registration Demographics Report",
  description:
    "Registration demographics and check-in analytics for the Gen AI to Z AI Career Summit at UP Diliman, March 17, 2026.",
  openGraph: {
    title: "Gen AI to Z — Registration Demographics Report",
    description:
      "Live demographics report: schools, affiliations, and organization partners for the Gen AI to Z AI Career Summit.",
    type: "website",
    url: "https://www.vibecoders.ph/events/gen-ai-to-z/report",
    images: [{ url: "/events/gen-ai-to-z-og.jpg", width: 1200, height: 630 }],
  },
};

// Static page — event concluded March 17, 2026
export const revalidate = false;

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

// ── Star Visual ──────────────────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map(n => (
        <span
          key={n}
          className={`text-sm ${n <= Math.round(rating) ? 'text-yellow-400' : 'text-violet-800'}`}
        >
          ★
        </span>
      ))}
    </span>
  );
}

// ── Feedback Section ─────────────────────────────────────────────────
function FeedbackSection({ feedback }: { feedback: FeedbackData }) {
  return (
    <Section
      title="Attendee Satisfaction"
      subtitle={`${feedback.totalResponses} responses (${feedback.responseRate}% response rate of checked-in attendees)`}
    >
      {/* NPS + Headline Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <div className="rounded-xl border-2 border-emerald-600 bg-emerald-950/20 px-4 py-4 text-center col-span-2 sm:col-span-1">
          <div className="text-3xl font-bold text-emerald-400">{feedback.nps}%</div>
          <div className="text-xs text-emerald-300/60 mt-1">Would Recommend</div>
          <div className="text-[10px] text-violet-500 mt-0.5">{feedback.wouldRecommendYes}/{feedback.wouldRecommendTotal} respondents</div>
        </div>
        <div className="rounded-xl border-2 border-yellow-600/50 bg-yellow-950/10 px-4 py-4 text-center">
          <div className="text-3xl font-bold text-yellow-400">{feedback.ratings[0]?.avg}</div>
          <div className="text-xs text-yellow-300/60 mt-1">Overall Rating</div>
          <div className="text-[10px] text-violet-500 mt-0.5">out of 5.0</div>
        </div>
        <div className="rounded-xl border border-violet-800/40 bg-violet-950/20 px-4 py-4 text-center">
          <div className="text-2xl font-bold text-violet-300">{feedback.totalResponses}</div>
          <div className="text-xs text-violet-400 mt-1">Responses</div>
        </div>
        <div className="rounded-xl border border-violet-800/40 bg-violet-950/20 px-4 py-4 text-center">
          <div className="text-2xl font-bold text-violet-300">{feedback.responseRate}%</div>
          <div className="text-xs text-violet-400 mt-1">Response Rate</div>
        </div>
      </div>

      {/* Rating Categories with Distribution */}
      <h3 className="text-sm font-bold text-violet-200 mb-3 uppercase tracking-wider">Ratings by Category</h3>
      <div className="space-y-3 mb-8">
        {feedback.ratings.map((cat) => {
          const total = cat.distribution.reduce((a, b) => a + b, 0);
          return (
            <div key={cat.label} className="group">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-violet-200">{cat.label}</span>
                <span className="flex items-center gap-2">
                  <Stars rating={cat.avg} />
                  <span className="text-sm font-bold text-yellow-400 tabular-nums w-10 text-right">{cat.avg}</span>
                </span>
              </div>
              <div className="flex h-5 rounded-lg overflow-hidden bg-violet-950/40">
                {cat.distribution.map((count, i) => {
                  if (count === 0) return null;
                  const pct = (count / total) * 100;
                  const colors = ['#ef4444', '#f97316', '#eab308', '#a3e635', '#22c55e'];
                  return (
                    <div
                      key={i}
                      className="h-full flex items-center justify-center text-[9px] font-bold text-white/90 transition-all"
                      style={{ width: `${pct}%`, background: colors[i], minWidth: pct > 0 ? '16px' : 0 }}
                      title={`${i + 1} star: ${count} (${pct.toFixed(0)}%)`}
                    >
                      {pct >= 8 && count}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="flex items-center gap-3 text-[10px] text-violet-500 mt-1">
          {['1★', '2★', '3★', '4★', '5★'].map((label, i) => {
            const colors = ['#ef4444', '#f97316', '#eab308', '#a3e635', '#22c55e'];
            return (
              <span key={label} className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: colors[i] }} />
                {label}
              </span>
            );
          })}
        </div>
      </div>

      {/* Testimonials */}
      {feedback.testimonials.length > 0 && (
        <>
          <h3 className="text-sm font-bold text-violet-200 mb-3 uppercase tracking-wider">What Attendees Said</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {feedback.testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-lg bg-violet-950/30 border border-violet-800/20 p-4"
              >
                <p className="text-sm text-violet-200 italic leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <p className="text-[10px] text-violet-500 mt-2">
                  — {t.isAnonymous ? 'Anonymous attendee' : 'Event attendee'}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Topics for Future Events */}
      {feedback.topicsForFuture.length > 0 && (
        <>
          <h3 className="text-sm font-bold text-violet-200 mb-3 uppercase tracking-wider">Requested Topics for Future Events</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {feedback.topicsForFuture.map((topic, i) => (
              <div
                key={topic.name}
                className="rounded-full border px-4 py-1.5"
                style={{
                  borderColor: COLORS[i % COLORS.length] + '50',
                  background: COLORS[i % COLORS.length] + '10',
                }}
              >
                <span className="text-sm" style={{ color: COLORS[i % COLORS.length] }}>
                  {topic.name}
                </span>
                <span className="text-[10px] text-violet-400 ml-1.5">{topic.count}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Areas for Improvement */}
      {feedback.whatNeedsImprovement.length > 0 && (
        <>
          <h3 className="text-sm font-bold text-violet-200 mb-3 uppercase tracking-wider">Areas for Improvement</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {feedback.whatNeedsImprovement.map((text, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-violet-300 bg-violet-950/20 rounded-lg px-3 py-2.5">
                <span className="text-fuchsia-500 mt-0.5 shrink-0">→</span>
                <span className="leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </Section>
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

        {/* ═══ ATTENDEE SATISFACTION ═══ */}
        {data.feedback && <FeedbackSection feedback={data.feedback} />}

        {/* ═══ CONVERSION FUNNEL ═══ */}
        <Section
          title="Conversion Funnel"
          subtitle="Registration → Confirmation → Check-in pipeline"
        >
          <div className="space-y-4">
            {[
              { label: 'Registered', value: data.summary.total, pct: 100, color: '#8b5cf6' },
              { label: 'Confirmed (Verified Email)', value: data.summary.confirmed, pct: data.summary.total > 0 ? +((data.summary.confirmed / data.summary.total) * 100).toFixed(1) : 0, color: '#10b981' },
              { label: 'Checked In (Attended)', value: data.summary.checkedIn, pct: data.summary.total > 0 ? +((data.summary.checkedIn / data.summary.total) * 100).toFixed(1) : 0, color: '#06b6d4' },
            ].map((step, i) => (
              <div key={step.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm text-violet-200 font-medium">{step.label}</span>
                  <span className="text-sm font-bold tabular-nums" style={{ color: step.color }}>
                    {step.value} <span className="text-violet-500 text-xs font-normal">({step.pct}%)</span>
                  </span>
                </div>
                <div className="h-8 bg-violet-950/50 rounded-lg overflow-hidden">
                  <div
                    className="h-full rounded-lg transition-all duration-700"
                    style={{ width: `${step.pct}%`, background: step.color }}
                  />
                </div>
                {i < 2 && (
                  <div className="flex items-center gap-2 mt-1.5 ml-4">
                    <span className="text-[10px] text-violet-500">
                      {i === 0
                        ? `${data.summary.total - data.summary.confirmed} did not verify email (${(((data.summary.total - data.summary.confirmed) / data.summary.total) * 100).toFixed(1)}% drop)`
                        : `${data.summary.confirmed - data.summary.checkedIn} confirmed but did not attend (${((((data.summary.confirmed - data.summary.checkedIn)) / data.summary.confirmed) * 100).toFixed(1)}% drop)`}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* ═══ ATTENDANCE BY AFFILIATION ═══ */}
        <Section
          title="Attendance Rate by Segment"
          subtitle="Check-in rate across audience demographics"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-violet-800/40">
                  <th className="text-left py-2 pr-4 text-violet-400 font-medium">Segment</th>
                  <th className="text-right px-3 py-2 text-violet-400 font-medium">Registered</th>
                  <th className="text-right px-3 py-2 text-violet-400 font-medium">Checked In</th>
                  <th className="text-right pl-3 py-2 text-violet-400 font-medium">Show-up %</th>
                </tr>
              </thead>
              <tbody>
                {data.affiliationAttendance.map((row) => (
                  <tr key={row.name} className="border-b border-violet-900/20">
                    <td className="py-2.5 pr-4 text-violet-100">{row.name}</td>
                    <td className="text-right px-3 py-2.5 text-violet-300 tabular-nums">{row.total}</td>
                    <td className="text-right px-3 py-2.5 text-cyan-300 tabular-nums">{row.checkedIn}</td>
                    <td className="text-right pl-3 py-2.5 tabular-nums font-semibold" style={{
                      color: row.pct >= 45 ? '#10b981' : row.pct >= 30 ? '#f59e0b' : '#f43f5e',
                    }}>
                      {row.pct}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* ═══ REGISTRATION TIMING → ATTENDANCE ═══ */}
        <Section
          title="When They Registered vs. Whether They Showed Up"
          subtitle="Later registrants had significantly higher attendance rates"
        >
          <div className="space-y-3">
            {data.regTimingAttendance.map((bucket) => {
              const maxTotal = Math.max(...data.regTimingAttendance.map(b => b.total));
              const barWidth = (bucket.total / maxTotal) * 100;
              const checkinWidth = (bucket.checkedIn / maxTotal) * 100;
              return (
                <div key={bucket.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs sm:text-sm text-violet-200">{bucket.label}</span>
                    <span className="text-xs tabular-nums">
                      <span className="text-cyan-400 font-semibold">{bucket.checkedIn}</span>
                      <span className="text-violet-500">/{bucket.total}</span>
                      <span className="font-semibold ml-1.5" style={{
                        color: bucket.pct >= 50 ? '#10b981' : bucket.pct >= 35 ? '#f59e0b' : '#f43f5e',
                      }}>
                        ({bucket.pct}%)
                      </span>
                    </span>
                  </div>
                  <div className="relative h-6 bg-violet-950/50 rounded overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 rounded bg-violet-800/40"
                      style={{ width: `${barWidth}%` }}
                    />
                    <div
                      className="absolute inset-y-0 left-0 rounded bg-cyan-500/70"
                      style={{ width: `${checkinWidth}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-4 mt-4 text-[10px] text-violet-500">
            <span className="flex items-center gap-1.5"><span className="w-3 h-2 rounded bg-violet-800/60 inline-block" /> Registered</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-2 rounded bg-cyan-500/70 inline-block" /> Checked In</span>
          </div>
        </Section>

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

        {/* ═══ YEAR LEVEL DISTRIBUTION ═══ */}
        {data.yearLevel.length > 0 && (
          <Section
            title="Year Level Distribution"
            subtitle={`Academic level of ${data.yearLevel.reduce((s, y) => s + y.count, 0)} student registrants`}
          >
            <DonutChart
              items={data.yearLevel}
              total={data.yearLevel.reduce((s, y) => s + y.count, 0)}
            />
          </Section>
        )}

        {/* ═══ AUDIENCE INTERESTS ═══ */}
        {data.topInterests.length > 0 && (
          <Section
            title="Audience Interests"
            subtitle="Top topics extracted from 'What are your expectations?' responses"
          >
            <div className="flex flex-wrap gap-2">
              {data.topInterests.map((interest, i) => {
                const maxCount = data.topInterests[0]?.count ?? 1;
                const scale = 0.6 + (interest.count / maxCount) * 0.4;
                return (
                  <div
                    key={interest.name}
                    className="rounded-full border px-4 py-2 text-center transition-colors"
                    style={{
                      borderColor: COLORS[i % COLORS.length] + '60',
                      background: COLORS[i % COLORS.length] + '15',
                      transform: `scale(${scale})`,
                    }}
                  >
                    <span className="text-sm font-medium" style={{ color: COLORS[i % COLORS.length] }}>
                      {interest.name}
                    </span>
                    <span className="text-[10px] text-violet-400 ml-1.5">
                      {interest.pct}%
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-violet-500 mt-4">
              Based on {data.topInterests.reduce((s, i) => s + i.count, 0)} keyword matches from free-text responses. Percentages are of respondents who filled out the field.
            </p>
          </Section>
        )}

        {/* Timeline */}
        <Section
          title="Registration Timeline"
          subtitle="Daily registration volume over time"
        >
          <div className="overflow-x-auto">
            <div className="flex gap-[2px] h-40 min-w-[600px]">
              {(() => {
                // Group days into weekly buckets for cleaner visualization
                const weekly: { label: string; count: number; cumulative: number }[] = [];
                for (let i = 0; i < data.timeline.length; i += 7) {
                  const chunk = data.timeline.slice(i, i + 7);
                  const count = chunk.reduce((s, d) => s + d.count, 0);
                  const last = chunk[chunk.length - 1];
                  weekly.push({ label: chunk[0].date, count, cumulative: last.cumulative });
                }
                const maxWeekly = Math.max(...weekly.map(w => w.count));
                return weekly.map((w) => {
                  const h = (w.count / maxWeekly) * 100;
                  return (
                    <div
                      key={w.label}
                      className="flex-1 flex items-end group relative"
                      title={`Week of ${w.label}: ${w.count} registrations (${w.cumulative} total)`}
                    >
                      <div
                        className="w-full rounded-t bg-violet-500/80 hover:bg-fuchsia-500/80 transition-colors"
                        style={{ height: `${Math.max(h, 3)}%` }}
                      />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-violet-900 text-violet-100 text-[10px] rounded px-1.5 py-0.5 whitespace-nowrap z-10">
                        {w.label.slice(5)}: {w.count}
                      </div>
                    </div>
                  );
                });
              })()}
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

        {/* ═══ KEY INSIGHTS ═══ */}
        <Section
          title="Key Insights"
          subtitle="Executive summary for organizers, sponsors, and speakers"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ...(data.feedback ? [{
                icon: '⭐',
                title: 'Exceptional Satisfaction',
                body: `${data.feedback.ratings[0]?.avg}/5.0 overall rating from ${data.feedback.totalResponses} respondents. ${data.feedback.nps}% would recommend the event — world-class satisfaction score.`,
              }] : []),
              {
                icon: '📊',
                title: 'Strong Reach',
                body: `${data.summary.total} registrants from ${data.schools.length} schools and ${data.orgPartners.length} org partners — proving demand for AI/tech career events in the Philippine academic community.`,
              },
              {
                icon: '✅',
                title: 'Healthy Show-up Rate',
                body: `${data.summary.checkinPctConfirmed}% of confirmed registrants checked in — above the 30-40% industry average for free tech events.`,
              },
              {
                icon: '⏰',
                title: 'Recency Drives Attendance',
                body: `Registrants who signed up in the last 2 days had a ${data.regTimingAttendance[data.regTimingAttendance.length - 1]?.pct ?? 0}% show-up rate vs ${data.regTimingAttendance[0]?.pct ?? 0}% for the earliest cohort.`,
              },
              {
                icon: '🎓',
                title: 'Student-Dominated Audience',
                body: `${data.affiliationAttendance[0]?.name === 'College Student' ? `${data.affiliationAttendance[0].total} college students (${(data.affiliationAttendance[0].total / data.summary.total * 100).toFixed(0)}%) — the core demographic` : 'Diverse audience across multiple segments.'}.`,
              },
              {
                icon: '🔍',
                title: 'Top Discovery Channel',
                body: `"${data.howDidYouHear[0]?.name}" drove ${data.howDidYouHear[0]?.pct}% of registrations — the dominant marketing channel.`,
              },
              {
                icon: '🤖',
                title: 'AI Interest Dominates',
                body: data.topInterests.length > 0
                  ? `Top audience interests: ${data.topInterests.slice(0, 3).map(i => i.name).join(', ')}.`
                  : 'Audience showed broad interest across AI topics.',
              },
              ...(data.feedback && data.feedback.topicsForFuture.length > 0 ? [{
                icon: '🔮',
                title: 'Audience Wants More',
                body: `Top requested topics: ${data.feedback.topicsForFuture.slice(0, 3).map(t => t.name).join(', ')}. ${data.feedback.responseRate}% of attendees submitted feedback — strong post-event engagement.`,
              }] : []),
            ].map((insight) => (
              <div
                key={insight.title}
                className="rounded-xl bg-violet-950/40 border border-violet-800/30 p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{insight.icon}</span>
                  <h3 className="text-sm font-bold text-violet-100">{insight.title}</h3>
                </div>
                <p className="text-xs text-violet-300 leading-relaxed">{insight.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Feedback CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-fuchsia-950/60 to-violet-950/60 border border-fuchsia-800/30 p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Attended the Summit?</h2>
          <p className="text-sm text-violet-300 mb-5">Your feedback helps us build better events for the community.</p>
          <a
            href="/events/gen-ai-to-z/feedback"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-500 hover:to-violet-500 text-white rounded-lg font-semibold shadow-lg shadow-fuchsia-500/30 transition-all hover:scale-105"
          >
            Share Your Feedback
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-violet-600 pt-4">
          Vibe Coders Philippines &middot; vibecoders.ph &middot; Event
          concluded March 17, 2026
        </p>
      </div>
    </div>
  );
}
