import Link from "next/link";
import { Code, Brain, BarChart3 } from "lucide-react";

export const metadata = {
  title: "Courses",
};

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
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="text-3xl font-bold">Courses</h1>
      <p className="mt-2 text-muted-foreground">
        Practical, mentor-guided tracks. Learn by building and ship weekly.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {courses.map((c) => {
          const IconComponent = c.icon;
          return (
            <Link key={c.slug} href={`/courses/${c.slug}`} className="group rounded-lg border p-6 hover:bg-accent">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-600">
                <IconComponent className="h-5 w-5 text-white" />
              </div>
              <div className="font-medium group-hover:underline">{c.title}</div>
              <div className="text-xs text-muted-foreground">{c.duration}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
