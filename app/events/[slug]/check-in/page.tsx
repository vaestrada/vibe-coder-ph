import { Metadata } from "next";
import CheckInGate from "./check-in-gate";

export const metadata: Metadata = {
  title: "Event Check-In",
  robots: { index: false, follow: false },
};

export default async function CheckInPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <CheckInGate eventSlug={slug} />;
}
