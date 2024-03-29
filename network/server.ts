import axios, { AxiosResponse } from 'axios';
import { cookies } from 'next/headers';

export const server = axios.create({
  baseURL: 'https://api.thecatapi.com/v1'
});

const handleResponse = (response: AxiosResponse): AxiosResponse['data'] => {
  if (!response.config?.params?.withHeaders) return response.data;

  return { data: response.data, headers: response.headers };
};

server.interceptors.response.use(handleResponse);

server.defaults.headers.common['x-api-key'] = process.env.CAT_API_KEY!;

server.interceptors.request.use(async (request) => {
  const cookieStore = cookies();

  request.headers.set('Cookie', cookieStore.toString());

  return request;
});

export default server;
