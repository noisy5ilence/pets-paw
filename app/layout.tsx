import "@/styles/global.css";

import type { Metadata } from "next";
import { cookies } from "next/headers";

import { title } from "@/constants/title";

import Header from "@/components/Header";
import Aside from "@/components/Aside";

export const metadata: Metadata = {
  title,
  description: "CatsPaw. For cat lovers from a cat lover.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body data-theme={cookies().get("theme")?.value || "light"}>
        <Aside header={<Header />} />

        {children}
      </body>
    </html>
  );
}
