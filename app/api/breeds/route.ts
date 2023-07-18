import { NextResponse } from 'next/server';

import server from '@/network/server';

export async function GET() {
  const data: BreedWithImage[] = await server.get('/breeds', {
    params: { limit: false }
  });

  return NextResponse.json(data);
}

export const revalidate = 3600;
