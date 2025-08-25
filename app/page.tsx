"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles, Users, Clock4, Code2 } from "lucide-react";
import { Testimonials } from "@/components/site/testimonials";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Lottie Animation Background */}
        <div className="absolute inset-0 -z-20">
          {/* Single Main Lottie Animation */}
          <div className="absolute inset-0 flex items-center justify-center opacity-60">
            <DotLottieReact
              src="https://lottie.host/6323b920-545b-4910-a629-f11f653ad382/nhU0Ilgb32.lottie"
              loop
              autoplay
              style={{
                width: '100%',
                height: '100%',
                maxWidth: '1200px',
                maxHeight: '800px'
              }}
            />
          </div>
        </div>
        
        {/* Simplified background gradient */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-violet-50 via-transparent to-fuchsia-50" />
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="animate-fade-in-up [animation-delay:200ms]">
              <h1 className="text-4xl/tight sm:text-5xl/tight font-bold tracking-tight">
                <span className="inline-block animate-fade-in-up [animation-delay:400ms]">Learn to code with momentum.</span>{" "}
                <span className="inline-block animate-fade-in-up [animation-delay:600ms]">Build real projects.</span>{" "}
                <span className="inline-block animate-fade-in-up [animation-delay:800ms] bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Land real work.</span>
              </h1>
              <p className="mt-4 text-muted-foreground text-lg animate-fade-in-up [animation-delay:1000ms]">
                Vibe Coding Philippines shares hands-on guides and community-driven content in Web Development, AI, and Data. Project-first, mentor-guided, community-backed.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 animate-fade-in-up [animation-delay:1200ms]">
                <Link href="/projects" className="inline-flex items-center rounded-md bg-foreground px-4 py-2.5 text-background text-sm font-medium hover:opacity-90 hover:scale-105 transition-all duration-200">
                  Start Building
                </Link>
                <Link href="/projects" className="inline-flex items-center rounded-md border px-4 py-2.5 text-sm font-medium hover:bg-accent hover:scale-105 transition-all duration-200">
                  See Projects
                </Link>
              </div>
              <p className="mt-4 text-xs text-muted-foreground animate-fade-in-up [animation-delay:1400ms]">
                Start any time. New guides and projects drop regularly.
              </p>
            </div>
            <div className="relative animate-fade-in-up [animation-delay:600ms]">
              <div className="aspect-[4/3] w-full rounded-xl border bg-gradient-to-tr from-violet-600/10 via-fuchsia-600/10 to-sky-500/10 p-1 hover:scale-105 transition-all duration-300 group">
                <div className="h-full w-full overflow-hidden rounded-lg bg-black">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/zJSY8tbf_ys?autoplay=1&mute=1&loop=1&playlist=zJSY8tbf_ys&controls=1&showinfo=0&rel=0&modestbranding=1"
                    title="Developer coding on laptop - Programming workflow"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Features */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-card p-6 hover:shadow-xl hover:shadow-violet-500/10 hover:scale-105 hover:-translate-y-1 transition-all duration-300 group">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-600 text-background group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"><Code2 size={16} /></div>
              <div className="font-medium group-hover:text-violet-600 transition-colors duration-300">Project-first curriculum</div>
              <p className="text-sm text-muted-foreground">Build a portfolio with weekly real-world projects and code reviews.</p>
            </div>
            <div className="rounded-lg border bg-card p-6 hover:shadow-xl hover:shadow-fuchsia-500/10 hover:scale-105 hover:-translate-y-1 transition-all duration-300 group">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-600 text-background group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"><Sparkles size={16} /></div>
              <div className="font-medium group-hover:text-fuchsia-600 transition-colors duration-300">Mentor support</div>
              <p className="text-sm text-muted-foreground">Get 1:1 guidance, pair programming, and career coaching.</p>
            </div>
            <div className="rounded-lg border bg-card p-6 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-105 hover:-translate-y-1 transition-all duration-300 group">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-600 text-background group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"><Users size={16} /></div>
              <div className="font-medium group-hover:text-cyan-600 transition-colors duration-300">Community</div>
              <p className="text-sm text-muted-foreground">Join a supportive PH tech community for accountability and gigs.</p>
            </div>
            <div className="rounded-lg border bg-card p-6 hover:shadow-xl hover:shadow-purple-500/10 hover:scale-105 hover:-translate-y-1 transition-all duration-300 group">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-600 text-background group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"><Clock4 size={16} /></div>
              <div className="font-medium group-hover:text-purple-600 transition-colors duration-300">Flexible schedule</div>
              <p className="text-sm text-muted-foreground">Built for busy pros—follow flexible, async-friendly modules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Programs</h2>
              <p className="text-sm text-muted-foreground">Choose a path and start building.</p>
            </div>
            <Link href="/courses" className="text-sm text-muted-foreground hover:text-foreground">
              View all →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
      <Link href="/courses/web-dev" className="group rounded-lg border hover:bg-accent overflow-hidden">
              <div className="aspect-[16/9] w-full border-b bg-secondary/40">
        <Image src="/images/programs/web-dev.svg" alt="Web Development" width={1200} height={675} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="font-medium group-hover:underline">Full-Stack Web Dev</div>
                <p className="text-sm text-muted-foreground">Next.js, TypeScript, Tailwind, APIs, and deployment. Build 4 portfolio apps.</p>
              </div>
            </Link>
      <Link href="/courses/ai-engineering" className="group rounded-lg border hover:bg-accent overflow-hidden">
              <div className="aspect-[16/9] w-full border-b bg-secondary/40">
        <Image src="/images/programs/ai-eng.svg" alt="AI Engineering" width={1200} height={675} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="font-medium group-hover:underline">AI Engineering</div>
                <p className="text-sm text-muted-foreground">RAG, LLM apps, vector databases, agents, and production MLOps basics.</p>
              </div>
            </Link>
      <Link href="/courses/data" className="group rounded-lg border hover:bg-accent overflow-hidden">
              <div className="aspect-[16/9] w-full border-b bg-secondary/40">
        <Image src="/images/programs/data-analytics.svg" alt="Data & Analytics" width={1200} height={675} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="font-medium group-hover:underline">Data & Analytics</div>
                <p className="text-sm text-muted-foreground">Python, SQL, dbt, BI dashboards, and analytics engineering foundations.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
  {/* CTA */}
  <section className="border-t">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="rounded-xl border bg-gradient-to-br from-violet-600/10 via-fuchsia-600/10 to-sky-500/10 p-8">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-xl font-semibold">Level up with momentum-based learning.</h3>
                <p className="text-sm text-muted-foreground">Jump into guided builds and learn the essentials as you go—no lengthy theory first.</p>
              </div>
              <div className="flex md:justify-end gap-3">
        <Link href="/projects" className="inline-flex items-center rounded-md bg-foreground px-4 py-2.5 text-background text-sm font-medium hover:opacity-90">Start Building</Link>
        <Link href="/projects" className="inline-flex items-center rounded-md border px-4 py-2.5 text-sm font-medium hover:bg-accent">See Projects</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
