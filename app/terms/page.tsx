export const metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <div className="mt-4 space-y-4 text-muted-foreground text-sm leading-6">
        <p>
          By enrolling in our programs you agree to our cohort policies, code of conduct, and payment terms. Content is for personal educational use and may not be redistributed.
        </p>
        <p>
          Refunds are handled on a case-by-case basis before the second week of a cohort. For questions, contact hello@vibecoder.ph.
        </p>
      </div>
    </div>
  );
}
