import * as actionTypes from './actionTypes';
import TMDB from '../../api/TMDB';

const fetchStart = () => {
  return {
    type: actionTypes.TOP_RATED_MOVIES_FETCH_START
  }
}

const fetchSuccess = () => {
  return {
    type: actionTypes.TOP_RATED_MOVIES_FETCH_SUCCESS
  }
}

const fetchFail = (error) => {
  return {
    type: actionTypes.TOP_RATED_MOVIES_FETCH_FAIL,
    error
  }
}

const setMovies = (movies) => {
  return {
    type: actionTypes.SET_TOP_RATED_MOVIES,
    movies
  }
}

export const getTopRatedMovies = () => {
  return dispatch => {
    dispatch(fetchStart());
    TMDB.getTopRatedMovies().then(data => {
      dispatch(fetchSuccess());
      dispatch(setMovies(data.results))
    }).catch(error => {
      dispatch(fetchFail(error))
    })
  }
}

