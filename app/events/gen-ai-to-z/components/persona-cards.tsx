"use client";

import { motion } from "framer-motion";
import { GraduationCap, Wrench, Palette, RefreshCw, Lightbulb, Rocket, LucideIcon } from "lucide-react";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Wrench,
  Palette,
  RefreshCw,
  Lightbulb,
  Rocket,
};

interface Persona {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface PersonaCardsProps {
  personas: Persona[];
}

export default function PersonaCards({ personas }: PersonaCardsProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {personas.map((persona, i) => {
        const IconComponent = iconMap[persona.icon];
        
        return (
          <motion.article
            key={persona.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.5, 
              delay: i * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative p-6 bg-card rounded-xl border border-violet-500/20 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/20 transition-all"
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative">
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-violet-400 transition-colors">
                {persona.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {persona.description}
              </p>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.article>
        );
      })}
    </div>
  );
}
