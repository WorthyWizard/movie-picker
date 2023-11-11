import { WatchlistMovieData } from "./transformed";

export interface MovieCommonQueryParams {
  language?: string;
  page?: number;
  region?: string;
}

export interface MovieQueryParams extends MovieCommonQueryParams {
  append_to_response?: string;
}

export interface MovieRequestData extends MovieQueryParams {
  id: number;
}

export interface WatchlistMoviesResponse {
  [key: string]: WatchlistMovieData;
}

export interface MovieSearchParams extends MovieCommonQueryParams {
  query: string;
  include_adult?: boolean;
  year?: number;
  primary_release_year?: number;
}
