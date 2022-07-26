import axios from 'axios';

import response from './response';

const client = axios.create({
  baseURL: 'https://api.thecatapi.com/v1'
});

client.interceptors.response.use(...response);

client.defaults.headers.common['x-api-key'] = process.env.NEXT_PUBLIC_CAT_API_KEY!;

export default client;