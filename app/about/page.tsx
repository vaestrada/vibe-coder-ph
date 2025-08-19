export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="text-3xl font-bold">About Vibe Coding School Philippines</h1>
      <div className="mt-4 space-y-4 text-muted-foreground text-sm leading-6">
        <p>
          We believe the best way to learn to code is to build, get feedback, and iterate. Our programs focus on momentum—small wins every week that compound into real skills and a portfolio that lands interviews.
        </p>
        <p>
          Our mentors are working engineers who share practical patterns, review your code, and help you unblock fast. You’ll learn inside a supportive PH tech community with accountability and career support.
        </p>
      </div>
    </div>
  );
}
