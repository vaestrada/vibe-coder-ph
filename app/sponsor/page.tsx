import Link from "next/link";
import { CheckCircle, Users, Code, Trophy, ArrowRight, Building, Globe, Zap } from "lucide-react";

export const metadata = {
  title: "Sponsor a Bounty | VibeCoders Philippines",
  description: "Access top Filipino developers through project-based bounties. Sponsor real-world challenges and discover talent while supporting the local tech community.",
  openGraph: {
    title: "Sponsor a Bounty | VibeCoders Philippines",
    description: "Access top Filipino developers through project-based bounties. Sponsor real-world challenges and discover talent while supporting the local tech community.",
    type: "website",
    url: "https://www.vibecoders.ph/sponsor",
    siteName: "Vibe Coders PH",
    locale: "en_PH",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sponsor a Bounty - VibeCoders Philippines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sponsor a Bounty | VibeCoders Philippines",
    description: "Access top Filipino developers through project-based bounties. Sponsor real-world challenges and discover talent while supporting the local tech community.",
    images: ["/og-image.png"],
  },
};


const benefits = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Curated Developer Community",
    description: "Vetted Filipino developers who have shipped real projects. Quality over quantity - no race to the bottom."
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Multiple Solutions Per Bounty",
    description: "Get multiple different approaches to your problem. See working code before choosing the best solution."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "APAC Timezone Advantage",
    description: "Perfect overlap with Japan, Singapore, Australia. Native English speakers with professional communication."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Speed Through Competition",
    description: "Multiple developers competing means faster delivery and higher quality than 1-on-1 freelancing."
  }
];

const bountyTypes = [
  {
    title: "Technical Challenges",
    price: "Starting from $200",
    description: "API integrations, database design, algorithm optimization, code review challenges",
    examples: ["Build a REST API with auth", "Optimize database queries", "Create a data pipeline"]
  },
  {
    title: "Full-Stack Projects",
    price: "Starting from $800",
    description: "Complete applications, dashboards, MVPs with frontend and backend components",
    examples: ["E-commerce platform", "Admin dashboard", "Real-time chat app"]
  },
  {
    title: "AI/ML Solutions",
    price: "Starting from $1,500",
    description: "LLM integrations, RAG systems, computer vision, data analysis and automation",
    examples: ["RAG chatbot for docs", "Image classification API", "Data analysis pipeline"]
  },
  {
    title: "Enterprise Solutions",
    price: "Starting from $3,000",
    description: "Complex systems, integrations, migrations, and large-scale applications",
    examples: ["Legacy system migration", "Multi-tenant SaaS", "Advanced analytics platform"]
  }
];

