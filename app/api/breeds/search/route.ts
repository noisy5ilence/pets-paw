import { NextResponse } from 'next/server';

import server from '@/network/server';

export async function GET(request: Request) {
  const breed = new URL(request.url).searchParams.get('breed');
  const data: BreedWithImage[] = await server.get('/breeds/search', {
    params: {
      q: breed
    }
  });

  return NextResponse.json(data);
}

export const revalidate = 0;
