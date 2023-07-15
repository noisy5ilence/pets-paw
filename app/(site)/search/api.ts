import client from '@/network';

const API = {
  search({ query }: { query: string }): Promise<Breed[]> {
    return client.get('/breeds/search', {
      params: {
        breed: query
      }
    });
  }
};

export default API;
