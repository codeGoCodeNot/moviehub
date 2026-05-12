export type Genre = {
  id: number;
  name: string;
};

export type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type BelongsToCollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

export type Movie = {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  tagline: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  runtime: number;
  budget: number;
  revenue: number;
  vote_average: number;
  vote_count: number;
  popularity: number;
  homepage: string;
  imdb_id: string;
  status: string;
  video: boolean;
  adult: boolean;
  original_language: string;
  origin_country: string[];
  genres: Genre[];
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  spoken_languages: SpokenLanguage[];
  belongs_to_collection: BelongsToCollection | null;
};

export type MovieEndpoint =
  | "popular"
  | "top_rated"
  | "upcoming"
  | "now_playing";
