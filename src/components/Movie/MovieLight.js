import React from 'react';

import Image from '../../components/Image/Image';
import MovieControls from './MovieControls/MovieControls';
import { useWatchlist } from '../../hooks/useWatchlist';
import s from './Movie.module.css';

const MovieLight = ({ data }) => {

  const { poster_path, title, id } = data;

  const { removeWatchlistMovie } = useWatchlist(id);

  return (
    <article className={s.Movie}>
      <div className={s.MovieInner}>
        <div className={s.Poster}>
          <div className={s.MoviePoster}>
            <Image path={poster_path} type='poster' alt={title} />
            <div className={s.DarkBackdrop}></div>
          </div>
          <div className={s.MovieControls}>
            <MovieControls 
              type='watchlist'
              movieID={id}
              onRemove={removeWatchlistMovie}
            />
          </div>
        </div>
        <h3 className={s.MovieTitle}>{title}</h3>
      </div>
    </article>
  );
};

export default MovieLight;