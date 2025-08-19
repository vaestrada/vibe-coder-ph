import Link from "next/link";

export const metadata = { title: "Data & Analytics" };

export default function DataCourse() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="text-3xl font-bold">Data & Analytics</h1>
      <p className="mt-2 text-muted-foreground">10 weeks, part-time • Python, SQL, dbt, BI dashboards</p>

      <div className="mt-6 space-y-4 text-sm leading-6 text-muted-foreground">
        <p>
          Master the analytics engineering stack. Ingest, model, transform, and visualize data while following best practices and version control.
        </p>
        <ul className="list-disc pl-5">
          <li>Data modeling and dbt fundamentals</li>
          <li>Warehouse + BI workflows</li>
          <li>Capstone dashboard project</li>
        </ul>
      </div>

      <div className="mt-8 flex gap-3">
        <Link href="/projects" className="inline-flex items-center rounded-md bg-foreground px-4 py-2.5 text-background text-sm font-medium hover:opacity-90">Start a Project</Link>
        <Link href="/courses" className="inline-flex items-center rounded-md border px-4 py-2.5 text-sm font-medium hover:bg-accent">Back to Courses</Link>
      </div>
    </div>
  );
}
