import { useNavigate } from "react-router-dom";

import { useWatchlistMutations } from "@/services/hooks/useWatchlistMutations";
import { MovieData } from "@/types/movie/data";
import { WatchlistMovieData } from "@/types/movie/transformed";

import { Image } from "../../Image";
import { MovieControls } from "../MovieControls";

import s from "../styles.module.css";

interface Props {
  movie: MovieData | WatchlistMovieData;
}

export const MovieLight = (props: Props) => {
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
