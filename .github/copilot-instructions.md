# Copilot Instructions for Vibe Coder PH

## Project Overview

**Vibe Coder Philippines** is a Next.js 15 educational website for hands-on coding education (Web Dev, AI, Data). The site follows a **production-quality, spec-driven approach** with detailed SEO/metadata requirements documented in [spec.md](../spec.md).

**Stack:**
- Next.js 15.4.7 (App Router, React 19, Turbopack dev mode)
- Tailwind CSS v4 (imported via `@import "tailwindcss"` in `app/globals.css`)
- shadcn-ui components (New York style, see `components.json`)
- Supabase (project data storage)
- Vercel Analytics
- next-themes (system/dark/light mode)

**Key Goals:** Ship SEO-optimized, accessible, performant pages with minimal friction for contributors.

---

## Architecture & Data Flow

### Page Structure
- **Static content pages** (`app/about`, `app/courses/*`, `app/challenges/*`) use standard Server Components
- **Dynamic blog posts** (`app/blog/[slug]/*`) pull content from `lib/blog-data.ts` (static array of BlogPost objects)
- **Project gallery** (`app/projects/*`, `app/gallery/*`) fetches from Supabase via `lib/supabase.ts` helper functions
- **Sitemap** auto-generated in `app/sitemap.ts` combining static pages + dynamic blog slugs

### Component Organization
- **Site-wide:** `components/site/*` (navbar, footer, testimonials)
- **Theme:** `components/theme-*.tsx` (provider, toggle, status)
- **shadcn-ui:** Future UI components go in `components/ui/*` (not yet populated)

### Styling Approach
- **Tailwind v4** configured directly in `app/globals.css` with custom animations and CSS variables
- **Dark mode** via next-themes with `attribute="class"` on ThemeProvider
- **Utility function:** `lib/utils.ts` exports `cn()` for merging Tailwind classes (clsx + tailwind-merge)
- **Animations:** Custom keyframes in `globals.css` (`fade-in-up`, `float`, etc.) + `tw-animate-css` plugin

---

## Critical Conventions

### 1. Metadata Pattern (SEO-Critical)

**Root layout** (`app/layout.tsx`) establishes template + defaults. **Every page** must export unique metadata:

```tsx
export const metadata: Metadata = {
  title: "Page Title",
  description: "150-160 char description",
  openGraph: {
    title: "OG Title",
    description: "OG Description",
    type: "website", // or "article" for blog
    url: "https://www.vibecoders.ph/page-path",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", ... },
};
```

**Dynamic pages** use `generateMetadata()` async function (see `app/blog/[slug]/layout.tsx` example).

**Required OG image:** `/public/og-image.png` (1200×630). Per-post images not yet implemented.

---

### 2. Blog Content Management

**Source of truth:** `lib/blog-data.ts` exports:
- `BlogPost` interface (slug, title, excerpt, content, author, publishedAt, tags, category, featured)
- `blogPosts: BlogPost[]` array with full HTML content as strings
- Helper functions: `getAllBlogPosts()`, `getBlogPostBySlug()`, `getBlogPostsByCategory()`

**To add a blog post:**
1. Add new object to `blogPosts` array in `lib/blog-data.ts`
2. Use existing posts as template (content is HTML string with Tailwind classes)
3. Set `featured: true` to show on homepage
4. Categories: "Web Development", "AI Engineering", "Data Analytics", "Process & Culture"

**Blog routing:**
- List view: `app/courses/page.tsx` (mislabeled as "courses" historically)
- Post view: `app/blog/[slug]/page.tsx`
- Metadata: `app/blog/[slug]/layout.tsx` (implements `generateMetadata()`)

---

### 3. Supabase Integration

**Client:** Singleton instance in `lib/supabase.ts`
- `getProjects()` - all projects ordered by `order_index` then `created_at`
- `getFeaturedProjects()` - only `featured: true` projects

