import { RandomCat } from './models';
import client from '@/network';

export const API = {
  fetchRandomCat(): Promise<Array<RandomCat>> {
    return client.get('/images/search');
  }
};