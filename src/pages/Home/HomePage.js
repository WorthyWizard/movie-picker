import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import s from './HomePage.module.css';
import FullsizeMovie from '../../components/Movie/FullsizeMovie';
import Movie from '../../components/Movie/Movie';
import MovieLight from '../../components/Movie/MovieLight';
import SliderBlock from '../../components/Slider/SliderBlock';
import * as actions from '../../store/actions';

import { movieSample } from "../../common/moviesSample";

const HomePage = () => {

  const dispatch = useDispatch();
  const watchlist = useSelector(state => state.watchlist.movies);
  const isWatchlistLoading = useSelector(state => state.watchlist.isLoading);
  const recommended = useSelector(state => state.recommended.movies);
  const isRecommendedLoading = useSelector(state => state.recommended.isLoading);

  useEffect(() => {
    dispatch(actions.getRecommendedMovies(157336));
    dispatch(actions.getWatchlistMovies());
  }, [dispatch]);

  const watchlistMovies = watchlist.map(movie => <MovieLight key={movie.id} data={movie} />);
  const recommendedMovies = recommended.map(movie => <Movie key={movie.id} data={movie} />);

  return (
    <div className={s.Homepage}>
      <FullsizeMovie data={movieSample} />
      <SliderBlock 
        id={1} 
        title='Also recommended for you' 
        data={recommendedMovies}
        isLoading={isRecommendedLoading}
      />
      <SliderBlock 
        id={2} 
        className={s.WatchlistBlock}
        title='Your Watchlist'
        data={watchlistMovies}
        isLoading={isWatchlistLoading}
        placeholderText='Add your first movie to your watchlist!'
      />
    </div>
  );
};

export default HomePage;
