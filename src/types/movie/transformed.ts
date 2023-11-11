import {
  CreditsWithoutId,
  ImagesWithoutId,
  MovieData,
  MoviesDataByPage,
  MovieWithDetails,
  ReleaseDatesWithoutId,
  VideosWithoutId,
  WatchProvidersWithoutId,
} from "./data";

export interface MovieFullData extends MovieWithDetails {
  images: ImagesWithoutId;
  videos: VideosWithoutId;
  release_dates: ReleaseDatesWithoutId;
  credits: CreditsWithoutId;
  ["watch/providers"]: WatchProvidersWithoutId;
  similar: MoviesDataByPage;
}

export interface FullsizeMovieData extends MovieWithDetails {
  release_dates: ReleaseDatesWithoutId;
}

export interface MovieDataShortened
  extends Pick<MovieData, "poster_path" | "id" | "title"> {}

export interface WatchlistMovieData
  extends Pick<
    MovieData,
    | "backdrop_path"
    | "id"
    | "title"
    | "vote_average"
    | "overview"
    | "poster_path"
  > {
  genre: string;
  addingDate: Date;
}

export interface WatchlistLSMovie {
  id: number;
  dbId: string;
}
