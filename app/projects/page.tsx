"use client";

import Link from "next/link";
import { useState } from "react";
import { Clock, Users, Star, Code, Rocket, Database, BarChart3, Globe, Zap, Search } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Landing Page + Newsletter CTA",
    desc: "Build a responsive landing page with a simple newsletter form and validation. Perfect for beginners learning modern web development patterns.",
    tech: ["Next.js", "Tailwind", "Zod"],
    category: "Web Development",
    difficulty: "Beginner",
    duration: "1-2 weeks",
    icon: Globe,
    color: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
    rating: 4.8,
    students: 245,
    featured: true,
  },
  {
    id: 2,
    title: "Public Link Shortener",
    desc: "Create a tiny URL service with rate limiting and analytics. Learn about API design, database optimization, and user analytics.",
    tech: ["Next.js", "Prisma", "SQLite", "Rate Limiting"],
    category: "Full Stack",
    difficulty: "Intermediate",
    duration: "2-3 weeks",
    icon: Zap,
    color: "bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400",
    rating: 4.6,
    students: 189,
    featured: false,
  },
  {
    id: 3,
    title: "Mini RAG Notes",
    desc: "Upload markdown notes and ask questions with retrieval-augmented generation. Dive deep into AI, embeddings, and vector databases.",
    tech: ["Next.js", "OpenAI", "Vector DB", "Embeddings"],
    category: "AI Engineering",
    difficulty: "Advanced",
    duration: "3-4 weeks",
    icon: Database,
    color: "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
    rating: 4.9,
    students: 156,
    featured: true,
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    desc: "Pull data from an API, transform it, and render charts and KPIs. Master data visualization and real-time updates.",
    tech: ["Next.js", "Chart.js", "Edge Runtime", "Real-time"],
    category: "Data Analytics",
    difficulty: "Intermediate",
    duration: "2-3 weeks",
    icon: BarChart3,
    color: "bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-400",
    rating: 4.7,
    students: 203,
    featured: false,
  },
  {
    id: 5,
    title: "E-commerce Store",
    desc: "Build a complete online store with cart, checkout, and payment processing. Learn about state management and user flows.",
    tech: ["Next.js", "Stripe", "Zustand", "PayPal"],
    category: "Full Stack",
    difficulty: "Advanced",
    duration: "4-5 weeks",
    icon: Rocket,
    color: "bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400",
    rating: 4.8,
    students: 134,
    featured: true,
  },
  {
    id: 6,
    title: "Code Snippet Manager",
    desc: "Create a tool to save, organize, and share code snippets with syntax highlighting and search functionality.",
    tech: ["Next.js", "Monaco Editor", "PostgreSQL", "Search"],
    category: "Web Development",
    difficulty: "Intermediate",
    duration: "2-3 weeks",
    icon: Code,
    color: "bg-cyan-50 text-cyan-600 dark:bg-cyan-950 dark:text-cyan-400",
    rating: 4.5,
    students: 167,
    featured: false,
  },
];

const categories = ["All", "Web Development", "Full Stack", "AI Engineering", "Data Analytics"];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "All" || project.difficulty === selectedDifficulty;
    const matchesSearch = searchQuery === "" || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Project <span className="text-primary">Marketplace</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover hands-on coding projects designed to build your portfolio. 
          Each project includes detailed briefs, tech stacks, and community support.
        </p>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Star className="h-5 w-5 text-yellow-500" />
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <div key={project.id} className="group relative rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 text-xs text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full dark:bg-yellow-950 dark:text-yellow-400">
                      <Star className="h-3 w-3 fill-current" />
                      Featured
                    </div>
                  </div>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${project.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs bg-secondary px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs text-muted-foreground px-2 py-1">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {project.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {project.students}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current text-yellow-500" />
                      {project.rating}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="flex gap-2">
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
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* All Projects Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">
          All Projects ({filteredProjects.length})
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div key={project.id} className="group rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${project.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {project.difficulty}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.category}</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs bg-secondary px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs text-muted-foreground px-2 py-1">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {project.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {project.students}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current text-yellow-500" />
                    {project.rating}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Community Section */}
      <div className="rounded-2xl border bg-gradient-to-r from-primary/5 to-primary/10 p-8 mb-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Join Our Community</h3>
          <p className="text-muted-foreground mb-6">
            Built something amazing with these project briefs? Share it with our community and get featured!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="mailto:hello@vibecoder.ph" 
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Submit Your Project
            </a>
            <Link 
              href="/gallery" 
              className="inline-flex items-center justify-center rounded-lg border bg-background px-6 py-3 font-medium hover:bg-accent transition-colors"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link 
          href="/courses" 
          className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-background font-medium hover:opacity-90 transition-opacity"
        >
          Explore Courses
        </Link>
        <Link 
          href="/about" 
          className="inline-flex items-center justify-center rounded-lg border px-6 py-3 font-medium hover:bg-accent transition-colors"
        >
          Learn More About Us
        </Link>
      </div>
    </div>
  );
}
