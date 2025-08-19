export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-muted-foreground text-sm">
        Questions about cohorts, scholarships, or partnerships? Email us at
        <a className="ml-1 underline" href="mailto:hello@vibecoder.ph">hello@vibecoder.ph</a>
      </p>

      <form className="mt-8 space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input className="mt-1 w-full rounded-md border bg-background px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="mt-1 w-full rounded-md border bg-background px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea rows={5} className="mt-1 w-full rounded-md border bg-background px-3 py-2" />
        </div>
        <button type="submit" className="inline-flex items-center rounded-md bg-foreground px-4 py-2.5 text-background text-sm font-medium hover:opacity-90">Send</button>
      </form>
    </div>
  );
}
