import { NextResponse } from "next/server";

import server from "@/network/server";
import uid from "@/libs/uid";

export async function GET() {
  const sub_id = uid();

  const data: Vote[] = await server.get("/votes", {
    params: { sub_id, limit: false },
  });

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const sub_id = uid();
  const body = await request.json();

  const data: Vote = await server.post("/votes", { ...body, sub_id });

  return NextResponse.json(data);
}

export const revalidate = 0;
