import * as actionTypes from './actionTypes';
import TMDB from '../../api/TMDB';

export const setSingleMovie = (movie) => {
  return {
    type: actionTypes.SET_SINGLE_MOVIE,
    movie
  }
}

export const setSimilarMovies = (movies) => {
  return {
    type: actionTypes.SET_SIMILAR_MOVIES,
    movies
  }
}

export const getMovie = (id) => {
  return dispatch => {
    TMDB.getFullMovieData(id).then((response) => {
      dispatch(setSingleMovie(response.data));
    })
  }
}

export const getSimilarMovies = (id, page) => {
  return dispatch => {
    TMDB.getSimilarMovies(id, page).then((response) => {
      console.log(response.data.results);
      dispatch(setSimilarMovies(response.data.results));
    })
  }
}