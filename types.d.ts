type Theme = 'light' | 'dark';

interface SuccessResponse {
  message: string;
  id: number;
}

interface Vote extends Log {
  country_code: string;
}

interface Favorite extends Log {
  user_id: string;
}

interface Log {
  id: number;
  sub_id: string;
  created_at: Date;
  image_id: string;
  image: Omit<Image, 'width' | 'height'>;
  value?: 1 | 0;
}

interface Breed {
  weight: Weight;
  id: string;
  name: string;
  cfa_url?: string;
  vetstreet_url?: string;
  vcahospitals_url?: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap?: number;
  alt_names?: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url?: string;
  hypoallergenic: number;
  reference_image_id?: string;
  cat_friendly?: number;
  bidability?: number;
}

interface BreedWithImage extends Breed {
  image?: Image;
}

interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
}

interface ImageWithName extends Image {
  name: string;
}

interface Paginator {
  total: number;
  page: number;
  limit: number;
}

interface ResponseWithHeaders<D> {
  data: D;
  headers: Record<string, string>;
}

interface ResponseWithPaginator<D> {
  paginator: Paginator;
  data: D;
}

interface ImageWithBreeds extends Image {
  breeds: Breed[];
}

interface Weight {
  imperial: string;
  metric: string;
}
