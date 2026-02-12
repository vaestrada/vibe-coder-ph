import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const SUPABASE_STORAGE_PREFIX =
  "https://qxxlzffjeruemlsbfefv.supabase.co/storage/v1/object/public/project-media/";

/**
 * Rewrites Supabase Storage URLs to use our Vercel proxy (`/media/...`).
 * This serves files through Vercel's CDN (100 GB/mo free) instead of
 * Supabase's cached egress (5 GB/mo free), drastically reducing Supabase costs.
 *
 * Non-Supabase URLs and null values are returned as-is.
 */
export function proxyMediaUrl(url: string | null): string | null {
  if (!url) return null;
  if (url.startsWith(SUPABASE_STORAGE_PREFIX)) {
    return "/media/" + url.slice(SUPABASE_STORAGE_PREFIX.length);
  }
  return url;
}
