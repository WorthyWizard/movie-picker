import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MovieControls from './MovieControls/MovieControls';
import {
  LocalStorageItem, 
  getYearString,
  getFilteredGenre,
  getFilteredGenreByIDs
} from '../../common/utils';
import Image from '../../components/Image/Image';
import s from './Movie.module.css';
import * as actions from '../../store/actions/movie';

const Movie = ({ data }) => {

  const {  
    poster_path, vote_average, 
    title, genres, genre_ids,
    release_date, id, overview,
    runtime, backdrop_path
  } = data;

  const ls = new LocalStorageItem();
  ls.init('watchlistMovies', []);

  const dispatch = useDispatch();
  const [hasItem, setHasItem] = useState(ls.has(id));
  const watchlistMovies = useSelector((state) => state.movie.watchlistMovies);

  const watchlistData = {
    backdrop_path, vote_average, 
    title, genres, genre_ids,
    release_date, id, overview,
    runtime
  }

  let genre = '';

  if(genres) {
    genre = getFilteredGenre(genres).slice(0, 2).join(', ');
  } else if(genre_ids) {
    genre = getFilteredGenreByIDs(genre_ids).slice(0, 2).join(', ');
  }

  const postWatchlistMovie = (data) => {
    ls.toggle(id);
    const hasItem = ls.has(id);
    setHasItem(hasItem);
    if(hasItem) {
      dispatch(actions.postWatchlistMovie(data))
    } else {
      const filteredMovie = watchlistMovies.filter(movie => id === movie.id);
      if(filteredMovie.length > 0) {
        dispatch(actions.deleteWatchlistMovie(filteredMovie[0].dbID))
      }
    }
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
            <MovieControls 
              onPlayLink={`/movie/${id}`}
              onAddToWatchlist={() => postWatchlistMovie(watchlistData)} 
              addToWatchlistActive={hasItem}
            />
          </div>
        </div>
        <h3 className={s.MovieTitle}>{title}</h3>
        <div className={s.MovieFactsWrapper}>
          <div className={s.MovieGenre}>{genre}</div>
          <div className={s.DotDivider}></div>
          <div className={s.MovieDate}>{getYearString(release_date)}</div>
        </div>
      </div>
    </article>
  );
};

export default Movie;