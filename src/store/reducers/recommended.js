import * as actionTypes from '../actions/actionTypes';
import { update } from '../../common/utils';

let initialState = {
  movies: [],
  isLoading: false,
  error: null
}

const setMovies = (state, action) => {
  return update(state, { movies: action.movies })
}

const fetchStart = (state) => {
  return update(state, { isLoading: true })
}

const fetchSuccess = (state) => {
  return update(state, { isLoading: false, error: null })
}

const fetchFail = (state, action) => {
  return update(state, { isLoading: false, error: action.error })
}

const recommendedReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_RECOMMENDED_MOVIES: return setMovies(state, action);
    case actionTypes.RECOMMENDED_MOVIES_FETCH_START: return fetchStart(state, action);
    case actionTypes.RECOMMENDED_MOVIES_FETCH_SUCCESS: return fetchSuccess(state, action);
    case actionTypes.RECOMMENDED_MOVIES_FETCH_FAIL: return fetchFail(state, action);
    default: return state;
  }
}

export default recommendedReducer;