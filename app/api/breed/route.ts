import { NextResponse } from 'next/server';

import server from '@/network/server';

export async function GET(request: Request) {
  const breed = new URL(request.url).searchParams.get('breed');
  const data: Breed = await server.get('/images/search', {
    params: {
      limit: 5,
      breed_ids: breed,
      has_breeds: 1
    }
  });

  return NextResponse.json(data);
}
