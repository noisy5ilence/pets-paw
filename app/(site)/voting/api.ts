import client from '@/network';

const API = {
  randomImages(): Promise<ImageWithBreeds[]> {
    return client.get('/images', {
      params: {
        limit: 10
      }
    });
  },
  favorites: {
    list(): Promise<Favorite[]> {
      return client.get('/favorites');
    },
    add({ image_id }: { image_id: string }): Promise<SuccessResponse> {
      return client.post('/favorites', { image_id });
    },
    delete({ favoriteId }: { favoriteId: number }) {
      return client.delete('/favorites', {
        params: {
          favoriteId
        }
      });
    }
  },
  votes: {
    vote({ image_id, vote }: { image_id: string; vote: number }): Promise<SuccessResponse> {
      return client.post('/votes', { image_id, value: vote });
    },
    list(): Promise<Vote[]> {
      return client.get('/votes');
    }
  }
};

export default API;
