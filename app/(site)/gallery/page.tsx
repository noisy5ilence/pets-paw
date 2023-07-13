import type { Metadata } from "next";
import { title } from "@/constants/title";

export const metadata: Metadata = {
  title: `Gallery - ${title}`,
};

export default function Gallery() {
  return <div>Gallery</div>;
}
