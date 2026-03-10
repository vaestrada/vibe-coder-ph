# Vibe Coders PH — Brand Guidelines

## Brand Identity

**Name:** Vibe Coders PH
**Tagline:** Hands-on coding content and project briefs in the Philippines. Learn Web, AI, and Data—project-first, mentor-guided.
**Website:** https://www.vibecoders.ph

---

## Logo

| Asset | Path | Usage |
|-------|------|-------|
| Logo (SVG) | `/public/logo.svg` | Primary logo, favicon, apple icon |
| Logo (PNG) | `/public/images/logo-vibe-coders-ph.png` | Social media, documents |
| OG Image | `/public/og-image.png` | Social sharing (1200×630) |

---

## Color Palette

### Brand Gradient (Primary Visual Identity)

The signature Vibe Coders PH gradient is used for CTAs, headings, accent bars, and icon backgrounds:

| Name | Tailwind Classes | Hex (approx) | Usage |
|------|-----------------|---------------|-------|
| **Violet** | `violet-500` / `violet-600` | `#8B5CF6` / `#7C3AED` | Gradient start, primary accent |
| **Fuchsia** | `fuchsia-500` / `fuchsia-600` | `#D946EF` / `#C026D3` | Gradient middle |
| **Cyan** | `cyan-400` / `cyan-500` | `#22D3EE` / `#06B6D4` | Gradient end (used sparingly) |

**Common gradient patterns:**
```
bg-gradient-to-r from-violet-600 to-fuchsia-600         → Buttons, CTAs
bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500  → Announcement bar, accent lines
bg-gradient-to-br from-violet-500 to-fuchsia-600        → Icon backgrounds
bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400  → Gradient text (dark backgrounds)
```

### UI System Colors (OKLCH)

These are the shadcn/ui design tokens defined in `globals.css`.

#### Light Mode

| Token | OKLCH Value | Approx Hex | Usage |
|-------|------------|------------|-------|
| `--background` | `oklch(1 0 0)` | `#FFFFFF` | Page background |
| `--foreground` | `oklch(0.145 0 0)` | `#1A1A1A` | Body text |
| `--primary` | `oklch(0.205 0 0)` | `#2B2B2B` | Primary elements |
| `--primary-foreground` | `oklch(0.985 0 0)` | `#FAFAFA` | Text on primary |
| `--secondary` | `oklch(0.97 0 0)` | `#F5F5F5` | Secondary backgrounds |
| `--muted` | `oklch(0.97 0 0)` | `#F5F5F5` | Muted backgrounds |
| `--muted-foreground` | `oklch(0.556 0 0)` | `#737373` | Muted text |
| `--border` | `oklch(0.922 0 0)` | `#E5E5E5` | Borders, dividers |
| `--destructive` | `oklch(0.577 0.245 27.325)` | `#DC2626` | Error states |

#### Dark Mode

| Token | OKLCH Value | Approx Hex | Usage |
|-------|------------|------------|-------|
| `--background` | `oklch(0.145 0 0)` | `#1A1A1A` | Page background |
| `--foreground` | `oklch(0.985 0 0)` | `#FAFAFA` | Body text |
| `--primary` | `oklch(0.922 0 0)` | `#E5E5E5` | Primary elements |
| `--primary-foreground` | `oklch(0.205 0 0)` | `#2B2B2B` | Text on primary |
| `--secondary` | `oklch(0.269 0 0)` | `#3B3B3B` | Secondary backgrounds |
| `--muted` | `oklch(0.269 0 0)` | `#3B3B3B` | Muted backgrounds |
| `--muted-foreground` | `oklch(0.708 0 0)` | `#A3A3A3` | Muted text |
| `--border` | `oklch(1 0 0 / 10%)` | `#FFFFFF1A` | Borders, dividers |
| `--destructive` | `oklch(0.704 0.191 22.216)` | `#EF4444` | Error states |

### Accent Color (Focus States)

The phone input and interactive elements use violet for focus:
```
rgba(139, 92, 246, 1) → #8B5CF6 (violet-500)
```

---

## Typography

### Font Families

| Font | Variable | Usage |
|------|----------|-------|
| **Geist** | `--font-geist-sans` | All body text, headings, UI |
| **Geist Mono** | `--font-geist-mono` | Code blocks, technical content |

Both are loaded from Google Fonts via `next/font` for optimal performance.

### Type Scale (Tailwind defaults)

| Element | Classes | Example |
|---------|---------|---------|
| Hero heading | `text-5xl sm:text-6xl lg:text-7xl font-bold` | Landing page H1 |
| Section heading | `text-3xl sm:text-4xl font-bold` | Section titles |
| Sub-heading | `text-2xl font-bold` | Blog H2s |
| Large body | `text-xl` | Lead paragraphs |
| Body | `text-base` (16px) | Default text |
| Small / Caption | `text-sm` (14px) | Labels, metadata |

---

## Border Radius

Base radius: `0.625rem` (10px)

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 6px | Small elements (badges) |
| `--radius-md` | 8px | Inputs, small cards |
| `--radius-lg` | 10px | Cards, containers |
| `--radius-xl` | 14px | Large cards, modals |

Common overrides: `rounded-xl` (12px) for cards, `rounded-lg` (8px) for buttons.

---

## Animations

| Name | Duration | Easing | Usage |
|------|----------|--------|-------|
| `fade-in-up` | 0.8s | ease-out | Staggered entry animations |
| `float` | 6s | ease-in-out, infinite | Decorative floating elements |
| `gentle-pulse` | 4s | ease-in-out, infinite | Subtle attention draw |
| `slow-rotate` | 20s | linear, infinite | Background decorations |
| `gradient-shift` | — | — | Animated gradient backgrounds |

Tailwind classes: `.animate-fade-in-up`, `.animate-float`, `.animate-gentle-pulse`, `.animate-slow-rotate`

Use `[animation-delay:Xms]` for staggered fade-in-up sequences.

---

## Component Framework

- **UI Library:** shadcn/ui (New York style)
- **Icons:** Lucide React
- **Theme Switching:** next-themes (system, light, dark)
- **CSS Framework:** Tailwind CSS v4

---

## Gradient Text Pattern

For gradient-colored text on dark backgrounds:
```html
<span class="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
  Gradient Text
</span>
```

For gradient text on light backgrounds:
```html
<span class="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
  Gradient Text
</span>
```

---

## Button Styles

### Primary CTA
```html
<a class="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white rounded-lg px-8 py-4 font-semibold shadow-lg shadow-violet-500/50 hover:scale-105 transition-all">
  Call to Action
</a>
```

### Icon Badge
```html
<div class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-600 text-background">
  <Icon size={16} />
</div>
```

---

## Social / Meta

- **Locale:** `en_PH`
- **OG Image:** 1200×630px (`/public/og-image.png`)
- **Twitter Card:** `summary_large_image`

---

## Key Principles

1. **Violet-Fuchsia gradient is the brand signature** — use it consistently for primary actions and visual emphasis
2. **Neutral UI base** — the system colors are achromatic (no hue), letting the gradient accents pop
3. **Dark mode first mindset** — many pages (especially events) are designed primarily for dark mode
4. **Motion with purpose** — animations are subtle and respect `prefers-reduced-motion`
5. **Geist everywhere** — one font family for consistency; mono variant only for code
