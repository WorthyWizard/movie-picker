import React from "react";
import { connect } from 'react-redux';
import { getMovies } from './state/homeActions';

const Home = ({ }) => {

  return (
    <>
      <h2>Soon</h2>
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
