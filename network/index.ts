import axios, { AxiosResponse } from 'axios';

const client = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_PETS_PAW_BASE}/api`,
});

const handleResponse = (response: AxiosResponse): AxiosResponse['data'] =>
  response.data;

client.interceptors.response.use(handleResponse);

export default client;
