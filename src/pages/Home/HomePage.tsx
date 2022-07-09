import { useEffect } from "react";

import s from "./HomePage.module.css";
import FullsizeMovie from "@/components/Movie/FullsizeMovie/FullsizeMovie";
import Movie from "../../components/Movie/Movie";
import MovieLight from "../../components/Movie/MovieLight/MovieLight";
import SliderBlock from "../../components/Slider/SliderBlock";
import { movieSample } from "@/utils/moviesSample";
import movieAPI from "@/services/MovieService";
import { FullsizeMovieData } from "@/types/movie/transformed";
import useWatchlistMovies from "@/services/hooks/useWatchlistMovies";
import { Motion } from "react-motion";
import { slideLeft } from "@/animations";

const HomePage = () => {
  const { data: recommended, isLoading: isRecommendedLoading } =
    movieAPI.useGetRecommendedMoviesQuery({ id: 414906 });

  const {
    movies,
    moviesState: { isLoading: getWatchlistLoading },
  } = useWatchlistMovies();

  const recommendedMovies = recommended?.results.map((movie) => (
    <Movie key={movie.id} movie={movie} />
  ));

  const watchlistMovies = movies?.map((movie) => (
    <MovieLight key={movie.id} movie={movie} />
  ));

  return (
    <Motion defaultStyle={slideLeft.from} style={slideLeft.to}>
      {(style) => (
        <div className={s.Homepage} style={slideLeft.getStyle(style)}>
          <FullsizeMovie
            movie={movieSample as FullsizeMovieData}
            type="regular-page"
          />
          <SliderBlock
            title="Also recommended for you"
            isLoading={isRecommendedLoading}
            wrapperProps={{
              className: s.WatchlistBlock,
            }}
            sliderProps={{
              slides: recommendedMovies ?? [],
              slidesPerView: 5,
            }}
          />
          <SliderBlock
            title="Your Watchlist"
            isLoading={getWatchlistLoading}
            message="Add your first movie to your watchlist!"
            wrapperProps={{
              className: s.WatchlistBlock,
            }}
            sliderProps={{
              slides: watchlistMovies,
              slidesPerView: 5,
            }}
          />
        </div>
      )}
    </Motion>
  );
};

export default HomePage;
