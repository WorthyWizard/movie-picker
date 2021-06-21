import React from "react";
import { connect } from 'react-redux';

import s from './SearchPage.module.css';
import Movie from '../../components/Movie/Movie';
import Hero from '../../components/Hero/Hero';
import Grid from '../../components/Grid/Grid';

import { getMoviesSample, getMovieWithAPI } from '../../common/moviesSample';

/* testing */

// getMovieWithAPI("106646").then(data => {
//   return data.json();
// }).then(movie => {
//   console.log(movie);
// });
  
/* testing */

const Search = ({ }) => {

  return (
    <div className={s.Search}>
      <Hero text='Go ahead and search' />
      <section className={s.SearchContent}>
        <div className={s.SearchResult}>
          <Grid data={getMoviesSample(17)} />
        </div>
      </section>
    </div>
  );
};

export default Search;
