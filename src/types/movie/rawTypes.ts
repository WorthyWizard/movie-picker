export interface MovieWithDetails
  extends Omit<MovieData, "genre_ids">,
    MovieDetails {}

export interface MovieData {
  id: number;
  adult: boolean;
  poster_path: string | null;
  overview: string;
  release_date: string;
  genre_ids: GenreId[];
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetails {
  belongs_to_collection: null | object;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  imdb_id: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguage[];
  status: MovieStatus;
  tagline: string | null;
}

export interface MoviesDataByPage {
  page: number;
  results: MovieData[];
  total_pages: number;
  total_results: number;
}

export type MovieStatus =
  | "Rumored"
  | "Planned"
  | "In Production"
  | "Post Production"
  | "Released"
  | "Canceled";

export interface Genre {
  id: number;
  name: string;
}

export type GenreId = number;

// production
export interface ProductionCompany {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

// language
export interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}

// images
export interface Image {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string | null;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Images {
  id: number;
  backdrops: Image[];
  posters: Image[];
}

export type ImagesWithoutId = Omit<Images, "id">;

// videos
export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface Videos {
  id: number;
  results: Video[];
}

export type VideosWithoutId = Omit<Videos, "id">;

// release dates
export interface ReleaseDate {
  certification: string;
  iso_639_1: string;
  release_date: string;
  type: number;
  note: string;
}

export interface ReleaseDatesByCountry {
  iso_3166_1: string;
  release_dates: ReleaseDate[];
}

export interface ReleaseDates {
  id: number;
  results: ReleaseDatesByCountry[];
}

export type ReleaseDatesWithoutId = Omit<ReleaseDates, "id">;

// credits
export interface ProductionMember {
  adult: boolean;
  gender: number | string;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
}

export interface CastMember extends ProductionMember {
  cast_id: number;
  character: string;
  order: number;
}

export interface CrewMember extends ProductionMember {
  department: string;
  job: string;
}

export interface Credits {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
}

export type CreditsWithoutId = Omit<Credits, "id">;

// watch providers
export interface ProviderWatchOptions {
  link: string;
  flatrate?: ProviderWatchOption[];
  rent?: ProviderWatchOption[];
  buy?: ProviderWatchOption[];
  flatrate_and_buy?: ProviderWatchOption[];
}

export interface ProviderWatchOption {
  display_priority: number;
  logo_path: string;
  provider_id: number;
  provider_name: string;
}

export interface WatchProviders {
  id: number;
  results: {
    [key: string]: ProviderWatchOptions;
  };
}

export type WatchProvidersWithoutId = Omit<WatchProviders, "id">;
