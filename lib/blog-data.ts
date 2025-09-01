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