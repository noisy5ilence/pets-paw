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
  weight: Weight;
  id: string;
  name: string;
  vetstreet_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  alt_names: string;
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
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
  image: Image;
}

interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
}

interface GridImage {
  image: Image | undefined;
  name: string;
  id: number | string;
}

interface Weight {
  imperial: string;
  metric: string;
}

interface RandomPet {
  breeds: Breed[];
  id: string;
  url: string;
  width: number;
  height: number;
}
