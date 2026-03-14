"use client";

import { useState } from "react";
import { ChevronDown, Flag, Sparkles, Mic, Coffee, Briefcase, Users } from "lucide-react";

interface ProgramItem {
  time: string;
  title: string;
  detail: string;
  type: string;
}

interface ProgramBlock {
  id: string;
  label: string;
  timeRange: string;
  icon: string;
  items: ProgramItem[];
}

interface ScheduleSectionProps {
  blocks: ProgramBlock[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Flag,
  Sparkles,
  Mic,
  Coffee,
  Briefcase,
  Users,
};

const typeStyles: Record<string, { dot: string; text: string }> = {
  registration: { dot: "bg-green-400", text: "text-muted-foreground" },
  ceremony: { dot: "bg-violet-400", text: "text-muted-foreground" },
  talk: { dot: "bg-fuchsia-400", text: "text-foreground" },
  panel: { dot: "bg-cyan-400", text: "text-foreground" },
  showcase: { dot: "bg-amber-400", text: "text-foreground" },
  transition: { dot: "bg-zinc-500", text: "text-muted-foreground" },
  break: { dot: "bg-green-400", text: "text-muted-foreground" },
  community: { dot: "bg-violet-400", text: "text-foreground" },
  closing: { dot: "bg-fuchsia-400", text: "text-muted-foreground" },
};

export default function ScheduleSection({ blocks }: ScheduleSectionProps) {
  const [openBlocks, setOpenBlocks] = useState<Set<string>>(
    new Set(blocks.map((b) => b.id))
  );

  const toggleBlock = (id: string) => {
    setOpenBlocks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background via-violet-950/5 to-background" aria-labelledby="schedule-heading">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-violet-400 bg-violet-500/10 rounded-full border border-violet-500/20">
            Program Flow
          </span>
          <h2 id="schedule-heading" className="text-4xl sm:text-5xl font-bold mb-4">
            Full Day Program
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            10+ speakers, 3 panel discussions, industry showcases, and a community Show &amp; Tell — from 7 AM to 5 PM.
          </p>
        </div>

        <div className="space-y-4">
          {blocks.map((block) => {
            const isOpen = openBlocks.has(block.id);
            const IconComponent = block.icon ? iconMap[block.icon] : null;

            return (
              <div
                key={block.id}
                className="rounded-2xl border border-white/10 overflow-hidden bg-card/30"
              >
                {/* Block header */}
                <button
                  onClick={() => toggleBlock(block.id)}
                  className="w-full text-left p-5 flex items-center gap-4 hover:bg-white/5 transition-colors touch-action-manipulation"
                  aria-expanded={isOpen}
                >
                  {IconComponent && (
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      isOpen
                        ? "bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white shadow-lg shadow-violet-500/30"
                        : "bg-violet-500/10 text-violet-400"
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold">{block.label}</h3>
                    <p className="text-sm text-muted-foreground font-mono">
                      {block.timeRange}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Block items */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-white/5">
                    {block.items.map((item, i) => {
                      const style = typeStyles[item.type] || typeStyles.ceremony;
                      return (
                        <div
                          key={i}
                          className={`flex items-start gap-4 px-5 py-3.5 ${
                            i < block.items.length - 1
                              ? "border-b border-white/5"
                              : ""
                          } ${item.type === "transition" ? "opacity-50" : ""}`}
                        >
                          <div className="flex-shrink-0 w-[120px] sm:w-[140px]">
                            <time className="text-sm font-mono text-muted-foreground">
                              {item.time}
                            </time>
                          </div>
                          <div className="flex items-start gap-3 min-w-0">
                            <div
                              className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${style.dot}`}
                            />
                            <div>
                              <p className={`font-semibold text-sm ${style.text}`}>
                                {item.title}
                              </p>
                              <p className="text-xs text-muted-foreground mt-0.5">
                                {item.detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid sm:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-violet-500/5 border border-violet-500/20 text-center">
            <div className="text-3xl font-bold text-violet-400 mb-1">600+</div>
            <div className="text-sm text-muted-foreground">Registered Attendees</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-500/5 border border-fuchsia-500/20 text-center">
            <div className="text-3xl font-bold text-fuchsia-400 mb-1">10+</div>
            <div className="text-sm text-muted-foreground">Industry Speakers</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">9 Hours</div>
            <div className="text-sm text-muted-foreground">of Learning & Networking</div>
          </div>
        </div>
      </div>
    </section>
  );
}
