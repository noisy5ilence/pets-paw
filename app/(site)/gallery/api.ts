import client from '@/network';

import { QueryFilters } from './components/Filters';

const API = {
  images(params: QueryFilters): Promise<ResponseWithPaginator<ImageWithBreeds[]>> {
    return client.get('/images', {
      params: {
        ...params,
        has_breeds: params.breed ? 1 : 0,
        breed_ids: params.breed,
        order: params.order?.toUpperCase(),
        withHeaders: true
      }
    });
  }
};

export default API;
