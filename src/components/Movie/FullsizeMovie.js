import React from 'react';
import { useColor } from 'color-thief-react';

import { 
  ImagesEndpoints, 
  getGenreString, 
  getRuntimeString,
  getMovieCertification,
  getAdjustedGradientOpacity
} from '../../common/utils';
import Button from '../UI/Button/Button';
import Image from '../../components/Image/Image';
import s from './FullsizeMovie.module.css';

const FullsizeMovie = ({ data, type = '' }) => {

  const { 
    backdrop_path, poster_path, 
    vote_average, title, 
    genres, runtime, overview, 
    tagline, release_dates, id
  } = data;
  
  const { data: colorCode } = useColor(ImagesEndpoints.poster + poster_path, 'rgbArray', { crossOrigin: 'Anonymous' });

  if(colorCode) {
    const opacity = getAdjustedGradientOpacity(colorCode);
    document.documentElement.style.setProperty('--movie-gradient-opacity', `${opacity}`);
    document.documentElement.style.setProperty('--movie-gradient', colorCode.join(','));
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
  
  let sectionClass = type === 'movie-page' ? s.MoviePage : s.RegularPage;

  return (
    <section 
      className={`${s.FullsizeMovie} ${sectionClass} ${colorCode ? s.GradientColor : '' }`} style={movieBackdrop}>
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
      <div className={s.BackgroundGradient}></div>
    </section>
  );
};

export default FullsizeMovie;