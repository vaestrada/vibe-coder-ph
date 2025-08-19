export const metadata = { title: "FAQ" };

const faqs = [
  {
    q: "Who is this for?",
    a: "Beginners and upskillers who want a practical, project-first path. We support working pros with evening/weekend schedules.",
  },
  {
    q: "Do you offer scholarships?",
    a: "Yes—need and merit-based slots each cohort. We also offer flexible payment plans.",
  },
  {
    q: "Is this fully online?",
    a: "Yes. Live mentor sessions + async content. Occasional in-person meetups in Metro Manila.",
  },
  {
    q: "Will you help me get a job?",
    a: "We provide career coaching, resume and portfolio reviews, and referrals when available.",
  },
];

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      <div className="mt-6 divide-y border rounded-lg">
        {faqs.map((f) => (
          <div key={f.q} className="p-6">
            <div className="font-medium">{f.q}</div>
            <p className="text-sm text-muted-foreground">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
