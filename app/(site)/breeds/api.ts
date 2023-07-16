import client from '@/network';

const API = {
  breeds(): Promise<Breed[]> {
    return client.get('/breeds');
  },
  breed({ breed }: { breed: string }): Promise<ImageWithBreeds[]> {
    return client.get('/breed', {
      params: {
        breed
      }
    });
  }
};

export default API;
