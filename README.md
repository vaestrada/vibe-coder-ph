Vibe Coding School Philippines website built with Next.js 15, Tailwind CSS v4, and shadcn-ui structure.

## Development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 to view the site.

### Project structure

- `app/page.tsx` – landing page
- `app/courses/*` – courses and program pages
- `app/about`, `app/faq`, `app/contact` – core pages
- `app/projects`, `app/gallery` – project hub and gallery
- `app/challenges/ship-your-first-project` – 7-day micro-challenge
- `components/site/*` – layout components (navbar, footer)

### Notes

- Tailwind v4 is configured via `app/globals.css` using `@import "tailwindcss"`.
- Fonts use `next/font` (Geist).
