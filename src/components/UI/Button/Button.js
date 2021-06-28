import React from 'react';

import s from './Button.module.css';
import { 
  PlayArrow, 
  Clear, 
  FavoriteBorderOutlined 
} from '@material-ui/icons';

const Button = ({ type, clicked, title = '', className = '', link }) => {

  let watchBtn = (
    <button className={`${s.Btn} ${s.WatchBtn} ${s.Quad} ${className}`} onClick={clicked}>
      <div className={`${s.Icon}`}><PlayArrow /></div>
      <div className={s.Title}>Watch</div>
    </button>
  );

  let watchlistBtn = (
    <button className={`${s.Btn} ${s.WatchlistBtn} ${s.Quad} ${className}`} onClick={clicked}>
      <div className={`${s.Icon}`}><FavoriteBorderOutlined /></div>
    </button>
  );

  let playBtn = (
    <button className={`${s.Btn} ${s.PlayBtn} ${s.Quad} ${className}`} onClick={clicked}>
      <div className={`${s.Icon}`}><PlayArrow /></div>
    </button>
  );

  let playBtnRound = (
    <button className={`${s.Btn} ${s.PlayBtn} ${s.Round} ${className}`} onClick={clicked}>
      <div className={`${s.Icon}`}><PlayArrow /></div>
    </button>
  );

  let watchBtnRound = (
    <button className={`${s.Btn} ${s.WatchBtn} ${s.Round} ${className}`} onClick={clicked}>
      <div className={`${s.Icon}`}><FavoriteBorderOutlined /></div>
    </button>
  );

  let removeBtn = (
    <button className={`${s.Btn} ${s.RemoveBtn} ${s.Quad} ${className}`} onClick={clicked}>
      <div className={`${s.Icon}`}><Clear /></div>
    </button>
  );

  let removeBtnRound = (
    <button className={`${s.Btn} ${s.RemoveBtn} ${s.Round} ${className}`} onClick={clicked}>
      <div className={`${s.Icon}`}><Clear /></div>
    </button>
  );

  let textBtn = (
    <a target='_blank' href={link} className={`${s.Btn} ${s.TextBtn} ${s.Quad} ${className}`} onClick={clicked}>
      <p className={`${s.BtnText}`}>{title}</p>
    </a>
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
    case 'text':
      return textBtn;
    default:
      return watchBtn;
  }
};

export default Button;