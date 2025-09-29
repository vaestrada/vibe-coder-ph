"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getProjects, Project } from "@/lib/supabase";

// Fallback static projects (for reliability)
const staticProjects = [
  {
    id: "static-1",
    title: "Viron Gil Estrada - Personal Website",
    description: "A modern personal portfolio website showcasing professional experience, skills, and projects with elegant design and smooth animations.",
    tech_stack: "Next.js, TypeScript, Tailwind CSS",
    media_url: "/images/vironestrada-personal-website.png",
    media_type: "image" as const,
    live_url: "https://www.virongilestrada.online/",
    featured: true,
    order_index: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    thumbnail_url: null
  },
  // Add other static projects as needed
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const supabaseProjects = await getProjects();

        // Use Supabase projects if available, otherwise fall back to static
        if (supabaseProjects.length > 0) {
          setProjects(supabaseProjects);
        } else {
          setProjects(staticProjects);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects(staticProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <motion.div
        className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14 flex items-center justify-center min-h-[400px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading community showcases...</p>
        </div>
      </motion.div>
    );
  }
  return (
    <motion.div 
      className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <motion.h1 
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Community Showcases
        </motion.h1>
        <motion.p 
          className="mt-2 text-muted-foreground text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Personal websites and portfolios built by our amazing Vibecoders community members.
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid gap-6 md:grid-cols-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {projects.map((p, index) => {
          const ProjectCard = (
            <motion.div 
              key={p.id} 
              className="rounded-lg border overflow-hidden cursor-pointer bg-card"
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.5 + index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Project Media */}
              <motion.div 
                className="relative h-48 w-full overflow-hidden"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6 + index * 0.1,
                }}
              >
                {p.media_type === 'video' && p.media_url ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                    poster={p.thumbnail_url || undefined}
                  >
                    <source src={p.media_url} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={p.media_url || '/images/placeholder.jpg'}
                    alt={`${p.title} screenshot`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                />
              </motion.div>

              {/* Project Content */}
              <div className="p-6">
                <motion.div 
                  className="font-medium text-lg mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                >
                  {p.title}
                </motion.div>
                <motion.p 
                  className="text-sm text-muted-foreground mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  {p.description}
                </motion.p>
                <motion.div 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                >
                  <div className="h-2 w-2 rounded-full bg-violet-500" />
                  <p className="text-xs text-muted-foreground font-medium">
                    {p.tech_stack}
                  </p>
                </motion.div>
                {p.live_url && (
                  <motion.div 
                    className="mt-3 flex items-center gap-1 text-xs text-violet-500 font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Visit Live Site
                  </motion.div>
                )}
              </div>
            </motion.div>
          );

          return p.live_url ? (
            <Link 
              key={p.id}
              href={p.live_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              {ProjectCard}
            </Link>
          ) : (
            ProjectCard
          );
        })}
      </motion.div>

      <motion.div 
        className="mt-8 rounded-lg border p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        whileHover={{ 
          scale: 1.02, 
          transition: { duration: 0.2 } 
        }}
      >
        <motion.div 
          className="font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          Community shout-outs
        </motion.div>
        <motion.p 
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          Built something with these briefs? Share it and we can feature it here as a testimonial.
          Send links to <a className="underline" href="mailto:hello@vibecoder.ph">hello@vibecoder.ph</a>.
        </motion.p>
      </motion.div>

      <motion.div 
        className="mt-8 flex gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/gallery" className="inline-flex items-center rounded-md border px-4 py-2.5 text-sm font-medium hover:bg-accent">
            See Gallery
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/courses" className="inline-flex items-center rounded-md bg-foreground px-4 py-2.5 text-background text-sm font-medium hover:opacity-90">
            See Courses
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
