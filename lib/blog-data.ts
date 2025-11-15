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
    excerpt: "Discover how modern AI/ML engineers are shifting from building models to shipping full-stack prototypes using LLMs, vibe coding, and the Supabase MCP protocol. Learn how one engineer went from zero database experience to full product velocity.",
    content: `
      <!-- Intro Section -->
      <div class="mb-8 p-6 bg-muted/50 rounded-xl border">
        <h2 class="text-2xl font-bold mb-4">The New Era of AI Engineering</h2>
        <p class="mb-4 leading-relaxed">
          I've been working as an AI/ML engineer for the past two years. But with the surge of generative AI, the role has fundamentally shifted. 
        </p>
        <p class="mb-4 leading-relaxed">
          We're no longer primarily training models from scratch — today we're integrating ready-made large language models (LLMs) like <strong>ChatGPT</strong>, <strong>Claude</strong>, and <strong>Gemini</strong> into real-world solutions. And frankly, we're writing less code than ever.
        </p>
        <p class="mb-4 leading-relaxed">
          Instead, we focus on <strong>building working prototypes</strong>, delivering results fast, and creating real value for stakeholders. That's where the concept of <strong><a href="https://dzone.com/articles/vibe-coding-conversational-software-development" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">"vibe coding"</a></strong> and tools like <strong><a href="https://supabase.com/docs/guides/getting-started/mcp" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Supabase MCP (Model Context Protocol)</a></strong> become critical.
        </p>
        <div class="p-4 rounded-lg border bg-muted/30">
          <p class="font-medium">But despite the buzz, this new era demands more than just pointing an AI at a problem. If you want to thrive as an AI engineer today, you must pivot into a full-stack mindset: build the software, set up the database, deploy to production — rapidly.</p>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- The Changing Role -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-6">The Changing Role of an AI/ML Engineer</h2>
        
        <h3 class="text-xl font-semibold mb-4">What We Used to Do: Build and Train Models</h3>
        <p class="mb-4 leading-relaxed">
          Back in the day, an AI/ML engineer's workflow typically involved:
        </p>
        <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>Gathering and cleaning data</li>
          <li>Selecting and designing model architectures</li>
          <li>Training models (often from scratch)</li>
          <li>Tuning hyperparameters</li>
          <li>Deploying in limited, experimental form</li>
        </ul>
        <p class="mb-6 leading-relaxed">
          The skillset was heavily centered around <strong>model architecture</strong>, <strong>optimization</strong>, <strong>dataset engineering</strong>, and deep understanding of ML frameworks like TensorFlow and PyTorch.
        </p>

        <h3 class="text-xl font-semibold mb-4">The Gen AI Era: Plugging Into Proprietary LLMs</h3>
        <p class="mb-4 leading-relaxed">
          Today, the game is different. We don't always build models from scratch. Instead, we <strong>consume APIs</strong> like <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">ChatGPT</a>, <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Claude</a>, and <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Gemini</a>, and integrate them into workflows.
        </p>
        <div class="bg-muted/50 border rounded-lg p-6 mb-6">
          <p class="mb-3 font-semibold">Because of this shift:</p>
          <ul class="space-y-2 list-none">
            <li class="flex items-start gap-2"><span>→</span> We use AI to generate content (drafts, slides, images) rather than train models</li>
            <li class="flex items-start gap-2"><span>→</span> We rely on LLMs for general tasks and agents for domain-specific workflows</li>
            <li class="flex items-start gap-2"><span>→</span> We focus on integration, not always the architecture of the model itself</li>
          </ul>
        </div>

        <h3 class="text-xl font-semibold mb-4">The New Expectations: Shipping Working Prototypes Rapidly</h3>
        <p class="mb-4 leading-relaxed">
          In business settings, the demand is clear: <em>"We want AI in our workflow — yesterday."</em> Stakeholders want to see results, not just models.
        </p>
        <div class="bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-950/20 dark:to-fuchsia-950/20 rounded-xl border border-violet-500/20 p-6 mb-6">
          <p class="mb-3 font-semibold">So as an AI engineer, you must be able to:</p>
          <ul class="space-y-2">
            <li class="flex items-start gap-2"><span class="text-foreground">✓</span> Rapidly prototype working features (not just experiments)</li>
            <li class="flex items-start gap-2"><span class="text-foreground">✓</span> Display something real to executives: a dashboard, an assistant, something <em>live</em></li>
            <li class="flex items-start gap-2"><span class="text-foreground">✓</span> Cover full-stack responsibilities: frontend, backend, database, deployment</li>
            <li class="flex items-start gap-2"><span class="text-foreground">✓</span> Be comfortable moving fast, iterating, and delivering value</li>
          </ul>
        </div>

        <div class="principle-highlight bg-yellow-50 dark:bg-yellow-950/20 border-yellow-500/30 p-5 rounded-lg border">
          <h4 class="font-bold text-yellow-700 dark:text-yellow-400 mb-2">⚠️ Why This Shift Matters for You</h4>
          <p class="leading-relaxed text-foreground">
            If you only know model research and can't deliver product features, you may fall behind in this era. The expectation is evolving: you must be <strong>full-stack capable</strong>, <strong>product-driven</strong>, and <strong>velocity-focused</strong>.
          </p>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Section 2 -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-6 text-foreground">Meet Supabase and Model Context Protocol (MCP)</h2>
        
        <h3 class="text-2xl font-semibold mb-4 text-foreground">What is Supabase?</h3>
        <p class="mb-4 leading-relaxed">
          <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline font-semibold">Supabase</a> is an open-source <strong>Backend-as-a-Service (BaaS)</strong> built on PostgreSQL. It provides:
        </p>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div class="p-3 bg-muted/50 border rounded-lg text-center">
            <p class="font-semibold text-sm">✓ Authentication</p>
          </div>
          <div class="p-3 bg-muted/50 border rounded-lg text-center">
            <p class="font-semibold text-sm">✓ Database</p>
          </div>
          <div class="p-3 bg-muted/50 border rounded-lg text-center">
            <p class="font-semibold text-sm">✓ Storage</p>
          </div>
          <div class="p-3 bg-muted/50 border rounded-lg text-center">
            <p class="font-semibold text-sm">✓ Realtime</p>
          </div>
          <div class="p-3 bg-muted/50 border rounded-lg text-center">
            <p class="font-semibold text-sm">✓ APIs</p>
          </div>
          <div class="p-3 bg-muted/50 border rounded-lg text-center">
            <p class="font-semibold text-sm">✓ Edge Functions</p>
          </div>
        </div>
        <p class="mb-6 leading-relaxed">
          It's built for <strong>rapid product development</strong>: set up a schema, manage data, store files/videos, expose endpoints. Perfect for prototyping fast.
        </p>

        <h3 class="text-2xl font-semibold mb-4 text-foreground">What is Model Context Protocol (MCP)?</h3>
        <p class="mb-4 leading-relaxed">
          The <strong>Model Context Protocol (MCP)</strong> is a standard designed to allow <strong>Large Language Models (LLMs)</strong> and <strong>AI agents</strong> to interact directly with platforms like Supabase.
        </p>
        <div class="bg-muted/50 border rounded-xl p-6 mb-6">
          <p class="font-bold text-lg mb-3 text-foreground">In short: Your LLM can talk to your Supabase backend 🤯</p>
          <p class="mb-3 leading-relaxed">Create tables, run queries, manage storage — all via prompts.</p>
          <p class="text-sm italic">Learn more: <a href="https://supabase.com/docs/guides/ai/mcp" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">Supabase MCP Documentation</a></p>
        </div>

        <div class="bg-slate-900 text-slate-50 rounded-lg p-6 mb-6">
          <p class="mb-2 text-slate-400 text-sm font-mono">Example prompt:</p>
          <p class="font-mono text-sm leading-relaxed">"Use Supabase MCP to create table Projects with fields title, description, video_url, tags."</p>
          <p class="mt-4 text-green-400 text-sm">✓ Behind the scenes, Supabase MCP generates the migration, updates your database, links your tables.</p>
        </div>

        <h3 class="text-2xl font-semibold mb-4 text-foreground">How MCP Accelerates Development</h3>
        <ul class="space-y-3 mb-6">
          <li class="flex items-start gap-3">
            <span class="text-foreground text-xl">→</span>
            <p><strong>No manual migrations:</strong> You don't need to hand-craft schemas — drive the database via natural language</p>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-foreground text-xl">→</span>
            <p><strong>Integrated workflows:</strong> Upload videos/files, create metadata tables, prompt your agent to update content</p>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-foreground text-xl">→</span>
            <p><strong>Removes friction:</strong> When prototyping, you don't want to spend days on backend setup — you want to ship quickly</p>
          </li>
        </ul>

        <div class="principle-highlight bg-red-50 dark:bg-red-950/20 border-red-500/30 p-5 rounded-lg border">
          <h4 class="font-bold text-red-700 dark:text-red-400 mb-3">⚠️ Security & Risk Considerations</h4>
          <p class="mb-3 leading-relaxed">Because you're giving an AI agent access to your database backend, you need to think about:</p>
          <ul class="space-y-2">
            <li class="flex items-start gap-2"><span class="text-red-500">•</span> <strong>Permissions:</strong> Who can access Supabase MCP, what rights they have (<a href="https://supabase.com/docs/guides/auth/row-level-security" target="_blank" rel="noopener noreferrer" class="text-red-600 dark:text-red-400 hover:underline">RLS policies</a>)</li>
            <li class="flex items-start gap-2"><span class="text-red-500">•</span> <strong>Maintainability:</strong> AI-generated tables may not be built for scale</li>
            <li class="flex items-start gap-2"><span class="text-red-500">•</span> <strong>Debugging:</strong> AI-generated code may introduce subtle bugs — you still need oversight</li>
          </ul>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Section 3 -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-6 text-foreground">My Real-World Journey: From AI Engineer to Full-Stack Builder</h2>
        
        <h3 class="text-2xl font-semibold mb-4 text-foreground">The Problem I Faced</h3>
        <p class="mb-4 leading-relaxed">
          After two years as an ML/AI engineer, I realized I had <strong>never built a database from scratch</strong>. I knew SQL queries, but only in the sense of "if I already have a database set up, I can query it."
        </p>
        <div class="principle-highlight bg-amber-50 dark:bg-amber-950/20 border-amber-500/30 p-5 rounded-lg border mb-6">
          <p class="italic text-lg">But designing a schema? Managing migrations? Deploying the backend? That was foreign territory.</p>
          <p class="mt-3 font-semibold text-amber-700 dark:text-amber-400">It felt like: "I can query... if I don't have a database in the first place!"</p>
        </div>

        <h3 class="text-2xl font-semibold mb-4 text-foreground">How I Discovered Supabase MCP</h3>
        <p class="mb-4 leading-relaxed">
          While exploring ways to ship prototypes faster, I came across <a href="https://supabase.com/docs/guides/ai/mcp" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">Supabase's MCP documentation</a>.
        </p>
        <p class="mb-4 leading-relaxed">
          I read their guides, watched tutorials, and thought — <em>maybe I can spin up a backend with minimal fuss.</em>
        </p>
        <p class="mb-6 leading-relaxed">
          And when I realized that MCP allowed me to <strong>delegate schema and data modeling to an AI/agent</strong>, the game changed.
        </p>

        <h3 class="text-2xl font-semibold mb-4 text-foreground">How "Vibe Coding" Entered the Scene</h3>
        <p class="mb-4 leading-relaxed">
          I started using LLMs (<strong>Claude</strong> for domain logic, <strong>ChatGPT</strong> for day-to-day queries/automation, <strong>Gemini</strong> for drafts, slides, images) and paired them with <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">GitHub Copilot</a> and <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">Cursor</a>.
        </p>
        <div class="bg-slate-900 text-slate-50 rounded-lg p-6 mb-6">
          <p class="mb-3 text-slate-400 text-sm">In practice:</p>
          <p class="font-mono text-sm mb-4 leading-relaxed text-green-400">
            I prompt: "Can you add another project in the Featured Projects section using the details in project001.md and upload this screen-recorded video to the database using Supabase MCP?"
          </p>
          <p class="text-slate-300 text-sm">The agent (via MCP) does the table update, uploads the video, adjusts the metadata.</p>
          <p class="mt-3 text-violet-400 font-semibold">I focus on the prompt, the flow. I don't code every line. That's "vibe coding" in action.</p>
        </div>

        <h3 class="text-2xl font-semibold mb-4 text-foreground">What Changed</h3>
        <div class="grid gap-4 mb-6">
          <div class="p-4 bg-green-50 dark:bg-green-950/20 border border-green-500/30 rounded-lg">
            <p class="flex items-start gap-2">
              <span class="text-green-600 dark:text-green-400 text-xl">✓</span>
              <span>I went from "no database" to "database exists, live project uploaded, table created, metadata in place"</span>
            </p>
          </div>
          <div class="p-4 bg-green-50 dark:bg-green-950/20 border border-green-500/30 rounded-lg">
            <p class="flex items-start gap-2">
              <span class="text-green-600 dark:text-green-400 text-xl">✓</span>
              <span>I moved from just being an AI engineer to being <strong>the entire stack</strong>: software + database + deployment</span>
            </p>
          </div>
          <div class="p-4 bg-green-50 dark:bg-green-950/20 border border-green-500/30 rounded-lg">
            <p class="flex items-start gap-2">
              <span class="text-green-600 dark:text-green-400 text-xl">✓</span>
              <span>I can now <strong>prototype features in hours</strong>, deploy them, show stakeholders — that's the value shift</span>
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
            <p class="text-muted-foreground">Start with what you want to build: e.g., "Featured Projects page with video uploads, title, description, tags, category."</p>
          </div>

          <div class="border-l-4 border-primary pl-6 py-2">
            <h4 class="font-bold text-lg mb-2">2. Use Your IDE + GitHub Copilot / LLM to Scaffold Front/Back Code</h4>
            <p class="text-muted-foreground mb-2">Prompt Copilot:</p>
            <code class="block bg-slate-900 text-slate-50 p-3 rounded text-sm">"Generate API route for getting featured projects from Supabase, using Next.js."</code>
          </div>

          <div class="border-l-4 border-primary pl-6 py-2">
            <h4 class="font-bold text-lg mb-2">3. Use Supabase MCP to Create Tables/Migrations Directly from Prompts</h4>
            <p class="text-muted-foreground mb-2">For example:</p>
            <code class="block bg-slate-900 text-slate-50 p-3 rounded text-sm mb-2">"Use Supabase MCP to create table FeaturedProjects (id uuid primary key, title text, description text, video_url text, tags text[])."</code>
            <p class="text-green-600 dark:text-green-400 font-semibold">Your AI agent handles it — you're done. ✓</p>
          </div>

          <div class="border-l-4 border-primary pl-6 py-2">
            <h4 class="font-bold text-lg mb-2">4. Connect Storage (Videos/Files) + Metadata Tables in Supabase</h4>
            <p class="text-muted-foreground">Upload the video file, store the URL in your video_url field, link tags, etc.</p>
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
              <span class="text-amber-600 dark:text-amber-400">⚠️</span>
              <span>While "vibe coding" emphasizes speed, keep <strong>maintainability</strong> in mind: add tests, code review, ensure you understand "what's under the hood"</span>
            </p>
          </div>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Section 5 -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-6 text-foreground">The Mindset Shift: From Researcher to Builder</h2>
        
        <h3 class="text-2xl font-semibold mb-4 text-foreground">Why Being Comfortable with Code, Database, Deployment Matters</h3>
        <p class="mb-6 leading-relaxed">
          In the Gen AI era, just knowing how to call an LLM isn't enough. You need to:
        </p>
        <div class="grid md:grid-cols-2 gap-4 mb-8">
          <div class="p-5 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-950/20 dark:to-fuchsia-950/20 border border-violet-500/20 rounded-lg">
            <p class="font-semibold mb-2 text-foreground">✓ Integrate it in a product</p>
            <p class="text-sm text-muted-foreground">Not just experiments</p>
          </div>
          <div class="p-5 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-950/20 dark:to-fuchsia-950/20 border border-violet-500/20 rounded-lg">
            <p class="font-semibold mb-2 text-foreground">✓ Build the backend and frontend</p>
            <p class="text-sm text-muted-foreground">Full-stack capable</p>
          </div>
          <div class="p-5 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-950/20 dark:to-fuchsia-950/20 border border-violet-500/20 rounded-lg">
            <p class="font-semibold mb-2 text-foreground">✓ Ship something live</p>
            <p class="text-sm text-muted-foreground">Production-ready</p>
          </div>
          <div class="p-5 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-950/20 dark:to-fuchsia-950/20 border border-violet-500/20 rounded-lg">
            <p class="font-semibold mb-2 text-foreground">✓ Be accountable for the full workflow</p>
            <p class="text-sm text-muted-foreground">End-to-end ownership</p>
          </div>
        </div>

        <h3 class="text-2xl font-semibold mb-4 text-foreground">The Hats You'll Wear</h3>
        <div class="space-y-3 mb-8">
          <div class="flex items-start gap-4 p-4 bg-card border rounded-lg">
            <span class="text-3xl"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span>
            <div>
              <p class="font-bold">AI Engineer</p>
              <p class="text-sm text-muted-foreground">You integrate LLMs and design AI workflows</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-card border rounded-lg">
            <span class="text-3xl"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg></span>
            <div>
              <p class="font-bold">Software Engineer</p>
              <p class="text-sm text-muted-foreground">You build the codebase, routes, interfaces</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-card border rounded-lg">
            <span class="text-3xl">✓</span>
            <div>
              <p class="font-bold">Database Engineer</p>
              <p class="text-sm text-muted-foreground">You design schema, manage migrations, model data</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-card border rounded-lg">
            <span class="text-3xl">✓</span>
            <div>
              <p class="font-bold">DevOps/Deployment</p>
              <p class="text-sm text-muted-foreground">You deploy to production, handle environment configs, monitor</p>
            </div>
          </div>
        </div>

        <div class="bg-muted/50 border rounded-xl p-6">
          <h3 class="text-2xl font-semibold mb-4 text-foreground">Embrace the Vibe-Coding Mantra</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <span class="text-foreground text-xl">→</span>
              <p><strong>Rapid iteration > perfection</strong> (initially)</p>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-foreground text-xl">→</span>
              <p>Show a working prototype to <strong>validate the idea</strong>. Then refine.</p>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-foreground text-xl">→</span>
              <p>The tools exist — LLMs, agents, MCP, Supabase. <strong>Use them</strong>.</p>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-foreground text-xl">→</span>
              <p>But remember: you still need to <strong>validate, maintain, understand</strong>.</p>
            </li>
          </ul>
          <div class="mt-6 p-4 bg-violet-500/20 border border-violet-500/30 rounded-lg">
            <p class="font-bold text-lg text-foreground">Your role evolves: from "I build models" to "I build complete AI-powered products."</p>
          </div>
        </div>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- Conclusion -->
      <div class="mb-8 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
        <h2 class="text-3xl font-bold mb-6">Conclusion</h2>
        <p class="mb-4 leading-relaxed text-lg">
          In the Gen AI era, the role of the AI/ML engineer has <strong>fundamentally changed</strong>. It's no longer just about training models — now it's about <strong>shipping working AI-powered solutions at velocity</strong>.
        </p>
        <p class="mb-4 leading-relaxed">
          Using tools like <strong>Supabase</strong> and its <strong>Model Context Protocol (MCP)</strong>, combined with a <strong>vibe-coding mindset</strong>, you can prototype faster, iterate quicker, and deliver real value.
        </p>
        <div class="principle-highlight bg-green-500/10 border-green-500/30 p-5 rounded-lg border my-6">
          <p class="text-lg font-semibold">I went from never building a database to shipping live features in a matter of hours. The shift from ML engineer to full-stack builder is real — and you can do it too.</p>
        </div>
        <p class="mb-4 leading-relaxed text-lg">
          So what are you waiting for? Try it out for yourself. Explore <a href="https://supabase.com/docs/guides/ai/mcp" target="_blank" rel="noopener noreferrer" class="text-green-600 dark:text-green-400 hover:underline font-semibold">Supabase MCP</a>, adopt vibe coding, and build your next prototype.
        </p>
        <p class="text-lg font-semibold">
          I'll be here, exploring more AI tools and sharing what I learn. So long — and happy coding. ✓
        </p>
      </div>

      <hr class="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <!-- FAQs -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div class="space-y-6">
          <div class="p-6 bg-card border rounded-xl hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-bold mb-3 text-foreground">Q1: What exactly is "vibe coding"?</h3>
            <p class="leading-relaxed text-muted-foreground">
              Vibe coding is a development style where you describe what you want in natural language and an LLM/agent generates much of the code. The developer guides, tests, and iterates — but doesn't write every line manually. <a href="https://dzone.com/articles/vibe-driven-development" target="_blank" rel="noopener noreferrer" class="text-foreground hover:underline">(DZone article)</a>
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
      <div class="mb-8 p-8 bg-muted/50 rounded-2xl border">
        <h2 class="text-3xl font-bold mb-4 text-center">✓ Ready to Start Your AI Engineering Journey?</h2>
        <div class="grid md:grid-cols-3 gap-4 mt-6">
          <div class="p-5 bg-background/80 backdrop-blur rounded-lg border border-violet-500/20 hover:border-violet-500/50 transition-colors">
            <p class="font-bold mb-2 text-foreground">1. Learn Supabase MCP</p>
            <p class="text-sm text-muted-foreground mb-3">Explore the official documentation and tutorials</p>
            <a href="https://supabase.com/docs/guides/ai/mcp" target="_blank" rel="noopener noreferrer" class="text-xs text-foreground hover:underline">Start here →</a>
          </div>
          <div class="p-5 bg-background/80 backdrop-blur rounded-lg border border-violet-500/20 hover:border-violet-500/50 transition-colors">
            <p class="font-bold mb-2 text-foreground">2. Try Vibe Coding</p>
            <p class="text-sm text-muted-foreground mb-3">Start with GitHub Copilot or Cursor IDE</p>
            <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer" class="text-xs text-foreground hover:underline">Get Copilot →</a>
          </div>
          <div class="p-5 bg-background/80 backdrop-blur rounded-lg border border-violet-500/20 hover:border-violet-500/50 transition-colors">
            <p class="font-bold mb-2 text-foreground">3. Build Your First Prototype</p>
            <p class="text-sm text-muted-foreground mb-3">Apply what you learned and ship something real</p>
            <a href="https://vibecoders.ph/projects" class="text-xs text-foreground hover:underline">See examples →</a>
          </div>
        </div>
        <p class="text-center mt-8 text-lg font-semibold">Join the community building the future of AI engineering 🌟</p>
      </div>
    `,
    author: "Viron Gil Estrada",
    publishedAt: "2025-11-16",
    readTime: "12 min read",
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
          From <strong>Cursor</strong> and <strong>Codex</strong> to <strong>n8n</strong> and <strong>ElevenLabs</strong>, the playground just got bigger. Each tool feels like an extension of thought, helping me automate, design, and experiment faster than ever.
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
          Every idea deserves to go live, and <strong>Vercel</strong> is where mine do.
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
            <strong>Vercel Speed Insights</strong> helps me optimize performance and Core Web Vitals in real time.
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
          For me, that's Comet, ChatGPT, Copilot, Claude, Vercel, Supabase, and a handful of creative companions. Together, they form my AI chain — the system that keeps me grounded, focused, and creative.
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
            <code>/public/og-projects.png</code> → Projects page
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