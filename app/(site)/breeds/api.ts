import client from '@/network';

const API = {
  breeds(): Promise<BreedWithImage[]> {
    return client.get('/breeds');
  },
  breed({ breed }: { breed: string }): Promise<ImageWithBreeds[]> {
    return client.get('/images', {
      params: {
        limit: 5,
        breed_ids: breed,
        has_breeds: 1
      }
    });
  }
};

export default API;
