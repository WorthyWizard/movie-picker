import React from "react";
import { connect } from 'react-redux';

import s from './Search.module.css';
import Movie from '../../components/Movie/Movie';

import Hero from '../../components/Hero/Hero';

import { getMoviesSample, getMovieWithAPI } from '../../common/moviesSample';

/* testing */

// getMovieWithAPI("106646").then(data => {
//   return data.json();
// }).then(movie => {
//   console.log(movie);
// });
  
/* testing */

const Search = ({ }) => {
  
  const movies = getMoviesSample(20).map(movie => <Movie key={movie.id} data={movie} />);

  return (
    <div className={s.Search}>
      <Hero text='Go ahead and search' />
      <div className={s.SearchContent}>
        
        <div className={s.SearchResult}>
          {movies}
        </div>
      </div>
    </div>
  );
};

export default Search;
