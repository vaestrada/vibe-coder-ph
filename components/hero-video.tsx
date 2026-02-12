"use client";

import { useRef, useEffect } from "react";

interface HeroVideoProps {
  src: string;
  alt: string;
}

/**
 * HeroVideo: Autoplay hero video optimized for bandwidth.
 *
 * - Uses `preload="metadata"` so only a few KB load initially (poster frame + duration)
 * - Starts playback via Intersection Observer (immediate for above-the-fold)
 * - Served through Vercel CDN proxy (100 GB/mo free) instead of Supabase (5 GB/mo)
 * - Muted + playsInline required for autoplay on mobile
 */
export default function HeroVideo({ src, alt }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Use IntersectionObserver to start playback only when visible
    // For the hero this fires immediately, but it prevents background tabs from streaming
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay blocked by browser — silent fail is fine
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="w-full h-full object-cover"
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={alt}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
