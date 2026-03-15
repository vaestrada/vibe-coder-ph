"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Trophy, Lock, Users, ShoppingBag, Tag, Shirt,
  CheckCircle2, RotateCcw, Zap, Medal,
} from "lucide-react";

interface Registrant {
  id: string;
  full_name: string;
}

type PrizeConfig = {
  round: number;
  label: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

const PRIZES: PrizeConfig[] = [
  { round: 1, label: "Tote Bag", Icon: ShoppingBag },
  { round: 2, label: "Sticker Pack", Icon: Tag },
  { round: 3, label: "Shirt", Icon: Shirt },
];

const SPIN_DURATION_MS = 4000;
const FAST_INTERVAL = 60;
const SLOW_INTERVAL = 210;

const MEDAL_COLORS = ["text-amber-400", "text-slate-300", "text-orange-500"];

export default function RafflePage() {
  const [adminKey, setAdminKey] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [registrants, setRegistrants] = useState<Registrant[]>([]);
  const [eligible, setEligible] = useState<Registrant[]>([]);
  const [winners, setWinners] = useState<{ round: number; label: string; name: string; id: string }[]>([]);
  const [currentDisplay, setCurrentDisplay] = useState("—");
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentWinner, setCurrentWinner] = useState<Registrant | null>(null);
  const [loading, setLoading] = useState(false);
  const [showDone, setShowDone] = useState(false);

  const spinIntervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentRound = winners.length + 1;
  const currentPrize = PRIZES[currentRound - 1] ?? null;
  const isDone = winners.length >= PRIZES.length;

  async function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setAuthError("");
    try {
      const res = await fetch("/api/raffle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adminKey }),
      });
      const data = await res.json();
      if (!res.ok) {
        setAuthError("Invalid admin key.");
        setLoading(false);
        return;
      }
      if (data.registrants.length === 0) {
        setAuthError("No checked-in attendees found yet.");
        setLoading(false);
        return;
      }
      setRegistrants(data.registrants);
      setEligible(data.registrants);
      setIsAuthenticated(true);
    } catch {
      setAuthError("Connection error. Make sure the server is running.");
    }
    setLoading(false);
  }

  const pickWinner = useCallback(() => {
    if (isSpinning || eligible.length === 0 || isDone) return;
    setIsSpinning(true);
    setCurrentWinner(null);

    const chosen = eligible[Math.floor(Math.random() * eligible.length)];
    let elapsed = 0;
    let interval = FAST_INTERVAL;

    function tick() {
      const remaining = SPIN_DURATION_MS - elapsed;
      const idx = Math.floor(Math.random() * eligible.length);
      setCurrentDisplay(eligible[idx].full_name);

      if (remaining < 1500) interval = SLOW_INTERVAL;
      else if (remaining < 2500) interval = 120;

      elapsed += interval;

      if (elapsed >= SPIN_DURATION_MS) {
        setCurrentDisplay(chosen.full_name);
        setCurrentWinner(chosen);
        setEligible(prev => prev.filter(r => r.id !== chosen.id));
        setWinners(prev => [...prev, {
          round: currentRound,
          label: PRIZES[currentRound - 1].label,
          name: chosen.full_name,
          id: chosen.id,
        }]);
        setIsSpinning(false);
      } else {
        spinIntervalRef.current = setTimeout(tick, interval);
      }
    }

    spinIntervalRef.current = setTimeout(tick, interval);
  }, [isSpinning, eligible, isDone, currentRound]);

  function undoLastWinner() {
    if (winners.length === 0 || isSpinning) return;
    const last = winners[winners.length - 1];
    const registrant = registrants.find(r => r.id === last.id);
    if (registrant) setEligible(prev => [...prev, registrant]);
    setWinners(prev => prev.slice(0, -1));
    setCurrentWinner(null);
    setCurrentDisplay("—");
    setShowDone(false);
  }

  useEffect(() => {
    return () => { if (spinIntervalRef.current) clearTimeout(spinIntervalRef.current); };
  }, []);

  // Auth screen
  if (!isAuthenticated) {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
          .rf-display { font-family: 'Bebas Neue', Impact, system-ui; letter-spacing: 0.04em; }
          .rf-ticker  { font-family: 'Courier New', 'Lucida Console', monospace; }
        `}</style>
        <div
          className="min-h-screen flex items-center justify-center px-4"
          style={{
            background: "#070707",
            backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        >
          <div className="w-full max-w-xs">
            <div className="mb-10 text-center">
              <p className="text-xs font-mono text-white/25 tracking-[0.25em] uppercase mb-5">
                Gen AI to Z &middot; March 17, 2026
              </p>
              <h1 className="rf-display text-[5.5rem] leading-none text-white">Grand Raffle</h1>
              <div className="mt-4 flex justify-center">
                <div className="flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-white/30 tracking-[0.2em] uppercase">Admin Access</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleAuth} className="space-y-3">
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
                <input
                  type="password"
                  placeholder="Enter admin key"
                  value={adminKey}
                  onChange={e => setAdminKey(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/10 px-4 pl-11 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-white/25 font-mono text-sm tracking-widest transition-colors rounded-none"
                  autoFocus
                />
              </div>
              {authError && (
                <p className="text-red-400/70 text-xs font-mono text-center tracking-wide">{authError}</p>
              )}
              <button
                type="submit"
                disabled={loading || !adminKey}
                className="w-full py-3.5 font-mono text-sm tracking-[0.22em] uppercase text-black bg-white hover:bg-white/90 disabled:bg-white/15 disabled:text-white/20 transition-all"
              >
                {loading ? "Loading..." : "Unlock"}
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        .rf-display { font-family: 'Bebas Neue', Impact, system-ui; letter-spacing: 0.04em; }
        .rf-ticker  { font-family: 'Courier New', 'Lucida Console', monospace; }
        @keyframes winner-amber {
          0%, 100% { box-shadow: 0 0 0 0 rgba(251,191,36,0); }
          50%       { box-shadow: 0 0 50px 8px rgba(251,191,36,0.08); }
        }
        .winner-glow { animation: winner-amber 2.4s ease-in-out infinite; }
        @keyframes spin-flicker {
          0%,100% { opacity: 1; } 50% { opacity: 0.7; }
        }
        .spinning-name { animation: spin-flicker 0.12s linear infinite; }
      `}</style>

      <div
        className="min-h-screen flex flex-col text-white"
        style={{
          background: "#070707",
          backgroundImage: "radial-gradient(rgba(255,255,255,0.032) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        {/* ── Status Bar ───────────────────────────────────────── */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] font-mono text-white/25 uppercase tracking-[0.22em]">
              Live &middot; Gen AI to Z
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[10px] font-mono text-white/25">
              <Users className="w-3 h-3" />{eligible.length} eligible
            </span>
            <span className="text-white/10 font-mono text-xs">|</span>
            <span className="flex items-center gap-1.5 text-[10px] font-mono text-amber-400/60">
              <Trophy className="w-3 h-3" />{winners.length} / {PRIZES.length}
            </span>
          </div>
        </div>

        {/* ── Title ────────────────────────────────────────────── */}
        <div className="text-center pt-7 pb-1 px-4">
          <h1
            className="rf-display leading-none text-white"
            style={{ fontSize: "clamp(3rem, 10vw, 6.5rem)" }}
          >
            Grand Raffle
          </h1>
          <p className="text-[10px] font-mono text-white/15 tracking-[0.3em] uppercase mt-1.5">
            March 17, 2026 &middot; UP Diliman
          </p>
        </div>

        {/* ── Prize Tracker ────────────────────────────────────── */}
        <div className="flex justify-center gap-2 md:gap-3 px-4 py-5 flex-wrap">
          {PRIZES.map((p) => {
            const won = winners.find(w => w.round === p.round);
            const isCurrent = currentRound === p.round && !isDone;
            const Icon = p.Icon;
            return (
              <div
                key={p.round}
                className={`flex items-center gap-2.5 px-4 py-2.5 border transition-all duration-500 ${
                  won
                    ? "border-amber-500/35 bg-amber-500/[0.04]"
                    : isCurrent
                    ? "border-white/25 bg-white/[0.04]"
                    : "border-white/[0.07] bg-white/[0.02]"
                }`}
              >
                <span className={`text-[10px] font-mono tabular-nums ${
                  won ? "text-amber-400/50" : isCurrent ? "text-white/35" : "text-white/15"
                }`}>0{p.round}</span>
                <Icon
                  className={`w-3.5 h-3.5 ${won ? "text-amber-400" : isCurrent ? "text-white/60" : "text-white/15"}`}
                  strokeWidth={1.5}
                />
                <span className={`text-[11px] font-mono uppercase tracking-widest ${
                  won ? "text-amber-400" : isCurrent ? "text-white/65" : "text-white/20"
                }`}>{p.label}</span>
                {won && (
                  <>
                    <span className="text-white/15 font-mono text-xs">—</span>
                    <span className="text-[11px] font-mono text-amber-400/60 max-w-[90px] truncate">
                      {won.name.split(" ")[0]}
                    </span>
                    <CheckCircle2 className="w-3 h-3 text-amber-400/60 ml-0.5" strokeWidth={2} />
                  </>
                )}
                {isCurrent && (
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse ml-0.5" />
                )}
              </div>
            );
          })}
        </div>

        {/* ── Main Stage ───────────────────────────────────────── */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-4 gap-5">
          {showDone ? (
            /* ── All Done ── */
            <div className="text-center space-y-7 w-full max-w-2xl">
              <div className="flex justify-center">
                <div className="w-16 h-16 border border-amber-500/25 flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-amber-400" strokeWidth={1} />
                </div>
              </div>
              <div>
                <p className="text-[10px] font-mono text-white/25 tracking-[0.28em] uppercase mb-2">
                  Raffle Complete
                </p>
                <h2 className="rf-display text-5xl text-white">All Prizes Drawn</h2>
              </div>
              <div className="space-y-1.5">
                {winners.map((w, i) => (
                  <div
                    key={w.id}
                    className="flex items-center gap-4 px-5 py-3 border border-amber-500/15 bg-amber-500/[0.03]"
                  >
                    <Medal className={`w-4 h-4 ${MEDAL_COLORS[i]}`} strokeWidth={1.5} />
                    <div className="flex-1 text-left">
                      <p className="rf-ticker text-base text-white/90">{w.name}</p>
                      <p className="text-[10px] font-mono text-white/25 uppercase tracking-wider mt-0.5">{w.label}</p>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-amber-400/50" strokeWidth={1.5} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* ── Current Prize Label ── */}
              {currentPrize && !isDone && (() => { const Icon = currentPrize.Icon; return (
                <div className="text-center">
                  <p className="text-[10px] font-mono text-white/20 tracking-[0.28em] uppercase mb-2">
                    Drawing &mdash; Prize {currentRound} of {PRIZES.length}
                  </p>
                  <div className="flex items-center justify-center gap-2.5">
                    <Icon className="w-5 h-5 text-white/40" strokeWidth={1.5} />
                    <span className="rf-display text-[2rem] text-white/75 leading-none">
                      {currentPrize.label}
                    </span>
                  </div>
                </div>
              ); })()}

              {isDone && currentWinner && (() => {
                const lastPrize = PRIZES[PRIZES.length - 1];
                const Icon = lastPrize.Icon;
                return (
                  <div className="text-center">
                    <p className="text-[10px] font-mono text-amber-400/40 tracking-[0.28em] uppercase mb-2">
                      Final Prize Drawn
                    </p>
                    <div className="flex items-center justify-center gap-2.5">
                      <Icon className="w-5 h-5 text-amber-400/50" strokeWidth={1.5} />
                      <span className="rf-display text-[2rem] text-amber-400/70 leading-none">
                        {lastPrize.label}
                      </span>
                    </div>
                  </div>
                );
              })()}

              {/* ── Spinner Stage ── */}
              <div
                className={`relative w-full max-w-3xl border transition-all duration-500 ${
                  currentWinner
                    ? "border-amber-500/45 winner-glow"
                    : isSpinning
                    ? "border-white/15"
                    : "border-white/[0.07]"
                }`}
                style={{
                  background: currentWinner
                    ? "linear-gradient(135deg,rgba(251,191,36,0.035) 0%,transparent 100%)"
                    : "rgba(255,255,255,0.012)",
                }}
              >
                {/* top accent */}
                {currentWinner && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-amber-400/60" />
                )}

                <div className="px-6 py-8 md:px-12 md:py-10 text-center">
                  <p className={`text-[10px] font-mono tracking-[0.3em] uppercase mb-5 transition-colors ${
                    currentWinner ? "text-amber-400/55" : isSpinning ? "text-white/25" : "text-white/12"
                  }`}>
                    {isSpinning ? "selecting" : currentWinner ? "winner" : "ready"}
                  </p>
                  <div
                    className="flex items-center justify-center overflow-hidden"
                    style={{ height: "5rem" }}
                  >
                    <p
                      className={`rf-ticker leading-none transition-colors duration-200 truncate w-full ${
                        isSpinning
                          ? "spinning-name text-white/45"
                          : currentWinner
                          ? "text-amber-300"
                          : "text-white/18"
                      }`}
                      style={{ fontSize: "2.75rem" }}
                    >
                      {currentDisplay}
                    </p>
                  </div>
                </div>

                {/* bottom accent */}
                {currentWinner && (
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-amber-400/25" />
                )}
              </div>

              {/* ── Controls ── */}
              <div className="flex flex-col sm:flex-row gap-2.5 w-full max-w-3xl">
                {isDone && currentWinner ? (
                  <button
                    onClick={() => setShowDone(true)}
                    className="flex-1 flex items-center justify-center gap-3 py-4 font-mono text-sm tracking-[0.22em] uppercase transition-all bg-white text-black hover:bg-white/92 border border-white active:scale-[0.99]"
                  >
                    <Trophy className="w-4 h-4" strokeWidth={2} />
                    View All Winners
                  </button>
                ) : (
                  <button
                    onClick={pickWinner}
                    disabled={isSpinning || eligible.length === 0}
                    className={`flex-1 flex items-center justify-center gap-3 py-4 font-mono text-sm tracking-[0.22em] uppercase transition-all ${
                      isSpinning || eligible.length === 0
                        ? "bg-white/[0.04] text-white/20 cursor-not-allowed border border-white/[0.07]"
                        : "bg-white text-black hover:bg-white/92 border border-white active:scale-[0.99]"
                    }`}
                  >
                    <Zap className="w-4 h-4" strokeWidth={2} />
                    {isSpinning
                      ? "Drawing..."
                      : currentWinner
                      ? `Next: ${PRIZES[currentRound - 1]?.label ?? "Draw"}`
                      : "Draw"}
                  </button>
                )}

                {winners.length > 0 && !isSpinning && (
                  <button
                    onClick={undoLastWinner}
                    className="flex items-center justify-center gap-2 px-6 py-4 font-mono text-[11px] tracking-[0.2em] uppercase text-white/25 border border-white/[0.07] hover:border-white/18 hover:text-white/45 transition-all"
                  >
                    <RotateCcw className="w-3.5 h-3.5" strokeWidth={1.5} />
                    Undo
                  </button>
                )}
              </div>
            </>
          )}
        </div>

        {/* ── Winners Sidebar ───────────────────────────────────── */}
        {winners.length > 0 && !showDone && (
          <div className="px-4 pb-10 w-full max-w-3xl mx-auto">
            <div className="border-t border-white/[0.06] pt-5">
              <p className="text-[10px] font-mono text-white/18 tracking-[0.25em] uppercase mb-3 flex items-center gap-2">
                <Trophy className="w-3 h-3" />
                Winners
              </p>
              <div className="space-y-1.5">
                {[...winners].reverse().map((w, i) => (
                  <div
                    key={w.id}
                    className="flex items-center gap-4 px-4 py-2.5 border border-white/[0.06] bg-white/[0.015]"
                  >
                    <span className="text-[10px] font-mono text-amber-400/50 w-5">#{w.round}</span>
                    <Medal
                      className={`w-3.5 h-3.5 ${MEDAL_COLORS[winners.length - 1 - i]}`}
                      strokeWidth={1.5}
                    />
                    <div className="flex-1">
                      <p className="rf-ticker text-sm text-white/80">{w.name}</p>
                      <p className="text-[10px] font-mono text-white/22 uppercase tracking-wider mt-0.5">{w.label}</p>
                    </div>
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400/35" strokeWidth={1.5} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
