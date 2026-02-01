"use client";

import { useState } from "react";
import { ChevronDown, Eye, Target, MessageSquare, Handshake, Lightbulb } from "lucide-react";

interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  subtitle?: string;
  description: string;
  topics: string[];
  icon?: string;
}

interface ScheduleSectionProps {
  items: ScheduleItem[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Eye,
  Target,
  MessageSquare,
  Handshake,
  Lightbulb,
};

export default function ScheduleSection({ items }: ScheduleSectionProps) {
  const [openItem, setOpenItem] = useState<string | null>("opening");

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(id);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background via-violet-950/5 to-background" aria-labelledby="schedule-heading">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-violet-400 bg-violet-500/10 rounded-full border border-violet-500/20">
            Program Flow
          </span>
          <h2 id="schedule-heading" className="text-4xl sm:text-5xl font-bold mb-4">
            One Day. Five Sessions.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A structured yet flexible program designed to balance formal talks, interactive discussions, and community-driven activities.
          </p>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openItem === item.id;
            const IconComponent = item.icon ? iconMap[item.icon] : null;
            
            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? 'bg-gradient-to-br from-violet-950/50 to-fuchsia-950/30 border-violet-500/40 shadow-lg shadow-violet-500/10' 
                    : 'bg-card/50 border-white/10 hover:border-violet-500/30 hover:bg-card/80'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  className="w-full text-left p-6 flex items-start gap-5 touch-action-manipulation"
                  aria-expanded={isOpen}
                  aria-controls={`schedule-content-${item.id}`}
                >
                  {/* Icon */}
                  {IconComponent && (
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      isOpen 
                        ? 'bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white shadow-lg shadow-violet-500/30' 
                        : 'bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  )}
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <time className="text-violet-400 font-mono text-sm font-medium">
                        {item.time}
                      </time>
                      {item.subtitle && (
                        <>
                          <span className="text-white/20">·</span>
                          <span className="text-sm text-muted-foreground">{item.subtitle}</span>
                        </>
                      )}
                    </div>
                    <h3 className={`text-xl font-bold transition-colors ${
                      isOpen ? 'text-white' : 'text-foreground group-hover:text-violet-400'
                    }`}>
                      {item.title}
                    </h3>
                  </div>
                  
                  <ChevronDown 
                    className={`w-5 h-5 text-violet-400 flex-shrink-0 mt-1 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={`schedule-content-${item.id}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pl-[4.25rem]">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white/70 font-medium"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expected attendance */}
        <div className="mt-16 grid sm:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-violet-500/5 border border-violet-500/20 text-center">
            <div className="text-3xl font-bold text-violet-400 mb-1">300-500</div>
            <div className="text-sm text-muted-foreground">Expected Attendees</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-500/5 border border-fuchsia-500/20 text-center">
            <div className="text-3xl font-bold text-fuchsia-400 mb-1">5+</div>
            <div className="text-sm text-muted-foreground">Industry Speakers</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">9 Hours</div>
            <div className="text-sm text-muted-foreground">of Learning & Networking</div>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
          <p className="text-lg font-semibold mb-2">Full lineup coming soon</p>
          <p className="text-muted-foreground text-sm">
            Specific speaker assignments and detailed timings will be announced as we coordinate with partners and university offices.
          </p>
        </div>
      </div>
    </section>
  );
}
