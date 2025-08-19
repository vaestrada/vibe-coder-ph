export const metadata = { title: "Vibe Basics" };

const modules = [
  {
    title: "Momentum Mindset",
    items: [
      "Set a weekly theme and a shippable goal",
      "Work in 90–120 minute focused blocks",
      "Reflect in public: write a short weekly recap",
    ],
  },
  {
    title: "Web Dev Foundations",
    items: [
      "HTML semantics and accessible components",
      "CSS layout with Flex/Grid + Tailwind basics",
      "JavaScript fundamentals and TypeScript types",
    ],
  },
  {
    title: "Product Skills",
    items: [
      "Break a feature into small, testable tasks",
      "Design simple APIs and state models",
      "Ship → get feedback → iterate",
    ],
  },
];

export default function BasicsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="text-3xl font-bold">The Basics of Vibe Coding</h1>
      <p className="mt-2 text-muted-foreground text-sm">
        A lightweight approach to learning that prioritizes momentum and projects.
      </p>

      <div className="mt-6 grid gap-4">
        {modules.map((m) => (
          <div key={m.title} className="rounded-lg border p-6">
            <div className="font-medium">{m.title}</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
              {m.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
