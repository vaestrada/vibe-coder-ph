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
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const supabaseProjects = await getProjects();

        // Separate featured projects from community projects based on featured field
        const featured = supabaseProjects.filter(p => p.featured === true);
        const community = supabaseProjects.filter(p => p.featured !== true);

        // Sort featured projects by order_index
        featured.sort((a, b) => (a.order_index || 0) - (b.order_index || 0));

        setFeaturedProjects(featured);
        setProjects(community.length > 0 ? community : staticProjects);
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
          <p className="text-muted-foreground">Loading community projects...</p>
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
      {/* Featured Projects Section - 3 Column Grid */}
      {featuredProjects.length > 0 && (
        <motion.div className="mb-14">
          <motion.h1 
            className="text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Featured Projects
          </motion.h1>
          <motion.p 
            className="text-muted-foreground text-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Innovative automation and tooling projects built by our community members.
          </motion.p>

          <motion.div 
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {featuredProjects.map((p, index) => {
              const ProjectCard = (
                <motion.div 
                  key={p.id} 
                  className="rounded-xl border overflow-hidden bg-card hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 group h-full flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                >
                  {/* Video Display */}
                  <div className="relative w-full aspect-video overflow-hidden bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 flex-shrink-0">
                    {p.media_type === 'video' && p.media_url ? (
                      <video 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        preload="metadata"
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      >
                        <source src={p.media_url} type="video/mp4" />
                      </video>
                    ) : (
                      <Image 
                        src={p.media_url || '/images/placeholder.jpg'} 
                        alt={p.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-violet-500 transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {p.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mt-auto">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
                        <div className="h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse" />
                        <p className="text-xs font-medium text-violet-600 dark:text-violet-400">
                          {p.tech_stack}
                        </p>
                      </div>
                      {p.live_url && (
                        <div className="flex items-center gap-1 text-xs text-violet-500 font-medium">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
              return p.live_url ? (
                <Link key={p.id} href={p.live_url} target="_blank" rel="noopener noreferrer" className="block">{ProjectCard}</Link>
              ) : ProjectCard;
            })}
          </motion.div>
        </motion.div>
      )}

      {/* Community Projects Section */}
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
          Community Projects
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
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {projects.map((p, index) => {
          const ProjectCard = (
            <motion.div 
              key={p.id} 
              className="rounded-lg border overflow-hidden cursor-pointer bg-card h-full flex flex-col"
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
                className="relative h-48 w-full overflow-hidden flex-shrink-0"
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
              <div className="p-6 flex flex-col flex-grow">
                <motion.div 
                  className="font-medium text-lg mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                >
                  {p.title}
                </motion.div>
                <motion.p 
                  className="text-sm text-muted-foreground mb-3 flex-grow"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  {p.description}
                </motion.p>
                <motion.div 
                  className="flex items-center gap-2 mt-auto"
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
        className="mt-8 flex gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="https://discord.gg/HgKuev28wg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-foreground px-4 py-2.5 text-background text-sm font-medium hover:opacity-90">
            Join Discord
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/blog/all" className="inline-flex items-center rounded-md border px-4 py-2.5 text-sm font-medium hover:bg-accent">
            Read Blog
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
