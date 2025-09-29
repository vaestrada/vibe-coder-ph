import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Vibe Coders Philippines",
    default: "Vibe Coders Philippines",
  },
  description:
    "Hands-on coding content and project briefs in the Philippines. Learn Web, AI, and Data—project-first, mentor-guided.",
  metadataBase: new URL("https://vibe-coder-ph.vercel.app"),
  icons: { 
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Vibe Coders Philippines",
    description:
      "Hands-on coding content and project briefs in the Philippines. Learn Web, AI, and Data—project-first, mentor-guided.",
    url: "https://vibe-coder-ph.vercel.app",
    siteName: "Vibe Coders PH",
    type: "website",
    locale: "en_PH",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vibe Coders Philippines - Hands-on coding education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Coders Philippines",
    description:
      "Hands-on coding content and project briefs in the Philippines. Learn Web, AI, and Data—project-first, mentor-guided.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-[calc(100dvh-64px-240px)]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
