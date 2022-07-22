import {
  WatchlistLSMovie,
  WatchlistMovieData,
} from "@/types/movie/transformed";

interface WatchlistState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

export interface WatchlistActionsHookReturnType {
  watchlistState: WatchlistState;
  isInWatchlist: (id: number) => boolean;
  addMovieToWatchlist: (movie: WatchlistMovieData) => Promise<void>;
  removeMovieFromWatchlist: (id: number) => Promise<void>;
  toggleWatchlistMovie: (id: WatchlistMovieData) => Promise<void>;
}

export interface WatchlistMoviesHookReturnType {
  movies: WatchlistMovieData[];
  lsMovies: WatchlistLSMovie[];
  moviesState: WatchlistState;
}
