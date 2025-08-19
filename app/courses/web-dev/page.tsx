import Link from "next/link";

export const metadata = { title: "Full-Stack Web Development" };

export default function WebDevCourse() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="text-3xl font-bold">Full-Stack Web Development</h1>
      <p className="mt-2 text-muted-foreground">12 weeks, part-time • Next.js, TypeScript, Tailwind, APIs, databases</p>

      <div className="mt-6 space-y-4 text-sm leading-6 text-muted-foreground">
        <p>
          Build modern web applications from scratch. Learn layout and styling with Tailwind, component patterns with React + Next.js, API design, authentication, databases, and deployment.
        </p>
        <ul className="list-disc pl-5">
          <li>Weekly projects with code reviews</li>
          <li>1:1 mentor sessions and pair programming</li>
          <li>Deployment to Vercel and CI basics</li>
        </ul>
      </div>

      <div className="mt-8 flex gap-3">
        <Link href="/projects" className="inline-flex items-center rounded-md bg-foreground px-4 py-2.5 text-background text-sm font-medium hover:opacity-90">Start a Project</Link>
        <Link href="/courses" className="inline-flex items-center rounded-md border px-4 py-2.5 text-sm font-medium hover:bg-accent">Back to Courses</Link>
      </div>
    </div>
  );
}
