import { useGlobalContext } from "@/context/GlobalContext";
import { WatchlistMovieData } from "@/types/movie/transformed";
import { useEffect, useRef, useState } from "react";
import { WatchlistMoviesHookReturnType } from "./types";

const useWatchlistMovies = (): WatchlistMoviesHookReturnType => {
  const { watchlistDB } = useGlobalContext();

  const unsubscribeRef = useRef(() => {});
  const [movies, setMovies] = useState<WatchlistMovieData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    getWatchlistMovies();
    return () => unsubscribeRef.current();
  }, []);

  const getWatchlistMovies = async () => {
    try {
      isError && setIsError(false);
      setIsLoading(true);

      const unsubscribe = await watchlistDB.subscribe((data) => {
        setIsLoading(false);
        setMovies(data.docs.map((doc) => doc.data()) as WatchlistMovieData[]);
      });
      unsubscribeRef.current = unsubscribe;
    } catch (e) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  return {
    movies,
    moviesState: { isLoading, isError },
  };
};

export default useWatchlistMovies;
