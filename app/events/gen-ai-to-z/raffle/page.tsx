import { Metadata } from "next";
import RaffleClient from "./raffle-client";

export const metadata: Metadata = {
  title: "Raffle — Gen AI to Z",
  robots: { index: false, follow: false },
};

export default function RafflePage() {
  return <RaffleClient />;
}
