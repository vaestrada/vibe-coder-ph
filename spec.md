# Vibe Coders Philippines Website Specification

**Project**: Community Website for Vibe Coders Philippines  
**Domain**: vibecoders.ph  
**Tech Stack**: Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion  
**Target**: Filipino developers, beginners to experienced  

## Project Scope

### Core Purpose
Build a community platform for Vibe Coders Philippines that promotes project-first learning, mentorship, and real-world skill development in Web Development, AI Engineering, and Data Analytics.

### Success Metrics
- **Engagement**: 100+ active community members within 6 months
- **Content**: 20+ tutorial blog posts and project guides
- **Programs**: 3 structured learning paths with hands-on projects
- **Community**: Weekly demo nights with consistent attendance
- **Placement**: Track member success stories and job placements

## Database Schema

### Blog Posts
```typescript
interface BlogPost {
  slug: string;           // URL-friendly identifier
  title: string;          // Article title
  excerpt: string;        // Short description
  content: string;        // Full HTML content
  author: string;         // Author name
  publishedAt: string;    // ISO date string
  readTime?: string;      // Auto-calculated or manual
  category: string;       // Content category
  tags: string[];         // Topic tags
  featured?: boolean;     // Featured flag
}
```

### User Testimonials (Future)
```typescript
interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  featured: boolean;
}
```

### Program Enrollment (Future)
```typescript
interface Enrollment {
  id: string;
  userId: string;
  programId: string;
  status: 'active' | 'completed' | 'paused';
  progress: number;
  enrolledAt: string;
}
```

## Core Features

### 1. Landing Page
**Purpose**: Convert visitors to community members and program enrollees
- Hero section with value proposition
- Program overview cards (Web Dev, AI, Data)
- Community testimonials
- Video introduction
- Clear CTAs for enrollment/projects

### 2. Program Pages
**Structure**: 3 main tracks
- **Web Development**: Next.js, TypeScript, Full-stack
- **AI Engineering**: RAG, LLM apps, MLOps
- **Data Analytics**: Python, SQL, BI dashboards

Each program includes:
- Curriculum overview
- Project portfolio examples
- Learning outcomes
- Mentor information
- Enrollment process

### 3. Blog System
**Purpose**: Educational content and SEO
- Dynamic blog posts from centralized data
- Category filtering (Process, Web Dev, AI, Data)
- Auto-calculated read times
- SEO-optimized pages
- Social sharing capabilities

### 4. Projects Hub
**Purpose**: Showcase student work and provide hands-on challenges
- Project gallery with live demos
- 7-day micro-challenges
- Code repositories and walkthroughs
- Difficulty levels and tech stacks

### 5. Community Pages
- About page with mission/values
- Contact and application forms
- FAQ section
- Gallery of member achievements
- Terms and Privacy pages

## Technical Architecture

### Frontend
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom design system
- **Animations**: Framer Motion for micro-interactions
- **Icons**: Lucide React
- **Themes**: Dark/light mode support

### Content Management
- **Blog Data**: Centralized in `lib/blog-data.ts`
- **Static Content**: Markdown files or TypeScript objects
- **Images**: Next.js Image optimization
- **SEO**: Built-in Next.js metadata API

### Performance
- **Build**: Turbopack for faster development
- **Fonts**: Next.js font optimization (Geist)
- **Images**: WebP/AVIF with responsive sizing
- **Caching**: Static generation where possible

### Deployment
- **Platform**: Vercel (recommended) or Netlify
- **Domain**: vibecoders.ph with custom domain setup
- **SSL**: Automatic HTTPS
- **Analytics**: Google Analytics or Vercel Analytics

## User Experience

### Navigation Flow
1. **Landing** → Programs → Individual Program Pages
2. **Landing** → Projects → Project Details
3. **Landing** → Blog → Individual Posts
4. **Any Page** → About/Contact/FAQ

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interactions
- Accessible navigation

### Performance Targets
- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Green for all pages
- **Page Load**: <3 seconds on mobile
- **Bundle Size**: <500KB initial load

## Money Rules

### Revenue Streams
1. **Program Enrollment**: Paid courses with mentor support
2. **Community Membership**: Premium Discord access
3. **Workshops**: Live coding sessions and masterclasses
4. **Corporate Training**: Custom programs for companies
5. **Affiliate Partners**: Tool recommendations and partnerships

### Pricing Strategy
- **Free**: Blog content, basic community access, sample projects
- **Basic Programs**: ₱5,000-15,000 per track with mentor support
- **Premium**: ₱20,000+ with 1:1 mentoring and job placement support
- **Corporate**: Custom pricing for team training

## Acceptance Tests

### Core Functionality
- [ ] Landing page loads and converts
- [ ] All program pages accessible and informative
- [ ] Blog system displays posts with correct metadata
- [ ] Contact forms submit successfully
- [ ] Mobile experience is fully functional
- [ ] Dark/light themes work correctly

### Content Quality
- [ ] All links work (no 404s)
- [ ] Images load with proper optimization
- [ ] SEO metadata is complete and accurate
- [ ] Content is error-free and professionally written

### Performance
- [ ] Lighthouse scores 90+ on all pages
- [ ] Page load times under 3 seconds
- [ ] Smooth animations on all devices
- [ ] No console errors or warnings

### Community Features
- [ ] Testimonials display correctly
- [ ] Project gallery showcases work effectively
- [ ] Application/contact forms work
- [ ] Social media integration functional

## Future Enhancements

### Phase 2 Features
- User accounts and authentication
- Progress tracking for enrolled students
- Live chat/Discord integration
- Payment processing for programs
- Certificate generation

### Phase 3 Features
- Video course hosting
- Interactive coding challenges
- Peer review system
- Job board for members
- Alumni network features

## Maintenance & Updates

### Regular Tasks
- Weekly blog post publication
- Monthly program content updates
- Quarterly feature releases
- Ongoing community engagement
- Performance monitoring

### Content Strategy
- Educational blog posts (weekly)
- Student success stories (monthly)
- Industry insights and trends
- Technical tutorials and guides
- Community highlights and events

---

**Last Updated**: January 2025  
**Next Review**: February 2025  
**Owner**: Jayson Cunanan & Vibe Coders Philippines Team