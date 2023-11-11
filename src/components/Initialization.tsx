import { useEffect } from "react";

import { useGlobalContext } from "@/context/GlobalContext";
import { useWatchlistMovies } from "@/services/hooks/useWatchlistMovies";

export const Initialization = () => {
  const {
    lsMovies,
    moviesState: { isSuccess },
  } = useWatchlistMovies();

  const { watchlistLS } = useGlobalContext();

  useEffect(() => {
    if (isSuccess && lsMovies) {
      watchlistLS.set(lsMovies);
    }
  }, [lsMovies, isSuccess]);

  return <></>;
};
