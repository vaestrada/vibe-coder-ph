import Link from "next/link";

export const metadata = { title: "AI Engineering" };

export default function AICourse() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="text-3xl font-bold">AI Engineering</h1>
      <p className="mt-2 text-muted-foreground">10 weeks, part-time • RAG, vector DBs, LLM apps, agents</p>

      <div className="mt-6 space-y-4 text-sm leading-6 text-muted-foreground">
        <p>
          Learn the end-to-end lifecycle of building production-grade AI applications. Cover prompts, embeddings, retrieval, RAG evaluation, tools, and basic MLOps.
        </p>
        <ul className="list-disc pl-5">
          <li>Ship 3 AI apps (chat, RAG, tools/agents)</li>
          <li>Compare providers and vector stores</li>
          <li>Security, cost control, and observability basics</li>
        </ul>
      </div>

      <div className="mt-8 flex gap-3">
        <Link href="/projects" className="inline-flex items-center rounded-md bg-foreground px-4 py-2.5 text-background text-sm font-medium hover:opacity-90">Start a Project</Link>
        <Link href="/courses" className="inline-flex items-center rounded-md border px-4 py-2.5 text-sm font-medium hover:bg-accent">Back to Courses</Link>
      </div>
    </div>
  );
}
