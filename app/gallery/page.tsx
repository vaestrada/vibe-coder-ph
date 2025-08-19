import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Projects Gallery" };

const entries = [
  { title: "Link Shortener by JM", href: "/projects", img: "/images/programs/web-dev.svg" },
  { title: "Mini RAG Notes by Cha", href: "/projects", img: "/images/programs/ai-eng.svg" },
  { title: "Analytics Dashboard by Lance", href: "/projects", img: "/images/programs/data-analytics.svg" },
];

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Projects Gallery</h1>
        <p className="mt-2 text-muted-foreground text-sm">Featured builds from the community. Want to be featured? Email hello@vibecoder.ph.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {entries.map((e) => (
          <Link key={e.title} href={e.href} className="group rounded-lg border overflow-hidden hover:bg-accent">
            <div className="aspect-[16/9] w-full border-b bg-secondary/40">
              <Image src={e.img} alt={e.title} width={1200} height={675} className="h-full w-full object-contain p-6" />
            </div>
            <div className="p-4">
              <div className="font-medium group-hover:underline">{e.title}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        <Link href="/projects" className="inline-flex items-center rounded-md border px-4 py-2.5 text-sm font-medium hover:bg-accent">Project Briefs</Link>
        <Link href="/challenges/ship-your-first-project" className="inline-flex items-center rounded-md bg-foreground px-4 py-2.5 text-background text-sm font-medium hover:opacity-90">Ship Your First Project</Link>
      </div>
    </div>
  );
}
