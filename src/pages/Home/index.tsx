import { slideLeft } from "@/animations";
import { FullsizeMovie } from "@/components/Movie/FullsizeMovie";
import { useWatchlistMovies } from "@/services/hooks/useWatchlistMovies";
import { movieAPI } from "@/services/MovieService";
import { withAnimation } from "@/wrappers/withAnimation";

import { Movie } from "../../components/Movie/Movie";
import { MovieLight } from "../../components/Movie/MovieLight";
import { SliderBlock } from "../../components/SliderBlock";

import s from "./styles.module.css";

const Page = () => {
  const { data: recommended, isLoading: isRecommendedLoading } =
    movieAPI.useGetRecommendedMoviesQuery({ id: 414906 });

  const { data: movie } = movieAPI.useGetMovieFullDataQuery({
    id: 414906,
  });

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
    <div>
      <FullsizeMovie movie={movie ?? null} type="regular-page" />
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

export const HomePage = withAnimation(Page, slideLeft);
