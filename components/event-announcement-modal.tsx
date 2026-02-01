"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Calendar, MapPin, Sparkles } from "lucide-react";

export function EventAnnouncementModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the modal
    const hasSeenModal = localStorage.getItem("event-modal-dismissed");
    if (!hasSeenModal) {
      // Show modal after a short delay
      const timer = setTimeout(() => setIsOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem("event-modal-dismissed", "true");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
        onClick={handleDismiss}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-labelledby="event-modal-title"
        aria-modal="true"
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl animate-fade-in-up"
      >
        <div className="relative bg-gradient-to-br from-violet-950 via-background to-fuchsia-950 border-2 border-violet-500/30 rounded-2xl p-8 shadow-2xl">
          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors touch-action-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close announcement"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-mono">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Free Event · March 17, 2026
            </div>

            {/* Title */}
            <h2
              id="event-modal-title"
              className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Gen AI to Z
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-cyan-400 font-semibold -mt-4">
              A Career Guide in an AI-Driven Workplace
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground">
              Full-day career forum with talks, panels, and networking with
              industry professionals. Free admission.
            </p>

            {/* Details */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-5 h-5 text-violet-400" />
                <span>March 17, 2026 | 8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-fuchsia-400" />
                <span>David M. Consunji Theater, UP Diliman</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                href="/events/gen-ai-to-z"
                onClick={handleDismiss}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white rounded-lg font-semibold shadow-lg transition-all hover:scale-105 min-h-[44px]"
              >
                Learn More
                <Sparkles className="w-5 h-5" />
              </Link>
              <button
                onClick={handleDismiss}
                className="px-6 py-3 border border-violet-500/30 hover:bg-violet-500/10 rounded-lg font-semibold transition-colors min-h-[44px]"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
