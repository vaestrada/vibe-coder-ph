import { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, Users, Sparkles, Code2, GraduationCap, ChevronDown, Check, Handshake, BookOpen, Compass, Flag, Mic, ShieldCheck, Ticket } from "lucide-react";
import CountdownTimer from "./components/countdown-timer";
import PersonaCards from "./components/persona-cards";
import ScheduleSection from "./components/schedule-section";
import ScrollIndicator from "./components/scroll-indicator";

export const metadata: Metadata = {
  title: "Gen AI to Z - Career Guide in AI-Driven Workplace | March 17, 2026",
  description: "Full-day career forum at UP Diliman. Learn how AI is reshaping work with talks, panels, and community networking. For students & professionals. Free admission. 300-500 expected attendees.",
  openGraph: {
    title: "Gen AI to Z - A Career Guide in an AI-Driven Workplace",
    description: "March 17, 2026 at Institute of Civil Engineering, UP Diliman. Discover AI career paths with talks, panels, and hands-on demonstrations. Free admission.",
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
    icon: "GraduationCap",
    title: "College or Senior High Student",
    description: "Figuring out what skills actually matter in an AI-driven workplace"
  },
  {
    id: "engineer",
    icon: "Wrench",
    title: "Future Engineer or Developer",
    description: "Learning how AI tools amplify your technical capabilities"
  },
  {
    id: "creative",
    icon: "Palette",
    title: "Creative Professional",
    description: "Exploring AI in design, media, film, or content creation"
  },
  {
    id: "shifter",
    icon: "RefreshCw",
    title: "Career Shifter",
    description: "Feeling left behind by tech and ready to catch up"
  },
  {
    id: "curious",
    icon: "Lightbulb",
    title: "Simply Curious",
    description: "Asking 'Where do I even start with AI?'"
  },
  {
    id: "builder",
    icon: "Rocket",
    title: "Future Builder",
    description: "Ready to leverage AI as a career multiplier"
  }
];

