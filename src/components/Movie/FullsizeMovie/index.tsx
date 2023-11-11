import { useRef } from "react";
import { FiCheck, FiMoreHorizontal, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import { ImagesEndpoints } from "@/api/imagesEndpoints";
import { Image } from "@/components/Image";
import { Button } from "@/components/UI";
import { useImageColors } from "@/hooks/useImageColors";
import { useWatchlistMutations } from "@/services/hooks/useWatchlistMutations";
import { FullsizeMovieData } from "@/types/movie/transformed";
import { getAdjustedGradientColor } from "@/utils";
import {
  getGenreString,
  getMovieCertification,
  getRuntimeString,
} from "@/utils/transform/movieData";

import s from "./styles.module.scss";

interface Props {
  movie: FullsizeMovieData | null;
  type: "regular-page" | "movie-page";
}

export const FullsizeMovie = (props: Props) => {
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
  } = movie || {};

  const navigate = useNavigate();

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

  const goToMoviePage = () => {
    navigate(`/movie/${id}`);
  };

  const toggleMovieHandler = () => {
    const genreString = getGenreString(genres ?? []);

    toggleWatchlistMovie({
      backdrop_path: backdrop_path ?? null,
      vote_average: vote_average!,
      poster_path: poster_path ?? null,
      title: title ?? "",
      id: id!,
      overview: overview!,
      addingDate: new Date(),
      genre: genreString,
    });
  };

  const isWatchlist = isInWatchlist(id!);
  const sectionClass = type === "movie-page" ? s.MoviePage : s.RegularPage;
  const certification = getMovieCertification(
    release_dates ?? {
      results: [],
    }
  );

  const rating = (
    <div className={`${s.Rating}`}>
      <div>{vote_average?.toFixed(1)}</div>
    </div>
  );

  const movieTagline = <p className={s.Tagline}>{tagline}</p>;

  const watchBtn = (
    <div className={s.MovieWatchBtn}>
      <Button
        onClick={goToMoviePage}
        startIcon={<FiMoreHorizontal />}
        variant="contained"
      >
        Details
      </Button>
    </div>
  );

  const movieBackdrop =
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
            <p className={s.MovieGenre}>{getGenreString(genres ?? [])}</p>
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
