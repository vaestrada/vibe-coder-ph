"use client";

import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/lib/blog-data";
import { use } from "react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const blogPost = getBlogPostBySlug(slug);
  
  if (!blogPost) {
    notFound();
  }
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-16">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link 
          href="/courses" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </motion.div>

      <article>
        {/* Header */}
        <motion.header 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
              {blogPost.category}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {blogPost.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {blogPost.author}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(blogPost.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric',
                month: 'long', 
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {blogPost.readTime}
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {blogPost.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1 text-xs bg-secondary px-2 py-1 rounded">
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Content */}
        <motion.div 
          className="prose prose-gray dark:prose-invert max-w-none blog-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <style jsx>{`
            .blog-content h2 {
              @apply text-2xl font-bold mb-6 mt-8 text-foreground;
            }
            .blog-content .principle-number {
              @apply inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold mr-3;
            }
            .blog-content .section-divider {
              @apply my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent;
            }
            .blog-content .principle-highlight {
              @apply my-6 p-4 bg-accent/50 border-l-4 border-primary rounded-r-lg;
            }
            .blog-content .principle-highlight p {
              @apply mb-0 font-semibold text-lg;
            }
            .blog-content ul {
              @apply space-y-3 my-4;
            }
            .blog-content li {
              @apply p-3 bg-muted/30 rounded-lg list-none;
            }
            .blog-content code {
              @apply px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm font-mono border;
            }
            .blog-content .key-points p {
              @apply p-4 bg-background rounded-lg border-l-4 border-primary font-medium;
            }
          `}</style>
          <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        </motion.div>
      </article>

      {/* CTA Section */}
      <motion.div 
        className="mt-12 p-6 rounded-lg border bg-gradient-to-r from-primary/5 to-primary/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h3 className="font-semibold mb-2">Ready to start building?</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Check out our hands-on projects to practice what you&apos;ve learned.
        </p>
        <Link 
          href="/projects" 
          className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          View Projects
        </Link>
      </motion.div>
    </div>
  );
}
