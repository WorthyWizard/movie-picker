import React from 'react';

import s from './Button.module.css';
import { PlayArrow } from '@material-ui/icons';
import { FavoriteBorderOutlined } from '@material-ui/icons';

const Button = (props) => {

  let current = null;

  let watchBtn = (
    <button className={`${s.WatchBtn} ${s.QuadShape}`} onClick={props.clicked}>
      <div className={s.PlayIcon}><PlayArrow /></div>
      <div className={s.Title}>Watch</div>
    </button>
  );

  let watchlistBtn = (
    <button className={`${s.WatchlistBtn} ${s.QuadShape}`} onClick={props.clicked}>
      <div className={s.WatchlistIcon}><FavoriteBorderOutlined /></div>
    </button>
  ); 

  switch(props.type) {
    case 'watch':
      current = watchBtn;
      break;
    case 'watchlist':
      current = watchlistBtn;
      break;  
    default:
      current = watchBtn;
  }

  return current;
};

export default Button;