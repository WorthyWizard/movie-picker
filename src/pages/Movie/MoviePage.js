import React from "react";
import { connect } from 'react-redux';

import s from './MoviePage.module.css';
import SliderBlock from '../../components/Slider/SliderBlock';
import Person from '../../components/Person/Person';

import { movieSample } from '../../common/moviesSample';
import { 
  getLanguageString,
  getReleaseString,
  formatNumber,
  getFilteredCast,
  getFilteredCrew
} from '../../common/utils';
import FullsizeMovie from "../../components/Movie/FullsizeMovie";

const MoviePage = ({}) => {
  
  const {  
    spoken_languages, release_date, 
    budget, revenue, credits,
    production_companies,
  } = movieSample;

  const actors = getFilteredCast(credits.cast, 10).map(person => <Person key={person.id} data={person} />);
  const crew = getFilteredCrew(credits.crew);

  let details = (
    <div className={s.DetailsWrapper}>
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
      <section className={`${s.DetailsBlock} ${s.Container}`}>
        <h2 className={`main-heading`}>Details</h2>
        {details}
        <SliderBlock 
          id={1} 
          className={s.CastBlock}
          slidesPerView={4}
          title='Cast'
          data={actors}
        />
      </section>
    </div>
  );
};

export default MoviePage;
