export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <div className="mt-4 space-y-4 text-muted-foreground text-sm leading-6">
        <p>
          We collect only the data needed to provide our services (name, email, course preferences). We never sell your data. We use reputable third-party tools for payments and analytics.
        </p>
        <p>
          You can request data deletion at any time by emailing hello@vibecoder.ph.
        </p>
      </div>
    </div>
  );
}
