import { useGlobalContext } from "@/context/GlobalContext";
import useWatchlistMovies from "@/services/hooks/useWatchlistMovies";
import { memo, useEffect } from "react";

const Initialization = () => {
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

export default Initialization;
