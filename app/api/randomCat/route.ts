import { NextResponse } from "next/server";

import server from "@/network/server";

export async function GET() {
  const data: RandomCat[] = await server.get("/images/search", {
    params: {
      limit: 10,
    },
  });

  return NextResponse.json(data);
}

export const revalidate = 0;
