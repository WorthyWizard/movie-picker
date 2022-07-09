import s from "./WatchlistPage.module.css";
import Hero from "../../components/Hero/Hero";
import WatchlistMovie from "@/components/Movie/WatchlistMovie/WatchlistMovie";
import Spinner from "../../components/UI/Spinner/Spinner";
import useWatchlistMovies from "@/services/hooks/useWatchlistMovies";
import useWatchlistActions from "@/services/hooks/useWatchlistActions";
import Message from "@/components/UI/Message/Message";
import { Stack } from "@mui/material";
import { Motion } from "react-motion";
import { slideLeft } from "@/animations";

const WatchlistPage = () => {
  const {
    movies: watchlistMovies,
    moviesState: { isLoading: moviesLoading },
  } = useWatchlistMovies();

  const { isEmpty } = useWatchlistActions();

  let content: JSX.Element | null = null;

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
    content = (
      <Stack>
        <Hero text="Your nice watchlist, enjoy!" />
        <div className={s.WatchlistContent}>{movies}</div>
      </Stack>
    );
  }

  return (
    <Motion defaultStyle={slideLeft.from} style={slideLeft.to}>
      {(style) => (
        <Stack flex={1} style={slideLeft.getStyle(style)}>
          {content}
        </Stack>
      )}
    </Motion>
  );
};

export default WatchlistPage;
