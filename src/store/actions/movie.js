import * as actionTypes from './actionTypes';
import TMDB from '../../api/TMDB';

export const setSingleMovie = (movie) => {
  return {
    type: actionTypes.SET_SINGLE_MOVIE,
    movie
  }
}

export const singleMovieFetchStart = () => {
  return {
    type: actionTypes.SINGLE_MOVIE_FETCH_START,
  }
}

export const singleMovieFetchSuccess = () => {
  return {
    type: actionTypes.SINGLE_MOVIE_FETCH_SUCCESS,
  }
}

export const singleMovieFetchError = (error) => {
  return {
    type: actionTypes.SINGLE_MOVIE_FETCH_ERROR,
    error
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
    dispatch(singleMovieFetchStart());
    TMDB.getFullMovieData(id).then(response => {
      dispatch(setSingleMovie(response.data));
      dispatch(singleMovieFetchSuccess());
    }).catch(error => {
      dispatch(singleMovieFetchError(error));
    }) 
  }
}

export const getSimilarMovies = (id, page) => {
  return dispatch => {
    TMDB.getSimilarMovies(id, page).then(response => {
      dispatch(setSimilarMovies(response.data.results));
    })
  }
}