export default function SponsorPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full">
            <Building className="h-4 w-4" />
            For Companies & Startups
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Sponsor a Bounty
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Access top Filipino developers through project-based challenges. Get real work done while discovering talent for your team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://forms.gle/wdrs8PrG1eidchsw9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-foreground px-6 py-3 text-background font-medium hover:opacity-90"
          >
            Post Your First Bounty
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="#pricing"
            className="inline-flex items-center rounded-md border px-6 py-3 font-medium hover:bg-accent"
          >
            View Pricing
          </Link>
        </div>
      </div>


      {/* Benefits */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose VibeCoders Philippines?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex gap-4 p-6 border rounded-lg">
              <div className="text-primary">{benefit.icon}</div>
              <div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">VibeCoders vs. Traditional Freelancing</h2>
        <div className="overflow-x-auto">
          <table className="w-full border rounded-lg">
            <thead>
              <tr className="border-b bg-secondary/20">
                <th className="text-left p-4 font-medium">Feature</th>
                <th className="text-left p-4 font-medium">VibeCoders Philippines</th>
                <th className="text-left p-4 font-medium">Fiverr/Upwork</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-medium">Developer Quality</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Vetted community builders</span>
                  </div>
                </td>
                <td className="p-4 text-sm text-muted-foreground">Anyone can join, inconsistent quality</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Solutions Per Project</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Multiple competing solutions</span>
                  </div>
                </td>
                <td className="p-4 text-sm text-muted-foreground">1 developer, hope for the best</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Communication</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Native English, APAC timezone</span>
                  </div>
                </td>
                <td className="p-4 text-sm text-muted-foreground">Global mix, timezone challenges</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Evaluation Process</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">See working code first</span>
                  </div>
                </td>
                <td className="p-4 text-sm text-muted-foreground">Portfolio & reviews only</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Ongoing Relationship</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Talent discovery & hiring</span>
                  </div>
                </td>
                <td className="p-4 text-sm text-muted-foreground">Transactional projects</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Target Market</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">APAC businesses, quality focus</span>
                  </div>
                </td>
                <td className="p-4 text-sm text-muted-foreground">Global, price-focused</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="font-semibold mb-2">Post Your Challenge</h3>
            <p className="text-sm text-muted-foreground">
              Submit project requirements, timeline, and budget through our structured bounty form.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="font-semibold mb-2">Developers Compete</h3>
            <p className="text-sm text-muted-foreground">
              Our community members submit solutions, proposals, and working prototypes.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="font-semibold mb-2">Award & Hire</h3>
            <p className="text-sm text-muted-foreground">
              Review submissions, award the bounty, and optionally hire the developer for ongoing work.
            </p>
          </div>
        </div>

        {/* Platform Fee Notice */}
        <div className="mt-12 p-6 bg-secondary/20 border rounded-lg">
          <div className="text-center">
            <h4 className="font-semibold mb-2">Platform Fee: 30%</h4>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Our platform fee covers community management, quality assurance, dispute resolution, and platform development.
              Developers receive 70% of the bounty amount.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div id="pricing" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Bounty Categories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {bountyTypes.map((type) => (
            <div key={type.title} className="border rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold">{type.title}</h3>
                <span className="text-lg font-bold text-primary">{type.price}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
              <div className="space-y-2">
                <div className="text-sm font-medium">Example projects:</div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {type.examples.map((example) => (
                    <li key={example} className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Success */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Success</h2>
        <div className="max-w-4xl mx-auto">
          <div className="border rounded-lg p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="h-6 w-6 text-yellow-500" />
              <div>
                <span className="font-bold text-lg">Bright Data</span>
                <span className="text-sm text-muted-foreground ml-2">• Global Data Platform</span>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Commissioned one of our founders for <span className="font-semibold text-foreground">$11,000 USD</span> to create two technical showcases demonstrating their platform capabilities.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-background/50 rounded-lg p-4 border">
                  <h4 className="font-medium mb-2">E-commerce Intelligence Dashboard</h4>
                  <p className="text-sm text-muted-foreground">
                    Full-stack scraper with real-time dashboard aggregating data from 3 major Japanese e-commerce platforms.
                  </p>
                  <div className="text-xs text-primary mt-2 font-medium">Next.js • Node.js • Data Pipeline</div>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border">
                  <h4 className="font-medium mb-2">AI Recruiting Assistant (MCP)</h4>
                  <p className="text-sm text-muted-foreground">
                    Proof-of-concept Model Context Protocol integration for automated candidate sourcing and evaluation.
                  </p>
                  <div className="text-xs text-primary mt-2 font-medium">AI • Claude • Recruitment Tech</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t">
                <p className="text-sm text-muted-foreground italic">
                  &ldquo;This collaboration showcases the caliber of technical talent and execution quality you can expect from our community.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Currently Active */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Currently Active</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="border rounded-lg p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Active Bounty</span>
            </div>
            <h4 className="font-semibold mb-2">$200 USD Challenge</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Live bounty currently being worked on by community members. Testing our process and member capabilities.
            </p>
            <div className="text-xs text-green-700 dark:text-green-300 font-medium">In Progress</div>
          </div>

          <div className="border rounded-lg p-6 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Google Hackathon</span>
            </div>
            <h4 className="font-semibold mb-2">Team Competition</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Our community is actively participating in Google&apos;s hackathon, showcasing collaborative development skills.
            </p>
            <div className="text-xs text-purple-700 dark:text-purple-300 font-medium">Participating</div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Join a growing community that&apos;s actively building and competing at the highest levels.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Find Your Next Developer?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join companies that have discovered top Filipino talent through our bounty system.
          Post your first challenge and see the quality of our community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://forms.gle/wdrs8PrG1eidchsw9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-foreground px-6 py-3 text-background font-medium hover:opacity-90"
          >
            Submit Bounty Request
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center rounded-md border px-6 py-3 font-medium hover:bg-accent"
          >
            See Developer Work
          </Link>
        </div>
      </div>
    </div>
  );
}