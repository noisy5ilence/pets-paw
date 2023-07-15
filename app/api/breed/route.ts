import { NextResponse } from 'next/server';

import server from '@/network/server';

export async function GET(request: Request) {
  const breed = new URL(request.url).searchParams.get('favoriteId');
  const data: Breed = await server.get(`/breeds/${breed}`);

  return NextResponse.json(data);
}
