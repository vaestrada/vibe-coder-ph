Vibe Coding School Philippines website built with Next.js 15, Tailwind CSS v4, and shadcn-ui structure.
SMALL EDIT

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
- `scripts/upload-video.mjs` – reusable Supabase video upload script

### Video Upload Workflow

To add project videos to the featured projects gallery:

1. **Compress the video** (10-second preview recommended):
```bash
ffmpeg -i source-video.mp4 -ss 5 -t 10 -vf "scale=1280:-2" \
  -c:v libx264 -crf 32 -preset fast -c:a aac -b:a 128k \
  -movflags +faststart preview.mp4
```

2. **Upload to Supabase** (auto-deletes local file after upload):
```bash
node scripts/upload-video.mjs preview.mp4 [optional-destination-name]
```

3. **Update project in database**:
```sql
UPDATE projects 
SET media_url = 'https://qxxlzffjeruemlsbfefv.supabase.co/storage/v1/object/public/project-media/projects/preview.mp4'
WHERE title = 'Your Project Name';
```

**Note:** All `.mp4` files are gitignored and auto-deleted after successful upload to prevent bloating the repository.

### Notes

- Tailwind v4 is configured via `app/globals.css` using `@import "tailwindcss"`.
- Fonts use `next/font` (Geist).
- Video previews should be ≤1MB for optimal autoplay performance.
