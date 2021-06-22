import React from "react";
import { connect } from 'react-redux';

import s from './WatchlistPage.module.css';
import Hero from '../../components/Hero/Hero';
import WatchlistMovie from '../../components/Movie/WatchlistMovie';

import { getMoviesSample } from '../../common/moviesSample';

const WatchlistPage = ({ }) => {
  
  const movies = getMoviesSample(5).map((movie, i) => <WatchlistMovie key={movie.id + `-${i}`} data={movie} />);

  return (
    <div className={s.Homepage}>
      <Hero text='Your nice watchlist, enjoy!'/>
      <div className={s.WatchlistContent}>
        {movies}
      </div>
    </div>
  );
};

export default WatchlistPage;
