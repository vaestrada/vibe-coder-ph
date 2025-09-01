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
    publishedAt: "2024-09-01",
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