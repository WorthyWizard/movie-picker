import Movie from "../../components/Movie/Movie";
import SliderBlock from "../../components/Slider/SliderBlock";
import background from "../../assets/Hero-image.jpg";
import Hero from "../../components/Hero/Hero";
import movieAPI from "@/services/MovieService";
import s from "./DiscoverPage.module.css";
import { Motion } from "react-motion";
import { slideLeft } from "@/animations";

const DiscoverPage = () => {
  const {
    data: popular,
    isLoading: getPopularLoading,
    isError: getPopularError,
  } = movieAPI.useGetPopularMoviesQuery({});

  const {
    data: topRated,
    isLoading: getTopRatedLoading,
    isError: getTopRatedError,
  } = movieAPI.useGetTopRatedMoviesQuery({});

  const popularMovies = popular?.results.map((movie) => (
    <Movie key={movie.id} movie={movie} />
  ));

  const topRatedMovies = topRated?.results.map((movie) => (
    <Movie key={movie.id} movie={movie} />
  ));

  return (
    <Motion defaultStyle={slideLeft.from} style={slideLeft.to}>
      {(style) => (
        <div className={s.Homepage} style={slideLeft.getStyle(style)}>
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
      )}
    </Motion>
  );
};

export default DiscoverPage;
