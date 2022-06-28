import Movie from "../../components/Movie/Movie";
import SliderBlock from "../../components/Slider/SliderBlock";
import background from "../../assets/Hero-image.jpg";
import Hero from "../../components/Hero/Hero";
import movieAPI from "@/services/MovieService";
import s from "./DiscoverPage.module.css";

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
    <div className={s.Homepage}>
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

export default DiscoverPage;
