import s from "./MoviePage.module.css";
import SliderBlock from "../../components/Slider/SliderBlock";
import PersonCard from "../../components/PersonCard/PersonCard";
import {
  getLanguageString,
  getReleaseString,
  getFilteredCrewByJobs,
  getFilteredVideos,
  getFilteredCompanies,
  getFilteredMovies,
} from "@/utils/transform/movieData";
import Movie from "../../components/Movie/Movie";
import FullsizeMovie from "@/components/Movie/FullsizeMovie/FullsizeMovie";
import Gallery from "../../components/Gallery/Gallery";
import Video from "../../components/Video/Video";
import WatchProviders from "../../components/WatchProviders/WatchProviders";
import Loader from "../../components/UI/Loader/Loading";
import { useParams } from "react-router-dom";
import { getSliced, getUnitsFormatedNumber } from "@/utils/utils";
import MovieDetail from "./MovieDetail";
import movieAPI from "@/services/MovieService";
import { useEffect } from "react";

const MoviePage = () => {
  const { movieId } = useParams();

  const {
    data: singleMovie,
    isLoading,
    isFetching,
  } = movieAPI.useGetMovieFullDataQuery({
    id: parseInt(movieId!),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movieId]);

  if (isFetching || isLoading || !singleMovie) return <Loader />;

  const {
    spoken_languages,
    release_date,
    budget,
    revenue,
    credits: { cast, crew },
    production_companies,
    images,
    videos,
    similar,
    ["watch/providers"]: providers,
  } = singleMovie;

  const filteredCrew = getFilteredCrewByJobs(crew, ["Screenplay", "Director"]);
  const filteredSimilar = getFilteredMovies(similar.results);
  const filteredVideos = getFilteredVideos(videos.results);

  const actors = getSliced(cast).map((person) => (
    <PersonCard key={person.id} info={person} />
  ));

  const similarMovies = filteredSimilar.map((movie) => (
    <Movie key={movie.id} movie={movie} />
  ));

  let trailer =
    filteredVideos.length > 0 ? (
      <div className={s.TrailerWrapper}>
        <h2 className="main-heading">Trailer</h2>
        <Video
          type="youtube"
          videoId={filteredVideos[0].key}
          iframeProps={{ width: 1000 }}
          ratio={16 / 9}
        />
      </div>
    ) : (
      ""
    );

  const details = (
    <div className={`${s.DetailsWrapper} ${s.Container}`}>
      <div className={s.Column}>
        {spoken_languages.length > 0 && (
          <MovieDetail
            title="Languages"
            value={getLanguageString(spoken_languages)}
          />
        )}
        {release_date && (
          <MovieDetail title="Release" value={getReleaseString(release_date)} />
        )}
        {budget > 0 && (
          <MovieDetail
            title="Budget"
            value={`${getUnitsFormatedNumber(budget, " ")}$`}
          />
        )}
        {revenue > 0 && (
          <MovieDetail
            title="Revenue"
            value={`${getUnitsFormatedNumber(revenue, " ")}$`}
          />
        )}
      </div>
      <div className={s.Column}>
        {production_companies.length > 0 && (
          <MovieDetail
            title="Company"
            value={getFilteredCompanies(production_companies)
              .slice(0, 2)
              .join(", ")}
          />
        )}
        {filteredCrew.Director.length > 0 && (
          <MovieDetail
            title={`Director${filteredCrew.Director.length > 1 ? "s" : ""}`}
            value={`${filteredCrew.Director.join(", ")}`}
          />
        )}
        {filteredCrew.Screenplay.length > 0 && (
          <MovieDetail
            title={`Writer${filteredCrew.Screenplay.length > 1 ? "s" : ""}`}
            value={`${filteredCrew.Screenplay.join(", ")}`}
          />
        )}
      </div>
    </div>
  );

  return (
    <div className={s.MoviePage}>
      <FullsizeMovie movie={singleMovie} type="movie-page" />
      <section className={`${s.DetailsBlock}`}>
        <h2 className={`main-heading`}>Details</h2>
        {details}
        <SliderBlock
          title="Cast"
          wrapperProps={{
            className: s.Container,
          }}
          sliderProps={{
            slides: actors,
            slidesPerView: 4,
          }}
        />
        <div className={s.MediaWrapper}>
          <div className={s.Container}>
            <h2 className={`main-heading`}>Media</h2>
            {images.backdrops && images.backdrops.length > 0 && (
              <Gallery images={images.backdrops} />
            )}
            {trailer}
          </div>
        </div>
        <WatchProviders providers={providers} />
        <SliderBlock
          title="Checkout this similar movies"
          wrapperProps={{
            className: s.Container,
          }}
          sliderProps={{
            slides: similarMovies,
            slidesPerView: 4,
          }}
        />
      </section>
    </div>
  );
};

export default MoviePage;
