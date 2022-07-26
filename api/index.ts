import { SuccessResponse, Favourite, Vote } from '@/models';
import client from '@/network/index';

export const API = {
  votes: {
    get({ uid }: { uid: string }): Promise<Vote[]> {
      return client.get('/votes', { params: { sub_id: uid } });
    },
    vote({ catId, uid, vote }: { catId: string; uid: string; vote: number; }): Promise<SuccessResponse> {
      return client.post('/votes', { image_id: catId, sub_id: uid, value: vote });
    }
  },
  favourites: {
    get({ uid }: { uid: string }): Promise<Favourite[]> {
      return client.get('/favourites', { params: { sub_id: uid } });
    },
    fav({ catId, uid }: { catId: string; uid: string; }): Promise<SuccessResponse> {
      return client.post('/favourites', { image_id: catId, sub_id: uid });
    },
    unFav({ favouriteId }: { favouriteId: number; }): Promise<SuccessResponse> {
      return client.delete(`/favourites/${favouriteId}`);
    }
  }
};