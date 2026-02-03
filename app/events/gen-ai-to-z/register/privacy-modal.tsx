"use client";

import { X, Shield, Database, Clock, UserCheck, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Handle click outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[90vh] bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-scale-in"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-gradient-to-r from-violet-900/50 to-fuchsia-900/50 border-b border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-violet-500/20 rounded-lg">
              <Shield className="w-5 h-5 text-violet-400" />
            </div>
            <h2 id="privacy-modal-title" className="text-xl font-bold text-foreground">
              Data Privacy Notice
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close privacy notice"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-6 space-y-6">
          {/* Introduction */}
          <div className="p-4 bg-violet-950/30 border border-violet-500/20 rounded-xl">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your personal data is protected under the <strong className="text-foreground">Data Privacy Act of 2012 (Republic Act 10173)</strong>. We are committed to safeguarding your privacy and ensuring transparency in how we handle your information.
            </p>
          </div>

          {/* Data Controller */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-violet-400">
              <UserCheck className="w-4 h-4" />
              <h3 className="font-semibold">Data Controller</h3>
            </div>
            <p className="text-sm text-muted-foreground pl-6">
              EMC² Fraternity & Vibe Coders PH
            </p>
          </section>

          {/* Purpose */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-fuchsia-400">
              <Database className="w-4 h-4" />
              <h3 className="font-semibold">Purpose of Collection</h3>
            </div>
            <p className="text-sm text-muted-foreground pl-6">
              We collect your personal information to:
            </p>
            <ul className="text-sm text-muted-foreground pl-10 space-y-2 list-disc">
              <li>Process your registration for the &ldquo;Gen AI to Z&rdquo; event on March 17, 2026</li>
              <li>Communicate event-related information (venue updates, schedule changes)</li>
              <li>Improve future events based on anonymized, aggregated feedback</li>
            </ul>
          </section>

          {/* Data Collected */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-cyan-400">
              <Database className="w-4 h-4" />
              <h3 className="font-semibold">Information We Collect</h3>
            </div>
            <div className="pl-6 grid gap-2">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm">Name, email address, phone number (optional)</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm">Affiliation (student/professional) and organization</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm">Your expectations and feedback (optional)</span>
              </div>
            </div>
          </section>

          {/* Processing & Security */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-green-400">
              <Shield className="w-4 h-4" />
              <h3 className="font-semibold">Data Processing & Security</h3>
            </div>
            <div className="pl-6 space-y-2 text-sm text-muted-foreground">
              <p>Your data is stored securely in our database (Supabase) with:</p>
              <ul className="pl-4 space-y-1 list-disc">
                <li>Encryption at rest and in transit (TLS 1.3)</li>
                <li>Access limited to authorized event organizers only</li>
                <li>No sharing with third parties for marketing purposes</li>
              </ul>
            </div>
          </section>

          {/* Retention */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-amber-400">
              <Clock className="w-4 h-4" />
              <h3 className="font-semibold">Data Retention</h3>
            </div>
            <p className="text-sm text-muted-foreground pl-6">
              Your data will be retained for <strong className="text-foreground">1 year</strong> after the event for record-keeping purposes, then securely deleted unless you request earlier deletion.
            </p>
          </section>

          {/* Your Rights */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-violet-400">
              <UserCheck className="w-4 h-4" />
              <h3 className="font-semibold">Your Rights under RA 10173</h3>
            </div>
            <div className="pl-6 grid gap-2">
              {[
                "Right to be informed about how your data is used",
                "Right to access your personal data",
                "Right to request correction of inaccurate data",
                "Right to request deletion of your data",
                "Right to withdraw consent (before the event)",
              ].map((right, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                  <span className="flex items-center justify-center w-5 h-5 bg-violet-500/30 rounded-full text-xs text-violet-400 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-sm">{right}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-fuchsia-400">
              <Mail className="w-4 h-4" />
              <h3 className="font-semibold">Contact Us</h3>
            </div>
            <div className="pl-6 p-4 bg-gradient-to-r from-violet-950/50 to-fuchsia-950/50 border border-white/10 rounded-xl">
              <p className="text-sm text-muted-foreground mb-2">
                For data privacy concerns or to exercise your rights, contact us at:
              </p>
              <a 
                href="mailto:privacy@updates.vibecoders.ph" 
                className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors font-medium"
              >
                <Mail className="w-4 h-4" />
                privacy@updates.vibecoders.ph
              </a>
            </div>
          </section>

          {/* Legal Reference */}
          <div className="p-4 bg-slate-900/50 border border-white/10 rounded-xl">
            <p className="text-xs text-muted-foreground">
              This notice is provided in compliance with the Data Privacy Act of 2012 (Republic Act 10173) 
              and its Implementing Rules and Regulations. The National Privacy Commission (NPC) is the 
              regulatory body overseeing data privacy in the Philippines.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 flex items-center justify-end gap-3 px-6 py-4 bg-slate-900/95 border-t border-white/10 backdrop-blur-sm">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 rounded-lg font-semibold transition-all"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
