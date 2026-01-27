"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/lib/supabase";

interface ProjectsClientProps {
  projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  return (
    <>
      {/* Community Projects Section */}
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-3xl font-bold">Community Projects</h2>
        <p className="mt-2 text-muted-foreground text-sm">
          Personal websites and portfolios built by our amazing Vibecoders community members.
        </p>
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
    </>
  );
}
