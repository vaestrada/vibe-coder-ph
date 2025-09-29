import { Metadata } from "next";
import { getBlogPostBySlug } from "@/lib/blog-data";

interface BlogPostLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const blogPost = getBlogPostBySlug(slug);

  if (!blogPost) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: blogPost.title,
    description: blogPost.excerpt,
    openGraph: {
      title: blogPost.title,
      description: blogPost.excerpt,
      type: "article",
      publishedTime: blogPost.publishedAt,
      authors: [blogPost.author],
      tags: blogPost.tags,
      url: `https://vibecoder.ph/blog/${slug}`,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: blogPost.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blogPost.title,
      description: blogPost.excerpt,
      images: ["/og-image.png"],
    },
  };
}

export default function BlogPostLayout({ children }: BlogPostLayoutProps) {
  return children;
}