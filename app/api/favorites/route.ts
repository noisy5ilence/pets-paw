import { NextResponse } from 'next/server';

import uid from '@/libs/uid';
import server from '@/network/server';

export async function GET() {
  const sub_id = uid();

  const data: Favorite[] = await server.get('/favourites', {
    params: { sub_id, limit: false, order: 'DESC' }
  });

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const sub_id = uid();
  const body = await request.json();

  const data: Favorite = await server.post('/favourites', {
    ...body,
    sub_id
  });

  return NextResponse.json(data);
}

export async function DELETE(request: Request) {
  const favoriteId = new URL(request.url).searchParams.get('favoriteId');

  const data: Favorite = await server.delete(`/favourites/${favoriteId}`);

  return NextResponse.json(data);
}

export const revalidate = 0;
