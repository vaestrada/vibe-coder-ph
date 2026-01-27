import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react";
import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/lib/blog-data";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blogPost = getBlogPostBySlug(slug);
  
  if (!blogPost) {
    notFound();
  }
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-16">
      {/* Back Button */}
      <div className="mb-8">
        <Link 
          href="/courses" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      <article>
        {/* Header */}
        <header className="mb-8">
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
        </header>

        {/* Content */}
        <div className="prose prose-gray dark:prose-invert max-w-none blog-content">
          <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        </div>
      </article>

      {/* CTA Section */}
      <div className="mt-12 p-6 rounded-lg border bg-gradient-to-r from-primary/5 to-primary/10">
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
      </div>
    </div>
  );
}
