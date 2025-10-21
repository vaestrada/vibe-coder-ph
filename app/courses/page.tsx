"use client";

import Link from "next/link";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { getAllBlogPosts } from "@/lib/blog-data";

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();
  const featuredPosts = blogPosts
    .filter(post => post.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  const recentPosts = blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 6);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web Development":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "AI Engineering":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "Data Analytics":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Process & Culture":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <motion.div 
      className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <div className="text-center mb-12">
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Vibe Coder <span className="text-primary">Blog</span>
        </motion.h1>
        <motion.p 
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Insights, tutorials, and deep dives into web development, AI engineering, and data analytics. 
          Learn from real projects and industry best practices.
        </motion.p>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-semibold">Featured Posts</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + index * 0.1
                }}
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
              >
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="group block rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      )}

      {/* Recent Posts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Recent Posts</h2>
          <Link 
            href="/blog/all" 
            className="text-sm text-primary hover:underline flex items-center gap-1"
          >
            View all posts
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.6 + index * 0.05
              }}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2 }
              }}
            >
              <Link 
                href={`/blog/${post.slug}`} 
                className="group block rounded-xl border bg-card p-5 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  {post.featured && (
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  )}
                </div>
                
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="text-xs text-muted-foreground">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.div>

      {/* Community CTA */}
      <motion.div
        className="mt-16 rounded-2xl border bg-gradient-to-r from-primary/5 to-primary/10 p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="text-xl font-semibold mb-2">Join the Community</h3>
        <p className="text-muted-foreground mb-6">
          Connect with Filipino developers, share your projects, and get help with your coding journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="https://discord.gg/HgKuev28wg"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Join Discord
          </Link>
          <Link
            href="/projects"
            className="px-6 py-2 border rounded-lg font-medium hover:bg-accent transition-colors"
          >
            See Projects
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
