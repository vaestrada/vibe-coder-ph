"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowRight, Calendar, MapPin } from "lucide-react";

export function EventAnnouncementModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Show modal after delay if not dismissed this session
  useEffect(() => {
    if (sessionStorage.getItem("event-modal-dismissed")) return;
    const t = setTimeout(() => {
      setIsOpen(true);
      // Double rAF ensures DOM is painted before triggering animation
      requestAnimationFrame(() => requestAnimationFrame(() => setIsVisible(true)));
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  // Countdown
  useEffect(() => {
    const target = new Date("2026-03-17T08:00:00+08:00").getTime();
    const tick = () => {
      const d = target - Date.now();
      if (d > 0) {
        setTimeLeft({
          days: Math.floor(d / 86400000),
          hours: Math.floor((d % 86400000) / 3600000),
          minutes: Math.floor((d % 3600000) / 60000),
          seconds: Math.floor((d % 60000) / 1000),
        });
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const dismiss = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      sessionStorage.setItem("event-modal-dismissed", "true");
    }, 300);
  }, []);

  // Keyboard + scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, dismiss]);

  if (!isOpen) return null;

  const units = [
    { v: timeLeft.days, l: "days" },
    { v: timeLeft.hours, l: "hrs" },
    { v: timeLeft.minutes, l: "min" },
    { v: timeLeft.seconds, l: "sec" },
  ];

  return (
    <>
      {/* Scrim */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-labelledby="evt-title"
        aria-describedby="evt-desc"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
      >
        <div
          className={`pointer-events-auto relative w-full max-w-[680px] transition-all duration-[450ms] ease-[cubic-bezier(.16,1,.3,1)] ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-5 scale-[0.97]"
          }`}
        >
          {/* Gradient border effect */}
          <div className="absolute -inset-[1px] rounded-[18px] bg-gradient-to-b from-white/10 via-white/[0.04] to-transparent pointer-events-none" />

          {/* Card */}
          <div className="relative overflow-hidden rounded-[17px] bg-[#0a0a0f] shadow-[0_32px_80px_-16px_rgba(0,0,0,0.9)]">
            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

            {/* Close */}
            <button
              onClick={dismiss}
              className="absolute right-3 top-3 z-20 grid h-8 w-8 place-items-center rounded-full text-white/25 transition hover:bg-white/10 hover:text-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-col md:flex-row md:items-stretch">
              {/* Poster */}
              <div className="relative flex-shrink-0 md:w-[240px]">
                <div className="relative h-[180px] md:h-full overflow-hidden">
                  <Image
                    src="/events/Poster-gen-ai-to-z.png"
                    alt="Gen AI to Z — A Career Summit in an AI-Driven World, March 17 2026 at UP Diliman"
                    fill
                    className="object-cover object-[center_20%] md:object-center"
                    sizes="(max-width: 768px) 100vw, 240px"
                    priority
                  />
                  {/* Bottom fade on mobile */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a0a0f] to-transparent md:hidden" />
                </div>
              </div>

              {/* Content */}
              <div className="relative flex flex-1 flex-col justify-center px-5 pb-5 pt-2 md:px-7 md:py-7">
                {/* Status badge */}
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Free · Open
                </span>

                {/* Title */}
                <h2
                  id="evt-title"
                  className="mt-3 text-2xl md:text-[28px] font-extrabold leading-tight tracking-tight text-white"
                >
                  Gen AI to Z
                </h2>
                <p
                  id="evt-desc"
                  className="mt-0.5 text-[13px] text-white/40 font-medium"
                >
                  A Career Summit in an AI-Driven World
                </p>

                {/* When & Where */}
                <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-white/30">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-white/20" />
                    March 17, 2026
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-white/20" />
                    UP Diliman, QC
                  </span>
                </div>

                <div className="my-4 h-px bg-white/[0.05]" />

                {/* Countdown */}
                <div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-white/20 mb-2">
                    Event starts in
                  </div>
                  <div className="flex items-end gap-1">
                    {units.map((u, i) => (
                      <div key={u.l} className="flex items-end gap-1">
                        <div className="text-center min-w-[38px]">
                          <div className="text-[22px] font-bold tabular-nums leading-none text-white/90">
                            {String(u.v).padStart(2, "0")}
                          </div>
                          <div className="mt-1 text-[9px] uppercase tracking-[0.12em] text-white/20">
                            {u.l}
                          </div>
                        </div>
                        {i < 3 && (
                          <span className="text-white/[0.08] text-base leading-none mb-3 mx-0.5">
                            :
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-5 flex items-center gap-3">
                  <Link
                    href="/events/gen-ai-to-z"
                    onClick={dismiss}
                    className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-[13px] font-semibold text-neutral-950 shadow-lg shadow-white/5 transition-all hover:bg-neutral-100 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 opacity-40 transition-all group-hover:opacity-80 group-hover:translate-x-0.5" />
                  </Link>
                  <button
                    onClick={dismiss}
                    className="text-[13px] text-white/25 transition-colors hover:text-white/50 focus:outline-none"
                  >
                    Dismiss
                  </button>
                </div>

                <p className="mt-4 text-[10px] text-white/15">
                  By EMC² Fraternity & Vibe Coders PH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
