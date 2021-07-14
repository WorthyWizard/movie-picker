import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import s from './WatchlistPage.module.css';
import Hero from '../../components/Hero/Hero';
import WatchlistMovie from '../../components/Movie/WatchlistMovie';
import * as actions from '../../store/actions';
import Loader from "../../components/UI/Loader/Loader";

const WatchlistPage = () => {

  const dispatch = useDispatch();
  const watchlistMovies = useSelector(state => state.watchlist.movies);
  const isLoading = useSelector(state => state.watchlist.isLoading);

  useEffect(() => {
    dispatch(actions.getWatchlistMovies());
  }, [dispatch]);

  // if(isLoading && watchlistMovies.length !== 0) return <Loader />;

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
