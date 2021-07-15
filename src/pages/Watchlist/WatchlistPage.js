import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import s from './WatchlistPage.module.css';
import Hero from '../../components/Hero/Hero';
import WatchlistMovie from '../../components/Movie/WatchlistMovie';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';

const WatchlistPage = () => {

  const dispatch = useDispatch();
  const watchlistMovies = useSelector(state => state.watchlist.movies);
  const isLoading = useSelector(state => state.watchlist.isLoading);

  useEffect(() => {
    dispatch(actions.getWatchlistMovies());
  }, [dispatch]);

  let content = null;
  const movies = watchlistMovies.map(movie => <WatchlistMovie key={movie.id} data={movie} />);

  if(isLoading) {
    content = <Spinner />;
  } else {
    content = (
      <div className={s.WatchlistContent}>
        {movies}
      </div>
    );
  }

  // if(!isLoading && watchlistMovies.length > 0) {
  //   content = (
  //     <div className={s.WatchlistContent}>
  //       {movies}
  //     </div>
  //   );
  // } else {
  //   content = <Spinner />;
  // }

  return (
    <div className={s.WatchlistPage}>
      <Hero text='Your nice watchlist, enjoy!'/>
      {content}
    </div>
  );
};

export default WatchlistPage;
