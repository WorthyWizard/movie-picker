import React from 'react';

import { 
  ImagesEndpoints, 
  getGenreString, 
  getRuntimeString,
  getMovieCertification
} from '../../common/utils';
import Button from '../UI/Button/Button';

import s from './FullsizeMovie.module.css';

const FullsizeMovie = ({ data, type = '' }) => {

  const { 
    backdrop_path, poster_path, 
    vote_average, title, 
    genres, runtime, overview, 
    tagline, release_dates
  } = data;

  let rating = (
    <div className={`${s.Rating}`}>
      <div>{vote_average.toFixed(1)}</div>
    </div>
  );

  let movieTagline = (
    <p className={s.Tagline}>{tagline}</p>
  );

  let watchBtn = (
    <div className={s.MovieWatchBtn}>
      <Button type='movie-watch' />
    </div>
  );

  let movieBackdrop = type != 'movie-page' ? { background: `url(${ImagesEndpoints.backgrop() + backdrop_path})` } : {};

  return (
    <section className={`${s.FullsizeMovie} ${(type == 'movie-page' ? `${s.MoviePage}` : `${s.RegularPage}`)}`} style={movieBackdrop}>
      <div className={s.FullsizeMovieInner}>
        <div className={s.Poster}>
          <img src={ImagesEndpoints.poster() + (poster_path ? poster_path : '')} alt={title} />
          {type != 'movie-page' ? rating : null}
        </div>
        <div className={s.MovieInfo}>
          {type == 'movie-page' ? movieTagline : null}
          <h2 className={s.MovieTitle}>{title}
            {type == 'movie-page' ? rating : null}
          </h2>
          <div className={s.MovieFactsWrapper}>
            <div className={s.MovieGenre}>{getGenreString(genres)}</div>
            <div className={s.MovieRuntime}>{getRuntimeString(runtime)}</div>
            <div className={s.MoviePG}>{getMovieCertification(release_dates.results)}</div>
          </div>
          <p className={s.MovieOverview}>{overview}</p>
          <div className={s.MovieButtons}>
            {type != 'movie-page' ? watchBtn : null}
            <div className={s.MovieWatchlistBtn}>
              <Button type='add-to-watchlist' />
            </div>
          </div>
        </div>
      </div>
      <div className={s.DarkBackdrop}></div>
    </section>
  );
};

export default FullsizeMovie;