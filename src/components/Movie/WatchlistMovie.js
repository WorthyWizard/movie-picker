import React from 'react';

import { ImagesEndpoints } from '../../common/utils';
import MovieControls from './MovieControls/MovieControls';
 
import s from './Movie.module.css';

const Movie = (props) => {

  const {  
    poster_path, 
    original_title, 
  } = props.data;

  return (
    <article className={s.Movie}>
      <div className={s.MovieInner}>
        <div className={s.Poster}>
          <div className={s.MoviePoster}>
            <img src={ImagesEndpoints.poster() + (poster_path ? poster_path : '')} alt={original_title} />
            <div className={s.DarkBackdrop}></div>
          </div>
          <div className={s.MovieControls}>
            <MovieControls type='watchlist' />
          </div>
        </div>
        <h3 className={s.MovieTitle}>{original_title}</h3>
      </div>
    </article>
  );
};

export default Movie;