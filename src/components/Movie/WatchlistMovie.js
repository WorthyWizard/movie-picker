import React from 'react';

import { 
  ImagesEndpoints, 
  getGenreString, 
  getRuntimeString,
  getMovieCertification
} from '../../common/utils';
import Button from '../UI/Button/Button';

import s from './WatchlistMovie.module.css';

const WatchlistMovie = (props) => {

  const { 
    backdrop_path,
    vote_average,
    title,
    genres, 
    runtime, 
    overview,
    release_dates
  } = props.data;

  return (
    <article className={s.WatchlistMovie} style={{ background: `url(${ImagesEndpoints.backgrop() + backdrop_path})` }}>
      <div className={s.WatchlistMovieInner}>
        <div className={s.Rating}>
          <div>{vote_average.toFixed(1)}</div>
        </div>
        <div className={s.MovieInfo}>
          <h2 className={s.MovieTitle}>{title}</h2>
          <div className={s.MovieFactsWrapper}>
            <div className={s.MovieGenre}>{getGenreString(genres)}</div>
            <div className={s.MovieRuntime}>{getRuntimeString(runtime)}</div>
            <div className={s.MoviePG}>{getMovieCertification(release_dates.results)}</div>
          </div>
          <p className={s.MovieOverview}>{overview}</p>
        </div>
        <div className={s.MovieButtons}>
          <div className={s.MovieWatchBtn}>
            <Button type='play' />
          </div>
          <div className={s.MovieRemoveBtn}>
            <Button type='remove' />
          </div>
        </div>
      </div>
      <div className={s.DarkBackdrop}></div>
    </article>
  );
};

export default WatchlistMovie;