import Link from "next/link";
import { CheckCircle2, Calendar, MapPin, PartyPopper, ExternalLink, ArrowLeft, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration Confirmed | Gen AI to Z",
  description: "Your registration for Gen AI to Z has been confirmed. See you on March 17, 2026!",
};

export default function ConfirmedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-violet-950/20 to-background flex items-center justify-center py-16 px-4">
      <div className="max-w-lg w-full">
        {/* Success Card */}
        <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
          {/* Animated Success Icon */}
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
            </div>
            {/* Confetti-like decorations */}
            <div className="absolute top-0 right-1/4 text-2xl animate-bounce">🎉</div>
            <div className="absolute bottom-0 left-1/4 text-2xl animate-bounce" style={{ animationDelay: "0.3s" }}>🎊</div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            You&apos;re In!
          </h1>
          
          <p className="text-xl text-foreground font-semibold mb-2">
            Registration Confirmed
          </p>
          
          <p className="text-muted-foreground mb-8">
            Thank you for confirming your email. We can&apos;t wait to see you at <strong className="text-foreground">Gen AI to Z</strong>!
          </p>

          {/* Event Details */}
          <div className="bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-bold mb-4 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Mark Your Calendar
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-3 text-foreground">
                <Calendar className="w-5 h-5 text-violet-400" />
                <span className="font-semibold">March 17, 2026</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-foreground">
                <Sparkles className="w-5 h-5 text-fuchsia-400" />
                <span>8:00 AM – 5:00 PM</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>David M. Consunji Theater, ICE, UP Diliman</span>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-white/5 rounded-xl p-4 mb-8 text-left">
            <h3 className="text-sm font-semibold mb-3 text-foreground flex items-center gap-2">
              <PartyPopper className="w-4 h-4 text-violet-400" />
              What&apos;s Next?
            </h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-violet-400 mt-0.5">→</span>
                <span>We&apos;ll send you event updates and reminders via email</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400 mt-0.5">→</span>
                <span>Arrive early on event day for smooth check-in</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400 mt-0.5">→</span>
                <span>Bring your curiosity and questions!</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold mb-4 text-foreground">Stay Connected</h3>
            <p className="text-xs text-muted-foreground mb-4">
              Follow us for the latest updates, speaker announcements, and more!
            </p>
            <div className="flex items-center justify-center gap-4">
              <a 
                href="https://facebook.com/vibecodersph" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 hover:text-violet-300 hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/vibe-coders-ph" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 hover:text-violet-300 hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/vibecodersph" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 hover:text-violet-300 hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
              <a 
                href="https://discord.gg/7necGrk8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 hover:text-violet-300 hover:bg-white/10 transition-colors"
                aria-label="Discord"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <Link 
            href="/events/gen-ai-to-z" 
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white rounded-xl font-semibold transition-all hover:scale-[1.02] mb-4"
          >
            View Event Details
            <ExternalLink className="w-4 h-4" />
          </Link>

          {/* Back Link */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
