import React from 'react';
import { useDispatch } from 'react-redux';

import MovieControls from './MovieControls/MovieControls';
import { 
  getYearString,
  getFilteredGenre,
  getFilteredGenreByIDs
} from '../../common/utils';
import Image from '../../components/Image/Image';
import s from './Movie.module.css';
import * as actions from '../../store/actions/movie';

const Movie = ({ data }) => {

  const dispatch = useDispatch();

  const {  
    poster_path, vote_average, 
    title, genres, genre_ids,
    release_date, id, overview,
    runtime, backdrop_path
  } = data;

  const watchlistData = {
    backdrop_path, vote_average, 
    title, genres, genre_ids,
    release_date, id, overview,
    runtime
  }

  let genre = '';

  if(genres) {
    genre = getFilteredGenre(genres).slice(0, 2).join(', ');
  }
  if(genre_ids) {
    genre = getFilteredGenreByIDs(genre_ids).slice(0, 2).join(', ');
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
              onAddToWatchlist={() => dispatch(actions.postWatchlistMovie(watchlistData))} 
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