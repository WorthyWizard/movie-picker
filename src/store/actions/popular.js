import * as actionTypes from './actionTypes';
import TMDB from '../../api/TMDB';

const fetchStart = () => {
  return {
    type: actionTypes.POPULAR_MOVIES_FETCH_START
  }
}

const fetchSuccess = () => {
  return {
    type: actionTypes.POPULAR_MOVIES_FETCH_SUCCESS
  }
}

const fetchFail = (error) => {
  return {
    type: actionTypes.POPULAR_MOVIES_FETCH_FAIL,
    error
  }
}

const setMovies = (movies) => {
  return {
    type: actionTypes.SET_POPULAR_MOVIES,
    movies
  }
}

export const getPopularMovies = () => {
  return dispatch => {
    dispatch(fetchStart());
    TMDB.getPopularMovies().then(data => {
      dispatch(fetchSuccess());
      dispatch(setMovies(data.results))
    }).catch(error => {
      dispatch(fetchFail(error))
    })
  }
}

