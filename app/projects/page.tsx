import Link from "next/link";

export const metadata = { title: "Projects" };

const projects = [
  {
    title: "Landing Page + Newsletter CTA",
    desc: "Build a responsive landing page with a simple newsletter form and validation.",
    tech: "Next.js, Tailwind, Zod",
  },
  {
    title: "Public Link Shortener",
    desc: "Create a tiny URL service with rate limiting and analytics.",
    tech: "Next.js App Router, Prisma, SQLite",
  },
  {
    title: "Mini RAG Notes",
    desc: "Upload markdown notes and ask questions with retrieval-augmented generation.",
    tech: "Next.js, embeddings, a vector store (e.g., SQLite FTS or pgvector)",
  },
  {
    title: "Analytics Dashboard",
    desc: "Pull data from an API, transform it, and render charts and KPIs.",
    tech: "Next.js, Chart library, Edge runtime",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Sample Projects</h1>
        <p className="mt-2 text-muted-foreground text-sm">
          Follow these project briefs to build your portfolio. Each takes ~1–2 weeks part-time.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <div key={p.title} className="rounded-lg border p-6">
            <div className="font-medium">{p.title}</div>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
            <p className="mt-2 text-xs text-muted-foreground">Tech: {p.tech}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg border p-6">
        <div className="font-medium">Community shout-outs</div>
        <p className="text-sm text-muted-foreground">
          Built something with these briefs? Share it and we can feature it here as a testimonial.
          Send links to <a className="underline" href="mailto:hello@vibecoder.ph">hello@vibecoder.ph</a>.
        </p>
      </div>

      <div className="mt-8 flex gap-3">
        <Link href="/gallery" className="inline-flex items-center rounded-md border px-4 py-2.5 text-sm font-medium hover:bg-accent">See Gallery</Link>
        <Link href="/courses" className="inline-flex items-center rounded-md bg-foreground px-4 py-2.5 text-background text-sm font-medium hover:opacity-90">See Courses</Link>
      </div>
    </div>
  );
}
