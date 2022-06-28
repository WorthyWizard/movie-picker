import { FC } from "react";
import { ImagesEndpoints } from "@/api/imagesEndpoints";
import { useNavigate } from "react-router-dom";
import { WatchlistMovieData } from "@/types/movie/transformed";
import { IconButton } from "@/components/UI";
import { MdClear, MdPlayArrow } from "react-icons/md";
import { Stack } from "@mui/material";
import { formatText } from "@/utils/utils";
import useWatchlistActions from "@/services/hooks/useWatchlistActions";
import s from "./WatchlistMovie.module.css";

interface WatchlistMovieProps {
  movie: WatchlistMovieData;
}

const WatchlistMovie: FC<WatchlistMovieProps> = (props) => {
  const { movie } = props;
  const { backdrop_path, vote_average, title, genre, id, overview } = movie;

  const navigate = useNavigate();
  const { removeMovieFromWatchlist } = useWatchlistActions();

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

export default WatchlistMovie;
