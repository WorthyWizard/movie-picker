import * as actionTypes from './actionTypes';
import TMDB from '../../api/TMDB';
import Database from '../../api/database';
import { objectToArray } from '../../common/utils';

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

/*
export const getSimilarMovies = (id, page) => {
  return dispatch => {
    TMDB.getSimilarMovies(id, page).then(response => {
      dispatch(setSimilarMovies(response.data.results));
    })
  }
}
*/

export const setWatchlistMovies = (movies) => {
  return {
    type: actionTypes.SET_WATCHLIST_MOVIES,
    movies
  }
}

export const postWatchlistMovie = (data) => {
  return dispatch => {
    Database.postWatchlistMovie(data).then(res => {
      console.log(res);
    })
  }
}

export const getWatchlistMovies = () => {
  return dispatch => {
    Database.getWatchlistMovies().then(res => {
      dispatch(setWatchlistMovies(objectToArray(res.data)));
    })
  }
}
