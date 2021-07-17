import * as actionTypes from './actionTypes';
import TMDB from '../../api/TMDB';

const fetchStart = () => {
  return {
    type: actionTypes.RECOMMENDED_MOVIES_FETCH_START
  }
}

const fetchSuccess = () => {
  return {
    type: actionTypes.RECOMMENDED_MOVIES_FETCH_SUCCESS
  }
}

const fetchFail = (error) => {
  return {
    type: actionTypes.RECOMMENDED_MOVIES_FETCH_FAIL,
    error
  }
}

const setMovies = (movies) => {
  return {
    type: actionTypes.SET_RECOMMENDED_MOVIES,
    movies
  }
}

export const getRecommendedMovies = (id) => {
  return dispatch => {
    dispatch(fetchStart());
    TMDB.getRecommendedMovies(id).then(data => {
      dispatch(fetchSuccess());
      dispatch(setMovies(data.results))
    }).catch(error => {
      dispatch(fetchFail(error))
    })
  }
}