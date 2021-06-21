import React from "react";
import { connect } from 'react-redux';

import s from './HomePage.module.css';
import FullsizeMovie from '../../components/Movie/FullsizeMovie';
import Movie from '../../components/Movie/Movie';
import WatchlistMovie from '../../components/Movie/WatchlistMovie';
import { getMovies } from './state/homeActions';
import SliderBlock from '../../components/Slider/SliderBlock';

import { movieSample, getMoviesSample } from "../../common/moviesSample";

const Home = ({}) => {

  const movies = getMoviesSample().map(movie => <Movie key={movie.id} data={movie} />);

  const watchlistMovies = getMoviesSample().map(movie => <WatchlistMovie key={movie.id} data={movie} />);

  return (
    <div className={s.Homepage}>
      <FullsizeMovie data={movieSample} />
      <SliderBlock 
        id={1} 
        title='Also recommended for you' 
        movies={movies} 
      />
      <SliderBlock 
        id={2} 
        className={s.WatchlistBlock}
        title='Your Watchlist'
        movies={watchlistMovies} 
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.home.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoviesBySearch: (query) => dispatch(getMovies(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
