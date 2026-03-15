"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Trophy, Shuffle, Lock, Users } from "lucide-react";

interface Registrant {
  id: string;
  full_name: string;
}

const PRIZES = [
  { round: 1, label: "🎽 Gen AI to Z Shirt", emoji: "🎽" },
  { round: 2, label: "👜 Gen AI to Z Tote Bag", emoji: "👜" },
  { round: 3, label: "✨ Gen AI to Z Sticker Pack", emoji: "✨" },
];

const SPIN_DURATION_MS = 4000;
const FAST_INTERVAL = 60;
const SLOW_INTERVAL = 200;

export default function RafflePage() {
  const [adminKey, setAdminKey] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [registrants, setRegistrants] = useState<Registrant[]>([]);
  const [eligible, setEligible] = useState<Registrant[]>([]);
  const [winners, setWinners] = useState<{ round: number; label: string; name: string; id: string }[]>([]);
  const [currentDisplay, setCurrentDisplay] = useState("???");
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentWinner, setCurrentWinner] = useState<Registrant | null>(null);
  const [loading, setLoading] = useState(false);

  const spinIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const spinTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
        clearInterval(spinIntervalRef.current!);
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
    if (registrant) {
      setEligible(prev => [...prev, registrant]);
    }
    setWinners(prev => prev.slice(0, -1));
    setCurrentWinner(null);
    setCurrentDisplay("???");
  }

  useEffect(() => {
    return () => {
      if (spinIntervalRef.current) clearTimeout(spinIntervalRef.current);
      if (spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current);
    };
  }, []);

  // Auth screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center space-y-2">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-fuchsia-600/20 border border-fuchsia-500/30 flex items-center justify-center">
                <Lock className="w-8 h-8 text-fuchsia-400" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white">Raffle System</h1>
            <p className="text-zinc-500 text-sm">Gen AI to Z · March 17, 2026</p>
          </div>
          <form onSubmit={handleAuth} className="space-y-4">
            <input
              type="password"
              placeholder="Admin Key"
              value={adminKey}
              onChange={e => setAdminKey(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-fuchsia-500 text-center text-lg tracking-widest"
              autoFocus
            />
            {authError && <p className="text-red-400 text-sm text-center">{authError}</p>}
            <button
              type="submit"
              disabled={loading || !adminKey}
              className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 disabled:opacity-40 transition-all"
            >
              {loading ? "Loading..." : "Enter"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      {/* Header */}
      <div className="text-center pt-8 pb-4 px-4">
        <p className="text-fuchsia-400 text-xs font-semibold uppercase tracking-widest mb-1">Gen AI to Z · March 17, 2026</p>
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
          🎉 Grand Raffle
        </h1>
        <div className="flex items-center justify-center gap-4 mt-2 text-sm text-zinc-500">
          <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{eligible.length} eligible</span>
          <span>·</span>
          <span className="flex items-center gap-1"><Trophy className="w-3.5 h-3.5 text-yellow-500" />{winners.length}/{PRIZES.length} drawn</span>
        </div>
      </div>

      {/* Prize Progress */}
      <div className="flex justify-center gap-3 px-4 py-3 flex-wrap">
        {PRIZES.map((p) => {
          const won = winners.find(w => w.round === p.round);
          const isCurrent = currentRound === p.round && !isDone;
          return (
            <div
              key={p.round}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                won
                  ? 'bg-yellow-500/10 border-yellow-500/50 text-yellow-400'
                  : isCurrent
                  ? 'bg-fuchsia-600/20 border-fuchsia-500 text-fuchsia-300 shadow-[0_0_12px_rgba(217,70,239,0.3)]'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-600'
              }`}
            >
              {p.emoji} {won ? `${p.label.split(' ').slice(1).join(' ')} → ${won.name.split(' ')[0]}` : p.label}
            </div>
          );
        })}
      </div>

      {/* Main Stage */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 gap-6">

        {isDone ? (
          <div className="text-center space-y-4">
            <div className="text-6xl">🎊</div>
            <h2 className="text-2xl font-bold text-white">All prizes have been drawn!</h2>
            <p className="text-zinc-500">Congratulations to all winners!</p>
          </div>
        ) : (
          <>
            {/* Current Prize Banner */}
            <div className="text-center">
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Now Drawing — Prize {currentRound} of {PRIZES.length}</p>
              <p className="text-2xl font-bold text-white">{currentPrize?.label}</p>
            </div>

            {/* Spinner Display */}
            <div className={`relative w-full max-w-2xl rounded-3xl border-2 p-8 md:p-12 text-center transition-all duration-300 ${
              currentWinner
                ? 'border-yellow-400 bg-yellow-400/5 shadow-[0_0_60px_rgba(250,204,21,0.2)]'
                : isSpinning
                ? 'border-fuchsia-500 bg-fuchsia-500/5 shadow-[0_0_40px_rgba(217,70,239,0.2)]'
                : 'border-zinc-800 bg-zinc-900/40'
            }`}>
              {currentWinner && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider">
                  🏆 Winner!
                </div>
              )}
              <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">
                {isSpinning ? "Drawing..." : currentWinner ? "Congratulations!" : "Ready to Draw"}
              </p>
              <div
                className={`text-3xl md:text-5xl font-extrabold leading-tight break-words transition-all ${
                  isSpinning
                    ? 'text-fuchsia-300 animate-pulse'
                    : currentWinner
                    ? 'text-yellow-300'
                    : 'text-zinc-600'
                }`}
                style={{ minHeight: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {currentDisplay}
              </div>
            </div>

            {/* Controls */}
            <div className="flex gap-3 flex-wrap justify-center">
              <button
                onClick={pickWinner}
                disabled={isSpinning || eligible.length === 0}
                className="flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-fuchsia-500/30 active:scale-95"
              >
                <Shuffle className="w-6 h-6" />
                {isSpinning ? "Drawing..." : currentWinner ? `Draw Prize ${currentRound + 1}` : "Draw!"}
              </button>
              {winners.length > 0 && !isSpinning && (
                <button
                  onClick={undoLastWinner}
                  className="px-5 py-4 rounded-2xl font-semibold text-sm bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all text-zinc-400"
                >
                  Undo Last
                </button>
              )}
            </div>
          </>
        )}
      </div>

      {/* Winners List */}
      {winners.length > 0 && (
        <div className="px-4 pb-8 w-full max-w-2xl mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-3 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-500" /> Winners ({winners.length})
          </h2>
          <div className="space-y-2">
            {[...winners].reverse().map((w) => (
              <div key={w.id} className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-500 font-bold text-sm w-6">#{w.round}</span>
                  <div>
                    <p className="text-white font-semibold">{w.name}</p>
                    <p className="text-zinc-500 text-xs">{w.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
