"use client";

import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, Mail } from "lucide-react";

export default function VerificationStatus() {
  const searchParams = useSearchParams();
  const verified = searchParams.get('verified');
  const error = searchParams.get('error');

  if (verified === 'success') {
    return (
      <div className="mb-8 flex items-start gap-3 p-6 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400">
        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-lg mb-1">Email Verified Successfully! 🎉</h3>
          <p className="text-green-300/80">
            Your registration for Gen AI to Z is now confirmed. We&apos;ll send you event updates as the date approaches.
            See you on March 17, 2026!
          </p>
        </div>
      </div>
    );
  }

  if (verified === 'already') {
    return (
      <div className="mb-8 flex items-start gap-3 p-6 rounded-xl bg-violet-500/20 border border-violet-500/30 text-violet-400">
        <Mail className="w-6 h-6 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-lg mb-1">Already Verified</h3>
          <p className="text-violet-300/80">
            Your email has already been verified. You&apos;re all set for the event!
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    const errorMessages: Record<string, string> = {
      invalid_link: "The verification link is invalid or incomplete.",
      invalid_token: "The verification token is invalid or has expired.",
      verification_failed: "We couldn't verify your email. Please try again or contact support.",
      server_error: "A server error occurred. Please try again later.",
    };

    return (
      <div className="mb-8 flex items-start gap-3 p-6 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400">
        <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-lg mb-1">Verification Failed</h3>
          <p className="text-red-300/80">
            {errorMessages[error] || "An unknown error occurred."}
          </p>
          <p className="text-sm text-red-300/60 mt-2">
            Need help? Contact us at{" "}
            <a href="mailto:events@vibecoders.ph" className="underline hover:text-red-300">
              events@vibecoders.ph
            </a>
          </p>
        </div>
      </div>
    );
  }

  return null;
}
