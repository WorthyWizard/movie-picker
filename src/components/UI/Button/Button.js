import React from 'react';

import s from './Button.module.css';
import { 
  PlayArrow, 
  Clear, 
  FavoriteBorderOutlined 
} from '@material-ui/icons';

const Button = ({ type, clicked }) => {

  let watchBtn = (
    <button className={`${s.Btn} ${s.WatchBtn} ${s.Quad}`} onClick={clicked}>
      <div className={`${s.Icon}`}><PlayArrow /></div>
      <div className={s.Title}>Watch</div>
    </button>
  );

  let watchlistBtn = (
    <button className={`${s.Btn} ${s.WatchlistBtn} ${s.Quad}`} onClick={clicked}>
      <div className={`${s.Icon}`}><FavoriteBorderOutlined /></div>
    </button>
  );

  let playBtn = (
    <button className={`${s.Btn} ${s.PlayBtn} ${s.Quad}`} onClick={clicked}>
      <div className={`${s.Icon}`}><PlayArrow /></div>
    </button>
  );

  let playBtnRound = (
    <button className={`${s.Btn} ${s.PlayBtn} ${s.Round}`} onClick={clicked}>
      <div className={`${s.Icon}`}><PlayArrow /></div>
    </button>
  );

  let watchBtnRound = (
    <button className={`${s.Btn} ${s.WatchBtn} ${s.Round}`} onClick={clicked}>
      <div className={`${s.Icon}`}><FavoriteBorderOutlined /></div>
    </button>
  );

  let removeBtn = (
    <button className={`${s.Btn} ${s.RemoveBtn} ${s.Quad}`} onClick={clicked}>
      <div className={`${s.Icon}`}><Clear /></div>
    </button>
  );

  let removeBtnRound = (
    <button className={`${s.Btn} ${s.RemoveBtn} ${s.Round}`} onClick={clicked}>
      <div className={`${s.Icon}`}><Clear /></div>
    </button>
  );

  switch(type) {
    case 'movie-watch':
      return watchBtn;
    case 'add-to-watchlist':
      return watchlistBtn;
    case 'play':
      return playBtn;
    case 'play-round':
      return playBtnRound;
    case 'add-to-watchlist-round':
      return watchBtnRound;
    case 'remove':
      return removeBtn;
    case 'remove-round':
      return removeBtnRound;
    default:
      return watchBtn;
  }
};

export default Button;