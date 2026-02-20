"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

const ROLES = [
  { value: "student", label: "Student" },
  { value: "junior_dev", label: "Junior Developer" },
  { value: "career_shifter", label: "Career Shifter" },
  { value: "freelancer", label: "Freelancer" },
  { value: "working_dev", label: "Working Developer" },
  { value: "other", label: "Other" },
];

const TIME_SLOTS = [
  { value: "morning", label: "Morning — 9–11 AM" },
  { value: "afternoon", label: "Afternoon — 1–3 PM" },
  { value: "evening", label: "Evening — 6–8 PM" },
  { value: "flexible", label: "I'm flexible" },
];

const AI_EXPERIENCE = [
  { value: "never", label: "Never tried AI coding tools" },
  { value: "chatgpt", label: "Used ChatGPT for coding help" },
  { value: "copilot", label: "Used Copilot, Cursor, or similar" },
  { value: "claude_codex", label: "Already using Claude Code or Codex" },
];

const CREDIT_CARD_OPTIONS = [
  { value: "yes", label: "Yes, that works for me" },
  { value: "no", label: "No, I need another option" },
];

type FormState = {
  name: string;
  email: string;
  role: string;
  what_to_build: string;
  preferred_time: string;
  ai_experience: string;
  payment_method: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all";

const labelClass = "block text-sm font-medium text-foreground/80 mb-2";

const requiredMark = (
  <span className="text-violet-600 dark:text-violet-400">*</span>
);

export default function WaitlistForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    role: "",
    what_to_build: "",
    preferred_time: "",
    ai_experience: "",
    payment_method: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) return;

    setStatus("loading");
    setErrorMsg("");

    const { error } = await supabase.from("ai_builder_waitlist").insert([
      {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        role: form.role,
        what_to_build: form.what_to_build.trim() || null,
        preferred_time: form.preferred_time || null,
        ai_experience: form.ai_experience || null,
        payment_method: form.payment_method || null,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Waitlist insert error:", error);
      }
      if (error.code === "23505") {
        setErrorMsg("You're already on the waitlist. We'll be in touch!");
      } else {
        setErrorMsg("Something went wrong. Please try again.");
      }
      setStatus("error");
      return;
    }

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="text-center py-12 px-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-violet-500/20 border border-violet-500/30 mb-6">
          <svg
            className="w-8 h-8 text-violet-600 dark:text-violet-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">
          You&apos;re in.
        </h3>
        <p className="text-muted-foreground max-w-sm mx-auto">
          Thanks. Early Bird access will be sent after GenAI to Z.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClass}>
          Full Name {requiredMark}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Juan dela Cruz"
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email {requiredMark}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      {/* Role */}
      <div>
        <label htmlFor="role" className={labelClass}>
          I am a… {requiredMark}
        </label>
        <select
          id="role"
          name="role"
          required
          value={form.role}
          onChange={handleChange}
          className={inputClass + " appearance-none"}
        >
          <option value="" disabled>Select your role</option>
          {ROLES.map((r) => (
            <option key={r.value} value={r.value}>{r.label}</option>
          ))}
        </select>
      </div>

      {/* Divider */}
      <div className="border-t border-border pt-1">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
          Help us plan the schedule
        </p>

        {/* Preferred time slot */}
        <div className="mb-5">
          <label htmlFor="preferred_time" className={labelClass}>
            What time works best for you?{" "}
            <span className="text-muted-foreground text-xs">(PH Time)</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {TIME_SLOTS.map((t) => (
              <label
                key={t.value}
                className={`flex items-center gap-2.5 rounded-lg border px-4 py-3 cursor-pointer text-sm transition-all ${
                  form.preferred_time === t.value
                    ? "border-violet-500 bg-violet-500/10 text-foreground"
                    : "border-border bg-background text-foreground/70 hover:border-violet-500/40"
                }`}
              >
                <input
                  type="radio"
                  name="preferred_time"
                  value={t.value}
                  checked={form.preferred_time === t.value}
                  onChange={handleChange}
                  className="accent-violet-600"
                />
                {t.label}
              </label>
            ))}
          </div>
        </div>

        {/* AI experience */}
        <div>
          <label className={labelClass}>
            Your experience with AI coding tools
          </label>
          <div className="space-y-2">
            {AI_EXPERIENCE.map((a) => (
              <label
                key={a.value}
                className={`flex items-center gap-2.5 rounded-lg border px-4 py-3 cursor-pointer text-sm transition-all ${
                  form.ai_experience === a.value
                    ? "border-violet-500 bg-violet-500/10 text-foreground"
                    : "border-border bg-background text-foreground/70 hover:border-violet-500/40"
                }`}
              >
                <input
                  type="radio"
                  name="ai_experience"
                  value={a.value}
                  checked={form.ai_experience === a.value}
                  onChange={handleChange}
                  className="accent-violet-600"
                />
                {a.label}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border pt-1">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
          Payment preference
        </p>

        {/* Credit card */}
        <div>
          <label className={labelClass}>
            Can you pay by credit or debit card?
          </label>
          <div className="grid grid-cols-2 gap-2">
            {CREDIT_CARD_OPTIONS.map((p) => (
              <label
                key={p.value}
                className={`flex items-center gap-2.5 rounded-lg border px-4 py-3 cursor-pointer text-sm transition-all ${
                  form.payment_method === p.value
                    ? "border-violet-500 bg-violet-500/10 text-foreground"
                    : "border-border bg-background text-foreground/70 hover:border-violet-500/40"
                }`}
              >
                <input
                  type="radio"
                  name="payment_method"
                  value={p.value}
                  checked={form.payment_method === p.value}
                  onChange={handleChange}
                  className="accent-violet-600"
                />
                {p.label}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* What to build */}
      <div>
        <label htmlFor="what_to_build" className={labelClass}>
          What do you want to build?{" "}
          <span className="text-muted-foreground text-xs">(optional)</span>
        </label>
        <textarea
          id="what_to_build"
          name="what_to_build"
          rows={3}
          value={form.what_to_build}
          onChange={handleChange}
          placeholder="An AI tool that helps students study, a SaaS for freelancers, a portfolio project…"
          className={inputClass + " resize-none"}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 px-6 bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Joining…
          </span>
        ) : (
          "Join the Early Access Waitlist"
        )}
      </button>
    </form>
  );
}
