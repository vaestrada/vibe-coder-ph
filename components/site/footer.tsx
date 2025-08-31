import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Vibe Coders Philippines" width={40} height={40} className="h-10 w-10" />
              <span className="font-semibold text-lg">Vibe Coders Philippines</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Project-first coding content and community. Learn by shipping real projects.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <div className="font-medium mb-3">Programs</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/courses/web-dev" className="hover:text-foreground">Web Development</Link></li>
                <li><Link href="/courses/ai-engineering" className="hover:text-foreground">AI Engineering</Link></li>
                <li><Link href="/courses/data" className="hover:text-foreground">Data & Analytics</Link></li>
              </ul>
            </div>

            <div>
              <div className="font-medium mb-3">Company</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground">About</Link></li>
                <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
              </ul>
            </div>

            <div>
              <div className="font-medium mb-3">Legal</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/terms" className="hover:text-foreground">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-foreground">Privacy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Vibe Coders Philippines. All rights reserved.</p>
          <p>Made in the PH 🇵🇭</p>
        </div>
      </div>
    </footer>
  );
}
