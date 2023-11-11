import { useCallback, useState } from "react";

import { useGlobalContext } from "@/context/GlobalContext";
import {
  WatchlistLSMovie,
  WatchlistMovieData,
} from "@/types/movie/transformed";

import { WatchlistActionsHookReturnType } from "./types";

export const useWatchlistMutations = (): WatchlistActionsHookReturnType => {
  const { watchlistDB, watchlistLS } = useGlobalContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const postMovieRequest = useCallback(async (movie: WatchlistMovieData) => {
    setIsLoading(true);
    try {
      isSuccess && setIsSuccess(false);
      isError && setIsError(false);
      await watchlistDB.add(movie);
      setIsLoading(false);
      setIsSuccess(true);
    } catch (e) {
      setIsLoading(false);
      setIsSuccess(false);
      setIsError(true);
      throw new Error("An error occured while adding the movie to watchlist");
    }
  }, []);

  const addMovieToWatchlist = useCallback(async (movie: WatchlistMovieData) => {
    const movieInWatchlist = findMovieInWatchlist(movie.id);
    if (!movieInWatchlist) {
      postMovieRequest(movie);
    }
  }, []);

  const deleteMovieRequest = useCallback(async (movieLS: WatchlistLSMovie) => {
    setIsLoading(true);
    try {
      isError && setIsError(false);
      await watchlistDB.remove(movieLS.dbId);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      throw new Error("An error occured while removing the movie to watchlist");
    }
  }, []);

  const removeMovieFromWatchlist = useCallback(async (id: number) => {
    const movieInWatchlist = findMovieInWatchlist(id);
    if (movieInWatchlist) {
      deleteMovieRequest(movieInWatchlist);
    }
  }, []);

  const toggleWatchlistMovie = useCallback(
    async (movie: WatchlistMovieData) => {
      const movieInWatchlist = findMovieInWatchlist(movie.id);
      if (movieInWatchlist) {
        deleteMovieRequest(movieInWatchlist);
      } else {
        postMovieRequest(movie);
      }
    },
    []
  );

  const isInWatchlist = useCallback((id: number): boolean => {
    return Boolean(findMovieInWatchlist(id));
  }, []);

  function findMovieInWatchlist(id: number) {
    const watchlistLSMovies = watchlistLS.get();
    return watchlistLSMovies.find((watchlistMovie) => watchlistMovie.id === id);
  }

  return {
    isInWatchlist,
    addMovieToWatchlist,
    removeMovieFromWatchlist,
    toggleWatchlistMovie,
    watchlistState: { isLoading, isError, isSuccess },
  };
};
