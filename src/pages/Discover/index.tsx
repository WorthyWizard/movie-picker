import { slideLeft } from "@/animations";
import { movieAPI } from "@/services/MovieService";
import { withAnimation } from "@/wrappers";

import background from "../../assets/Hero-image.jpg";
import { Hero } from "../../components/Hero";
import { Movie } from "../../components/Movie/Movie";
import { SliderBlock } from "../../components/SliderBlock";

import s from "./styles.module.css";

export const Page = () => {
  const { data: popular, isLoading: getPopularLoading } =
    movieAPI.useGetPopularMoviesQuery({});

  const { data: topRated, isLoading: getTopRatedLoading } =
    movieAPI.useGetTopRatedMoviesQuery({});

  const popularMovies = popular?.results.map((movie) => (
    <Movie key={movie.id} movie={movie} />
  ));

  const topRatedMovies = topRated?.results.map((movie) => (
    <Movie key={movie.id} movie={movie} />
  ));

  return (
    <div>
      <Hero
        text="Discover new awesome movies"
        style={{ backgroundImage: `url(${background})` }}
      />
      <SliderBlock
        title="Check out this trending titles"
        isLoading={getPopularLoading}
        sliderProps={{
          slides: popularMovies ?? [],
          slidesPerView: 5,
        }}
      />
      <SliderBlock
        title="Top rated movies just for you"
        isLoading={getTopRatedLoading}
        wrapperProps={{
          className: s.WatchlistBlock,
        }}
        sliderProps={{
          slides: topRatedMovies ?? [],
          slidesPerView: 5,
        }}
      />
    </div>
  );
};

export const DiscoverPage = withAnimation(Page, slideLeft);
