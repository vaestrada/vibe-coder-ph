"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Search, CheckCircle2, Undo2, Loader2, RefreshCw, Users, UserCheck } from "lucide-react";

interface Registration {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  affiliation: string | null;
  organization: string | null;
  status: string;
  checked_in: boolean;
  checked_in_at: string | null;
}

export default function CheckInDashboard({
  eventSlug,
  adminKey,
}: {
  eventSlug: string;
  adminKey: string;
}) {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastAction, setLastAction] = useState<{ name: string; type: "in" | "undo" } | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const fetchRegistrations = useCallback(async () => {
    try {
      setError(null);
      const res = await fetch(`/api/check-in?event=${eventSlug}`, {
        headers: { Authorization: `Bearer ${adminKey}` },
      });
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setRegistrations(data.registrations || []);
    } catch {
      setError("Failed to load registrations. Check your connection.");
    } finally {
      setLoading(false);
    }
  }, [eventSlug, adminKey]);

  useEffect(() => {
    fetchRegistrations();
  }, [fetchRegistrations]);

  // Autofocus search on load
  useEffect(() => {
    if (!loading && searchRef.current) {
      searchRef.current.focus();
    }
  }, [loading]);

  const handleCheckIn = async (id: string, action: "check-in" | "undo") => {
    setActionLoading(id);
    try {
      const res = await fetch("/api/check-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminKey}`,
        },
        body: JSON.stringify({ id, action }),
      });

      if (!res.ok) throw new Error("Failed to update");

      const data = await res.json();
      const updated = data.registration;

      // Update local state immediately
      setRegistrations((prev) =>
        prev.map((r) =>
          r.id === id
            ? { ...r, checked_in: updated.checked_in, checked_in_at: updated.checked_in_at }
            : r
        )
      );

      setLastAction({
        name: updated.full_name,
        type: action === "check-in" ? "in" : "undo",
      });

      // Clear toast after 3s
      setTimeout(() => setLastAction(null), 3000);
    } catch {
      setError("Failed to update. Please try again.");
      setTimeout(() => setError(null), 3000);
    } finally {
      setActionLoading(null);
    }
  };

  const query = search.toLowerCase().trim();
  const filtered = query
    ? registrations.filter(
        (r) =>
          r.full_name.toLowerCase().includes(query) ||
          r.email.toLowerCase().includes(query)
      )
    : registrations;

  const totalConfirmed = registrations.filter((r) => r.status === "confirmed").length;
  const totalCheckedIn = registrations.filter((r) => r.checked_in).length;

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-violet-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky header */}
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-2xl mx-auto px-4 py-4">
          {/* Title + stats */}
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-lg font-bold text-foreground">
              Event Check-In
            </h1>
            <button
              onClick={() => { setLoading(true); fetchRegistrations(); }}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Refresh"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          {/* Stats bar */}
          <div className="flex gap-4 mb-3 text-sm">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{registrations.length} registered</span>
            </div>
            <div className="flex items-center gap-1.5 text-green-500 font-medium">
              <UserCheck className="w-4 h-4" />
              <span>{totalCheckedIn} / {totalConfirmed} checked in</span>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              ref={searchRef}
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 text-base"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
            />
            {search && (
              <button
                onClick={() => { setSearch(""); searchRef.current?.focus(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-sm"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-2xl mx-auto px-4 py-4">
        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}

        {query && filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-lg mb-1">No results found</p>
            <p className="text-sm">Try a different name or email</p>
          </div>
        )}

        <div className="space-y-2">
          {filtered.map((reg) => (
            <div
              key={reg.id}
              className={`p-4 rounded-xl border transition-colors ${
                reg.checked_in
                  ? "bg-green-500/5 border-green-500/20"
                  : "bg-card border-border"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground truncate">
                      {reg.full_name}
                    </h3>
                    {reg.checked_in && (
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{reg.email}</p>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    {reg.affiliation && (
                      <span className="text-xs px-2 py-0.5 bg-violet-500/10 text-violet-400 rounded-full">
                        {reg.affiliation}
                      </span>
                    )}
                    {reg.organization && (
                      <span className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-full">
                        {reg.organization}
                      </span>
                    )}
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      reg.status === 'confirmed'
                        ? 'bg-green-500/10 text-green-400'
                        : 'bg-yellow-500/10 text-yellow-400'
                    }`}>
                      {reg.status}
                    </span>
                  </div>
                  {reg.checked_in && reg.checked_in_at && (
                    <p className="text-xs text-green-500/70 mt-1.5">
                      Checked in at{" "}
                      {new Date(reg.checked_in_at).toLocaleTimeString("en-PH", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </p>
                  )}
                </div>

                {/* Action button */}
                <div className="flex-shrink-0">
                  {reg.checked_in ? (
                    <button
                      onClick={() => handleCheckIn(reg.id, "undo")}
                      disabled={actionLoading === reg.id}
                      className="flex items-center gap-1.5 px-3 py-2 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg hover:bg-muted/50 transition-colors disabled:opacity-50"
                    >
                      {actionLoading === reg.id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Undo2 className="w-4 h-4" />
                      )}
                      Undo
                    </button>
                  ) : (
                    <button
                      onClick={() => handleCheckIn(reg.id, "check-in")}
                      disabled={actionLoading === reg.id}
                      className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg hover:from-violet-500 hover:to-fuchsia-500 transition-all disabled:opacity-50 active:scale-95"
                    >
                      {actionLoading === reg.id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4" />
                      )}
                      Check In
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!query && registrations.length > 0 && (
          <p className="text-center text-sm text-muted-foreground mt-6">
            {registrations.length} registrations loaded
          </p>
        )}
      </div>

      {/* Toast notification */}
      {lastAction && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30">
          <div className={`px-4 py-3 rounded-xl shadow-lg border text-sm font-medium ${
            lastAction.type === "in"
              ? "bg-green-500/20 border-green-500/30 text-green-400"
              : "bg-muted border-border text-muted-foreground"
          }`}>
            {lastAction.type === "in"
              ? `${lastAction.name} checked in!`
              : `${lastAction.name} check-in undone`}
          </div>
        </div>
      )}
    </div>
  );
}
