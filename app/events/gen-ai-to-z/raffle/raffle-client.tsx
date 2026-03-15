"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Trophy, Lock, Users, ShoppingBag, Tag, Shirt,
  CheckCircle2, RotateCcw, Zap, Medal, Sparkles, Gift,
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

const MEDAL_COLORS = ["text-violet-400", "text-fuchsia-400", "text-cyan-400"];

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
          @keyframes spin-glow { 0%,100% { opacity: 0.3; } 50% { opacity: 0.6; } }
          .auth-glow { animation: spin-glow 3s ease-in-out infinite; }
        `}</style>
        <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-violet-950 via-background to-fuchsia-950">
          {/* Background orbs */}
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-fuchsia-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(to right, rgb(139,92,246) 1px, transparent 1px), linear-gradient(to bottom, rgb(139,92,246) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 w-full max-w-sm animate-fade-in-up">
            <div className="mb-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-violet-500/15 border border-violet-500/25 rounded-full text-violet-300 text-sm font-mono">
                <Gift className="w-4 h-4" />
                Gen AI to Z &middot; March 17, 2026
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Grand Raffle
              </h1>

              <p className="mt-3 text-muted-foreground text-sm">
                Enter admin key to begin the draw
              </p>
            </div>

            <form onSubmit={handleAuth} className="space-y-4">
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-violet-400/50" />
                <input
                  type="password"
                  placeholder="Admin key"
                  value={adminKey}
                  onChange={e => setAdminKey(e.target.value)}
                  className="w-full bg-card/60 backdrop-blur-sm border border-violet-500/20 rounded-lg px-4 pl-12 py-3.5 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 font-mono text-sm tracking-wider transition-all"
                  autoFocus
                />
              </div>
              {authError && (
                <p className="text-red-400 text-sm text-center">{authError}</p>
              )}
              <button
                type="submit"
                disabled={loading || !adminKey}
                className="w-full py-3.5 rounded-lg text-sm font-semibold tracking-wide transition-all bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 disabled:opacity-40 disabled:shadow-none active:scale-[0.98]"
              >
                {loading ? "Loading..." : "Unlock Raffle"}
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
        @keyframes winner-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(139,92,246,0), 0 0 0 0 rgba(217,70,239,0); }
          50%       { box-shadow: 0 0 60px 10px rgba(139,92,246,0.15), 0 0 120px 30px rgba(217,70,239,0.08); }
        }
        .winner-glow { animation: winner-glow 2s ease-in-out infinite; }
        @keyframes spin-flicker {
          0%,100% { opacity: 1; } 50% { opacity: 0.6; }
        }
        .spinning-name { animation: spin-flicker 0.1s linear infinite; }
        @keyframes confetti-drift {
          0% { transform: translateY(-10px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(40px) rotate(360deg); opacity: 0; }
        }
      `}</style>

      <div className="relative min-h-screen flex flex-col text-foreground overflow-hidden bg-gradient-to-br from-violet-950 via-background to-fuchsia-950">
        {/* Background orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-fuchsia-500/15 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: "2s" }} />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: "4s" }} />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, rgb(139,92,246) 1px, transparent 1px), linear-gradient(to bottom, rgb(139,92,246) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* ── Status Bar ───────────────────────────────────────── */}
        <div className="relative z-10 flex items-center justify-between px-5 py-3 border-b border-violet-500/10 backdrop-blur-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground tracking-wide">
              Live &middot; Gen AI to Z
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
              <Users className="w-3.5 h-3.5" />{eligible.length} eligible
            </span>
            <span className="text-violet-500/30">|</span>
            <span className="flex items-center gap-1.5 text-xs font-mono text-violet-400">
              <Trophy className="w-3.5 h-3.5" />{winners.length} / {PRIZES.length}
            </span>
          </div>
        </div>

        {/* ── Title ────────────────────────────────────────────── */}
        <div className="relative z-10 text-center pt-8 pb-2 px-4 animate-fade-in-up">
          <h1
            className="font-bold leading-none bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
          >
            Grand Raffle
          </h1>
          <p className="text-sm text-muted-foreground mt-2 font-mono">
            March 17, 2026 &middot; UP Diliman
          </p>
        </div>

        {/* ── Prize Tracker ────────────────────────────────────── */}
        <div className="relative z-10 flex justify-center gap-3 px-4 py-5 flex-wrap animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          {PRIZES.map((p) => {
            const won = winners.find(w => w.round === p.round);
            const isCurrent = currentRound === p.round && !isDone;
            const Icon = p.Icon;
            return (
              <div
                key={p.round}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border backdrop-blur-sm transition-all duration-500 ${
                  won
                    ? "border-violet-500/40 bg-violet-500/10"
                    : isCurrent
                    ? "border-fuchsia-500/30 bg-fuchsia-500/10"
                    : "border-white/[0.08] bg-white/[0.03]"
                }`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  won
                    ? "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white"
                    : isCurrent
                    ? "bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30"
                    : "bg-white/5 text-white/20"
                }`}>{p.round}</span>
                <Icon
                  className={`w-4 h-4 ${won ? "text-violet-400" : isCurrent ? "text-fuchsia-400" : "text-white/20"}`}
                  strokeWidth={1.5}
                />
                <span className={`text-sm font-medium ${
                  won ? "text-violet-300" : isCurrent ? "text-fuchsia-300" : "text-white/25"
                }`}>{p.label}</span>
                {won && (
                  <>
                    <span className="text-violet-500/30 mx-1">&middot;</span>
                    <span className="text-sm text-violet-400/70 max-w-[100px] truncate font-medium">
                      {won.name.split(" ")[0]}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-green-400 ml-0.5" strokeWidth={2} />
                  </>
                )}
                {isCurrent && (
                  <Sparkles className="w-3.5 h-3.5 text-fuchsia-400 animate-pulse ml-0.5" />
                )}
              </div>
            );
          })}
        </div>

        {/* ── Main Stage ───────────────────────────────────────── */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-4 gap-6">
          {showDone ? (
            /* ── All Done ── */
            <div className="text-center space-y-8 w-full max-w-2xl animate-fade-in-up">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shadow-xl shadow-violet-500/30">
                  <Trophy className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Raffle Complete</p>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  All Prizes Drawn!
                </h2>
              </div>
              <div className="space-y-3">
                {winners.map((w, i) => (
                  <div
                    key={w.id}
                    className="flex items-center gap-4 px-5 py-4 rounded-xl border border-violet-500/20 bg-violet-500/5 backdrop-blur-sm"
                  >
                    <Medal className={`w-5 h-5 ${MEDAL_COLORS[i]}`} strokeWidth={1.5} />
                    <div className="flex-1 text-left">
                      <p className="text-lg font-semibold text-foreground">{w.name}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{w.label}</p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-green-400" strokeWidth={1.5} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* ── Current Prize Label ── */}
              {currentPrize && !isDone && (() => { const Icon = currentPrize.Icon; return (
                <div className="text-center animate-fade-in-up">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/15 border border-fuchsia-500/25 text-fuchsia-300 text-sm font-medium mb-3">
                    <Sparkles className="w-4 h-4" />
                    Prize {currentRound} of {PRIZES.length}
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Icon className="w-6 h-6 text-fuchsia-400" strokeWidth={1.5} />
                    <span className="text-3xl font-bold text-foreground">{currentPrize.label}</span>
                  </div>
                </div>
              ); })()}

              {isDone && currentWinner && (() => {
                const lastPrize = PRIZES[PRIZES.length - 1];
                const Icon = lastPrize.Icon;
                return (
                  <div className="text-center animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/15 border border-green-500/25 text-green-300 text-sm font-medium mb-3">
                      <CheckCircle2 className="w-4 h-4" />
                      Final Prize Drawn
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Icon className="w-6 h-6 text-violet-400" strokeWidth={1.5} />
                      <span className="text-3xl font-bold text-foreground">{lastPrize.label}</span>
                    </div>
                  </div>
                );
              })()}

              {/* ── Spinner Stage ── */}
              <div
                className={`relative w-full max-w-3xl rounded-2xl border backdrop-blur-sm transition-all duration-500 ${
                  currentWinner
                    ? "border-violet-500/50 winner-glow bg-violet-500/5"
                    : isSpinning
                    ? "border-fuchsia-500/30 bg-fuchsia-500/5"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {/* top gradient accent */}
                {currentWinner && (
                  <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
                )}

                <div className="px-6 py-10 md:px-12 md:py-12 text-center">
                  <p className={`text-sm font-medium tracking-wider uppercase mb-6 transition-colors ${
                    currentWinner ? "text-violet-400" : isSpinning ? "text-fuchsia-400/60" : "text-muted-foreground/40"
                  }`}>
                    {isSpinning ? "Selecting..." : currentWinner ? "Winner!" : "Ready"}
                  </p>
                  <div
                    className="flex items-center justify-center overflow-hidden"
                    style={{ height: "5rem" }}
                  >
                    <p
                      className={`leading-none transition-colors duration-200 truncate w-full font-bold ${
                        isSpinning
                          ? "spinning-name text-fuchsia-300/50"
                          : currentWinner
                          ? "bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
                          : "text-muted-foreground/20"
                      }`}
                      style={{ fontSize: "2.75rem" }}
                    >
                      {currentDisplay}
                    </p>
                  </div>
                </div>

                {/* bottom gradient accent */}
                {currentWinner && (
                  <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent" />
                )}
              </div>

              {/* ── Controls ── */}
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-3xl">
                {isDone && currentWinner ? (
                  <button
                    onClick={() => setShowDone(true)}
                    className="flex-1 flex items-center justify-center gap-3 py-4 rounded-xl text-sm font-semibold tracking-wide transition-all bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 active:scale-[0.98]"
                  >
                    <Trophy className="w-4 h-4" strokeWidth={2} />
                    View All Winners
                  </button>
                ) : (
                  <button
                    onClick={pickWinner}
                    disabled={isSpinning || eligible.length === 0}
                    className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                      isSpinning || eligible.length === 0
                        ? "bg-white/5 text-white/20 cursor-not-allowed border border-white/10"
                        : "bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 active:scale-[0.98]"
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
                    className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm text-muted-foreground border border-white/10 hover:border-violet-500/30 hover:text-violet-300 hover:bg-violet-500/5 transition-all"
                  >
                    <RotateCcw className="w-4 h-4" strokeWidth={1.5} />
                    Undo
                  </button>
                )}
              </div>
            </>
          )}
        </div>

        {/* ── Winners Sidebar ───────────────────────────────────── */}
        {winners.length > 0 && !showDone && (
          <div className="relative z-10 px-4 pb-10 w-full max-w-3xl mx-auto">
            <div className="border-t border-violet-500/10 pt-5">
              <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2 font-medium">
                <Trophy className="w-4 h-4 text-violet-400" />
                Winners
              </p>
              <div className="space-y-2">
                {[...winners].reverse().map((w, i) => (
                  <div
                    key={w.id}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl border border-violet-500/15 bg-violet-500/5 backdrop-blur-sm"
                  >
                    <span className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-xs font-bold text-white">
                      {w.round}
                    </span>
                    <Medal
                      className={`w-4 h-4 ${MEDAL_COLORS[winners.length - 1 - i]}`}
                      strokeWidth={1.5}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">{w.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{w.label}</p>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-green-400" strokeWidth={1.5} />
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
