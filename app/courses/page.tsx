"use client";

import Link from "next/link";
import { Code, Brain, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const courses = [
  {
    slug: "web-dev",
    title: "Full-Stack Web Development",
    duration: "12 weeks, part-time",
    blurb:
      "Next.js, TypeScript, Tailwind, APIs, databases, and deployment. Build 4 portfolio-grade apps.",
    icon: Code,
  },
  {
    slug: "ai-engineering",
    title: "AI Engineering",
    duration: "10 weeks, part-time",
    blurb:
      "RAG, LLM apps, vector DBs, embeddings, agents, and production deployment patterns.",
    icon: Brain,
  },
  {
    slug: "data",
    title: "Data & Analytics",
    duration: "10 weeks, part-time",
    blurb:
      "Python, SQL, dbt, data modeling, ETL/ELT, and BI dashboarding for analytics engineering.",
    icon: BarChart3,
  },
];

export default function CoursesPage() {
  return (
    <motion.div 
      className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Courses
      </motion.h1>
      <motion.p 
        className="mt-2 text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Practical, mentor-guided tracks. Learn by building and ship weekly.
      </motion.p>

      <motion.div 
        className="mt-8 grid gap-6 md:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {courses.map((c, index) => {
          const IconComponent = c.icon;
          return (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={`/courses/${c.slug}`} className="group block rounded-lg border p-6 hover:bg-accent">
                <motion.div 
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-600"
                  whileHover={{ 
                    rotate: 10,
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.6 + index * 0.15, 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                  >
                    <IconComponent className="h-5 w-5 text-white" />
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="font-medium group-hover:underline"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                >
                  {c.title}
                </motion.div>
                <motion.div 
                  className="text-xs text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  {c.duration}
                </motion.div>
                <motion.p 
                  className="mt-2 text-sm text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                >
                  {c.blurb}
                </motion.p>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
