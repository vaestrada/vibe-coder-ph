import Image from "next/image";
import Link from "next/link";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  project?: { title: string; href: string };
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Shipping weekly projects kept me consistent. I landed my first freelance landing-page gig after Project 1.",
    author: "Kai D.",
    role: "Junior Frontend Dev",
    avatar: "https://avatars.githubusercontent.com/u/9919?v=4",
    project: { title: "Landing Page + CTA", href: "/projects" },
  },
  {
    quote:
      "The mini RAG notes app helped me finally understand embeddings and retrieval.",
    author: "Mika S.",
    role: "Data Analyst → AI curious",
    avatar: "https://avatars.githubusercontent.com/u/6412038?v=4",
    project: { title: "Mini RAG Notes", href: "/projects" },
  },
  {
    quote:
      "Clear briefs, just enough guidance, and lots of building. Exactly what I needed.",
    author: "Arvin P.",
    role: "Bootstrapping Indie Dev",
    avatar: "https://avatars.githubusercontent.com/u/6154722?v=4",
    project: { title: "Link Shortener", href: "/projects" },
  },
];

export function Testimonials() {
  return (
    <section className="border-t">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">What builders say</h2>
          <p className="text-sm text-muted-foreground">Momentum over perfection. Here are a few wins from the community.</p>
        </div>

        <div className="[--gap:16px] grid grid-flow-col auto-cols-[85%] md:auto-cols-[45%] gap-[var(--gap)] overflow-x-auto pb-2 snap-x snap-mandatory scroll-p-4">
          {testimonials.map((t) => (
            <figure key={t.author} className="snap-start rounded-lg border p-6 bg-card">
              <div className="flex items-center gap-3">
                <Image src={t.avatar} alt={t.author} width={40} height={40} className="h-10 w-10 rounded-full border" />
                <div>
                  <figcaption className="font-medium leading-tight">{t.author}</figcaption>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
              <blockquote className="mt-4 text-sm text-muted-foreground">“{t.quote}”</blockquote>
              {t.project && (
                <div className="mt-4 text-sm">
                  <Link href={t.project.href} className="underline underline-offset-4 hover:opacity-80">
                    {t.project.title} →
                  </Link>
                </div>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
