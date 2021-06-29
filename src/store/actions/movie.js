import * as actionTypes from './actionTypes';
import TMDB from '../../api/TMDB';

export const setSingleMovie = (movie) => {
  return {
    type: actionTypes.SET_SINGLE_MOVIE,
    movie
  }
}

export const getMovieData = (id) => {
  return dispatch => {
    TMDB.getFullMovieData(id).then((response) => {
      dispatch(setSingleMovie(response.data));
    })
  }
}