import * as actionTypes from '../../../common/actionTypes';
import { axiosMovies } from '../../../axiosInstances';

export const setMovies = (movies) => {
  return {
    type: actionTypes.SET_MOVIES,
    movies
  }
}

export const getMovies = (query) => {
  return dispatch => {
    axiosMovies.get('', {
      params: {
        query
      }
    })
    .then(response => {
      dispatch(setMovies(response.data.results))
    })
  }
}