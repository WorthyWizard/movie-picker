import { FC, useRef } from "react";
import {
  getGenreString,
  getRuntimeString,
  getMovieCertification,
} from "@/utils/transform/movieData";
import Image from "@/components/Image/Image";
import s from "./FullsizeMovie.module.scss";
import { ImagesEndpoints } from "@/api/imagesEndpoints";
import { useNavigate } from "react-router-dom";
import { FiPlay, FiPlus, FiCheck } from "react-icons/fi";
import { Button } from "@/components/UI";
import useImageColors from "@/hooks/useImageColors";
import { getAdjustedGradientColor } from "@/utils/utils";
import classNames from "classnames";
import {
  FullsizeMovieData,
  WatchlistMovieData,
} from "@/types/movie/transformed";
import useWatchlistMutations from "@/services/hooks/useWatchlistMutations";

interface FullsizeMovieProps {
  movie: FullsizeMovieData;
  type: "regular-page" | "movie-page";
}

const FullsizeMovie: FC<FullsizeMovieProps> = (props) => {
  const { movie, type } = props;

  const {
    backdrop_path,
    poster_path,
    vote_average,
    title,
    runtime,
    overview,
    tagline,
    release_dates,
    id,
    genres,
  } = movie;

  const { color } = useImageColors(ImagesEndpoints.poster + poster_path);
  const {
    toggleWatchlistMovie,
    isInWatchlist,
    watchlistState: { isLoading: watchlistLoading },
  } = useWatchlistMutations();

  const gradientClassNameRef = useRef<string | null>(null);

  if (color) {
    const colorHsl = getAdjustedGradientColor(color);
    document.documentElement.style.setProperty("--movie-gradient", colorHsl);
    gradientClassNameRef.current = s.GradientColor;
  }

  const navigate = useNavigate();

  const goToMoviePage = () => {
    navigate(`/movie/${id}`);
  };

  const toggleMovieHandler = () => {
    const genreString = getGenreString(genres);
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

  const isWatchlist = isInWatchlist(id);
  const sectionClass = type === "movie-page" ? s.MoviePage : s.RegularPage;
  const certification = getMovieCertification(release_dates);

  let rating = (
    <div className={`${s.Rating}`}>
      <div>{vote_average.toFixed(1)}</div>
    </div>
  );

  let movieTagline = <p className={s.Tagline}>{tagline}</p>;

  let watchBtn = (
    <div className={s.MovieWatchBtn}>
      <Button
        onClick={goToMoviePage}
        startIcon={<FiPlay />}
        variant="contained"
      >
        Movie page
      </Button>
    </div>
  );

  let movieBackdrop =
    type != "movie-page"
      ? { backgroundImage: `url(${ImagesEndpoints.backdrop + backdrop_path})` }
      : {};

  return (
    <section
      className={classNames(
        s.FullsizeMovie,
        sectionClass,
        gradientClassNameRef.current
      )}
      style={movieBackdrop}
    >
      <div className={s.FullsizeMovieInner}>
        <figure className={s.Poster}>
          <Image path={poster_path} type="poster" alt={title} />
          {type != "movie-page" ? rating : null}
        </figure>
        <div className={s.MovieInfo}>
          {type == "movie-page" ? movieTagline : null}
          <h2 className={s.MovieTitle}>
            {title}
            {type == "movie-page" ? rating : null}
          </h2>
          <div className={s.MovieFactsWrapper}>
            <p className={s.MovieGenre}>{getGenreString(genres)}</p>
            <p className={s.MovieRuntime}>{getRuntimeString(runtime!)}</p>
            {certification && <p className={s.MoviePG}>{certification}</p>}
          </div>
          <p className={s.MovieOverview}>{overview}</p>
          <div className={s.MovieButtons}>
            {type !== "movie-page" && watchBtn}
            <div className={s.MovieWatchlistBtn}>
              <Button
                disabled={watchlistLoading}
                variant="outlined"
                color="secondary"
                onClick={toggleMovieHandler}
                startIcon={isWatchlist ? <FiCheck /> : <FiPlus />}
              >
                {isWatchlist ? "In watchlist" : "Watchlist"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={s.DarkBackdrop}></div>
      <div className={s.BackgroundGradient}></div>
    </section>
  );
};

export default FullsizeMovie;
