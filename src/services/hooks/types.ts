import { WatchlistMovieData } from "@/types/movie/transformed";

interface WatchlistState {
  isLoading: boolean;
  isError: boolean;
}

export interface WatchlistActionsHookReturnType {
  watchlistState: WatchlistState;
  isEmpty: () => boolean;
  isInWatchlist: (id: number) => boolean;
  addMovieToWatchlist: (movie: WatchlistMovieData) => Promise<void>;
  removeMovieFromWatchlist: (id: number) => Promise<void>;
  toggleWatchlistMovie: (id: WatchlistMovieData) => Promise<void>;
}

export interface WatchlistMoviesHookReturnType {
  movies: WatchlistMovieData[];
  moviesState: WatchlistState;
}
