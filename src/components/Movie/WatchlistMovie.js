import React from 'react';

import {
  ImagesEndpoints,
  getFilteredGenre,
  getFilteredGenreByIDs,
  getRuntimeString
} from '../../common/utils';
import Button from '../UI/Button/Button';
import s from './WatchlistMovie.module.css';

const WatchlistMovie = ({ data }) => {

  const { 
    backdrop_path, vote_average,
    title, genres, genre_ids, id, 
    overview,
  } = data;

  let genre = '';

  if(genres) {
    genre = getFilteredGenre(genres).join(', ');
  } else if(genre_ids) {
    genre = getFilteredGenreByIDs(genre_ids).join(', ');
  }

  return (
    <article className={s.WatchlistMovie} style={{ background: `url(${ImagesEndpoints.backdrop + backdrop_path})` }}>
      <div className={s.WatchlistMovieInner}>
        <div className={s.Rating}>
          <div>{vote_average.toFixed(1)}</div>
        </div>
        <div className={s.MovieInfo}>
          <h2 className={s.MovieTitle}>{title}</h2>
          <div className={s.MovieFactsWrapper}>
            <div className={s.MovieGenre}>{genre}</div>
          </div>
          <p className={s.MovieOverview}>{overview}</p>
        </div>
        <div className={s.MovieButtons}>
          <div className={s.MovieWatchBtn}>
            <Button type='play' link={`/movie/${id}`} />
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