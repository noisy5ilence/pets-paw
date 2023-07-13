import client from '@/network';

const API = {
  randomCats(): Promise<RandomPet[]> {
    return client.get('/randomCat');
  },
  favorites: {
    list(): Promise<Favorite[]> {
      return client.get('/favorites');
    },
    add({ petId }: { petId: string }): Promise<SuccessResponse> {
      return client.post('/favorites', { image_id: petId });
    },
    delete({ favoriteId }: { favoriteId: string }) {
      return client.delete('/favorites', {
        params: {
          favoriteId,
        },
      });
    },
  },
  votes: {
    vote({
           petId,
      vote,
    }: {
      petId: string;
      vote: number;
    }): Promise<SuccessResponse> {
      return client.post('/votes', { image_id: petId, value: vote });
    },
    list(): Promise<Vote[]> {
      return client.get('/votes');
    },
  },
};

export default API;