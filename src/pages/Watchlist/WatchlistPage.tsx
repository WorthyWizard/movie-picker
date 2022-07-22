import s from "./WatchlistPage.module.css";
import Hero from "../../components/Hero/Hero";
import WatchlistMovie from "@/components/Movie/WatchlistMovie/WatchlistMovie";
import Spinner from "../../components/UI/Spinner/Spinner";
import useWatchlistMovies from "@/services/hooks/useWatchlistMovies";
import Message from "@/components/UI/Message/Message";
import { Stack } from "@mui/material";
import { Motion } from "react-motion";
import { slideLeft } from "@/animations";

const WatchlistPage = () => {
  const {
    movies,
    moviesState: { isLoading, isSuccess },
  } = useWatchlistMovies();

  let content: JSX.Element | null = null;

  const moviesRender = movies.map((movie) => (
    <WatchlistMovie key={movie.id} movie={movie} />
  ));

  if (isLoading) {
    content = <Spinner />;
  } else {
    if (isSuccess && movies.length === 0) {
      content = (
        <Stack flex={1} justifyContent="center">
          <Message text="Your watchlist is empty" />
        </Stack>
      );
    } else {
      content = (
        <Stack>
          <Hero text="Your nice watchlist, enjoy!" />
          <div className={s.WatchlistContent}>{moviesRender}</div>
        </Stack>
      );
    }
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
