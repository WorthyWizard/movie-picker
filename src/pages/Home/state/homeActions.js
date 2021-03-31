import * as actionTypes from '../../../common/actionTypes';
import MoviesAPI from '../../../api/MoviesAPI';

export const setMovies = (movies) => {
  return {
    type: actionTypes.SET_MOVIES,
    movies
  }
}

export const getMovies = (query) => {
  return dispatch => {
    MoviesAPI.getMoviesByQuery(query)
    .then(response => {
      dispatch(setMovies(response.data.results))
    })
  }
}