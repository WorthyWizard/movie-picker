import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import s from './WatchlistPage.module.css';
import Hero from '../../components/Hero/Hero';
import WatchlistMovie from '../../components/Movie/WatchlistMovie';
import * as actions from '../../store/actions/movie';
import Loader from "../../components/UI/Loader/Loader";

const WatchlistPage = () => {

  const dispatch = useDispatch();
  const watchlistMovies = useSelector((state) => state.movie.watchlistMovies);

  useEffect(() => {
    dispatch(actions.getWatchlistMovies());
  }, [dispatch]);

  if(!watchlistMovies) return <Loader />;

  const movies = watchlistMovies.map(movie => <WatchlistMovie key={movie.id} data={movie} />);

  return (
    <div className={s.WatchlistPage}>
      <Hero text='Your nice watchlist, enjoy!'/>
      <div className={s.WatchlistContent}>
        {movies}
      </div>
    </div>
  );
};

export default WatchlistPage;
