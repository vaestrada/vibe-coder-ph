import { Metadata } from "next";
import RegistrationForm from "./registration-form";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Register - Gen AI to Z Event | March 17, 2026",
  description: "Register for Gen AI to Z: A Career Guide in an AI-Driven Workplace. Free admission. March 17, 2026 at David M. Consunji Theater, Institute of Civil Engineering, UP Diliman.",
  robots: { index: true, follow: true },
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950/90 via-background to-fuchsia-950/90">
      {/* Background pattern */}
      <div 
        className="fixed inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(139, 92, 246) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(139, 92, 246) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 container max-w-4xl mx-auto px-4 py-12">
        {/* Back link */}
        <Link 
          href="/events/gen-ai-to-z"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Event Page
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-mono">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Registration Open
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Register for Gen AI to Z
          </h1>
          <p className="text-xl text-muted-foreground">
            March 17, 2026 • 8:00 AM – 5:00 PM
          </p>
          <p className="text-lg text-muted-foreground">
            David M. Consunji Theater, Institute of Civil Engineering, UP Diliman
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
          <RegistrationForm />
        </div>

        {/* Footer Note */}
        <div className="text-center text-sm text-muted-foreground">
          <p className="mb-2">Questions about your registration?</p>
          <p>
            Email us at{" "}
            <a href="mailto:events@vibecoders.ph" className="text-violet-400 hover:text-violet-300">
              events@vibecoders.ph
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
