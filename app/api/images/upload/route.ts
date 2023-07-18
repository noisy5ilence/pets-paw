import { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

import uid from '@/libs/uid';
import server from '@/network/server';

export async function POST(request: Request) {
  const sub_id = uid();

  const requestData = await request.formData();

  const form = new FormData();

  form.append('file', requestData.get('file') as File);
  form.append('sub_id', sub_id);

  return server
    .post('/images/upload', form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((data) => NextResponse.json(data))
    .catch((error: AxiosError) => NextResponse.json(error.response?.data, { status: 400 }));
}
