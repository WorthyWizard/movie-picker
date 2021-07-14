import * as actionTypes from './actionTypes';
import TMDB from '../../api/TMDB';

const setSingleMovie = (movie) => {
  return {
    type: actionTypes.SET_SINGLE_MOVIE,
    movie
  }
}

const singleMovieFetchStart = () => {
  return {
    type: actionTypes.SINGLE_MOVIE_FETCH_START,
  }
}

const singleMovieFetchSuccess = () => {
  return {
    type: actionTypes.SINGLE_MOVIE_FETCH_SUCCESS,
  }
}

const singleMovieFetchError = (error) => {
  return {
    type: actionTypes.SINGLE_MOVIE_FETCH_FAIL,
    error
  }
}

export const getMovie = (id) => {
  return dispatch => {
    dispatch(singleMovieFetchStart());
    TMDB.getFullMovieData(id).then(response => {
      dispatch(setSingleMovie(response.data));
      dispatch(singleMovieFetchSuccess());
    }).catch(error => {
      dispatch(singleMovieFetchError(error));
    }) 
  }
}


