import { useGlobalContext } from "@/context/GlobalContext";
import {
  WatchlistLSMovie,
  WatchlistMovieData,
} from "@/types/movie/transformed";
import { useEffect, useRef, useState } from "react";
import { WatchlistMoviesHookReturnType } from "./types";

const useWatchlistMovies = (): WatchlistMoviesHookReturnType => {
  const { watchlistDB } = useGlobalContext();

  const unsubscribeRef = useRef(() => {});
  const [movies, setMovies] = useState<WatchlistMovieData[]>([]);
  const [lsMovies, setLsMovies] = useState<WatchlistLSMovie[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    getWatchlistMovies();
    return () => unsubscribeRef.current();
  }, []);

  const getWatchlistMovies = async () => {
    try {
      isError && setIsError(false);
      isSuccess && setIsSuccess(false);
      setIsLoading(true);

      const unsubscribe = await watchlistDB.subscribe((data) => {
        setIsLoading(false);
        setIsSuccess(true);

        const movies = data.docs.map((doc) =>
          doc.data()
        ) as WatchlistMovieData[];

        const localStorageMovies = data.docs.map((doc) => ({
          dbId: doc.id,
          id: doc.get("id"),
        })) as WatchlistLSMovie[];

        setMovies(movies);
        setLsMovies(localStorageMovies);
      });

      unsubscribeRef.current = unsubscribe;
    } catch (e) {
      setIsSuccess(false);
      setIsLoading(false);
      setIsError(true);
    }
  };

  return {
    movies,
    lsMovies,
    moviesState: { isLoading, isError, isSuccess },
  };
};

export default useWatchlistMovies;
