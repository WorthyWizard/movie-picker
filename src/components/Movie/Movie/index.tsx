import { useNavigate } from "react-router-dom";

import { useWatchlistMutations } from "@/services/hooks/useWatchlistMutations";
import {
  getGenresNamesByIDs,
  getYearString,
} from "@/utils/transform/movieData";

import { MovieData } from "../../../types/movie/data";
import { Image } from "../../Image";
import { MovieControls } from "../MovieControls";

import s from "../styles.module.css";

interface Props {
  movie: MovieData;
}

export const Movie = (props: Props) => {
  const { movie } = props;

  const {
    id,
    backdrop_path,
    genre_ids,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
  } = movie;

  const navigate = useNavigate();

  const { toggleWatchlistMovie, isInWatchlist } = useWatchlistMutations();

  const toggleMovieHandler = () => {
    const genreString = getGenresNamesByIDs(genre_ids).join(", ");
    toggleWatchlistMovie({
      backdrop_path,
      vote_average,
      poster_path,
      title,
      id,
      overview,
      addingDate: new Date(),
      genre: genreString,
    });
  };

  const genre = getGenresNamesByIDs(genre_ids).slice(0, 2).join(", ");

  const goToMoviePage = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <article className={s.Movie}>
      <div className={s.MovieInner}>
        <div className={s.Poster}>
          <div className={s.MoviePoster}>
            <Image path={poster_path} alt={title} type="poster" />
            <div className={s.DarkBackdrop}></div>
          </div>
          <div className={s.Rating}>
            <div>{vote_average.toFixed(1)}</div>
          </div>
          <div className={s.MovieControls}>
            <MovieControls
              type="full"
              onPlay={goToMoviePage}
              isInWatchlist={isInWatchlist(id)}
              onAddToWatchlist={toggleMovieHandler}
            />
          </div>
        </div>
        <h3 className={s.MovieTitle}>{title}</h3>
        <div className={s.MovieFactsWrapper}>
          {genre && <div className={s.MovieGenre}>{genre}</div>}
          {genre && <div className={s.DotDivider}></div>}
          {release_date && (
            <div className={s.MovieDate}>{getYearString(release_date)}</div>
          )}
        </div>
      </div>
    </article>
  );
};
