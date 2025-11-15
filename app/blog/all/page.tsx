"use client";

import Link from "next/link";
import { Calendar, Clock, User, Search, Filter } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { getAllBlogPosts, categories } from "@/lib/blog-data";

export default function AllBlogPostsPage() {
  const allBlogPosts = getAllBlogPosts();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = allBlogPosts
    .filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch = searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

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
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-16">
      {/* Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          All Blog Posts
        </h1>
        <p className="text-lg text-muted-foreground">
          Explore our complete collection of tutorials, insights, and technical deep dives.
        </p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="flex gap-2">
          <Filter className="h-8 w-8 p-2 border rounded-lg bg-background text-muted-foreground" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </motion.div>

      {/* Results Count */}
      <motion.div 
        className="mb-6 text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Showing {filteredPosts.length} of {allBlogPosts.length} posts
      </motion.div>

      {/* Blog Posts Grid */}
      <motion.div 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {filteredPosts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.4 + index * 0.05
            }}
            whileHover={{ 
              y: -4,
              transition: { duration: 0.2 }
            }}
            className="h-full"
          >
            <Link 
              href={`/blog/${post.slug}`} 
              className="group flex flex-col h-full rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(post.category)}`}>
                  {post.category}
                </span>
                {post.featured && (
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                )}
              </div>
              
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
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
              
              <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-4">No posts found matching your criteria.</p>
          <button 
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="text-primary hover:underline"
          >
            Clear filters
          </button>
        </motion.div>
      )}

      {/* Back to Blog Button */}
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Link 
          href="/courses" 
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Back to Blog Home
        </Link>
      </motion.div>
    </div>
  );
}
