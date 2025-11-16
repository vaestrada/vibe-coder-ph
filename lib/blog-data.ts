export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime?: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-engineer-survival-guide-supabase-mcp-vibe-coding",
    title: "The AI Engineer's Survival Guide: Prototyping Fast with Supabase MCP and Vibe Coding",
    excerpt: "Two months ago, I couldn't build a database. This week, I shipped the entire Projects page for vibecoders.ph—complete with video storage and full backend. Learn how Supabase MCP and vibe coding transformed me from an AI engineer who knew models into a full-stack builder who ships production features in hours.",
    content: `
      <!-- Hero Section with Modern Layout -->
      <div class="relative mb-12">
        <!-- Gradient Background -->
        <div class="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-fuchsia-500/5 to-blue-500/5 rounded-3xl -z-10"></div>
        
        <!-- Hero Content -->
        <div class="py-8 px-6 md:px-8">
          <!-- Lead Paragraph - Strong Hook -->
          <p class="text-xl md:text-2xl leading-relaxed mb-8 text-foreground font-medium">
            Two months ago, I couldn't build a database from scratch. This week, I shipped the entire <a href="/projects" class="text-violet-600 dark:text-violet-400 hover:underline font-semibold">Projects page</a> for <a href="https://www.vibecoders.ph/" target="_blank" rel="noopener noreferrer" class="text-violet-600 dark:text-violet-400 hover:underline font-semibold">vibecoders.ph</a>—complete with video storage, database backend, and live deployment.
          </p>

          <!-- Key Stats Row -->
          <div class="grid grid-cols-3 gap-4 md:gap-6 mb-8 max-w-3xl">
            <div class="text-center p-4 bg-background/60 backdrop-blur rounded-xl border">
              <div class="text-3xl md:text-4xl font-bold text-violet-600 dark:text-violet-400 mb-1">1</div>
              <div class="text-xs md:text-sm text-muted-foreground">Major Feature</div>
            </div>
            <div class="text-center p-4 bg-background/60 backdrop-blur rounded-xl border">
              <div class="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">4</div>
              <div class="text-xs md:text-sm text-muted-foreground">Hours Total</div>
            </div>
            <div class="text-center p-4 bg-background/60 backdrop-blur rounded-xl border">
              <div class="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-1">3</div>
              <div class="text-xs md:text-sm text-muted-foreground">Projects Showcased</div>
            </div>
          </div>

          <!-- Problem Statement -->
          <div class="border-l-4 border-violet-500 pl-6 py-4 bg-violet-500/5 rounded-r-xl mb-6">
            <p class="text-base md:text-lg leading-relaxed">
              <span class="font-semibold text-foreground">The Challenge:</span> As an AI/ML engineer, I could integrate LLMs like <a href="https://platform.openai.com/" target="_blank" rel="noopener noreferrer" class="text-violet-600 dark:text-violet-400 hover:underline font-medium">OpenAI</a> and <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" class="text-violet-600 dark:text-violet-400 hover:underline font-medium">Claude</a>. But when our community needed a <strong>full Projects page with video uploads and project management</strong>—I was stuck on the sidelines. I could <em>use</em> AI, but I couldn't <em>build</em> with it.
            </p>
          </div>

          <!-- Solution -->
          <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20 p-6">
            <p class="text-base md:text-lg font-semibold mb-4 text-green-700 dark:text-green-400">The Solution:</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <div>
                  <p class="font-semibold text-sm md:text-base mb-1"><a href="https://supabase.com/docs/guides/getting-started/mcp" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">Supabase MCP</a></p>
                  <p class="text-xs md:text-sm text-muted-foreground">Control your database by just describing what you want</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <div>
                  <p class="font-semibold text-sm md:text-base mb-1">Vibe Coding</p>
                  <p class="text-xs md:text-sm text-muted-foreground">Focus on what you're building, not how to code it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- What is Vibe Coding - Redesigned Info Box -->
      <div class="my-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl border-2 border-blue-500/20">
        <div class="flex items-start gap-4 mb-4">
          <div class="p-3 bg-blue-500/10 rounded-xl">
            <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold mb-2 text-blue-900 dark:text-blue-300">What is "Vibe Coding"?</h3>
            <p class="leading-relaxed text-foreground mb-4">
              Think of it like <strong>talking to AI to build your app</strong>. Instead of typing out every single line of code yourself, you just describe what you want in plain English—"create a database table for users" or "add a video upload feature"—and AI writes the code for you. You focus on <em>what</em> you want to build, AI handles <em>how</em> to build it.
            </p>
            <div class="flex flex-wrap gap-2 mb-3">
              <span class="text-xs font-medium">Works with:</span>
              <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer" class="px-2 py-1 bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded text-xs hover:bg-blue-500/20 transition-colors">GitHub Copilot</a>
              <a href="https://www.cursor.com" target="_blank" rel="noopener noreferrer" class="px-2 py-1 bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded text-xs hover:bg-blue-500/20 transition-colors">Cursor</a>
              <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" class="px-2 py-1 bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded text-xs hover:bg-blue-500/20 transition-colors">Claude</a>
            </div>
            <a href="https://dzone.com/articles/vibe-coding-conversational-software-development" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
              Learn more about vibe coding 
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Is This Guide For You? - Redesigned with Better Visual Hierarchy -->
      <div class="my-12 p-6 md:p-8 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-950/20 dark:to-fuchsia-950/20 rounded-2xl border-2 border-violet-500/20">
        <div class="text-center mb-6">
          <div class="inline-flex items-center justify-center w-12 h-12 bg-violet-500/10 rounded-2xl mb-3">
            <svg class="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold mb-2 text-foreground">Is This Guide For You?</h2>
          <p class="text-sm text-muted-foreground max-w-2xl mx-auto">Check if this guide matches your current challenges</p>
        </div>

        <div class="grid md:grid-cols-2 gap-3 max-w-4xl mx-auto mb-4">
          <div class="flex items-start gap-2 p-3 bg-background/60 backdrop-blur rounded-xl border border-violet-500/20">
            <div class="w-5 h-5 rounded-full bg-violet-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span class="text-sm leading-relaxed">You're an <strong>AI/ML engineer</strong> who knows models but struggles to ship features</span>
          </div>
          
          <div class="flex items-start gap-2 p-3 bg-background/60 backdrop-blur rounded-xl border border-violet-500/20">
            <div class="w-5 h-5 rounded-full bg-violet-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span class="text-sm leading-relaxed">You can write queries but have <strong>never built a database from scratch</strong></span>
          </div>
          
          <div class="flex items-start gap-2 p-3 bg-background/60 backdrop-blur rounded-xl border border-violet-500/20">
            <div class="w-5 h-5 rounded-full bg-violet-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span class="text-sm leading-relaxed">Stakeholders ask <strong>"Can we see a demo?"</strong> and you don't know where to start</span>
          </div>
          
          <div class="flex items-start gap-2 p-3 bg-background/60 backdrop-blur rounded-xl border border-violet-500/20">
            <div class="w-5 h-5 rounded-full bg-violet-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span class="text-sm leading-relaxed">You want to <strong>prototype in hours, not weeks</strong></span>
          </div>
        </div>

        <div class="p-3 bg-violet-500/10 rounded-xl border border-violet-500/20 text-center">
          <p class="text-xs md:text-sm text-foreground font-medium flex items-center justify-center gap-2">
            <svg class="w-4 h-4 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            <span>By the end: go from <span class="font-bold">idea to deployed prototype in a single afternoon</span></span>
          </p>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- The Changing Role -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-6">Why AI Engineers Must Go Full-Stack</h2>
        
        <p class="mb-6 leading-relaxed text-lg">
          Here's the reality: the AI engineering role has shifted. It's no longer just about training models—it's about <strong>shipping products</strong>. If you can't build the full stack, you're getting left behind.
        </p>

        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="p-5 bg-muted/30 border rounded-lg">
            <h3 class="font-bold text-lg mb-3 text-red-600 dark:text-red-400 flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              The Old Way
            </h3>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li>• Build models from scratch</li>
              <li>• Train on custom datasets</li>
              <li>• Focus on accuracy metrics</li>
              <li>• Limited deployment scope</li>
              <li>• Experimental mindset</li>
            </ul>
          </div>
          
          <div class="p-5 bg-green-50 dark:bg-green-950/20 border border-green-500/30 rounded-lg">
            <h3 class="font-bold text-lg mb-3 text-green-600 dark:text-green-400 flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              The New Reality
            </h3>
            <ul class="space-y-2 text-sm">
              <li>• Integrate existing LLMs</li>
              <li>• Build full-stack applications</li>
              <li>• Focus on user value & speed</li>
              <li>• Production-ready from day one</li>
              <li>• Product-driven mindset</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-950/20 dark:to-fuchsia-950/20 rounded-xl border border-violet-500/20 p-4 md:p-6 mb-6">
          <p class="mb-3 font-semibold text-base md:text-lg">Today's expectations are clear:</p>
          <ul class="space-y-2">
            <li class="flex items-start gap-2 text-sm md:text-base">
              <svg class="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span><strong>Prototype working features in hours</strong>, not months of experiments</span>
            </li>
            <li class="flex items-start gap-2 text-sm md:text-base">
              <svg class="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span><strong>Show stakeholders something live</strong>: a dashboard, an assistant, a real product</span>
            </li>
            <li class="flex items-start gap-2 text-sm md:text-base">
              <svg class="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span><strong>Own the full stack</strong>: frontend, backend, database, deployment</span>
            </li>
            <li class="flex items-start gap-2 text-sm md:text-base">
              <svg class="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span><strong>Move fast and iterate</strong>—velocity is the new competitive advantage</span>
            </li>
          </ul>
        </div>

        <div class="principle-highlight bg-yellow-50 dark:bg-yellow-950/20 border-yellow-500/30 p-5 rounded-lg border">
          <h4 class="font-bold text-yellow-700 dark:text-yellow-400 mb-2 flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            The Bottom Line
          </h4>
          <p class="leading-relaxed text-foreground">
            If you can only build models but can't ship features, you're missing the biggest opportunity in AI engineering. The market doesn't want experiments—it wants <strong>working prototypes, delivered fast</strong>.
          </p>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Section 2 -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-6 text-foreground">Meet Supabase and Model Context Protocol (MCP)</h2>
        
        <p class="mb-6 leading-relaxed text-lg">
          So how do you actually build full-stack prototypes in hours instead of weeks? Two tools changed everything for me: <strong>Supabase</strong> and <strong>Model Context Protocol</strong>.
        </p>
        
        <h3 class="text-2xl font-semibold mb-4 text-foreground">What is Supabase?</h3>
        <p class="mb-4 leading-relaxed">
          <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline font-semibold">Supabase</a> is an open-source <strong>Backend-as-a-Service (BaaS)</strong> built on PostgreSQL. It provides:
        </p>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div class="p-3 bg-muted/50 border rounded-lg flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p class="font-semibold text-sm">Authentication</p>
          </div>
          <div class="p-3 bg-muted/50 border rounded-lg flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p class="font-semibold text-sm">Database</p>
          </div>
          <div class="p-3 bg-muted/50 border rounded-lg flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p class="font-semibold text-sm">Storage</p>
          </div>
          <div class="p-3 bg-muted/50 border rounded-lg flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p class="font-semibold text-sm">Realtime</p>
          </div>
          <div class="p-3 bg-muted/50 border rounded-lg flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p class="font-semibold text-sm">APIs</p>
          </div>
          <div class="p-3 bg-muted/50 border rounded-lg flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p class="font-semibold text-sm">Edge Functions</p>
          </div>
        </div>
        <p class="mb-6 leading-relaxed">
          It's built for <strong>rapid product development</strong>: set up a schema, manage data, store files/videos, expose endpoints. Perfect for prototyping fast.
        </p>

        <h3 class="text-2xl font-semibold mb-4 text-foreground">What is Model Context Protocol (MCP)?</h3>
        <p class="mb-4 leading-relaxed">
          The <strong>Model Context Protocol (MCP)</strong> is a standard that lets <strong>Large Language Models (LLMs)</strong> and <strong>AI agents</strong> interact directly with platforms like Supabase.
        </p>
        <div class="bg-muted/50 border rounded-xl p-6 mb-6">
          <p class="font-bold text-lg mb-3 text-foreground">Translation: Your AI assistant can talk to your database �</p>
          <p class="mb-3 leading-relaxed">Create tables, run queries, manage storage—all through conversation.</p>
          <p class="text-sm italic">Learn more: <a href="https://supabase.com/docs/guides/getting-started/mcp" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">Supabase MCP Documentation</a></p>
        </div>

        <p class="mb-2 text-sm text-muted-foreground">Example prompt:</p>
        <div class="bg-slate-900 text-slate-50 rounded-lg p-4 mb-3 relative group">
          <p class="font-mono text-sm leading-relaxed text-green-400">"Use Supabase MCP to create table Projects with fields title, description, video_url, tags."</p>
          <button class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 hover:bg-slate-600 text-slate-200 p-2 rounded" onclick="navigator.clipboard.writeText('Use Supabase MCP to create table Projects with fields title, description, video_url, tags.')" title="Copy to clipboard"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></button>
        </div>
        <p class="mb-6 text-sm text-muted-foreground flex items-center gap-2">
          <svg class="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          <span>Behind the scenes, Supabase MCP generates the migration, updates your database, links your tables.</span>
        </p>

        <h3 class="text-2xl font-semibold mb-4 text-foreground">How MCP Accelerates Development</h3>
        <ul class="space-y-3 mb-6">
          <li class="flex items-start gap-3">
            <span class="text-foreground text-xl">→</span>
            <p><strong>No manual migrations:</strong> Describe what you need, and your AI builds the schema</p>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-foreground text-xl">→</span>
            <p><strong>Integrated workflows:</strong> Upload videos, create tables, update content—all through prompts</p>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-foreground text-xl">→</span>
            <p><strong>Removes friction:</strong> Skip days of backend setup and ship working features today</p>
          </li>
        </ul>

        <div class="principle-highlight bg-red-50 dark:bg-red-950/20 border-red-500/30 p-5 rounded-lg border">
          <h4 class="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            Security & Risk Considerations
          </h4>
          <p class="mb-3 leading-relaxed">Because you're giving an AI agent access to your database backend, you need to think about:</p>
          <ul class="space-y-2">
            <li class="flex items-start gap-2"><span class="text-red-500">•</span> <strong>Permissions:</strong> Who can access Supabase MCP, what rights they have (<a href="https://supabase.com/docs/guides/auth/row-level-security" target="_blank" rel="noopener noreferrer" class="text-red-600 dark:text-red-400 hover:underline">RLS policies</a>)</li>
            <li class="flex items-start gap-2"><span class="text-red-500">•</span> <strong>Maintainability:</strong> AI-generated tables may not be built for scale</li>
            <li class="flex items-start gap-2"><span class="text-red-500">•</span> <strong>Debugging:</strong> AI-generated code may introduce subtle bugs — you still need oversight</li>
          </ul>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Section 3 - Condensed Personal Journey -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-6 text-foreground">How I Made the Shift</h2>
        
        <p class="mb-4 leading-relaxed text-lg">
          After discovering <a href="https://supabase.com/docs/guides/getting-started/mcp" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">Supabase's MCP documentation</a>, I realized I could delegate database setup and schema design to AI agents. Combined with vibe coding through <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">GitHub Copilot</a> and <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">Cursor</a>, my entire workflow transformed.
        </p>

        <p class="mb-2 text-sm text-muted-foreground">Example prompt:</p>
        <div class="bg-slate-900 text-slate-50 rounded-lg p-4 mb-3 relative group">
          <p class="font-mono text-sm leading-relaxed text-green-400">
            "Can you add another project in the Featured Projects section using the details in project001.md and upload this screen-recorded video to the database using Supabase MCP?"
          </p>
          <button class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 hover:bg-slate-600 text-slate-200 p-2 rounded" onclick="navigator.clipboard.writeText('Can you add another project in the Featured Projects section using the details in project001.md and upload this screen-recorded video to the database using Supabase MCP?')" title="Copy to clipboard"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></button>
        </div>
        <p class="mb-6 text-violet-600 dark:text-violet-400 font-semibold">The agent handles table updates, video uploads, and metadata automatically. I focus on the prompt and the flow—that's vibe coding.</p>

        <h3 class="text-2xl font-semibold mb-4 text-foreground">The Results</h3>
        <p class="mb-4 leading-relaxed text-lg font-medium text-violet-600 dark:text-violet-400">
          In just 4 hours, I built the <a href="/projects" class="text-violet-600 dark:text-violet-400 hover:underline font-bold">Featured Projects section</a> for <a href="https://www.vibecoders.ph/" target="_blank" rel="noopener noreferrer" class="text-violet-600 dark:text-violet-400 hover:underline font-bold">vibecoders.ph</a>—complete with database backend, video upload capability, and live deployment.
        </p>
        
        <!-- Projects Page Screenshot -->
        <div class="my-8 rounded-xl overflow-hidden border-2 border-violet-500/30 shadow-2xl">
          <img src="/images/Projects-Page.png" alt="Projects page showing Featured Projects and Community Projects sections" class="w-full h-auto" />
          <div class="bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-950/30 dark:to-fuchsia-950/30 px-6 py-3 border-t border-violet-500/20">
            <p class="text-sm text-center text-muted-foreground">
              <strong class="text-violet-700 dark:text-violet-300">Live Projects Page</strong> — Built in 4 hours using Supabase MCP and vibe coding
            </p>
          </div>
        </div>
        
        <div class="grid gap-4 mb-6">
          <div class="p-6 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-950/20 dark:to-fuchsia-950/20 border-2 border-violet-500/30 rounded-xl shadow-sm">
            <p class="flex items-start gap-3">
              <svg class="w-6 h-6 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
              <span class="text-base"><strong class="text-violet-700 dark:text-violet-300">The Main Achievement:</strong> Built our community's <strong><a href="/projects" class="text-violet-600 dark:text-violet-400 hover:underline">Projects showcase page</a></strong> with video storage, project descriptions, tags, and categories — fully deployed on the same website hosting this blog.</span>
            </p>
          </div>
          <div class="p-4 bg-green-50 dark:bg-green-950/20 border border-green-500/30 rounded-lg">
            <p class="flex items-start gap-2">
              <svg class="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span><strong>Video Upload System:</strong> Integrated <a href="https://supabase.com/storage" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">Supabase Storage</a> for seamless video handling with automatic optimization</span>
            </p>
          </div>
          <div class="p-4 bg-green-50 dark:bg-green-950/20 border border-green-500/30 rounded-lg">
            <p class="flex items-start gap-2">
              <svg class="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span><strong>Database Backend:</strong> PostgreSQL tables with proper relations for projects, tags, categories, and featured content</span>
            </p>
          </div>
          <div class="p-4 bg-green-50 dark:bg-green-950/20 border border-green-500/30 rounded-lg">
            <p class="flex items-start gap-2">
              <svg class="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span><strong>Admin Panel:</strong> Complete project management with video previews, status controls, and featured project toggles</span>
            </p>
          </div>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Section 4 -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-6 text-foreground">How to Prototype Fast with Supabase MCP and Vibe Coding</h2>
        
        <h3 class="text-2xl font-semibold mb-4 text-foreground">Step-by-Step Workflow</h3>
        
        <div class="space-y-6 mb-8">
          <div class="border-l-4 border-primary pl-6 py-2">
            <h4 class="font-bold text-lg mb-2">1. Define the Idea and Required Data Model</h4>
            <p class="text-muted-foreground">Start with what you want to build: e.g., "<a href="/projects" class="text-foreground hover:underline">Featured Projects page</a> with video uploads, title, description, tags, category."</p>
          </div>

          <div class="border-l-4 border-primary pl-6 py-2">
            <h4 class="font-bold text-lg mb-2">2. Use Your IDE + GitHub Copilot / LLM to Scaffold Front/Back Code</h4>
            <p class="text-muted-foreground text-sm mb-2">Example prompt:</p>
            <div class="bg-slate-900 rounded-lg p-4 mb-2 relative group">
              <code class="block text-green-400 text-sm font-mono">"Generate API route for getting featured projects from Supabase, using Next.js."</code>
              <button class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 hover:bg-slate-600 text-slate-200 p-2 rounded" onclick="navigator.clipboard.writeText('Generate API route for getting featured projects from Supabase, using Next.js.')" title="Copy to clipboard"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></button>
            </div>
          </div>

          <div class="border-l-4 border-primary pl-6 py-2">
            <h4 class="font-bold text-lg mb-2">3. Use Supabase MCP to Create Tables/Migrations Directly from Prompts</h4>
            <p class="text-muted-foreground text-sm mb-2">Example prompt:</p>
            <div class="bg-slate-900 rounded-lg p-4 mb-2 relative group">
              <code class="block text-green-400 text-sm font-mono">"Create a FeaturedProjects table with fields for title, description, video URL, and tags."</code>
              <button class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 hover:bg-slate-600 text-slate-200 p-2 rounded" onclick="navigator.clipboard.writeText('Create a FeaturedProjects table with fields for title, description, video URL, and tags.')" title="Copy to clipboard"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></button>
            </div>
            <p class="text-green-600 dark:text-green-400 font-semibold text-sm flex items-center gap-2">
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Your AI agent handles it — you're done.</span>
            </p>
          </div>

          <div class="border-l-4 border-primary pl-6 py-2">
            <h4 class="font-bold text-lg mb-2">4. Connect Storage (Videos/Files) + Metadata Tables in Supabase</h4>
            <p class="text-muted-foreground text-sm mb-2">Example prompt:</p>
            <div class="bg-slate-900 rounded-lg p-4 mb-2 relative group">
              <code class="block text-green-400 text-sm font-mono">"Use Supabase MCP to upload this video to project-media storage and link it to my FeaturedProjects table."</code>
              <button class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 hover:bg-slate-600 text-slate-200 p-2 rounded" onclick="navigator.clipboard.writeText('Use Supabase MCP to upload this video to project-media storage and link it to my FeaturedProjects table.')" title="Copy to clipboard"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></button>
            </div>
            <p class="text-muted-foreground text-sm">Your AI agent uploads the file, stores the URL, and updates the metadata automatically.</p>
          </div>

          <div class="border-l-4 border-primary pl-6 py-2">
            <h4 class="font-bold text-lg mb-2">5. Deploy Quickly: Connect to Your Website and Show Prototype</h4>
            <p class="text-muted-foreground">Deploy via <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">Vercel</a> or <a href="https://netlify.com" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">Netlify</a>, connect to site, show stakeholders. Your MVP is live.</p>
          </div>
        </div>

        <h3 class="text-2xl font-semibold mb-4 text-foreground">Best Practices & Tips</h3>
        <div class="grid gap-4">
          <div class="p-4 bg-muted/50 border rounded-lg">
            <p class="flex items-start gap-2">
              <span class="text-foreground"><svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></span>
              <span><strong>Start with simple scope</strong> — you can improve later</span>
            </p>
          </div>
          <div class="p-4 bg-muted/50 border rounded-lg">
            <p class="flex items-start gap-2">
              <span class="text-foreground"><svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></span>
              <span><strong>Keep your schema clean</strong> — naming conventions, types, indexes matter</span>
            </p>
          </div>
          <div class="p-4 bg-muted/50 border rounded-lg">
            <p class="flex items-start gap-2">
              <span class="text-foreground"><svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></span>
              <span><strong>Use branching and version control</strong> for your database changes too</span>
            </p>
          </div>
          <div class="p-4 bg-muted/50 border rounded-lg">
            <p class="flex items-start gap-2">
              <span class="text-foreground"><svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></span>
              <span><strong>Use prompt templates</strong> — reuse prompts for MCP and code scaffolding</span>
            </p>
          </div>
          <div class="p-4 bg-muted/50 border rounded-lg">
            <p class="flex items-start gap-2">
              <span class="text-foreground"><svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></span>
              <span><strong>Don't treat the database as an afterthought</strong> — You now wear the database engineer hat</span>
            </p>
          </div>
          <div class="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-500/30 rounded-lg">
            <p class="flex items-start gap-2">
              <svg class="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              <span>While "vibe coding" emphasizes speed, keep <strong>maintainability</strong> in mind: add tests, code review, ensure you understand "what's under the hood"</span>
            </p>
          </div>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Conclusion -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold mb-8 text-center">The Future is Full-Stack AI</h2>
        <p class="mb-10 leading-relaxed text-lg text-center max-w-3xl mx-auto">
          Tools like <a href="https://supabase.com/docs/guides/getting-started/mcp" target="_blank" rel="noopener noreferrer" class="text-green-600 dark:text-green-400 hover:underline font-semibold">Supabase MCP</a> and vibe coding are making it possible for a single developer to prototype complete AI-powered applications in hours, not months.
        </p>
        
        <!-- Key Takeaway Callout - Enhanced Design -->
        <div class="my-12 p-8 md:p-10 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/30 dark:via-emerald-950/20 dark:to-teal-950/20 rounded-3xl border-2 border-green-500/30 shadow-2xl shadow-green-500/20 relative overflow-hidden">
          <!-- Decorative background pattern -->
          <div class="absolute inset-0 opacity-5">
            <div class="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
          </div>
          
          <div class="relative">
            <div class="flex flex-col items-center text-center mb-6">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-2xl mb-6 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-green-600 dark:text-green-400">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              
              <h3 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-green-800 dark:text-green-200">
                Your first shipped prototype is worth more than a thousand tutorials watched.
              </h3>
              
              <p class="text-base md:text-lg text-green-700/80 dark:text-green-300/80 max-w-2xl">
                The only way to become an AI builder is to actually build something—no matter how small.
              </p>
            </div>
          </div>
        </div>
        
        <!-- Action Steps -->
        <div class="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
          <div class="p-6 bg-gradient-to-br from-background to-muted/30 rounded-xl border border-border hover:border-green-500/50 transition-all hover:shadow-lg">
            <div class="flex items-start gap-3 mb-3">
              <div class="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <span class="text-green-600 dark:text-green-400 font-bold">1</span>
              </div>
              <div>
                <p class="font-semibold text-foreground mb-1">Start Small</p>
                <p class="text-sm text-muted-foreground">Pick one feature. Don't try to build everything at once.</p>
              </div>
            </div>
          </div>
          
          <div class="p-6 bg-gradient-to-br from-background to-muted/30 rounded-xl border border-border hover:border-green-500/50 transition-all hover:shadow-lg">
            <div class="flex items-start gap-3 mb-3">
              <div class="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <span class="text-green-600 dark:text-green-400 font-bold">2</span>
              </div>
              <div>
                <p class="font-semibold text-foreground mb-1">Use Supabase MCP</p>
                <p class="text-sm text-muted-foreground">Let AI handle your database setup and queries.</p>
              </div>
            </div>
          </div>
          
          <div class="p-6 bg-gradient-to-br from-background to-muted/30 rounded-xl border border-border hover:border-green-500/50 transition-all hover:shadow-lg">
            <div class="flex items-start gap-3 mb-3">
              <div class="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <span class="text-green-600 dark:text-green-400 font-bold">3</span>
              </div>
              <div>
                <p class="font-semibold text-foreground mb-1">Deploy It</p>
                <p class="text-sm text-muted-foreground">Get it live. Perfection comes from iteration, not planning.</p>
              </div>
            </div>
          </div>
          
          <div class="p-6 bg-gradient-to-br from-background to-muted/30 rounded-xl border border-border hover:border-green-500/50 transition-all hover:shadow-lg">
            <div class="flex items-start gap-3 mb-3">
              <div class="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <span class="text-green-600 dark:text-green-400 font-bold">4</span>
              </div>
              <div>
                <p class="font-semibold text-foreground mb-1">Show Someone</p>
                <p class="text-sm text-muted-foreground">Share it. Get feedback. That's how you grow.</p>
              </div>
            </div>
          </div>
        </div>
        
        <p class="text-lg md:text-xl leading-relaxed text-center text-muted-foreground max-w-3xl mx-auto">
          That's how you stop being the engineer who <em class="text-foreground font-semibold">studies</em> AI and become the one who <em class="text-green-600 dark:text-green-400 font-semibold">ships</em> with it.
        </p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- FAQs -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div class="space-y-6">
          <div class="p-6 bg-card border rounded-xl hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-bold mb-3 text-foreground">Q1: How do I get started with Supabase MCP if I've never used Supabase before?</h3>
            <p class="leading-relaxed text-muted-foreground">
              Start with a <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">free Supabase account</a>, create a project, then follow the <a href="https://supabase.com/docs/guides/getting-started/mcp" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">MCP setup guide</a>. You'll configure it in your AI assistant (Copilot, Cursor, Claude) by providing your Supabase project credentials. From there, you can use natural language prompts to create tables, manage data, and handle storage—no SQL required.
            </p>
          </div>

          <div class="p-6 bg-card border rounded-xl hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-bold mb-3 text-foreground">Q2: Does Supabase MCP replace traditional database development?</h3>
            <p class="leading-relaxed text-muted-foreground">
              Not entirely. MCP accelerates it by letting an agent/machine create and manage schema/data via prompts, but you still need to understand schema design, query efficiency, and production-readiness.
            </p>
          </div>

          <div class="p-6 bg-card border rounded-xl hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-bold mb-3 text-foreground">Q3: Is using Supabase MCP safe for production?</h3>
            <p class="leading-relaxed text-muted-foreground">
              You need to manage access/permissions carefully. The <a href="https://supabase.com/docs/guides/auth/row-level-security" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">security documentation</a> warns against exposing Supabase MCP directly to the internet without protection. Always implement proper authentication and Row-Level Security (RLS) policies.
            </p>
          </div>

          <div class="p-6 bg-card border rounded-xl hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-bold mb-3 text-foreground">Q4: Do I still need to know SQL or database design?</h3>
            <p class="leading-relaxed text-muted-foreground">
              <strong>Absolutely.</strong> Even though tools help, understanding database fundamentals (normalization, indexes, migrations, data modeling) is what keeps your system robust. Learn more: <a href="https://www.postgresql.org/docs/current/tutorial.html" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">PostgreSQL Tutorial</a>
            </p>
          </div>

          <div class="p-6 bg-card border rounded-xl hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-bold mb-3 text-foreground">Q5: What LLMs or tools do you recommend for vibe coding?</h3>
            <div class="leading-relaxed text-muted-foreground">
              <p class="mb-3">Use:</p>
              <ul class="space-y-2 list-none ml-4">
                <li class="flex items-start gap-2"><span class="text-foreground">→</span> <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline"><strong>GitHub Copilot</strong></a> for code generation</li>
                <li class="flex items-start gap-2"><span class="text-foreground">→</span> <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline"><strong>ChatGPT</strong></a> for general tasks</li>
                <li class="flex items-start gap-2"><span class="text-foreground">→</span> <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline"><strong>Claude</strong></a> for specific workflows</li>
                <li class="flex items-start gap-2"><span class="text-foreground">→</span> <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline"><strong>Gemini</strong></a> for drafts/slides/images</li>
                <li class="flex items-start gap-2"><span class="text-foreground">→</span> <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline"><strong>Cursor</strong></a> for AI-powered IDE</li>
              </ul>
              <p class="mt-3">Integrate <strong><a href="https://supabase.com/docs/guides/getting-started/mcp" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">Supabase MCP</a></strong> directly in your IDE—no dashboard needed. Your AI agent handles database operations through natural conversation.</p>
            </div>
          </div>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Further Reading & Resources -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-8 text-center">Further Reading & Resources</h2>
        
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="p-6 bg-card border rounded-xl hover:shadow-lg transition-shadow">
            <h3 class="text-lg font-bold mb-3 flex items-center gap-2">
              <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path></svg>
              Official Documentation
            </h3>
            <ul class="space-y-2 text-sm">
              <li><a href="https://supabase.com/docs/guides/getting-started/mcp" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                Supabase MCP Official Guide
              </a></li>
              <li><a href="https://supabase.com/docs/guides/auth/row-level-security" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                Row-Level Security (RLS) Documentation
              </a></li>
              <li><a href="https://github.com/supabase-community/supabase-mcp" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                Supabase MCP GitHub Repository
              </a></li>
              <li><a href="https://www.postgresql.org/docs/current/tutorial.html" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                PostgreSQL Tutorial
              </a></li>
            </ul>
          </div>

          <div class="p-6 bg-card border rounded-xl hover:shadow-lg transition-shadow">
            <h3 class="text-lg font-bold mb-3 flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
              Community Articles
            </h3>
            <ul class="space-y-2 text-sm">
              <li><a href="https://dzone.com/articles/vibe-coding-conversational-software-development" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                Vibe Coding: Conversational Development (DZone)
              </a></li>
              <li><a href="https://medium.com/@vignarajj/exploring-supabases-advanced-capabilities-model-context-protocol-cli-and-edge-functions-37a1ce4771d4" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                Exploring Supabase's Advanced Capabilities (Medium)
              </a></li>
              <li><a href="https://dzone.com/articles/the-evolving-crafts-of-software-engineering-with-a" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                How Software Engineering is Evolving With AI
              </a></li>
            </ul>
          </div>
        </div>

        <div class="p-6 bg-blue-50 dark:bg-blue-950/20 border border-blue-500/20 rounded-xl">
          <h3 class="text-lg font-bold mb-3 flex items-center gap-2">
            <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
            Essential Tools & Platforms
          </h3>
          <div class="grid md:grid-cols-3 gap-4">
            <div>
              <p class="font-semibold mb-2 text-sm">AI Tools</p>
              <ul class="space-y-1 text-sm">
                <li><a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">ChatGPT</a></li>
                <li><a href="https://claude.ai" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Claude AI</a></li>
                <li><a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Google Gemini</a></li>
              </ul>
            </div>
            <div>
              <p class="font-semibold mb-2 text-sm">Development Tools</p>
              <ul class="space-y-1 text-sm">
                <li><a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">GitHub Copilot</a></li>
                <li><a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Cursor IDE</a></li>
                <li><a href="https://n8n.io" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">n8n Automation</a></li>
              </ul>
            </div>
            <div>
              <p class="font-semibold mb-2 text-sm">Deployment</p>
              <ul class="space-y-1 text-sm">
                <li><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Vercel</a></li>
                <li><a href="https://netlify.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Netlify</a></li>
                <li><a href="https://supabase.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Supabase</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- CTA -->
      <div class="mb-8 p-8 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-950/20 dark:to-fuchsia-950/20 rounded-2xl border border-violet-500/20">
        <h2 class="text-3xl font-bold mb-4 text-center text-foreground">Ready to Build Your First Prototype?</h2>
        <p class="text-center text-lg mb-6 text-muted-foreground max-w-2xl mx-auto">
          The tools are here. The documentation is clear. The only thing missing is your first project. Pick an idea, open the <a href="https://supabase.com/docs/guides/getting-started/mcp" target="_blank" rel="noopener noreferrer" class="text-violet-600 dark:text-violet-400 hover:underline font-semibold">Supabase MCP docs</a>, and start building.
        </p>
        <div class="flex justify-center gap-4 flex-wrap">
          <a href="https://supabase.com/docs/guides/getting-started/mcp" target="_blank" rel="noopener noreferrer" class="px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Start with Supabase MCP →
          </a>
          <a href="/projects" class="px-6 py-3 bg-muted border rounded-lg font-semibold hover:bg-muted/80 transition-colors">
            See Example Projects
          </a>
        </div>
        <p class="text-center mt-6 text-sm text-muted-foreground italic">Join the community building the future of AI engineering</p>
      </div>
    `,
    author: "Viron Gil Estrada",
    publishedAt: "2025-11-16",
    readTime: "8 min read",
    category: "AI Engineering",
    tags: ["AI", "Supabase", "MCP", "Vibe Coding", "Full-Stack", "Prototyping", "Database", "LLMs", "Productivity"],
    featured: true,
  },
  {
    slug: "settling-into-my-next-job-as-ai-developer",
    title: "Settling In To My Next Job as an AI Developer",
    excerpt: "A reflection on finding rhythm and purpose in my second AI role — from designing chatbots to rediscovering what makes collaboration meaningful.",
    content: `
      <!-- Intro Section -->
      <div class="mb-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border">
        <h2 class="text-2xl font-bold mb-4 text-primary">The Transition: A New Chapter, Familiar Mission</h2>
        <p class="mb-4 leading-relaxed">
          Starting a new job as an AI Developer feels a lot like starting a new project: full of potential, slightly uncertain, and quietly thrilling.
        </p>
        <p class="mb-4 leading-relaxed">
          After my time at Diliman Labs and countless builds through Vibe Coders PH, I've learned that no two roles are ever the same, even if they share the same title. Each position stretches a different muscle, teaches a new rhythm, and reminds you why you started building in the first place.
        </p>
        <div class="principle-highlight">
          <p>Settling into this new company has been just that — a mix of rediscovery and refinement.</p>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- The Setup -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 text-foreground">The Setup: Exploring New AI Tools and Developer Platforms</h2>
        <p class="mb-4 leading-relaxed">
          One of the first things that stood out in my new role was the access to cutting-edge AI tools and developer platforms.
        </p>
        <p class="mb-4 leading-relaxed">
          From <a href="https://www.cursor.com" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline"><strong>Cursor</strong></a> and <strong>Codex</strong> to <a href="https://n8n.io" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline"><strong>n8n</strong></a> and <a href="https://elevenlabs.io" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline"><strong>ElevenLabs</strong></a>, the playground just got bigger. Each tool feels like an extension of thought, helping me automate, design, and experiment faster than ever.
        </p>
        <div class="principle-highlight">
          <p>It's the kind of environment that lets ideas flow naturally. You don't just code anymore; you compose.</p>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- The Task -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 text-foreground">The Task: Designing the Company Chatbot</h2>
        <p class="mb-4 leading-relaxed">
          My first major assignment was to design the company's AI chatbot. It's a familiar challenge, but one that never loses its excitement.
        </p>
        <p class="mb-4 leading-relaxed">
          Thankfully, this wasn't new territory. At Diliman Labs, we built systems that helped clients communicate better through automation. At VibeCoders PH, I worked on open-source chatbot projects that explored user experience and conversational design.
        </p>
        <p class="mb-4 leading-relaxed">
          So when I was asked to build one here, it didn't feel like starting from scratch. It felt like continuing a conversation I've been having for years.
        </p>
        <div class="principle-highlight">
          <p>The exciting part isn't just about writing prompts or setting up APIs. It's about shaping how people interact with AI every day — designing something that's helpful, human, and dynamic.</p>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- The People -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 text-foreground">The People: Building Connections That Matter</h2>
        <p class="mb-4 leading-relaxed">
          Every new job comes with its own quiet challenge — connecting with new people.
        </p>
        <p class="mb-4 leading-relaxed">
          No matter how advanced your stack is, you can't automate human connection. Thankfully, this has been the easiest part of all.
        </p>
        <p class="mb-4 leading-relaxed">
          People here have been warm, collaborative, and genuinely curious about what I bring to the table. I've had conversations that start with code and end with shared stories and ideas.
        </p>
        <div class="principle-highlight">
          <p>It reminded me that workplace culture isn't built by policy or process alone. It's built through people who care about what they're building — and who they're building it with.</p>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- The Adjustment -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 text-foreground">The Adjustment: Learning to Flow, Not Force</h2>
        <p class="mb-4 leading-relaxed">
          Transitions are rarely seamless. There are always new workflows to learn, systems to adapt to, and teammates to understand.
        </p>
        <p class="mb-4 leading-relaxed">
          But I've realized that settling in isn't about proving yourself fast. It's about finding your rhythm and aligning your strengths with the team's flow.
        </p>
        <div class="principle-highlight">
          <p>Once you find that rhythm, things start to click: the tools make more sense, projects move smoother, and collaboration becomes second nature.</p>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- The Bigger Picture -->
      <div class="mb-8 p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-xl border">
        <h2 class="text-2xl font-bold mb-4 text-green-700 dark:text-green-400">The Bigger Picture: Growth Through Every Role</h2>
        <p class="mb-4 leading-relaxed">
          This experience reminded me of something I learned early in my career — every environment you join becomes part of your AI chain.
        </p>
        <p class="mb-4 leading-relaxed">
          Each tool, teammate, and project adds a new link that strengthens how you build, think, and lead.
        </p>
        <p class="mb-4 leading-relaxed">
          This new job isn't just a continuation of what I've done before; it's an evolution of it.
        </p>
        <div class="principle-highlight">
          <p>New stack. New people. Same curiosity driving everything forward.</p>
        </div>
        <p class="mb-4 leading-relaxed">
          And that's what makes this journey worth it.
        </p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Final Thoughts -->
      <div class="mb-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border">
        <h2 class="text-2xl font-bold mb-4">Final Thoughts: Rediscovering Purpose Through Practice</h2>
        <p class="mb-4 leading-relaxed">
          Settling into this new company has been more than just onboarding. It's been a rediscovery.
        </p>
        <p class="mb-4 leading-relaxed">
          Rediscovering how I build. How I collaborate. How I grow.
        </p>
        <p class="mb-4 leading-relaxed">
          If there's one thing I've learned so far, it's this:
        </p>
        <div class="principle-highlight">
          <p>You don't just adapt to a new environment — you let it shape the next version of you.</p>
        </div>
        <p class="mb-4 leading-relaxed">
          And as I keep building, learning, and connecting, I can already tell this version will be my favorite one yet.
        </p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- CTA -->
      <div class="mb-8 p-6 bg-gradient-to-r from-secondary/10 to-secondary/20 rounded-xl border">
        <h2 class="text-2xl font-bold mb-4">📝 Ready to Explore Your Own AI Journey?</h2>
        <ul class="space-y-3 list-none">
          <li class="flex items-start gap-3 p-4 bg-background/60 rounded-lg border">
            <span class="text-green-500 font-bold mt-0.5">→</span>
            Start with one new tool. See how it fits into your process.
          </li>
          <li class="flex items-start gap-3 p-4 bg-background/60 rounded-lg border">
            <span class="text-green-500 font-bold mt-0.5">→</span>
            Then connect it to the next.
          </li>
          <li class="flex items-start gap-3 p-4 bg-background/60 rounded-lg border">
            <span class="text-green-500 font-bold mt-0.5">→</span>
            Before long, you'll have a system that grows with you.
          </li>
        </ul>
      </div>
    `,
    author: "Joseph Miguel Guerrero",
    publishedAt: "2025-11-13",
    category: "AI Engineering",
    tags: ["AI", "Productivity", "Workflow", "Career", "Developer Experience", "Success Story"],
    featured: true,
  },
  {
    slug: "building-my-own-ai-stack",
    title: "How I Built My Own AI Stack (and Why It Changed How I Work)",
    excerpt: "AI tools are everywhere, but productivity doesn't come from using more tools. It comes from understanding how they fit together. Here's my journey from overwhelm to building a cohesive AI chain that actually works.",
    content: `
      <!-- Intro Section -->
      <div class="mb-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border">
        <h2 class="text-2xl font-bold mb-4 text-primary">The Overwhelm of Too Many AI Tools</h2>
        <p class="mb-4 leading-relaxed">
          AI tools are everywhere. Every week, a new one appears, promising to make you faster, smarter, or more creative.
        </p>
        <p class="mb-4 leading-relaxed">
          When I first started exploring them, I fell into the same trap most developers do. I tried everything. I signed up for every beta, joined every waitlist, and bookmarked every "Top 100 AI Tools" list I could find.
        </p>
        <p class="mb-4 leading-relaxed">
          It felt exciting at first. Then it got exhausting.
        </p>
        <p class="mb-4 leading-relaxed">
          At some point, I realized I wasn't learning faster. I was just juggling more apps.
        </p>
        <div class="principle-highlight">
          <p>So I stepped back and asked myself: Do I really need more tools, or do I just need the right ones working together?</p>
        </div>
        <p class="mb-4 leading-relaxed">
          That question changed how I approach AI forever.
        </p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- The Discovery -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 text-foreground">The Discovery: Building My Own Stack</h2>
        <p class="mb-4 leading-relaxed">
          It started as an experiment. I wanted to see what would happen if I stopped collecting tools and started connecting them instead.
        </p>
        <p class="mb-4 leading-relaxed">
          Each AI platform had its own strength. ChatGPT could explain complex ideas in plain English. Comet could verify them with live sources. Copilot could turn those ideas into code. Claude could review that code and refactor it intelligently.
        </p>
        <p class="mb-4 leading-relaxed">
          I didn't need to pick one. I needed them to work together.
        </p>
        <p class="mb-4 leading-relaxed">
          That's when I coined the term <strong>AI Chaining</strong> — the process of linking multiple AI tools so that each one contributes its unique strength to your workflow.
        </p>
        <div class="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl border mb-6">
          <p class="mb-4 leading-relaxed font-medium">
            AI Chaining isn't about automation or scripting. It's about designing a flow of thought:
          </p>
          <ul class="space-y-3 list-none">
            <li class="flex items-start gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
              <span class="text-primary font-bold mt-0.5">•</span>
              One AI generates, another validates.
            </li>
            <li class="flex items-start gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
              <span class="text-primary font-bold mt-0.5">•</span>
              One builds, another explains.
            </li>
            <li class="flex items-start gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
              <span class="text-primary font-bold mt-0.5">•</span>
              One creates, another refines.
            </li>
          </ul>
        </div>
        <p class="mb-4 leading-relaxed">
          When you chain AIs together, you stop using them like separate tools and start using them like teammates.
        </p>
        <p class="mb-4 leading-relaxed">
          Here's what my AI stack looks like today and how each piece fits into the chain.
        </p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Research -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 text-foreground">Research: Facts Meet Conversation</h2>
        <p class="mb-4 leading-relaxed">
          Every project starts with research.
        </p>
        <p class="mb-4 leading-relaxed">
          I use <strong>Comet by Perplexity</strong> when I need structured, verified answers. It's fast, factual, and always cites its sources — something every developer and researcher can appreciate.
        </p>
        <p class="mb-4 leading-relaxed">
          Once I have the data, I move to <strong>ChatGPT</strong> to make sense of it. ChatGPT helps me translate technical information into explanations, drafts, or documentation that other people can understand.
        </p>
        <div class="principle-highlight">
          <p>In my workflow, Comet is the fact-checker and ChatGPT is the storyteller. One gives me clarity, the other gives me voice.</p>
        </div>
        <p class="mb-4 leading-relaxed">
          That combination is the first link in my AI chain: truth and tone.
        </p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Coding -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 text-foreground">Coding: Copilot and Claude Code</h2>
        <p class="mb-4 leading-relaxed">
          Coding used to be where I hit decision fatigue the hardest. Do I trust autocomplete, or do I rewrite everything myself?
        </p>
        <p class="mb-4 leading-relaxed">
          Then I learned to split the workload.
        </p>
        <p class="mb-4 leading-relaxed">
          <strong>GitHub Copilot</strong> is my everyday companion in VS Code. It handles the small stuff like variable names, boilerplate, and repetitive syntax. It helps me stay in flow instead of getting stuck on structure.
        </p>
        <p class="mb-4 leading-relaxed">
          <strong>Claude Code</strong>, on the other hand, is my reviewer. It reads entire repositories, explains logic, and helps me reason through architecture decisions. When I'm deep in a project, I'll often ask Claude to summarize what a specific file or module does before I start editing it.
        </p>
        <div class="principle-highlight">
          <p>It's like having two co-developers: one focused on speed, the other on strategy. Together, they create a rhythm that feels natural.</p>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Deployment -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 text-foreground">Deployment: Vercel</h2>
        <p class="mb-4 leading-relaxed">
          Every idea deserves to go live, and <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline"><strong>Vercel</strong></a> is where mine do.
        </p>
        <p class="mb-4 leading-relaxed">
          It's fast, generous on its free tier, and built for modern frameworks. For me, it's not just about hosting — it's about iteration. I can push code, test it in production-like previews, and share it instantly with collaborators.
        </p>
        <p class="mb-4 leading-relaxed">
          That loop of build, preview, refine fits perfectly into my AI chain.
        </p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Database -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 text-foreground">Database: Supabase</h2>
        <p class="mb-4 leading-relaxed">
          For backend work, <strong>Supabase</strong> handles everything I need without slowing me down. It's open-source, reliable, and deeply integrated with modern stacks.
        </p>
        <p class="mb-4 leading-relaxed">
          It gives me Postgres power with Firebase simplicity. Whenever I build something new, Supabase quietly handles authentication, storage, and real-time data without requiring me to set up another backend.
        </p>
        <div class="principle-highlight">
          <p>In my AI chain, Supabase is the anchor — the solid foundation that holds all the moving parts together.</p>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Creative Tools -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 text-foreground">Creative and Productivity Tools: Exploring the Edges</h2>
        <p class="mb-4 leading-relaxed">
          I also experiment with tools that stretch beyond code. These don't directly affect my backend logic, but they improve how I communicate and visualize ideas.
        </p>
        <ul class="space-y-3 list-none mb-6">
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-primary font-bold mt-0.5">•</span>
            <strong>Visily</strong> helps me mock up app layouts quickly, even without deep design experience.
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-primary font-bold mt-0.5">•</span>
            <strong>Notion</strong> is my second brain where I take notes, outline projects, and summarize research.
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-primary font-bold mt-0.5">•</span>
            <strong>Excalidraw</strong> is my favorite for flowcharts and architecture diagrams.
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-primary font-bold mt-0.5">•</span>
            <strong>Screen Studio</strong> and <strong>Rapidemo</strong> help me turn working builds into clean, professional video demos.
          </li>
        </ul>
        <p class="mb-4 leading-relaxed">
          These are the quieter parts of my stack. They help me think more clearly and share more effectively.
        </p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- In Production -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 text-foreground">In Production: The Website Tools That Keep It Running</h2>
        <p class="mb-4 leading-relaxed">
          Beyond development, my own website relies on tools that make the experience faster, safer, and smarter.
        </p>
        <ul class="space-y-3 list-none mb-6">
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-primary font-bold mt-0.5">•</span>
            <strong>OG Image Playground</strong> automatically generates clean, shareable previews for every post.
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-primary font-bold mt-0.5">•</span>
            <strong>Sentry</strong> monitors for errors and performance issues using AI-powered anomaly detection.
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-primary font-bold mt-0.5">•</span>
            <a href="https://vercel.com/docs/speed-insights" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline"><strong>Vercel Speed Insights</strong></a> helps me optimize performance and Core Web Vitals in real time.
          </li>
        </ul>
        <p class="mb-4 leading-relaxed">
          They may not be glamorous, but they're what make everything feel production-ready — the invisible layer of intelligence that keeps my projects stable.
        </p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- The Bigger Picture -->
      <div class="mb-8 p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-xl border">
        <h2 class="text-2xl font-bold mb-4 text-green-700 dark:text-green-400">The Bigger Picture: Why AI Chaining Matters</h2>
        <p class="mb-4 leading-relaxed">
          AI Chaining taught me something important. Productivity doesn't come from using more tools. It comes from understanding how they fit together.
        </p>
        <p class="mb-4 leading-relaxed">
          When you stop chasing every new release and start building your own ecosystem, you unlock focus. You start thinking less about what to use and more about what to create.
        </p>
        <p class="mb-4 leading-relaxed">
          AI tools are at their best when they complement each other, not compete. Once you find that balance, you realize that AI isn't replacing creativity or coding. It's extending it.
        </p>
        <div class="principle-highlight">
          <p>Each link in your chain becomes an extension of your thought process, from research to deployment to design. And suddenly, everything just flows.</p>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Final Thoughts -->
      <div class="mb-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border">
        <h2 class="text-2xl font-bold mb-4">Final Thoughts</h2>
        <p class="mb-4 leading-relaxed">
          If you're a developer, researcher, or creator trying to keep up with the flood of new AI tools, take a step back. You don't need to master all of them. You just need to find the ones that move with you.
        </p>
        <p class="mb-4 leading-relaxed">
          For me, that's Comet, <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">ChatGPT</a>, <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">Copilot</a>, <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">Claude</a>, <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">Vercel</a>, <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">Supabase</a>, and a handful of creative companions. Together, they form my AI chain — the system that keeps me grounded, focused, and creative.
        </p>
        <div class="principle-highlight">
          <p>So build your own stack. Experiment. Chain your tools together until they feel like extensions of how you think. That's where AI stops being a trend and starts becoming a craft.</p>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- CTA -->
      <div class="mb-8 p-6 bg-gradient-to-r from-secondary/10 to-secondary/20 rounded-xl border">
        <h2 class="text-2xl font-bold mb-4">📝 Ready to Explore Your Own AI Chain?</h2>
        <ul class="space-y-3 list-none">
          <li class="flex items-start gap-3 p-4 bg-background/60 rounded-lg border">
            <span class="text-green-500 font-bold mt-0.5">→</span>
            Start with one tool. See how it fits into your process.
          </li>
          <li class="flex items-start gap-3 p-4 bg-background/60 rounded-lg border">
            <span class="text-green-500 font-bold mt-0.5">→</span>
            Then connect it to the next.
          </li>
          <li class="flex items-start gap-3 p-4 bg-background/60 rounded-lg border">
            <span class="text-green-500 font-bold mt-0.5">→</span>
            Before long, you'll have a system that doesn't just work — it grows with you.
          </li>
        </ul>
      </div>
    `,
    author: "Joseph Miguel Guerrero",
    publishedAt: "2025-10-25",
    category: "AI Engineering",
    tags: ["AI", "Productivity", "Workflow", "Tools", "Developer Experience"],
    featured: true,
  },
  {
    slug: "model-context-protocol-mcp-guide",
    title: "How I Discovered the Power of MCPs While Job Hunting",
    excerpt: "Job hunting led me to discover Model Context Protocols (MCPs) - a game-changing technology that solved my LinkedIn research problem and opened my eyes to the future of AI integration.",
    content: `
      <!-- Intro Section -->
      <div class="mb-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border">
        <h2 class="text-2xl font-bold mb-4 text-primary">How I Discovered the Power of MCPs While Job Hunting</h2>
        <p class="mb-4 leading-relaxed">
          Job hunting is a journey full of small strategies and hidden tools. Every detail matters—the company research, the role, and, of course, the people who will sit across the table and decide your future. That's why, like many of you, I don't just prepare answers—I prepare for who I'll be answering to.
        </p>
        <p class="mb-4 leading-relaxed">
          Recently, while navigating interviews, I stumbled upon a problem that opened my eyes to a game-changing technology called <strong>Model Context Protocols (MCPs)</strong>.
        </p>
      </div>

      <!-- The Problem Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 text-foreground">The Dilemma - LinkedIn Without Being Seen</h2>
        <p class="mb-4 leading-relaxed">
          Picture this - I had just received an email with the names of my upcoming interviewers—the recruiter and the hiring manager. Naturally, I wanted to learn more about them - their background, their style, their career trajectory. This context can make the difference between a surface-level conversation and one where you truly connect.
        </p>
        <p class="mb-4 leading-relaxed">
          My first instinct? Search for them on LinkedIn.
        </p>
        <div class="principle-highlight">
          <p><strong>But here's the catch</strong> - LinkedIn notifies users when you view their profiles. That's fine if you're networking casually, but in a high-stakes interview scenario, the last thing I wanted was for the recruiter or hiring manager to know I was studying their profile the night before.</p>
        </div>
        <p class="mb-4 leading-relaxed">
          So, how could I gather insights without leaving digital footprints?
        </p>
      </div>

      <!-- The Discovery Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 text-foreground">The Discovery - MCPs</h2>
        <p class="mb-4 leading-relaxed">
          In my search for a solution, I discovered <strong>Model Context Protocols (MCPs)</strong>—a relatively new framework that lets AI models interact with external tools and data sources safely and effectively.
        </p>
        <div class="principle-highlight">
          <p>Think of MCPs as a universal translator between AI and the APIs, services, or datasets you want it to use. Instead of coding complicated integrations, MCPs make it possible to plug tools directly into an AI assistant, giving it superpowers.</p>
        </div>
        <p class="mb-4 leading-relaxed">
          And then I found out something that blew my mind: <strong>Bright Data has an MCP integration</strong>, and it can be linked directly with AI assistants like Claude Desktop.
        </p>
      </div>

      <!-- The Solution Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 text-foreground">The Practical Application: Bright Data MCP + Claude</h2>
        <p class="mb-4 leading-relaxed">Here's what I set up</p>
        
        <div class="space-y-4 mb-6">
          <div class="principle-highlight">
            <p><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> <strong>Claude Desktop App</strong> → my AI assistant.</p>
          </div>
          <div class="principle-highlight">
            <p>🌐 <strong>Bright Data MCP</strong> → a tool that can fetch data from the web, including LinkedIn, in a structured and anonymous way.</p>
          </div>
        </div>

        <p class="mb-4 leading-relaxed">
          By connecting the two, Claude could now retrieve information from LinkedIn profiles without me having to click, search, or leave a trace.
        </p>

        <div class="mb-6 p-6 bg-accent/30 rounded-xl border">
          <h3 class="text-lg font-bold mb-3">What this meant in practice</h3>
          <ul class="space-y-2">
            <li>• I could ask Claude "Tell me about this recruiter's career history and recent role."</li>
            <li>• Claude, using the Bright Data MCP, would fetch the information for me.</li>
            <li>• The recruiter never got a notification. I stayed invisible, while still being prepared.</li>
          </ul>
        </div>
      </div>

      <!-- Why This Matters Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 text-foreground">Why This Matters for Job Seekers</h2>
        <p class="mb-4 leading-relaxed">
          This is more than just a hack—it's a shift in how we prepare for professional opportunities.
        </p>
        
        <div class="space-y-4">
          <div class="principle-highlight">
            <p>💪 <strong>Confidence boost</strong> - Going into an interview already knowing who you'll speak to—what roles they've held, what industries they've touched—lets you tailor your conversation in a way that feels natural and informed.</p>
          </div>
          
          <div class="principle-highlight">
            <p>⚖️ <strong>Fair playing field</strong> - Recruiters and hiring managers often research candidates extensively before interviews. Why shouldn't candidates do the same, discreetly and respectfully?</p>
          </div>
          
          <div class="principle-highlight">
            <p>✓ <strong>Practical AI</strong> - MCPs aren't abstract anymore. They're not just for developers or researchers—they're for anyone navigating real-world problems, like job hunting.</p>
          </div>
        </div>
      </div>

      <!-- Bigger Picture Section -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 text-foreground">The Bigger Picture - MCPs Beyond Job Hunting</h2>
        <p class="mb-4 leading-relaxed">
          Once I saw MCPs in action, it became clear that this is just the beginning. Imagine
        </p>
        
        <ul class="space-y-3 mb-6">
          <li>• <strong>Researchers</strong> pulling insights from academic databases.</li>
          <li>• <strong>Journalists</strong> gathering structured information without endless manual searching.</li>
          <li>• <strong>Sales teams</strong> quietly understanding potential clients before calls.</li>
        </ul>

        <div class="principle-highlight">
          <p>MCPs unlock context-aware AI that isn't trapped in the model's static knowledge. They turn AI into a living, breathing assistant that can work with real-time data—ethically, securely, and with your needs in focus.</p>
        </div>
      </div>

      <!-- Final Thoughts Section -->
      <div class="mb-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border">
        <h2 class="text-2xl font-bold mb-4 text-primary">Final Thoughts</h2>
        <p class="mb-4 leading-relaxed">
          That late-night scramble to prepare for an interview introduced me to one of the most powerful shifts happening in AI right now. MCPs aren't just for coders—they're for job seekers, storytellers, entrepreneurs, and anyone who needs a smarter way to interact with the digital world.
        </p>
        <p class="mb-4 leading-relaxed">
          If you're in the middle of a job hunt, don't just polish your resume. Explore the tools that can give you an edge. For me, it was Bright Data MCP + Claude Desktop, and it transformed the way I prepare.
        </p>
        <p class="font-semibold">
          And that's the power of MCPs - taking real-world problems and quietly, elegantly solving them.
        </p>
      </div>

      <!-- CTA Section -->
      <div class="mt-8 p-6 bg-accent/30 rounded-xl border">
        <h3 class="text-xl font-bold mb-3">Ready to Explore MCPs?</h3>
        <p class="mb-4">
          Interested in learning more about Model Context Protocols and how they can solve your real-world problems? 
          Join our community and discover more practical AI solutions that go beyond the hype.
        </p>
      </div>
    `,
    author: "Joseph Miguel Guerrero",
    publishedAt: "2025-09-19",
    category: "AI Engineering",
    tags: ["MCP", "AI", "Integration", "Protocol", "Machine Learning"],
    featured: true,
  },
  {
    slug: "vibecoders-git-flow",
    title: "The Vibecoders Git Flow: Pull, Branch, Push, Merge",
    excerpt: "In enterprise, startups, and consulting I've seen Git workflows get bloated — too many steps, too much process. For small teams, that's waste. Here's our minimal Git flow that keeps teams in sync.",
    content: `
      <!-- Intro Section -->
      <div class="mb-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border">
        <h2 class="text-2xl font-bold mb-4 text-primary">Why we keep it minimal</h2>
        <p class="mb-4 leading-relaxed">
          In enterprise, startups, and consulting I've seen Git workflows get bloated — too many steps, too much process, too many tools. For small teams, that's just waste.
        </p>
        <p class="mb-4 leading-relaxed">
          We don't need everything. We just need the basics that let us collaborate and ship.
        </p>
        <p class="mb-4 leading-relaxed">
          Here's the <strong>Vibecoders Git Flow</strong> — the smallest set of moves that keep us in sync.
        </p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Step 1 -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">1</span>
          Pull First
        </h2>
        <p class="mb-4">Start your day fresh.</p>
        <div class="my-4 p-4 bg-secondary/30 rounded-lg font-mono text-sm relative group">
          <button class="absolute top-2 right-2 p-2 bg-background/80 hover:bg-background rounded opacity-0 group-hover:opacity-100 transition-opacity" 
                  onclick="navigator.clipboard.writeText('git checkout main\\ngit pull origin main')" 
                  title="Copy code">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h2z"/>
            </svg>
          </button>
          <div class="text-green-600 dark:text-green-400">git checkout main</div>
          <div class="text-green-600 dark:text-green-400">git pull origin main</div>
        </div>
        <div class="my-4 p-3 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r">
          <p class="text-sm"><strong>VS Code:</strong> Use the Source Control panel → … → Pull.</p>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Step 2 -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">2</span>
          Branch Fast
        </h2>
        <p class="mb-4">Never commit straight to main. Create a new branch for each feature:</p>
        <div class="my-4 p-4 bg-secondary/30 rounded-lg font-mono text-sm relative group">
          <button class="absolute top-2 right-2 p-2 bg-background/80 hover:bg-background rounded opacity-0 group-hover:opacity-100 transition-opacity" 
                  onclick="navigator.clipboard.writeText('git checkout -b feature-login-form')" 
                  title="Copy code">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h2z"/>
            </svg>
          </button>
          <div class="text-green-600 dark:text-green-400">git checkout -b feature-login-form</div>
        </div>
        <div class="my-4 p-3 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r">
          <p class="text-sm"><strong>VS Code:</strong> Click the branch name in the bottom-left corner → Create New Branch.</p>
        </div>
        <p class="mt-4">One branch = one idea.</p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Step 3 -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">3</span>
          Push Often
        </h2>
        <p class="mb-4">Commit and push as soon as something works.</p>
        <div class="my-4 p-4 bg-secondary/30 rounded-lg font-mono text-sm relative group">
          <button class="absolute top-2 right-2 p-2 bg-background/80 hover:bg-background rounded opacity-0 group-hover:opacity-100 transition-opacity" 
                  onclick="navigator.clipboard.writeText('git add .\\ngit commit -m \"feat: add login form UI\"\\ngit push origin feature-login-form')" 
                  title="Copy code">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h2z"/>
            </svg>
          </button>
          <div class="text-green-600 dark:text-green-400">git add .</div>
          <div class="text-green-600 dark:text-green-400">git commit -m "feat: add login form UI"</div>
          <div class="text-green-600 dark:text-green-400">git push origin feature-login-form</div>
        </div>
        <div class="my-4 p-3 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r">
          <p class="text-sm"><strong>VS Code:</strong> Stage changes in the Source Control panel, write a commit message, hit Commit & Push.</p>
        </div>
        <p class="mt-4">If it's not pushed, the team can't see it.</p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Step 4 -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">4</span>
          Merge with a Gatekeeper
        </h2>
        <p class="mb-4">When your feature is ready:</p>
        <div class="my-4 p-4 bg-secondary/30 rounded-lg font-mono text-sm relative group">
          <button class="absolute top-2 right-2 p-2 bg-background/80 hover:bg-background rounded opacity-0 group-hover:opacity-100 transition-opacity" 
                  onclick="navigator.clipboard.writeText('git checkout main\\ngit pull origin main\\ngit merge feature-login-form\\ngit push origin main')" 
                  title="Copy code">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h2z"/>
            </svg>
          </button>
          <div class="text-green-600 dark:text-green-400">git checkout main</div>
          <div class="text-green-600 dark:text-green-400">git pull origin main</div>
          <div class="text-green-600 dark:text-green-400">git merge feature-login-form</div>
          <div class="text-green-600 dark:text-green-400">git push origin main</div>
        </div>
        <div class="my-4 p-3 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r">
          <p class="text-sm"><strong>VS Code:</strong> Open a Pull Request in GitHub. The repo owner (or whoever's leading) reviews and merges.</p>
        </div>
        <p class="mt-4">No silent merges — always a quick check.</p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Step 5 -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">5</span>
          Delete the Branch
        </h2>
        <p class="mb-4">After merging, clean up:</p>
        <div class="my-4 p-4 bg-secondary/30 rounded-lg font-mono text-sm relative group">
          <button class="absolute top-2 right-2 p-2 bg-background/80 hover:bg-background rounded opacity-0 group-hover:opacity-100 transition-opacity" 
                  onclick="navigator.clipboard.writeText('git branch -d feature-login-form\\ngit push origin --delete feature-login-form')" 
                  title="Copy code">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h2z"/>
            </svg>
          </button>
          <div class="text-green-600 dark:text-green-400">git branch -d feature-login-form</div>
          <div class="text-green-600 dark:text-green-400">git push origin --delete feature-login-form</div>
        </div>
        <div class="my-4 p-3 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r">
          <p class="text-sm"><strong>VS Code:</strong> After merge, switch back to main and choose Delete Branch from the branch menu.</p>
        </div>
        <p class="mt-4">Start fresh next time. No stale branches lying around.</p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Visual Flow -->
      <div class="mb-8 p-6 bg-gradient-to-r from-secondary/10 to-secondary/20 rounded-xl border">
        <h2 class="text-2xl font-bold mb-4">Visual Flow</h2>
        <div class="my-4 p-4 bg-background/60 rounded-lg font-mono text-xs leading-relaxed overflow-x-auto">
          <pre class="text-muted-foreground">
main:     ●────●────●────●────●
              ╲    ╱
feature:       ●──●  (feature-login-form)
               ↑  ↑
           branch merge & delete
          </pre>
        </div>
        <p class="text-sm text-muted-foreground">Clean branches, clean merges, clean history.</p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- The Point -->
      <div class="mb-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border">
        <h2 class="text-2xl font-bold mb-4 text-primary">The Point</h2>
        <p class="mb-4">Our Git practice is as lean as possible:</p>
        <div class="space-y-3 mt-6">
          <p class="p-3 bg-background rounded-lg border-l-4 border-primary font-medium text-sm">
            👉 <strong>Pull latest</strong>
          </p>
          <p class="p-3 bg-background rounded-lg border-l-4 border-primary font-medium text-sm">
            👉 <strong>Branch for your work</strong>
          </p>
          <p class="p-3 bg-background rounded-lg border-l-4 border-primary font-medium text-sm">
            👉 <strong>Push often</strong>
          </p>
          <p class="p-3 bg-background rounded-lg border-l-4 border-primary font-medium text-sm">
            👉 <strong>PR + Merge with review</strong>
          </p>
          <p class="p-3 bg-background rounded-lg border-l-4 border-primary font-medium text-sm">
            👉 <strong>Delete the branch</strong>
          </p>
        </div>
        <p class="mt-6">That's all we need. It's simple, it's transparent, and it keeps us focused on what matters — shipping.</p>
      </div>
    `,
    author: "Jayson Cunanan",
    publishedAt: "2025-09-01",
    category: "Web Development", 
    tags: ["Git", "Workflow", "Process", "Team Collaboration"],
    featured: true,
  },
  {
    slug: "the-vibecoders-way",
    title: "The Vibecoders Way: Building Without Waste",
    excerpt: "I've lived inside enterprise, startups, and consulting. They all have the same rituals: endless tickets, robot standups, scattered docs. It's waste. Here's our operating system for builders who hate wasted motion.",
    content: `
      <!-- Intro Section -->
      <div class="mb-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border">
        <h2 class="text-2xl font-bold mb-4 text-primary">Why We Needed Our Own Way</h2>
        <p class="mb-4 leading-relaxed">I've been inside enterprise, startups, and consulting.</p>
        <p class="mb-4 leading-relaxed">They all have the same rituals:</p>
        <ul class="space-y-2 mb-4 list-none">
          <li class="flex items-start gap-2">
            <span class="text-primary font-bold mt-1">•</span>
            Jira boards stacked with lengthy tickets nobody ever reads,
          </li>
          <li class="flex items-start gap-2">
            <span class="text-primary font-bold mt-1">•</span>
            Standups where people repeat yesterday/today like robots,
          </li>
          <li class="flex items-start gap-2">
            <span class="text-primary font-bold mt-1">•</span>
            Docs scattered across Notion, Drive, Slack.
          </li>
        </ul>
        <p class="mb-4 leading-relaxed">
          I've lived it. And honestly? <strong>It's waste.</strong> Too much ceremony, not enough shipping.
        </p>
        <p class="mb-4 leading-relaxed">
          That's why we are creating <strong>The Vibecoders Way</strong> — our own operating system for:
        </p>
        <ul class="space-y-2 mb-4 list-none">
          <li class="flex items-start gap-2">
            <span class="text-primary font-bold mt-1">•</span>
            Beginners who want to level up fast,
          </li>
          <li class="flex items-start gap-2">
            <span class="text-primary font-bold mt-1">•</span>
            Small teams shipping real projects,
          </li>
          <li class="flex items-start gap-2">
            <span class="text-primary font-bold mt-1">•</span>
            Builders who hate wasted motion.
          </li>
        </ul>
        <p class="mb-4 leading-relaxed">
          We call it creating the <strong>WAY</strong> because it's never final. It iterates. Starting on solid ground but is flexible like water to sip through bottlenecks and roadblocks.
        </p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Principle 1 -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">1</span>
          Single Source of Truth
        </h2>
        <div class="my-6 p-4 bg-accent/50 border-l-4 border-primary rounded-r-lg">
          <p class="mb-0 font-semibold text-lg">
            If it's not in <code class="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm font-mono border">spec.md</code>, it doesn't exist.
          </p>
        </div>
        <p class="mb-4">
          Every project has exactly one file: <code class="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm font-mono border">spec.md</code>. 
          It holds scope, rules, database schema, acceptance tests — everything. No 10-page PRDs. No hunting through Slack.
        </p>
        <p>Since it's version-controlled, we get both traceability and accountability.</p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Principle 2 -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">2</span>
          Artifacts Over Talk
        </h2>
        <p class="mb-4">We don't count hours or story points. We count <strong>artifacts</strong>.</p>
        <ul class="space-y-3 my-4 list-none">
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-green-500 font-bold mt-0.5">✓</span>
            A working app page
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-green-500 font-bold mt-0.5">✓</span>
            An updated markdown file
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-green-500 font-bold mt-0.5">✓</span>
            A flowchart in Excalidraw
          </li>
        </ul>
        <div class="my-6 p-4 bg-accent/50 border-l-4 border-primary rounded-r-lg">
          <p class="mb-0 font-semibold text-lg">
            If you don't have something concrete to show, you're still just talking.
          </p>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Principle 3 -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">3</span>
          Progress Logs, Not Tickets
        </h2>
        <p class="mb-4">
          We don't touch Jira. Instead, every repo has a simple <code class="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm font-mono border">feature_progress_log.md</code>.
        </p>
        <ul class="space-y-3 my-4 list-none">
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-green-500 font-bold mt-0.5">✓</span>
            Sub-tasks as checkboxes
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-green-500 font-bold mt-0.5">✓</span>
            Ship → check it off → done
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-green-500 font-bold mt-0.5">✓</span>
            Visible to everyone in the repo
          </li>
        </ul>
        <p>That's enough. No dashboards, no ticket grooming marathons.</p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Principle 4 -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">4</span>
          Weekly Demo Nights
        </h2>
        <p class="mb-4">Once a week, we jump on Discord and demo.</p>
        <ul class="space-y-3 my-4 list-none">
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-green-500 font-bold mt-0.5">✓</span>
            No slides.
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-green-500 font-bold mt-0.5">✓</span>
            No promises.
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-green-500 font-bold mt-0.5">✓</span>
            Just working features, no matter how small.
          </li>
        </ul>
        <p>The feedback loop is instant. It keeps us accountable and energized.</p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Principle 5 -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">5</span>
          Minimal Development Stack
        </h2>
        <ul class="space-y-3 my-4 list-none">
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-green-500 font-bold mt-0.5">✓</span>
            <strong>Discord</strong> → talk
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-green-500 font-bold mt-0.5">✓</span>
            <strong>GitHub</strong> → repos, specs, logs
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-green-500 font-bold mt-0.5">✓</span>
            <strong>Excalidraw</strong> → diagrams
          </li>
        </ul>
        <p>That's it. If it's not one of these, it's bloat.</p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Principle 6 -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">6</span>
          No-Waste Roles
        </h2>
        <p class="mb-4">The ideal mix: engineering + marketing crossover.</p>
        <p>Everyone vibecodes. Some also talk to clients, cut videos, or design — but no middle managers, no people whose only job is "reporting."</p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Why This Works -->
      <div class="mb-8 p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-xl border">
        <h2 class="text-2xl font-bold mb-4 text-green-700 dark:text-green-400">Why This Works</h2>
        <ul class="space-y-4 list-none">
          <li class="flex items-start gap-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg border">
            <span class="text-lg mt-0.5">🎯</span>
            <div>
              <strong>For beginners:</strong> they learn by shipping features, not by watching videos or reading content and thinking they learned.
            </div>
          </li>
          <li class="flex items-start gap-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg border">
            <span class="text-lg mt-0.5">🎯</span>
            <div>
              <strong>For clients:</strong> they see working prototypes every week.
            </div>
          </li>
          <li class="flex items-start gap-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg border">
            <span class="text-lg mt-0.5">🎯</span>
            <div>
              <strong>For us:</strong> we avoid the trap of looking busy while building nothing.
            </div>
          </li>
        </ul>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />


    `,
    author: "Jayson Cunanan",
    publishedAt: "2025-08-15",
    category: "Process & Culture",
    tags: ["Process", "Productivity", "Team Management", "Software Development"],
    featured: true,
  },
  {
    slug: "adding-og-images-vibecoders-noob-experience",
    title: "Adding OG Images to VibecodersPH: My Experience (as a Noob)",
    excerpt: "Those preview images you see on Slack, LinkedIn, Twitter when someone shares a link? They're called link previews — and they're STILL not that easy to make. Here's my noob experience fixing this.",
    content: `
      <!-- Intro Section -->
      <div class="mb-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border">
        <p class="mb-4 leading-relaxed">
          Those preview images you see on Slack, LinkedIn, Twitter (X), or Facebook when someone shares a link? They're called <strong>link previews</strong> — and they're STILL not that easy to make.
        </p>
        <p class="mb-4 leading-relaxed">
          Yes, there are services and APIs to help, but they all come with little annoyances depending on your experience.
        </p>
        <p class="mb-4 leading-relaxed">
          For me, I'm a total noob at this. Honestly, I didn't even wanna do it. But these are the little things that make a <strong>BRAND</strong>. Imagine sending your startup site to an investor on LinkedIn chat and it just shows a blank gray box… MEH.
        </p>

        <!-- Before Image -->
        <div class="my-6">
          <p class="mb-2 text-sm font-medium text-muted-foreground">❌ Before (what investors saw):</p>
          <img src="/no-og.png" alt="Before: Link preview without OG image showing blank gray box" class="rounded-lg border shadow-sm" />
        </div>

        <p class="mb-4 leading-relaxed">
          So I got curious: what's the simplest way to actually fix this?<br/>
          This is my experience.
        </p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Step 1 -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span>
          Step 1. Ask AI
        </h2>
        <p class="mb-4">If you ask your favorite AI agent:</p>
        <div class="my-4 p-4 bg-secondary/30 rounded-lg font-mono text-sm italic">
          i want to improve link previews in social sites, guide me
        </div>
        <p class="mb-4">You'll definitely get something like:</p>
        <div class="principle-highlight">
          <p>"Implement Open Graph meta tags and Twitter Card."</p>
        </div>
        <p class="mb-4">
          <strong>So what's Open Graph?</strong><br/>
          TL;DR: it's a standard created by Facebook, now used by almost every social site, that tells platforms what title, description, and image to display when someone shares your link.
        </p>
        <p class="mb-4">
          <strong>The catch:</strong> you actually need to design a proper image (1200x630px) and add it to your codebase.
        </p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Step 2 -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">🎨</span>
          Step 2. Choose a Tool
        </h2>
        <p class="mb-4">I don't wanna design images manually. I have no design skill.</p>
        <p class="mb-4">
          There are a bunch of options, but I ended up using <strong>Bulktopus</strong>. Why?
        </p>
        <ul class="space-y-3 my-4 list-none">
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-green-500 font-bold mt-0.5">•</span>
            No sign-up
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-green-500 font-bold mt-0.5">•</span>
            No-code design
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-green-500 font-bold mt-0.5">•</span>
            Pre-built sizes for OG images (well, mostly pre-built)
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-green-500 font-bold mt-0.5">•</span>
            Upload background image + logo support
          </li>
        </ul>
        <p class="mb-4"><strong>It has limitations though:</strong></p>
        <ul class="space-y-3 my-4 list-none">
          <li class="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/30 rounded-lg">
            <span class="text-red-500 font-bold mt-0.5">•</span>
            Few design options (colors, typography, fixed text locations)
          </li>
          <li class="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/30 rounded-lg">
            <span class="text-red-500 font-bold mt-0.5">•</span>
            You must share to X or LinkedIn before you can download (annoying)
          </li>
        </ul>
        <p class="mb-4">But it works.</p>
        <div class="principle-highlight">
          <p><strong>The hardest part?</strong> Design itself.</p>
        </div>
        <p class="mb-4">
          Luckily, ChatGPT helped brainstorm colors, text, and layouts — and even generated mockups. I couldn't replicate everything exactly in Bulktopus (limitations), but it was enough to get started.
        </p>
        <p class="mb-4">Here's the OG image I ended up with 👇</p>

        <!-- After Image -->
        <div class="my-6">
          <img src="/og-image.png" alt="Final OG image with purple gradient, Vibe Coders Philippines branding" class="rounded-lg border shadow-sm" />
          <div class="mt-2 p-3 bg-secondary/30 rounded-lg font-mono text-sm">
            Saved as: <code>/public/og-image.png</code> (1200x630px)
          </div>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Step 3 -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">📁</span>
          Step 3. More Pages = More OGs
        </h2>
        <p class="mb-4">My coding agent actually suggested I create different OG images for different pages:</p>
        <ul class="space-y-3 my-4 list-none">
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-blue-500 font-bold mt-0.5">•</span>
            <code>/public/og-image.png</code> → Main site
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-blue-500 font-bold mt-0.5">•</span>
            <code>/public/og-projects.png</code> → <a href="/projects" class="text-foreground hover:underline">Projects page</a>
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-blue-500 font-bold mt-0.5">•</span>
            <code>/public/og-course-web-dev.png</code> → Web Dev course
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-blue-500 font-bold mt-0.5">•</span>
            <code>/public/og-blog-{slug}.png</code> → Individual blog posts
          </li>
        </ul>
        <p class="mb-4">
          That means different statements, maybe even slight design changes for each.<br/>
          I think I'll leave that as an <strong>exercise for our core members</strong>.
        </p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Step 4 -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">✓</span>
          Step 4. Bigger Idea — Automating OGs?
        </h2>
        <p class="mb-4">Here's where I started thinking: <strong>business opportunity?</strong></p>
        <div class="principle-highlight">
          <p><strong>What I actually wanted:</strong> My coding agent, already aware of my brand, colors, texts, and logo, should just make all OG images automatically and integrate them in the codebase.</p>
        </div>
        <p class="mb-4">
          That's where I see MCP coming in.<br/>
          With MCP, an AI agent could:
        </p>
        <ul class="space-y-3 my-4 list-none">
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-primary font-bold mt-0.5">1.</span>
            Generate branding copy + design
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-primary font-bold mt-0.5">2.</span>
            Create multiple OG variants
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-primary font-bold mt-0.5">3.</span>
            Place them in the right folders (<code>/public/</code>)
          </li>
          <li class="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <span class="text-primary font-bold mt-0.5">4.</span>
            Update the <code>&lt;meta&gt;</code> tags automatically
          </li>
        </ul>
        <p class="mb-4">Basically: recreate my whole workflow end-to-end.</p>
        <div class="principle-highlight">
          <p>What do you think?<br/>I say we build it — and compete in the market.</p>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Takeaways -->
      <div class="mb-8 p-6 bg-gradient-to-r from-secondary/10 to-secondary/20 rounded-xl border">
        <h2 class="text-2xl font-bold mb-4">📝 Takeaways</h2>
        <ul class="space-y-3 list-none">
          <li class="flex items-start gap-3 p-4 bg-background/60 rounded-lg border">
            <span class="text-green-500 font-bold mt-0.5">•</span>
            OG images aren't optional — they're part of your brand.
          </li>
          <li class="flex items-start gap-3 p-4 bg-background/60 rounded-lg border">
            <span class="text-green-500 font-bold mt-0.5">•</span>
            One 1200x630 image per page is enough for all major platforms (FB, LinkedIn, Twitter, Discord, Slack).
          </li>
          <li class="flex items-start gap-3 p-4 bg-background/60 rounded-lg border">
            <span class="text-green-500 font-bold mt-0.5">•</span>
            Tools like Bulktopus + AI mockups = simple way to start.
          </li>
          <li class="flex items-start gap-3 p-4 bg-background/60 rounded-lg border">
            <span class="text-green-500 font-bold mt-0.5">•</span>
            But the real play is automation — <strong>OG as a Service</strong>.
          </li>
        </ul>
      </div>

    `,
    author: "Jayson Cunanan",
    publishedAt: "2025-09-29",
    category: "Web Development",
    tags: ["Open Graph", "Social Media", "SEO", "Meta Tags", "Branding"],
    featured: true,
  },
];

export const categories = ["All", "Process & Culture", "Web Development", "AI Engineering", "Data Analytics"];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getBlogPostBySlugWithReadTime(slug);
}

function calculateReadTime(content: string): string {
  const text = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
  const words = text.split(/\s+/).filter(word => word.length > 0);
  const wordsPerMinute = 200; // Average reading speed
  const minutes = Math.ceil(words.length / wordsPerMinute);
  return `${minutes} min read`;
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.map(post => ({
    ...post,
    readTime: post.readTime || calculateReadTime(post.content)
  }));
}

export function getBlogPostBySlugWithReadTime(slug: string): BlogPost | undefined {
  const post = blogPosts.find(post => post.slug === slug);
  if (!post) return undefined;
  
  return {
    ...post,
    readTime: post.readTime || calculateReadTime(post.content)
  };
}