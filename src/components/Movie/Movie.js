import React from 'react';

import MovieControls from './MovieControls/MovieControls';

import { ImagesEndpoints, getYearString } from '../../common/utils';
import s from './Movie.module.css';

const Movie = (props) => {

  const {  
    poster_path, 
    vote_average, 
    original_title, 
    genres, 
    release_date 
  } = props.data;

  return (
    <article className={s.Movie}>
      <div className={s.MovieInner}>
        <div className={s.Poster}>
          <div className={s.MoviePoster}>
            <img src={ImagesEndpoints.poster() + (poster_path ? poster_path : '')} alt={original_title} />
            <div className={s.DarkBackdrop}></div>
          </div>
          <div className={s.Rating}>
            <div>{vote_average.toFixed(1)}</div>
          </div>
          <div className={s.MovieControls}>
            <MovieControls />
          </div>
        </div>
        <h3 className={s.MovieTitle}>{original_title}</h3>
        <div className={s.MovieFactsWrapper}>
          <div className={s.MovieGenre}>{genres[0].name}</div>
          <div className={s.DotDivider}></div>
          <div className={s.MovieDate}>{getYearString(release_date)}</div>
          <div className={s.DotDivider}></div>
          <div className={s.MoviePG}>PG-13</div>
        </div>
      </div>
    </article>
  );
};

export default Movie;