// Program segments from official concept paper
const scheduleItems = [
  {
    id: "opening",
    time: "8:00 AM - 9:00 AM",
    title: "BIRD'S AI VIEW",
    subtitle: "Opening Program",
    description: "Welcome remarks, introduction of the event objectives, and an overview of the program flow. This session sets the big picture landscape for the day.",
    topics: ["Welcome Remarks", "Event Objectives", "Program Overview"],
    icon: "Eye"
  },
  {
    id: "talks",
    time: "9:00 AM - 12:00 PM",
    title: "AI ON THE PRIZE",
    subtitle: "Featured Talks",
    description: "Talks by invited speakers from academe, industry, startups, and creative fields, focusing on AI development, applications, and career pathways. Each session includes a brief moderated Q&A.",
    topics: ["AI Career Paths", "Industry Applications", "Real-World Case Studies"],
    icon: "Target"
  },
  {
    id: "lunch",
    time: "12:00 PM - 1:00 PM",
    title: "AS PER MY LAST PROMPT",
    subtitle: "Networking & Partner Engagement",
    description: "Connect with peers, mentors, and professionals. Explore partner booths and discover career opportunities. Short curated segments by industry partners.",
    topics: ["Partner Booths", "Industry Perspectives", "Career Opportunities"],
    icon: "Handshake"
  },
  {
    id: "panel",
    time: "1:00 PM - 3:00 PM",
    title: "BEST OF BOT WORLDS",
    subtitle: "Panel Discussion",
    description: "A moderated panel featuring selected speakers to discuss broader themes such as AI careers, ethical considerations, and the future of AI in the Philippine context.",
    topics: ["AI Ethics", "Future of Work", "Academic + Industry Perspectives"],
    icon: "MessageSquare"
  },
  {
    id: "community",
    time: "3:00 PM - 5:00 PM",
    title: "AI NAKU!",
    subtitle: "Community Sharing & Open Forum",
    description: "A moderated open-sharing session where participants present AI-assisted or AI-built projects, prototypes, research outputs, or creative works. A space for hallucinations turned into reality.",
    topics: ["Project Demos", "Creative Works", "Open Discussion"],
    icon: "Lightbulb"
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
      "name": "David M. Consunji Theater, Institute of Civil Engineering",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Institute of Civil Engineering, T.H. Pardo de Tavera St, UP Diliman",
        "addressLocality": "Quezon City",
        "postalCode": "1101",
        "addressRegion": "Metro Manila",
        "addressCountry": "PH"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "EMC² Fraternity & Vibe Coders PH",
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
                <span>Institute of Civil Engineering, UP Diliman</span>
              </div>
              <span className="hidden sm:inline text-violet-400">•</span>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-cyan-400" />
                <span>300-500 Attendees</span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <CountdownTimer targetDate="2026-03-17T08:00:00+08:00" />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <Link
                href="/events/gen-ai-to-z/register"
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
        <section id="about" className="py-24 bg-gradient-to-b from-background to-violet-950/20">
          <div className="max-w-6xl mx-auto px-4">
            {/* The Blurb - iconic tagline */}
            <div className="max-w-4xl mx-auto text-center mb-20">
              <blockquote className="relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-violet-500/20 font-serif">&ldquo;</div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6">
                  Stop manually typing your future.
                </p>
                <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-6">
                  Whether you&apos;re a <span className="text-violet-400 font-semibold">coder</span>, <span className="text-fuchsia-400 font-semibold">creative</span>, or <span className="text-cyan-400 font-semibold">corporate hopeful</span> — the rules have changed.
                </p>
                <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  Come learn how to turn &ldquo;Artificial&rdquo; Intelligence into &ldquo;Hired&rdquo; Intelligence.
                </p>
              </blockquote>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                { value: "1", label: "Full Day", sublabel: "8AM - 5PM" },
                { value: "5", label: "Sessions", sublabel: "Talks, Panels, Demos" },
                { value: "300+", label: "Attendees", sublabel: "Students & Pros" },
                { value: "FREE", label: "Admission", sublabel: "Open to All" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground mt-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
                </div>
              ))}
            </div>

            {/* Value Props */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-violet-500/10 to-violet-500/5 border border-violet-500/20 hover:border-violet-500/40 transition-all group">
                <div className="w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-violet-400 transition-colors">University-led</h3>
                <p className="text-muted-foreground leading-relaxed">Educational, non-commercial, aligned with UP&apos;s mandate for instruction, research, and public service.</p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all group">
                <div className="w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">Practical Focus</h3>
                <p className="text-muted-foreground leading-relaxed">Real examples, not theory. See how practitioners, researchers, and builders actually use AI in their work.</p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-500/5 border border-fuchsia-500/20 hover:border-fuchsia-500/40 transition-all group">
                <div className="w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center shadow-lg shadow-fuchsia-500/30">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-fuchsia-400 transition-colors">Filipino Builders</h3>
                <p className="text-muted-foreground leading-relaxed">Highlighting Filipino leadership and contributions in AI — practitioners shaping solutions locally and globally.</p>
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
        <section className="py-24 bg-gradient-to-b from-violet-950/20 to-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-fuchsia-400 bg-fuchsia-500/10 rounded-full border border-fuchsia-500/20">
                Target Participants
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">This event is for you if…</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">You don&apos;t need to be an AI expert. You just need to be curious.</p>
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
                    <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Event Objectives Section */}
        <section className="py-24 bg-gradient-to-b from-background via-violet-950/10 to-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-violet-400 bg-violet-500/10 rounded-full border border-violet-500/20">
                Event Objectives
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">What This Event Seeks to Achieve</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Six concrete goals driving meaningful outcomes for every participant.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "AI Literacy",
                  description: "Provide foundational and applied understanding of AI technologies, tools, and practices used in academia, industry, startups, and creative fields."
                },
                {
                  icon: Compass,
                  title: "Career Clarity",
                  description: "Demystify AI-related career pathways by showcasing diverse professional roles including AI research, ML engineering, product development, and creative applications."
                },
                {
                  icon: Flag,
                  title: "Filipino Leadership",
                  description: "Highlight Filipino contributions in AI by featuring practitioners, researchers, and builders actively shaping AI-driven solutions locally and globally."
                },
                {
                  icon: Mic,
                  title: "Active Participation",
                  description: "Encourage community involvement through moderated open-sharing sessions where participants present AI-assisted projects, prototypes, or creative outputs."
                },
                {
                  icon: Handshake,
                  title: "Collaboration",
                  description: "Foster connections between academe, industry, and the broader community by creating opportunities for dialogue, networking, and knowledge exchange."
                },
                {
                  icon: ShieldCheck,
                  title: "Responsible AI",
                  description: "Promote ethical engagement with AI technologies by situating discussions within broader social, educational, and national development context."
                }
              ].map((objective, i) => {
                const IconComponent = objective.icon;
                return (
                  <div 
                    key={i} 
                    className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-violet-500/40 transition-all duration-300"
                  >
                    <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-violet-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-violet-400 transition-colors">{objective.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{objective.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <ScheduleSection items={scheduleItems} />

        {/* Location Section */}
        <section className="py-24 bg-gradient-to-b from-background to-violet-950/20" aria-labelledby="location-heading">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                Venue
              </span>
              <h2 id="location-heading" className="text-4xl sm:text-5xl font-bold">Where It All Happens</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">David M. Consunji Theater</h3>
                <address className="not-italic text-lg text-muted-foreground space-y-2 mb-8">
                  <p className="font-semibold text-foreground">Institute of Civil Engineering</p>
                  <p>UP Diliman Campus</p>
                  <p>Quezon City, 1101 Metro Manila</p>
                </address>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/20 text-center">
                    <Calendar className="w-6 h-6 text-violet-400 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-bold">March 17, 2026</p>
                  </div>
                  <div className="p-4 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 text-center">
                    <Sparkles className="w-6 h-6 text-fuchsia-400 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-bold">8:00 AM – 5:00 PM</p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Institute+of+Civil+Engineering,+David+M.+Consunji+Theater,+T.H.+Pardo+de+Tavera+St,+Diliman,+Quezon+City,+1101+Metro+Manila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-semibold transition-all min-h-[48px] hover:scale-105 shadow-lg shadow-cyan-500/30"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
              </div>

              {/* Map */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden border-2 border-violet-500/20 shadow-2xl shadow-violet-500/10">
                <iframe
                  src="https://maps.google.com/maps?q=Institute+of+Civil+Engineering,+David+M.+Consunji+Theater,+T.H.+Pardo+de+Tavera+St,+Diliman,+Quezon+City,+1101+Metro+Manila&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map to David M. Consunji Theater, Institute of Civil Engineering, UP Diliman"
                  className="grayscale-[70%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Organizer Section */}
        <section className="py-24 bg-gradient-to-b from-violet-950/20 to-background">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">
              Organized By
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">EMC² Fraternity & Vibe Coders PH</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              A recognized organization under the <strong className="text-foreground">UP College of Engineering</strong>, in partnership with <strong className="text-foreground">Vibe Coders PH</strong>, coordinating with faculty advisers and university units to bring you this career forum.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-muted-foreground">Educational • Non-Commercial • Public Service</span>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="register" className="relative py-24 overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-950/80 via-fuchsia-950/80 to-cyan-950/80" />
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/2 right-1/4 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
              Your Career. Your Move.
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
              The future of work is being written right now.
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              The question isn&apos;t <strong className="text-white">&ldquo;Will AI change my career?&rdquo;</strong><br />
              It&apos;s <strong className="text-white">&ldquo;Will I know how to use it when it does?&rdquo;</strong>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                href="/events/gen-ai-to-z/register"
                className="group inline-flex items-center justify-center gap-3 min-h-[64px] min-w-[280px] px-12 py-6 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 hover:from-violet-400 hover:via-fuchsia-400 hover:to-cyan-400 text-white rounded-2xl text-xl font-bold shadow-2xl shadow-violet-500/40 transition-all hover:scale-105 hover:shadow-violet-500/60 touch-action-manipulation"
              >
                Register Now — It&apos;s Free
                <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-violet-400" />
                <span>March 17, 2026</span>
              </div>
              <span className="text-violet-400">•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-fuchsia-400" />
                <span>Institute of Civil Engineering, UP Diliman</span>
              </div>
              <span className="text-violet-400">•</span>
              <div className="flex items-center gap-1.5">
                <Ticket className="w-4 h-4 text-cyan-400" />
                <span>Limited seats</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
