import React from 'react';

import Button from '../../UI/Button/Button';
 
import s from './MovieControls.module.css';

const MovieControls = ({ type, onPlay, onAddToWatchlist, onRemove }) => {

  let controls = null;

  let watchlist = (
    <div className={`${s.ControlsWrapper} ${s.WatchlistMovieControls}`}>
      <div className={s.GoToMoviePage}><Button clicked={onPlay} type='play'/></div>
      <div className={s.RemoveFromWatchlist}><Button clicked={onRemove} type='remove'/></div>
    </div>
  );

  let regular = (
    <div className={s.ControlsWrapper}>
      <div className={s.AddToWatchlist}><Button clicked={onAddToWatchlist} type='watchlistRound'/></div>
      <div className={s.GoToMoviePage}><Button clicked={onPlay} type='play'/></div>
      <div className={s.RemoveFromWatchlist}><Button clicked={onRemove} type='remove'/></div>
    </div>
  );

  switch(type) {
    case 'watchlist':
      controls = watchlist;
      break;
    default:
      controls = regular;
  }

  return controls;
};

export default MovieControls;