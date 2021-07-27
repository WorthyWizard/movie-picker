import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usePalette } from 'color-thief-react';

import { 
  ImagesEndpoints, 
  getGenreString, 
  getRuntimeString,
  getMovieCertification,
  getAdjustedGradient
} from '../../common/utils';
import Button from '../UI/Button/Button';
import Image from '../../components/Image/Image';
import s from './FullsizeMovie.module.css';
import * as actions from '../../store/actions';
import { watchlist } from '../../common/localStorage';

const FullsizeMovie = ({ data, type = '' }) => {

  const { 
    backdrop_path, poster_path, 
    vote_average, title, 
    genres, runtime, overview, 
    tagline, release_dates, id
  } = data;

  const dispatch = useDispatch();
  const [isBtnActive, setIsBtnActive] = useState(watchlist.has(id));
  const watchlistMovies = useSelector(state => state.watchlist.movies);
  const isMovieLoading = useSelector(state => state.watchlist.isMovieLoading);

  let gradientClassName = '';
  let sectionClass = type === 'movie-page' ? s.MoviePage : s.RegularPage;
  const certification = getMovieCertification(release_dates.results);

  if(type === 'movie-page') {
    const { data: colorCode } = usePalette(ImagesEndpoints.poster + poster_path, 2, 'rgbArray', { crossOrigin: 'Anonymous' });
  
    if(colorCode) {
      const colorObject = getAdjustedGradient(colorCode);
      document.documentElement.style.setProperty('--movie-gradient', colorObject.color);
      document.documentElement.style.setProperty('--movie-gradient-opacity', `${colorObject.opacity}`);
      gradientClassName = s.GradientColor;
    }
  }

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
      <Button type='movie-watch' link={`/movie/${id}`} />
    </div>
  );

  let movieBackdrop = type != 'movie-page' ? 
    { background: `url(${ImagesEndpoints.backdrop + backdrop_path})` } : 
    { };

  const toggleWatchlistMovie = useCallback(data => {
    if(!isMovieLoading) {
      console.log('movie isnt loading');
      const hasItem = watchlist.has(id);
      console.log('has item?', hasItem);
      if(!hasItem) {
        dispatch(actions.postWatchlistMovie(data, watchlist, setIsBtnActive));
      } else {
        const filteredMovie = watchlistMovies.filter(movie => id === movie.id);
        console.log(filteredMovie)
        if(filteredMovie.length > 0) {
          dispatch(actions.deleteWatchlistMovie(filteredMovie[0].dbID, id, watchlist, setIsBtnActive));
        }
      }
    }
  }, []);

  return (
    <section 
      className={`${s.FullsizeMovie} ${sectionClass} ${gradientClassName}`} style={movieBackdrop}>
      <div className={s.FullsizeMovieInner}>
        <div className={s.Poster}>
          <Image 
            path={poster_path}  
            type='poster' 
            alt={title} 
          />
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
            { certification &&
              <div className={s.MoviePG}>{certification}</div>
            }
          </div>
          <p className={s.MovieOverview}>{overview}</p>
          <div className={s.MovieButtons}>
            {type != 'movie-page' ? watchBtn : null}
            <div className={s.MovieWatchlistBtn}>
              <Button 
                type='add-to-watchlist' 
                clicked={() => toggleWatchlistMovie(data)} 
                isActive={isBtnActive}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={s.DarkBackdrop}></div>
      <div className={s.BackgroundGradient}></div>
    </section>
  );
};

export default FullsizeMovie;