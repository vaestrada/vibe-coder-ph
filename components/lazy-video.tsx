"use client";

import { useRef, useState, useEffect } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string | null;
  alt: string;
  className?: string;
  /** Gradient fallback when no poster image is available */
  fallbackGradient?: string;
}

/**
 * LazyVideo: Autoplay-on-scroll video component.
 *
 * Industry-standard behavior (YouTube, Instagram, Twitter):
 * - Shows a poster/gradient placeholder initially
 * - When the user scrolls the video into view, it starts loading and autoplays
 * - When scrolled out of view, it pauses (saves bandwidth + battery)
 * - Video source is only set after first intersection (true lazy loading)
 *
 * Combined with the Vercel CDN proxy, this eliminates Supabase egress for videos
 * that users never scroll to.
 */
export default function LazyVideo({
  src,
  poster,
  alt,
  className = "",
  fallbackGradient = "from-violet-600/20 via-fuchsia-600/20 to-sky-500/20",
}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Mark as entered so we load the video source
          setHasEnteredView(true);

          // Play when visible
          const video = videoRef.current;
          if (video && video.readyState >= 2) {
            video.play().catch(() => {});
          }
        } else {
          // Pause when scrolled away to save bandwidth
          videoRef.current?.pause();
        }
      },
      {
        // Start loading a bit before the video is fully visible
        rootMargin: "100px",
        threshold: 0.15,
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Once video data is loaded and we're in view, play it
  const handleCanPlay = () => {
    const container = containerRef.current;
    if (!container) return;

    // Check if currently intersecting
    const rect = container.getBoundingClientRect();
    const isVisible =
      rect.top < window.innerHeight + 100 && rect.bottom > -100;

    if (isVisible) {
      videoRef.current?.play().catch(() => {});
    }
  };

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {hasEnteredView ? (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="auto"
          poster={poster || undefined}
          aria-label={alt}
          onCanPlay={handleCanPlay}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        /* Lightweight placeholder until video scrolls into view */
        <div className="w-full h-full">
          {poster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={poster}
              alt={alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div
              className={`w-full h-full bg-gradient-to-tr ${fallbackGradient}`}
            />
          )}
        </div>
      )}
    </div>
  );
}
