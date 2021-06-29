import React, { useEffect } from "react";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/movie';

import s from './MoviePage.module.css';
import SliderBlock from '../../components/Slider/SliderBlock';
import Person from '../../components/Person/Person';

import { movieSample, getMoviesSample } from '../../common/moviesSample';
import { 
  getLanguageString,
  getReleaseString,
  formatNumber,
  getFilteredCast,
  getFilteredCrew
} from '../../common/utils';
import Movie from '../../components/Movie/Movie';
import FullsizeMovie from "../../components/Movie/FullsizeMovie";
import Gallery from "../../components/Gallery/Gallery";
import Video from '../../components/Video/Video';
import WatchProviders from '../../components/WatchProviders/WatchProviders';

const MoviePage = ({ onGetMovieData, movie: {
    spoken_languages, release_date, 
    budget, revenue, credits,
    production_companies,
    images, videos,
    ['watch/providers']: providers
  }, match }) => {

  useEffect(() => {
    const id = match.params.id;
    onGetMovieData(id);
  }, []);
  
  const actors = getFilteredCast(credits.cast, 10).map(person => <Person key={person.id} data={person} />);
  const crew = getFilteredCrew(credits.crew);
  const movies = getMoviesSample(10).map((movie, i) => <Movie key={movie.id + `-${i}`} data={movie} />);

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
          <p className={s.DetailTitle}>Director{`${crew.directors.length > 1 ? 's' : ''}`}</p>
          <div className={s.DotDivider}></div>
          <p className={s.DetailValue}>{`${crew.directors.join(', ')}`}</p>
        </div>
        <div className={s.Detail}>
          <p className={s.DetailTitle}>Writer{`${crew.writers.length > 1 ? 's' : ''}`}</p>
          <div className={s.DotDivider}></div>
          <p className={s.DetailValue}>{`${crew.writers.join(', ')}`}</p>
        </div>
      </div>  
    </div>
  );

  return (
    <div className={s.MoviePage}>
      <FullsizeMovie data={movieSample} type='movie-page' />
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
            <Gallery images={images.backdrops} />
            <div className={s.TrailerWrapper}>
              <h2 className={`main-heading`}>Trailer</h2>
              <Video path={videos.results[0].key} width={1000} />
            </div>
          </div>
        </div>
        <WatchProviders data={providers} />
        <SliderBlock 
          id={1} 
          className={s.Container}
          slidesPerView={4}
          title='Checkout this similar movies'
          data={movies}
        />
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.movie.singleMovie,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetMovieData: (id) => dispatch(actions.getMovieData(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);