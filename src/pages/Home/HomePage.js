import React from "react";

import s from './HomePage.module.css';
import FullsizeMovie from '../../components/Movie/FullsizeMovie';
import Movie from '../../components/Movie/Movie';
import MovieLight from '../../components/Movie/MovieLight';
import SliderBlock from '../../components/Slider/SliderBlock';

import { movieSample, getMoviesSample } from "../../common/moviesSample";

const HomePage = ({}) => {

  const movies = getMoviesSample().map((movie, i) => <Movie key={movie.id + `-${i}`} data={movie} />);

  const watchlistMovies = getMoviesSample().map((movie, i) => <MovieLight key={movie.id + `-${i}`} data={movie} />);

  return (
    <div className={s.Homepage}>
      <FullsizeMovie data={movieSample} />
      <SliderBlock 
        id={1} 
        title='Also recommended for you' 
        data={movies} 
      />
      <SliderBlock 
        id={2} 
        className={s.WatchlistBlock}
        title='Your Watchlist'
        data={watchlistMovies} 
      />
    </div>
  );
};

export default HomePage;
