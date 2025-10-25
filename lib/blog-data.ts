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
            <p>🤖 <strong>Claude Desktop App</strong> → my AI assistant.</p>
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
            <p>🚀 <strong>Practical AI</strong> - MCPs aren't abstract anymore. They're not just for developers or researchers—they're for anyone navigating real-world problems, like job hunting.</p>
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
          <span class="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">🤖</span>
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
          <span class="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">🚀</span>
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