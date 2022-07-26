export interface SuccessResponse {
  message: string;
  id: number;
}

export interface Vote extends Log {
  country_code: string;
}

export interface Favourite extends Log {
  user_id:    string;
}

export interface Log {
  id:         number;
  sub_id:     string;
  created_at: Date;
  image_id:   string;
  image:      Image;
  value: 1 | 0 | -1;
}

export interface Breed {
  alt_names:          string;
  experimental:       number;
  hairless:           number;
  hypoallergenic:     number;
  id:                 string;
  life_span:          string;
  name:               string;
  natural:            number;
  origin:             string;
  rare:               number;
  reference_image_id: string;
  rex:                number;
  short_legs:         number;
  suppressed_tail:    number;
  temperament:        string;
  weight_imperial:    string;
  wikipedia_url:      string;
}

export interface Image {
  id:  string;
  url: string;
}