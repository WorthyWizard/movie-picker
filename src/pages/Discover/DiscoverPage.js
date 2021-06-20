import React from "react";
import { connect } from 'react-redux';

import s from './Discover.module.css';
import Movie from '../../components/Movie/Movie';
import SliderBlock from '../../components/Slider/SliderBlock';
import background from '../../assets/Hero-image.jpg';

import Hero from '../../components/Hero/Hero';

import { getMoviesSample } from '../../common/moviesSample';

const Discover = ({ }) => {
  
  const movies = getMoviesSample().map(movie => <Movie key={movie.id} data={movie} />);

  return (
    <div className={s.Homepage}>
      <Hero text='Discover new awesome movies' styles={{ backgroundImage: `url(${background})` }} />
      <SliderBlock 
        id={1} 
        title='Check out this trending titles' 
        movies={movies} 
      />
      <SliderBlock 
        id={2} 
        className={s.WatchlistBlock}
        title='Top rated movies just for you'
        movies={movies}
      />
    </div>
  );
};

export default Discover;
