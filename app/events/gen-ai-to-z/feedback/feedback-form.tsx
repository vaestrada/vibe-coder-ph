"use client";

import { useState } from "react";
import { Star, CheckCircle2, Loader2 } from "lucide-react";

type Rating = 1 | 2 | 3 | 4 | 5;

interface StarRatingProps {
  label: string;
  value: Rating | null;
  onChange: (v: Rating) => void;
  required?: boolean;
}

function StarRating({ label, value, onChange, required }: StarRatingProps) {
  const [hovered, setHovered] = useState<number>(0);
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-zinc-300">
        {label} {required && <span className="text-fuchsia-400">*</span>}
      </label>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n as Rating)}
            onMouseEnter={() => setHovered(n)}
            onMouseLeave={() => setHovered(0)}
            className="focus:outline-none"
            aria-label={`${n} star${n > 1 ? 's' : ''}`}
          >
            <Star
              className={`w-8 h-8 transition-colors ${
                n <= (hovered || value || 0)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-zinc-600'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function FeedbackForm() {
  const [ratings, setRatings] = useState<{
    overall: Rating | null;
    content: Rating | null;
    speakers: Rating | null;
    venue: Rating | null;
    organization: Rating | null;
  }>({ overall: null, content: null, speakers: null, venue: null, organization: null });

  const [form, setForm] = useState({
    what_worked_well: "",
    what_needs_improvement: "",
    topics_for_future: "",
    additional_comments: "",
  });

  const [respondentName, setRespondentName] = useState("");
  const [wouldRecommend, setWouldRecommend] = useState<boolean | null>(null);
  const [consentForTestimonial, setConsentForTestimonial] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ratings.overall) {
      setErrorMsg("Please provide an overall rating.");
      return;
    }
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          overall_rating: ratings.overall,
          content_rating: ratings.content,
          speakers_rating: ratings.speakers,
          venue_rating: ratings.venue,
          organization_rating: ratings.organization,
          would_recommend: wouldRecommend,
          consent_for_testimonial: consentForTestimonial,
          is_anonymous: isAnonymous,
          respondent_name: isAnonymous ? null : respondentName.trim() || null,
          ...form,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-400" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white">Thank you! 🙏</h1>
          <p className="text-zinc-400 leading-relaxed">
            Your feedback means a lot to us. It helps us make our future events even better for the community.
          </p>
          <p className="text-zinc-500 text-sm">
            We&apos;ll see you at the next one! Follow{" "}
            <a href="https://www.facebook.com/vibecodersph" className="text-fuchsia-400 hover:underline" target="_blank" rel="noopener noreferrer">
              @vibecodersph
            </a>{" "}
            for updates.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-fuchsia-400 text-sm font-semibold uppercase tracking-widest mb-3">Gen AI to Z · March 17, 2026</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Share Your Feedback
          </h1>
          <p className="text-zinc-400 leading-relaxed max-w-lg mx-auto">
            How was the summit? Your honest feedback helps us improve and build better experiences for the community.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Ratings */}
          <section className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-6">
            <h2 className="text-lg font-semibold text-white">Rate Your Experience</h2>
            <StarRating
              label="Overall Experience"
              value={ratings.overall}
              onChange={(v) => setRatings(r => ({ ...r, overall: v }))}
              required
            />
            <StarRating
              label="Content & Talks Quality"
              value={ratings.content}
              onChange={(v) => setRatings(r => ({ ...r, content: v }))}
            />
            <StarRating
              label="Speakers"
              value={ratings.speakers}
              onChange={(v) => setRatings(r => ({ ...r, speakers: v }))}
            />
            <StarRating
              label="Venue & Logistics"
              value={ratings.venue}
              onChange={(v) => setRatings(r => ({ ...r, venue: v }))}
            />
            <StarRating
              label="Event Organization"
              value={ratings.organization}
              onChange={(v) => setRatings(r => ({ ...r, organization: v }))}
            />
          </section>

          {/* Would Recommend */}
          <section className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Would you recommend this event to a friend?</h2>
            <div className="flex gap-4">
              {[{ label: "👍 Yes!", value: true }, { label: "👎 No", value: false }].map(({ label, value }) => (
                <button
                  key={String(value)}
                  type="button"
                  onClick={() => setWouldRecommend(value)}
                  className={`flex-1 py-3 rounded-xl border text-sm font-semibold transition-all ${
                    wouldRecommend === value
                      ? 'bg-fuchsia-600/20 border-fuchsia-500 text-fuchsia-300'
                      : 'border-zinc-700 text-zinc-400 hover:border-zinc-500'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </section>

          {/* Open-ended */}
          <section className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-5">
            <h2 className="text-lg font-semibold text-white">Tell Us More</h2>

            {[
              { key: "what_worked_well", label: "What worked really well? 🌟", placeholder: "The speakers were amazing, the venue was great..." },
              { key: "what_needs_improvement", label: "What could be improved? 🛠️", placeholder: "More time for Q&A, clearer directions to the venue..." },
              { key: "topics_for_future", label: "What topics would you love to see in future events? 💡", placeholder: "AI tools for students, hands-on workshops, career panels..." },
              { key: "additional_comments", label: "Anything else you'd like to share?", placeholder: "Any other thoughts, shoutouts, suggestions..." },
            ].map(({ key, label, placeholder }) => (
              <div key={key} className="space-y-2">
                <label className="block text-sm font-medium text-zinc-300">{label}</label>
                <textarea
                  rows={3}
                  placeholder={placeholder}
                  value={form[key as keyof typeof form]}
                  onChange={(e) => setForm(f => ({ ...f, [key]: e.target.value }))}
                  className="w-full bg-zinc-800/60 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-fuchsia-500 resize-none"
                />
              </div>
            ))}
          </section>

          {/* Consent & Anonymous */}
          <section className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-lg font-semibold text-white mb-2">Preferences</h2>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consentForTestimonial}
                onChange={(e) => setConsentForTestimonial(e.target.checked)}
                className="mt-1 w-4 h-4 accent-fuchsia-500 flex-shrink-0"
              />
              <span className="text-sm text-zinc-400 leading-relaxed">
                I consent to Vibe Coders PH using my feedback as a testimonial in future promotional materials.
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={(e) => {
                  setIsAnonymous(e.target.checked);
                  if (e.target.checked) setRespondentName("");
                }}
                className="mt-1 w-4 h-4 accent-fuchsia-500 flex-shrink-0"
              />
              <span className="text-sm text-zinc-400 leading-relaxed">
                Submit anonymously
              </span>
            </label>

            {!isAnonymous && (
              <div className="space-y-2 pt-1">
                <label className="block text-sm font-medium text-zinc-300">
                  Your name <span className="text-zinc-500 font-normal">(optional — shown on testimonials if you consented above)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Maria Santos"
                  value={respondentName}
                  onChange={(e) => setRespondentName(e.target.value)}
                  maxLength={80}
                  className="w-full bg-zinc-800/60 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-fuchsia-500"
                />
              </div>
            )}
          </section>

          {/* Error */}
          {errorMsg && (
            <p className="text-red-400 text-sm text-center">{errorMsg}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
          >
            {status === "submitting" ? (
              <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
            ) : (
              "Submit Feedback 🚀"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
