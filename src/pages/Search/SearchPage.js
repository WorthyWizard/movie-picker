import React from "react";
import { useDispatch, useSelector } from "react-redux";

import s from './SearchPage.module.css';
import Hero from '../../components/Hero/Hero';
import Grid from '../../components/Grid/Grid';
import Search from '../../components/Search/Search';
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from '../../store/actions';
import { getFilteredMovies } from '../../common/utils';

const SearchPage = () => {

  const dispatch = useDispatch();
  const searchedMovies = useSelector(state => state.search.movies);
  const filteredMovies = getFilteredMovies(searchedMovies);
  const isLoading = useSelector(state => state.search.isLoading);
  
  const onMovieSearch = (query) => {
    dispatch(actions.searchMovies(query));
  }

  let content = null;

  if(isLoading) {
    content = <Spinner />;
  } else {
    content = (
      content = <Grid data={filteredMovies} />
    );
  }

  return (
    <div className={s.Search}>
      <Hero text='Go ahead and search' />
      <section className={s.SearchContent}>
        <Search onSearch={onMovieSearch} />
        <div className={s.SearchResult}>
          {content}
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
