export type Genre = {
  id: number;
  name: string;
};

export type Creator = {
  id: number;
  name: string;
  credit_id: string;
  gender: number;
  profile_path: string | null;
};

export type Network = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

export type Season = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
};

export type Episode = {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  air_date: string;
  episode_number: number;
  runtime: number;
  season_number: number;
  still_path: string;
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

export type TV = {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  first_air_date: string;
  last_air_date: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  homepage: string;
  in_production: boolean;
  languages: string[];
  origin_country: string[];
  original_language: string;
  status: string;
  tagline: string;
  type: string;
  genre_ids: number[];
  genres: Genre[];
  created_by: Creator[];
  networks: Network[];
  seasons: Season[];
  episode_run_time: number[];
  number_of_episodes: number;
  number_of_seasons: number;
  last_episode_to_air: Episode | null;
  next_episode_to_air: Episode | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  spoken_languages: SpokenLanguage[];
};

export type TVEndpoint =
  | "airing_today"
  | "on_the_air"
  | "popular"
  | "top_rated";
