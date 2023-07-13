import axios, { AxiosResponse } from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000/api",
});

const handleResponse = (response: AxiosResponse): AxiosResponse["data"] =>
  response.data;

client.interceptors.response.use(handleResponse);

export default client;
