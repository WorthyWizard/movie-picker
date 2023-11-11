import { Stack } from "@mui/material";

import { slideLeft } from "@/animations";
import { WatchlistMovie } from "@/components/Movie/WatchlistMovie";
import { Message } from "@/components/UI/Message";
import { useWatchlistMovies } from "@/services/hooks/useWatchlistMovies";
import { withAnimation } from "@/wrappers/withAnimation";

import { Hero } from "../../components/Hero";
import { Spinner } from "../../components/UI/Spinner";

import s from "./styles.module.css";

const Page = () => {
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

  return <Stack flex={1}>{content}</Stack>;
};

export const WatchlistPage = withAnimation(Page, slideLeft);
