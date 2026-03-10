"use client";

import { useState } from "react";
import { Loader2, Lock } from "lucide-react";
import CheckInDashboard from "./check-in-dashboard";

export default function CheckInGate({ eventSlug }: { eventSlug: string }) {
  const [password, setPassword] = useState("");
  const [adminKey, setAdminKey] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    // Try to fetch registrations with this password as the key.
    // If it works, we're in.
    const res = await fetch(`/api/check-in?event=${eventSlug}`, {
      headers: { Authorization: `Bearer ${password}` },
    });

    if (res.ok) {
      setAdminKey(password);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  if (adminKey) {
    return <CheckInDashboard eventSlug={eventSlug} adminKey={adminKey} />;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 mb-4">
            <Lock className="w-6 h-6 text-violet-400" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Event Check-In</h1>
          <p className="text-sm text-muted-foreground mt-1">Enter the organizer password</p>
        </div>

        <input
          type="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(false); }}
          placeholder="Password"
          autoFocus
          className={`w-full px-4 py-3 bg-muted/50 border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 text-base ${
            error ? "border-red-500" : "border-border"
          }`}
        />
        {error && (
          <p className="text-red-400 text-sm mt-2">Wrong password. Try again.</p>
        )}

        <button
          type="submit"
          disabled={!password || loading}
          className="w-full mt-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl hover:from-violet-500 hover:to-fuchsia-500 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Enter"}
        </button>
      </form>
    </div>
  );
}
