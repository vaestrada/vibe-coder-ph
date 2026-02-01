"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  description: string;
  topics: string[];
}

interface ScheduleSectionProps {
  items: ScheduleItem[];
}

export default function ScheduleSection({ items }: ScheduleSectionProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

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
    <section className="py-20 bg-background" aria-labelledby="schedule-heading">
      <div className="max-w-4xl mx-auto px-4">
        <h2 id="schedule-heading" className="text-4xl font-bold mb-4 text-center">
          Event Schedule
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          A full-day, high-energy mix of talks, panels, and demonstrations
        </p>

        <div className="space-y-4">
          {items.map((item) => {
            const isOpen = openItem === item.id;
            
            return (
              <div
                key={item.id}
                className="group border-l-4 border-violet-500 bg-card rounded-r-xl hover:bg-accent/50 transition-all"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  className="w-full text-left pl-6 pr-6 py-6 flex items-start justify-between gap-4 touch-action-manipulation"
                  aria-expanded={isOpen}
                  aria-controls={`schedule-content-${item.id}`}
                >
                  <div className="flex-1">
                    <time className="text-violet-400 font-mono text-sm font-semibold block mb-2">
                      {item.time}
                    </time>
                    <h3 className="text-xl font-bold group-hover:text-violet-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 text-violet-400 flex-shrink-0 transition-transform duration-300 ${
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
                  <div className="pl-6 pr-6 pb-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-sm text-violet-400 font-medium"
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

        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 text-center">
          <p className="text-lg font-semibold mb-2">More details coming soon</p>
          <p className="text-muted-foreground">
            Full speaker lineup and detailed schedule will be announced as we get closer to the event.
          </p>
        </div>
      </div>
    </section>
  );
}
