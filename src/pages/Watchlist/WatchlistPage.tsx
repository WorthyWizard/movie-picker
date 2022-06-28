import s from "./WatchlistPage.module.css";
import Hero from "../../components/Hero/Hero";
import WatchlistMovie from "@/components/Movie/WatchlistMovie/WatchlistMovie";
import Spinner from "../../components/UI/Spinner/Spinner";
import useWatchlistMovies from "@/services/hooks/useWatchlistMovies";
import useWatchlistActions from "@/services/hooks/useWatchlistActions";
import Message from "@/components/UI/Message/Message";
import { Stack } from "@mui/material";

const WatchlistPage = () => {
  const {
    movies: watchlistMovies,
    moviesState: { isLoading: moviesLoading },
  } = useWatchlistMovies();

  const { isEmpty } = useWatchlistActions();

  let content = null;

  const isWatchlistIsEmpty = isEmpty();
  const movies = watchlistMovies.map((movie) => (
    <WatchlistMovie key={movie.id} movie={movie} />
  ));

  if (isWatchlistIsEmpty) {
    content = (
      <Stack flex={1} justifyContent="center">
        <Message text="Your watchlist is empty" />
      </Stack>
    );
  } else if (moviesLoading) {
    content = <Spinner />;
  } else {
    content = <div className={s.WatchlistContent}>{movies}</div>;
  }

  return (
    <Stack flex={1}>
      <Hero text="Your nice watchlist, enjoy!" />
      {content}
    </Stack>
  );
};

export default WatchlistPage;
