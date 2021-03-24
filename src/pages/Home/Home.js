import React from "react";
import { connect } from 'react-redux';
import { getMovies } from './state/homeActions';

import Movie from "../../common/Movie";
import Search from "../../common/Search";

const Home = (props) => {

  let moviesList = "No movies found";

  if (props.movies.length > 0) {
    moviesList = props.movies.map((movie) => (
      <Movie
        key={movie.id}
        original_title={movie.original_title}
        poster_path={movie.poster_path}
        overview={movie.overview}
      />
    ));
  }

  return (
    <>
      <Search onMovieSearch={props.getMoviesBySearch} />
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {moviesList}
      </div>
    </>
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
