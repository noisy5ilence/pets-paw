import axios, { AxiosResponse } from 'axios';
import { cookies } from 'next/headers';

export const server = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
});

const handleResponse = (response: AxiosResponse): AxiosResponse['data'] =>
  response.data;

server.interceptors.response.use(handleResponse);

server.defaults.headers.common['x-api-key'] =
  process.env.NEXT_PUBLIC_CAT_API_KEY!;

server.interceptors.request.use(async (request) => {
  const cookieStore = cookies();

  request.headers.set('Cookie', cookieStore.toString());

  return request;
});

export default server;
