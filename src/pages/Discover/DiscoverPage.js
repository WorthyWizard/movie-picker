import React from "react";
import { connect } from 'react-redux';

import s from './DiscoverPage.module.css';
import Movie from '../../components/Movie/Movie';
import SliderBlock from '../../components/Slider/SliderBlock';
import background from '../../assets/Hero-image.jpg';

import Hero from '../../components/Hero/Hero';

import { getMoviesSample } from '../../common/moviesSample';

const DiscoverPage = ({ }) => {
  
  const movies = getMoviesSample().map((movie, i) => <Movie key={movie.id + `-${i}`} data={movie} />);

  return (
    <div className={s.Homepage}>
      <Hero text='Discover new awesome movies' styles={{ backgroundImage: `url(${background})` }} />
      <SliderBlock 
        id={1} 
        title='Check out this trending titles' 
        data={movies} 
      />
      <SliderBlock 
        id={2} 
        className={s.WatchlistBlock}
        title='Top rated movies just for you'
        data={movies}
      />
    </div>
  );
};

export default DiscoverPage;
