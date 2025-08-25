import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

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
    default: "Vibe Coding Philippines",
    template: "%s | Vibe Coding PH",
  },
  description:
    "Hands-on coding content and project briefs in the Philippines. Learn Web, AI, and Data—project-first, mentor-guided.",
  metadataBase: new URL("https://vibecoder.ph"),
  icons: { 
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Vibe Coding Philippines",
    description:
      "Hands-on coding content and project briefs in the Philippines. Learn Web, AI, and Data—project-first, mentor-guided.",
    url: "https://vibecoder.ph",
    siteName: "Vibe Coding PH",
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Coding Philippines",
    description:
      "Hands-on coding content and project briefs in the Philippines. Learn Web, AI, and Data—project-first, mentor-guided.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
  <Navbar />
  <main className="min-h-[calc(100dvh-64px-240px)]">{children}</main>
  <Footer />
      </body>
    </html>
  );
}
