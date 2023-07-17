import client from '@/network';

import { QueryFilters } from './components/Filters';

const API = {
  images(params: QueryFilters): Promise<ResponseWithPaginator<ImageWithBreeds[]>> {
    return client.get('/gallery', {
      params: {
        ...params,
        breed_ids: params.breed,
        order: params.order?.toUpperCase()
      }
    });
  }
};

export default API;
