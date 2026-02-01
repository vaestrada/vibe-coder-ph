"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Sparkles, ArrowRight, Clock } from "lucide-react";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    // Check if user has dismissed the bar
    const isDismissed = sessionStorage.getItem("announcement-bar-dismissed");
    if (!isDismissed) {
      setIsVisible(true);
    }

    // Calculate time until event
    const eventDate = new Date("2026-03-17T08:00:00+08:00");
    const updateCountdown = () => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
    sessionStorage.setItem("announcement-bar-dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 text-white">
      <Link
        href="/events/gen-ai-to-z"
        className="block py-2.5 px-4 hover:opacity-95 transition-opacity"
      >
        <div className="mx-auto max-w-6xl flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
          {/* Timer badge */}
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-mono">
            <Clock className="w-3.5 h-3.5" />
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
          </span>

          {/* Main content */}
          <span className="flex items-center gap-2 font-medium">
            <Sparkles className="w-4 h-4 flex-shrink-0" />
            <span className="hidden sm:inline">
              Gen AI to Z: A Career Guide in an AI-Driven Workplace
            </span>
            <span className="sm:hidden">Gen AI to Z</span>
            <span className="text-white/80">|</span>
            <span className="text-white/90">March 17, 2026</span>
            <span className="hidden md:inline text-white/80">|</span>
            <span className="hidden md:inline text-white/90">David M. Consunji Theater, ICE, UP Diliman</span>
          </span>

          {/* CTA */}
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-white text-violet-700 rounded-full font-semibold text-xs hover:bg-white/90 transition-colors">
            Register Free
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>

      {/* Close button */}
      <button
        onClick={handleDismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-white/20 rounded-full transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center"
        aria-label="Dismiss announcement"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
