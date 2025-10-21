import Link from "next/link";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="text-3xl font-bold mb-6">About Vibe Coders Philippines</h1>

      {/* Mission */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
        <div className="space-y-4 text-muted-foreground leading-7">
          <p>
            Vibe Coders Philippines is a community-driven platform sharing hands-on technical content and real-world project insights. We believe the best way to learn is through building, sharing, and learning together.
          </p>
          <p>
            Instead of lengthy theory, we focus on practical tutorials, project breakdowns, and the kind of knowledge you actually use in the field. Our content covers Web Development, AI Engineering, and Data Analytics with a project-first approach.
          </p>
        </div>
      </div>


      {/* What We Offer */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">What We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">Technical Blog</h3>
            <p className="text-sm text-muted-foreground">
              Real-world tutorials, project breakdowns, and practical insights from building actual applications.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">Discord Community</h3>
            <p className="text-sm text-muted-foreground">
              Connect with other Filipino developers, get feedback on projects, and share knowledge.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">Project Showcases</h3>
            <p className="text-sm text-muted-foreground">
              See what others are building and get inspired for your next project.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">Global Hiring & Japan Opportunities</h3>
            <p className="text-sm text-muted-foreground">
              Access international remote opportunities and navigate the Japanese tech market from the Philippines.
            </p>
          </div>
          <div className="border rounded-lg p-4 bg-gradient-to-br from-primary/5 to-primary/10">
            <h3 className="font-medium mb-2">Structured Cohorts</h3>
            <p className="text-sm text-muted-foreground mb-2">
              8-week intensive programs with mentorship, project-based learning, and job placement support.
            </p>
            <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">Coming Q1 2026</span>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">Career Mentorship</h3>
            <p className="text-sm text-muted-foreground">
              1:1 guidance for breaking into international remote roles and building a standout portfolio.
            </p>
          </div>
          <div className="border rounded-lg p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
            <h3 className="font-medium mb-2 flex items-center gap-2">
              <span>🏗️</span>
              Built by Community
            </h3>
            <p className="text-sm text-muted-foreground">
              This very website is proof of concept - designed, coded, and deployed entirely by Vibe Coders members.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">Open Source Projects</h3>
            <p className="text-sm text-muted-foreground">
              Collaborate on real projects, contribute to open source, and build your GitHub portfolio with the community.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">Join the Community</h2>
        <p className="text-muted-foreground mb-6">
          Ready to connect with fellow builders and start learning through real projects?
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="https://discord.gg/HgKuev28wg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-foreground px-4 py-2.5 text-background text-sm font-medium hover:opacity-90"
          >
            Join Discord Community
          </Link>
          <Link
            href="/blog/all"
            className="inline-flex items-center rounded-md border px-4 py-2.5 text-sm font-medium hover:bg-accent"
          >
            Read Our Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
