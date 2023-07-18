import client from '@/network';

const API = {
  search({ query }: { query: string }): Promise<BreedWithImage[]> {
    return client.get('/breeds/search', {
      params: {
        breed: query
      }
    });
  }
};

export default API;
