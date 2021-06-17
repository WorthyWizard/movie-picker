import React from 'react';

import s from './Button.module.css';
import { PlayArrow, Clear, FavoriteBorderOutlined } from '@material-ui/icons';

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

  let playBtnRound = (
    <button className={`${s.PlayBtnRound} ${s.RoundShape}`} onClick={props.clicked}>
      <div className={`${s.PlayIcon} ${s.Icon}`}><PlayArrow /></div>
    </button>
  );

  let watchBtnRound = (
    <button className={`${s.WatchBtnRound} ${s.RoundShape}`} onClick={props.clicked}>
      <div className={`${s.WatchlistIcon} ${s.Icon}`}><FavoriteBorderOutlined /></div>
    </button>
  );

  let removeBtnRound = (
    <button className={`${s.RemoveBtnRound} ${s.RoundShape}`} onClick={props.clicked}>
      <div className={`${s.RemoveIcon} ${s.Icon}`}><Clear /></div>
    </button>
  );

  switch(props.type) {
    case 'watch':
      current = watchBtn;
      break;
    case 'watchlist':
      current = watchlistBtn;
      break;
    case 'play':
      current = playBtnRound;
      break;
    case 'watchlistRound':
      current = watchBtnRound;
      break;
    case 'remove':
      current = removeBtnRound;
      break;
    default:
      current = watchBtn;
  }

  return current;
};

export default Button;