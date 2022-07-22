import { FC } from "react";

import MovieControls from "./MovieControls/MovieControls";
import {
  getYearString,
  getGenresNamesByIDs,
} from "../../utils/transform/movieData";
import Image from "../Image/Image";
import s from "./Movie.module.css";
import { MovieData } from "../../types/movie/rawTypes";
import { useNavigate } from "react-router-dom";
import useWatchlistMutations from "@/services/hooks/useWatchlistMutations";
import { Motion } from "react-motion";
import { slideUp } from "@/animations";

interface MovieProps {
  movie: MovieData;
}

const Movie: FC<MovieProps> = (props) => {
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
    <Motion defaultStyle={slideUp.from} style={slideUp.to}>
      {(style) => (
        <article className={s.Movie} style={slideUp.getStyle(style)}>
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
      )}
    </Motion>
  );
};

export default Movie;
