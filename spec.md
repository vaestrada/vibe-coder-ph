# Website Technical Specification

A comprehensive checklist for building production-ready websites. Ensures proper SEO, metadata, performance, and UX from day one.

---

## 1. Required Files & Assets

**Must include in `/public`:**
- **OG Image**: 1200×630px PNG (use [og-playground.vercel.app](https://og-playground.vercel.app/))
- **Favicons**: favicon.ico (32×32), apple-touch-icon.png (180×180) - use [realfavicongenerator.net](https://realfavicongenerator.net/)
- **robots.txt**: Configure crawler permissions
- **sitemap.xml**: Auto-generate with `app/sitemap.ts` or use next-sitemap

**Must include in root:**
- **.env.example**: Template for environment variables
- **app/not-found.tsx**: Custom 404 page

---

## 2. SEO & Metadata Requirements

### Root Layout Metadata (app/layout.tsx)

**Must include:**
- `title.template` and `title.default`
- `description` (150-160 characters)
- `metadataBase` (full domain URL)
- `icons` (favicon, apple-touch-icon)
- `openGraph` (type, locale, url, siteName, title, description, images 1200×630)
- `twitter` (card: "summary_large_image", title, description, images)
- `robots` (index: true, follow: true)

### Every Page Needs

- Unique `title` and `description`
- `openGraph` and `twitter` metadata
- `alternates.canonical` URL
- Page-specific OG image (key pages only)

### Dynamic Pages (Blog/Products)

- Use `generateMetadata()` function
- Set `openGraph.type: "article"` for blog posts
- Include `publishedTime` and `authors` for articles
- Generate unique OG images per item

### robots.txt

```txt
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Sitemap: https://www.yourdomain.com/sitemap.xml
```

---

## 3. Performance Targets

### Core Web Vitals

**Target scores:**
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1
- First Contentful Paint (FCP): < 1.8s
- Time to Interactive (TTI): < 3.8s

### Optimization Checklist

- [ ] Use `next/image` for all images (automatic WebP/AVIF)
- [ ] Use `next/font` for Google Fonts
- [ ] Set `priority` on above-the-fold images
- [ ] Lazy load below-the-fold content
- [ ] Dynamic imports for heavy components
- [ ] Remove console logs in production (`next.config.ts`)
- [ ] Enable image optimization formats: WebP, AVIF

### Lighthouse Score Target

**Minimum scores:**
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: 100

---

## 4. Accessibility Requirements

### Must-Have Features

- [ ] Proper heading hierarchy (h1 → h2 → h3, no skipping)
- [ ] Alt text on all images (descriptive, not generic)
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] Visible focus indicators
- [ ] Color contrast ratio ≥ 4.5:1 (WCAG AA)
- [ ] Responsive text sizing (rem/em, not px)
- [ ] Form labels and error messages
- [ ] Skip to main content link (`<a href="#main-content">`)
- [ ] Lang attribute on `<html lang="en">`
- [ ] Semantic HTML (header, nav, main, footer)

### Mobile Requirements

- [ ] Viewport meta tag: `width=device-width, initial-scale=1, maximum-scale=5`
- [ ] Touch targets: minimum 44×44px
- [ ] Responsive design: 320px minimum width
- [ ] Dark mode support (using `next-themes`)

---

## 5. Security & Privacy

### next.config.ts Headers

**Minimum security headers:**
```typescript
async headers() {
  return [{
    source: "/:path*",
    headers: [
      { key: "X-DNS-Prefetch-Control", value: "on" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "origin-when-cross-origin" },
    ]
  }];
}
```

### Environment Variables

- [ ] Create `.env.example` with placeholder values
- [ ] Never commit `.env.local`
- [ ] Use `NEXT_PUBLIC_` prefix for client-side variables
- [ ] Secure API keys and secrets

### Privacy Compliance

**Required if collecting user data:**
- [ ] Cookie consent banner (if using tracking cookies)
- [ ] Privacy Policy page
- [ ] Terms of Service (if user-generated content)
- [ ] GDPR compliance (if serving EU users)

---

## 6. Analytics & Monitoring

**Choose at least one analytics provider:**
- Vercel Analytics (simplest for Next.js)
- Google Analytics 4 (GA4)
- Plausible/Fathom (privacy-focused)

**Recommended monitoring:**
- Sentry for error tracking
- Vercel Speed Insights for performance
- Lighthouse CI in deployment pipeline

---

## 7. Content Structure

### Navigation Requirements

**Primary navigation (header):**
- Home
- About
- Services/Products
- Blog/Resources
- Contact

**Footer navigation:**
- Quick links (duplicate main nav)
- Legal pages (Privacy, Terms)
- Social media links
- Copyright notice

### Required Pages

1. **Home** (`/`) - Value proposition, CTA, social proof
2. **About** (`/about`) - Mission, team, history
3. **Contact** (`/contact`) - Form, email, socials
4. **404** (`app/not-found.tsx`) - Friendly error, home link
5. **Legal** (if applicable) - Privacy, Terms, Cookies

### Structured Data (JSON-LD)

**Add Organization schema to homepage:**
- `@type: "Organization"`
- Include: name, url, logo, sameAs (social links)
- For blog posts, add Article schema with author, publishedTime, headline

---

## 8. Quality Assurance Checklist

**Run this checklist before every launch:**

### SEO & Metadata ✓
- [ ] Unique title and description for every page
- [ ] OG image (1200×630) for all key pages
- [ ] Twitter card metadata configured
- [ ] Canonical URLs set correctly
- [ ] sitemap.xml generated and submitted to Google Search Console
- [ ] robots.txt configured properly
- [ ] All meta tags validated with [metatags.io](https://metatags.io/)

### Performance ✓
- [ ] Lighthouse Performance score > 90
- [ ] All images using `next/image` (WebP/AVIF auto-enabled)
- [ ] Fonts loaded via `next/font`
- [ ] No console errors in production build
- [ ] Above-the-fold images have `priority` prop
- [ ] Heavy components use dynamic imports
- [ ] Core Web Vitals pass (use [PageSpeed Insights](https://pagespeed.web.dev/))

### Accessibility ✓
- [ ] WCAG AA compliant (test with [WAVE](https://wave.webaim.org/))
- [ ] Keyboard navigation functional (Tab, Enter, Escape)
- [ ] Screen reader tested (VoiceOver/NVDA)
- [ ] Color contrast ≥ 4.5:1 (check with browser DevTools)
- [ ] All images have descriptive alt text
- [ ] Forms have labels and error messages
- [ ] Skip to main content link present

### Security ✓
- [ ] HTTPS enabled (auto with Vercel)
- [ ] Security headers configured in `next.config.ts`
- [ ] No API keys exposed in client code
- [ ] `.env.local` not committed to git
- [ ] All external links have `rel="noopener noreferrer"`
- [ ] Dependencies up to date (`npm outdated`)

### UX/Design ✓
- [ ] Mobile responsive (test 320px to 1920px)
- [ ] Dark mode functional
- [ ] Loading states for async actions
- [ ] Error states handled gracefully
- [ ] Forms have client + server validation
- [ ] 404 page styled and functional
- [ ] Touch targets ≥ 44×44px on mobile

### Analytics & Monitoring ✓
- [ ] Analytics installed (Vercel/GA4/Plausible)
- [ ] Error monitoring configured (Sentry)
- [ ] Performance monitoring active (Vercel Speed Insights)
- [ ] Key conversion events tracked
- [ ] Google Search Console verified

### Deployment ✓
- [ ] `npm run build` succeeds without errors
- [ ] `npm run lint` passes
- [ ] Environment variables configured in deployment platform
- [ ] Domain DNS configured correctly
- [ ] SSL certificate active
- [ ] Preview deployments tested

---

## Tools & Resources

### Testing & Validation
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/) - Chrome DevTools (Cmd+Shift+I)
- [PageSpeed Insights](https://pagespeed.web.dev/) - Google's performance tool
- [WAVE](https://wave.webaim.org/) - Accessibility checker
- [axe DevTools](https://www.deque.com/axe/devtools/) - Browser extension for a11y

### Metadata & Assets
- [OG Image Playground](https://og-playground.vercel.app/) - Generate Open Graph images
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Generate all favicon sizes
- [Meta Tags](https://metatags.io/) - Preview and validate meta tags

### Performance
- [Bundlephobia](https://bundlephobia.com/) - Check package size before installing
- [Squoosh](https://squoosh.app/) - Optimize images manually
- [WebPageTest](https://www.webpagetest.org/) - Advanced performance testing

---

## Reference Implementation

See Vibe Coders PH as a reference:
- [Root Layout](app/layout.tsx) - Complete metadata setup
- [Page Example](app/sponsor/page.tsx) - Page-specific metadata
- [Next Config](next.config.ts) - Security headers & optimization

---

## Version History

- **v1.0** (2025-10-15): Initial specification

---

**Note:** This spec is framework-agnostic in principle but examples use Next.js 15. Adapt patterns to your framework (Remix, Astro, SvelteKit, etc.).
