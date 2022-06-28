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

const HomePage = () => {
  const { data: recommended, isLoading: isRecommendedLoading } =
    movieAPI.useGetRecommendedMoviesQuery({ id: 157336 });

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
    <div className={s.Homepage}>
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
  );
};

export default HomePage;
