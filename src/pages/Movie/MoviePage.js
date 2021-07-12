import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/actions/movie';
import s from './MoviePage.module.css';
import SliderBlock from '../../components/Slider/SliderBlock';
import Person from '../../components/Person/Person';
import { 
  getLanguageString,
  getReleaseString,
  formatNumber,
  getFilteredCast,
  getFilteredCrew,
  getFilteredVideos
} from '../../common/utils';
import Movie from '../../components/Movie/Movie';
import FullsizeMovie from "../../components/Movie/FullsizeMovie";
import Gallery from "../../components/Gallery/Gallery";
import Video from '../../components/Video/Video';
import WatchProviders from '../../components/WatchProviders/WatchProviders';
import Loader from '../../components/UI/Loader/Loader';

const MoviePage = ({ match }) => {
  
  const movieID = match.params.id;

  const dispatch = useDispatch();
  const singleMovie = useSelector((state) => state.movie.singleMovie);
  const isLoading = useSelector((state) => state.movie.singleMovieLoading);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actions.getMovie(movieID));
  }, [movieID]);

  if(isLoading || !singleMovie) return <Loader/>;

  const {
    spoken_languages, release_date, 
    budget, revenue, credits: {cast, crew},
    production_companies,
    images, videos,
    ['watch/providers']: providers
  } = singleMovie;
  
  const actors = getFilteredCast(cast).map(person => <Person key={person.id} data={person} />);
  const filteredCrew = getFilteredCrew(crew);
  const similarMovies = singleMovie.similar.results.map((movie, i) => <Movie key={movie.id} data={movie} />);

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

  let details = (
    <div className={`${s.DetailsWrapper} ${s.Container}`}>
      <div className={s.Column}>
        <div className={s.Detail}>
          <p className={s.DetailTitle}>Languages</p>
          <div className={s.DotDivider}></div>
          <p className={s.DetailValue}>{getLanguageString(spoken_languages)}</p>
        </div>
        <div className={s.Detail}>
          <p className={s.DetailTitle}>Release</p>
          <div className={s.DotDivider}></div>
          <p className={s.DetailValue}>{getReleaseString(release_date)}</p>
        </div>
        <div className={s.Detail}>
          <p className={s.DetailTitle}>Budget</p>
          <div className={s.DotDivider}></div>
          <p className={s.DetailValue}>{`${formatNumber(budget, ' ')}$`}</p>
        </div>
        <div className={s.Detail}>
          <p className={s.DetailTitle}>Revenue</p>
          <div className={s.DotDivider}></div>
          <p className={s.DetailValue}>{`${formatNumber(revenue, ' ')}$`}</p>
        </div>
      </div>
      <div className={s.Column}>
        <div className={s.Detail}>
          <p className={s.DetailTitle}>Company</p>
          <div className={s.DotDivider}></div>
          <p className={s.DetailValue}>{production_companies[0].name}</p>
        </div>
        <div className={s.Detail}>
          <p className={s.DetailTitle}>Director{`${filteredCrew.directors.length > 1 ? 's' : ''}`}</p>
          <div className={s.DotDivider}></div>
          <p className={s.DetailValue}>{`${filteredCrew.directors.join(', ')}`}</p>
        </div>
        <div className={s.Detail}>
          <p className={s.DetailTitle}>Writer{`${filteredCrew.writers.length > 1 ? 's' : ''}`}</p>
          <div className={s.DotDivider}></div>
          <p className={s.DetailValue}>{`${filteredCrew.writers.join(', ')}`}</p>
        </div>
      </div>  
    </div>
  );

  return (
    <div className={s.MoviePage}>
      <FullsizeMovie data={singleMovie} type='movie-page' />
      <section className={`${s.DetailsBlock}`}>
        <h2 className={`main-heading`}>Details</h2>
        {details}
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