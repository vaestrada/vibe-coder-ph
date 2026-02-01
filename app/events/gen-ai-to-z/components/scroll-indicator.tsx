"use client";

import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  const scrollToContent = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToContent}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-violet-400 hover:text-violet-300 transition-colors animate-bounce"
      aria-label="Scroll to content"
    >
      <ChevronDown className="w-8 h-8" />
    </button>
  );
}
