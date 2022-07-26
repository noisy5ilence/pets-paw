import { AxiosResponse } from 'axios';

export default [
  (response: AxiosResponse): AxiosResponse['data'] => response.data
];