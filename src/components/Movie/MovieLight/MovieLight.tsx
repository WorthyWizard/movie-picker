import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { MovieData } from "@/types/movie/rawTypes";
import Image from "../../Image/Image";
import MovieControls from "../MovieControls/MovieControls";
import s from "../Movie.module.css";
import { WatchlistMovieData } from "@/types/movie/transformed";
import useWatchlistMutations from "@/services/hooks/useWatchlistMutations";

interface MovieLightProps {
  movie: MovieData | WatchlistMovieData;
}

const MovieLight: FC<MovieLightProps> = (props) => {
  const { movie } = props;
  const { id, poster_path, title } = movie;

  const navigate = useNavigate();

  const { removeMovieFromWatchlist } = useWatchlistMutations();

  const removeMovieHandler = (id: number) => () => {
    removeMovieFromWatchlist(id);
  };

  const goToMoviePage = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <article className={s.Movie}>
      <div className={s.MovieInner}>
        <div className={s.Poster}>
          <div className={s.MoviePoster}>
            <Image path={poster_path} type="poster" alt={title} />
            <div className={s.DarkBackdrop}></div>
          </div>
          <div className={s.MovieControls}>
            <MovieControls
              type="watchlist"
              onPlay={goToMoviePage}
              onRemove={removeMovieHandler(id)}
            />
          </div>
        </div>
        <h3 className={s.MovieTitle}>{title}</h3>
      </div>
    </article>
  );
};

export default MovieLight;
