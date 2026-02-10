"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";

export function EventAnnouncementModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("event-modal-dismissed-session");
    if (!hasSeenModal) {
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const eventDate = new Date("2026-03-17T08:00:00+08:00");
    const updateCountdown = () => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDismiss = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem("event-modal-dismissed-session", "true");
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleDismiss();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleDismiss]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop - more transparent */}
      <div
        className="fixed inset-0 z-50 bg-black/25 backdrop-blur-[3px] animate-fade-in"
        onClick={handleDismiss}
        aria-hidden="true"
      />

      {/* Modal - Landscape format */}
      <div
        role="dialog"
        aria-labelledby="event-modal-title"
        aria-describedby="event-modal-desc"
        aria-modal="true"
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-3xl animate-fade-in-up"
      >
        <div className="mx-4">
          {/* Gradient glow behind card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 rounded-2xl opacity-40 blur-xl" />
          
          {/* Glass card - more transparent */}
          <div className="relative overflow-hidden rounded-2xl border border-violet-500/20 bg-slate-950/80 backdrop-blur-xl shadow-2xl">
            {/* Top gradient accent - brand colors */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500" />
            
            {/* Background orbs matching site */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-fuchsia-600/10 rounded-full blur-3xl" />
            
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full text-white/50 transition-all hover:bg-white/10 hover:text-white hover:rotate-90 duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Layout - poster + info */}
            <div className="relative grid md:grid-cols-[auto,1fr] gap-0 items-stretch">
              {/* Left column - poster image */}
              <div className="relative w-full md:w-[280px] flex-shrink-0">
                <Image
                  src="/events/Poster-gen-ai-to-z.png"
                  alt="Gen AI to Z - A Career Summit in an AI-Driven World, March 17, 2026 at UP Diliman"
                  width={280}
                  height={396}
                  className="w-full h-auto md:h-full object-cover md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none"
                  priority
                />
              </div>

              {/* Right column - info + countdown */}
              <div className="p-6 flex flex-col justify-between">
                {/* Status badge */}
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-green-500/15 px-3 py-1 text-xs font-medium text-green-400 ring-1 ring-green-500/30">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    Registration Open · Free Admission
                  </div>

                  <h2
                    id="event-modal-title"
                    className="text-2xl font-bold tracking-tight bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
                  >
                    Gen AI to Z
                  </h2>
                  <p id="event-modal-desc" className="mt-1 text-sm text-white/70">
                    A Career Summit in an AI-Driven World
                  </p>
                </div>

                {/* Countdown */}
                <div className="mt-4">
                  <div className="text-xs uppercase tracking-wider text-white/40 mb-2">Event starts in</div>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { value: timeLeft.days, label: "Days" },
                      { value: timeLeft.hours, label: "Hrs" },
                      { value: timeLeft.minutes, label: "Min" },
                      { value: timeLeft.seconds, label: "Sec" },
                    ].map((unit) => (
                      <div
                        key={unit.label}
                        className="text-center p-2 rounded-lg bg-white/5 border border-white/10"
                      >
                        <div className="text-lg font-bold tabular-nums bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                          {String(unit.value).padStart(2, "0")}
                        </div>
                        <div className="text-[9px] uppercase tracking-wider text-white/40 mt-0.5">
                          {unit.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 flex gap-3">
                  <Link
                    href="/events/gen-ai-to-z"
                    onClick={handleDismiss}
                    className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-violet-500/40 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                  >
                    Learn More & Register
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <button
                    onClick={handleDismiss}
                    className="rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-white/60 transition-all hover:bg-white/5 hover:text-white hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                  >
                    Maybe Later
                  </button>
                </div>

                <p className="mt-3 text-[10px] text-white/40">
                  Organized by EMC² Fraternity & Vibe Coders PH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
