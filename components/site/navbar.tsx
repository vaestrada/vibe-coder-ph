"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center gap-4">
          <Link href="/" className="flex items-center gap-3 font-semibold">
            <Image src="/logo.svg" alt="Vibe Coding Philippines" width={144} height={36} className="h-9 w-auto" />
          </Link>

          <div className="flex-1" />

          <nav className="hidden md:flex items-center gap-1 text-sm mr-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-colors ${
                  pathname === l.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2" />
        </div>
      </div>
    </header>
  );
}
