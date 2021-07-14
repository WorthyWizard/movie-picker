import * as actionTypes from '../actions/actionTypes';
import { update } from '../../common/utils';

let initialState = {
  movie: null,
  isLoading: false,
  error: null
}

const setMovie = (state, action) => {
  return update(state, { movie: action.movie })
}

const movieFetchStart = (state) => {
  return update(state, { isLoading: true })
}

const movieFetchSuccess = (state) => {
  return update(state, { isLoading: false, error: null })
}

const movieFetchError = (state, action) => {
  return update(state, { isLoading: false, error: action.error })
}

const singleMovieReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_SINGLE_MOVIE: return setMovie(state, action);
    case actionTypes.SINGLE_MOVIE_FETCH_START: return movieFetchStart(state);
    case actionTypes.SINGLE_MOVIE_FETCH_SUCCESS: return movieFetchSuccess(state);
    case actionTypes.SINGLE_MOVIE_FETCH_FAIL: return movieFetchError(state, action);
    default: return state;
  }
}

export default singleMovieReducer;