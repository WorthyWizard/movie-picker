import { MdClear, MdPlayArrow } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";

import { ImagesEndpoints } from "@/api/imagesEndpoints";
import { IconButton } from "@/components/UI";
import { useWatchlistMutations } from "@/services/hooks/useWatchlistMutations";
import { WatchlistMovieData } from "@/types/movie/transformed";
import { formatText } from "@/utils";

import s from "./styles.module.css";

interface Props {
  movie: WatchlistMovieData;
}

export const WatchlistMovie = (props: Props) => {
  const { movie } = props;
  const { backdrop_path, vote_average, title, genre, id, overview } = movie;

  const navigate = useNavigate();
  const { removeMovieFromWatchlist } = useWatchlistMutations();

  const goToMoviePage = () => {
    navigate(`/movie/${id}`);
  };

  const removeMovieHandler = (id: number) => () => {
    removeMovieFromWatchlist(id);
  };

  return (
    <article
      className={s.WatchlistMovie}
      style={{
        backgroundImage: `url(${ImagesEndpoints.backdrop + backdrop_path})`,
      }}
    >
      <div className={s.WatchlistMovieInner}>
        <div className={s.Rating}>
          <div>{vote_average.toFixed(1)}</div>
        </div>
        <div className={s.MovieInfo}>
          <h2 className={s.MovieTitle}>{title}</h2>
          <div className={s.MovieFactsWrapper}>
            <p className={s.MovieGenre}>{genre}</p>
          </div>
          <p className={s.MovieOverview}>
            {formatText(overview, { words: 50 })}
          </p>
        </div>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          mt="auto"
          ml="auto"
          pl={4}
        >
          <IconButton size="large" onClick={goToMoviePage}>
            <MdPlayArrow />
          </IconButton>
          <IconButton
            size="large"
            color="error"
            onClick={removeMovieHandler(movie.id)}
          >
            <MdClear />
          </IconButton>
        </Stack>
      </div>
      <div className={s.DarkBackdrop}></div>
    </article>
  );
};
