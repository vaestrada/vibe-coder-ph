import { Metadata } from "next";
import FeedbackForm from "./feedback-form";

export const metadata: Metadata = {
  title: "Event Feedback — Gen AI to Z | Vibe Coders PH",
  description: "Share your experience at the Gen AI to Z AI Career Summit. Your feedback helps us build better events for the Filipino tech community.",
  openGraph: {
    title: "Event Feedback — Gen AI to Z",
    description: "Share your experience at Gen AI to Z. Your feedback helps us build better events.",
    type: "website",
    url: "https://www.vibecoders.ph/events/gen-ai-to-z/feedback",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

export default function FeedbackPage() {
  return <FeedbackForm />;
}
