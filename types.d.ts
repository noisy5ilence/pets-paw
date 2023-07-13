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
  image: Image;
  value: 1 | 0 | -1;
}

interface Breed {
  alt_names: string;
  experimental: number;
  hairless: number;
  hypoallergenic: number;
  id: string;
  life_span: string;
  name: string;
  natural: number;
  origin: string;
  rare: number;
  reference_image_id: string;
  rex: number;
  short_legs: number;
  suppressed_tail: number;
  temperament: string;
  weight_imperial: string;
  wikipedia_url: string;
}

interface Image {
  id: string;
  url: string;
}

interface Option<V = string> {
  value: V;
  label: string;
}

interface RandomPet {
  breeds: Breed[];
  id: string;
  url: string;
  width: number;
  height: number;
}
