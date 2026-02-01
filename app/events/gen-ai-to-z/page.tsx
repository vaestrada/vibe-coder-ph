import { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, Users, Sparkles, Code2, GraduationCap, ChevronDown } from "lucide-react";
import CountdownTimer from "./components/countdown-timer";
import PersonaCards from "./components/persona-cards";
import ScheduleSection from "./components/schedule-section";
import ScrollIndicator from "./components/scroll-indicator";

export const metadata: Metadata = {
  title: "Gen AI to Z - Career Guide in AI-Driven Workplace | March 17, 2026",
  description: "Full-day career forum at UP Diliman. Learn how AI is reshaping work with talks, panels, and community networking. For students & professionals. Free admission.",
  openGraph: {
    title: "Gen AI to Z - A Career Guide in an AI-Driven Workplace",
    description: "March 17, 2026 at UP Diliman. Discover AI career paths with talks, panels, and hands-on demonstrations.",
    images: [{ url: "/events/gen-ai-to-z-og.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gen AI to Z - Career Forum | March 17, 2026",
    description: "Full-day AI career guide at UP Diliman. Free admission.",
    images: ["/events/gen-ai-to-z-og.jpg"],
  },
};

const personas = [
  {
    id: "student",
    icon: "🎓",
    title: "College or Senior High Student",
    description: "Figuring out what skills actually matter in an AI-driven workplace"
  },
  {
    id: "engineer",
    icon: "⚙️",
    title: "Future Engineer or Developer",
    description: "Learning how AI tools amplify your technical capabilities"
  },
  {
    id: "creative",
    icon: "🎨",
    title: "Creative Professional",
    description: "Exploring AI in design, media, film, or content creation"
  },
  {
    id: "shifter",
    icon: "🔄",
    title: "Career Shifter",
    description: "Feeling left behind by tech and ready to catch up"
  },
  {
    id: "curious",
    icon: "💡",
    title: "Simply Curious",
    description: "Asking 'Where do I even start with AI?'"
  },
  {
    id: "builder",
    icon: "🚀",
    title: "Future Builder",
    description: "Ready to leverage AI as a career multiplier"
  }
];

const scheduleItems = [
  {
    id: "morning",
    time: "8:00 AM - 12:00 PM",
    title: "Morning Sessions",
    description: "Keynote talks from AI researchers, startup builders, and industry practitioners. Learn what AI jobs actually exist today and how to break in.",
    topics: ["AI Career Landscape", "Real-World Applications", "Skills That Matter"]
  },
  {
    id: "lunch",
    time: "12:00 PM - 1:00 PM",
    title: "Networking Lunch",
    description: "Connect with peers, mentors, and professionals. Explore partner spaces and opportunities.",
    topics: ["Community Building", "Informal Q&A", "Partner Booths"]
  },
  {
    id: "afternoon",
    time: "1:00 PM - 5:00 PM",
    title: "Afternoon Sessions",
    description: "Panel discussions on breaking into AI without years of experience. Show & tell of AI-assisted projects and creative works.",
    topics: ["Panel Discussions", "Project Demonstrations", "Hands-on Examples"]
  }
];

export default function GenAItoZPage() {
  // Structured data for Google Events
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Gen AI to Z: A Career Guide in an AI-Driven Workplace",
    "startDate": "2026-03-17T08:00:00+08:00",
    "endDate": "2026-03-17T17:00:00+08:00",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "David M. Consunji Theater",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "UP College of Engineering",
        "addressLocality": "Quezon City",
        "addressRegion": "Metro Manila",
        "addressCountry": "PH"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "UP EMC² Fraternity",
      "url": "https://www.vibecoders.ph"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "PHP",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-02-01T00:00:00+08:00"
    },
    "description": "Full-day career and community forum on AI-driven workplace. Features talks, panels, and demonstrations for students and professionals."
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated background with grid pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-950/90 via-background to-fuchsia-950/90 dark:from-violet-950 dark:via-background dark:to-fuchsia-950">
            {/* Grid overlay */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgb(139, 92, 246) 1px, transparent 1px),
                  linear-gradient(to bottom, rgb(139, 92, 246) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
            />
            
            {/* Gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>

          {/* Hero content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-mono">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Free Admission • Open to All
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">
              GEN AI TO Z
            </h1>

            <p className="text-2xl sm:text-3xl text-cyan-400 mb-6 font-semibold animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              A Career Guide in an AI-Driven Workplace
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg mb-8 text-muted-foreground animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-violet-400" />
                <time dateTime="2026-03-17T08:00">March 17, 2026</time>
              </div>
              <span className="hidden sm:inline text-violet-400">•</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-fuchsia-400" />
                <span>UP Diliman</span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <CountdownTimer targetDate="2026-03-17T08:00:00+08:00" />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <Link
                href="#register"
                className="group inline-flex items-center justify-center gap-2 min-h-[48px] min-w-[200px] px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white rounded-lg text-lg font-semibold shadow-lg shadow-violet-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-violet-500/60 touch-action-manipulation"
              >
                Register Free
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] min-w-[200px] px-8 py-4 border-2 border-violet-500 hover:bg-violet-500/10 rounded-lg text-lg font-semibold transition-all touch-action-manipulation"
              >
                Learn More
                <ChevronDown className="w-5 h-5" />
              </Link>
            </div>

            {/* Scroll indicator */}
            <ScrollIndicator />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-b from-background to-violet-950/20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Stop manually typing your future.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Whether you&apos;re a <strong className="text-foreground">coder</strong>, <strong className="text-foreground">creative</strong>, or <strong className="text-foreground">corporate hopeful</strong> — the rules of work have already changed.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Artificial Intelligence isn&apos;t &ldquo;coming.&rdquo; It&apos;s already reviewing resumes, generating code, writing copy, editing videos, and reshaping entire industries.
              </p>
            </div>

            {/* Value Props */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="p-6 rounded-xl bg-card border border-violet-500/20 hover:border-violet-500/50 transition-all hover:scale-105">
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">University-led</h3>
                <p className="text-muted-foreground">Community-driven, educational focus aligned with UP&apos;s mandate</p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:scale-105">
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Practical Focus</h3>
                <p className="text-muted-foreground">Real examples, not theory. See how people use AI in actual jobs</p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-fuchsia-500/20 hover:border-fuchsia-500/50 transition-all hover:scale-105">
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">PH-Centered</h3>
                <p className="text-muted-foreground">Featuring Filipino builders, researchers, and creatives</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                From &ldquo;prompting&rdquo; to &ldquo;promoted.&rdquo;
              </p>
              <p className="text-xl text-muted-foreground mt-2">That&apos;s the goal.</p>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="py-20 bg-gradient-to-b from-violet-950/20 to-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">This event is for you if…</h2>
              <p className="text-xl text-muted-foreground">You don&apos;t need to be an AI expert. You just need to be curious.</p>
            </div>

            <PersonaCards personas={personas} />

            {/* What You'll Walk Away With */}
            <div className="mt-16 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">What you&apos;ll walk away with</h3>
              <div className="space-y-3">
                {[
                  "A clearer picture of AI career paths",
                  "Real examples of AI use across industries",
                  "Insight into how companies, startups, and creators work with AI",
                  "New connections — peers, mentors, and professionals",
                  "Confidence to experiment, learn, and adapt"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-violet-500/20">
                    <span className="text-violet-400 font-bold">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <ScheduleSection items={scheduleItems} />

        {/* Location Section */}
        <section className="py-20 bg-gradient-to-b from-background to-violet-950/20" aria-labelledby="location-heading">
          <div className="max-w-6xl mx-auto px-4">
            <h2 id="location-heading" className="text-4xl font-bold mb-12 text-center">Location</h2>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">David M. Consunji Theater</h3>
                  <address className="not-italic text-lg text-muted-foreground space-y-1">
                    <p>UP College of Engineering</p>
                    <p>University of the Philippines Diliman</p>
                    <p>Quezon City, Metro Manila</p>
                  </address>
                </div>

                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Time:</strong> 8:00 AM – 5:00 PM
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Date:</strong> March 17, 2026
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=David+M+Consunji+Theater+UP+Diliman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold transition-colors min-h-[44px]"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
              </div>

              {/* Map placeholder */}
              <div className="relative h-[400px] rounded-xl overflow-hidden border-2 border-violet-500/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.7244!2d121.0641!3d14.6548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM5JzE3LjMiTiAxMjHCsDAzJzUxLjIiRQ!5e0!3m2!1sen!2sph!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map to David M. Consunji Theater, UP Diliman"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Organizer Section */}
        <section className="py-20 bg-gradient-to-b from-violet-950/20 to-background">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Organized by UP EMC² Fraternity</h2>
            <p className="text-lg text-muted-foreground mb-4">
              A recognized organization under the <strong className="text-foreground">UP College of Engineering</strong>, in coordination with faculty advisers and university units.
            </p>
            <p className="text-muted-foreground">
              This event is educational, non-commercial, and aligned with UP&apos;s mandate for instruction, research, and public service.
            </p>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="register" className="py-20 bg-gradient-to-br from-violet-950/50 via-fuchsia-950/50 to-cyan-950/50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Join Us</h2>
            <p className="text-xl text-muted-foreground mb-4">
              The future of work is being written right now.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              The question isn&apos;t <strong className="text-foreground">&ldquo;Will AI change my career?&rdquo;</strong><br />
              It&apos;s <strong className="text-foreground">&ldquo;Will I know how to use it when it does?&rdquo;</strong>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="https://forms.gle/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[56px] min-w-[240px] px-10 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white rounded-lg text-xl font-bold shadow-2xl shadow-violet-500/50 transition-all hover:scale-105 hover:shadow-violet-500/70 touch-action-manipulation"
              >
                Register Now - It&apos;s Free
                <Sparkles className="w-6 h-6" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              Registration opens soon. Limited seats available.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
