import { NextResponse } from 'next/server';

import server from '@/network/server';

export async function GET(request: Request) {
  const params = Object.fromEntries(new URL(request.url).searchParams.entries());
  const response: ResponseWithHeaders<ImageWithBreeds[]> = await server.get('/images/search', {
    params: {
      has_breeds: 1,
      ...params
    }
  });

  return NextResponse.json(
    !params.withHeaders
      ? response
      : {
          data: response.data,
          paginator: {
            total: response.headers['pagination-count'],
            limit: response.headers['pagination-limit'],
            page: response.headers['pagination-page']
          }
        }
  );
}

export const revalidate = 0;
