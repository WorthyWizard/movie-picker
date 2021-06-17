import React from 'react';

import { ImagesEndpoints, getGenreString, getRuntimeString } from '../../common/utils';
import Button from '../UI/Button/Button';

import s from './FullsizeMovie.module.css';

const FullsizeMovie = (props) => {

  const { 
    backdrop_path, 
    poster_path, 
    vote_average, 
    original_title, 
    genres, runtime, 
    overview, 
  } = props.data;

  return (
    <>
      <section className={s.FullsizeMovie} style={{ background: `url(${ImagesEndpoints.backgrop() + backdrop_path})` }}>
        <div className={s.FullsizeMovieInner}>
          <div className={s.Poster}>
            <img src={ImagesEndpoints.poster() + (poster_path ? poster_path : '')} alt={original_title} />
            <div className={s.Rating}>
              <div>{vote_average}</div>
            </div>
          </div>
          <div className={s.MovieInfo}>
            <h2 className={s.MovieTitle}>{original_title}</h2>
            <div className={s.MovieFactsWrapper}>
              <div className={s.MovieGenre}>{getGenreString(genres)}</div>
              <div className={s.MovieRuntime}>{getRuntimeString(runtime)}</div>
              <div className={s.MoviePG}>PG-13</div>
            </div>
            <p className={s.MovieOverview}>{overview}</p>
            <div className={s.MovieButtons}>
              <div className={s.MovieWatchBtn}>
                <Button type='watch' />
              </div>
              <div className={s.MovieWatchlistBtn}>
                <Button type='watchlist' />
              </div>
            </div>
          </div>
        </div>
        <div className={s.DarkBackdrop}></div>
      </section>
    </>
  );
};

export default FullsizeMovie;