**Project type:**
```typescript
interface Project {
  id: string; title: string; description: string | null;
  tech_stack: string | null; live_url: string | null;
  media_type: 'image' | 'video'; media_url: string | null;
  thumbnail_url: string | null; featured: boolean;
  order_index: number; created_at: string; updated_at: string;
}
```

**Environment variables:**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**Admin operations:** See `lib/project-admin.ts` for `createProject()`, `updateProject()`, `deleteProject()`, `reorderProjects()`.

---

### 4. Navigation & Theme

**Primary nav** links in `components/site/navbar.tsx`:
```typescript
const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/courses", label: "Blog" }, // Note: "Blog" label routes to courses path
  { href: "/sponsor", label: "Sponsor" },
  { href: "/about", label: "About" },
];
```

**Theme implementation:**
- Provider wraps app in `app/layout.tsx` with `suppressHydrationWarning` on `<html>`
- Toggle button in navbar via `components/theme-toggle.tsx`
- System preference detection enabled by default

---

## Developer Workflows

### Local Development
```bash
pnpm install       # Install dependencies
pnpm dev           # Start dev server with Turbopack (localhost:3000)
pnpm build         # Production build
pnpm lint          # ESLint check
```

**No test suite** currently configured.

### Adding a New Page
1. Create `app/new-path/page.tsx` with metadata export
2. Add route to `app/sitemap.ts` static pages array
3. Update navbar links in `components/site/navbar.tsx` if needed
4. Verify metadata in browser dev tools (Open Graph tags)

### Performance Checklist (per spec.md)
- Use `next/image` for all images (auto WebP/AVIF)
- Set `priority` on above-the-fold images
- Use `next/font` for custom fonts (already using Geist)
- Lazy load below-fold content with `dynamic()` imports
- Target: LCP < 2.5s, CLS < 0.1, FCP < 1.8s

### Accessibility Standards (per spec.md)
- Heading hierarchy: h1 → h2 → h3 (no skipping)
- Alt text on all images (descriptive, not generic)
- ARIA labels on interactive elements
- Keyboard navigation (Tab, Enter, Escape)
- Color contrast ≥ 4.5:1 (WCAG AA)
- Touch targets: min 44×44px

---

## Common Pitfalls

1. **Don't use Tailwind v3 syntax** - v4 config is in `globals.css`, not `tailwind.config.js`
2. **Blog posts live in `lib/blog-data.ts`** - not markdown files or CMS
3. **Path confusion:** "Blog" nav label routes to `/courses` (historical naming)
4. **Metadata is mandatory** - every new page needs unique title/description/OG tags
5. **Image paths:** Remote images require `remotePatterns` in `next.config.ts` (already configured for Unsplash, GitHub avatars, Supabase)
6. **Supabase env vars** must use `NEXT_PUBLIC_` prefix (client-side access)

---

## External Dependencies

- **Deployed on Vercel** (assume production URL: `https://www.vibecoders.ph`)
- **Supabase:** Project data storage (not authentication yet)
- **Analytics:** Vercel Analytics (no GA4 or Plausible currently)
- **Lottie animations:** `@lottiefiles/dotlottie-react` for interactive animations (not heavily used yet)

---

## Quick Reference

| Task | File(s) | Notes |
|------|---------|-------|
| Add blog post | `lib/blog-data.ts` | Append to `blogPosts[]` |
| Add static page | `app/new-path/page.tsx` + `app/sitemap.ts` | Export metadata |
| Update nav | `components/site/navbar.tsx` | Edit `links` array |
| Fetch projects | `lib/supabase.ts` | Use `getProjects()` |
| Theme toggle | `components/theme-toggle.tsx` | Uses next-themes |
| SEO reference | `spec.md` lines 1-200 | Full metadata requirements |
| Style utilities | `lib/utils.ts` | `cn()` function |

---

**When in doubt:** Follow patterns in existing pages (`app/about/page.tsx`, `app/blog/[slug]/layout.tsx`) and consult [spec.md](../spec.md) for production standards.
