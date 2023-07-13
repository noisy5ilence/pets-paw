import type { Metadata } from "next";
import { title } from "@/constants/title";

export const metadata: Metadata = {
  title: `Breeds - ${title}`,
};

export default function Breed({
  params: { breed },
}: {
  params: { breed?: string };
}) {
  console.log(breed);
  return <div>Breed: </div>;
}
