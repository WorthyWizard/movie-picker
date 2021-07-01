import React from 'react';

import MovieControls from './MovieControls/MovieControls';
import { 
  getYearString,
  getMovieCertification,
  getFilteredGenreByIDs
} from '../../common/utils';
import Image from '../../components/Image/Image';
import s from './Movie.module.css';

const Movie = (props) => {

  const {  
    poster_path, 
    vote_average, 
    title, 
    genres,
    genre_ids,
    release_date,
    release_dates 
  } = props.data;

  let genre = '';
  let certification = '';

  if(genres) {
    genre = genres[0].name;
  }
  if(genre_ids) {
    genre = getFilteredGenreByIDs(genre_ids)[0];
  }
  if(release_dates) {
    certification = getMovieCertification(release_dates.results);
  }

  return (
    <article className={s.Movie}>
      <div className={s.MovieInner}>
        <div className={s.Poster}>
          <div className={s.MoviePoster}>
            <Image path={poster_path} alt={title} type='poster' />
            <div className={s.DarkBackdrop}></div>
          </div>
          <div className={s.Rating}>
            <div>{vote_average.toFixed(1)}</div>
          </div>
          <div className={s.MovieControls}>
            <MovieControls />
          </div>
        </div>
        <h3 className={s.MovieTitle}>{title}</h3>
        <div className={s.MovieFactsWrapper}>
          <div className={s.MovieGenre}>{genre}</div>
          <div className={s.DotDivider}></div>
          <div className={s.MovieDate}>{getYearString(release_date)}</div>
          <div className={s.DotDivider}></div>
          <div className={s.MovieCertification}>{certification}</div>
        </div>
      </div>
    </article>
  );
};

export default Movie;