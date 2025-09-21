"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Viron Gil Estrada - Personal Website",
    desc: "A modern personal portfolio website showcasing professional experience, skills, and projects with elegant design and smooth animations.",
    tech: "Next.js, TypeScript, Tailwind CSS",
    image: "/images/vironestrada-personal-website.png",
    alt: "Viron Gil Estrada personal website screenshot",
    link: "https://www.virongilestrada.online/",
  },
  {
    title: "ALJ Agnas - Personal Website",
    desc: "A creative personal portfolio website featuring modern design elements and showcasing professional projects and skills.",
    tech: "React, CSS, JavaScript",
    image: "/images/Alj-Agnas-website.png",
    alt: "ALJ Agnas personal website screenshot",
    link: "https://alj-personal-website.vercel.app/",
  },
  {
    title: "Gian Baturiano - Personal Website",
    desc: "A sleek personal portfolio website highlighting technical expertise and creative projects with responsive design.",
    tech: "Next.js, Tailwind CSS, TypeScript",
    image: "/images/Gian-Baturiano-website.png",
    alt: "Gian Baturiano personal website screenshot",
    link: "https://personal-website-gibaturiano-tawny-64.vercel.app/",
  },
  {
    title: "Ken Realingo - Personal Website",
    desc: "A professional portfolio website demonstrating coding skills and project showcase with clean, modern aesthetics.",
    tech: "React, Styled Components, JavaScript",
    image: "/images/ken-realingo-website.png",
    alt: "Ken Realingo personal website screenshot",
    link: "https://personal-website-self-nine-30.vercel.app/",
  },
  {
    title: "Joseph Guerrero - Personal Website",
    desc: "An innovative personal portfolio featuring interactive elements and comprehensive project documentation.",
    tech: "Next.js, Framer Motion, Tailwind CSS",
    image: "/images/joseph-guerrero-website.png",
    alt: "Joseph Guerrero personal website screenshot",
    link: "https://jnguerrero.vercel.app/",
  },
];

export default function ProjectsPage() {
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
              key={p.title} 
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
              {/* Project Image */}
              <motion.div 
                className="relative h-48 w-full overflow-hidden"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6 + index * 0.1,
                }}
              >
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
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
                  {p.desc}
                </motion.p>
                <motion.div 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                >
                  <div className="h-2 w-2 rounded-full bg-violet-500" />
                  <p className="text-xs text-muted-foreground font-medium">
                    {p.tech}
                  </p>
                </motion.div>
                {p.link && (
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

          return p.link ? (
            <Link 
              key={p.title}
              href={p.link} 
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
