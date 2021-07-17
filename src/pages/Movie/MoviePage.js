import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/actions';
import s from './MoviePage.module.css';
import SliderBlock from '../../components/Slider/SliderBlock';
import Person from '../../components/Person/Person';
import { 
  getLanguageString,
  getReleaseString,
  formatNumber,
  getFilteredCast,
  getFilteredCrew,
  getFilteredVideos,
  getFilteredCompanies,
  getFilteredMovies
} from '../../common/utils';
import Movie from '../../components/Movie/Movie';
import FullsizeMovie from "../../components/Movie/FullsizeMovie";
import Gallery from "../../components/Gallery/Gallery";
import Video from '../../components/Video/Video';
import WatchProviders from '../../components/WatchProviders/WatchProviders';
import Loader from '../../components/UI/Loader/Loader';

const MovieDetail = ({ title, value }) => {
  return (
    <div className={s.Detail}>
      <div className={s.DetailTitleWrapper}>
        <p className={s.DetailTitle}>{title}</p>
        <div className={s.DotDivider}></div>
      </div>
      <p className={s.DetailValue}>{value}</p>
    </div>
  );
}

const MoviePage = ({ match }) => {
  
  const movieID = match.params.id;

  const dispatch = useDispatch();
  const singleMovie = useSelector(state => state.singleMovie.movie);
  const isLoading = useSelector(state => state.singleMovie.isLoading);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actions.getMovie(movieID));
  }, [movieID]);

  if(isLoading || !singleMovie) return <Loader/>;

  const {
    spoken_languages, release_date, 
    budget, revenue, credits: {cast, crew},
    production_companies,
    images, videos, similar,
    ['watch/providers']: providers
  } = singleMovie;
  
  const actors = getFilteredCast(cast).map(person => <Person key={person.id} data={person} />);
  const filteredCrew = getFilteredCrew(crew);
  const filteredSimilar = getFilteredMovies(similar.results);
  const similarMovies = filteredSimilar.map(movie => <Movie key={movie.id} data={movie} />);

  let trailer = '';
  const filteredVideos = getFilteredVideos(videos.results);
  
  if(filteredVideos.length > 0) {
    trailer = (
      <div className={s.TrailerWrapper}>
        <h2 className={`main-heading`}>Trailer</h2>
        <Video path={filteredVideos[0].key} width={1000} />
      </div>
    );
  }

  const details = (
    <div className={`${s.DetailsWrapper} ${s.Container}`}>
      <div className={s.Column}>
        { spoken_languages.length > 0 &&
        <MovieDetail 
          title='Languages' 
          value={getLanguageString(spoken_languages)} 
        /> }
        { release_date &&
        <MovieDetail 
          title='Release' 
          value={getReleaseString(release_date)} 
        /> }
        { budget > 0 &&
        <MovieDetail 
          title='Budget' 
          value={`${formatNumber(budget, ' ')}$`} 
        /> }
        { revenue > 0 &&
        <MovieDetail 
          title='Revenue' 
          value={`${formatNumber(revenue, ' ')}$`} 
        /> }
      </div>
      <div className={s.Column}>
        { production_companies.length > 0 && 
        <MovieDetail 
          title='Company' 
          value={getFilteredCompanies(production_companies).slice(0, 2).join(', ')} 
        /> }
        { filteredCrew.directors.length > 0 &&
        <MovieDetail 
          title={`Director${filteredCrew.directors.length > 1 ? 's' : ''}`} 
          value={`${filteredCrew.directors.join(', ')}`} 
        /> }
        { filteredCrew.writers.length > 0 &&
        <MovieDetail 
          title={`Writer${filteredCrew.writers.length > 1 ? 's' : ''}`} 
          value={`${filteredCrew.writers.join(', ')}`} 
        /> }
      </div>  
    </div>
  );

  return (
    <div className={s.MoviePage}>
      <FullsizeMovie data={singleMovie} type='movie-page' />
      <section className={`${s.DetailsBlock}`}>
        <h2 className={`main-heading`}>Details</h2>
        { details }
        <SliderBlock 
          id={1} 
          className={s.Container}
          slidesPerView={4}
          title='Cast'
          data={actors}
        />
        <div className={s.MediaWrapper}>
          <div className={s.Container}>
            <h2 className={`main-heading`}>Media</h2>
            { images.backdrops && images.backdrops.length > 0 && <Gallery images={images.backdrops} /> }
            { trailer }
          </div>
        </div>
        <WatchProviders data={providers} />
        <SliderBlock 
          id={2} 
          className={s.Container}
          slidesPerView={4}
          title='Checkout this similar movies'
          data={similarMovies}
        />
      </section>
    </div>
  );
};

export default MoviePage;