import React from "react";
import { connect } from 'react-redux';

import s from './SearchPage.module.css';
import Hero from '../../components/Hero/Hero';
import Grid from '../../components/Grid/Grid';
import Search from '../../components/Search/Search';

import { getMoviesSample, getMovieWithAPI } from '../../common/moviesSample';

/* testing */

getMovieWithAPI(24).then(movie => {
  console.log(movie);
})
  
/* testing */

const SearchPage = ({ }) => {

  return (
    <div className={s.Search}>
      <Hero text='Go ahead and search' />
      <section className={s.SearchContent}>
        <Search />
        <div className={s.SearchResult}>
          <Grid data={getMoviesSample(17)} />
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
