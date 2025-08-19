export const metadata = { title: "Ship Your First Project" };

const steps = [
  { title: "Pick a brief", detail: "Choose from Landing + CTA, Link Shortener, Mini RAG Notes, or Analytics Dashboard." },
  { title: "Scope 1 week", detail: "Set a tiny, shippable MVP. Define success in 2–3 bullet points." },
  { title: "Build in 5 sessions", detail: "Five 90–120 min sessions. Commit publicly (daily short log)." },
  { title: "Demo + reflect", detail: "Record a 2–3 minute demo. Write what worked, what didn’t, what’s next." },
];

export default function ShipYourFirstProject() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="text-3xl font-bold">Ship Your First Project</h1>
      <p className="mt-2 text-sm text-muted-foreground">A 7-day micro‑challenge to kickstart momentum and publish a real build.</p>

      <ol className="mt-6 space-y-4">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-lg border p-4">
            <div className="font-medium">{i + 1}. {s.title}</div>
            <p className="text-sm text-muted-foreground">{s.detail}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8 rounded-lg border p-6">
        <div className="font-medium">Checklist</div>
        <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
          <li>Create a repo and add a short README goal</li>
          <li>Write a daily build log (5 entries)</li>
          <li>Ship an MVP and deploy</li>
          <li>Record a 2–3 minute demo</li>
          <li>Post your recap with a link</li>
        </ul>
      </div>
    </div>
  );
}
