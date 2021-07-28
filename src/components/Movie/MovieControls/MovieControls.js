import React from 'react';

import Button from '../../UI/Button/Button';
import s from './MovieControls.module.css';

const MovieControls = (props) => {

  const {
    type, movieID, 
    active = false, 
    onRemove, onPlay,
    onAddToWatchlist
  } = props;

  let controls = null;

  let watchlist = (
    <div className={`${s.ControlsWrapper} ${s.WatchlistMovieControls}`}>
      <div className={s.GoToMoviePage}><Button clicked={onPlay} type='play-round' link={`/movie/${movieID}`} /></div>
      <div className={s.RemoveFromWatchlist}><Button clicked={onRemove} type='remove-round'/></div>
    </div>
  );

  let restricted = (
    <div className={`${s.ControlsWrapper} ${s.RestrictedControls}`}>
      <div className={s.AddToWatchlist}><Button clicked={onAddToWatchlist} isActive={active} type='add-to-watchlist-round'/></div>
      <div className={s.GoToMoviePage}><Button clicked={onPlay} type='play-round' link={`/movie/${movieID}`} /></div>
    </div>
  );

  let full = (
    <div className={s.ControlsWrapper}>
      <div className={s.AddToWatchlist}><Button clicked={onAddToWatchlist} isActive={active} type='add-to-watchlist-round'/></div>
      <div className={s.GoToMoviePage}><Button clicked={onPlay} type='play-round' link={`/movie/${movieID}`} /></div>
      <div className={s.RemoveFromWatchlist}><Button clicked={onRemove} type='remove-round'/></div>
    </div>
  );

  switch(type) {
    case 'watchlist':
      controls = watchlist;
      break;
    case 'restricted':
      controls = restricted;
      break;
    default:
      controls = restricted;
  }

  return controls;
};

export default MovieControls;