import React from 'react';
import { Link } from 'react-router-dom';

import s from './Button.module.css';
import { 
  PlayArrow, 
  Clear, 
  Favorite,
  FavoriteBorder 
} from '@material-ui/icons';

const Button = ({ type, clicked, title = '', className = '', href, link = '', isActive = false }) => {

  let watchBtn = (
    <button className={`${s.Btn} ${s.WatchBtn} ${className}`} onClick={clicked}>
      <Link to={link}>
        <div className={`${s.Icon}`}><PlayArrow /></div>
        <div className={s.Title}>Watch</div>
      </Link>
    </button>
  );

  let watchlistBtn = (
    <button className={`${s.Btn} ${s.WatchlistBtn} ${s.Box} ${className}`} onClick={clicked}>
      <div className={`${s.Icon}`}><FavoriteBorder /></div>
    </button>
  );

  let playBtn = (
    <button className={`${s.Btn} ${s.PlayBtn} ${s.Quad} ${className}`} onClick={clicked}>
      <Link to={link}>
        <div className={`${s.Icon}`}><PlayArrow /></div>
      </Link>
    </button>
  );

  let playBtnRound = (
    <button className={`${s.Btn} ${s.PlayBtn} ${s.Round} ${className}`} onClick={clicked}>
      <Link to={link}>
        <div className={`${s.Icon}`}><PlayArrow /></div>
      </Link>
    </button>
  );

  let watchlistBtnRound = (
    <button className={`${s.Btn} ${s.WatchlistBtn} ${s.Round} ${className} ${isActive ? s.Active : ''}`} onClick={clicked}>
      <div className={`${s.Icon}`}>{ isActive ? <Favorite/> : <FavoriteBorder /> }</div>
    </button>
  );

  let removeBtn = (
    <button className={`${s.Btn} ${s.RemoveBtn} ${s.Box} ${className}`} onClick={clicked}>
      <div className={`${s.Icon}`}><Clear /></div>
    </button>
  );

  let removeBtnRound = (
    <button className={`${s.Btn} ${s.RemoveBtn} ${s.Round} ${className}`} onClick={clicked}>
      <div className={`${s.Icon}`}><Clear /></div>
    </button>
  );

  let textBtn = (
    <a target='_blank' href={href} className={`${s.Btn} ${s.TextBtn} ${s.Box} ${className}`} onClick={clicked}>
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
      return watchlistBtnRound;
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