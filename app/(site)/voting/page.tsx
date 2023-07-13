import type { Metadata } from "next";
import { title } from "@/constants/title";

import VotingContainer from "./container";

export const metadata: Metadata = {
  title: `Voting - ${title}`,
};

export default function Voting() {
  return <VotingContainer />;
}
