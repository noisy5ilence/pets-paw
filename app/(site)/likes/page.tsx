import type { Metadata } from "next";
import { title } from "@/constants/title";
import Container from "./container";

export const metadata: Metadata = {
  title: `Likes - ${title}`,
};

export default function Likes() {
  return <Container />;
}
